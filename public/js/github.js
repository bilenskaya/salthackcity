
var Github = Github || [];

Github.username = 'octanner';

Github.fetchRepos = function(){
	$.ajax({
		url: "https://api.github.com/users/"+Github.username+"/repos",
		dataType: 'jsonp',
		success: function(response){
			$("#js-github").append("<ul id='list-repos'></ul>");
			for(var i = 0; i<response.data.length ;i++){
				$("#list-repos").append("<li id='"+response.data[i]["language"]+"'>"+
					"<a title='"+response.data[i]["description"]+
					"' href='"+response.data[i]["html_url"]+"'>"+
					response.data[i]["name"]+"</a></li>"
				);
			}
		},
	});
}
