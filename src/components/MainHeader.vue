<template>
  <div class="mainheader">
    <h3>太委屈尔特人委托</h3>
    <div class="mainheader-right">
      <h4>登录用户：admin</h4>
      <el-button type="primary" plain>退出</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  }
}
</script>
<style>
  .mainheader{
    background-color:#eee;
    border-radius:4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:36px;
  }
  .mainheader h3{
    margin:0;
    line-height: 36px;
    padding-left:20px;
    font-size:1em;
  }
  .mainheader-right{
    display: flex;
    justify-content: space-between;
    font-size:0.75em;
  }
  .el-button--mini,.el-button--mini.is-round {
    padding: 3px 8px;
  }
</style>

