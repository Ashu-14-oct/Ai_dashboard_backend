const express = require('express');
const PORT = 3000;
const route = require('./routes/index');
const app = express();

//route
app.use('/', route);

//listen
app.listen(PORT, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log(`server running on port ${PORT}`);
    }
});