# Codebase, Data Flow and Backend Context
Version: 1.0
Status: Living Architecture Draft

## Ziel
Diese Datei beschreibt, wie unsere Codebasis zusammenhaengt,
welche Daten langfristig wichtig sind und wie die Backend-Anbindung geplant ist.

---

## 1) Gesamtarchitektur (Monorepo)

```txt
apps/
  mobile/          # React Native (Expo)
  web/             # spaeter Next.js UI

packages/
  shared-types/    # gemeinsame Domain-Typen
  game-core/       # gemeinsame Spiel- und Regel-Logik

context/
  *.md             # Projektwissen, Struktur- und Architekturregeln
```

Prinzip:
- `apps/*` = Darstellung und Interaktion.
- `packages/*` = wiederverwendbare Fachlogik + Typen.

---

## 2) Wie die Teile miteinander verknuepft sind

1. UI (Screen/Component) loest Aktion aus.
2. Aktion ruft Funktionen aus `game-core` auf.
3. `game-core` verarbeitet Daten gemaess Typen aus `shared-types`.
4. Ergebnis geht zurueck in UI-State und spaeter in Persistenz.

Beispiel:
- Button "Neuen Run starten" -> Screen-Handler -> `game-core` Initialzustand -> UI zeigt neuen Status.

---

## 3) Wichtige Datenobjekte (Backend-relevant)

### User
- `userId`
- `email` (oder Auth-Provider-ID)
- `createdAt`
- `timezone`

### Routine
- `routineId`
- `userId`
- `name`
- `type` (positive/negative)
- `impact`, `xp`, `disciplineDelta`
- `isActive`

### Run
- `runId`
- `userId`
- `startedAt`
- `status` (active, finished, failed)
- `currentDay`

### DailyBattleState
- `runId`
- `day`
- `playerHp`
- `pigHp`
- `discipline`
- `xp`
- `level`

### HabitEvent (Historie)
- `eventId`
- `userId`
- `routineId`
- `runId`
- `timestamp`
- `resultingStateSnapshot`

Warum diese Daten wichtig sind:
- Fortschritt, Streaks, Analytics, Sync zwischen Geraeten und spaetere Leaderboards.

---

## 4) Datenfluss heute vs. spaeter

### Heute (MVP)
- UI-State lokal im Client.
- Optional lokale Persistenz (AsyncStorage).

### Spaeter (mit Backend)
- Authentifizierung (z. B. Firebase Auth).
- App liest/schreibt zentrale Daten in Backend.
- Offline-faehig mit lokalem Cache + spaeterem Sync.

---

## 5) Backend-Anbindung (empfohlene Richtung)

### Option A: Firebase (einfacher Start)
- Auth: Firebase Auth
- Daten: Firestore
- Dateien/Assets: Firebase Storage

### Option B: Eigene API (spaeter)
- Backend (Node/Nest/Fastify)
- DB (PostgreSQL)
- Mobile/Web greifen ueber REST/GraphQL zu

Empfehlung fuer den Start:
- Firebase fuer schnelle Iteration, spaeter bei Bedarf migrieren.

---

## 6) Schnittstellen-Strategie
- Definiere DTOs/Typen zentral in `packages/shared-types`.
- Mapping Backend <-> Domain in Service-Layer (nicht in Components).
- Keine direkten Backend-Calls aus tiefen UI-Components.

---

## 7) Mindestanforderungen fuer spaeteren Sync
- Stabile IDs (`userId`, `runId`, `routineId`).
- Zeitstempel in UTC speichern.
- Versionierbare State-Snapshots fuer Konfliktbehandlung.
- Eindeutige Ownership (`userId`) fuer jedes fachliche Objekt.

---

## 8) Security und Datenschutz (frueh beachten)
- Nur notwendige personenbezogene Daten speichern.
- Zugriff strikt pro `userId` absichern.
- Keine Geheimnisse im Client hinterlegen.
- Logging ohne sensible Inhalte.

---

## 9) Praktische Entwicklungsreihenfolge
1. `shared-types` erweitern (Run, Routine, Battle, Events).
2. `game-core` Regeln + Tests ausbauen.
3. Mobile UI auf diese Typen/Funktionen mappen.
4. Lokale Persistenz einfuehren.
5. Backend-Schema darauf aufbauen.
6. Web-App anbinden mit derselben Core-Logik.