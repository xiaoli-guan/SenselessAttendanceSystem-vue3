<!--
 * @Author: Li Quanlin
 * @Date: 2024-03-03 16:04:34
 * @LastEditTime: 2024-03-25 15:11:14
 * @LastEditors: Li Quanlin
 * @Description: 考勤排名-二次封装BasicTable和Bar
 * @FilePath: \jeecgboot-vue3\src\views\attendance_information\attendance_ranking\components\AttendanceRankingTable.vue
-->

<template>
    <div style="background-color: #F5F7FA;">
        <el-container>
            <el-main style="width: 45%;height:770px">
                <!--定义表格-->
                <BasicTable @register="registerTable">
                    <!--操作栏-->
                    <template #action="{ record }">
                        <TableAction :actions="getTableAction(record)" />
                    </template>
                </BasicTable>
            </el-main>
            <el-main>
                <el-container direction="vertical">
                    <div class="chart_top">
                        <div>
                            <div style="text-align: center;margin-top: 20px;">本月{{props.title}}次数top5</div>
                            <Bar :chartData="countChartData" :height="'300px'" :width="'600px'"></Bar>
                        </div>
                    </div>
                    <div class="chart_bottom">
                        <div v-if="!props.isAbsenteeism">
                            <div style="text-align: center;margin-top: 20px;">本月{{props.title}}总计时间top5</div>
                            <Bar :chartData="timeChartData" :height="'300px'" :width="'600px'"></Bar>
                        </div>
                    </div>
                </el-container>
                
            </el-main>
        </el-container>
        <div class="px-10">
            <Modal :title="props.title" :isAbsenteeism="props.isAbsenteeism" @register="register" />
        </div>
    </div>
</template>

<script lang="ts" setup>
    import {reactive} from 'vue'
    import Bar from '/@/components/chart/Bar.vue';
    import { ActionItem, BasicColumn, BasicTable, TableAction } from '/@/components/Table';
    import { useListPage } from '/@/hooks/system/useListPage';
    import { useModal } from '/@/components/Modal';
    import Modal from './AttendanceRankingModal.vue';
    import {earlyColumns,lateColumns,overtimeColumns,edeptColumns,absenceColumns,searchFormSchema} from '../AttendanceRanking.data'
    
    const props = defineProps({
        title:{type:String,defualt:''},
        api: {type:Promise<any>},
        isAbsenteeism:{type:Boolean,defualt:false}
    })
    const [register, { openModal }] = useModal();


    
        /* -------------------------------------------------------------------------- */
        /*                                获取chartData数据                            */
        /* -------------------------------------------------------------------------- */
    // 按次数排行的chartData
    const countChartData = reactive([] as object[])
    // 按次数排行的chartData
    const timeChartData = reactive([] as object[])
    // 定义请求参数
    const params = {
        column:'',
        order:"desc",
        pageNo:1,
        pageSize:5
    }
    //获取countChartData
    params.column = getColumns()[1].key     //设置排序字段
    props.api(params).then((res)=>{
        for(let i = 0;i<res.total;i++){
            console.log('count',params.column);
            countChartData.push(
                {
                    "name":res.records[i].name,
                    "value":res.records[i][getColumns()[1].key],
                }
            )
        }
    })

    //获取timeChartData
    if(props.title != "缺勤"){
        params.column = getColumns()[2].key     //设置排序字段
        props.api(params).then((res)=>{
            for(let i = 0;i<res.total;i++){
                console.log('time',params.column);
                timeChartData.push(
                    {
                        "name":res.records[i].name,
                        "value":res.records[i][getColumns()[2].key],
                    }
                )
            }
        })
    }
    
    /* ----------------------------------- end ---------------------------------- */

    const { tableContext } = useListPage({
        tableProps: {
            title: props.title+'排名',
            api:props.api,
            columns: getColumns(),
            size:'middle',
            actionColumn: {
                width: 120,
            },
            beforeFetch:(params)=>{params.column = "id"},
            formConfig:{
                schemas:searchFormSchema,
            },
        },
    });
    // BasicTable绑定注册
    const [registerTable] = tableContext;

    function getColumns():BasicColumn[]{
        if(props.title == '早到')return earlyColumns;
        else if(props.title == '迟到')return lateColumns;
        else if(props.title == '加班')return overtimeColumns;
        else if(props.title == '早退')return edeptColumns;
        else if(props.title == '缺勤')return absenceColumns;
        return [];
    }
    /**
     * 操作栏
     */
    function getTableAction(record): ActionItem[] {
        return [
        {
            label: '查看详情',
            onClick: handleDetails.bind(null, record),
        },
        ];
    }
       
    /**
     * @description: 打开modal
     * @param {*} record 行数据
     * @return {*}
     */
    function handleDetails(record) {
        let obj = JSON.parse(JSON.stringify(record)); 
        openModal(true,obj.employee_id);
    }
</script>

<style scoped>
.chart_top{
    display: flex; 
    justify-content: center;
    background-color: #FFFFFF;
    margin-top: 10px;
}
.chart_bottom{
    display: flex; 
    justify-content: center;
    background-color: #FFFFFF;
    margin-top: 10px;
}
</style>