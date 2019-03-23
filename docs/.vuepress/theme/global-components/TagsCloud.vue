<template>
  <div class="tag-content">
    <div class="tags-cloud">
      <el-badge v-for="item in TagsCount" value="" class="item" >
        <el-button size="medium" @click="filterArticle(item.tagName)"><strong>#{{item.tagName}}</strong> @({{item.number}})</el-button>
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
              <router-link :to="items.regularPath">{{ items.frontmatter.title }}</router-link>
            </p>
            <p>Finen于{{ items.frontmatter.date}}发布该文章</p>
            <!-- <el-tag>原创</el-tag><br/> -->
            <div class="archives-tag">
              <p class="article-tag">
                Tags:
                <el-tag v-for="tag in items.frontmatter.tags">{{tag}}</el-tag>
              </p>
            </div>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TagsCloud",
  props: {
    pages: {
      type: Array,
      default: []
    }
  },
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
      this.pages.forEach(element => {
        // filter data
        if (element.frontmatter.post == true) {
          element.frontmatter.tags.forEach(item => {
            this.tagsCloud.push(item);
          });
        }
      });
    },
    /**
     * tags count
     */
    getTagsCloud () {
      let map = this.tagsCloud.reduce((m, x) => m.set(x, (m.get(x) || 0) + 1), new Map())
      let arrLength = Array.from(map.values()).length;
      for (let index = 0; index < arrLength; index++) {
        let jsonTag = {};
        jsonTag.tagName = Array.from(map.keys())[index];
        jsonTag.number = Array.from(map.values())[index];
        this.TagsCount.push(jsonTag);
      }
    },
    filterArticle (tag) {
      this.selectArticle = [];
      this.pages.forEach(element => {
        if (element.frontmatter.post == true && element.frontmatter.tags.includes(tag)) {
          this.selectArticle.push(element);
        }
      });
    }
  }
};
</script>

<style>
.tags-cloud>.el-badge>.el-button{
  margin: 0px 5px 12px 33px;
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

