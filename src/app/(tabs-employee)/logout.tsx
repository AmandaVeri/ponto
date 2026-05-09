import { router, type Href } from 'expo-router';
import React, { useEffect } from 'react';

export default function EmployeeLogoutScreen() {
  useEffect(() => {
    router.replace('/auth' as Href);
  }, []);

  return null;
}
