
StartupEvents.registry('item', event => {
    event.create('sharpneld:ultimate_ingot').displayName('Ultimate Ingot').maxStackSize(64).burnTime(8000).fireResistant(true)
})
/*
const $RestrictionManager = Java.loadClass('net.darkhax.itemstages.RestrictionManager')
const $ZenItemStages = Java.loadClass('net.darkhax.itemstages.crt.ZenItemStages')
const $Restriction = Java.loadClass('net.darkhax.itemstages.Restriction')
*/
//currently startup
// this event is to make sure we dont do it too early. The reason it is in startup is so it happens on both sides. you could probably do this in client and server too, instead of startup, if you want (item stages does not sync with the client, so to have everything work you need to have stuff staged on both sides)
/*StartupEvents.postInit(event => {
    const stageItem = (stages, item) => {
        let restriction = new $Restriction(stages)
        $RestrictionManager.INSTANCE.addRestriction(restriction)
        restriction.restrict(item)
        restriction.setHideInJEI(false)
    }

    Ingredient.of("@minecraft").stacks.forEach(stack => {
        //stageItem("ex_five", stack.id)
        stageItem("ex_five",Ingredient.of(stack.id))
        console.log('restrict: ', stack.id)
    });
    //stageItem('stageTwo', Item.of('tconstruct:hammer_head', '{Material:"tconstruct:wood"}').getVanillaPredicate())
    //const mcRestriction = $ZenItemStages.createModRestriction("minecraft", "ex_five");
})*/