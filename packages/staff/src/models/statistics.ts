import { useState } from "react";
import {
  getWechaMemberMonthDayDetailByMonth,
  getWechaMemberDayCheckDetail,
  getWechaMemberMonthStat,
} from "@/services/checkInStatistics";
import dayjs from "dayjs";
import {EnumApplyStatus,EnumNeedAttendance,EnumApplyType} from '@/const/statistics'

export type WechatMemberDayCheck = {
  attendanceDate: string;
  attendanceStatus: number;
};
//班次
export type Shifts = {
  workStartTime: string; //上班开始时间
  workEndTime: string; //上班结束时间
  offWorkStartTime: string; //下班开始时间
  offWorkEndTime: string; //下班结束时间
  startCurrentTime: string; //最早打卡时间
  endCurrentTime: string; //最晚打卡时间
  attendanceStatus: number; //考勤结果
  missedMinute: number; //迟到分钟数
  lateMinute: number; //早退分钟数
  absenceMinute: number; //缺勤分钟数
  startAttendanceStatus: number; //上班打卡状态  -1 迟到 0.缺卡 1.正常
  endAttendanceStatus: number; //下班打卡状态    -1.早退 0.缺卡 1.正常
  earlySign: string; //上班最早签到时间
  lastSign: string; //下班最晚签到时间
  startNeedAttendanceStatus: EnumNeedAttendance; // 上班是否需要打卡(0.需要打卡 1.无需打卡)
  endNeedAttendanceStatus: EnumNeedAttendance; // 下班是否需要打卡(0.需要打卡 1.无需打卡)
  startApplyStatus: EnumApplyType; //上班是否请假(0.未请假 1.已请假)
  endApplyStatus: EnumApplyType; //下班是否请假(0.未请假 1.已请假)
};
export type ApplyConstruct = {
  applyType:EnumApplyType//申请状态(1.调休假 2.病假 3.年假 4.外出 5.出差)
  duration:string//申请时长
  applyStartTime:string//申请开始时间
  applyEndTime:string//申请结束时间

}
export type WechatMemberDayCheckInDetail = {
  status: number; //今日状态，比如-休假、没有考勤规则、正常
  rangeType: number; //0固定班次 1弹性班次
  attendanceStatus: number; //当日考勤结果考勤结果
  details: Shifts[];
  applys:ApplyConstruct[]
};

export type WechatMemberStatisticsMonthly = {
  arriveDays: number; //应出勤天数
  actualDays: number; //实际出勤天数
  restDays: number; //休息日
  actualWorkHours: number; //工作时长
  normalDays: number; //正常天数
  absenceDays: number; //矿工天数
  abnormalDays: number; //异常天数
  anomalyTotalCount: number; //异常次数
  lateCount: number; //迟到次数
  leaveEarlyCount: number; //早退次数
  lackSignCount: number; //缺卡次数
  absenceCount: number; //缺勤次数
};
export const dateFormat = "YYYY-MM-DD";
export const monthFormat = "YYYY-MM";
export type ViewMode = "day" | "month";
export default function () {
  const [monthlyDayCheckInfo, setMonthlyDayCheckInfo] = useState<
    WechatMemberDayCheck[]
  >([]);
  const [currentDate, setCurrentDate] = useState(dayjs().format(dateFormat));
  const [currentMonth, setCurrentMonth] = useState(dayjs().format(monthFormat));
  const [curMode, setCurMode] = useState<ViewMode>("day");
  return {
    monthlyDayCheckInfo,
    setMonthlyDayCheckInfo,
    currentDate,
    setCurrentDate,
    currentMonth,
    setCurrentMonth,
    curMode,
    setCurMode,
    getMonthStat: getWechaMemberMonthStat,
    getDayCheckDetail: getWechaMemberDayCheckDetail,
    getMonthDayDetailByMonth: getWechaMemberMonthDayDetailByMonth,
  };
}
