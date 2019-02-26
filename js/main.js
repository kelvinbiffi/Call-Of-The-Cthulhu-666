(function () {
  
  function init() {
    elements = {
      call: document.querySelector('main .call'),
      timer: document.querySelector('main .call .counter')
    };
    
    var now, nc666 = new Date("Mar 29, 2019 11:11:11");
    
    setInterval(function () {
      now = new Date();
      var res = Math.abs(now - nc666) / 1000;
      var days = Math.floor(res / 86400);
      var hours = Math.floor(res / 3600) % 24;
      var minutes = Math.floor(res / 60) % 60;
      var seconds = Math.floor(res % 60);
      
      var time = days + ':' + hours + ':' + minutes + ':' + seconds;
      
      elements.timer.innerText = time;
      
    }, 1000);
    
    if (!elements.call.classList.contains('remove')) {
      elements.call.classList.add('remove');
    }
  }
  
  setTimeout(function () {
    init();
  }, 2000);
})();