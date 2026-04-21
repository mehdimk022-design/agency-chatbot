class AgencyChatWidget extends HTMLElement {
  connectedCallback() {
    if (this._initialized) return;
    this._initialized = true;

    this.isOpen = false;

    this.innerHTML = `
      <div class="agency-chat-launcher" style="
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: #111;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        font-family: Arial, sans-serif;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 9999;
      ">
        Chat
      </div>

      <div class="agency-chat-panel" style="
        position: fixed;
        bottom: 90px;
        right: 20px;
        width: 320px;
        border: 1px solid #ccc;
        background: white;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        font-family: Arial, sans-serif;
        border-radius: 12px;
        overflow: hidden;
        display: none;
        z-index: 9999;
      ">
        <div style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: #111;
          color: white;
        ">
          <strong>Agency Chat</strong>
          <button class="agency-chat-close" style="
            background: transparent;
            border: none;
            color: white;
            font-size: 18px;
            cursor: pointer;
          ">×</button>
        </div>

        <div style="padding: 16px;">
          Widget panel opened successfully.
        </div>
      </div>
    `;

    this.launcher = this.querySelector(".agency-chat-launcher");
    this.panel = this.querySelector(".agency-chat-panel");
    this.closeButton = this.querySelector(".agency-chat-close");

    this.launcher.addEventListener("click", () => this.openPanel());
    this.closeButton.addEventListener("click", () => this.closePanel());
  }

  openPanel() {
    this.panel.style.display = "block";
    this.launcher.style.display = "none";
    this.isOpen = true;
  }

  closePanel() {
    this.panel.style.display = "none";
    this.launcher.style.display = "flex";
    this.isOpen = false;
  }
}

customElements.define("agency-chat-widget", AgencyChatWidget);