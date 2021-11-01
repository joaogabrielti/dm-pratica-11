const initialState = [{id: 1, nome: 'Gil Eduardo', telefone: '41 99980-1234', email: 'gil.eduardo@ifpr.edu.br'}]

const CreateReducer = (state = [], action) => {
    switch (action.type) {
        case 'updateUsuarios':
            return [...state, action.payload]
        default:
            console.log('CreateReducer: Operação Padrão.')
            return initialState
    }
}

export default CreateReducer