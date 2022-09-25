import { useEffect } from 'react';
import { uauth } from './config/unstoppableDomain';
import { useHistory } from 'react-router-dom';

// eslint-disable-next-line no-undef
const CallBack = (): JSX.Element => {
  const { push } = useHistory();
  useEffect(() => {
    uauth.loginCallback().then((res) => {
      push('/loggedIn');
    });
  }, []);

  return (
    <div className="h-screen bg-red-200 w-screen text-center pt-20">
      <p className="text-black">Loding .....</p>
    </div>
  );
};

export default CallBack;
