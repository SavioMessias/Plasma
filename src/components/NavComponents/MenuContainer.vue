<template>
    <div class="menuContainer">
        <router-link class="navList" to="/collections">Coleções</router-link>
        <router-link class="navList" to="/collections">Camisetas</router-link>
        <router-link class="navList" to="/collections">Acessórios</router-link>
        <router-link class="navList" to="/collections">Bazar</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.menuContainer {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  left: 50%;
  margin-left: -10%;
}

.menuContainer.navList {
  display: inline-flex;
  list-style: none;
  
}

.menuContainer a {
  font-size: 18px;
  color: #8b8b8b;
  text-decoration: none;
  padding: 10px;
}

.menuContainer a:active, .menuContainer a:hover {
  color: red;
}
</style>