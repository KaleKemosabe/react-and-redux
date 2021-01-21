import React from 'react';
import Article from '../Article/Article';

const Main = () => {
    return (
        <main className="bg">
            <section className="hero-text">
                <h1 className="hero-heading">Hello, it's good to meet you!</h1>
                <h2 className="hero-punchline">Business Wolf Consulting Services is all about raw business execution.</h2>
            </section>
            <Article />
        </main>
    );
};

export default Main;