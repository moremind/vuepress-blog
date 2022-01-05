<template>
  <Layout>
    <template #page-bottom>
      <div class="my-footer">This is my custom page footer</div>
      <Comments></Comments>
    </template>
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import Comments from "../global/Comments.vue";

export default {
  components: {
    Comments,
    Layout,
  },
}
</script>

<style lang="css">
.my-footer {
  text-align: center;
}
</style>