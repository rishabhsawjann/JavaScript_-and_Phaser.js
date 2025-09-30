function sayhello(name)
{
    console.log("Hello "+name);
}
function sayBye(name)
{
    console.log("Goodbye "+name);
}
function greetuser(name,callback)
{
    callback(name);
}
greetuser("Rishabh",sayhello);//Hello Rishabh
greetuser("Rishabh",sayBye);//GoodBye Rishabh