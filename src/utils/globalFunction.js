const keyData = "base-folder-setup";

export const sessionStorageSetItem = (item) => {
    sessionStorage.setItem(keyData, JSON.stringify(item));
};

// Retrieve item from session storage
export const sessionStorageGetItem = () => {
    const data = sessionStorage.getItem(keyData);
    return data ? JSON.parse(data) : null;
};

// Remove item from session storage
export const sessionStorageRemoveItem = () => {
    sessionStorage.removeItem(keyData);
};

export const localStorageSetItem = (item) => {
    localStorage.setItem(keyData, JSON.stringify(item));
};

// Retrieve item from localStorage
export const localStorageGetItem = () => {
    const data = localStorage.getItem(keyData);
    return data ? JSON.parse(data) : null;
};

// Remove item from localStorage
export const localStorageRemoveItem = () => {
    localStorage.removeItem(keyData);
};

export const getRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
};

export const formatChatDate = (sentAt) => {
    const messageDate = new Date(sentAt);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const isToday = messageDate.toDateString() === today.toDateString();
    const isYesterday = messageDate.toDateString() === yesterday.toDateString();
    const isThisWeek =
        messageDate > new Date(today.setDate(today.getDate() - today.getDay()));

    if (isToday) return `Today`;
    if (isYesterday) return `Yesterday`;
    if (isThisWeek) {
        return `${messageDate.toLocaleDateString("en-US", { weekday: "long" })}`;
    }

    return messageDate.toLocaleDateString("en-GB");
};