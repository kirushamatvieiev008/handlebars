import football from "./football.json"
import template from "./template.hbs"

console.log(template);

const list = document.querySelector('.jsList');

list.innerHTML = template({football})