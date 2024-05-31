class Background extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
        <style>
            .background {
                width: 100%;
                height: 100%;
                min-height: 100vh;
                position: relative;
                user-drag: none;
                -webkit-user-drag: none;
                user-select: none;
                -moz-user-select: none;
                -webkit-user-select: none;
                -ms-user-select: none;
            }

            #scan {
                opacity: 0.2;
            }

            #scan, #bezel {
                position: absolute;
                width: 100%;
                height: 100%;
                user-drag: none;
                -webkit-user-drag: none;
                user-select: none;
                -moz-user-select: none;
                -webkit-user-select: none;
                -ms-user-select: none;
            }

            @media only screen and (max-width: 1200px) {
                #scan, #bezel {
                    display: none;
                }
            }

            ::slotted(navbar-component) {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                z-index: 1; /* Ensure it sits on top of the background */
            }

            @media only screen and (max-width: 1200px) {
                ::slotted(navbar-component) {
                    position: sticky;
                }
            }
        </style>
        <div class="background">
            <img src="/images/scanlines.png" id="scan">
            <img src="/images/bezel.png" id="bezel">
            <slot></slot>
        </div>
        `;
    }
}

customElements.define('background-component', Background);
