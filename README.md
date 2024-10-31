# Backend part SHero Web App 🦸
**Description:**
Backend for the superhero database, which provides CRUD functionality for the superhero model and allows the web application to:
- Add, edit, delete and view superheroes.
- Store and process images, display and manage information about heroes.

## 💾 Модель супергероя:
Each superhero contains the following fields:
- **nickname:** the unique nickname of the hero (e.g. Superman)
- **real_name:** real name (e.g. Clark Kent)
- **origin_description:** description of origin
- **superpowers:** list of superpowers
- **catch_phrase:** catchphrase of the hero
- **Images:** set of images of the hero

## 📝 Features
Backend provides the ability to:
- **Create, edit and delete superheroes** with support for uploading and deleting images.
- **Display a list of superheroes:** one image for each hero and their nickname is displayed, paginated with 5 items per page.
- **View superhero details:** all information is displayed, including a gallery of images.

## ⚙️ Technical implementation
- **Express.js:** The server is built on Node.js using Express.js to create a RESTful API.
- **MongoDB:** The superhero data is stored in a MongoDB database, providing fast and reliable data storage.
- **Cloudinary:** Cloudinary is used to store images. When images are uploaded to Cloudinary, a link to the photo is returned, which is stored in the database and used for display.
- **Asynchronous functions:** Implemented using async/await to handle database queries and image uploads, making the server responsive and efficient.
- **Error handling:** All possible errors are handled with informative messages, which simplifies debugging and improves the work with the API.

## 🚀 How to Run the Project:
1. Clone the repository with the backend server.
2. Install dependencies with the **npm install** command.
3. Start the server with the **npm start** command.
   
This will launch the project locally at http://localhost:3000.
To make sure the server is running locally, follow this [link](http://localhost:3000) or you can go to the deployed server using the [link](https://superhero-backend-g2ow.onrender.com/). After launch, the status "Living" will be displayed, confirming a successful connection.
