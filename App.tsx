import {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import AnimatedList from './src/components/AnimatedList';

function generateArray(length: number, start: number = 0) {
  return Array.from({length}, (_, index) => (index + start + 1).toString());
}

function App() {
  const [data, setData] = useState(generateArray(30));

  function onEndReached() {
    setData(prev => {
      const newData = generateArray(30, prev.length);
      return [...prev, ...newData];
    });
  }

  return (
    <SafeAreaView style={styles.flex1}>
      <View style={styles.flex1}>
        <AnimatedList data={data} onEndReached={onEndReached} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({flex1: {flex: 1}});

export default App;
