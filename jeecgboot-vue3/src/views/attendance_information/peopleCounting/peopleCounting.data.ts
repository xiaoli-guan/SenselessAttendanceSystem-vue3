/*
 * @Author: Li Quanlin
 * @Date: 2024-03-24 01:17:08
 * @LastEditTime: 2024-03-24 01:17:08
 * @LastEditors: Li Quanlin
 * @Description: peopleCounting的常量
 * @FilePath: \jeecgboot-vue3\src\views\attendance_information\peopleCounting\peopleCounting.data.ts
 */
import { BasicColumn} from '/@/components/Table';
export const columnsArrivalMonth: BasicColumn[] = [
    {
        title: '姓名',
        align:"center",
        dataIndex: 'name'
    },
    {
        title: '员工ID',
        align:"center",
        dataIndex: 'employeeId'
    },
    {
        title: '本月出勤次数',
        align:"center",
        sorter: true,
        dataIndex: 'arrival_count_month',
    },
];

export const columnsArrivalDay: BasicColumn[] = [
    {
        title: '姓名',
        align:"center",
        dataIndex: 'name'
    },
    {
        title: '员工ID',
        align:"center",
        dataIndex: 'employeeId'
    },
    {
        title: '上班打卡时间',
        align:"center",
        sorter: true,
        dataIndex: 'check_in_time_day',
    },
];

export const columnsLateDay: BasicColumn[] = [
    {
        title: '姓名',
        align:"center",
        dataIndex: 'name'
    },
    {
        title: '员工ID',
        align:"center",
        dataIndex: 'employeeId'
    },
    {
        title: '上班打卡时间',
        align:"center",
        sorter: true,
        dataIndex: 'check_in_time_day',
    },
    {
        title: '今日迟到分钟',
        align:"center",
        sorter: true,
        dataIndex: 'late_arrival_time_day',
    },
];

export const columnsOvertimeYst: BasicColumn[] = [
    {
        title: '姓名',
        align:"center",
        dataIndex: 'name'
    },
    {
        title: '员工ID',
        align:"center",
        dataIndex: 'employeeId'
    },
    {
        title: '昨日下班打卡时间',
        align:"center",
        sorter: true,
        dataIndex: 'check_out_time_ystday',
    },
    {
        title: '昨日加班分钟',
        align:"center",
        sorter: true,
        dataIndex: 'overtime_time_ystday',
    },
];
