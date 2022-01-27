//Create a reference for canvas 

canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

//Give specific height and width to the car image
greenCar_width=75;
greenCar_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greenCar_x=5;
greenCar_y=225;



function add() {
	background_imgTag=new Image();
	background_imgTag.onload=uploadBackground;
	background_imgTag.src= background_image;

	greenCar_imgTag=new Image();
	greenCar_imgTag.onload=uploadGreencar;
	greenCar_imgTag.src=greencar_image;
	
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	//Define function ‘uploadBackground’
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height)
;
}

function uploadGreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greenCar_imgTag,greenCar_x,greenCar_y,greenCar_width,greenCar_height
	);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(greenCar_y>=0){
		greenCar_y=greenCar_y-10;
		uploadBackground();
		uploadGreencar();

	}

}

function down()
{
	//Define function to move the car downward
	if(greenCar_y<=300){
		greenCar_y=greenCar_y+10;
		uploadBackground();
		uploadGreencar();
		
	}
}

function left()
{
	//Define function to move the car left side
	if(greenCar_x>=0){
		greenCar_x=greenCar_x-10;
		uploadBackground();
		uploadGreencar();
		
	}
		
	
}

function right()
{
	//Define function to move the car right side
	if(greenCar_x<=725){
		greenCar_x=greenCar_x+10;
		uploadBackground();
		uploadGreencar();
		
	}
}
