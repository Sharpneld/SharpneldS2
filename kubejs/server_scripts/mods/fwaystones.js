ServerEvents.recipes((event) => {
    // Abyss Watcher
    event.remove({ output: 'fwaystones:abyss_watcher' });
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            "FEF"
        ],
        "key": {
            "E": {
                "item": "minecraft:ender_pearl"
            },
            "F": {
                "item": "gobber2:gobber2_ingot"
            }
        },
        "result": {
            "item": "fwaystones:abyss_watcher",
            "count": 1
        }
    });

    // Pocket Wormhole
    event.remove({ output: 'fwaystones:pocket_wormhole' });
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
            " A ",
            "PSP",
            " P "
        ],
        "key": {
            "P": {
                "item": "gobber2:dragon_star"
            },
            "A": {
                "item": "fwaystones:abyss_watcher"
            },
            "S": {
                "item": "gobber2:dragon_star"
            }
        },
        "result": {
            "item": "fwaystones:pocket_wormhole",
            "count": 1
        }
    });
})