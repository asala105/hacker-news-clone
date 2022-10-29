import moment from "moment";
export const GetTimeDifference = (unixTimestamp) => {
    return moment.unix(unixTimestamp).fromNow()
}