/**
 * Created by saidnuriPC on 13.08.2017.
 */
// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

    // ===========================================================================
    // CONFIGURE GRUNT ===========================================================
    // ===========================================================================
    grunt.initConfig({

        // get the configuration info from package.json ----------------------------
        // this way we can use things like name and version (pkg.name)
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            build: {
                files: [
                    {   // copy js files from bower to asset folder
                        expand: true,
                        flatten: true,   // remove all unnecessary nesting
                        cwd: 'bower_components/',
                        src: ['*/*.min.js'],
                        dest: 'app/dest/assets/js'
                    },
                    {
                        expand: true,
                        flatten: true,   // remove all unnecessary nesting
                        cwd: 'bower_components/angular-ui-router/release/',
                        src: ['angular-ui-router.min.js'],
                        dest: 'app/dest/assets/js'
                    },
                    {
                        expand: true,
                        flatten: true,   // remove all unnecessary nesting
                        cwd: 'bower_components/angular-carousel/dist',
                        src: ['angular-carousel.js'],
                        dest: 'app/dest/assets/js'
                    },
                    {   // copy css files from bower to asset folder
                        expand: true,
                        flatten: true,   // remove all unnecessary nesting
                        cwd: 'bower_components/',
                        src: ['*/*.min.css'],
                        dest: 'app/dest/assets/css'
                    },
                    {   // copy img file from src to dest
                        expand: true,
                        flatten: true,   // remove all unnecessary nesting
                        src: ['app/src/assets/img/*.svg', 'app/src/assets/img/*.png', 'app/src/assets/img/*.jpg'],  // source files mask
                        dest: 'app/dest/assets/img'    // destination folder
                    }
                ]
            }
        },

        // configure jshint to validate js files -----------------------------------
        jshint: {
            options: {
                reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
            },

            // when this task is run, lint the Gruntfile and all js files in src
            build: ['Gruntfile.js', 'src/**/*.js']
        },

        //
        concat: {
            build: {
                options: {
                    separator: ';'
                },
                files: {
                    // Concatanate all controllers
                    'app/dest/temp/controllers.js' : ['app/src/client/controllers/*.js'],

                    // Concatanate all modules
                    'app/dest/temp/modules.js' : ['app/src/client/modules/*.js'],

                    // Concatanate all directives
                    'app/dest/temp/directives.js' : ['app/src/client/directives/*.js'],

                    // Concatanate all routes
                    'app/dest/temp/routes.js': ['app/src/client/routes/*.js'],

                    // Concatanate all stylesheets
                    'app/dest/temp/style.css': ['app/src/assets/css/*.css']
                }
            }
        },

        // configure uglify to minify js files -------------------------------------
        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: [
                    {   // minify index.js
                        'app/dest/index.js':'app/src/index.js'
                    },
                    {   // minify concated modules
                        'app/dest/client/modules.min.js': ['app/dest/temp/modules.js']
                    },
                    {   // minify concated controller
                        'app/dest/client/controllers.min.js': ['app/dest/temp/controllers.js']
                    },
                    {   // minify concated directives
                        'app/dest/client/directives.min.js': ['app/dest/temp/directives.js']
                    },
                    {   // minify concated routes
                        'app/dest/client/routes.min.js': ['app/dest/temp/routes.js']
                    }
                ]
            }
        },

        // configure cssmin to minify css files ------------------------------------
        cssmin: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    'app/dest/assets/css/style.min.css': 'app/dest/temp/style.css',
                    'app/dest/assets/css/angular-carousel.min.css': 'bower_components/angular-carousel/dist/angular-carousel.css'
                }
            }
        },

        // Minify html files
        htmlmin: {
            options: {                                 // Target options
                removeComments: true,
                collapseWhitespace: true
            },
            build: {
                files: [
                    {
                        'app/dest/index.html':'app/src/index.html'
                    },
                    {
                        expand: true,
                        flatten: true,   // remove all unnecessary nesting
                        src: 'app/src/client/partials/*/*.html',
                        dest: 'app/dest/client/partials/'
                    }
                ]
            }
        },

        // Run node server
        run: {
            options: {
                // Task-specific options go here.
            },
            build: {
                cmd: 'node',
                args: [
                    'app/dest/index.js'
                ]
            }
        },

        // Will delete files for `build` target
        // Will NOT delete files for `release` target
        clean: {
            build: ['app/dest'],
            remove_temp: 'app/dest/temp'
        }



    });

    // ===========================================================================
    // LOAD GRUNT PLUGINS ========================================================
    // ===========================================================================
    // we can only load these if they are in our package.json
    // make sure you have run npm install so our app can find these
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-run');


    // ============= // CREATE TASKS ========== //
    grunt.registerTask('build', ['clean' ,'copy' ,'concat' ,'jshint', 'uglify', 'cssmin', 'htmlmin', 'clean:remove_temp', 'run']);
};