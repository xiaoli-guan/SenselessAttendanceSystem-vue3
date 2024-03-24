/*
 * @Author: Li Quanlin
 * @Date: 2024-03-01 20:38:52
 * @LastEditTime: 2024-03-24 14:30:49
 * @LastEditors: Li Quanlin
 * @Description: 考勤信息的api，由jeecgboot生成
 * @FilePath: \jeecgboot-vue3\src\views\attendance_information\attendance_info\AttendanceInformation.api.ts
 */

import {defHttp} from '/@/utils/http/axios';
import { useMessage } from "/@/hooks/web/useMessage";

const { createConfirm } = useMessage();

enum Api {
  list = '/attendance_information/attendanceInformation/list',
  save='/attendance_information/attendanceInformation/add',
  edit='/attendance_information/attendanceInformation/edit',
  deleteOne = '/attendance_information/attendanceInformation/delete',
  deleteBatch = '/attendance_information/attendanceInformation/deleteBatch',
  importExcel = '/attendance_information/attendanceInformation/importExcel',
  exportXls = '/attendance_information/attendanceInformation/exportXls',
}
/**
 * 导出api
 * @param params
 */
export const getExportUrl = Api.exportXls;
/**
 * 导入api
 */
export const getImportUrl = Api.importExcel;
/**
 * 列表接口
 * @param params
 */
export const list = (params) =>
  defHttp.get({url: Api.list, params});

/**
 * 删除单个
 */
export const deleteOne = (params,handleSuccess) => {
  return defHttp.delete({url: Api.deleteOne, params}, {joinParamsToUrl: true}).then(() => {
    handleSuccess();
  });
}
/**
 * 批量删除
 * @param params
 */
export const batchDelete = (params, handleSuccess) => {
  createConfirm({
    iconType: 'warning',
    title: '确认删除',
    content: '是否删除选中数据',
    okText: '确认',
    cancelText: '取消',
    onOk: () => {
      return defHttp.delete({url: Api.deleteBatch, data: params}, {joinParamsToUrl: true}).then(() => {
        handleSuccess();
      });
    }
  });
}
/**
 * 保存或者更新
 * @param params
 */
export const saveOrUpdate = (params, isUpdate) => {
  let url = isUpdate ? Api.edit : Api.save;
  return defHttp.post({url: url, params});
}
