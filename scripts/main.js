function emailAuth() {
  const email = document.getElementById("email");
  const pattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const error = document.querySelector('.error');
    
    if(!pattern.test(email.value)) {
        email.style.border = '1px solid hsl(354, 100%, 66%)';
        error.style.visibility='visible';
    }

    else {
        email.style.border = '1px solid hsl(223, 100%, 88%)';
        error.style.visibility='hidden';
    }
}
