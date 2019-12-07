export default function defaultError() {
  const err = document.getElementById('inline-notify');
  err.innerHTML = `<p class="alert alert-warning" role="alert" data-dismiss="alert" >
    City not found!! <span id="close" aria-hidden="true">&times;</span> </p>`;
}
