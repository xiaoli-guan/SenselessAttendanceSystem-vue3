<!--
 * @Author: Li Quanlin
 * @Date: 2024-03-24 23:29:14
 * @LastEditTime: 2024-03-27 20:42:45
 * @LastEditors: Li Quanlin
 * @Description: 模拟打卡
 * @FilePath: \jeecgboot-vue3\src\views\snapshot_records\RecordsList.vue
-->

<template>
  <div style="margin: 20px;">
    <!--引用表格-->
   <BasicTable @register="registerTable">
       <!--操作栏-->
      <template #action="{ record }">
        <TableAction :actions="getTableAction(record)" />
      </template>
    </BasicTable>
  </div>
</template>

<script lang="ts" name="LAPI-personnelPerson" setup>
  import {BasicTable, TableAction} from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage'
  import {columns} from './Records.data';
  import {list, clockIn} from './Records.api';
  import { ElMessage } from 'element-plus'
   //注册table数据
  const { tableContext} = useListPage({
      tableProps:{
           title: '人员信息表',
           api: list,
           columns,
           canResize:false,
           actionColumn: {
               width: 120,
               fixed:'right'
           },
           useSearchForm:false,
        },
    })

  const [registerTable] = tableContext



   /**
      * 操作栏
      */
  function getTableAction(record){
       return [
         {
           label: '打卡',
           onClick: chockIn.bind(null, record),
         }
       ]
   }

   /**
    * @description: 模拟打卡请求
    * @param {*} record
    * @return {*}
    */   
   function chockIn(record){
    // 过去人员id
    let personId = JSON.parse(JSON.stringify(record)).personId;
      clockIn({personId}).then((res)=>{
        // 请求的响应
        if(res.success){
          ElMessage({
            showClose: true,
            message: '打卡成功',
            type: 'success',
          })
        }else{
          ElMessage({
            showClose: true,
            message: '打卡失败，请重试',
            type: 'error',
          })
        }
      })
   }

</script>

<style scoped>

</style>