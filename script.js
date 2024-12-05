const imprimir = () => {
  console.log('imprimir');
}

const imprimirpls = () => {
  console.log('curso desarrollo backend con nodejs 2024');
}

const otraFuncion = () => {
  console.log('hola...');
}

class Menu {
  constructor(menuItems) {
    this.menuItems = menuItems;
    this.init();
  }

  init() {
    this.createNavbar();
  }

  createMenuItem(label, children = [], clickHandler = null) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    div.textContent = label;
    li.appendChild(div);

    if (clickHandler && children.length === 0) {
      div.addEventListener('click', clickHandler);
    } else if (clickHandler && children.length > 0) {
      console.warn(`El elemento "${label}" tiene hijos y no debería tener una función de clic.`);
    }

    if (children.length > 0) {
      div.classList.add('has-children');
      const subMenu = document.createElement('ul');
      children.forEach(child => {
        const childItem = this.createMenuItem(child.label, child.children, child.clickHandler);
        subMenu.appendChild(childItem);
      });
      li.appendChild(subMenu);
    }

    return li;
  }

  createNavbar() {

    const navbar = document.createElement('div');
    navbar.classList.add('navbar');

    const menuContainer = document.createElement('ul');
    menuContainer.id = 'menu';
    menuContainer.classList.add('menu');

    this.menuItems.forEach(item => {
      const menuItem = this.createMenuItem(item.label, item.children, item.clickHandler);
      menuContainer.appendChild(menuItem);
    });

    navbar.appendChild(menuContainer);

    document.body.appendChild(navbar);
  }
}

const menuItems = [
  { label: 'Archivo', children: [
    { label: 'Nuevo', clickHandler: imprimir },
    { label: 'Abrir', clickHandler: imprimir },
    { label: 'Guardar', clickHandler: imprimir }
  ]},
  { label: 'Editar', children: [
    { label: 'Copiar', clickHandler: otraFuncion },
    { label: 'Pegar', clickHandler: otraFuncion },
    { label: 'Cortar', clickHandler: otraFuncion }
  ]},
  { label: 'Ver', children: [
    { label: 'Ajustes', children: [
        { label: 'Configuración', children: [
            { label: 'Opciones avanzadas', clickHandler: imprimir },
            { label: 'Opciones básicas', clickHandler: imprimir },
            { label: 'Curso nodejs', clickHandler: imprimirpls }
        ]},
        { label: 'Test', clickHandler: imprimir },
    ]},
    { label: 'Temas', clickHandler: imprimir }
  ]},
  { label: 'Ayuda', clickHandler: imprimir }
];

new Menu(menuItems);

