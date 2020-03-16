
// 日期格式化
export const dateFormatter = (date, formatter) => {
    date = (date ? new Date(date) : new Date)
    const Y = date.getFullYear() + '',
          M = date.getMonth() + 1,
          D = date.getDate(),
          H = date.getHours(),
          m = date.getMinutes(),
          s = date.getSeconds()
    return formatter.replace(/YYYY|yyyy/g, Y)
                    .replace(/YY|yy/g, Y.substr(2, 2))
                    .replace(/MM/g, (M < 10 ? '0' : '') + M)
                    .replace(/DD/g, (D < 10 ? '0' : '') + D)
                    .replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
                    .replace(/mm/g, (m < 10 ? '0' : '') + m)
                    .replace(/ss/g, (s < 10 ? '0' : '') + s)
}



// 是否同一天
export const isSameDay = (day1, day2) => {
    return day1.setHours(0, 0, 0, 0) === day2.setHours(0, 0, 0, 0)
}

// 是否为今天
export const isToday = day => {
    return isSameDay(new Date(), day)
}
// 是否为明天
export const isTomorrow = date => {
    let tomorrow = new Date(Date.now() + 24 * 3600 * 1000)
    return isSameDay(new Date(tomorrow), date)
}
// 是否为昨天
export const isYestday = date => {
    let curDate = new Date()
    let todayStart = new Date(
        curDate.getFullYear(),
        curDate.getMonth(),
        curDate.getDate()
    ).getTime()
    let yestdayStart = new Date(todayStart - 24 * 3600 * 1000).getTime()

    return date.getTime() < todayStart && yestdayStart <= date.getTime()
}
/**
 * 判断指定某一天 date 是否在range范围内
 * @param {*} day
 * @param {Array} range: [beginDay, endDay]
 */
export const dateIsBetween = (day, range) => {
    if (range[0].getTime() <= day.getTime() && day.getTime() <= range[1].getTime()) {
        return true
    } else return false
}


/**
 * 日期比较，仅仅比较天数
 * @param {*} day1
 * @param {*} day2
 * -1, 0, 1
 */
export const compareDateByDay = (day1, day2) => {
    if (day1.setHours(0, 0, 0, 0) === day2.setHours(0, 0, 0, 0)) return 0;
    else return day1 > day2 ? 1 : -1;
}

/**
 * 判断两个date之间的天数差
 * @param {*} dateInitial 
 * @param {*} dateFinal 
 */
const getDaysDiffBetweenDates = (dateInitial, dateFinal) => (dateFinal - dateInitial) / (1000 * 3600 * 24);


/**
 * 根据某一天，得到相对某一天的日期
 * @param {*} day 
 * @param {*} addDayNum 
 */
export const getDateByAddDay = (day, addDayNum) => {
    let t = new Date(day)
    t.setDate(t.getDate() + addDayNum)
    return t
}