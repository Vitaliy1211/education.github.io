import React, {useState} from "react";
import Counter from "./components/Counter";
import "./styles/App.css";
import PostList from "./components/PostList";

function App() {
    const [posts, setPosts] = useState([
        {id:1, title: 'JavaScript', body:'это язык програмирования'},
        {id:2, title: 'React', body:'это библиотека JavaScript для разработки пользовательского интерфейса'},
        {id:3, title: 'Angular', body:'это фреймворк'}
    ])

  return (
    <div className="App">
        <Counter/>
        <PostList posts={posts} title='Список постов 1'/>

    </div>
  );
}

export default App;
