import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import ScreenWrapper from '../../components/ScreenWrapper';
import MainHeader from './components/MainHeader';

const LoginScreen: FC = () => {
  return (
    <ScreenWrapper>
      <View style={{flex: 1}}>
        <MainHeader />
        <Text>LoginScreen</Text>
      </View>
    </ScreenWrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
