import { StackNavigator } from 'react-navigation'
import { ProfileScene } from './scenes'

export const Routing = StackNavigator({
  initialRouteName: { screen: ProfileScene },
  Profile         : { screen: ProfileScene }
})