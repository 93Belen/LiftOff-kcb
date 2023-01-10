import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate, Outlet } from 'react-router-dom';
import { selectJwt } from '../../state-redux/Store/Selectors';
import { Searcher } from '../Searcher/Searcher';

export const PrivateRoutes = () => {
    const jwt = localStorage.getItem("jwt");


    return jwt ? <Outlet /> : <Navigate to="/login" />;
}