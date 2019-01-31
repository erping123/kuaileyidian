<template>
  <div class="main">
    <el-container>
      <!--左侧边栏-->
      <el-aside width="200px">
        <!--boolean 数值型要属性绑定  -->
        <el-menu :default-active="defaultActive" :default-openeds="defaultOpeneds" :unique-opened="true" :router="true">
          <!-- 第一个菜单项 -->
          <el-menu-item index="/settings">
              <i class="el-icon-setting"></i>
              <span>全局设置</span>
          </el-menu-item>
          <!-- 第二个菜单项 -->
          <el-submenu index="table"> 
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>桌台管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/table/list">所有桌台</el-menu-item>
              <el-menu-item index="/table/add">添加桌台</el-menu-item>
              <el-menu-item index="/table/delete">删除桌台</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 第三个菜单项 -->
          <el-menu-item index="/category/list">
              <i class="el-icon-message"></i>
              <span>菜品类别</span>
          </el-menu-item>
          <!-- 第四个菜单项 -->
          <el-submenu index="dish">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>菜品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/dish/list">所有菜品</el-menu-item>
              <el-menu-item index="/dish/add">添加菜品</el-menu-item>
              <el-menu-item index="/dish/delete">删除菜品</el-menu-item>
              <el-menu-item index="/dish/update">修改菜品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 第五个菜单项 -->
          <el-menu-item index="/order/list">
              <i class="el-icon-date"></i>
              <span>订单列表</span>
          </el-menu-item>
          <!-- 第六个菜单项 -->
          <el-menu-item index="/security">
              <i class="el-icon-bell"></i>
              <span>安全管理</span>
          </el-menu-item>
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
import MainHeader from '../components/MainHeader'
export default {
  data(){   //数据属性
    return{  

    }
  },
  computed:{   //计算属性=数据属性+操作方法
    defaultOpeneds(){
      if(this.$route.path.indexOf('/table')==0){
        //用户当前在浏览/table/xxx菜单项
        return ['table'];
      }else if(this.$route.path.indexOf('/dish')==0){
        return ['dish'];
      }else{
        return [];
      }
    },
    defaultActive(){
      // 用户当前访问哪项，就把对应的菜单项设置为"当前激活项"
      return this.$route.path;
    }
  },
  //create/mount/update/destroy
  beforeCreate() {
    // 组件创建之前先要检查是否已经登录为管理员
    if(!this.$store.state.adminName){
      this.$router.push('/login');  //未登录则跳转
    }
  },
  components: {
    // 当前组件内部使用过的子组件列表
    MainHeader
    },
}
</script>
<style lang="scss">
  
</style>