import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import MainLayout from '../components/layout/mainLayout';
import Home from '../pages/main/home';
import MyFavorites from '../pages/main/myFavorites';
import Profile from '../pages/main/profile';
import VehicleDetails from '../pages/main/vehicleDetails';
import MyAds from '../pages/main/myAds';

const Drawer = createDrawerNavigator();

const withMainLayout = (Component: any, title: string) => {
  return (props: any) => (
    <MainLayout title={title}>
      <Component {...props} />
    </MainLayout>
  );
};

export const MainRoute = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Início" component={withMainLayout(Home, 'Início')} />
      <Drawer.Screen
        name="Meus favoritos"
        component={withMainLayout(MyFavorites, 'Meus favoritos')}
      />
      <Drawer.Screen
        name="Perfil"
        component={withMainLayout(Profile, 'Perfil')}
      />
      <Drawer.Screen
        name="Detalhes do veículo"
        component={withMainLayout(VehicleDetails, 'Detalhes do veículo')}
      />
      <Drawer.Screen
        name="Meus anúncios"
        component={withMainLayout(MyAds, 'Meus anúncios')}
      />
    </Drawer.Navigator>
  );
};
