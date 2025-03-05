function emailSend(){

Email.send({
    Host : "smtp.mailendo.com",
    Username : "adamznaxh@gmail.com",
    Password : "DAAFB8E3FA9D3E5813B79AEE2E790B2CBAD3",
    To : 'adamx2323@gmail.com',
    From : "adamznaxh@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}
