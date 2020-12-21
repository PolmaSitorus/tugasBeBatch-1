/*///////////////////////////////////////////////////
  IDE :
  sewaktu saya pergi ke salah satu bank untk satu urusan
  saya lihat salah seorang petugas teller sedang kesulitan melayani seorang turis 
  untuk mengatakan jumlah uang dalam bahasa inggris

  ALGO
  user menginput suatu bilangan
  jika bilangan satuan maka sistem akan mencari di satuan
  jika bilangan puluhan maka sistem akan mencari di puluhan
  jika bilangan ratusan maka sistem akan mencari di ratusan
  jika bilangan jutaan maka sistem akan mencari di ratusan
  dan sistem akan mengembalikan dalam bentuk kalimat rupiah dalam bahasa inggris


  RULES
  angka terkecil yg bisa di input adalah 1
  angka terbesar yg bisa di input adalah 999999999

  YANG DIPELAJARI
  - variabel
  - array
  - operator aritmatika
  - operator logika
  - operator pembanding
  - percabangan

*/////////////////////////////////////////////////////

//  var angka = "10";
//  var hsl = angka.split("",angka.length);
//  console.log(hsl);

console.log(RupiahInEng(1))
console.log(RupiahInEng(10))
console.log(RupiahInEng(100))
console.log(RupiahInEng(1000))
console.log(RupiahInEng(1250000))



function RupiahInEng(bilangan) {
    //bilangan = string(bilangan)
    var terbilang = ""

    /* pembatasan panjang bilangan */
    if (bilangan > 100000000) {
      terbilang = "Beyond the limits"
      return terbilang
      } else if(bilangan < 10){  //cari satuan
        terbilang=cariSatuan(bilangan)
      }else if(bilangan >= 10 && bilangan < 100){ //cari puluhan
        terbilang=cariPuluhan(bilangan)
      }else if(bilangan >= 100 && bilangan < 1000){ //cari ratusan
        terbilang=cariRatusan(bilangan)
      }else if(bilangan >= 1000 && bilangan < 1000000){ //cari ribuan
        terbilang=cariRibuan(bilangan)
      }else if(bilangan >= 1000000 && bilangan < 100000000){ //cari jutaan
        terbilang=cariJutaan(bilangan)
    }   
    return terbilang+' rupiah'
 }

/*mencari satuan*/
function cariSatuan(bil){
    bil = String(bil)
    var pjgBil = bil.length
    var arrAngka = bil.split('',pjgBil)
    var kataBil1    = new Array('zero','one','two','three','four','five','six','seven','eigth','nine')
    var satuan = kataBil1[bil]
    
    return satuan
}

/*mencari puluhan*/
function cariPuluhan(bil){
  var puluhan = ''
  var hslbagi = Math.floor(bil / 10);
  var sisabagi = bil % 10;


  // console.log('bilangan '+bil)
  // console.log('hasil bagi '+hslbagi)
  // console.log('sisa bagi '+sisabagi)

  if (hslbagi == 1) {
    switch(sisabagi) {
      case 0: 
        puluhan= 'ten'; break;
      case 1: 
        puluhan= 'eleven'; break;
      case 2: 
        puluhan= 'twelve'; break;
      case 3: 
        puluhan= 'thirteen'; break;
      case 5: 
        puluhan= 'fifteen'; break;
      case 8: 
        puluhan= 'eighteen'; break;
      default:
        puluhan= cariSatuan(sisabagi) + 'teen'
        break
    }

  } else if (hslbagi == 2){
    puluhan = 'twenty'
    switch(sisabagi){
      case 0:
        puluhan = 'twenty'; break;
      default:
      puluhan = puluhan+cariSatuan(sisabagi); break;
    }
    

  } else if (hslbagi == 3){
    puluhan = 'thirty'
    switch(sisabagi){
      case 0:
        puluhan = 'thirty'; break;
      default:
      puluhan = puluhan+cariSatuan(sisabagi); break;
    }
  } else if (hslbagi == 4){
    puluhan = 'fourty'
    switch(sisabagi){
      case 0:
        puluhan = 'thirty'; break;
      default:
      puluhan = puluhan+cariSatuan(sisabagi); break;
    }
  } else if (hslbagi == 5){
    puluhan = 'fifty'
    switch(sisabagi){
      case 0:
        puluhan = 'fifty'; break;
      default:
      puluhan = puluhan+cariSatuan(sisabagi); break;
    }    
  } else if (hslbagi == 6){
    puluhan = 'sixty'
    switch(sisabagi){
      case 0:
        puluhan = 'sixty'; break;
      default:
      puluhan = puluhan+cariSatuan(sisabagi); break;
    }    
  } else if (hslbagi == 7){
    puluhan = 'seventy'
    switch(sisabagi){
      case 0:
        puluhan = 'seventy'; break;
      default:
      puluhan = puluhan+cariSatuan(sisabagi); break;
    }    
  } else if (hslbagi == 8){
    puluhan = 'eighty'
    switch(sisabagi){
      case 0:
        puluhan = 'eighty'; break;
      default:
      puluhan = puluhan+cariSatuan(sisabagi); break;
    }
  } else{
    puluhan = 'ninety'
    if(sisabagi != 0){
      puluhan = puluhan+cariSatuan(sisabagi);
    }
  } 
  return puluhan
}

/*mencari ratusan */
function cariRatusan(bil){
  var ratusan = ''
  var hslbagi = Math.floor(bil / 100)
  var sisabagi = bil % 100
 
  // console.log('bilangan '+bil)
  // console.log('hasil bagi '+hslbagi)
  // console.log('sisa bagi '+sisabagi)
    ratusan = cariSatuan(hslbagi)+' hundred'
    if(sisabagi != 0){
      if(sisabagi < 10){
      ratusan = ratusan + ' and '+cariSatuan(sisabagi);
      }else{
        ratusan = ratusan + ' and '+cariPuluhan(sisabagi);
      }
    }  
  return ratusan
}

/*mencari ribuan */
function cariRibuan(bil){
  var ribuan = ''
  var hslbagi = Math.floor(bil / 1000)
  var sisabagi = bil % 1000
 
  //console.log('bilangan '+bil)
  //console.log('hasil bagi '+hslbagi)
  //console.log('sisa bagi '+sisabagi)
  
    if(hslbagi < 10){
      ribuan = cariSatuan(hslbagi)+' thousand'
    } else if(hslbagi >=10 && hslbagi <100) {
      ribuan = cariPuluhan(hslbagi)+' thousand'
    }else{
      ribuan = cariRatusan(hslbagi)+' thousand'
    }
    

    if(sisabagi != 0){
      if(sisabagi < 10){
        ribuan = ribuan + ' and '+cariSatuan(sisabagi);
      }else if(sisabagi >=10 && sisabagi < 100){
        ribuan = ribuan + ' and '+cariPuluhan(sisabagi);
      }else{
        ribuan = ribuan +' '+ cariRatusan(sisabagi);
      }
    }  
  return ribuan
}

function cariJutaan(bil){
  var jutaan = ''
  var hslbagi = Math.floor(bil / 1000000)
  var sisabagi = bil % 1000000
  // console.log('cari Jutaan')
  // console.log('bilangan '+bil)
  // console.log('hasil bagi '+hslbagi)
  // console.log('sisa bagi '+sisabagi)
  if(hslbagi < 10){
    jutaan = cariSatuan(hslbagi)+' million'
  } else if(hslbagi >=10 && hslbagi <100) {
    jutaan = cariPuluhan(hslbagi)+' million'
  }else{
    jutaan = cariRatusan(hslbagi)+' million'
  }
    //jutaan = cariSatuan(hslbagi)+' million'

    if(sisabagi != 0){
      if(sisabagi < 10){
        jutaan = jutaan + ' and '+cariSatuan(sisabagi);
      }else if(sisabagi >=10 && sisabagi < 100){
        jutaan = jutaan + ' and '+cariPuluhan(sisabagi);
      }else if(sisabagi >=100 && sisabagi < 1000){
        jutaan = jutaan +' '+ cariRatusan(sisabagi);
      }else{
        jutaan = jutaan +' '+ cariRibuan(sisabagi);
      }

    }  

  return jutaan
}
