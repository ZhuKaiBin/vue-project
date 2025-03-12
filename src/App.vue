<template>

  <div class="app">
    <h2>路由导航测试</h2>

    <!-- 导航区 -->
    <div class="navigate">
      <RouterLink to="/elText" active-class="styleRoute">elText</RouterLink><br>
      <RouterLink to="/watch1" active-class="styleRoute">watch1</RouterLink><br>
      <RouterLink to="/#" active-class="styleRoute">关于</RouterLink>
    </div>


    <!-- 展示区 -->
    <div class="mainContent">
      <!-- 此处展示组件\
      RouterView 路由器视图，这里会替换掉路由器中命中的路由组件 -->
      <RouterView></RouterView>

    </div>
    <!-- <RouterView />  -->
    <hr>
    <div>
      <h2>组件pinpa</h2>
      <!-- <count></count> -->
    </div>
    <hr>
    <div>
     
      <!-- <LoveTalk></LoveTalk> -->
    </div>
  </div>
</template>





<script setup lang="ts">

import count from './components/count.vue';
import LoveTalk from './components/LoveTalk.vue';

</script>

<style>
.styleRoute {
  color: red;
}
</style>
