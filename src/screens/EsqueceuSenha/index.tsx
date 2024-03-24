import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { StackTypes } from '../../routes/stack';
import UserService from '../../services/UserService/UserService';

const EsqueceuSenha = () => {
  const [email, setEmail] = useState<string>('');

  const userService = new UserService();

  const navigation = useNavigation<StackTypes>();

  const handleNavegarLogin = () => {
    navigation.navigate('Login');
  };

  const handleEsqueceuSenha = async () => {

    const user = await userService.forgotPassword(email);

    if (user) {
      alert('Email de recuperação de senha enviado com sucesso ');
    } else {
      alert('Email inválidos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Esqueceu a senha</Text>
      <TextInput
        style={[styles.input]}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TouchableOpacity onPress={handleEsqueceuSenha} style={styles.button} activeOpacity={0.1}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNavegarLogin} style={styles.button} activeOpacity={0.1}>
        <Text style={styles.buttonText}>Ir para login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  errorInput: {
    borderColor: 'red', // Alterar a cor da borda para vermelho se houver erro
  },
  button: {
    width: '80%',
    height: 40,
    borderRadius: 8,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#007bff',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  }
});


export default EsqueceuSenha;