let images = [
    {
        name: "bears-garlic",
        extension: "jpg",
        alt: "A photo of a plant called bear garlic",
        title: "Bear garlic",
        descTitle: "Bear garlic",
        desc: `Allium ursinum, known as wild garlic, ramsons, buckrams, broad-leaved garlic, wood garlic, 
            bear leek or bear's garlic, is a bulbous perennial flowering plant in the amaryllis family Amaryllidaceae. 
            It is a wild relative of onion, native to Europe and Asia, where it grows in moist woodland.`
    },

    {        
        name: "corsica",
        extension: "jpg",
        alt: "A photo of Corsica",
        title: "The wonderful land of Corsica",
        descTitle: "Corsica",
        desc: `Corsica (/ˈkɔːrsɪkə/; French: Corse [kɔʁs]; Corsica in Corsican and Italian, pronounced
            [ˈkorsiɡa] and [ˈkɔrsika] respectively) is an island in the Mediterranean Sea and one of the
            18 regions of France. It is located southeast of the French mainland and west of the Italian
            Peninsula, with the nearest land mass being the Italian island of Sardinia to the immediate
            south. A single chain of mountains makes up two-thirds of the island.`
    },

    {        
        name: "fantasy",
        extension: "jpg",
        alt: "A photo of a fantasy house",
        title: "Some fantasy house",
        descTitle: "The fantasy house",
        desc: `Corsica (/ˈkɔːrsɪkə/; French: Corse [kɔʁs]; Corsica in Corsican and Italian, pronounced
            [ˈkorsiɡa] and [ˈkɔrsika] respectively) is an island in the Mediterranean Sea and one of the
            18 regions of France. It is located southeast of the French mainland and west of the Italian
            Peninsula, with the nearest land mass being the Italian island of Sardinia to the immediate
            south. A single chain of mountains makes up two-thirds of the island.`
    },

    {
        name: "noodles",
        extension: "jpg",
        alt: "A photo of some tasty noodles",
        title: "Wouldn't you taste those...?",
        descTitle: "Wouldn't you taste those...?",
        desc: `Corsica (/ˈkɔːrsɪkə/; French: Corse [kɔʁs]; Corsica in Corsican and Italian, pronounced
            [ˈkorsiɡa] and [ˈkɔrsika] respectively) is an island in the Mediterranean Sea and one of the
            18 regions of France. It is located southeast of the French mainland and west of the Italian
            Peninsula, with the nearest land mass being the Italian island of Sardinia to the immediate
            south. A single chain of mountains makes up two-thirds of the island.`
    },

    {
        name: "norway",
        extension: "jpg",
        alt: "A photo of Norway",
        title: "The diamond of Scandinavia",
        descTitle: "The diamond of Scandinavia",
        desc: `Corsica (/ˈkɔːrsɪkə/; French: Corse [kɔʁs]; Corsica in Corsican and Italian, pronounced
            [ˈkorsiɡa] and [ˈkɔrsika] respectively) is an island in the Mediterranean Sea and one of the
            18 regions of France. It is located southeast of the French mainland and west of the Italian
            Peninsula, with the nearest land mass being the Italian island of Sardinia to the immediate
            south. A single chain of mountains makes up two-thirds of the island.`
    },

    {        
        name: "tortoise",
        extension: "jpg",
        alt: "A photo of a giant tortoise",
        title: "The giant tortoise",
        descTitle: "The giant tortoise",
        desc: `Giant tortoises are from two remote groups of tropical islands: the Aldabra Atoll and 
            Fregate Island in Seychelles and the Galápagos Islands in Ecuador. These tortoises can weigh 
            as much as 417 kg (919 lb) and can grow to be 1.3 m (4 ft 3 in) long. `
    },    
];

let actualIndex = 0;

if ( images.length > 0 ) {    

    setImage();

    images.forEach( image => {        
        createThumbnail(image);
    })

    $(".thumbnail-photo:first-child img").toggleClass("active");

    $(".thumbnail-photo").click( event => {
        $(".active").toggleClass("active");        
        
        let targetTag = $(event.target)
        if( !targetTag.attr("id") ) {
            targetTag.toggleClass("active");
            targetTag = targetTag.parent();
        }
        else {
            targetTag.children().toggleClass("active");
        }
        
        actualIndex = images.findIndex( image => image.name === targetTag.attr("id") );
        setImage();
    })

    $("#left-arrow").click( event => {
        if( actualIndex > 0) {
            actualIndex--;
            
            slideImage();
        }
    })

    $("#right-arrow").click( event => {
        if( actualIndex < (images.length-1) ) {
            actualIndex++;

            slideImage();
        }
    })
}
else {
    console.log("No pictures found");
}


function createThumbnail(image) {
    $(".thumbnail-container").append(`
            <div class="thumbnail-photo" id="${image.name}">
                <img src="photos/${image.name}.${image.extension}" 
                        alt="${image.alt}"
                        title="${image.title}">                
            </div>
        `)
}

function setImage() {
    let image = images[actualIndex];

    $(".image-viewer").html(`
        <img src="photos/${image.name}.${image.extension}" alt="${image.alt}">
        <div class="description">
            <div class="positioner">
                <div class="opaque-background"></div>
                <h1>${image.descTitle}</h1>
                <p>${image.desc}</p>
            </div>
        </div>
    `);
}


function slideImage() {
    setImage();

    $(".active").toggleClass("active");        
    $(`#${ images[actualIndex].name } img`).toggleClass("active");        
}

