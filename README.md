# cw-take-home-1

This project is the first instruction in a take-home test.

Question 1 -   
Create a single-endpoint api using express and express-validator. The endpoint must use a validation middleware and reject requests that do not meet it. After passing validation, it will transform the payload of the POST request in some manner and respond with the transformed payload. There is no need for a database, the controller should run the changes in memory (e.g. rearranging the letters of a word or multiplying a number by 2). Upload it to a publicly-accessible git repository. Typescript instead of JS is encouraged, but optional.     

Steps to recreate - 
- install express and express-validator  
- create index.js file requiring express and express-validator  
- create a payload validator function, in this case it checks if it exists and is a string  
- create a route to transform the payload including error handling for the validation result  
- then transform the payload by using .split, .reverse, and .join  then return the transformed payload  
- check in postman at port 3003 using the route    
http://localhost:3003/transform    

- in postman use a post method and pass in raw JSON  
{
  "payload": "hello world"
}  
result should be   
{
    "transformedPayload": "dlrow olleh"
}    
