import { View, Text, ScrollView, StyleSheet, TouchableWithoutFeedback, RefreshControl, } from 'react-native'
import React from 'react'
import Colors from '../theme/Colors'
import Send from '../screens/Send'
import Recieve from '../screens/Recieve'

export default function Home() {
    const [option, setOption] = React.useState("send")
    const [refreshing, setRefreshing] = React.useState(false);

    const handleOptionChange = (type) => {
        setOption(type)
    }
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    return (
        <ScrollView refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
            />
        }>
            <View style={styles.container}>
                <View style={styles.row}>
                    <TouchableWithoutFeedback onPress={() => handleOptionChange("send")}>
                        <View style={{
                            ...styles.button,
                            backgroundColor: option == "send" ? Colors.lightText : Colors.primary,
                            borderColor: option == "send" ? Colors.primary : Colors.light,
                        }}>
                            <Text style={{ ...styles.buttonText, color: option == "send" ? Colors.primary : Colors.light }}>Send</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => handleOptionChange("receive")}>
                        <View style={{
                            ...styles.button,
                            backgroundColor: option == "receive" ? Colors.lightText : Colors.primary,
                            borderColor: option == "receive" ? Colors.primary : Colors.light,
                        }}>
                            <Text style={{ ...styles.buttonText, color: option == "receive" ? Colors.primary : Colors.light }}>Receive</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={{ marginTop: 10 }}>
                    {option == "send" ? (
                        <Send />
                    ) : (
                        <Recieve />
                    )}
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    button: {
        paddingVertical: 15,
        width: 140,
        borderRadius: 35,
        borderColor: Colors.light,
        borderWidth: 1,
        backgroundColor: Colors.primary,
        elevation: 8
    },
    buttonText: {
        color: Colors.lightText,
        textAlign: 'center'
    },
    row: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})