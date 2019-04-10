<!--
 * @Description: Achieve Archives
 * @Author: finen
 * @LastEditors: Please set LastEditors
 * @Date: 2019-03-20 21:33:36
 * @LastEditTime: 2019-04-10 23:26:29
 -->

<template>
  <div class="archives-content" style="margin-top: 50px">
    <div class="content-top">嗯..! 目前共计 {{ArchivesArrayLength}} 篇日志！继续努力。</div>
    <div class="block">
      <el-timeline :reverse="true">
        <el-timeline-item
          v-for="item in ArchivesArray"
          :timestamp="item.frontmatter.dateTime"
          placement="top"
          icon="el-icon-loading"
        >
          <el-card>
            <p class="article-title">
              <router-link :to="item.regularPath">{{ item.frontmatter.title }}</router-link>
            </p>
            <p>Finen于{{ item.frontmatter.date}}发布该文章</p>
            <div class="archives-tag">
              <p class="article-tag">
                Tags:
                <el-tag v-for="tag in item.frontmatter.tags">{{tag}}</el-tag>
              </p>
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
  data() {
    return {
      ArchivesArray: [],
      ArchivesArrayLength: 0
    };
  },
  mounted: function() {
    this.filterArchivesList();
  },
  methods: {
    /**
     * @description: select post=true
     * @param {type} 
     * @return: 
     */
    filterArchivesList() {
      this.pages.forEach(element => {
        if (element.frontmatter.post == true) {
          element.frontmatter.dateTime = this.formatDate(element.frontmatter.date);
          element.ArticleDate = this.formatDate(element.frontmatter.date);
          this.ArchivesArray.push(element);
        }
      });
      // 通过时间进行排序
      this.ArchivesArray.sort(this.compare("ArticleDate"));
      // count Archives length
      this.ArchivesArrayLength = this.ArchivesArray.length;
    },
    /**
     * @description: format date
     * @param {type} 
     * @return: 
     */
    formatDate(time) {
      var dateTime = new Date(new Date(time).getTime());
      var y = dateTime.getFullYear();
      var month = dateTime.getMonth() + 1;
      var m = month < 10 ? "0" + month : month;
      var d = dateTime.getDate() < 10 ? "0" + dateTime.getDate() : dateTime.getDate();
      var sendDate = y + "-" + m + "-" + d;
      return sendDate;
    },
    /**
     * @description: 对时间进行排序
     * @param {type} 
     * @return: 
     */
    compare(pro) { 
      return function (obj1, obj2) { 
          var val1 = obj1[pro]; 
          var val2 = obj2[pro]; 
          if (val1 < val2 ) { //正序
              return 1; 
          } else if (val1 > val2 ) { 
              return -1; 
          } else { 
              return 0; 
          } 
      } 
    } 
  }
};
</script>
<style>
.archives-content>.content-top{
  margin: 5px 0 15px 0px;
  font-size: 18px;
  font-weight: 500;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.el-timeline-item__content > .el-card > .el-card__body {
  text-align: left;
}
.el-card > .el-card__body > .article-title {
  font-size: 20px;
  font-weight: 600;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.archives-tag > .article-tag {
  font-size: 14px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.archives-tag > .article-tag > .el-tag {
  margin-left: 5px;
}
</style>
