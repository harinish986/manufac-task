//function to calculate the mean
export const calculateMean = (data: any[]) => {
    const sum = data.reduce((acc, item) => acc + item, 0);
    return sum / data.length;
};

//function to calculate the median
export const calculateMedian = (data: any[]) => {
    const sortedData = data.slice().sort();
    const middle = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
        return (sortedData[middle - 1] + sortedData[middle]) / 2;
    } else {
        return sortedData[middle];
    }
};

//function to calculate the mode
export const calculateMode = (data: any) => {
    const counts: any = {};
    let maxCount = 0;
    let modes = [];

    for (const item of data) {
        const key = JSON.stringify(item);
        counts[key] = (counts[key] || 0) + 1;
        if (counts[key] > maxCount) {
            maxCount = counts[key];
            modes = [item.toFixed(3)];
        } else if (counts[key] === maxCount) {
            modes.push(item.toFixed(3));
        }
    }

    return modes;
};