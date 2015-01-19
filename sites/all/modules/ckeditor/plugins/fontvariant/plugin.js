/**
 * @file Plugin for inserting small caps text format font.
 */
( function() {
  CKEDITOR.plugins.add( 'fontvariant',
  {
    // Wrap Drupal plugin in a proxy plugin.
    init: function(editor)
    {
      var pluginCommand = {
        exec: function (e) {
	    	var style = new CKEDITOR.style( { element: 'span',   styles: { 'font-variant':'small-caps'}} );
	        if(typeof this.status == "undefined" || this.status == false)
	        {
	            e.applyStyle(style);
	        	//this.insertHtml(style);
	            this.status = true;
	        }
	        else
	        {
	            e.removeStyle(style);
	        	//this.removeHtml(style);
	            this.status = false;
	        }
	    }
      };
      editor.addCommand( 'fontvariant', pluginCommand );

      editor.ui.addButton( 'SmallCaps',
      {
        label: 'Small Caps',
        command: 'fontvariant',
        icon: this.path + 'icon.png'
      });
    }
  });

} )();
