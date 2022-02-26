import { API } from "aws-amplify";

export const saveLink = async <T>(payload: T) => {
  const response = API.post("LinksLockerAPI", "/link", {
    body: payload,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return response;
};
