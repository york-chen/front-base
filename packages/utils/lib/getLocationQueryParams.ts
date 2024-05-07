/**
 * 
 * @returns 获取浏览器地址栏的查询参数
 * 支持获取哈希参数
 */
export function getLocationSearch(){
    let search = window.location.search.slice(1)
    let hash = window.location.hash.includes('?')? window.location.hash.slice(window.location.hash.indexOf('?')+1):''
    return new URLSearchParams(search||hash)
}

export default getLocationSearch