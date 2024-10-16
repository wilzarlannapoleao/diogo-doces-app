// screens/ControleVendas.js
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

export default function ControleVendas() {
  const [quantidade, setQuantidade] = useState(0);
  const [totalVendas, setTotalVendas] = useState(0);

  const registrarVenda = () => {
    setTotalVendas(totalVendas + parseInt(quantidade));
    setQuantidade(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Venda</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Quantidade vendida"
        value={quantidade.toString()}
        onChangeText={setQuantidade}
      />
      <Button title="Registrar Venda" onPress={registrarVenda} />
      <Text style={styles.total}>Total de Vendas: {totalVendas}</Text>
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
