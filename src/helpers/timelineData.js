export const START_LEARNING = [
    {
        name: 'HTML & CSS',
        date: new Date('03-01-2021'),
    },
    {
        name: 'JavaScript',
        date: new Date('06-01-2021'),
    },
    {
        name: 'React',
        date: new Date('11-01-2021'),
    },
    {
        name: 'TypeScript',
        date: new Date('07-01-2022'),
    },
];

const addPluralFormEnding = (number) => (number > 1 ? 's' : '');

const timeSince = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
        return interval + ' year' + addPluralFormEnding(interval);
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + ' month' + addPluralFormEnding(interval);
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + ' day' + addPluralFormEnding(interval);
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + ' hour' + addPluralFormEnding(interval);
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + ' minute' + addPluralFormEnding(interval);
    }
    return Math.floor(seconds) + ' second' + addPluralFormEnding(interval);
};

export default timeSince;
