import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/authentication/login';
import RecoverPassword from '../pages/authentication/recoverPassword';
import Register from '../pages/authentication/register';

const Stack = createNativeStackNavigator();

export const AuthRoute: React.FunctionComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          animation: 'slide_from_left',
        }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Register}
        options={{
          animation: 'slide_from_right',
        }}
      />
      <Stack.Screen
        name="Recuperar senha"
        component={RecoverPassword}
        options={{
          animation: 'slide_from_right',
        }}
      />
    </Stack.Navigator>
  );
};
