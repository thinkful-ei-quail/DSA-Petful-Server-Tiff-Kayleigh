# FIFO Adoption  
### by [Tiffany Summerford](https://github.com/breakfastatiffs) and [Kayleigh Young](https://github.com/kayleighkat98)  
[Petful Adoption](https://petful-client-peach.vercel.app/) ||
[Client GitHub](https://github.com/thinkful-ei-quail/DSA-Petful-Client-kay-tiff) ||
[Server GitHub](https://github.com/thinkful-ei-quail/DSA-Petful-Server-Tiff-Kayleigh)  
 
## About:  
FIFO Adoption is an adoption agency app that uses singly linked lists to adopt out pets on a first-come first-serve basis. By signing up for adoption, a user will be added to a list and will then be able to adopt a pet based on the oldest pet available at the time.  
## API Endpoints:  


### GET '/people'
The GET '/people' endpoint is designed to GET adoptees names from the server.
```json
{
    ["Jane Doe"]
}
```
Successful GET's return a `200 OK`.  

### GET '/pets'
The GET '/pets' endpoint is designed to GET pets data from the server.
```json
{
    age: 2,
    breed: "Tabby",
    description: "Orange bengal cat with black stripes  lounging on concrete.",
    gender: "Female",
    imageURL: "https://images.pexels.com/photos/774731/ pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&  dpr=1&w=500",
    name: "Daisy",
    story: "Thrown on the street"
}
```
Successful GET's return a `200 OK`.  

### DELETE '/people'
The DELETE '/people' endpoint is designed to remove adoptees from the list.
```json
{
    ["Jane Doe"]
}
```
Successful DELETE's return a `204 OK`.  

### DELETE '/pets'
The DELETE '/pets' endpoint is designed to remove pets (cats or dogs) from the list.
```json
{
    {
    age: 2,
    breed: "Tabby",
    description: "Orange bengal cat with black stripes  lounging on concrete.",
    gender: "Female",
    imageURL: "https://images.pexels.com/photos/774731/ pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&  dpr=1&w=500",
    name: "Daisy",
    story: "Thrown on the street"
}
}
```
Successful DELETE's return a `204 OK`. 

### POST '/people'
The POST '/people' endpoint is designed to add new adoptees to the server. Once somebody is signed up, a cat or dog is adopted every 5 seconds, until it's the adoptees turn to go.  
```json
{
    ["Jane Doe"]
}
```
Successful POST's return a `201 OK`.  

## Tech Stack:  
Front End: React, JavaScript, CSS3, HTML5, Vercel
Back End: Node.js, Express.js, Heroku