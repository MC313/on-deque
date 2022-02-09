import styled from '@emotion/styled';
import { Button } from '@on-deque/ui-button';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      {/* <NxWelcome title="on-deque-web" /> */}
      <Button />
    </StyledApp>
  );
}

export default App;
