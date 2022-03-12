import axios from 'axios'

// ajax 核心 XMLHttpRequest
// fetch 问题：兼容性+api比较原始 


const http = axios.create({
    baseURL: 'https://elm.cangdu.org',
    timeout: 10000,
})

// lbs 核心 latitude longitude
// address 文本 不能进行距离计算 通过经纬度 

export const searchPlace = (cityid, address) => new Promise((resolve, reject) => {
    const url = `/v1/pois?type=search&city_id=${cityid}&keyword=${address}`
    http.get(url).then(res => {
        resolve(res.data)
    })
})

export const currentCity = (cityid) => new Promise((resolve, reject) => {
    const url = `/v1/cities/${cityid}`
    http.get(url).then(res => {
        resolve(res)
    })
})

export const msiteFoodTypes = (geohash) => new Promise((resolve, reject) => {
    http.get(`/v2/index_entry`, {
        geohash,
        group_type: '1',
        'flags[]': 'F',
    }).then(res => resolve(res.data))
})



// ---------------------------------------------------------------


export const cityGuess = () => new Promise((resolve, reject) => {
    fetch('https://elm.cangdu.org/v1/cities?type=guess')
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err))
})

export const hotCity = () => new  Promise((resolve, reject) => {
    fetch('https://elm.cangdu.org/v1/cities?type=hot')
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err))
})

export const getCaptchas = () => new Promise((resolve, reject) => {
    fetch('https://elm.cangdu.org/v1/captchas', {
        method: 'POST',
        body: {
            headers: {
                'Accept': 'application/json',
                'Content': 'application/json',
            }
        }
    })
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err))
})

// export const currentCity = () => new  Promise((resolve, reject) => {
//     fetch('https://elm.cangdu.org/v1/cities?type=hot')
//     .then(res => res.json())
//     .then(data => resolve(data))
//     .catch(err => reject(err))
// })