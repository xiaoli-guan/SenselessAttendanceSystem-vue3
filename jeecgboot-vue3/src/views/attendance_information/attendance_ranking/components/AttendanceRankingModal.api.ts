/*
 * @Author: Li Quanlin
 * @Date: 2024-03-23 21:23:31
 * @LastEditTime: 2024-03-23 21:30:31
 * @LastEditors: Li Quanlin
 * @Description: AttendanceRankingModal的api
 * @FilePath: \jeecgboot-vue3\src\views\attendance_information\attendance_ranking\components\AttendanceRankingModal.api.ts
 */

import {defHttp} from '/@/utils/http/axios';

enum Api {
    // 早到
    earlyListById = '/test/jeecgDemo/list',
  // earlyListById = '/jeecg-boot/timesheet/personnelSingleTimeSheet/queryEarlyById',
//   迟到
  lateListById = '/jeecg-boot/timesheet/personnelTimeSheet/queryLateById',
//   加班
  overListById = '/jeecg-boot/timesheet/personnelTimeSheet/queryOverById',
//   早退
  edptListById = '/jeecg-boot/timesheet/personnelTimeSheet/queryEdptById',
//   缺勤
  absListById = ' /jeecg-boot/timesheet/personnelTimeSheet/queryAbsById',
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
