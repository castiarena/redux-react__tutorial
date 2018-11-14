import React from 'react';
import './App.css';
import List from '../List'
import Form from "../Form";

const App = () => (
    <main className='app-wrapper row'>
        <div className="col-lg-4 offset-md-1">
            <List/>
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>Add a new article</h2>
            <Form/>
        </div>
    </main>
);

export default App;
