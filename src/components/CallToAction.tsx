import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

interface ICallToActionProps {
  data: {
    image: number;
  };
}

const CallToAction = ({data}: ICallToActionProps) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image source={data.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 19,
  },
});

export default CallToAction;
