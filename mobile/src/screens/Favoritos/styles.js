import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#F3F3F3',
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
  cardContianer: {
    display:"flex",
    flexDirection:"row",
    flexWrap:"wrap",
    
   
  },
  card:{
    width:"50%",
    justifyContent:"center",
    padding:20,
    margin:10
    
    
  },
  cardText:{
    padding:5,
    margin:0
  },
  nomePet:{
    fontSize:16,
    fontFamily:"Inter_400Regular",
    margin:0,
    marginBottom:15

  },
  localPet:{
    fontSize:14,
    fontFamily:"Inter_400Regular"
    
  }
});