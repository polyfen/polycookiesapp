<script>
  var date = new Date();
  date.setTime(date.getTime() + (90 * 24 * 60 * 60 * 1000));
  var expires = "expires=" + date.toUTCString();
  document.cookie = 'consentAccepted=true; ' + expires + '; path=/';
</script>