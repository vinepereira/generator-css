const controles = document.getElementById('controles');
const css = document.querySelector('.css');
const btn = document.querySelector('.btn');
const reset = document.querySelector('.reset');

controles.addEventListener('input', handleChange);
reset.addEventListener('click', resetValues);

const defaultStyles = {
  color: '', // Estilo padrão de cor
  backgroundColor: '', // Estilo padrão de cor de fundo
  height: '', // Estilo padrão de altura
  width: '', // Estilo padrão de largura
  border: '', // Estilo padrão de borda
  borderRadius: '', // Estilo padrão de raio de borda
  fontFamily: '', // Estilo padrão de família de fonte
  fontSize: '', // Estilo padrão de tamanho de fonte
};

const handleStyle = {
  element: btn,
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + 'px';
  },
  width(value) {
    this.element.style.width = value + 'px';
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'px';
  },
}

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  handleStyle[name](value);
  showCss();
  saveValues(name, value);
}

function saveValues(name, value) {
  localStorage[name] = value;
}


function setValues() {
  const properties = Object.keys(localStorage); // array com keys

  properties.forEach(prop => {
    handleStyle[prop](localStorage[prop]);
    controles.elements[prop].value = localStorage[prop];
  });
  showCss();
}
setValues();

function resetValues(event) {
  event.preventDefault();
  const properties = Object.keys(localStorage); // array com keys

  properties.forEach(prop => {
    localStorage.removeItem(prop);
    controles.elements[prop].value = '';
  });

  for (const style in defaultStyles) {
    btn.style[style] = defaultStyles[style];
  }

  css.innerText = '';
  btn.innerText = 'Clique';
}


function showCss() {
  css.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>')
}

const media = matchMedia('(max-width: 400px)').matches;

if (media) {
  controles.querySelector('#width').max = 350;
}