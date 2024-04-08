                                                                                                                                               /* STEP 2: Bind the HEADER and the SECTION elements above to variables */
const header = document.querySelector("header");
const section = document.querySelector("section");

// STEP 3a: Create the asynchronous function populate()
async function populate() {
    // STEP 4b: Store the URL of a JSON file in a variable
    const url = "https://pralavadhi.github.io/Lab4-Client-Side-JavaScript/js/i-scream.json";
    // STEP 5: Use the new URL to create a new request object
    const request = new Request(url);
    // STEP 6: Make a network request with the fetch() function, which returns a Response object
    const response = await fetch(request);
    // STEP 7: Capture the returned Response object and convert to a JSON object using json()
    const responseJson = await response.json();
    // STEP 8: Output the iScream JSON object to the console 
    console.log(responseJson);
    // STEP 9a: Invoke the populateHeader function here, then build it below
    populateHeader(responseJson);
    // STEP 10a: Invoke the showTopFlavors function here, then build it below
    showTopFlavors(responseJson);
}

// STEP 3b: Call the populate() function
populate();

/* STEP 9b: Build out the populateHeader() function */
function populateHeader(jsonData) {
    // Create the H1 element
    let h1 = document.createElement("h1"); 
    // Grab the company name from the JSON object and use it for the text node
    h1.textContent = jsonData.companyName;
    // Inject the complete H1 element into the DOM, inside the HEADER
    header.appendChild(h1);
}

/* STEP 10b: Assemble the showTopFlavors() function */
function showTopFlavors(jsonData) {
    // Bind the JSON topFlavors object to a variable
    let topFlavors = jsonData.topFlavors;
    // Loop through the topFlavors object
    for (let i = 0; i < topFlavors.length; i++) {
        // build HTML elements for the content: article, h2, image, p1, p2, list
        let article = document.createElement("article");
        let h2 = document.createElement("h2");
        let image = document.createElement("img");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let list = document.createElement("ul");
        
        // Set the textContent property for each of the above elements (except the UL), based on the JSON content
        h2.textContent = topFlavors[i].name;
        p1.textContent = "Calories: " + topFlavors[i].calories;
        p2.textContent = "Type: " + topFlavors[i].type;
        image.setAttribute("src", topFlavors[i].image);
        
        // Build a loop for the ingredients array in the JSON
        let ingredients = topFlavors[i].ingredients;
        for (let j = 0; j < ingredients.length; j++) {
            let listItem = document.createElement("li");
            listItem.textContent = ingredients[j];
            list.appendChild(listItem);
        }
        
        // Append each complete ARTICLE element to the SECTION element
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(image);
        article.appendChild(list);

        section.appendChild(article);
    }
}

// Lab: Extend the JavaScript application built in class to include two more flavors of ice cream.
const newFlavor1 = {
    "name": "Strawberry Delight",
    "calories": 350,
    "type": "Gelato",
    "ingredients": ["Strawberry", "Milk", "Sugar"],
    "image": "https://pralavadhi.github.io/Lab4-Client-Side-JavaScript/images/ice-cream-xtra1.svg"
};

const newFlavor2 = {
    "name": "Mint Chocolate Chip",
    "calories": 350,
    "type": "Gelato",
    "ingredients": ["Strawberry", "Milk", "Sugar"],
    "image": "https://pralavadhi.github.io/Lab4-Client-Side-JavaScript/images/ice-cream-xtra2.svg"
};

// Add the new flavors to the topFlavors array
responseJson.topFlavors.push(newFlavor1);
responseJson.topFlavors.push(newFlavor2);

// Call populate() again to display the new flavors
populate();

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// A special thanks to https://openclipart.org/detail/285225/ice-cream-cones for the awesome ice cream cone illustrations