/*
 * @Author: Li Quanlin
 * @Date: 2024-03-23 21:42:45
 * @LastEditTime: 2024-03-27 18:33:41
 * @LastEditors: Li Quanlin
 * @Description: 人流统计的api
 * @FilePath: \jeecgboot-vue3\src\views\attendance_information\peopleCounting\peopleCounting.api.ts
 */
import {defHttp} from '/@/utils/http/axios';

enum Api {
    trafficList= '/attendance_details/attendanceDetails/queryTraffic',
    arrivalMonthList='/attendance_details/attendanceDetails/queryArrivalMonth',
    arrivalDayList='/attendance_details/attendanceDetails/queryArrivalDay',
    lateDayList='/attendance_details/attendanceDetails/queryLateDay',
    overtimeYesterdayList='/attendance_details/attendanceDetails/queryOvertimeYst',
    arrivalMonthRate='/attendance_details/attendanceDetails/queryArrivalMonthRate',
    arrivalDayRate='/attendance_details/attendanceDetails/queryArrivalDayRate',
    arrivalLateRate='/attendance_details/attendanceDetails/queryLateRate',
    overtimeYstRate='/attendance_details/attendanceDetails/queryOvertimeYstRate',

}

/**
 * 本日出勤列表接口
 * @param params
 */
export const arrivalDayList = (params) =>
  defHttp.get({url: Api.arrivalDayList, params});

  /**
 * 查看某日人流量接口
 * @param params
 */
export const trafficList = (params) =>
    defHttp.get({url: Api.trafficList, params});

/**
 * 本月出勤列表接口
 * @param params
 */
export const arrivalMonthList = (params) =>
  defHttp.get({url: Api.arrivalMonthList, params});

  /**
 * 今日迟到接口
 * @param params
 */
export const lateDayList = (params) =>
defHttp.get({url: Api.lateDayList, params});

/**
 * 昨日加班接口
 * @param params
 */
export const overtimeYesterdayList = (params) =>
  defHttp.get({url: Api.overtimeYesterdayList, params});

/**
 * @description: 本月出勤率
 * @param {*} params
 * @return {*}
 */  
export const arrivalMonthRate = () =>
  defHttp.get({url:Api.arrivalMonthRate})
  
/**
 * @description: 今日出勤率
 * @param {*} params
 * @return {*}
 */
export const arrivalDayRate = () =>
  defHttp.get({url:Api.arrivalDayRate})

/**
 * @description: 今日迟到率
 * @param {*} params
 * @return {*}
 */
export const arrivalLateRate = () =>
  defHttp.get({url:Api.arrivalLateRate})

/**
 * @description: 昨日加班率
 * @param {*} params
 * @return {*}
 */
export const overtimeYstRate = () =>
  defHttp.get({url:Api.overtimeYstRate})





