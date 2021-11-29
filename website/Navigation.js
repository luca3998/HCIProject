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


/**
 * Draw the shortest path on our svg canvas
 * Algorithm will be triggered when one of the input box values changes
 */
const svg = document.getElementById('svg');

/* svg namespace */
const svgns = "http://www.w3.org/2000/svg";

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
        svg.appendChild(l);
    }
}

// /* some eventListeners to display dijkstra output */
// document.querySelectorAll('input').forEach(element => {
//     element.addEventListener('change', event => {
//         /* get start and end values */
//         let start = document.getElementById('start').value;
//         let end = document.getElementById('end').value;

//         drawpath(shortestPath(start,end));
//     });
// });

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
        svg.setAttribute("viewBox", "300 100 600 600"); 
        localStorage.setItem("overviewmode", "enabled");
    } else{
        svg.setAttribute("viewBox", "400 300 300 300"); 
        localStorage.setItem("overviewmode","disabled");
    }
}

