import React, {useState} from 'react';

import Post from './Post'
import Header from './Header';
import { ThemeProvider } from './ThemeContext';

function App() {
    const [posts, setPosts] = useState(
        [
            {
                id: Math.random(),
                likes: 20,
                title: 'Titulo da notícia 1',
                subtitle: 'Subtítulo da notícia 1',
                read: false
            },
            {
                id: Math.random(),
                likes: 10,
                title: 'Titulo da notícia 2',
                subtitle: 'Subtítulo da notícia 2',
                read: true
            },
            {
                id: Math.random(),
                likes: 50,
                title: 'Titulo da notícia 3',
                subtitle: 'Subtítulo da notícia 3',
                read: false
            },
        ]
    );
    function handleRefresh() {
        setPosts((prevState) =>[
            ...prevState,
            {
                id: Math.random(),
                likes: 50,
                title: `Titulo da notícia ${prevState.length + 1} `,
                subtitle: `Subtítulo da notícia ${prevState.length + 1} `,
                read: false
            }            
        ]);
    }
    function handleRemovePost(postId) {
       setPosts((prevState) => 
            (prevState.filter((postItem) => postItem.id !== postId)
       ));
    }
    function handleReadPost(postId) {
        const antState = [...posts]
        antState.map((post) => {
            if(post.id === postId) {post.read=!post.read}
        });
        setPosts([...antState]);
    }
    return  (
        <ThemeProvider>
            <Header>
                <h2>
                    Posts da semana
                    <button onClick={handleRefresh}>Atualizar</button>
                </h2>
            </Header> 
                
            <hr/>
            <br/>

            { posts.map(postItem =>
                <Post         
                    key={postItem.id}            
                    onRemove={handleRemovePost}
                    onRead={handleReadPost}
                    post={postItem}
                />
            )}

        </ThemeProvider>
    )
}

export default App;