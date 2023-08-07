<template>
  <section>
    <div class="arrows">
        <div class="arrow-left" @click="prevSlide(index)">
            <font-awesome-icon :icon="['fas', 'arrow-left']" /> <br>
            <font-awesome-icon :icon="['fas', 'arrow-left']" /> <br>
            <font-awesome-icon :icon="['fas', 'arrow-left']" /> <br>
        </div>
        <div class="arrow-right" @click="nextSlide(index)">
            <font-awesome-icon :icon="['fas', 'arrow-right']" /> <br>
            <font-awesome-icon :icon="['fas', 'arrow-right']" /> <br>
            <font-awesome-icon :icon="['fas', 'arrow-right']" /> <br>
        </div>     
    </div>
    <div class="slides" v-for="(image, index) in images" :key="image.id" v-show="index === currentIndex">
        <img :src="image.id" alt="{{ image.alt }}">
        <h1>{{ index }}</h1>
    </div>
  </section>
  
</template>

<script>
import image1 from '@/assets/SlideImages/PlasmaCat.png'
import image2 from '@/assets/SlideImages/PlasmaRedCat.png'


export default {
    data() {
        return {
            currentIndex: 0,
            images: [
                {id: image1, alt: "image_1",},
                {id: image2, alt: "image_2",} 
            ]
        }
    },
    methods: {
        nextSlide() {
            this.currentIndex += 1
            if(this.currentIndex >= this.images.length) {
                this.currentIndex = 0
            }
        },
// resolver erro prevSlide
        prevSlide() {
            this.currentIndex -= 1
            if(this.currentIndex < 0) {
                this.currentIndex = this.images.length -1
            }
        }
    }
}
</script>

<style scoped>
section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 710px;
}
.arrows {
    display: flex;
    align-items: center;
    z-index: 1;
    cursor: pointer;
    color: #000;
}

.arrow-left:active, .arrow-left:hover {
    color: rgb(255, 0, 0);    
}
.arrow-left {
    position: absolute;
    font-size: 30px;
    left: 55px;
    padding: 10px 12px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(2px);
}
.arrow-right {
    position: absolute;
    font-size: 30px;
    right: 55px;
    padding: 10px 12px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(2px);
}

.arrow-right:active, .arrow-right:hover {
    color: rgb(255, 0, 0);    
}

.slides {
    display: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.slides img {
    height: 710px;
    width: 1700px;
    position: absolute;
    object-fit: cover;
}
</style>