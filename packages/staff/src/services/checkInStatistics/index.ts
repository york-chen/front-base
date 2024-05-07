/**
 * 考勤统计
 */
import {request as axiosRequest} from "@hcy-frontend/utils";
import type {
  WechatMemberDayCheckInDetail,
  WechatMemberStatisticsMonthly,
  WechatMemberDayCheck,
} from "@/models/statistics";
import type { WechatMemberInfo } from "@/models/user";

/**
 * 获取企业微信员工对应的考勤数据
 * @param params
 * code string 企业微信code码
 * @returns
 */
export async function getWechatMemberInfo(params: { code: string }) {
  return axiosRequest<WechatMemberInfo & { dayDetail: WechatMemberDayCheck[] }>(
    "/wechat/getMemberInfo",
    {
      method: "get",
      params,
      // skipErrorHandler: true,
    }
  );
}

/**
 * 根据手机号码获取员工对应的考勤数据
 * @param params
 * code string 员工手机号码
 * @returns
 */
export async function getMemberInfoByPhone(params: { code: string }) {
  return axiosRequest<WechatMemberInfo & { dayDetail: WechatMemberDayCheck[] }>(
    "/wechat/getMemberInfoByPhone",
    {
      method: "get",
      params:{
        phone:params.code
      },
      // skipErrorHandler: true,
    }
  );
}

/**
 * 获取企业微信员工某天的考勤数据
 * @param params
 * memberId string 人员id
 * memberDate string 考勤日期 示例值:2024-01-22
 * @returns
 */
export async function getWechaMemberDayCheckDetail(
  params: Pick<WechatMemberInfo, "memberId"> & {
    memberDate: string;
  }
) {
  return axiosRequest<WechatMemberDayCheckInDetail>("/wechat/getDetail", {
    method: "get",
    params,
  });
}

/**
 * 获取考勤成员的月统计数据
 * @param params
 * memberId string 人员id
 * memberMonth string 考勤日期 示例值:2024-01
 * @returns
 */
export async function getWechaMemberMonthStat(
  params: Pick<WechatMemberInfo, "memberId"> & {
    memberMonth: string;
  }
) {
  return axiosRequest<WechatMemberStatisticsMonthly>("/wechat/getDetailMonth", {
    method: "get",
    params,
  });
}

/**
 * 获取成员一个月的日明细
 * @param params
 * memberId string 人员id
 * memberMonth string 考勤日期 示例值:2024-01
 * @returns
 */
export async function getWechaMemberMonthDayDetailByMonth(
  params: Pick<WechatMemberInfo, "memberId"> & {
    memberMonth: string;
  }
) {
  return axiosRequest<WechatMemberDayCheck[]>("/wechat/getDetailDayMonth", {
    method: "get",
    params,
  });
}
