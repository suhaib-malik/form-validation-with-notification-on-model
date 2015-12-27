<script>
$(function () {
  $.validate({
    modules : 'location, date, security, file, toggleDisabled',
    validateOnBlur : false,
    showHelpOnFocus : false,
    addSuggestions : false,
    showErrorDialogs : false,
    errorMessagePosition : 'bottom', // Instead of 'element' which is default
    onError : function($form) {
      var msgErr = '';
      $form.find('span.form-error').each(function(index, element) {
        msgErr += '<p><li style="margin-bottom:5px;">' + $(element).text() + '</li></p>';
      });
      $('#errMsg').html(msgErr);
	  $( "#dialog" ).dialog({
		   width: 500,
		   height: 200
	  });

    }
  });
});
</script>
