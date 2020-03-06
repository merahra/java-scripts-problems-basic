var speech = "I am a good person. I don't snore at night";
 console.log(speech);
 console.log(speech.length);
 console.log(speech[5]);

 for(var i=0; i<speech.length; i++){
     var char = speech[i];
     console.log(char);
 }

 var count = 0;
 for(var i=0; i<speech.length; i++){
    var char = speech[i];
    if(char == " "){                    /* && speech[i-1] !="" ei command dile sentence er majhe besi space thakle Problemnai*/
        count++;
    }
}
count++;