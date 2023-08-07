<template>
  <TopHeader />
  <NavBar />
  <router-view/>
  <Footer />
</template>

<script>
import NavBar from '@/components/NavBar'
import TopHeader from '@/components/TopHeader'
import Footer from '@/components/Footer'


export default{
  components: {
    NavBar,
    TopHeader,
    Footer
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  background: url('./assets/PlasmaPattern.svg');
  background-color: #8b8b8b;
  background-size: cover;
}
#app {
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
