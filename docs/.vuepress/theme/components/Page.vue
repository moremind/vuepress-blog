<template>
  <main class="page">
    <slot name="top" />
    <TitleContent :pages="$page"/>
    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
    <Comments v-bind:is="viewComments"/>
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import TitleContent from "../global-components/TitleContent";
import Comments from "../global-components/Comments";
export default {
  components: { PageEdit, PageNav, Comments, TitleContent },
  props: ['sidebarItems'],
  data (){
    return {
      viewComments: 'Comments',
    }
  },
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

</style>
