import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Not Found");
  }

  async getHtml() {
    return `
   	 <p>404 Not Found!</p>
    `;
  }
}
