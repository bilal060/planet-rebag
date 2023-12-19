import {StyleSheet} from 'react-native';
import color from '../../../assets/color/color';
import {fontSize} from '../../../assets/responsiveness';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 170,
    height: 170,
    resizeMode: 'contain',
  },
  title: {
    color: '#FF3D3D',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  message: {
    color: '#777777',
    fontSize: fontSize.nineteen,
    textAlign: 'center',
    fontWeight: '900',
    lineHeight: 30,
    width: 290,
  },
  buttonContainer: {
    marginBottom: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#79AA00',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
export default styles;
