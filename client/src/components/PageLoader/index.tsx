import React, { ReactElement } from "react";

import styled from "styled-components";

const PageLoaderContainer = styled.div`
  width: 100%;
  padding: 200px 0;
  text-align: center;
`;

const PageLoader = (): ReactElement => (
  <PageLoaderContainer>
    <p>Loading</p>
  </PageLoaderContainer>
);

export default PageLoader;
