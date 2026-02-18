# Schweinehund Monorepo

## Struktur
- `apps/mobile`: React Native App (Expo, folgt als nächster Schritt)
- `apps/web`: Next.js App (folgt als nächster Schritt)
- `packages/game-core`: Gemeinsame Spielmechanik-Logik
- `packages/shared-types`: Gemeinsame Typdefinitionen
- `context`: Projektkontext und Entscheidungen

## Startpunkt
Wir bauen zuerst die gemeinsame Core-Logik (`packages/game-core`) und hängen danach Mobile + Web an.
