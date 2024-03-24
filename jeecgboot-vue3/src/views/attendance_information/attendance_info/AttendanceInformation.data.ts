/*
 * @Author: Li Quanlin
 * @Date: 2024-03-01 20:38:52
 * @LastEditTime: 2024-03-24 14:33:07
 * @LastEditors: Li Quanlin
 * @Description: 考勤信息的常量数据
 * @FilePath: \jeecgboot-vue3\src\views\attendance_information\attendance_info\AttendanceInformation.data.ts
 */


import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
//列表数据
export const columns: BasicColumn[] = [
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
    title: '打卡时间',
    align:"center",
    sorter: true,
    dataIndex: 'checkInTime'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
     {
      label: "姓名",
      field: "name",
      component: 'Input', //TODO 范围查询
      //colProps: {span: 6},
	},
     {
      label: "员工ID",
      field: "employeeId",
      component: 'Input', //TODO 范围查询
      //colProps: {span: 6},
	},
	{
      label: "打卡时间",
      field: 'checkInTime',
      component: 'DatePicker',
      componentProps: {
         showTime:true,
         valueFormat: 'YYYY-MM-DD HH:mm:ss'
       },
      //colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '姓名',
    field: 'name',
    component: 'Input',
    // dynamicRules: ({model,schema}) => {
    dynamicRules: () => {
          return [
                 { required: true, message: '请输入姓名!'},
          ];
     },
  },
  {
    label: '员工ID',
    field: 'employeeId',
    component: 'Input',
    // dynamicRules: ({model,schema}) => {
    dynamicRules: () => {
          return [
                 { required: true, message: '请输入员工ID!'},
          ];
     },
  },
  {
    label: '打卡时间',
    field: 'checkInTime',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
    // dynamicRules: ({model,schema}) => {
    dynamicRules: () => {
          return [
                 { required: true, message: '请输入打卡时间!'},
          ];
     },
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];

// 高级查询数据
export const superQuerySchema = {
  name: {title: '姓名',order: 0,view: 'text', type: 'string',},
  employeeId: {title: '员工ID',order: 1,view: 'text', type: 'string',},
  checkInTime: {title: '打卡时间',order: 2,view: 'datetime', type: 'string',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}