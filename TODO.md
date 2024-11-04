# TODO List

A comprehensive list of tasks for the Vim-Inspired Platformer game development. Tasks that have been completed are marked with `[x]`, while pending tasks are marked with `[ ]`.

## **Project Setup**

- [x] **Initialize JavaScript Project**
  - Set up a modern JavaScript project with necessary configurations.
- [x] **Install Dependencies**
  - Installed development dependencies:
    - Jest
    - Babel
    - jsdom

## **Phase 1: Basic Movement and Physics**

- [x] **Create `index.html` with Canvas**

  - Set up the HTML structure with a `<canvas>` element for rendering the game.

- [x] **Draw the Player/Cursor on Canvas**

  - Implemented rendering of the player as a rectangle representing the cursor.

- [x] **Implement Basic Movement Commands**

  - **`h`**: Move left
  - **`l`**: Move right
  - **`k`**: Jump

- [x] **Implement Physics**

  - Added gravity to bring the player back to the ground after a jump.
  - Implemented collision detection with platforms.

- [x] **Set Up Jest Testing Environment**
  - Configured Jest with Babel to support ES Modules.
  - Created initial test cases for movement functions.

## **Phase 2: Advanced Movements and Energy Management**

- [x] **Implement Dash Commands**

  - **`w`**: Dash forward
  - **`b`**: Dash backward

- [x] **Implement Energy System**

  - Added an energy meter that depletes with dashing and regenerates over time.
  - Energy pickups (`*`) replenish the player's energy.

- [x] **Implement Command Execution Functions**

  - **`f` + `<character>`**: Move forward to the next occurrence of `<character>`.
  - **`F` + `<character>`**: Move backward to the previous occurrence of `<character>`.
  - **`%`**: Jump to the matching pair of a bracket.

- [ ] **Implement Additional Dash Mechanics**
  - Fine-tune dash speed and energy consumption rates.

## **Phase 3: Obstacles and Power-Ups**

- [ ] **Implement Obstacles (Bugs)**

  - Introduce bug entities (`&`) that the player must avoid.
  - Implement collision detection between the player and bugs.

- [ ] **Implement Energy Pickups**

  - Place energy pickup items (`*`) throughout the levels.
  - Ensure pickups replenish the player's energy upon collection.

- [ ] **Enhance Collision Detection**
  - Improve collision responses between the player, platforms, and obstacles.

## **Phase 4: Level Design and Story Integration**

- [ ] **Design and Implement Levels**

  - Create multiple levels with increasing difficulty.
  - Introduce new challenges and obstacles in each level.

- [ ] **Integrate Story Progression**

  - Embed the narrative from `STORY.md` into the game progression.
  - Implement story checkpoints between levels.

- [ ] **Implement Power-Ups and Special Abilities**
  - Introduce additional power-ups that grant temporary abilities or bonuses.

## **Phase 5: User Interface and Menus**

- [ ] **Design Main Menu**

  - Create a main menu with options to start the game, view the story, and access settings.

- [ ] **Implement In-Game HUD**

  - Display the energy meter, current level, and other relevant information.

- [ ] **Create Pause and Game Over Screens**
  - Allow players to pause the game and handle game-over scenarios gracefully.

## **Phase 6: Leaderboards and Achievements**

- [ ] **Implement Leaderboards**

  - Track and display the fastest completion times.
  - Enable players to view their rankings compared to others.

- [ ] **Add Achievements System**
  - Introduce achievements for reaching specific milestones or completing challenges.

## **Testing and Quality Assurance**

- [ ] **Expand Jest Test Suite**

  - Write comprehensive tests for all movement commands and game mechanics.
  - Mock additional canvas and DOM elements as needed.

- [ ] **Implement Continuous Integration (CI)**

  - Set up CI pipelines to run tests automatically on code commits and pull requests.

- [ ] **Perform Playtesting**
  - Conduct playtesting sessions to gather feedback and identify bugs or balance issues.

## **Documentation**

- [x] **Create `README.md`**

  - Document the project overview, development phases, and research on game mechanics.

- [ ] **Create `STORY.md`**

  - Develop the game's narrative and integrate it into the gameplay.

- [ ] **Maintain `TODO.md`**
  - Continuously update this file with new tasks and mark completed ones accordingly.

## **Finalization**

- [x] **Optimize Game Performance**

  - Ensure smooth gameplay across different devices and screen sizes.

- [ ] **Polish Visuals and Audio**

  - Enhance graphics, add animations, and incorporate sound effects/music.

- [ ] **Prepare for Deployment**
  - Host the game on a suitable platform and ensure it's accessible to players.

---

_This TODO list serves as a roadmap for the development of the Vim-Inspired Platformer. Regular updates and revisions are encouraged to adapt to new ideas and challenges that arise during development._
