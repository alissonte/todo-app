import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        descrition: 'Ler Livro',
        list: [
            {
                _id: 1,
                descrition:'Pagar fatura do cartão',
                done:true
            },{
                _id: 2,
                descrition:'Reunião com a equipe as 10:00',
                done:false
            },{
                _id: 3,
                descrition:'Consulta médica na terça depois do almoço',
                done:false
            }
        ]
    })
})

export default rootReducer