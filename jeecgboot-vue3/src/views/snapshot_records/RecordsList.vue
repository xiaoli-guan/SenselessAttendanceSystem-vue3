<!--
 * @Author: Li Quanlin
 * @Date: 2024-03-24 23:29:14
 * @LastEditTime: 2024-03-24 23:57:23
 * @LastEditors: Li Quanlin
 * @Description: 抓拍记录
 * @FilePath: \jeecgboot-vue3\src\views\snapshot_records\RecordsList.vue
-->

<template>
  <div style="margin: 20px 20px 20px 20px">
      <!--引用表格-->
      <BasicTable @register="registerTable">
      </BasicTable>
  </div>
</template>

<script lang="ts" name="Records" setup>
  import {BasicTable} from '/@/components/Table';
  import { useListPage } from '/@/hooks/system/useListPage'
  import {columns} from './Records.data';
  import {defHttp} from '/@/utils/http/axios';

  // 请求api
  const list = (params) =>{
    defHttp.get({url:'/snapshotRecords',params})
  }
  //注册table
  const { tableContext} = useListPage({
      tableProps:{
           title: '抓拍记录',
           api: list,
           columns,
           canResize:false,
           useSearchForm:false,
           showActionColumn:false,
      },
  })

  const [registerTable] = tableContext



</script>

<style scoped>

</style>