export function objectToFormData(obj:any) {
    const formData = new FormData();

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            let trimmedValue
            
            trimmedValue = typeof value === 'string' ? value.trim() : value;
            if(value instanceof FileList){
                for(let j=0;j<Array.from(value).length;j++) {
                    formData.append(key,value[j])
                }
            }
            else formData.append(key, trimmedValue);
        }
    }

    return formData;
}
