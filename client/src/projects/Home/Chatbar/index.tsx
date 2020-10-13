import React, { ReactElement } from "react";
import styled from "styled-components";
import Input from "../../../components/Input";

const ChatbarWrapper = styled.div`
  padding: 25px 35px 60px;
`;

const ChatbarInputContainer = styled.div`
  position: relative;
  padding-right: 30px;
  margin-bottom: 40px;
`;

interface ChatbarProps {
  onChange: () => void;
}

const Chatbar = ({ onChange }: ChatbarProps): ReactElement => {
  return (
    <ChatbarWrapper>
      <ChatbarInputContainer>
        <Input onChange={onChange} />
      </ChatbarInputContainer>
    </ChatbarWrapper>
  );
};

export default Chatbar;
