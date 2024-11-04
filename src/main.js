// main.js

// Enable debug mode
const debug = true; // Set to true to enable debug logs

export function debugLog(...args) {
  if (debug) {
    console.log(...args);
  }
}

// Player object
export const player = {
  x: 400, // Starting at canvas width / 2
  y: 570, // Starting near the bottom (canvas.height - 30)
  width: 10,
  height: 20,
  speed: 5,
  velY: 0,
  jumping: false,
  energy: 100, // Energy meter
  maxEnergy: 100,
  energyRegenRate: 0.1,
};

// Key press states
export const keys = {};

// Variables for command inputs
export let awaitingCommand = false;
export let commandKey = "";

// Arrays to hold game elements
export const platforms = [
  { x: 100, y: 500, width: 200, height: 10 },
  { x: 400, y: 400, width: 200, height: 10 },
  // Add more platforms as needed
];

export const bugs = [
  { x: 200, y: 550, width: 10, height: 10 },
  { x: 500, y: 350, width: 10, height: 10 },
  // Add more bugs as needed
];

export const energyPickups = [
  { x: 250, y: 500, width: 10, height: 10 },
  // Add more pickups as needed
];

export const levelCharacters = [
  { char: "a", x: 200, y: 550 },
  { char: "&", x: 300, y: 550 },
  { char: "b", x: 400, y: 550 },
  // Include important characters in the level
];

export const brackets = [
  { char: "{", x: 500, y: 550, matchId: 1 },
  { char: "}", x: 700, y: 550, matchId: 1 },
  // Add more brackets as needed
];

// Canvas and context
export let canvas, ctx;

// Initialize the game
export function initializeGame() {
  canvas = document.getElementById("gameCanvas");
  if (!canvas) {
    console.error("Canvas element not found!");
    return;
  }
  ctx = canvas.getContext("2d");
  if (!ctx) {
    console.error("Failed to get canvas context!");
    return;
  }

  console.log("Initializing game...");

  // Start the game loop
  requestAnimationFrame(gameLoop);

  // Set up event listeners
  setupEventListeners();
}

function setupEventListeners() {
  // Keydown event
  document.addEventListener("keydown", handleKeyDown);

  // Keyup event
  document.addEventListener("keyup", handleKeyUp);
}

export function handleKeyDown(e) {
  if (awaitingCommand) {
    commandKey = e.key;
    executeCommand();
    awaitingCommand = false;
  } else {
    if (e.key === "f" || e.key === "F") {
      keys[e.key] = true;
      awaitingCommand = true;
    } else if (e.key === "%") {
      matchBrackets();
    } else if (e.key === "w" || e.key === "b") {
      handleDash(e.key);
      keys[e.key] = false; // Prevent continuous dashing
    } else {
      keys[e.key] = true;
    }
  }
}

export function handleKeyUp(e) {
  if (e.key !== "f" && e.key !== "F") {
    keys[e.key] = false;
  }
}

// Game loop
export function gameLoop() {
  update();
  render();
  requestAnimationFrame(gameLoop);
}

// Update game state
export function update() {
  regenerateEnergy();
  handleMovement();
  handleJumping();
  applyGravity();
  handleCollisions();
  handleEnergyPickups();
}

// Regenerate energy over time
export function regenerateEnergy() {
  if (player.energy < player.maxEnergy) {
    player.energy += player.energyRegenRate;
    debugLog("Energy regenerating:", player.energy);
    if (player.energy > player.maxEnergy) player.energy = player.maxEnergy;
  }
}

// Handle horizontal movement
export function handleMovement() {
  if (keys["h"]) {
    player.x -= player.speed;
    debugLog("Pressed h: Moving left to", player.x);
  }
  if (keys["l"]) {
    player.x += player.speed;
    debugLog("Pressed l: Moving right to", player.x);
  }
}

// Handle dash abilities
export function handleDash(direction) {
  if (direction === "w" && player.energy >= 20) {
    debugLog("Dashing forward");
    player.x += 50;
    player.energy -= 20;
    debugLog("New position:", player.x, "Remaining energy:", player.energy);
  }
  if (direction === "b" && player.energy >= 20) {
    debugLog("Dashing backward");
    player.x -= 50;
    player.energy -= 20;
    debugLog("New position:", player.x, "Remaining energy:", player.energy);
  }
}

// Handle jumping
export function handleJumping() {
  if (keys["k"] && !player.jumping) {
    player.jumping = true;
    player.velY = -10;
    debugLog("Pressed k: Jumping with velocity", player.velY);
  }
}

// Apply gravity
export function applyGravity() {
  player.velY += 0.5; // Gravity strength
  player.y += player.velY;

  // Ground collision
  if (player.y >= canvas.height - player.height) {
    player.y = canvas.height - player.height;
    player.jumping = false;
    player.velY = 0;
    debugLog("Player landed on the ground.");
  }

  // Prevent moving out of canvas bounds
  if (player.x < 0) player.x = 0;
  if (player.x + player.width > canvas.width)
    player.x = canvas.width - player.width;
}

// Handle collisions
export function handleCollisions() {
  handlePlatformCollisions();
  handleBugCollisions();
}

// Handle platform collisions
export function handlePlatformCollisions() {
  platforms.forEach((platform) => {
    if (
      player.x < platform.x + platform.width &&
      player.x + player.width > platform.x &&
      player.y + player.height > platform.y &&
      player.y + player.height < platform.y + platform.height
    ) {
      // On top of the platform
      player.y = platform.y - player.height;
      player.jumping = false;
      player.velY = 0;
      debugLog("Player landed on a platform at", platform.x, platform.y);
    }
  });
}

// Handle bug collisions
export function handleBugCollisions() {
  bugs.forEach((bug) => {
    if (
      player.x < bug.x + bug.width &&
      player.x + player.width > bug.x &&
      player.y < bug.y + bug.height &&
      player.y + player.height > bug.y
    ) {
      // Player has collided with a bug
      debugLog("Collided with bug at:", bug.x, bug.y);
      resetPlayer();
    }
  });
}

// Handle energy pickups
export function handleEnergyPickups() {
  for (let i = 0; i < energyPickups.length; i++) {
    const pickup = energyPickups[i];
    if (
      player.x < pickup.x + pickup.width &&
      player.x + player.width > pickup.x &&
      player.y < pickup.y + pickup.height &&
      player.y + player.height > pickup.y
    ) {
      // Player collected the energy pickup
      player.energy = Math.min(player.energy + 50, player.maxEnergy);
      debugLog("Picked up energy. New energy:", player.energy);
      // Remove the pickup
      energyPickups.splice(i, 1);
      i--;
    }
  }
}

// Function to reset player position after collision
export function resetPlayer() {
  debugLog("Resetting player to starting position.");
  player.x = canvas.width / 2;
  player.y = canvas.height - 30;
  player.velY = 0;
  player.jumping = false;
  player.energy = player.maxEnergy;
}

// Render the game
export function render() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Render platforms
  ctx.fillStyle = "#00ff00"; // Green color for platforms
  platforms.forEach((platform) => {
    ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
  });

  // Render bugs
  ctx.fillStyle = "#ff0000"; // Red color for bugs
  bugs.forEach((bug) => {
    ctx.fillText("&", bug.x, bug.y);
  });

  // Render energy pickups
  ctx.fillStyle = "#ffff00"; // Yellow color for energy pickups
  energyPickups.forEach((pickup) => {
    ctx.fillText("*", pickup.x, pickup.y);
  });

  // Render player
  ctx.fillStyle = "#0000ff"; // Blue color for player
  ctx.fillRect(player.x, player.y, player.width, player.height);

  // Render energy meter
  ctx.fillStyle = "#ffffff";
  ctx.font = "12px monospace";
  ctx.fillText(`Energy: ${Math.floor(player.energy)}`, 10, 20);

  // Render commands (for debugging purposes)
  ctx.fillStyle = "#ffffff";
  ctx.font = "12px monospace";
  ctx.fillText(
    "h: left, l: right, k: jump, w: dash forward, b: dash backward, f/F: move to character, %: match brackets",
    10,
    40
  );
}

// Command execution functions
export function executeCommand() {
  if (keys["f"]) {
    // Move forward to next occurrence of commandKey
    moveToNextOccurrence(commandKey);
    keys["f"] = false;
  } else if (keys["F"]) {
    // Move backward to previous occurrence of commandKey
    moveToPreviousOccurrence(commandKey);
    keys["F"] = false;
  }
}

export function moveToNextOccurrence(char) {
  debugLog("Executing f" + char);
  let target = levelCharacters.find(
    (item) => item.char === char && item.x > player.x
  );
  if (target) {
    player.x = target.x;
    player.y = target.y - player.height;
    debugLog("Moved to next occurrence of", char, "at", player.x, player.y);
  } else {
    debugLog("No next occurrence of", char, "found");
  }
}

export function moveToPreviousOccurrence(char) {
  debugLog("Executing F" + char);
  let target = null;
  for (let i = levelCharacters.length - 1; i >= 0; i--) {
    const item = levelCharacters[i];
    if (item.char === char && item.x < player.x) {
      target = item;
      break;
    }
  }
  if (target) {
    player.x = target.x;
    player.y = target.y - player.height;
    debugLog("Moved to previous occurrence of", char, "at", player.x, player.y);
  } else {
    debugLog("No previous occurrence of", char, "found");
  }
}

export function matchBrackets() {
  debugLog("Executing % command");
  const currentBracket = brackets.find(
    (bracket) =>
      Math.abs(player.x - bracket.x) < 10 && Math.abs(player.y - bracket.y) < 10
  );

  if (currentBracket) {
    const matchingBracket = brackets.find(
      (bracket) =>
        bracket.matchId === currentBracket.matchId && bracket !== currentBracket
    );

    if (matchingBracket) {
      player.x = matchingBracket.x;
      player.y = matchingBracket.y - player.height;
      debugLog(
        "Matched bracket.",
        currentBracket.char,
        "to",
        matchingBracket.char,
        "at",
        player.x,
        player.y
      );
    } else {
      debugLog("No matching bracket found for", currentBracket.char);
    }
  } else {
    debugLog("No bracket near player to match.");
  }
}

// Conditionally initialize the game if running in the browser
if (typeof window !== "undefined") {
  initializeGame();
}
