import React, { Component } from 'react';

class Article extends Component {
    state = {
        votes: 100,
    };

    addVotesHandler = () => {
        this.setState({
            votes: this.state.votes + 1,
        });
        console.log('button works');
    };

    render() {
        return (
            <div>
                <p className="likes">Paw to like us {this.state.votes} times or more.</p>
                <div className="btn">
                    <button onClick={this.addVotesHandler}><i class="fas fa-paw fa-2x"></i></button>
                    {/* <button>Learn more</button> */}
                </div>
            </div>
        );
    }
}

export default Article;