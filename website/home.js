function values(){
    localStorage.setItem('start', document.getElementById('start').value)
    localStorage.setItem('end', document.getElementById('end').value)
    console.log("values are: ", localStorage.getItem('start'), localStorage.getItem('end'));
    window.location.href="Navigation.html";
}

const data = ["red", "blue", "green", "yellow", "purple", "orange", "black", "white", "brown", "been", "seen","0","1","2"];



function getSuggestions(substring) {
    let suggestions = [];

    if (substring === '')
        return suggestions;

    for (const idx in data) 
        if (data[idx].includes(substring))
            suggestions.push(data[idx]);

    return suggestions;
}

let inputs = document.getElementsByClassName('autocomplete');
for (const element of inputs) 
{
    element.addEventListener('input', (e) => {
        let input = e.target;
        let output = input.nextElementSibling;
        let suggestions = getSuggestions(input.value);
        
        output.innerHTML = '';
        output.classList.toggle('hidden', true);
        
        suggestions.forEach(suggestion => {
            let li = document.createElement('p',);
            li.innerText = suggestion;
            li.classList.add('p-1.5','text-xl');
            li.addEventListener('click', (click) => {
                input.value = click.target.innerText;
                output.innerHTML = '';
                output.classList.toggle('hidden', true);
            });
            output.appendChild(li);
        });
        output.classList.toggle('hidden', suggestions.length===0);
    });

    element.addEventListener('blur', (e) => {
        let output = e.target.nextElementSibling;
        setTimeout(() => {
                output.innerHTML = '';
                output.classList.toggle('hidden', true);
        },200);
    });

}
