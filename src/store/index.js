import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    produtos: {
                pratosQuentes: [
                    { 'nome': 'Lazanha', 'preco': '180' },
                    { 'nome': 'Salmão', 'preco': '230' },
                    { 'nome': 'Espeto de vegetais', 'preco': '90' },
                    { 'nome': 'Feijoada ligth', 'preco': '140' },
                    { 'nome': 'Penne ao Sugo', 'preco': '180' }
                ],
                sobremesas: [
                    { 'nome': 'Quindin', 'preco': '35' },
                    { 'nome': 'Bomba de Chocolate', 'preco': '18' },
                    { 'nome': 'Petit Gateau', 'preco': '28' },
                    { 'nome': 'Torta Holandesa', 'preco': '34' },
                    { 'nome': 'Pudim de leite', 'preco': '23' },
                ]
            },
  },
  getters: {
    loja: (state) => tipo => {
      let loja = state.produtos[tipo].map(
                (item) => { return{
                    nome: item.nome,
                    preco: item.preco
                }
            })
            return loja
    }
  },
  mutations: {
    aplicaDesconto: (state, payload) =>{
      state.produtos[payload].forEach(
        (item) =>{
          item.preco = (item.preco *0.9).toFixed(2)
      })      
    },
  },
  actions: {
    aplicaDesconto: (context, payload) =>{
      context.commit('aplicaDesconto', payload)            
    },
  },
  modules: {
  }
})
