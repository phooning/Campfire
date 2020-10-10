use actix_web::{Responder, HttpResponse};
use crate::user::model::User;

pub async fn get_users() -> impl Responder {
    format!("GET_USERS")
}

pub async fn get_user_by_id() -> impl Responder {
    format!("GET_USER_BY_ID")
}

pub async fn add_user() -> impl Responder {
    format!("ADD_USER")
}

pub async fn delete_user() -> impl Responder {
    format!("DELETE_USER")
}
