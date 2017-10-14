'use strict';
const Sequelize = require('sequelize');
const async = require('async');
const connectionUri = "postgres://wlcchjco:7jkv3Cvpd6Rfz8C78oXVnnFkNbOX_BRI@fizzy-cherry.db.elephantsql.com:5432/wlcchjco";
const FORCE_DROP = { force:true };
const NO_LOGGING = { logging: false};

function Database() {
    this.models = {};
    this.sequelize = null;
    var that = this;

    this.setup = function (parent_cb) {

        async.series([
                function (cb) {
                    that.connectToDB(cb);
                },
                function (cb) {
                    //cb(null);
                    that.modelDefine(cb);
                },
                function (cb) {
                    //that.dropTables(cb);
                    that.createRelations(cb);
                    //cb(null);
                },
                function (cb) {
                    //cb(null);
                    that.saveModels(cb);
                    //cb(null);
                }
            ],
            function (err, result) {
                if(err){
                    console.log(err);
                    throw (err);
                }else{
                    console.log("setup process done");
                    parent_cb(null);
                }
            });
        //Buraya log atma
    };

    this.connectToDB = function (cb) {

        //Connect to database
        this.sequelize = new Sequelize(connectionUri, {
            define: {
                timestamps: false, // true by default
                underscored: true,
                freezeTableName: true
            }
        });

        this.sequelize
            .authenticate()
            .then(function (){
                console.log('Connection has been established successfully.');
                cb(null, 'connectToDB done');
            })
            .catch(function (err) {
                console.error('Unable to connect to the database:', err);
                cb(err);
            });
    };

    this.modelDefine = function (callback) {

        // Element definition
        this.models.Element = this.sequelize.define('element', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            attr1: {
                type: Sequelize.TEXT
            },
            attr2: {
                type: Sequelize.TEXT
            },
            attr3: {
                type: Sequelize.TEXT
            }
        },{
            tableName: 'element_list'
        });

        //Element type
        this.models.Element_type = this.sequelize.define('element_type', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            }
        });

        // page type
        this.models.Page = this.sequelize.define('page_list', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            }
        });

        // page type
        this.models.Pagetype = this.sequelize.define('page_type', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            }
        });

        // article list table
        this.models.Article = this.sequelize.define('article', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            title:{
                type: Sequelize.TEXT
            },
            numread:{
                type: Sequelize.INTEGER,
                defaultValue: 0
            }
        },{
            tableName: 'article_list'
        });

        // news list table
        this.models.News = this.sequelize.define('news', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            title:{
                type: Sequelize.TEXT
            },
            numread:{
                type: Sequelize.INTEGER,
                defaultValue: 0
            }
        },{
            tableName: 'news_list'
        });

        // Offensive and defensive tools list table
        this.models.Toolbag = this.sequelize.define('toolbag', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            title:{
                type: Sequelize.TEXT
            },
            numread:{
                type: Sequelize.INTEGER
            }
        },{
            tableName: 'toolbag_list'
        });

        // Battlefield list
        this.models.Battlefield = this.sequelize.define('battlefield', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            title:{
                type: Sequelize.TEXT
            },
            numread:{
                type: Sequelize.INTEGER
            }
        },{
            tableName: 'battlefield_list'
        });

        // Information Technology laws list
        this.models.Itlaw = this.sequelize.define('itlaw', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            title:{
                type: Sequelize.TEXT
            },
            numread:{
                type: Sequelize.INTEGER
            }
        },{
            tableName: 'itlaw_list'
        });

        console.log('model_loader done');
        callback(null);
    };

    this.createRelations = function (parent_callback) {

        this.models.Element_type.hasOne(this.models.Element, {foreignKey: 'type_id'}); // Element.getTag();
        this.models.Page.hasMany(this.models.Element, {as: 'Elements', foreignKey: 'page_id', onDelete: 'CASCADE', hooks: true});
        this.models.Page.belongsTo(this.models.Pagetype, {foreignKey: 'type_id'});

        this.models.Article.hasOne(this.models.Page, {foreignKey: 'model_id', as: 'Model', onDelete: 'CASCADE', hooks: true}); //
        this.models.News.hasOne(this.models.Page, {foreignKey: 'model_id', as: 'Model', onDelete: 'CASCADE', hooks: true}); //
        this.models.Toolbag.hasOne(this.models.Page, {foreignKey: 'model_id', as: 'Model', onDelete: 'CASCADE', hooks: true}); //
        this.models.Battlefield.hasOne(this.models.Page, {foreignKey: 'model_id', as: 'Model', onDelete: 'CASCADE', hooks: true}); //
        this.models.Itlaw.hasOne(this.models.Page, {foreignKey: 'model_id', as: 'Model', onDelete: 'CASCADE', hooks: true}); //

        console.log('createRelations done');
        parent_callback(null);
    };

    this.saveModels = function (parent_callback) {
        var models = this.models;

        async.series([
                function (callback) {
                    models.Pagetype.sync()
                        .then(function () {
                            callback(null, 'Page_Type model saved');
                        }).catch(function (err) {
                            console.log(err);
                            callback(err);
                        });
                },
                function (callback) {
                    models.Article.sync()
                        .then(function () {
                            callback(null, 'Article model saved');
                        }).catch(function (err) {
                            console.log(err);
                            callback(err);
                        });
                },
                function (callback) {
                    models.News.sync()
                        .then(function () {
                            callback(null, 'News model saved');
                        }).catch(function (err) {
                            console.log(err);
                            callback(err);
                        });
                },
                function (callback) {
                    models.Toolbag.sync()
                        .then(function () {
                            callback(null, 'Toolbag model saved');
                        }).catch(function (err) {
                            console.log(err);
                            callback(err);
                        });
                },
                function (callback) {
                    models.Battlefield.sync()
                        .then(function () {
                            callback(null, 'Battlefield model saved');
                        }).catch(function (err) {
                            callback(err);
                        });
                },
                function (callback) {
                    models.Itlaw.sync()
                        .then(function () {
                            callback(null, 'Itlaw model saved');
                        }).catch(function (err) {
                            console.log(err);
                            callback(err);
                        });
                },
                function (callback) {
                    models.Page.sync()
                        .then(function () {
                            callback(null, 'Page model saved');
                        }).catch(function (err) {
                            console.log(err);
                            callback(err);
                        });
                },
                function (callback) {
                    models.Element_type.sync()
                        .then(function () {
                            callback(null, 'Element_Type model saved');
                        }).catch(function (err) {
                            console.log(err);
                            callback(err);
                        });
                },
                function (callback) {
                    models.Element.sync()
                        .then(function () {
                            callback(null, 'Element model saved');
                        }).catch(function (err) {
                            console.log(err);
                            callback(err);
                        });
                }],
            function (err, result) {
                if(err){
                    console.log(err);
                    parent_callback(err);
                }else{
                    console.log("saveModels done");
                    parent_callback(null);
                }
            });
    };

}

module.exports = new Database();