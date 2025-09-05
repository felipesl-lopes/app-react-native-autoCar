import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import MainLayout from '../components/layout/mainLayout';
import Home from '../pages/main/home';
import MyFavorites from '../pages/main/myFavorites';
import Profile from '../pages/main/profile';

const Drawer = createDrawerNavigator();

const withMainLayout = (Component: any) => {
  return (props: any) => (
    <MainLayout>
      <Component {...props} />
    </MainLayout>
  );
};

export const MainRoute = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Início" component={Home} />
      <Drawer.Screen
        name="Meus favoritos"
        component={withMainLayout(MyFavorites)}
      />
      <Drawer.Screen name="Perfil" component={withMainLayout(Profile)} />
    </Drawer.Navigator>
  );
};
