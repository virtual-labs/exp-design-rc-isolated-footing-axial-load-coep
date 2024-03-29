
function Page3(){
	
	var selection4 ='<div class="row">'
	   +'<div class="col-sm-6">'
	   +' <div class="alert alert-info">'
   	   +' <strong class="labelstyleInfo "><center>SBC = '+SBCValue2+' kN/m<sup>2</sup></center></strong> '
  	   +'</div>'
  	   +'</div>'
	   +'<div class="col-sm-6">'
	   +' <div class="alert alert-info">'
	   +' <strong class="labelstyleInfo "><center>P = '+workingLoadValue2+' kN</center></strong> '	   
	   +'</div>'
	   +'</div>'
	   +'</div>'
		
	   +'<div class="row calRowBorder" >'
	   +'<div class="col-sm-5">'
	   +'<label class="labelstyle ">Total Depth (mm) : </label>'
	   +'</div>'
	   +'<div class="col-sm-4">'
	   +'<input type="number" id="totalDepth"  class=" form-control "  >'
	   +'</div>'	    
	   +'<div class="col-sm-3" id="buttonDiv">'
	   +'<button type="button"   class="btn btn-danger btnDesign" style = "width:100%;" id="totalDepthSub" data-toggle="modal" data-target="#myModal" ><b>CHECK ANSWER</b></button>'
	   +'</div>'
	   +'</div>'
	  
	 
	   $("#page4Div2").html(selection4); 
	
	console.log("page3............");
}




