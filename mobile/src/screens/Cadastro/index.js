import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export function Cadastro({ route }) {
  
  const [getLogin, setLogin] = useState();

  useEffect(() => {
    const { login } = route.params;

    setLogin(login);
  });

  return (
    <View style={styles.container}>

      {getLogin ? (<Text>Login</Text>) : (<Text>Cadastro</Text>)}
    </View>
  );
}