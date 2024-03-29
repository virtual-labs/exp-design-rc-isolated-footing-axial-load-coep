function loadCalculate(){
		
    
    $("#centerText1").html('DIAGRAM');
    $("#centerText2").html('CALCULATIONS');

    $("#procedure").prop("hidden",true);
//    diagCar();
    
    labels1 =   '<div class="col-sm-12" id="forceEntered" >'
				   +'<div class="col-sm-5">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Calculate Pu for  load '+pre+':  </label>'
				   +'</div>'
				   +'<div class="col-sm-3" id="valueStep1">'
				   +'<input type="text"  value="" id="text1"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitStep1">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submit_load1" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
				   
				   + '<div class="col-sm-12" id="forceEntered" >'
				    +'<div class="col-sm-5">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Effective length lx :  </label>'
				   +'</div>'
				   +'<div class="col-sm-3" id="valueStep1">'
				   +'<input type="text"  value="" id="text2"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitStep1">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submit_load2" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
				   
				      + '<div class="col-sm-12" id="forceEntered" >'
				    +'<div class="col-sm-5">'
				   +'<label  id="enterLoad"  class="" style="font-size:16px;margin:15px 10px ;">Effective length ly :  </label>'
				   +'</div>'
				   +'<div class="col-sm-3" id="valueStep1">'
				   +'<input type="text"  value="" id="text3"  style=margin:15px 10px;width:150%;height:50%;" class=" form-control" />'
				   +'</div>'
				   +'<div class="col-sm-3"  id="submitStep1">'
				   +'<br><button type="submit" class="btn btn-danger"  id="submit_load3" data-toggle="modal" data-target="#myModal" style="width:100%;height:50%;margin-top: -6px;" >Submit</input>'
				   +'</div>'
				   +'</div>'
		$("#canvas-div").html(labels1);	
		
			  
			  id = 1;
			    $("#submit_load1").click(function(){
					 var pu_user = $("#text1").val(); 
			   console.log("presuure"+pu_user);
			    pu_corr = pre * 1.5;
			   console.log("presuur coree"+pu_corr);
			   
			  
				if(pu_user ==""){
					
					 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Error");
					
					
				}
				else
					{
					if (id <= 3) {
						if (pu_user == pu_corr) {

							
						} else if (pu_user != pu_corr) {
//					$("#myModal").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
//					
					 $(".modal-header").html("Error Message");
					$(".modal-header").css("background","#9c1203b0");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Error");		
						
						}


					} else if (id == 4)
					 {
//						$("#myModal").html("<b class='boldTextBlue'>Formula : Pu  = 1.5 X P </b> ");
						
					 $(".modal-header").html("Formula Message");
					$(".modal-header").css("background","blue");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Formula : Pu  = 1.5 X P");

						
					} else {
						pu_user =  $("#text1").val(); 
//						flow = flowAns.toFixed(2);
						if (pu_user == pu_corr) {
						
						
					
						} else {

//							 $("#myModal").html("<b class='boldTextBlue'>Correct Answer is  " +pu_corr+'</b>');

							 $(".modal-header").html("Error Message");
					$(".modal-header").css("background","blue");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("correct answer is "+pu_corr);
						}
					}
					id++;
					}
					
			   
				});
				var lx_ecorr = 0;
				var ly_ecorr = 0;
				console.log("supprt"+support);
				if (support == 1){
					lx_ecorr = 0.65 * lx;
					ly_ecorr = 0.65 * ly ;
					console.log("lx "+lx_ecorr)
				}
				else if (support == 2){
					lx_ecorr = 0.8 * lx;
					ly_ecorr = 0.8 * ly ;
				}
				else if (support == 3){
					lx_ecorr = lx;
					ly_ecorr = ly ;
				}
				else if (support == 2){
					lx_ecorr = 2 * lx;
					ly_ecorr = 2 * ly ;
				}
				
				 $("#submit_load2").click(function(){
					  var lx_user = $("#text2").val(); 
					  
					  
				if(lx_user ==""){
					
					 $(".modal-header").html("Error Message");
			$(".modal-header").css("background","#9c1203b0");
			$("#btnModal").removeClass("btn-success").addClass("btn-danger");
			$("#MsgModal").html("Error");
					
					
				}
				else
					{
					if (id <= 3) {
						if (lx_user == lx_ecorr) {

							
						} else if (lx_user != lx_ecorr) {
//					$("#myModal").html("<b class='boldTextRed'>Entered value is incorrect.Try again .</b> ");
//					
					 $(".modal-header").html("Error Message");
					$(".modal-header").css("background","#9c1203b0");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Error");		
						
						}


					} else if (id == 4)
					 {
//						$("#myModal").html("<b class='boldTextBlue'>Formula : Pu  = 1.5 X P </b> ");
						
					 $(".modal-header").html("Formula Message");
					$(".modal-header").css("background","blue");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("Formula : Pu  = 1.5 X P");

						
					} else {
						lx_user =  $("#text1").val(); 
//						flow = flowAns.toFixed(2);
						if (lx_user == lx_ecorr) {
						
						
					
						} else {

//							 $("#myModal").html("<b class='boldTextBlue'>Correct Answer is  " +pu_corr+'</b>');

							 $(".modal-header").html("Error Message");
					$(".modal-header").css("background","blue");
					$("#btnModal").removeClass("btn-success").addClass("btn-danger");
					$("#MsgModal").html("correct answer is "+lx_ecorr);
						}
					}
					id++;
					}
					
					 });
}