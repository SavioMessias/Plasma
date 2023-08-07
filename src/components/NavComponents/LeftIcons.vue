<template>
  <div class="leftIcons">
    <button class="menu"> <i class="fa-solid fa-user"></i> </button>
    <router-link to="/">
        <button class="plasma" to="/"><img src="@/assets/Logo-P.svg" alt="Plasma."></button>
    </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.leftIcons {
  margin-left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.leftIcons .menu {
  border: none;
  font-size: 40px;
  cursor: pointer;
}

.leftIcons .plasma {
  width: 225px;
  margin-top: 10px;
  margin-left: 23px;
  
}

.leftIcons button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.leftIcons:focus {
  border: none;
}
.leftIcons .plasma:focus,
.leftIcons .menu:focus {
  outline: none;
}

.leftIcons .plasma:active,
.leftIcons .menu:active {
  outline: none;
  transform: scale(0.98);
}
</style>