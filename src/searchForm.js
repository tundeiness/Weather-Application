const getSearch = () => {
  // const searchContainer = document.createElement('div');
  // searchContainer.setAttribute('class', 'search d-flex flex-column justify-content-center');
  // searchContainer.setAttribute('id', 'controls');


  const formCont = document.createElement('form');


  const inputSubmit = document.createElement('div');
  inputSubmit.setAttribute('class', 'border d-flex flex-column justify-content-center');
  inputSubmit.setAttribute('id', 'input-item');


  const searchCont = document.createElement('div');
  searchCont.setAttribute('class', 'searchCont');


  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'input');
  input.setAttribute('placeholder', 'City name e.g Lusaka');
  input.setAttribute('id', 'inputText');

  searchCont.appendChild(input);

  const submit = document.createElement('div');
  submit.setAttribute('class', 'submit');

  const input2 = document.createElement('input');
  input2.setAttribute('type', 'submit');
  input2.setAttribute('value', 'Submit');
  input2.setAttribute('id', 'submit');

  // submit.appendChild(input2);
  submit.appendChild(input2);

  inputSubmit.appendChild(searchCont);
  inputSubmit.appendChild(submit);
  formCont.appendChild(inputSubmit);

  const searchContainer = document.getElementById('controls');

  searchContainer.appendChild(formCont);

  return searchContainer;
};

export default getSearch;
