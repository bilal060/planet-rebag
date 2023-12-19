/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import color from '../../../../assets/color/color';
import {fontSize} from '../../../../assets/responsiveness';

const styles = StyleSheet.create({
  parentContainer: {
    width: '100%',
    height: '100%',
    padding: '8%',
    backgroundColor: 'white',
  },
  welcomeContainer: {
    width: '100%',
    marginTop: '8%',
  },
  welcomeTxt: {
    fontSize: fontSize.twentyfour,
    fontWeight: '800',
    color: '#1E252B',
  },
  historyContainer: {
    width: '45%',
    //backgroundColor: 'red',
    //flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
  },
  hsitroyTxt: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E252B',
    //lineHeight: 17,
  },
  allcomponentContainer: {
    width: '55%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  parentPlanetType: {
    width: '100%',
    marginTop: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  parentAllcomponent: {
    width: '100%',
    marginTop: '6%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '1%',
  },
});

export default styles;
