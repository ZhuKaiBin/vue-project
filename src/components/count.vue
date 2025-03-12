<template>

    <div>
        <h2>当前求和的结果是:{{ sum }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>

        <button @click="Add">加</button>
        <button @click="Reduce">减</button>
    </div>

</template>


<script setup lang="ts" name="Count">

import { ref } from 'vue';
let sum = ref(1)//当前求和的结果
let n = ref(1)//用户选择的数字


function Add() {
    sum.value += n.value
}


function Reduce() {
    sum.value -= n.value
}
</script>