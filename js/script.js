const toggle = document.getElementById("mode-toggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

// Add dark mode styles
const css = `
.dark-mode {
    background-color: #333;
    color: #fff;
}

.dark-mode .left-side {
    background-color: #000;
}
`;
const style = document.createElement("style");
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
