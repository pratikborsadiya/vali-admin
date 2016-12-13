module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			scss: {
				files: ['src/sass/**/*.sass', 'src/sass/**/*.sss'],
				tasks: ['sass', 'autoprefixer'],
				options: {
					interrupt: true
				}
			},
			pug: {
				files: ['src/pug/**/*.pug'],
				tasks: ['pug'],
				options: {
					interrupt: true
				}
			}
		},
		pug: {
			compile: {
				options: {
					pretty: true
				},
				files: [{
					src: ['**/*.pug', '!**/_*.pug'],
					dest: "dist/",
					ext: ".html",
					cwd: "src/pug/",
					expand: true
				}]
			}
		},
		sass: {
			dist: {
				options: {
					outputStyle: 'compressed',
					sourceMap: true
				},
				files: [{
					expand: true,
					cwd: 'src/sass/',
					src: ['*.sass'],
					dest: 'dist/css/',
					ext: '.css'
				}]
			}
		},
		autoprefixer: {
			options: {
				browsers: ['last 2 versions', '> 5%'],
				safe: true,
				map: false
			},
			dist: {
				src: ['dist/css/main.css']
			}
		}
	});

	// Load the Grunt plugins.
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-pug');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-sass');

	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['pug','sass','autoprefixer']);
};
