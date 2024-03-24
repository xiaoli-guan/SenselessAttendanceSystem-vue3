<!--
 * @Author: Li Quanlin
 * @Date: 2024-03-01 23:00:21
 * @LastEditTime: 2024-03-23 20:08:33
 * @LastEditors: Li Quanlin
 * @Description: 考勤排名
 * @FilePath: \jeecgboot-vue3\src\views\attendance_information\attendance_ranking\AttendanceRankingList.vue
-->

<template>
        <el-tabs type="border-card">
            <el-tab-pane label="早到排名" style="height:80vh">
                <Ranking title="早到" :api="earlyList"></Ranking>           
            </el-tab-pane>
            <el-tab-pane label="迟到排名">
                <Ranking title="迟到" :api="lateList"></Ranking>
            </el-tab-pane>
            <el-tab-pane label="加班排名">
                <Ranking title="加班" :api="overList"></Ranking>
            </el-tab-pane>
            <el-tab-pane label="早退排名">
                <Ranking title="早退" :api="edptList"></Ranking>
            </el-tab-pane>
            <el-tab-pane label="缺勤排名">
                <Ranking title="缺勤" :isAbsenteeism=true :api="absList"></Ranking>
            </el-tab-pane>
        </el-tabs>
</template>

<script lang="ts" name="attendance_information-attendanceRanking" setup>
    import {earlyList,lateList,overList,edptList,absList} from './AttendanceRanking.api'
    import Ranking from './components/AttendanceRankingTable.vue'
</script>

<style scoped>
</style>