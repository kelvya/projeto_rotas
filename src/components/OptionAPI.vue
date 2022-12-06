<template>
    <p>Pedidos Anteriores:</p>
    <!-- <span>{{ user.pedidos.length > 0 ? user.pedidos.length : '0' }}</span> -->
    <span>Encontradas {{ msgPedidos }} ocorrências</span>
    <ul>
        <li v-for="pedido in user.pedidos" :key="pedido">{{ pedido }}</li>
    </ul>
</template>

<!-- <script>
export default {
    name: 'OptionAPI',
    data() {
        return {
            user: {
                nome: 'Tom Mazzeo',
                pedidos: [
                    'Lazanha 4 queijos',
                    'Feijoada',
                    'Sopa de Legumes'
                ]
            }
        }
    }
}
</script> -->

<script>
export default {
    name: 'OptionAPI',
    data() {
        return {
            user: {
                nome: 'Tom Mazzeo',
                pedidos: [
                    'Lazanha 4 queijos',
                    'Feijoada',
                    'Sopa de Legumes', 
                    'Macarronada'
                ]
            }
        }
    },
    computed: {
        //getter
        msgPedidos(){
            return this.user.pedidos.length > 0 ? this.user.pedidos.length : '0'
        }
    }
}
</script>