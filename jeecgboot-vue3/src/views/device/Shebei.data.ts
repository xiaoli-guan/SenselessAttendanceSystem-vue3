import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '设备IP',
    align:"center",
    dataIndex: 'ip'
   },
   {
    title: '回调地址',
    align:"center",
    dataIndex: 'callbackaddr'
   },
   {
    title: '设备名称',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '在线状态',
    align:"center",
    dataIndex: 'online_dictText'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "设备IP",
      field: 'ip',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "回调地址",
      field: 'callbackaddr',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "设备名称",
      field: 'name',
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "在线状态",
      field: 'online',
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"status"
      },
      //colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '设备IP',
    field: 'ip',
    component: 'Input',
  },
  {
    label: '回调地址',
    field: 'callbackaddr',
    component: 'Input',
  },
  {
    label: '设备名称',
    field: 'name',
    component: 'Input',
  },
  {
    label: '在线状态',
    field: 'online',
    component: 'JCheckbox',
    componentProps:{
        dictCode:"status"
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
  ip: {title: '设备IP',order: 0,view: 'text', type: 'string',},
  callbackaddr: {title: '回调地址',order: 1,view: 'text', type: 'string',},
  name: {title: '设备名称',order: 2,view: 'text', type: 'string',},
  online: {title: '在线状态',order: 3,view: 'checkbox', type: 'string',dictCode: 'status',},
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}