# React CRUD App using JSONPlaceholder API

This is a simple CRUD (Create, Read, Update, Delete) application built with **React**. It uses the [JSONPlaceholder](https://jsonplaceholder.typicode.com) API to simulate interactions with a backend server.

## 📌 Features

- Fetch and display a list of posts
- Add a new post
- Edit an existing post
- Delete a post
- Responsive UI built with React

## 🚀 Tech Stack

- React (with Hooks)
- Axios (for API requests)
- CSS (or use Tailwind/Bootstrap if added)
- JSONPlaceholder REST API

## 🔗 API Used

Base URL: `https://jsonplaceholder.typicode.comd`

Example Endpoints:

- `GET /posts` – Fetch all posts
- `GET /posts/:id` – Fetch single post
- `POST /posts` – Create a new post
- `PUT /posts/:id` – Update a post
- `DELETE /posts/:id` – Delete a post

> ⚠️ Note: JSONPlaceholder doesn’t persist changes. POST, PUT, and DELETE requests will respond successfully but won’t reflect actual changes in the backend.

## 📂 Project Structure

```
crud-react-app/
├── public/
├── src/
│ ├── components/
│ │ ├── PostList.js
│ │ ├── PostForm.js
│ ├── App.js
│ ├── index.js
│ └── api.js
├── package.json
└── README.md
```

## 🧩 Sample Code Snippet
Axios API file (api.js)

```bash
import axios from 'axios';

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});
```

### Fetching Posts
```bash
useEffect(() => {
  const fetchPosts = async () => {
    const response = await api.get('/posts');
    setPosts(response.data);
  };
  fetchPosts();
}, []);
```