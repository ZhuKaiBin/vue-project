<template>

    <div>

        <h2>土味情话</h2>
        <button @click="addTalk">新增一句</button>
        <ul></ul>
        <li v-for="(item, index) in loveTalk" :key="item.id">{{ item.content }}
            <button @click="deleteLoveTalk(item.id)">删除</button>
        </li>
    </div>

</template>



<script setup lang="ts">
import { reactive } from 'vue';
import { nanoid } from 'nanoid';

let loveTalk = reactive([
    { id: 1, content: '我想给你揉揉肩膀' },
    { id: 2, content: '我想给你揉揉脚' },
    { id: 3, content: '我想给你揉揉头' },
    { id: 4, content: '我想给你揉揉背' },
])

function deleteLoveTalk(id: number) {
    const index = loveTalk.findIndex(item => item.id === id);
    console.log(index);
    if (index !== -1) {
        loveTalk.splice(index, 1);
    }
}

function addTalk() {

    let id = parseInt(nanoid().replace(/\D/g, ""), 10);

    loveTalk.push({ id: id, content: `(${id}) 我想给你揉揉腿` })
}





// function demo(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log(target);
//     console.log(propertyKey);
//     console.log(descriptor);
// }
// {


// }

// class Admin {
//     @demo
//     get address() {
//         return '北京';
//     }

//     @demo
//     get country() {
//         return '中国';
//     }
// }





</script>