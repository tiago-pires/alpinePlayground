class Menu extends HTMLElement {
   constructor() {
      super()
      this.innerHTML = `
			<nav>
				<h2>Navigation</h2>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="fetch.html">Fetch</a></li>
					<li><a href="fetch.html">Fetch HTML</a></li>
				</ul>
			</nav>
   `
   }
}

customElements.define('site-menu', Menu)
