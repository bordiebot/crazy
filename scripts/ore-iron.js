const ironOre = extendContent(OreBlock, {});

const ironItem = extendContent(Item, "iron", {});
const iron = Vars.content.getByName(ContentType.item, "testmod-iron");

//ironOre.localizedName = ironItem.localizedName;
ironOre.itemDrop = iron;
ironOre.variants = 3;
ironOre.mapColor.set(ironItem.color);

print("ironOre" + " : " + ironOre);
print("ironItem" + " : " + ironItem);
print("iron" + " : " + iron);
print("ironOre.localizedName" + " : " + ironOre.localizedName);
print("ironOre.itemDrop" + " : " + ironOre.itemDrop);
print("ironOre.variants" + " : " + ironOre.variants);
print("ironOre.mapColor" + " : " + ironOre.mapColor);
