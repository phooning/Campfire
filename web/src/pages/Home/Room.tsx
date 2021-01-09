import React, { ReactElement } from "react";
import { Button, Grid, Header } from "semantic-ui-react";

interface IRoom {
  onPress: () => void;
}

const Room = ({ onPress }: IRoom): ReactElement => {
  return (
    <Grid.Row columns={5}>
      <Grid.Column floated="left">
        <Header as="h3">Messages</Header>
      </Grid.Column>
      <Grid.Column floated="right" textAlign="right">
        <Button color="red" onClick={onPress}>
          Disconnect
        </Button>
      </Grid.Column>
    </Grid.Row>
  );
};

export default Room;
