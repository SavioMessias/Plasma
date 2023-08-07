<template>
  <section>
        <div class="title">
        <h1>PLASMA NEWS:</h1>
    </div>
    <div class="news">
        <font-awesome-icon :icon="['fas', 'arrow-left']"  class="arrow-left"/>
        <ul>
            <li v-for="trend in news" :key="trend">
                <div class="info">
                    <span>{{ trend.name }} <br> {{ trend.price }}</span>
                </div>
                <img @mouseover="active" :src="trend.id" :alt="trend.alt">
            </li>    
        </ul>
        
        <font-awesome-icon :icon="['fas', 'arrow-right']" class="arrow-right"/>
    </div>
  </section>
</template>

<script>
import image1 from '@/assets/SlideImages/PlasmaCat.png'
import image2 from '@/assets/SlideImages/PlasmaRedCat.png'
import image3 from '@/assets/PamAm.jpg'

export default {
    data() {
        return {
            active: false,
            news: [
                {id: image1, alt: "image_1", name: " White PlasmaCat", price: "159,99 BRL"},
                {id: image2, alt: "image_2", name: " Red PlasmaCat", price: "159,99 BRL"},
                {id: image3, alt: "Campeonato PamAm", name: " White - Family and all", price: "159,99 BRL"}
            ]
        }
    },
    methods: {
        mouseOver() {
            this.active = !this.active;
        }
    }
}
</script>

<style scoped>
.title {
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}
.news {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 550px;
    width: 100%;
}
.news ul {
    padding: 0;
    display: flex;
    flex-direction: row;
    list-style-type: none;
}
.news li {
    display: flex;
    align-items: flex-end;
}
.news img {
    border: none;
    height: 360px;
    width: 340px;
    border-radius: 14px;
    margin: 0 5vw;
    object-fit: cover;
    cursor: pointer;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.8);
}
.info {
    position: absolute;
    display: flex;
    justify-content: center;
    height: 100px;
    width: 340px;
    margin: 0 5vw;
    color: transparent;
    transform: translateY(101%);
    transition: transform 0.3s ease-in
}
.news li:hover > .info {
    color: #fff;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(3px);
    transform: translateY(0);
}
.info span {
    margin: 20px 10px;
    font-size: 18px;
}
.arrow-left {
    font-size: 30px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(2px);
    border-radius: 50%;
    cursor: pointer;
}
.arrow-left:hover {
    color: red;
}
.arrow-left:active {
    color: red;
    transform: scale(0.98);
}
.arrow-right {
    font-size: 30px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(2px);
    border-radius: 50%;
    cursor: pointer;
}
.arrow-right:hover {
    color: red;
}
.arrow-right:active {
    color: red;
    transform: scale(0.98);
}
</style>