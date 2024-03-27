/*
 * @Author: Li Quanlin
 * @Date: 2024-03-24 23:29:14
 * @LastEditTime: 2024-03-27 17:39:29
 * @LastEditors: Li Quanlin
 * @Description: 打卡
 * @FilePath: \jeecgboot-vue3\src\views\snapshot_records\Records.data.ts
 */
import {BasicColumn} from '/@/components/Table';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '人员ID',
    align:"center",
    dataIndex: 'personId'
   },
   {
    title: '名字',
    align:"center",
    dataIndex: 'personName'
   },
   {
    title: '性别',
    align:"center",
    dataIndex: 'gender_dictText'
   },
   {
    title: '所属部门名称',
    align:"center",
    dataIndex: 'departName_dictText'
   },
];