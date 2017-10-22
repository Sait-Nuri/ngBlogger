const async = require('async');

function ModelCRUD(bundle) {

    // GET /model
    this.readBulk = function (req, res) {
        bundle.Model.findAll()
            .then(function (models){
                if(models.length === 0){
                    console.log("instance is null");
                    res.statusCode = 400;
                    res.json([]);
                }else{
                    console.log("all models select done");
                    res.statusCode = 200;
                    res.json(models);
                }
            }).catch(function (err){
                console.log(err);
                res.statusCode = 400;
                res.json([]);
            });
    };

    // POST /model/:model_id
    this.createOne = function (req, res) {
        var model = {};
        var page = {};

        model.id = req.params.model_id;
        Object.assign(model, req.body.data);

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
            function create_page(cb) {
                bundle.Page.create(page)
                    .then(function (page_instance){
                        if(page_instance === null){
                            //console.log("page_instance is null");
                            cb("page_instance is null");
                        }else{
                            model.page_id = page_instance.page_id;
                            console.log("new page: " + page_instance.get());
                            cb(null);
                        }
                    }).catch(function (err){
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
                            cb(null);
                        }
                    })
                    .catch(function (err) {
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

    // GET /model/:model_id
    this.readOne = function (req, res) {
        var query = { where: {id: req.params.model_id} };
        var data = {};

        async.waterfall([
            function findModel(cb) {
                bundle.Model.findOne(query)
                    .then(function (model_instance){
                        if(model_instance === null){
                            cb("model_instance is null");
                        }else{
                            var model_data = model_instance.get();
                            Object.assign(data, model_data);
                            console.log(data);
                            cb(null);
                        }
                    }).catch(function (err){
                        cb(err);
                    });
            },
            function findPage(cb) {
                var query = { where: {page_id: data.page_id} };

                bundle.Page.findOne(query)
                    .then(function (page_instance){
                        if(page_instance === null){
                            cb("page_instance is null");
                        }else{
                            var page = page_instance.get();
                            Object.assign(data, page);
                            console.log(data);
                            cb(null);
                        }
                    }).catch(function (err){
                        cb(err);
                    });
            }
        ],
        function (err) { // Burada ihtiyaca göre model, page ya da her ikisi döndürülebilir.
            if (err) {
                console.log(err);
                res.statusCode = 400;
                res.json({});
            } else {
                console.log("find model is done");
                res.statusCode = 200;
                res.json(data);
            }
        });
    };
    
    // PUT /model/:model_id
    this.updateOne = function (req, res) {
        var query = {where: {id: req.params.model_id}};
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
                    .then(function (affected_row_num) {
                        if(affected_row_num === 0){
                            cb("update failed: affected row: " + affected_row_num);
                        }else{
                            console.log("Model updated: affected row: " + affected_row_num);
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

    // DELETE /model/:model_id
    this.deleteOne = function (req, res) {
        var query = {where: {'id': req.params.model_id}};

        bundle.Model.findOne(query)
            .then(function (model_instance) {
                if(model_instance === null){
                    console.log("model is not found");
                }else{
                    var delete_query = {where: {page_id: model_instance.page_id}};
                    bundle.Page.destroy(delete_query).
                        then(function (affected_row){
                            if(affected_row === 0){
                                console.log("model is not deleted");
                                res.statusCode = 400;
                                res.json({});
                            }else{
                                console.log("model deleted successfully");
                                res.statusCode = 200;
                                res.json({});
                            }
                        })
                        .catch(function (err){
                            console.log(err);
                            res.statusCode = 400;
                            res.json({});
                        });
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
