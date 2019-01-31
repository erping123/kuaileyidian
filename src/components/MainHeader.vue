<template>
  <div class="klyd-mainheader">
    <h3 class="klyd-title">{{$store.state.globalSettings.appName}}管理后台</h3>
    <div class="klyd-right">
      登录用户：{{$store.state.adminName}}
      <el-button size="mini" @click="quit">退出</el-button>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    quit(){
      // 清除当前用户的登录信息
      this.$store.commit('setAdminName','');
      // 跳转回登录页
      this.$router.push('/login');
    }
  }
}
</script>
<style lang="scss">
  $header-height:60px;
  .klyd-mainheader{
    background-color:#dcdfe6;
    border-radius:4px;
    line-height:$header-height;
    height:$header-height;
    padding:0 6px;
    .klyd-title{
    margin:0;
    float:left;
    color:#444;
    }
    .klyd-right{
    float:right;
    }
  }
</style>

