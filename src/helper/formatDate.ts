/**
 *
 * @param timeString - time string
 * @returns return string of formatted date
 */
export const formatDate = (timeString: string) => {
    const date = new Date(timeString);

    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });
};
