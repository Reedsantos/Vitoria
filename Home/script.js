const currentDate = moment().format("dddd");
const currentHello = moment().format("h");
const showTime = $('.showTime');
const greeting = $('.greeting');
const inspire = $('.inspire');
const moood = $('#mood')
const schedule = $('#schedule')
const showDate = $('.showDate')
const google = $('#google')
const github = $('#github')



$(document).ready(function () {

    var classCycle = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9', 'img10', 'img11', 'img12', 'img13', 'img14'];

    var quotes = ['“It is important to expect nothing, to take every experience, including the negative ones, as merely steps on the path, and to proceed.” -Ram Das',
        '“Be kind, for everyone you meet is fighting a hard battle.” –Plato',
        '“Logic will get you from A to B. Imagination will take you everywhere.” –Albert Einstein',
        '“If you correct your mind, the rest of your life will fall into place.” –Lao Tzu',
        "“The truth is not always beautiful, nor beautiful words the truth.” ―Lao Tzu",
        '“Love is a decision. Not an emotion.” ―Lao Tzu',
        '“It is a mistake to try to look too far ahead. The chain of destiny can only be grasped one link at a time.” -Winston Churchill',
        '“Employ your time in improving yourself by other men’s writings so that you shall come easily by what others have labored hard for.” -Winston Churchill',
        '"Be here, now." -Ram Das',
        '“Solitary trees, if they grow at all, grow strong.” -Winston Churchill',
        '“Should you find a wise critic to point out your faults, follow him as you would a guide to hidden treasure.” -Buddha',
        '“All conditioned things are impermanent—when one sees this with wisdom, one turns away from suffering.” -Buddha',
        '“We’re fascinated by the words, but where we meet is in the silence behind them.” -Ram Das',
        '“We’re all just walking each other home.” -Ram Das',
        '“Treat everyone you meet like God in drag.” -Ram Das',
        '"Live as if you were to die tomorrow. Learn as if you were to live forever." -Gandhi',
    ]
    var greetings = ["Hello Reed :) it's ", "What's up Reed? it's ","Hola Reed it's ", "Oi Reed! it's ", "Howdy Reed it's ", "Welcome Reed! it's ", "Seize the day Reed, it's ", "Yo it's mofuckin "]

    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    inspire.text(randomQuote)

    let randomgreeting = greetings[Math.floor(Math.random() * greetings.length)];
    greeting.text(randomgreeting+''+currentDate)


    var randomNumber = Math.floor(Math.random() * classCycle.length);
    var classToAdd = classCycle[randomNumber];

    $('body').addClass(classToAdd);

    setInterval(() => {
        moment("20111031", "YYYYMMDD").fromNow();
        const now = moment();
        const humanReadable = now.format('h:mm');

        showTime.text(humanReadable);
        
    }, 1000);
});


$("#mood").click(function(){
    window.location.replace("./mood.html");
});

$("#schedule").click(function(){
    window.location.replace("./schedule.html");
});
$("#google").click(function(){
    window.location = "http://www.google.com/";
});
$("#github").click(function(){
    window.location = "https://github.com/Reedsantos?tab=repositories/";
});