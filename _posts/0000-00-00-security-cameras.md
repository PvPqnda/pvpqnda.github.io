---
layout: datapack
title: "Security Cameras"
permalink: /datapacks/security-cameras
date: 2022-06-12
short-description: "Want to go on adventures but check on your base? Get security cameras."
trailer: "https://youtu.be/1z1ojLY2aiA"
type: "Datapack"
version: 1.1.0
download: "/downloads/datapacks/Security Cameras.zip"
patreon: "https://www.patreon.com/pvpqnda"
---
Created by: PvPqnda
-
Inspired by ~ FloBubz ~

*For Minecraft 1.16+*

**Datapack Features:**

- Adds security cameras into the game!

- Craft security cameras by dropping any same number of iron ingots, glass panes, and redstone torches!

- Placing a security camera on the underside of a block will face it towards you and generate a number ID linked to the camera which is what you use to view the camera!

- Anyone is able to enter any camera from any location and dimension as long as they know the correct ID, and exiting will return the player back to their previous position and gamemode!<br>
However, players in survival/adventure must be standing on a block to enter a
camera, and will be vulnerable to a 10 second cooldown timer that stops the player from entering a camera within 10 seconds of taking or dealing damage.<br>
This is to prevent anyone from attempting to defy risky situations.

- Once a camera is placed, it will automatically start rotating in a 90 degree window centered around its rotation when you initially place it. To toggle a camera's automatic rotation, type: "/trigger ToggleRotation"

- To break a camera, simply destroy the block it is hanging from.

- To enter a camera, type: "/trigger Camera set \<ID>"

- To list the IDs of all existing cameras you've placed, type: "/trigger Cameras"

- Admins may list ALL camera IDs by typing: "/function securitycameras:list/all"

- Admins may list all OTHERS camera IDs by typing: "/function securitycameras:list/others"

*Survival & Multiplayer friendly*
<hr>
**Changelog:**

**v1.1.0** - *June 12, 2022*

- Now supports blocks from Minecraft versions 1.17 - 1.19
- Multiple security cameras can be crafted at once by dropping the same number of ingredients
- Performance improvements