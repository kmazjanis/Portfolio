         //1. Testing Console.log();

console.log('Testing console.log(): Haiiiiiiii');


         //2. Console.log(); loop with var 

var name = 'Variable';
console.log('Testing loop, from 0 to 4, console.log()+var: ' + name)

for (let i = 0; i < 4; i++) {
    
    document.getElementById("NR2Data").innerHTML += ("2. Testing loop from 0 to 4, + var result: " + i + " - " + name + "<br>")

}

        //3. Statement - Const.

const PI = 3.14;
function constant(){
    PI = 7;
}


    document.getElementById("NR3").innerHTML = ("3. Statement - Const.: " + PI)


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
        }

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
        }
        document.getElementById('people').innerHTML = output;

        
        //8. loop statement, initializing variable outside the loop

        //test
        for(var i=0; i<5; i++){
            console.log(i);
         //   document.getElementById('outsideLoop').innerHTML += (i);
        }
        
        var outside = 1;
        for(; outside<4; outside++)
        {
            document.getElementById('outsideLoop').innerHTML += (outside);
        }
        
       
         //9. LOOP IN statement

        const sharky = {
                species: "dolphin",
                size: "medium",
                color: "whiite",
                number: 153
         }

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
        var RandomCard = CardsArray[Math.floor(Math.random() * CardsArray.length)]
        var RandomPic = PicsArray[Math.floor(Math.random() * PicsArray.length)]

         document.getElementById('NR11Data').innerHTML += (RandomPic + " " + RandomCard);


         //12. bus times // why push is last
        var busTimes = ['10:00','13:00','16:30'];
        var myOptions = {bus: ['23:00'], train: ['9:00','19:00'], plane: ['5:00']};
        function busFunction(avar, bvar){
            for (var element of avar){
                bvar.bus.push(element);
            }
            console.log(element);
        };
        busFunction(busTimes, myOptions);
        document.getElementById('NR12Data').innerHTML += (myOptions.bus);

        //13. Reverse a string
        function reverseString(str) {
            var strvar = str;
            var reversed = strvar.split('').reverse().join('');
            document.getElementById('NR13Data').innerHTML += ("String: " + str + "</br>");
            document.getElementById('NR13Data').innerHTML += ("Reversed var string: " + reversed + "</br>");
            return document.getElementById('NR13Data').innerHTML += ("Reversed string parameter: " + str.split('').reverse().join(''));
         };
          reverseString("Helloz");

          function reversedMuch(){
            var reversed2 = document.getElementById("reversetext").value;
            var reversed3 = reversed2.split('').reverse().join('');
            document.getElementById('demo').innerHTML += ("Reversed String: " + reversed3 + "</br>");
            };

            //14. Factorialize Number
        function factorializeThis(){
            var getNumberFacto = document.getElementById("factorText").value;

            var result = getNumberFacto;
            if(getNumberFacto === 0)
              return 1;
            
            while(getNumberFacto > 1){
            getNumberFacto--;
            result = result * getNumberFacto;
            console.log(result);
            }
            
          return result;
          
        };



            // if(getNumberFacto === 0)
            // return 1;
            // var resultFacto;
            // while(getNumberFacto > 1){
            //     getNumberFacto--;
            //     resultFacto = resultFacto * getNumberFacto;
            //     document.getElementById('factoOutput').innerHTML += ("Reversed String: " + resultFacto + "</br>");    
            // }
            


        
