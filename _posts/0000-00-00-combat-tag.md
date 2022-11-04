---
layout: datapack
title: "Combat Tag"
permalink: /datapacks/combat-tag
date: 2022-11-04
short-description: "Hate dealing with combat loggers? Here's the ultimate solution!"
patreon: "https://www.patreon.com/pvpqnda"
trailer: "https://youtu.be/pZ3T-5nHSXM"
tags: ["Game Mechanic"]
java-version: "1.17+"
version: 1.0.0
---
Created by: PvPqnda
-
*For Minecraft {{page.java-version}}*

**Datapack Features:**

   * Adds a restriction to players in combat disallowing them from disconnecting
     from the server attempting to defy risky situations that they're already in.

   * Players who take damage are immediately "combat tagged", which applies a
      custom set timer (default 10 seconds) that is displayed to them, which
      indicates how long they must wait before being able to safely disconnect
      from the server.

   * Players who disconnect from the server while combat tagged are immediately
      killed upon logout, dropping their items at their last location (unless
      keepInventory is set to true), and are prompted with the death screen like
      normal (unless doImmediateRespawn is set to true) upon logging back in.

   * There are 5 customizable settings and 2 different server statistics for
      admins to access using the command: "/function combattag:admin_info".<br>
     The following are the 5 different settings:

   * Tag Duration: How long players must wait for their combat tag to expire.<br>
      (0-60 seconds) (0 seconds prevents combat tagging)

   * Damage Source: Any / Player<br>
      Any: Players will be combat tagged upon taking any kind of damage.<br>
      Player: Players will only be combat tagged upon taking damage from another
       player within 50 blocks.

   * Tag Status: Hotbar / Crosshair / Chat<br>
      Where the combat tag status timer is displayed to combat tagged players.

   * Tag Prefix: True / False<br>
      When set to True, tag status messages will be prefixed with "Combat Tag".

   * Info Trigger: True / False<br>
      When set to True, anyone will be able to type "/trigger CombatTag" to see
       how many combat tags they've received/inflicted, and what settings are
       set to.

*Survival & Multiplayer friendly*