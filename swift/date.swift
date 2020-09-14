

// 获取当前是一年中的第几周
func getWeekIndexOfYear {
    return calendar.component(.weekOfYear, from: Date.init(timeIntervalSinceNow: 0))
}