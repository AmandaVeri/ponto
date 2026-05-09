import { router, type Href } from 'expo-router';
import React, { useEffect } from 'react';

export default function AdminLogoutScreen() {
  useEffect(() => {
    router.replace('/auth' as Href);
  }, []);

  return null;
}
