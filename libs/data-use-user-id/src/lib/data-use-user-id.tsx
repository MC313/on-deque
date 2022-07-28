import React from "react";

const isExtension = (): boolean => !!document.querySelector(".extension");
const appType = isExtension() ? "EXTENSION" : "WEB";

export const useUserId = (initialId?: string): [string, SetUserId] => {
  const onStorage = appType === "WEB" ? onLocalStorage : onExtensionStorage;
  const [userId, setUserId] = React.useState(() => {
    if (initialId) {
      onStorage.set("userId", initialId);
      return initialId;
    }
    const currentUserId = onStorage.get("userId");
    return currentUserId;
  });

  // const setId = (userId: string) => {
  //   if (!userId) {
  //     console.warn("Error setting userId. Invalid userId");
  //     return;
  //   }
  //   const currentUserId = onStorage.get("userId");
  //   console.log("CURRENT: ", currentUserId);
  //   console.log("UserId: ", userId);
  //   if (currentUserId !== userId) {
  //     setUserId(userId);
  //   }
  // };

  React.useEffect(() => {
    onStorage.set("userId", userId);
  }, [userId]);

  return [userId, setUserId];
};

const onLocalStorage = {
  get: function (key: string) {
    if (!window || typeof window === "undefined") return;
    const item = window.localStorage.getItem(key) as string;
    return JSON.parse(item);
  },
  set: function (key: string, value: string) {
    if (!window || typeof window === "undefined") return;
    window.localStorage.setItem(key, JSON.stringify(value));
  },
};

const onExtensionStorage = {
  id: "",
  get: function (key: string) {
    // @ts-ignore: saying 'chrome' is not found
    if (!chrome || typeof chrome === "undefined") return;
    // @ts-ignore: saying 'chrome' is not found
    chrome.storage.local.get([key], ({ userId }: UserId) => {
      this.id = userId;
    });
    console.log(`[STORAGE]: Getting userId ${this.id}`);
    return this.id;
  },
  set: function (key: string, value: string) {
    // @ts-ignore: saying 'chrome' is not found
    if (!chrome || typeof chrome === "undefined") return;
    // @ts-ignore: saying 'chrome' is not found
    chrome.storage.local.set({ [key]: value }, () => {
      console.log(`[STORAGE]: Setting userId ${value}`);
    });
  },
};

type UserId = { userId: string };
type SetUserId = (userId: string) => void;

const onStorage = appType === "WEB" ? onLocalStorage : onExtensionStorage;

export { onStorage };
