import { Redirect } from 'expo-router';
import { useAuth } from '@/context/AuthContext';

export default function TabsIndex() {
  const { user } = useAuth();

  if (user?.role === 'provider') {
    return <Redirect href="/(tabs)/provider-home" />;
  }

  return <Redirect href="/(tabs)/home" />;
}
