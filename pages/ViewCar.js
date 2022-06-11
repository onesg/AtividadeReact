// #2 Integration of Firebase Cloud Firestore Database
// https://aboutreact.com/react-native-firebase-cloud-firestore-db
 
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import firestore from '@react-native-firebase/firestore';
 
const ViewCar = () => {

  //let [userId, setUserId] = useState('');
  //let [userData, setUserData] = useState({});

  let [carId, setCarId] = useState('');
  let [carData, setCarData] = useState({});
 
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
          let carDetails = {};
          // Document fields
          carDetails = documentSnapshot.data();
          // All the document related data
          carDetails['id'] = documentSnapshot.id;
          setCarData(carDetails);
        });
    }
  };
 
  return (
    <View style={{paddingHorizontal: 35}}>
      <Mytextinput
        placeholder="Enter Car Id"
        onChangeText={(carId) => setCarId(carId)}
        value={carId}
        style={{padding: 10}}
      />

      <Mybutton title="Search Car" customClick={searchCar} />

      <View style={{marginTop: 10}}>
        <Text>
          Car Id: {carData ? carData.id : ''}
        </Text>
        <Text>
          Car Name: {carData ? carData.name : ''}
        </Text>
        <Text>
          Car Model: {carData ? carData.model : ''}
        </Text>
        <Text>
          Car Year: {carData ? carData.year : ''}
        </Text>
        <Text>
          Car Color: {carData ? carData.color : ''}
        </Text>
      </View>
    </View>
  );
};
 
export default ViewCar;
