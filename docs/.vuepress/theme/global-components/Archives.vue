<template>
  <div class="archives-content" style="margin-top: 50px">
    <div class="block">
      <el-timeline>
        <el-timeline-item v-for="item in ArchivesArray" :timestamp="item.frontmatter.date" placement="top" icon="el-icon-loading">
          <el-card>
            <p class="article-title"><router-link :to="item.regularPath">{{ item.frontmatter.title}}</router-link></p>
            <p>Finen于{{ item.frontmatter.date}}发布该文章</p>
            <!-- <el-tag>原创</el-tag><br/> -->
            <div class="archives-tag">
              <p class="article-tag">Tags: <el-tag v-for="tag in item.frontmatter.tags">{{tag}}</el-tag></p>
            </div>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  name: "Archives",
  props: {
    pages: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      ArchivesArray: []
    }
  },
  mounted: function () {
      this.filterListFun()
  },
  computed: {
    // 用于刷选frontmatter中有post: true的数据
    filterList () {
      
    }

    //将筛选出来的数据进行时间排序
  },
  methods: {
    filterListFun () {
      this.pages.forEach(element => {
        if(element.frontmatter.post==true){
          this.ArchivesArray.push(element);
        }
      });
    }
  }
}
</script>
<style>
.el-timeline-item__content > .el-card > .el-card__body {
  text-align: left;
}
.el-card>.el-card__body>.article-title{
  font-size: 20px;
  font-weight: 600;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.archives-tag>.article-tag{
  font-size: 16px;
  font-weight: 500;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.archives-tag>.article-tag>.el-tag{
  margin-left: 5px;
}
</style>



