import { ac as ae, ad as ce, ae as le } from './index.DkUtR02Y.js';
/**
 * @vue/runtime-dom v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
import {
  ai as Ct,
  a2 as Ft,
  o as Gt,
  a0 as Ht,
  a1 as I,
  an as J,
  ae as Jt,
  $ as P,
  ao as Q,
  af as Qt,
  F as St,
  a5 as Ut,
  ac as V,
  a3 as Vt,
  G as Wt,
  a9 as Xt,
  ab as Yt,
  aa as Z,
  ad as Zt,
  a7 as _,
  aj as ee,
  L as gt,
  Z as ht,
  ap as ie,
  a6 as jt,
  ag as kt,
  ak as ne,
  am as oe,
  a4 as qt,
  s as re,
  al as se,
  ah as te,
  W as xt,
  a8 as zt,
} from './plugin-vue_export-helper.x4FAPkXN.js';
const fe = 'http://www.w3.org/2000/svg',
  ue = 'http://www.w3.org/1998/Math/MathML',
  C = typeof document < 'u' ? document : null,
  k = C && C.createElement('template'),
  pe = {
    insert: (t, e, n) => {
      e.insertBefore(t, n || null);
    },
    remove: (t) => {
      const e = t.parentNode;
      e && e.removeChild(t);
    },
    createElement: (t, e, n, s) => {
      const o =
        e === 'svg'
          ? C.createElementNS(fe, t)
          : e === 'mathml'
          ? C.createElementNS(ue, t)
          : C.createElement(t, n ? { is: n } : void 0);
      return (
        t === 'select' &&
          s &&
          s.multiple != null &&
          o.setAttribute('multiple', s.multiple),
        o
      );
    },
    createText: (t) => C.createTextNode(t),
    createComment: (t) => C.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e;
    },
    setElementText: (t, e) => {
      t.textContent = e;
    },
    parentNode: (t) => t.parentNode,
    nextSibling: (t) => t.nextSibling,
    querySelector: (t) => C.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, '');
    },
    insertStaticContent(t, e, n, s, o, r) {
      const a = n ? n.previousSibling : e.lastChild;
      if (o && (o === r || o.nextSibling))
        for (
          ;
          e.insertBefore(o.cloneNode(!0), n),
            !(o === r || !(o = o.nextSibling));

        );
      else {
        k.innerHTML =
          s === 'svg'
            ? `<svg>${t}</svg>`
            : s === 'mathml'
            ? `<math>${t}</math>`
            : t;
        const i = k.content;
        if (s === 'svg' || s === 'mathml') {
          const f = i.firstChild;
          for (; f.firstChild; ) i.appendChild(f.firstChild);
          i.removeChild(f);
        }
        e.insertBefore(i, n);
      }
      return [
        a ? a.nextSibling : e.firstChild,
        n ? n.previousSibling : e.lastChild,
      ];
    },
  },
  g = 'transition',
  A = 'animation',
  w = Symbol('_vtc'),
  vt = (t, { slots: e }) => xt(Ht, Tt(t), e);
vt.displayName = 'Transition';
const bt = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String,
  },
  de = (vt.props = I({}, Ft, bt)),
  b = (t, e = []) => {
    _(t) ? t.forEach((n) => n(...e)) : t && t(...e);
  },
  tt = (t) => (t ? (_(t) ? t.some((e) => e.length > 1) : t.length > 1) : !1);
function Tt(t) {
  const e = {};
  for (const c in t) c in bt || (e[c] = t[c]);
  if (t.css === !1) return e;
  const {
      name: n = 'v',
      type: s,
      duration: o,
      enterFromClass: r = `${n}-enter-from`,
      enterActiveClass: a = `${n}-enter-active`,
      enterToClass: i = `${n}-enter-to`,
      appearFromClass: f = r,
      appearActiveClass: l = a,
      appearToClass: u = i,
      leaveFromClass: p = `${n}-leave-from`,
      leaveActiveClass: d = `${n}-leave-active`,
      leaveToClass: T = `${n}-leave-to`,
    } = t,
    y = me(o),
    It = y && y[0],
    Ot = y && y[1],
    {
      onBeforeEnter: q,
      onEnter: G,
      onEnterCancelled: W,
      onLeave: U,
      onLeaveCancelled: Dt,
      onBeforeAppear: Rt = q,
      onAppear: Bt = G,
      onAppearCancelled: Kt = W,
    } = e,
    O = (c, m, v) => {
      S(c, m ? u : i), S(c, m ? l : a), v && v();
    },
    j = (c, m) => {
      (c._isLeaving = !1), S(c, p), S(c, T), S(c, d), m && m();
    },
    z = (c) => (m, v) => {
      const X = c ? Bt : G,
        Y = () => O(m, c, v);
      b(X, [m, Y]),
        et(() => {
          S(m, c ? f : r), h(m, c ? u : i), tt(X) || nt(m, s, It, Y);
        });
    };
  return I(e, {
    onBeforeEnter(c) {
      b(q, [c]), h(c, r), h(c, a);
    },
    onBeforeAppear(c) {
      b(Rt, [c]), h(c, f), h(c, l);
    },
    onEnter: z(!1),
    onAppear: z(!0),
    onLeave(c, m) {
      c._isLeaving = !0;
      const v = () => j(c, m);
      h(c, p),
        Et(),
        h(c, d),
        et(() => {
          c._isLeaving && (S(c, p), h(c, T), tt(U) || nt(c, s, Ot, v));
        }),
        b(U, [c, v]);
    },
    onEnterCancelled(c) {
      O(c, !1), b(W, [c]);
    },
    onAppearCancelled(c) {
      O(c, !0), b(Kt, [c]);
    },
    onLeaveCancelled(c) {
      j(c), b(Dt, [c]);
    },
  });
}
function me(t) {
  if (t == null) return null;
  if (Vt(t)) return [D(t.enter), D(t.leave)];
  {
    const e = D(t);
    return [e, e];
  }
}
function D(t) {
  return zt(t);
}
function h(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.add(n)),
    (t[w] || (t[w] = new Set())).add(e);
}
function S(t, e) {
  e.split(/\s+/).forEach((s) => s && t.classList.remove(s));
  const n = t[w];
  n && (n.delete(e), n.size || (t[w] = void 0));
}
function et(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let he = 0;
function nt(t, e, n, s) {
  const o = (t._endId = ++he),
    r = () => {
      o === t._endId && s();
    };
  if (n) return setTimeout(r, n);
  const { type: a, timeout: i, propCount: f } = yt(t, e);
  if (!a) return s();
  const l = a + 'end';
  let u = 0;
  const p = () => {
      t.removeEventListener(l, d), r();
    },
    d = (T) => {
      T.target === t && ++u >= f && p();
    };
  setTimeout(() => {
    u < f && p();
  }, i + 1),
    t.addEventListener(l, d);
}
function yt(t, e) {
  const n = window.getComputedStyle(t),
    s = (y) => (n[y] || '').split(', '),
    o = s(`${g}Delay`),
    r = s(`${g}Duration`),
    a = st(o, r),
    i = s(`${A}Delay`),
    f = s(`${A}Duration`),
    l = st(i, f);
  let u = null,
    p = 0,
    d = 0;
  e === g
    ? a > 0 && ((u = g), (p = a), (d = r.length))
    : e === A
    ? l > 0 && ((u = A), (p = l), (d = f.length))
    : ((p = Math.max(a, l)),
      (u = p > 0 ? (a > l ? g : A) : null),
      (d = u ? (u === g ? r.length : f.length) : 0));
  const T =
    u === g && /\b(transform|all)(,|$)/.test(s(`${g}Property`).toString());
  return { type: u, timeout: p, propCount: d, hasTransform: T };
}
function st(t, e) {
  for (; t.length < e.length; ) t = t.concat(t);
  return Math.max(...e.map((n, s) => ot(n) + ot(t[s])));
}
function ot(t) {
  return t === 'auto' ? 0 : Number(t.slice(0, -1).replace(',', '.')) * 1e3;
}
function Et() {
  return document.body.offsetHeight;
}
function ge(t, e, n) {
  const s = t[w];
  s && (e = (e ? [e, ...s] : [...s]).join(' ')),
    e == null
      ? t.removeAttribute('class')
      : n
      ? t.setAttribute('class', e)
      : (t.className = e);
}
const M = Symbol('_vod'),
  Ge = {
    beforeMount(t, { value: e }, { transition: n }) {
      (t[M] = t.style.display === 'none' ? '' : t.style.display),
        n && e ? n.beforeEnter(t) : N(t, e);
    },
    mounted(t, { value: e }, { transition: n }) {
      n && e && n.enter(t);
    },
    updated(t, { value: e, oldValue: n }, { transition: s }) {
      (!e == !n && t.style.display === t[M]) ||
        (s
          ? e
            ? (s.beforeEnter(t), N(t, !0), s.enter(t))
            : s.leave(t, () => {
                N(t, !1);
              })
          : N(t, e));
    },
    beforeUnmount(t, { value: e }) {
      N(t, e);
    },
  };
function N(t, e) {
  t.style.display = e ? t[M] : 'none';
}
const wt = Symbol('');
function We(t) {
  const e = gt();
  if (!e) return;
  const n = (e.ut = (o = t(e.proxy)) => {
      Array.from(
        document.querySelectorAll(`[data-v-owner="${e.uid}"]`)
      ).forEach((r) => H(r, o));
    }),
    s = () => {
      const o = t(e.proxy);
      x(e.subTree, o), n(o);
    };
  qt(s),
    Gt(() => {
      const o = new MutationObserver(s);
      o.observe(e.subTree.el.parentNode, { childList: !0 }),
        Wt(() => o.disconnect());
    });
}
function x(t, e) {
  if (t.shapeFlag & 128) {
    const n = t.suspense;
    (t = n.activeBranch),
      n.pendingBranch &&
        !n.isHydrating &&
        n.effects.push(() => {
          x(n.activeBranch, e);
        });
  }
  for (; t.component; ) t = t.component.subTree;
  if (t.shapeFlag & 1 && t.el) H(t.el, e);
  else if (t.type === St) t.children.forEach((n) => x(n, e));
  else if (t.type === Xt) {
    let { el: n, anchor: s } = t;
    for (; n && (H(n, e), n !== s); ) n = n.nextSibling;
  }
}
function H(t, e) {
  if (t.nodeType === 1) {
    const n = t.style;
    let s = '';
    for (const o in e) n.setProperty(`--${o}`, e[o]), (s += `--${o}: ${e[o]};`);
    n[wt] = s;
  }
}
const Se = /(^|;)\s*display\s*:/;
function Ce(t, e, n) {
  const s = t.style,
    o = P(n),
    r = s.display;
  let a = !1;
  if (n && !o) {
    if (e && !P(e)) for (const i in e) n[i] == null && F(s, i, '');
    for (const i in n) i === 'display' && (a = !0), F(s, i, n[i]);
  } else if (o) {
    if (e !== n) {
      const i = s[wt];
      i && (n += ';' + i), (s.cssText = n), (a = Se.test(n));
    }
  } else e && t.removeAttribute('style');
  M in t && ((t[M] = a ? s.display : ''), (s.display = r));
}
const rt = /\s*!important$/;
function F(t, e, n) {
  if (_(n)) n.forEach((s) => F(t, e, s));
  else if ((n == null && (n = ''), e.startsWith('--'))) t.setProperty(e, n);
  else {
    const s = ve(t, e);
    rt.test(n)
      ? t.setProperty(V(s), n.replace(rt, ''), 'important')
      : (t[s] = n);
  }
}
const it = ['Webkit', 'Moz', 'ms'],
  R = {};
function ve(t, e) {
  const n = R[e];
  if (n) return n;
  let s = Qt(e);
  if (s !== 'filter' && s in t) return (R[e] = s);
  s = kt(s);
  for (let o = 0; o < it.length; o++) {
    const r = it[o] + s;
    if (r in t) return (R[e] = r);
  }
  return e;
}
const at = 'http://www.w3.org/1999/xlink';
function be(t, e, n, s, o) {
  if (s && e.startsWith('xlink:'))
    n == null
      ? t.removeAttributeNS(at, e.slice(6, e.length))
      : t.setAttributeNS(at, e, n);
  else {
    const r = te(e);
    n == null || (r && !Ct(n))
      ? t.removeAttribute(e)
      : t.setAttribute(e, r ? '' : n);
  }
}
function Te(t, e, n, s, o, r, a) {
  if (e === 'innerHTML' || e === 'textContent') {
    s && a(s, o, r), (t[e] = n ?? '');
    return;
  }
  const i = t.tagName;
  if (e === 'value' && i !== 'PROGRESS' && !i.includes('-')) {
    t._value = n;
    const l = i === 'OPTION' ? t.getAttribute('value') : t.value,
      u = n ?? '';
    l !== u && (t.value = u), n == null && t.removeAttribute(e);
    return;
  }
  let f = !1;
  if (n === '' || n == null) {
    const l = typeof t[e];
    l === 'boolean'
      ? (n = Ct(n))
      : n == null && l === 'string'
      ? ((n = ''), (f = !0))
      : l === 'number' && ((n = 0), (f = !0));
  }
  try {
    t[e] = n;
  } catch {}
  f && t.removeAttribute(e);
}
function E(t, e, n, s) {
  t.addEventListener(e, n, s);
}
function ye(t, e, n, s) {
  t.removeEventListener(e, n, s);
}
const ct = Symbol('_vei');
function Ee(t, e, n, s, o = null) {
  const r = t[ct] || (t[ct] = {}),
    a = r[e];
  if (s && a) a.value = s;
  else {
    const [i, f] = we(e);
    if (s) {
      const l = (r[e] = Le(s, o));
      E(t, i, l, f);
    } else a && (ye(t, i, a, f), (r[e] = void 0));
  }
}
const lt = /(?:Once|Passive|Capture)$/;
function we(t) {
  let e;
  if (lt.test(t)) {
    e = {};
    let s;
    for (; (s = t.match(lt)); )
      (t = t.slice(0, t.length - s[0].length)), (e[s[0].toLowerCase()] = !0);
  }
  return [t[2] === ':' ? t.slice(3) : V(t.slice(2)), e];
}
let B = 0;
const Ae = Promise.resolve(),
  Ne = () => B || (Ae.then(() => (B = 0)), (B = Date.now()));
function Le(t, e) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    ie(Me(s, n.value), e, 5, [s]);
  };
  return (n.value = t), (n.attached = Ne()), n;
}
function Me(t, e) {
  if (_(e)) {
    const n = t.stopImmediatePropagation;
    return (
      (t.stopImmediatePropagation = () => {
        n.call(t), (t._stopped = !0);
      }),
      e.map((s) => (o) => !o._stopped && s && s(o))
    );
  } else return e;
}
const ft = (t) =>
    t.charCodeAt(0) === 111 &&
    t.charCodeAt(1) === 110 &&
    t.charCodeAt(2) > 96 &&
    t.charCodeAt(2) < 123,
  _e = (t, e, n, s, o, r, a, i, f) => {
    const l = o === 'svg';
    e === 'class'
      ? ge(t, s, l)
      : e === 'style'
      ? Ce(t, n, s)
      : Zt(e)
      ? Jt(e) || Ee(t, e, n, s, a)
      : (
          e[0] === '.'
            ? ((e = e.slice(1)), !0)
            : e[0] === '^'
            ? ((e = e.slice(1)), !1)
            : Pe(t, e, s, l)
        )
      ? Te(t, e, s, r, a, i, f)
      : (e === 'true-value'
          ? (t._trueValue = s)
          : e === 'false-value' && (t._falseValue = s),
        be(t, e, s, l));
  };
function Pe(t, e, n, s) {
  if (s)
    return !!(
      e === 'innerHTML' ||
      e === 'textContent' ||
      (e in t && ft(e) && ht(n))
    );
  if (
    e === 'spellcheck' ||
    e === 'draggable' ||
    e === 'translate' ||
    e === 'form' ||
    (e === 'list' && t.tagName === 'INPUT') ||
    (e === 'type' && t.tagName === 'TEXTAREA')
  )
    return !1;
  if (e === 'width' || e === 'height') {
    const o = t.tagName;
    if (o === 'IMG' || o === 'VIDEO' || o === 'CANVAS' || o === 'SOURCE')
      return !1;
  }
  return ft(e) && P(n) ? !1 : e in t;
}
const At = new WeakMap(),
  Nt = new WeakMap(),
  $ = Symbol('_moveCb'),
  ut = Symbol('_enterCb'),
  Lt = {
    name: 'TransitionGroup',
    props: I({}, de, { tag: String, moveClass: String }),
    setup(t, { slots: e }) {
      const n = gt(),
        s = ee();
      let o, r;
      return (
        ne(() => {
          if (!o.length) return;
          const a = t.moveClass || `${t.name || 'v'}-move`;
          if (!Re(o[0].el, n.vnode.el, a)) return;
          o.forEach(Ie), o.forEach(Oe);
          const i = o.filter(De);
          Et(),
            i.forEach((f) => {
              const l = f.el,
                u = l.style;
              h(l, a),
                (u.transform = u.webkitTransform = u.transitionDuration = '');
              const p = (l[$] = (d) => {
                (d && d.target !== l) ||
                  ((!d || /transform$/.test(d.propertyName)) &&
                    (l.removeEventListener('transitionend', p),
                    (l[$] = null),
                    S(l, a)));
              });
              l.addEventListener('transitionend', p);
            });
        }),
        () => {
          const a = se(t),
            i = Tt(a);
          let f = a.tag || St;
          (o = r), (r = e.default ? oe(e.default()) : []);
          for (let l = 0; l < r.length; l++) {
            const u = r[l];
            u.key != null && J(u, Q(u, i, s, n));
          }
          if (o)
            for (let l = 0; l < o.length; l++) {
              const u = o[l];
              J(u, Q(u, i, s, n)), At.set(u, u.el.getBoundingClientRect());
            }
          return re(f, null, r);
        }
      );
    },
  },
  $e = (t) => delete t.mode;
Lt.props;
const Ue = Lt;
function Ie(t) {
  const e = t.el;
  e[$] && e[$](), e[ut] && e[ut]();
}
function Oe(t) {
  Nt.set(t, t.el.getBoundingClientRect());
}
function De(t) {
  const e = At.get(t),
    n = Nt.get(t),
    s = e.left - n.left,
    o = e.top - n.top;
  if (s || o) {
    const r = t.el.style;
    return (
      (r.transform = r.webkitTransform = `translate(${s}px,${o}px)`),
      (r.transitionDuration = '0s'),
      t
    );
  }
}
function Re(t, e, n) {
  const s = t.cloneNode(),
    o = t[w];
  o &&
    o.forEach((i) => {
      i.split(/\s+/).forEach((f) => f && s.classList.remove(f));
    }),
    n.split(/\s+/).forEach((i) => i && s.classList.add(i)),
    (s.style.display = 'none');
  const r = e.nodeType === 1 ? e : e.parentNode;
  r.appendChild(s);
  const { hasTransform: a } = yt(s);
  return r.removeChild(s), a;
}
const pt = (t) => {
  const e = t.props['onUpdate:modelValue'] || !1;
  return _(e) ? (n) => Yt(e, n) : e;
};
function Be(t) {
  t.target.composing = !0;
}
function dt(t) {
  const e = t.target;
  e.composing && ((e.composing = !1), e.dispatchEvent(new Event('input')));
}
const K = Symbol('_assign'),
  je = {
    created(t, { modifiers: { lazy: e, trim: n, number: s } }, o) {
      t[K] = pt(o);
      const r = s || (o.props && o.props.type === 'number');
      E(t, e ? 'change' : 'input', (a) => {
        if (a.target.composing) return;
        let i = t.value;
        n && (i = i.trim()), r && (i = Z(i)), t[K](i);
      }),
        n &&
          E(t, 'change', () => {
            t.value = t.value.trim();
          }),
        e ||
          (E(t, 'compositionstart', Be),
          E(t, 'compositionend', dt),
          E(t, 'change', dt));
    },
    mounted(t, { value: e }) {
      t.value = e ?? '';
    },
    beforeUpdate(
      t,
      { value: e, modifiers: { lazy: n, trim: s, number: o } },
      r
    ) {
      if (((t[K] = pt(r)), t.composing)) return;
      const a = o || t.type === 'number' ? Z(t.value) : t.value,
        i = e ?? '';
      a !== i &&
        ((document.activeElement === t &&
          t.type !== 'range' &&
          (n || (s && t.value.trim() === i))) ||
          (t.value = i));
    },
  },
  Ke = ['ctrl', 'shift', 'alt', 'meta'],
  xe = {
    stop: (t) => t.stopPropagation(),
    prevent: (t) => t.preventDefault(),
    self: (t) => t.target !== t.currentTarget,
    ctrl: (t) => !t.ctrlKey,
    shift: (t) => !t.shiftKey,
    alt: (t) => !t.altKey,
    meta: (t) => !t.metaKey,
    left: (t) => 'button' in t && t.button !== 0,
    middle: (t) => 'button' in t && t.button !== 1,
    right: (t) => 'button' in t && t.button !== 2,
    exact: (t, e) => Ke.some((n) => t[`${n}Key`] && !e.includes(n)),
  },
  ze = (t, e) => {
    const n = t._withMods || (t._withMods = {}),
      s = e.join('.');
    return (
      n[s] ||
      (n[s] = (o, ...r) => {
        for (let a = 0; a < e.length; a++) {
          const i = xe[e[a]];
          if (i && i(o, e)) return;
        }
        return t(o, ...r);
      })
    );
  },
  He = {
    esc: 'escape',
    space: ' ',
    up: 'arrow-up',
    left: 'arrow-left',
    right: 'arrow-right',
    down: 'arrow-down',
    delete: 'backspace',
  },
  Xe = (t, e) => {
    const n = t._withKeys || (t._withKeys = {}),
      s = e.join('.');
    return (
      n[s] ||
      (n[s] = (o) => {
        if (!('key' in o)) return;
        const r = V(o.key);
        if (e.some((a) => a === r || He[a] === r)) return t(o);
      })
    );
  },
  Mt = I({ patchProp: _e }, pe);
let L,
  mt = !1;
function _t() {
  return L || (L = Ut(Mt));
}
function Fe() {
  return (L = mt ? L : jt(Mt)), (mt = !0), L;
}
const Ye = (...t) => {
    _t().render(...t);
  },
  Ze = (...t) => {
    const e = _t().createApp(...t),
      { mount: n } = e;
    return (
      (e.mount = (s) => {
        const o = $t(s);
        if (!o) return;
        const r = e._component;
        !ht(r) && !r.render && !r.template && (r.template = o.innerHTML),
          (o.innerHTML = '');
        const a = n(o, !1, Pt(o));
        return (
          o instanceof Element &&
            (o.removeAttribute('v-cloak'), o.setAttribute('data-v-app', '')),
          a
        );
      }),
      e
    );
  },
  Je = (...t) => {
    const e = Fe().createApp(...t),
      { mount: n } = e;
    return (
      (e.mount = (s) => {
        const o = $t(s);
        if (o) return n(o, !0, Pt(o));
      }),
      e
    );
  };
function Pt(t) {
  if (t instanceof SVGElement) return 'svg';
  if (typeof MathMLElement == 'function' && t instanceof MathMLElement)
    return 'mathml';
}
function $t(t) {
  return P(t) ? document.querySelector(t) : t;
}
const Qe = ({ linkToSection: t, isInstant: e = !1, isPreviewMode: n = !1 }) => {
  const s = document.getElementById(t.replace('#', ''))?.offsetTop;
  if (!s) return;
  const o = document.querySelector(`.${ae}`)?.offsetHeight || 0,
    a = document.querySelector(`.${ce}`) ? s - o : s,
    i = e ? 'instant' : 'smooth';
  if (n) {
    const f = document.querySelector(`.${le}`);
    if (f) {
      f.scrollTo({ top: a, behavior: i });
      return;
    }
  }
  window.scrollTo({ top: a, behavior: i });
};
export {
  vt as T,
  Xe as a,
  je as b,
  Ue as c,
  Je as d,
  Ze as e,
  Ye as r,
  Qe as s,
  We as u,
  Ge as v,
  ze as w,
};
