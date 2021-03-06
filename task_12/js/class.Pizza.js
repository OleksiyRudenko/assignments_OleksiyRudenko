class Pizza {
  constructor(id, dateTimeOrdered, preparationDurationMinutes) {
    this.id = id;
    this.elements = {
      orderedAt: document.getElementById('pizza-' + id + '-orderedAt'),
      eta: document.getElementById('pizza-' + id + '-eta'),
    };
    console.log(this.elements);
    const readyBy = new Date();
    readyBy.setTime(dateTimeOrdered.getTime() + preparationDurationMinutes * 60 * 1000),
    this.props = {
      readyBy: readyBy,
    };
    this.elements.orderedAt.innerText = dateTimeOrdered.toLocaleTimeString(LOCALE);
    this.updateTiming(new Date());
  }

  updateTiming(now) {
    const diffMilliseconds = this.props.readyBy.getTime() - now.getTime();
    if (diffMilliseconds < 1000) {
      this.elements.eta.innerText = 'READY';
      this.elements.eta.classList.add('pizza-ready');
    } else {
      this.elements.eta.innerText = 'ETA: ' + timeMs2Time(this.props.readyBy.getTime() - now.getTime());
    }
  }
}