import Animated, { 
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
  Extrapolate,
  runOnJS
 } from 'react-native-reanimated';

import { Container } from './styles';

import {
  Logo, Brand
} from '@assets/index'
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

interface SplashProps {

}

const Splash = ({  }: SplashProps) => {

  const { navigate } = useNavigation()

  const startApp = () => {
    navigate('Home')
  }

  const splashAnimation = useSharedValue(0)

  const logoStyles = useAnimatedStyle(() => {
  return {
    opacity: interpolate(splashAnimation.value , 
      [0, 25, 50], 
      [0, .3, 1],
    ),
    transform: [{
      translateX: interpolate(splashAnimation.value, 
        [0, 50],
        [-50, 0],
        Extrapolate.CLAMP
      )
    }]
  }
  })

  const brandStyles = useAnimatedStyle(() => {
  return {
    opacity: interpolate(splashAnimation.value , 
      [0, 50], 
      [1, 0]
    ), 
    transform: [{
      translateX: interpolate(splashAnimation.value, 
        [0, 50],
        [0, -50],
        Extrapolate.CLAMP
      )
    }]


  }
  })

 useEffect(() => {
  splashAnimation.value = withTiming(50, { duration: 1000},
  () => {
    'worklet', 
    runOnJS(startApp)()
  }  
  )
 },[])



  return (
    <Container>
     <Animated.View style={[brandStyles, { position: 'absolute'}]}>
      <Brand 
        width={80}
        height={50}
      />
     </Animated.View>

     <Animated.View style={[logoStyles, { position: 'absolute'}]}>
      <Logo
        width={180}
        height={20}
      />
     </Animated.View>

    </Container>
  );
}

export { Splash }


