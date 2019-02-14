import React from 'react'
import {StyleSheet,View,Button,TextInput,Text,FlatList} from 'react-native'
import films from '../Helpers/filmData'

class Search extends React.Component {
  render() {
    return(
      <View style ={styles.main_container}>
        <TextInput style = {styles.textInput} placeholder='Titre de la prestation'/>
        {//<Button style={{height:50}} title="rechercher" onPress={() => {}}/>
        //renderItem={({item}) => <Text>{item.desc}</Text>}
      }
        <FlatList
          data={films}
            renderItem={({item}) => <Text>{item.title}</Text>}

        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  main_container: {
    marginTop: 20
  },
  textInput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Search
