import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FONTS} from '../constants';

interface ItemProps {
  item: {
    id: string;
    title: string;
    description1: string;
    description2: string;
    isBigDescription1: boolean;
    isBigDescription2: boolean;
    bottomText: string;
    color: string;
  };
  index: number;
}

const Card = ({item, index}: ItemProps) => {
  const {
    title,
    description1,
    description2,
    isBigDescription1,
    isBigDescription2,
    bottomText,
    color,
  } = item;

  const isMargin = index % 2 === 0 ? 15 : 0;
  return (
    <View style={[styles.item, {backgroundColor: color, marginLeft: isMargin}]}>
      <Text style={styles.title}>{title}</Text>
      <Text
        style={
          isBigDescription1 ? styles.descriptionBig : styles.descriptionSmall
        }>
        {description1}
      </Text>
      <Text
        style={
          isBigDescription2 ? styles.descriptionBig : styles.descriptionSmall
        }>
        {description2}
      </Text>
      <Text style={styles.bottomText}>{bottomText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 0,
    width: '47%',
    height: 173,
    borderRadius: 15,
  },
  title: {
    fontFamily: FONTS.ROBOTO,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.06,
    textAlign: 'left',
    color: '#363636',
    marginBottom: 15,
  },
  descriptionSmall: {
    fontFamily: FONTS.ROBOTO_LIGHT,
    fontSize: 24.02,
    fontWeight: '300',
    lineHeight: 37.5,
    textAlign: 'left',
  },
  descriptionBig: {
    fontFamily: FONTS.ROBOTO_LIGHT,
    fontSize: 32,
    fontWeight: '300',
    lineHeight: 37.5,
    textAlign: 'left',
  },
  bottomText: {
    fontFamily: FONTS.ROBOTO,
    fontWeight: '400',
    position: 'absolute',
    left: 18,
    bottom: 20,
    fontSize: 10,
    color: '#878585',
  },
});

export default Card;
