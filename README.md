# BlogBoost

BlogBoost is a dynamic and interactive blogging platform that allows users to read blogs, like them, and add comments. It offers an engaging user experience with real-time like counts and comment submissions. Users can view blogs, comment on them, and enjoy a "celebration" effect when they like a post.

In addition to the basic functionality, BlogBoost supports **CRUD** operations for blogs: Create, Read, Update, and Delete.

## Features
- **Create Blog Posts**: Users can add new blog posts with titles, descriptions, and content.
- **Read Blog Posts**: View blog posts with content, title, and description.
- **Update Blog Posts**: Users can edit blog posts after they have been created.
- **Delete Blog Posts**: Users can delete blog posts they no longer want to keep.
- **Like Button**: Users can like a blog post. The heart icon changes color, and the like count updates dynamically.
- **Comment System**: Users can add comments on blog posts, with their comments stored in local storage and associated with the blog post.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Celebration Effect**: When a blog is liked, a smooth animation effect is shown to indicate the like action.

## Demo

You can see the live version of BlogBoost (if available) here: [BlogBoost Live](#https://vercel.com/swathi-jettiboinas-projects/blog-boost-react-app)

## Technologies Used

- **React**: The frontend is built using React to manage the UI and state of the application.
- **Tailwind CSS**: Used for styling the UI components with a responsive and modern design.
- **LocalStorage**: Used to store blog posts and comments persistently.
- **Lucide React**: For rendering icons (like the heart icon for likes).

## Installation

Follow these steps to get a local copy up and running:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/blogboost.git
    ```

2. Navigate to the project directory:
    ```bash
    cd blogboost
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Run the development server:
    ```bash
    npm start
    ```

   This will start the app in development mode and open it in your browser at [http://localhost:3000](http://localhost:3000).

## Usage

### CRUD Operations

- **Create a Blog**: 
  - Users can add a new blog by filling in the title, description, and content.
  - The new blog is stored in localStorage and displayed on the homepage.
  
- **Read Blogs**:
  - Clicking on a blog title opens the full blog post with the option to like, comment, and see more details.
  
- **Update a Blog**:
  - Users can edit a blog after it has been created, updating its title, description, and content.

- **Delete a Blog**:
  - Users can delete blogs they no longer wish to keep. Once deleted, the blog is removed from the display and the localStorage.

- **Liking a Blog**:
  - Clicking the heart icon likes the blog post. The heart turns red, and the like count updates.
  
- **Commenting on Blogs**:
  - Users can add comments to each blog, and those comments are saved in localStorage.

## Contribution

Contributions are welcome! If you'd like to contribute to BlogBoost, feel free to fork the repository and submit a pull request. Here's how you can contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new pull request.
