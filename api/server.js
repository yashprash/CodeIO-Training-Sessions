const  server = require('./app');

app = server.App();
app.listen(3000, ()=>{
    console.log("App listening at port 3000");
});

