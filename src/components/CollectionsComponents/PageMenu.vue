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
.pageMenu {
  display: flex;
  padding: 80px 0 0 100px;
}

ul {
  margin: 0;
  list-style-type: none;
}

select {
  width: 200px;
  height: 45px;
  font-size: 20px;
  text-align: center;
  border-radius: 10px 10px 0 0;
  background-color: #b1aeae;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';
}
select:focus, select:hover {
  outline: none;
  cursor: pointer;
}

p {
  font-size: 16px;
}

</style>