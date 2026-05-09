# PontoCerto Architecture

## Folder layout

```text
src/
  app/                     Expo Router routes only
    (tabs)/                BottomTabs shell
      opcao-1/             Tab1Stack
      opcao-2/             Tab2Stack
      opcao-3/             Tab3Stack
    auth/                  Auth route group
  screens/                 Route-level screens grouped by domain
    dashboard/
    employees/
    timeTracking/
  components/              Domain components grouped by domain
    timeTracking/
  shared/                  Reusable UI and platform-agnostic building blocks
    components/
      buttons/
      cards/
      date/
      forms/
      icons/
      inputs/
      layout/
      modals/
      ui/
  services/                Integrations and domain services
    api/
    auth/
    i18n/
    storage/
    timeTracking/
  hooks/                   Shared and domain hooks
    auth/
    timeTracking/
  types/                   Shared and domain types
    timeTracking/
  schemas/                 Validation schemas grouped by domain
    auth/
  theme/                   Design tokens and light/dark themes
  store/                   Global Zustand stores
  navigation/              Navigation metadata and documentation
  translations/            i18n namespaces by language
  utils/                   Pure helpers
  constants/               Static app constants
assets/                    Images, fonts and static resources
```

## Technical decisions

- Layer-first keeps folders discoverable (`services`, `hooks`, `components`, `screens`, etc.) while domain subfolders avoid collisions.
- `shared` is intentionally generic: no business rules, no feature-specific API calls.
- `services` owns infrastructure such as Axios, AsyncStorage and i18n bootstrapping.
- Expo Router declares screens; shared navigation metadata lives in `src/navigation`.
- React Query owns server cache; Zustand owns client/session UI state.
- Theme tokens are centralized and consumed through `useAppTheme`.
- Forms are built around React Hook Form and can be validated with Zod schemas.

## Conventions

- Use absolute imports with `@/`.
- Prefer named exports and barrel exports at module boundaries.
- Keep domain code in domain subfolders under global layers (example: `src/services/timeTracking/*`).
- Shared components must be typed, theme-aware, translation-friendly and platform-safe.
- API and platform calls stay in `services`, not inside screens.
- Screens compose hooks and components; they should not hold infrastructure logic.

## Recommended libraries

- Expo Router + React Navigation for routing.
- Zustand for persistent global state.
- TanStack Query for remote cache and mutations.
- React Hook Form + Zod for forms and validation.
- i18next + react-i18next + expo-localization for translations.
- NativeWind + centralized theme tokens for styling.
- Axios for HTTP.
- AsyncStorage for persisted app preferences and tokens.
