const apiURL = 'https://dummyjson.com/quotes/random';
        let quote = document.getElementById("quote");
        let writer = document.getElementById("writer");

        async function quoteCreate() {
            let response  = await fetch(apiURL);
            let data = await response.json();
            quote.innerHTML = data.quote;
            writer.innerHTML = "-- "+ data.author;
        }
