// #2 Integration of Firebase Cloud Firestore Database
// https://aboutreact.com/react-native-firebase-cloud-firestore-db
/*Custom Button*/
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
 
const Mybutton = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};
 
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#03A89E',
    color: '#ffffff',
    padding: 10,
    height: 40,
    marginVertical: 10,
  },
  text: {
    color: '#ffffff',
  },
});
 
export default Mybutton;
