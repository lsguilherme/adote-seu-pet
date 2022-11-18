import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  
  scrollView:{
    height:"100%",
    flexGrow:1,
    display:'flex'
  },

  fotoPet:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
  
  descricaoFotoPet:{
    color:"#fff",
    width: "100%",
    display:"flex",
    textAlign:"center"
  },

  container: {
    flex: 1,    
    backgroundColor: '#F3F3F3',
    width: '100%',
    height:"100%",
    alignItems: 'center',
    
  },
  bloco: {
    height: 53,
    // width: 350,
    backgroundColor: 'white',
    borderRadius: 8,
    border: 1,
    margin: 9,
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    
  },
  blocoInterno:{
    margin:10
    // width:310
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