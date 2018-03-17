function givealert(message)
{
  window.alert(message);
}
function subscribeAdd()
{
  var sub = document.getElementById("subscribe").value;
  var data = {
    email: sub
  }
  var firebaseRef = firebase.database();
  firebaseRef.ref("subs").push(data);
  givealert("You have successfully subscribed for future hangtime updates.");

}
