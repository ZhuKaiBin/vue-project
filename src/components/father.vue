<template>
    <h3>当前father组件中的值:{{ a }}</h3>
    <child :sendP='a' :b="b" :c='c' v-bind:position="{ x: 100, y: 200 }" v-bind="{liu:666,ba:888}" </child>
</template>


<!-- :position="{ x: 100, y: 200 }"
v-bind:position="{ x: 100, y: 200 }" -->



<script setup lang="ts">
import child from '@/components/child.vue'
import { ref } from 'vue'

let a = ref(3)
let b = ref(2)

let c = ref(1)

</script>