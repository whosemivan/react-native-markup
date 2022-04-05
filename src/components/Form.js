import React from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, Alert } from 'react-native';
import { SIZES, COLORS } from '../../constants';

const Form = () => {

    const onPressFunction = () => {
        Alert.alert('Привет Мир', 'Hello world', [
            {
                text: 'OK'
            }
        ]);
    };

    return (
        <View>
            <Text style={{ fontSize: SIZES.h1, color: COLORS.black, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>
                Авторизация
            </Text>
            <Text style={{ fontSize: SIZES.body3, color: COLORS.lightGrey, textAlign: 'center', width: 320, marginBottom: 50 }}>
                С возвращением, пройдите авторизацию чтобы начать обучение
            </Text>
            <View style={{ position: 'relative', height: 395 }}>
                <TextInput style={styles.input} placeholder='Адрес корпоративной почты' autoCompleteType="email" keyboardType="email-address" textContentType="emailAddress" />
                <TextInput style={styles.input} placeholder='Пароль' secureTextEntry autoCompleteType="password" />
                <Pressable style={{ position: 'absolute', top: 84, right: 0}} onPress={onPressFunction}>
                    <Text style={{ color: COLORS.primary }}>Забыли пароль?</Text>
                </Pressable>

                <Pressable onPress={onPressFunction} style={styles.button}>
                    <Text style={styles.text}>Войти</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGrey,
        paddingBottom: 10,
        paddingTop: 10,
        marginBottom: 20
    },
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: 30,
        marginTop: 100
    },
    text: {
        fontSize: SIZES.body3,
        color: COLORS.white,
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingTop: 10,
        textAlign: 'center'
    }
});


export default Form;

