//listen to submit button
$(document).ready(function(){
	var quote;
	var author;
	function getNewQuote(){
		
		$.ajax({
			url:'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en',
			jsonp:'jsonp',
			dataType:'jsonp',
			success:function(data){
				quote=data.quoteText;
				author=data.quoteAuthor;
				$('.quote-text').text(quote);
				if(author)
				{
					$('.quote-author').text('--- ' + author);

				}
				else{
					$('.quote-author').text('---  unknown');
				}

				}
			});

}
$('#generate_quote').on('click',function(e){
	e.preventDefault();
	getNewQuote();
});
$('#tweet').on('click',function(e){
	e.preventDefault();
	window.open('http://twitter.com/intent/tweet?text=' + encodeURIComponent( quote + '----'));
	});
getNewQuote();

});

