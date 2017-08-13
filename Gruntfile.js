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
            main: {
                files: [
                    {   // copy js files from bower to asset folder
                        expand: true,
                        flatten: true,   // remove all unnecessary nesting
                        cwd: 'bower_components/',
                        src: ['*/*.min.js'],
                        dest: 'app/dest/assets/js'
                    },
                    {   // copy css files from bower to asset folder
                        expand: true,
                        flatten: true,   // remove all unnecessary nesting
                        cwd: 'bower_components/',
                        src: ['*/*.min.css'],
                        dest: 'app/dest/assets/css'
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

        // configure uglify to minify js files -------------------------------------
        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: [
                    {
                        expand: true,    // allow dynamic building
                        flatten: true,   // remove all unnecessary nesting
                        src: 'app/src/assets/js/*.js',  // source files mask
                        dest: 'app/dest/assets/js/',    // destination folder
                        ext: '.min.js'   // replace .js to .min.js
                    },
                    {// minify index.js
                        'app/dest/index.js':'app/src/index.js'
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
                files: [{
                    expand: true,
                    cwd: 'app/src/assets/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'app/dest/assets/css',
                    ext: '.min.css'
                }]
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
                        expand: true,
                        cwd: 'app/src/assets/html/',
                        src: ['*.html'],
                        dest: 'app/dest/assets/html'
                    },
                    {
                        'app/dest/index.html':'app/src/index.html'
                    }
                ]
            }
        },

        // Run node server
        run: {
            options: {
                // Task-specific options go here.
            },
            target: {
                cmd: 'node',
                args: [
                    'app/dest/index.js'
                ]
            }
        },

        // Will delete files for `build` target
        // Will NOT delete files for `release` target
        clean: {
            build: ['app/dest']
        }



    });


    // ===========================================================================
    // LOAD GRUNT PLUGINS ========================================================
    // ===========================================================================
    // we can only load these if they are in our package.json
    // make sure you have run npm install so our app can find these
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-run');


    // ============= // CREATE TASKS ========== //
    grunt.registerTask('default', ['clean' ,'copy' ,'jshint', 'uglify', 'cssmin', 'htmlmin', 'run']);
};