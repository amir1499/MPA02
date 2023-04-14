// Get the input and preview elements
const input = document.getElementById("markdown-input");
const preview = document.getElementById("markdown-preview");

// Function to convert markdown to HTML
function convertMarkdownToHTML(markdown) {
  // Define the regex patterns for formatting
  const boldRegex = /(\*\*|__)(.*?)\1/g;
  const italicRegex = /(\*|_)(.*?)\1/g;
  const codeRegex = /`(.+?)`/g;

  // Replace each formatting pattern with HTML
  const html = markdown
    .replace(boldRegex, "<strong>$2</strong>")
    .replace(italicRegex, "<em>$2</em>")
    .replace(codeRegex, "<code>$1</code>");

  // Return the HTML
  return html;
}

// Function to update the preview with the input value
function updatePreview() {
  const markdown = input.value;
  const html = convertMarkdownToHTML(markdown);
  preview.innerHTML = html;
}

// Listen for input events on the input element
input.addEventListener("input", updatePreview);

// Initialize the preview with the default input value
updatePreview();
