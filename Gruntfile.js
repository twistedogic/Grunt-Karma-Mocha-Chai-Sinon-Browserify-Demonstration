var paths = {
	src: 'src/',
	dist: 'dist/'
}

module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		browserify: {
			app: {
				src: [ paths.src + '*.js'],
				dest: 'public/mergedAssets.js'
			},
			tests: {
				src: ['tests/helper.js', 'tests/spec/*.js'],
				dest: 'public/mergedTests.js'
			}
		},
		watch:{
			scripts: {
				files: [
					'./*.js',
					'src/*.js',
					'tests/*.js',
					'tests/spec/**.js',
					'!public'
				],
				tasks: ['browserify','complexity'],
			}
		},
		complexity: {
			src: ['src/**.js'],
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