$('#pagination-demo').twbsPagination({
	
        totalPages: 4,
        visiblePages: 0,
        next: '<img src="images/Fbutton1.png" style="height:19px;">',
        prev: '<img src="images/backBTN.png" style="height:19px;">',
       
        onPageClick: function (event, page) {
            //fetch content and render here
           
       if(page==1){
    	   		
            	$("#page1").prop("hidden",false);            		
            	 $("#page2,#page3,#page4").prop("hidden",true);
//            	 footingAnim2(pre,conVal,steelVal,colSize,d_val,sbc_val,eCover_val,totalDepthvalue);
            }
            else if(page==2){
            	
            	$("#page2").prop("hidden",false);
            	Page1(pre,conVal,steelVal,colSize,d_val,sbc_val,eCover_val);
            	 $("#page1,#page3,#page4").prop("hidden",true);
            }
            else if(page==3){
            	
            	$("#page3").prop("hidden",false);
            	Page2(pre,conVal,steelVal,colSize,d_val,sbc_val,eCover_value2,LfValue,BfValue,wuCorr);
            	 $("#page1,#page2,#page4").prop("hidden",true);
            }
           else if(page==4){
            	
            	$("#page4").prop("hidden",false);
            	Page3();
            	 $("#page1,#page2,#page3").prop("hidden",true);
            }
            
        }

    });