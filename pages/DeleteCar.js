// #2 Integration of Firebase Cloud Firestore Database
// https://aboutreact.com/react-native-firebase-cloud-firestore-db

import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import firestore from '@react-native-firebase/firestore';

const DeleteCar = (props) => {
  let [carId, setCarId] = useState('');

  const deleteCar = () => {
    if (carId) {
      /* "delete()" method will delete the whole document
        If you want to delete any field from the document
        then you can use "FieldValue"
        Ref: https://rnfirebase.io/reference/firestore/fieldvalue
        firestore().collection('Users').doc('101')
        .update({
          age: firestore.FieldValue.delete(),
        });
      */
      firestore()
        .collection('Carros')
        .doc(carId)
        .delete()
        .then(() => {
          Alert.alert(
            'Success',
            'Deleted Successfully',
            [
              {
                text: 'Ok',
                onPress:
                  () => props.navigation.navigate('HomeScreen')
              },
            ],
            { cancelable: false },
          );
        })
        .catch((error) => {
          Alert.alert(
            'Exception',
            error,
            [
              {
                text: 'Ok',
                onPress:
                  () => props.navigation.navigate('HomeScreen')
              },
            ],
            { cancelable: false },
          );
        });
    } else {
      alert('Please Enter ID');
    }
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: 35
      }}>
      <Mytextinput
        placeholder="Enter Car Id"
        onChangeText={(carId) => setCarId(carId)}
        style={{ padding: 10 }}
      />
      <Mybutton title="Delete Car" customClick={deleteCar} />
    </View>
  );
};

export default DeleteCar;
