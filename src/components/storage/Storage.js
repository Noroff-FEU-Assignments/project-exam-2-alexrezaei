const tokenKey = "token";
const userKey = "user";
const avatarKey = "avatar"

export function saveToken(token) {
    saveToStorage(tokenKey, token);
}

export function getToken() {
    return getFromStorage(tokenKey);
}

export function getUser() {
    return getFromStorage(userKey);
}

export function saveUser(user) {
    saveToStorage(userKey, user);
}

export function saveAvatar(avatar) {
    saveToStorage(avatarKey, avatar)
}

export function getAvatar() {
    return getFromStorage(avatarKey)
}

export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getFromStorage(key) {
    const value = localStorage.getItem(key);
    if (!value) {
        return [];
    }

    return JSON.parse(value);
}
