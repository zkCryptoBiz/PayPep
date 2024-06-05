import { ab as w } from './index.DkUtR02Y.js';
import {
  Y as A,
  b as S,
  _,
  W as c,
  d as p,
  e as v,
  x as y,
} from './plugin-vue_export-helper.x4FAPkXN.js';
import { e as b, s as g, d as h } from './scrollToSection.BWB1M4h8.js';
const R = /\s|&nbsp;/g,
  $ = (t) => {
    try {
      return t.replaceAll(R, '').toLowerCase();
    } catch {
      return t;
    }
  },
  f = (t, e) => {
    t.dataset.qa = $(e.value);
  },
  E = 'qa',
  O = { beforeMount: (t, e) => f(t, e), updated: (t, e) => f(t, e) },
  k = p({ props: { to: { type: Object, default: () => ({}) } } }),
  B = ['href'];
function L(t, e, n, o, s, a) {
  return S(), v('a', { href: t.to.path }, [y(t.$slots, 'default')], 8, B);
}
const M = _(k, [['render', L]]),
  T = () => {
    const t = navigator.userAgent;
    let e,
      n =
        t.match(
          /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
        ) || [];
    return /trident/i.test(n[1])
      ? ((e = /\brv[ :]+(\d+)/g.exec(t) || []),
        { name: 'IE', version: e[1] || '' })
      : n[1] === 'Chrome' && ((e = t.match(/\bOPR|Edge\/(\d+)/)), e != null)
      ? { name: 'Opera', version: e[1] }
      : ((n = n[2]
          ? [n[1], n[2]]
          : [navigator.appName, navigator.appVersion, '-?']),
        (e = t.match(/version\/(\d+)/i)) != null && n.splice(1, 1, e[1]),
        { name: n[0], version: n[1] });
  };
function j(t) {
  const n = T().name === w;
  if (typeof t == 'object') {
    const { query: o, path: s, hash: a } = t,
      i = o ? `?${new URLSearchParams(o)}` : '';
    s
      ? window.location.assign(`${s}${i}`)
      : window.history.pushState(null, null, i),
      a && g({ linkToSection: a, isInstant: n });
  } else window.location.assign(t);
}
const d = (t) => {
    t.component('RouterLink', M),
      (t.config.globalProperties.$router = { push: (e) => j(e) }),
      t.directive(E, O);
  },
  x = Object.freeze(
    Object.defineProperty({ __proto__: null, default: d }, Symbol.toStringTag, {
      value: 'Module',
    })
  ),
  I = async (t) => {
    'default' in x && (await d(t));
  },
  H = p({
    props: {
      value: String,
      name: String,
      hydrate: { type: Boolean, default: !0 },
    },
    setup({ name: t, value: e, hydrate: n }) {
      if (!e) return () => null;
      let o = n ? 'astro-slot' : 'astro-static-slot';
      return () => c(o, { name: t, innerHTML: e });
    },
  }),
  F =
    (t) =>
    async (e, n, o, { client: s }) => {
      if (!t.hasAttribute('ssr')) return;
      const a = e.name ? `${e.name} Host` : void 0,
        i = {};
      for (const [r, m] of Object.entries(o))
        i[r] = () => c(H, { value: m, name: r === 'default' ? void 0 : r });
      const l = s !== 'only',
        u = (l ? h : b)({
          name: a,
          render() {
            let r = c(e, n, i);
            return N(e.setup) && (r = c(A, null, r)), r;
          },
        });
      await I(u),
        u.mount(t, l),
        t.addEventListener('astro:unmount', () => u.unmount(), { once: !0 });
    };
function N(t) {
  const e = t?.constructor;
  return e && e.name === 'AsyncFunction';
}
export { F as default };
