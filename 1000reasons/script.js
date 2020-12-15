const generate = $('.generate');
const inspire = $('.inspire');

function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'none')
       e.style.display = 'contents';
    else
       e.style.display = 'none';
 }
function generateReasons() {

    
    
    var quotes = [
        'I love to see your face light up when I walk into a room.',
        'I love the way you smile ear to ear and try to hide those lovely pearly teeth.',
        'I really think we were meant for each other because it comes so naturally for us. I dont have to think or worry because I know you love me just as much as I love you.',
        'I love you because we have conflicting opinions which never makes it boring but somehow you keep convincing me that your point of view is the right one.',
        'We go together like Gin and Juice ;)',
        'To me, you are perfect.',
        'I didnt know you when I was 16, now I dont remember not knowing you.',
        'Wherever you go, I go. You cant get rid of me.',
        'I want you more than Ive ever wanted anything. I want you forever.',
        'Unlike anyone Ive ever met.',
        'I love you now and Ill love you until I die and if theres a life after that, Ill love you then too.',
        'Your hand touching mine is the sweetest feeling.',
        'Ive found the missing pieces of myself in you.',
        'It feels like the universe conspired to help me find you.',
        '"Every heart sings a song, incomplete, until another heart whispers back. Those who wish to sing always find a song. At the touch of a lover, everyone becomes a poet." ― Plato',
        'Im happiest when Im right next to you.',
        'I swear I couldnt love you more than I do today, but I know I will tomorrow.',
        'You can live in my heart, rent free.',
        'I love to see smoke dance from your nose',
        'You make me feel some type of way.',
        'Be mine :)',
        'You add joy to my life.',
        'V you make me want to sing.',
        'Youre so cute even when youre mad.',
        'Lets spend our lives together :)',
        'L-O-V-E, I love you!',
        'Eu te amo',
        'Youre everything to me.',
        'You take me to the moon and back.',
        'You make me want to be a better person',
        'My bestfriend, V :)',
        'You rock my boat!',
        'You mean the world to me',
        'I can see you for who you are, and I love it',
        'You belong with me',
        'Im all yours :)',
        'Ill always be here with you',
        'Im in love with you',
        'Me and you? We have chemestry like Breaking Bad.',
        'Im happy to see you happy',
        'You and me, always.',
        'You make my heart skip a beat.',
        'You make me happy even when it feels like I cant be.',
        'One in a million :)',
        'Youre my crush, V :)',
        'I love you unconditionally.',
        'Ill do anything to make you smile.',
        'I lava you like a volcano :)',
        'Youre my favorite distraction.',
        'I smile so much more when Im around you.',
        'I want you, v.',
        'I need you.',
        'Youre my world.',
        'You rock my world.',
        'You give me goosebumps, V :)',
        'Weve been through so much together :)',
        'I love when your eyes sparkle',
        'I love how perfect your nose is.',
        'Your hair is so pretty no matter what color.',
        'The way your body curves is so hot ;)',
        'Best style out of anyone I know.',
        'Smartest girl Ive ever met.',
        '"So long as men can breathe or eyes can see, So long lives this, and this gives life to thee." -William Shakespeare',
        'Your eyes twinkle when you smile.',
        'Were perfect together.',
        'You make me feel better.',
        'I love waking up next to you :)',
        'I love when your hair gets curly and messy in the morning.',
        'I love to see your hair messed up after we "do it" ;)',
        'Youve got the whole package. Big titties, cute as can be, and smart as hell.',
        'Be with me :)',
        'Life doesnt feel normal without you.',
        'Once I got to know you, I never wanted to know anyone else.',
        'Im myself when Im around you.',
        '"Where there is love there is life." -Mahatma Gandhi',
        'I wont be able to fix all your problems, but I promise you dont have to face them alone.',
        'The best feeling is to love and be loved back.',
        'Your voice is my favorite sound.',
        'Youre all my heart ever talks about.',
        'I love you dummy :)',
        'My heart will always be with you.',
        'Just lie down on my chest and hear my heartbeat.',
        'When I say "I love you" I dont say it out of habit, I say that because you are my life.',
        'Just amile and say you love me :)',
        'I see you in my dreams, V :)',



    ]

    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    inspire.text(randomQuote)

    var randomNumber = Math.floor(Math.random() * classCycle.length);
    var classToAdd = classCycle[randomNumber];

    $('body').addClass(classToAdd);
};