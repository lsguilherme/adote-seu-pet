import { StatusBar, StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  
  scrollView:{
    height:"100%",
    flexGrow:1,
    display:'flex'
  },

  fotoPet:{
    backgroundColor:"#772583",
    fontSize:24,
    height:"30%",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
  
  descricaoFotoPet:{
    color:"#fff",
    width: 360,
    textAlign:"center"
  },

  container: {
    flex: 1,    
    backgroundColor: '#F3F3F3',
    width: '100%',
    height:"100%",
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
    
  },
  bloco: {
    backgroundColor: 'white',
    borderRadius: 8,
    border: 1,
    margin: 9,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    flexDirection: 'row',
    
  },
  blocoInterno:{
    margin:10
  },
  texto: {
    paddingLeft: 15
  },
  Text:{
    paddingLeft: 15,
    
  },
  botao:{
    // color:"#772583",
    // borderRadius:20,
    // width: 180
  }
});