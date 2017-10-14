const async = require('async');

function ModelCRUD(bundle) {

    //  POST /model/:id
    this.createOne = function (req, res) {
        var model = {};
        Object.assign(model, req.body.data);
        //model = req.body.data;
        model.id = req.params.id;

        var page = {};

        async.waterfall([
            function find_model_type(cb) {
                var query =  {where: {name: bundle.page_type}};
                bundle.Pagetype.findOne(query)
                    .then(function (type){
                        if(type === null){
                            //console.log("page type is not found");
                            cb("page type is not found");
                        }else{
                            page.type_id = type.id; // page type id set
                            console.log("type id:" + type.id);
                            cb(null);
                        }
                    }).catch(function (err){
                        console.log(err);
                        cb(err);
                    });
            },
            function create_model(cb) {
                bundle.Model.create(model)
                    .then(function (model_instance) {
                        if(model_instance === null){
                            //console.log("model_instance is null");
                            cb("model_instance is null");
                        }else{
                            var new_model_data = model_instance.get();
                            console.log("new model: "+new_model_data);
                            page.model_id = new_model_data.id;
                            cb(null);
                        }
                    })
                    .catch(function (err) {
                        cb(err);
                    });
            },
            function create_page(cb) {
                bundle.Page.create(page)
                    .then(function (page_instance){
                        if(page_instance === null){
                            //console.log("page_instance is null");
                            cb("page_instance is null");
                        }else{
                            var new_page_data = page_instance.get();
                            console.log("new page: " +new_page_data);
                        }
                    }).catch(function (err){
                        cb(err);
                    });
            }
        ], function (err) {
            if (err) {
                console.log(err);
                res.statusCode = 400;
                res.json({});
            }
            else{
                console.log("model creation done");
                res.statusCode = 200;
                res.json({});
            }
        });
    };

    // GET /model/:id
    this.readOne = function (req, res) {
        var query = { where: {id: req.params.id} };

        async.waterfall([
            function findModel(cb) {
                bundle.Model.findOne(query)
                    .then(function (model_instance){
                        if(model_instance === null){
                            cb("model_instance is null");
                        }else{
                            var model_data = model_instance.get();
                            console.log(model_data);
                            cb(null, model_data);
                        }
                    }).catch(function (err){
                        console.log(err);
                        cb(err);
                    });
            },
            function findPage(model, cb) {
                var query = { where: {model_id: model.id} };

                bundle.Page.findOne(query)
                    .then(function (page_instance){
                        if(page_instance){
                            cb("page_instance is null");
                        }else{
                            var page = page_instance.get();
                            console.log(page);
                            cb(null, model, page);
                        }
                    }).catch(function (err){
                        console.log(err);
                        cb(err);
                    });
            }
        ],
        function (err, model, page) { // Burada ihtiyaca göre model, page ya da her ikisi döndürülebilir.
            if (err) {
                console.log(err);
                res.statusCode = 400;
                res.json({});
            } else {
                console.log("find model is done");
                res.statusCode = 200;
                res.json(model);
            }
        });
    };
    
    // PUT /model/:id
    this.updateOne = function (req, res) {
        var query = {where: {id: req.params.id}};
        var new_data = req.body.data;

        async.waterfall([
            function findModel(cb) {
                bundle.Model.findOne(query)
                    .then(function (model_instance){
                        if(model_instance === null){
                            //console.log("model_instance is null");
                            cb("model_instance is null");
                        }else{
                            var model_data = model_instance.get();
                            Object.assign(model_data, new_data);
                            cb(null, model_data);
                        }
                    }).catch(function (err){
                        cb(err);
                    });
            },
            function updateModel(new_model_data, cb) {
                bundle.Model.update(new_model_data, query)
                    .then(function (updated_instance) {
                        if(updated_instance === null){
                            //console.log("updated_instance is null");
                            cb("updated_instance is null");
                        }else{
                            console.log("Model updated: " + updated_instance.get());
                            cb(null);
                        }
                    })
                    .catch(function (err) {
                        cb(err);
                    });
            }
        ],
        function (err) {
            if (err) {
                console.log(err);
                res.statusCode = 400;
                res.json({});
            } else {
                console.log("Model updated");
                res.statusCode = 200;
                res.json({});
            }
        });
    };

    //DELETE /model/:id
    this.deleteOne = function (req, res) {
        var id = req.params.id;
        var where = {where: {'id': id}};

        bundle.Model.destroy(where)
            .then(function (numof_deleted) {
                if(numof_deleted === 0){
                    console.log("model not destroyed");
                }else{
                    console.log("model destroyed successfully");
                    res.statusCode = 200;
                    res.json({});
                }
            })
            .catch(function (err) {
                console.log(err);
                res.statusCode = 400;
                res.json({});
            });
    };
}

module.exports = ModelCRUD;
