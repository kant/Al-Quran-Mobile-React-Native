import { StyleSheet } from 'react-native';

import { FontType } from '../../Themes/Fonts';

const Styles = StyleSheet.create({
  settingListTitle: {
    fontSize: 16,
    fontFamily: FontType.regular,
  },
  settingListSubTitle: {
    paddingTop: 5,
    fontSize: 13.5,
    color: '#6e848f',
    fontFamily: FontType.regular,
  },
  settingSwitchContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical: 15,
  },
  descView: {
    flex: 6,
  },
  switchView: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { Styles };
