/**
 * 统计模块需要的枚举
 */
import intl from "@/locals";

//上班打卡状态的枚举
export enum EnumCheckIn {
  BE_LATE = -1, //迟到
  LACK = 0, //缺卡
  NORMAL = 1, //正常
}
//上班打卡状态的枚举对应的中文
export const checkInStatus: Record<string | number, string> = {
  [EnumCheckIn.BE_LATE]: intl.formatMessage({
    id: "page.statistics.attendance.beLate",
  }),
  [EnumCheckIn.LACK]: intl.formatMessage({
    id: "page.statistics.attendance.lack",
  }),
  [EnumCheckIn.NORMAL]: intl.formatMessage({
    id: "page.statistics.attendance.normal",
  }),
};

//下班打卡状态的枚举
export enum EnumCheckOut {
  LEAVE_EARLY = -1, //早退
  LACK = 0, //缺卡
  NORMAL = 1, //正常
}

//下班打卡状态的枚举对应的中文
export const checkOutStatus: Record<string | number, string> = {
  [EnumCheckOut.LEAVE_EARLY]: intl.formatMessage({
    id: "page.statistics.attendance.leaveEarly",
  }),
  [EnumCheckOut.LACK]: intl.formatMessage({
    id: "page.statistics.attendance.lack",
  }),
  [EnumCheckOut.NORMAL]: intl.formatMessage({
    id: "page.statistics.attendance.normal",
  }),
};

//班次类型对应的枚举
export enum EnumRangeType {
  REGULAR, //固定班次
  ELASTICITY, //弹性班次
}

//今日考勤规则的应用情况
export enum EnumRuleStatus {
  NORMAL, //正常
  REST, //今日休息
  NO_RULE, //未加入考勤规则
  UNKNOWN, //未知
}

//是否需要打卡(0.无需打卡 1.需要打卡)
export enum EnumNeedAttendance{
  YES,//需要打卡
  NO,//无需打卡
}

//是否请假(0.未请假 1.已请假)---已弃用
export enum EnumApplyStatus{
  NOT_LEAVE,//未请假
  LEAVE//请假
}

//申请类型(1.调休假 2.病假 3.年假 4.外出 5.调休)
export enum EnumApplyType{
  TIAOXIUJIA=1,//调休假
  BINGJIA,//病假
  NIANJIA,//年假
  WAICHU,//外出
  CHUCHAI//出差
}

export const applyType = {
  [EnumApplyType.TIAOXIUJIA]: intl.formatMessage({
    id: "page.statistics.tiaoxiu",
  }),
  [EnumApplyType.BINGJIA]: intl.formatMessage({
    id: "page.statistics.bingjia",
  }),
  [EnumApplyType.NIANJIA]: intl.formatMessage({
    id: "page.statistics.nianjia",
  }),
  [EnumApplyType.WAICHU]: intl.formatMessage({
    id: "page.statistics.waichu",
  }),
  [EnumApplyType.CHUCHAI]: intl.formatMessage({
    id: "page.statistics.chuchai",
  }),
}