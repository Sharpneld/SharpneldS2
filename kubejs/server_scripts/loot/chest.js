//alexs caves, aquamirae, born in chaos, cataclysm, deep dark?, gnumus, irons spells, wither storm

LootJS.modifiers((event) => {

    //event.addLootTypeModifier(LootType.CHEST, LootType.ENTITY).removeLoot("minecraft:map");
    //event.addLootTypeModifier(LootType.CHEST, LootType.ENTITY).removeLoot("minecraft:filled_map");
    event.addLootTypeModifier(LootType.CHEST, LootType.ENTITY).removeLoot('/wom:.*/')
    event.addLootTypeModifier(LootType.CHEST).removeLoot("ars_additions:codex_entry")
    event.addLootTypeModifier(LootType.CHEST).removeLoot('/runic_enchanting:.*_rune_stone/')
    event.addLootTypeModifier(LootType.CHEST).playerPredicate((player) =>{
        return player.stages.has('test')
    }).addLoot("minecraft:iron_ore")
    //event.addLootTypeModifier(LootType.ENTITY).removeLoot('/scalinghealth:.*/')
    
    /*event.addLootTypeModifier(LootType.ENTITY)
    .not((n) => {
        n.killedByPlayer()
    })
    .removeLoot(Ingredient.all)*/
    
    //Only scaling health loot in nether dungeons
    /*event.addLootTypeModifier(LootType.CHEST)
        .not((n) => {
            n.anyDimension("minecraft:nether")
        })
        .removeLoot('/scalinghealth:/')*/

    //Only skillbooks in nether
    /*event.addLootTypeModifier(LootType.ENTITY)
        .not((n) => {
            n.anyDimension("minecraft:nether")
        })
        .removeLoot(Ingredient.of('epicfight:skillbook'))
    */



});
/*
let foodLoot = []
let modList = ['create', 'naturalist', 'born_in_chaos_v1', 'gnumus', 'minecraft']
let blackList = ['minecraft:barrier', 'minecraft:enchanted_golden_apple']

Item.list.forEach(i => {
    let mod = i.item.getMod()
    if (i.item.foodProperties && !i.item.id.includes(blackList)) {
        if (modList.includes(mod) && i.item.foodProperties.nutrition <= 8 && i.item.foodProperties.saturationModifier < 1.5) {
            foodLoot.push(i.id)
        }
    }
})
//replace all food with a random from the foodLoot list
LootJS.modifiers((event) => {
    event.addLootTypeModifier(LootType.CHEST)
        .modifyLoot(ItemFilter.FOOD, (itemStack) => {
            let newFood = Item.of(foodLoot[Math.floor(Math.random() * foodLoot.length)], itemStack.getCount())
            if (global.debug) {
                console.log('newFood: ' + newFood + ', amount: ' + newFood.getCount())
            }
            return newFood
        });

});
*/