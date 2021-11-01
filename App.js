import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Tabs from './src/navigation/tabs'
import Reducers from './src/redux/reducers'

const store = createStore(Reducers)
const Stack = createStackNavigator()

function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Tabs">
                    <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App