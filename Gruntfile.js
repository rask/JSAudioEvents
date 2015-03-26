module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('bower.json'),

		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['src/**/*.js'],
				dest: 'dist/<%= pkg.name %>.js'
			}
		},

		uglify: {
			options: {
				banner: '/**\n * <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>\n * <%= pkg.authors[0] %>\n * https://github.com/Rask/JSAudioEvents\n */\n'
			},
			dist: {
				files: {
					'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['concat', 'uglify']);

};