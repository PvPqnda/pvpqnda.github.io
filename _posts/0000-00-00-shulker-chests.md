---
layout: datapack
title: "Shulker Chests"
permalink: /datapacks/shulker-chests
date: 2022-06-27
short-description: "Want to easily move your chests full of items from one location to another? Now you can."
download: "/downloads/datapacks/Shulker Chests.zip"
trailer: "https://youtu.be/JHFn5zKKIMc"
tags: ["Game Mechanic"]
java-version: "1.17+"
version: 2.2.0
---
Created by: PvPqnda
-
*For Minecraft {{page.java-version}}*

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

<div id="accordion">
  <div class="card">
        <button class="card-header mb-0 btn btn-link text-decoration-none" data-toggle="collapse" data-target="#changelog" aria-expanded="false" aria-controls="changelog" id="changelogBtn">
           Changelog
        </button>
</div>

<div id="changelog" class="collapse" aria-labelledby="changelogBtn" data-parent="#accordion">
      <div class="card-body">
<b>v2.2.0</b> - <em>June 27, 2022</em><br>
<br>
- Containers no longer retain other filled containers inside when mined; preventing infinite storage within a single container<br>
- Added a setting to enable containers retaining other filled containers inside when mined in the Admin Info page<br>
- Fixed the "Mini Chests" container category setting being visible in the Admin Info page in vanilla 1.19<br>
<br>
<b>v2.1.1</b> - <em>May 27, 2022</em><br>
<br>
Fixed Dupe Glitches:<br>
- Filled containers inside of a container dropping despite being retained from being mined<br>
- Filled containers dropping after no longer being there due to time passing with the datapack disabled then re-enabled<br>
<br>
<b>v2.1.0</b> - <em>April 18, 2022</em><br>
<br>
- Silk Touch is now required for containers to retain their items when mined<br>
- Added a setting to disable the Silk Touch Requirement in the Admin Info page<br>
<br>
<b>v2.0.0</b> - <em>April 2, 2022</em><br>
<br>
- Now supports the Expanded Storage mod v7.3.11 for both Forge and the Fabric Loader<br>
- Filled containers will display contents in text like shulker boxes when hovered over in an inventory<br>
- Multiple filled containers with identical contents will no longer stack<br>
- Added an admin info page to toggle individual categories of containers<br>
- Performance improvements<br>
<br>
<b>v1.0.1</b> - <em>September 25, 2021</em><br>
<br>
- No longer supports Minecraft versions under 1.17<br>
- Performance improvements<br>
      </div>
    </div>
  </div>