import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './src/contexts/auth.context';
import Routes from './src/routes';
import theme from './src/styles/theme';

const App: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
