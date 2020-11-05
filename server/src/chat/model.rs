use serde::{Deserialize, Serialize};
use uuid::Uuid;
use chrono::NaiveDateTime;

#[derive(Deserialize, Serialize, Queryable)]
pub struct Campfire {
    pub id: i32,
    pub ro: bool,
    pub name: String,
    pub owner: String,
    pub created_at: chrono::NaiveDateTime,
    pub updated_at: chrono::NaiveDateTime,
}

#[derive(Insertable, Debug)]
#[table_name = "campfires"]
pub struct NewCampfire<'a> {
    pub name: &'a str,
    pub owner: &'a str,
    pub created_at: chrono::NaiveDateTime,
    pub updated_at: &'a chrono::NaiveDateTime,
}
