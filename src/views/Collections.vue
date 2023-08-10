<template>
  <div class="background">
    <PageMenu />
    <HighlightEl />  
  </div>
</template>

<script>
import PageMenu from '@/components/CollectionsComponents/PageMenu'
import HighlightEl from '@/components/CollectionsComponents/HighlightEl'

export default {
  components: {
    PageMenu,
    HighlightEl
  },
}
</script>

<style scoped>
.background {
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 110%;
  
}
</style>