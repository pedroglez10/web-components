class myElement extends HTMLElement {
    // inicializar todo lo que esta en memoria
    constructor() {
        super(); // acceder a los metodos de HTMLElement
        console.log("Attributes");
        this.attachShadow({ mode: "open"}); // se visualizado al inspeccionar
    }

    // observador
    static get observedAttributes() {
        return ['title', 'paragraph'];
    }

    // este metodo escucha cambios en el DOM
    attributeChangedCallback(attr, oldVal, newVal) {
        console.log(attr, oldVal, newVal)
        if(oldVal !== newVal){
            this[attr] = newVal;
        }
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2>${this.title}</h2>
                <p>${this.paragraph}</p>
            </section>
            ${this.getStyles()}
        `;

        return template;
    }

    getStyles() {
        const styles = `
            <style>
                h2 {
                    color: red;
                }
            </style>
        `;

        return styles;
    }

    renderTemplate() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true)); // se envia true para renderizar todos los elementos
    }

    connectedCallback() { 
        this.renderTemplate();
    }
}
customElements.define('my-element', myElement); // define el nombre de la etiqueta que sera usada en el maquetado