mod user;
mod voice;
mod chat;

extern crate diesel;

use std::time::{Duration, Instant};

use actix::prelude::*;
use actix_web::{get, Error, post, web, App, HttpResponse, HttpServer, Responder, HttpRequest};
use actix_web_actors::ws;
use diesel::prelude::*;
use diesel::r2d2::{self, ConnectionManager};

use user::route::{get_users, add_user, delete_user, get_user_by_id};

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
    HttpServer::new(|| {
        App::new()
            .data(AppState {
                app_name: String::from("Campfire"),
            })
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

