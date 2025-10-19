import React from 'react';
import { View, Text } from '../ui';
import { styles } from '../../styles/styles';

export default function TeacherMessage() {
  return (
    <View style={styles.teacherContainer}>
      <Text style={styles.sectionTitle}>Teacher's Message</Text>
      <Text style={styles.teacherText}>
        Keep up the hard work and consistency. Learning React Native is a step towards building amazing mobile apps!
      </Text>
    </View>
  );
}
