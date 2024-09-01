import { useCallback } from "react";
import { ListRenderItemInfo, StyleSheet } from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { ROW_GAP } from "../constants";
import AnimatedListItem from "./AnimatedListItem";

const windowSize = 15;
type AnimatedListProps = Readonly<{ data: string[]; onEndReached(): void }>;

function AnimatedList({ data, onEndReached }: AnimatedListProps) {
  const y = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    y.value = event.contentOffset.y;
  });

  const renderItem = useCallback(
    ({ index, item }: ListRenderItemInfo<string>) => {
      return <AnimatedListItem index={index} value={item} y={y} />;
    },
    []
  );

  return (
    <Animated.FlatList
      contentContainerStyle={styles.flatlistContent}
      data={data}
      initialNumToRender={windowSize}
      keyExtractor={(item) => item}
      maxToRenderPerBatch={windowSize}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      onScroll={scrollHandler}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      style={styles.flatlist}
      windowSize={windowSize}
    />
  );
}

const styles = StyleSheet.create({
  flatlist: { flex: 1 },
  flatlistContent: { flexGrow: 1, padding: ROW_GAP, rowGap: ROW_GAP },
});

export default AnimatedList;
