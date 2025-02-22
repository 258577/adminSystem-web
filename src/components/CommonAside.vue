<template>
  <div>
    <el-aside :width="width" height="100%">
      <el-menu
        background-color="#545764"
        text-color="#fff"
        :collapse="isCollapse"
        :collapse-transition="false"
        :default-active="activeMenu"
      >
        <h3 v-show="!isCollapse">通用后台管理系统</h3>
        <h3 v-show="isCollapse">后台</h3>
        <el-menu-item
          v-for="item in noChildren"
          :index="item.path"
          :key="item.path"
          @click="handleMenu(item)"
        >
          <component class="icons" :is="item.icon"></component>
          <span>{{ item.label }}</span>
        </el-menu-item>

        <el-sub-menu
          v-for="item in hasChildren"
          :index="item.path"
          :key="item.path"
        >
          <template #title>
            <component class="icons" :is="item.icon"></component>
            <span>{{ item.label }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="subItem in item.children"
              :index="subItem"
              :key="subItem"
              @click="handleMenu(subItem)"
            >
              <component class="icons" :is="subItem.icon"></component>
              <span>{{ subItem.label }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-aside>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useAllDataStore } from "@/stores";
import { useRouter, useRoute } from "vue-router";
const list = ref([
  {
    path: "/home",
    name: "home",
    label: "首页",
    icon: "house",
    url: "Home",
  },
  {
    path: "/mall",
    name: "mall",
    label: "商品管理",
    icon: "video-play",
    url: "Mall",
  },
  {
    path: "/user",
    name: "user",
    label: "用户管理",
    icon: "user",
    url: "User",
  },
  {
    path: "/other",
    name: "其他",
    label: "location",
    icon: "location",
    children: [
      {
        path: "/page1",
        name: "page1",
        label: "页面1",
        icon: "setting",
        url: "Page1",
      },
      {
        path: "/page2",
        name: "page2",
        label: "页面2",
        icon: "setting",
        url: "Page2",
      },
    ],
  },
]);
// const list = computed(() => store.state.menuList);

const noChildren = computed(() => list.value.filter((item) => !item.children));
const hasChildren = computed(() => list.value.filter((item) => item.children));
const store = useAllDataStore();
const isCollapse = computed(() => store.state.isCollapse);
// width
const width = computed(() => (store.state.isCollapse ? "64px" : "180px"));

// 选中
const activeMenu = computed(() => route.path);
// tab页面标签
const router = useRouter();
const route = useRoute();
const handleMenu = (item) => {
  router.push(item.path);
  store.selectMenu(item);
};
</script>

<style scoped lang="less">
.icons {
  width: 18px;
  height: 18px;
  margin-right: 5px;
}

.el-menu {
  margin-left: none;
  h3 {
    line-height: 48px;
    color: #fff;
    text-align: center;
    margin: 0;
  }
}
.el-aside {
  height: 100vh;
  background-color: #545764;
}
</style>