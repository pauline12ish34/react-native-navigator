import { View, Text,StyleSheet,Pressable } from 'react-native'
import React from 'react'
// import {useTailwind} from 'tailwind-rn';
import tw from 'tailwind-react-native-classnames'

const Home = () => {
  // const tailwind = useTailwind();

  return (
    <View style={styles.container}>
      <Text style={[tw`bg-red-600 text-silver`]}>Home</Text>
     <View>
       <Pressable>
         <Text> Get Started</Text>
       </Pressable>
     </View>



    </View>
  )
}

export default Home

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignContent:'center'
  },

  testing:{
backgroundColor: 'Purple'

  }
})