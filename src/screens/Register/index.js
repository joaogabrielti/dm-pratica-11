import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import styles from './styles'

function Register() {
    const [nome, setNome] = useState()
    const [telefone, setTelefone] = useState()
    const [email, setEmail] = useState()

    const create = useSelector(state => state.create)
    const dispatch = useDispatch()

    function createUsuario() {
        const usuario = {
            id: create.length + 1,
            nome: nome,
            telefone: telefone,
            email: email,
        }

        dispatch({type: 'updateUsuarios', payload: usuario})
        alert('[OK] Usuário Cadastrado!')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registro de Usuário</Text>
            <TextInput style={styles.textInput} placeholder="nome completo" value={nome} onChangeText={(text) => setNome(text)}/>
            <TextInput style={styles.textInput} placeholder="telefone" value={telefone} onChangeText={(text) => setTelefone(text)}/>
            <TextInput style={styles.textInput} placeholder="email" value={email} onChangeText={(text) => setEmail(text)}/>
            <View style={styles.button}>
                <Button title="Autenticar" color="#6E5494" onPress={createUsuario}/>
            </View>
        </View>
    )
}

export default Register