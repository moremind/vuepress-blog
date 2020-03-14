<template>
  <div class="title-content" v-if="pages.frontmatter.post == true">
    <el-card class="box-cards" shadow="never">
      <h2>{{pages.frontmatter.title}}</h2>
      <!-- <el-tag>原创</el-tag><br/> -->
      <div class="page-info">
        <i class="fa fa-user" aria-hidden="true"></i>
        <span class="i-text">{{ pages.author || $site.themeConfig.author }}</span>
        <i class="fa fa-tags" aria-hidden="true" v-for="tag in pages.frontmatter.tags">
          <span class="i-text">{{ tag }}</span>
        </i>
        <i class="fa fa-clock-o" aria-hidden="true"></i>
        <span class="i-text">{{ formatDate(pages.frontmatter.date) }}</span>
        <span :id="pages.regularPath" class="leancloud-visitors" :data-flag-title="pages.frontmatter.title">
          <i class="fa fa-eye" aria-hidden="true"></i>
          <i class="leancloud-visitors-count">1000000</i>
        </span>
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
  methods: {
    formatDate(time) {
      var dateTime = new Date(new Date(time).getTime());
      var y = dateTime.getFullYear();
      var month = dateTime.getMonth() + 1;
      var m = month < 10 ? "0" + month : month;
      var d =
        dateTime.getDate() < 10 ? "0" + dateTime.getDate() : dateTime.getDate();
      var sendDate = y + "-" + m + "-" + d;
      return sendDate;
    }
  }
}
</script>

<style>
.title-content {
  max-width: 740px;
  margin: 0 auto;
  padding-top: 5.5rem;
}
.page-info i{
  padding: 3px;
}
.title-content>.el-card>.el-card__body h2{
  text-align: center
}
.tags>.el-tag {
  margin-left: 10px;
}
.i-text {
  font-family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'
}
.page-info span{
  margin-left: 3px;
}
</style>


