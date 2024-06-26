ServerEvents.recipes(event => {
    //event.remove({ type: 'minecraft:smelting', output: '#forge:ingots' })
    //Remove minecraft smelting recipes
    
    event.remove({ type: 'minecraft:smelting', output: '#forge:gems/diamond' })
    event.remove({ type: 'minecraft:blasting', output: '#forge:gems/diamond' })
    
    event.replaceOutput({ id: 'minecraft:iron_ingot_from_smelting_sculk_stone_iron_ore'}, '#forge:ingots/iron', '#forge:nuggets/iron')
    //event.remove({ id: 'minecraft:smelting', output: '#forge:ingots/iron' })
})
