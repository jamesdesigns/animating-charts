document.addEventListener('DOMContentLoaded', function() {
  let chart = window.chart = new EasyPieChart(document.querySelector('span'), {
    easing: 'easeOutElastic',
    delay: 3000,
    barColor: '#ef0f0f',
    trackColor: '#ccc',
    scaleColor: false,
    lineWidth: 20,
    trackWidth: 16,
    lineCap: 'butt',
    onStep: function(from, to, percent) {
      this.el.children[0].innerHTML = Math.round(percent);
    }
  });

  // document.querySelector('.js_update').addEventListener('click', function(e) {
  //   chart.update(Math.random()*200-100);
  // });

  // This adds the animation on the window loading
  document.querySelector('.js_update').window.onload(chart.update(Math.random()*200-100));
});

