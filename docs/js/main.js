(function () {
  
  /**
   * Init Function
   */
  function init() {
    /**
     * Elements
     */
    elements = {
      call: document.querySelector('main .call'),
      timer: document.querySelector('main .call .counter')
    };

    var i = 0;
    
    /**
     * Timewatch
     */
    var now, nc666 = new Date("Mar 29, 2019 11:11:11");
    setInterval(function () {
      elements.timer.classList.add('timechange');
      
      setTimeout(function () {
        now = new Date();
        var res = Math.abs(now - nc666) / 1000;
        var days = Math.floor(res / 86400);
        var hours = Math.floor(res / 3600) % 24;
        var minutes = Math.floor(res / 60) % 60;
        var seconds = Math.floor(res % 60);
        
        var time = days + ':' + hours + ':' + minutes + ':' + seconds;
        
        elements.timer.innerText = time;
        
        elements.timer.classList.remove('timechange');
      }, 300);
    }, 1000);
    
    /**
     * Create clouds
     */
    var numberClouds = Math.floor(Math.random() * (20 - 15) ) + 15;
    var cloudbeam, cloudMarginLeft, cloudMarginTop, cloudOpacity;
    for (i = 0; i < Math.floor(window.innerWidth/numberClouds); i++) {
      // Create a cloudbeam
      cloudbeam = document.createElement('div');
      cloudbeam.classList.add('cloud');

      // Define Left position
      cloudMarginLeft = Math.floor(Math.random() * ((window.innerWidth) - 0) ) + 0;
      cloudbeam.style.marginLeft = (cloudMarginLeft < (window.innerWidth/3) ? '-' : '') + cloudMarginLeft + 'px';

      // Define Top position
      cloudMarginTop = Math.floor(Math.random() * ((5) - 2) ) + 2;
      cloudbeam.style.marginTop = '-' + cloudMarginTop + '%';

      // Define Z position
      cloudbeam.style.zIndex = Math.floor(Math.random() * (18 - 14) ) + 14;

      // Deffine opacity
      cloudOpacity = Math.floor(Math.random() * (9 - 4) ) + 4;
      cloudbeam.style.background = 'rgba(0,0,0,0.' + cloudOpacity + ')';

      cloudbeam.style.width = (Math.floor(Math.random() * (44 - 25) ) + 25) + '%';
      cloudbeam.style.height = (Math.floor(Math.random() * (22 - 14) ) + 14) + '%';

      document.body.insertAdjacentElement('afterbegin', cloudbeam)
      
    }

    /**
     * Create lightbeams
     */
    var numberLights = Math.floor(Math.random() * (20 - 15) ) + 15;
    var lightbeam, lightMarginLeft, lightOpacity, lightBgColor;
    for (i = 0; i < Math.floor(window.innerWidth/numberLights); i++) {
      // Create a lightbeam
      lightbeam = document.createElement('div');
      lightbeam.classList.add('lightbeam');

      // Define Left position
      lightMarginLeft = Math.floor(Math.random() * ((window.innerWidth+500) - 0) ) + 0;
      lightbeam.style.marginLeft = lightMarginLeft + 'px';

      // Define Z position
      lightbeam.style.zIndex = Math.floor(Math.random() * (16 - 1) ) + 1;

      // Define width
      lightbeam.style.width = Math.floor(Math.random() * (52 - 22) ) + 22;

      // Deffine opacity
      lightOpacity = (100-(lightbeam.style.zIndex * 6)) / 100;
      lightbeam.style.opacity = (lightOpacity > 0.5 ? '0.49' : lightOpacity);

      // Define black intense
      lightBgColor = (lightbeam.style.zIndex*6);
      lightbeam.style.backgroundColor = 'hsl(2, 100%, ' + (lightBgColor > 0.5 ? '0.49' : lightBgColor) + '%)';

      document.body.insertAdjacentElement('afterbegin', lightbeam)
    }

    /**
     * Remove blur effect from elements
     */
    setTimeout(function () {
      elements.call.classList.add('remove');
    }, 500)
  }
  
  /**
   * Wait seconds to init JS
   */
  setTimeout(function () {
    init();
  }, 1500);
})();