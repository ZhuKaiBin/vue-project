<template>
    <h2>{{ message }}</h2>
    <button @click="update">修改年龄</button>

    <hr>
    <h2>车名字是：{{ car.name }}，车的价格：{{ car.price }},车的颜色c1:{{ car.color.c1 }},车的颜色c2:{{ car.color.c2 }}</h2>
    <button @click="ChangeCar">更改车</button>
    <!-- <h2>{{ messageOPtionsl }}</h2>
    <button @click="changeMessage">改变信息</button> -->
</template>

<!-- 组合式API -->
<script setup lang="ts" name="123245">
import { computed, reactive, ref, watch } from 'vue';

const age = ref(25);  // 使用 ref 创建响应式变量
const person = reactive({
    name: 'Bob',
    age: age,  // 将 ref 绑定到 reactive 对象
    sex: 1,
    greet() {
        console.log("你好");
    }
});

const message = computed(() => `Hi, I'm ${person.name} and I'm ${person.age} years old.`);

// 使用 watch 监听响应式数据变化
watch(() => person.age, (newAge) => {
    console.log(`Age changed to: ${newAge}`);
});

function update() {
    // person.age += 100;
    person.name = 'tom'
    // age.value=age.value+10000
    console.log(1, person.sex);
    person.sex = 0

    console.log(2, person.sex);
}

let car = reactive({ name: '小米', price: 756, color: { c1: 'red', c2: 'green' } })
function ChangeCar() {

    // Object.assign(car, { name: 'Tesla', price: 999 })

    //使用assign，person还是原来的person，地址值是没有改变，只是修改了person的属性值
    // Object.assign(car, { name: 'Tesla' })//这样写的话，只会更新name字段，price字段不会更新

    car.color = { c1: "比亚迪", c2: '1000' }//这样写的话，会更新car的地址值，所以会更新car的所有字段

}



</script>

<!-- 使用选项式 API
<script lang="ts">
export default {
    data() {
        return {
            messageOPtionsl: 'Hello from Options API!'
        };
    },
    methods: {
        changeMessage() {
            this.messageOPtionsl = 'Message changed!';
        }
    }
};
</script> -->
