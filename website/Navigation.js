/**
 * Priority Queue implementation
 *
 * code copied from:
 * https://medium.com/@madelinecorman/dijkstras-algorithm-1c6d93c0ea39
 * 
 */
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(value, priority) {
        this.values.push({value, priority});
        this.sort();
    }
    dequeue() {
        return this.values.shift();
    }
    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }
}

/**
 * Dijkstra's SPF algorithm
 *
 * code slightly tweaked from:
 * https://medium.com/@madelinecorman/dijkstras-algorithm-1c6d93c0ea39
 * 
 */
function shortestPath(start, finish)
{
    const vertices = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;

    for(let vertex in graph.adjacency){
        if(vertex == start){
            distances[vertex] = 0;
            vertices.enqueue(vertex, 0);
        } else {
            distances[vertex] = Infinity;
            vertices.enqueue(vertex, Infinity);
        }
        previous[vertex] = null;
    }

    while(vertices.values.length){
        smallest = vertices.dequeue().value;
        if(smallest === finish) {
            while(previous[smallest]){
                path.unshift(smallest);
                smallest = previous[smallest];
            }
            path.unshift(start);
            break;
        }
        if(smallest || distances[smallest] !== Infinity){
            for(let neighbor in graph.adjacency[smallest]){
                let nextNode = graph.adjacency[smallest][neighbor];
                let candidate = distances[smallest] + nextNode.weight;
                let nextNeighbor = nextNode.vertex;
                if(candidate < distances[nextNeighbor]){
                    distances[nextNeighbor] = candidate;
                    previous[nextNeighbor] = smallest;
                    vertices.enqueue(nextNeighbor, candidate);
                }
            }
        }
    }
    console.log(path);
    return path;
}


const svg = document.getElementById('svg');
const groundfloor = document.getElementById('groundfloor');
const firstfloor  = document.getElementById('firstfloor');
const secondfloor = document.getElementById('secondfloor');
 
/* svg namespace */
const svgns = "http://www.w3.org/2000/svg";
let currentLocation = document.createElementNS(svgns, "circle");
currentLocation.setAttribute("r", "3");


/* Returns count of specified character */
String.prototype.countChar = function(char)
{
    let count = 0;   
    for(const i in this)
        if(this[i] === char)
            count++;
    return count;
}

/* returns common floors */
const getSVGs = (start, end = {z:'123'}) => {
    let result = [];
    let combinedZ = `${start.z}${end.z}`;
    if (combinedZ.countChar('1') === 2) result.push(groundfloor);
    if (combinedZ.countChar('2') === 2) result.push(firstfloor);
    if (combinedZ.countChar('3') === 2) result.push(secondfloor);
    return result;
}

function drawpath(path)
{
    /* remove previous paths */
    svg.querySelectorAll('line').forEach(elem => elem.remove());
    
    while(path.length > 1)
    {
        let start = graph.vertices[path.shift()];
        let end = graph.vertices[path[0]];

        let l = document.createElementNS(svgns, "line");
        l.setAttribute("x1", start.x);
        l.setAttribute("y1", start.y);
        l.setAttribute("x2", end.x);
        l.setAttribute("y2", end.y);
        l.setAttribute("stroke", "red");
        l.setAttribute("stroke-width", "2");
        l.setAttribute("stroke-dasharray","8 4 ")
        getSVGs(start, end).forEach(svg => svg.appendChild(l));
    }
}






let steps = [];
let currentStep = 0;
const path = shortestPath(localStorage.getItem('start'),localStorage.getItem('end'));

function test(){
    console.log("Gettingvalues");
    console.log(localStorage.getItem('start'), localStorage.getItem('end'))
    localStorage.setItem("overviewmode","disabled");
    let start = localStorage.getItem('start');
    let end = localStorage.getItem('end');
    drawpath(shortestPath(start,end));
}

function toggleZoom(){
    let svg = document.querySelector("svg");
    if(localStorage.getItem("overviewmode") == "disabled"){
        let z = graph.vertices[path[currentStep]].z;
        switch(z){ // Om de juiste svg te laden 
            case 1:
                svg.setAttribute("viewBox", "300 100 600 600"); 
                break;
            case 2:
                svg.setAttribute("viewBox", "0 -50 900 900"); 
                break;
            case 3:
                svg.setAttribute("viewBox", "-100 80 700 700"); 
                break;
        }

        localStorage.setItem("overviewmode", "enabled");
    } else {
        localStorage.setItem("overviewmode","disabled");
        svg.setAttribute("viewBox", (graph.vertices[path[currentStep]].x-150) + ' ' + (graph.vertices[path[currentStep]].y-150) + " 300 300"); 
    }
}

function generateSteps(){

    const amountOfSteps = path.length - 1;

    for(let j = 0; j <= amountOfSteps;j++) {
        steps.push({
            step: j,
            description: "test"
        });
    }
    document.getElementById("description_container").innerHTML = steps[currentStep].description;
    document.getElementById("step_number").innerHTML = "Step " + (currentStep+1);
    updateMap();
}

function previousStep(){
    currentStep -= 1;
    document.getElementById("step_number").innerHTML = "Step " + (currentStep+1);
    document.getElementById("description_container").innerHTML = steps[currentStep].description;
    updateMap();
    
}

function nextStep(){
    currentStep += 1;
    document.getElementById("step_number").innerHTML = "Step " + (currentStep+1);
    document.getElementById("description_container").innerHTML = steps[currentStep].description;
    updateMap()
}

function rotateLabels(floor, rotation) {
    const labels = floor.getElementsByTagName('text');
    for (let idx = 0; idx < labels.length; idx++) {
        const bbox = labels[idx].getBBox();
        const x = bbox.x + (bbox.width/2);
        const y = bbox.y + (bbox.height/2);
        labels[idx].setAttribute('transform', `rotate(-${rotation} ${x},${y})`);
        console.log(labels[idx].style.transform);
    }
}

let rotation = 'rotate-0';
function updateMap(){
    // Calculate x1, x2, change between both, make sure way up is the right one 
    // let svg = document.querySelector("svg");
    let x1 = graph.vertices[path[currentStep]].x; 
    let y1 = graph.vertices[path[currentStep]].y; 
    let x2 = graph.vertices[path[currentStep+1]].x; 
    let y2 = graph.vertices[path[currentStep+1]].y; 
    let z  = graph.vertices[path[currentStep]].z;
    
    switch(z){ // Om de juiste svg te laden 
        case 1:
            document.getElementById("groundfloor").classList.remove("hidden");
            document.getElementById("firstfloor").classList.add("hidden");
            document.getElementById("secondfloor").classList.add("hidden");
            break;
        case 2:
            document.getElementById("groundfloor").classList.add("hidden");
            document.getElementById("firstfloor").classList.remove("hidden");
            document.getElementById("secondfloor").classList.add("hidden");
            break;
        case 3:
            document.getElementById("groundfloor").classList.add("hidden");
            document.getElementById("firstfloor").classList.add("hidden");
            document.getElementById("secondfloor").classList.remove("hidden");
            break;
    }
    
    let middle_x = (x1 + x2) / 2;
    let middle_y = (y1 + y2) / 2;

    currentLocation.setAttribute("cx", x1);
    currentLocation.setAttribute("cy", y1);
    svg.appendChild(currentLocation);

    svg.setAttribute("viewBox", `${x1-100} ${y1-100} 200 200`);
    // svg.setAttribute("viewBox", (middle_x-150) + ' ' + (middle_y-150) + " 300 300"); 
    let diff_x = x1 - x2; // if positive, west, negative, east
    let diff_y = y1 - y2; // if positive, north, negative, south

    
    svg.classList.remove(svg.classList[5]);
    svg.classList.add(rotation);
    rotateLabels(svg, rotation.split('-')[1]);

    defineDescriptions();

    if (Math.abs(diff_x) >= Math.abs(diff_y))
        rotation = `rotate-${diff_x > 0 ? 90 : 270}`;
    else
        rotation = `rotate-${diff_y > 0 ? 0 : 180}`;

    // make sure up is the right one.
}

function defineDescriptions(){
    // Kijken naar de aangrenzende nodes en op basis daarvan een direction definieren 
    console.log(currentStep, path.length);
    if(currentStep > 0 && currentStep+1 < path.length-1){
        document.getElementById("previousButton").classList.remove("hidden"); // show the the previous button
        document.getElementById("nextButton").classList.remove("hidden"); // show the next button
        let prev = graph.vertices[path[currentStep-1]];
        let curr = graph.vertices[path[currentStep]];
        let next = graph.vertices[path[currentStep+1]];
        
        let thresh = 0;

        /* rechts */
        if ((curr.y - prev.y < thresh && curr.x - next.x < thresh)
        ||(curr.x - prev.x > thresh && curr.y - next.y < thresh)
        ||(curr.y - prev.y > thresh && curr.x - next.x > thresh)
        ||(curr.x - prev.x < thresh && curr.y - next.y > thresh)
        ){
            document.getElementById("description_container").innerHTML = "Ga naar rechts";
        }    
        /* links */
        else if ((curr.y - prev.y < thresh && curr.x - next.x > thresh)
        || (curr.x - prev.x > thresh && curr.y - next.y > thresh)
        || (curr.y - prev.y > thresh && curr.x - next.x < thresh)
        || (curr.x - prev.x < thresh && curr.y - next.y < thresh)
        ){
            document.getElementById("description_container").innerHTML = "Ga naar links";
        }
        else {
            document.getElementById("description_container").innerHTML = "Ga rechtdoor";
        }
    } else if (currentStep+1 === path.length-1) {
        document.getElementById("description_container").innerHTML = "Bestemming bereikt";
        document.getElementById("nextButton").classList.add("hidden"); // hide the next button
    } else {
        document.getElementById("previousButton").classList.add("hidden"); // hide the previous button, this is step 1
        document.getElementById("nextButton").classList.remove("hidden"); // show the next button, this is step 1
        document.getElementById("description_container").innerHTML = "Ga rechtdoor";
    }
}










// elke trap kent uiteindes en tussenstappen
// bij elk uiteinde wordt doorgestapt naar het volgende uiteinde
// elke tussenstap wordt uit het kortste pad verwijderd
// het verschil in z-waarde tussen beide uiteindes wordt gebruikt om de richting te bepalen

// wanneer het volgende punt een deur is, zal de gebruiker gevraagd worden door de deur te gaan

// wanneer de gebruiker bij het volgende punt rechtdoor moet (en het punt geen deur is) wordt het punt verwijderd uit het kortste pad

// bij 'multilokalen' wordt de verbindende knoop nooit weergegeven:
//   bij vertrek start de route bij een deur
//   bij aankomst eindigt de route bij een deur