import { View, Text,Button } from 'react-native'
import React from 'react'

const Movie = ({navigation}) => {
  return (
    <View>
      <Text>Movie</Text>

      <Button title='Go to contact' onPress={()=>{navigation.navigate('Contact')}}/>
    </View>
  )
}

export default Movie