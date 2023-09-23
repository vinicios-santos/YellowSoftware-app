import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import CategoryCard from '../components/CategoryCard';
import colors from '../constants/colors';

const CategoryScreen = ({ route, navigation }) => {
  const title = route.params.title;

  const data = [
    {
      descricao: 'Categoria 1',
      id: 1,
      observacaoCompleta: 'Descrição completa da Categoria 1.'
    },
    {
      descricao: 'Categoria 2',
      id: 2,
      observacaoCompleta: 'Descrição completa da Categoria 2.'
    },
    {
      descricao: 'Categoria 3',
      id: 3,
      observacaoCompleta: 'Descrição completa da Categoria 3.'
    },
    {
      descricao: 'Categoria 4',
      id: 4,
      observacaoCompleta: 'Descrição completa da Categoria 4.'
    },
    {
      descricao: 'Categoria 5',
      id: 5,
      observacaoCompleta: 'Descrição completa da Categoria 5.'
    },
    {
      descricao: 'Categoria 6',
      id: 6,
      observacaoCompleta: 'Descrição completa da Categoria 6.'
    },
    {
      descricao: 'Categoria 7',
      id: 7,
      observacaoCompleta: 'Descrição completa da Categoria 7.'
    },
    {
      descricao: 'Categoria 8',
      id: 8,
      observacaoCompleta: 'Descrição completa da Categoria 8.'
    },
    {
      descricao: 'Categoria 9',
      id: 9,
      observacaoCompleta: 'Descrição completa da Categoria 9.'
    },
    {
      descricao: 'Categoria 10',
      id: 10,
      observacaoCompleta: 'Descrição completa da Categoria 10.'
    }
  ]


  return (
    <View style={styles.container}>
      <Text style={styles.categoryText}>{title}</Text>
      <Text style={styles.titleText}>O que você vai pedir hoje?</Text>
      <View style={styles.containerCategoryList}>
        <FlatList data={data} horizontal={true} renderItem={(p) => <CategoryCard descricao={p.item.descricao} navigation={navigation} id={p.item.id} observacaoCompleta={p.item.observacaoCompleta} />} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainGray,
    flex: 1,
    padding: 15
  },
  categoryText: {
    fontSize: 18,
    color: colors.yellow,
    textDecorationLine: 'underline'
  },
  titleText: {
    fontSize: 40,
    color: colors.yellow,
    marginBottom: 20
  },
  containerCategoryList: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 50
  }
});

export default CategoryScreen;

