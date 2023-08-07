<template>
  <div class="navBar">
    <LeftIcons />
    <MenuContainer />
    <RightIcons />
  </div>
</template>

<script>
import LeftIcons from '@/components/NavComponents/LeftIcons'
import RightIcons from '@/components/NavComponents/RightIcons'
import MenuContainer from '@/components/NavComponents/MenuContainer'

export default {
  components: {
    LeftIcons,
    RightIcons,
    MenuContainer
  }
}
</script>

<style scoped>
.navBar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: 100%;
  margin: 0 0 10px 0;
}
</style>