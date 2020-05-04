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
        //  quote: [text, author] 
            quote: randomQuote(),
        }
    }

    handleClick() {
        // Set state to new quote, text expects a fetch
        this.setState({
            quote: randomQuote()
        })
    }
    
    render() {
        return (
            <section className="column is-three-fifths is-offset-one-fifth">
                <div class="container" id="quote-box">
                        <Quote quote={this.state.quote} />
                        <div class="level">
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
    document.getElementById('root')
);