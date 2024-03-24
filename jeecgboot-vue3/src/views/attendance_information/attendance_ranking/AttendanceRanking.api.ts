/*
 * @Author: Li Quanlin
 * @Date: 2024-03-22 22:15:10
 * @LastEditTime: 2024-03-24 15:46:50
 * @LastEditors: Li Quanlin
 * @Description: 考勤排名的api
 * @FilePath: \jeecgboot-vue3\src\views\attendance_information\attendance_ranking\AttendanceRanking.api.ts
 */


import {defHttp} from '/@/utils/http/axios';

enum Api {
//   早到
  earlyList = '/jeecg-boot/timesheet/personnelTimeSheet/queryEarlyByName',
//   迟到
  lateList = '/jeecg-boot/timesheet/personnelTimeSheet/queryLateByName',
//   加班
  overList = '/jeecg-boot/timesheet/personnelTimeSheet/queryOverByName',
//   早退
  edptList = '/jeecg-boot/timesheet/personnelTimeSheet/queryEdptByName',
//   缺勤
  absList = ' /jeecg-boot/timesheet/personnelTimeSheet/queryAbsByName',
}

/**
 * 早到列表接口
 * @param params
 */
export const earlyList = (params) =>
  defHttp.get({url: Api.earlyList, params});

  /**
 * 迟到列表接口
 * @param params
 */
export const lateList = (params) =>
defHttp.get({url: Api.lateList, params});

/**
 * 加班列表接口
 * @param params
 */
export const overList = (params) =>
  defHttp.get({url: Api.overList, params});

  /**
 * 早退接口
 * @param params
 */
export const edptList = (params) =>
defHttp.get({url: Api.edptList, params});

/**
 * 缺勤接口
 * @param params
 */
export const absList = (params) =>
  defHttp.get({url: Api.absList, params});






