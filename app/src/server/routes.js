var ModelRest = require('./modelCRUD');
var ElementRest = require('./ElementCRUD');

module.exports = function (app, dir_path, db, express) {
    var module = {};

    module.setup = function () {

        var articleRouter = express.Router();
        //var newsRouter = express.Router();
        //var toolbagRouter = express.Router();
        //var battlefieldRouter = express.Router();
        //var itlawRouter = express.Router();
        var elementRouter = express.Router({ mergeParams: true });

        app.get('/', function(req, res) {
            res.sendFile(dir_path + '/index.html');
        });

        //this.setupPageRoutes(app, pageRouter, elementRouter);
        this.setupArticleRoutes(app, articleRouter, elementRouter);
        //this.setupNewsRouter(app, newsRouter, elementRouter);
        //this.setupToolbagRouter(app, toolbagRouter, elementRouter);
        //this.setupBfRouter(app, battlefieldRouter, elementRouter);
        //this.setupItlawRouter(app, itlawRouter, elementRouter);
    };

    // page routing
    /*
    module.setupPageRoutes = function (app, router, elementRouter) {
        var bundle = { 'Model': db.models.Page };
        var pageRest = new Rest(bundle);

        var bundleElement = {'Model': db.models.Element };
        var elementRest = new Rest(bundleElement);

        router.use('/:id/element', elementRouter);

        elementRouter.route('/')
            .get(elementRest.readBulk)
            .post(elementRest.createBulk);

        elementRouter.route('/:element_id')
            .get(elementRest.readOne)
            .post(elementRest.createOne)
            .put(elementRest.updateOne)
            .delete(elementRest.deleteOne);

        router.route('/')
            .get(pageRest.readBulk);

        router.route('/:id')
            .post(pageRest.createOne)
            .get(pageRest.readOne)
            .put(pageRest.updateOne)
            .delete(pageRest.deleteOne);

        app.use('/page', router);
    };
    */

    module.setupArticleRoutes = function (app, router, elementRouter) {

        //console.log(db.models);
        var bundleModel = {
            Model: db.models.Article,
            Page: db.models.Page,
            Pagetype: db.models.Pagetype,
            page_type: 'Article',
            limit: '20'
        };
        var bundleElement = {
            Model: db.models.Article,
            Element_type: db.models.Element_type,
            Element: db.models.Element
        };

        var articleRest = new ModelRest(bundleModel);
        var elementRest = new ElementRest(bundleElement);

        router.use('/:page_id/element', elementRouter);

        elementRouter.route('/')
            .get(elementRest.readBulk)
            .post(elementRest.createBulk);

        elementRouter.route('/:element_id')
            .get(elementRest.readOne)
            .post(elementRest.createOne)
            .put(elementRest.updateOne)
            .delete(elementRest.deleteOne);

        router.route('/')
            .get(articleRest.readBulk);

        router.route('/:page_id')
            .get(articleRest.readOne)
            .post(articleRest.createOne)
            .put(articleRest.updateOne)
            .delete(articleRest.deleteOne);

        app.use('/article', router);
    };

    /*
    //news routing
    module.setupNewsRouter = function (app, router, elementRouter) {
        var bundle = { 'Model': db.models.News };
        var newsRest = new Rest(bundle);

        var bundleElement = {'Model': db.models.Element };
        var elementRest = new Rest(bundleElement);

        router.use('/:id/element', elementRouter);

        elementRouter.route('/')
            .get(elementRest.readBulk)
            .post(elementRest.createBulk);

        elementRouter.route('/:element_id')
            .get(elementRest.readOne)
            .post(elementRest.createOne)
            .put(elementRest.updateOne)
            .delete(elementRest.deleteOne);

        router.route('/')
            .get(newsRest.readBulk)
            .post(newsRest.createBulk);

        router.route('/:id')
            .get(newsRest.readOne)
            .post(newsRest.createOne)
            .put(newsRest.updateOne)
            .delete(newsRest.deleteOne);

        app.use('/news', router);
    };

    //setupToolbagRouter routing
    module.setupToolbagRouter = function (app, router, elementRouter) {
        var bundle = { 'Model': db.models.Toolbag };
        var toolbagRest = new Rest(bundle);

        var bundleElement = {'Model': db.models.Element };
        var elementRest = new Rest(bundleElement);

        router.use('/:id/element', elementRouter);

        elementRouter.route('/')
            .get(elementRest.readBulk)
            .post(elementRest.createBulk);

        elementRouter.route('/:element_id')
            .get(elementRest.readOne)
            .post(elementRest.createOne)
            .put(elementRest.updateOne)
            .delete(elementRest.deleteOne);

        router.route('/')
            .get(toolbagRest.readBulk)
            .post(toolbagRest.createBulk);

        router.route('/:id')
            .get(toolbagRest.readOne)
            .post(toolbagRest.createOne)
            .put(toolbagRest.updateOne)
            .delete(toolbagRest.deleteOne);

        app.use('/news', router);
    };

    //Battlefield routing
    module.setupBfRouter = function (app, router, elementRouter) {
        var bundle = { 'Model': db.models.Battlefield };
        var bfRest = new Rest(bundle);

        var bundleElement = {'Model': db.models.Element };
        var elementRest = new Rest(bundleElement);

        router.use('/:id/element', elementRouter);

        elementRouter.route('/')
            .get(elementRest.readBulk)
            .post(elementRest.createBulk);

        elementRouter.route('/:element_id')
            .get(elementRest.readOne)
            .post(elementRest.createOne)
            .put(elementRest.updateOne)
            .delete(elementRest.deleteOne);

        router.route('/')
            .get(bfRest.readBulk)
            .post(bfRest.createBulk);

        router.route('/:id')
            .get(bfRest.readOne)
            .post(bfRest.createOne)
            .put(bfRest.updateOne)
            .delete(bfRest.deleteOne);

        app.use('/news', router);
    };

    //news routing
    module.setupItlawRouter = function (app, router, elementRouter) {
        var bundle = { 'Model': db.models.Itlaw };
        var itlawRest = new Rest(bundle);

        var bundleElement = {'Model': db.models.Element };
        var elementRest = new Rest(bundleElement);

        router.use('/:id/element', elementRouter);

        elementRouter.route('/')
            .get(elementRest.readBulk)
            .post(elementRest.createBulk);

        elementRouter.route('/:element_id')
            .get(elementRest.readOne)
            .post(elementRest.createOne)
            .put(elementRest.updateOne)
            .delete(elementRest.deleteOne);

        router.route('/')
            .get(itlawRest.readBulk)
            .post(itlawRest.createBulk);

        router.route('/:id')
            .get(itlawRest.readOne)
            .post(itlawRest.createOne)
            .put(itlawRest.updateOne)
            .delete(itlawRest.deleteOne);

        app.use('/news', router);
    };
    */

    return module;
};