<template>
  <div class="tag-content">
    <div class="tags-cloud">
      <el-badge :value="5" class="item" >
        <el-button size="small">git</el-button>
      </el-badge>
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
      TagsArray: [],
      tagsCloud: []
    };
  },
  mounted: function() {
    this.filterTagsList();
  },
  methods: {
    filterTagsList() {
      this.pages.forEach(element => {
        if (element.frontmatter.post == true) {
          this.TagsArray.push(element);
          element.tags = element.frontmatter.tags;
          element.frontmatter.tags.forEach(item => {
            this.tagsCloud.push(item);
          });
        }
      });
      console.log(this.tagsCloud);
      console.log(this.tagsCloud.length);
    }
  }
};
</script>
