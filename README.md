What we are building

I want to build a game that makes learning vim amazing. I mean, super amazing. So I have this idea that has been brewing for a long time.

For those that have played Celeste, Super Meat Boy, or my favorite, The N Game, then you know what I am about to build!

I am going to build an aggressive platformer where you have to use vim motions to dodge, dip, dive, duck, and dodge through a world that just wants to kill you constantly

Game Dev Day 1

- Setup a MF javascript project
- Place a canvas on the screen
- Draw a cursor on the screen
- Move the cursor with hl
- k to jump
- Physics back to the ground (stretch)
  - Aabb and platforms….

Phase 1

- Build a game that allows you to use h,j,k,l,w,b as movements. This should allow me to build out the whole engine, but the game will not be too much fun and the learnings will be pretty small
- The big part here is thinking about energy and how it will limit what you can do in one turn before getting safe

Phase 2
Add in levels and mechanics that use f,F,t,T, and %

- Add in floating items that are used as power ups
- In Game danger items

Phase 3

- Add in the menus
- The really simple story I wanted to add
- Leaderboard for who has finished the game the fastest

## Research on Game Mechanics

The movement and energy systems in Celeste, Super Meat Boy, and The N Game are fundamental to their gameplay, each offering distinct mechanics that challenge players in unique ways.

Celeste

Movement Mechanics:

- Jumping: Basic jumps are the foundation for navigating platforms.
- Air-Dashing: Madeline can dash in any of eight directions while airborne, but only once before needing to land or refresh her dash.
- Climbing: She can cling to and climb walls for a limited time, adding verticality to the gameplay.

Energy/Stamina System:

- Stamina Meter: While climbing, Madeline has a stamina bar that depletes over time. Exhausting it causes her to lose grip and fall.
- Dash Refresh: Certain items and environmental elements can refresh her dash ability mid-air, allowing for complex aerial maneuvers.

Super Meat Boy

Movement Mechanics:

- Running: The game emphasizes speed, with Meat Boy moving quickly across levels.
- Jumping: Precise jumping is crucial to avoid hazards.
- Wall Sliding and Jumping: Meat Boy can slide down walls and perform repeated wall jumps to ascend or navigate tight spaces.

Energy System:

- Unlimited Actions: There is no stamina or energy bar. Players can run, jump, and wall-jump without restrictions, focusing on skillful navigation and timing.

The N Game

Movement Mechanics:

- Physics-Based Movement: The game uses realistic physics, making momentum and inertia key factors.
- Running and Jumping: Players must build up speed to make longer jumps.
- Wall Jumping: Essential for reaching higher areas and avoiding obstacles.

Energy/Time System:

- Time Limit: Each level has a countdown timer, adding urgency.
- Gold Collection: Picking up gold pieces extends the time, rewarding exploration and risk-taking.

Prompt on Gaming Mechanics

Design Challenge:

“Create a platformer that seamlessly integrates the stamina-based climbing of Celeste, the unrestricted and fast-paced wall jumping of Super Meat Boy, and the physics-driven momentum and time constraints of The N Game. Describe how these combined mechanics would impact level design, player strategy, and the overall difficulty curve. Consider how to balance the game’s challenge to keep it engaging without overwhelming the player.”

This prompt encourages a deep dive into game design, focusing on how merging different movement and energy systems can create a fresh and compelling gameplay experience. It asks for an analysis of:

- Level Design: How the environments would need to accommodate and challenge the combined mechanics.
- Player Strategy: How players might approach obstacles given the new set of abilities and limitations.
- Difficulty Curve: Ensuring the game remains accessible while providing a satisfying challenge.
