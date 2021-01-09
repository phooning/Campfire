import React, { ReactElement, useState } from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import { ROOMS, TRoom } from "../../data";
import RoomsList from "./RoomsList";
import Room from "./Room";
import ChatInput from "./ChatInput";

const Home = (): ReactElement => {
  const [currentRoom, setCurrentRoom] = useState<TRoom>();

  const onPressJoinRoom = (room: TRoom) => {
    setCurrentRoom(room);
  };

  const onPressDisconnectRoom = () => {
    setCurrentRoom(undefined);
  };

  return (
    <Container style={{ marginTop: "3em" }}>
      <Header as="h1">Campfire</Header>
      <Header as="h2" dividing>
        {currentRoom ? currentRoom.name : "Rooms"}
      </Header>
      <Grid>
        {currentRoom ? (
          <Room onPress={onPressDisconnectRoom} />
        ) : (
          ROOMS.map((room) => (
            <RoomsList
              key={room.id}
              name={room.name}
              onPress={() => onPressJoinRoom(room)}
            />
          ))
        )}
      </Grid>
      {currentRoom && <ChatInput />}
    </Container>
  );
};

export default Home;
