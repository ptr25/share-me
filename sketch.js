var count = 0;
var homeimg,foodbg,ppt;
var input,email,address,r1,r2,r3,r4;
var signin,about,back,val;
var done;
var input1,input2,input3,input4,input5,input6,input7,input8;
var bg1,bg2,bg3,bg4,bg5,user;
var proceed1,proceed2,proceed;
var city,state,country;
function preload(){
  homeimg = loadImage("share me.jpg");
  foodbg = loadImage("food.jpeg");
  bg = loadImage("bg.jpg");
  ppt = loadImage("Slide1.jpg");
  done = loadImage("email.png");
  bg1 = loadImage("Slide1 5.jpg");
  user = loadImage("user.png");
  bg2 = loadImage("Slide1 6.jpg");
  bg3 = loadImage("Slide1 3.jpg");
  bg4 = loadImage("Slide1 4.jpg");
  bg5 = loadImage("Slide1 2.jpg");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  signin = createButton("Sign In");
  about = createButton("About Share Me");
  signin.position(windowWidth/2-150,windowHeight/2+200);
  about.position(windowWidth/2+150,windowHeight/2+200);
  back = createButton("Back");
  back.position(windowWidth/2+500,windowHeight/2+350);
  proceed = createButton("Proceed");
  proceed.position(windowWidth/2+450,windowHeight/2+350);
  proceed1 = createButton("Proceed");
  proceed1.position(windowWidth/2+450,windowHeight/2+350);
  proceed2 = createButton("Proceed");
  proceed2.position(windowWidth/2+450,windowHeight/2+350);
  signin.hide();
  about.hide();
  back.hide();
  proceed.hide();
  proceed1.hide();
  proceed2.hide();
 // h1.hide()
  input = createInput("Name");
  email = createInput("Email");
  address = createInput("Address");
  city = createInput("City");
  state = createInput("State");
  country  = createInput("Country");
  input.position(windowWidth/2,windowHeight/2);
  email.position(windowWidth/2,windowHeight/2+50);              address.position(windowWidth/2+150,windowHeight/2+120);
  country.position(windowWidth/2+150,windowHeight/2-180);
  state.position(windowWidth/2+150,windowHeight/2-80);
  city.position(windowWidth/2+150,windowHeight/2+20);
  input.hide();
  email.hide();
  address.hide();
  state.hide();
  country.hide();
  city.hide();
  val = input.value();
  r1 = createRadio('h1');
 // r2 = createRadio('h1');
  r1.option('Donate');
  r1.option('Sell');
  r1.hide();
 // r2.hide();
   r5 = createRadio('h1');
  r5 = createRadio('h1');
  r5.option('yes');
  r5.option('no');
  r5.hide();
  r6 = createRadio('h1');
  r6 = createRadio('h1');
  r6.option('yes');
  r6.option('no');
  r6.hide();
  r3 = createRadio('h1');
  r3.option('Restaurant');
  r3.option('Home');
    input1 = createInput("your answer");
    input2 = createInput("your answer");
    input3= createInput("your answer");
    input4= createInput("your answer");
    input5= createInput("your answer");
   input6 = createInput("your answer");
    input7 = createInput("your answer");
    input8= createInput("your answer");
    r4 = createRadio('h1');
    r4.option('agree');
    r4.hide();
    r3.position(windowWidth/2-20,windowHeight/2-265);
    r4.position(335,windowHeight-50);
  
  input1.position(windowWidth/2+50,windowHeight/2-150);
  input2.position(windowWidth/2+50,windowHeight/2-50);
  input3.position(windowWidth/2+50,windowHeight/2+50);
  input6.position(windowWidth/2+50,windowHeight-500);
  input7.position(windowWidth/2+50,windowHeight-400);
  input8.position(windowWidth/2+50,windowHeight-300);
  input4.position(windowWidth/2+50,windowHeight/2+150);
  input5.position(windowWidth/2+50,windowHeight/2+250);
   r5.position(windowWidth/2-50,windowHeight-230);
  r6.position(windowWidth/2-50,windowHeight-165);
  r3.hide();
  input1.hide();
  input2.hide();
  input3.hide();
   input6.hide();
  input7.hide();
  input8.hide();
  input4.hide();
  input5.hide();
  //yo = r1.value();
  //yoyo = r2.value()
}

function draw() {
  background(220);
  if(count===0){
    image(homeimg,0,0,windowWidth, windowHeight);
   signin.show();
   about.show();
   // proceed.hide();
  signin.style('background-color', 'gray');
  signin.style('position',' absolute');
  signin.style('transform','translate(-50%, -50%)');
  signin.style('-ms-transform','translate(-50%, -50%)');
  signin.style('color','white');
   signin.style('font-size','16px');
   signin.style('padding',' 16px 30px');
   signin.style('cursor',' pointer');
   signin.style('border-radius','5px');
   signin.style(' text-align',' center');
   signin.style('border','none');
  
  about.style('background-color', 'gray');
  about.style('position',' absolute');
  about.style('transform','translate(-50%, -50%)');
  about.style('-ms-transform','translate(-50%, -50%)');
  about.style('color','white');
   about.style('font-size','16px');
  about.style('font','zapfino');
   about.style('padding',' 16px 30px');
   about.style('cursor',' pointer');
   about.style('border-radius','5px');
   about.style(' text-align',' center');
   about.style('border','none');
    back.hide();
    about.mousePressed(()=>{
      count++;
    })
    signin.mousePressed(()=>{
      count = count+2;
    })
  }
   if(count===1){
      image(ppt,0,0,windowWidth, windowHeight);
     about.hide();
     signin.hide();
     back.show();
   back.style('background-color', 'white');
   back.style('position',' absolute');
   back.style('transform','translate(-50%, -50%)');
   back.style('-ms-transform','translate(-50%, -50%)');
   back.style('color','black');
   back.style('font-size','16px');
   back.style('padding',' 16px 30px');
   back.style('cursor',' pointer');
   back.style('border-radius','5px');
   back.style(' text-align',' center');
   back.style('border','none');
  
     back.mousePressed(()=>{
       count--;
     })
   }
  if(count===2){
    about.hide();
     signin.hide();
    image(bg1,0,0,windowWidth, windowHeight);
    image(user,windowWidth/2-250, windowHeight/2-20,120,90);
    //h1.show();
    input.show();
    email.show();
    //address.show();
  proceed.show();
  proceed.style('background-color', 'orange');
  proceed.style('position',' absolute');
  proceed.style('transform','translate(-50%, -50%)');
  proceed.style('-ms-transform','translate(-50%, -50%)');
  proceed.style('color','black');
  proceed.style('font-size','16px');
  proceed.style('padding',' 16px 30px');         proceed.style('cursor',' pointer');
  proceed.style('border-radius','5px');
  proceed.style(' text-align',' center');
  proceed.style('border','none');
    
      proceed1.style('background-color', 'yellow');
      proceed1.style('position',' absolute');
      proceed1.style('transform','translate(-50%, -50%)');
      proceed1.style('-ms-transform','translate(-50%, -50%)');
      proceed1.style('color','white');
      proceed1.style('font-size','16px');
      proceed1.style('padding',' 16px 30px');
      proceed1.style('cursor',' pointer');
      proceed1.style('border-radius','5px');
      proceed1.style(' text-align',' center');
      proceed1.style('border','none');
    
      proceed2.style('background-color', 'black');
      proceed2.style('position',' absolute');
      proceed2.style('transform','translate(-50%, -50%)');
      proceed2.style('-ms-transform','translate(-50%, -50%)');
      proceed2.style('color','orange');
      proceed2.style('font-size','16px');
      proceed2.style('padding',' 16px 30px');
      proceed2.style('cursor',' pointer');
      proceed2.style('border-radius','5px');
      proceed2.style(' text-align',' center');
      proceed2.style('border','none');
    
    input8.style('background-color', 'gray');
      input8.style('position',' absolute');
      input8.style('transform','translate(-50%, -50%)');
      input8.style('-ms-transform','translate(-50%, -50%)');
      input8.style('color','white');
      input8.style('font-size','16px');
      input8.style('padding',' 16px 30px');
      input8.style('cursor',' pointer');
      input8.style('border-radius','5px');
      input8.style(' text-align',' center');
      input8.style('border','none');
    textFont("phosphate")
        textSize(35);
      text("WELCOME TO SHARE ME!",windowWidth/2-250,windowHeight/2-130);
       textSize(20);
  textFont("zapfino");
    text("Here is a platform that will earn you money by preventing the wastage of your food!!",windowWidth/2-500,windowHeight/2-100);
     email.style('background-color', 'gray');
  email.style('position',' absolute');
  email.style('transform','translate(-50%, -50%)');
  email.style('-ms-transform','translate(-50%, -50%)');
  email.style('color','white');
   email.style('font-size','16px');
     email.style('padding',' 16px 30px');
     email.style('cursor',' pointer');
     email.style('border-radius','5px');
   email.style(' text-align',' center');
   email.style('border','none');
    
     input.style('background-color', 'gray');
  input.style('position',' absolute');
  input.style('transform','translate(-50%, -50%)');
  input.style('-ms-transform','translate(-50%, -50%)');
  input.style('color','white');
   input.style('font-size','16px');
    input.style('padding',' 16px 30px');
     input.style('cursor',' pointer');
     input.style('border-radius','5px');
   input.style(' text-align',' center');
   input.style('border','none');
    
  address.style('background-color', 'gray');
  address.style('position',' absolute');
  address.style('transform','translate(-50%, -50%)');
  address.style('-ms-transform','translate(-50%, -50%)');
  address.style('color','white');
   address.style('font-size','16px');
     address.style('padding',' 16px 30px');
     address.style('cursor',' pointer');
     address.style('border-radius','5px');
   address.style(' text-align',' center');
   address.style('border','none');
    
    country.style('background-color', 'gray');
  country.style('position',' absolute');
  country.style('transform','translate(-50%, -50%)');
  country.style('-ms-transform','translate(-50%, -50%)');
 country.style('color','white');
   country.style('font-size','16px');
country.style('padding',' 16px 30px');
     country.style('cursor',' pointer');
     country.style('border-radius','5px');
  country.style(' text-align',' center');
   country.style('border','none');
    
    city.style('background-color', 'gray');
  city.style('position',' absolute');
  city.style('transform','translate(-50%, -50%)');
  city.style('-ms-transform','translate(-50%, -50%)');
  city.style('color','white');
  city.style('font-size','16px');
     city.style('padding',' 16px 30px');
  city.style('cursor',' pointer');
     city.style('border-radius','5px');
   city.style(' text-align',' center');
city.style('border','none');
    
  state.style('background-color', 'gray');
  state.style('position',' absolute');
  state.style('transform','translate(-50%, -50%)');
  state.style('-ms-transform','translate(-50%, -50%)');
  state.style('color','white');
  state.style('font-size','16px');
  state.style('padding',' 16px 30px');
  state.style('cursor',' pointer');
  state.style('border-radius','5px');
  state.style(' text-align',' center');
  state.style('border','none');
    //console.log(count);
     proceed.mousePressed(()=>{
       count++;
     })
  }
    if(count===3){
      image(bg2,0,0,windowWidth, windowHeight);
      input.hide();
      proceed.hide();
      proceed1.show();
      email.hide();
      address.hide();
       val = input.value();
        textSize(20);
  textFont("zapfino");
      text("Hi "+val,windowWidth/2-130,windowHeight/2-50);
      textFont("phosphate")
      textSize(18);
      text("Would You Like to :",windowWidth/2-130,windowHeight/2);
      r1.position(windowWidth/2-130,windowHeight/2+100);
      r1.show();
      if(r1.value() !== ""){
   proceed1.mousePressed(()=>{
       count++;
     console.log("HI");
     })
  }
      else{
        text("Please select your requirement",windowWidth/2,windowHeight/2+200)
      }
    }
 
    if(count===4){
      proceed1.hide();
      r1.hide();
      proceed2.show();
      image(foodbg,0,0,windowWidth, windowHeight);
      input1.style('background-color', 'white');
      input1.style('position',' absolute');
      input1.style('transform','translate(-50%, -50%)');
      input1.style('-ms-transform','translate(-50%, -50%)');
      input1.style('color','gray');
      input1.style('font-size','16px');
      input1.style('padding',' 16px 30px');
      input1.style('cursor',' pointer');
      input1.style('border-radius','5px');
      input1.style(' text-align',' center');
      input1.style('border','none');
      
      input6.style('background-color', 'grey');
      input6.style('position',' absolute');
      input6.style('transform','translate(-50%, -50%)');
      input6.style('-ms-transform','translate(-50%, -50%)');
      input6.style('color','white');
      input6.style('font-size','16px');
      input6.style('padding',' 16px 30px');
      input6.style('cursor',' pointer');
      input6.style('border-radius','5px');
      input6.style(' text-align',' center');
      input6.style('border','none');
      
      input7.style('background-color', 'gray');
      input7.style('position',' absolute');
      input7.style('transform','translate(-50%, -50%)');
      input7.style('-ms-transform','translate(-50%, -50%)');
      input7.style('color','white');
      input7.style('font-size','16px');
      input7.style('padding',' 16px 30px');
      input7.style('cursor',' pointer');
      input7.style('border-radius','5px');
      input7.style(' text-align',' center');
      input7.style('border','none');
      
      input8.style('background-color', 'gray');
      input8.style('position',' absolute');
      input8.style('transform','translate(-50%, -50%)');
      input8.style('-ms-transform','translate(-50%, -50%)');
      input8.style('color','white');
      input8.style('font-size','16px');
      input8.style('padding',' 16px 30px');
      input8.style('cursor',' pointer');
      input8.style('border-radius','5px');
      input8.style(' text-align',' center');
      input8.style('border','none');
      
      input2.style('background-color', 'white');
      input2.style('position',' absolute');
      input2.style('transform','translate(-50%, -50%)');
      input2.style('-ms-transform','translate(-50%, -50%)');
      input2.style('color','gray');
      input2.style('font-size','16px');
      input2.style('padding',' 16px 30px');
      input2.style('cursor',' pointer');
      input2.style('border-radius','5px');
      input2.style(' text-align',' center');
      input2.style('border','none');
      
      input3.style('background-color', 'white');
      input3.style('position',' absolute');
      input3.style('transform','translate(-50%, -50%)');
      input3.style('-ms-transform','translate(-50%, -50%)');
      input3.style('color','gray');
      input3.style('font-size','16px');
      input3.style('padding',' 16px 30px');
      input3.style('cursor',' pointer');
      input3.style('border-radius','5px');
      input3.style(' text-align',' center');
      input3.style('border','none');
      
      input4.style('background-color', 'white');
      input4.style('position',' absolute');
      input4.style('transform','translate(-50%, -50%)');
      input4.style('-ms-transform','translate(-50%, -50%)');
      input4.style('color','gray');
      input4.style('font-size','16px');
      input4.style('padding',' 16px 30px');
      input4.style('cursor',' pointer');
      input4.style('border-radius','5px');
      input4.style(' text-align',' center');
      input4.style('border','none');
      
      input5.style('background-color', 'white');
      input5.style('position',' absolute');
      input5.style('transform','translate(-50%, -50%)');
      input5.style('-ms-transform','translate(-50%, -50%)');
      input5.style('color','gray');
      input5.style('font-size','16px');
      input5.style('padding',' 16px 30px');
      input5.style('cursor',' pointer');
      input5.style('border-radius','5px');
      input5.style(' text-align',' center');
      input5.style('border','none');
      textFont("hiragino sans");
      
      text("Are you from a restaurant/home?",windowWidth/2-70,windowHeight/2-280);
      r3.show();
       text("What would you like to share?",windowWidth/2-70,windowHeight/2-180);
      input1.show();
       text("How much is the quantity approximately?",windowWidth/2-70,windowHeight/2-80);
      input2.show();
       text("Is the food used / unused?",windowWidth/2-70,windowHeight/2+20);
      input3.show();
       text("How many hours is it been since it is cooked or bought?",windowWidth/2-70,windowHeight/2+120);
      input4.show();
      text("If it is bought , from where is the food bought?",windowWidth/2-70,windowHeight/2+220);
      input5.show();
      proceed2.mousePressed(()=>{
       count++;
     })
    }
  if(count===5){
    image(bg3,0,0,windowWidth, windowHeight);
     r3.hide();
       input1.hide();
       input2.hide();
       input3.hide();
       input4.hide();
       input5.hide();
    textFont("phosphate");
    textSize(34);
    text("Quality check form",windowWidth/2-70,windowHeight-650);
    textFont("hiragino sans");
    textSize(20);
       text("Mention any ingredient specification made in the dish",windowWidth/2-70,windowHeight-550);
      input6.show();
       text("Does the food have a pungent smell?",windowWidth/2-70,windowHeight-450);
      input7.show();
       text("Mention if any imprecision in the dish",windowWidth/2-70,windowHeight-350);
      input8.show();
    text("Can the food stay fresh for more than an hour?",windowWidth/2-70,windowHeight-250);
      r5.show()
    text("Is the food healthy? ",windowWidth/2-70,windowHeight-180);
      r6.show();
    textFont("courier new")
    textSize(14);
      text("I hereby agree to the food quality norms and I have self declared the quality of my food",340,windowHeight-50);
    r4.show();
  }
    if(count===6){
      image(bg4,0,0,windowWidth, windowHeight);
     r4.hide();
      input1.hide();
       input2.hide();
       input3.hide();
       input4.hide();
       input5.hide();
      input6.hide();
       input7.hide();
       input8.hide();
      r5.hide();
      r6.hide();
      fill(255);
           textFont("hiragino sans");
      text("Your just one step away from finishing your process!",windowWidth/2-70,windowHeight/2-300);
       textFont("courier new");
       text("Your country:",windowWidth/2,windowHeight/2-230);
       text("Your state:",windowWidth/2,windowHeight/2-130);
       text("Your city:",windowWidth/2,windowHeight/2-30);
       text("Your address:",windowWidth/2,windowHeight/2+70);
      address.show();
      city.show()
      country.show();
      state.show();
    }
    if(count===7){
      image(bg5,0,0,windowWidth, windowHeight);
      image(done,551,212,200,140);
      proceed2.hide();
      address.hide();
      country.hide();
      city.hide();
      state.hide();
      colorMode(RGB);
      fill(240,118,80);
      textSize(40);
       textFont("silom");
       text("Thank you for using SHARE ME!",windowWidth/2-300,windowHeight/2-150);
      textFont("phosphate")
        textSize(35);
      text("A confirmation mail has been sent to your registered email id! ",windowWidth/2-580,windowHeight/2);
      textFont("courier new")
      text("Our pick up service will soon reach you at your address ",windowWidth/2-670,windowHeight/2+50);
      text(" to collect your food and pay you if you have decided to sell!",0,windowHeight/2+100);
      //alert("mail sent successfully");
    }
}
