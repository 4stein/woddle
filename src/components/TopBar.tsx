import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import IMAGES from '../assets/images';
import {FONTS} from '../constants';

interface ITopBar {
  data: {
    logo: string;
    avatar: number;
  };
}

const TopBar = ({data}: ITopBar) => {
  return (
    <View style={styles.topBar}>
      <View>
        <Text style={styles.logo}>{data.logo}</Text>
      </View>
      <View style={styles.topBarInfo}>
        <Image source={IMAGES.TOPICON} style={styles.topBarIcon} />
        <Image source={data.avatar} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    fontFamily: FONTS.RIBEYE,
    fontSize: 40,
    fontWeight: '400',
    lineHeight: 40,
    letterSpacing: -0.5,
    textAlign: 'left',
    color: '#000000',
  },
  topBarInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topBarIcon: {
    marginRight: 20,
  },
});

export default TopBar;
