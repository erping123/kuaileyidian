<template>
  <div class="klyd-category-list">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>菜品类别管理</el-breadcrumb-item>
      <el-breadcrumb-item>类别列表</el-breadcrumb-item>
    </el-breadcrumb>

    <br>
    <el-button type="primary" size="mini" @click="addCategory">添加新的菜品类别</el-button>
    <br>
    <br>
    <el-table :data="categoryList" style="width:100%" stripe border>
      <el-table-column prop="cid" label="编号"></el-table-column>
      <el-table-column prop="cname" label="名称"></el-table-column>

          
      <el-table-column label="操作">
        <template slot-scope="{row,$index}">
          <el-button type="success" size="mini" @click="updateCategory(row,$index)">修改</el-button>
          <el-button type="error" size="mini" @click="deleteCategory(row,$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data(){
    return{
      categoryList:[]
    }
  },
  methods:{
    updateCategory(c,i){
     
  
    },
    deleteCategory(c,i){
        this.$confirm('删除操作不可撤销！您确定吗？','提示',{type:'warning'}).then(()=>{
           var url=this.$store.state.globalSettings.apiUrl+'/admin/category/'+c.cid;
        this.$axios.delete(url).then((result)=>{
        if(result.data.code==200){
          this.categoryList.splice(i,1);
          this.$message.success('菜品类别删除成功！');
        }else{
          this.$message.error('菜品删除出差错：'+result.data.msg);
        }
       }).catch((err)=>{
        console.log(err);
       })
       }).catch(()=>{
       })
      // var url=this.$store.state.globalSettings.apiUrl+'/admin/category/'+c.cid;
      // this.$axios.delete(url).then((result)=>{
      //   if(result.data.code==200){
      //     this.categoryList.splice(i,1);
      //     this.$message.success('菜品类别删除成功！');
      //   }else{
      //     this.$message.error('菜品删除出差错：'+result.data.msg);
      //   }
      // }).catch((err)=>{
      //   console.log(err);
      // })
    },
    addCategory(){
      this.$prompt('请输入新的菜品类别名','提示',{type:'info'}).then(({value})=>{
        // 获得用户的输入，调用数据api添加到数据库
        var url=this.$store.state.globalSettings.apiUrl+'/admin/category';
        this.$axios.post(url,{cname:value}).then((result)=>{
          if(result.data.code==200){
            this.$message.success('新的类别添加成功！');
            //模型数据中添加新的类别
            this.categoryList.push({cid:result.data.cid,cname:value});
          }else{
            this.$message.success('新的类别添加出错！'+result.data.msg);
          }
        }).catch((err)=>{
           console.log(err);
        })
      }).catch(()=>{

      })
    }
  },
  mounted(){
    var url=this.$store.state.globalSettings.apiUrl+'/admin/category';
    this.$axios.get(url).then((result)=>{
      this.categoryList=result.data;
    }).catch((err)=>{
      console.log(err);
    })
  }
}
</script>
<style lang="scss">
  .el-button span{
    font-size:0.75em;
  }
</style>
