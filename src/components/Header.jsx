import { StyleSheet, View } from "react-native"
import { Button, Text } from 'react-native-paper'
import colors from "../constants/colors";

export default function Header({ title, style, navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.textTable}>Mesa 1</Text>
            <View style={styles.containerButtons}>
                <Button textColor="black" style={styles.button} icon="wallet">Minha conta</Button>
                <Button textColor="black" style={styles.button} icon="hand-back-right">Chamar garçom</Button>
                <Button textColor="black" style={styles.button} icon="cart">Carrinho</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.mainGray,
        alignItems: 'center',
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerButtons: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5
    },
    button: {
        backgroundColor: '#fec80a'
    },
    textTable: {
        color: '#fec80a',
        fontSize: 22
    }
});
