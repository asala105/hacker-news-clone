import moment from "moment";
export const GetTimeDifference = (unixTimestamp) => {
    return moment.unix(unixTimestamp).fromNow()
}

export const UnixTimeToDate = (unixTimestamp) => {
    return moment.unix(unixTimestamp).format('MMMM d, YYYY')
}