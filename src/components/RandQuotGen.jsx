import { useEffect, useState } from "react"

function RandQuotGen() {
    let quotes = [
        "Be the change you wish to see in the world." ,
        "The only limit to our realization of tomorrow will be our doubts of today." ,
        "Embrace the glorious mess that you are." ,
        "Life is short, and it's up to you to make it sweet." ,
        "In the middle of difficulty lies opportunity." ,
        "Do more things that make you forget to check your phone.",
        "Dream big, work hard, stay focused.",
        "Your vibe attracts your tribe.",
        "Every moment is a fresh beginning." ,
        "Happiness is not by chance, but by choice."
    ]

    const [quote,setQuote] = useState(quotes[0])



        

    useEffect(()=>{
        console.log('i got ran');
    },[quote])




    function gen() {
        const randoc = quotes[Math.floor(Math.random()*quotes.length)]
        setQuote(randoc)
    }

    return (
<center>

        <div>
            {quote}
            <br />
            <button onClick={gen}>generate</button>
        </div>
</center>
    )
}


export default RandQuotGen