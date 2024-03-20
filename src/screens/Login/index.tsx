import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity , Alert} from 'react-native';
import { StackTypes } from '../../routes/stack';
import UserService   from '../../services/UserService/UserService';

const Login = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [usernameError, setUsernameError] = useState(false);

    const userService = new UserService();
    
    const navigation = useNavigation<StackTypes>();

    const handleLogin = async () => {

      if (!login) {
        setUsernameError(true);
        return;
      } else {
        setUsernameError(false);
      }

      const isValid = await userService.validateUser(login, password);
      alert(isValid);
      if (isValid) {
        alert('Usuário autenticado com sucesso'); 
        //Alert.alert('Sucesso', 'Usuário autenticado com sucesso');
        setLogin('');
        setPassword('');
      } else {
        alert('Usuário e/ou senha inválidos');
        //Alert.alert('Erro', 'Usuário e/ou senha inválidos');
      }
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={[styles.input, usernameError && styles.errorInput]} // Aplicar estilo de erro se usernameError for true
          placeholder="Login"
          onChangeText={setLogin}
          value={login}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
        />
         <TouchableOpacity onPress={handleLogin} style={styles.button} activeOpacity={0.1}>
        <Text style={styles.buttonText}>Entrar</Text>
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
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
      }
  });
  

export default Login;