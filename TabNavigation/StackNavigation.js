import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HelpScreen from "../Screens/HelpScreen";
import TabNavigation from "./TabNavigation";
const Stack = createStackNavigator();

function MyStack (){
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MainTabs"
            component={TabNavigation}
            options={{ headerShown: false }}
          />
          <Stack.Screen name='Help' component={HelpScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default MyStack;