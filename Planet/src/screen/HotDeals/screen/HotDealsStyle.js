/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {fontSize, scalableheight} from '../../../assets/responsiveness';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: '7%',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scalableheight.twopointfour,
  },
  title: {
    color: 'black',
    fontSize: 17,
    fontWeight: '800',
    lineHeight: 17,
  },
  dealsContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    // padding: 16,
    // marginTop: 16,
    marginVertical: 12,
    marginHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
  },
  dealsContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: 24,
    height: 96,
  },
  dealsimg: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
  },
  dealsTextContainer: {
    paddingLeft: 16,
  },
  dealsTitle: {
    color: 'black',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 8,
    fontFamily:"SFProDisplay-Medium"
  },
  dealsText1: {
    color: '#1E252B',
    fontSize: 13,
    lineHeight: 16,
    fontWeight: '500',
    width: 200,
    fontFamily:"SFProDisplay-Medium"
  },
  line: {
    borderBottomColor: '#EEEEEEEE',
    borderBottomWidth: 1,
  },
  bottomContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 6,
    height: 40,
  },
  redeemPointContainer: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  redeemPoints: {
    color: '#1E252B',
    fontSize: fontSize.fourteen,
    fontWeight: '500',
  },
  RedeemBtnContainer: {
    width: '50%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 18,
  },
  redeemBtn: {
    width: 101,
    height: '82%',
    backgroundColor: '#A3A3A3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
  },
  btnText: {
    color: 'white',
    fontWeight: '700',
    fontSize: fontSize.thirteen,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
     borderRadius: 10,
    // padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height:316,
    width:291
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
export default styles;
