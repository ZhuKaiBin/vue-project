<!-- 这里做布局 -->

<template>
    <!-- <el-row class="tac">
        <el-col :span="12">
            <h5 class="mb-2">Default colors</h5>
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>Navigator One</span>
                    </template>
                    <el-menu-item-group title="Group One">
                        <el-menu-item index="1-1">item one</el-menu-item>
                        <el-menu-item index="1-2">item two</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                        <el-menu-item index="1-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-sub-menu index="1-4">
                        <template #title>item four</template>
                        <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="2">
                    <el-icon><icon-menu /></el-icon>
                    <span>Navigator Two</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <el-icon>
                        <document />
                    </el-icon>
                    <span>Navigator Three</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>Navigator Four</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row> -->
    <el-container>
        <el-page-header>
            <template #breadcrumb>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: './page-header.html' }">
                        homepage
                    </el-breadcrumb-item>
                    <el-breadcrumb-item>
                        <a :href="HomeView" target="_blank">route 1</a> <!-- 添加 target="_blank" 保证链接在新标签页打开 -->
                    </el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/views/1' }">
                        Route 2
                    </el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ name: 'views1' }">
                        Route 3
                    </el-breadcrumb-item>
                </el-breadcrumb>
            </template>
            <template #content>
                <span class="text-large font-600 mr-3"> Title </span>
            </template>
        </el-page-header>
    </el-container>
</template>

<script lang="ts" setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'


import { ref } from 'vue';
// 使用 ref 创建响应式引用
const HomeView = ref('https://fanyi.baidu.com/mtpe-individual/multimodal');



const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}





</script>