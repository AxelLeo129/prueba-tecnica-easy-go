export const formatDate = (date: string): string => {
    const splitDate = date.split('-');
    return `${splitDate[0]}-${splitDate[1]}-${splitDate[2]}`
} 