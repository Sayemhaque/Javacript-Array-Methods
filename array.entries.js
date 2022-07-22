const texts = ["hello" , "how are you" , "are you there"];



const text = texts.entries();
//returns an Array Iterator object with key/value pairs:

for(let x of text) {


    console.log(x); 


    /* output:
    [ 0, 'hello' ]
    [ 1, 'how are you' ]
    [ 2, 'are you there' ]
    */
}


console.log(texts); 

 //output: [ 'hello', 'how are you', 'are you there' ] 

// does not change the original value