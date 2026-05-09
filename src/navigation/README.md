# Navigation strategy

This project uses Expo Router for file-based routes and React Navigation under the hood.

- `src/app/_layout.tsx` owns app-level stacks such as `(tabs)` and `auth`.
- `src/app/(tabs)/_layout.tsx` owns BottomTabs with `backBehavior="history"` so tab changes are part of the navigation history.
- Each tab folder owns its own `_layout.tsx` with a nested `Stack`, keeping independent navigation state per tab.
- Deep links are derived from file paths and the `scheme` in `app.json`.
- Navigation state persistence can be added around React Navigation state when a product requirement asks for restore after process death. Per-tab stack history is already preserved while the tab navigator is mounted.
