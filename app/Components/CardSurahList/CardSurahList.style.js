import { StyleSheet } from 'react-native';

import { Colors } from '../../Utils/Colors';
import { FontType } from '../../Themes/Fonts';

const Styles = StyleSheet.create({
  CardStyle: {
    height: 100,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  numberCircleContainer: {
    flex: 1.25,
    justifyContent: 'center',
  },
  descContainer: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  goToDetailContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  NumberCircle: {
    height: 45,
    width: 45,
    borderRadius: 100,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    marginLeft: 10,
    alignItems: 'center',
  },
  textNumber: {
    color: Colors.white,
    fontSize: 18,
    fontFamily: FontType.semiBold,
  },
  descTitle: {
    fontSize: 16,
    paddingTop: 10,
    fontFamily: FontType.semiBold,
  },
  descSubTitle: {
    fontSize: 13,
    paddingTop: 5,
    color: Colors.grey,
    fontFamily: FontType.regular,
  },
  expandIconStyle: {
    paddingTop: 5,
    marginLeft: 15,
    color: Colors.grey,
  },
});

export { Styles };