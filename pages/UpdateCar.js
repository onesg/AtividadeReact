// #2 Integration of Firebase Cloud Firestore Database
// https://aboutreact.com/react-native-firebase-cloud-firestore-db

import React, { useState } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import firestore from '@react-native-firebase/firestore';

const UpdateCar = (props) => {

  //let [userId, setUserId] = useState('');
  //let [userName, setUserName] = useState('');
  //let [userContact, setUserContact] = useState('');
  //let [userAddress, setUserAddress] = useState('');

  let [carId, setCarId] = useState('');
  let [carName, setCarName] = useState('');
  let [carModel, setCarModel] = useState('');
  let [carYear, setCarYear] = useState('');
  let [carColor, setCarColor] = useState('');

  const searchCar = () => {
    if (carId) {
      firestore()
        .collection('Carros')
        .doc(carId)
        .get()
        .then((documentSnapshot) => {
          /*
            A DocumentSnapshot belongs to a specific document,
            With snapshot you can view a documents data,
            metadata and whether a document actually exists.
          */
          if (documentSnapshot.exists) {

            setCarName(documentSnapshot.data().name);
            setCarModel(documentSnapshot.data().model);
            setCarYear(documentSnapshot.data().year);
            setCarColor(documentSnapshot.data().color);

          } else {

            setCarName('');
            setCarModel('');
            setCarYear('');
            setCarColor('');

          }
        });
    }
  };

  const updateCar = () => {
    if (carId && carName && carModel && carYear && carColor) {
      /*
        Please note update is not just for the update in firebase,
        while updating if record not found in firebase then
        it will create one, update Method also provides support for
        updating deeply nested values via dot-notation
        .update({ 'details.address.zipcode': 452012 })
      */

      firestore()
        .collection('Carros')
        .doc(carId)
        .update({

          name: carName,
          model: carModel,
          year: carYear,
          color: carColor

        })
        .then(() => {
          Alert.alert(
            'Success',
            'Updated Successfully',
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
                  () => props.navigation.navigate('HomeScreen'),
              },
            ],
            { cancelable: false },
          );
        });
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: 35
      }}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          behavior="padding"
          style={{ flex: 1, justifyContent: 'space-between' }}>

          <Mytextinput
            placeholder="Enter Car Id"
            style={{ padding: 10 }}
            value={carId}
            onChangeText={(carId) => setCarId(carId)}
          />

          <Mybutton title="Search Car" customClick={searchCar} />

          <Mytextinput
            placeholder="Digite o nome"
            value={carName}
            style={{ padding: 10 }}
            onChangeText={
              (carName) => setCarName(carName)
            }
          />

          <Mytextinput
            placeholder="Digite o modelo"
            value={carModel}
            style={{ padding: 10 }}
            onChangeText={
              (carModel) => setCarModel(carModel)
            }
          />

          <Mytextinput
            placeholder="Digite o ano"
            value={carYear}
            style={{ padding: 10 }}
            onChangeText={
              (carYear) => setCarYear(carYear)
            }
          />

          <Mytextinput
            placeholder="Digite a cor"
            value={carColor}
            style={{ padding: 10 }}
            onChangeText={
              (carColor) => setCarColor(carColor)
            }
          />


          <Mybutton title="Update Car" customClick={updateCar} />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default UpdateCar;
