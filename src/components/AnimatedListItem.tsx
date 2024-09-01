import { StyleSheet, Text } from "react-native";
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { ROW_GAP, ITEM_HEIGHT, ITEM_HEIGHT_WITH_GAP } from "../constants";

type AnimatedListItemProps = {
  index: number;
  value: string;
  y: SharedValue<number>;
};

const scale = [1, 1, 0.85];
const translateY = [0, 0, ITEM_HEIGHT_WITH_GAP];

function AnimatedListItem({ index, value, y }: AnimatedListItemProps) {
  const startPosition = index * ITEM_HEIGHT_WITH_GAP + ROW_GAP;
  const endPosition = startPosition + ITEM_HEIGHT_WITH_GAP;

  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [startPosition - 1, startPosition, endPosition];
    return {
      opacity: interpolate(y.value, [startPosition, endPosition], [1, 0]),
      transform: [
        { translateY: interpolate(y.value, inputRange, translateY) },
        { scale: interpolate(y.value, inputRange, scale) },
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
    color: "white",
    fontSize: 20,
  },
  wrapper: {
    backgroundColor: "teal",
    borderRadius: 16,
    height: ITEM_HEIGHT,
    justifyContent: "center",
    padding: 16,
    width: "100%",
  },
});

export default AnimatedListItem;
