<template>
   <div class="rightIcons">
        <input v-show="isActive" placeholder="Digite o que procura." :class="{ active: isActive }" maxlength="15">
        <button @click="toggleActive" class="search ">
            <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
        </button>
        <hr style="border: none; height: 45px; width: 1px; margin: 15px; background-color: black;">
        <button class="cart">
            <i class="fa-solid fa-bag-shopping"></i>
        </button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isActive: false
        }
    },
    methods: {
        toggleActive() {
            this.isActive = !this.isActive
        }
    }
}
</script>

<style>
.rightIcons {
  display: flex;
  position: relative;
  justify-content: end;
  align-items: center;
  margin-right: 53px;
  cursor: pointer;
}

.rightIcons button {
  border: none;
  background-color: transparent;
  font-size: 30px;
  cursor: pointer;
  z-index: 10;
}

.search i:focus {
  display: none;
}


input {
  display: flex;
  width: 30px;
  height: 30px;
  border: 0px;
  transition: width 0.3s ease;
  opacity: 0;
}

input::placeholder {
  font-size: 16px;
}

input:focus {
  outline: none;
}

input.active {
  display: flex;
  font-size: 20px;
  border-radius: 13px;
  height: 45px;
  width: 250px;
  background-color: #D9D9D9;
  transform: translate(40px);
  opacity: 1;
}

</style>