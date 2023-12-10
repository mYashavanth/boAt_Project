# boAt Clone App

An interactive clone of the boAt website with a focus on showcasing audio products.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Demo](#demo)
- [Screenshots](#screenshots)
- [Navigation Bar](#navigation-bar)
- [Landing Page Components](#landing-page-components)
  - [Image Slider](#image-slider)
  - [Product Videos](#product-videos)
- [Categories and Product Pages](#categories-and-product-pages)
  - [Category Section](#category-section)
  - [Product View](#product-view)
  - [Product Details](#product-details)
- [FAQ Section](#faq-section)
- [Adding to Cart](#adding-to-cart)
- [Search Bar](#search-bar)
- [Cart Functionality](#cart-functionality)
- [Order Process](#order-process)
- [Login](#login)
- [Footer](#footer)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Overview

Welcome to the boAt Clone App! This project aims to replicate the boAt website, providing a user-friendly interface for exploring and discovering audio products.

## Features

- Browse and view a variety of audio products.
- Detailed product pages with specifications and images.
- User authentication for personalized experiences.
- Cart functionality for adding products and making purchases.
- Responsive design for a seamless experience across devices.

## Technologies Used

- HTML
- CSS
- JavaScript
- React
- Chakra UI
- Vercel

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mYashavanth/boAt_Project.git

2. **Install dependencies:**

    ```bash
    npm install
3. **Run the application:**

    ```bash
    npm start
- This will launch the application on http://localhost:3000.

## Demo
Check out the live demo of the boAt Clone App here.
[Visit Demo](https://bo-at-project.vercel.app/products)


## Screenshots
![Landing](./final%20images/LandingPage.png)
![Landing](./final%20images/ProductVideos.png)
![Landing](./final%20images/Footer.png)
![Landing](./final%20images/Categories.png)
![Landing](./final%20images/Products.png)
![Landing](./final%20images/AddtoCart.png)
![Landing](./final%20images/ProductDetails.png)
![Landing](./final%20images/Login.png)
![Landing](./final%20images/LoginPage.png)
![Landing](./final%20images/Cart.png)
![Landing](./final%20images/LoginFromCart.png)
![Landing](./final%20images/AfterLoginInCart.png)
![Landing](./final%20images/finalStepinOrder.png)

## Navigation Bar
The navigation bar is available across all pages and includes various elements for easy navigation.

## Landing Page Components
### Image Slider
The landing page features an image slider that automatically transitions between images and allows users to manually navigate using next and previous buttons.

### Product Videos
A section showcasing product videos. Videos play on hover, providing an engaging preview of featured products.

## Categories and Product Pages 
### Category Section
Hovering over the category section reveals details about all available categories. Clicking on a category redirects to the categories page.

### Product View
On the category page, each product has a "View Product" button. Clicking on this button redirects users to the product details page.

### Product Details
The product details page provides comprehensive information about a specific product. Users can add the product to their cart if available. If the product is out of stock, a "Notify Me" button is displayed. Clicking on this button prompts users to enter their mobile number, and upon submission, they are notified when the product becomes available.

### FAQ Section
The products page includes a FAQ section that provides answers to common questions. Users can find detailed information about product-related queries in this section.

## Adding to Cart
From the product details page, users can directly add the product to their cart by clicking the "Add to Cart" button. This streamlines the shopping experience for users interested in purchasing the product immediately.

## Search Bar
The search bar allows users to search for specific products. On submitting a search query, users are redirected to the products page, where they can find relevant products based on their search.

## Cart Functionality
Clicking on the cart icon opens a drawer displaying all the products added to the cart. Users can remove items directly from the cart. If the customer is logged in, they can proceed to the order directly. Otherwise, they can log in from the cart and continue with the order process.

## Order Process
After reviewing the cart, customers can click the "Order" button. This redirects them to a page displaying the order summary and asking for customer details. Once the details are provided, customers can place the order, and the products will be delivered to the specified address.

## Login
Clicking on the login icon in the navigation bar opens a login modal or page. Users can enter their credentials to log in and access personalized features.

### Footer
The footer component contains essential links, information, and contact details.