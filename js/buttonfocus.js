document.querySelectorAll('.control-btn').forEach(button => {
  button.addEventListener('click', function() {

    const wasActive = this.classList.contains('active');

    document.querySelectorAll('.control-btn').forEach(btn => {
      btn.classList.remove('active');
      btn.blur();
    });
    
    if (!wasActive) {
      this.classList.add('active');
      this.focus();
    }
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.control-btn');
  const cards = document.querySelectorAll('.tour__card');
  let activeButton = null;

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const city = this.dataset.city;

      if (activeButton === this) {
        this.classList.remove('active');
        activeButton = null;
        cards.forEach(card => card.classList.remove('hidden'));
        return;
      }
      
      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      activeButton = this;
      
      cards.forEach(card => {
        const cities = card.dataset.cities?.split(' ') || [];
        card.classList.toggle('hidden', !cities.includes(city));
      });
    });
  });
});


