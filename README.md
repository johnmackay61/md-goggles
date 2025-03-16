# MD-Goggles

MD-Goggles is a lightweight, client-side web application that interprets native Markdown file URLs using hashbangs (e.g., `#!/page`) and renders the resulting HTML in the browser. This tool supports fetching Markdown files from local directories, including handling directories by defaulting to an `index.md` file and falling back to a `404.md` page when a file is not found.

## Features

- **Hashbang-based routing:** Use URLs like `#!/page` to specify which Markdown file to load.
- **Directory support:** Automatically loads `index.md` for directory URLs (e.g., `#!/docs/`).
- **404 fallback:** If a Markdown file isn’t found, the application loads a `404.md` file.
- **Client-side only:** Built entirely with HTML, JavaScript, and libraries so it can run from disk without a server.
- **XSS protection:** Uses [DOMPurify](https://github.com/cure53/DOMPurify) to sanitize HTML and prevent cross-site scripting vulnerabilities.
- **Markdown parsing:** Utilizes [marked.js](https://github.com/markedjs/marked) for converting Markdown into HTML.

## How It Works

1. **URL Parsing:** The application checks the URL’s hash for a path after `#!/`.  
2. **File Resolution:**  
   - If no path is provided, it defaults to `index.md`.
   - If the path ends with a slash, it loads `index.md` from that directory.
   - If a file name is provided without an extension, `.md` is appended.
3. **Fetching & Rendering:** The specified Markdown file is fetched, parsed into HTML using marked.js, and sanitized with DOMPurify before being injected into the DOM.
4. **Error Handling:** If a file is not found, the app attempts to load `404.md`.

## Getting Started

### Running Locally

Since MD-Goggles is purely client-side, you can run it directly from disk:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/md-goggles.git
   cd md-goggles

2. **Open `index.html`:**  
    Open the `index.html` file in your web browser.  
    _Note:_ Some browsers may restrict local file requests. If you encounter issues, consider running a simple local web server (e.g., using Python’s `http.server`).
    
    ```bash
    python3 -m http.server
    ```
    
    Then, navigate to `http://localhost:8000` in your browser.

## Dependencies

- [marked.js](https://github.com/markedjs/marked) – Markdown parser (MIT License)
- [DOMPurify](https://github.com/cure53/DOMPurify) – HTML sanitizer (MIT License)

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests if you have ideas or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments

Special thanks to [ChatGPT](https://openai.com/chatgpt) by OpenAI for helping generate the code snippets, documentation, and ideas behind MD-Goggles.
