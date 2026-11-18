/* Proteções básicas de interface — não substituem segurança no servidor */
(() => {
  const isEditable = (target) => target instanceof Element &&
    (target.closest('input, textarea, select, [contenteditable="true"]') !== null);

  document.addEventListener('contextmenu', (event) => {
    if (!isEditable(event.target)) event.preventDefault();
  });

  document.addEventListener('copy', (event) => {
    if (!isEditable(event.target)) event.preventDefault();
  });

  document.addEventListener('cut', (event) => {
    if (!isEditable(event.target)) event.preventDefault();
  });

  document.addEventListener('dragstart', (event) => {
    if (!isEditable(event.target)) event.preventDefault();
  });

  document.addEventListener('keydown', (event) => {
    if (isEditable(event.target)) return;
    const key = event.key.toLowerCase();
    const modifier = event.ctrlKey || event.metaKey;
    if (modifier && ['c', 'x', 'u', 's'].includes(key)) {
      event.preventDefault();
    }
  });
})();
