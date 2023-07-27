
/*create an indexedDB.js file


*/

import express from 'express';

const app = express();

// app.use(express.url)
app.use(express.json())

//app.use(express.static('public))
app.use(express.static('public'));

const greetings = {
    'english' : 'Hello',
}

//call the api like this - http://localhost:4009/api/greet?username=Mzi
app.get('/api/greet', function(req, res){
console.log(req.query)
const username = req.query.username;
const language = req.query.language;

if (!greetings[language]) {
 return res.json({ 
    error : 'Invalid language supply'
})
}

const greeting = greetings[language];
res.json({
 message : `${greeting}, ${username}`
})
});


app.post('/api/greet', function(req, res){
const language = req.body.language;
greetings[language] = req.body.greeting

res.json({
    status : 'success',
    message : `Added a greeting for ${language}`

}); 
});


app.get('/api/greet/:username', function(req, res){
    console.log(req.params)
    const username = req.params.username;
    res.json({
        message : `Hello, ${username}!`
    })
    });
    


const PORT = 4009


app.listen(4009, function(){
console.log(`app started! ${PORT}`)
});
