var container;
var boxSize;
var defaultBlock = 16;


$(document).ready(function()
{
	
	container = $('.grid');
	boxSize = container.width();
	createGrid(defaultBlock);
	changeBlockSize(defaultBlock);


	$('.buttons_reset').click(function()
		{
			$('.square').css("background-color", "white");
		});


		$('.square').hover(function()
		{
			
			$(this).css("background-color", "black");
	});

}
)


var createGrid = function(block_size)
{
	$('.square').remove();
	var size = Math.floor(boxSize / (block_size));

	for(var i = 0; i < size; i++)
	{
		for(var j = 0; j < size; j++)
		{ 
			container.append('<div class="square"></div>');
		}
	}
}

var changeBlockSize = function(block_size)
{
	var block_size_str = block_size + "px";
	$('.square').css("width", block_size_str);
	$('.square').css("height", block_size_str);
}