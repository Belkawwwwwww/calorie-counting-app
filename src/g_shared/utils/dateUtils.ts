export const getFormattedDate = (): string => {
    const today = new Date();
    return today.toISOString().split('T')[0];
};
