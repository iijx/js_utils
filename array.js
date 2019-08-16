
/** 生成指定长度的数组
 * @param {*} len 数组长度
 * genArrayByLen(10)  => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 */
export const genArrayByLen = len => [...new Array(len).keys()];



/**
 * 生成长度为len，值全部为value的数组
 */
export const genArrayByLenAsValue = (len, value) => {
    const ret = []
    for (let i = 0; i < len; i++) {
        ret[i] = value
    }
    return ret
}


// 去重数组
export const uniqueList = list => [...new Set(list)];

// 数组按指定方式去重
export const uniqueElementsBy = (arr, fn) =>
    arr.reduce((acc, v) => {
    if (!acc.some(x => fn(v, x))) acc.push(v);
    return acc;
}, []);


// 判断参数是否是其中之一
export const oneOf = (value, validList) => {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true
        }
    }
    return false
}

