<template>
    <div class="flex-1 border-r border-gray-100 flex flex-col overflow-y-auto">
        <!--title-->
        <div class="p-3 font-bold text-lg border-b border-gray-100">알림</div>
        <!--notifications-->
        <div class="flex flex-col hover:bg-gray-50 p-3 space-y-2 border-b border-gray-100 cursor-pointer" 
        v-for="notification in 10" :key="notification">
            <div class="flex justify-between">
                <img src="https://picsum.photos/100" class="w-10 h-10 rounded-full hover:opacity-80"/>
                <i class="fas fa-ellipsis-h text-gray-500 hover:bg-blue-50 hover:text-primary p-2 rounded-full w-10 h-10 flex items-center justify-center"></i>
            </div>
            <div><span class="font-bold">박준영 님의 트윗</span></div>
            <div class="text-gray-500">
                안녕하세요 박준영입니다.
            </div>
        </div>
    </div>
    <Trends />
</template>

<script>
import Trends from '../components/Trends.vue'

export default {
    components: {Trends},
    setup() {},
}
</script>

<style>
</style>