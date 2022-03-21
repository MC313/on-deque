import React from "react";

import { Global } from "@emotion/react";
import styled from "@emotion/styled";

import { SaveLink } from "@on-deque/feature-save-link";
import { reset } from "@styles";

const StyledApp = styled.div`
  // Your style here
`;

const App = () => {
  return (
    <React.Fragment>
      <Global styles={reset} />
      <StyledApp>
        <SaveLink />
      </StyledApp>
    </React.Fragment>
  );
};

export default App;
