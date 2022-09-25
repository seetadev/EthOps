import { HelmetProvider } from 'react-helmet-async';
import {Router} from './Router';

export const App = () => {
  return (
    <HelmetProvider>
      <Router />
    </HelmetProvider>
  );
};
