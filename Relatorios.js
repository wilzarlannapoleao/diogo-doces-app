// screens/Relatorios.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Relatorios() {
  const [relatorio, setRelatorio] = useState('Nenhum relatório gerado.');

  const gerarRelatorio = () => {
    const data = new Date();
    setRelatorio(`Relatório gerado em ${data.toLocaleDateString()} às ${data.toLocaleTimeString()}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Relatórios de Produtividade</Text>
      <Button title="Gerar Relatório" onPress={gerarRelatorio} />
      <Text style={styles.relatorio}>{relatorio}</Text>
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
  relatorio: {
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
  },
});
