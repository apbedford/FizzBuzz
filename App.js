
for (var i = 1 ; i < 101; i += 1) { //start;end; increment

if ( i % 3 == 0 && i % 5 == 0) {console.log ("Fizz Buzz")} //print FizzBuzz

else if ( i % 3 == 0) {console.log ("Fizz")} //print Fizz

else if (i % 5 == 0) {console.log ("Buzz")} //print Buzz

else {console.log(i)}; //print i +=1

//$('html').append('<body>'+i+'</body>');

}

