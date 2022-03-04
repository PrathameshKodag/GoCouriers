import * as React from 'react';
import BottomTabs from './bottomScreens/BottomTabs'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Login from './screens/Users/Login';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(["Warning:`useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`"])

export default function App() {

  const [loggedin, setLoggedin] = React.useState(false)

  const loginHandle = (status) => {
    setLoggedin(status)
  }

  return (
    <>
      {loggedin ? (
        <NavigationContainer>
          <BottomTabs />
        </NavigationContainer>
      ) : (
        <Login login={loginHandle} />
      )}
      <StatusBar style='light' />
    </>
  );
}
