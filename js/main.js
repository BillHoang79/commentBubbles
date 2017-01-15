function addComment(){
	//variables that stores what the person types in input box
	var inputUsername = document.getElementById('username').value
	var inputComment = document.getElementById('comment').value
	//takes the stored variables from user's input and creates a temporary text file
	var text2 = document.createTextNode("Username:  " + inputUsername)
	var text = document.createTextNode(" Comment:   " + inputComment)
	//creates li element
	var newList =document.createElement('li')
	//new class in which the items list is stored in
	newList.className ="newListItem"
	//gives stored username an "h3" element tag
	var name = document.createElement('h3')
	//attaches to here
	name.appendChild(text2)
	//stores comment into a "p" element tag
	var comment= document.createElement('p')
	//attaches it to here
	comment.appendChild(text)
	//gives li elements the value of what the user input earlier
	newList.appendChild(name)
	newList.appendChild(comment)
	//attsches li element into element "comment list"
	document.getElementById('commentList').appendChild(newList)	
}

var bubbles = []
	//creates canvas for interactive page
	function setup() {
		createCanvas(1400, 900)
}
//when mouse is clicked, creates bubble
function mouseDragged() {
	bubbles.push(new Bubble(mouseX, mouseY))
}

function mousePressed() {
	bubbles.push(new Bubble(mouseX, mouseY))
}
//pressing keys delete bubbles
function keyPressed() {
	bubbles.splice(0, 1)
}

//creates the bubbles
function draw() {
	background(0)
	for ( var i = 0; i < bubbles.length; i++) {
		bubbles[i].move()
		bubbles[i].display()
	}
//alternative where bubbles get deleted automatically when more then 50
	if (bubbles.length > 300) {
			bubbles.splice(0, 1)
	}
}

//make new bubbles
function Bubble(x, y) {
	//sets location of the bubbles
	this.x = x
	this.y = y
	//bubble properties
	this.display = function() {
		stroke(255)//outline of bubble
		fill(255,255,255,255)//first number is fill, last three determines color
		ellipse(this.x, this.y, 24, 24)
	}
//determines the movement of the bubbles
	this.move = function() {
		this.x = this.x + random(-1, 1)
		this.y = this.y + random(-1, 1)
	}
}


