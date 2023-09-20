

tickets={
    "Paris":"Skopj",
    "Zurich":"Amsterdam",
    "Prague":"Zurich",
    "Barcelon":"Berlin",
    "Kiev": "Prague",
    "Skojp":"Paris",
    "Amsterdam":"Barcelona",
    "Berlin":"Amsterdam",
}

visited_city={
   "Kiev":false,
   "Amsterdam" :false,
   "Zurich":false,
   "Prague":false,
   "Berlin":false,
   "Barcelona":false,
}

count=0

cur_city="Kiev"
ans=""

while(count<6){
    count++
    visited_city[cur_city]=true
    ans=ans+cur_city 
    ans=ans+"->"
    cur_city=tickets[cur_city]
}

console.log(ans)