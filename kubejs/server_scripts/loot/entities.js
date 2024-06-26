const tagStacksWpns = Ingredient.of('#sharpneld:weapons/rare').stacks;

const EndGameBosses = [
    "minecraft:ender_dragon",
    "minecraft:wither",
    "bosses_of_mass_destruction:void_blossom",
    "bosses_of_mass_destruction:lich",
    "bosses_of_mass_destruction:gauntlet",
    "bosses_of_mass_destruction:obsidilith",
    "minecells:conjunctivius",
    "cataclysm:ancient_remnant",
    "cataclysm:ender_golem",
    "cataclysm:ender_guardian",
    "cataclysm:ignis",
    "cataclysm:netherite_monstrosity",
    "cataclysm:the_harbinger",
    "cataclysm:the_leviathan"
];
//alexs caves, aquamirae, born in chaos, cataclysm, deep dark?, gnumus, irons spells, wither storm

LootJS.modifiers((event) => {

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

    // Boss Drop Rare Wpns
    EndGameBosses.forEach(mob => {
        // Unique weapons
        event.addEntityLootModifier(mob)
            .apply(ctx => {
                let item = tagStacksWpns[Math.floor(Math.random() * tagStacksWpns.length)];
                ctx.addLoot(item);
            });

        // Moonstones / Currency
        /*event.addEntityLootModifier(mob).pool((p) => {
            p.addLoot("soulsweapons:moonstone");
            p.limitCount([2, 3])
        });*/

    });
    /*event.addLootTableModifier("bosses_of_mass_destruction:chests/gauntlet", "bosses_of_mass_destruction:chests/obsidilith").pool((p) => {
        p.addLoot("soulsweapons:moonstone");
        p.limitCount([2, 3])
    });*/

});