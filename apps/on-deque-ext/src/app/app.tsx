import React from "react";

import { Global } from "@emotion/react";
import styled from "@emotion/styled";

import { SaveLink } from "@on-deque/feature-save-link";
import { onStorage } from "@on-deque/data-use-user-id";
import { reset } from "@styles";

const isExtension = !!document.querySelector(".extension");
const appType = isExtension ? "EXTENSION" : "WEB";

const App = () => {
  const id = `GUEST_${Date.now()}`;
  onStorage.set("userId", id);

  React.useEffect(() => {
    if (appType === "EXTENSION") {
      const userId = onStorage.get("userId");
      const message = { type: "WEBSOCKET_INIT", userId };
      // @ts-ignore: saying 'chrome' is not found
      chrome.runtime.sendMessage(message);
    }
  }, []);

  return (
    <React.Fragment>
      <Global styles={reset} />
      <div>
        <SaveLink />
      </div>
    </React.Fragment>
  );
};

export default App;
