<template>
  <div class="pageMenu">
    <ul>
        <li>
            <select name="size" id="size">
                <option value="">Tamanhos</option>
                <option :value="size" v-for="size in sizes" :key="size">{{ size }}</option>
            </select>
        </li>
    </ul>
    <ul>
        <li>
            <select name="seasons" id="season">
                <option value="">Estações</option>
                <option :value="season" v-for="season in seasons" :key="season">{{ season }}</option>
            </select>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizes: [
        'PP','P','M','G','GG','XG'
      ],
      seasons: [
        'Outono', 'Primavera', 'Inverno', 'Verão' 
      ]
    }
  }
}
</script>

<style scoped>
ul {
  margin: 0;
}
  p {
    font-size: 16px;
  }
</style>