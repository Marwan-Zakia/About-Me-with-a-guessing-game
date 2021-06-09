'use strict';
// let rightAnswer = 0;
// let userName = prompt('hello can you enter your name please ');
// alert('welcome to my website ' + userName);
// console.log(userName);

// let interstingSite = prompt("do you think this site will be intersting ").toLowerCase();

// if (interstingSite === 'yes' || interstingSite === 'y') {
//     alert('very intersting indeed ');
//     console.log(interstingSite);
//     rightAnswer++;
// } else if (interstingSite === 'no' || interstingSite === 'n') {
//     alert('huh... I find your answer intersting ');
// } else {
//     alert('please type (yes),(no) or (y),(n)');
// }

// let watchMovies = prompt("do you think i like to watch Movies ").toLowerCase();

// if (watchMovies === 'yes' || watchMovies === 'y') {
//     alert('WRONG');

// } else if (watchMovies === 'no' || watchMovies === 'n') {
//     alert('yea i like intractive stuff');
//     rightAnswer++;
//     console.log(watchMovies);
// } else {
//     alert('(yes),(no) or (y),(n) please');
// }

// let videoGames = prompt("do you think i like video games ").toLowerCase();

// if (videoGames === 'yes' || videoGames === 'y') {
//     alert('HOW DID YOU KNOW??');
//     rightAnswer++;
//     console.log(videoGames);
// } else if (videoGames === 'no' || videoGames === 'n') {
//     alert('wrong answer');
// } else {
//     alert('(yes),(no) or (y),(n) please');
// }

// let badMemes = prompt("do you think i like bad memes ").toLowerCase();

// if (videoGames === 'yes' || videoGames === 'y') {
//     alert('YEAH THE WORSE THE BETTER');
//     console.log(badMemes);
//     rightAnswer++;
// } else if (videoGames === 'no' || videoGames === 'n') {
//     alert('wrong answer');
// } else {
//     alert('(yes),(no) or (y),(n) please');
// }

// let siteEngoyment = prompt("did you enjoy the my site").toLowerCase();

// if (siteEngoyment === 'yes' || siteEngoyment === 'y') {
//     alert('thats great');
//     console.log(siteEngoyment);
//     rightAnswer++;
// } else if (siteEngoyment === 'no' || siteEngoyment === 'n') {
//     alert('ok');
// } else {
//     alert('(yes),(no) or (y),(n) please');
// }
// alert('thanks for your time')

// for (let i = 0; i < 4; i++) {
//     let myAge = prompt('how old do you think i am')
//     if (myAge == 23) {
//         alert('you are absolutely CORRECT');
//         rightAnswer++;
//         console.log([i])
//         break;

//     }
//     else if (myAge > 23 && myAge < 28) {
//         alert('so close');
//     }

//     else (myAge < 23 && myAge > 15); {

//         alert('TOO LOW');
//     }

// }
// alert('im 23 years old')






// let favPlaces = ['amman', 'irbid', 'jrash', 'alzaraqa', 'petra', 'aqaba'];

// for (let i = 0; i < 6; i++) {
//     let placesInjordan = prompt('what do think my favorite cities in jordan')
//     // for (let i = 0; i < 6; i++)
//     {for(let j =0;j < favPlaces.length; j++)


//     if ( placesInjordan === favPlaces [j]) {
//         alert('good job');
//         rightAnswer++;
//         console.log([i])
//         break;

//     }
//     else (favPlaces != placesInjordan); {
//         alert('please try agin');
//     }


// }
// }

// alert('the cites are amman,irbid, jrash, alzaraqa, petra, aqaba')
// alert('your score : ' + rightAnswer)



function userQuestion(question, goodAnswer, notgoodanswer)
let userInput;

let favPlaces = ['amman', 'irbid', 'jrash', 'alzaraqa', 'petra', 'aqaba'];

for (let i = 0; i < 6; i++) {
    let placesInjordan = prompt('what do think my favorite cities in jordan')

    {
        for (let j = 0; j < favPlaces.length; j++)


            if (placesInjordan === favPlaces[j]) {
                alert(goodAnswer);
                rightAnswer++;
                console.log([i])
                break;

            }
            else (favPlaces != placesInjordan); {
            alert(notGoodAnswer);
        }


    }
}
userQuestion('what do think my favorite cities in jordan', 'good job', 'please try agin');



//userInput = prompt(question);
//     } while(userInput !== 'yes' && userInput !== 'y' && userInput !== 'no' && userInput !== 'n');

//     if(userInput === 'yes' || userInput === 'y') {
//       console.log(correctAns);
//     } else {
//       console.log(unCorrectAns);
//     }
//   }


































        // else {
        //     alert('Too high');



//     if (placesInjordan == favPlaces[0] || placesInjordan == favPlaces[1] || placesInjordan == favPlaces[2] || placesInjordan == favPlaces[3] || placesInjordan == favPlaces[4] || placesInjordan == favPlaces[5]) {
//         alert('good job');
//         break;

//     }
//     else (favPlaces != placesInjordan); {
//         alert('please try agin');
//     }
// }

// while (myAge!== 23 && counter < 5); {
//   myAge = prompt('how old do you think i am');

//     if (myAge == 23) {

//         alert('you are absolutely CORRECT');
//         //break;
//     }
//    else if (myAge > 23 && myAge < 28) {
//         alert('so close');
//     }

//     else (myAge < 23 && myAge > 15);{

//         alert('TOO LOW');
//     }

//     // else {
//     //     alert('Too high');

//     // }
//     counter++

// }


// let favPlaces = ['amman', 'irbid', 'jrash', 'alzaraqa', 'petra', 'aqaba'];

// for (let i = 0; i < 6; i++) {
//     let placesInjordan = prompt('what do think my favorite cities in jordan')


//     if (placesInjordan == favPlaces[0] || placesInjordan == favPlaces[1] || placesInjordan == favPlaces[2] || placesInjordan == favPlaces[3] || placesInjordan == favPlaces[4] || placesInjordan == favPlaces[5]) {
//         alert('good job');
//         break;

//     }
//     else (favPlaces != placesInjordan); {
//         alert('please try agin');
//     }
// }
