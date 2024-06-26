ServerEvents.recipes((event) => {
    event.shaped(
        Item.of('endrem:old_eye'),
        [
            'ABC',
            'DEF',
            'GHI'
        ],
        {
            A: 'dawnera:tyranosaurus_egg',
            B: 'alexscaves:ominous_catalyst',
            C: 'alexscaves:atlatitan_egg',
            D: 'dawnera:sabertooth_salmon_roe',
            E: 'minecraft:ender_eye',
            F: 'dawnera:alligator_gar_roe',
            G: 'alexscaves:tremorzilla_egg',
            H: 'alexscaves:immortal_embryo',
            I: 'alexscaves:tectonic_shard',

        }
    ).id('sharpneld:recipes/old_eye')
    event.shaped(
        Item.of('endrem:lost_eye'),
        [
            'ABC',
            'DEF',
            'GHI'
        ],
        {
            A: 'betterarcheology:torrent_totem',
            B: 'alexscaves:pure_darkness',
            C: 'betterarcheology:growth_totem',
            D: 'alexscaves:magic_conch',
            E: 'minecraft:ender_eye',
            F: '',
            G: '',
            H: 'betterarcheology:soul_totem',
            I: '',

        }
    ).id('sharpneld:recipes/lost_eye')
})