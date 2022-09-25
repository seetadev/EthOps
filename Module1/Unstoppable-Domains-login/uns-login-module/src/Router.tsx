import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { uauth } from '~/config/unstoppableDomain';
import IndexScreen from './Index';
import LoggedIn from './LoggedIn';
import CallBack from './Callback';

export const Router = () => {
  const [unstoppableProfile, setUnstoppableProfile] = useState<any>({
    loading: true,
    unstoppableData: null,
  });

  const fetchUser = () => {
    setUnstoppableProfile({
      loading: true,
      unstoppableData: null,
    });
    uauth
      .user()
      .then((data) => {
        console.log(data, 'dataaa');
        if (data) {
          setUnstoppableProfile({
            loading: false,
            unstoppableData: data,
          });
        } else {
          setUnstoppableProfile({
            loading: false,
            unstoppableData: null,
          });
        }
      })
      .catch(() => {
        setUnstoppableProfile({
          loading: false,
          unstoppableData: null,
        });
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);
  const { loading, unstoppableData } = unstoppableProfile;
  return !loading ? (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <IndexScreen />
          </Route>

          <Route exact path="/callback">
            <CallBack />
          </Route>

          <Route exact path="/loggedIn">
            <LoggedIn />
          </Route>
          <Route path="*" render={() => (unstoppableData ? <Redirect to="/loggedIn" /> : <Redirect to="/" />)} />
        </Switch>
      </BrowserRouter>
    </>
  ) : (
    <div className="h-screen w-screen pt-20 bg-black text-center">
      <h1 className="animate-bounce">Loading</h1>
    </div>
  );
};
