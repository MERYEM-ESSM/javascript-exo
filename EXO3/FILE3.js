const inputname= document.getElementById("name")
 const cin= document.getElementById("CIN")
  const email= document.getElementById("emailaddress")
  const form=document.forms
  inputsec=document.getElementById("levelS");
  inputsec.checked=true;
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
  form[0].addEventListener('submit',(e)=>{

        
        if (inputname.value ===''|| inputname.value===null || cin.value === '' || email.value === '')
        {
        
            alert("error")
            e.preventDefault();
        
        }
       else if(!regex.test(email.value)){

        alert("email not valid")
        e.preventDefault();

       }

       if(cin.value.length != 8){
        alert("cin not 8!!")
        e.preventDefault();
       }
    

  
    })
   