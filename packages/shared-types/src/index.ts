export type RoutineType = "positive" | "negative";

export type PositiveRoutine = {
  id: string;
  name: string;
  type: "positive";
  discipline: number;
  neglect: number;
};

export type NegativeRoutine = {
  id: string;
  name: string;
  type: "negative";
  urge: number;
  control: number;
};

export type Routine = PositiveRoutine | NegativeRoutine;

export interface BattleState {
  day: number;
  playerHp: number;
  pigHp: number;
  shield: number;
  rage: number;
  xp: number;
  level: number;
}

export interface RoutineResult {
  state: BattleState;
  routine: Routine;
}

export interface BattleResult {
  state: BattleState;
  playerDefeated: boolean;
  pigDefeated: boolean;
}