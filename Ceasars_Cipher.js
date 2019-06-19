function rot13(str) { // LBH QVQ VG!
    str = str.split("")
    for(let i=0, len=str.length; i<len; i++){
      str[i] = str[i].charCodeAt(0)
    }
    for(let i=0, len=str.length; i<len; i++){
      if(str[i]>=65 && str[i]<=90){
        str[i] = str[i]+13>90 ? 65+13-(90-str[i]+1) : str[i]+13
      }
    }
    return str.map(e=>String.fromCharCode(e)).join("");
  }
  
  // Change the inputs below to test
  console.log(rot13("SERR PBQR PNZC"))