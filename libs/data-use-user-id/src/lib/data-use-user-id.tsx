import React from "react";

const isExtension = (): boolean => !!document.querySelector(".extension");
const appType = isExtension() ? "EXTENSION" : "WEB";
console.warn("APP TYPE: ", appType);

export const useUserId = (): [string, (userId: string) => void] => {
  let userId: string = getUserId();
  if (!userId) {
    const _userId = `GUEST_${Date.now()}`;
    setUserId(_userId);
    userId = _userId;
  }
  return [userId, setUserId];
};

const getUserId = (): string => {
  type UserId = { userId: string };
  let _userId = "";

  switch (appType) {
    case "EXTENSION":
      // @ts-ignore: saying 'chrome' is not found
      chrome.storage.local.get(
        ["userId"],
        ({ userId }: UserId) => (_userId = userId)
      );
      break;
    case "WEB":
      _userId = localStorage.getItem("userId") || "";
      break;
  }
  return _userId;
};

const setUserId = (userId: string) => {
  const _userId = userId;
  switch (appType) {
    case "EXTENSION":
      // @ts-ignore: saying 'chrome' is not found
      chrome.storage.local.set({ userId: _userId });
      break;
    case "WEB":
      localStorage.setItem("userId", _userId);
      break;
  }
};
