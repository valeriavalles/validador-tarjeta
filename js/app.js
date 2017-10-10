  do {
   var tuTarjeta =parseInt(prompt("ingrese el numero de su  tarjeta "));
  }
while (!tuTarjeta);
  console.log("tu numero de tarjeta es " + tuTarjeta);

function isValidCard(tuTarjeta){
  
 var newTarjeta = []; 
  var size = tuTarjeta.length;
  var position = size - 1 ;
  var mult = 2 ;
  for(var i = position ; i>=0; i--){
    
    if(tuTarjeta[i]%2===0){
    
    console.log(mult *= tuTarjeta);
    
    }
newTarjeta.push(tuTarjeta[i]);
  }
  return newTarjeta;
}

console.log(isValidCard([7,6,8,7,2,9,8,7]));