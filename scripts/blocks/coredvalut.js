const coredvalut = extendContent(CoreBlock, "core-valut", {
    canReplace(other){
        //YOU CAN REPLACE STORAGEBLOCKS AHYES
        return this.super$canReplace(other) || (other instanceof StorageBlock && coredvalut.size >= other.size);
    },
    canPlaceOn(tile, team){
        if(tile == null) return false;
        var core = team.core();
        //must have all requirements
        if(core == null || (!Vars.state.rules.infiniteResources && !core.items.has(coredvalut.requirements))) return false;
        return tile.block() instanceof CoreBlock && coredvalut.size >= tile.block().size;
    }
});
