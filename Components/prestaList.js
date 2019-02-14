// Components/prestaList.js

import React from 'react'
import { StyleSheet, View, Text, Image,FlatList } from 'react-native'
import films from '../Helpers/filmData'
import PrestaItem from './PrestaItem'


class PrestaList extends React.Component {
  render() {
    console.log(this.props)
    return (
      <FlatList
        data={films}
        keyExtractor={(item) => item.id.toString()}
        keyExtractor={(item) => item.desc.toString()}
        renderItem={({item}) => <PrestaItem/>}
      />
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row'
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})

export default PrestaList
