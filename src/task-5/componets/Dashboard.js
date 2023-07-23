import React from 'react'
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from './Login'
import Registration from './Registration'
import HodDashboard from './HodDashboard'
import StaffDashboard from './StaffDashboard'
import ProtectedRoute from './ProtectedRoute';
import LeaveDetails from './LeaveDetails';
import HomePage from './HomePage';
export const Check = createBrowserRouter(createRoutesFromElements(


    <Route path='/' element={<HomePage />}>
        <Route exact path='/' element={<Login />}></Route>
        <Route path='/Registration' element={<Registration />}></Route>
        <Route
            path='/dashboard/hod'
            element={
                <ProtectedRoute allowedRoles={"HOD"}>
                    <HodDashboard />
                </ProtectedRoute>}
        />
        <Route
            path='/dashboard/staff'
            element={
                <ProtectedRoute allowedRoles={"staff"}>
                    <StaffDashboard />
                </ProtectedRoute>}
        />
        <Route path='/leavedetails' element={<LeaveDetails />} />
    </Route>


))





