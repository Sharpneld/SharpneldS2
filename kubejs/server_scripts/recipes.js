const jeiRemove = [
    "gobber2:gobber2_medallion_shielding",
    "gobber2:gobber2_medallion_suffering",
    "gobber2:gobber2_ring_airwalking",
    "gobber2:gobber2_ring_farmer",
    "gobber2:gobber2_ring_phoenix",
    "gobber2:gobber2_ring_repair",
    "gobber2:gobber2_ring_stealth",
    "gobber2:gobber2_ring_strength",
    "gobber2:gobber2_ring_sunshine",
    "gobber2:gobber2_staff_farmer",
    "gobber2:gobber2_staff_hostile_ensnarement",
    "gobber2:gobber2_special_item",
    "modern_industrialization:gravichestplate_",
    "modern_industrialization:quantum_boots_",
    "modern_industrialization:quantum_chestplate_",
    "modern_industrialization:quantum_helmet_",
    "modern_industrialization:quantum_leggings_",
    "modern_industrialization:replicator_",
    "spectrum:ashen_circlet",
    "spectrum:block_flooder",
    "spectrum:ender_splice",
    "spectrum:exchange_staff",
    "spectrum:multitool",
    "fwaystones:waystone",
    "fwaystones:desert_waystone",
    "fwaystones:red_desert_waystone",
    "fwaystones:stone_brick_waystone",
    "fwaystones:deepslate_brick_waystone",
    "fwaystones:blackstone_brick_waystone",
    "sophisticatedbackpacks:feeding_upgrade",
    "sophisticatedbackpacks:advanced_feeding_upgrade",
    "sophisticatedbackpacks:compacting_upgrade",
    "sophisticatedbackpacks:advanced_compacting_upgrade",
    "sophisticatedbackpacks:inception_upgrade",
    "sophisticatedbackpacks:everlasting_upgrade",
    "sophisticatedbackpacks:stack_upgrade_tier_3",
    "sophisticatedbackpacks:stack_upgrade_tier_4",
    "sophisticatedbackpacks:battery_upgrade",
    "gobber2:gobber2_tree_axe",
    "gobber2:gobber2_hammer",
    "gobber2:gobber2_tree_axe_nether",
    "gobber2:gobber2_hammer_nether",
    "gobber2:gobber2_sword_traveler",
    "gobber2:gobber2_tree_axe_end",
    "gobber2:gobber2_hammer_end",
    "gobber2:gobber2_ring_ascent",
    "gobber2:gobber2_ring_husbandry",
    "gobber2:gobber2_ring_swiftness",
    "gobber2:gobber2_ring_vision",
    "gobber2:gobber2_ring_blaze",
    "gobber2:gobber2_ring_pyro",
    "gobber2:gobber2_ring_stealth",
    "gobber2:gobber2_medallion_glowing",
    "gobber2:gobber2_staff_harvest",
    "gobber2:gobber2_staff_ensnarement"
];

//Music Discs Stonecutter
let vanillaMusicDiscs = [
    'minecraft:music_disc_13',
    'minecraft:music_disc_cat',
    'minecraft:music_disc_blocks',
    'minecraft:music_disc_chirp',
    'minecraft:music_disc_far',
    'minecraft:music_disc_mall',
    'minecraft:music_disc_mellohi',
    'minecraft:music_disc_stal',
    'minecraft:music_disc_strad',
    'minecraft:music_disc_ward',
    'minecraft:music_disc_11',
    'minecraft:music_disc_wait',
    'minecraft:music_disc_otherside'
]
let moddedMusicDiscs = [
    'quark:music_disc_endermosh',
    'quark:music_disc_drips',
    'quark:music_disc_ocean',
    'quark:music_disc_rain',
    'quark:music_disc_wind',
    'quark:music_disc_fire',
    'quark:music_disc_clock',
    'quark:music_disc_crickets',
    'quark:music_disc_chatter',
]

ServerEvents.recipes((event) => {
    //event.remove({ mod: 'nameless_trinkets' })
    //event.remove({ mod: 'mcda', type: 'minecraft:crafting_shaped' })

    jeiRemove.forEach(element => {
        event.remove({ output: element })
        //global.jeiRuntime.recipeManager.hideRecipes
    });
    event.remove({ mod: 'scannable' })
    event.remove({ input: 'minecraft:barrier' })
    event.remove({ id: 'forbidden_arcanus:enchanted_golden_apple' })
    event.remove({ id: 'minecraft:netherite_upgrade_smithing_template' })
    let fBlocks = Ingredient.of('/factory_blocks:.*/').stacks
    fBlocks.forEach(element => {
        fBlocks.forEach(element2 => {
            event.stonecutting(element, element2)
        })
    })
    let musicDiscs = vanillaMusicDiscs.concat(moddedMusicDiscs)
    musicDiscs.forEach((disc1) => {
        musicDiscs.forEach((disc2) => {
            event.stonecutting(disc1, disc2)
        })
    })
})
