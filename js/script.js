function main(){
    const form = document.querySelector('.form');

    const users = [];

    function receiveEvent(event){
        event.preventDefault();

        const userEmail = form.querySelector('#email');
        const userPassword = form.querySelector('#password');


        users.push({
            userEmail: userEmail.value,
            userPassword: userPassword.value
        });

        console.log(users);
    }


    form.addEventListener('submit',receiveEvent);
}



main();















