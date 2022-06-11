// #2 Integration of Firebase Cloud Firestore Database
// https://aboutreact.com/react-native-firebase-cloud-firestore-db
 
import React, {useState} from 'react';
import {View} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import firestore from '@react-native-firebase/firestore';
 
const AddOrderSummary = () => {
  // We will insert these Dummy Order in use collection
  const dummyOrder = [
    {
      itemId: 1,
      itemName: 'T-Shirt',
      itemQuantity: 5,
      amount: 5000,
    },
    {
      itemId: 2,
      itemName: 'Shoe',
      itemQuantity: 2,
      amount: 2000,
    },
  ];
 
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
          let carDetails = {};
          if (documentSnapshot.exists) {
            carDetails = documentSnapshot.data();
            carDetails['id'] = documentSnapshot.id;
          }
          setCarData(carDetails);
        });
    }
  };
 
  const updateOrder = () => {
    if (carId) {
      let newOrderCollection = firestore()
        .collection('Carros')
        .doc(carId)
        .collection('ordersummary');
      dummyOrder.forEach((item) => {
        newOrderCollection
          .add(item)
          .then(() => {
            alert('Added Successfully');
          })
          .catch((error) => {
            alert(`Exception: ${error}`);
          });
      });
    }
  };
 
  return (
    <View style={{paddingHorizontal: 35}}>
      <Mytextinput
        placeholder="Enter User Id"
        onChangeText={(carId) => setCarId(carId)}
        value={carId}
        style={{padding: 10}}
      />
      <Mybutton
        title="Search Car"
        customClick={searchCar}
      />
      {Object.keys(carData).length ? (
        <Mybutton
          title="Add Order in User Document"
          customClick={updateOrder}
        />
      ) : null}
    </View>
  );
};
 
export default AddOrderSummary;
