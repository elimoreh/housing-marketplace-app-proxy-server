const app = require('./main');

app.listen(app.get('PORT'), () => console.log(`listening on PORT ${app.get('PORT')}...`));
