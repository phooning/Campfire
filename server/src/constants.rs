pub static JOIN_MESSAGES: &[&str] = &[
    "$user joined the club!",
    "$user connected.",
    "Welcome $user. Cheers.",
];

pub enum OpCode {
    Event = 0,
    Heartbeat = 1,
    Identify = 2,
    StatusUpdate = 3,
    VoiceStateUpdate = 4,
    VoiceServerPing = 5,
    Resume = 6,
    Reconnect = 7,
    GetSquadMembers = 8,
    InvalidSession = 9,
    Hello = 10,
    HeartbeatAck = 11,
}

enum_number!(
    OpCode {
        Event,
        Heartbeat,
        Identify,
        StatusUpdate,
        VoiceStateUpdate,
        VoiceServerPing,
        Resume,
        Reconnect,
        GetSquadMembers,
        InvalidSession,
        Hello,
        HeartbeatAck,
    }
);