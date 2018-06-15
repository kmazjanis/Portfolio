         //1. Testing Console.log();

console.log('Testing console.log(): Haiiiiiiii');


         //2. Console.log(); loop with var 

var name = 'Variable';
console.log('Testing loop, from 0 to 4, console.log()+var: ' + name)

for (let i = 0; i < 4; i++) {
    
    document.getElementById("NR2Data").innerHTML += ("2. Testing loop from 0 to 4, + var result: " + i + " - " + name + "<br>");

};

        //3. Statement - Const.

const PI = 3.14;
function constant(){
    PI = 7;
};


    document.getElementById("NR3").innerHTML = ("3. Statement - Const.: " + PI);


        //4. Adding green background color to paragraph.

function fromTransparentToGreen(){
    document.querySelector(".NR4").style.backgroundColor = "green";
}

function backToTransparent(){
    document.querySelector(".NR4").style.backgroundColor = "white";
}

        //5. Nod list length. Counting all paragraphs.

var myNodeList = document.querySelectorAll("p");
document.getElementById("NR5NodeCount").innerHTML = "This doc contains<b> " + myNodeList.length + " paragraphs</b>.(And growing!)";


         //6. Nod list length. Counting all paragraphs.

function clickCounter(){
    if(typeof(Storage) !== "undefined")
    {
        if (localStorage.clickcount){
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        }
        else{
            localStorage.clickcount = 1;
        }
        document.getElementById("counterResult").innerHTML = "You have clicked the button " + localStorage.clickcount + " times.";
    }
}

function clickCounterReset(){
    document.getElementById("counterResult").innerHTML = localStorage.clear();
}

        //7. Variables/ Arrays / Loop

        var person = {
            name: "John Neihman",
            age: 99,
            address:{
                street: "5 main st",
                city: "boston"
            },
            children:["Brian", "Nocholas"]
        };

        console.log(person.children);

        var people = [
               {
                name: "Brad",
                age: 12
               },
               {
                name: "Lilly",
                age: 22
               },
               {
                name: "Sally",
                age: 99
               }
            ];
           
        console.log(people[1].age);

        var output = '';
        for(var i = 0; i < people.length; i++){
            output += '<li>'+people[i].name+'</li>';
        };
        document.getElementById('people').innerHTML = output;

        
        //8. loop statement, initializing variable outside the loop

        //test
        for(var i=0; i<5; i++){
            console.log(i);
         //   document.getElementById('outsideLoop').innerHTML += (i);
        };
        
        var outside = 1;
        for(; outside<4; outside++)
        {
            document.getElementById('outsideLoop').innerHTML += (outside);
        };
        
       
         //9. LOOP IN statement

        const sharky = {
                species: "dolphin",
                size: "medium",
                color: "whiite",
                number: 153
         };

         for(attribute in sharky) {
            document.getElementById('NR9Data').innerHTML += (attribute + ":" + sharky[attribute] + " ");
            
         }

      
         //10. D3 SVG

        d3.select('h1').style('color', 'red');

        /*var dataset = [1, 2, 3, 4, 5];
        d3.select('NR10')
         .data(dataset)
         .enter()
         .append('asd')
         //.text('Random text :)');
         .text(function(d) { return d; });*/


         //11. Random cards
         
        var CardsArray = ["heart", "spade", "club", "diamond"];
        var PicsArray = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];
       // var RandomNr = Math.floor((Math.random() * 9) + 2);
        var RandomCard = CardsArray[Math.floor(Math.random() * CardsArray.length)];
        var RandomPic = PicsArray[Math.floor(Math.random() * PicsArray.length)];

         document.getElementById('NR11Data').innerHTML += (RandomPic + " " + RandomCard);


         //12. bus times // why push is last
        var busTimes = ['10:00','13:00','16:30'];
        var myOptions = {bus: ['23:00'], train: ['9:00','19:00'], plane: ['5:00']};
        function busFunction(avar, bvar){
            for (var element of avar){
                bvar.bus.push(element);
            }
            console.log(element);
        }
        busFunction(busTimes, myOptions);
        document.getElementById('NR12Data').innerHTML += (myOptions.bus);

        //13. Reverse a string
        function reverseString(str) {
            var strvar = str;
            var reversed = strvar.split('').reverse().join('');
            document.getElementById('NR13Data').innerHTML += ("String: " + str + "</br>");
            document.getElementById('NR13Data').innerHTML += ("Reversed var string: " + reversed + "</br>");
            return document.getElementById('NR13Data').innerHTML += ("Reversed string parameter: " + str.split('').reverse().join(''));
         }
          reverseString("Helloz");

          function reversedMuch(){
            var reversed2 = document.getElementById("reversetext").value;
            var reversed3 = reversed2.split('').reverse().join('');
            document.getElementById('demo').innerHTML += ("Reversed String: " + reversed3 + "</br>");
            }

        //14. Factorialize Number

        function factorializeThis(){
            
        var getNumberFacto = document.getElementById("factorText").value;
        var startNumber = getNumberFacto;
    
        while(getNumberFacto > 1){
            getNumberFacto--;
            startNumber = startNumber * getNumberFacto;
        }

        if (startNumber == 0){
            startNumber = 1;
        }

        return document.getElementById('FactoResult').innerHTML += ('<div id="FactoResult"> This is the result man: <b>' + startNumber + '<b></div>');
            
        }
            
         function deleteFacto(){
            document.getElementById('FactoResult').innerHTML = "";
         }

        function factorAndDelete(){
            deleteFacto();
            factorializeThis();
        }
           
        //15. Palindromes
        
        function PalindromeThis(){
            var getPalindromeText = document.getElementById("PalindromeText").value;
            var removeSymbols = /[\W_]/g;
            var smoothText = getPalindromeText.toLowerCase().replace(removeSymbols, '');
            var reversedText = smoothText.split('').reverse().join('');

            document.getElementById('PalindromeResult').innerHTML = "";
            if(reversedText == smoothText){
                return document.getElementById('PalindromeResult').innerHTML += ("<div id='PalindromeResult'><b>It's Palindrome<b></div>");
            }
            else{
                return document.getElementById('PalindromeResult').innerHTML += ("<div id='PalindromeResult'><b>It's NOT Palindrome<b></div");
            }
        }


        //16. Finding the longest word in sentence.

        function FindLongestWord(){
            let getPalindromeText = document.getElementById("FindLongestWordText").value;
            let splitWords = getPalindromeText.split(' ');
            let MaxLength = 0;
        
            for(i=0; i < splitWords.length; i++){
                if(splitWords[i].length > MaxLength){
                    MaxLength = splitWords[i].length;
                }
            }
            document.getElementById('FindLongestWordRes').innerHTML = "";
            return document.getElementById('FindLongestWordRes').innerHTML += (MaxLength);
        }

        //17. Change first letter to upper letter.

        function UpperLetter(){
            let getUpperLetter = document.getElementById("UpperLetterText").value;
            let lower = getUpperLetter.toLowerCase().replace(/(^|\s)\w/g, (L) => L.toUpperCase());
            
            document.getElementById('UpperLetterRes').innerHTML = "";
            return document.getElementById('UpperLetterRes').innerHTML += (lower);
      
        }


        //18.Biggest number in array
        function largestOne() {
         
          }
         

        //  var arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
        // for (let i=0; i < arr.length; i++){
        //     iz = i;
        //     if(iz > i){
        //         return iz;
        //     }
        //     else{
        //         return i;
        //     }

        //     for(let j=0; j < arr[i].length; j++){

        //         document.getElementById('ArrayNumberResult').innerHTML += (arr[i][j] + "</br>"); 
        //     }
            
            
        // }
         
        //19. Short if else statement or condition operator. Check if number positive, negative or zero.
        function CondOper(){
            let getNumber = document.getElementById("CondOperText").value;
            let getNumberRes = (getNumber == 0) ? "zero!" : (getNumber > 0) ? "positive" : "negative";
            document.getElementById('CondOperResult').innerHTML = "";
            return document.getElementById('CondOperResult').innerHTML += (getNumberRes);
      
        }
         
       

        console.clear();
        


          
        function zeroArray(m, n) {
        
            let newArray = [];
            let row = [];
            for (let i = 0; i < m; i++) {
              newArray.unshift(row);
                }
                for (let j = 0; j < n; j++) {
                    row.push(j);
                }
            return newArray;
          }
          
          let matrix = zeroArray(2, 3);
          console.log(matrix);
