import React from 'react';
import {StyleSheet, View} from 'react-native';
import Card from './Card';

interface ISliderPage {
  id: string;
  title: string;
  description1: string;
  description2: string;
  isBigDescription1: boolean;
  isBigDescription2: boolean;
  bottomText: string;
  color: string;
}

interface ISliderProps {
  data: ISliderPage[];
}

const Cards = ({data}: ISliderProps) => {
  return (
    <View style={styles.container}>
      {data.map((item: ISliderPage, index: number) => (
        <Card key={item.id} item={item} index={index + 1} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: '40%',
    height: 100,
  },
  title: {
    fontSize: 15,
  },
});

export default Cards;
