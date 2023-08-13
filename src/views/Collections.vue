<template>
  <div class="background">
    <PageMenu />
    <HighlightEl />
    <CollectionList />  
  </div>
</template>

<script>
import PageMenu from '@/components/CollectionsComponents/PageMenu'
import HighlightEl from '@/components/CollectionsComponents/HighlightEl'
import CollectionList from '@/components/CollectionsComponents/CollectionList'


export default {
  components: {
    PageMenu,
    HighlightEl,
    CollectionList
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