//const EldritchMobsMod = Java.loadClass('net.hyper_pigeon.eldritch_mobs.EldritchMobsMod')
//const MobRank = Java.loadClass('net.hyper_pigeon.eldritch_mobs.rank.MobRank')
//const TieredModifierUtils = Java.loadClass('draylar.tiered.api.ModifierUtils')

//const $VanillaTypes = Java.loadClass('mezz.jei.api.constants.VanillaTypes')
/*
ItemEvents.entityInteracted(event => {
    manageEntity(event)
    event.target.nbt["cardinal_components"]
})
const manageEntity = event => {
    console.log(event.target)
    console.log(Object.keys(event.target))
}*/

ItemEvents.rightClicked('minecraft:nether_star', event => {
    doAnotherThing(event)
    /*const newCow = event.player.block.createEntity("minecraft:cow")
    EldritchMobsMod.ELDRITCH_MODIFIERS.get(newCow).setRank(MobRank.ULTRA)
    EldritchMobsMod.ELDRITCH_MODIFIERS.get(newCow).randomlySetModifiers()
    EldritchMobsMod.ELDRITCH_MODIFIERS.get(newCow).setTitle()
    newCow.spawn()*/
    event.player.stats.set(Stats.PLAY_TIME, 2 * 1200 * 60)
})
/**
 * 
 * @param {Internal.rightClicked} event 
 */
const doAnotherThing = event => {
    console.log('doAnotherThing')
    console.log(event.player.stats.playTime)
    //701592
    event.player.tell(event.player.stats.playTime / 1200)//mins
    event.player.stats.set(Stats.PLAY_TIME, 10 * 1200 * 60)
    event.player.tell('New playtime')//mins
    event.player.tell(event.player.stats.playTime / 1200)//mins
}

ItemEvents.rightClicked('minecraft:netherite_sword', event => {
    console.log(event.item.enchantmentTags)
    doThing(event)
    //TieredModifierUtils.setItemStackAttribute(null, event.item, false);
})

const doThing = event => {
    console.log('doThing')
    return
    event.item.enchantmentTags.forEach((enchant, index) => {
        if (enchant.id == "cursery:curse_loose") {
            event.item.enchantmentTags.remove(index)
            console.log("found")
        }
    })
    //global.jeiRuntime.getIngredientManager().addIngredientsAtRuntime($VanillaTypes.ITEM_STACK, Ingredient.of('minecraft:oak_planks'))
}
/*
PlayerEvents.loggedIn(event =>{
    event.player.sendData('loadStages', { type : "mod", id : "minecraft" })
})
ServerEvents.loaded(event => {
    console.log("loaded")
})*/
/*
PlayerEvents.chat((event) => {
  let { player, message, server } = event;
  server.tell([Text.yellow(player.displayName), " ", Text.gray("»"), " ", Text.white(message)]);
  event.cancel();
});
*/

EntityEvents.spawned("alexscaves:tremorzilla", event => {
    let tremorzilla = event.entity
    tremorzilla.FOOD_ITEMS = Ingredient.of("minecraft:barrier")
})

let modAndStage = [
    ['witherstormmod', 'nuclear_physicist']
]
/*
EntityEvents.spawned(event => {
    const { entity } = event

    if (typeof(entity) !== null) {
        let entityName = entity.getType()
        let player = entity.getLevel().getNearestPlayer(entity, global.mobStageRange)

        if (player !== null && player.getName() !== null) {
            let playerName = player.getName().getString()
            let playerStages = player.getStages().getAll()

            modAndStage.forEach(pair => {
                const [ mod, stage ] = pair
                if (entityName.split(':')[0] === mod && !playerStages.contains(stage)) {
                    if (global.debug) {
                        console.log(`Canceling ${entityName} spawn for ${playerName} due to ${stage} stage abscence`)
                    }
                    event.cancel()
                }
            })
        }    
    }
})*/

/**
 * Obtain a list of all mobs from special mobs in this format
 * {
      "id": "specialmobs:giantwitherskeleton",
      "required": false
    }
 */

let itemList = []
let modList = ['specialmobs']
let types = ['blaze',
    'creeper',
    'enderman',
    'ghast',
    'guardian',
    'hoglin',
    'illager',
    'phantom',
    'piglin',
    'shulker',
    'skeleton',
    'slime',
    'spider',
    'warden',
    'zombie'
]
//Classify mobs by type for realmrpg tags
Item.list.forEach(i => {
    let mod = i.item.getMod()
    if (modList.includes(mod)) {
        //remove the string _spawn_egg at the end of the id
        let idfull = i.id.split('_spawn_egg')[0]
        //console.log(idfull)
        let id = idfull.split(':')[1]
        //console.log(id)
        //Sort by type. The search type could be in any part of the id. Push every id in a different subarray for each type
        for (let type of types) {
            if (id.includes(type)) {
                // push in the subarray
                if (itemList[types.indexOf(type)] === undefined) {
                    itemList[types.indexOf(type)] = []
                }
                itemList[types.indexOf(type)].push({
                    "id": mod + ":" + id,
                    "required": false
                })
            }
            else {
                // push in other subarray
                if (itemList['other'] === undefined) {
                    itemList['other'] = []
                }
                itemList['other'].push({
                    "id": mod+ ":" + id,
                    "required": false
                })
            }
        }
    }
})
//Print each subarray
for (let type of types) {
    if (itemList[types.indexOf(type)] !== undefined) {
        console.log(JSON.stringify(itemList[types.indexOf(type)]))
    }
}
//console.log(JSON.stringify(itemList))