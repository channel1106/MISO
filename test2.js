const readline = require('readline');


console.log("Input two non-negative integers");


function KoreanConvertPrice(korean) {     
  var x = new Array("","일","이","삼","사","오","육","칠","팔","구");
  var y = new Array("","십","백","천","만","억","조");
  var z = new Array(0, 10, 100, 1000, 10000, 100000000, 1000000000000);

  var han, han_next, result = 0, price = 0, index = 0;

  for(var i=0; i<korean.length; i++) {            
    han = korean.charAt(i);
    han_next = korean.charAt(i+1); 

    for(var j=0; j<x.length; j++){
      if(han == x[j]){
          index = j;
  
          if((korean.length - 1) == i){
            result += index;
            return result;
          }
        }
      }

    for(var k=0; k<y.length; k++){
      if(han == y[k]){
          price = index * z[k];

          if(han == "만" || han == "억" || han == "조"){
            result = price * z[k];
            price = 0;
          }
      }
    }
  }

  return result;
}

function priceConvertKorean(price) {     
  var x = new Array("","일","이","삼","사","오","육","칠","팔","구");
  var y = new Array("","십","백","천","","십","백","천","","십","백","천","","십","백","천");

  var result = "";
  var han, str;

  for(i=0; i<price.length; i++) {            
          str = "";
          han = x[price.charAt(price.length-(i+1))];
          if(han != "")
            str += han+y[i];
          if(i == 4) 
            str += "만";
          if(i == 8) 
            str += "억";
          if(i == 12) 
            str += "조";

          result = str + result;
  }

  return result;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  var input = line.split(" ");

  //console.log(KoreanConvertPrice(input[0]));

  //console.log(KoreanConvertPrice(input[1]));
  
  var value = Number(KoreanConvertPrice(input[0])) + Number(KoreanConvertPrice(input[0]));

  console.log(priceConvertKorean(value));

  rl.close();
}).on("close", function() {
  process.exit();
});