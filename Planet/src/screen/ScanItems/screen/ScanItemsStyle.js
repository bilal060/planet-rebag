/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import color from '../../../assets/color/color';
import {fontSize} from '../../../assets/responsiveness';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    padding: 20,
    paddingVertical: 30,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  img: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  HeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    // backgroundColor: 'red',
    paddingRight: '13%',
  },
  headerText: {
    color: 'black',
    fontSize: 18,
    // backgroundColor: 'red',
    paddingRight: '13%',
    fontWeight: '700',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginHorizontal: 17,
    marginTop: 15,
  },
  optionsText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  optionsTextSelected: {
    color: 'white',
    backgroundColor: color.green2,
    borderRadius: 8,
  },
  optionsFlex: {
    paddingHorizontal: 13,
    backgroundColor: '#F8F8F8',
    padding: 6,
    borderRadius: 7,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionsImg: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
    tintColor: 'black',
  },
  itemContainer: {
    marginVertical: 10,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    marginHorizontal: 20,
    backgroundColor: 'White',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
    elevation: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  storeName: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,
    color: 'black',
  },
  totalPrice: {
    fontSize: 16,
    color: 'black',
    padding: 10,
    fontWeight: 'bold',
  },
  heading: {
    fontWeight: '700',
    fontSize: fontSize.fifteen,
    padding: 7,
    color: '#1E252B',
  },
  data: {
    fontSize: fontSize.fourteen,
    paddingHorizontal: 10,
    color: '#1E252B',
    fontWeight: '500',
  },
  dataContainer: {
    alignItems: 'flex-start',
    width: '50%',
  },
});
export default styles;
