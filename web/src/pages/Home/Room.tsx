import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Button, Grid, Header } from "semantic-ui-react";

interface IRoom {
  onPress: () => void;
}

const Room = ({ onPress }: IRoom): ReactElement => {
  const refClientA = useRef<RTCPeerConnection>(new RTCPeerConnection());
  const refClientB = useRef<RTCPeerConnection>(new RTCPeerConnection());
  const refSelfMediaStream = useRef<MediaStream | null>(null);
  const refSelfVideo = useRef<HTMLVideoElement | null>(null);
  const [peer, setPeer] = useState(false);

  useEffect(() => {
    const clientA = refClientA.current;
    const clientB = refClientB.current;
  }, []);

  const getUserMedia = async () => {
    refSelfMediaStream.current = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { width: 320 },
    });
  };

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
