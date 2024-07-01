ServerEvents.recipes(event => {
    event.remove({ id: 'minecraft:flint_and_steel' })
    //Add default recipes for smithing upgrade templates
    event.shaped(
        Item.of('smithingupgradersplus:iron_smithing_template', 1),
        [
            ' D ', 
            'BAB', 
            'CCC'
        ],
        {
            A: 'minecraft:stone',
            B: 'minecraft:iron_block',
            C: 'minecraft:iron_ingot',
            D: 'minecraft:flint'
        }
    ).id('sharpneld:smithingupgradersplus/recipes/iron_smithing_template')

    event.shaped(
        Item.of('smithingupgradersplus:golden_smithing_template', 1),
        [
            ' D ', 
            'BAB', 
            'CCC'
        ],
        {
            A: 'minecraft:stone',
            B: 'minecraft:gold_block',
            C: 'minecraft:gold_ingot',
            D: 'minecraft:flint'
        }
    ).id('sharpneld:smithingupgradersplus/recipes/golden_smithing_template')

    event.shaped(
        Item.of('smithingupgradersplus:diamond_smithing_template', 1),
        [
            ' D ', 
            'BAB', 
            'CCC'
        ],
        {
            A: 'minecraft:stone',
            B: 'minecraft:diamond_block',
            C: 'minecraft:diamond',
            D: 'minecraft:flint'
        }
    ).id('sharpneld:smithingupgradersplus/recipes/diamond_smithing_template')
})