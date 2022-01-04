<script setup lang="ts">
import PageMeta from './PageMeta.vue'
import PageNav from './PageNav.vue'
import Comments from "./global/Comments.vue";
</script>

<template>
  <main class="page">
    <slot name="top" />

    <div class="theme-default-content">
      <Content />
    </div>

    <PageMeta />

    <PageNav />

    <slot name="bottom" />

    <Comments v-bind:is="viewComments"/>
  </main>
</template>
