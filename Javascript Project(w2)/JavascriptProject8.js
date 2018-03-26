
var students = [
{first_name: 'Michael',last_name:'Jordan'},
{first_name: 'Dannis', last_name:'rodman'},
{first_name: 'Shawn', last_name:'Nha'},
{first_name: 'Sumi', last_name:'Park'}
]

function printArray(students){
	for(var i = 0;i<students.length;i++){
		console.log(students[i].first_name,students[i].last_name);
	}
}

var users = {
	'Students':[
	{first_name: 'Michael',last_name:'Jordan'},
	{first_name: 'Dannis', last_name:'rodman'},
	{first_name: 'Shawn', last_name:'Nha'},
	{first_name: 'Sumi', last_name:'Park'}
	],

	'Instructors': [
	{first_name: 'Steve',last_name:'Jobs'},
	{first_name: 'Bill',last_name:'Gates'}
	]
}

function printAll(users){
	console.log('Students');
	for(var i =0; i<users.Students.length;i++){
		console.log(i+1," - ",users.Students[i].first_name,users.Students[i].last_name," - ", users.Students[i].first_name.length+users.Students[i].last_name.length);
	}
	console.log('Instructors');
	for(var j =0;j<users.Instructors.length;j++){
		console.log(j+1," - ",users.Instructors[j].first_name,users.Instructors[j].last_name," - ", users.Instructors[j].first_name.length+users.Instructors[j].last_name.length);
	}
}