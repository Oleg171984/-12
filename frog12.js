function createEl({ type = 'div', content, attributes  } = {}) {
    const $el = document.createElement(type);// $-означає що ми створили html елемент

    if (content) {
        typeof content === 'string' ? $el.textContent = content : $el.append(content)
    }

    if (attributes) Object.entries(attributes).forEach(([key, value]) => {
        $el.setAttribute(key, value)
    })

    return $el;
}
//
// const p = createEl({ type: 'p', content: 'Hello World', attributes: { class: 'par', id: 1 } })
// const title = createEl({ type: 'h2', content: p, attributes: { class: 'example' } })
// document.body.append(title)
//
// function clearContent(container, flag) {
//     if (!container && container.nodeType !== 1) return;
//
//     while (container.firstElementChild) {
//         container.firstElementChild.remove()
//     }
//
//     if (flag) container.remove()
// }
//
// clearContent(title)
// clearContent(title, true)

/****************************************
 * clone
 ****************************************/

// const container = document.querySelector('[data-button-container]');
//
// console.log(container);
//
// const clone = container.cloneNode();
// const clone2 = container.cloneNode(true);
//
// console.log(clone);
// console.log(clone2);
// console.log(clone2 === container); // false
// clone2.append(createEl({ type: 'p', content: 'hello par' }))
//
// clone2.children[1].classList.remove('btn')
//
// document.body.append(clone2);

/****************************************
 * fragments
 ****************************************/
// const container = document.querySelector('[data-list]');
//
// const data = [1, 2, 3, 4, 5];
//
// function createList(data) {
//     const list = createEl({ type: 'ul' });
//
//     // const fragment = new DocumentFragment()
//     const fragment = document.createDocumentFragment();
//
//     data.forEach( el => {
//         const li = createEl({ type: 'li', content: el });
//
//         fragment.append(li)
//     });
//
//     list.append(fragment);
//
//     return list
// }
//
// container.insertAdjacentElement('beforeend', createList(data))

/****************************************
 * styles
 ****************************************/

// const title = document.getElementById('title');
//
// title.style.fontWeight = 700;
// title.style.cssText = 'color: red; opacity: 1; transition: all 0.5s ease-out';
// console.log(getComputedStyle(title))

/****************************************
 * events
 ****************************************/

// const button = document.querySelector('[data-button]');

// button.addEventListener('click', (e) => {
//     console.log(e)
// })
//
// button.addEventListener('mouseover', (e) => {
//     console.log(e)
// })
//
// document.addEventListener('keydown', (e) => {
//     console.log(e)
// })
//
// document.forms.myForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(e)
// })
//
// document.addEventListener('DOMContentLoaded', (e) => {
//     console.log(e)
// })

// button.onclick = () => {
//     console.log('clicked')
// }
//
// button.onclick = null
//
// window.onresize = (e) => {
//     console.log(e.target.innerWidth)
//
//     if (e.target.innerWidth === 500) {
//         console.log('here')
//         window.onresize = null
//     }
// }

// button.addEventListener('click', () => {
//     console.log('click');
// }, { once: true });
//
// button.addEventListener('click', () => {
//     console.log('click2');
// })
//
// const handleObj = {
//     handleEvent() {
//         console.log('click from obj');
//     }
// };
//
// button.addEventListener('click', handleObj);


// const button = document.querySelector('[data-button]');
// const input = document.querySelector('[data-input]');
// function InputHandlers() {
//     this.handleEvent = e => {
//         const method = 'on' + e.type[0].toUpperCase() + e.type.slice(1);
//
//         console.log(method)
//
//         this[method](e);
//     }
//
//     this.onClick = e => {
//         console.log('click', e);
//     }
//
//     this.onInput = e => {
//         console.log('input', e);
//     }
//
//     this.onChange = e => {
//         console.log('change', e);
//     }
// }
//
// const inputHandler = new InputHandlers().onInput
// const clickHandler = new InputHandlers().onClick
//
// input.addEventListener('input', inputHandler)
// input.addEventListener('change', new InputHandlers())
// input.addEventListener('input', new InputHandlers())
// button.addEventListener('click', clickHandler)
// button.addEventListener('click', new InputHandlers())

/****************************************
 * remove
 ****************************************/

// let counter = 0;
// const clickHandler = () => {
//     counter++
//     console.log('click')
//
//     if (counter === 2) document.body.removeEventListener('click', clickHandler)
// }
//
// document.body.addEventListener('click', clickHandler)

/****************************************
 *
 ****************************************/

// const button = document.querySelector('[data-button]');
// const div = document.querySelector('[data-container]');
// const body = document.body;
//
// button.addEventListener('click', (e) => {
//     console.log('button, click');
//     console.log('button, target => ', e.target);
//     console.log('button, current target => ', e.currentTarget);
// })
//
// div.addEventListener('click', function (e) {
//     // e.stopPropagation()
//     // e.stopImmediatePropagation()
//     console.log('div, click');
//     console.log('div, target => ', e.target);
//     console.log('div, current target => ', e.currentTarget);
//     console.log(e.currentTarget === this)
// }, { capture: true })
//
// body.addEventListener('click', (e) => {
//     console.log('body, click');
//     console.log('body, target => ', e.target);
//     console.log('body, current target => ', e.currentTarget);
// })

/****************************************
 *
 ****************************************/

// function ButtonHandlers(el) {
//     this.submit = (e) => {
//         console.log('submit', e)
//     }
//
//     this.save = (e) => {
//         console.log('save', e)
//     }
//
//     this.reload = (e) => {
//         console.log('reload', e)
//     }
//
//     this.onClick = (e) => {
//         const action = e.target.dataset.action;
//
//         if (action) this[action](e)
//     }
//
//     el.onclick = this.onClick.bind(this)
// }
//
// const container = document.querySelector('[data-button-container]');
// new ButtonHandlers(container)

/****************************************
 *
 ****************************************/

// document.forms.myForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     console.log('submit')
// })
//
// document.querySelector('[data-link]').addEventListener('click', (e) => {
//     e.preventDefault()
//     location.href = 'https://google.com'
// })

/****************************************
 *               Event
 ****************************************/
// const customEvent = new Event('sayHello')
//
// customButton.addEventListener('sayHello', (event) => {
//     console.log('hello from custom event', event)
// })
//
// customButton.dispatchEvent(customEvent);
//
// customButton.addEventListener('click', () => {
//     customButton.dispatchEvent(customEvent);
// })
/****************************************
 *               MouseEvent
 ****************************************/
// const clickEvent = new MouseEvent('show');
//
// customButton.addEventListener('show', event => {
//     console.log(event)
// })
//
// customButton.dispatchEvent(clickEvent)
/****************************************
 *               CustomEvent
 ****************************************/
// const customEvent = new CustomEvent('custom', { detail: 'good luck' })
//
// customButton.addEventListener('custom', (event) => {
//     console.log(event)
// })
//
// customButton.addEventListener('click', () => {
//     customButton.dispatchEvent(customEvent)
// })