class FooterBar extends HTMLElement {
  emptyContent() {
    this.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.emptyContent();
    this.innerHTML += `
      <div class="footer-container">
        <div class="footer-content">
          <div class="footer-info">
            <a href="#" class="footer-logo"><h3>Eta<span>Ban</span></h3></a>

            <p class="footer-description">
              Temukan dan dukung UMKM lokal di Etalase Banua! Jelajahi bisnis-bisnis unik dari Kota Banjarmasin dan bantu tumbuhkan ekonomi bersama.
            </p>
          </div>

          <div class="footer-data">
            <div>
              <h3 class="footer-title">About</h3>

              <ul class="footer-links">
                <li>
                  <a href="#/about" class="footer-link">About us</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="footer-title">Tech Stack</h3>

              <ul class="footer-links">
                <li>
                  <a href="https://nodejs.org/en" class="footer-link">NodeJs</a>
                </li>

                <li>
                  <a href="https://hapi.dev/" class="footer-link">HapiJs</a>
                </li>

                <li>
                  <a href="https://webpack.js.org/" class="footer-link">Webpack</a>
                </li>

                <li>
                  <a href="https://sass-lang.com/" class="footer-link">Sass</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="footer-title">Contact</h3>

              <ul class="footer-links">
                <li>
                  <a href="https://www.linkedin.com/in/mhmmdoo" class="footer-link">Muhammad Ridho (LinkedIn).</a>
                </li>

                <li>
                  <a href="https://www.instagram.com/cn.doo" class="footer-link">Muhammad Ridho (Instagram).</a>
                </li>

                <li>
                  <a href="https://wa.me/6289603217713?text=Halo.." class="footer-link">Muhammad Ridho (WhatsApp).</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-group">
          
          <div class="footer-social">
            <a
              href="https://www.instagram.com/cn.doo"
              class="footer-social-link"
            >
              <i class="ri-instagram-line"></i>
            </a>
          </div>

          <div class="footer-copy">
            <p>
              &#169; Copyright <span>Etalase Banua, BAMEN.</span> All rights reserved
            </p>
          </div>
        </div>
      </div>
`;
  }
}

customElements.define('footer-bar', FooterBar);
