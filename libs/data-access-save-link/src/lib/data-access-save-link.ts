import { API } from "aws-amplify";
import aws_exports from "src/aws-exports";

API.configure(aws_exports);

export const saveLink = async <T>(payload: T) => {
  const response = API.post("LinksLockerAPI", "/link", {
    body: payload,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  return response;
};
