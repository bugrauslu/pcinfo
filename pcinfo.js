const os = require("os");
const fs = require("fs");

let pcinfo=function() {

    let freeram =bytetogb(os.freemem());
    //kullanılmayan ram 
    let totalram=bytetogb(os.totalmem());
    //toplam ram 
    let usedram=(totalram-freeram).toFixed(2);
    //kullanılan ram 
    let cpusayisi=os.cpus().length;
    //cpusayisi

    fs.writeFile('pc_info.txt',pcinfogoster(), (err)=>{
        if(err) console.log("yazdırma sırasında hata oluştu");
        });
 
        function bytetogb(toplambyte) {
            return (toplambyte/1024/1024/1024).toFixed(2);
        }
        //byte to gb convert
        
        function pcinfogoster() {
            return `total ram :${totalram} , kullanılan ram: ${usedram} ,free ram ${freeram}, cpu sayısı : ${cpusayisi}`;
        }     
}

exports.sendinfo=pcinfo;
