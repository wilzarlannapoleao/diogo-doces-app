// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ControleVendas from './screens/ControleVendas';
import ControleEstoque from './screens/ControleEstoque';
import Relatorios from './screens/Relatorios';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ControleVendas">
        <Stack.Screen name="ControleVendas" component={ControleVendas} options={{ title: 'Controle de Vendas' }} />
        <Stack.Screen name="ControleEstoque" component={ControleEstoque} options={{ title: 'Controle de Estoque' }} />
        <Stack.Screen name="Relatorios" component={Relatorios} options={{ title: 'Relatórios de Produtividade' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
