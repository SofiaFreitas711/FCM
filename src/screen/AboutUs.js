import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import { SvgUri } from 'react-native-svg';

const AboutUs = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <SvgUri uri="https://osithual.sirv.com/Surrealismo/fundo.svg"
        style={styles.background}
      />

    <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.headerContainer}>
        <SvgUri uri="https://atuousti.sirv.com/FCM/VetorAboutUs.svg"
          style={styles.headerImage}
        />
        <Text style={styles.title}>Sobre Nós</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.h1}> Fundação Cupertino Miranda </Text>
        <Text style={styles.text}>
          A Fundação Cupertino de Miranda, fundação privada de
          interesse geral, com sede em Vila Nova de Famalicão, foi instituída por iniciativa de Arthur Cupertino de Miranda  (1892-1988) e sua esposa, D. Elzira Celeste Maya de Sá  Cupertino de Miranda, (1892-1978) que à mesma afectaram  bens pessoais e a constituíram por estatutos de 15 de Agosto de 1963, aprovados pela entidade tutelar a 2 de Outubro de 1963. O casal doou uma parte dos seus bens pessoais, onde se incluía um conjunto de acções representativas de 5% do capital social do Banco Português do Atlântico, perspectivando a criação de uma Instituição de fomento cultural e de apoio a situações de carência económica. Reconhecida como pessoa colectiva
          de utilidade pública, prossegue objectivos principais de natureza cultural e, acessoriamente, social. A ideia que presidiu à criação da Fundação e os objectivos que estatutariamente tem em vista estão consubstanciados nas primeiras palavras de um autógrafo do Fundador, reproduzido num painel de azulejos: “Templo de Arte, de Cultura e de Bondade, seja, na minha terra Natal: Louvor ao Trabalho, Honra ao Saber, Hino ao Amor, Testemunho do devotamento a este Povo. Arthur Cupertino de Miranda, 1970.”

        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.h1}>Projeto ESMAPP</Text>
        <Text style={styles.text}>
          O Projeto ESMAPP é uma parceria entre a Fundação Cupertino de Miranda e a licenciatura de Tecnologias e Sistemas de Informação para a Web da Escola Superior de Media Artes e Design. O objetivo desta é dar a conhecer sobre o movimento surrealista em Portugal, utilizando os artistas presentes na fundação, através de jogos e demonstrações.
        </Text>
      </View>
      <Text style={styles.author}>Ana Sofia Freitas, Inês Reis e Paulo Rodrigues</Text>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 16,
  },

  background: { 
    position: 'absolute',
    top:-70,
    left:-20,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  headerImage: {
    width: 228,
    height: 79,
  },
  title: {
    position: 'absolute',
    top: 30,
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  textContainer: {
  },
  h1: {
    color: 'black',
    fontWeight: '700',
    fontSize: 20,
    marginVertical: 16,
  },
  text: {
    color: 'black',
    textAlign: 'justify',
    textJustify: 'inter-word',
    fontWeight: '400',
    fontSize: 16,
  },
  author: {
    color: 'black',
    marginTop: 25,
    textAlign: 'right',
    fontStyle: 'italic',
  },
});

export default AboutUs;