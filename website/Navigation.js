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
const svgns = 'http://www.w3.org/2000/svg';
let currentLocation = document.createElementNS(svgns, 'circle');
currentLocation.setAttribute('r', '3');


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

        let l = document.createElementNS(svgns, 'line');
        l.setAttribute('x1', start.x);
        l.setAttribute('y1', start.y);
        l.setAttribute('x2', end.x);
        l.setAttribute('y2', end.y);
        l.setAttribute('stroke', 'red');
        l.setAttribute('stroke-width', '2');
        l.setAttribute('stroke-dasharray','8 4 ')
        getSVGs(start, end).forEach(svg => svg.appendChild(l.cloneNode()));
    }
}

const getType = idx => graph.vertices[idx].type;
const getZ = idx => graph.vertices[idx].z;

let currentStep = 0;
// const path = shortestPath(localStorage.getItem('start'),localStorage.getItem('end'));

function initialize() {
    /* Get values from local storage and set overview mode*/
    localStorage.setItem('overviewmode','disabled');    
    let start = localStorage.getItem('start');
    let end = localStorage.getItem('end');
    let path = shortestPath(start,end);
    drawpath([...path]);

    generateSteps(path);
    updateView(steps[0]);
    document.getElementById('step_number').innerHTML = `Step ${currentStep+1}`;
}

const steps = [];
function generateSteps(path)
{
    /* Get rotation right for first step */    
    let i = 0;
    steps.push({
        SVG:         getSVG(path[i]),
        rotation:    getRotation(path[i],path[i+1]),
        position:    getPosition(path[i]),
        description: getDescription(path[i-1],path[i], path[i+1])
    });
    /* Continue with following steps */
    for (i = steps.length; i < path.length; i++)
        steps.push({
            SVG:         getSVG(path[i]),
            rotation:    getRotation(path[i-1],path[i]),
            position:    getPosition(path[i]),
            description: getDescription(path[i-1],path[i], path[i+1])
        });

    removeInterstairs(path, steps);
    removeDuplicates(steps);        
}

function removeInterstairs(path, steps)
{
    for (let idx = path.length-1; 0 <= idx; idx--)
        if (getType(path[idx]) === 'stairs') {
            let endFloor = steps[idx].SVG;
            idx--;
            
            if (getType(path[idx]) !== 'interstairs')
                continue;
            
            while (getType(path[idx]) === 'interstairs') {
                steps.splice(idx, 1);
                idx--;
            }
            
            let startFloor = steps[idx].SVG;
            steps[idx].description = `Go ${startFloor < endFloor ? 'up' : 'down'} the stairs`;
            idx++;
        }
}
function removeDuplicates(steps)
{    
    for (let idx = 0; idx < steps.length; idx++)
        if (steps[idx].description === 'Go straight on')
        {
            idx++;
            while (steps[idx].description === 'Go straight on')
            steps.splice(idx, 1);
            idx--;
        }
}

const getSVG = idx => `${graph.vertices[idx].z}`[0];
function setSVG(z)
{
    switch(z) {
        case '1':
            document.getElementById('groundfloor').classList.remove('hidden');
            document.getElementById('firstfloor').classList.add('hidden');
            document.getElementById('secondfloor').classList.add('hidden');
            break;
        case '2':
            document.getElementById('groundfloor').classList.add('hidden');
            document.getElementById('firstfloor').classList.remove('hidden');
            document.getElementById('secondfloor').classList.add('hidden');
            break;
        case '3':
            document.getElementById('groundfloor').classList.add('hidden');
            document.getElementById('firstfloor').classList.add('hidden');
            document.getElementById('secondfloor').classList.remove('hidden');
            break;
    }
}

const getRotation = (start, end) => {

    if (!start)
        return 0;

    // Calculate x1, x2, change between both, make sure way up is the right one 
    // let svg = document.querySelector('svg');
    let x1 = graph.vertices[start].x;
    let y1 = graph.vertices[start].y;
    let x2 = graph.vertices[end].x;
    let y2 = graph.vertices[end].y;
    
    /* Set rotation for current step and rotate labels */
    let diff_x = x1 - x2; // if positive, west, negative, east
    let diff_y = y1 - y2; // if positive, north, negative, south

    if (Math.abs(diff_x) >= Math.abs(diff_y))
        return diff_x > 0 ? 90 : 270;
    else
        return diff_y > 0 ? 0 : 180;
};
function setRotation(degrees)
{
    /* Rotate svg */
    svg.classList.remove(svg.classList[5]);
    svg.classList.add(`rotate-${degrees}`);

    /* Rotate labels back */
    rotateLabels(svg, degrees);
}
function rotateLabels(floor, rotation) {
    const labels = floor.getElementsByTagName('text');
    for (let idx = 0; idx < labels.length; idx++) {
        const bbox = labels[idx].getBBox();
        const x = bbox.x + (bbox.width/2);
        const y = bbox.y + (bbox.height/2);
        labels[idx].setAttribute('transform', `rotate(-${rotation} ${x},${y})`);
    }
}

const getPosition = idx => ({
    x: graph.vertices[idx].x,
    y: graph.vertices[idx].y
});
function setPosition(position)
{
    currentLocation.setAttribute('cx', position.x);
    currentLocation.setAttribute('cy', position.y);
    svg.appendChild(currentLocation);
}


const getDescription = (previous, current, next) => {
    /* first or last step */
    if (!previous)
        return 'Go straight on';
    if (!next)
        return 'Destination reached!';
    
    /* Reset button visibility to visible */
    document.getElementById('previousButton').classList.remove('hidden');
    document.getElementById('nextButton').classList.remove('hidden');
    
    let prev = graph.vertices[previous];
    let curr = graph.vertices[current];
        next = graph.vertices[next];
    
    let thresh = 0;
    let description;


    /* deur */
    if (curr.type === 'door') {
        description = 'Go through the doors';
    }
    
    /* rechts */
    else if ((curr.y - prev.y < thresh && curr.x - next.x < thresh)
    ||(curr.x - prev.x > thresh && curr.y - next.y < thresh)
    ||(curr.y - prev.y > thresh && curr.x - next.x > thresh)
    ||(curr.x - prev.x < thresh && curr.y - next.y > thresh)
    ) {
        description = 'Turn right';
    }

    /* links */
    else if ((curr.y - prev.y < thresh && curr.x - next.x > thresh)
    || (curr.x - prev.x > thresh && curr.y - next.y > thresh)
    || (curr.y - prev.y > thresh && curr.x - next.x < thresh)
    || (curr.x - prev.x < thresh && curr.y - next.y < thresh)
    ) {
        description = 'Turn left';
    }

    /* rechtdoor */
    else {
        description = 'Go straight on';
    }
    
    return description;
};
function setDescription(description) {
    document.getElementById('description_container').innerHTML = description;
}

function setViewBox(position)
{
    svg.setAttribute('viewBox', `${position.x-100} ${position.y-100} 200 200`);
}

function setButtonVisibility()
{
    /* first step */
    if (currentStep === 0) {
        document.getElementById('previousButton').classList.add('hidden');
        document.getElementById('nextButton').classList.remove('hidden');
    }
    /* last step */
    else if (currentStep === steps.length-1) {
        document.getElementById('previousButton').classList.remove('hidden');
        document.getElementById('nextButton').classList.add('hidden');
    }
    /* other steps */
    else {
        document.getElementById('previousButton').classList.remove('hidden');
        document.getElementById('nextButton').classList.remove('hidden');
    }
}

function updateView(step)
{
    setSVG(step.SVG);
    setRotation(step.rotation);
    setPosition(step.position);
    setDescription(step.description);
    setViewBox(step.position);
    setButtonVisibility();
}

function nextStep() {
    currentStep++;
    document.getElementById('step_number').innerHTML = `Step ${currentStep+1}`;
    updateView(steps[currentStep]);
}

function previousStep() {
    currentStep--;
    document.getElementById('step_number').innerHTML = `Step ${currentStep+1}`;
    updateView(steps[currentStep]);
}



function toggleZoom(){
    if(localStorage.getItem('overviewmode') === 'disabled')
    {
        let z = steps[currentStep].SVG;
        switch(z) {
            case '1':
                svg.setAttribute('viewBox', '300 100 600 600'); 
                break;
            case '2':
                svg.setAttribute('viewBox', '0 -50 900 900'); 
                break;
            case '3':
                svg.setAttribute('viewBox', '-100 80 700 700'); 
                break;
        }
        localStorage.setItem('overviewmode', 'enabled');
    } else {
        localStorage.setItem('overviewmode','disabled');
        svg.setAttribute('viewBox', `${steps[currentStep].position.x-100} ${steps[currentStep].position.y-100} 200 200`); 
    }
}