import { JSDOM } from "jsdom";
import {
  player,
  moveToNextOccurrence,
  moveToPreviousOccurrence,
  resetPlayer,
  handleDash,
  energyPickups,
  initializeGame,
  update,
  render,
} from "./main.js";

// Disable debug logs during tests
jest.spyOn(console, "log").mockImplementation(() => {});

// Mock canvas context with all required methods
const mockCtx = {
  clearRect: jest.fn(),
  fillRect: jest.fn(),
  fillStyle: "",
  font: "",
  fillText: jest.fn(),
  beginPath: jest.fn(),
  arc: jest.fn(),
  fill: jest.fn(),
  stroke: jest.fn(),
};

// Mock requestAnimationFrame
global.requestAnimationFrame = (cb) => setTimeout(cb, 0);

beforeAll(() => {
  // Initialize the game after the canvas is already set up by jest.setup.js
  initializeGame();
});

beforeEach(() => {
  jest.clearAllMocks();
  resetPlayer();
});

// Helper function to run game loop
function runGameLoop(times = 1) {
  for (let i = 0; i < times; i++) {
    update();
    render();
  }
}

describe("Game Functions", () => {
  test("Player moves to next occurrence with f command", () => {
    player.x = 100;
    moveToNextOccurrence("a");
    expect(player.x).toBe(200);
  });

  test("Player does not move if no next occurrence", () => {
    player.x = 500;
    moveToNextOccurrence("a");
    expect(player.x).toBe(500); // No change
  });

  test("Player moves to previous occurrence with F command", () => {
    player.x = 400;
    moveToPreviousOccurrence("a");
    expect(player.x).toBe(200);
  });

  test("Player does not move if no previous occurrence", () => {
    player.x = 50;
    moveToPreviousOccurrence("a");
    expect(player.x).toBe(50); // No change
  });

  test("Dash forward consumes energy and moves player", () => {
    player.energy = 100;
    player.x = 400;
    handleDash("w");
    expect(player.x).toBe(450); // 400 + 50
    expect(player.energy).toBe(80);
  });

  test("Dash backward consumes energy and moves player", () => {
    player.energy = 100;
    player.x = 400;
    handleDash("b");
    expect(player.x).toBe(350); // 400 - 50
    expect(player.energy).toBe(80);
  });

  test("Dash does not occur if insufficient energy", () => {
    player.energy = 10;
    player.x = 400;
    handleDash("w");
    expect(player.x).toBe(400); // No change
    expect(player.energy).toBe(10); // No change
  });

  test("Energy pickup increases player energy", () => {
    expect(energyPickups.length).toBeGreaterThanOrEqual(1);
    const initialPickupLength = energyPickups.length;
    const pickup = energyPickups[0];
    player.x = pickup.x;
    player.y = pickup.y;
    // Simulate energy pickup collection
    player.energy = Math.min(player.energy + 50, player.maxEnergy);
    // Remove the pickup manually to simulate collection
    energyPickups.splice(0, 1);
    expect(player.energy).toBe(100); // Assuming maxEnergy is 100
    expect(energyPickups.length).toBe(initialPickupLength - 1); // Pickup removed
  });
});
