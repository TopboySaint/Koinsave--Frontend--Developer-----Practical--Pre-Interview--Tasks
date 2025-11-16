// Authentication utility functions
import { jwtDecode } from 'jwt-decode';

export const checkAuthStatus = () => {
  try {
    const token = localStorage.getItem('webVault');
    
    if (!token) {
      return { isAuthenticated: false, user: null };
    }

    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (!decoded.exp || decoded.exp < currentTime) {
      // Token is expired
      localStorage.removeItem('webVault');
      return { isAuthenticated: false, user: null };
    }
    const [firstName, lastName] = (decoded.name || '').split(' ');
    const user = {
      firstName: firstName || 'User',
      lastName: lastName || '',
      email: decoded.email,
      accountNumber: decoded.accountNumber,
      id: decoded.sub
    };
    return { isAuthenticated: true, user };
  } catch (error) {
    console.error('Auth check failed:', error);
    localStorage.removeItem('webVault');
    return { isAuthenticated: false, user: null };
  }
};

export const login = (token) => {
  try {
    localStorage.setItem('webVault', token);
    const decoded = jwtDecode(token);
    const [firstName, lastName] = (decoded.name || '').split(' ');
    return { success: true, user: {
      firstName: firstName || 'User',
      lastName: lastName || '',
      email: decoded.email,
      accountNumber: decoded.accountNumber,
      id: decoded.sub
    }};
  } catch (error) {
    console.error('Login failed:', error);
    return { success: false, user: null };
  }
};

export const logout = () => {
  localStorage.removeItem('webVault');
};