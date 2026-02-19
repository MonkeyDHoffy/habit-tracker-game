import { BattleResult, BattleState, Routine, RoutineResult } from "@schweinehund/shared-types";

const MAX_HP = 1000;
const MAX_SHIELD = 10;
const MAX_RAGE = 10;
const XP_PER_LEVEL = 100;
const SOFT_CAP = 50;
const NEAR_MAX_THRESHOLD = 0.9;

export function createInitialBattleState(): BattleState {
  return {
    day: 1,
    playerHp: MAX_HP,
    pigHp: MAX_HP,
    shield: 0,
    rage: 0,
    xp: 0,
    level: 1,
  };
}

export function completeRoutine(state: BattleState, routine: Routine): RoutineResult {
  if (routine.type === "positive") {
    const updatedRoutine = {
      ...routine,
      discipline: routine.discipline + 1,
    };
    const rawDamage = updatedRoutine.discipline;
    const damage = Math.round(applySoftCap(rawDamage, SOFT_CAP));

    return {
      state: {
        ...state,
        pigHp: clamp(state.pigHp - damage, 0, MAX_HP),
      },
      routine: updatedRoutine,
    };
  }

  const blockedDamage = Math.max(0, routine.urge - state.shield);
  const updatedRoutine = {
    ...routine,
    urge: routine.urge + 1,
    control: 0,
  };

  return {
    state: {
      ...state,
      playerHp: clamp(state.playerHp - blockedDamage, 0, MAX_HP),
    },
    routine: updatedRoutine,
  };
}

export function skipRoutine(state: BattleState, routine: Routine): RoutineResult {
  if (routine.type === "positive") {
    const updatedRoutine = {
      ...routine,
      neglect: routine.neglect + 1,
    };

    return {
      state: {
        ...state,
        pigHp: clamp(state.pigHp + updatedRoutine.neglect, 0, MAX_HP),
      },
      routine: updatedRoutine,
    };
  }

  const updatedRoutine = {
    ...routine,
    control: routine.control + 1,
  };

  return {
    state: {
      ...state,
      playerHp: clamp(state.playerHp + updatedRoutine.control, 0, MAX_HP),
    },
    routine: updatedRoutine,
  };
}

export function resolveDay(state: BattleState, didLogin: boolean): BattleResult {
  let shield = state.shield;
  let rage = state.rage;
  let playerHp = state.playerHp;
  let pigHp = state.pigHp;

  if (didLogin) {
    shield = clamp(shield + 1, 0, MAX_SHIELD);
    rage = clamp(rage - 1, 0, MAX_RAGE);
  } else {
    shield = 0;
    rage = clamp(rage + 1, 0, MAX_RAGE);

    let rageDamage = rage;
    if (pigHp >= MAX_HP * NEAR_MAX_THRESHOLD) {
      rageDamage *= 2;
    }

    playerHp = clamp(playerHp - rageDamage, 0, MAX_HP);
    pigHp = clamp(pigHp + rageDamage, 0, MAX_HP);
  }

  const playerDefeated = playerHp <= 0;
  const pigDefeated = pigHp <= 0;

  return {
    state: {
      ...state,
      day: state.day + 1,
      shield,
      rage,
      playerHp,
      pigHp,
    },
    playerDefeated,
    pigDefeated,
  };
}

export function getLevelFromXp(xp: number): number {
  return Math.max(1, Math.floor(xp / XP_PER_LEVEL) + 1);
}

function applySoftCap(value: number, softCap: number): number {
  return (value * softCap) / (value + softCap);
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}