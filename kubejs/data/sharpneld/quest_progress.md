Only one quest at the same time?
Can player cancel te quest?

Save player quest progression with a scoreboard
Example: /scoreboard objectives add create_quest dummy

Init scoreboard once per player to value 0
/scoreboard players set Haserius create_quest 0
Set scoreboard to in progress with value 1
/scoreboard players set Haserius create_quest 1 
When finished set scoreboard to 2
/scoreboard players set Haserius create_quest 2

Quest progress:

Player interact with NPC:
execute a custom command that check scoreboard value: if scoreboard is 0 run start dialog command, else go to quest progress command 
or call a function
or use an FTB Quest event to trigger the scoreboard change, but Ill need to add a condition to check after talk to villager

1. Starting:
btnStartQuest: Show
btnRememberQuest: Hidden
btnFinishQuest: Hidden

2. Player are reading the quest from NPC:
-Show the quest, etc etc
-At the end set scoreboard to 1

3. Player interact with NPC If quest is in progress not finished
btnStartQuest: Hidden
btnRememberQuest: Show
btnFinishQuest: Hidden
Show button to remember quest objective

4. Internally:
KubeJS check conditions (item crafted/stage/mob killed)
Checks:
every inventory changed, mob killed, item crafted event
if player scoreboard is set to 1, check conditions. If not, just continue.
Show toast If condition is completed successfully
set scoreboard to 2

5. Player interact with NPC If finished Quest internally:
btnStartQuest: Hidden
btnRememberQuest: Hidden
btnFinishQuest: Show
Show final dialog