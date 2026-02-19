# Mobile Best Practices Context
Version: 1.0
Status: Active Guideline

## Ziel
Diese Datei beschreibt die wichtigsten Entwicklungsprinzipien fuer unsere Mobile-App,
insbesondere mit Blick auf die spaetere Web-Umsetzung.

---

## 1) Architektur-Prinzipien
- Domain-Logik bleibt in `packages/game-core`.
- Datentypen bleiben in `packages/shared-types`.
- UI (Screens/Components) enthaelt keine Kern-Spielregeln.

Warum:
- Mobile und Web koennen dieselbe Logik wiederverwenden.
- Weniger doppelte Fehlerquellen.

---

## 2) Struktur-Prinzipien
- Jede neue Seite bekommt einen eigenen Ordner unter `apps/mobile/src/screens/<page>`.
- Shared UI-Bausteine liegen unter `apps/mobile/src/components/shared`.
- Theme-Werte liegen zentral in `apps/mobile/src/theme`.

Warum:
- Bessere Wartbarkeit und schnellere Orientierung.

---

## 3) UI- und Design-Prinzipien
- Nutze `AppText` fuer konsistente Typografie.
- Nutze `ScreenContainer` fuer einheitliches Screen-Layout.
- Nutze `SectionContainer` und `AppCard` als Rahmen fuer Abschnitte.
- Vermeide Hardcoded-Farben/Abstaende in Screens.

Warum:
- Einheitliches Look-and-Feel auf allen Screens.
- Web-Umsetzung kann das gleiche Designsystem nutzen.

---

## 4) Naming-Prinzipien
- Components: PascalCase, klarer Fachbezug (`RunCard`, `MainMenu`).
- Handler: `handle...` (`handleStartNewRun`).
- Callback-Props: `on...` (`onSelectMenuItem`).
- Keine Abkuerzungen ohne klaren Mehrwert.

---

## 5) State- und Daten-Prinzipien
- UI-State lokal im Screen, wenn nur dort gebraucht.
- Domain-State spaeter zentralisieren (z. B. Run-Status).
- Persistenz frueh strukturieren (Storage-Service in `services/storage`).

Warum:
- Leichterer Wechsel zu Backend-Sync ohne Architekturbruch.

---

## 6) Testing-Prinzipien
- `game-core` wird priorisiert getestet (Regeln/Mechanik).
- UI-Komponenten werden schlank gehalten und ueber Props gesteuert.
- Vor jedem Merge mindestens Typecheck + relevante Tests.

---

## 7) Cross-Platform-Prinzipien (Mobile -> Web)
- Keine plattformkritische Logik in Komponenten verstecken.
- Domain- und Datums-/ID-Utils in gemeinsame Packages/Utils auslagern.
- Design Tokens zentral halten (Farben, Spacing, Typografie).

---

## Arbeitsregel
Bei neuen Features immer zuerst kurz festlegen:
1. Welche Teile sind Domain-Logik?
2. Welche Teile sind reine UI?
3. Welche Daten muessen spaeter synchronisiert werden?