const routerExperts = require('./expertsRouter.js');
const routerUsers = require('./usersRouter.js');


// Método para consumir las rutas

function RoutesAPI(app) {
    app.use('/experts', routerExperts);
    app.use('/users', routerUsers);
}


module.exports = RoutesAPI;