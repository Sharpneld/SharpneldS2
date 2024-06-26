ServerEvents.recipes((event) => {
    event.remove({ output: "gobber2:dragon_star" })
    event.custom(
        {
            "type": "modern_industrialization:assembler",
            "id": "kjs:dragonstar",
            "eu": 16,
            "duration": 400,
            "item_inputs": [
                {
                    "item": "gobber2:gobber2_ingot_end",
                    "amount": 5
                },
                {
                    "item": "minecraft:dragon_breath",
                    "amount": 4
                },
                {
                    "item": "minecraft:dragon_head",
                    "amount": 1
                }
            ],

            "fluid_inputs": {
                "fluid": "minecraft:water",
                "amount": 7500
            },
            "item_outputs": [
                {
                    "item": "gobber2:dragon_star",
                    "amount": 1
                }
            ]
        });
    
})