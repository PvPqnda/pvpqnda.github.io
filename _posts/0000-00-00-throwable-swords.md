---
layout: datapack
title: "Throwable Swords"
permalink: /datapacks/throwable-swords
date: 2022-07-16
short-description: "Want to be able to throw your swords or axes like tridents? Now you can."
trailer: "https://youtu.be/UobKdnHP96Q"
type: "Datapack"
version: 2.0.4
download: "/downloads/datapacks/Throwable Swords.zip"
---
Created by: PvPqnda
-
*For Minecraft 1.17 - 1.19*

**Datapack Features:**

- This datapack allows any sword or axe to be thrown at mobs or blocks! The weapon will drop back as an item once it hits something!<br>
*Supports item NBT data!*

- To throw a sword or axe, simply drop it while holding it!

- Thrown weapons damage mobs and players, break glass, cut grass, and more!

- Thrown swords enchanted with fire aspect will still respectively catch whatever mob it hits on fire!

- Thrown weapons still lose durability upon landing!

- There are 6 customizable settings to access using the command:<br>
"/function throwableswords:admin_info"<br>
*(Only players with operator permissions can access this page)*

- Anyone is able to view how many weapons they've thrown, and what settings are enabled/disabled by typing: "/trigger ThrowableSwords"<br>
*(Can be enabled/disabled in the admin info page)*

*Survival & Multiplayer friendly*
<hr>
**Changelog:**

**v2.0.4** - *July 16, 2022*

- Significant performance improvements

**v2.0.3** - *June 19, 2022*

- Added support for Minecraft 1.19
- Mangrove propagules and sculk veins can now be cut by thrown weapons
- Blocks cut by weapons thrown by creative mode players no longer drop items
- Fixed strong axes sometimes sending player death messages without killing the player
- Edited the thrown axe death message
- Added a warning message for when using the datapack in an old unsupported version of Minecraft

**v2.0.2** - *March 3, 2022*

- Fixed bug duplicating weapons thrown by players in creative mode while setting "Durability" is set to false

**v2.0.1** - *November 30, 2021*

- Removed thrown weapon world height limit to support 1.17 AND 1.18
- Performance improvements

**v2.0.0** - *October 1, 2021*

- All axes are now able to be thrown for extra damage! (Also added a setting in admin info page so axe and sword throwing can each be toggled individually)
- Swords and axes now have a pickup delay after they land from being thrown, equivalent to that of the weapon's attack speed/cooldown/delay, for balancing
- Improved entity hit detection consistency
- Candles being put out by a thrown weapon now make a subtle sound
- The public info page is now able to be viewed through the admin info page when disabled to the public
- Tweaked throwing sounds
- Performance improvements

**v1.1.1** - *September 21, 2021*

- No longer supports previous versions; Minecraft 1.17 only
- Fixed "Durability" setting from being unable to be set to False
- Performance improvements

**v1.1.0** - *June 13, 2021*

- Added 1.17 support and added some of the new 1.17 blocks to the blocks that can be cut by thrown swords (Pointed Dripstone, Amethyst Buds/Clusters, Dripleaves, Azalea, Glow Lichen, Cave Vines, and Hanging Roots)
- Scaffolding and leaves are now also able to be cut by thrown swords
- Only one glass can be broken per sword thrown; same goes for the addition of leaves and pointed dripstone
- Lit candles can be put out if a sword is thrown past them
- Added a setting for a new function that damages thrown swords when they land, removing 1 durability from the sword, breaking the sword if it already has 1 durability remaining