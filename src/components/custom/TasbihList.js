import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, Button } from '../ui';
import { styles } from '../../styles/styles';
import { initialAzkaar } from '../../data/azkaar';

export default function TasbihList() {
  const [items, setItems] = useState(initialAzkaar);

  const increment = (id) => {
    setItems(prev =>
      prev.map(it =>
        it.id === id ? { ...it, count: (it.count || 0) + 1 } : it
      )
    );
  };

  const decrement = (id) => {
    setItems(prev =>
      prev.map(it =>
        it.id === id ? { ...it, count: Math.max(0, (it.count || 0) - 1) } : it
      )
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemName}>{item.phrase}</Text>
      <Text style={styles.counter}>{item.count}</Text>
      <Button onPress={() => increment(item.id)}>+</Button>
      <Button onPress={() => decrement(item.id)}>-</Button>
    </View>
  );

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tasbih Counter</Text>
      <FlatList
        data={items}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
      />
    </View>
  );
}
