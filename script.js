function validateForm()
	{


//Are there entries in these fields**************************************

 		
//firstName*************************************
 		var firstName = $("#firstName").val();
 	 	if ( firstName.length == 0 )
	 	{

//My issue with addclass is that it is not adding it for more than a 1/2 second so not apparent...what is way around this? my console logs were quick also
//i also tried toggleclass with no luck either...I even had by default invalid but only wrote over valid for 1/2 second...
//but with an alert at the end I am able to delay the quickness....


			//alerts invalid
			$("#firstName").addClass("invalid");
			$("#firstName").removeClass("valid");
			//window.console.log("invalid");
			//$("#firstName").css("border:25px solid green;");
		 }
		 else
		 {
			//alerts valid
		 	$("#firstName").addClass("valid");
		 	$("#firstName").removeClass("invalid");
		 //	window.console.log("valid");
		 }

//lastName*************************************		
		var lastName = $("#lastName").val();
 	 	if ( lastName.length == 0 )
	 	{

			//alerts invalid
			 $("#lastName").addClass("invalid");
			 $("#lastName").removeClass("valid");
			 //window.console.log("invalid");
		 }
		 else
		 {
			//alerts valid
		 	$("#lastName").addClass("valid");
		 	$("#lastName").removeClass("invalid");
		 	//window.console.log("valid");
		 }

//streetAddress*************************************		
		var streetAddress = $("#streetAddress").val();
 	 	if ( streetAddress.length == 0 )
	 	{

			//alerts invalid
			 $("#streetAddress").addClass("invalid");
			 $("#streetAddress").removeClass("valid");
			 //window.console.log("invalid");
		 }
		 else
		 {
			//alerts valid
		 	$("#streetAddress").addClass("valid");
		 	$("#streetAddress").removeClass("invalid");
		 	//window.console.log("valid");
		 }

//city*************************************		
		var city = $("#city").val();
 	 	if ( city.length == 0 )
	 	{

			//alerts invalid
			 $("#city").addClass("invalid");
			 $("#city").removeClass("valid");
			 //window.console.log("invalid");
		 }
		 else
		 {
			//alerts valid
		 	$("#city").addClass("valid");
		 	$("#city").removeClass("invalid");
		 	//window.console.log("valid");
		 }

//state*************************************		
		var state = $("#state").val();
 	 	if ( state.length == 0 )
	 	{

			//alerts invalid
			 $("#state").addClass("invalid");
			 $("#state").removeClass("valid");
			 //window.console.log("invalid");
		 }
		 else
		 {
			//alerts valid
		 	$("#state").addClass("valid");
		 	$("#state").removeClass("invalid");
		 	//window.console.log("valid");
		 }

//Are there still 5 numbers in zipcode

		var zipCode = $("#zipCode").val();
		
		//note I only allowed 5 characters to be typed which I assume is numbers so no need to worry above 5 digits
		if(zipCode.length < 5) 
		{
			//alerts invalid
			$("#zipCode").addClass("invalid");
		}
		else 
		{
			//alerts valid
			$("#zipCode").addClass("valid");
		}

//Is the email valid by checking if @ in string****************************************


		var email = $("#email").val();


		//please note that -1 says @ not there I went one step more saying still would be invalid in position 0 since nothing could be before
		//now of course you could get more crazy but beyond this scope
		if(email.indexOf("@") < 1) 
			{
			//alerts invalid
			$("#email").addClass("invalid");
		}
		else 
		{
			//alerts valid
			$("#email").addClass("valid");
		}


//Are there 10 numbers in the telephone***********************

		var telephone = $("#telephone").val();
		
		//note I only allowed 10 characters to be typed which I assume is numbers so no need to worry above 10 digits
		if(telephone.length < 10) 
		{
			//alerts invalid
			$("#telephone").addClass("invalid");
		}
		else 
		{
			//alerts valid
			$("#telephone").addClass("valid");
		}

//Reformat telephone number***********************

		//window.console.log("(" + telephone[0] + telephone[1] + telephone[2] + ") ") this works here so was able to construct full number

		var newTelephone = ("(" + telephone[0] + telephone[1] + telephone[2] + ") " + telephone[3] + telephone[4] + telephone[5] + "-" + telephone[6] + telephone[7] + telephone[8] + telephone[9]);
		telephone = newTelephone;

		//please note by seeing the console log below i was able to confirm that the submitted phone number is the reformatted one
		//window.console.log(telephone);

//Please note I am still at loss of seeing the red green boxes for more than 1/2 second...and as for the reformatted number I do not see it back
//in my text area but console log does show it will be the one submitted....
//but with an alert at the end I am able to delay the quickness....



//the following alert seems to be a way to show the red and green classes along with the reformatted phone number before the jquery un adds them....
alert("Fields with RED need to be completed. The Green fields are good to go. The telephone will be entered into our records as " + telephone);

		};


$('button').on('click',validateForm);






//Are there five numbers in the zipcode*****************************

function validateZip()
	{
		var zipCode = $("#zipCode").val();
		
		//note I only allowed 5 characters to be typed which I assume is numbers so no need to worry above 5 digits
		if(zipCode.length < 5) 
		{
			//alerts invalid
			$("#zipCode").addClass("invalid");
		}
		else 
		{
			//alerts valid
			$("#zipCode").addClass("valid");
		}
	};

$("#zipCode").on('keyup',validateZip);


//Are there 10 numbers in the Telephone****************************

function validateTelephone()
	{
		var telephone = $("#telephone").val();
		
		//note I only allowed 10 characters to be typed which I assume is numbers so no need to worry above 10 digits
		if(telephone.length < 10) 
		{
			//alerts invalid
			$("#telephone").addClass("invalid");
		}
		else 
		{
			//alerts valid
			$("#telephone").addClass("valid");
		}
	};

$("#telephone").on('keyup',validateTelephone);




















