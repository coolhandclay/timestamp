# Clay's Timestamp Microservice

<div class="container">
            <blockquote>
                Current features:
                <ul>1) You can pass a parameter, and it will check to see whether that parameter
                contains either a unix timestamp or a natural language date (example: January 1, 2016)</ul>
                <ul>2) If it does, it returns both the Unix timestamp and the natural language form of that date in JSON.</ul>
                <ul>3) If it does not contain a date or Unix timestamp, it returns null for those properties.</ul>
                <ul>4) To return to these instructions don't include a parameter</ul>
            </blockquote>
            <h3>Example usage:</h3>
            <code>https://fcc-timestamp-ms9.herokuapp.com/December%2015,%202015</code><br>
            <code>https://fcc-timestamp-ms9.herokuapp.com/1450137600</code>
            <h3>Example output:</h3>
            <code>
                {
                  "date": "12/15/15",
                  "unixtime": "1450137600"
                }
            </code>
        </div>
