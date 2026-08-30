const copyButton = document.getElementById("copy-link");

if (copyButton) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      copyButton.textContent = "Link copied";
      setTimeout(() => {
        copyButton.textContent = "Copy project link";
      }, 2000);
    } catch (error) {
      copyButton.textContent = "Could not copy link";
    }
  });
}
