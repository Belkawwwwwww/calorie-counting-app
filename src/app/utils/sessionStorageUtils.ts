// sessionStorageUtils.ts
export const getFromSessionStorage = (key: string) => {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
};

export const setInSessionStorage = (key: string, value: any) => {
    sessionStorage.setItem(key, JSON.stringify(value));
};

export const removeFromSessionStorage = (key: string) => {
    sessionStorage.removeItem(key);
};
