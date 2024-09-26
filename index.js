function updateCommentsSubscriber (response) {    commentsArr = [ ...response ] } //commentsArr = ['Comment 1', 'Comment 2', ...]
      var firstDiv = document.getElementById('first')   // firstDiv.innerHTML = commentsArr.length   
    var secondDiv = document.getElementById('second')   // secondDiv.innerHTML = commentsArr.toString()    ...}


    // So here we have a function. It's name is updateCommentsSubscriber
    //The response is the input that the function takes
    function updateCommentsSubscriber(response) {}
    //next an array has been created
    commentsArr = [...response]
//Here, the code is taking whatever is in response (which is a list of comments) and putting it into a new box called commentsArr. The ... is a special way to say, 
//"Take everything from response and copy it here." So, commentsArr will now look something like this: ['Comment 1', 'Comment 2', ...].
//An array is a special way to store a collection of items in programming.
//You can think of it like a box that holds many smaller boxes, each containing a piece of information.
//i.e 
let fruits = ['apple', 'banana', 'orange'];
//Here, fruits is an array that holds three strings: 'apple', 'banana',and 'orange'
//Yesterday I learnt that a string has " " or ''
//  FUNCTION :It’s a way to group together a set of instructions 
//so you can use them whenever you want, without having to write the same code over and over.



//REACT
//React is a JavaScript library used for building user interfaces