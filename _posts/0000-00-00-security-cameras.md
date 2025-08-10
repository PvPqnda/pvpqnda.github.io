---
layout: datapack
title: "Security Cameras"
permalink: /datapacks/security-cameras
date: 2022-10-07
short-description: "Want to go on adventures but check on your base? Get security cameras."
download: "/downloads/datapacks/old/Security Cameras v1.1.0.zip"
patreon: "https://www.patreon.com/pvpqnda"
trailer: "https://youtu.be/ojSIsmHMZVk"
tags: ["Item"]
java-version: "1.16"
version: 2.0.0
---
Created by: PvPqnda
-
*For Minecraft {{page.java-version}}*

**Datapack Features:**

   * Adds feature-packed security cameras into the game!

   * Craft security cameras by dropping any same number of iron ingots, glass panes,
      and redstone torches on the ground!<br>
      <img class="figure-img img-fluid rounded" src="/img/datapacks/security-cameras/extras/crafting.gif">

   * Placing a security camera underneath a block will face it towards you and
      generate a number ID linked to the camera which is what you use to view the
      camera!

   * Once a camera is placed, it will automatically start rotating in a 90 degree
      window centered around its rotation when you initially place it.<br>
     To toggle a camera's automatic rotation, type: "/trigger ToggleRotation"<br>
      <img class="figure-img img-fluid rounded" src="/img/datapacks/security-cameras/extras/placing.gif">

   * To list the IDs of all existing cameras you've placed, type: "/trigger Cameras"!
      Listing your cameras will number them in the order you've placed them, display
      their locked/unlocked statuses, their IDs, and coordinates that are color coded
      by the dimension the camera is in.<br>
      *(Coordinates are replaced by the camera's custom name if it has one)*<br>
     Admins may list ALL camera IDs by typing:
      "/function securitycameras:list/all"<br>
     Admins may list all OTHERS camera IDs by typing:
      "/function securitycameras:list/others"

   * To enter a camera, either simply type: "/trigger Camera set \<ID>", or type:
      "/trigger Camera set ?" replacing the "?" with the number camera you've placed
      that you'd like to enter. E.g. Running "/trigger Camera set 3" will cause you
      to enter the 3rd camera you've placed, being the 3rd camera on your camera ID
      list in "/trigger Cameras"<br>
      <img class="figure-img img-fluid rounded" src="/img/datapacks/security-cameras/extras/entering.gif">

   * Cameras have a red light on the front that blinks if the camera is in use!<br>
     *(Blinking conditions can be customized)*<br>
      <img class="figure-img img-fluid rounded" src="/img/datapacks/security-cameras/extras/blinking.gif">

   * Anyone is able to enter any of their cameras from any location and dimension,
      and exiting will return them back to their previous position and gamemode!<br>
     However, survival/adventure mode players must be standing on a block to enter a
      camera, and will be vulnerable to a 10 second combat cooldown that stops them
      from entering a camera within 10 seconds of taking or dealing damage prior in
      order to prevent anyone from attempting to defy risky situations.
     *(Can be toggled in the Admin Info page)*

   * To destroy a camera, simply break the block it is hanging from.

   * Camera "Portals" are able to be made that are placed on a block and can be
      right-clicked in order to enter a camera from a certain location without
      needing to type anything!<br>
     Link a camera "portal" to a camera you own, or an unlocked camera another
      player owns, by placing an item frame, framing an item in it, and typing:
      "/trigger LinkPortal set \<Camera ID>"<br>
      *(Can be toggled in the Admin Info page)*<br>
      <img class="figure-img img-fluid rounded" src="/img/datapacks/security-cameras/extras/portals.gif">

   * All cameras are capable of built-in "Motion Detection" that must be manually
      enabled in each camera by their owners using: "/trigger MotionDetectionOn",
      or disabled using: "/trigger MotionDetectionOff".<br>
     Camera motion detection alerts camera owners if another player is spotted
      in-frame with a 70 degree FOV, unless the player is in an unlit area.<br>
      *(The low-lighting debuff is bypassed with camera night vision)*<br>
     *(Camera motion detection can be toggled as a whole in the Admin Info page)*<br>
      <img class="figure-img img-fluid rounded" src="/img/datapacks/security-cameras/extras/motion detection.gif">

   * Camera "Night Vision" can be applied to each camera by their owners by inserting
      golden carrots into the camera using "/trigger AddNightVision set ?" replacing
      the "?" with the number of golden carrots in the player's inventory to spend,
      each adding 15 minutes of night vision.<br>
      *(Can be toggled per camera by their owners using "/trigger ToggleNV")*<br>
     The golden carrot requirement can be toggled in the Admin Info page, allowing
      all cameras to have night vision enabled by their owners using
      "/trigger Toggle NV"<br>
     *(Camera night vision can be toggled as a whole in the Admin Info page)*<br>
      <img class="figure-img img-fluid rounded" src="/img/datapacks/security-cameras/extras/night vision.gif">

   * Cameras can be given custom names, by right-clicking them with a renamed name
      tag, that are displayed in "/trigger Cameras", when entering/exiting the
      camera, and more!

   * Cameras can be locked or unlocked by their owners (locked by default) allowing
      other players to enter someone else's unlocked camera if they know the ID from
      the owner sharing it, using "/trigger LockCamera" and "/trigger UnlockCamera"!

   * There are 18 customizable settings and 9 different server statistics for admins
      to access using the command: "/function securitycameras:admin_info"

   * Anyone can see how many cameras they have, and what settings are
      enabled/disabled by typing: "/trigger SecurityCameras"<br>
     *(Can be toggled in the Admin Info page)*

*Survival & Multiplayer friendly*

<div id="accordion">
  <div class="card">
        <button class="card-header mb-0 btn btn-link text-decoration-none" data-toggle="collapse" data-target="#changelog" aria-expanded="false" aria-controls="changelog" id="changelogBtn">
           Changelog
        </button>
</div>

<div id="changelog" class="collapse" aria-labelledby="changelogBtn" data-parent="#accordion">
      <div class="card-body">
<b>v2.0.0</b> - <em>October 7, 2022</em><br>
<br>
- Added an Admin Info page<br>
- Added camera "Portals"<br>
- Added camera "Motion Detection"<br>
- Added camera "Night Vision"<br>
- Added "Quick Entering"<br>
- The nametags of players in security cameras now remain at players' positions before entering a camera, with an indicator indicating so<br>
- Cameras are now able to be given custom names<br>
- Added camera locking/unlocking<br>
- Cameras now use rotation, and the lights on them now blink, either always, or only if the camera is in use<br>
- Listing camera IDs will now also number them in order, show their locked/unlocked status, along with either their custom name or their coordinates, color coded with the dimension they're in<br>
- Added the option to use a customizable "Timed View" setting in the Admin Info page limiting the amount of time survival/adventure mode players may spend in cameras before being kicked out automatically<br>
- Added the option to use a customizable "Enter Delay" setting in the Admin Info page, setting a cooldown for survival/adventure mode players entering cameras<br>
- Players in their own unlocked cameras are now displayed a list of other players also in the camera<br>
- Cameras now alert their owners upon being destroyed<br>
- Cameras can now be placed inside of unobstructive blocks such as tall grass and scaffolding<br>
- Camera IDs can now only be positive<br>
- Added click events to aspects in the chat message sent upon placing a new camera<br>
- Fixed cameras being unable to be placed underneath slabs<br>
- Fixed bug moving camera rotation windows upon server restart<br>
- Fixed bug allowing players to view freely after relogging from inside a camera<br>
- Fixed bug stating an ID of a different existing camera in the camera-exit message when the camera you're in is destroyed<br>
- Fixed exiting a camera by switching gamemodes overriding your new gamemode by setting it to what it was at the time of initially entering a camera<br>
- Added a warning message for when using the datapack in an older unsupported version of Minecraft<br>
- Tweaked camera texture<br>
- Reliability improvements<br>
- Performance improvements<br>
- Added a datapack icon<br>
<br>
<b>v1.1.0</b> - <em>June 12, 2022</em> - <a style="text-decoration: underline;" href="/downloads/datapacks/old/Security Cameras v1.1.0.zip" download>Download</a><br>
<br>
- Now supports blocks from Minecraft versions 1.17 - 1.19<br>
- Multiple security cameras can be crafted at once by dropping the same number of ingredients<br>
- Performance improvements<br>
      </div>
    </div>
  </div>
