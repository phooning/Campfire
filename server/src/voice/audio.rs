use audiopus::{Bitrate, SampleRate};
use std::{
    sync::Arc,
    time::Duration,
};

pub const HEADER_LEN: usize = 12;
pub const SAMPLE_RATE: SampleRate = SampleRate::Hz48000;
pub const DEFAULT_BITRATE: Bitrate = Bitrate::BitsPerSecond(128_000);

pub struct Audio {
    pub playing: bool,
    pub volume: f32,
    pub finished: bool,
    pub position: Duration,
    pub position_modified: bool,
}

impl Audio {
    pub fn volume(&mut self, volume: f32) -> &mut Self {
        self.volume = volume;
        self
    }

    pub fn position(&mut self, position: Duration) -> &mut Self {
        self.position = position;
        self.position_modified = true;
        self
    }
}