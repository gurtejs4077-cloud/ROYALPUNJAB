
'use client';


import { useEffect } from 'react';

export default function Home() {
  

  
  useEffect(() => {
    // Canvas WebGL effect has been removed in favor of a native CSS backdrop-filter glass effect
    // which provides better performance and a consistent blur across the entire form.
  }, []);

  return (
    <main dangerouslySetInnerHTML={{ __html: `<!-- ===== CINEMATIC HERO SECTION ===== -->
  <section class="hero cinematic-hero royal-hero" id="home">
    <div class="hero-bg">
      <video src="hero_bg.mp4" class="hero-video" id="heroVideo" autoplay loop muted playsinline></video>
      <div class="hero-overlay royal-overlay"></div>
      <div class="royal-particles"></div>
    </div>

    <div class="hero-content-wrapper">
      <div class="hero-title-section">
        <span class="punjabi-accent">ਰਾਇਲ ਪੰਜਾਬ</span>
        <h1 class="hero-huge-title">ROYAL PUNJAB|RIDE</h1>
        <div class="royal-divider">
          <span class="line"></span>
          <span class="diamond"></span>
          <span class="line"></span>
        </div>
        <p class="hero-subtitle">Experience the finest journey across Punjab.</p>
        <div style="margin-top: 25px;">
          <a href="wedding-fleet.html" class="btn-primary" style="display: inline-flex; align-items: center; gap: 8px; font-weight: 500; letter-spacing: 0.5px;">
            Book for Wedding/Events
          </a>
        </div>
      </div>

      
      <!-- ===== ROYAL GLASSMORPHIC FORM ===== -->
      <div class="royal-glass-form" id="booking" style="position: relative; z-index: 2;">
        <svg style="width:0; height:0; position:absolute; z-index:-1;">
    <filter id="liquid-glass" primitiveUnits="objectBoundingBox">
      <feImage result="map" width="100%" height="100%" x="0" y="0"
        href="data:image/webp;base64,UklGRq4vAABXRUJQVlA4WAoAAAAQAAAA5wEAhwAAQUxQSOYWAAABHAVpGzCrf9t7EiJCYdIGTDpvURGm9n7K+YS32rZ1W8q0LSSEBCQgAQlIwEGGA3CQOAAHSEDCJSEk4KDvUmL31vrYkSX3ufgXEb4gSbKt2LatxlqIgNBBzbM3ikHVkvUvq7btKpaOBCQgIRIiAQeNg46DwgE4oB1QDuKgS0IcXBykXieHkwdjX/4iAhZtK3ErSBYGEelp+4aM/5/+z14+//jLlz/++s/Xr4//kl9C8Ns8DaajU+lPX/74+viv/eWxOXsO+eHL3/88/ut/2b0zref99evjX8NLmNt1fP7178e/jJcw9k3G//XP49/Iy2qaa7328Xkk9ZnWx0VUj3bcyCY4Pi7C6reeEagEohnRCbQQwFmUp9ggYQj8MChjTSI0Ck7G/bh6P5ykNU9yP+10G8I2UAwXeQ96DQwNjqyPu/c4tK+5CtGOK0oM7AH5f767lHpotXVYYI66B+HjMhHj43C5wok3YDH4/vZFZRkB7rNnEfC39WS2Q3K78y525wFNTPf5f+/fN9YI1YyDvjuzV5rQtsfn1Ez1ka3PkeGxOZ6IODxDJqCLpF7vdb9Z3s/ufLr6jf/55zbW3LodwwVVg7Lmao+p3eGcqDFDGuuKnlBZAPSbnkYtTX+mZl2y57Gq85F3tDv7m7/yzpjXHoVA3YUObsHz80W3IUK1E8yRqggxTMzD4If2230ys7RDxWrLu9o9GdSWNwNRC2yMIg+HkTVT3BOZER49XLBMdljemLFMjw8VwZ8OdBti4lWdt7c7dzaSc5yILtztsTMT1GFGn/tysM23nF3xbOsnh/eQGKkxhWGEalljCvWZ+LDE+9t97uqEfb08rdYwZGhheLzG2SJzKS77OIAVgPDjf9jHt6c+0mjinS/v13iz9RV3vsPdmbNG1E+nD6s83jBrBEnlBiTojuJogGJNtzxtsIoD2CFuXYipzhGWHhWqCBSqd7l7GMrnuHzH6910FO+XYwgcDxoFRJNk2GUcpQ6I/GhLmqisuBS6uSFpfAz3Yb9Yatyed7r781ZYfr3+3FfXs1MykSbVcg4GiOKX19SZ9xFRwhG+UZGiROjsXhePVu12fCZTJ3CJ4Z3uXnyxz28RutHa5yCKG6jgfTBPuA9jHL7YdlAa2trNEr7BLANd3qNYcWZqnkvlDe8+F5Q/9k8jCFk17ObrIf0O/5U/iDnqcqA70mURr8FUN5pmQEzDcxuWvOPd1+KrbO4fd0vXK5OTtYEy5C2TA5L4ok6Y31WHR9ZR9lQr6IjwruSd775W6NVa2zz1fir2k1GWnT573Eu3mfMjIikYZkM4MDCnTWbmLrpK/Hs0KD5C8rZ3n0tnw0j76WuU8P1YBIjsvcESbnOQMY+gGC/sd/gG+hKKtDijJHhrcSj/GHa/FZ8oGLXeLx1IW+cgU8pqD0PzMzU3oG5lQ/ZaDPDMYq+aAPSEmHN+JiVI0hoHTvPt77732z5ed2K7NHs9FtCIk4BdNkKLRLvOKlFcw+UiovM4OB5sGgepyML+a4TEu/I29/dFtjJulojJR4Tg71ybApEdca0TSnaumNJyCWH2pjENASlQS/NIXMWtiPV9CHsvuftev08/lemYIcUnHSu6XEMvaBq41tqf/m0siLj7xeXsnBmhxY5z+nCwX4Iu4euTPaE4EQorgogisHrBtsAMdX+Huje7nlx3hMpKovdf+YftDQqytChXfEh7D5nyC8rzNTICINmpK5Ni0ngcAMzpmiYDwOMtmUTiCjvx2S2dIeSguP/QHZ3xYIeGhTt1CsCOIiEuVw8pGjVznDJppuojl30i9RvXccXzmXGj2b3H3XM38c/PZseyeOdplXhFekzZMZ2fUGuIBsKCcgQg4Ikqt4PDTkQiWQtMUBFAEhUH8vuvoAvnvGMCEP4/vMmZA2PnkmAJsQsHeFAIk43F00OS3sa/1TDJTPss2698T+i3V22L3PsIeFAHmWWi1FUh29TqpniVOt5hGA/q40Yubt4yXDEQomvldUNhfuuSvjHzPBysYhBMSmRrpuIUHJhQk5uw5V4EwpMp1NvklGkc03WYeC0KETcZ409HkEcwnEaE3EdNnIcfCb1jjWNfZyhhGH48AvsJ4WL+mYTM5i+yFNyM6PhbkuMGYREv48VihVyHXb9RjoE0HvoOuaO7fxxUYnQj1wB0DOZUagcEXfVkJ/nBgV+vl5yMfFaJs0myb9BjyNSsY9FbwZNq21wEFOEJ8Pk/vO1fSa6bOPZFCMc7grz9YXf8rBBPaK3qUJEfJG1A8nuytO1jg8CvWGEY1Z4o1gb3uEjILmNm5YfMXH3GtvyETX+j4jAXkkaA7FDQIdPzLZOcUJsqLQFxboX/MZ95f7MqPku/6IAGXer6xchZyiqcG2Tw4oSVcO0Q0vqOlmEcpsyBw2pwzcifb6t2th64vASkXGXzY9U7aFvkqJEOWSkEU0oL0FrnOfr432tJ5OtPUG1T0cg5yqNTNFAqKFxl80fxGGPFzIiASv+sEPaGMmewBjUEZNFtVCwzaG3PVSe5l+AIRNeFCzu2+H/7Cp2pbOjRUjNFFMX8ZEGl0D4uNWi4ykocIgBkGF+HAIHRNjAqioi4y7vjPtlTPTMXwl7aQD7gu9yVk+VdBwmVMnljIx4++8hq0qOtmjkwT1+RW4N0LhPQuahKrjGVIMy2hW3lgO8lqoLLBHAaTvRIgaPLNFx5ChJ8hTcsBdO383ouHspeqwelcvfEOELFMF0a+jWZJzZYWqZQlj9FnUeMq37zGWfbwRbvkDKOR0OKzAUNO5y8O+H24nczTdDZniPDwMUgIJDV1sEJn7xWMscorAcT3niXE+kcQS0NUMjkkoiNu43cbvQGGagTd6ycWgkkPbSb0Fi0iiYKTXvjPsVTPTMXwl7aQD7gu9yVk+VdBwmVMnljIx4++8hq0qOtmjkwT1+RW4N0LhPQuahKrjGVIMy2hW3lgO8lqoLLBHAaTvRIgaPLNFx5ChJ8hTcsBdO383ouHspeqwelcvfEOELFMF0a+jWZJzZYWqZQlj9FnUeMq37zGWfbwRbvkDKOR0OKzAUNO5y8O+H24nczTdDZniPDwMUgIJDV1sEJn7xWMscorAcT3niXE+kcQS0NUMjkkoiNu43cbvQGGagTd6ycWgkkPbSb0Fi0iiYKTXvjPsVTPTMXwl7aQD7gu9yVk+VdBwmVMnljIx4++8hq0qOtmjkwT1+RW4N0LhPQuahKrjGVIMy2hW3lgO8lqoLLBHAaTvRIgaPLNFx5ChJ8hTcsBdO383ouHspeqwelcvfEOELFMF0a+jWZJzZYWqZQlj9FnUeMq37zGWfbwRbvkDKOR0OKzAUNO5y8O+H24nczTdDZniPDwMUgIJDV1sEJn7xWMscorAcT3niXE+kcQS0NUMjkkoiNu43cbvQGGagTd6ycWgkkPbSb0Fi0iiYKTXvjPsVTPTMXwl7aQD7gu9yVk+VdBwmVMnljIx4++8hq0qOtmjkwT1+RW4N0LhPQuahKrjGVIMy2hW3lgO8lqoLLBHAaTvRIgaPLNFx5ChJ8hTcsBdO383ouHspeqwelcvfEOELFMF0a+jWZJzZYWqZQlj9FnUeMq37zGWfbwRbvkDKOR0OKzAUNO5y8O+H24nczTdDZniPDwMUgIJDV1sEJn7xWMscorAcT3niXE+kcQS0NUMjkkoiNu43cbvQGGagTd6ycWgkkPbSb0Fi0iiYKTXvjPsVTPTMXwl7aQD7gu9yVk+VdBwmVMnljIx4++8hq0qOtmjkwT1+RW4N0LhPQuahKrjGVIMy2hW3lgO8lqoLLBHAaTvRIgaPLNFx5ChJ8hTcsBdO383ouHspeqwelcvfEOELFMF0a+jWZJzZYWqZQlj9FnUeMq37zGWfbwRbvkDKOR0OKzAUNO5y8O+H24nczTdDZniPDwMUgIJDV1sEJn7xWMscorAcT3niXE+kcQS0NUMjkkoiNu43cbvQGGagTd6ycWgkkPbSb0Fi0iiYKTXvjPsVTPTMXwl7aQD7gu9yVk+VdBwmVMnljIx4++8hq0qOtmjkwT1+RW4N0LhPQuahKrjGVIMy2hW3lgO8lqoLLBHAaTvRIgaPLNFx5ChJ8hTcsBdO383ouHspeqwelcvfEOELFMF0a+jWZJzZYWqZQlj9FnUeMq37zGWfbwRbvkDKOR0OKzAUNO5y8O+H24nczTdDZniPDwMUgIJDV1sEJn7xWMscorAcT3niXE+kcQS0NUMjkkoiNu43cbvQGGagTd6ycWgkkPbSb0Fi0iiYKTXvjPsVTPTMXwl7aQD7gu9yVk+VdBwmVMnljIx4++8hq0qOtmjkwT1+RW4N0LhPQuahKrjGVIMy2hW3lgO8lqoLLBHAaTvRIgaPLNFx5ChJ8hTcsBdO383ouHspeqwelcvfEOELFMF0a+jWZJzZYWqZQlj9FnUeMq37zGWfbwRbvkDKOR0OKzAUNO5y8O+H24nczTdDZniPDwMUgIJDV1sEJn7xWMscorAcT3niXE+kcQS0NUMjkkoiNu43cbvQGGagTd6ycWgkkPbSb0Fi0iiYKTXvjPsVTPTMXwl7aQD7gu9yVk+VdBwmVMnljIx4++8hq0qOtmjkwT1+RW4N0LhPQuahKrjGVIMy2hW3lgO8lqoLLBHAaTvRIgaPLNFx5ChJ8hTcsBdO383ouHspeqwelcvfEOELFMF0a+jWZJzZYWqZQlj9FnUeMq37zGWfbwRbvkDKOR0OKzAUNO5y8O+H24nczTdDZniPDwMUgIJDV1sEJn7xWMscorAcT3niXE+kcQS0NUMjkkoiNu43cbvQGGagTd6ycWgkkPbSb0Fi0iiYKTXvjPsVTPTMXwl7aQD7gu9yVk+VdBwmVMnljIx4++8hq0qOtmjkwT1+RW4N0LhPQuahKrjGVIMy2hW3lgO8lqoLLBHAaTvRIgaPLNFx5ChJ8hTcsBdO383ouHspeqwelcvfEOELFMF0a+jWZJzZYWqZQlj9FnUeMq37zGWfbwRbvkDKOR0OKzAUNO5y8O+H24nczTdDZniPDwMUgIJDV1sEJn7xWMscorAcT3niXE+kcQS0NUMjkkoiNu43cbvQGGagTd6ycWgkkPbSb0Fi0iiYKTXvjPsVTPTMXwl7aQD7gu9yVk+VdBwmVMnljIx4++8hq0qOtmjkwT1+RW4N0LhPQuahKrjGVIMy2hW3lgO8lqoLLBHAaTvRIgaPLNFx5ChJ8hTcsBdO383ouHspeqwelcvfEOELFMF0a+jWZJzZYWqZQlj9FnUeMq37zGWfbwRbvkDKOR0OKzAUNO5y8O+H24nczTdDZniPDwMUgIJDV1sEJn7xWMscorAcT3niXE+kcQS0NUMjkkoiNu43cbvQGGagTd6ycWgkkPbSb0Fi0iiYKTXvjPsVTPTMXwl7aQD7gu9yVk+VdBwmVMnljIx4++8hq0qOtmjkwT1+RW4N0LhPQuahKrjGVIMy2hW3lgO8lqoLLBHAaTvRIgaPLNFx5ChJ8hTcsBdO383ouHspeqwelcvfEOELFMF0a+jWZJzZYWqZQlj9FnUeMq37zGWfbwRbvkDKOR0OKzAUNO5y8O+H24nczTdDZniPDwMUgIJDV1sEJn7xWMscorAcT3niXE+kcQS0NUMjkkoiNu43cbvQGGagTd6ycWgkkPbSb0Fi0iiYKTXvjPsVTPTMXwl7aQD7gu9yVk+VdBwmVMnljIx4++8hq0qOtmjkwT1+RW4N0LhPQuahKrjGVIMy2hW3lgO8lqoLLBHAaTvRIgaPLNFx5ChJ8hTcsBdO383ouHspeqwelcvfEOELFMF0a+jWZJzZYWqZQlj9FnUeMq37zGWfbwRbvkDKOR0OKzAUNO5y8O+H24nczTdDZniPDwMUgIJDV1sEJn7xWMscorAcT3niXE+kcQS0NUMjkkoiNu43cbvQGGagTd6ycWgkkPbSb0Fi0iiYKTXvjPsVTPTMXwl7aQD7gu9yVk+VdBwmVMnljIx4++8hq0qOtmjkwT1+RW4N0LhPQuahKrjGVIMy2hW3lgO8lqoLLBHAaTvRIgaPLNFx5ChJ8hTcsBdO383ouHspeqwelcvfEOELFMF0a+jWZJzZYWqZQlj9FnUeMq37zGWfbwRbvkDKOR0OKzAUNO5y8O+H24nczTdDZniPDwMUgIJDV1sEJn7xWMscorAcT3niXE+kcQS0NUMjkkoiNu43cbvQGGagTd6ycWgkkPbSb0Fi0iiYKTXvjPsVTPTMXwl7aQD7gu9yVk+VdBwmVMnljIx4++8hq0n0vA/A7ZPhvW39P7f3y3wZlPZscgUPh2Pz7lOebDveN6N6jZ4OaM+iR7969eN6O6pXoDms6uKIdV+vD/gDmvPof9D9606g/6H/Y/O9w/6H/wfqx3g+I/9D/gfeD4z/0PhAAAAA==" />
      <feGaussianBlur in="SourceGraphic" stdDeviation="0.04" result="blur" />
      <feDisplacementMap id="disp" in="blur" in2="map" scale="0.5" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
    </filter>
  </svg>
        <div class="glass-card">
          <h2>Book Your Royal Ride</h2>

          <!-- PRIMARY SELECTOR -->
          <fieldset class="switcher">
            <legend class="switcher__legend">Choose trip type</legend>

            <label class="switcher__option">
              <input class="switcher__input" type="radio" name="trip-type" value="oneway" c-option="1" checked onchange="setTripType('oneway')" />
              <span class="switcher__text">ONE WAY</span>
            </label>
            <label class="switcher__option">
              <input class="switcher__input" type="radio" name="trip-type" value="roundtrip" c-option="2" onchange="setTripType('roundtrip')" />
              <span class="switcher__text">ROUND</span>
            </label>
            <label class="switcher__option">
              <input class="switcher__input" type="radio" name="trip-type" value="airport" c-option="3" onchange="setTripType('airport')" />
              <span class="switcher__text">AIRPORT</span>
            </label>
          </fieldset>

          <form onsubmit="submitBooking(event)" id="bookingForm">
            <!-- Pickup Location -->
            <div class="form-group" style="position: relative;">
              <div class="input-wrapper autocomplete-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="#e91e63" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <input type="text" id="pickup" name="pickup" placeholder="Pickup Location" autocomplete="off" required style="outline: none;">
              </div>
              <ul class="suggestions-dropdown" id="pickup-suggestions"></ul>
            </div>

            <!-- AIRPORT UI (Hidden by default) -->
            <div id="airportUI" style="display: none; margin-bottom: 16px;">
              <div class="form-row" style="margin-bottom: 10px; padding: 0 10px;">
                <label style="color: #fff; font-size: 14px; display: flex; gap: 8px; align-items: center; cursor: pointer; font-weight: 500;">
                  <input type="radio" name="airportDir" value="to" checked onchange="toggleAirportDir()"> To Airport
                </label>
                <label style="color: #fff; font-size: 14px; display: flex; gap: 8px; align-items: center; cursor: pointer; font-weight: 500;">
                  <input type="radio" name="airportDir" value="from" onchange="toggleAirportDir()"> From Airport
                </label>
              </div>
              <div class="input-wrapper">
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                <select id="airportSelect" onchange="toggleAirportDir()" style="flex:1; border:none; background:transparent; outline:none; font-family:inherit; font-size:14.5px; font-weight:500; color:var(--text-main);">
                  <option value="Sri Guru Ram Dass Jee International Airport, Amritsar, Punjab">Amritsar Airport (ATQ)</option>
                  <option value="Shaheed Bhagat Singh International Airport, Chandigarh">Chandigarh Airport (IXC)</option>
                  <option value="Indira Gandhi International Airport, New Delhi">Delhi Airport (DEL)</option>
                </select>
              </div>
            </div>

            <!-- Drop Location -->
            <div class="form-group" style="position: relative;">
              <div class="input-wrapper autocomplete-container">
                <svg viewBox="0 0 24 24" fill="#f44336" stroke="#f44336" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
                <input type="text" id="dropoff" name="dropoff" placeholder="Drop Location" autocomplete="off" required style="outline: none;">
              </div>
              <ul class="suggestions-dropdown" id="dropoff-suggestions"></ul>
            </div>

            <!-- Date & Time Row -->
            <div class="grid-row">
              <div class="input-wrapper icon-right">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                <input type="date" id="date" name="date" required style="outline: none;">
              </div>
              
              <div class="input-wrapper icon-right">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <input type="time" id="time" name="time" required style="outline: none;">
              </div>
            </div>

            <!-- SECONDARY SELECTOR -->
            <fieldset class="switcher switcher--rect">
              <legend class="switcher__legend">Choose vehicle</legend>

              <label class="switcher__option">
                <input class="switcher__input" type="radio" name="vehicle" value="5" c-option="1" checked onchange="selectCab('seater5')" />
                <span class="switcher__text">5 Seater</span>
              </label>
              <label class="switcher__option">
                <input class="switcher__input" type="radio" name="vehicle" value="7" c-option="2" onchange="selectCab('seater7')" />
                <span class="switcher__text">7 Seater</span>
              </label>
              <label class="switcher__option">
                <input class="switcher__input" type="radio" name="vehicle" value="luxury" c-option="3" onchange="selectCab('luxury')" />
                <span class="switcher__text">Luxury</span>
              </label>
            </fieldset>

            <!-- Contact Info Row -->
            <div class="grid-row">
              <div class="input-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <input type="text" id="name" name="name" placeholder="Name" required style="outline: none;">
              </div>
              
              <div class="input-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                <input type="tel" id="phone" name="phone" placeholder="Phone (10 digits)" maxlength="10" required pattern="[0-9]{10}" style="outline: none;">
              </div>
            </div>

            <div class="r-fare" id="fareEstimate" style="display:none; margin-bottom: 15px; color: white;">
              <span>Est. Fare: <strong id="fareAmount">₹0</strong></span>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="submit-btn" id="submitBtn">
              CONFIRM BOOKING &rarr;
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Bottom corner labels -->
    <div class="hero-bottom-labels">
      <span class="label-left">PREMIUM TAXI SERVICE</span>
      <span class="label-center">LUXURY CABS & RENTALS</span>
      <span class="label-right">AMRITSAR, PUNJAB</span>
    </div>
  </section>

  <!-- ===== SERVICES SECTION ===== -->
  <section class="services-section" id="services">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Our Services</span>
        <h2 class="section-title">Everything You Need, Everywhere in Punjab</h2>
        <p class="section-subtitle">From local city rides to intercity travel across all of Punjab, we've got you
          covered.</p>
      </div>
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon-wrap orange"><svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></div>
          <h3>City Rides</h3>
          <p>Quick local rides within Amritsar, Ludhiana, Chandigarh, Jalandhar and all major cities of Punjab.</p>
          <ul class="service-features">
            <li>AC Cabs available 24/7</li>
            <li>Pick & Drop in 10 mins</li>
            <li>No surge pricing</li>
          </ul>
        </div>
        <div class="service-card featured">
          <div class="service-badge-top">Most Popular</div>
          <div class="service-icon-wrap gold"><svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg></div>
          <h3>Intercity Travel</h3>
          <p>Comfortable long-distance rides between cities like Amritsar to Delhi, Chandigarh to Ludhiana and more.</p>
          <ul class="service-features">
            <li>Comfortable sedans & SUVs</li>
            <li>Professional long-distance drivers</li>
            <li>Rest stops included</li>
          </ul>
        </div>
        <div class="service-card">
          <div class="service-icon-wrap blue"><svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
          <h3>Airport Transfers</h3>
          <p>Reliable pick-up and drop-off service from Sri Guru Ram Dass Jee International Airport, Amritsar.</p>
          <ul class="service-features">
            <li>Flight tracking</li>
            <li>Free waiting (45 min)</li>
            <li>Baggage assistance</li>
          </ul>
        </div>
        <div class="service-card">
          <div class="service-icon-wrap green"><svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg></div>
          <h3>Pilgrimage Tours</h3>
          <p>Dedicated cab service for religious tours — Golden Temple, Durgiana Mandir, Wagah Border and more.</p>
          <ul class="service-features">
            <li>Knowledgeable guides</li>
            <li>Flexible itinerary</li>
            <li>Group bookings available</li>
          </ul>
        </div>
        <div class="service-card">
          <div class="service-icon-wrap purple"><svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
          <h3>Wedding & Events</h3>
          <p>Luxury fleets for weddings, corporate events, and special occasions across Punjab.</p>
          <ul class="service-features">
            <li>Decorated vehicles available</li>
            <li>Multi-vehicle packages</li>
            <li>Pre-planned routes</li>
          </ul>
        </div>
        <div class="service-card">
          <div class="service-icon-wrap teal"><svg width="32" height="32" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
          <h3>Hourly Rentals</h3>
          <p>Rent a cab by the hour for shopping, meetings, sightseeing or errands — flexible and affordable.</p>
          <ul class="service-features">
            <li>Starting 2 hrs</li>
            <li>Driver included</li>
            <li>No hidden km charges</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== FLEET SECTION ===== -->
  <section class="fleet-section" id="fleet">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Our Fleet</span>
        <h2 class="section-title">Choose Your Perfect Ride</h2>
        <p class="section-subtitle">A premium fleet of well-maintained vehicles for every need and budget.</p>
      </div>
      <div class="fleet-grid">
        <div class="fleet-card" onclick="selectCabAndScroll('seater5')">
          <div class="fleet-card-image economy-bg">
            <img src="5seater.png" alt="5-Seater Swift Dzire Taxi for Rent in Punjab" class="fleet-vehicle-img">
            <div class="fleet-badge gold-badge">Best Value</div>
          </div>
          <div class="fleet-card-body">
            <h3>5 Seater</h3>
            <p class="fleet-subtitle">Sedan / Hatchback</p>
            <div class="fleet-specs">
              <span>4 Seats</span>
              <span>AC</span>
              <span>2 Bags</span>
            </div>
            <div class="fleet-vehicles">Dzire, Etios, Swift</div>
            <div class="fleet-price-row">
              <span class="fleet-price">₹15<small>/km</small></span>
              <button class="btn-sm btn-primary">Book Now</button>
            </div>
          </div>
        </div>
        <div class="fleet-card" onclick="selectCabAndScroll('seater7')">
          <div class="fleet-card-image suv-bg">
            <img src="7seater.png" alt="7-Seater Innova Crysta Cab for Outstation in Punjab" class="fleet-vehicle-img">
            <div class="fleet-badge">Family Friendly</div>
          </div>
          <div class="fleet-card-body">
            <h3>7 Seater</h3>
            <p class="fleet-subtitle">SUV / MPV</p>
            <div class="fleet-specs">
              <span>6 Seats</span>
              <span>AC</span>
              <span>3 Bags</span>
            </div>
            <div class="fleet-vehicles">Ertiga, Innova, XUV</div>
            <div class="fleet-price-row">
              <span class="fleet-price">₹29<small>/km</small></span>
              <button class="btn-sm btn-primary">Book Now</button>
            </div>
          </div>
        </div>
        <div class="fleet-card" onclick="selectCabAndScroll('luxury')">
          <div class="fleet-card-image luxury-bg">
            <img src="luxury.png" alt="Luxury Mercedes BMW Cab Hire for Weddings in Punjab" class="fleet-vehicle-img">
            <div class="fleet-badge purple-badge">Premium</div>
          </div>
          <div class="fleet-card-body">
            <h3>Luxury</h3>
            <p class="fleet-subtitle">Premium Executive</p>
            <div class="fleet-specs">
              <span>4-7 Seats</span>
              <span>AC</span>
              <span>3 Bags</span>
            </div>
            <div class="fleet-vehicles">Crysta, BMW, Mercedes</div>
            <div class="fleet-price-row">
              <span class="fleet-price" style="font-size: 1.2rem;">Contact Us</span>
              <button class="btn-sm btn-primary">Book Now</button>
            </div>
          </div>
        </div>
      </div>
      <div style="text-align: center; margin-top: 30px; padding: 16px 20px; max-width: 650px; margin-left: auto; margin-right: auto; line-height: 1.6; background: rgba(196, 176, 135, 0.25); border: 2px solid #C4B087; border-radius: 12px; box-shadow: 0 4px 12px rgba(196, 176, 135, 0.15);">
        <strong style="color: #111; font-size: 1.05rem; font-weight: 900; letter-spacing: 0.02em;">* Please note: Prices may vary according to long distances, specific routes, or the number of days for long trips.</strong>
      </div>
    </div>
  </section>

  <!-- ===== HOW IT WORKS ===== -->
  <section class="how-section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">How It Works</span>
        <h2 class="section-title">Book a Ride in 3 Simple Steps</h2>
      </div>
      <div class="steps-grid">
        <div class="step-card">
          <div class="step-number">01</div>
          <h3>Fill in Details</h3>
          <p>Enter your pickup location, destination, date, time and choose your preferred cab type.</p>
        </div>
        <div class="step-arrow">→</div>
        <div class="step-card">
          <div class="step-number">02</div>
          <h3>Get Confirmation</h3>
          <p>Receive instant booking confirmation with your driver's details.</p>
        </div>
        <div class="step-arrow">→</div>
        <div class="step-card">
          <div class="step-number">03</div>
          <h3>Enjoy Your Ride</h3>
          <p>Your driver arrives on time. Track the cab live and enjoy a safe, comfortable journey.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== TESTIMONIALS ===== -->
  <section class="testimonials-section" id="about">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Reviews</span>
        <h2 class="section-title">What Our Riders Say</h2>
        <p class="section-subtitle">Trusted by thousands of families and businesses across Punjab.</p>
      </div>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="stars">★★★★★</div>
          <p>"ਬਹੁਤ ਵਧੀਆ ਸੇਵਾ! Driver was very professional and the cab was spotlessly clean. Reached Chandigarh from
            Amritsar comfortably."</p>
          <div class="testimonial-author">
            <div class="author-avatar">HS</div>
            <div>
              <strong>Harpreet Singh</strong>
              <small>Amritsar</small>
            </div>
          </div>
        </div>
        <div class="testimonial-card featured-review">
          <div class="stars">★★★★★</div>
          <p>"Booked an airport transfer at 3 AM — the driver was there 10 minutes early! Will definitely use Royal Punjab Ride
            every time I travel."</p>
          <div class="testimonial-author">
            <div class="author-avatar">GK</div>
            <div>
              <strong>Gurpreet Kaur</strong>
              <small>Ludhiana</small>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="stars">★★★★★</div>
          <p>"Used the SUV for my cousin's wedding baraat. The vehicle was beautifully maintained and the driver was so
            courteous. Highly recommend!"</p>
          <div class="testimonial-author">
            <div class="author-avatar">MS</div>
            <div>
              <strong>Mandeep Singh</strong>
              <small>Jalandhar</small>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="stars">★★★★☆</div>
          <p>"Very transparent pricing and no hidden charges. The Ludhiana to Delhi ride was very comfortable. Our go-to
            cab service now!"</p>
          <div class="testimonial-author">
            <div class="author-avatar">RK</div>
            <div>
              <strong>Rajwinder Kaur</strong>
              <small>Patiala</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ===== COVERAGE MAP ===== -->
  <section class="coverage-section">
    <div class="container">
      <div class="section-header">
        <span class="section-badge">Coverage</span>
        <h2 class="section-title">We Serve All of Punjab</h2>
        <p class="section-subtitle">Available in 50+ cities and towns across the state of Punjab.</p>
      </div>
      <div class="cities-grid">
        <div class="city-tag">Amritsar</div>
        <div class="city-tag">Ludhiana</div>
        <div class="city-tag">Chandigarh</div>
        <div class="city-tag">Jalandhar</div>
        <div class="city-tag">Patiala</div>
        <div class="city-tag">Fatehgarh Sahib</div>
        <div class="city-tag">Bathinda</div>
        <div class="city-tag">Mohali</div>
        <div class="city-tag">Ropar</div>
        <div class="city-tag">Pathankot</div>
        <div class="city-tag">Hoshiarpur</div>
        <div class="city-tag">Gurdaspur</div>
        <div class="city-tag">Kapurthala</div>
        <div class="city-tag">Tarn Taran</div>
        <div class="city-tag">Barnala</div>
        <div class="city-tag">Mansa</div>
        <div class="city-tag">Fazilka</div>
        <div class="city-tag">Firozpur</div>
        <div class="city-tag">+ 30 more cities</div>
      </div>
    </div>
  </section>

  <!-- ===== CONTACT / FOOTER ===== -->
<!-- Floating Complaint Button & Modal -->
  <button class="floating-complaint-btn" onclick="document.getElementById('complaintModal').classList.add('active')" title="Submit Complaint">
    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    <span style="white-space: nowrap;">Submit Complaint</span>
  </button>

  <div class="complaint-modal" id="complaintModal">
    <div class="complaint-modal-content">
      <span class="close-complaint" onclick="document.getElementById('complaintModal').classList.remove('active')">&times;</span>
      <h3 style="margin-bottom: 20px; font-weight: 500;">Submit a Complaint</h3>
      <form onsubmit="event.preventDefault(); showToast('Complaint submitted successfully. We will resolve this shortly.'); document.getElementById('complaintModal').classList.remove('active');">
        <input type="text" class="glass-input" placeholder="Your Name" required style="width: 100%; margin-bottom: 15px; background: rgba(255,255,255,0.05); color: white; padding: 12px; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;">
        <input type="tel" class="glass-input" placeholder="Phone Number" required style="width: 100%; margin-bottom: 15px; background: rgba(255,255,255,0.05); color: white; padding: 12px; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;">
        <textarea class="glass-input" placeholder="Describe your issue..." required style="width: 100%; margin-bottom: 15px; height: 100px; resize: none; background: rgba(255,255,255,0.05); color: white; padding: 12px; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px;"></textarea>
        <button type="submit" class="btn-primary" style="width: 100%; padding: 12px; justify-content: center;">Submit Complaint</button>
      </form>
    </div>
  </div>

  <!-- ===== BOOKING SUCCESS MODAL ===== -->
  <div class="modal-overlay" id="modalOverlay" onclick="closeModal()">
    <div class="modal-box" onclick="event.stopPropagation()">
      <div class="modal-icon">🎉</div>
      <h2>Booking Confirmed!</h2>
      <p id="modalMessage">Your cab has been booked successfully. You will receive a confirmation on your mobile within
        2 minutes.</p>
      <div class="modal-details" id="modalDetails"></div>
      <button class="btn-primary btn-full" onclick="closeModal()">Done – ਧੰਨਵਾਦ!</button>
    </div>
  </div>

  <!-- ===== STICKY BOOKING CTA (mobile) ===== -->
  <div class="sticky-cta" id="stickyCta">
    <button class="btn-primary btn-full" onclick="scrollToBooking()">
      Book a Ride Now
    </button>
  </div>` }} />
  );
}
