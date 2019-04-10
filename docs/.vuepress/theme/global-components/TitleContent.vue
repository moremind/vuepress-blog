<template>
  <div class="title-content" v-if="pages.frontmatter.post == true">
    <el-card class="box-card" shadow="never">
      <h2>{{pages.frontmatter.title}}</h2>
      <!-- <el-tag>原创</el-tag><br/> -->
      <div class="page-info">
        <el-row :gutter="8">
          <el-col :span="4">
            
            <el-tag type="success"><i class="el-icon-edit"></i>Author:Finen</el-tag>
          </el-col>
          <el-col :span="8">
            <div class="tags">
              <el-tag v-for="tag in pages.frontmatter.tags">#{{tag}}</el-tag>
            </div>
          </el-col>
          <el-col :span="8">
            <el-tag color="#fff" ><i class="el-icon-date"></i>{{pages.frontmatter.date}}</el-tag>
          </el-col>
          <el-col :span="4">
            <el-tag color="#1FF79D" type="success">原创</el-tag>
          </el-col>
        </el-row>
        
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "TitleContent",
  props: {
    pages: {
      type: Object,
      default: []
    }
  },
}
</script>

<style>
.title-content {
  max-width: 740px;
  margin: 0 auto;
  padding-top: 5.5rem;
}
.title-content>.el-card>.el-card__body h2{
  text-align: center
}
.tags>.el-tag {
  margin-left: 10px;
}
</style>


