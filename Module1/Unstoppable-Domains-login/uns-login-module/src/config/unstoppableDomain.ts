import UAuth from '@uauth/js';

const ProductionCredentials = {
  clientID: '',
  clientSecret: '',
  scope: 'openid email wallet',
  redirectUri: 'https://sites.google.com/view/dronesforrealestate/home',
  postLogoutRedirectUri: 'https://sites.google.com/view/integratedwatermanagment/home',
};

export const uauth = new UAuth(ProductionCredentials);