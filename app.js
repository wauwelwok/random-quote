var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Tweetbutton() {
    // Todo -add quote to tweet 
    return React.createElement(
        "a",
        { href: "http://twitter.com/intent/tweet", className: "icon", id: "tweet-quote" },
        React.createElement("i", { className: "fab fa-twitter fa-lg" })
    );
}

var Quote = function (_React$Component) {
    _inherits(Quote, _React$Component);

    function Quote() {
        _classCallCheck(this, Quote);

        return _possibleConstructorReturn(this, (Quote.__proto__ || Object.getPrototypeOf(Quote)).apply(this, arguments));
    }

    _createClass(Quote, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "quote" },
                React.createElement(
                    "h1",
                    { id: "text", className: "title" },
                    this.props.quote.text
                ),
                React.createElement(
                    "p",
                    { id: "author", className: "subtitle" },
                    this.props.quote.author
                )
            );
        }
    }]);

    return Quote;
}(React.Component);

var Quotebox = function (_React$Component2) {
    _inherits(Quotebox, _React$Component2);

    function Quotebox(props) {
        _classCallCheck(this, Quotebox);

        var _this2 = _possibleConstructorReturn(this, (Quotebox.__proto__ || Object.getPrototypeOf(Quotebox)).call(this, props));

        _this2.state = {
            //  quote: [text, author] 
            quote: randomQuote()
        };
        return _this2;
    }

    _createClass(Quotebox, [{
        key: "handleClick",
        value: function handleClick() {
            // Set state to new quote, text expects a fetch
            this.setState({
                quote: randomQuote()
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return React.createElement(
                "section",
                { className: "column is-three-fifths is-offset-one-fifth" },
                React.createElement(
                    "div",
                    { "class": "container", id: "quote-box" },
                    React.createElement(Quote, { quote: this.state.quote }),
                    React.createElement(
                        "div",
                        { "class": "level" },
                        React.createElement(Tweetbutton, { quote: this.state.quote }),
                        React.createElement(
                            "button",
                            { id: "new-quote", href: "#", onClick: function onClick() {
                                    return _this3.handleClick();
                                }, className: "button" },
                            "New Quote"
                        )
                    )
                )
            );
        }
    }]);

    return Quotebox;
}(React.Component);

// Render random text + author hardcoded
// To do, change to Random Quote API 


function randomQuote() {
    // Hardcoded quotes
    var quotes = [{
        text: "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.",
        author: "Jesse Owens"
    }, {
        text: "Fall seven times and stand up eight.",
        author: "Japanese Proverb"
    }, {
        text: "You take your life in your own hands, and what happens? A terrible thing, no one to blame.",
        author: "Erica Jong"
    }];
    // Hardcoded 0 -> 2
    var random = Math.floor(Math.random() * 3);
    return quotes[random];
}

var element = React.createElement(Quotebox, null);

ReactDOM.render(element, document.getElementById('root'));