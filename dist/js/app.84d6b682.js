(function (e) {
  function t(t) { for (var a, r, c = t[0], s = t[1], i = t[2], d = 0, l = []; d < c.length; d++)r = c[d], o[r] && l.push(o[r][0]), o[r] = 0; for (a in s)Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]); f && f(t); while (l.length)l.shift()(); return u.push.apply(u, i || []), n(); } function n() { for (var e, t = 0; t < u.length; t++) { for (var n = u[t], a = !0, r = 1; r < n.length; r++) { const c = n[r]; o[c] !== 0 && (a = !1); }a && (u.splice(t--, 1), e = s(s.s = n[0])); } return e; } const a = {}; const r = { app: 0 }; var o = { app: 0 }; var u = []; function c(e) {
    return `${s.p}js/${{}[e] || e}.${{
      'chunk-1789ada2': '4cf1a5b2', 'chunk-23546234': 'e08028a1', 'chunk-4446360e': '52985031', 'chunk-2d0aa224': '0248e5f2', 'chunk-2d0aecba': '578dcdbe', 'chunk-2d0ba1b2': '4f2b8a59', 'chunk-2d0cfe95': '549ee168', 'chunk-2d0d67fc': '99146165', 'chunk-2d210fad': '0d33e303', 'chunk-2d216f1a': 'dabbae6b', 'chunk-2d21b8c4': 'b74302db', 'chunk-2d22d3c7': '36152c6f', 'chunk-339b8494': 'f851b419', 'chunk-45d514c6': '5027cc32', 'chunk-47bc4aa9': 'a1da93dd', 'chunk-4cabb47e': '458ef8a9', 'chunk-503d8ef9': '0d123e17', 'chunk-594d6d48': 'b2e92861', 'chunk-0625c6a4': '1d1f0082', 'chunk-4283804c': '3cf6589e', 'chunk-5ce422b9': 'f14cfc34', 'chunk-60fbc562': '2d870066', 'chunk-6c081df8': 'bb70fae5', 'chunk-75a43617': '0905d53a', 'chunk-cc4220c0': '89c90014',
    }[e]}.js`;
  } function s(t) { if (a[t]) return a[t].exports; const n = a[t] = { i: t, l: !1, exports: {} }; return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports; }s.e = function (e) {
    const t = []; const n = {
      'chunk-1789ada2': 1, 'chunk-23546234': 1, 'chunk-4446360e': 1, 'chunk-339b8494': 1, 'chunk-47bc4aa9': 1, 'chunk-4cabb47e': 1, 'chunk-503d8ef9': 1, 'chunk-0625c6a4': 1, 'chunk-4283804c': 1, 'chunk-60fbc562': 1, 'chunk-6c081df8': 1, 'chunk-75a43617': 1, 'chunk-cc4220c0': 1,
    }; r[e] ? t.push(r[e]) : r[e] !== 0 && n[e] && t.push(r[e] = new Promise(((t, n) => {
      for (var a = `css/${{}[e] || e}.${{
          'chunk-1789ada2': '9b8c6c9b', 'chunk-23546234': 'f261fea2', 'chunk-4446360e': '31e7d60f', 'chunk-2d0aa224': '31d6cfe0', 'chunk-2d0aecba': '31d6cfe0', 'chunk-2d0ba1b2': '31d6cfe0', 'chunk-2d0cfe95': '31d6cfe0', 'chunk-2d0d67fc': '31d6cfe0', 'chunk-2d210fad': '31d6cfe0', 'chunk-2d216f1a': '31d6cfe0', 'chunk-2d21b8c4': '31d6cfe0', 'chunk-2d22d3c7': '31d6cfe0', 'chunk-339b8494': '25a1e8d5', 'chunk-45d514c6': '31d6cfe0', 'chunk-47bc4aa9': '5bf48da5', 'chunk-4cabb47e': 'ae45daa9', 'chunk-503d8ef9': '9fb2b354', 'chunk-594d6d48': '31d6cfe0', 'chunk-0625c6a4': '96741056', 'chunk-4283804c': '97b3a59d', 'chunk-5ce422b9': '31d6cfe0', 'chunk-60fbc562': '73dd661a', 'chunk-6c081df8': '74dc3933', 'chunk-75a43617': '5d715258', 'chunk-cc4220c0': 'd11261c8',
        }[e]}.css`, o = s.p + a, u = document.getElementsByTagName('link'), c = 0; c < u.length; c++) { var i = u[c]; var d = i.getAttribute('data-href') || i.getAttribute('href'); if (i.rel === 'stylesheet' && (d === a || d === o)) return t(); } const l = document.getElementsByTagName('style'); for (c = 0; c < l.length; c++) { i = l[c], d = i.getAttribute('data-href'); if (d === a || d === o) return t(); } const f = document.createElement('link'); f.rel = 'stylesheet', f.type = 'text/css', f.onload = t, f.onerror = function (t) { const a = t && t.target && t.target.src || o; const u = new Error(`Loading CSS chunk ${e} failed.\n(${a})`); u.code = 'CSS_CHUNK_LOAD_FAILED', u.request = a, delete r[e], f.parentNode.removeChild(f), n(u); }, f.href = o; const h = document.getElementsByTagName('head')[0]; h.appendChild(f);
    })).then(() => { r[e] = 0; })); let a = o[e]; if (a !== 0) if (a)t.push(a[2]); else { const u = new Promise(((t, n) => { a = o[e] = [t, n]; })); t.push(a[2] = u); let i; const d = document.createElement('script'); d.charset = 'utf-8', d.timeout = 120, s.nc && d.setAttribute('nonce', s.nc), d.src = c(e), i = function (t) { d.onerror = d.onload = null, clearTimeout(l); const n = o[e]; if (n !== 0) { if (n) { const a = t && (t.type === 'load' ? 'missing' : t.type); const r = t && t.target && t.target.src; const u = new Error(`Loading chunk ${e} failed.\n(${a}: ${r})`); u.type = a, u.request = r, n[1](u); }o[e] = void 0; } }; var l = setTimeout(() => { i({ type: 'timeout', target: d }); }, 12e4); d.onerror = d.onload = i, document.head.appendChild(d); } return Promise.all(t);
  }, s.m = e, s.c = a, s.d = function (e, t, n) { s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n }); }, s.r = function (e) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 }); }, s.t = function (e, t) { if (1 & t && (e = s(e)), 8 & t) return e; if (4 & t && typeof e === 'object' && e && e.__esModule) return e; const n = Object.create(null); if (s.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: e }), 2 & t && typeof e !== 'string') for (const a in e)s.d(n, a, (t => e[t]).bind(null, a)); return n; }, s.n = function (e) { const t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return s.d(t, 'a', t), t; }, s.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, s.p = '/vuecli-muse-admin-template/dist/', s.oe = function (e) { throw console.error(e), e; }; let i = window.webpackJsonp = window.webpackJsonp || []; const d = i.push.bind(i); i.push = t, i = i.slice(); for (let l = 0; l < i.length; l++)t(i[l]); var f = d; u.push([0, 'chunk-vendors']), n();
}({
  0(e, t, n) { e.exports = n('56d7'); },
  '33ec': function (e, t, n) {},
  5318(e, t, n) { const a = { './en-US.json': '9f06', './zh-CN.json': 'b210' }; function r(e) { const t = o(e); return n(t); } function o(e) { const t = a[e]; if (!(t + 1)) { const n = new Error(`Cannot find module '${e}'`); throw n.code = 'MODULE_NOT_FOUND', n; } return t; }r.keys = function () { return Object.keys(a); }, r.resolve = o, e.exports = r, r.id = '5318'; },
  '56d7': function (e, t, n) {
    n.r(t); n('cadf'), n('551c'), n('f751'), n('097d'); const a = n('2b0e'); const r = function () { const e = this; const t = e.$createElement; const n = e._self._c || t; return n('div', { attrs: { id: 'app' } }, [n('mu-fade-transition', { attrs: { mode: 'out-in' } }, [n('router-view')], 1)], 1); }; const o = []; const u = { name: 'app' }; const c = u; const s = n('2877'); const i = Object(s.a)(c, r, o, !1, null, null, null); const d = i.exports; const l = (n('f5df'), n('33ec'), n('283d')); const f = n.n(l); const h = n('15be'); const p = n.n(h); const m = n('2cf9'); const g = n.n(m); const b = n('f85f'); const k = n.n(b); const v = n('f956'); const y = n.n(v); const S = n('ee11'); const w = n.n(S); const E = n('e11c'); const x = n.n(E); const O = n('a85e'); const T = n.n(O); const j = n('c537'); const I = n.n(j); const N = n('5cde'); const A = n.n(N); const C = n('ae4e'); const P = n.n(C); const M = n('0867'); const L = n.n(M); const q = n('eee5'); const R = n.n(q); const _ = n('7b02'); const K = n.n(_); const D = n('9bea'); const z = n.n(D); const B = n('e49b'); const $ = n.n(B); const F = n('6778'); const U = n.n(F); const W = n('a2c8'); const J = n.n(W); const V = n('a423'); const X = n.n(V); const H = n('955d'); const Z = n.n(H); const G = n('d09c'); const Q = n.n(G); const Y = n('9ac4'); const ee = n.n(Y); const te = n('bbc8'); const ne = n.n(te); const ae = n('d146'); const re = n.n(ae); const oe = n('c3a4'); const ue = n.n(oe); const ce = n('d3b7'); const se = n.n(ce); const ie = n('7612'); const de = n.n(ie); const le = n('4ca0'); const fe = n.n(le); const he = n('6c1b'); const pe = n.n(he); const me = n('da6f'); const ge = n.n(me); const be = n('0aa5'); const ke = n.n(be); const ve = n('4778'); const ye = n.n(ve); const Se = n('f370'); const we = n.n(Se); const Ee = n('96bb'); const xe = n.n(Ee); const Oe = n('61be'); const Te = n.n(Oe); const je = n('2e68'); const Ie = n.n(je); const Ne = n('5c9c'); const Ae = n.n(Ne); const Ce = n('de6b'); const Pe = n.n(Ce); const Me = n('9a7c'); const Le = n.n(Me); const qe = n('285c'); const Re = n.n(qe); const _e = n('ddbf'); const Ke = n.n(_e); const De = n('8323'); const ze = n.n(De); const Be = (n('d6f6'), n('efa6')); const $e = n.n(Be); $e.a.use('light'); const Fe = n('dd88'); const Ue = (n('aa12'), n('4d7d')); const We = (n('2095'), n('d4ea')); const Je = (n('1da6'), n('47f7')); n('d4b8'), n('9f58'); a.default.use(ze.a), a.default.use(Ke.a), a.default.use(Re.a), a.default.use(Le.a), a.default.use(Pe.a), a.default.use(Ae.a), a.default.use(Ie.a), a.default.use(Te.a), a.default.use(xe.a), a.default.use(we.a), a.default.use(ye.a), a.default.use(ke.a), a.default.use(ge.a), a.default.use(pe.a), a.default.use(fe.a), a.default.use(de.a), a.default.use(se.a), a.default.use(ue.a), a.default.use(re.a), a.default.use(ne.a), a.default.use(ee.a), a.default.use(Q.a), a.default.use(Z.a), a.default.use(X.a), a.default.use(J.a), a.default.use(U.a), a.default.use($.a), a.default.use(z.a), a.default.use(K.a), a.default.use(R.a), a.default.use(L.a), a.default.use(P.a), a.default.use(A.a), a.default.use(I.a), a.default.use(T.a), a.default.use(x.a), a.default.use(w.a), a.default.use(y.a), a.default.use(k.a), a.default.use(g.a), a.default.use(p.a), a.default.use(f.a), a.default.use(Fe.a), a.default.use(Ue.a), a.default.use(We.a), a.default.use(Je.a); n('f46d'); const Ve = n('bc3a'); const Xe = n.n(Ve); const He = (n('456d'), n('ac6a'), n('6b54'), n('d225')); const Ze = n('b0b4'); const Ge = (function () { function e() { if (Object(He.a)(this, e), !window.sessionStorage) throw new Error('utils.StorageMsg.notSupportSessionStorage'); } return Object(Ze.a)(e, [{ key: 'removeItems', value(e) { const t = this; if (arguments.length !== 1) throw new Error('utils.StorageMsg.notExactParams'); if (Object.prototype.toString.call(e).slice(8, -1) !== 'Array') throw new Error('utils.StorageMsg.notSupportKeysType'); e.forEach((e) => { t.removeItem(e); }); } }], [{ key: 'getLength', value() { if (arguments.length !== 0) throw new Error('utils.StorageMsg.notExactParams'); return window.sessionStorage.length; } }, { key: 'getItem', value(e) { if (arguments.length !== 1) throw new Error('utils.StorageMsg.notExactParams'); if (Object.prototype.toString.call(e).slice(8, -1) !== 'String') throw new Error('utils.StorageMsg.notSupportKeyType'); return window.sessionStorage.getItem(e); } }, { key: 'getItems', value(e) { const t = this; if (arguments.length !== 1) throw new Error('utils.StorageMsg.notExactParams'); if (Object.prototype.toString.call(e).slice(8, -1) !== 'Array') throw new Error('utils.StorageMsg.notSupportKeysType'); const n = {}; return e.forEach((e) => { const a = t.getItem(e); if (!a) throw new Error('utils.StorageMsg.keyNotExists'); n[e] = a; }), n; } }, { key: 'setItem', value(e, t) { if (arguments.length !== 2) throw new Error('utils.StorageMsg.notExactParams'); if (Object.prototype.toString.call(e).slice(8, -1) !== 'String') throw new Error('utils.StorageMsg.notSupportKeyType'); if (Object.prototype.toString.call(t).slice(8, -1) !== 'String') throw new Error('utils.StorageMsg.notSupportValueType'); window.sessionStorage.setItem(e, t); } }, { key: 'setItems', value(e) { const t = this; if (arguments.length !== 1) throw new Error('utils.StorageMsg.notExactParams'); if (Object.prototype.toString.call(e).slice(8, -1) !== 'Object') throw new Error('utils.StorageMsg.notSupportParamType'); Object.keys(e).forEach((n) => { t.setItem(n, e[n]); }); } }, { key: 'removeItem', value(e) { if (arguments.length !== 1) throw new Error('utils.StorageMsg.notExactParams'); if (Object.prototype.toString.call(e).slice(8, -1) !== 'String') throw new Error('utils.StorageMsg.notSupportKeyType'); window.sessionStorage.removeItem(e); } }, { key: 'clear', value() { window.sessionStorage.clear(); } }]), e; }()); const Qe = Ge; const Ye = 'token'; function et() { return Qe.getItem(Ye); } function tt(e) { Qe.setItem(Ye, e); } function nt() { Qe.removeItem(Ye); } const at = ''; const rt = at; Xe.a.defaults.baseURL = rt, Xe.a.defaults.timeout = 3e3, Xe.a.defaults.withCredentials = !1, Xe.a.defaults.headers = { 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/json', Accept: 'application/json' }, Xe.a.defaults.validateStatus = function (e) { return e >= 200 && e < 300 || e === 304; }, Xe.a.defaults.maxContentLength = 524288, Xe.a.defaults.maxRedirects = 5, Xe.a.interceptors.request.use((e) => { const t = et(); return t && Object.assign(e.headers, { token: t }), e; }), Xe.a.interceptors.response.use(e => e.data, (e) => { const t = { success: !1, message: '' }; return console.log(e.config), e.response ? (console.log(e.response.data), console.log(e.response.status), console.log(e.response.headers), t.message = 'badStatusCode') : e.request ? (console.log(e.request), t.message = 'noResponse') : (console.log('Error', e.message), t.message = 'requestError'), t; }), a.default.prototype.$axios = Xe.a, a.default.prototype.$request = {
      get(e, t) { return Xe()({ method: 'get', url: e, params: t }); },
      post(e, t) { return Xe()({ method: 'post', url: e, data: t }); },
      upload(e, t) {
        return Xe()({
          method: 'post', headers: { 'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'multipart/form-data', Accept: 'application/json' }, url: e, data: t,
        });
      },
    }; n('4917'); const ot = n('a925'); function ut() { const e = n('5318'); const t = {}; return e.keys().forEach((n) => { const a = n.match(/([A-Za-z0-9-_]+)\./i); if (a && a.length > 1) { const r = a[1]; t[r] = e(n); } }), t; }a.default.use(ot.a); const ct = new ot.a({ locale: 'zh-CN', fallbackLocale: 'zh-CN', messages: ut() }); const st = n('4eb5'); const it = n.n(st); a.default.use(it.a); const dt = n('9ca8'); n('94b1'), n('ef97'), n('c037'), n('15af'), n('f5e6'), n('d28f'), n('792e'), n('627c'), n('007d'), n('b11c'), n('2f73'); a.default.component('v-chart', dt.a); const lt = n('2f62'); const ft = n('cebc'); function ht(e, t) { return t.role !== 0 && !t.role || e <= t.role; } function pt(e, t) { const n = []; return e.forEach((e) => { const a = Object(ft.a)({}, e); ht(t, a.meta) && (a.children && (a.children = pt(a.children, t)), n.push(a)); }), n; } const mt = {
      path: '/dashboard',
      component() { return n.e('chunk-cc4220c0').then(n.bind(null, '162e')); },
      meta: { icon: 'dashboard', title: 'dashboard' },
      children: [{
        name: 'dashboard', path: '', component() { return n.e('chunk-503d8ef9').then(n.bind(null, '9406')); }, meta: { title: 'dashboard' },
      }],
    }; const gt = {
      name: 'nested',
      path: '/nested',
      redirect: { name: 'nestedIndex' },
      component() { return n.e('chunk-cc4220c0').then(n.bind(null, '162e')); },
      meta: { defaultOpen: !0, icon: 'toc', title: 'nested' },
      children: [{
        name: 'nestedIndex', path: 'index', component() { return n.e('chunk-2d0d67fc').then(n.bind(null, '738b')); }, meta: { icon: 'toc', title: 'nestedIndex' },
      }, {
        name: 'nestedTest',
        path: 'test',
        redirect: { name: 'nestedTestIndex1' },
        component() { return n.e('chunk-2d0ba1b2').then(n.bind(null, '3692')); },
        meta: { icon: 'toc', title: 'nestedTest' },
        children: [{
          name: 'nestedTestIndex1', path: 'index1', component() { return n.e('chunk-2d216f1a').then(n.bind(null, 'c52d')); }, meta: { title: 'nestedTestIndex1' },
        }, {
          name: 'nestedTestIndex2', path: 'index2', component() { return n.e('chunk-2d21b8c4').then(n.bind(null, 'bff0')); }, meta: { title: 'nestedTestIndex2' },
        }],
      }],
    }; const bt = {
      path: '/clipboard',
      component() { return n.e('chunk-cc4220c0').then(n.bind(null, '162e')); },
      meta: { icon: 'file_copy', title: 'clipboard' },
      children: [{
        name: 'clipboard', path: '', component() { return n.e('chunk-2d22d3c7').then(n.bind(null, 'f744')); }, meta: { title: 'clipboard' },
      }],
    }; const kt = {
      path: '/zip',
      component() { return n.e('chunk-cc4220c0').then(n.bind(null, '162e')); },
      meta: { icon: 'folder', title: 'zip' },
      children: [{
        name: 'zip', path: '', component() { return Promise.all([n.e('chunk-594d6d48'), n.e('chunk-4283804c')]).then(n.bind(null, 'ca54')); }, meta: { title: 'zip' },
      }],
    }; const vt = {
      name: 'editor',
      path: '/editor',
      redirect: { name: 'jsonEditor' },
      component() { return n.e('chunk-cc4220c0').then(n.bind(null, '162e')); },
      meta: { defaultOpen: !0, icon: 'edit', title: 'editor' },
      children: [{
        name: 'jsonEditor', path: 'jsonEditor', component() { return Promise.all([n.e('chunk-1789ada2'), n.e('chunk-4446360e')]).then(n.bind(null, 'e5a2')); }, meta: { title: 'jsonEditor' },
      }, {
        name: 'markdownEditor', path: 'markdownEditor', component() { return Promise.all([n.e('chunk-1789ada2'), n.e('chunk-23546234')]).then(n.bind(null, 'eb36')); }, meta: { title: 'markdownEditor' },
      }, {
        name: 'richTextEditor', path: 'richTextEditor', component() { return Promise.all([n.e('chunk-594d6d48'), n.e('chunk-0625c6a4')]).then(n.bind(null, '805b')); }, meta: { title: 'richTextEditor' },
      }],
    }; const yt = {
      path: '/draggable',
      component() { return n.e('chunk-cc4220c0').then(n.bind(null, '162e')); },
      meta: { icon: 'drag_handle', title: 'draggable' },
      children: [{
        name: 'draggable', path: '', component() { return n.e('chunk-339b8494').then(n.bind(null, 'a0c2')); }, meta: { title: 'draggable' },
      }],
    }; const St = {
      path: '/table',
      component() { return n.e('chunk-cc4220c0').then(n.bind(null, '162e')); },
      meta: { icon: 'table_chart', title: 'table' },
      children: [{
        name: 'table', path: '', component() { return n.e('chunk-5ce422b9').then(n.bind(null, '90fe')); }, meta: { title: 'table' },
      }],
    }; const wt = {
      path: '/icons',
      component() { return n.e('chunk-cc4220c0').then(n.bind(null, '162e')); },
      meta: { icon: 'image', title: 'icons' },
      children: [{
        name: 'icons', path: '', component() { return n.e('chunk-2d0aa224').then(n.bind(null, '105d')); }, meta: { title: 'icons' },
      }],
    }; const Et = {
      path: '/customScatterChart',
      component() { return n.e('chunk-cc4220c0').then(n.bind(null, '162e')); },
      meta: { icon: 'bubble_chart', title: 'customScatterChart' },
      children: [{
        name: 'customScatterChart', path: '', component() { return n.e('chunk-45d514c6').then(n.bind(null, '976c')); }, meta: { title: 'customScatterChart' },
      }],
    }; const xt = {
      path: '/roles',
      redirect: { name: 'user' },
      component() { return n.e('chunk-cc4220c0').then(n.bind(null, '162e')); },
      meta: { defaultOpen: !0, icon: 'toc', title: 'roles' },
      children: [{
        name: 'sAdmin', path: 'sAdmin', component() { return n.e('chunk-2d210fad').then(n.bind(null, 'b9cc')); }, meta: { icon: 'toc', title: 'sAdmin', role: 0 },
      }, {
        name: 'admin', path: 'admin', component() { return n.e('chunk-2d0cfe95').then(n.bind(null, '6676')); }, meta: { icon: 'toc', title: 'admin', role: 1 },
      }, {
        name: 'manager', path: 'manager', component() { return n.e('chunk-2d0cfe95').then(n.bind(null, '6676')); }, meta: { icon: 'toc', title: 'manager', role: 2 },
      }, {
        name: 'developer', path: 'developer', component() { return n.e('chunk-2d0cfe95').then(n.bind(null, '6676')); }, meta: { icon: 'toc', title: 'developer', role: 3 },
      }, {
        name: 'client', path: 'client', component() { return n.e('chunk-2d0cfe95').then(n.bind(null, '6676')); }, meta: { icon: 'toc', title: 'client', role: 4 },
      }, {
        name: 'user', path: 'user', component() { return n.e('chunk-2d0aecba').then(n.bind(null, '0c1b')); }, meta: { icon: 'toc', title: 'user', role: 5 },
      }],
    }; const Ot = ['/', '/signin']; const Tt = ['/401', '/403', '/404', '/500']; const jt = [{ path: '/', redirect: '/signin', meta: { hidden: !0 } }, {
      name: 'signin', path: '/signin', component() { return n.e('chunk-75a43617').then(n.bind(null, '2144')); }, meta: { hidden: !0 },
    }, {
      name: '401', path: '/401', component() { return n.e('chunk-47bc4aa9').then(n.bind(null, 'ede4')); }, meta: { hidden: !0 },
    }, {
      name: '403', path: '/403', component() { return n.e('chunk-60fbc562').then(n.bind(null, 'e409')); }, meta: { hidden: !0 },
    }, {
      name: '404', path: '/404', component() { return n.e('chunk-6c081df8').then(n.bind(null, 'cc89')); }, meta: { hidden: !0 },
    }, {
      name: '500', path: '/500', component() { return n.e('chunk-4cabb47e').then(n.bind(null, '6c05')); }, meta: { hidden: !0 },
    }]; const It = [mt, gt, bt, kt, vt, yt, St, wt, Et, xt, { path: '*', redirect: { name: '404' }, meta: { hidden: !0 } }]; const Nt = {
      namespaced: !0,
      state: {
        mobile: !1, drawerOpen: !0, drawerDocked: !0, theme: 'light', language: 'zh-CN', routes: [], routesNeedAdd: [],
      },
      getters: {
        mobile(e) { return e.mobile; }, drawerOpen(e) { return e.drawerOpen; }, drawerDocked(e) { return e.drawerDocked; }, theme(e) { return e.theme; }, language(e) { return e.language; }, routes(e) { return e.routes; }, routesNeedAdd(e) { return e.routesNeedAdd; },
      },
      mutations: {
        setMobile(e, t) { Object.assign(e, { mobile: t }); }, setDrawerOpen(e, t) { Object.assign(e, { drawerOpen: t }); }, setDrawerDocked(e, t) { Object.assign(e, { drawerDocked: t }); }, setTheme(e, t) { Object.assign(e, { theme: t }), $e.a.use(t); }, setLanguage(e, t) { Object.assign(e, { language: t }), ct.locale = t; }, setRoutes(e, t) { Object.assign(e, { routes: t }); }, setRoutesNeedAdd(e, t) { Object.assign(e, { routesNeedAdd: t }); }, generateRoutes(e, t) { let n; n = t === 0 ? It : pt(It, t), this.commit('app/setRoutes', jt.concat(n)), this.commit('app/setRoutesNeedAdd', n); },
      },
      actions: {},
    }; const At = Nt; const Ct = a.default.prototype.$request; function Pt(e) { return Ct.post('/auth/signin', e); } function Mt(e) { return Ct.post('/auth/signup', e); } const Lt = {
      namespaced: !0, state: { token: et() || '' }, getters: { token(e) { return e.token; } }, mutations: { setToken(e, t) { Object.assign(e, { token: t }), tt(t); }, removeToken(e) { Object.assign(e, { token: '' }), nt(); } }, actions: { signin(e, t) { const n = e.commit; return Pt(t).then(e => e.success && n('setToken', e.token), e); }, signup(e, t) { return Mt(t); } },
    }; const qt = Lt; const Rt = (n('7f7f'), a.default.prototype.$request); function _t() { return Rt.post('/user/info'); } const Kt = {
      namespaced: !0,
      state: {
        id: -1, name: '', email: '', avatar: '', role: -1,
      },
      getters: {
        id(e) { return e.id; }, name(e) { return e.name; }, avatar(e) { return e.avatar; }, email(e) { return e.email; }, role(e) { return e.role; },
      },
      mutations: {
        setId(e, t) { Object.assign(e, { id: t }); },
        setName(e, t) { Object.assign(e, { name: t }); },
        setAvatar(e, t) { Object.assign(e, { avatar: t }); },
        setEmail(e, t) { Object.assign(e, { email: t }); },
        setRole(e, t) { Object.assign(e, { role: t }); },
        setInfo(e, t) { Object.assign(e, t); },
        clearInfo(e) {
          Object.assign(e, {
            id: -1, name: '', avatar: '', email: '', role: -1,
          });
        },
      },
      actions: { getInfo(e) { const t = e.commit; return _t().then(e => e.success && (t('setId', e.id), t('setName', e.name), t('setAvatar', e.avatar), t('setEmail', e.email), t('setRole', e.role)), e); } },
    }; const Dt = Kt; a.default.use(lt.a); const zt = new lt.a.Store({ modules: { app: At, auth: qt, user: Dt } }); const Bt = n('8c4f'); a.default.use(Bt.a); const $t = new Bt.a({ routes: jt, scrollBehavior() { return { x: 0, y: 0 }; } }); $t.beforeEach((e, t, n) => { console.log('to', e), a.default.prototype.$progress.start(), console.log('getter token', zt.getters['auth/token']), zt.getters['auth/token'] ? (console.log('in1'), Ot.indexOf(e.path) !== -1 ? n({ path: '/dashboard' }) : zt.getters['user/role'] === -1 ? zt.dispatch('user/getInfo').then((t) => { if (t.success) { const r = t.role; zt.commit('app/generateRoutes', r), $t.addRoutes(zt.getters['app/routesNeedAdd']), console.log('routes', $t), n(Object(ft.a)({}, e, { replace: !0 })); } else a.default.prototype.$alert(''.concat(t.message)); }) : Tt.indexOf(e.path) !== -1 ? n() : ht(zt.getters['user/role'], e.meta) ? n() : n({ path: '/401', replace: !0, query: { noGoBack: !0 } })) : Ot.indexOf(e.path) !== -1 ? (console.log('in2'), n()) : (console.log('in3'), n('/signin?redirect='.concat(e.path))); }), $t.afterEach(() => { a.default.prototype.$progress.done(); }); const Ft = $t; a.default.use(d), a.default.use(Ft), a.default.use(zt), a.default.config.productionTip = !1, new a.default({
      router: Ft, store: zt, i18n: ct, render(e) { return e(d); },
    }).$mount('#app');
  },
  '9f06': function (e) {
    e.exports = {
      mock: { breadcrumb: 'breadcrumb' },
      request: {
        loading: 'loading', badStatusCode: 'Bad status code!', noResponse: 'Request sent but no response!', requestError: 'Request error! Check your Internet!', noAccount: 'No such account!',
      },
      message: {
        alertTitle: 'alert', alertIllegalOperation: 'Illegal operation!', alertInnerWidthTooSmall: 'Width too small! Impact using!', alertScreenFullDisable: 'Screen full is disabled!', okLabel: 'OK', cancelLabel: 'CANCEL',
      },
      routes: {
        index: 'index', index1: 'index1', index2: 'index2', test: 'test', dashboard: 'dashboard', nested: 'nested', nestedIndex: 'nestedIndex', nestedTest: 'nestedTest', nestedTestIndex1: 'nestedTestIndex1', nestedTestIndex2: 'nestedTestIndex2', clipboard: 'clipboard', zip: 'ZIP', editor: 'editor', jsonEditor: 'JSON editor', markdownEditor: 'markdown editor', richTextEditor: 'rich text editor', draggable: 'draggable', table: 'table', icons: 'icons', customScatterChart: 'custom scatter chart', roles: 'roles', sAdmin: 'sAdmin', admin: 'admin', manager: 'manager', developer: 'developer', client: 'client', user: 'user',
      },
      appbar: { fullscreen: { toggle: 'toggle fullscreen' }, theme: { light: 'light', dark: 'dark' }, account: { personalCenter: 'Personal Center', signout: 'Sign Out' } },
      signinForm: {
        usernameLabel: 'username', passwordLabel: 'password', signinBtn: 'Sign In', resetBtn: 'Reset', usernameRequired: 'username required', usernameLongerThan3: 'username must longer than 3', passwordRequired: 'password required', passwordShorterThan16: 'password must longer than 16',
      },
      utils: {
        storageMsg: {
          notSupportLocalStorage: 'Not support LocalStorage!', notSupportSessionStorage: 'Not support SessionStorage!', notExactParams: 'Not exact params!', notSupportParamType: 'Not Support param type!', notSupportKeyType: 'Not support key type!', notSupportKeysType: 'Not support keys type!', keyNotExists: 'Key not exists!', notSupportValueType: 'Not support value type!',
        },
        validatorMsg: { typeError: 'Type error!', notExactParams: 'Not exact params!' },
      },
    };
  },
  '9f58': function (e, t, n) {},
  b210(e) {
    e.exports = {
      mock: { breadcrumb: '面包屑导航' },
      request: {
        loading: '处理中...', badStatusCode: '响应的状态码不正确！', noResponse: '发送了请求，但没有响应！', requestError: '请求错误，请检查网络！', noAccount: '账户不存在！',
      },
      message: {
        alertTitle: '提示', alertIllegalOperation: '非法操作！', alertInnerWidthTooSmall: '宽度过小，将影响使用！', alertScreenFullDisable: '全屏功能被禁止！', okLabel: '确定', cancelLabel: '取消',
      },
      routes: {
        index: '首页', index1: '首页1', index2: '首页2', test: '测试', dashboard: '仪表板', nested: '嵌套', nestedIndex: '嵌套首页', nestedTest: '嵌套测试', nestedTestIndex1: '嵌套测试首页1', nestedTestIndex2: '嵌套测试首页2', clipboard: '剪切板', zip: 'ZIP', editor: '编辑器', jsonEditor: 'JSON 编辑器', markdownEditor: 'markdown 编辑器', richTextEditor: '富文本编辑器', draggable: '拖拽', table: '表格', icons: '图标', customScatterChart: '自定义散点图', roles: '角色', sAdmin: 'sAdmin', admin: 'admin', manager: 'manager', developer: 'developer', client: 'client', user: 'user',
      },
      appbar: { fullscreen: { toggle: '切换全屏' }, theme: { light: '浅色', dark: '深色' }, account: { personalCenter: '个人中心', signout: '登出' } },
      signinForm: {
        usernameLabel: '账号', passwordLabel: '密码', signinBtn: '登入', resetBtn: '重置', usernameRequired: '必须填写用户名', usernameLongerThan3: '用户名长度不少于3个字符', passwordRequired: '必须填写密码', passwordShorterThan16: '密码长度不多于16个字符',
      },
      utils: {
        storageMsg: {
          notSupportLocalStorage: '不支持 LocalStorage！', notSupportSessionStorage: '不支持 SessionStorage！', notExactParams: '参数数量不准确！', notSupportParamType: '参数类型不支持！', notSupportKeyType: 'Key 类型不支持！', notSupportKeysType: 'Keys 类型不支持！', keyNotExists: 'Key 不存在！', notSupportValueType: 'Value 类型不支持！',
        },
        validatorMsg: { typeError: '类型错误！', notExactParams: '参数数量不准确！' },
      },
    };
  },
  f46d(e, t, n) {},
}));
