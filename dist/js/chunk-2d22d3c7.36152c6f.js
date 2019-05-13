(window.webpackJsonp = window.webpackJsonp || []).push([['chunk-2d22d3c7'], {
  f744(e, t, s) {
    s.r(t); const a = function () {
      const e = this; const t = e.$createElement; const s = e._self._c || t; return s('div', { staticClass: 'container' }, [s('mu-flex', { staticClass: 'row-item' }, [s('mu-text-field', { attrs: { placeholder: 'input here' }, model: { value: e.input, callback(t) { e.input = t; }, expression: 'input' } })], 1), s('mu-flex', { staticClass: 'row-item' }, [s('mu-text-field', { attrs: { placeholder: 'paste here' }, model: { value: e.test, callback(t) { e.test = t; }, expression: 'test' } })], 1), s('mu-flex', { staticClass: 'row-item' }, [s('mu-button', {
        directives: [{
          name: 'clipboard', rawName: 'v-clipboard:copy', value: e.input, expression: 'input', arg: 'copy',
        }, {
          name: 'clipboard', rawName: 'v-clipboard:success', value: e.onCopy, expression: 'onCopy', arg: 'success',
        }, {
          name: 'clipboard', rawName: 'v-clipboard:error', value: e.onError, expression: 'onError', arg: 'error',
        }],
        attrs: { color: 'primary' },
      }, [e._v('\n      Copy\n    ')])], 1), s('mu-flex', { staticClass: 'row-item', attrs: { direction: 'column' } }, [s('p', [e._v("Use unpkg's material-design-icons css may lose some icons...")]), s('p', [e._v('使用 unpkg 的 material-design-icons css 可能会丢失某些图标……')])])], 1);
    }; const o = []; const r = { data() { return { input: '', test: '' }; }, methods: { onCopy(e) { this.$alert('Copied succeeded: '.concat(e.text)); }, onError() { this.$alert('Failed to copy texts'); } } }; const n = r; const i = s('2877'); const c = Object(i.a)(n, a, o, !1, null, '4220c814', null); t.default = c.exports;
  },
}]);
