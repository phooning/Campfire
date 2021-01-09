import React, { ReactElement } from "react";
import { Button, Grid, Header } from "semantic-ui-react";

interface IRoomsList {
  name: string;
  onPress: () => void;
}

const RoomsList = ({ name, onPress }: IRoomsList): ReactElement => (
  <Grid.Row columns={5}>
    <Grid.Column floated="left">
      <Header as="h4">{name}</Header>
    </Grid.Column>
    <Grid.Column floated="right" textAlign="right">
      <Button onClick={onPress}>Join</Button>
    </Grid.Column>
  </Grid.Row>
);

export default RoomsList;
