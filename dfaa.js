var a = [{name:'kang'},{name:'lee'}];
var b = {};
a.forEach(function(item){
	b[item.name]='no'
})

a =[{name:'lili',age:[]},{name:'yoyo',age:[]},{name:'xixi',age:[]}];
b =[{name:'lili',age:[1,2,3]},{name:'yoyo',age:[1,2,3]},{name:'xixi',age:[1,2]}];
a.forEach(function(item){
	b.forEach(function(ime){
		if (item.name = ime.name){
			item.age = ime.age
		}
	})
})

