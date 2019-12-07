
export default function getForm() {
  const controls = document.getElementById('controls');

  controls.innerHTML = `<form><div class="border d-flex flex-column justify-content-center" id="input-item"><div class="searchCont"><input type='text' placeholder="City name e.g Lusaka" id="inputText"/></div><div class="submit"><input type="submit" value="Submit" id="submit"></div>
      </div></form>`;
}
