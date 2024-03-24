<template>
  <BasicModal v-bind="$attrs" :title="props.title" :showOkBtn="false" :width="800" :centered="true">
    <!-- 表格 -->
    <BasicTable @register="registerTable">                  
    </BasicTable>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { BasicModal } from '/@/components/Modal';
  import { BasicColumn, BasicTable} from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage';
  import {earlyColumnsById,lateColumnsById,overtimeColumnsById,edeptColumnsById,absenceColumnsById} from './AttendanceRankingModal.data'
  import {earlyListById,lateListById,overListById,edptListById,absListById} from './AttendanceRankingModal.api'
  const props = defineProps({
        isAbsenteeism:{type:Boolean,defualt:false},
        api: {type:Promise<any>},
        title:{type:String}
    })
   
    const { tableContext } = useListPage({
        designScope: 'AttendanceRankingArriveEarlyModal-table',
        tableProps: {
            dataSource: [],
            columns: getColumns(),
            api:getApi(),
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

    function getColumns():BasicColumn[]{
        if(props.title == '早到')return earlyColumnsById;
        else if(props.title == '迟到')return lateColumnsById;
        else if(props.title == '加班')return overtimeColumnsById;
        else if(props.title == '早退')return edeptColumnsById;
        else if(props.title == '缺勤')return absenceColumnsById;
        return [];
    }

    function getApi():(params: any) => Promise<any>{
      if(props.title == '早到')return earlyListById;
        else if(props.title == '迟到')return lateListById;
        else if(props.title == '加班')return overListById;
        else if(props.title == '早退')return edptListById;
        // else if(props.title == '缺勤')return absListById;
        else return absListById
    }
</script>
<style scoped>
</style>
