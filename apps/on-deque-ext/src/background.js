const onWebSocketInit = (userId) => {
    const WEBSOCKET_BASE_URL = "wss://55sluosluk.execute-api.us-east-1.amazonaws.com";
    return new WebSocket(`${WEBSOCKET_BASE_URL}/dev?userId=${userId}`);
};

chrome.runtime.onMessage.addListener(({ userId }, sender, sendResponse) => {
    // Initialize and create websocket connection here
    let socket = onWebSocketInit(userId);

    socket.onopen = () => {
        const message = "[background.js] Websocket connected.";
        console.log(message);
        sendResponse({ message });
    };

    socket.onmessage = ({ data }) => {
        const notification = JSON.parse(data);
        console.log(`[background.js] Notification received. ${notification}`);
        chrome.notifications.create("", {
            iconUrl: "./assets/icon48.png",
            type: "basic",
            title: "Test Notification",
            message: `Access link here: ${notification.url}`
        });
    };

    socket.onclose = () => console.log("WEBSOCKET CLOSED");
});