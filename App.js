import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React from 'react';
import { StatusBar, StyleSheet, Text, View, Platform} from 'react-native';

const isAndroid = Platform.OS === 'android';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={{padding:16, backgroundColor:'green'}}>
          <Text>Search</Text>
        </View>
        <View style={{flex:1, padding:16, backgroundColor:'blue'}}>
          <Text>List</Text>
        </View>
      </View>
      <ExpoStatusBar style="auto"/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: isAndroid ? StatusBar.currentHeight: 0,
  },
});
