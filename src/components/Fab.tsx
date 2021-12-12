import React from 'react';
import {View, Text, TouchableNativeFeedback, StyleSheet, Platform, TouchableOpacity} from 'react-native';

// Interface
interface Props {
    title: string,
    position?: 'br' | 'bl',
    onPress: () => void,
};

export const Fab = ({ title, position = 'br', onPress }: Props) => {

    const ios = () => {
        return (
                <TouchableOpacity
                    activeOpacity={1}
                    style={[
                        styles.fabLocation,
                        (position === 'bl') ? styles.left : styles.right
                    ]}
                    onPress={onPress}
                >
                    <View style={styles.fab}>
                        <Text
                        style={styles.fabText}
                        >{title}</Text>
                    </View>
                </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View style={[
                styles.fabLocation,
                (position === 'bl') ? styles.left : styles.right
            ]}>
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('#28425B', false, 30) }
                >
                <View style={styles.fab}>
                    <Text
                    style={styles.fabText}
                    >{title}</Text>
                </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return (Platform.OS === 'android') ? android() : ios();
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 20,
      },
      right: {
        right: 20,
      },
      left: {
        left: 20,
      },
      fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
        	width: 0,
        	height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
      },
      fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
      }
})