import { EmojiHappy } from 'iconsax-react-native';
import 'iconsax-react-native';
import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';

import { styles } from './styles';

const App: React.FC = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" animated translucent backgroundColor="rgba(0,0,0,0)" />
      <View>
        <Text>Hello</Text>
        <Text>MARS ROVER GALLERY</Text>
        <EmojiHappy color="#eee" variant="Bulk" size={54} />
      </View>
    </SafeAreaView>
  );
};

export default App;
