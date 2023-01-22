import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: '#000000',
    fontFamily: 'BakbakOne-Regular',
    //fontWeight: '800',
    fontSize: 25,
    left: '7%',
  },
  img2: {
    //bottom: '20%',
    //marginVertical:'30%',
    width: width / 1.15,
    height: height / 2.5,
    borderRadius: 20,
    //marginHorizontal:'5%',
  },
  textInput1: {
    borderBottomWidth: 1.5,
    //width: 367,
    width: 309,
    height: 69,
    fontWeight: '500',
    color: '#000000',
    fontSize: 18,
    elevation: 5,
    backgroundColor: '#FFFEFC',
    paddingTop: 20,
    //bottom:'23%',
    borderRadius: 20,
    paddingLeft: 20,
    //paddingVertical:20,
    borderBottomWidth: 0.1,
    //marginHorizontal:'10%'
  },
  rect: {
    width: 10,
  },
};
