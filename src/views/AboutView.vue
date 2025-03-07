<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div class="about"><TheWelcome></TheWelcome></div>
  <div class="about"><HomeView></HomeView></div>
  <div class="demo-image__lazy">
    <el-image v-for="url in urls" :key="url" :src="url" lazy />
    <el-image id="carimage" style="width: 830px;" :src="carView" lazy/>

    <el-image id="1" style="width: 830px;" :src="oneView" lazy/>
  </div>
</template>

<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue'
import HomeView from '@/views/HomeView.vue'

import carView from '../../public/images/car.png'

//ref主要是创建一种响应式的"引用类型"数据，
//ref 用来包裹一个值，使这个值变成响应式的，即当这个值改变时，相关的视图会自动更新。
//当 oneView 的值改变时，所有使用该 ref 的地方（比如模板中的图片显示）都会自动更新。
import { ref } from 'vue';
// 直接引用 public 目录下的图片
const oneView = ref('/images/1.png');


const urls = [
'public/images/1.png',
'public/images/car.png',  // 假设你有多个图片 
]
</script>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 50vh;
    display: flex;
    align-items: center;
  }
}
</style>
