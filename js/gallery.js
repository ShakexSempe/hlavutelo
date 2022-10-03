const menu = [
    {
        id: 1,
        title: "Indoor Stone-cladding",
        category: "stone-cladding",
        img: "../img/indoor-stone-cladding-1.jpg",
        desc: `rem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        saepe, odio totam sunt ab ratione sit vel ex`,
    },
    {
        id: 2,
        title: "Indoor Stone-cladding",
        category: "stone-cladding",
        img: "../img/indoor-stone-cladding-2.jpg",
        desc: `rem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        saepe, odio totam sunt ab ratione sit vel ex`,
    },
    {
        id: 3,
        title: "Indoor Stone-cladding",
        category: "stone-cladding",
        img: "../img/indoor-stone-cladding-3.jpg",
        desc: `rem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        saepe, odio totam sunt ab ratione sit vel ex`,
    },
    {
        id: 4,
        title: "Indoor tiles",
        category: "tiles",
        img: "../img/indoor-tiles-1.jpg",
        desc: `rem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        saepe, odio totam sunt ab ratione sit vel ex`,
    },
    {
        id: 5,
        title: "Indoor tiles",
        category: "tiles",
        img: "../img/indoor-tiles-2.jpg",
        desc: `rem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        saepe, odio totam sunt ab ratione sit vel ex`,
    },
    {
        id: 6,
        title: "Indoor tiles",
        category: "tiles",
        img: "../img/indoor-tiles-3.jpg",
        desc: `rem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        saepe, odio totam sunt ab ratione sit vel ex`,
    },
    {
        id: 7,
        title: "outdoor tiles",
        category: "tiles",
        img: "../img/outdoor-tiles-1.jpg",
        desc: `rem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        saepe, odio totam sunt ab ratione sit vel ex`,
    },
    {
        id: 8,
        title: "outdoor tiles",
        category: "tiles",
        img: "../img/outdoor-tiles-2.jpg",
        desc: `rem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        saepe, odio totam sunt ab ratione sit vel ex`,
    },
    {
        id: 9,
        title: "outdoor tiles",
        category: "tiles",
        img: "../img/outdoor-tiles-3.jpg",
        desc: `rem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        saepe, odio totam sunt ab ratione sit vel ex`,
    },
    {
        id: 10,
        title: "building construction",
        category: "building",
        img: "../img/building-1.jpg",
        desc: `rem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        saepe, odio totam sunt ab ratione sit vel ex`,
    },
    {
        id: 11,
        title: "building construction",
        category: "building",
        img: "../img/building-2.jpg",
        desc: `rem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        saepe, odio totam sunt ab ratione sit vel ex`,
    },
    {
        id: 12,
        title: "building construction",
        category: "building",
        img: "../img/building-3.jpg",
        desc: `rem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        saepe, odio totam sunt ab ratione sit vel ex`,
    },
];

const galleryCenter = document.querySelector('.gallery-center');
const btnContainer = document.querySelector('.btn-container');

console.log(btnContainer);

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
    displayMenuButtons();
});

displayMenuItems = (menuItems) => {
    let displayMenu = menuItems.map(item => {
        return `<article class="gallery-item">
        <img src=${item.img} class="photo" alt="menu item">
        <div class="item-info">
            <div class="item-title">
                <h2>${item.title}</h2>
                <p class="title-info">${item.category}</p>
            </div>
            
        </div>
    </article>`
    });

    displayMenu = displayMenu.join("");
    galleryCenter.innerHTML = displayMenu;
};

displayMenuButtons = () => {
    const categories = menu.reduce((values, item) => {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ['all']);

    //load category buttons by wrapping each category value in the html 
    const categoryButtons = categories.map(category => {
        return `<button class="filter-btn" 
    type="button" 
    data-id=${category}>
    ${category}
    </button>`
    }).join("");

    btnContainer.innerHTML = categoryButtons;

    const filterButtons = document.querySelectorAll('.filter-btn');

//filter items
filterButtons.forEach(btn => {
    btn.addEventListener('click', e => {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(menuItem => {

            if (menuItem.category === category) {
                return menuItem
            }
        });

        if (category === 'all') {
            displayMenuItems(menu)
        } else {
            displayMenuItems(menuCategory);
        }
    });
});
}

