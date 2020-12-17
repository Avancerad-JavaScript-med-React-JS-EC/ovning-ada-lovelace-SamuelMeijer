// IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
// Modules
import Image from './Image.js'
import About from './About.js'

function App () {
    return (
        <section>
            <h2>Ada Lovelace</h2>
            <Image />
            <About />
        </section>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));