
EntityEvents.death("minecraft:player", event => {
    const { player } = event
    let entities = event.level.getEntitiesWithin(AABB.of(player.x - 30, player.y - 30, player.z - 30, player.x + 30, player.y + 30, player.z + 30))
    entities.forEach(entity => {
        if (entity != undefined && entity != null && entity.isLiving() && entity.type != 'minecraft:player') {
            entity.heal(entity.maxHealth * 0.7)
            console.log('healed:' + entity.type)
        }
    })
})
