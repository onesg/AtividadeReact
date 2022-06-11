// #2 Integration of Firebase Cloud Firestore Database
// https://aboutreact.com/react-native-firebase-cloud-firestore-db

import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import firestore from '@react-native-firebase/firestore';

const RegisterCar = (props) => {

//  let [userName, setUserName] = useState('');
//  let [userContact, setUserContact] = useState('');
//  let [userAddress, setUserAddress] = useState('');

  let [carName, setCarName] = useState('');
  let [carModel, setCarModel] = useState('');
  let [carYear, setCarYear] = useState('');
  let [carColor, setCarColor] = useState('');

  const handleRegistration = () => {
    if (carName && carModel && carYear && carColor) {
      /*
        "add()" method adds the new document with a random unique ID
        If you'd like to specify your own ID then use "set()" method
        firestore()
          .collection('Users')
          .doc('101')
          .set({
            name: userName,
            contact: userContact,
            address: userAddress,
          })
        .then(() => {
          console.log('User added!');
        });
      */
      firestore()
        .collection('Carros')
        .add({

          //name: userName,
          //contact: userContact,
          //address: userAddress,

          name: carName,
          model: carModel,
          year: carYear,
          color: carColor,

        })
        .then(() => {
          Alert.alert(
            'Success',
            'You are Registered Successfully',
            [
              {
                text: 'Ok',
                onPress:
                  () => props.navigation.navigate('HomeScreen'),
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

      /*
        You can also add the data using set instead of push
        but in that case you have to provide the user id by
        your own as NoSql DBs have no concept of auto increment
      */
      /*
        firebase.database()
          .ref("users/<You custome key for the User>")
          .set({
            name: userName,
            contact: userContact,
            address: userAddress
          }).then(()=>{
          Alert.alert(
            'Success','You are Registered Successfully',
            [{
              text: 'Ok',
              onPress:
              () => props.navigation.navigate('HomeScreen')}
            ],{ cancelable: false });
      });*/
    } else {
      alert('Please fill all the details');
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
            placeholder="Digite o nome"
            onChangeText={
              (carName) => setCarName(carName)
            }
            style={{ padding: 10 }}
          />
          <Mytextinput
            placeholder="Digite o modelo"
            onChangeText={
              (carModel) => setCarModel(carModel)
            }
            maxLength={10}
            keyboardType="numeric"
            style={{ padding: 10 }}
          />
          <Mytextinput
            placeholder="Digite o ano"
            onChangeText={
              (carYear) => setCarYear(carYear)
            }
            maxLength={225}
            numberOfLines={5}
            multiline={true}
            style={{ textAlignVertical: 'top', padding: 10 }}
          />
          <Mytextinput
            placeholder="Digite a cor"
            onChangeText={
              (carColor) => setCarColor(carColor)
            }
            maxLength={10}
            style={{ padding: 10 }}
          />
          <Mybutton
            title="Submit"
            customClick={handleRegistration}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default RegisterCar;
