MoreJSEvents.villagerTrades((event) => {
    event.removeModdedTrades();
    event.removeVanillaTrades(['iammusicplayer:dj'], [1, 5]);
    event.removeVanillaTrades(['ae2:fluix_researcher'], [1, 5]);
    event.removeVanillaTrades(['lightmanscurrency:banker'], [1, 5]);
});