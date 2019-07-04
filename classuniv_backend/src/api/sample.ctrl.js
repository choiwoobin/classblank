const Classy = require('../models/class');
const Art = require('../models/art');
const Bowl = require('../models/bowl');
const Daniel = require('../models/daniel');
const Design = require('../models/design');
const Esra = require('../models/esra');
const Excercise = require('../models/excercise');
const Jesus = require('../models/jesus');
const Kookje = require('../models/kookje');
const Onsil = require('../models/onsil');
const Samuel = require('../models/samuel');
const Science1 = require('../models/science1');
const Science2 = require('../models/science2');
const Science3 = require('../models/science3');
const Yohan = require('../models/yohan');


exports.insert = async(ctx) => {
    const {yoil,time,building,ho}= ctx.request.body;
    const class1 = new Classy({
        yoil,time,building,ho
    });

    try{
        await class1.save();
        ctx.body=class1;
    }catch(e){
        ctx.throw(e,500);
    }
};


exports.find = async(ctx)=>{
    const {yoil, time} = ctx.request.body;
    console.log(yoil,time);
    console.log(ctx.request.body);
    const go =await Classy.find({"time":{$in:[time]},"yoil":yoil},{"_id":false,"building":true,"ho":true});
    // const art =await Art.find({"time":{$in:[time]},"yoil":yoil},{"_id":false,"ho":true});
    // const bowl =await Bowl.find({"time":{$in:[time]},"yoil":yoil},{"_id":false,"ho":true});
    // const daniel =await Daniel.find({"time":{$in:[time]},"yoil":yoil},{"_id":false,"ho":true});
    // const design =await Design.find({"time":{$in:[time]},"yoil":yoil},{"_id":false,"ho":true});
    // const esra =await Esra.find({"time":{$in:[time]},"yoil":yoil},{"_id":false,"ho":true});
    // const excercise =await Excercise.find({"time":{$in:[time]},"yoil":yoil},{"_id":false,"ho":true});
    // const jesus =await Jesus.find({"time":{$in:[time]},"yoil":yoil},{"_id":false,"ho":true});
    // const kookje =await Kookje.find({"time":{$in:[time]},"yoil":yoil},{"_id":false,"ho":true});
    // const onsil =await Onsil.find({"time":{$in:[time]},"yoil":yoil},{"_id":false,"ho":true});
    // const samuel =await Samuel.find({"time":{$in:[time]},"yoil":yoil},{"_id":false,"ho":true});
    // const science1 =await Science1.find({"time":{$in:[time]},"yoil":yoil},{"_id":false,"ho":true});
    // const science2 =await Science2.find({"time":{$in:[time]},"yoil":yoil},{"_id":false,"ho":true});
    // const science3 =await Science3.find({"time":{$in:[time]},"yoil":yoil},{"_id":false,"ho":true});
    // const yohan =await Yohan.find({"time":{$in:[time]},"yoil":yoil},{"_id":false,"ho":true});
    
    console.log(go);
    try {
        ctx.body= go;
        // ctx.body=[art,bowl,daniel,design,esra,excercise,
        //     jesus,kookje,onsil,samuel,science1,science2,science3,yohan];
        console.log(ctx.body);    
    }catch(e){
        ctx.throw(e,500);
    }
    
}