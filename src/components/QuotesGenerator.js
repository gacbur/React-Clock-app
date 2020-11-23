import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

const QuotesGenerator = () => {

    const [quotes, setQuotes] = useState([])
    const [resetquote, setResetQuote] = useState(false)

    const getRandomQuotes = async () => {
        const API = "https://goquotes-api.herokuapp.com/api/v1/random?count=1"

        const response = await fetch(API)
        const responseJson = await response.json()
        setQuotes(responseJson.quotes)
    }

    useEffect(() => {
        getRandomQuotes()
    }, [resetquote])

    return (
        <div className="quotes-section">
            <div className="quotes">
                {quotes.map(quote => (
                    <>
                        <div className="quotes-text">
                            <p>{quote.text}</p>
                            <h4>{quote.author}</h4>
                        </div>
                    </>
                ))}
                <div className="quotes-reload">
                    <FontAwesomeIcon onClick={() => setResetQuote(prevState => !prevState)} className="quotes-reload-btn" icon={faSyncAlt} />
                </div>
            </div>
        </div>
    );
}

export default QuotesGenerator;