//
import express from "express";
import Top from './pages/App';
//import About from './pages/About';
//import Htmx2 from './pages/Htmx2';
//import Htmx3 from './pages/Htmx3';
//
import testRouter from './routes/test'; 
//
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
//
const errorObj = {ret: "NG", messase: "Error"};
// route
app.use('/api/test', testRouter);

//MPA
/*
app.get('/about', (req: any, res: any) => {
  try {res.send(About({}));} catch (error) { res.sendStatus(500);}
});
*/
app.get("/*", (req, res) => {
//res.send("Hello World 11");
  const htm = Top({});
  //console.log(htm);
  res.send(htm);
});
//start
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
