<template>
  <div class="main">
    <el-container>
      <!--左侧边栏-->
      <el-aside width="200px">
        <el-menu default-active="2-1">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>全局设置</span>
            </template>
          </el-submenu>
          <el-submenu index="2"> 
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>桌台管理</span>
            </template>
            <el-menu-item index="2-1">所有桌台</el-menu-item>
            <el-menu-item index="2-2">添加桌台</el-menu-item>
            <el-menu-item index="2-3">删除桌台</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-message"></i>
              <span>菜品类别</span>
            </template>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>菜品管理</span>
            </template>
            <el-menu-item index="3-1">所有菜品</el-menu-item>
            <el-menu-item index="3-2">添加菜品</el-menu-item>
            <el-menu-item index="3-3">删除菜品</el-menu-item>
            <el-menu-item index="3-4">修改菜品</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-date"></i>
              <span>订单列表</span>
            </template>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-bell"></i>
              <span>安全管理</span>
            </template>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <!--顶部边栏-->
        <el-header height="60px">
          <MainHeader></MainHeader>  
        </el-header>
        <!--主体边栏-->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import MainHeader from '../components/MainHeader.vue'
export default {
  beforeCreate() {
    // 组件创建之前先要检查是否已经登录为管理员
    if(!this.$store.state.adminName){
      this.$router.push('/login');  //未登录则跳转
    }
  },
  components: {MainHeader},
}
</script>
<style lang="scss">
  
</style>