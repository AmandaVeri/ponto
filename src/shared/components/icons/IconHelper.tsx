import React from 'react';
import { Feather, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';

type IconProviders = {
  Ionicons: typeof Ionicons;
  MaterialIcons: typeof MaterialIcons;
  Feather: typeof Feather;
  FontAwesome: typeof FontAwesome;
};

type IconNameByProvider = {
  Ionicons: keyof typeof Ionicons.glyphMap;
  MaterialIcons: keyof typeof MaterialIcons.glyphMap;
  Feather: keyof typeof Feather.glyphMap;
  FontAwesome: keyof typeof FontAwesome.glyphMap;
};

export type IconHelperProps<TProvider extends keyof IconProviders = keyof IconProviders> = {
  provider: TProvider;
  name: IconNameByProvider[TProvider] | string;
  size?: number;
  color?: string;
};

export function IconHelper<TProvider extends keyof IconProviders>({
  provider,
  name,
  size = 24,
  color = 'currentColor',
}: IconHelperProps<TProvider>) {
  if (provider === 'Ionicons') {
    return <Ionicons name={name as IconNameByProvider['Ionicons']} size={size} color={color} />;
  }

  if (provider === 'MaterialIcons') {
    return <MaterialIcons name={name as IconNameByProvider['MaterialIcons']} size={size} color={color} />;
  }

  if (provider === 'Feather') {
    return <Feather name={name as IconNameByProvider['Feather']} size={size} color={color} />;
  }

  return <FontAwesome name={name as IconNameByProvider['FontAwesome']} size={size} color={color} />;
}
