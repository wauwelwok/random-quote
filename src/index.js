import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function TweetButton(props) {
    // Add quote to twitter.com/intent/tweet link
    const tweet = `http://twitter.com/intent/tweet?text="${props.quote.text}" -${props.quote.author}&hashtags=quotes`
    return (
        <a  href={tweet} className="icon" id="tweet-quote" title="Tweet this quote!"><i className="fab fa-twitter fa-lg"></i></a>
    )
}

function Quote(props) {
    return (
        <div className="quote">
            <h1 id="text" className="title">"{props.quote.text}"</h1>
            <p id="author" className="subtitle">{props.quote.author}</p>
        </div>
    )
}

class QuoteBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: {}
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // Set a random quote when component gets loaded for first time
        this.fetchQuote();
    }

    handleClick() {
        this.fetchQuote();
    }

    fetchQuote() {
        fetch('https://api.quotable.io/random')
        .then((res) => res.json())
        .then((data) => {
             
            this.setState({
                quote: {"text": data.content, "author": data.author}
            })
        })   
        .catch(console.log)
    }
    
    render() {
        console.log(this.state.quote)
        return (            
            <section className="column is-three-fifths is-offset-one-fifth">
                <div className="container" id="quote-box">
                    <Quote quote={this.state.quote} />
                    <div className="level">
                        <TweetButton quote={this.state.quote} />
                        <button id="new-quote" href="#" onClick={this.handleClick} className="button">New Quote</button>   
                    </div>       
                </div>  
            </section>
        )
    }
}

ReactDOM.render(
    <QuoteBox />,
    document.getElementById('root')
);