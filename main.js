/* faatehsultan.com — interactions (no dependencies) */
(function () {
  'use strict';
  var doc = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canHover = window.matchMedia('(hover: hover)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ---------- live Lahore clock ---------- */
  function fmt(opts) {
    try { return new Intl.DateTimeFormat('en-GB', Object.assign({ timeZone: 'Asia/Karachi' }, opts)).format(new Date()); }
    catch (e) { return ''; }
  }
  function tickClock() {
    var t = fmt({ hour: '2-digit', minute: '2-digit' });
    $$('[data-clock]').forEach(function (el) { el.textContent = t; });
    var full = fmt({ weekday: 'short', hour: 'numeric', minute: '2-digit', hour12: true });
    $$('[data-clock-full]').forEach(function (el) { el.textContent = full; });
  }
  tickClock(); setInterval(tickClock, 10000);
  $$('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* ---------- nav: scrolled state, progress, active link ---------- */
  var nav = $('#nav'), bar = $('.progress span');
  var ticking = false;
  function onScroll() {
    var y = window.scrollY, h = doc.scrollHeight - window.innerHeight;
    nav.classList.toggle('is-scrolled', y > 8);
    if (bar) bar.style.setProperty('--p', h > 0 ? (y / h).toFixed(4) : 0);
    ticking = false;
  }
  window.addEventListener('scroll', function () { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });
  onScroll();

  var links = $$('.nav__links a');
  if ('IntersectionObserver' in window) {
    var secObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + e.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['work', 'projects', 'stack', 'contact'].forEach(function (id) { var s = document.getElementById(id); if (s) secObs.observe(s); });
  }

  /* ---------- mobile menu ---------- */
  var burger = $('.burger'), mnav = $('#mnav');
  if (burger && mnav) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') !== 'true';
      burger.setAttribute('aria-expanded', open);
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      mnav.classList.toggle('is-open', open);
    });
    $$('a', mnav).forEach(function (a) {
      a.addEventListener('click', function () { burger.setAttribute('aria-expanded', 'false'); mnav.classList.remove('is-open'); });
    });
  }

  /* ---------- hero rotating word ---------- */
  var track = $('[data-rotator]');
  if (track && !reduce) {
    var n = track.children.length - 1, i = 0; // last child duplicates the first for a seamless loop
    setInterval(function () {
      i++;
      track.classList.remove('no-t');
      track.style.transform = 'translateY(-' + (i * 1.16) + 'em)';
      if (i === n) {
        setTimeout(function () { track.classList.add('no-t'); track.style.transform = 'translateY(0)'; i = 0; }, 800);
      }
    }, 2400);
  }

  /* ---------- in-view helper ---------- */
  function inView(el, cb, opts) {
    if (!('IntersectionObserver' in window)) { cb(true); return; }
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { cb(e.isIntersecting, e); });
    }, opts || { threshold: 0.35 }).observe(el);
  }

  /* ---------- scroll reveal ---------- */
  var rvs = $$('.rv');
  if (reduce || !('IntersectionObserver' in window)) {
    rvs.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var rvObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); rvObs.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    rvs.forEach(function (el) { rvObs.observe(el); });
  }

  /* ---------- count-up stats ---------- */
  var counters = $$('[data-count]');
  if (counters.length) {
    var ran = false;
    inView($('.proof'), function (yes) {
      if (!yes || ran) return; ran = true;
      var t0 = performance.now(), dur = reduce ? 1 : 1400;
      (function step(now) {
        var p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
        counters.forEach(function (c) { c.textContent = Math.round(+c.dataset.count * e); });
        if (p < 1) requestAnimationFrame(step);
      })(t0);
    }, { threshold: 0.4 });
  }

  /* ---------- portrait tilt ---------- */
  var tilt = $('[data-tilt]');
  if (tilt && canHover && !reduce) {
    tilt.addEventListener('mousemove', function (e) {
      var r = tilt.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      tilt.style.transform = 'perspective(900px) rotateY(' + (x * 8) + 'deg) rotateX(' + (-y * 8) + 'deg)';
    });
    tilt.addEventListener('mouseleave', function () { tilt.style.transform = ''; });
  }

  /* ---------- copy email ---------- */
  $$('[data-copy]').forEach(function (btn) {
    var label = $('[data-copy-label]', btn), t;
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      var done = function () {
        label.textContent = 'Copied ✓';
        clearTimeout(t); t = setTimeout(function () { label.textContent = 'Copy email'; }, 1800);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, function () { window.location.href = 'mailto:' + text; });
      } else { window.location.href = 'mailto:' + text; }
    });
  });

  /* ==========================================================
     Drift — notch demo
     ========================================================== */
  var drift = $('[data-drift]');
  if (drift) {
    var mac = $('.mac', drift), notch = $('[data-notch]', drift);
    var scenes = $$('.scene', drift), tabs = $$('[data-go]', drift);
    var order = scenes.map(function (s) { return s.dataset.scene; });
    var cur = 0, cycle = null, hovering = false, visible = false, autoTimer = null;
    var ring = $('.ring__p', drift), focusEl = $('[data-focus]', drift), cdEl = $('[data-countdown]', drift);
    var focusSecs = 24 * 60 + 12, cdSecs = 4 * 60 + 59;

    function show(idx) {
      cur = (idx + order.length) % order.length;
      scenes.forEach(function (s, k) { s.classList.toggle('is-on', k === cur); });
      tabs.forEach(function (b, k) { b.setAttribute('aria-pressed', k === cur ? 'true' : 'false'); });
    }
    function open() { notch.classList.add('is-open'); mac.classList.add('is-open'); }
    function close() { notch.classList.remove('is-open'); mac.classList.remove('is-open'); }
    function startCycle() {
      stopCycle();
      if (reduce) return;
      cycle = setInterval(function () { show(cur + 1); }, 3200);
    }
    function stopCycle() { clearInterval(cycle); cycle = null; }

    // live numbers inside the scenes
    setInterval(function () {
      if (!notch.classList.contains('is-open')) return;
      focusSecs = focusSecs > 0 ? focusSecs - 1 : 25 * 60;
      cdSecs = cdSecs > 0 ? cdSecs - 1 : 5 * 60;
      var m = function (s) { return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2); };
      if (focusEl) focusEl.textContent = m(focusSecs);
      if (cdEl) cdEl.textContent = m(cdSecs);
      if (ring) ring.style.strokeDashoffset = (113 * (1 - focusSecs / (25 * 60))).toFixed(1);
    }, 1000);

    // desktop: hover the screen to open, leave to close
    mac.addEventListener('mouseenter', function () { hovering = true; clearTimeout(autoTimer); open(); startCycle(); });
    mac.addEventListener('mouseleave', function () { hovering = false; stopCycle(); close(); });
    // tap the screen on touch devices
    mac.addEventListener('click', function () {
      if (canHover) return;
      if (notch.classList.contains('is-open')) { show(cur + 1); startCycle(); } else { open(); startCycle(); }
    });
    // feature tabs jump straight to a scene
    tabs.forEach(function (b, k) {
      b.addEventListener('click', function () { show(k); open(); startCycle(); });
      b.addEventListener('mouseenter', function () { if (canHover) { show(k); open(); stopCycle(); } });
    });
    $('.demo-tabs', drift).addEventListener('mouseleave', function () { if (!hovering && canHover) { close(); } });

    // auto preview: open briefly when it scrolls into view, then on touch keep cycling
    inView(drift, function (yes) {
      visible = yes;
      if (!yes) { if (!hovering) { stopCycle(); close(); } return; }
      clearTimeout(autoTimer);
      autoTimer = setTimeout(function () {
        if (hovering || !visible) return;
        open(); startCycle();
        if (canHover) autoTimer = setTimeout(function () { if (!hovering) { stopCycle(); close(); show(0); } }, 6500);
      }, 700);
    }, { threshold: 0.5 });
  }

  /* ==========================================================
     Eaze AI — chat demo
     ========================================================== */
  var chat = $('[data-chat]');
  if (chat) {
    var body = $('[data-chat-body]', chat);
    var msgs = $$('.msg', body), typing = $('.typing', body), timers = [], playing = false;
    function clear() { timers.forEach(clearTimeout); timers = []; }
    function play() {
      if (playing) return; playing = true; clear();
      msgs.forEach(function (m) { m.classList.remove('is-shown'); });
      typing.classList.remove('is-shown');
      var t = 200;
      msgs.forEach(function (m, k) {
        var bot = m.classList.contains('msg--bot');
        if (bot && !reduce) {
          timers.push(setTimeout(function () { body.appendChild(typing); typing.classList.add('is-shown'); }, t));
          t += 1100;
        }
        timers.push(setTimeout(function () {
          typing.classList.remove('is-shown');
          body.insertBefore(m, typing);
          m.classList.add('is-shown');
          if (k === msgs.length - 1) playing = false;
        }, t));
        t += bot ? 700 : 900;
      });
    }
    inView(chat, function (yes) { if (yes) play(); }, { threshold: 0.45 });
    chat.addEventListener('mouseenter', function () { if (!playing) play(); });
  }

  /* ==========================================================
     Adaura — campaign fan-out
     ========================================================== */
  var ads = $('[data-ads]');
  if (ads) {
    var stage = $('.demo-ads', ads), adT;
    ads.addEventListener('mouseenter', function () { clearTimeout(adT); stage.classList.add('is-fanned'); });
    ads.addEventListener('mouseleave', function () { stage.classList.remove('is-fanned'); });
    inView(ads, function (yes) {
      clearTimeout(adT);
      if (yes) adT = setTimeout(function () { stage.classList.add('is-fanned'); }, 600);
      else stage.classList.remove('is-fanned');
    }, { threshold: 0.5 });
    ads.addEventListener('click', function (e) { if (!canHover && !e.target.closest('a')) stage.classList.toggle('is-fanned'); });
  }
})();
