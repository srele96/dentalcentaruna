class NavDrawer extends HTMLElement {
  #onkeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      this.removeAttribute('data-open');
    }
  };

  connectedCallback() {
    this.addEventListener('click', (e) => {
      const action = (e.target as HTMLElement)
        .closest<HTMLElement>('[data-action]')
        ?.getAttribute('data-action');

      if (action === 'toggle') {
        this.toggleAttribute('data-open');
      }
      if (action === 'close') {
        this.removeAttribute('data-open');
      }
    });

    document.addEventListener('keydown', this.#onkeydown);
  }

  disconnectedCallback() {
    document.removeEventListener('keydown', this.#onkeydown);
  }
}

if (!customElements.get('nav-drawer')) {
  customElements.define('nav-drawer', NavDrawer);
}
