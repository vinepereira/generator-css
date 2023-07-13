# Generator CSS
- Um gerador de CSS que cria um botão com opções selecionadas visualmente, baseado em um mini sistema no-code.

# Conceitos Aplicados
- Pegar o atributo `name` como propriedade de um elemento `event.target.name;`
- Pegar o atributo `value` ou o seu valor futuro definido pelo usuário como propriedade de um elemento `event.target.value;`
- Uso do `elements`, propriedade do `document.forms`.
- Uso do `cssText`, propriedade do `CSSStyleDeclaration`.
- Objeto com métodos com o mesmo nome do atributo `name`.
- Objeto passado dentro de uma função de forma totalmente dinâmica: 
  ```const name = event.target.name;
     const value = event.target.value;
     handleStyle[name](value);```
- Conceito de localStorage para salvar preferências do usuário diretamente no navegador:
```const properties = Object.keys(localStorage); // array com keys
  properties.forEach(prop => {
    handleStyle[prop](localStorage[prop]);
    controles.elements[prop].value = localStorage[prop];
  });```