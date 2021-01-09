import React, { ReactElement } from "react";
import { Input, Menu } from "semantic-ui-react";

const ChatInput = (): ReactElement => (
  <Menu fixed="bottom" secondary fluid widths={1}>
    <Menu.Item>
      <Input
        action={{ type: "submit", content: "Send" }}
        placeholder="Type a message"
      />
    </Menu.Item>
  </Menu>
);

export default ChatInput;
