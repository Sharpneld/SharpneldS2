ServerEvents.recipes(event => {
    event.remove({ id: 'ae2wtlib:quantum_bridge_card' })
    event.remove({ output: 'ae2:charger', type: 'minecraft:crafting_shaped' })
    event.remove({ output: 'ae2:inscriber', type: 'minecraft:crafting_shaped' })
    event.remove({ id: 'ae2:charger/charged_certus_quartz_crystal' })
    event.remove({ id: 'ae2:transform/fluix_crystal' })
    event.remove({ id: 'ae2:transform/fluix_crystals' })
    event.remove({ id: 'ae2:inscriber/calculation_processor_press' })
    event.remove({ id: 'ae2:inscriber/engineering_processor_press' })
    event.remove({ id: 'ae2:inscriber/logic_processor_press' })
    event.remove({ id: 'ae2:inscriber/silicon_press' })

    event.remove({ id: 'ae2:inscriber/silicon_print' })
    event.remove({ id: 'ae2:inscriber/logic_processor_print' })
    event.remove({ id: 'ae2:inscriber/calculation_processor_print' })
    event.remove({ id: 'ae2:inscriber/engineering_processor_print' })
})
