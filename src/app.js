import football from "./football.json"
import template from "./template.hbs"
import newFootball from "./newFootball.json"

console.log(template);

const list = document.querySelector('.jsList');

list.innerHTML = template({newFootball})