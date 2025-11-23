/* Add your JavaScript to this file */
document.addEventListener("DOMContentLoaded",function(){
    let form= document.querySelector(".newsletter form");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        let message=document.querySelector(".newsletter .message");
        let email= document.querySelector("#email").value;

        if (email==""){
            message.textContent= `Please enter a valid email address. `;

        }
        
        else{
        message.textContent= `Thank you! Your email address ${email} has been added to our mailing list! `;
        }

    });
});