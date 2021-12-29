/* on "Get directions" click */
function values(){
    localStorage.setItem('start', document.getElementById('start').dataset.index)
    localStorage.setItem('end', document.getElementById('end').dataset.index)
    console.log("values are: ", localStorage.getItem('start'), localStorage.getItem('end'));
    window.location.href="Navigation.html";
}


function getSuggestions(substring) {
    if (!substring)
        return [];

    substring = substring.toLowerCase();
    let suggestions = [];
    
    /* find and print matching search queries */
    for (const index in graph.vertices)
    for (const query in graph.vertices[index].queries)
        if (graph.vertices[index].queries[query].toLowerCase().includes(substring))
            suggestions.push({
                index: index,
                query: graph.vertices[index].queries[query]
            });
    
    return suggestions;
}

function showSuggestions(e) {
    let input = e.target;
    let output = input.nextElementSibling;
    let suggestions = getSuggestions(input.value);

    output.innerHTML = '';
    output.classList.toggle('hidden', true);

    suggestions.forEach(suggestion => {
        let li = document.createElement('p',);
        li.innerText = suggestion.query;
        li.dataset.index = suggestion.index;
        li.classList.add('p-1.5','text-xl');
        li.addEventListener('click', (click) => {
            input.value = click.target.innerText;
            click.target.parentElement.previousElementSibling.dataset.index = click.target.dataset.index;
            output.innerHTML = '';
            output.classList.toggle('hidden', true);            
        });
        output.appendChild(li);
    });

    /* Hide if no suggestions */
    output.classList.toggle('hidden', suggestions.length === 0);
}

let inputs = document.getElementsByClassName('autocomplete');
for (const element of inputs) 
{
    element.addEventListener('input', showSuggestions);
    element.addEventListener('focus', showSuggestions);
    element.addEventListener('blur', e => {
        let output = e.target.nextElementSibling;
        setTimeout(() => {
                output.innerHTML = '';
                output.classList.toggle('hidden', true);
        },200);
    });
}
