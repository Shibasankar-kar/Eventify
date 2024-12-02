import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {FC, ReactNode} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ScreenWrapperProps {
  children: ReactNode;
}

const ScreenWrapper = ({children}: ScreenWrapperProps) => {
  const insets = useSafeAreaInsets();
  return (
    <LinearGradient
      colors={['#9cfbe5', '#fff', '#eee']}
      style={styles.container}>
      <SafeAreaView
        style={{
          height: insets.top,
        }}>
        <StatusBar backgroundColor={'transparent'} translucent={true} />
      </SafeAreaView>
      {children}
    </LinearGradient>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
