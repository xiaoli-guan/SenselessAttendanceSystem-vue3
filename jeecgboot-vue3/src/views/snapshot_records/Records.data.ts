/*
 * @Author: Li Quanlin
 * @Date: 2024-03-24 23:29:14
 * @LastEditTime: 2024-03-24 23:58:13
 * @LastEditors: Li Quanlin
 * @Description: 抓拍记录的常量数据
 * @FilePath: \jeecgboot-vue3\src\views\snapshot_records\Records.data.ts
 */

import {BasicColumn} from '/@/components/Table';

//列表数据
export const columns: BasicColumn[] = [
   {
    title: '人脸通行记录ID',
    align:"center",
    dataIndex: 'recordid'
   },
   {
    title: '人脸通行记录类型',
    align:"center",
    dataIndex: 'type'
   },
   {
    title: '过人时间',
    align:"center",
    sorter: true,
    dataIndex: 'passingtime'
   },
   {
    title: '抓拍通道名称',
    align:"center",
    dataIndex: 'channelname'
   },
   {
    title: '通道号',
    align:"center",
    dataIndex: 'channelid'
   },
   {
    title: '匹配相似度',
    align:"center",
    dataIndex: 'similarty'
   },
   {
    title: '抓拍图片',
    align:"center",
    dataIndex: 'snapshotImageString'
   },
];