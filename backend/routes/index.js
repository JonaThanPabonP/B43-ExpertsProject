const routerExperts = require('./expertsRouter.js');
const routerUsers = require('./usersRouter.js');
const routerMockExperts = require('./mockExpertsRouter.js');

// Método para consumir las rutas

function RoutesAPI(app) {
    app.use('/experts', routerExperts);
    app.use('/users', routerUsers);
    app.use('/moke/experts', routerMockExperts);
}


module.exports = RoutesAPI;