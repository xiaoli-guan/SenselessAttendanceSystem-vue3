/*
 * @Author: Li Quanlin
 * @Date: 2024-03-27 16:49:40
 * @LastEditTime: 2024-03-27 17:30:14
 * @LastEditors: Li Quanlin
 * @Description: 打卡
 * @FilePath: \jeecgboot-vue3\src\views\snapshot_records\Records.api.ts
 */

import {defHttp} from '/@/utils/http/axios';


enum Api {
  list = '/LAPI/personnelPerson/list',
  clockIn = '/device/device/clockIn'
}
/**
 * 列表接口
 * @param params
 */
export const list = (params) =>
  defHttp.get({url: Api.list, params});

export const clockIn = (params) =>
    defHttp.post({url:Api.clockIn,params});
