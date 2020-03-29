//Default Function Parameters
//new ES6 feaure allowing us to provide
//default values for function parameters

function sendMessage(email, message, title="message") {
    if (!email || !message) {
        return false;
    }

    //title = title || "";

//fancy code to send message
title  = title.toUpperCase();
console.log(title);
console.log(message, '\n');
return true;
}

sendMessage('fry@planetexpress.org',
            'You got the raise!',
            'Good news!');

sendMessage('fry@planetexpress.org',
            'nvm. My mistake. It was Scruffy who got the raise.');
