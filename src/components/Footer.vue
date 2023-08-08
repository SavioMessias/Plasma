<template>
    <footer>
        <div class="footerContainer">
            <div class="row">
                <div class="footerLogo">
                   <router-link to="/">
                    <img src="@/assets/Logo-P-White.svg" alt="Logo Plasma Branco">
                </router-link>
                    <span>"Dando spanalco aos que fazem acontecer nos bastidores."</span>  
                </div>
                <div class="footerSupport">
                    <div class="title">
                        <h3>SUPORTE</h3>
                    </div>
                    <div class="suportContent">
                        <ul>
                            <li v-for="supItem in supContent" :key="supItem">{{ supItem.title }}</li>
                        </ul>
                    </div>  
                </div>

                <div class="footerUs">
                    <div class="title">
                        <h3>QUEM SOMOS?</h3>
                    </div>
                    <div class="usContent">
                        <ul>
                            <li v-for="usItem in usContent" :key="usItem">{{ usItem.title }}</li>
                        </ul>
                    </div>
                </div>

                <div class="footerSocial">
                    <div class="title">
                        <h3>SOCIAIS</h3>
                    </div>
                    <div class="socialContent">
                        <ul>
                            <li v-for="socialItem in socialContent" :key="socialItem"><font-awesome-icon :icon="['fab', socialItem.icon ]"/></li>
                        </ul>
                    </div>
                </div>  
            </div>
        </div>
  </footer>
</template>

<script>
export default {
    data() {
        return {
            supContent: [
                {title: 'Central de Atendimento'},
                {title: 'Duvidas Frequentes'},
                {title: 'Pedidos e Rastreamentos'}
            ],
            usContent: [
                {title: 'A PLASMA.'},
                {title: 'Politica de Envio'},
                {title: 'Politica de Devoluções'}
            ],
            socialContent: [
                {icon: 'instagram'},
                {icon: 'tiktok'},
                {icon: 'pinterest'}
            ]
        }
    }
}
</script>

<style scoped>
footer {
  background-color: #000;
  width: 100%;
}
.footerLogo {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 400px;
    margin: 0 60px 100px 0;
}
img {
    width: 300px;
    height: 120px;
}
img:hover{
    transform: scale(0.98);
}
.row {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 6vh;
    color: #fff;
    font-size: 16px;
}
.title {
    display: flex;
    align-content: flex-start;
    justify-content: flex-start;
}
.footerSupport, .footerUs, .footerSocial {
    margin: 30px;
    width: 200px;
    height: 300px;
}

ul {
    padding: 0;
    list-style-type: none;
}
li {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 30px;
    cursor: pointer;
}
.footerUs ul li:first-of-type {
    font-size: 20px;
    margin-top: 26px;
}
.footerSocial li {
    font-size: 25px;
    margin-left: 30px;
    margin-top: 23px;
}

</style>