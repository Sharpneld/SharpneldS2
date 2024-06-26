/*LootJS.modifiers((event) => {
    event.enableLogging();
});*/

LootJS.modifiers(event => {
    event.addBlockLootModifier('minecraft:diamond_ore').replaceLoot('minecraft:diamond', 'createoreexcavation:raw_diamond')
})