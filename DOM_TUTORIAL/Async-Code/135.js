// function returning promise

function ricePromise(){
    const bucket = ["coffee", "chips", "vegetables","salts","rice"];
    return new Promise((resolve, reject) => {
        if (bucket.includes("vegetables") && bucket.includes("rice") && bucket.includes("salt")) {
            resolve({ value: "friedRice" });
        } else {
            reject(new Error("Could not do it!!!"));//making error object
        }
    })
};

 ricePromise().then((rice)=>{
    console.log(rice);
 }).catch((error)=>{
    console.log(error);
 })
