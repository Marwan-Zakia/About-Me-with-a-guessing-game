'use strict';

let userName = prompt('hello can you enter your name please ');
alert('welcome to my website ' + userName);
 console.log(userName);

let interstingSite = prompt("do you think this site will be intersting ").toLowerCase();

if (interstingSite === 'yes' || interstingSite === 'y') {
    alert('very intersting indeed ');
    console.log(interstingSite);
} else if (interstingSite === 'no' || interstingSite === 'n') {
    alert('huh... I find your answer intersting ');
} else {
    alert('please type (yes),(no) or (y),(n)');
}

let watchMovies = prompt("do you think i like to watch Movies ").toLowerCase();

if (watchMovies === 'yes' || watchMovies === 'y') {
    alert('WRONG');

} else if (watchMovies === 'no' || watchMovies === 'n') {
    alert('yea i like intractive stuff');
    console.log(watchMovies);
} else {
    alert('(yes),(no) or (y),(n) please');
}

let videoGames = prompt("do you think i like video games ").toLowerCase();

if (videoGames === 'yes' || videoGames === 'y') {
    alert('HOW DID YOU KNOW??');
    console.log(videoGames);
} else if (videoGames === 'no' || videoGames === 'n') {
    alert('wrong answer');
} else {
    alert('(yes),(no) or (y),(n) please');
}

let badMemes = prompt("do you think i like bad memes ").toLowerCase();

if (videoGames === 'yes' || videoGames === 'y') {
    alert('YEAH THE WORSE THE BETTER');
    console.log(badMemes);
} else if (videoGames === 'no' || videoGames === 'n') {
    alert('wrong answer');
} else {
    alert('(yes),(no) or (y),(n) please');
}

let siteEngoyment = prompt("did you enjoy the my site").toLowerCase();

if (siteEngoyment === 'yes' || siteEngoyment === 'y') {
    alert('thats great');
    console.log(siteEngoyment);
} else if (siteEngoyment === 'no' || siteEngoyment === 'n') {
    alert('ok');
} else {
    alert('(yes),(no) or (y),(n) please');
}
alert('thanks for your time')

