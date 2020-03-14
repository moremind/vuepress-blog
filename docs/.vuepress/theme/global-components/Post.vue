<template>
<div>

  <div class="content" style="">
    <div class="content-top" v-if="$site.themeConfig.homePage != 'Post'">Posts<hr/></div>

    <div class="post-card">
      <el-card v-for="item in PostsArray.slice((currentPage-1)*pagesize, currentPage*pagesize)">
        <p class="article-title">
          <router-link style="text-decoration: none" :to="item.regularPath">{{ item.frontmatter.title }}</router-link>
        </p>
        <div class="abstract" v-html="item.excerpt">{{item.excerpt}}</div>
        <hr>
        <div class="archives-tag">
          <i class="fa fa-tags" aria-hidden="true" v-for="tag in item.frontmatter.tags">
            <span class="i-text">{{ tag }}</span>
          </i>
          <i class="fa fa-clock-o" aria-hidden="true"></i>
          <span class="i-text">{{ item.frontmatter.date }}</span>
        </div>
      </el-card>
    </div>
    <div class="pages-data">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="15"
        :current-page.sync="currentPage"
        :total="PostArrayLength">
      </el-pagination>
    </div>
  </div>
  <div class="footer" v-if="$site.themeConfig.homePage == 'Post'">
      <p class="footer-list" style="color: #424242;">
        <span v-if="$site.themeConfig.homeConfig.copyright">
          <i class="fa fa-copyright" aria-hidden="true"></i>
          <a class="copyright" style="color: #424242;">{{$site.themeConfig.homeConfig.copyright}}</a>
        </span>
        <span v-if="$site.themeConfig.homeConfig.beian">
          <i class="fa fa-shield" aria-hidden="true"></i>
          <a class="filing" style="color: #424242;">{{$site.themeConfig.homeConfig.beian}}</a>
        </span>
        <span>
          <i class="fa fa-book" aria-hidden="true"></i>
          <a class="theme" href="https://github.com/hirCodd/vuepress-theme-tassel" style="color: #424242;" target="_blank">主题 — vuepress-theme-tassel</a>
        </span>
        <span v-if="$site.themeConfig.homeConfig.github">
          <i class="fa fa-github" aria-hidden="true"></i>
          <a class="github" style="color: #424242;" :href="$site.themeConfig.homeConfig.github_url">{{$site.themeConfig.homeConfig.github}}</a>
        </span>
      </p>
    </div>
</div>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {
      currentPage:1, //初始页
      pagesize:15,    //    每页的数据
      PostsArray: [],
      PostArrayLength: 0
    };
  },
  mounted: function() {
    this.filterPostsList();
  },
  methods: {
    /**
     * @description: select post=true
     * @param {type}
     * @return:
     */
    filterPostsList() {
      this.$site.pages.forEach(element => {
        if (element.frontmatter.post == true) {
          element.frontmatter.date = this.formatDate(
            element.frontmatter.date
          );
          element.ArticleDate = this.formatDate(element.frontmatter.date);
          this.PostsArray.push(element);
        }
      });
      // 通过时间进行排序
      this.PostsArray.sort(this.compare('ArticleDate'));
      // count Archives length
      this.PostArrayLength = this.PostsArray.length;
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
      var d =
        dateTime.getDate() < 10 ? "0" + dateTime.getDate() : dateTime.getDate();
      var sendDate = y + "-" + m + "-" + d;
      return sendDate;
    },
    /**
     * @description: 对时间进行排序
     * @param {type}
     * @return:
     */
    compare(pro) {
      return function(obj1, obj2) {
        var val1 = obj1[pro];
        var val2 = obj2[pro];
        if (val1 < val2) {
          //正序
          return 1;
        } else if (val1 > val2) {
          return -1;
        } else {
          return 0;
        }
      };
    }
  }
};
</script>
<style>
.content > .content-top {
  margin: 5px 0 15px 0px;
  font-size: 18px;
  font-weight: 600;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.post-card {
  margin-top: 20px;
}
.post-card>.el-card {
  margin: 10px 0;
}
.archives-tag i{
  padding: 3px;
}
.el-timeline-item__content > .el-card > .el-card__body {
  text-align: left;
}
.el-card > .el-card__body > .article-title {
  font-size: 1.3em;
  color: black;
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
<style lang="stylus">
@media (min-width: 1200px) {
  .footer {
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .footer-list i {
    margin-left: 1rem;
  }
}
@media (max-width: $MQMobile) {
  .footer {
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-align: left!important
  }
  .footer span {
    display: block
    line-height 2rem
  }
  .footer-list i {
    margin-left: .5rem;
  }
}
</style>
