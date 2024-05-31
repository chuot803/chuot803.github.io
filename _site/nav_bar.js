class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', 'https://unpkg.com/nes.css@latest/css/nes.min.css');

        this.shadowRoot.innerHTML = `
            <style>
                .nav-bar-container {
                    display: flex;
                    justify-content: center; /* Center horizontally */
                    align-items: center; /* Center vertically */
                    z-index: 1;
                    margin-top: 50px;
                }

                .nav-bar-container a {
                    margin: 0 10px; /* Adjust margin between buttons as needed */
                }

                .active {
                    text-decoration: underline;
                }
            </style>
            <div class="nav-bar-container">
                <a href="index.html"><button id="about-me" class="nes-btn">About Me</button></a>
                <a href="project.html"><button id="project" class="nes-btn is-disabled">Project</button></a>
                <a href="blog.html"><button id="blog" class="nes-btn">Blog</button></a>
            </div>
        `;

        this.shadowRoot.appendChild(link);

        this.setActiveButton();
    }

    setActiveButton() {
        const currentPage = window.location.pathname.split('/').pop();
        console.log("Current page:", currentPage);
        const buttons = this.shadowRoot.querySelectorAll('.nav-bar-container a button');
        buttons[0].classList.add('active');

        buttons.forEach(button => {
            const buttonPage = button.parentElement.getAttribute('href');
            console.log("Button page:", buttonPage);
            if (buttonPage === currentPage) {
                console.log("Active button:", button);
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
}

customElements.define('navbar-component', NavBar);
