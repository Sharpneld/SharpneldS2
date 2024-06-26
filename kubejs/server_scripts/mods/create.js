ServerEvents.recipes(event => {

    //Overworld Resources

    event.recipes.createoreexcavation.vein('{"text": "Copper Deposits"}', 'minecraft:copper_ore').placement(512, 64, 189485).veinSize(10, 20).biomeWhitelist('forge:is_overworld').id("kubejs:copper_deposits")
    event.recipes.createoreexcavation.drilling('minecraft:copper_ore', 'kubejs:copper_deposits', 100).stress(128).id("kubejs:copper_ore_deposit");

    event.recipes.createoreexcavation.vein('{"text": "Coal Deposits"}', 'minecraft:coal_ore').placement(512, 64, 3531254).veinSize(13, 21.5).biomeWhitelist('forge:is_overworld').id("kubejs:coal_deposits")
    event.recipes.createoreexcavation.drilling('minecraft:coal_ore', 'kubejs:coal_deposits', 100).stress(128).id("kubejs:coal_ore_deposit");

    event.recipes.createoreexcavation.vein('{"text": "Iron Deposits"}', 'minecraft:iron_ore').placement(512, 64, 8124735).veinSize(9, 10.75).biomeWhitelist('forge:is_overworld').id("kubejs:iron_deposits")
    event.recipes.createoreexcavation.drilling('minecraft:iron_ore', 'kubejs:iron_deposits', 100).stress(256).id("kubejs:iron_ore_deposit");

    event.recipes.createoreexcavation.vein('{"text": "Redstone Deposits"}', 'minecraft:redstone_ore').placement(512, 64, 3214685).veinSize(12, 17.5).biomeWhitelist('forge:is_overworld').id("kubejs:redstone_deposits")
    event.recipes.createoreexcavation.drilling('minecraft:redstone_ore', 'kubejs:redstone_deposits', 100).stress(256).id("kubejs:redstone_ore_deposit");

    event.recipes.createoreexcavation.vein('{"text": "Lapis Deposits"}', 'minecraft:lapis_ore').placement(512, 64, 4344685).veinSize(7, 30).biomeWhitelist('forge:is_overworld').id("kubejs:lapis_deposits")
    event.recipes.createoreexcavation.drilling('minecraft:lapis_ore', 'kubejs:lapis_deposits', 100).stress(256).id("kubejs:lapis_ore_deposit");

    event.recipes.createoreexcavation.vein('{"text": "Zinc Deposits"}', 'create:zinc_ore').placement(512, 64, 7154385).veinSize(9, 10.5).biomeWhitelist('forge:is_overworld').id("kubejs:zinc_deposits")
    event.recipes.createoreexcavation.drilling('create:zinc_ore', 'kubejs:zinc_deposits', 100).stress(256).id("kubejs:zinc_ore_deposit");

    event.recipes.createoreexcavation.vein('{"text": "Emerald Deposits"}', 'minecraft:emerald_ore').placement(2048, 64, 354685).veinSize(2, 3.5).biomeWhitelist('forge:is_overworld').id("kubejs:emerald_deposits")
    event.recipes.createoreexcavation.drilling('minecraft:emerald_ore', 'kubejs:emerald_deposits', 100).stress(512).id("kubejs:emerald_ore_deposit");

    event.recipes.createoreexcavation.vein('{"text": "Diamond Deposits"}', 'minecraft:diamond_ore').placement(4096, 64,2143643
    ).veinSize(1, 5.5).biomeWhitelist('forge:is_overworld').id("kubejs:diamond_deposits")
    event.recipes.createoreexcavation.drilling('minecraft:diamond_ore', 'kubejs:diamond_deposits', 200).stress(1024).id("kubejs:diamond_ore_deposit");

    //Nether Resources

    event.recipes.createoreexcavation.vein('{"text": "Nether Gold Deposits"}', 'minecraft:nether_gold_ore').placement(256, 32, 1451273).veinSize(8, 12.5).biomeWhitelist('forge:is_nether').id("kubejs:nether_gold_deposits")
    event.recipes.createoreexcavation.drilling('minecraft:nether_gold_ore', 'kubejs:nether_gold_deposits', 100).stress(64).id("kubejs:nether_gold_ore_deposit");

    event.recipes.createoreexcavation.vein('{"text": "Nether Quartz Deposits"}', 'minecraft:nether_quartz_ore').placement(128, 32, 2481245).veinSize(5, 12.5).biomeWhitelist('forge:is_nether').id("kubejs:nether_quartz_deposits")
    event.recipes.createoreexcavation.drilling('minecraft:nether_quartz_ore', 'kubejs:nether_quartz_deposits', 100).stress(64).id("kubejs:nether_quartz_ore_deposit");


    //Overworld Fluids
    event.recipes.createoreexcavation.vein('{"text": "Underground Water"}', 'minecraft:water_bucket').placement(1024, 128, 3578429).alwaysInfinite().id("kubejs:underground_water")
    event.recipes.createoreexcavation.extracting('minecraft:water 2000', 'kubejs:underground_water', 10).id("kubejs:underground_water_source");

    event.recipes.createoreexcavation.vein('{"text": "Underground Lava"}', 'minecraft:lava_bucket').placement(1024, 128, 4548791).alwaysInfinite().id("kubejs:underground_lava")
    event.recipes.createoreexcavation.extracting('minecraft:lava 500', 'kubejs:underground_lava', 50).id("kubejs:underground_lava_source");

    //Nether Fluids
    event.recipes.createoreexcavation.vein('{"text": "Underground Nether Lava"}', 'minecraft:lava_bucket').placement(1024, 128, 5842139).biomeWhitelist('forge:is_nether').id("kubejs:nether_lava")
    event.recipes.createoreexcavation.extracting('minecraft:lava 5000', 'kubejs:nether_lava', 10).id("kubejs:nether_lava_source");

});


