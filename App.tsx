import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [newTask, setNewTask] = React.useState('');

  return (
    <View style={styles.container}>
      {/*
      <Text style={styles.textS}>Seja Bem-vindo</Text>
      <Text >Digite seu Nome</Text>
      <TextInput placeholder='nome' style={styles.textInp}/>

      <Text>Digite seu Telefone</Text>
      <TextInput placeholder='(11)99999 9999' style={styles.textInp}/>

      <Text>Digite seu CPF</Text>
      <TextInput placeholder='000.000.000-00' style={styles.textInp}/>

      <TouchableOpacity activeOpacity={0.7} style={styles.btn}>
        <Text>Adicionar tarefa</Text>
      </TouchableOpacity>
      */}
      <Text>Trabalhando com Hook</Text>
      <TextInput onChangeText={setNewTask} placeholder='tarefa' style={styles.textInp}/>
      <Text> ITENS ADICIONADOS</Text>
      <Text>{newTask}</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInp:{
    backgroundColor: '#fff',
    width: 300,
    textAlign:'center',
    borderRadius: 5,
    margin: 10,
  },
  textS:{
    margin: 10,
    fontSize: 30,
  },
  btn: {
    backgroundColor:'rgb(192,192,192)',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
    width: 200
  }
});
