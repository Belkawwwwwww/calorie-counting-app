export const handleResponse = (response: unknown, scheme: any) => {
    const parsedResponse = scheme.parse(response);
    if (parsedResponse.response_status === 0) {
        return {
            response_status: parsedResponse.response_status,
            data: parsedResponse.data,
            error: parsedResponse.error,
        };
    } else {
        throw new Error(parsedResponse.error || 'Неизвестная ошибка');
    }
};
