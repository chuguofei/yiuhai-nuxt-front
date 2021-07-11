/**
 * 获取随机颜色
 * @returns 
 */
export function getRandomColor() {
    let colorsArr = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#f39c12', '#d35400', '#c0392b', '#bdc3c7', '#cd84f1', '#ffcccc', '#33d9b2', '#ff793f', '#cd6133'];
    let result = colorsArr[Math.floor(Math.random() * colorsArr.length)];
    return result;
}

/**
 * 随机生成RGB颜色
 * @returns  
 */
export function getRandomRGB() {
    var r = Math.floor(Math.random() * 256); //随机生成256以内r值
    var g = Math.floor(Math.random() * 256); //随机生成256以内g值
    var b = Math.floor(Math.random() * 256); //随机生成256以内b值
    return `rgb(${r},${g},${b})`; //返回rgb(r,g,b)格式颜色
}