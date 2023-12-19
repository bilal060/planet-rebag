import {StyleSheet} from 'react-native';
import {fontSize, scalableheight} from '../../../assets/responsiveness';
const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginVertical: 22,
    marginLeft: 22,
  },
  HeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3%',
  },
  headerText: {
    flex: 0.84,
    textAlign: 'center',
    fontSize: fontSize.eightteen,
    fontWeight: '800',
    color: 'black',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    lineHeight: 18,
    color: '#000000',
  },
  dropView: {
    marginTop: 7,
  },
  content: {
    fontSize: 14.5,
    color: '#777777',
    fontWeight: '400',
  },
  img: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: 'black',
  },
  itemView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemMainView: {
    marginVertical: 10,
    borderBottomWidth: 1,
    marginHorizontal: 24,
    paddingBottom: 20,
    borderColor: '#E7E6E9',
  },
  srchimg: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  TextInputView: {
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 30,
  },
};
export default styles;
