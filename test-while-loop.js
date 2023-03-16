// Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time, as long as xValue remains positive.

function loop_1(){

    let xValue = 10;
    while (xValue > 0) {
    console.log(xValue);
    xValue -= 0.5;
    }

}

loop_1()

function loop_2(){

    let i = 1;
    while (i <= 100) {
    if (i % 2 !== 0) {
        
        console.log(i);
        }

        i++;

        }

}

loop_2()



function loop_3(n) {
    let i = 1;
    while (i <= n) {
      console.log("[" + i + "]");
      i++;
    }
  }

  loop_3(5)


  function loop_4(n) {
    let i = 1;
    let sum = 0;
    while (i <= n) {
      sum += i;
      i++;
    }
    return sum;
  }
  
  console.log(loop_4(5)); // 15