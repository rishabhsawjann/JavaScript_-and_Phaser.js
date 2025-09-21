function maskEmail(email)// define the function
{
    let atIndex=email.indexOf('@');// find the index of the @ symbol
    let username=email.substring(0,atIndex);// get the username
    let domain=email.substring(atIndex+1);// get the domain
    return username.charAt(0)+'****'+username.substring(1)+'@'+domain;// return the masked email
}
console.log(maskEmail('test@example.com'));// test the function
console.log(maskEmail('rishabhsajwan8791@gmail.com'));

