    
 function calc()
 {
     let x =document.getElementById('number1');
     let y =document.getElementById('number2');
     
    let oper = document.getElementById('operators').value;

    let n1 = Number(x.value);
    let n2 = Number(y.value);
    let sum = n1 + n2;
       sus= n1 - n2;
       div = n1/n2;
       mod=n1%n2;
       mult=n1*n2;
    
     
    
  if(oper === '+')
      {

        
          document.getElementById("result").value = sum;
      }
     
      else if(oper === '-')
      
      { 
    
          document.getElementById("result").value = sus;
      }
     
      if(oper === '/')
      {
          document.getElementById("result").value = div;
      }
     
      if(oper === 'X')
      {
          document.getElementById("result").value = multi;
      }
      if(oper === '%')
      {   
          document.getElementById('result').value = mod;
      }
    }

    
 