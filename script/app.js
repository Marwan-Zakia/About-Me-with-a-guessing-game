'use strict';
let rightAnswer = 0;
{
function userQuestion(question,correctAns,unCorrectAns,) {
         let userInput;
        // for(i = 0; i < 5 ; i++) {
        //       let  userInput = prompt(question)
                
        do {
                userInput = prompt(question);
        } while (userInput !== 'yes' && userInput !== 'y' && userInput !== 'no' && userInput !== 'n' && userInput !== null );

        if (userInput === 'yes' || userInput === 'y') {
                  alert(correctAns); rightAnswer++; return; 
                 
        }
        else (userInput === 'no' || userInput === 'n'|| null  ); { alert(unCorrectAns);  }
        
        } 
userQuestion("do you think this site will be intersting ", 'very intersting indeed', 'huh... I find your answer intersting',);
userQuestion('do you think i like to watch Movies ', 'WRONG', 'yea i like intractive stuff');
userQuestion('do you think i like video games', 'HOW DID YOU KNOW', 'wrong answer');
userQuestion('do you think i like bad memes', 'YEAH THE WORSE THE BETTER', 'wrong answer');
userQuestion('did you enjoy you your time in this website ', 'thats great', 'its ok');
}
{
function userQuestion(question, goodAnswer, notgoodanswer,wrongeanswer ) {
        //let favPlaces;

        for (let i = 0; i < 4; i++) {
                 let myAge = prompt(question)
                  if (myAge == 23) {
                         alert(goodAnswer);
                         rightAnswer++;
                         console.log([i])
                         break;

                     }
                     else if (myAge > 24 ) {
                         alert(notgoodanswer);
                    }

                     else (myAge < 23 && myAge > 15); {

                        alert(wrongeanswer);
                     }

                 }
                alert('im 23 years old')
                }
                userQuestion('how old do you think i am', 'you are absolutely CORRECT', 'TOO HIGH','TOO LOW');
}
{
function userQuestion(question, goodAnswer, notgoodanswer) {
        //let favPlaces;

        let favPlaces = ['amman', 'irbid', 'jrash', 'alzaraqa', 'petra', 'aqaba'];

        for (let i = 0; i < 3; i++) {

                let placesInjordan = prompt(question);

                {
                        for (let j = 0; j < favPlaces.length; j++)
                                // for (let i = 0; i < 6; i++)



                                if (placesInjordan === favPlaces[j]) {
                                        alert(goodAnswer);
                                        rightAnswer++;
                                        console.log([i])
                                        return;

                                }
                                else (favPlaces != placesInjordan); {
                                alert(notgoodanswer);
                        }


                }

        }


}

userQuestion('what do think my favorite cities in jordan', 'good job', 'please try agin'); 
}
 
alert('the cites are amman,irbid, jrash, alzaraqa, petra, aqaba')

 

















































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


// function userQuestion(question, goodAnswer, notgoodanswer,wrongeanswer ) {
//         //let favPlaces;

//         for (let i = 0; i < 4; i++) {
//                  let myAge = prompt(question)
//                   if (myAge == 23) {
//                          alert(goodAnswer);
//                          rightAnswer++;
//                          console.log([i])
//                          break;

//                      }
//                      else if (myAge > 24 ) {
//                          alert(notgoodanswer);
//                     }

//                      else (myAge < 23 && myAge > 15); {

//                         alert(wrongeanswer);
//                      }

//                  }
//                 // alert('im 23 years old')
//                 }
//                 userQuestion('how old do you think i am', 'you are absolutely CORRECT', 'TOO HIGH','TOO LOW');سوال 6




//         for (let i = 0; i < 3; i++) {

//                 let placesInjordan = prompt(question);

//                 {
//                         for (let j = 0; j < favPlaces.length; j++)
//                                 // for (let i = 0; i < 6; i++)



//                                 if (placesInjordan === favPlaces[j]) {
//                                         alert(goodAnswer);
//                                         rightAnswer++;
//                                         console.log([i])
//                                         break;

//                                 }
//                                 else (favPlaces != placesInjordan); {
//                                 alert(notgoodanswer);
//                         }


//                 }

//         }


// }







// function userQuestion(question, goodAnswer, notgoodanswer) {
//         //let favPlaces;

//         let favPlaces = ['amman', 'irbid', 'jrash', 'alzaraqa', 'petra', 'aqaba'];

//         for (let i = 0; i < 3; i++) {

//                 let placesInjordan = prompt(question);

//                 {
//                         for (let j = 0; j < favPlaces.length; j++)
//                                 // for (let i = 0; i < 6; i++)



//                                 if (placesInjordan === favPlaces[j]) {
//                                         alert(goodAnswer);
//                                         rightAnswer++;
//                                         console.log([i])
//                                         break;

//                                 }
//                                 else (favPlaces != placesInjordan); {
//                                 alert(notgoodanswer);
//                         }


//                 }

//         }


// }

// userQuestion('what do think my favorite cities in jordan', 'good job', 'please try agin'); سوال 7


// let favPlaces = ['amman', 'irbid', 'jrash', 'alzaraqa', 'petra', 'aqaba'];

// for (let i = 0; i < 6; i++) {
//     let userInput = prompt('what do think my favorite cities in jordan'); {
//         for (let j = 0; j < favPlaces.length; j++)


//             if (userInput === favPlaces[j]) {
//                 alert(goodAnswer);
//                 rightAnswer++;
//                 // console.log([i])
//                 break;

//             }
//             else (userInput !== favPlaces[j]); {
//             alert(notGoodAnswer);
//         }


//     }
// }
// userQuestion('what do think my favorite cities in jordan', 'good job', 'please try agin');



//userInput = prompt(question);
//     } while(userInput !== 'yes' && userInput !== 'y' && userInput !== 'no' && userInput !== 'n');

//     if(userInput === 'yes' || userInput === 'y') {
//       console.log(goodAnswer);
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
