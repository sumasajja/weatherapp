module.exports= function(grunt){
	"use strict";
	//configuration
    grunt.loadNpmTasks('grunt-contrib-concat');
	 grunt.loadNpmTasks('grunt-sass');
	 grunt.loadNpmTasks('grunt-contrib-uglify');
	 grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.initConfig({
		//options to plugins and references to fileSize
		concat: {
			js:{
				'dist/js/scripts.js' : ['weather-app/*.js', 'weather-app/**/*.js']
			},
			css: {
	 			'dist/css/styles.css' : 'css/*.css'	
			}
		},
			
			sass: {
				build: {
					files: [{
					'dist/css/styles.css' : 'scss/*.scss'
						
					}]
					
				}
				
			},
			uglify :{
				build: {
					files: {
						"dist/js/scripts.js" : "dist/js/scripts.js"
						
					}
					
				}
				
			},
		connect: {
            server : {
                options: {
                    open: true,
                    keepalive: true
                }
            }
        }
				
		
	});
	
	
	//load plugins

	
	grunt.registerTask("serve", ["sass:build", "concat:css", "connect:server"]);
	
	
};