<template>
    <div>
        父组件传递过来的： {{ sendP }}<br>
        父组件传过来的其他的值{{$attrs}}<br>

        
    </div>
</template>

<script setup lang="ts">


const ll = defineProps(['sendP'])
console.log('child', ll)



// console.log('child', $attrs)


</script>