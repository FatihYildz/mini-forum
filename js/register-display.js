function loginFormDisplay(){
    const body = document.getElementsByTagName('body');
    const form= document.createElement('form');
    const form_div=document.createElement('div');
    

    const label_user_name=document.createElement('label');
    label_user_name.setAttribute('for', 'username');
    label_user_name.innerHTML='Nom Utilisateur: ';

    const user_name= document.createElement('input');
    user_name.setAttribute('type', 'text');
    user_name.setAttribute('name', 'username');
    document.getElementsByName('username').required = true;
    const br_user=document.createElement('br');
    
    const label_password=document.createElement('label');
    label_password.setAttribute('for', 'password');
    label_password.innerHTML='Mot de passe: ';

    const password= document.createElement('input');
    password.setAttribute('type', 'password');
    password.setAttribute('name', 'password');
    document.getElementsByName('password').required = true;
    const br_pass=document.createElement('br');

    const label_password_confirm=document.createElement('label');
    label_password_confirm.setAttribute('for', 'password_confirm');
    label_password_confirm.innerHTML='Confirmez le mot de passe: ';

    const password_confirm= document.createElement('input');
    password_confirm.setAttribute('type', 'password');
    password_confirm.setAttribute('name', 'password_confirm');
    document.getElementsByName('password').required = true;
    const br_pass_confirm=document.createElement('br');


    const submit= document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('value', 'Créer un compte');


    form.appendChild(label_user_name);
    form.appendChild(user_name);
    form.appendChild(br_user);

    form.appendChild(label_password);
    form.appendChild(password);
    form.appendChild(br_pass);

    form.appendChild(label_password_confirm);
    form.appendChild(password_confirm);
    form.appendChild(br_pass_confirm);
    form.appendChild(submit);
    form_div.appendChild(form);
    return form_div;
}

console.log(loginFormDisplay());