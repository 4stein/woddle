import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Alert, Modal, Platform, Pressable, StyleSheet} from 'react-native';
import SCREENS from '../screens';
import HomeScreen from '../screens/HomeScreen';
import {Image, View, Text} from 'react-native';
import IMAGES from '../assets/images';
import {useState} from 'react';
import {FONTS} from '../constants';

const Tab = createBottomTabNavigator();
const TabNavigation: any = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Tab.Navigator
      initialRouteName={SCREENS.HOME}
      screenOptions={{
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarLabel: ({focused}) => (
            <Text
              style={[
                styles.tabBarLabel,
                focused
                  ? styles.tabBarLabelFocused
                  : styles.tabBarLabelUnfocused,
              ]}>
              Home
            </Text>
          ),
          tabBarIcon: () => (
            <View style={styles.tabBarIconContainer}>
              <Image source={IMAGES.HOME} style={styles.homeIcon} />
              <View style={styles.centerIconWrapper}>
                <Image source={IMAGES.BIGW} style={styles.centerIcon} />
              </View>

              <Pressable onPress={() => setModalVisible(true)}>
                <Image source={IMAGES.MORE} style={styles.moreIcon} />
                <Text style={styles.moreText}>More</Text>
              </Pressable>

              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>More Options...</Text>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                  </View>
                </View>
              </Modal>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    position: 'absolute',

    right: 0,
    bottom: 50,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#000',
  },
  textStyle: {
    fontFamily: FONTS.ROBOTO_LIGHT,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontFamily: FONTS.ROBOTO,
    marginBottom: 15,
    textAlign: 'center',
  },
  tabBar: {
    height: 80,
    backgroundColor: '#FEF9F5',
  },
  tabBarLabel: {
    fontFamily: FONTS.CABIN,
    fontWeight: '700',
    position: 'absolute',
    left: 0,
    bottom: Platform.OS === 'ios' ? -13 : 10,
    fontSize: 12,
    marginLeft: 69,
  },
  tabBarLabelFocused: {
    color: '#000',
  },
  tabBarLabelUnfocused: {
    color: '#999',
  },
  tabBarIconContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  homeIcon: {
    height: 30,
    width: 30,
    marginTop: Platform.OS === 'ios' ? 35 : 25,
    marginLeft: 50,
  },
  centerIconWrapper: {
    height: 92,
    width: 100,
    position: 'relative',
    top: Platform.OS === 'ios' ? -22 : -35,
    left: 0,
    borderColor: '#FEF9F5',
    borderWidth: 10,
    borderRadius: 50,
  },
  centerIcon: {
    height: 92,
    width: 92,
    position: 'absolute',
    top: -1,
    left: -6,
    backgroundColor: '#FEF9F5',
    borderRadius: 100,
    borderWidth: 0,
  },
  moreIcon: {
    height: 30,
    width: 30,
    marginTop: Platform.OS === 'ios' ? 37 : 24,
    marginRight: 50,
  },
  moreText: {
    fontFamily: FONTS.CABIN,
    fontWeight: '400',
    fontSize: 12,
    color: '#000',
    marginTop: 3,
  },
});

export default TabNavigation;
