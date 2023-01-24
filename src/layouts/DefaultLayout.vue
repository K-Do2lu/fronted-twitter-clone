<template>
    <div class="flex h-screen container mx-auto">
      <!--side section-->
      <div class="w-20 lg:w-1/4 pt-5 lg:ml-10 flex flex-col justify-between border-r border-gray-100">
        <div class="flex flex-col items-center lg:items-start">
          <!--twitter logo-->
          <i class="fab fa-twitter text-3xl text-primary lg:ml-4 mb-3"></i>
          <!--sidemenu icons-->
          <div class="flex flex-col items-start space-y-1">
            <router-link :to="route.path" class="hover:text-primary hover:bg-blue-50 px-4 py-2 rounded-full cursor-pointer"
            v-for="route in routes" :key="route">
            <div v-if="route.meta.isMenu">
              <i :class="route.icon"></i>
              <span class="ml-5 text-lg hidden lg:inline-block">{{ route.title }}</span>         
            </div> 
            </router-link>
  
          </div>    
          <!--tweet button-->
          <div class="w-full lg:pr-3 flex justify-center">
              <button class="mt-3 bg-primary text-white lg:w-full w-12 h-12 rounded-full hover:bg-dark">
                <span class="hidden lg:block">트윗</span>
                <i class="fas fa-plus lg:hidden"></i>
              </button>
          </div>
        </div>
        <!--profile button-->
        <div class="lg:pr-3 h-12">
            <div class="mr-3 mb-3">
              <button class="hidden lg:flex mt-3 px-2 py-1 w-full h-12 rounded-full hover:bg-blue-50 flex items-center">
                <img src="https://picsum.photos/100" class="w-10 h-10 rounded-full"/>
                <div class="lg:ml-2 hidden lg:block">
                  <div class="text-sm font-bold">semizero.com</div>
                  <div class="text-xs text-gray-500 text-left">@semizero</div>
                </div>
                  <i class="ml-auto fas fa-ellipsis-h fa-fw text-xs hidden lg:block"></i>
              </button>
              <div class="lg:hidden flex justify-center">
                <img
                  src="http://picsum.photos/100"
                  class="w-10 h-10 rounded-full cursor-pointer hover:opacity-80"/>
              </div>
            </div>
        </div>
      </div>
      <!--main section-->
      <div class="flex-1 flex h-screen`">  
        <router-view />
        
      </div>
  
    </div>
  </template>
    
  
  <script>
  import {ref, onBeforeMount} from 'vue'
  import router from '../router'
  export default {
    setup(){
      const routes = ref([])
      onBeforeMount(()=>{
        routes.value = router.options.routes
      })
      return {routes}
    }
  }
  </script>
  
  <style>
  </style>