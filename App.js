import { StyleSheet, View } from 'react-native';
import { Navbar } from './src/Navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar></Navbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
