class Weather {
  constructor(container) {
    this.container = container;
    this.temperatureToday = container.querySelector('.temperature-today');
    this.summaryDaily = container.querySelector('.summary-daily');
    this.key = 'af1000ee120ca1f6469133dccf46491b';
    this.proxy = 'https://cors-anywhere.herokuapp.com/';
  }
  init() {
    window.addEventListener('load', () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const lat = position.coords.latitude,
            long = position.coords.longitude,
            query = `${this.proxy}https://api.darksky.net/forecast/${this.key}/${lat},${long}?units=auto`,
            myHeaders = new Headers();
          myHeaders.append('X-Requested-With', 'XMLHttpRequest');

          fetch(query, { headers: myHeaders })
            .then(data => data.json())
            .then(data => {
              const { temperature: temperatureToday } = data.currently;
              const { summary: summaryDaily } = data.daily;
              this.temperatureToday.textContent = `${Math.floor(
                temperatureToday
              )}`;
              this.summaryDaily.textContent = `${summaryDaily}`;
            })
            .catch(error => console.log(error));
        });
      }
    });
  }
}
export { Weather as default };
