<template>
<!--    <div class="vcomment" v-if="data.comments === true">-->
<!--      <div id="vcomments"></div>-->
<!--    </div>-->
</template>

<script lang="ts">
    import { useThemeData } from '@vuepress/plugin-theme-data/lib/client'
    import type { ThemeData } from '@vuepress/plugin-theme-data'

    type MyThemeData = ThemeData<{
        foo: string
    }>

    export default {
        setup() {
            const themeData = useThemeData<MyThemeData>()
            console.log(themeData.value)
        },
    }
</script>

<style lang="scss" >
.vcomments {
  max-width: 740px;
  padding: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>


