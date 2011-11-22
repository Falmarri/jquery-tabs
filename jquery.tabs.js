
(function( $ ){
	
	
	var methods = {
			
			init : function (options){
				
				
				if (options.movable){
					
					
				}
				
				
				
				this.each(function(){
					this.find(this).delegate('click.tab', methods.close);
				});
				
				this.each(function(){
					this.click(function(){
						
					});
				});
			},
				
			close: function(event){
				
				
				
			}
				
				
				
			}
			

	
	

	
	$.fn.Tab = function (options){
		
		var settings = $.extend({
			
			'title' 		:	'Tab',
			'url'			:	'#',
			'movable' 		:	false,
			'closeClass'	: '.close',
			'container'		: null,
			'axis'			: 'x'
			
			
		}, options);
		

	}
	
	
	
	
	
	
	
	
})( jQuery );








function TabContainer(){
	
	this._tabs = [];
	this.sortFunction = function (){};
	
	
}

TabContainer.prototype.addTab = function (tab){
	
	this._tabs.push(tab);
}


function Tab (options){
	
	this.id = id;
	this.title = title;
	this.url = url;
	this.element = el;
	this.movable = movable;
	
	this._onCreateListeners = [];
	this._onCloseListeners = [];
	this._onClickListeners = [];
	
}

Tab.prototype.registerOnCreateListener(listener){
	this._onCreateListeners.push(listener);
}
Tab.prototype.registerOnCloseListener(listener){
	this._onCloseListeners.push(listener);
}
Tab.prototype.registerOnClickListener(listener){
	this._onClickListeners.push(listener);
}
