import React from 'react';
import { Text, FlatList, Button, View, TouchableOpacity, StyleSheet} from 'react-native';

const Cat = () => {
  return (
  <View style={{flex: 1, backgroundColor:'#73A9C2', justifyContent:'flex-end', alignItems: 'center'}}>
    
    <TouchableOpacity
       
        style={styles.roundButton1}>
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
       
        style={styles.roundButton1}>
        <Text>Sign up</Text>
      </TouchableOpacity>
  
    </View>
  );
}

export default Cat;

/// Just some styles
const styles = StyleSheet.create({
  roundButton1: {
    width: 200,
    height:30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'orange',
    margin: 3
  },
 
});
