function handleBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = 'index.html'; // запасной вариант перехода
  }
}