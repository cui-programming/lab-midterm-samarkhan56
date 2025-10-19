import React, { useState } from 'react';
import { View, Text, TextInput, Button } from '../ui';
import { styles } from '../../styles/styles';
import { initialAzkaar } from '../../data/azkaar';

export default function SearchAndAdd() {
  const [list, setList] = useState(initialAzkaar);
  const [search, setSearch] = useState('');
  const [newPhrase, setNewPhrase] = useState('');

  const filtered = list.filter(item =>
    item.phrase.toLowerCase().includes(search.toLowerCase())
  );

  const addPhrase = () => {
    const trimmed = newPhrase.trim();
    if (trimmed && !list.some(i => i.phrase.toLowerCase() === trimmed.toLowerCase())) {
      setList([...list, { id: String(list.length + 1), phrase: trimmed, count: 0 }]);
      setNewPhrase('');
    }
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Search & Add</Text>

      <View style={styles.searchRow}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <View style={styles.searchRow}>
        <TextInput
          style={styles.input}
          placeholder="Add new phrase"
          value={newPhrase}
          onChangeText={setNewPhrase}
        />
        <Button onPress={addPhrase}>Add</Button>
      </View>

      <View style={styles.results}>
        {filtered.map((item) => (
          <Text key={item.id}>{item.phrase}</Text>
        ))}
      </View>
    </View>
  );
}
