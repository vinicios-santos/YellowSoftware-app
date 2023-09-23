import * as React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar, Button, Card, Text, TouchableRipple } from 'react-native-paper';
import colors from '../constants/colors';

const CategoryCard = ({ descricao, observacaoCompleta, id, navigation }) => {
    const handlePressCard = () => {
        navigation.navigate('Lista');
    };

    return (
        <TouchableOpacity onPress={handlePressCard}>
            <Card style={styles.container} >
                <Card.Cover source={{ uri: `https://picsum.photos/70${id}` }} />
                <Card.Content>
                    <Text style={styles.textDescricao}>{descricao}</Text>
                    <Text style={styles.textObservacao}>{observacaoCompleta}</Text>
                </Card.Content>
            </Card >
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#212121',
        minWidth: 350,
        margin: 5,
        height: '100%'
    },
    textDescricao: {
        color: colors.yellow,
        alignSelf: 'center',
        fontSize: 22
    },
    textObservacao: {
        color: colors.white,
        alignSelf: 'center'
    }
});


export default CategoryCard;