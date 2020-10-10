mod user;
mod voice;
mod chat;

#[macro_use]
extern crate diesel;

use std::time::{Duration, Instant};

use actix::prelude::*;
use actix_web::{get, Error, post, web, App, HttpResponse, HttpServer, Responder, HttpRequest};
use actix_web_actors::ws;
use diesel::prelude::*;
use diesel::r2d2::{self, ConnectionManager};

use user::route::{get_users, add_user, delete_user, get_user_by_id};

pub type Pool = r2d2::Pool<ConnectionManager<PgConnection>>;

struct AppState {
    app_name: String,
}

#[get("/")]
async fn index(data: web::Data<AppState>) -> String {
    let app_name = &data.app_name;
    format!("Hello {}!", app_name)
}

#[post("/echo")]
async fn echo(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
}

async fn manual_hello() -> impl Responder {
    HttpResponse::Ok().body("Hey there!")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv::dotenv().ok();
    std::env::set_var("RUST_LOG", "actix_web=debug");
    let db_url = std::env::var("DATABASE_URL").expect("DATABASE_URL must be set");

    let manager = ConnectionManager::<PgConnection>::new(db_url);
    let pool: Pool = r2d2::Pool::builder()
        .build(manager)
        .expect("Failed to create pool.");

    HttpServer::new(move || {
        App::new()
            .data(pool.clone())
            .service(index)
            .service(echo)
            .route("/hey", web::get().to(manual_hello))
            .route("/users", web::get().to(get_users))
            .route("/users/{id}", web::get().to(get_user_by_id))
            .route("/users", web::post().to(add_user))
            .route("/users", web::delete().to(delete_user))
    })
        .bind("127.0.0.1:8090")?
        .run()
        .await
}

