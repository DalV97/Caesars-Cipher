function rot13(str) {
 
  let decodedString = "";
  
  
  for (let i = 0; i < str.length; i++) {  
    let charCode = str.charCodeAt(i); 

    if (charCode >= 65 && charCode <= 90) {      
      let decodedCharCode = ((charCode - 65 + 13) % 26) + 65;    
      decodedString += String.fromCharCode(decodedCharCode);
    } 
    
    else {      
      decodedString += str.charAt(i);
    }

  }
   
  return decodedString;
}


console.log(rot13("SERR PBQR PNZC"));