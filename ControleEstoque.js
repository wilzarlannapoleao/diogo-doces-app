// screens/ControleEstoque.js
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

export default function ControleEstoque() {
  const [estoque, setEstoque] = useState(100); // Exemplo de estoque inicial
  const [entrada, setEntrada] = useState(0);

  const adicionarEstoque = () => {
    setEstoque(estoque + parseInt(entrada));
    setEntrada(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Controle de Estoque</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Adicionar ao estoque"
        value={entrada.toString()}
        onChangeText={setEntrada}
      />
      <Button title="Adicionar Estoque" onPress={adicionarEstoque} />
      <Text style={styles.total}>Estoque Atual: {estoque}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
  total: {
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
  },
});
