module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		webfont: {
			icons: {
				src: 'node_modules/mdi-svg/svg/*.svg',
				dest: 'build/fonts',
				options: {
					fontFilename: 'material-design-icons',
					fontFamilyName: 'Material Design Icons',
					types: 'eot,woff2,woff,ttf,svg',
					ligatures: true,
					//ligaturesOnly: true,
					hashes: false,
					autoHint: false,
					normalize: true,
					engine: 'node'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-webfont');

	grunt.registerTask('default', ['webfont']);
}
