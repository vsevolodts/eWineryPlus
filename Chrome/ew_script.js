$(document).ready(function(){
	$('input[name="SOURCECODE"]').attr('list', 'referrals');
	$('input[name="SOURCECODE"]').after("<datalist id='referrals'><option value='John Doe'><option value='John Smith'></datalist>");
});