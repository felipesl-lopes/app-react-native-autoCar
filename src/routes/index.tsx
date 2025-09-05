import React, { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { MainRoute } from './app.route';
import { AuthRoute } from './auth.route';

const Routes: React.FunctionComponent = () => {
  const { signed } = useContext(AuthContext);

  return signed ? <MainRoute /> : <AuthRoute />;
};

export default Routes;
