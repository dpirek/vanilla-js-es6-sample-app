let $content = document.querySelector('#content');

function context(html) {
  let wrapperDiv = document.createElement('div');
  wrapperDiv.innerHTML = html;
  return wrapperDiv;
}

function render(input) {
  if(typeof input === 'object') {
    $content.innerHTML = '';
    $content.appendChild(input);
  } else {
    $content.innerHTML = input;
  }
}

export {render, context};
