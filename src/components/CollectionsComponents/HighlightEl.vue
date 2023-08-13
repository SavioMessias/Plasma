<template>
  <div class="HighlightBox">
    <div class="highlightContainer">
        <img src="@/assets/CollectionImages/highlight1.jpg" alt="{alt}">
        <span>Samba e Café</span>
    </div>
    <div class="highlightContainer">
        <img src="@/assets/CollectionImages/teste2.jpg" alt="{alt}">
        <span>Familia e Amigos</span>
    </div>
  </div>
  
    
</template>

<script>

export default {

}
</script>

<style scoped>
.HighlightBox {
    display: inline-flex;
    justify-content: space-between;
    width: 1346px;
    height: 900px;
    margin-bottom: 65px;
}

.highlightContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
}

.highlightContainer img {
    width: 620px;
    height: 800px;
    object-fit: cover;
    border-radius: 20px;
}

.highlightContainer span {
    position: absolute;
    height: 100px;
    width: 620px;
    text-align: center;
    font-size: 43px;
    font-weight: bolder;
    color: white;
    display: none;
}

.highlightContainer:hover > img {
    filter: brightness(20%);
}
.highlightContainer:hover > span {
    display:  block;
}
</style>