<template>
<div>
  <div class="content default">
    <h2>Tags Cloud</h2>
    <div class="tags-cloud">
      <el-badge v-for="item in TagsCount" value="" class="item" >
        <el-tag size="medium" effect="plain" @click="filterArticle(item.tagName)">
<!--          <i class="fa fa-tags" aria-hidden="true"></i>-->
          <span class="tag-name">{{item.tagName}} <strong>[{{item.number}}]</strong></span>
        </el-tag>
      </el-badge>
    </div>
    <div class="tag-article">
      <div class="block">
      <el-timeline :reverse="true">
        <el-timeline-item
          v-for="items in selectArticle"
          placement="top"
          icon="el-icon-loading"
        >
          <el-card>
            <p class="article-title">
              <router-link style="text-decoration: none" :to="items.regularPath">{{ items.frontmatter.title }}</router-link>
            </p>
            <div class="archives-tag">
              <p class="article-tag">
                <el-tag v-for="tag in items.frontmatter.tags">{{tag}}</el-tag>
                <i class="fa fa-clock-o" aria-hidden="true"></i>
                <span class="i-text">{{ items.frontmatter.date }}</span>
              </p>

            </div>

          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Tag",
  data() {
    return {
      tagsCloud: [], // Tags的所有数据的数组
      TagsCount: [], // 统计完成的Tags
      selectArticle: [], // 通过tag选择出来的文章
    };
  },
  mounted: function() {
    this.filterTagsList();
    this.getTagsCloud();

  },
  methods: {
    filterTagsList() {
      this.$site.pages.forEach(element => {
        // filter data
        if (element.frontmatter.post == true) {
          element.frontmatter.tags.forEach(item => {
            element.frontmatter.date = this.formatDate(element.frontmatter.date);
            this.tagsCloud.push(item);
          });
        }
      });
    },
    // 对标签进行统计
    getTagsCloud () {
      let map = this.tagsCloud.reduce((m, x) => m.set(x, (m.get(x) || 0) + 1), new Map())
      let arrLength = Array.from(map.values()).length;

      for (let index = 0; index < arrLength; index++) {
        let jsonTag = {};
        jsonTag.tagName = Array.from(map.keys())[index];
        jsonTag.number = Array.from(map.values())[index];
        this.TagsCount.push(jsonTag);
      }
      // 对标签进行排序
      this.TagsCount.sort(this.compare('number'))
    },
    // 通过标签筛选文章
    filterArticle (tag) {
      this.selectArticle = [];
      this.$site.pages.forEach(element => {
        if (element.frontmatter.post == true && element.frontmatter.tags.includes(tag)) {
          this.selectArticle.push(element);
        }
      });
    },
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
.tags-cloud> .el-badge .el-tag{
  margin: 10px 3px 10px 3px;
}
.tags-cloud> .el-badge .el-tag--plain
.el-card > .el-card__body > .article-title {
  font-size: 20px;
  font-weight: 600;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.archives-tag > .article-tag {
  font-size: 16px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.archives-tag > .article-tag > .el-tag {
  margin-left: 5px;
}
.tag-name {
  font-size: 16px;
  font-weight: 500;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.article-tag i{
  margin-left: .6rem
}
.el-badge > .el-tag--plain{
  color: #2c3e50;
  border-color: #2c3e50;
  background-color: #fff;
  height: 38px;
  line-height: 38px;
}
</style>

