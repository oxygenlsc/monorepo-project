<template>
  <a-layout class="layout">
    <a-layout-sider
     hide-trigger            
      :width="220"
      breakpoint="lg"
      collapsible
      :collapsed="collapsed"
      theme="dark"
    >
      <a-menu
        :collapsed="collapsed"
        v-model:selected-keys = "selectedKeys"
      >
        <template v-for="menu in menus" :key="menu.key">
          <a-sub-menu v-if="menu.childrens" :key="menu.key">
            <template #icon>
              <component :is="menu.icon" />
            </template>
            <template #title>{{ menu.title }}</template>
            <a-menu-item 
              v-for="child in menu.childrens" 
              :key="child.key"
              @click="router.push(child.path)"
            >
              <template #icon>
                <component :is="child.icon" />
              </template>
              {{ child.title }}
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item 
            v-else 
            :key="`${menu.key}`"
            @click="router.push(menu.path)"
          >
            <template #icon>
              <component :is="menu.icon" />
            </template>
            {{ menu.title }}
          </a-menu-item>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>
        <a-space>
          <a-button
            type="text"
            @click="toggleCollapsed"
          >
            <icon-menu-fold v-if="!collapsed" />
            <icon-menu-unfold v-else />
          </a-button>
        </a-space>
      </a-layout-header>
      <a-layout-content>
        <slot></slot> <!-- 使用插槽代替router-view -->
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { ref, watch } from 'vue'
import {menus} from '@/constants/menu'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
import {
  IconMenuFold,
  IconMenuUnfold,
} from '@arco-design/web-vue/es/icon';
const collapsed = ref(false)
const selectedKeys = ref([])
// 监听路由变化
watch(
  () => route.path,
  (newPath) => {
    selectedKeys.value = [...newPath.split('/').filter(el=>el)]
  },
  { immediate: true }
)
const toggleCollapsed = () => {
  collapsed.value = !collapsed.value
}
</script>

<style scoped>
.layout {
  min-height: 100vh;
}

.logo {
  height: 64px;
  padding: 12px;
  text-align: center;
}

.logo img {
  height: 100%;
}
</style>