/*
 * @Author: Li Quanlin
 * @Date: 2024-03-23 21:23:31
 * @LastEditTime: 2024-03-25 12:45:52
 * @LastEditors: Li Quanlin
 * @Description: 考勤排名Modal的api
 * @FilePath: \jeecgboot-vue3\src\views\attendance_information\attendance_ranking\components\AttendanceRankingModal.api.ts
 */

import {defHttp} from '/@/utils/http/axios';

enum Api {
//   早到
  earlyListById = '/attendance_details/attendanceDetails/queryEarlyById',
//   迟到
  lateListById = '/attendance_details/attendanceDetails/queryLateById',
//   加班
  overListById = '/attendance_details/attendanceDetails/queryEdptById',
//   早退
  edptListById = '/attendance_details/attendanceDetails/queryOverById',
//   缺勤
  absListById = '/attendance_details/attendanceDetails/queryAbsById',
}

/**
 * 早到列表接口
 * @param params
 */
export const earlyListById = (params) =>
  defHttp.get({url: Api.earlyListById, params});

  /**
 * 迟到列表接口
 * @param params
 */
export const lateListById = (params) =>
defHttp.get({url: Api.lateListById, params});

/**
 * 加班列表接口
 * @param params
 */
export const overListById = (params) =>
  defHttp.get({url: Api.overListById, params});

  /**
 * 早退接口
 * @param params
 */
export const edptListById = (params) =>
defHttp.get({url: Api.edptListById, params});

/**
 * 缺勤接口
 * @param params
 */
export const absListById = (params) =>
  defHttp.get({url: Api.absListById, params});
