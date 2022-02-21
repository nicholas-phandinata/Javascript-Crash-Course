/*
function print_pattern (iter){
      for (let num = 0; num < iter; num++){
            for (let i = 0; i < num; i++){
                  console.log("O")
            }
      }
}

print_pattern(prompt("Enter number of iteration:"))

function print_pattern (iter){
      let str = "";
      for(let i = 1; i <= iter; i++){
            for(let j = 1; j <= iter; j++){
                  if (j > i){
                        str = str.concat(" ");
                  }
                  else{
                        str = str.concat("*");
                  }
            }
            str = str.concat("\n")
        }
      console.log(str)
}
*/
function print_pattern1 (iter){
      let str = "";
      for(let i = 1; i <= iter; i++){
            for(let j = 1; j <= iter; j++){
                  if (j > i){
                        str = str.concat(" ");
                  }
                  else{
                        str = str.concat("*");
                  }
            }
            str = str.concat("\n");
        }
      console.log(str);
}

function print_pattern2 (iter){
      let str = "";
      let irr = Number(iter)
      for(let i = irr; i >= 1; i--){
            for(let j = 1; j <= i; j++){
                  str = str.concat("*");
            }
            str = str.concat("\n");
        }
      console.log(str);
}

function print_pattern3 (iter){
      let str = "";
      let irr = Number(iter)
      for(let i = irr; i >= 1; i--){
            for(let j = irr; j >= 1; j--){
                  if ((i + j) <= (irr+1)){
                        str = str.concat("*");
                  }
                  else{
                        str = str.concat(" ");
                  }
            }
            str = str.concat("\n");
        }
      console.log(str);
}

function print_pattern4 (iter){
      let str = "";
      let irr = Number(iter)
      for(let i = irr; i >= 1; i--){
            for(let j = 1; j <= irr; j++){
                  if ((i + j) <= irr){
                        str = str.concat(" ");
                  }
                  else{
                        str = str.concat("*");
                  }
            }
            str = str.concat("\n");
        }
      console.log(str);
}

function choose_pattern (opt,iter){
      if (opt == 1){
            print_pattern1(iter);
      }
      else if (opt == 2) {
            print_pattern2(iter);    
      }
      else if (opt == 3) {
            print_pattern3(iter);    
      }
      else if (opt == 4) {
            print_pattern4(iter);    
      }
      else{
            alert("Pattern not available!");
      }
}

function request_patternInfo (){
      var opt = prompt("Enter pattern number:");
      var iter = prompt("Enter number of iter:");
      choose_pattern(opt,iter);
}
