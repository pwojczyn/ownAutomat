var express = require('express');
var app = express();

var staticFolder = 'public';
app.use(express.static(staticFolder));

// app.get('/', (req, res) => {
//     res.send('ownAutomat work !');
// });

// app.use('/admin', express.static('./node_modules/admin-lte-express/public'))
// app.use('/', require('admin-lte-express'));

app.get('/test', function (req, res) {
  res.send('test command! ownAutmat');
});

app.get('/info', function(req, res){
  res.sendFile('./' + staticFolder + '/info.html', { root: __dirname });
}); 

app.listen(3000, function () {
  console.log('ownAutomat app listening on port 3000!');
});