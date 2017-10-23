const async = require('async');

function ElementCRUD(bundle) {

    //  GET /model/:page_id/element
    this.readBulk = function (req, res) {
        var model_id = req.params.model_id;

        console.log("page id: " + model_id);

        async.waterfall([
            function findModel(cb) {
                bundle.Model.findById(model_id)
                    .then(function (model_instance){
                        if(model_instance === null){
                            cb("model_instance is null");
                        }else{
                            console.log(model_instance.get());
                            cb(null, model_instance);
                        }
                    }).catch(function (err){
                        console.log(err);
                        cb(err);
                    });
            },
            function getPage(model_instance, cb) {
                var query = {where: {page_id: model_instance.page_id}};
                bundle.Page.findOne(query)
                    .then(function (page_instance){
                        if(page_instance === null){
                            cb("page_instance is null");
                        }else{
                            console.log("page_instance: "+ page_instance.get());
                            cb(null, page_instance);
                        }
                    }).catch(function (err){
                        cb(err);
                    });
            },
            function getElements(page, cb) {
                page.getElements()
                    .then(function (elements_instance){
                        if(elements_instance === null){
                            cb("element instance is null");
                        }else{
                            console.log("element size: "+ elements_instance.length);
                            cb(null, elements_instance);
                        }
                    }).catch(function (err){
                        cb(err);
                    });
            }
        ],
        function (err, elements_instance) {
            if (err) {
                console.log(err);
                res.statusCode = 400;
                res.json([]);
            } else {
                console.log("element bulk select done");
                res.statusCode = 200;

                var element_data = [];
                elements_instance.forEach(function (element) {
                    element_data.push(element.get());
                });
                res.json(element_data);
            }
        });
    };

    //  POST /model/:page_id/element
    this.createBulk = function (req, res) {
        var model_id = req.params.model_id;
        var element_array = req.body.data;

        console.log("page id: " + model_id);

        async.waterfall([
            function findModel(cb) {
                bundle.Model.findById(model_id)
                    .then(function (model_instance){
                        if(model_instance === null){
                            cb("model_instance is null");
                        }else{
                            cb(null, model_instance);
                        }
                    }).catch(function (err){
                        cb(err);
                    });
            },
            function getPage(model_instance, cb) {
                var query = {where: {page_id: model_instance.page_id}};
                bundle.Page.findOne(query)
                    .then(function (page_instance){
                        if(page_instance === null){
                            cb("page_instance is null");
                        }else{
                            cb(null, page_instance);
                        }
                    }).catch(function (err){
                        cb(err);
                    });
            },
            function setPageId (page_instance, cb) {
                async.mapSeries(element_array, function(element, map_cb){
                    element.page_id = page_instance.page_id;
                    map_cb(null, element);
                },function(err, elements) {
                    if(err){
                        cb(err);
                    } else {
                        cb(null, elements);
                    }
                });
            },
            function createElements(elements, cb) {
                bundle.Element.bulkCreate(elements)
                    .then(function (instances){
                        if(instances === null){
                            cb("instances is null");
                        }else{
                            cb(null);
                        }
                    }).catch(function (err){
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
                console.log("create bulk element done");
                res.statusCode = 200;
                res.json({});
            }
        });
    };

    // PUT /model/:model_id/element
    this.updateBulk = function (req, res) {
        var elements = {};
        Object.assign(elements, req.body.data);

        async.mapSeries(elements, function (element, cb) {
            var query = {where: {id: element.id}};
            bundle.Element.update(element, query)
                .then(function (affected_row){
                    if(affected_row === 0){
                        cb("element not updated");
                    }else{
                        cb(null);
                    }
                }).catch(function (err){
                    console.log(err);
                    cb(err);
                });
        }, function(err, results) {
            if(err){
                console.log(err);
                res.statusCode = 400;
                res.json({});
            }else{
                res.statusCode = 200;
                res.json({});
            }
        });
    };

    // DELETE /model/:model_id/element
    this.deleteBulk = function (req, res) {
        var elements = {};
        Object.assign(elements, req.body.data);

        async.mapSeries(elements, function (element, cb) {
            var query = {where: {id: element.id}};
            bundle.Element.destroy(query)
                .then(function (affected_row){
                    if(affected_row === 0){
                        cb("element not deleted");
                    }else{

                        cb(null);
                    }
                }).catch(function (err){
                    console.log(err);
                    cb(err);
                });
        }, function(err, results) {
            if(err){
                console.log(err);
                res.statusCode = 400;
                res.json({});
            }else{
                res.statusCode = 200;
                res.json({});
            }
        });
    };

    //  GET /model/:page_id/element/:element_id
    this.readOne = function (req, res) {
        var model_id = req.params.model_id;
        var element_id = req.params.element_id;

        console.log("page id: " + model_id);
        console.log("element id: " + element_id);

        async.waterfall([
            function getElement(cb) {
                bundle.Element.findById(element_id)
                    .then(function (element_instance){
                        if(element_instance === null){
                            cb("element instance is null");
                        }else{
                            console.log("elements: "+ element_instance.get());
                            cb(null, element_instance);
                        }
                    }).catch(function (err){
                        cb(err);
                    });
            }
        ],
        function (err, element_instance) {
            if (err) {
                console.log(err);
                res.statusCode = 400;
                res.json({});
            } else {
                console.log("element_instance select done");
                res.statusCode = 200;
                res.json(element_instance.toJSON());
            }
        });
    };

    //  POST /model/:page_id/element/:element_id
    this.createOne = function (req, res) {
        var model_id = req.params.model_id;
        var element_id = req.params.element_id;
        var element_data = req.body.data;

        console.log("page id: " + model_id);
        console.log("element id: " + element_id);

        async.waterfall([
                function findModel(cb) {
                    bundle.Model.findById(model_id)
                        .then(function (model_instance){
                            if(model_instance === null){
                                cb("model_instance is null");
                            }else{
                                cb(null, model_instance);
                            }
                        }).catch(function (err){
                        cb(err);
                    });
                },
                function getPage(model_instance, cb) {
                    var query = {where: {page_id: model_instance.page_id}};
                    bundle.Page.findOne(query)
                        .then(function (page_instance){
                            if(page_instance === null){
                                cb("page_instance is null");
                            }else{
                                element_data.page_id = page_instance.page_id;
                                cb(null, element_data);
                            }
                        }).catch(function (err){
                            cb(err);
                        });
                },
                function createElements(element_data, cb) {
                    bundle.Element.create(element_data)
                        .then(function (element_instance){
                            if(element_instance === null){
                                cb("element_instance is null");
                            }else{
                                cb(null);
                            }
                        }).catch(function (err){
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
                    console.log("create element done");
                    res.statusCode = 200;
                    res.json({});
                }
            });
    };

    //  PUT /model/:page_id/element/:element_id
    this.updateOne = function (req, res) {
        var model_id = req.params.model_id;
        var element_id = req.params.element_id;
        var element_data = req.body.data;

        console.log("page id: " + model_id);
        console.log("element id: " + element_id);

        async.waterfall([
            function findElement(cb) {
                var query = {where: {id: element_id}};
                bundle.Element.findOne(query)
                    .then(function (element_instance){
                        if(element_instance === null){
                            cb("element_instance is null");
                        }else{
                            cb(null, element_instance);
                        }
                    }).catch(function (err){
                        cb(err);
                    });
            },
            function updateElement(element_instance, cb) {
                element_instance.update(element_data)
                    .then(function (updated_instance){
                        if(updated_instance === null){
                            cb("updated_instance is null");
                        }else{
                            cb(null);
                        }
                    }).catch(function (err){
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
                console.log("create element done");
                res.statusCode = 200;
                res.json({});
            }
        });
    };

    //  DELETE /model/:id/element/:element_id
    this.deleteOne = function (req, res) {
        var model_id = req.params.model_id;
        var element_id = req.params.element_id;

        console.log("model_id: " + model_id);
        console.log("element id: " + element_id);

        var query = {where: {'id': element_id}};
        bundle.Element.destroy(query)
            .then(function (affected_row) {
                if(affected_row === 0){
                    console.log("element is not deleted");
                    res.statusCode = 400;
                    res.json({});
                }else{
                    console.log("element is deleted successfully");
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

module.exports = ElementCRUD;