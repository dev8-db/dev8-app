export function formatDateDifference(postDate) {
    const currentDate = new Date();
    const differenceInSeconds = Math.floor((currentDate - postDate) / 1000);

    if (differenceInSeconds < 60) {
        return `${differenceInSeconds}秒前`;
    } else if (differenceInSeconds < 3600) {
        return `${Math.floor(differenceInSeconds / 60)}分前`;
    } else if (differenceInSeconds < 86400) {
        return `${Math.floor(differenceInSeconds / 3600)}時間前`;
    } else if (differenceInSeconds < 604800) {
        return `${Math.floor(differenceInSeconds / 86400)}日前`;
    } else if (differenceInSeconds < 2592000) {
        return `${Math.floor(differenceInSeconds / 604800)}週間前`;
    } else if (differenceInSeconds < 31536000) {
        return `${Math.floor(differenceInSeconds / 2592000)}ヶ月前`;
    } else {
        return `${Math.floor(differenceInSeconds / 31536000)}年前`;
    }
}
