import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '父级部门名称',
    align: 'center',
    dataIndex: 'parentDepartName_dictText'
   },
   {
    title: '当前部门名称',
    align: 'left',
    dataIndex: 'departName'
   },
   {
    title: '当前部门职能描述',
    align: 'center',
    dataIndex: 'departInfo'
   },
   {
    title: '部门上班时间',
    align: 'center',
    dataIndex: 'departInTime'
   },
   {
    title: '部门下班时间',
    align: 'center',
    dataIndex: 'departOutTime'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "当前部门名称",
      field: "departName",
      component: 'Input',
      //colProps: {span: 6},
     },
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '父级部门名称',
    field: 'parentDepartName',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"personnel_department,depart_name,id"
     },
  },
  {
    label: '当前部门名称',
    field: 'departName',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入当前部门名称!'},
          ];
     },
  },
  {
    label: '当前部门职能描述',
    field: 'departInfo',
    component: 'Input',
  },
  {
    label: '部门上班时间',
    field: 'departInTime',
    component: 'TimePicker',
    componentProps:{
      valueFormat: 'HH:mm:ss',
    },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入部门上班时间!'},
          ];
     },
  },
  {
    label: '部门下班时间',
    field: 'departOutTime',
    component: 'TimePicker',
    componentProps:{
      valueFormat: 'HH:mm:ss',
    },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入部门下班时间!'},
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
  parentDepartName: {title: '父级部门名称',order: 0,view: 'list', type: 'string',dictTable: 'personnel_department', dictCode: 'id', dictText: 'depart_name',},
  departName: {title: '当前部门名称',order: 1,view: 'text', type: 'string',},
  departInfo: {title: '当前部门职能描述',order: 2,view: 'text', type: 'string',},
  departInTime: {title: '部门上班时间',order: 3,view: 'time', type: 'string',},
  departOutTime: {title: '部门下班时间',order: 4,view: 'time', type: 'string',},
};


/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}
