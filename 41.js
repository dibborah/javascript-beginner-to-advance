const band = {
    bandName: "led zeppelin",
    famousSong: "stairway to heaven",
    year:1997,
    anotherSong:"Kashmir",
}

// const bandName = band.bandName;
// const famousSong = band.famousSong;

//By default jis naam ke key likhe hue hote hain usi naam ke variable likhe hue hote hain
const { bandName, famousSong, ...rest } = band;
// const { bandName:var1, famousSong:var2 } = band;// if after the key we give colon(:) and write whatever that becomes the varible to that value of the key
// console.log(var1, var2);// now this variables var 1 and var 2 will only work not the default key names



console.log(bandName, famousSong);//Since in the above line we gave colon and declared the names as var1 and var2 so bandName and famousSong if wrote on the console will return undefined
console.log(rest);




