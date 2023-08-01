import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Setting");
  }
  getHtml() {
    return `<div>
            <h1>Setting</h1>
        </div>`;
  }
}
