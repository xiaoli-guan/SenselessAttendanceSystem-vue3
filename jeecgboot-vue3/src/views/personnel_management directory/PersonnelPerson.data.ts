import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import {JVxeTypes,JVxeColumn} from '/@/components/jeecg/JVxeTable/types'
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
    title: '出生日期',
    align:"center",
    dataIndex: 'birthday',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: '地区',
    align:"center",
    dataIndex: 'region',
   },
   {
    title: '所属部门名称',
    align:"center",
    dataIndex: 'departName_dictText'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "人员ID",
      field: "personId",
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "名字",
      field: "personName",
      component: 'Input',
      //colProps: {span: 6},
 	},
	{
      label: "所属部门名称",
      field: "departName",
      component: 'JDictSelectTag',
      componentProps:{
          dictCode:"personnel_department,depart_name,id"
      },
      //colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '人员ID',
    field: 'personId',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入人员ID!'},
          ];
     },
  },
  {
    label: '名字',
    field: 'personName',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入名字!'},
          ];
     },
  },
  {
    label: '性别',
    field: 'gender',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"sex"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入性别!'},
          ];
     },
  },
  {
    label: '出生日期',
    field: 'birthday',
    component: 'DatePicker',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入出生日期!'},
          ];
     },
  },
  {
    label: '地区',
    field: 'region',
    component: 'JAreaLinkage',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入地区!'},
          ];
     },
  },
  {
    label: '所属部门名称',
    field: 'departName',
    component: 'JDictSelectTag',
    componentProps:{
        dictCode:"personnel_department,depart_name,id"
     },
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入所属部门名称!'},
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
//子表单数据
//子表表格配置
export const personnelImageColumns: JVxeColumn[] = [
    {
      title: '人员姓名',
      key: 'personName',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
        validateRules: [
          { required: true, message: '${title}不能为空' },
        ],
    },
    {
      title: '人员ID',
      key: 'personId',
      type: JVxeTypes.input,
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
        validateRules: [
          { required: true, message: '${title}不能为空' },
        ],
    },
    {
      title: '人脸照片',
      key: 'imgbase64String',
      type: JVxeTypes.image,
      token:true,
      responseName:"message",
      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
        validateRules: [
          { required: true, message: '${title}不能为空' },
        ],
    },
  ]


// 高级查询数据
export const superQuerySchema = {
  personId: {title: '人员ID',order: 0,view: 'text', type: 'string',},
  personName: {title: '名字',order: 1,view: 'text', type: 'string',},
  gender: {title: '性别',order: 2,view: 'radio', type: 'string',},
  birthday: {title: '出生日期',order: 3,view: 'date', type: 'string',},
  region: {title: '地区',order: 4,view: 'pca', type: 'string',},
  departName: {title: '所属部门名称',order: 5,view: 'list', type: 'string',dictTable: 'personnel_department', dictCode: 'id', dictText: 'depart_name',},
  //子表高级查询
  personnelImage: {
    title: '人脸识别照片',
    view: 'table',
    fields: {
        personName: {title: '人员姓名',order: 0,view: 'text', type: 'string',},
        personId: {title: '人员ID',order: 1,view: 'text', type: 'string',},
        imgbase64: {title: '人脸照片',order: 2,view: 'image', type: 'string',},
    }
  },
};

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
// 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}