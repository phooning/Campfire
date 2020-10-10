import React, { ReactElement } from "react";
import styled from "styled-components";
import { color, font, mixin, sizes, zIndexValues } from "../../../styles";

const SidebarWrapper = styled.div`
  position: fixed;
  z-index: ${zIndexValues.navLeft - 1};
  top: 0;
  left: ${sizes.appNavBarLeftWidth}px;
  height: 100vh;
  width: ${sizes.secondarySideBarWidth}px;
  padding: 0 16px 24px;
  background: ${color.backgroundLightest}:;
  border-right: 1px solid ${color.borderLightest};
  ${mixin.scrollableY}
  ${mixin.customScrollbar()}
  @media (max-width: 1100px) {
    width: ${sizes.secondarySideBarWidth - 10}px;
  }
  @media (max-width: 999px) {
    display: none;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  padding: 24px 4px;
`;

const InfoTextWrapper = styled.div`
  padding: 3px 0 0 10px;
`;

const Info = styled.div`
  color: ${color.textLight};
  ${font.size(15)};
  ${font.bold};
`;

const Sidebar = (): ReactElement => {
  return (
    <SidebarWrapper>
      <InfoWrapper>
        <InfoTextWrapper>
          <Info>Session Info</Info>
        </InfoTextWrapper>
      </InfoWrapper>
    </SidebarWrapper>
  );
};

export default Sidebar;
