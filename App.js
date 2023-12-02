import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

//Pages
import Home from './src/pages/home';
import FAQ from './src/pages/asks';
import Sobre from './src/pages/sobre';
import Contato from './src/pages/Contato';
import Conversão from './src/pages/conversao';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const icons = {
  Home: {
    name: 'ios-home'
  },
  Conversão:{
    name: 'ios-cash'
  },
  Contato:{
    name: 'ios-call'
  },
  FAQ:{
    name: 'help-circle'
  },
  Sobre:{
    name: 'info'
  }
};


function Tabs(){
  return(
      <Tab.Navigator
      screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size}) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        }})}
     
      tabBarOptions={{
        activeBackgroundColor: 'lightblue',
        activeTintColor: 'black',
        inactiveBackgroundColor: 'grey',
        inactiveTintColor: 'lightgrey'
      }}>

        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Conversão" component={Conversão} />
        <Tab.Screen name="Contato" component={Contato} />
        <Tab.Screen name="FAQ" component={FAQ} />
        <Tab.Screen name="Sobre" component={Sobre} />
      
      </Tab.Navigator>
  );
}


export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="Contato" component={Contato} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
