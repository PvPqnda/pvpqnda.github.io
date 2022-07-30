---
layout: datapack
title: "Shulker Chests"
permalink: /datapacks/shulker-chests
date: 2022-06-27
short-description: "Want to easily move your chests full of items from one location to another? Now you can."
trailer: "https://youtu.be/JHFn5zKKIMc"
type: "Datapack"
download: "/downloads/datapacks/Shulker Chests.zip"
version: 2.2.0
---
Created by: PvPqnda
-
*For Minecraft 1.17+*

**Datapack Features:**

- Enables chests to keep their items inside when broken!

- Breaking a container will drop the chest with the items still inside, without dropping all of the contents everywhere.

- Placing a container back down will retain any items that were still inside!

- Even works in creative mode!<br>
*(Unless the silk touch requirement setting is enabled)*

- This affects chests, trapped chests, and barrels!

- Filled containers will display their contents in text when hovered over in an inventory just like shulker boxes!

- By default, silk touch is required on the tool mining a container in order for it to retain its contents!<br>
*(This can be disabled in the Admin Info page)*

- Supports the Expanded Storage mod v7.3.11 for both Forge and the Fabric Loader!

- Still prevents infinite storage by putting filled containers inside filled containers!

- Admins may type "/function shulkerchests:admin_info" to toggle individual categories of containers, or whether or not silk touch is required!

*Survival & Multiplayer friendly*
<hr>
**Changelog:**

**v2.2.0** - *June 27, 2022*

- Containers no longer retain other filled containers inside when mined, preventing infinite storage within a single container
- Added a setting to enable containers retaining other filled containers inside when mined in the Admin Info page
- Fixed the "Mini Chests" container category setting being visible in the Admin Info page in vanilla 1.19

**v2.1.1** - *May 27, 2022*

Fixed Dupe Glitches:
- Filled containers inside of a container dropping despite being retained from being mined
- Filled containers dropping after no longer being there due to time passing with the datapack disabled then re-enabled

**v2.1.0** - *April 18, 2022*

- Silk Touch is now required for containers to retain their items when mined
- Added a setting to disable the Silk Touch Requirement in the Admin Info page

**v2.0.0** - *April 2, 2022*

- Now supports the Expanded Storage mod v7.3.11 for both Forge and the Fabric Loader
- Filled containers will display contents in text like shulker boxes when hovered over in an inventory
- Multiple filled containers with identical contents will no longer stack
- Added an admin info page to toggle individual categories of containers
- Performance improvements

**v1.0.1** - *September 25, 2021*

- No longer supports Minecraft versions under 1.17
- Performance improvements