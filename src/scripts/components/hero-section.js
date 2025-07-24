class HeroSection extends HTMLElement {
  emptyContent() {
    this.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.emptyContent();
    this.innerHTML += `
       <div class="home-container">
          <div class="home-content">
            <h1>Start Your Kota <span>Banjarmasin</span> Exploration</h1>
            <p>
               Eksplore berbagai produk dari berbagai UMKM di seluruh penjuru Kota Banjarmasin
            </p>
            <button id="cat">
              Jelajahi Sekarang <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      `;
  }
}

customElements.define('hero-section', HeroSection);
