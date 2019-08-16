/**
 * 从 min ~ max 中随机 n 个不重复的数
 * @param {Number} min 随机范围最小值（包含此值
 * @param {Number} max 随机范围最大值（不包含此值
 * @param {Number} n 需要n个数
 */
export const randomNoRepeat_N = (min, max, n) => {
    if (min > max) return []
    var len = max - min
    // 生成 [min, ..., max] 的数组
    const arr = Array.from({ length: len }, (v, k) => k + min)
    // 随机排序，取前n个
    return arr.sort(() => Math.random() - 0.5).slice(0, n)
}