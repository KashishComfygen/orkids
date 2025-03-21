import axios from 'axios';
import { io } from 'socket.io-client';
import { sessionStorageGetItem, sessionStorageRemoveItem } from './globalFunction';

const isLive = true;

export const apiUrl = isLive ? 'https://dreamwin.3cchain.io/api/v1/' : 'http://localhost:3600/api/v1/';
export const socketApiUrl = isLive ? 'https://dreamwin.3cchain.io/socket' : 'http://localhost:3600/socket';

const axiosPublic = axios.create({
    baseURL: apiUrl,
    headers: { "Content-Type": "application/json" },
});

axiosPublic.interceptors.response.use(
    (response) => response,
    (error) => {
        if (!error.response) {
            return Promise.reject({ message: "Network error. Please try again." });
        }
        switch (error.response.status) {
            case 500:
                return Promise.reject({ message: "Internal server error. Please try again later." });
            default:
                return Promise.reject(error.response.data);
        }
    }
);

const axiosPrivate = axios.create({
    baseURL: apiUrl,
    headers: { "Content-Type": "application/json" },
});

axiosPrivate.interceptors.request.use(
    (config) => {
        const returnData = sessionStorageGetItem();
        if (returnData?.token) {
            config.headers["Authorization"] = `Bearer ${returnData.token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosPrivate.interceptors.response.use(
    (response) => {
        if (response?.data?.code === 3) {
            sessionStorageRemoveItem();
            window.location.href = "/login";
        }
        return response;
    },
    (error) => {
        if (!error.response) {
            return Promise.reject({ message: "Network error. Please try again." });
        }
        switch (error.response.status) {
            case 401:
                sessionStorageRemoveItem();
                window.location.href = "/login";
                break;
            case 403:
                return Promise.reject({ message: "Access denied. Insufficient permissions." });
            case 500:
                return Promise.reject({ message: "Internal server error. Please try again later." });
            default:
                return Promise.reject(error.response.data);
        }
    }
);

const axiosImage = axios.create({
    baseURL: apiUrl,
    headers: { 'Content-Type': 'multipart/form-data' },
});

axiosImage.interceptors.request.use(
    (config) => {
        const returnData = sessionStorageGetItem();
        if (returnData?.token) {
            config.headers['Authorization'] = `Bearer ${returnData.token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

let socket = null;

const initializeSocket = () => {
    const decryptDataSession = sessionStorageGetItem();
    const token = decryptDataSession?.token ? `Bearer ${decryptDataSession.token}` : null;
    if (!token) {
        console.error('Authorization token is missing.');
        return;
    }
    socket = io(socketApiUrl, { auth: { token }, autoConnect: false });
};

export const reconnectSocket = () => {
    initializeSocket();
};

export const socketConnection = () => {
    if (!socket) {
        initializeSocket();
    }
    if (socket && !socket.connected) {
        socket.connect();
    }
    return socket;
};

export const connectSocket = (chatId) => {
    const socket = socketConnection();
    if (socket) {
        socket.emit('connected', { chatId });
    }
};

export const disconnectSocket = () => {
    if (socket && socket.connected) {
        socket.disconnect();
    }
};

export { axiosPrivate, axiosPublic, axiosImage };