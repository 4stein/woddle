import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FONTS} from '../constants';

interface IMilestoneData {
  title: string;
  description: string;
  image: number;
  imageArrow: number;
}

interface IMilestoneProps {
  data: IMilestoneData;
}

const Milestone = ({data}: IMilestoneProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={data.image} />
      <Text style={styles.title}>{data.title}</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{data.description}</Text>
        <TouchableOpacity style={styles.icon}>
          <Image source={data.imageArrow} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 55,
  },
  image: {
    marginBottom: 15,
  },
  title: {
    fontFamily: FONTS.ROBOTO,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 14.06,
    textAlign: 'left',
    color: '#000000',
    paddingLeft: 24,
  },
  descriptionContainer: {
    marginTop: 11,
    marginBottom: 21,
    paddingLeft: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  description: {
    fontFamily: FONTS.ROBOTO_LIGHT,
    fontSize: 32,
    fontWeight: '300',
    lineHeight: 37.5,
    textAlign: 'left',
    color: '#000000',
  },
  icon: {
    position: 'absolute',
    right: 23,
    top: 0,
  },
});

export default Milestone;
