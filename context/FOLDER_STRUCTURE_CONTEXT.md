# Folder Structure Context (Mobile)
Version: 1.0
Status: Active Guideline

## Zweck dieser Datei
Diese Datei ist unsere verbindliche Orientierung fuer die Ordnerstruktur in `apps/mobile`.
Sie hilft dabei, neue Dateien konsistent abzulegen und die Architektur langfristig uebersichtlich zu halten.

---

## Kernprinzipien
- Feature-orientiert: Jede neue Seite bekommt einen eigenen Screen-Ordner.
- Wiederverwendung zuerst: Allgemeine UI-Bausteine kommen nach `src/components/shared`.
- Klare Trennung: Screen-spezifische Components bleiben im jeweiligen Screen-Ordner.
- Einheitliche Benennung: Aussagekraeftige Namen fuer Dateien, Components und Handler.

---

## Aktuelle Zielstruktur
```txt
apps/mobile/
  assets/
    icons/
    images/

  src/
    navigation/
      RootNavigator.tsx
      routes.ts

    screens/
      home/
        HomeScreen.tsx
        HomeScreen.styles.ts
        homeScreen.config.ts
        components/
      run/
        RunScreen.tsx
        components/
      battle/
        components/
      routines/
        components/
      stats/
        StatsScreen.tsx
        components/
      profile/
        ProfileScreen.tsx
        components/
      settings/
        SettingsScreen.tsx
        components/
      help/
        HelpScreen.tsx
        components/
      onboarding/
        components/

    components/
      shared/
        buttons/
          AppButton.tsx
          AppButton.styles.ts
        cards/
          AppCard.tsx
          AppCard.styles.ts
        containers/
          ScreenContainer.tsx
          ScreenContainer.styles.ts
          SectionContainer.tsx
          SectionContainer.styles.ts
        typography/
          AppText.tsx
          AppText.styles.ts
        feedback/

    theme/
      colors.ts
      spacing.ts
      radius.ts
      typography.ts

    hooks/
    services/
      storage/
    utils/
      date/
      id/
    types/
```

---

## Ablageregeln (wichtig)

### 1) Neue Page / neuer Screen
- Immer neuer Ordner unter `src/screens/<page-name>/`.
- Mindestens anlegen:
  - `<PageName>Screen.tsx`
  - optional `<PageName>Screen.styles.ts`
  - `components/` fuer page-spezifische Unterbausteine

Beispiel:
- `src/screens/challenges/ChallengesScreen.tsx`
- `src/screens/challenges/components/ChallengeList.tsx`

### 2) Shared Component oder Screen-Component?
- Nach `src/components/shared/...` nur wenn die Component in mind. 2 Screens sinnvoll ist.
- Wenn nur fuer einen Screen gedacht, dann in `src/screens/<page>/components/` lassen.

Entscheidungsregel:
- Heute nur 1x genutzt und unklar, ob wiederverwendbar -> screen-lokal.
- Sicher mehrfach nutzbar -> shared.

### 3) Styling-Regel
- Eigene Style-Datei pro Component/Screen bevorzugen.
- Bei Screen-spezifischen Texten/Labels zentrale Config-Datei nutzen (z. B. homeScreen.config.ts).
- Namensmuster:
  - `ComponentName.tsx`
  - `ComponentName.styles.ts`
- Theme-Werte (`colors`, `spacing`, `radius`, `typography`) zentral aus `src/theme` beziehen.

### 4) Naming-Regel
- Components: `PascalCase` (z. B. `RunCard`, `SectionContainer`)
- Dateien: analog zur Component (`RunCard.tsx`)
- Handler: `handle...` (z. B. `handleStartNewRun`)
- Callback-Props: `on...` (z. B. `onSelectMenuItem`)
- Keine kuerzenden oder kryptischen Namen.

---

## Shared Component Katalog (geplant)
Bereits vorhanden:
- `AppButton`
- `AppCard`
- `SectionContainer`
- `ScreenContainer`
- `AppText`

Sinnvolle naechste Shared Components:
- `InputField` (Label + Fehlertext)
- `EmptyState`
- `LoadingState`
- `ErrorBanner`
- `ProgressBar`

---

## Pflege-Checkliste bei jeder neuen Datei
1. Gehoert die Datei zu genau einem Screen? -> Dann in `screens/<page>/components`.
2. Wird sie screen-uebergreifend gebraucht? -> Dann nach `components/shared`.
3. Hat die Component eine eigene `*.styles.ts`?
4. Nutzt Styling Theme-Werte statt Hardcoded-Werten?
5. Ist der Name fachlich klar und selbsterklaerend?

---

## Anti-Pattern (vermeiden)
- Ein "misc" oder "helpers"-Ordner fuer alles Moegliche.
- Zu fruehes Verschieben in `shared`, obwohl unklar, ob Wiederverwendung kommt.
- Inline-Styles in grossen Components.
- Uneinheitliche Namenskonventionen je nach Datei.

---

## Aenderungsregel fuer diese Datei
Wenn wir die Struktur bewusst aendern, wird diese Datei im gleichen PR/Commit mit aktualisiert.
So bleibt die Dokumentation immer synchron zum Code.