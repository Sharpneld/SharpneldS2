//@ts--check

/**
 * Disables the offers when the player starts trading.
 * In the example we will use a stage to disable the offers.
 */
MoreJSEvents.playerStartTrading((event) => {
    // We don't have the stage, so no trades for us :(
    if (!event.player.stages.has("allow_trading")) {
        event.forEachOffers((o, i) => {
            o.disabled = true;
        });
    }
});

const tradeMessages = [
    "Hello, I am a villager!",
    "I have a trade for you!"
];
//Using kubejs send a message to the player when they right click a villager
ItemEvents.entityInteracted((event) => {
    const { player, player: { x, y, z } } = event
    if (event.target.type == "minecraft:villager" && event.getHand() == "MAIN_HAND") {
        if (player.stages.has('allow_trading')) {
            player.tell(Component.gray(tradeMessages[Math.floor(Math.random() * tradeMessages.length)]));
        }
        else {
            player.tell(Component.gray("I need a hero!"));
            //player.playSound("sharpneld:music.pipi")
            if (Math.floor(Math.random() * 5) == 2) {
                Utils.server.runCommandSilent(`playsound sharpneld:music.pipi player ${event.player.username} ${x} ${y} ${z} 100 1`)
            }
        }
    }
});
/**
 * 
 */
global.playerTradingStage = (event) => {
    if (!event.entity.stages.has('allow_trading')) {
        
        event.entity.server.schedule(300, (_) => {
            event.entity.give("minecraft:emerald")
            if (event.entity) {
                event.entity.stages.add('allow_trading')
                let messageTrading = Component.green('You have unlocked the ability to trade with villagers!')
                event.entity.tell(messageTrading)
            }
        })
    }
}