import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { Routes, Route, Navigate } from "react-router";
import { refreshUser } from 'Redux/Auth/operations';

import Loader from 'components/Loader';
import {Layout} from 'components/Layout/Layout';
import { PrivateRoute } from 'components/PrivateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute';

const Home = lazy(() => import("pages/Home/Home"));
const Register = lazy(() => import("pages/Register/Register"));
const Login = lazy(() => import("pages/Login/Login"));
const ContactsBook = lazy(() => import("pages/ContactsBook/ContactsBook"));

export const App = () => {
    const dispatch = useDispatch();
    const { isRefreshing } = useAuth();
  
    useEffect(() => {
      dispatch(refreshUser());
    }, [dispatch]);

    if (isRefreshing) {
        return <Loader />;
    }
    
    return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/register" element={
            <RestrictedRoute><Register/></RestrictedRoute>
          }/>
          <Route path="/login" element={
            <RestrictedRoute><Login/></RestrictedRoute>
          }/>
          <Route path="/contacts" element={
            <PrivateRoute><ContactsBook/></PrivateRoute>
          }/> 
          <Route path="*" element={<Navigate to="/"/>}/>
        </Route>
      </Routes>
    );
}
