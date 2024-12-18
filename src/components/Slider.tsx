import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import {FONTS} from '../constants';

interface ISliderPage {
  id: number;
  name: string;
  age: string;
  image: number;
  icon: number;
}

interface ISlider {
  data: ISliderPage[];
}

const Slider = ({data}: ISlider) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pagerRef = useRef<PagerView>(null);

  const handleDotPress = (index: number) => {
    if (Platform.OS === 'android') {
      pagerRef.current?.setPageWithoutAnimation(index);
    } else {
      pagerRef.current?.setPage(index);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <PagerView
        ref={pagerRef}
        style={styles.pagerView}
        initialPage={0}
        onPageSelected={e => setCurrentPage(e.nativeEvent.position)}>
        {data.map((page: ISliderPage) => (
          <View key={page.id} style={styles.page}>
            <Image source={page.image} style={styles.image} />
            <View style={styles.nameContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.name}>{page.name}</Text>
                <Image source={page.icon} style={styles.icon} />
              </View>
              <Text style={styles.description}>{page.age}</Text>
            </View>
          </View>
        ))}
      </PagerView>

      <View style={styles.pagination}>
        {[0, 1].map((dot, index) => (
          <TouchableOpacity key={index} onPress={() => handleDotPress(index)}>
            <View
              style={[styles.dot, currentPage === index && styles.dotActive]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 223,
    width: '100%',
    marginBottom: 10,
  },
  pagerView: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  name: {
    fontFamily: FONTS.CABIN_BOLD,
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 17.01,
    textAlign: 'left',
    color: '#363636',
  },
  nameContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 25,
    opacity: 0.7,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 12,
    height: 12,
    marginLeft: 15,
  },
  image: {
    width: '100%',
  },
  description: {
    fontFamily: FONTS.CABIN,
    marginTop: 3,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17.01,
    textAlign: 'left',
    color: '#363636',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 4,
    backgroundColor: 'transparent',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: 'black',
  },
  dotActive: {
    backgroundColor: 'black',
  },
});

export default Slider;
