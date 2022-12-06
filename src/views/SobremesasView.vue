<template>
    <ItemSobremesa :itemProduto="produtos"/>
</template>

<script>
import ItemSobremesa from '@/components/ItemSobremesa.vue'

export default{
    data(){
        return{
            
        }
    },
    name: 'SobremesasView',
    components: {
        ItemSobremesa
    }
}
</script>