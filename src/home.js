let container = document.getElementById('content');

let homeContent = document.createElement('div');
homeContent.innerHTML = 
    `
    
    <h1>Leo's linguinis</h1>
    <p>
    At Leo's linguinis, we believe in the best and source all ingredients from only the finest farms with organic non-gmo vegetables blah blah blah blah blah blah blah blah blah blah blah blah
    blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
    </p>
    
    
    `;

container.appendChild(homeContent);

export { homeContent };