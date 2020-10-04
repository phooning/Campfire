use audiopus::{Bitrate, SampleRate};
use std::{
    sync::Arc,
    time::Duration,
};


pub struct Audio {
    pub playing: bool,
    pub volume: f32,
    pub finished: bool,
}