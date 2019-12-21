const clock = container => {
  const clock = container.querySelector('.clock');
  const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    },
    printDate = new Date().toLocaleTimeString('en-us', options),
    date = `<span>${printDate}</span>`;
  clock.innerHTML = date;
};
export { clock as default };
