import {StyleSheet, Text} from 'react-native';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {ROW_GAP, ITEM_HEIGHT, ITEM_POSITION} from '../constants';

type AnimatedListItemProps = {
  index: number;
  value: string;
  x: SharedValue<number>;
};

const scale = [1, 1, 0.8];
const translateY = [0, 0, ITEM_POSITION / 2];

function AnimatedListItem({index, value, x}: AnimatedListItemProps) {
  const startPosition = index * ITEM_POSITION + ROW_GAP;
  const endPosition = startPosition + ITEM_POSITION;

  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [startPosition - 1, startPosition, endPosition];
    return {
      opacity: interpolate(x.value, [startPosition, endPosition], [1, 0]),
      transform: [
        {translateY: interpolate(x.value, inputRange, translateY)},
        {scale: interpolate(x.value, inputRange, scale)},
      ],
    };
  });

  return (
    <Animated.View style={[styles.wrapper, animatedStyle]}>
      <Text style={styles.value}>Value {value}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  value: {
    color: 'white',
    fontSize: 20,
  },
  wrapper: {
    backgroundColor: 'teal',
    borderRadius: 16,
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    padding: 16,
    width: '100%',
  },
});

export default AnimatedListItem;
