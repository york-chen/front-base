//扩展axios的声明

import {AxiosRequestConfig} from 'axios'
declare module 'axios'{
    interface AxiosRequestConfig{
        skipErrorHandler?:boolean
    }
}