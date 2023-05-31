class myElement extends HTMLElement {
    // inicializar todo lo que esta en memoria
    constructor() {
        super(); // acceder a los metodos de HTMLElement
        console.log("Templates")
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section>
                <h2>Templates</h2>
                <p>Este es un ejemplo de un template</p>
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
        this.appendChild(this.getTemplate().content.cloneNode(true)); // se envia true para renderizar todos los elementos
    }

    connectedCallback() { 
        this.renderTemplate();
    }
}
customElements.define('my-element', myElement); // define el nombre de la etiqueta que sera usada en el maquetado