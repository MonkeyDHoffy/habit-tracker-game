# Copilot Handoff
Version: 1.0
Status: Active

## Zweck
Diese Datei ist der direkte Startkontext fuer GitHub Copilot.
Sie beschreibt den aktuellen Stand, die Architekturregeln und den bevorzugten Arbeitsmodus.

---

## 1) Schnell-Start Prompt fuer Copilot
Diesen Block kannst du direkt in Copilot Chat verwenden:

```text
Lies zuerst diese Dateien vollstaendig:
- context/PROJECT_CONTEXT.md
- context/FOLDER_STRUCTURE_CONTEXT.md
- context/MOBILE_BEST_PRACTICES_CONTEXT.md
- context/CODEBASE_ARCHITECTURE_BACKEND_CONTEXT.md

Arbeitskontext:
- Monorepo mit Mobile-First Ansatz
- Aktive App: React Native + Expo unter apps/mobile
- Domain-Logik in packages/game-core
- Gemeinsame Typen in packages/shared-types

Wichtige Regeln:
- Ordnerstruktur strikt einhalten (siehe FOLDER_STRUCTURE_CONTEXT.md)
- Jede neue Page bekommt eigenen Screen-Ordner
- Shared Komponenten nur in src/components/shared
- Keine Business-Logik in UI-Komponenten
- Aussagekraeftige Namen fuer Dateien/Komponenten/Funktionen
- Bestehende UI-Bausteine wiederverwenden: AppText, ScreenContainer, SectionContainer, AppButton
- Theme-Werte nutzen statt Hardcoded-Werte

Ausgabeformat:
1. Welche Dateien du aenderst
2. Warum du sie aenderst
3. Was getestet werden soll
4. Welche Annahmen du getroffen hast

Aktuelles Ziel:
[HIER DEIN KONKRETES TASK-ZIEL EINSETZEN]
```

---

## 2) Aktueller technischer Stand (Kurzfassung)
- Startscreen ist `HomeScreen`.
- Navigation ist aktiv ueber `RootNavigator`.
- Home-Design ist zentral konfigurierbar ueber:
  - `apps/mobile/src/screens/home/homeScreen.config.ts`
- Shared UI-Grundbausteine vorhanden:
  - `AppButton`
  - `AppCard`
  - `SectionContainer`
  - `ScreenContainer`
  - `AppText`

---

## 3) Wichtige Dateien fuer Copilot (Code-Einstieg)
- `apps/mobile/src/navigation/RootNavigator.tsx`
- `apps/mobile/src/navigation/routes.ts`
- `apps/mobile/src/screens/home/HomeScreen.tsx`
- `apps/mobile/src/screens/home/homeScreen.config.ts`
- `apps/mobile/src/components/shared/`
- `packages/game-core/src/index.ts`
- `packages/shared-types/src/index.ts`

---

## 4) Wie neue Features umgesetzt werden sollen
1. Ziel in 1-2 Saetzen definieren.
2. Betroffene Domain-Typen in `shared-types` pruefen/erweitern.
3. Spielregeln in `game-core` implementieren (inkl. Tests falls noetig).
4. Screen/Component in `apps/mobile/src/screens/<page>` bauen.
5. Shared-Komponenten nur bei echter Wiederverwendung anfassen.
6. Typecheck laufen lassen.
7. Kontextdateien aktualisieren, wenn Struktur/Architektur angepasst wurde.

---

## 5) Done-Kriterien pro Task
Ein Task gilt als fertig, wenn:
- Code kompiliert (`typecheck` erfolgreich)
- Strukturregeln eingehalten sind
- Namen klar und konsistent sind
- keine Logik doppelt in UI und game-core steckt
- geaenderte Entscheidungen im `context/` dokumentiert sind

---

## 6) Empfohlene naechste Aufgaben (Priorisiert)
1. `routines` Screen als erster funktionaler Feature-Screen (CRUD-light lokal).
2. Run-State sauber modellieren und lokal persistieren (Service unter `services/storage`).
3. `shared-types` um Run/Routine/Event-Modelle erweitern.
4. `game-core` Tests fuer Tagesablauf und Routine-Effekte ausbauen.
5. Danach Web-App (`apps/web`) mit denselben Domain-Typen/Logik anbinden.

---

## 7) Hinweis fuer Lernmodus
Copilot soll bei jeder groesseren Aenderung kurz erklaeren:
- Warum diese Architekturentscheidung?
- Warum dieser Dateiort?
- Was waere die einfachste Alternative?

Damit bleibt das Projekt lernbar und nachvollziehbar.