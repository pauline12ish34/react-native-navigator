import { View, Text,Button } from 'react-native'
import React from 'react'

// const navigateToMovies

const Contact = ({navigation}) => {
  return (
    <View>

      <Text>this is the contact page</Text>
      <Text onPress={()=>{navigation.navigate('Movies')}}>Go to movies</Text>

     
    </View>
  )
}

export default Contact