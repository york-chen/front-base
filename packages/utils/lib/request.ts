import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Toast } from "react-vant";
// import intl from '@/locals'
import { Dialog } from "react-vant";

// const txtError = intl.formatMessage({id:'valid.error'})// 出错了
// const txtNotInSystem = intl.formatMessage({id:'valid.notInSystem'})// 抱歉，您还未在系统录入，暂无数据

const txtError = "出错了"; // 出错了
const txtNotInSystem = "抱歉，您还未在系统录入，暂无数据"; // 抱歉，您还未在系统录入，暂无数据

type RestfulResult<T> = {
  code: string;
  msg?: string;
  data: T;
  status: boolean;
};
const instance = axios.create({
  timeout: 10 * 1000,
  baseURL: process.env.PROJECT_MODE?.includes("local_app")
    ? `${process.env.api_domain}/api`
    : "/api",
});

instance.interceptors.request.use((config) => {
  config.headers["tenant_id"] = 2;
  return config;
});
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    Toast.info(txtError);
    return Promise.reject(error);
  }
);

//出现错误的提示方式
enum TipType {
  Dialog,
  Toast,
}
const errorCodeMap = new Map([
  ["3006", { msg: txtNotInSystem, tipType: TipType.Dialog }],
]);
export function request<T>(
  url: string,
  options: AxiosRequestConfig
): Promise<[any, T | null]> {
  options.url = url;
  return new Promise((resolve) => {
    instance
      .request(options)
      .then((res: AxiosResponse<RestfulResult<T>>) => {
        if (res.data.code !== "0000") {
          if (!res.config.skipErrorHandler) {
            let code = res.data.code;
            if (errorCodeMap.has(code)) {
              let info = errorCodeMap.get(code);
              if (info && info.tipType === TipType.Dialog) {
                Dialog.alert({
                  message: info.msg,
                });
              } else if (info && info.tipType === TipType.Toast) {
                Toast.info(info.msg);
              }
            } else {
              Toast.info(res.data.msg || txtError);
            }
          }
          resolve([res.data.data || "error", null]);
        } else {
          resolve([null, res.data.data]);
        }
      })
      .catch((error) => {
        resolve([error, null]);
      });
  });
}

export default request
