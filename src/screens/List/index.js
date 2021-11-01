import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import styles from './styles'

function Register() {
    const create = useSelector(state => state.create)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Usuários</Text>
            <FlatList data={create}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Text style={styles.itemTitle}>{item.nome}</Text>
                        <View style={styles.itemDetails}>
                            <Text style={styles.itemDetailsText}>{item.telefone}</Text>
                            <Text style={styles.itemDetailsText}>{item.email}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

export default Register