export default function defaultError() {
  const err = document.getElementById('inline-notify');
  err.innerHTML = `<p class="alert alert-warning" role="alert" >
    City not found!! </p>`;
}
