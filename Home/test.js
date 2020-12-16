const moood = $('#mood')
const schedule = $('#schedule')
const showDate = $('.showDate')
const google = $('#google')
const github = $('#github')

function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'none')
       e.style.display = 'contents';
    else
       e.style.display = 'none';
 }
 
function displayTime() {
    var previousDate = moment("20180227", "YYYYMMDD");
    var today = moment();
    var diffInDays = today.diff(previousDate, 'seconds');
    
    $('#clock6').html(diffInDays);
    setTimeout(displayTime, 1000);
}

$(document).ready(function() {
    displayTime();
});

$("#mood").click(function(){
    window.location= "1000reasons/index.html";
});

$("#schedule").click(function(){
    window.location= "album/page1.html";
});
$("#google").click(function(){
    window.location= "index.html";
});
