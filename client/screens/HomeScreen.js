import React from 'react';
import { StyleSheet, Image, View, SafeAreaView, Button, StatusBar } from 'react-native';

function HomeScreen(props) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#DFF3E3',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button : {
      width : 100,
      backgroundColor : "#ffd1ba",
      color : "#F9F5E3",
      borderRadius : 20,
      margin : 3
      
    }
  });
  return (
      <View style={styles.container}>
        <Image 
          source={{uri: 'https://www.nymetroparents.com/columnpic2/nanny-playing-with-child.jpg'}}
          style={{width: 400, height: 400, borderRadius : 300 }} 
          />
          
          <View style={styles.button}>
            <Button 
              title="Log In" 
              // onPress={}
            />
          </View>
          <View style={styles.button}>
            <Button 
              title="Register"
            />
          </View>
        <StatusBar style="auto" />
      </View>
  );
}

export default HomeScreen;