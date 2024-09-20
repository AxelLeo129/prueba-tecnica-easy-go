/**
 * Formatea una fecha dada en formato 'YYYY-MM-DD'.
 * 
 * @param {string} date - La fecha en formato 'YYYY-MM-DD'.
 * @returns {string} - La fecha formateada en el mismo formato 'YYYY-MM-DD'.
 * 
 * @example
 * const formattedDate = formatDate('2024-09-19');
 * console.log(formattedDate); // Output: '2024-09-19'
 */
export const formatDate = (date: string): string => {
    const splitDate = date.split('-');
    return `${splitDate[0]}-${splitDate[1]}-${splitDate[2]}`
} 