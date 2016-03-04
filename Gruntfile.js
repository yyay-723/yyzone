//包装函数
module.exports = function(grunt){
	//任务配置，所有插件的配置信息
	grunt.initConfig({
		//获取 package.json的信息
		pkg : grunt.file.readJSON('package.json'),
		
		//uglify插件的配置信息
		uglify : {
			options : {
				stripBanners : true,
				banner : '/*! <%=pkg.name%>-<%=pkg.version%>.js <%=grunt.template.today("yyyy-mm-dd")%> */\n'
			},
			build : {
				src : 'src/animation.js',
				dest : 'build/<%=pkg.name%>-<%pkg.version%>.js.min.js'
			}
		},
		
		//sass插件的配置信息
		 sass: {
             output : {
                 files: { 
                    "build/css/style.css": "src/css/style.scss"
                 }, 
                options: { 
                    style : "expanded"
                }
             }
         },
		 
		 //watch插件的配置信息
		 watch : {
			build : {
				files : ['src/css/*.scss'],
				tasks : ['sass'],
				options : { spawn : false }
			}
		 }
	});
	
	//告诉grunt我们将使用插件
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	//告诉grunt当我们在终端输入grunt时需要做些什么（注意先后顺序）
	grunt.registerTask('default',['sass','watch']);
}