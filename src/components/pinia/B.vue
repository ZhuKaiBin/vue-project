<template>

    <div>
        收到的pinia的count是： {{ mun}}<br>
        地址是:{{ address }}
    </div>
    <div>
    <h2>B 页面</h2>
    <p>同步数据: {{ value }}</p>
  </div>
</template>
<script setup lang="ts">

import { useCounterStore,useDataStore  } from '@/stores/counter';
import { storeToRefs } from 'pinia'
import { watch } from 'vue';
console.log('useCounterStore', useCounterStore)

const store = useCounterStore();

// 这样解构，数据仍然是响应式的
const { mun, address,doubleCount } = storeToRefs(store)

console.log('mun的值是getters.mun', doubleCount.value)
const store2 = useDataStore()
// 使用 storeToRefs 让 value 变成响应式
const { value } = storeToRefs(store2)
console.log('value的值是', value.value)
</script>