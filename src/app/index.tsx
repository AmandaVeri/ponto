import { Redirect, type Href } from 'expo-router';

export default function HomeScreen() {
  return <Redirect href={'/(tabs)/opcao-1' as Href} />;
}
