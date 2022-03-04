import { View, Text, StyleSheet, Animated, ScrollView, TouchableWithoutFeedback, LogBox } from 'react-native';
import { Image, Input } from "react-native-elements";
import React, { useRef, useEffect } from 'react';
import Colors from '../../theme/Colors';
import { Formik } from "formik";
import * as Yup from "yup";
import logo from '../../assets/logo.png'


const loginSchema = Yup.object().shape({
    username: Yup.string().email().required(),
    password: Yup.string().min(2).required()
})

const signupSchema = Yup.object().shape({
    name: Yup.string().min(3).required(),
    email: Yup.string().email().required(),
    contact: Yup.number().min(10).required(),
    password: Yup.string().min(8).required(),
    confirmPassword: Yup.string().required().oneOf([Yup.ref("password"), null], "Passwords must match"),
    address: Yup.string().min(15).max(150),
    termsacceted: Yup.bool().required()
})


const BounceInView = (props) => {
    const bounceIn = useRef(new Animated.Value(0.5)).current  // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(
            bounceIn,
            {
                toValue: props.isLogin ? 0.8 : 2,
                duration: 500,
            }
        ).start();
    }, [bounceIn, props.flexrequired])

    return (
        <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                flex: bounceIn,         // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
}

export default function Login(props) {
    const [isLogin, setIsLogin] = React.useState(true)
    return (
        <View style={{ display: 'flex', flex: 1 }}>
            <View style={styles.upperContainer}>
                <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: Colors.light, }} />
                <View style={{ flex: 1, borderBottomRightRadius: 100, backgroundColor: Colors.primary, padding: 25 }}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={logo}
                            style={{ height: 150, width: 150, borderRadius: 50 }}
                        />
                    </View>
                </View>
            </View>
            {isLogin ? (
                <BounceInView style={styles.lowerContainer} isLogin={isLogin} flexrequired={0.5}>
                    <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: Colors.primary }} />
                    <View style={{ flex: 1, borderTopLeftRadius: 100, backgroundColor: Colors.light, padding: 50 }}>
                        <Text style={styles.header}>Login</Text>
                        {/* LOgin content goes here */}
                        <Formik
                            initialValues={{
                                username: "",
                                password: "",
                            }}
                            onSubmit={(values) => props.login(true)}
                            validationSchema={loginSchema}
                        >
                            {({ handleChange, handleBlur, handleSubmit, errors, values }) => (
                                <>
                                    <View style={styles.formContainer}>
                                        <Input
                                            placeholder="Username"
                                            onChangeText={handleChange("username")}
                                            onBlur={handleBlur("username")}
                                            keyboardType="email-address"
                                            value={values.username}
                                            errorMessage={errors.username && errors.username}
                                            inputStyle={{ color: Colors.secondaryText }}
                                        />
                                        <Input
                                            placeholder="Password"
                                            secureTextEntry={true}
                                            // keyboardType="visible-password"
                                            onChangeText={handleChange("password")}
                                            onBlur={handleBlur("password")}
                                            value={values.password}
                                            errorMessage={errors.password && errors.password}
                                            inputStyle={{ color: Colors.secondaryText }}
                                        />
                                        <TouchableWithoutFeedback onPress={() => handleSubmit()}>
                                            <View style={{ ...styles.submit_btn }}>
                                                <Text style={{ textAlign: "center", color: Colors.light, textTransform: "uppercase" }}>Submit</Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    </View>
                                    <Text style={styles.createAccount}>Don't have an account?</Text>
                                    <Text style={styles.createAccountLink} onPress={() => setIsLogin(!isLogin)}>Click here to create a new account.</Text>
                                </>
                            )}

                        </Formik>

                    </View>
                </BounceInView>
            ) : (
                <BounceInView style={styles.lowerContainer} isLogin={isLogin} flexrequired={1}>
                    <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: Colors.primary }} />
                    <View style={{ flex: 1, borderTopLeftRadius: 100, backgroundColor: Colors.light, paddingHorizontal: 50, paddingVertical: 40 }}>
                        {/* Signup content */}
                        <Text style={styles.header}>Register</Text>
                        <Formik
                            initialValues={{
                                name: "",
                                email: "",
                                contact: "",
                                password: "",
                                confirmPassword: "",
                                address: "",
                                termsacceted: "",
                            }}
                            onSubmit={(values) => console.log(values)}
                            validationSchema={signupSchema}
                        >
                            {({ handleChange, handleBlur, handleSubmit, errors, values }) => (
                                <>
                                    <ScrollView>
                                        <View style={styles.formContainer}>
                                            <Input
                                                placeholder="Full Name"
                                                onChangeText={handleChange("name")}
                                                onBlur={handleBlur("name")}
                                                value={values.name}
                                                errorMessage={errors.name && errors.name}
                                                inputStyle={{ color: Colors.secondaryText }}
                                            />
                                            <Input
                                                placeholder="Email"
                                                onChangeText={handleChange("email")}
                                                onBlur={handleBlur("email")}
                                                keyboardType="email-address"
                                                value={values.email}
                                                errorMessage={errors.email && errors.email}
                                                inputStyle={{ color: Colors.secondaryText }}
                                            />
                                            <Input
                                                placeholder="Contact"
                                                onChangeText={handleChange("contact")}
                                                onBlur={handleBlur("contact")}
                                                keyboardType="number-pad"
                                                value={values.contact}
                                                errorMessage={errors.contact && errors.contact}
                                                inputStyle={{ color: Colors.secondaryText }}
                                            />
                                            <Input
                                                placeholder="Address"
                                                onChangeText={handleChange("address")}
                                                onBlur={handleBlur("address")}
                                                // keyboardType="email-address"
                                                value={values.address}
                                                errorMessage={errors.address && errors.address}
                                                inputStyle={{ color: Colors.secondaryText }}
                                            />
                                            <Input
                                                placeholder="Password"
                                                onChangeText={handleChange("password")}
                                                onBlur={handleBlur("password")}
                                                secureTextEntry={true}
                                                value={values.password}
                                                errorMessage={errors.password && errors.password}
                                                inputStyle={{ color: Colors.secondaryText }}
                                            />
                                            <Input
                                                placeholder="Confirm Password"
                                                onChangeText={handleChange("confirmPassword")}
                                                onBlur={handleBlur("confirmPassword")}
                                                secureTextEntry={true}
                                                value={values.confirmPassword}
                                                errorMessage={errors.confirmPassword && errors.confirmPassword}
                                                inputStyle={{ color: Colors.secondaryText }}
                                            />

                                            <TouchableWithoutFeedback onPress={() => handleSubmit()}>
                                                <View style={{ ...styles.submit_btn }}>
                                                    <Text style={{ textAlign: "center", color: Colors.light, textTransform: "uppercase" }}>Register</Text>
                                                </View>
                                            </TouchableWithoutFeedback>
                                        </View>
                                    </ScrollView>
                                    <Text style={styles.createAccount}>Already have an account?</Text>
                                    <Text style={styles.createAccountLink} onPress={() => setIsLogin(!isLogin)}>Click here to login.</Text>
                                </>
                            )}
                        </Formik>
                    </View>
                </BounceInView>
            )}

        </View >
    )
}

const styles = StyleSheet.create({
    upperContainer: {
        flex: 1,
    },
    lowerContainer: {
        flex: 1,
    },
    logoContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: "uppercase"
    },
    formContainer: {
        // flex: 0.75,
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    submit_btn: {
        backgroundColor: Colors.accent,
        padding: 10,
        borderRadius: 4,
        elevation: 4,
        marginVertical: 20
    },
    createAccount: {
        textAlign: 'center'
    },
    createAccountLink: {
        textAlign: 'center',
        color: Colors.accent
    }
})