import { StyleSheet } from 'react-native';

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
    color:"#fff"
  },

  container: {
    width: '100%',
    height:"100%",
    alignItems: 'center',
    
  },
  bloco: {
    height: 53,
    width: 350,
    backgroundColor: 'white',
    borderRadius: 8,
    border: 1,
    margin: 9,
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    
  },
  texto: {
    paddingLeft: 15
  },
  Text:{
    paddingLeft: 15,
    
  }
});