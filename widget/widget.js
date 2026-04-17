class AgencyChatWidget extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div style="position: fixed; bottom: 20px; right: 20px; width: 260px; padding: 16px; border: 1px solid #ccc; background: white; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); font-family: Arial, sans-serif;">
        <strong>Agency Chat Widget</strong>
        <p style="margin: 8px 0 0 0;">Widget loaded successfully.</p>
      </div>
    `;
  }
}

customElements.define("agency-chat-widget", AgencyChatWidget);