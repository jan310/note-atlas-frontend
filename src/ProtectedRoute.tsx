import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import React from 'react';
import LoadingScreen from './components/LoadingScreen';

interface ContainerProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ContainerProps) {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <LoadingScreen />;

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
