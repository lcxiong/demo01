<template>
  <!-- suspenseZj2 -->
  <img :src="result && result.imgUrl"  />
</template>

<script lang="ts">

import {defineComponent} from 'vue'
import axios from 'axios'

export default defineComponent({
    name:'suspenseZj2',

    async setup() {//async axios   promise 语法糖  返回之后也是promise对象
        const rawData = await  axios.get('https://apiblog.jspang.com/default/getGirl')
        return {
            result:rawData.data
            }
    }
})
    
</script>

<style lang="scss" scoped>

img{
    width: 2.6rem;
}

</style>