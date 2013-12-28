module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		browserify: {
			options:{
				shim: {
					jquery: {
						path: 'lib/src/vendor/jquery.js',
						exports: '$'
					},
					underscore: {
						path: 'lib/src/vendor/underscore.js',
						exports: '_'
					}
				}
			},
			app: {
				src: ['lib/**/*.js'],
				dest: 'public/mergedAssets.js'
			},
			tests: {
				src: ['lib/tests/*.js', 'lib/tests/**/*.js'],
				dest: 'public/mergedTests.js'
			}
		},
		watch:{
			scripts: {
				files: [
					'./*.js',
					'lib/**/*.js',
					'server/**/*.js',
					'!public'
				],
				tasks: ['browserify','complexity'],
			}
		},
		complexity: {
			src: ['lib/**/*.js','server/**/*.js', '!lib/src/vendor/**/*.js', '!lib/tests', '!server/tests'],
			options: {
				breakOnErrors:false,
				errorsOnly: false,
				maintainability: 100,
				cyclomatic:[3,7,12],
				halstead:[8,13,20]
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-complexity');

	grunt.registerTask('default',['browserify','complexity', 'watch']);
};