<template>
    {{title}}
</template>

<script lang="ts">

import {defineComponent,reactive,toRefs} from 'vue'

export default defineComponent({
    name:"swiperZj",
    setup(){

        let state = reactive({
            title:'swiperZj--'
        })

        return {
            ...toRefs(state)
        }

    },
})

</script>