import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Button from './components/Button'

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/* Utilizado para controlar os campos e criar alertas */

const schema = yup.object({
  email: yup.string().email("Email inválido").required("Escreve o teu email"),
  passowrd: yup
    .string()
    .min(6, "A palavra-passe tem de ter pelo menos 6 dígitos.")
    .required("Escreve a tua palavra-passe"),
});

const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver() });

  function handleSignUp(data) {
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, {
              borderWidth: errors.email && 1,
              borderColor: errors.email && '#ff375b'
            }]}
            onChangeText={onChange}
            onBlur={onBlur} /* Quando é tocado */
            value={value}
            placeholder="e-mail"
          />
        )}
      />
      {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}



      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, {
              borderWidth: errors.password && 1,
              borderColor: errors.password && '#ff375b'
            }]}
            onChangeText={onChange}
            onBlur={onBlur} /* Quando é tocado */
            value={value}
            placeholder="palavra-passe"
            secureTextEntry={true}
          />
        )}
      />
      {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}

      <Button
        onPress={handleSubmit(handleSignUp)}
      >
        <Text style={styles.buttonText}>LOGIN</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "black",
  },
  labelError: {
    alignSelf:'flex-start',
    color: '#ff375b',
    marginBottom: 8,
  }
});

export default Form;
