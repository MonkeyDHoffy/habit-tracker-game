# Schweinehund – AI Project Context
Version: 1.0
Projektstatus: Konzeptphase (Game Rules v1.0 definiert)

---

## Projektvision

Schweinehund ist eine Self-Development Game App.

Ziel:
User sollen positive Gewohnheiten/Routinen aufbauen und negative Gewohnheiten reduzieren – 
spielerisch, motivierend und langfristig.

Die App kombiniert:
- Habit Tracking
- Gamification
- RPG-Elemente
- Levelsystem
- Fortschritt & Belohnungen

Der innere "Schweinehund" ist der spielerische Antagonist.

---

## Spielidee (Core Concept)

Der Spieler kämpft täglich gegen seinen "Schweinehund".

Positive Routinen = Schaden am Schweinehund  
Negative Routinen = Schaden am Spieler

Disziplin ist die Hauptressource.

---

# Spielregeln v1.0

## 1. Routinen-System

Es gibt zwei Arten von Routinen:

### Positive Routinen
- z. B. Sport, Lernen, Lesen, Meditieren
- geben XP
- verursachen Schaden am Schweinehund
- erhöhen Disziplin

### Negative Routinen
- z. B. Prokrastination, Junk Food, Doomscrolling
- verursachen Schaden am Spieler
- senken Disziplin
- können Combo-Strafen auslösen

---

## 2. Kampf-System (Daily Battle)

Jeder Tag ist eine Kampfrunde.

Formel-Grundidee v1.0:

Schaden an Schweinehund:
baseDamage * Disziplin-Multiplikator

Schaden am Spieler:
negativeImpact * Schwäche-Faktor

Wenn Disziplin = 0:
→ Spieler verliert Tageskampf

Wenn Schweinehund HP = 0:
→ Level-Up

---

## 3. XP & Level-System

XP bekommt man durch:
- Erledigte positive Routinen
- Streaks
- Disziplin über Schwellenwert

Level-Up Effekte:
- Mehr Max-Disziplin
- Passive Boni
- Neue Skills (zukünftig)

---

## 4. Disziplin-System

Disziplin ist:
- tägliche Ressource
- beeinflusst Schadensmultiplikator
- sinkt durch negative Routinen
- steigt durch positive Routinen

Disziplin regeneriert sich teilweise über Nacht.

---

## 5. Ziel der App

Langfristige Verhaltensänderung durch:
- Visuelles Fortschrittssystem
- Tägliches Feedback
- Motivation durch Gamification
- Identifikation mit Avatar

---

# Technische Annahmen (aktuell)

Frontend:
- HTML
- CSS
- Vanilla JavaScript
- react native
- next js
- typescript

Backend (optional später):
- Firebase

State Management:
- Lokaler State + LocalStorage (v1.0)

---

# Coding Guidelines für Codex

- Schreibe modularen Code.
- Nutze klare Funktionsnamen.
- Erkläre komplexe Logik kurz in Kommentaren.
- Vermeide unnötige Libraries. aber weise gern drauf hin falls es irgendwo sinnvoll wär.
- Fokus auf Lernfreundlichkeit (Anfänger-Level JS).

Wenn Spielmechaniken vorgeschlagen werden:
- Balance berücksichtigen.
- Einfachheit > Komplexität (v1.0).

