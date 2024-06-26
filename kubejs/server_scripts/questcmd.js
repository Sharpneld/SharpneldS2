//priority: -20
//FTB QUESTS
const Chapter = Java.loadClass('dev.ftb.mods.ftbquests.quest.Chapter')
const Quest = Java.loadClass('dev.ftb.mods.ftbquests.quest.Quest')
const ServerQuestFile = Java.loadClass('dev.ftb.mods.ftbquests.quest.ServerQuestFile')
const ItemTask = Java.loadClass('dev.ftb.mods.ftbquests.quest.task.ItemTask')
const CreateObjectResponseMessage = Java.loadClass('dev.ftb.mods.ftbquests.net.CreateObjectResponseMessage')
const DisplayInfoFTBL = Java.loadClass('dev.ftb.mods.ftblibrary.core.DisplayInfoFTBL')
//BIOMES

const $Registry = Java.loadClass("net.minecraft.core.registries.Registries");

//SNBTIO

const $FTBSNBTIO = Java.loadClass("dev.ftb.mods.ftblibrary.snbt.SNBT")
const SNBTCompoundTag = Java.loadClass("dev.ftb.mods.ftblibrary.snbt.SNBTCompoundTag")
const Tag = Java.loadClass('net.minecraft.nbt.Tag')
const ListTag = Java.loadClass('net.minecraft.nbt.ListTag')
const StringTag = Java.loadClass('net.minecraft.nbt.StringTag')

//CODE

const columns = 12; // Number of columns
const incrementX = 1; // Increment value for x
const incrementY = 1; // Increment value for y

let x = 0;
let y = 0;

const ignoreKeys = ['glass', 'sandstone', 'vine', 'grass', 'bricks', 'stairs', 'slab', 'mushroom', 'anchor', 'stool','chair','tile','pile','ladder','boat','taburet','crafting_table','leaves','moss','stripped','barrel','lantern','door','button','polished','sign','planks','fern','composter','bars','gate','pedestal','pillar','path','cooked','fence','bark','petal_block','wall','chain','flower_pot','bookshelf','debug','banner','nugget','stair','small_dust','_plate','charnia','paint_ball','facade','shader','potion_bucket']

const sortOrder = ['smithing_template', 'furnace', 'log', 'shard', 'brick', 'block', 'seed', '_ore', 'ingot', 'dust', 'sapling', 'disc', 'spawn_egg','upgrade','cable','cell','bucket','storage','card']

const getNameOfID = (string) => {
    if (string.includes(":")) {
        string = string.split(":")[1]
    }
    let arr = string.split("_");
    arr.forEach((word, index) => {
        arr[index] = word.substring(0, 1).toUpperCase() + word.substring(1);
    })
    return arr.join(" ");
}

const makeChapter = (mod, source) => {
    x = 0;
    y = 0;
    console.log('Generating chapter for ' + mod)
    const newId = ServerQuestFile.INSTANCE.newID();
    const date = new Date();
    //add date to id to make it unique
    const fileName = mod.toString() + '_' + date.getTime()
    const chapter = new Chapter(newId, ServerQuestFile.INSTANCE, ServerQuestFile.INSTANCE.getDefaultChapterGroup(), fileName)
    chapter.onCreated()
    chapter.setRawTitle(getNameOfID(mod))
    chapter.setDefaultQuestShape("pentagon")
    new CreateObjectResponseMessage(chapter, null).sendToAll(source.getServer());
    let modItems = []
    let spawnEggs = []
    let observationBlocks = []
    
    Item.list.forEach(i => {
        let modItem = i.item.id.split(':')[0] //should change to namespace
        if (modItem == mod && !ignoreKeys.some(k => i.id.includes(k))) {
            console.log('Added Item: ' + i.id)
            modItems.push(i.id)
        }
    })
    modItems.sort();

    sortOrder.forEach(s => {
        let sortItems = modItems.filter(i => i.includes(s))
        modItems = modItems.filter(i => !i.includes(s))
        modItems = modItems.concat(sortItems)
    })
    modItems.forEach(id => {
        if (id.includes("spawn_egg")) {
            spawnEggs.push(id)
        } else if(id.includes("budding") || (id.includes("pamhc2trees") && !id.includes("sapling") && !id.includes("item"))) {
            observationBlocks.push(id)
        } else {
            makeItemQuest(x, y, id, chapter, source)
            x += incrementX;
            if (x >= columns) {
                x = 0;
                y += incrementY;
            }
        }
    })
    ServerQuestFile.INSTANCE.markDirty()
    ServerQuestFile.INSTANCE.saveNow();

    const chapterNBT = $FTBSNBTIO.read('config/ftbquests/quests/chapters/' + fileName + '.snbt')

    const questList = chapterNBT.getList("quests", Tag.TAG_COMPOUND)
    
    if (x != 0) {
        x = 0;
    }
    if (observationBlocks.length > 0) y += incrementY;

    observationBlocks.forEach(id => {
        let questNBTR = makeObserveBlockQuest(x, y, id)
        questList.add(questNBTR)
        console.log('Added Observation BlockQuest: ' + id)
        x += incrementX;
        if (x >= columns) {
            x = 0;
            y += incrementY;
        }
    })

    if (x != 0) {
        x = 0;
    }
    if (spawnEggs.length > 0) y += incrementY;

    spawnEggs.forEach(id => {
        let questNBTR = makeObserveMobQuest(x, y, id)
        questList.add(questNBTR)
        console.log('Added Observation Quest: ' + id)
        x += incrementX;
        if (x >= columns) {
            x = 0;
            y += incrementY;
        }
    })

    const allBiomes = Utils.server.registryAccess().registryOrThrow($Registry.BIOME).keySet()
    
    if (x != 0) {
        x = 0;
    }
    if (allBiomes.some(b => b.toString().includes(mod))) y += incrementY;

    allBiomes.forEach(biome => {
        if(biome.toString().includes(mod)) {
            let questNBTR = makeBiomeVisitQuest(x, y, biome.toString())
            questList.add(questNBTR)
            console.log('Added Biome Quest: ' + biome.toString())
            x += incrementX;
            if (x >= columns) {
                x = 0;
                y += incrementY;
            }
        }
    })

    const allStructures = Utils.server.registryAccess().registryOrThrow($Registry.STRUCTURE).keySet()

    if (x != 0) {
        x = 0;
    }
    if (allStructures.some(s => s.toString().includes(mod))) y += incrementY;

    allStructures.forEach(structure => {
        if(structure.toString().includes(mod)) {
            let questNBTR = makeFindStructureQuest(x, y, structure.toString())
            questList.add(questNBTR)
            console.log('Added Structure Quest: ' + structure.toString())
            x += incrementX;
            if (x >= columns) {
                x = 0;
                y += incrementY;
            }
        }
    })

    let modAdvancements = getAdvancementTreeFromMod(mod)

    modAdvancements.forEach(a => {
        let questNBTR = makeAdvancementQuestTree(a)        
        questList.add(questNBTR)
        console.log('Added Advancement Quest: ' + a.id)
        //console.log(JSON.stringify(a, null, 2))
    })
    

    $FTBSNBTIO.write('config/ftbquests/quests/chapters/' + fileName + '.snbt', chapterNBT)

    //ServerQuestFile.INSTANCE.load();
    source.server.schedule(2000, (_) => {
        Utils.server.runCommand('ftbquests reload')
        source.getPlayer().notify('Chapter generated! Reopen your quest book to see changes.')
    })
}

function AdvancementRows(modAdvancements) {
    modAdvancements.forEach(a => {
        if (a.mod == mod) {
            let questNBTR = makeAdvancementQuest(x, y, a)        
            questList.add(questNBTR)
            console.log('Added Advancement Quest: ' + a.name)
            x += incrementX;
            if (x >= columns) {
                x = 0;
                y += incrementY;
            }
        }
    })
}

const makeItemQuest = (x, y, itemId, chapter, source) => {
    const quest = new Quest(chapter.file.newID(), chapter)
    quest.onCreated()
    quest.setX(x)
    quest.setY(y)
    new CreateObjectResponseMessage(quest, null).sendToAll(source.getServer());
    const task = new ItemTask(chapter.file.newID(), quest)
    task.onCreated()
    task.setStackAndCount(Item.of(itemId), 1)
    new CreateObjectResponseMessage(task, null).sendToAll(source.getServer());
}

const makeAdvancementQuest = (x, y, advancement) => {
    const questNBT = new SNBTCompoundTag()
    questNBT.putString("id", '')
    questNBT.putString("shape", "square")
    const tasks = new ListTag()
    const advancementNBT = new SNBTCompoundTag()
    advancementNBT.putString("advancement", advancement.id.toString())
    advancementNBT.putString("criterion", '')
    advancementNBT.putString("icon", advancement.icon)
    advancementNBT.putString("id", '')
    //advancement.putString("title", 'Advancement: &6Advancement Name')
    advancementNBT.putString("type", 'advancement')
    tasks.add(advancementNBT)
    questNBT.put("tasks", tasks)
    questNBT.putDouble("x", x)
    questNBT.putDouble("y", y)
    return questNBT
}

const makeAdvancementQuestTree = (advancement) => {
    const questNBT = new SNBTCompoundTag()
    if(advancement.parentUUID) {
        const dependency = new ListTag()
        dependency.add(StringTag.valueOf(advancement.parentUUID))
        questNBT.put("dependencies", dependency)
    }
    questNBT.putString("id", advancement.uuid)
    questNBT.putString("subtitle", advancement.description)
    questNBT.putString("shape", "square")
    const tasks = new ListTag()
    const advancementNBT = new SNBTCompoundTag()
    advancementNBT.putString("advancement", advancement.id.toString())
    advancementNBT.putString("criterion", '')
    //advancementNBT.putString("icon", advancement.icon)
    advancementNBT.putString("id", generateRandomId())
    //advancement.putString("title", 'Advancement: &6Advancement Name')
    advancementNBT.putString("type", 'advancement')
    tasks.add(advancementNBT)
    questNBT.put("tasks", tasks)
    questNBT.putDouble("x", advancement.x + 13)
    questNBT.putDouble("y", advancement.y)
    return questNBT
}
function generateRandomId() {
    let id = ServerQuestFile.INSTANCE.newID().toString()
    id = '17' + id.substring(0, Math.min(id.length, 14))
    return id;
}

const getAdvancementTreeFromMod = (mod) => {
    const allAdvancements = []

    Utils.server.getAdvancements().getAllAdvancements().forEach(advancement => {
        if(advancement.getDisplay() instanceof DisplayInfoFTBL) {
            let newID = generateRandomId()
            let id = advancement.id
            let mod = id.namespace
            let display = advancement.getDisplay()
            let title = display.getTitle().getString()
            let icon = display.getIcon().id
            let description = display.getDescription().getString()
            //Espace & in description with an \ before it
            description = description.replace(/&/g, '\\&')

            let x = display.getX()
            let y = display.getY()
            //console.log('id: ' + id + ' mod: ' + mod + ' title: ' + title + ' icon: ' + icon + ' description: ' + description + ' x: ' + x + ' y: ' + y)
            let parent = null
            if(advancement.parent)
                parent = advancement.parent.id 
            let advancementObj = {
                uuid: newID,
                mod: mod,
                id: advancement.id.toString(),
                parentId: parent,
                title: title,
                icon: icon,
                description: description,
                x: x,
                y: y
            }
            allAdvancements.push(advancementObj)
        }
    })
    //filter by mod
    let modAdvancements = allAdvancements.filter(advancement => advancement.mod === mod)

    let transformedAdvancements = modAdvancements.map(advancement => {
        // Find the parent advancement object by parentId
        let parentAdvancement = findParentAdvancement(modAdvancements, advancement.parentId);
        return {
            uuid: advancement.uuid,
            mod: advancement.mod,
            id: advancement.id,
            parentUUID: parentAdvancement ? parentAdvancement.uuid : null, // Set parentUUID to null if parent is not found
            title: advancement.title,
            icon: advancement.icon,
            description: advancement.description,
            x: advancement.x,
            y: advancement.y
        };
    });
    //Fix overlapping if there are more than one root 
    if (transformedAdvancements.filter(advancement => advancement.parentUUID === null).length > 1) {
        console.log('Fixing overlapping advancements...');
        let newTree = translateTrees(transformedAdvancements.slice());
        return newTree;

    }
    return transformedAdvancements
}
function translateTrees(advancementObj) {
    let newAdvancementObj = [];
    const rootNodes = advancementObj.filter(node => node.parentUUID === null);
    
    const processedNodes = {}
    let xOffset = 0;

    rootNodes.forEach(rootNode => {
        updateNodePosition(advancementObj, rootNode, xOffset)
        xOffset += 10; // Move each tree 10 units apart
    });
    function updateNodePosition(advancementObj, node, xOffset) {
        node.x += xOffset;
        newAdvancementObj.push(node);
        processedNodes[node.uuid] = true;
        // Find child nodes and update their position recursively
        advancementObj.forEach(childNode => {
            if (childNode.parentUUID === node.uuid && !processedNodes[childNode.uuid]) {
                updateNodePosition(advancementObj, childNode, xOffset);
            }
        });
    }

    return newAdvancementObj;
}

function findParentAdvancement(modAdvancements, parentId) {
    return modAdvancements.find(advancement => advancement.id === parentId);
}

const makeObserveMobQuest = (x, y, mobId) => {
    const mobEntityId = mobId.replace('_spawn_egg', '').replace('spawn_egg_', '')
    const mobName = getNameOfID(mobEntityId)
    const title = 'Observe: &6' + mobName
    const questNBT = new SNBTCompoundTag()
    questNBT.putString("id", '')
    questNBT.putString("shape", "circle")
    const tasks = new ListTag()
    const observationNBT = new SNBTCompoundTag()
    observationNBT.putString("icon", mobId)
    observationNBT.putString("id", '')
    observationNBT.putString("title", title)
    observationNBT.putInt("observe_type", 5)
    observationNBT.putInt("timer", 0)
    observationNBT.putString("to_observe", mobEntityId)
    observationNBT.putString("type", 'observation')
    tasks.add(observationNBT)
    questNBT.put("tasks", tasks)
    questNBT.putDouble("x", x)
    questNBT.putDouble("y", y)
    return questNBT
}

const makeObserveBlockQuest = (x, y, blockId) => {
    const blockName = blockId.split(':')[1].toString()
    const title = 'Observe: &6' + getNameOfID(blockName)
    const questNBT = new SNBTCompoundTag()
    questNBT.putString("id", '')
    questNBT.putString("shape", "rsquare")
    const tasks = new ListTag()
    const observationNBT = new SNBTCompoundTag()
    observationNBT.putString("icon", blockId)
    observationNBT.putString("id", '')
    observationNBT.putInt("observe_type", 0)
    observationNBT.putInt("timer", 0)
    observationNBT.putString("title", title)
    observationNBT.putString("to_observe", blockId)
    observationNBT.putString("type", 'observation')
    tasks.add(observationNBT)
    questNBT.put("tasks", tasks)
    questNBT.putDouble("x", x)
    questNBT.putDouble("y", y)
    return questNBT
}

const makeBiomeVisitQuest = (x, y, biomeId) => {
    const biomeName = biomeId.split(':')[1].toString()
    const title = 'Visit biome: &6' + getNameOfID(biomeName)
    const questNBT = new SNBTCompoundTag()
    questNBT.putString("id", '')
    questNBT.putString("shape", "circle")
    const tasks = new ListTag()
    const biomeVisitNBT = new SNBTCompoundTag()
    biomeVisitNBT.putString("biome", biomeId)
    biomeVisitNBT.putString("id", '')
    biomeVisitNBT.putString("title", title)
    biomeVisitNBT.putString("type", 'biome')
    tasks.add(biomeVisitNBT)
    questNBT.put("tasks", tasks)
    questNBT.putDouble("x", x)
    questNBT.putDouble("y", y)
    return questNBT
}

const makeFindStructureQuest = (x, y, structureId) => {
    const structureName = structureId.split(':')[1].toString()
    const title = 'Find structure: &6' + getNameOfID(structureName)
    const questNBT = new SNBTCompoundTag()
    questNBT.putString("id", '')
    questNBT.putString("shape", "circle")
    const tasks = new ListTag()
    const structureNBT = new SNBTCompoundTag()
    structureNBT.putString("id", '')
    structureNBT.putString("structure", structureId)
    structureNBT.putString("title", title)
    structureNBT.putString("type", 'structure')
    tasks.add(structureNBT)
    questNBT.put("tasks", tasks)
    questNBT.putDouble("x", x)
    questNBT.putDouble("y", y)
    return questNBT
}


ServerEvents.commandRegistry(event => {
    const modsInstalled = Platform.getMods().keySet().toArray()
    const { commands: Commands, arguments: Arguments, builtinSuggestions: Suggestions } = event
    for (let modIndex in modsInstalled){
        let mod = modsInstalled[modIndex]
        event.register(
            Commands.literal('ftbquests')
                .then(
                    Commands.literal('generate_chapter_from_mod')
                        .then(
                            Commands.literal(mod).executes(ctx => {
                                    makeChapter(mod, ctx.source)
                                    return 1
                                })
                        )
                )
        )
    }
})