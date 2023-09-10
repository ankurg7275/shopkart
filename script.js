const navbar = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    {
        name: 'Our Products',
        id: 'product',
    },
    { name: 'Contact Us', id: 'contact' },
];

// Function to generate the menu items
function generateMenuItems(menuArray, parentElementId) {
    let menuHtml = '';

    menuArray.forEach(item => {
        menuHtml += '<li>';
        menuHtml += '<a href="#' + item.id + '">' + item.name + '</a>';

        if (item.child && item.child.length > 0) {
            menuHtml += '<ul>';
            menuHtml += generateMenuItems(item.child);
            menuHtml += '</ul>';
        }

        menuHtml += '</li>';
    });

    document.getElementById("navbar").innerHTML = menuHtml;
}

// Call the function to generate the menu
generateMenuItems(navbar, 'navbar');

const nameField = document.getElementById('name');
        const emailField = document.getElementById('email');
        const messageField = document.getElementById('message');
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');
        
        // Function to validate name
        function validateName() {
            if (nameField.value.trim() === '') {
                nameError.textContent = 'Name is required.';
            } else {
                nameError.textContent = '';
            }
        }
        
        // Function to validate email
        function validateEmail() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailField.value)) {
                emailError.textContent = 'Please enter a valid email address.';
            } else {
                emailError.textContent = '';
            }
        }
        
        // Function to validate message
        function validateMessage() {
            if (messageField.value.trim() === '') {
                messageError.textContent = 'Message is required.';
            } else {
                messageError.textContent = '';
            }
        }
        
        // Attach event listeners for real-time validation
        nameField.addEventListener('input', validateName);
        emailField.addEventListener('input', validateEmail);
        messageField.addEventListener('input', validateMessage);

        // Function to fetch and display products
async function displayProducts() {
    const productListDiv = document.getElementById('product-list');

    try {
        // Fetch data from the API
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();

        // Limit the number of products to 3
        const limitedProducts = products.slice(0, 3);

        // Loop through limited products and create product cards
        limitedProducts.forEach((product) => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>Suffered alteration in some form,</p>
                <p>bysuffalterattion in some forms,byinjected</p>
                <p>humor, or randomised</p>
                <h2>$${product.price.toFixed(2)}</h2>
            `;
            productListDiv.appendChild(productCard);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the displayProducts function to show the products
displayProducts();





