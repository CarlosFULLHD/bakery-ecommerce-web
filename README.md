# Bakery Shop - Agape | Pasteleria Apage

## Project Overview

This project is an MVP (Minimum Viable Product) for a pastry shop web application. The application will allow users to view categories of pastries, see details of individual products, add items to a shopping cart, and proceed to checkout with various payment options. This README covers the initial setup and the features that will be developed.

### Problems in this Case:
- **Lack of Menu Visibility**: There's no easy way for the bakery to share its menu with customers.
- **Limited Price Accessibility**: Customers cannot easily access product prices without directly messaging the bakery.
- **Order Confirmation Confusion**: There is often confusion and miscommunication regarding order confirmations.
- **Website Usability Issues**: Existing bakery web pages are slow and complicated, making it difficult for customers to place orders.

### Value Proposition:
- **Personalized Menu**: Create a personalized and easily accessible menu for the bakery, categorized by product types.
- **Fast and Reliable Image Delivery**: Implement a fast and reliable image CDN (Content Delivery Network) using AWS to ensure quick loading times and high-quality images.
- **Efficient Shopping Cart**: Develop a shopping cart feature that allows customers to add multiple products, specify quantities, and create an order seamlessly.
- **Seamless Order Confirmation**: Ensure order confirmation and information are sent directly to the customer's WhatsApp. After making an order on the web page, the user will be able to view their order details and send a confirmation message to the bakery's WhatsApp, enhancing communication and reducing errors.



## Features

### Initial Phase: Menu with Categories and Products
- **Home Page**: Welcome page with a navbar and links to categories.
- **Category Page**: Displays all product categories.
- **Product List Page**: Shows products under a selected category.
- **Product Detail Page**: Provides detailed information about a specific product, including images, description, price, and a link to view the image in HD.

### Future Phases: Shopping Cart, Orders, and Payments
- **Shopping Cart**: Users can add products to the cart, view the cart, and proceed to checkout.
- **Checkout Page**: Users provide their contact details, choose delivery options, and make payments (credit card and QR).
- **Order Confirmation**: Displays a summary of the order and sends details to the business's WhatsApp for confirmation.

## Folder Structure

```
/my-pastry-shop
├── /app
│   ├── /categories
│   │   ├── /[categoryId]
│   │   │   └── page.js
│   │   └── page.js
│   ├── /product
│   │   ├── /[productId]
│   │   │   └── page.js
│   └── page.js
├── /components
│   ├── CategoryList.js
│   ├── ProductList.js
│   ├── ProductCard.js
│   └── Navbar.js
├── /public
│   ├── images
│   │   ├── product1.webp
│   │   └── product1-hd.webp
├── /styles
│   └── globals.css
├── /utils
│   └── data.js
├── package.json
└── next.config.js
```

## File Descriptions

### `app/page.js`
The homepage which includes a navbar and a list of categories.

### `app/categories/page.js`
Displays all the categories available in the pastry shop.

### `app/categories/[categoryId]/page.js`
Shows all the products in a specific category.

### `app/product/[productId]/page.js`
Displays detailed information about a specific product, including an option to view the image in HD.

### `components/CategoryList.js`
Component to list all categories.

### `components/ProductList.js`
Component to list all products in a specific category.

### `components/ProductCard.js`
Component to display a single product's brief details.

### `components/Navbar.js`
Component for the navigation bar.

### `utils/data.js`
Contains sample data for categories and products, and functions to retrieve this data.

### `styles/globals.css`
Global CSS styles for the application.

### `package.json`
Project configuration file, including dependencies and scripts.

### `next.config.js`
Configuration for Next.js.

## Setup and Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/my-pastry-shop.git
   cd my-pastry-shop
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open the application in your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Future Enhancements

### Shopping Cart
- Allow users to add products to a shopping cart.
- Display the contents of the shopping cart with the ability to update quantities or remove items.

### Checkout
- Collect user information (name, phone, address).
- Offer delivery options (fixed locations with prices or custom delivery with coordination).
- Process payments via credit card or QR code.

### Order Confirmation
- Summarize the order details.
- Send order details to the business's WhatsApp.
- Display a confirmation message to the user.

## Contact

For any questions or suggestions, please reach out to [Your Email].

# bakery-ecommerce-web
