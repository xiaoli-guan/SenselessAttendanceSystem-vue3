/*
 * @Author: Li Quanlin
 * @Date: 2024-03-22 22:38:43
 * @LastEditTime: 2024-03-23 17:56:55
 * @LastEditors: Li Quanlin
 * @Description: 存放AttendanceRanking常量数据
 * @FilePath: \jeecgboot-vue3\src\views\attendance_information\attendance_ranking\AttendanceRanking.data.ts
 */

import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';

 //定义早到表格列字段
export const earlyColumns: BasicColumn[] = [
   {
   title: '姓名',
   dataIndex: 'name',
   key: 'name',
   },
   {
   title: '本月早到次数',
   dataIndex: 'early_arrival_count_month',
   key: 'early_arrival_count_month',
   sorter: true,
   },
   {
   title: '本月共计早到时间(分钟)',
   dataIndex: 'early_arrival_time_month',
   key: 'early_arrival_time_month',
   sorter: true
   },
];

//定义迟到表格列字段
export const lateColumns: BasicColumn[] = [
    {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    },
    {
    title: '本月迟到次数',
    dataIndex: 'late_arrival_count_month',
    key: 'late_arrival_count_month',
    sorter: true,
    },
    {
    title: '本月共计迟到时间(分钟)',
    dataIndex: 'late_arrival_time_month',
    key: 'late_arrival_time_month',
    sorter: true
    },
 ];

 //定义加班表格列字段
export const overtimeColumns: BasicColumn[] = [
    {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    },
    {
    title: '本月加班次数',
    dataIndex: 'overtime_count_month',
    key: 'overtime_count_month',
    sorter: true,
    },
    {
    title: '本月共计加班时间(分钟)',
    dataIndex: 'overtime_month',
    key: 'overtime_month',
    sorter: true
    },
 ];

 //定义早退表格列字段
export const edeptColumns: BasicColumn[] = [
    {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    },
    {
    title: '本月早退次数',
    dataIndex: 'early_departure_count_month',
    key: 'early_departure_count_month',
    sorter: true,
    },
    {
    title: '本月共计早退时间(分钟)',
    dataIndex: 'early_departure_time_month',
    key: 'early_departure_time_month',
    sorter: true
    },
 ];

//定义缺勤表格列字段
export const absenceColumns: BasicColumn[] = [
   {
   title: '姓名',
   dataIndex: 'name',
   key: 'name',
   },
   {
   title: '本月缺勤次数',
   dataIndex: 'absence_count_month',
   key: 'absence_count_month',
   sorter: true,
   },
];

/** useListPage 是整个框架的核心用于表格渲染，里边封装了很多公共方法；
   * 平台通过此封装，简化了代码，支持自定义扩展*/
// 通过hook useListPage渲染表格（设置dataSource、columns、actionColumn等参数）
export const searchFormSchema: FormSchema[] = [
   {
       label:'姓名',
       field:'name',
       component:'JInput',
   }
];