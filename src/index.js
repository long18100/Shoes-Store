const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

var methodOverride = require('method-override')

const route = require('./routes/index')
const db = require('./config/db')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'config')));

//HTTP logger
app.use(morgan("combined"));


app.use(methodOverride('_method'))
//Template engine
app.engine('.hbs', handlebars.engine({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b,
    totalMoney: (arr) => {
      let total = 0
      if(arr){
        arr.forEach(element => {
          total += element.price
        });
        return total;
      }else{
        console.log("Bạn chưa đăng nhập")
      }
    },
    convertToString: (num) => new Intl.NumberFormat().format(num),

  }
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

//Routes init
route(app)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});