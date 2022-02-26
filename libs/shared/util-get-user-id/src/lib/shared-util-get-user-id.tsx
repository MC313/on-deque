import styled from "@emotion/styled";

/* eslint-disable-next-line */
export interface SharedUtilGetUserIdProps {}

const StyledSharedUtilGetUserId = styled.div`
  color: pink;
`;

export function SharedUtilGetUserId(props: SharedUtilGetUserIdProps) {
  return (
    <StyledSharedUtilGetUserId>
      <h1>Welcome to SharedUtilGetUserId!</h1>
    </StyledSharedUtilGetUserId>
  );
}

export default SharedUtilGetUserId;
