<!--
 * @Author: Li Quanlin
 * @Date: 2024-03-03 23:01:30
 * @LastEditTime: 2024-03-25 13:55:00
 * @LastEditors: Li Quanlin
 * @Description: 人流统计
 * @FilePath: \jeecgboot-vue3\src\views\attendance_information\peopleCounting\Index.vue
-->

<template>
    <div style="margin-left: 20px; margin-right: 20px;">
        <div>
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content ep-bg-purple">
                        <Gauge :chartData="chartData.attendanceMonth" :height="'340px'"></Gauge>
                        <div style="height: 40px; text-align: center;">
                            <el-link @Click="handleLinkClick('ArrivalMonth')">
                                查看详情
                                <el-icon class="el-icon--right"><icon-view /></el-icon>
                            </el-link>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content ep-bg-purple">
                        <Gauge :chartData="chartData.attendanceDay" :height="'340px'"></Gauge>
                        <div style="height: 40px; text-align: center;">
                            <el-link @Click="handleLinkClick('ArrivalDay')">
                                查看详情
                                <el-icon class="el-icon--right"><icon-view /></el-icon>
                            </el-link>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content ep-bg-purple">
                        <Gauge :chartData="chartData.lateDay" :height="'340px'"></Gauge>
                        <div style="height: 40px; text-align: center;">
                            <el-link @Click="handleLinkClick('LateDay')">
                                查看详情
                                <el-icon class="el-icon--right"><icon-view /></el-icon>
                            </el-link>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content ep-bg-purple">
                        <Gauge :chartData="chartData.overtimeYsd" :height="'340px'"></Gauge>
                        <div style="height: 40px; text-align: center;">
                            <el-link @Click="handleLinkClick('OvertimeYst')">
                                查看详情
                                <el-icon class="el-icon--right"><icon-view /></el-icon>
                            </el-link>
                        </div>
                    </div>
                </el-col> 
            </el-row>
        </div>
        <div style="background-color: #FFFFFF;">
            <div class="datePiker">
                <el-date-picker v-model="value" type="date" placeholder="Pick a day" :disabled-date="disabledDate" :shortcuts="shortcuts" @change="handleDatePickerChange(value)">
                </el-date-picker>
                </div>
            <Line :chartData="chartDataCountingArray" :height="'380px'"></Line>
        </div>

        <el-dialog v-model="dialogVisibleArrivalMonth" title="本月出勤详情" width="800">
            <BasicTable @register="registerTableArrivalMonth"/>
        </el-dialog>

        <el-dialog v-model="dialogVisibleArrivalDay" title="本日出勤详情" width="800">
            <BasicTable @register="registerTableArrivalDay"/>
        </el-dialog>

        <el-dialog v-model="dialogVisibleLateDay" title="今日迟到详情" width="800">
            <BasicTable @register="registerTableLateDay"/>
        </el-dialog>

        <el-dialog v-model="dialogVisibleOvertimeYst" title="昨日加班详情" width="800">
            <BasicTable @register="registerTableOvertimeYst"/>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
    import { ref, reactive } from 'vue'
    import Gauge from '/@/components/chart/Gauge.vue';
    import Line from '/@/components/chart/SingleLine.vue';
    import { BasicTable } from '/@/components/Table';
    import {arrivalDayList,trafficList,arrivalMonthList,lateDayList,overtimeYesterdayList,rateList} from './peopleCounting.api'
    import { useListPage } from '/@/hooks/system/useListPage';
    import {columnsArrivalMonth,columnsArrivalDay,columnsLateDay,columnsOvertimeYst} from './peopleCounting.data'

    /* -------------------------------------------------------------------------- */
    /*                               BasicTable绑定注册                            */
    /* -------------------------------------------------------------------------- */
    const [registerTableArrivalMonth] = useListPage({
        designScope: 'peopleCountingModal-table',
        tableProps: {
            columns: columnsArrivalMonth,
            api:arrivalMonthList,
            size:'small',
            actionColumn: {
                width: 120,
            },
            useSearchForm:false,
            showActionColumn:false,
        },
    }).tableContext;
    const [registerTableArrivalDay]  = useListPage({
        designScope: 'peopleCountingModal-table',
        tableProps: {
            columns: columnsArrivalDay,
            api:arrivalDayList,
            size:'small',
            actionColumn: {
                width: 120,
            },
            useSearchForm:false,
            showActionColumn:false,
        },
    }).tableContext;
    const  [registerTableLateDay]  = useListPage({
        designScope: 'peopleCountingModal-table',
        tableProps: {
            columns: columnsLateDay,
            api:lateDayList,
            size:'small',
            actionColumn: {
                width: 120,
            },
            useSearchForm:false,
            showActionColumn:false,
        },
    }).tableContext;
    const  [registerTableOvertimeYst]  = useListPage({
        designScope: 'peopleCountingModal-table',
        tableProps: {
            columns: columnsOvertimeYst,
            api:overtimeYesterdayList,
            size:'small',
            actionColumn: {
                width: 120,
            },
            useSearchForm:false,
            showActionColumn:false,
        },
    }).tableContext;
    /* ----------------------------------- end ---------------------------------- */
    

    const dialogVisibleArrivalMonth = ref(false)
    const dialogVisibleArrivalDay = ref(false)
    const dialogVisibleLateDay = ref(false)
    const dialogVisibleOvertimeYst = ref(false)

    /* -------------------------------------------------------------------------- */
    /*               获取本月出勤率、今日出勤率、今日迟到率、昨日加班率数据            */
    /* -------------------------------------------------------------------------- */
    const chartData = {
        'attendanceMonth':{
            name:'本月出勤率',
            value:98
        },
        'attendanceDay':{
            name:'今日出勤率',
            value:91
        },
        'lateDay':{
            name:'今日迟到率',
            value:3
        },
        'overtimeYsd':{
            name:'昨日加班率',
            value:34
        }
    }
    // 发送请求并处理参数
    rateList().then((res)=>{
        chartData.attendanceMonth.value = res.result.arrival_rate_month;
        chartData.attendanceDay.value = res.result.arrival_rate_day;
        chartData.lateDay.value = res.result.late_arrival_rate_day;
        chartData.overtimeYsd.value = res.result.overtime_rate_ystday;
    })
    /* ----------------------------------- end ---------------------------------- */




    /* -------------------------------------------------------------------------- */
    /*                             时间选择器与人流统计图                           */
    /* -------------------------------------------------------------------------- */
    const value = ref('')
    value.value = (new Date()).toString();
    const shortcuts = [
        {
            text: 'Today',
            value: new Date(),
        },
        {
            text: 'Yesterday',
            value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
            },
        },
        {
            text: 'A week ago',
            value: () => {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
            },
        },
    ]
    // 处理时间变化
    handleDatePickerChange(value);
    let chartDataCountingArray = reactive([] as Array<Object>);

    for(let i = 0;i<24;i++){
        chartDataCountingArray.push({name:i+'点',value:Math.floor(Math.random() * (200 - 0 + 1) + 0)});
    }
    
    const disabledDate = (time: Date) => {
        return time.getTime() > Date.now()
    }

    // 更新人流统计图的数据
    function handleDatePickerChange(value){
        console.log('value',value,value);
        trafficList(value.value).then((res) =>{
            chartDataCountingArray = res.result;
        })
    }

    /* ----------------------------------- end ---------------------------------- */

    /**
     * @description: 根据flag打开不同的dialog
     * @param {*} flag
     * @return {*}
     */    
    function handleLinkClick(flag:String){
        switch(flag){
            case "ArrivalMonth":dialogVisibleArrivalMonth.value = true;break;
            case "ArrivalDay":dialogVisibleArrivalDay.value = true;break;
            case "LateDay":dialogVisibleLateDay.value = true;break;
            case "OvertimeYst":dialogVisibleOvertimeYst.value = true;break;
        }
    }

</script>
<style scoped>
    .el-row {
    margin-bottom: 20px;
    }
    .el-row:last-child {
    margin-bottom: 0;
    }
    .el-col {
    border-radius: 4px;
    }

    .grid-content {
    border-radius: 4px;
    min-height: 36px;
    background-color: #FFFFFF;
    margin-top: 20px;
    margin-bottom: 20px;
    }

    .datePiker {
        margin-left: 120px;
        padding-top: 20px;
    }
</style>