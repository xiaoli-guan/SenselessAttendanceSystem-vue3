/*
 * @Author: Li Quanlin
 * @Date: 2024-03-23 21:42:45
 * @LastEditTime: 2024-03-24 15:48:14
 * @LastEditors: Li Quanlin
 * @Description: 人流统计的api
 * @FilePath: \jeecgboot-vue3\src\views\attendance_information\peopleCounting\peopleCounting.api.ts
 */
import {defHttp} from '/@/utils/http/axios';

enum Api {
    trafficList= '/jeecg-boot/timesheet/personTraffic/queryTraffic',
    arrivalMonthList='/jeecg-boot/timesheet/personRate/queryArrivalMonth',
    arrivalDayList='/jeecg-boot/timesheet/personRate/queryArrivalDay',
    lateDayList='/jeecg-boot/timesheet/personRate/queryLateDay',
    overtimeYesterdayList='/jeecg-boot/timesheet/personRate/queryovertimeYst',
    rateList='/jeecg-boot/timesheet/personRate/queryRate'
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
 * @description: 获取本月出勤率、今日出勤率、今日迟到率、昨日加班率
 * @param {*} 
 * @return {*}
 */  
export const rateList = () =>
    defHttp.get({url:Api.rateList});






