import { AppType } from "../../../app-type";

declare const chrome: any;

export const setUserId = (appType: AppType) => {
  const userId = `GUEST_${Date.now()}`;
  switch (appType) {
    case "EXTENSION":
      chrome.storage.local.set({ userId }, () => userId);
      break;
    case "WEB":
      localStorage.setItem("userId", userId);
      break;
    default:
      return null;
  }
};
