function values(){
    localStorage.setItem('start', document.getElementById('start').value)
    localStorage.setItem('end', document.getElementById('end').value)
    console.log("values are: ", localStorage.getItem('start'), localStorage.getItem('end'));
    window.location.href="Navigation.html";
}