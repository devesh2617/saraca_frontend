export function objectToFormData(obj:any) {
    const formData = new FormData();

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            const trimmedValue = typeof value === 'string' ? value.trim() : value;
            formData.append(key, trimmedValue);
        }
    }

    return formData;
}
