const CuriosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi')

PlayerEvents.inventoryChanged((event) => {
    setCurioNbt(event)
});
const setCurioNbt = event => {
    const { item, player, server, slot } = event;
    if (item && item.hasTag("sharpneld:breakable") && !item?.nbt?.curio_durability) {
        if (item.nbt == null) item.nbt = {}
        item.nbt.merge({ curio_durability: 3, display: { Lore: [`[{"text": "Durability: 3"}]`] } });
        /*if (item.hasNBT()) {
        }
        else {
            item.setNbt({ curio_durability: 3, display: { Lore: [`[{"text": "Durability: 3"}]`] } });
        }*/
    }
}

EntityEvents.death('minecraft:player', event => {
    manageDeath(event)
})
const manageDeath = event => {
    const api = new CuriosApi();
    const curios = api.getCuriosHelper().getEquippedCurios(event.player).resolve().get();
    for (let slot = 0; slot < curios.getSlots(); slot++) {
        var itemstack = Item.of(curios.getStackInSlot(slot))
        if (itemstack.hasTag("sharpneld:breakable") && itemstack?.nbt?.curio_durability) {
            console.log('found sharpneld:breakable')
            itemstack.nbt.curio_durability -= 1
            if (itemstack.nbt.curio_durability == 0) {
                console.log('deleted: ' + itemstack.id)
                event.player.tell('RIP curios')
                curios.setStackInSlot(slot, "minecraft:air")
            }
            else {
                const durab = itemstack.nbt.curio_durability
                itemstack.setNbt({ curio_durability: durab, display: { Lore: [`[{"text": "Durability: ${durab}"}]`] } });
            }
        }
    }
}
//equipped.forEach(e => {event.player.tell(e.id)});