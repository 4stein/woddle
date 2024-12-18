import {Platform} from 'react-native';

const FONTS = {
  ...Platform.select({
    ios: {
      ROBOTO: 'Roboto-Regular',
      ROBOTO_LIGHT: 'Roboto-Light',
      CABIN: 'Cabin-Regular',
      CABIN_BOLD: 'Cabin-Bold',
      RIBEYE: 'Ribeye-Regular',
    },
    android: {
      ROBOTO: 'RobotoRegular',
      ROBOTO_LIGHT: 'RobotoLight',
      CABIN: 'CabinRegular',
      CABIN_BOLD: 'CabinBold',
      RIBEYE: 'RibeyeRegular',
    },
  }),
};

export default FONTS;
