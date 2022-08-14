$(document).ready(function () {
  $('.hero__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      '<button type="button" class="slick-prev"><svg  class="slider-svg" width="11" height="25" viewBox="0 -2 17 30"  xmlns="http://www.w3.org/2000/svg"><path d="M0.450251 15.905L14.3828 29.18C14.6152 29.4016 14.9241 29.5253 15.2453 29.5253C15.5664 29.5253 15.8753 29.4016 16.1077 29.18L16.1228 29.165C16.2358 29.0576 16.3259 28.9283 16.3874 28.7849C16.449 28.6416 16.4807 28.4873 16.4807 28.3313C16.4807 28.1753 16.449 28.0209 16.3874 27.8776C16.3259 27.7343 16.2358 27.605 16.1228 27.4975L3.00275 14.9975L16.1228 2.50253C16.2358 2.3951 16.3259 2.26578 16.3874 2.12245C16.449 1.97911 16.4807 1.82476 16.4807 1.66878C16.4807 1.5128 16.449 1.35845 16.3874 1.21511C16.3259 1.07178 16.2358 0.942463 16.1228 0.83503L16.1078 0.82003C15.8753 0.598417 15.5664 0.474789 15.2453 0.474789C14.9241 0.474789 14.6152 0.598417 14.3828 0.82003L0.450251 14.095C0.32772 14.2118 0.230172 14.3522 0.163521 14.5077C0.0968686 14.6633 0.0625002 14.8308 0.0625002 15C0.0625002 15.1693 0.0968686 15.3368 0.163521 15.4923C0.230172 15.6479 0.32772 15.7883 0.450251 15.905Z"/></svg></button> ',
    nextArrow:
      '<button type="button" class="slick-next"><svg  class="slider-svg" width="11" height="25" viewBox="0 -2 17 30"  xmlns="http://www.w3.org/2000/svg"><path d="M16.5497 14.095L2.61725 0.819969C2.38478 0.598357 2.07593 0.474731 1.75475 0.474731C1.43357 0.474731 1.12472 0.598357 0.89225 0.819969L0.877249 0.834969C0.764161 0.942402 0.674113 1.07172 0.612578 1.21505C0.551044 1.35838 0.519311 1.51274 0.519311 1.66872C0.519311 1.8247 0.551044 1.97905 0.612578 2.12239C0.674112 2.26572 0.764161 2.39504 0.877249 2.50247L13.9972 15.0025L0.877248 27.4975C0.76416 27.6049 0.674111 27.7342 0.612577 27.8776C0.551043 28.0209 0.51931 28.1752 0.51931 28.3312C0.51931 28.4872 0.551043 28.6416 0.612577 28.7849C0.674111 28.9282 0.76416 29.0575 0.877248 29.165L0.892249 29.18C1.12472 29.4016 1.43357 29.5252 1.75475 29.5252C2.07592 29.5252 2.38478 29.4016 2.61725 29.18L16.5497 15.905C16.6723 15.7882 16.7698 15.6478 16.8365 15.4923C16.9031 15.3367 16.9375 15.1692 16.9375 15C16.9375 14.8307 16.9031 14.6632 16.8365 14.5077C16.7698 14.3521 16.6723 14.2117 16.5497 14.095Z"/></svg></button>',
  });
});
