// priority: 0

var messages = [
    Component.green("Puedes conseguir buen loot en la dungeon dimension, pero no es tan fácil como parece."),
    Component.aqua("Recuerda ir preparado a la dungeon dimension. No se pueden usar comandos dentro."),
    Component.gold("Para ir a la dimensión de exploración necesitarán un waystone. Se venden en el spawn."),
    Component.aqua("Los waystones solo se pueden comprar en el spawn."),
    Component.gold("Completa las misiones para obtener distintos trofeos."),
    Component.gold("Puede conseguir skin para armas y armaduras en el spawn. Sugiere nuevos diseños en discord."),
    Component.gold("Cualquier ayuda para completar el libro de misiones será apreciada."),
    Component.gold("Échale un vistazo al libro de misiones en tu inventario si necesitas ayuda con algún mod."),
    Component.gold("Puedes comprar más bloques de protección para tu base con monedas de esmeralda. Usa el comando /flan buyBlocks <cantidad>."),
    Component.gold("Con el comando /flan menu puedes configurar muchas opciones en tu base protegida"),
    Component.gold("Solo puedes cambiar tu destiny una vez gratis. Con el comando /mca destiny"),
    [Component.gold("Puedes obtener un "), Component.red('Bottle of Sanity'), Component.gold(' en el libro de misiones para reducir la dificultad de los mobs')],
    [Component.red('Importante: '), Component.green("Si tienes multibloques del immersive engineering verifica que no se encuentre entre dos chunks para evitar problemas.")],
    [Component.red('Importante: '), Component.red("Solo se pueden abrir chance cubes en la dimensión de exploración.")]
]

PlayerEvents.loggedIn(event => {
    event.server.schedule(300, () => {
        event.player.potionEffects.add('minecraft:resistance', 300, 5, true, true)
        if (!event.player.stages.has('first_login') && !global.debug) {
            event.server.schedule(300, (_) => {
                if (event.player) {
                    event.player.stages.add('first_login')
                }
            })
            loginNew(event)
        }
        else {
            loginAgain(event)
        }
        event.player.inventory.clear("doom:daisy");
        event.player.inventory.clear("doom:soulcube");
        event.player.inventory.clear("soulsweapons:withered_wabbajack");
    })

})

function loginNew(event) {
    //event.player.give(Item.of('consecration:fire_stick', '{Damage:0}'))
    event.player.give('5x minecraft:cooked_beef')
    event.player.give('2x farmersdelight:hamburger')
    event.player.give('10x majruszsdifficulty:bandage')
    //event.player.give(Item.of('epicfight:skillbook', '{skill:"epicfight:roll"}'))
    //event.player.clear('celestial_artifacts:catastrophe_scroll')
    //event.player.clear('celestial_artifacts:heirloom_necklace')
    //event.player.give('1x growthcraft_cellar:potion_wine')
    //event.player.inventory.clear(Item.of('patchouli:guide_book', '{"patchouli:book":"hexcasting:thehexbook"}'));
}

function loginAgain(event) {
    let name = event.entity.getGameProfile().getName();
    let welcomeAgain = Component.green("¡Bienvenido nuevamente " + name + "!. Esperamos que disfrutes tu estancia.")
    event.player.tell(welcomeAgain)
    //event.player.tell(messages[Math.floor(Math.random() * messages.length)])
}