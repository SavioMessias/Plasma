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
    margin: 65px 0;
}

.highlightContainer {
    display: flex;
    flex-direction: column;
}

.highlightContainer img {
    width: 620px;
    height: 800px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
}

.highlightContainer span {
    background: rgba(217, 217, 217, 0.7);
    height: 100px;
    width: 620px;
    text-align: center;
    padding: 30px;
    font-size: 30px;
    font-weight: bolder;
}
</style>