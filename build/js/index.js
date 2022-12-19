const nameInput=document.getElementById("name-input"),nameCard=document.getElementById("name-card"),nameError=document.getElementById("name-error"),numberInput=document.getElementById("number-input"),numberCard=document.getElementById("number-card"),numberError=document.getElementById("number-error"),cvcInput=document.getElementById("cvc-input"),cvcCard=document.getElementById("cvc-card"),cvcError=document.getElementById("cvc-error"),monthInput=document.getElementById("month-input"),monthCard=document.getElementById("month-card"),monthError=document.getElementById("month-error"),yearInput=document.getElementById("year-input"),yearCard=document.getElementById("year-card"),yearError=document.getElementById("year-error");nameInput.addEventListener("input",(()=>{""==nameInput.value?nameCard.innerText="Jane Appleseed":nameCard.innerText=nameInput.value})),numberInput.addEventListener("input",(e=>{numberCard.innerText=numberInput.value.toUpperCase();/[A-z]/g.test(numberInput.value)?numberError.innerText="Wrong format, numbers only":(numberInput.value=e.target.value.replace(/\s/g,"").replace(/([0-9]{4})/g,"$1 ").trim(),numberError.innerText=""),""===numberInput.value&&(numberCard.innerText="0000 0000 0000 0000")})),monthInput.addEventListener("input",(()=>{monthCard.innerText=monthInput.value,""===monthInput.value&&(monthCard.innerText="00")})),yearInput.addEventListener("input",(()=>{yearCard.innerText=yearInput.value})),cvcInput.addEventListener("input",(()=>{cvcCard.innerText=cvcInput.value}));const submit=document.getElementById("submit");let nameValidation=!1,numberValidation=!1,monthValidation=!1,yearValidation=!1,cvcValidation=!1;const containerDatos=document.getElementById("container_form-datos"),success=document.getElementById("success");submit.addEventListener("submit",(e=>{e.preventDefault(),nameValidation=!!verifyIsFilled(nameInput,nameError),verifyIsFilled(numberInput,numberError)&&(19==numberInput.value.length?(showError(numberInput,numberError,"",!1),numberValidation=!0):(showError(numberInput,numberError,"Wrong Number"),numberValidation=!1)),verifyIsFilled(monthInput,monthError)&&(parseInt(monthInput.value)>0&&parseInt(monthInput.value)<=12?(showError(monthInput,monthError,"",!1),monthValidation=!0):(showError(monthInput,monthError,"Wrong Month"),monthValidation=!1)),verifyIsFilled(yearInput,yearError)&&(parseInt(yearInput.value)>22&&parseInt(yearInput.value)<=27?(showError(yearInput,yearError,"",!1),yearValidation=!0):(showError(yearInput,yearError,"Wrong Year"),yearValidation=!1)),verifyIsFilled(cvcInput,cvcError)&&(3==cvcInput.value.length?(showError(cvcInput,cvcError,"",!1),cvcValidation=!0):(showError(cvcInput,cvcError,"Wrong CVC"),cvcValidation=!1)),1==nameValidation&&1==numberValidation&&1==monthValidation&&1==yearValidation&&1==cvcValidation&&(console.log("Toko ok"),submit.style.display="none",success.style.display="flex")}));const btnSubmit=document.getElementById("btn-submit");function showError(e,n,r,t=!0){t?(n.innerText=r,e.style.borderColor="hsl(0, 100%, 66%)",n.classList.add("alert")):(n.innerText=r,e.style.borderColor="hsl(270, 3%, 87%)")}function verifyIsFilled(e,n){return e.value.length>0?(showError(e,n,"",!1),!0):(showError(e,n,"Can't be blank"),!1)}function validateLetters(e,n){/[A-z]/g.test(e.value)?showError(e,n,"Wrong format, numbers only"):showError(e,n,"",!1)}btnSubmit.addEventListener("click",(()=>{submit.style.display="block",success.style.display="none"}));
//# sourceMappingURL=index.js.map