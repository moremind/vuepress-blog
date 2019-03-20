<template>
  <div class="archives-content" style="margin-top: 50px">
    <div class="block" >
      <el-timeline>
        <el-timeline-item timestamp="2018/4/12" placement="top" icon="el-icon-loading">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/12 20:46</p>
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
      selectedTags: []
    };
  },
  computed: {
    filteredList() {
      if (this.pages) {
        return this.pages
          .filter(item => {
            const isBlogPost = !!item.frontmatter.blog;
            const isReadyToPublish =
              new Date(item.frontmatter.date) <= new Date();
            // check if tags contain any of the selected tags
            // const hasTags = item.frontmatter.tags && item.frontmatter.tags.some(tag => this.selectedTags.includes(tag))
            // check if tags contain all of the selected tags
            const hasTags =
              !!item.frontmatter.tags &&
              this.selectedTags.every(tag =>
                item.frontmatter.tags.includes(tag)
              );
            if (
              !isBlogPost ||
              !isReadyToPublish ||
              (this.selectedTags.length > 0 && !hasTags)
            ) {
              return false;
            }
            return true;
          })
          .sort(
            (a, b) =>
              new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
          );
      }
    }
  },
  methods: {
    getYears: function() {
      return [
        ...new Set(
          this.filteredList.map(item =>
            new Date(item.frontmatter.date).getFullYear()
          )
        )
      ];
    },
    getMonths: function(year) {
      return [
        ...new Set(
          this.filteredList
            .filter(
              item => new Date(item.frontmatter.date).getFullYear() == year
            )
            .map(item => new Date(item.frontmatter.date).getMonth())
        )
      ];
    },
    postsByDate(year, month) {
      return this.filteredList.filter(item => {
        const date = new Date(item.frontmatter.date);
        return date.getFullYear() == year && date.getMonth() == month;
      });
    }
  },
  filters: {
    // Filter definitions
    monthToLongName(value) {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      return months[value];
    }
  }
};
console.log("sss");
</script>
<style>
.el-timeline-item__content > .el-card > .el-card__body {
  text-align: left;
}
</style>



