import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Tweetbutton(props) {
    // Add quote to twitter.com/intent/tweet link
    const tweet = `http://twitter.com/intent/tweet?text="${props.quote.text}" -${props.quote.author}&hashtags=quotes`
    return (
        <a  href={tweet} className="icon" id="tweet-quote" title="Tweet this quote!"><i className="fab fa-twitter fa-lg"></i></a>
    )
}

class Quote extends React.Component {
    render() {
        return (
            <div className="quote">
                <h1 id="text" className="title" >"{this.props.quote.text}"</h1>
                <p id="author" className="subtitle">{this.props.quote.author}</p>
            </div>
        )
    }
}

class Quotebox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: {}
        }
        //this.componentDidMount = this.componentDidMount.bind(this)
        //bind this here
    }

    componentDidMount() {
        // Set a random quote when component gets loaded for first time
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
        
    handleClick() {
        this.fetchQuote();
    }

    
    render() {
        console.log(this.state.quote)
        return (            
            <section className="column is-three-fifths is-offset-one-fifth">
                <div className="container" id="quote-box">
                        <Quote quote={this.state.quote} />
                        <div className="level">
                            <Tweetbutton quote={this.state.quote}/>
                            <button id="new-quote" href="#" onClick={() => this.handleClick()} className="button">New Quote</button>
                         </div>
                    </div>
                
            </section>
        )
    }
}

// Render random text + author hardcoded
// To do, change to Random Quote API 
function randomQuote() {
    // Hardcoded quotes
    const quotes = [{
        text: "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
        author: "Jesse Owens"
    },{
        text: "Fall seven times and stand up eight.",
        author: "Japanese Proverb"
    },{
        text: "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
        author: "Erica Jong"
    }]
    // Hardcoded 0 -> 2
    const random = Math.floor(Math.random() * 3)
    return quotes[random]
}

const element = <Quotebox />

ReactDOM.render(
    element,
    //<FetchQuote />,
    document.getElementById('root')
);