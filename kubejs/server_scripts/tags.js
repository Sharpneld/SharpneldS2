// priority: 1000

const SimplyRareSwords = [
    "simplyswords:watcher_claymore",
    "simplyswords:brimstone_claymore",
    "simplyswords:storms_edge",
    "simplyswords:stormbringer",
    "simplyswords:bramblethorn",
    "simplyswords:watching_warglaive",
    "simplyswords:toxic_longsword",
    "simplyswords:emberblade",
    "simplyswords:frostfall",
    "simplyswords:soulpyre",
    "simplyswords:molten_edge",
    "simplyswords:livyatan",
    "simplyswords:icewhisper",
    "simplyswords:arcanethyst",
    "simplyswords:thunderbrand",
    "simplyswords:hearthflame",
    "simplyswords:twisted_blade",
    "simplyswords:soulrender",
    "simplyswords:soulkeeper",
    "simplyswords:soulstealer",
    "simplyswords:mjolnir",
    "simplyswords:slumbering_lichblade",
    "simplyswords:waking_lichblade",
    "simplyswords:awakened_lichblade",
    "simplyswords:shadowsting",
    "simplyswords:dormant_relic",
    "simplyswords:tainted_relic",
    "simplyswords:righteous_relic",
    "simplyswords:sunfire",
    "simplyswords:harbinger"
];

const hideEMI = [
    "/lightmanscurrency:vending_machine_*/",
    "/lightmanscurrency:card_display_*/",
    "/lightmanscurrency:shelf_*/",
    "/lightmanscurrency:freezer_*/",
    'lightmanscurrency:coinmint',
    'lightmanscurrency:cash_register',
    'lightmanscurrency:paygate',
    'lightmanscurrency:ticket_machine',
    'lightmanscurrency:tax_block',
    '/customnpcs:*/',
    '/easy_npc:*/',
    '/rocks:*/',
    '/citadel:*/',
    '/realmrpg_quests:shell_*/',
    '/daily_rewards:.*/',
    '/miapi:*/',
    '/immersive_weathering:.*_pile/',
    '/immersive_weathering:.*_bark/',
    '/immersive_weathering:waxed_.*/',
    '/immersive_weathering:exposed_.*/',
    '/immersive_weathering:weathered_.*/',
    '/immersive_weathering:rusted_.*/',
    '/betterend:.*bulb.*/',
    '/runic_enchanting:.*_rune_block/',
    '/spectrum:.*_head/',
    'spectrum:memory',
    '/valhelsia_structures:.*/'
]

ServerEvents.tags('item', event => {
    //event.add('sharpneld:weapons/rare', ["wom:agony", "wom:tormented_mind", "wom:ruine", "wom:ender_blaster", "wom:antitheus", "wom:satsujin", "wom:herrscher", "wom:gesetz", "wom:moonless", "wom:netherite_staff"])
    event.add('c:certus_quartz', 'ae2:certus_quartz_crystal')
    event.add('c:silicon', 'ae2:silicon')
    event.add('sharpneld:breakable', ['#curios:belt', '#curios:body', '#curios:bracelet', '#curios:charm', '#curios:hands', '#curios:necklace', '#curios:ring', '#curios:catastrophe', '#curios:etching', '#curios:heart', '#curios:pendant', '#curios:scroll', '#curios:feet', '#curios:talisman', "/celestial_artifacts:.*_arrow_bag/", '/celestial_artifacts:.*_scabbard/', 'relics:midnight_robe', 'relics:arrow_quiver', 'relics:elytra_booster','celestial_artifacts:sea_god_crown', 'celestial_artifacts:prayer_crown', 'celestial_artifacts:abyss_core', 'celestial_artifacts:guardian_eye', 'celestial_artifacts:evil_eye', 'celestial_artifacts:spirit_crown', 'ars_nouveau:alchemists_crown','alexscaves_torpedoes:pocket_magnet','/trophy.*/'])
    event.add('sharpneld:spawn_egg', ['/.*:.*spawn_egg/','dragonmounts:spawn_egg','/betterend:spawn_egg.*/', '/eeeabsmobs:.*_egg/', '/alexscaves:spawn_egg.*/', '/specialmobs:.*_spawn_egg/'])
    /*SimplyRareSwords.forEach(function (item, index) {
        event.add('sharpneld:weapons/rare', item)
    });*/
    event
        .get('ars_nouveau:unstable_gifts')
        .removeAll()
        .add(['ars_nouveau:mana_regen', 'ars_nouveau:recovery', 'ars_nouveau:shielding', 'ars_nouveau:spell_damage', 'cofh_core:clarity', 'cofh_core:cold_resistance', 'cofh_core:explosion_resistance', 'cofh_core:lightning_resistance', 'cofh_core:magic_resistance', 'cofh_core:slimed', 'farmersdelight:comfort', 'farmersdelight:nourishment', 'minecraft:absorption', 'minecraft:fire_resistance', 'minecraft:haste', 'minecraft:regeneration', 'minecraft:resistance', 'minecraft:saturation', 'minecraft:slow_falling', 'minecraft:strength']);

    event.add('c:hidden_from_recipe_viewers',hideEMI)
    event.add('c:hidden_from_recipe_viewers','#sharpneld:spawn_egg')
})
