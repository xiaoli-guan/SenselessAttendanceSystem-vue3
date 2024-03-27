<!--
 * @Author: Li Quanlin
 * @Date: 2024-03-03 21:52:39
 * @LastEditTime: 2024-03-26 14:36:44
 * @LastEditors: Li Quanlin
 * @Description: 考勤排名的modal
 * @FilePath: \jeecgboot-vue3\src\views\attendance_information\attendance_ranking\components\AttendanceRankingModal.vue
-->

<template>
  <BasicModal v-bind="$attrs" :title="props.title" @register="register" :showOkBtn="false" :width="800" :centered="true">
    <!-- 表格 -->
    <BasicTable @register="registerTable">                  
    </BasicTable>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicColumn, BasicTable} from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage';
  import {earlyColumnsById,lateColumnsById,overtimeColumnsById,edeptColumnsById,absenceColumnsById} from './AttendanceRankingModal.data'
  import {earlyListById,lateListById,overListById,edptListById,absListById} from './AttendanceRankingModal.api'
  const props = defineProps({
        isAbsenteeism:{type:Boolean,defualt:false},
        title:{type:String}
    })

  let Id = '';//父组件传来的Id
  
  const [register] = useModalInner(getId);

  const { tableContext } = useListPage({
      designScope: 'AttendanceRankingModal-table',
      tableProps: {
          dataSource: [],
          columns: getColumns(),
          api:getApi(),
          beforeFetch:(data:any)=>{data.employee_id = Id;delete data.column;delete data.order;},//data.column = "employee_id";},//请求前对参数进行处理
          size:'small',
          bordered:false,
          actionColumn: {
              width: 120,
          },
          useSearchForm:false,
          showActionColumn:false,
      },
    });
    // BasicTable绑定注册
    const [registerTable] = tableContext;


    /**
     * @description: 根据不同的title返回不同的columns
     * @return {*} 返回columns
     */
    function getColumns():BasicColumn[]{
        if(props.title == '早到')return earlyColumnsById;
        else if(props.title == '迟到')return lateColumnsById;
        else if(props.title == '加班')return overtimeColumnsById;
        else if(props.title == '早退')return edeptColumnsById;
        else if(props.title == '缺勤')return absenceColumnsById;
        return [];
    }

    /**
     * @description: 根据不同的title返回不同的api
     * @return {*} 返回api
     */
    function getApi():(params: any) => Promise<any>{
      if(props.title == '早到')return earlyListById;
        else if(props.title == '迟到')return lateListById;
        else if(props.title == '加班')return overListById;
        else if(props.title == '早退')return edptListById;
        // else if(props.title == '缺勤')return absListById;
        else return absListById
    }

    /**
     * @description: 获取父组件传来的id
     * @param {*} Id
     * @return {*}
     */    
    function getId(id:any){
      Id = id;
    }

</script>
<style scoped>
</style>
