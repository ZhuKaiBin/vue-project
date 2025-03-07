<template>
    <div class="watch1">
        <h1>watch1 监视ref的值</h1>
      <h2>sum的初始值{{sum}}</h2>
     <button @click="add">add</button>
     <h2>watch监视值的变化,旧值是{{oldVal2}},新值是{{newVal2}}</h2>

     <hr>
     <h1>watch2 监视reactive的值</h1>
    </div>
    
</template>
<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue';

let sum=ref(0)

function add(){
    sum.value++
}

let newVal2=ref(0)
let oldVal2=ref(0)

watch(sum,(newVal,oldVal)=>{    
    newVal2.value=newVal
    oldVal2.value=oldVal
    console.log('老的值',oldVal)
    console.log('新的值',newVal)
    console.log('sum',newVal,oldVal)
})






</script>

