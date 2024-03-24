/*
 * @Author: Li Quanlin
 * @Date: 2024-03-23 20:53:36
 * @LastEditTime: 2024-03-24 14:40:59
 * @LastEditors: Li Quanlin
 * @Description: 考勤排名Modal的常量数据
 * @FilePath: \jeecgboot-vue3\src\views\attendance_information\attendance_ranking\components\AttendanceRankingModal.data.ts
 */

import {BasicColumn} from '/@/components/Table';

 //定义早到表格列字段
export const earlyColumnsById: BasicColumn[] = [
    {
        title: '早打卡时间',
        align:"center",
        sorter: true,
        dataIndex: 'check_in_time_day',
        key:'check_in_time_day',
    },
    {
        title:'早到分钟',
        align:"center",
        dataIndex:'early_arrival_time_day',
        key:'early_arrival_time_day'
    }
];

//定义迟到表格列字段
export const lateColumnsById: BasicColumn[] = [
    {
        title: '早打卡时间',
        align:"center",
        sorter: true,
        dataIndex: 'check_in_time_day',
        key:'check_in_time_day',
    },
    {
        title:'迟到分钟',
        align:"center",
        dataIndex:'late_arrival_time_day',
        key:'late_arrival_time_day'
    }
];

 //定义加班表格列字段
export const overtimeColumnsById: BasicColumn[] = [
    {
        title: '晚打卡时间',
        align:"center",
        sorter: true,
        dataIndex: 'check_out_time_day',
        key:'check_out_time_day',
    },
    {
        title:'加班分钟',
        align:"center",
        dataIndex:'overtime_day',
        key:'overtime_day'
    }
];

 //定义早退表格列字段
export const edeptColumnsById: BasicColumn[] = [
    {
        title: '晚打卡时间',
        align:"center",
        sorter: true,
        dataIndex: 'check_out_time_day',
        key:'check_out_time_day',
    },
    {
        title:'早退分钟',
        align:"center",
        dataIndex:'early_departure_time_day',
        key:'early_departure_time_day'
    }
];

//定义缺勤表格列字段
export const absenceColumnsById: BasicColumn[] = [
    {
        title:'缺勤日期',
        align:"center",
        dataIndex:'absence_date',
        key:'absence_date',
    }
];