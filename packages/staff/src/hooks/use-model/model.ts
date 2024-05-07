import statistics from '@/models/statistics';

export const models = {
statistics: { namespace: 'statistics', model: statistics },
} as const

// const loadFileFn = require.context("@/models", false, /\.ts$/)
// const temp = {}
// loadFileFn.keys().forEach(key=>{
//     let name =  key.slice(key.lastIndexOf('/')+1,key.lastIndexOf('.'))
//     temp[name] = {
//         model:loadFileFn(key).default,
//         namespace:name
//     }
// })

// export const models = {...temp} as const
