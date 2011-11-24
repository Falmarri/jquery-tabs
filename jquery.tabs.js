


    	var menuData = {
				
	
				id : '#adminTabs',
				tabs : [
				            {
					        	title  : 'Tab',
					        	url    : '',
					        	hash   : '#',
					        	id     : 'evse-302',
                                data   : {}

				        	
				             },
				             {
	                            title  : 'Tab2',
	                            url    : '',
	                            hash   : '#',
	                            id     : 'evse-304',
                                data   : {}
		                            
		                     }

				        ],
				        
			    close_all: 
				    {
                        title   :   'Close All',
                        onClose :   ''
                        
                        
                    }

		};


(function (jQuery){
	
	var storageLoc = 'tab.menu.data';

	
	
	function getMenu(loc){
		try{
			return JSON.parse(localStorage ? localStorage.getItem(loc) : $.cookie(loc)) || (function(){throw 1;})();
		}catch(e){
			localStorage.removeItem(loc);
			return {
				id 		: '#adminTabs',
				tabs 	: []
			};
		}
		
	}
    
    
    function saveMenu(menu, loc){
        
        if (localStorage){
            
            localStorage.setItem(JSON.stringify(menu), loc);
            
        }else{
            $.cookie(loc, JSON.stringify(menu),{path:'/'});
            
        }
    
    }
    
    
    function clearMenu(loc){
        
        localStorage ? localStorage.clearItem(loc) : $.cookie(loc, '', {path: '/', expires : 'Thu, 01-Jan-1970 00:00:01 GMT'});
        
    }
    
    

	
	
	

	$.extend({
		
		
		setupTabs	:	function(target, template, data){

			
			$(target).append(ich[template](getMenu(storageLoc)));

			
		},
		
		
		registerTab 	:	function(tab, options, menu){
			
			
                         var settings = $.extend({
                             
                             position: last,
                             openNow:  true,
                             
                             
                         }, options);
            
			             var tst =   {
				    			title  : 'Tab',
					        	url    : '',
					        	hash   : '#',
					        	id     : 'evse-302',
                                data   : 
                                    {
                                        
                                    }
				
				
			                };
            
            
            var m = menu || getMenu(storageLoc);
            
            
            
            m.tabs.push(tab);
            
            menu.append(ich.tabView(tab));
            
            saveMenu(menu, storageLoc);


			

		},
		
		
		unregisterTab	:	function (arg){
			
			
			
			
			
		}
		
	});
	

	
})(jQuery);


