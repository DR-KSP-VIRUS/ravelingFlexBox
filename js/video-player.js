const timeRemaining = document.getElementById("remaining-time");

const formatTime = (time) => {
    // format time to 2 digits
    return time > 9 ? time : '0'+time;
} 


const getTime = () => {
    // get the current time
    const date = new Date();
    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();
    let seconds = date.getUTCSeconds();
    timeRemaining.innerText = `${hours} : ${formatTime(minutes)} : ${formatTime(seconds)}`;
}

// call to update the time
setInterval(getTime,1000)