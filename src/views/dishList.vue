<template>
  <div class="klyd-dish-list">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>菜品管理</el-breadcrumb-item>
      <el-breadcrumb-item>类品列表</el-breadcrumb-item>
    </el-breadcrumb>

    <br>
    <el-tabs type="border-card">
        <el-tab-pane v-for="(c,i) in dishList" :key="i">
          <span slot="label">
            <el-badge :value="c.dishLish.length">{{c.cname}}</el-badge>
          </span>
          
          <el-row>
            <el-col v-for="(d,j) in c.dishLish" :key="j" :xs="12" :md="6" :lg="4" :xl="3">
              <!-- 引入组件 -->
              <klyd-dish :data="d"></klyd-dish>
              <!-- {{d.title}}
              <img :src="require('../assets/img/dish/'+d.imgUrl)" style="max-width:100%"> -->
            </el-col>
          </el-row>
        </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Dish from '../components/Dish'
export default {
  data(){
    return{
      dishList:[]  //[{cid:x,cname:x,dishLish:[]}]
    }
  },
  mounted(){
    // 异步获取菜品列表
    var url=this.$store.state.globalSettings.apiUrl+'/admin/dish';
    this.$axios.get(url).then(({data})=>{
      console.log(data);
      this.dishList=data;
    }).catch((err)=>{
      console.log(err);
    })
  },
  components:{
    'klyd-dish':Dish
  }
}
</script>
<style lang="scss">
  .el-tabs--border-card{
    .el-tabs__nav-scroll{
      padding-top:10px;
    }
  }
</style>
