let music_list = {
    pipi: 5   // duration in seconds
};

// put sound to .minecraft\kubejs\assets\sharpneld\sounds (sound must be .ogg mono otherwise it will not be 3-dimensional)
// also you need to add sound to sounds.json (.minecraft\kubejs\assets\sharpneld) 
StartupEvents.registry('sound_event', e => {
    Object.keys(music_list).forEach(key => {
        e.create(`sharpneld:music.${key}`)
    })
})

StartupEvents.registry('item', e => {
    Object.keys(music_list).forEach((key) => {
        let value = music_list[key]
        e.create(`sharpneld:music_disc_${key}`, "music_disc")
            .song(`sharpneld:music.${key}`, value)
            .displayName("Music Disc")
            .texture(`sharpneld:item/music_disc_${key}`) // put textures file to .minecraft\kubejs\assets\sharpneld\textures\item
            .tag("music_discs") // 1.20+ music discs require special tag to enable jukebox functionality (if you want music discs to be obtainable from creepers then use "creeper_drop_music_discs" tag insted)
            .translationKey(`item.sharpneld.music_disc_${key}`) //To set disc description add lang file (en_us.json, ru_ru.json, etc.) to the .minecraft\kubejs\assets\sharpneld\lang and add entry for every translation key
    })
})

/*
let music_list2 = {
    pipi: 5
  };

  // put sound to .minecraft\kubejs\assets\kubejs\sounds (sound must be .ogg mono otherwise it will not be 3-dimensional)
  // also you need to add sound to sounds.json (.minecraft\kubejs\assets\kubejs) 
  StartupEvents.registry('sound_event', e => {
    Object.keys(music_list2).forEach(key => {
        e.create(`music.${key}`) 
    })
  })
  

  StartupEvents.registry('item', e => {
    Object.keys(music_list2).forEach((key) => {
      let value = music_list2[key]  
        e.create(`music_disc_${key}`, "music_disc")
            .song(`kubejs:music.${key}`, value)
            .displayName("Music Disc")
            .texture(`kubejs:item/music_disc_${key}`) // put textures file to .minecraft\kubejs\assets\kubejs\textures\item
            .tag("music_discs") // 1.20+ music discs require special tag to enable jukebox functionality (if you want music discs to be obtainable from creepers then use "creeper_drop_music_discs" tag insted)
            .translationKey(`item.kubejs.music_disc_${key}`) //To set disc description add lang file (en_us.json, ru_ru.json, etc.) to the .minecraft\kubejs\assets\kubejs\lang and add entry for every translation key
          })
  })*/