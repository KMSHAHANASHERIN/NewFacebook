$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            emailAdress: {
                email:true,
                required: true   
            },
            password:{
                required:true
            }
        },
        messages:{
            emailAdress:{
                required:"<label style='color:red; padding:20px'>**Please enter your email address</label>",
                email:"<label style='color:red; padding:20px'>**Please enter a valid email address</label>"
               
            },
            password:{
                required:"<label style='color:red; padding:20px'>**Please enter your password</label>"
            }
        },
         
        

        })

        
       
        
    })
