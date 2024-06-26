const hasPermission = (user, permission) => {
    return user.getCachedData().getPermissionData().checkPermission(permission).asBoolean();
}
//const LuckPermsProvider = Java.loadClass('net.luckperms.api.LuckPermsProvider')


PlayerEvents.chat((event) => {
    let { player, message, server } = event;
    server.tell([Text.yellow(player.displayName), " ", Text.gray("»"), " ", Text.white(message)]);
    event.cancel();
    /*
    let userManager = LuckPermsProvider.get().getUserManager();

    let userFuture = userManager.loadUser(event.player.uuid);

    userFuture.thenAcceptAsync((user) => {
        if(hasPermission(user, 'perm.example')){
        //do smth
        }
    })
    */
});