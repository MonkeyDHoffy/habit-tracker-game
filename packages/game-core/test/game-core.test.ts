import { describe, expect, it } from "vitest";
import { completeRoutine, createInitialBattleState, resolveDay, skipRoutine } from "../src/index";
import { Routine } from "@schweinehund/shared-types";

describe("game-core", () => {
  it("completes a positive routine and damages the pig", () => {
    const state = createInitialBattleState();
    const routine: Routine = {
      id: "r1",
      name: "Workout",
      type: "positive",
      discipline: 1,
      neglect: 1,
    };

    const result = completeRoutine(state, routine);
    expect(result.state.pigHp).toBeLessThan(state.pigHp);
    expect(result.routine.discipline).toBe(2);
  });

  it("completes a negative routine and damages the player", () => {
    const state = createInitialBattleState();
    const routine: Routine = {
      id: "r2",
      name: "Doomscrolling",
      type: "negative",
      urge: 10,
      control: 0,
    };

    const result = completeRoutine(state, routine);
    expect(result.state.playerHp).toBeLessThan(state.playerHp);
    expect(result.routine.urge).toBe(11);
    expect(result.routine.control).toBe(0);
  });

  it("skips a positive routine and heals the pig", () => {
    const state = { ...createInitialBattleState(), pigHp: 900 };
    const routine: Routine = {
      id: "r3",
      name: "Meditation",
      type: "positive",
      discipline: 1,
      neglect: 1,
    };

    const result = skipRoutine(state, routine);
    expect(result.state.pigHp).toBeGreaterThan(state.pigHp);
    expect(result.routine.neglect).toBe(2);
  });

  it("applies rage damage when not logged in", () => {
    const state = createInitialBattleState();
    const result = resolveDay(state, false);

    expect(result.state.day).toBe(2);
    expect(result.state.rage).toBe(1);
    expect(result.state.playerHp).toBeLessThan(state.playerHp);
  });
});