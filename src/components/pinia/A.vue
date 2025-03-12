<template>

    <div>
        收到的pinia的count是： {{ store.mun }}<br>
        地址是:{{ store.address }}
        

        <button @click="store.increment">增加</button>
    </div>
<hr>
    <div>
    <h2>A 页面</h2>
    <p>当前数据: {{ store2.value }}</p>
    <button @click="changeData">修改数据</button>
  </div>

</template>
<script setup lang="ts">

import { useCounterStore ,useDataStore } from '@/stores/counter';
import { storeToRefs } from 'pinia'

const store = useCounterStore();

const {doubleCount }=  storeToRefs(store)

store.$subscribe((mutation, state) => {
    console.log('mutation', mutation)
    console.log('state', state)
})



const store2 = useDataStore()

const changeData = () => {
    store2.updateValue('A 页面修改的新数据')
}
</script>