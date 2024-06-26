
const $MobEffects = Java.loadClass('net.minecraft.world.effect.MobEffects')

ForgeEvents.onEvent('net.minecraftforge.event.entity.living.MobEffectEvent$Added', event => {
    const { entity, effectInstance } = event
    if (entity.isPlayer()) {
        if (effectInstance.effect == $MobEffects.HERO_OF_THE_VILLAGE) {
            if (global.playerTradingStage) {
                global.playerTradingStage(event)
            }
        }
    }
})