import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Register from '../screens/Register'
import List from '../screens/List'

const icons = {
    Register: {
        name: 'account-plus',
    },
    List:{
        name: 'view-list',
    },
}

const Tab = createBottomTabNavigator()
function Tabs({route}) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    const { name } = icons[route.name];
                    return <Icon name={name} color={color} size={size} />
                },
                tabBarActiveTintColor: '#FFF',
                tabBarInactiveTintColor: '#6E5494',
                tabBarActiveBackgroundColor: '#6E5494',
                tabBarStyle: [
                    {
                        display: 'flex',
                    },
                    null,
                ],
            })}
        >
            <Tab.Screen name="Register" component={Register}/>
            <Tab.Screen name="List" component={List}/>
        </Tab.Navigator>
    )
}

export default Tabs