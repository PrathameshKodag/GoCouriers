import React from "react";
import { Text, TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import { Input } from "react-native-elements";
import { Formik } from "formik";
import * as Yup from "yup";
import Colors from "../theme/Colors";


const SendPackageSchema = Yup.object().shape({
  name: Yup.string().min(5).required("Required"),
  address: Yup.string().min(20).required(),
  contact: Yup.number().max(10).required(),
  instructions: Yup.string().max(200),
  delivery_poc: Yup.string().min(5).required(),
  deliveryAddress: Yup.string().min(20).required(),
  deliveryPerson_contact: Yup.number().max(10).required(),
});

export default function Send() {
  return (
    <Formik
      initialValues={{
        name: "",
        address: "",
        contact: "",
        instructions: "",
        delivery_poc: "",
        deliveryAddress: "",
        deliveryPerson_contact: ""
      }}
      onSubmit={(values) => console.log(values)}
      validationSchema={SendPackageSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, errors, values }) => (
        <>
          <View>
            <Text style={{ textTransform: "uppercase", padding: 10, fontWeight: 'bold', fontSize: 18 }}>Pickup point</Text>
            <Input
              placeholder="Name"
              leftIcon={{ type: "font-awesome", name: "user-circle", color: Colors.primary }}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              errorMessage={errors.name && errors.name}
              inputStyle={{ color: Colors.secondaryText }}
            />
            <Input
              placeholder="Address"
              leftIcon={{ type: "font-awesome", name: "address-book", color: Colors.primary }}
              onChangeText={handleChange("address")}
              onBlur={handleBlur("address")}
              value={values.address}
              errorMessage={errors.address && errors.address}
              inputStyle={{ color: Colors.secondaryText }}
            />
            <Input
              placeholder="Contact"
              inputStyle={{ color: Colors.secondaryText }}
              leftIcon={{ type: "font-awesome", name: "phone-square", color: Colors.primary }}
              onChangeText={handleChange("contact")}
              onBlur={handleBlur("contact")}
              value={values.contact}
              keyboardType={"number-pad"}
              errorMessage={errors.contact && errors.contact}
            />
            <Input
              placeholder="Instructions"
              inputStyle={{ color: Colors.secondaryText }}
              leftIcon={{ type: "font-awesome", name: "list-alt", color: Colors.primary, }}
              onChangeText={handleChange("instructions")}
              onBlur={handleBlur("instructions")}
              value={values.instructions}
              errorMessage={errors.instructions && errors.instructions}
            />
          </View>


          <View>
            <Text style={{ textTransform: "uppercase", padding: 10, fontWeight: 'bold', fontSize: 18 }}>Delivery point</Text>
            <Input
              placeholder="Name"
              leftIcon={{ type: "font-awesome", name: "user-circle", color: Colors.primary }}
              onChangeText={handleChange("delivery_poc")}
              onBlur={handleBlur("delivery_poc")}
              value={values.delivery_poc}
              errorMessage={errors.delivery_poc && errors.delivery_poc}
              inputStyle={{ color: Colors.secondaryText }}
            />
            <Input
              placeholder="Address"
              leftIcon={{ type: "font-awesome", name: "address-book", color: Colors.primary }}
              onChangeText={handleChange("deliveryAddress")}
              onBlur={handleBlur("deliveryAddress")}
              value={values.deliveryAddress}
              errorMessage={errors.deliveryAddress && errors.deliveryAddress}
              inputStyle={{ color: Colors.secondaryText }}
            />
            <Input
              placeholder="Contact"
              inputStyle={{ color: Colors.secondaryText }}
              leftIcon={{ type: "font-awesome", name: "phone-square", color: Colors.primary }}
              onChangeText={handleChange("deliveryPerson_contact")}
              onBlur={handleBlur("deliveryPerson_contact")}
              value={values.deliveryPerson_contact}
              keyboardType={"number-pad"}
              errorMessage={errors.deliveryPerson_contact && errors.deliveryPerson_contact}
            />

            <TouchableWithoutFeedback onPress={() => handleSubmit()}>
              <View style={styles.submit_btn}>
                <Text style={{ textAlign: "center", color: Colors.light }}>Submit</Text>
              </View>
            </TouchableWithoutFeedback>
            {/* <Button onPress={handleSubmit} title="Submit" /> */}
          </View>
        </>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  submit_btn: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 4,
    elevation: 4
  },
})