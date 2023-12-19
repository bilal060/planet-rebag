import {StyleSheet} from 'react-native';
import color from '../../../assets/color/color';
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
    backgroundColor: '#EEEEEE',
    padding: 7,
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
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#EEEEEE',
    marginHorizontal: 20,
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
    fontSize: 13,
    padding: 7,
    color: 'black',
  },
  data: {
    fontSize: 13,
    paddingHorizontal: 10,
    color: 'black',
  },
  dataContainer: {
    alignItems: 'flex-start',
    width: '50%',
  },
});
export default styles;
