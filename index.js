const url = "http://localhost:3000/characters"


//server test complete!
fetch(url)
.then(response => response.json())
.then(data => console.log(data))