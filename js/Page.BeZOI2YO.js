import {
  d as Cc,
  c as Na,
  a as Sc,
  b as Tc,
  i as hl,
  g as pl,
  s as xi,
} from './addDocumentElements.DIrIUdzR.js';
import {
  K as A,
  j as Ae,
  p as Be,
  D as Bt,
  f as E,
  n as Et,
  W as Fu,
  u as Ge,
  m as He,
  A as Hr,
  T as It,
  r as M,
  s as Me,
  B as Nr,
  g as O,
  o as Oe,
  U as Pi,
  C as Re,
  i as Rr,
  a as Tt,
  S as Ua,
  O as Uu,
  N as Vu,
  X as Wu,
  t as X,
  V as Yu,
  h as Z,
  b as c,
  F as ge,
  e as h,
  y as he,
  Q as il,
  l as je,
  k as ke,
  R as lr,
  z as mn,
  H as nl,
  v as nt,
  _ as oe,
  L as ol,
  q,
  G as qn,
  d as re,
  P as rl,
  x as te,
  c as u,
  w as ue,
  I as va,
  J as wt,
  M as xn,
  E as xt,
} from './plugin-vue_export-helper.x4FAPkXN.js';
/*!
 * vue-router v4.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */
import {
  l as $r,
  d as Aa,
  W as Ai,
  t as Ao,
  a6 as Bi,
  a8 as Bo,
  z as Di,
  q as Ei,
  Z as Gu,
  s as Hn,
  I as Ii,
  U as In,
  n as Ju,
  S as Kt,
  i as Ku,
  V as Li,
  m as Lo,
  C as Mi,
  K as Oi,
  A as Qu,
  r as Rn,
  k as Xu,
  j as Zu,
  a4 as _c,
  v as ac,
  a3 as bc,
  O as cc,
  P as cl,
  M as cr,
  Q as dc,
  u as dl,
  J as dr,
  o as ec,
  a0 as fc,
  X as gc,
  T as gl,
  c as gn,
  $ as hc,
  F as ic,
  g as ju,
  a7 as kc,
  H as lc,
  e as ll,
  R as mc,
  B as ml,
  w as nc,
  x as oc,
  b as pa,
  _ as pc,
  D as qu,
  y as rc,
  G as sc,
  a as sl,
  E as ta,
  p as tc,
  N as uc,
  f as ul,
  L as ur,
  Y as vc,
  a1 as vl,
  a5 as wc,
  a2 as yc,
  h as zu,
} from './index.DkUtR02Y.js'; /* empty css                        */
import {
  c as $u,
  r as Ci,
  w as De,
  v as Ht,
  a as Le,
  T as Ot,
  b as al,
  u as it,
  s as sr,
} from './scrollToSection.BWB1M4h8.js';
var Ri;
(function (e) {
  (e.pop = 'pop'), (e.push = 'push');
})(Ri || (Ri = {}));
var Hi;
(function (e) {
  (e.back = 'back'), (e.forward = 'forward'), (e.unknown = '');
})(Hi || (Hi = {}));
var Ni;
(function (e) {
  (e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated');
})(Ni || (Ni = {}));
const Pc = Symbol(''),
  Ic = Symbol('');
function Ec() {
  return Rr(Pc);
}
function Dc() {
  return Rr(Ic);
}
const $i = M(null),
  et = M({}),
  Xe = () => {
    const e = (F) => {
        $i.value = F;
      },
      n = (F) => {
        et.value = F;
      },
      a = u(() => et.value.pages || {}),
      t = u(() => et.value.blocks),
      o = u(() => et.value.elements),
      i = u(() => et.value.nav),
      r = u(() => et.value.homePageId),
      s = u(() => et.value.isNavHidden),
      l = u(() => et.value.cookieBannerAcceptText),
      m = u(() => et.value.cookieBannerDisclaimer),
      g = u(() => et.value.cookieBannerDeclineText),
      d = u(() => et.value.blogReadingTimeText),
      v = u(() => et.value.meta),
      f = u(() => et.value.metaTitle),
      y = u(() => et.value.forms),
      S = u(() => et.value.styles),
      T = u(() => et.value.domain),
      w = u(() => et.value.siteId),
      b = u(() => et.value.ecommerceShoppingCart),
      L = u(() => et.value.blogCategories),
      D = u(() => et.value.languageSwitcherLanguages),
      P = u(() => et.value.currentPageId),
      x = u(() => a.value[P.value]),
      B = u(() => et.value.currentLocale),
      K = u(() => et.value.languageKeys),
      W = u(() => et.value.ecwidPages),
      C = ({ pageId: F }) => {
        if (!a.value[F]) return null;
        const Q = a.value[F].slug;
        return [Kt, v.value.defaultLocale].includes(B.value)
          ? r.value === F
            ? '/'
            : `/${Q}`
          : r.value === F
          ? `/${B.value}`
          : `/${B.value}/${Q}`;
      };
    return {
      website: $i,
      pageData: et,
      pages: a,
      blocks: t,
      elements: o,
      nav: i,
      homePageId: r,
      isNavHidden: s,
      cookieBannerAcceptText: l,
      cookieBannerDisclaimer: m,
      cookieBannerDeclineText: g,
      blogReadingTimeText: d,
      meta: v,
      metaTitle: f,
      forms: y,
      styles: S,
      domain: T,
      siteId: w,
      ecommerceShoppingCart: b,
      blogCategories: L,
      languageSwitcherLanguages: D,
      currentPageId: P,
      currentLocale: B,
      languageKeys: K,
      ecwidPages: W,
      currentPageData: x,
      setWebsite: e,
      setPageData: n,
      getPagePathFromId: C,
      getButtonHref: ({
        isFormButton: F,
        linkedPageId: Q,
        linkType: N,
        href: I,
      }) => (F ? null : I || (N === ur && Q ? C({ pageId: Q }) : I)),
    };
  },
  Vi = M(!0),
  fl = () => {
    const e = (n) => {
      Vi.value = n;
    };
    return { hasUserScrolled: u(() => !Vi.value), setIntersectingState: e };
  },
  Mc = re({
    __name: 'StickyTrigger',
    setup(e, { expose: n }) {
      n();
      const a = { threshold: 1 },
        t = M(null),
        o = M(null),
        { setIntersectingState: i } = fl();
      Oe(() => {
        (o.value = new IntersectionObserver(([{ isIntersecting: s }]) => {
          i(s);
        }, a)),
          t.value && o.value.observe(t.value);
      }),
        Tt(() => {
          o.value?.disconnect();
        });
      const r = {
        OBSERVER_OPTIONS: a,
        stickyTriggerRef: t,
        observer: o,
        setIntersectingState: i,
      };
      return (
        Object.defineProperty(r, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        r
      );
    },
  }),
  Oc = { ref: 'stickyTriggerRef', class: 'sticky-trigger' };
function Lc(e, n, a, t, o, i) {
  return c(), h('div', Oc, null, 512);
}
const Ac = oe(Mc, [['render', Lc]]),
  Ui = 1600,
  Yi = 1224,
  Fi = 12,
  Bc = 1224,
  ha = 1920,
  xc = (e, n) => {
    const [a, t, o, i] = n.split('/').map(Number.parseFloat),
      { styles: r } = e.settings ?? {},
      s = Number.parseFloat(r?.['row-size']) ?? 48,
      l = Number.parseFloat(r?.['column-gap']) ?? 24,
      m = Number.parseFloat(r?.['row-gap']) ?? 16,
      g = (Yi - (Fi - 1) * l) / Fi,
      d = (ha - Ui) / 2 + l,
      v = (Ui - Yi) / 2 - l;
    let f = ha;
    const y = o - a,
      S = y * s + (y - 1) * m;
    return (
      t !== 1 && (f -= d),
      i !== 17 && (f -= d),
      t > 2 && (f -= v),
      i < 16 && (f -= v),
      t > 3 && (f -= (t - 3) * (g + l)),
      i < 15 && (f -= (15 - i) * (g + l)),
      i - t === 1 && (f = g),
      { width: f, height: S }
    );
  },
  Wi = (e) => Object.prototype.toString.call(e) === '[object Object]',
  an = (e) => {
    const n = e.split(' '),
      a = n.length;
    if (a < 1 || a > 4) throw new Error(`Cannot parse ${a} sides`);
    return ((o, i = o, r = o, s = i) => ({
      top: o,
      right: i,
      bottom: r,
      left: s,
    }))(...n);
  },
  Rc = ['padding', 'm-padding', 'block-padding'],
  Hc = ['border-radius'],
  Nt = (e, n = '') =>
    Wi(e)
      ? Object.entries(e).reduce((a, [t, o]) => {
          const i = n ? `${n}-${t}` : `--${t}`;
          if (Wi(o)) return { ...a, ...Nt(o, i) };
          const r = Rc.includes(t)
            ? Object.entries(an(o)).reduce(
                (s, [l, m]) => ({ ...s, [`${i}-${l}`]: m, [i]: o }),
                {}
              )
            : { [i]: o };
          return { ...a, ...(Hc.includes(t) ? { [i]: `${o}px` } : r) };
        }, {})
      : {},
  xo = M([]),
  yl = () => {
    const e = u(() => xo.value.reduce((o, i) => o + i.quantity, 0)),
      n = () => {
        const o = window.Ecwid.Controller.getEntryPage();
        window.Ecwid.openPage(o.type.toLowerCase(), { id: o.categoryId });
      },
      a = () => {
        window.Ecwid && window.Ecwid.openPage('cart');
      },
      t = (o) => {
        xo.value = o;
      };
    return {
      ecwidCartItems: u(() => xo.value),
      ecwidCartItemCount: e,
      openCart: a,
      setEcwidCartItems: t,
      openEcwidHomepage: n,
    };
  },
  Vr = (e, n, a) =>
    !e || !n
      ? null
      : e === 'assets'
      ? `./${a}/${n}`
      : e === 'unsplash'
      ? `https://images.unsplash.com/${n}`
      : n,
  Nc = /^[\w+.-]+@[\d.A-Za-z-]+\.[A-Za-z]+$/,
  $c = /^\+*\({0,1}\d{1,4}\){0,1}[\d./s-]*$/,
  Vc = /^\d+$/,
  Uc = (e) =>
    typeof e != 'string' ? '' : e.charAt(0).toUpperCase() + e.slice(1),
  Ja = (e) => {
    const n = e.split(/[/\\]/).pop(),
      a = n.lastIndexOf('.');
    return n === '' || a < 1 ? '' : n.slice(a + 1).toLowerCase();
  },
  Yc = [sl, '.', '.', '.'],
  Fc = '',
  Wc = '',
  Ur = [{ width: 360, height: 640 }],
  Yr = [1, 2, 2.625, 3],
  qc = [{ width: 1440 }, { width: 1920 }],
  Fr = [1, 2],
  Wr = 16,
  Nn = (e, n = Wr) =>
    [`(min-width: ${cr}px) ${e}px`, `calc(100vw - ${n * 2}px)`].join(', '),
  Gc = (e, n, a = {}) => {
    const t = a.fit || (a.shouldContain ? 'scale-down' : 'crop'),
      o = [
        '',
        a.width && ``,
        a.height && ``,
        ``,
        a.isLossless && '',
        a.format && ``,
        a.trim && ``,
        a.quality && !a.isLossless && ``,
      ]
        .filter((r) => !!r)
        .join(',');
    let [, i] = n.split(e);

    for (; i.startsWith('/'); ) i = i.replace('/', '');
    return n;
  },
  jc = (e, n = {}) => {
    const a = new URL(e);
    return (
      a.searchParams.set('auto', n.format || 'format'),
      a.searchParams.set('fit', n.shouldContain ? 'clip' : 'crop'),
      n.width && a.searchParams.set('w', n.width),
      n.height && a.searchParams.set('h', n.height),
      n.isLossless && a.searchParams.set('q', 100),
      a.href
    );
  },
  ct = (e, n, a, t = {}) => {
    const o = Vr(e, n, a);
    if (!o) return null;
    if (Ja(o) === 'svg' || Ja(o) === 'ico' || Ja(o) === 'gif') return o;
    const i = Yc.find((r) => o.includes(r));
    return i ? Gc(i, o, t) : o.includes(Fc) ? jc(o, t) : o;
  },
  fa = (e, n, a, t = {}) => {
    const o = qc
      .map((s) =>
        Fr.map((l) => {
          const m = Math.round(s.width * l);
          return `${ct(e, n, a, { ...t, width: m })} ${m}w`;
        })
      )
      .join(',');
    return `${Ur.map((s) =>
      Yr.map((l) => {
        const m = Math.round(s.width * l),
          g = { ...t, width: m };
        return (
          t.isMobileFullScreen && (g.height = Math.round(s.height * l)),
          `${ct(e, n, a, g)} ${m}w`
        );
      })
    ).join(',')},${o}`;
  },
  Ba = (e, n, a, t = {}) => {
    if (!t.width) return fa(e, n, a, t);
    const o = Fr.map((l) => {
        const m = Math.round(t.width * l),
          g = Math.round(t.height * l);
        return `${ct(e, n, a, { ...t, width: m, height: g })} ${m}w`;
      }).join(','),
      i = (t.mobilePadding ?? Wr) * 2;
    return `${Ur.map((l) => {
      const m = l.width - i;
      return Yr.map((g) => {
        const d = t.width / t.height,
          v = Math.round(m * g),
          f = Math.round(v / d);
        return `${ct(e, n, a, { ...t, width: v, height: f })} ${v}w`;
      }).join(',');
    }).join(',')},${o}`;
  },
  zc = (e, n, a, t = {}) => {
    if (!t.width) return fa(e, n, a, t);
    const o = Fr.map((s) => {
        const l = Math.round(t.width * s),
          m = Math.round(t.height * s);
        return `${ct(e, n, a, { ...t, width: l, height: m })} ${l}w`;
      }).join(','),
      i = (t.mobilePadding ?? Wr) * 2;
    return `${Ur.map((s) => {
      const l = Math.round(
        (s.width - i + t.columnGap) / t.columnCount - t.columnGap
      );
      return Yr.map((m) => {
        const g = Math.round(l * m),
          d = Math.round(l * m);
        return `${ct(e, n, a, {
          ...t,
          width: d,
          height: !t.isMasonryLayout && d,
        })} ${g}w`;
      }).join(',');
    }).join(',')},${o}`;
  },
  Kc = () => {
    const { meta: e } = Xe(),
      n = M('z-cookies-consent'),
      a = M('1'),
      t = u(() => !!a.value),
      o = u(() => a.value === '1'),
      i = u(() => a.value !== '0');
    return (
      Oe(() => {
        const l = pl(window.location.hostname);
        (n.value = `z-cookies-consent-${l}`), (a.value = Sc(n.value));
      }),
      {
        acceptCookies: () => {
          xi(n.value, 1, 365),
            (a.value = '1'),
            Tc({ siteMeta: e.value, areCookiesAllowed: i.value });
        },
        declineCookies: () => {
          xi(n.value, 0, 1), (a.value = '0');
        },
        hasUserConsentedCookieBanner: t,
        hasUserAcceptedCookies: o,
        areCookiesAllowed: i,
      }
    );
  },
  Qc = re({
    __name: 'CookieBanner',
    props: {
      disclaimer: { type: String, required: !0 },
      acceptText: { type: String, default: 'Accept' },
      declineText: { type: String, default: 'Decline' },
      siteMeta: { type: Object, required: !0 },
    },
    setup(e, { expose: n }) {
      n();
      const {
          acceptCookies: a,
          declineCookies: t,
          hasUserConsentedCookieBanner: o,
        } = Kc(),
        i = {
          acceptCookies: a,
          declineCookies: t,
          hasUserConsentedCookieBanner: o,
          get isAppPrerendering() {
            return hl;
          },
        };
      return (
        Object.defineProperty(i, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  Zc = { key: 0, class: 'cookie-banner' },
  Xc = { class: 'cookie-banner__frame' },
  Jc = { class: 'cookie-banner__text' },
  ed = { class: 'cookie-banner__controls' };
function td(e, n, a, t, o, i) {
  return !t.isAppPrerendering && !t.hasUserConsentedCookieBanner
    ? (c(),
      h('div', Zc, [
        E('div', Xc, [
          E('p', Jc, X(a.disclaimer), 1),
          E('div', ed, [
            E(
              'button',
              {
                class: 'control-button primary',
                onClick:
                  n[0] ||
                  (n[0] = (...r) => t.acceptCookies && t.acceptCookies(...r)),
              },
              X(a.acceptText),
              1
            ),
            E(
              'button',
              {
                class: 'control-button',
                onClick:
                  n[1] ||
                  (n[1] = (...r) => t.declineCookies && t.declineCookies(...r)),
              },
              X(a.declineText),
              1
            ),
          ]),
        ]),
      ]))
    : O('', !0);
}
const ad = oe(Qc, [['render', td]]),
  nd = (e) => {
    const n = e.colors.map((a) => a.value).join(', ');
    return `linear-gradient(${e.angle}deg, ${n})`;
  },
  od = re({
    __name: 'BlockBackground',
    props: {
      type: { default: 'color' },
      alt: {},
      overlayOpacity: {},
      src: {},
      srcset: {},
      isEager: { type: Boolean },
      gradient: {},
      color: {},
      isFixed: { type: Boolean },
      isInPreviewMode: { type: Boolean, default: !1 },
      isMobile: { type: Boolean, default: !1 },
      isOpacityDisabled: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n(),
        it((d) => ({
          '0dfb3fc4': t.value,
          c548f400: o.value.xStart,
          c1df42c2: o.value.yStart,
          '00b219f9': o.value.xEnd,
          '3cd0c34c': r.value,
        }));
      const a = e,
        t = u(() =>
          a.type === 'gradient' && a.gradient
            ? nd(a.gradient)
            : a.isOpacityDisabled
            ? a.type === 'color'
              ? a.color
              : 'rgb(255, 255, 255)'
            : a.type === 'color'
            ? a.color
            : 'transparent'
        ),
        o = u(() => {
          const v = (((a.gradient?.angle || 0) + 90) * Math.PI) / 180,
            f = `${Math.round(50 - 50 * Math.cos(v))}%`,
            y = `${Math.round(50 - 50 * Math.sin(v))}%`,
            S = `${Math.round(50 + 50 * Math.cos(v))}%`,
            T = `${Math.round(50 + 50 * Math.sin(v))}%`;
          return { xStart: f, yStart: y, xEnd: S, yEnd: T };
        }),
        i = u(
          () => a.type === 'image' && !a.isOpacityDisabled && a.overlayOpacity
        ),
        r = u(() =>
          a.type === 'image' && !a.isOpacityDisabled && a.overlayOpacity
            ? a.overlayOpacity
            : 0
        ),
        s = M(null),
        l = M(Rr('mobileFrame')),
        m = u(() => {
          if (a.isInPreviewMode && a.isMobile && a.isFixed && l.value) {
            const d = l.value.getBoundingClientRect();
            return {
              height: `${d.height}px`,
              width: `${d.width}px`,
              top: `${d.top}px`,
              left: '50%',
              transform: 'translate(-50%, 0)',
            };
          }
          return {};
        });
      Oe(() => {
        Et(() => {
          s.value?.classList.add('transition-with-bg');
        });
      });
      const g = {
        props: a,
        backgroundColor: t,
        gradientBackgroundPosition: o,
        isBackgroundOverlayShown: i,
        backgroundOverlayOpacity: r,
        blockBackgroundRef: s,
        mobileFrame: l,
        mobilePreviewStyles: m,
      };
      return (
        Object.defineProperty(g, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        g
      );
    },
  }),
  rd = ['alt', 'src', 'srcset', 'loading'];
function id(e, n, a, t, o, i) {
  return (
    c(),
    h(
      'div',
      {
        ref: 'blockBackgroundRef',
        class: Z([
          'block-background',
          {
            'block-background--fixed': a.isFixed,
            'block-background--animated-gradient':
              a.type === 'gradient' && a.gradient?.isAnimated,
          },
        ]),
      },
      [
        a.type === 'image' && a.src
          ? (c(),
            h(
              'img',
              {
                key: a.src,
                alt: a.alt,
                src: a.src,
                srcset: a.srcset,
                width: '100vw',
                sizes: '(max-width: 500px) 800px, 100vw',
                loading: a.isEager ? 'eager' : 'lazy',
                class: Z([
                  'block-background__image',
                  { 'block-background__image--fixed': a.isFixed },
                ]),
                style: Ae(t.mobilePreviewStyles),
              },
              null,
              14,
              rd
            ))
          : O('', !0),
        t.isBackgroundOverlayShown
          ? (c(),
            h(
              'div',
              {
                key: 1,
                class: Z([
                  'block-background__overlay',
                  { 'block-background__overlay--fixed': a.isFixed },
                ]),
              },
              null,
              2
            ))
          : O('', !0),
      ],
      2
    )
  );
}
const qr = oe(od, [['render', id]]),
  sd = re({
    props: {
      categories: { type: Array, default: () => [] },
      blogCategories: { type: Object, default: () => ({}) },
    },
    methods: {
      getCategoryNameById(e) {
        return this.blogCategories[e]?.name?.toUpperCase();
      },
    },
  }),
  ld = { class: 'categories' },
  ud = ['onClick'];
function cd(e, n, a, t, o, i) {
  return (
    c(),
    h('p', ld, [
      (c(!0),
      h(
        ge,
        null,
        ke(
          e.categories,
          (r, s) => (
            c(),
            h(
              'span',
              {
                key: r,
                class: 'categories__item',
                onClick: (l) => e.$emit('filter-category', e.categories[s]),
              },
              X(e.getCategoryNameById(r)),
              9,
              ud
            )
          )
        ),
        128
      )),
    ])
  );
}
const bl = oe(sd, [
    ['render', cd],
    ['__scopeId', 'data-v-17a7aef3'],
  ]),
  dd = re({
    __name: 'BlockBlogListItemMeta',
    props: {
      authorName: { type: String, default: '' },
      minutesAmount: { type: String, default: '0' },
      blogReadingTimeText: { type: String, default: '' },
      date: { type: String, default: '' },
      showAvatar: { type: Boolean, default: !0 },
      showName: { type: Boolean, default: !0 },
      showDate: { type: Boolean, default: !0 },
      showMinutes: { type: Boolean, default: !0 },
    },
    setup(e, { expose: n }) {
      n();
      const a = {
        get DEFAULT_MIN_READ_TEXT() {
          return qu;
        },
      };
      return (
        Object.defineProperty(a, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        a
      );
    },
  }),
  md = { class: 'blog-list-item-meta' },
  gd = { class: 'font-secondary' },
  vd = { class: 'blog-list-item-meta__author-name' },
  pd = { class: 'blog-list-item-meta__subtitle' },
  hd = { key: 0 },
  fd = { key: 1 };
function yd(e, n, a, t, o, i) {
  const r = je('qa');
  return (
    c(),
    h('div', md, [
      E('div', gd, [
        ue((c(), h('p', vd, [He(X(a.authorName), 1)])), [
          [Ht, a.showName],
          [r, 'blog-author'],
        ]),
        ue(
          E(
            'p',
            pd,
            [
              a.showDate && a.date
                ? (c(), h('span', hd, X(a.date), 1))
                : O('', !0),
              a.showMinutes
                ? (c(),
                  h(
                    'span',
                    fd,
                    X(
                      `${a.minutesAmount} ${
                        a.blogReadingTimeText || t.DEFAULT_MIN_READ_TEXT
                      }`
                    ),
                    1
                  ))
                : O('', !0),
            ],
            512
          ),
          [[Ht, a.showDate || a.showMinutes]]
        ),
      ]),
    ])
  );
}
const _l = oe(dd, [
    ['render', yd],
    ['__scopeId', 'data-v-88ffe988'],
  ]),
  wl = (e) => new Date(e).toLocaleDateString('en-US'),
  Gr = re({
    name: 'BlockBlogHeader',
    components: { BlockBlogListItemMeta: _l, BlockBlogListItemCategories: bl },
    props: {
      data: { type: Object, required: !0 },
      currentBlogPage: { type: Object, required: !0 },
      blogCategories: { type: Object, default: () => ({}) },
      blogReadingTimeText: { type: [String, void 0], default: void 0 },
    },
    setup(e) {
      const a = u(() => `${e.data.settings.blogTitleFontSize || 32}px`);
      return {
        getFormattedNumericDate: wl,
        DATA_ATTRIBUTE_ANIMATION_ROLE: pa,
        DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT: gn,
        blogTitleTextSize: a,
      };
    },
    computed: {
      categories() {
        return this.currentBlogPage?.categories ?? [];
      },
      meta() {
        return this.currentBlogPage?.meta ?? {};
      },
      authorName() {
        return this.meta?.authorName;
      },
      shownItems() {
        return this.data?.settings?.shownItems ?? {};
      },
      areCategoriesShown() {
        return this.shownItems.categories && this.categories.length;
      },
    },
  }),
  qi = () => {
    it((e) => ({ '21ab201a': e.blogTitleTextSize }));
  },
  Gi = Gr.setup;
Gr.setup = Gi ? (e, n) => (qi(), Gi(e, n)) : qi;
const bd = { class: 'block-blog-header__content' },
  _d = { class: 'font-primary block-blog-header__title' },
  wd = { key: 0, class: 'font-secondary block-blog-header__description' };
function kd(e, n, a, t, o, i) {
  const r = Be('BlockBlogListItemCategories'),
    s = Be('BlockBlogListItemMeta'),
    l = je('qa');
  return ue(
    (c(),
    h(
      'div',
      nt({
        class: 'block-blog-header',
        [e.DATA_ATTRIBUTE_ANIMATION_ROLE || '']:
          e.DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT,
      }),
      [
        E('div', bd, [
          ue((c(), h('h1', _d, [He(X(e.meta.title), 1)])), [
            [l, 'blog-label-posttitle'],
          ]),
          e.shownItems.description
            ? ue((c(), h('p', wd, [He(X(e.meta.description), 1)])), [
                [l, 'blog-label-postdescription'],
              ])
            : O('', !0),
          e.areCategoriesShown
            ? ue(
                (c(),
                q(
                  r,
                  {
                    key: 1,
                    class: 'font-secondary',
                    categories: e.categories,
                    'blog-categories': e.blogCategories,
                  },
                  null,
                  8,
                  ['categories', 'blog-categories']
                )),
                [[l, 'blog-label-category']]
              )
            : O('', !0),
          Me(
            s,
            Ge(
              {
                authorName: e.authorName,
                minutesAmount: e.currentBlogPage.minutesToRead,
                date: e.getFormattedNumericDate(e.currentBlogPage.date),
                showAvatar: e.shownItems.avatar,
                showName: e.shownItems.authorFullName,
                showDate: e.shownItems.date,
                showMinutes: e.shownItems.minutesToRead,
              },
              { 'blog-reading-time-text': e.blogReadingTimeText }
            ),
            null,
            16,
            ['blog-reading-time-text']
          ),
        ]),
      ],
      16
    )),
    [[l, 'blog-postinformation']]
  );
}
const Sd = oe(Gr, [
    ['render', kd],
    ['__scopeId', 'data-v-dfe4e670'],
  ]),
  mr = M(!1),
  ji = M(null),
  gr = ({ blockId: e }) => ({
    isSearchOpenedInCurrentBlock: u(() => ji.value === e && mr.value),
    toggleSearchDropdown: (t) => {
      (ji.value = e), (mr.value = t);
    },
  }),
  En = 16,
  sa = 1224,
  Qt = 360,
  kl = Qt - En * 2,
  zi = 16,
  Td = re({
    __name: 'BlockLayoutWrapper',
    props: {
      isMobileLegacy: { type: Boolean, default: !1 },
      isBlockResponsive: { type: Boolean, default: !1 },
      isForcedOnTop: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n(),
        it((l) => ({
          c467b54c: i.value,
          '2c660f9c': o.value,
          '6ced7b1e': t.value,
          '1f9bbfe2': r.value,
        }));
      const a = e,
        t = u(() =>
          a.isBlockResponsive && !a.isInPreviewMode
            ? `0 ${(En * 100) / Qt}vw`
            : `0 ${En}px`
        ),
        o = u(() => `${Qt}px`),
        i = u(() => `${sa}px`),
        r = u(() => `0 ${En}px`),
        s = {
          props: a,
          mobileBlockPaddingCSSVar: t,
          mobileMaxWidthCSSVar: o,
          maxWidthCSSVar: i,
          tabletBlockPaddingCSSVar: r,
        };
      return (
        Object.defineProperty(s, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        s
      );
    },
  });
function Cd(e, n, a, t, o, i) {
  return (
    c(),
    h(
      'div',
      {
        class: Z([
          'block-layout',
          {
            'block-layout--legacy': a.isMobileLegacy,
            'block-layout--layout': !a.isMobileLegacy,
            'block-layout--forcedOnTop': a.isForcedOnTop,
          },
        ]),
      },
      [te(e.$slots, 'default')],
      2
    )
  );
}
const Pd = oe(Td, [['render', Cd]]),
  Ki = ({ blockElements: e, elementPositionKey: n }) =>
    e?.length ? Math.max(...e.map((a) => a[n].top + a[n].height)) : 0,
  Id = [ll, ul],
  Ed = ({ lowestElementBottom: e, sectionMinHeight: n }) => {
    const t = e >= n ? 0 : n - e;
    return e ? `${t}px` : '1fr';
  },
  io = ({ blockElementsWithPosition: e }) => {
    try {
      const n = e.flatMap(({ position: t }) => [t.top, t.height + t.top]);
      return [...new Set([0, ...n])].sort((t, o) => t - o);
    } catch (n) {
      console.error(n);
    }
  },
  vr = ({
    rowTopsUniqueSorted: e,
    columnsLeftUniqueSorted: n,
    elementPosition: a,
  }) => {
    const { top: t, left: o, width: i, height: r } = a,
      s = e.indexOf(t) + 1,
      l = e.indexOf(t + r) + 1,
      m = n.indexOf(o) + 1,
      g = n.indexOf(o + i) + 1;
    return { rowStart: s, rowEnd: l, columnStart: m, columnEnd: g };
  },
  so = ({ blockElementsWithPosition: e, blockWidth: n }) => {
    const a = e.flatMap(({ position: o }) => [o.left, o.width + o.left]);
    return [...new Set([0, ...a, n])].sort((o, i) => o - i);
  },
  $n = ({ blockElements: e, elementPositionKey: n }) =>
    e.map((a) => ({ ...a, position: a[n] })),
  Qi = ({
    blockElements: e,
    elementPositionKey: n,
    buildResponsiveGrid: a,
  }) => {
    const t = n === ta ? kl : sa,
      o = $n({ blockElements: e, elementPositionKey: n });
    return so({ blockElementsWithPosition: o, blockWidth: t })
      .map((l, m, g) => (m === 0 ? l : l - g[m - 1]))
      .filter((l) => l !== 0)
      .map((l) => (a ? `${(l / t) * 100}%` : `${l}px`))
      .join(' ');
  },
  Dd = ({ gridRows: e }) => e.filter((n) => n !== 0),
  Md = ({ gridRows: e }) => e.map((n) => `${n}px`),
  Od = ({ gridRows: e }) => e.map((n) => `minmax(${n}px, auto)`),
  Ld = ({ gridRows: e, responsiveRows: n, isMobile: a }) =>
    e.map((t, o) =>
      n.includes(o + 1) ? 'auto' : `${(t * 100) / (a ? Qt : sa)}vw`
    ),
  Ro = ({ gridRows: e, lastRowHeight: n }) => `${e.join(' ')} ${n}`,
  Zn = ({
    blockElements: e,
    elementPositionKey: n,
    buildResponsiveGrid: a,
    responsiveRows: t,
    lowestElementBottom: o,
    sectionMinHeight: i,
  }) => {
    const r = n === ta,
      s = $n({ blockElements: e, elementPositionKey: n }),
      m = io({ blockElementsWithPosition: s }).map((f, y, S) =>
        y === 0 ? f : f - S[y - 1]
      ),
      g = Ed({ lowestElementBottom: o, sectionMinHeight: i }),
      d = Dd({ gridRows: m });
    if (!a) {
      const f = Md({ gridRows: d });
      return Ro({ gridRows: f, lastRowHeight: g });
    }
    if (!t) {
      const f = Od({ gridRows: d });
      return Ro({ gridRows: f, lastRowHeight: g });
    }
    const v = Ld({ gridRows: d, responsiveRows: t, isMobile: r });
    return Ro({ gridRows: v, lastRowHeight: g });
  },
  Zi = ({ blockElements: e, elementPositionKey: n }) => {
    const a = $n({ blockElements: e, elementPositionKey: n }),
      t = io({ blockElementsWithPosition: a }),
      o = so({ blockElementsWithPosition: a, blockWidth: n === ta ? kl : sa });
    return e
      .filter((i) => !Id.includes(i.type))
      .reduce((i, r) => {
        const { rowEnd: s, rowStart: l } = vr({
            rowTopsUniqueSorted: t,
            columnsLeftUniqueSorted: o,
            elementPosition: r[n],
          }),
          m = s > l ? s - l : 1,
          g = [...new Array(m).keys()].map((d, v) => l + v);
        return i.some((d) => g.includes(d)) ? i : [...i, s - 1];
      }, []);
  },
  Ad = (e, n) => {
    const a = $n({ blockElements: e, elementPositionKey: Aa }),
      t = io({ blockElementsWithPosition: a }),
      o = so({ blockElementsWithPosition: a, blockWidth: sa }),
      i = $n({ blockElements: e, elementPositionKey: ta }),
      r = io({ blockElementsWithPosition: i }),
      s = so({ blockElementsWithPosition: i, blockWidth: sa });
    return e.map((l) => {
      const {
          rowStart: m,
          rowEnd: g,
          columnStart: d,
          columnEnd: v,
        } = vr({
          rowTopsUniqueSorted: t,
          columnsLeftUniqueSorted: o,
          elementPosition: l.desktop,
        }),
        {
          rowStart: f,
          rowEnd: y,
          columnStart: S,
          columnEnd: T,
        } = vr({
          rowTopsUniqueSorted: r,
          columnsLeftUniqueSorted: s,
          elementPosition: l.mobile,
        });
      return {
        ...l,
        settings: {
          ...l.settings,
          styles: {
            ...(l.settings?.styles || {}),
            'z-index': n.indexOf(l.elementId) + 1,
            'grid-row': `${m}/${g}`,
            'grid-column': `${d}/${v}`,
            'm-grid-row': `${f}/${y}`,
            'm-grid-column': `${S}/${T}`,
          },
        },
      };
    });
  },
  pr = ({
    blockData: e,
    siteElements: n,
    shouldBuildResponsive: a = !0,
  } = {}) => {
    const t = M(a),
      o = u(() =>
        e.value.components.map((D) => ({ ...n.value[D], elementId: D }))
      ),
      i = u(() =>
        o?.value?.length
          ? Ki({ blockElements: o.value, elementPositionKey: ta })
          : null
      ),
      r = u(() =>
        o?.value?.length
          ? Ki({ blockElements: o.value, elementPositionKey: Aa })
          : null
      ),
      s = u(() =>
        e.value.mobile?.minHeight && i.value
          ? 'auto'
          : `${e.value.mobile?.minHeight || zi}px`
      ),
      l = u(() =>
        e.value.desktop?.minHeight && r.value
          ? 'auto'
          : `${e.value.desktop?.minHeight}px`
      ),
      m = u(() => e.value.components.some((D) => !n.value[D].mobile)),
      g = u(() =>
        Zn({
          blockElements: o.value,
          elementPositionKey: Aa,
          buildResponsiveGrid: t.value,
        })
      ),
      d = u(() =>
        Qi({
          blockElements: o.value,
          elementPositionKey: Aa,
          buildResponsiveGrid: t.value,
        })
      ),
      v = u(() =>
        Qi({
          blockElements: o.value,
          elementPositionKey: ta,
          buildResponsiveGrid: t.value,
        })
      ),
      f = u(() => Zi({ blockElements: o.value, elementPositionKey: ta })),
      y = u(() =>
        Zn({
          blockElements: o.value,
          elementPositionKey: ta,
          buildResponsiveGrid: t.value,
          responsiveRows: f.value,
          lowestElementBottom: i.value,
          sectionMinHeight: e.value.mobile?.minHeight,
        })
      ),
      S = u(() =>
        Zn({
          blockElements: o.value,
          elementPositionKey: ta,
          buildResponsiveGrid: t.value,
        })
      ),
      T = u(() => Zi({ blockElements: o.value, elementPositionKey: Aa })),
      w = u(() =>
        Zn({
          blockElements: o.value,
          elementPositionKey: Aa,
          buildResponsiveGrid: t.value,
          responsiveRows: T.value,
          lowestElementBottom: r.value,
          sectionMinHeight: e.value.desktop?.minHeight,
        })
      ),
      b = u(() => Ad(o.value, e.value.zindexes)),
      L = u(() => ({
        '--m-grid-template-rows': y.value,
        '--t-grid-template-rows': S.value,
        '--small-desktop-grid-template-rows': w.value,
        '--grid-template-rows': g.value,
        '--m-grid-template-columns': v.value,
        '--grid-template-columns': d.value,
        '--m-block-min-height': s.value,
        '--t-block-min-height': `${e.value.mobile?.minHeight || zi}px`,
        '--small-desktop-block-min-height': l.value,
        '--block-min-height': `${e.value.desktop.minHeight}px`,
      }));
    return {
      blockElements: o,
      layoutElements: b,
      buildResponsiveGrid: t,
      layoutCSSVars: L,
      isMobileLegacy: m,
    };
  },
  Bd = re({
    name: 'LayoutElementWrapper',
    props: {
      elementData: { type: Object, required: !0 },
      isForcedOnTop: { type: Boolean, default: !1 },
      isMobileLegacy: { type: Boolean, default: !1 },
      isMobileView: { type: Boolean, default: !1 },
    },
    computed: {
      settings() {
        return this.elementData.settings;
      },
      styles() {
        return this.settings.styles;
      },
      innerBackgroundValue() {
        const { innerBackground: e } = this.elementData;
        if (!e) return {};
        const n = e[e.current];
        return e.current !== 'image'
          ? { '--gridItemInnerBackground': n }
          : {
              '--gridItemInnerBackground': `url(${n})`,
              '--gridItemInnerBackgroundOverlayOpacity':
                'overlay-opacity' in e ? e['overlay-opacity'] : null,
            };
      },
      isHiddenDesktop() {
        return this.elementData.desktop.isHidden;
      },
      isHiddenMobile() {
        return this.elementData.mobile.isHidden;
      },
      computedStyles() {
        return {
          ...Nt(this.styles),
          ...this.innerBackgroundValue,
          ...(this.isHiddenDesktop &&
            !this.isMobileView && { '--hidden-element-z-index': 0 }),
          ...(this.isHiddenMobile &&
            this.isMobileView && { '--m-hidden-element-z-index': 0 }),
          ...(this.isForcedOnTop && { '--z-index': Gu }),
        };
      },
    },
  });
function xd(e, n, a, t, o, i) {
  return (
    c(),
    h(
      'div',
      {
        class: Z([
          'layout-element',
          {
            'layout-element--legacy': e.isMobileLegacy,
            'layout-element--layout': !e.isMobileLegacy,
          },
        ]),
        style: Ae(e.computedStyles),
      },
      [te(e.$slots, 'default')],
      6
    )
  );
}
const Rd = oe(Bd, [['render', xd]]),
  Hd = re({
    __name: 'GridButton',
    props: {
      tagName: { default: 'a' },
      href: { default: null },
      target: { default: null },
      rel: { default: null },
      type: { default: 'primary' },
      buttonType: { default: null },
      content: { default: '' },
      isDisabled: { type: Boolean, default: !1 },
      isLoading: { type: Boolean, default: !1 },
      fontSizeMobile: { default: null },
      fontSizeDesktop: { default: null },
      fontFamily: { default: null },
      fontWeight: { default: null },
      borderWidth: { default: null },
      borderRadius: { default: null },
      backgroundColor: { default: null },
      fontColor: { default: null },
      borderColor: { default: null },
      backgroundColorHover: { default: null },
      fontColorHover: { default: null },
      borderColorHover: { default: null },
      mobileElementWidth: { default: 0 },
      mobileElementHeight: { default: 0 },
      isInBuilder: { type: Boolean, default: !1 },
    },
    emits: ['click', 'drag', 'dragstart'],
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = u(() => `${(a.mobileElementWidth * 100) / Qt}vw`),
        o = u(() => `${(a.mobileElementHeight * 100) / Qt}vw`),
        i = u(() => ({
          '--font-size-mobile': a.fontSizeMobile
            ? `${a.fontSizeMobile}px`
            : null,
          '--font-size-desktop': a.fontSizeDesktop
            ? `${a.fontSizeDesktop}px`
            : null,
          '--font-family': a.fontFamily,
          '--font-weight': a.fontWeight,
          '--border-radius':
            a.borderRadius === 0 || a.borderRadius
              ? `${a.borderRadius}px`
              : null,
          '--border-width':
            a.borderWidth === 0 || a.borderWidth ? `${a.borderWidth}px` : '0px',
          '--background-color': a.backgroundColor,
          '--font-color': a.fontColor,
          '--border-color': a.borderColor || 'rgb(26, 26, 26)',
          '--background-color-hover': a.backgroundColorHover,
          '--font-color-hover': a.fontColorHover,
          '--border-color-hover': a.borderColorHover,
          '--m-height': a.isInBuilder ? '100%' : o.value,
          '--m-width': a.isInBuilder ? '100%' : t.value,
        })),
        r = u(() => ({
          'grid-button--empty': !a.content,
          [`grid-button--${a.type}`]: a.type,
          loading: a.isLoading,
        })),
        s = {
          props: a,
          mobileWidthCSSVar: t,
          mobileHeightCSSVar: o,
          buttonCSSVars: i,
          computedClass: r,
        };
      return (
        Object.defineProperty(s, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        s
      );
    },
  });
function Nd(e, n, a, t, o, i) {
  return (
    c(),
    q(
      mn(a.tagName),
      {
        type: a.buttonType,
        name: a.buttonType,
        href: a.href,
        disabled: a.isDisabled,
        target: a.target,
        rel: a.rel,
        class: Z(['grid-button', t.computedClass]),
        'aria-hidden': a.isLoading,
        style: Ae(t.buttonCSSVars),
        onClick: n[0] || (n[0] = (r) => e.$emit('click', r)),
        onDrag: n[1] || (n[1] = (r) => e.$emit('drag', r)),
        onDragstart: n[2] || (n[2] = (r) => e.$emit('dragstart', r)),
      },
      { default: he(() => [He(X(a.content), 1)]), _: 1 },
      40,
      [
        'type',
        'name',
        'href',
        'disabled',
        'target',
        'rel',
        'class',
        'aria-hidden',
        'style',
      ]
    )
  );
}
const Ya = oe(Hd, [
    ['render', Nd],
    ['__scopeId', 'data-v-4a176f12'],
  ]),
  Vn = (e, { href: n } = {}) => ({
    href: n,
    type: u(() => e.data.settings?.type),
    fontSizeMobile: u(() => e.data.mobile?.fontSize),
    fontSizeDesktop: u(() => e.data.desktop?.fontSize),
    fontFamily: u(() => e.data.fontFamily),
    fontWeight: u(() => e.data.fontWeight),
    borderWidth: u(() => e.data.borderWidth),
    borderRadius: u(() => e.data.borderRadius),
    backgroundColor: u(() => e.data.backgroundColor),
    fontColor: u(() => e.data.fontColor),
    borderColor: u(() => e.data.borderColor),
    backgroundColorHover: u(() => e.data.backgroundColorHover),
    fontColorHover: u(() => e.data.fontColorHover),
    borderColorHover: u(() => e.data.borderColorHover),
    buttonType: u(() => (e.data.settings.isFormButton ? 'submit' : null)),
    tagName: u(() => (e.data.settings.isFormButton ? 'button' : 'a')),
    target: u(() => e.data.target),
    rel: u(() => e.data.rel),
    content: u(() => e.data.content),
    mobileElementWidth: u(() => e.data.mobile.width),
    mobileElementHeight: u(() => e.data.mobile.height),
  }),
  $d = {
    __name: 'GridButtonProviderUser',
    props: {
      data: { type: Object, required: !0 },
      currentLocale: { type: String, required: !0 },
      mobileElementWidth: { type: Number, default: null },
      mobileElementHeight: { type: Number, default: null },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { getButtonHref: t } = Xe(),
        {
          tagName: o,
          href: i,
          target: r,
          rel: s,
          type: l,
          buttonType: m,
          content: g,
          fontSizeMobile: d,
          fontSizeDesktop: v,
          fontFamily: f,
          fontWeight: y,
          borderWidth: S,
          borderRadius: T,
          backgroundColor: w,
          fontColor: b,
          borderColor: L,
          backgroundColorHover: D,
          fontColorHover: P,
          borderColorHover: x,
        } = Vn(a, {
          href: u(() =>
            t({
              isFormButton: a.data.settings.isFormButton,
              linkedPageId: a.data.linkedPageId,
              linkType: a.data.linkType,
              href: a.data.href,
            })
          ),
        }),
        B = {
          props: a,
          getButtonHref: t,
          tagName: o,
          href: i,
          target: r,
          rel: s,
          type: l,
          buttonType: m,
          content: g,
          fontSizeMobile: d,
          fontSizeDesktop: v,
          fontFamily: f,
          fontWeight: y,
          borderWidth: S,
          borderRadius: T,
          backgroundColor: w,
          fontColor: b,
          borderColor: L,
          backgroundColorHover: D,
          fontColorHover: P,
          borderColorHover: x,
          computed: u,
          get useSiteGlobal() {
            return Xe;
          },
          GridButton: Ya,
          get useGridButton() {
            return Vn;
          },
        };
      return (
        Object.defineProperty(B, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        B
      );
    },
  };
function Vd(e, n, a, t, o, i) {
  return (
    c(),
    q(
      t.GridButton,
      {
        'tag-name': t.tagName,
        href: t.href,
        target: t.target,
        rel: t.rel,
        type: t.type,
        'button-type': t.buttonType,
        content: t.content,
        'font-size-mobile': t.fontSizeMobile,
        'font-size-desktop': t.fontSizeDesktop,
        'font-family': t.fontFamily,
        'font-weight': t.fontWeight,
        'border-width': t.borderWidth,
        'border-radius': t.borderRadius,
        'background-color': t.backgroundColor,
        'font-color': t.fontColor,
        'border-color': t.borderColor,
        'background-color-hover': t.backgroundColorHover,
        'font-color-hover': t.fontColorHover,
        'border-color-hover': t.borderColorHover,
        'mobile-element-width': a.mobileElementWidth,
        'mobile-element-height': a.mobileElementHeight,
      },
      null,
      8,
      [
        'tag-name',
        'href',
        'target',
        'rel',
        'type',
        'button-type',
        'content',
        'font-size-mobile',
        'font-size-desktop',
        'font-family',
        'font-weight',
        'border-width',
        'border-radius',
        'background-color',
        'font-color',
        'border-color',
        'background-color-hover',
        'font-color-hover',
        'border-color-hover',
        'mobile-element-width',
        'mobile-element-height',
      ]
    )
  );
}
const Ud = oe($d, [['render', Vd]]),
  Yd = (e, n) => {
    const a = u(() => n.ecommerce?.products),
      t = u(() => e.data.settings?.productId),
      o = u(() => e.data.settings?.productVariantId);
    return { storeProducts: a, productId: t, productVariantId: o };
  },
  Ho = M(''),
  Xi = M({}),
  $t = () => ({
    openEcommerceModal: (t) => {
      Ho.value = t;
    },
    closeEcommerceModal: () => {
      Ho.value = null;
    },
    openEcommerceModalName: Ho,
    productPreviewData: Xi,
    setProductPreviewData: (t) => {
      Xi.value = t;
    },
  }),
  jr = 'https://cdn.zyrosite.com/cdn-builder-placeholders',
  Rt = `${jr}/ecommerce-product`,
  rt = `${jr}/instagram`,
  Fd = `${jr}/password-page`;
var Qa = ((e) => (
    (e.DEFAULT = 'default'),
    (e.PRICE_LTH = 'priceLTH'),
    (e.PRICE_HTL = 'priceHTL'),
    (e.MOST_RECENT = 'mostRecent'),
    e
  ))(Qa || {}),
  wa = ((e) => (
    (e.CONTAIN = 'contain'),
    (e.COVER = 'cover'),
    (e.LANDSCAPE = 'landscape'),
    (e.PORTRAIT = 'portrait'),
    e
  ))(wa || {}),
  ka = ((e) => (
    (e.NO_EFFECT = 'no_effect'),
    (e.ZOOM = 'zoom'),
    (e.SWAP_IMAGE = 'swap_image'),
    e
  ))(ka || {});
const da = {
  id: -1,
  title: 'Product name',
  subtitle: null,
  description: `This is a sample product description. You can use it to describe your product,		from its size, weight, and color to other characteristics like material, and so on.
		
Make sure you highlight the best qualities and the most important functions		that the product has. Make your customers want it and tell them how the product		could help make their life easier or simply more beautiful. After you have added		your product description in the store settings, it will appear here automatically`,
  images: [],
  options: [],
  product_collections: [],
  ribbon_text: null,
  site_product_selection: null,
  type: { value: 'physical' },
  thumbnail: null,
  variants: [
    {
      id: '',
      manage_inventory: !1,
      prices: [
        {
          amount: 0,
          currency_code: 'USD',
          sale_amount: null,
          currency: {
            code: 'USD',
            decimal_digits: 2,
            template: '$$1',
            name: 'US Dollar',
            symbol: '$',
            symbol_native: '$',
            name_plural: 'US dollars',
            rounding: 0,
            min_amount: 0,
          },
        },
      ],
      options: [],
    },
  ],
  purchasable: !0,
};
(({ ...da, images: `${Rt}`, thumbnail: `${Rt}` }),
{ ...da, images: `${Rt}`, thumbnail: `${Rt}` }),
  { ...da, images: `${Rt}`, thumbnail: `${Rt}` },
  { ...da, images: `${Rt}`, thumbnail: `${Rt}` },
  { ...da, images: `${Rt}`, thumbnail: `${Rt}` },
  { ...da, images: `${Rt}`, thumbnail: `${Rt}` };
const hr = 'donation',
  Vt = 'booking',
  fr = 'hours',
  Wd = ['BlockEcommerceProduct', 'BlockEcommerceProductList'],
  Ji = {
    INSUFFICIENT_INVENTORY: 'insufficient_inventory',
    BOOKING_UNAVAILABLE: 'booking_slot_not_available',
  },
  qd = 'demo_01G0E9P2R0CFTNBWEEFCEV8EG5',
  yr = 'shopping-cart-items',
  Gd = 864e5,
  Sl = 'site_product_selection',
  zr = 'lowest_price_first',
  Za = 160,
  jd = {
    [Qa.DEFAULT]: '',
    [Qa.PRICE_LTH]: 'order=ASC&sort_by=price',
    [Qa.PRICE_HTL]: 'order=DESC&sort_by=price',
    [Qa.MOST_RECENT]: 'order=DESC&sort_by=created_at',
  },
  Gn = 'https://api-ecommerce.hostinger.com/store',
  br = async (e, n = {}) => {
    const { productIds: a, sort: t, offset: o, limit: i, collectionId: r } = n,
      s = new URLSearchParams(t);
    return (
      a?.length > 1
        ? a?.forEach((g) => s.append('ids[]', g))
        : a?.length && s.set('ids[]', a[0]),
      typeof o == 'number' && i && (s.set('offset', o), s.set('limit', i)),
      r && s.set('collection_ids[]', r),
      await (await fetch(`${Gn}/${e}/products?${s.toString()}`)).json()
    );
  },
  zd = async (e, n) => {
    const a = n.map((i) => `product_ids[]=${i}`).join('&');
    return (
      await (
        await fetch(`${Gn}/${e}/variants?fields=inventory_quantity&${a}`)
      ).json()
    ).variants;
  },
  Kd = async ({
    items: e,
    successUrl: n,
    cancelUrl: a,
    locale: t,
    storeId: o,
  }) =>
    fetch(`${Gn}/${o}/checkout`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'omit',
      body: JSON.stringify({
        items: e,
        successUrl: n,
        cancelUrl: a,
        locale: t,
      }),
    }).then(async (i) => {
      const r = await i.json();
      if (i.ok) return r.url;
      throw r;
    }),
  Qd = async (e, n) =>
    fetch(`${Gn}/time-slots`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'omit',
      body: JSON.stringify({
        booking_event_id: e,
        time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        date: n,
      }),
    }).then(async (a) => {
      const t = await a.json();
      if (a.ok) return t.slots;
      throw t;
    }),
  Zd = async ({ bookingId: e, fromDate: n, toDate: a }) =>
    fetch(`${Gn}/availability`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'omit',
      body: JSON.stringify({
        booking_event_id: e,
        time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        from_date: n,
        to_date: a,
      }),
    }).then(async (t) => {
      const o = await t.json();
      if (t.ok) return o.disabled_dates;
      throw o;
    }),
  nn = (e) => {
    const { openEcommerceModal: n } = $t(),
      { meta: a, ecommerceShoppingCart: t } = Xe();
    let o = '';
    const i = M('');
    Oe(() => {
      (o = a.value?.ecommerceStoreId),
        (i.value = `${window.location.origin}${window.location.pathname}`);
    });
    function r(m) {
      const g = m.some((f) => f.type.value === hr),
        d = m.some((f) => f.type.value === Vt);
      let v = '';
      return (
        d ? (v = `&product=${Vt}`) : g && (v = `&product=${hr}`),
        `${i.value}?open-modal=EcommerceCheckoutSuccess${v}`
      );
    }
    async function s(m) {
      const g = m.reduce(
          (f, y) =>
            f.find((T) => T.variant_id === y.variants[0].id)
              ? f.map((T) =>
                  T.variant_id === y.variants[0].id
                    ? { variant_id: T.variant_id, quantity: T.quantity + 1 }
                    : T
                )
              : [
                  ...f,
                  {
                    variant_id: y.variants[0].id,
                    quantity: 1,
                    time_slot: y.variants[0].booking_event?.time_slot,
                    time_zone: y.variants[0].booking_event?.time_zone,
                  },
                ],
          []
        ),
        d = t.value?.lang || 'en';
      let v = await Kd({
        items: g,
        cancelUrl: i.value,
        successUrl: r(m),
        locale: d,
        storeId: o,
      });
      return (v = new URL(v)), v.searchParams.set('lang', d), v.toString();
    }
    async function l(m) {
      if (!o) {
        n('EcommerceCheckoutFailed');
        return;
      }
      try {
        const g = await s(m);
        window.location.assign(g);
      } catch (g) {
        g.code === Ji.INSUFFICIENT_INVENTORY
          ? n('EcommerceOutOfStock')
          : g.code === Ji.BOOKING_UNAVAILABLE
          ? n('EcommerceBookingUnavailable')
          : n('EcommerceCheckoutFailed');
      }
    }
    return { initiateCheckout: l, storeId: o };
  },
  lo = (e) => e.ecommerceStoreId ?? e.demoEcommerceStoreId ?? qd,
  es = () => {
    const e = window.localStorage.getItem(yr);
    if (!e) return [];
    const n = JSON.parse(e);
    return n.payload.length
      ? Date.now() > n.expiry
        ? (window.localStorage.removeItem(yr), [])
        : n.payload
      : [];
  },
  qa = M([]),
  hn = M([]),
  fn = M([]),
  ts = M(null),
  as = M(!1),
  ns = M(!1),
  os = M({}),
  rs = M({}),
  Xd = M(!1),
  Ut = ({ blockId: e } = { blockId: 'global' }) => {
    const { meta: n, pages: a } = Xe(),
      t = u(() => n.value[ju] === zu),
      o = u(() => !!n.value?.ecommerceStoreId),
      i = u(() => os.value[e || ''] ?? !1),
      r = u(() => rs.value[e || ''] ?? !1),
      s = u(() =>
        hn.value.reduce(
          (P, x) =>
            P.find((K) => K.product.variants[0].id === x.variants[0].id)
              ? P.map((K) =>
                  K.product.variants[0].id === x.variants[0].id
                    ? { ...K, quantity: K.quantity + 1 }
                    : K
                )
              : [...P, { product: x, quantity: 1 }],
          []
        )
      ),
      l = (P, x) => {
        if (hn.value.length >= Za) return !1;
        const B = qa.value.find((W) => W.id === P),
          K = B?.variants.find((W) => W.id === x);
        if (!B || !K) return !1;
        if (K.manage_inventory) {
          const C =
              s.value.find(
                (F) =>
                  F.product.id === P &&
                  F.product.variants.some((Q) => Q.id === K.id)
              )?.quantity || 0,
            H = fn.value.find((F) => F.id === x)?.inventory_quantity;
          return C < H;
        }
        return !0;
      },
      m = u(() => Object.values(a.value).filter((P) => P.type === cl)),
      g = (P) => {
        e && (os.value[e] = P);
      },
      d = (P) => {
        e && (rs.value[e] = P);
      },
      v = (P) => {
        ns.value = P;
      },
      f = (P) => {
        const x = P.reduce(
          (B, K) => {
            const W = B.some((C) => C.id === K.id);
            return [...B, ...(W ? [] : [K])];
          },
          [...qa.value]
        );
        qa.value = x;
      },
      y = (P) => {
        as.value = P;
      },
      S = (P) => {
        hn.value = P || [];
        const x = { payload: P, expiry: Date.now() + Gd };
        window.localStorage.setItem(yr, JSON.stringify(x));
      },
      T = (P) => {
        ts.value = P;
      },
      w = (P) => {
        fn.value = P;
      },
      b = ({ cartItems: P }) =>
        (P || hn.value).reduce((x, B) => {
          const K = qa.value.find((N) => N.id === B.id),
            W = K?.variants.find((N) => B.variants.some((I) => N.id === I.id)),
            C = x.reduce(
              (N, I) => (I.variants.some((U) => U.id === W?.id) ? N + 1 : N),
              0
            ),
            H = fn.value.find((N) => N.id === W?.id)?.inventory_quantity,
            F = !W?.manage_inventory || C < H,
            Q =
              K?.type.value === Vt
                ? {
                    ...B.variants[0].booking_event,
                    time_slot: B.variants[0].booking_event.time_slot,
                    date: B.variants[0].booking_event.date,
                  }
                : null;
          return K && W && F
            ? [...x, { ...K, variants: [{ ...W, booking_event: Q }] }]
            : x;
        }, []),
      L = async (P) => {
        const x = lo(n.value);
        if (!x) return;
        try {
          const W = (await zd(x, P)).reduce(
            (C, H) => {
              const F = C.some((Q) => Q.id === H.id);
              return [...C, ...(F ? [] : [H])];
            },
            [...fn.value]
          );
          w(W);
        } catch (K) {
          console.error(K);
        }
        const B = await b({ cartItems: es() });
        S(B);
      };
    return {
      products: qa,
      shoppingCartItems: hn,
      selectedBookingProductId: ts,
      variantsQuantity: fn,
      isShoppingCartOpen: as,
      isCheckoutLoading: ns,
      isLoading: i,
      isLoaded: r,
      isProductPageLoaded: Xd,
      isStoreTypeZyro: t,
      isEcommerceStoreCreated: o,
      quantifiedCartItemsList: s,
      canAddToCart: l,
      productPages: m,
      setIsLoading: g,
      setIsLoaded: d,
      setIsCheckoutLoading: v,
      setStoreProducts: f,
      setShoppingCartOpen: y,
      setShoppingCartItems: S,
      setSelectedBookingId: T,
      setVariantsQuantity: w,
      fetchProducts: async (P) => {
        const x = lo(n.value);
        if (!x) return;
        const W = [...es().map((C) => C.id), ...P].filter(
          (C) => !qa.value.some((H) => H.id === C)
        );
        if (!W.length) {
          r.value || d(!0);
          return;
        }
        d(!1), g(!0);
        try {
          const { products: C } = await br(x, { productIds: W });
          f(C), await L(W);
        } catch (C) {
          console.error(C);
        } finally {
          g(!1), d(!0);
        }
      },
      updateVariantsQuantity: L,
      refreshCartItems: b,
    };
  },
  Jd = re({
    name: 'GridEcommerceButtonProviderUser',
    components: { GridButton: Ya },
    props: {
      data: { type: Object, required: !0 },
      isCartVisible: { type: Boolean, default: !1 },
      mobileElementWidth: { type: Number, default: null },
      mobileElementHeight: { type: Number, default: null },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e) {
      const { getButtonHref: n } = Xe(),
        {
          canAddToCart: a,
          isShoppingCartOpen: t,
          products: o,
          shoppingCartItems: i,
          setShoppingCartOpen: r,
          setShoppingCartItems: s,
          setSelectedBookingId: l,
        } = Ut(),
        { initiateCheckout: m } = nn(),
        { openEcommerceModal: g } = $t(),
        {
          content: d,
          type: v,
          fontSizeMobile: f,
          fontSizeDesktop: y,
          fontFamily: S,
          fontWeight: T,
          borderRadius: w,
          backgroundColor: b,
          fontColor: L,
          borderColor: D,
          borderWidth: P,
          backgroundColorHover: x,
          fontColorHover: B,
          borderColorHover: K,
        } = Vn(e, {
          href: u(() =>
            n({
              isFormButton: e.data.settings.isFormButton,
              linkedPageId: e.data.linkedPageId,
              linkType: e.data.linkType,
              href: e.data.href,
            })
          ),
        }),
        {
          productId: W,
          productVariantId: C,
          storeProducts: H,
        } = Yd(e, { ecommerce: { products: o.value } }),
        F = u(() => o.value.find((U) => U.id === W.value)),
        Q = u(() => F.value?.type.value === Vt),
        N = u(() => Q.value && !!i.value?.some((U) => U.id === W.value)),
        I = u(() => N.value || !a(W.value, C.value));
      return {
        openEcommerceModal: g,
        productId: W,
        productVariantId: C,
        content: d,
        type: v,
        fontSizeMobile: f,
        fontSizeDesktop: y,
        fontFamily: S,
        fontWeight: T,
        borderRadius: w,
        borderWidth: P,
        backgroundColor: b,
        fontColor: L,
        borderColor: D,
        backgroundColorHover: x,
        fontColorHover: B,
        borderColorHover: K,
        initiateCheckout: m,
        shoppingCartItems: i,
        storeProducts: H,
        isAddToCartDisabled: I,
        product: F,
        canAddToCart: a,
        isShoppingCartOpen: t,
        setShoppingCartOpen: r,
        setShoppingCartItems: s,
        setSelectedBookingId: l,
      };
    },
    data() {
      return { isLoading: !1 };
    },
    methods: {
      async handleClick() {
        if (this.product?.type.value === Vt) {
          this.setSelectedBookingId(this.productId),
            this.openEcommerceModal('EcommerceBookingEventSelect');
          return;
        }
        if (Na() || this.isInPreviewMode) {
          this.openEcommerceModal('EcommerceMessageButtonDisabled');
          return;
        }
        const e = this.product?.variants.find(
            (a) => a.id === this.productVariantId
          ),
          n = { ...this.product, variants: [e] };
        this.isCartVisible
          ? (this.setShoppingCartItems([...this.shoppingCartItems, n]),
            this.manageCartOpenState())
          : ((this.isLoading = !0),
            await this.initiateCheckout([n]).then(() => {
              this.isLoading = !1;
            }));
      },
      manageCartOpenState() {
        this.isShoppingCartOpen || this.setShoppingCartOpen(!0);
      },
    },
  });
function em(e, n, a, t, o, i) {
  const r = Be('GridButton'),
    s = je('qa');
  return ue(
    (c(),
    q(
      r,
      {
        'tag-name': 'button',
        content: e.content,
        type: e.type,
        'is-disabled': e.isAddToCartDisabled,
        'is-loading': e.isLoading,
        'font-size-mobile': e.fontSizeMobile,
        'font-size-desktop': e.fontSizeDesktop,
        'font-family': e.fontFamily,
        'font-weight': e.fontWeight,
        'border-radius': e.borderRadius,
        'border-width': e.borderWidth,
        'background-color': e.backgroundColor,
        'font-color': e.fontColor,
        'border-color': e.borderColor,
        'background-color-hover': e.backgroundColorHover,
        'font-color-hover': e.fontColorHover,
        'border-color-hover': e.borderColorHover,
        'mobile-element-width': e.mobileElementWidth,
        'mobile-element-height': e.mobileElementHeight,
        onClick: e.handleClick,
      },
      null,
      8,
      [
        'content',
        'type',
        'is-disabled',
        'is-loading',
        'font-size-mobile',
        'font-size-desktop',
        'font-family',
        'font-weight',
        'border-radius',
        'border-width',
        'background-color',
        'font-color',
        'border-color',
        'background-color-hover',
        'font-color-hover',
        'border-color-hover',
        'mobile-element-width',
        'mobile-element-height',
        'onClick',
      ]
    )),
    [[s, 'button-ecommerce-checkout']]
  );
}
const tm = oe(Jd, [['render', em]]),
  am = re({
    __name: 'GridEmbed',
    props: {
      srcdoc: { default: '' },
      shouldRender: { type: Boolean, default: !1 },
      height: { default: null },
      id: {},
    },
    emits: ['iframe-height-updated'],
    setup(e, { expose: n, emit: a }) {
      n();
      const t = e,
        o = a,
        i = M(0),
        r = M(),
        s = u(() =>
          t.height && i.value > t.height ? i.value : t.height || i.value
        ),
        l = u(() => ({ '--height': `${s.value}px` })),
        g = {
          props: t,
          emit: o,
          observedHeight: i,
          gridEmbedIframeRef: r,
          embedHeight: s,
          computedStyles: l,
          observeGridEmbed: () => {
            const d = r.value?.contentWindow?.document.querySelector('html');
            new ResizeObserver(([{ contentRect: f }]) => {
              requestAnimationFrame(() => {
                const { height: y } = f;
                y !== i.value &&
                  ((i.value = y), o('iframe-height-updated', i.value));
              });
            }).observe(d);
          },
        };
      return (
        Object.defineProperty(g, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        g
      );
    },
  }),
  nm = ['id'],
  om = ['srcdoc'];
function rm(e, n, a, t, o, i) {
  const r = je('qa');
  return ue(
    (c(),
    h(
      'div',
      { id: a.id, class: 'grid-embed', style: Ae(t.computedStyles) },
      [
        a.shouldRender
          ? (c(),
            h(
              'iframe',
              {
                key: 0,
                ref: 'gridEmbedIframeRef',
                class: 'grid-embed__iframe',
                srcdoc: a.srcdoc,
                title: 'custom code element',
                onLoad: t.observeGridEmbed,
              },
              null,
              40,
              om
            ))
          : O('', !0),
      ],
      12,
      nm
    )),
    [[r, 'builder-gridelement-gridembed']]
  );
}
const im = oe(am, [['render', rm]]),
  sm = `
<style>
	html {
		overflow: hidden;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
 	}

 	iframe {
 		max-width: 100%;
 	}
</style>
`,
  lm = (e) => {
    const n = document.createElement('div');
    n.innerHTML = e;
    const a = [...n.children].reduce(
      (t, o) =>
        o.tagName === 'STYLE'
          ? { ...t, styles: `${t.styles} ${o.outerHTML}` }
          : o.tagName === 'SCRIPT'
          ? { ...t, scripts: `${t.scripts} ${o.outerHTML}` }
          : { ...t, html: `${t.html} ${o.outerHTML}` },
      { styles: sm, scripts: '', html: '' }
    );
    return `<!DOCTYPE html>
	<head>${a.styles}</head>
	<body>${a.html}${a.scripts}</body>
</html>`;
  },
  um = '500px',
  Tl = (e, n = um) => {
    const a = M(!1),
      t = M(null);
    try {
      Oe(() => {
        t.value = new IntersectionObserver(
          ([{ isIntersecting: i }]) => {
            i && ((a.value = !0), t.value?.disconnect());
          },
          { threshold: 0, rootMargin: n }
        );
      });
      const o = Hr(() => {
        if (e.value && t.value) {
          const i = e.value.$el ?? e.value;
          t.value.observe(i), o();
        }
      });
      Tt(() => t.value?.disconnect());
    } catch (o) {
      console.error(o);
    }
    return { isObserved: a };
  },
  cm = re({
    components: { GridEmbed: im },
    props: {
      data: { type: Object, default: () => ({}) },
      id: { type: String, default: null },
    },
    setup(e) {
      const n = M(null),
        { isObserved: a } = Tl(n),
        t = M(null);
      return (
        Oe(() => {
          t.value = lm(e.data.content);
        }),
        { gridEmbedRef: n, isObserved: a, srcdoc: t }
      );
    },
  });
function dm(e, n, a, t, o, i) {
  const r = Be('GridEmbed');
  return (
    c(),
    q(
      r,
      {
        id: e.id,
        ref: 'gridEmbedRef',
        'should-render': e.isObserved,
        srcdoc: e.srcdoc,
        height: e.data.settings.styles.height,
      },
      null,
      8,
      ['id', 'should-render', 'srcdoc', 'height']
    )
  );
}
const mm = oe(cm, [['render', dm]]),
  No = ({ value: e = '', validation: n, validationMessages: a }) => {
    const t = [];
    return (
      n.includes('required') && !e.replace(/ /g, '') && t.push(a.required),
      e.replace(/ /g, '') &&
        (n.includes('email') && !Nc.test(e) && t.push(a.email),
        n.includes('phone') && !$c.test(e) && t.push(a.phone)),
      t
    );
  },
  gm = re({
    props: {
      modelValue: { type: String, default: '' },
      label: { type: String, default: null },
      placeholder: { type: String, default: null },
      isRequired: { type: Boolean, default: !1 },
      isRequiredAsteriskVisible: { type: Boolean, default: !0 },
      isInteractive: { type: Boolean, default: !0 },
      areErrorsShown: { type: Boolean, default: !1 },
      validationErrors: { type: Array, required: !1, default: () => [] },
      theme: { type: String, required: !0 },
      tag: {
        type: String,
        default: 'input',
        validator: (e) => ['textarea', 'input'].includes(e),
      },
    },
    emits: ['update:model-value'],
    data() {
      return { gridInputValue: '' };
    },
    computed: {
      computedClasses() {
        return [
          { 'input__component--textarea': this.tag === 'textarea' },
          { 'input__component--read-only': !this.isInteractive },
          `input__component--${this.theme}`,
        ];
      },
    },
  }),
  vm = ['placeholder', 'value', 'readonly', 'tabindex'],
  pm = ['placeholder', 'value', 'readonly', 'tabindex'],
  hm = { key: 2 };
function fm(e, n, a, t, o, i) {
  return (
    c(),
    h(
      'div',
      { class: Z(['input', `input--${e.theme}`]) },
      [
        E(
          'label',
          { class: Z(['input__label', `input__label--${e.theme}`]) },
          X(e.label) +
            X(e.isRequired && e.isRequiredAsteriskVisible ? '*' : ''),
          3
        ),
        e.tag === 'input'
          ? (c(),
            h(
              'input',
              {
                key: 0,
                placeholder: e.placeholder,
                type: 'text',
                class: Z(['input__component', e.computedClasses]),
                value: e.modelValue,
                readonly: !e.isInteractive,
                tabindex: e.isInteractive ? 0 : -1,
                onInput:
                  n[0] ||
                  (n[0] = (r) => e.$emit('update:model-value', r.target.value)),
                onClick: n[1] || (n[1] = De(() => {}, ['prevent'])),
                onDragstart: n[2] || (n[2] = De(() => {}, ['prevent'])),
                onDrag: n[3] || (n[3] = De(() => {}, ['prevent'])),
              },
              null,
              42,
              vm
            ))
          : O('', !0),
        e.tag === 'textarea'
          ? (c(),
            h(
              'textarea',
              {
                key: 1,
                placeholder: e.placeholder,
                type: 'text',
                class: Z(['input__component', e.computedClasses]),
                value: e.modelValue,
                readonly: !e.isInteractive,
                tabindex: e.isInteractive ? 0 : -1,
                onInput:
                  n[4] ||
                  (n[4] = (r) => e.$emit('update:model-value', r.target.value)),
                onClick: n[5] || (n[5] = De(() => {}, ['prevent'])),
                onDragstart: n[6] || (n[6] = De(() => {}, ['prevent'])),
                onDrag: n[7] || (n[7] = De(() => {}, ['prevent'])),
              },
              null,
              42,
              pm
            ))
          : O('', !0),
        e.validationErrors.length && e.areErrorsShown
          ? (c(),
            h('div', hm, [
              (c(!0),
              h(
                ge,
                null,
                ke(
                  e.validationErrors,
                  (r) => (
                    c(),
                    h(
                      'p',
                      { key: r, class: 'input__error-message text-body-2' },
                      X(r),
                      1
                    )
                  )
                ),
                128
              )),
            ]))
          : O('', !0),
      ],
      2
    )
  );
}
const ym = oe(gm, [
    ['render', fm],
    ['__scopeId', 'data-v-ee2fb8ad'],
  ]),
  bm = re({
    name: 'GridSelectInput',
    props: {
      name: { type: String, required: !0 },
      id: { type: String, required: !0 },
      tag: { type: String, required: !0 },
      selectedOptions: { type: Array, required: !0 },
      isInteractive: { type: Boolean, default: !0 },
      theme: { type: String, required: !0 },
      isSelected: { type: Boolean, required: !0 },
    },
    emits: ['select-option', 'remove-selection', 'add-selection'],
    computed: {
      labelClasses() {
        return [
          { 'input__label--read-only': !this.isInteractive },
          `select-input--${this.theme}`,
        ];
      },
      inputClasses() {
        return [{ 'input__component--read-only': !this.isInteractive }];
      },
    },
    methods: {
      selectOption() {
        if (!this.isInteractive) return;
        const e = { id: this.id, value: this.name };
        this.tag !== 'checkbox'
          ? this.$emit('select-option', e)
          : this.isSelected
          ? this.$emit('remove-selection', e)
          : this.$emit('add-selection', e);
      },
    },
  }),
  _m = ['for'],
  wm = ['id', 'type', 'checked', 'tabindex'];
function km(e, n, a, t, o, i) {
  return (
    c(),
    h(
      'label',
      { class: Z(['select-input', e.labelClasses]), for: e.id },
      [
        (c(),
        h(
          'input',
          {
            id: e.id,
            key: e.isSelected,
            type: e.tag,
            class: Z(['select-input__input', e.inputClasses]),
            checked: e.isSelected,
            tabindex: e.isInteractive ? 0 : -1,
            onInput:
              n[0] ||
              (n[0] = De(
                (...r) => e.selectOption && e.selectOption(...r),
                ['stop']
              )),
            onDragstart: n[1] || (n[1] = De(() => {}, ['prevent'])),
            onDrag: n[2] || (n[2] = De(() => {}, ['prevent'])),
          },
          null,
          42,
          wm
        )),
        He(' ' + X(e.name), 1),
      ],
      10,
      _m
    )
  );
}
const Sm = oe(bm, [
    ['render', km],
    ['__scopeId', 'data-v-3b89e969'],
  ]),
  Tm = re({
    name: 'GridSelectInputsWrapper',
    components: { GridSelectInput: Sm },
    props: {
      label: { type: String, default: null },
      isRequired: { type: Boolean, default: !1 },
      isTextArea: { type: Boolean, default: !1 },
      isInteractive: { type: Boolean, default: !0 },
      areErrorsShown: { type: Boolean, default: !1 },
      validationErrors: { type: Array, required: !1, default: () => [] },
      theme: { type: String, required: !0 },
      tag: {
        type: String,
        required: !0,
        validator: (e) => ['radio', 'checkbox'].includes(e),
      },
      options: { type: Array, required: !0 },
    },
    emits: ['input'],
    data() {
      return { selectedOptions: [] };
    },
    watch: {
      selectedOptions() {
        const e = this.selectedOptions.map(({ value: n }) => n).toString();
        this.$emit('input', e);
      },
    },
    methods: {
      isSelected(e) {
        return this.selectedOptions.some(({ id: n }) => n === e);
      },
      removeSelection(e) {
        const n = this.selectedOptions.filter((a) => a.id !== e.id);
        this.selectedOptions = n;
      },
      addSelection(e) {
        this.selectedOptions = [...this.selectedOptions, e];
      },
      selectOption(e) {
        this.selectedOptions = [e];
      },
    },
  }),
  Cm = { key: 0 };
function Pm(e, n, a, t, o, i) {
  const r = Be('GridSelectInput');
  return (
    c(),
    h(
      'div',
      { class: Z(['input', `input--${e.theme}`]) },
      [
        E(
          'label',
          {
            class: Z([
              'input__label input__label--read-only',
              [`input__label--${e.theme}`],
            ]),
          },
          X(e.label) + X(e.isRequired ? '*' : ''),
          3
        ),
        (c(!0),
        h(
          ge,
          null,
          ke(
            e.options,
            (s) => (
              c(),
              h('div', { key: s.id, class: 'input__options' }, [
                Me(
                  r,
                  {
                    id: s.id,
                    name: s.value,
                    tag: e.tag,
                    'is-selected': e.isSelected(s.id),
                    theme: e.theme,
                    'is-interactive': e.isInteractive,
                    'selected-options': e.selectedOptions,
                    onRemoveSelection: e.removeSelection,
                    onAddSelection: e.addSelection,
                    onSelectOption: e.selectOption,
                  },
                  null,
                  8,
                  [
                    'id',
                    'name',
                    'tag',
                    'is-selected',
                    'theme',
                    'is-interactive',
                    'selected-options',
                    'onRemoveSelection',
                    'onAddSelection',
                    'onSelectOption',
                  ]
                ),
              ])
            )
          ),
          128
        )),
        e.validationErrors.length && e.areErrorsShown
          ? (c(),
            h('div', Cm, [
              (c(!0),
              h(
                ge,
                null,
                ke(
                  e.validationErrors,
                  (s) => (
                    c(),
                    h(
                      'p',
                      { key: s, class: 'input__error-message text-body-2' },
                      X(s),
                      1
                    )
                  )
                ),
                128
              )),
            ]))
          : O('', !0),
      ],
      2
    )
  );
}
const Im = oe(Tm, [
    ['render', Pm],
    ['__scopeId', 'data-v-d57bc6de'],
  ]),
  Em = {
    __name: 'GridForm',
    props: {
      id: { type: String, required: !0 },
      settings: { type: Object, required: !0 },
      submitButtonData: { type: Object, required: !0 },
      formId: { type: String, default: null },
      isError: { type: Boolean, default: !1 },
      showSuccessMessage: { type: Boolean, default: !1 },
      isUserSite: { type: Boolean, default: !1 },
      theme: {
        type: String,
        validator: (e) => ['dark', 'light'].includes(e),
        default: 'light',
      },
      formJustify: { type: String, default: null },
      formButtonJustifySelf: { type: String, default: null },
      mobileFormButtonJustifySelf: { type: String, default: null },
      formBackgroundColor: { type: String, default: null },
      formBorderWidth: { type: String, default: null },
      formBorderColor: { type: String, default: null },
      formBorderRadius: { type: String, default: null },
      formPadding: { type: String, default: null },
      submitButtonBackgroundColor: { type: String, default: null },
      submitButtonBackgroundColorHover: { type: String, default: null },
      submitButtonFontColor: { type: String, default: null },
      submitButtonFontColorHover: { type: String, default: null },
      submitButtonBorderColor: { type: String, default: null },
      submitButtonBorderColorHover: { type: String, default: null },
      submitButtonFontFamily: { type: String, default: null },
      submitButtonFontWeight: { type: Number, default: null },
      submitButtonFontSizeMobile: { type: Number, default: null },
      submitButtonFontSizeDesktop: { type: Number, default: null },
      submitButtonBorderWidth: { type: Number, default: null },
      submitButtonBorderRadius: { type: Number, default: null },
      inputFillColor: { type: String, default: null },
      inputFillColorHover: { type: String, default: null },
      formFontFamily: { type: String, default: null },
      formFontWeight: { type: Number, default: null },
      labelTextColor: { type: String, default: null },
      labelTextSize: { type: Number, default: null },
      mobileLabelTextSize: { type: Number, default: null },
      inputTextColor: { type: String, default: null },
      inputTextColorHover: { type: String, default: null },
      inputTextSize: { type: Number, default: null },
      mobileInputTextSize: { type: Number, default: null },
      inputBorderColor: { type: String, default: null },
      inputBorderColorHover: { type: String, default: null },
      inputBorderWidth: { type: Number, default: null },
      inputBorderRadius: { type: Number, default: null },
      elementsVerticalSpacing: { type: Number, default: null },
      mobileElementsVerticalSpacing: { type: Number, default: null },
    },
    emits: ['on-submit'],
    setup(e, { expose: n, emit: a }) {
      n();
      const t = e,
        o = a,
        i = M({}),
        r = M({}),
        s = M(!1),
        l = u(() =>
          t.settings.schema.reduce(
            (S, T) => ({
              ...S,
              [T.name]: {
                validation: T.validation.flat(),
                validationMessages: T['validation-messages'],
              },
            }),
            {}
          )
        ),
        m = u(() => {
          const S = Number.isInteger(t.elementsVerticalSpacing)
              ? `${t.elementsVerticalSpacing}px`
              : null,
            T = Number.isInteger(t.mobileElementsVerticalSpacing)
              ? `${t.mobileElementsVerticalSpacing}px`
              : null;
          return {
            '--form-flex': t.formJustify ? null : '0 1 100%',
            '--form-button-justify-self': t.formButtonJustifySelf,
            '--m-form-button-justify-self': t.mobileFormButtonJustifySelf,
            '--form-background-color': t.formBackgroundColor,
            '--form-border-width': `${t.formBorderWidth}px`,
            '--form-border-color': t.formBorderColor,
            '--form-border-radius': `${t.formBorderRadius}px`,
            '--form-padding': t.formPadding ? `${t.formPadding}px` : null,
            '--form-font-family': t.formFontFamily,
            '--form-font-weight': t.formFontWeight,
            '--input-fill-color': t.inputFillColor,
            '--input-fill-color--hover':
              t.inputFillColorHover || t.inputFillColor,
            '--label-text-color': t.labelTextColor,
            '--label-text-size': t.labelTextSize
              ? `${t.labelTextSize}px`
              : null,
            '--m-label-text-size': t.mobileLabelTextSize
              ? `${t.mobileLabelTextSize}px`
              : null,
            '--input-text-color': t.inputTextColor,
            '--input-text-color--hover':
              t.inputTextColorHover || t.inputTextColor,
            '--input-text-size': t.inputTextSize
              ? `${t.inputTextSize}px`
              : null,
            '--m-input-text-size': t.mobileInputTextSize
              ? `${t.mobileInputTextSize}px`
              : null,
            '--input-height': t.inputTextSize ? 'auto' : '48px',
            '--input-border-color': t.inputBorderColor,
            '--input-border-color--hover':
              t.inputBorderColorHover || t.inputBorderColor,
            '--input-border-width': t.inputBorderWidth
              ? `${t.inputBorderWidth}px`
              : null,
            '--input-border-radius': t.inputBorderRadius
              ? `${t.inputBorderRadius}px`
              : null,
            '--form-elements-vertical-spacing': S,
            '--m-form-elements-vertical-spacing': T,
            '--form-spacing': 'var(--formSpacing)',
            '--grid-item-inner-padding': 'var(--gridItemInnerPadding)',
            '--grid-item-inner-background': 'var(--gridItemInnerBackground)',
          };
        }),
        g = () =>
          t.settings.schema.flatMap(({ name: S }) => {
            const T = No({ value: r.value[S]?.value, ...l.value[S] });
            return (i.value = { ...i.value, [S]: T }), T;
          }),
        d = (S, T) => {
          (i.value = { ...i.value, [S]: No({ value: T, ...l.value[S] }) }),
            (r.value = {
              ...r.value,
              [S]: {
                value: T,
                type:
                  t.settings.schema.find(({ name: w }) => w === S)
                    .validationType || 'text',
              },
            });
        },
        v = () => {
          r.value = Object.fromEntries(
            Object.entries(r.value).map(([S, { value: T, type: w }]) => [
              S,
              { value: T.trim(), type: w },
            ])
          );
        },
        y = {
          props: t,
          emit: o,
          validationErrors: i,
          formValues: r,
          areErrorsVisible: s,
          validationRules: l,
          formCSSVars: m,
          validateForm: g,
          updateField: d,
          trimFormValues: v,
          handleSubmit: () => {
            v();
            const S = g();
            (s.value = S.length > 0), s.value || o('on-submit', r.value);
          },
          computed: u,
          ref: M,
          get validateInput() {
            return No;
          },
          GridButton: Ya,
          GridInput: ym,
          GridSelectInputsWrapper: Im,
        };
      return (
        Object.defineProperty(y, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        y
      );
    },
  },
  Dm = ['id'],
  Mm = ['name'];
function Om(e, n, a, t, o, i) {
  const r = je('qa');
  return (
    c(),
    h(
      'div',
      {
        id: a.id,
        class: Z([
          'form',
          { 'form--single-field': a.settings.type === 'singleField' },
        ]),
        style: Ae(t.formCSSVars),
      },
      [
        E(
          'form',
          {
            class: Z([
              'form__control',
              { 'form__control--invisible': a.showSuccessMessage || a.isError },
            ]),
            name: a.formId,
            onSubmit: De(t.handleSubmit, ['prevent']),
          },
          [
            (c(!0),
            h(
              ge,
              null,
              ke(
                a.settings.schema,
                (s) => (
                  c(),
                  h(
                    ge,
                    { key: s.id },
                    [
                      s.type === 'GridInput'
                        ? ue(
                            (c(),
                            q(
                              t.GridInput,
                              {
                                key: 0,
                                theme: a.theme,
                                tag: s.tag,
                                placeholder: s.placeholder,
                                label: s.inputLabel,
                                'is-required':
                                  t.validationRules[s.name].validation.includes(
                                    'required'
                                  ),
                                'is-required-asterisk-visible':
                                  a.settings.schema.length > 1,
                                'validation-errors': t.validationErrors[s.name],
                                'are-errors-shown': t.areErrorsVisible,
                                'is-interactive': a.isUserSite,
                                'model-value': t.formValues[s.name]?.value,
                                'onUpdate:modelValue': (l) =>
                                  t.updateField(s.name, l),
                              },
                              null,
                              8,
                              [
                                'theme',
                                'tag',
                                'placeholder',
                                'label',
                                'is-required',
                                'is-required-asterisk-visible',
                                'validation-errors',
                                'are-errors-shown',
                                'is-interactive',
                                'model-value',
                                'onUpdate:modelValue',
                              ]
                            )),
                            [[r, `form-field-${s.inputLabel}`]]
                          )
                        : O('', !0),
                      s.type === 'GridSelectInput'
                        ? ue(
                            (c(),
                            q(
                              t.GridSelectInputsWrapper,
                              {
                                key: 1,
                                theme: a.theme,
                                tag: s.tag,
                                options: s.options,
                                placeholder: s.placeholder,
                                label: s.inputLabel,
                                'is-required':
                                  t.validationRules[s.name].validation.includes(
                                    'required'
                                  ),
                                'validation-errors': t.validationErrors[s.name],
                                'are-errors-shown': t.areErrorsVisible,
                                'is-interactive': a.isUserSite,
                                onInput: (l) => t.updateField(s.name, l),
                              },
                              null,
                              8,
                              [
                                'theme',
                                'tag',
                                'options',
                                'placeholder',
                                'label',
                                'is-required',
                                'validation-errors',
                                'are-errors-shown',
                                'is-interactive',
                                'onInput',
                              ]
                            )),
                            [[r, `form-field-${s.inputLabel}`]]
                          )
                        : O('', !0),
                    ],
                    64
                  )
                )
              ),
              128
            )),
            Me(
              t.GridButton,
              {
                content: a.submitButtonData.content,
                type: a.submitButtonData.settings.type,
                'background-color': a.submitButtonBackgroundColor,
                'background-color-hover': a.submitButtonBackgroundColorHover,
                'font-color': a.submitButtonFontColor,
                'font-color-hover': a.submitButtonFontColorHover,
                'border-color': a.submitButtonBorderColor,
                'border-color-hover': a.submitButtonBorderColorHover,
                'font-family': a.submitButtonFontFamily,
                'font-weight': a.submitButtonFontWeight,
                'font-size-mobile': a.submitButtonFontSizeMobile,
                'font-size-desktop': a.submitButtonFontSizeDesktop,
                'border-width': a.submitButtonBorderWidth,
                'border-radius': a.submitButtonBorderRadius,
                class: 'form__button',
                'button-type': 'submit',
                'tag-name': 'button',
              },
              null,
              8,
              [
                'content',
                'type',
                'background-color',
                'background-color-hover',
                'font-color',
                'font-color-hover',
                'border-color',
                'border-color-hover',
                'font-family',
                'font-weight',
                'font-size-mobile',
                'font-size-desktop',
                'border-width',
                'border-radius',
              ]
            ),
          ],
          42,
          Mm
        ),
        te(e.$slots, 'default', {}, void 0, !0),
      ],
      14,
      Dm
    )
  );
}
const Lm = oe(Em, [
    ['render', Om],
    ['__scopeId', 'data-v-77575ff3'],
  ]),
  Am = re({
    __name: 'ZyroLoader',
    props: {
      color: { default: 'var(--color-dark)' },
      size: { default: '40px' },
      weight: { default: '4px' },
    },
    setup(e, { expose: n }) {
      n(),
        it((t) => ({
          '31918b4a': t.size,
          '19ef3f81': t.weight,
          '007e258c': t.color,
        }));
      const a = {};
      return (
        Object.defineProperty(a, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        a
      );
    },
  }),
  Bm = { class: 'loader' },
  xm = Nr(
    '<div class="loader__element" data-v-a1cb4206></div><div class="loader__element" data-v-a1cb4206></div><div class="loader__element" data-v-a1cb4206></div><div class="loader__element" data-v-a1cb4206></div><div class="loader__element" data-v-a1cb4206></div>',
    5
  ),
  Rm = [xm];
function Hm(e, n, a, t, o, i) {
  return c(), h('div', Bm, Rm);
}
const Kr = oe(Am, [
    ['render', Hm],
    ['__scopeId', 'data-v-a1cb4206'],
  ]),
  Nm = 'light',
  $m = 200,
  Vm = { SHOW_MESSAGE: 'showMessage', LINK_TO_PAGE: 'linkToPage' },
  Um = re({
    __name: 'PostSubmitElement',
    props: {
      successMessage: { default: '' },
      isError: { type: Boolean, default: !1 },
      isLoading: { type: Boolean, default: !1 },
      showSuccessMessage: { type: Boolean, default: !1 },
      theme: { default: Nm },
      hasBorderWidth: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = M(null),
        o = u(() => ({
          '--submit-element-border': a.hasBorderWidth
            ? ''
            : 'var(--color-gray)',
        }));
      Re(t, () => {
        t.value &&
          t.value.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
      const i = {
        props: a,
        postSubmitRef: t,
        submitElementCSSVars: o,
        ZyroLoader: Kr,
      };
      return (
        Object.defineProperty(i, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  Cl = (e) => (Bt('data-v-00e42172'), (e = e()), xt(), e),
  Ym = { key: 1, class: 'success-message__heading' },
  Fm = { key: 2 },
  Wm = Cl(() =>
    E('div', { class: 'submit-message__heading' }, ' Something went wrong ', -1)
  ),
  qm = Cl(() => E('div', null, ' Please try again later ', -1)),
  Gm = [Wm, qm];
function jm(e, n, a, t, o, i) {
  return a.isLoading || a.showSuccessMessage || a.isError
    ? (c(),
      h(
        'div',
        {
          key: 0,
          ref: 'postSubmitRef',
          class: Z(['submit-message', `submit-message--${a.theme}`]),
          style: Ae(t.submitElementCSSVars),
        },
        [
          a.isLoading
            ? (c(),
              q(t.ZyroLoader, {
                key: 0,
                color: 'var(--grid-button-primary-background-color)',
              }))
            : a.showSuccessMessage && !a.isError
            ? (c(), h('div', Ym, X(a.successMessage), 1))
            : O('', !0),
          a.isError && !a.isLoading ? (c(), h('div', Fm, Gm)) : O('', !0),
        ],
        6
      ))
    : O('', !0);
}
const zm = oe(Um, [
    ['render', jm],
    ['__scopeId', 'data-v-00e42172'],
  ]),
  Km = re({
    components: { GridForm: Lm, PostSubmitElement: zm },
    props: {
      id: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      currentLocale: { type: String, required: !0 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup() {
      const { meta: e, forms: n, getPagePathFromId: a } = Xe();
      return { meta: e, forms: n, getPagePathFromId: a };
    },
    data() {
      return { isLoading: !1, showSuccessMessage: !1, isError: !1 };
    },
    methods: {
      async saveData({ token: e, model: n, elementId: a }) {
        await fetch(
          `https://builder-backend.hostinger.com/u1/data/v3/post/${e}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=UTF-8' },
            credentials: 'omit',
            mode: 'cors',
            body: JSON.stringify({ elementId: a, formData: n }),
          }
        ).then((t) => {
          if (!t.ok) throw new Error(t.statusText);
          return t;
        });
      },
      async onSubmit(e) {
        if (this.meta.isDemoTemplate || this.isInPreviewMode) {
          this.showSuccessMessage = !0;
          return;
        }
        this.isLoading = !0;
        let n = !1;
        setTimeout(() => {
          (n = !0),
            (this.isLoading = !(this.showSuccessMessage || this.isError));
        }, $m);
        try {
          await this.saveData({
            token: this.forms[this.data.formId].token,
            model: Object.fromEntries(
              Object.entries(e).map(([i, r]) => [i, r])
            ),
            elementId: this.data.elementId,
          }),
            (this.showSuccessMessage = !0);
          const { submitAction: a } = this.data.settings;
          if (!a || a.id === Vm.SHOW_MESSAGE) return;
          const { pageId: t } = this.data.settings.submitRedirectPage,
            o = this.getPagePathFromId({ pageId: t });
          this.$router.push({ path: o });
        } catch (a) {
          console.error(a), (this.isError = !0);
        } finally {
          n && (this.isLoading = !1);
        }
      },
    },
  });
function Qm(e, n, a, t, o, i) {
  const r = Be('PostSubmitElement'),
    s = Be('GridForm');
  return (
    c(),
    q(
      s,
      {
        id: e.id,
        'form-id': e.data.formId,
        settings: e.data.settings,
        'submit-button-data': e.data.submitButtonData,
        'submit-button-background-color': e.data.submitButtonBackgroundColor,
        'submit-button-background-color-hover':
          e.data.submitButtonBackgroundColorHover,
        'submit-button-font-color': e.data.submitButtonFontColor,
        'submit-button-font-color-hover': e.data.submitButtonFontColorHover,
        'submit-button-border-color': e.data.submitButtonBorderColor,
        'submit-button-border-color-hover': e.data.submitButtonBorderColorHover,
        'submit-button-font-family': e.data.submitButtonFontFamily,
        'submit-button-font-weight': e.data.submitButtonFontWeight,
        'submit-button-font-size-mobile': e.data.mobile?.submitButtonFontSize,
        'submit-button-font-size-desktop': e.data.desktop?.submitButtonFontSize,
        'submit-button-border-width': e.data.submitButtonBorderWidth,
        'submit-button-border-radius': e.data.submitButtonBorderRadius,
        'show-success-message': e.showSuccessMessage,
        'is-error': e.isError,
        'is-user-site': !0,
        theme: e.data.settings.theme,
        'form-justify': e.data.settings.styles.justify,
        'form-button-justify-self':
          e.data.submitButtonData.settings.styles.align,
        'mobile-form-button-justify-self':
          e.data.submitButtonData.settings.styles['m-align'],
        'form-background-color': e.data.formBackgroundColor,
        'form-border-width': e.data.formBorderWidth,
        'form-border-color': e.data.formBorderColor,
        'form-border-radius': e.data.formBorderRadius,
        'form-padding': e.data.formPadding,
        'input-fill-color': e.data.inputFillColor,
        'input-fill-color-hover': e.data.inputFillColorHover,
        'form-font-family': e.data.formFontFamily,
        'form-font-weight': e.data.formFontWeight,
        'label-text-color': e.data.labelTextColor,
        'label-text-size': e.data.desktop?.labelTextSize,
        'mobile-label-text-size': e.data.mobile?.labelTextSize,
        'input-text-color': e.data.inputTextColor,
        'input-text-color-hover': e.data.inputTextColorHover,
        'input-text-size': e.data.desktop?.inputTextSize,
        'mobile-input-text-size': e.data.mobile?.inputTextSize,
        'input-border-color': e.data.inputBorderColor,
        'input-border-color-hover': e.data.inputBorderColorHover,
        'input-border-width': e.data.inputBorderWidth,
        'input-border-radius': e.data.inputBorderRadius,
        'elements-vertical-spacing':
          e.data.desktop?.formElementsVerticalSpacing,
        'mobile-elements-vertical-spacing':
          e.data.mobile?.formElementsVerticalSpacing,
        onOnSubmit: e.onSubmit,
      },
      {
        default: he(() => [
          Me(
            r,
            {
              'show-success-message': e.showSuccessMessage,
              'success-message': e.data.settings.successMessage,
              'is-loading': e.isLoading,
              'is-error': e.isError,
              theme: e.data.settings.theme,
              'has-border-width': e.data.formBorderWidth !== 0,
            },
            null,
            8,
            [
              'show-success-message',
              'success-message',
              'is-loading',
              'is-error',
              'theme',
              'has-border-width',
            ]
          ),
        ]),
        _: 1,
      },
      8,
      [
        'id',
        'form-id',
        'settings',
        'submit-button-data',
        'submit-button-background-color',
        'submit-button-background-color-hover',
        'submit-button-font-color',
        'submit-button-font-color-hover',
        'submit-button-border-color',
        'submit-button-border-color-hover',
        'submit-button-font-family',
        'submit-button-font-weight',
        'submit-button-font-size-mobile',
        'submit-button-font-size-desktop',
        'submit-button-border-width',
        'submit-button-border-radius',
        'show-success-message',
        'is-error',
        'theme',
        'form-justify',
        'form-button-justify-self',
        'mobile-form-button-justify-self',
        'form-background-color',
        'form-border-width',
        'form-border-color',
        'form-border-radius',
        'form-padding',
        'input-fill-color',
        'input-fill-color-hover',
        'form-font-family',
        'form-font-weight',
        'label-text-color',
        'label-text-size',
        'mobile-label-text-size',
        'input-text-color',
        'input-text-color-hover',
        'input-text-size',
        'mobile-input-text-size',
        'input-border-color',
        'input-border-color-hover',
        'input-border-width',
        'input-border-radius',
        'elements-vertical-spacing',
        'mobile-elements-vertical-spacing',
        'onOnSubmit',
      ]
    )
  );
}
const Zm = oe(Km, [['render', Qm]]),
  Xm = re({
    __name: 'GridImage',
    props: {
      src: {},
      alt: {},
      href: { default: null },
      preventDrag: { type: Boolean },
      sizes: {},
      srcset: {},
      tagName: { default: Ku },
      target: { default: null },
      rel: { default: null },
      isLightboxEnabled: { type: Boolean },
      isUnstyled: { type: Boolean },
      resetMobilePosition: { type: Boolean, default: !0 },
      elementWidth: { default: 0 },
      elementHeight: { default: 0 },
      mobileBorderRadius: { default: 0 },
      desktopBorderRadius: { default: 0 },
      cropCssVars: { default: null },
      isOverflowVisible: { type: Boolean },
      isEager: { type: Boolean },
      isMobileImage: { type: Boolean },
      isInBuilder: { type: Boolean },
      isSvg: { type: Boolean },
      shapeMaskSource: { default: null },
      isInPreviewMode: { type: Boolean },
      overlayOpacity: { default: 0 },
    },
    emits: ['image-load', 'image-click'],
    setup(e, { expose: n, emit: a }) {
      n(),
        it((L) => ({
          '08a09b3a': y.value,
          '41b9bd48': T.value,
          '143cc87a': f.value,
          68139491: d.value,
          '161b5a04': v.value,
          ed9f83f0: S.value,
          '6c589be4': l.value,
          cb1185de: m.value,
        }));
      const t = e,
        o = a,
        i = M(null),
        r = M(!1),
        s = u(
          () =>
            t.elementHeight !== null && t.elementHeight > 0 && t.isMobileImage
        ),
        l = u(() =>
          t.isInBuilder
            ? '100%'
            : t.isInPreviewMode
            ? `${t.elementWidth}px`
            : s.value
            ? `${(t.elementWidth * 100) / Qt}vw`
            : '100%'
        ),
        m = u(() =>
          t.isInBuilder
            ? 'auto'
            : t.isInPreviewMode
            ? `${t.elementHeight}px`
            : s.value
            ? `${(t.elementHeight * 100) / Qt}vw`
            : 'auto'
        ),
        g = u(() => ({
          '--overflow': t.isOverflowVisible ? 'visible' : null,
          ...t.cropCssVars,
        })),
        d = u(() =>
          t.isInBuilder ? '100%' : `${(t.elementWidth * 100) / sa}vw`
        ),
        v = u(() =>
          t.isInBuilder ? '100%' : `${(t.elementHeight * 100) / sa}vw`
        ),
        f = u(() =>
          t.overlayOpacity ? `rgba(0, 0, 0, ${t.overlayOpacity / 100})` : null
        ),
        y = u(() =>
          t.shapeMaskSource
            ? null
            : t.desktopBorderRadius
            ? t.desktopBorderRadius
            : t.mobileBorderRadius
            ? t.mobileBorderRadius
            : null
        ),
        S = u(() =>
          t.shapeMaskSource
            ? null
            : t.mobileBorderRadius
            ? t.mobileBorderRadius
            : t.desktopBorderRadius
            ? t.desktopBorderRadius
            : null
        ),
        T = u(() => t.shapeMaskSource && `url('${t.shapeMaskSource}')`),
        w = () => {
          o('image-load'), (r.value = !0);
        };
      Oe(() => {
        if (i.value) {
          if (i.value?.complete) {
            w();
            return;
          }
          i.value.addEventListener('load', w);
        }
      }),
        qn(() => {
          i.value && i.value.removeEventListener('load', w);
        });
      const b = {
        props: t,
        emit: o,
        imageRef: i,
        isLoaded: r,
        isMobileLayoutImage: s,
        mobileWidthCSSVar: l,
        mobileHeightCSSVar: m,
        imageCSSVars: g,
        smallDesktopWidthCSSVar: d,
        smallDesktopHeightCSSVar: v,
        overlayOpacityCSSVar: f,
        desktopBorderRadiusCSSVar: y,
        mobileBorderRadiusCSSVar: S,
        shapeMaskSourceCssVar: T,
        handleImageLoadEvent: w,
        get ANCHOR_TAG() {
          return Qu;
        },
        get DATA_ATTRIBUTE_ANIMATION_ROLE() {
          return pa;
        },
        get DATA_ATTRIBUTE_SELECTOR() {
          return Zu;
        },
        get DATA_ATTRIBUTE_SELECTOR_IMAGE() {
          return Xu;
        },
        get DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE() {
          return $r;
        },
      };
      return (
        Object.defineProperty(b, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        b
      );
    },
  }),
  Jm = ['alt', 'src', 'srcset', 'sizes', 'height', 'width', 'loading'];
function eg(e, n, a, t, o, i) {
  const r = je('qa');
  return (
    c(),
    q(
      mn(a.tagName),
      nt({
        href: a.href,
        target: a.target,
        rel: a.rel,
        title: a.alt,
        style: t.imageCSSVars,
        class: [
          'image',
          {
            'image--zoom': a.isLightboxEnabled,
            'image--grid': !a.isUnstyled,
            'image--unstyled': a.isUnstyled,
            'image--link': a.tagName === t.ANCHOR_TAG,
            loaded: t.isLoaded,
          },
        ],
        [t.DATA_ATTRIBUTE_SELECTOR || '']: t.DATA_ATTRIBUTE_SELECTOR_IMAGE,
        [t.DATA_ATTRIBUTE_ANIMATION_ROLE || '']:
          t.DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE,
        onClick: n[0] || (n[0] = (s) => e.$emit('image-click', s)),
      }),
      {
        default: he(() => [
          ue(
            E(
              'img',
              Ge(
                {
                  ref: 'imageRef',
                  alt: a.alt,
                  src: a.src,
                  srcset: a.srcset,
                  sizes: a.sizes,
                  height: a.elementHeight,
                  width: a.elementWidth,
                  loading: a.isEager ? 'eager' : 'lazy',
                  class: {
                    'image__image--unstyled': a.isUnstyled,
                    'image__image--cropped': !!a.cropCssVars,
                    image__image: !a.isUnstyled,
                    'image__image--reset-m-position': a.resetMobilePosition,
                    'image__image--svg': a.isSvg,
                  },
                },
                nl(
                  {
                    drag: a.preventDrag
                      ? (s) => s.preventDefault()
                      : () => null,
                    dragstart: a.preventDrag
                      ? (s) => s.preventDefault()
                      : () => null,
                  },
                  !0
                )
              ),
              null,
              16,
              Jm
            ),
            [[r, 'builder-gridelement-gridimage']]
          ),
          te(e.$slots, 'default', {}, void 0, !0),
        ]),
        _: 3,
      },
      16,
      ['href', 'target', 'rel', 'title', 'style', 'class']
    )
  );
}
const Pl = oe(Xm, [
    ['render', eg],
    ['__scopeId', 'data-v-47c05b4e'],
  ]),
  is = (e, n) => {
    const a = Array(e).fill([]);
    return n.reduce((t, o, i) => {
      const r = i % e;
      return (t[r] = [...t[r], { ...o, originalIndex: i }]), t;
    }, a);
  },
  tg = re({
    name: 'GridGallery',
    components: { GridImage: Pl },
    props: {
      columnCount: { type: Number, required: !0 },
      columnGap: { type: Number, required: !0 },
      mobileColumnCount: { type: Number, required: !0 },
      mobileColumnGap: { type: Number, required: !0 },
      gridImages: { type: Array, required: !0 },
      isLightboxEnabled: { type: Boolean, required: !1 },
      isMasonryLayout: { type: Boolean, default: !1 },
      loadImages: { type: Boolean, default: !0 },
    },
    emits: ['image-load'],
    setup(e) {
      const n = u(() => is(e.columnCount, e.gridImages)),
        a = u(() => is(e.mobileColumnCount, e.gridImages));
      return { masonryColumns: n, mobileMasonryColumns: a };
    },
    computed: {
      gridGalleryCSSVars() {
        return {
          '--column-gap': `${this.columnGap}px`,
          '--column-count': this.columnCount,
          '--m-column-gap': `${this.mobileColumnGap}px`,
          '--m-column-count': this.mobileColumnCount,
        };
      },
    },
  }),
  ag = { class: 'gallery' };
function ng(e, n, a, t, o, i) {
  const r = Be('GridImage');
  return (
    c(),
    h('div', ag, [
      e.isMasonryLayout
        ? (c(),
          h(
            'div',
            {
              key: 0,
              class: 'gallery__masonry',
              style: Ae(e.gridGalleryCSSVars),
            },
            [
              (c(!0),
              h(
                ge,
                null,
                ke(
                  e.mobileMasonryColumns,
                  (s, l) => (
                    c(),
                    h(
                      'div',
                      { key: l, class: 'gallery__masonry-mobile-columns' },
                      [
                        (c(!0),
                        h(
                          ge,
                          null,
                          ke(
                            s,
                            (m, g) => (
                              c(),
                              q(
                                r,
                                {
                                  key: `${g}${m.src}`,
                                  class: 'gallery__masonry-image',
                                  alt: m.alt,
                                  src: e.loadImages ? m.src : '',
                                  srcset: m.srcset,
                                  sizes: m.sizes,
                                  'element-width': m.width,
                                  'prevent-drag': '',
                                  'is-eager': '',
                                  'is-unstyled': '',
                                  'reset-mobile-position': !1,
                                  'is-lightbox-enabled': e.isLightboxEnabled,
                                  onImageClick: (d) =>
                                    e.$emit('image-click', m.originalIndex),
                                  onImageLoad:
                                    n[0] ||
                                    (n[0] = (d) => e.$emit('image-load')),
                                },
                                null,
                                8,
                                [
                                  'alt',
                                  'src',
                                  'srcset',
                                  'sizes',
                                  'element-width',
                                  'is-lightbox-enabled',
                                  'onImageClick',
                                ]
                              )
                            )
                          ),
                          128
                        )),
                      ]
                    )
                  )
                ),
                128
              )),
              (c(!0),
              h(
                ge,
                null,
                ke(
                  e.masonryColumns,
                  (s, l) => (
                    c(),
                    h(
                      'div',
                      { key: l, class: 'gallery__masonry-desktop-columns' },
                      [
                        (c(!0),
                        h(
                          ge,
                          null,
                          ke(
                            s,
                            (m, g) => (
                              c(),
                              q(
                                r,
                                {
                                  key: `${g}${m.src}`,
                                  class: 'gallery__masonry-image',
                                  alt: m.alt,
                                  src: e.loadImages ? m.src : '',
                                  srcset: m.srcset,
                                  sizes: m.sizes,
                                  'element-width': m.width,
                                  'prevent-drag': '',
                                  'is-eager': '',
                                  'is-unstyled': '',
                                  'reset-mobile-position': !1,
                                  'is-lightbox-enabled': e.isLightboxEnabled,
                                  onImageClick: (d) =>
                                    e.$emit('image-click', m.originalIndex),
                                  onImageLoad:
                                    n[1] ||
                                    (n[1] = (d) => e.$emit('image-load')),
                                },
                                null,
                                8,
                                [
                                  'alt',
                                  'src',
                                  'srcset',
                                  'sizes',
                                  'element-width',
                                  'is-lightbox-enabled',
                                  'onImageClick',
                                ]
                              )
                            )
                          ),
                          128
                        )),
                      ]
                    )
                  )
                ),
                128
              )),
            ],
            4
          ))
        : (c(),
          h(
            'div',
            { key: 1, class: 'gallery__grid', style: Ae(e.gridGalleryCSSVars) },
            [
              (c(!0),
              h(
                ge,
                null,
                ke(
                  e.gridImages,
                  (s, l) => (
                    c(),
                    h('div', { key: `${l}${s.src}`, class: 'gallery__block' }, [
                      (c(),
                      q(
                        r,
                        {
                          key: `${l}${s.src}`,
                          alt: s.alt,
                          src: e.loadImages ? s.src : '',
                          srcset: s.srcset,
                          sizes: s.sizes,
                          'element-width': s.width,
                          'element-height': s.height,
                          'prevent-drag': '',
                          'is-lightbox-enabled': e.isLightboxEnabled,
                          'reset-mobile-position': !1,
                          'is-eager': '',
                          class: 'gallery__image',
                          onImageClick: (m) => e.$emit('image-click', l),
                          onImageLoad:
                            n[2] || (n[2] = (m) => e.$emit('image-load')),
                        },
                        null,
                        8,
                        [
                          'alt',
                          'src',
                          'srcset',
                          'sizes',
                          'element-width',
                          'element-height',
                          'is-lightbox-enabled',
                          'onImageClick',
                        ]
                      )),
                    ])
                  )
                ),
                128
              )),
            ],
            4
          )),
      te(e.$slots, 'default', {}, void 0, !0),
    ])
  );
}
const og = oe(tg, [
    ['render', ng],
    ['__scopeId', 'data-v-0346154b'],
  ]),
  rg = (e) => {
    const n = u(() => e.data.images.length > 0),
      a = u(() => Number.parseInt(e.data.desktop.columnCount || 1, 10)),
      t = u(() => Number.parseInt(e.data.desktop.columnGap || 0, 10)),
      o = u(() => Number.parseInt(e.data.mobile.columnCount || 1, 10)),
      i = u(() => Number.parseInt(e.data.mobile.columnGap || 0, 10)),
      r = u(() => e.data.settings.layout === 'masonry');
    return {
      hasGridImages: n,
      columnCount: a,
      columnGap: t,
      isMasonryLayout: r,
      mobileColumnCount: o,
      mobileColumnGap: i,
    };
  },
  ut = {
    Backspace: 'Backspace',
    ShiftLeft: 'ShiftLeft',
    Escape: 'Escape',
    Space: 'Space',
    ArrowLeft: 'ArrowLeft',
    ArrowUp: 'ArrowUp',
    ArrowRight: 'ArrowRight',
    ArrowDown: 'ArrowDown',
    Delete: 'Delete',
    KeyX: 'KeyX',
    KeyC: 'KeyC',
    KeyD: 'KeyD',
    KeyY: 'KeyY',
    KeyZ: 'KeyZ',
    OSLeft: 'OSLeft',
    NumLockSlash: 'NumLockSlash',
    KeySlash: 'Slash',
    Enter: 'Enter',
    BracketLeft: 'BracketLeft',
    BracketRight: 'BracketRight',
  },
  ig = {
    8: ut.Backspace,
    16: ut.ShiftLeft,
    27: ut.Escape,
    32: ut.Space,
    37: ut.ArrowLeft,
    38: ut.ArrowUp,
    39: ut.ArrowRight,
    40: ut.ArrowDown,
    46: ut.Delete,
    67: ut.KeyC,
    68: ut.KeyD,
    88: ut.KeyX,
    89: ut.KeyY,
    90: ut.KeyZ,
    91: ut.OSLeft,
    111: ut.NumLockSlash,
    191: ut.KeySlash,
    219: ut.BracketLeft,
    221: ut.BracketRight,
  },
  $o = (e) => {
    let n;
    return (
      e
        ? e.code !== void 0
          ? (n = e.code === 'MetaLeft' ? 'OSLeft' : e.code)
          : e.keyCode !== void 0 && (n = ig[e.keyCode])
        : (n = void 0),
      n
    );
  },
  Da = M([]),
  Ma = M(null),
  on = () => {
    const e = u(() => Da.value.length > 0),
      n = u(() => Da.value.length > 1),
      a = u(() => Da.value.length - 1),
      t = u(() => Ma.value === Da.value.length - 1),
      o = u(() => Ma.value === 0),
      i = u(() => Da.value[Ma.value]),
      r = (y) => {
        Ma.value = y;
      },
      s = (y) => {
        Da.value = Array.isArray(y) ? y : [y];
      },
      l = () => (o.value ? r(a.value) : r(Ma.value - 1)),
      m = () => (t.value ? r(0) : r(Ma.value + 1)),
      g = () => {
        s([]), r(null);
      },
      d = () => {
        n.value || g();
      },
      v = (y, S = 0) => {
        s(y), r(S);
      },
      f = (y) => {
        $o(y) === ut.ArrowRight && m(),
          $o(y) === ut.ArrowLeft && l(),
          $o(y) === ut.Escape && g();
      };
    return {
      lightboxImages: u(() => Da.value),
      currentLightboxImageIndex: u(() => Ma.value),
      currentLightboxImage: i,
      lastImageIndex: a,
      isFirstImage: o,
      isLastImage: t,
      isLightboxOpen: e,
      isImageGalleryMode: n,
      setLightboxImages: s,
      setCurrentLightboxImageIndex: r,
      goToNextImage: m,
      goToPreviousImage: l,
      handleLightboxNav: f,
      closeLightbox: g,
      addImagesToLightbox: v,
      onLightboxClickOutside: d,
    };
  },
  sg = 'lightbox',
  lg = re({
    name: 'GridGalleryProviderUser',
    components: { GridGallery: og },
    props: {
      data: { type: Object, required: !0 },
      mobileBlockPadding: { type: String, default: '0px' },
      elementWidth: { type: Number, default: null },
      elementHeight: { type: Number, default: null },
    },
    emits: ['image-load'],
    setup(e) {
      const { siteId: n } = Xe(),
        {
          columnCount: a,
          columnGap: t,
          isMasonryLayout: o,
          mobileColumnCount: i,
          mobileColumnGap: r,
        } = rg(e),
        { addImagesToLightbox: s } = on(),
        l = u(() => {
          const { right: b } = an(e.mobileBlockPadding ?? '');
          return Number.parseInt(b, 10) || 0;
        }),
        m = M(!1),
        g = () => {
          m.value = window.matchMedia(`(max-width: ${cr}px)`).matches;
        };
      Oe(() => {
        g(), window.addEventListener('resize', g);
      }),
        qn(() => {
          window.removeEventListener('resize', g);
        });
      const d = u(() => (m.value ? i.value : a.value)),
        v = u(() => Math.ceil((t.value + e.elementWidth) / d.value) - t.value),
        f = u(() => !o.value && v.value),
        y = u(() =>
          [`(min-width: ${cr}px) ${v.value}px`, `${100 / d.value}vw`].join(', ')
        ),
        S = u(() =>
          e.data.images.map((b) => {
            const L = u(() =>
                ct(b.origin, b.path, n.value, {
                  width: v.value,
                  height: f.value,
                })
              ),
              D = u(() =>
                zc(b.origin, b.path, n.value, {
                  width: v.value,
                  height: f.value,
                  columnCount: d.value,
                  columnGap: t.value,
                  mobilePadding: l.value,
                  isMasonryLayout: o.value,
                })
              );
            return {
              ...b,
              src: L.value,
              srcset: D.value,
              sizes: y.value,
              width: v.value,
              height: f.value,
            };
          })
        ),
        T = u(() => e.data.settings.imageClickAction === sg);
      return {
        gridImages: S,
        isLightboxEnabled: T,
        handleGalleryImageClick: (b) => {
          if (T.value) {
            const L = e.data.images.map((D) => ({
              alt: D.alt,
              src: Vr(D.origin, D.path, n.value),
            }));
            s(L, b);
          }
        },
        columnCount: a,
        columnGap: t,
        isMasonryLayout: o,
        mobileColumnCount: i,
        mobileColumnGap: r,
      };
    },
  });
function ug(e, n, a, t, o, i) {
  const r = Be('GridGallery');
  return (
    c(),
    q(
      r,
      {
        'grid-images': e.gridImages,
        'is-lightbox-enabled': e.isLightboxEnabled,
        'column-count': e.columnCount,
        'column-gap': e.columnGap,
        'mobile-column-count': e.mobileColumnCount,
        'mobile-column-gap': e.mobileColumnGap,
        'is-masonry-layout': e.isMasonryLayout,
        onImageClick: e.handleGalleryImageClick,
        onImageLoad: n[0] || (n[0] = (s) => e.$emit('image-load')),
      },
      null,
      8,
      [
        'grid-images',
        'is-lightbox-enabled',
        'column-count',
        'column-gap',
        'mobile-column-count',
        'mobile-column-gap',
        'is-masonry-layout',
        'onImageClick',
      ]
    )
  );
}
const cg = oe(lg, [['render', ug]]),
  dg = (e, n, a) => Math.min(Math.max(e, n), a),
  ss = 1920,
  ls = ({
    isAspectRatioBiggerThanContainer: e,
    scale: n,
    containerHeight: a,
    containerWidth: t,
    naturalImageHeight: o,
    naturalImageWidth: i,
  }) => {
    if (e) {
      const r = a / o;
      return Math.round(i * r * n);
    }
    return Math.round(t * n);
  },
  us = ({
    isAspectRatioBiggerThanContainer: e,
    scale: n,
    containerHeight: a,
    containerWidth: t,
    naturalImageHeight: o,
    naturalImageWidth: i,
  }) => {
    if (!e) {
      const r = t / i;
      return Math.round(o * r * n);
    }
    return Math.round(a * n);
  },
  Xn = ({
    offsetInPx: e,
    imageSize: n,
    containerSize: a,
    offsetInPercent: t,
  }) => {
    if (!e) return t;
    const o = (n - a) / 100;
    return dg(t + e / o, 0, 100);
  },
  Jn = ({ imageSize: e, containerSize: n, offset: a }) => (n - e) * (a / 100),
  cs = ({
    prefix: e,
    left: n,
    top: a,
    scale: t,
    isAspectRatioLargerThanContainer: o,
  }) => ({
    [`--${e}-left`]: `${n}px`,
    [`--${e}-top`]: `${a}px`,
    [`--${e}-scale`]: t,
    [`--${e}-width`]: o ? 'auto' : '100%',
    [`--${e}-height`]: o ? '100%' : 'auto',
  }),
  ds = ({
    left: e,
    top: n,
    imageWidth: a,
    imageHeight: t,
    containerWidth: o,
    containerHeight: i,
  }) => ({
    left: Math.round(Math.abs(e)),
    top: Math.round(Math.abs(n)),
    right: Math.round(a - o - Math.abs(e)),
    bottom: Math.round(t - i - Math.abs(n)),
    imageWidth: a,
    imageHeight: t,
  }),
  mg = (e, n) => {
    if (e > ss) {
      const a = ss / e;
      return { width: Math.round(e * a), height: Math.round(n * a) };
    }
    return { width: e, height: n };
  },
  ms = (e, { dragDeltaYPosition: n, dragDeltaXPosition: a, href: t } = {}) => {
    const o = u(() =>
        mg(e.data.fullResolutionWidth, e.data.fullResolutionHeight)
      ),
      i = u(() => o.value.width),
      r = u(() => o.value.height),
      s = () => i.value / r.value,
      l = u(() => e.data.desktop?.crop),
      m = u(() => e.renderedPosition || e.data.desktop),
      g = u(() => m.value.width),
      d = u(() => m.value.height),
      v = u(() => g.value / d.value),
      f = u(() => s() > v.value),
      y = u(() =>
        ls({
          isAspectRatioBiggerThanContainer: f.value,
          scale: l.value.scale,
          containerHeight: d.value,
          containerWidth: g.value,
          naturalImageHeight: r.value,
          naturalImageWidth: i.value,
        })
      ),
      S = u(() =>
        us({
          isAspectRatioBiggerThanContainer: f.value,
          scale: l.value.scale,
          containerHeight: d.value,
          containerWidth: g.value,
          naturalImageHeight: r.value,
          naturalImageWidth: i.value,
        })
      ),
      T = u(() =>
        Xn({
          offsetInPx: -n?.value,
          imageSize: S.value,
          containerSize: d.value,
          offsetInPercent: l.value.top,
        })
      ),
      w = u(() =>
        Jn({ imageSize: S.value, containerSize: d.value, offset: T.value })
      ),
      b = u(() =>
        Xn({
          offsetInPx: -a?.value,
          imageSize: y.value,
          containerSize: g.value,
          offsetInPercent: l.value.left,
        })
      ),
      L = u(() =>
        Jn({ imageSize: y.value, containerSize: g.value, offset: b.value })
      ),
      D = u(() =>
        ds({
          left: L.value,
          top: w.value,
          imageWidth: y.value,
          imageHeight: S.value,
          containerWidth: g.value,
          containerHeight: d.value,
        })
      ),
      P = u(() => e.data.mobile.crop || l.value),
      x = u(() => e.renderedPosition || e.data.mobile),
      B = u(() => x.value.width),
      K = u(() => x.value.height),
      W = u(() => B.value / K.value),
      C = u(() => s() > W.value),
      H = u(() =>
        ls({
          isAspectRatioBiggerThanContainer: C.value,
          scale: P.value.scale,
          containerHeight: K.value,
          containerWidth: B.value,
          naturalImageHeight: r.value,
          naturalImageWidth: i.value,
        })
      ),
      F = u(() =>
        us({
          isAspectRatioBiggerThanContainer: C.value,
          scale: P.value.scale,
          containerHeight: K.value,
          containerWidth: B.value,
          naturalImageHeight: r.value,
          naturalImageWidth: i.value,
        })
      ),
      Q = u(() =>
        Xn({
          offsetInPx: -n?.value,
          imageSize: F.value,
          containerSize: K.value,
          offsetInPercent: P.value.top,
        })
      ),
      N = u(() =>
        Jn({ imageSize: F.value, containerSize: K.value, offset: Q.value })
      ),
      I = u(() =>
        Xn({
          offsetInPx: -a?.value,
          imageSize: H.value,
          containerSize: B.value,
          offsetInPercent: P.value.left,
        })
      ),
      U = u(() =>
        Jn({ imageSize: H.value, containerSize: B.value, offset: I.value })
      ),
      V = u(() =>
        ds({
          left: U.value,
          top: N.value,
          imageWidth: H.value,
          imageHeight: F.value,
          containerWidth: B.value,
          containerHeight: K.value,
        })
      ),
      j = u(() => {
        const k = !['svg', 'ico', 'gif'].includes(Ja(e.data.settings.path));
        if (!l.value || !i.value || !r.value || !k) return null;
        const p = cs({
            prefix: 'desktop',
            left: L.value,
            top: w.value,
            scale: l.value.scale,
            isAspectRatioLargerThanContainer: f.value,
          }),
          Y = cs({
            prefix: 'mobile',
            left: U.value,
            top: N.value,
            scale: P.value.scale,
            isAspectRatioLargerThanContainer: C.value,
          });
        return { ...p, ...Y };
      });
    return {
      href: t,
      cropCSSVars: j,
      desktopCropParams: D,
      mobileCropParams: V,
      desktopTop: w,
      desktopLeft: L,
      mobileLeft: U,
      mobileTop: N,
      desktopTopPercentWithOffset: T,
      desktopLeftPercentWithOffset: b,
    };
  },
  gg = {
    __name: 'GridImageProviderUser',
    props: {
      id: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      lcp: { type: Object, default: () => ({}) },
      mobileBlockPadding: { type: String, default: '0px' },
      elementWidth: { type: Number, default: null },
      elementHeight: { type: Number, default: null },
      mobileElementWidth: { type: Number, default: null },
      mobileElementHeight: { type: Number, default: null },
      resetMobilePosition: { type: Boolean, default: !0 },
      currentLocale: { type: String, required: !0 },
      mobileBorderRadius: { type: Number, default: 0 },
      desktopBorderRadius: { type: Number, default: 0 },
      shapeMaskSource: { type: String, default: null },
      isInPreviewMode: { type: Boolean, default: !1 },
      overlayOpacity: { type: Number, default: 0 },
    },
    setup(e, { expose: n }) {
      n(), it((Q) => ({ '7b817743': P.value, '4e5d6a41': x.value }));
      const a = e,
        { addImagesToLightbox: t } = on(),
        { siteId: o, getPagePathFromId: i } = Xe(),
        {
          cropCSSVars: r,
          desktopCropParams: s,
          mobileCropParams: l,
          href: m,
        } = ms(a, {
          href: u(() =>
            a.data.linkType === ur
              ? i({ pageId: a.data.linkedPageId })
              : a.data.href
          ),
        }),
        g = (Q) => {
          const { fullResolutionWidth: N, fullResolutionHeight: I } = a.data,
            {
              left: U,
              top: V,
              right: j,
              bottom: k,
              imageWidth: p,
              imageHeight: Y,
            } = Q,
            G = U / p,
            ee = V / Y,
            J = j / p,
            R = k / Y;
          return { left: N * G, top: I * ee, right: N * J, bottom: I * R };
        },
        d = (Q) => {
          const { top: N, right: I, bottom: U, left: V } = g(Q);
          return `${N};${I};${U};${V}`;
        },
        v = u(() => [a.data.settings.origin, a.data.settings.path, o.value]),
        f = u(() =>
          r.value
            ? ct(...v.value, {
                width: a.elementWidth,
                height: a.elementHeight,
                shouldContain: !1,
                trim: d(s.value),
              })
            : ct(...v.value, {
                width: a.elementWidth,
                height: a.elementHeight,
                shouldContain:
                  a.data.settings.styles['object-fit'] === 'contain',
              })
        ),
        y = u(() => Ja(a.data.settings.path) === 'svg'),
        S = u(() => a.mobileElementWidth && a.mobileElementHeight),
        T = u(() =>
          !a.mobileElementHeight || a.mobileElementHeight < 0
            ? f.value
            : r.value
            ? ct(...v.value, {
                width: a.mobileElementWidth,
                height: a.mobileElementHeight,
                shouldContain: !1,
                trim: d(l.value),
              })
            : ct(...v.value, {
                width: a.mobileElementWidth,
                height: a.mobileElementHeight,
                shouldContain: !1,
              })
        ),
        w = u(() =>
          r.value
            ? Ba(...v.value, {
                width: a.elementWidth,
                height: a.elementHeight,
                shouldContain: !1,
                mobilePadding: 0,
                trim: d(s.value),
              })
            : Ba(...v.value, {
                width: a.elementWidth,
                height: a.elementHeight,
                shouldContain:
                  a.data.settings.styles['object-fit'] === 'contain',
              })
        ),
        b = u(() =>
          !a.mobileElementHeight || a.mobileElementHeight < 0
            ? w.value
            : r.value
            ? Ba(...v.value, {
                width: a.mobileElementWidth,
                height: a.mobileElementHeight,
                shouldContain: !1,
                mobilePadding: 0,
                trim: d(l.value),
              })
            : Ba(...v.value, {
                width: a.mobileElementWidth,
                height: a.mobileElementHeight,
                mobilePadding: 0,
                shouldContain: !1,
              })
        ),
        L = u(() => {
          const { right: Q } = an(a.mobileBlockPadding ?? ''),
            N = Q ? Number.parseInt(Q, 10) : null;
          return Nn(a.elementWidth, N);
        }),
        D = () => {
          a.data.settings.clickAction === Lo &&
            t({
              src: ct(a.data.settings.origin, a.data.settings.path, o.value),
              srcset: fa(a.data.settings.origin, a.data.settings.path, o.value),
              alt: a.data.settings.alt,
            });
        },
        P = u(() => `${a.elementHeight}px`),
        x = u(() => `${a.mobileElementHeight}px`),
        B = u(() => a.data.settings.alt),
        K = u(() => (a.data.settings.clickAction === Ii ? 'a' : 'div')),
        W = u(() => a.data.target),
        C = u(() => a.data.rel),
        H = u(() => a.data.settings.clickAction === Lo),
        F = {
          props: a,
          addImagesToLightbox: t,
          siteId: o,
          getPagePathFromId: i,
          cropCSSVars: r,
          desktopCropParams: s,
          mobileCropParams: l,
          href: m,
          calculateFullResolutionTrim: g,
          constructTrimParamForCloudflare: d,
          imagePathParams: v,
          src: f,
          isSvg: y,
          isMobileLayout: S,
          mobileSrc: T,
          srcset: w,
          mobileSrcset: b,
          sizes: L,
          handleImageClick: D,
          elementHeightCssVar: P,
          mobileElementHeightCssVar: x,
          alt: B,
          tagName: K,
          target: W,
          rel: C,
          isLightboxEnabled: H,
          computed: u,
          GridImage: Pl,
          get useLightbox() {
            return on;
          },
          get IMAGE_CLICK_ACTION_LINK() {
            return Ii;
          },
          get IMAGE_CLICK_ACTION_LIGHTBOX() {
            return Lo;
          },
          get LINK_TYPE_INTERNAL() {
            return ur;
          },
          get getOptimizedSrc() {
            return ct;
          },
          get getGridItemSrcset() {
            return Ba;
          },
          get getGridItemSizes() {
            return Nn;
          },
          get getFullWidthSrcset() {
            return fa;
          },
          get parseCSSSides() {
            return an;
          },
          get useGridImage() {
            return ms;
          },
          get getExtension() {
            return Ja;
          },
          get useSiteGlobal() {
            return Xe;
          },
        };
      return (
        Object.defineProperty(F, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        F
      );
    },
  },
  vg = ['id'];
function pg(e, n, a, t, o, i) {
  return (
    c(),
    h(
      'div',
      {
        id: a.id,
        class: Z([
          'image-wrapper',
          { 'image-wrapper--layout': t.isMobileLayout },
        ]),
      },
      [
        Me(
          t.GridImage,
          {
            class: 'image-wrapper--desktop',
            alt: t.alt,
            href: t.href,
            sizes: t.sizes,
            src: t.src,
            srcset: t.srcset,
            'tag-name': t.tagName,
            target: t.target,
            rel: t.rel,
            'is-eager': a.lcp.type === 'grid-image' && a.lcp.id === a.id,
            'is-lightbox-enabled': t.isLightboxEnabled,
            'element-height': a.elementHeight,
            'element-width': a.elementWidth,
            'shape-mask-source': a.shapeMaskSource,
            'reset-mobile-position': a.resetMobilePosition,
            'mobile-border-radius': a.mobileBorderRadius,
            'desktop-border-radius': a.desktopBorderRadius,
            'is-in-preview-mode': a.isInPreviewMode,
            'overlay-opacity': a.overlayOpacity,
            onImageClick: t.handleImageClick,
          },
          null,
          8,
          [
            'alt',
            'href',
            'sizes',
            'src',
            'srcset',
            'tag-name',
            'target',
            'rel',
            'is-eager',
            'is-lightbox-enabled',
            'element-height',
            'element-width',
            'shape-mask-source',
            'reset-mobile-position',
            'mobile-border-radius',
            'desktop-border-radius',
            'is-in-preview-mode',
            'overlay-opacity',
          ]
        ),
        t.isMobileLayout
          ? (c(),
            q(
              t.GridImage,
              {
                key: 0,
                'is-mobile-image': !0,
                class: 'image-wrapper--mobile',
                alt: t.alt,
                href: t.href,
                sizes: t.sizes,
                src: t.mobileSrc,
                srcset: t.mobileSrcset,
                'tag-name': t.tagName,
                'is-svg': t.isSvg,
                target: t.target,
                rel: t.rel,
                'is-eager': a.lcp.type === 'grid-image' && a.lcp.id === a.id,
                'is-lightbox-enabled': t.isLightboxEnabled,
                'element-height': a.mobileElementHeight,
                'element-width': a.mobileElementWidth,
                'shape-mask-source': a.shapeMaskSource,
                'reset-mobile-position': a.resetMobilePosition,
                'mobile-border-radius': a.mobileBorderRadius,
                'desktop-border-radius': a.desktopBorderRadius,
                'overlay-opacity': a.overlayOpacity,
                'is-in-preview-mode': a.isInPreviewMode,
                onImageClick: t.handleImageClick,
              },
              null,
              8,
              [
                'alt',
                'href',
                'sizes',
                'src',
                'srcset',
                'tag-name',
                'is-svg',
                'target',
                'rel',
                'is-eager',
                'is-lightbox-enabled',
                'element-height',
                'element-width',
                'shape-mask-source',
                'reset-mobile-position',
                'mobile-border-radius',
                'desktop-border-radius',
                'overlay-opacity',
                'is-in-preview-mode',
              ]
            ))
          : O('', !0),
      ],
      10,
      vg
    )
  );
}
const hg = oe(gg, [
    ['render', pg],
    ['__scopeId', 'data-v-b5c3fcb0'],
  ]),
  fg = re({
    props: {
      src: { type: String, default: null },
      alt: { type: String, default: null },
      poster: { type: String, default: null },
    },
    emits: ['media-load'],
  }),
  yg = ['src', 'poster'],
  bg = ['src', 'alt'];
function _g(e, n, a, t, o, i) {
  return (
    c(),
    h('figure', null, [
      e.src.includes('video') || e.src.includes('.mp4')
        ? (c(),
          h(
            'video',
            {
              key: 0,
              src: e.src,
              poster: e.poster,
              class: 'media-item',
              controls: '',
              onProgressOnce: n[0] || (n[0] = (r) => e.$emit('media-load')),
            },
            null,
            40,
            yg
          ))
        : (c(),
          h(
            'img',
            {
              key: 1,
              src: e.src,
              alt: e.alt,
              class: 'media-item',
              onLoad: n[1] || (n[1] = (r) => e.$emit('media-load')),
            },
            null,
            40,
            bg
          )),
    ])
  );
}
const wg = oe(fg, [
    ['render', _g],
    ['__scopeId', 'data-v-c35ee7e4'],
  ]),
  kg = re({
    components: { GridInstagramFeedMediaItemFigure: wg },
    props: {
      src: { type: String, default: null },
      alt: { type: String, default: null },
      href: { type: String, default: null },
      poster: { type: String, default: null },
    },
    data() {
      return {
        DATA_ATTRIBUTE_ANIMATION_ROLE: pa,
        DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE: $r,
        isLoaded: !1,
      };
    },
  }),
  Sg = ['href'],
  Tg = { key: 1 },
  Cg = { key: 2, class: 'placeholder' };
function Pg(e, n, a, t, o, i) {
  const r = Be('GridInstagramFeedMediaItemFigure');
  return (
    c(),
    h(
      'div',
      nt({
        class: ['media-wrapper', { loaded: e.isLoaded }],
        [e.DATA_ATTRIBUTE_ANIMATION_ROLE || '']:
          e.DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE,
      }),
      [
        e.src && e.href
          ? (c(),
            h(
              'a',
              {
                key: 0,
                title: 'Open instagram page of this image',
                href: e.href,
                rel: 'noopener',
                target: '_blank',
              },
              [
                Me(
                  r,
                  {
                    src: e.src,
                    alt: e.alt,
                    poster: e.poster,
                    onMediaLoad: n[0] || (n[0] = (s) => (e.isLoaded = !0)),
                  },
                  null,
                  8,
                  ['src', 'alt', 'poster']
                ),
              ],
              8,
              Sg
            ))
          : e.src && !e.href
          ? (c(),
            h('div', Tg, [
              Me(
                r,
                {
                  src: e.src,
                  alt: e.alt,
                  poster: e.poster,
                  onMediaLoad: n[1] || (n[1] = (s) => (e.isLoaded = !0)),
                },
                null,
                8,
                ['src', 'alt', 'poster']
              ),
            ]))
          : (c(), h('div', Cg)),
      ],
      16
    )
  );
}
const Ig = oe(kg, [
    ['render', Pg],
    ['__scopeId', 'data-v-8ece2404'],
  ]),
  Eg = re({
    components: { GridInstagramFeedMediaItem: Ig },
    props: {
      id: { type: String, required: !0 },
      media: { type: Array, default: () => [] },
    },
  }),
  Dg = ['id'];
function Mg(e, n, a, t, o, i) {
  const r = Be('GridInstagramFeedMediaItem');
  return (
    c(),
    h(
      'div',
      { id: e.id, class: 'instagram-feed' },
      [
        (c(!0),
        h(
          ge,
          null,
          ke(
            e.media,
            (s) => (
              c(),
              q(
                r,
                {
                  key: s.src,
                  src: s.src,
                  href: s.href,
                  alt: s.alt,
                  poster: s.poster,
                },
                null,
                8,
                ['src', 'href', 'alt', 'poster']
              )
            )
          ),
          128
        )),
      ],
      8,
      Dg
    )
  );
}
const Og = oe(Eg, [['render', Mg]]),
  gs = [
    { alt: 'Workstation', id: 'qc2YaEHSYsc', src: `${rt}/workstation.jpg` },
    {
      alt: 'Waterfall between rocks',
      id: 'ifnzcFXUmH0',
      src: `${rt}/waterfall-between-rocks.jpg`,
    },
    {
      alt: 'Trees with snow',
      id: 'J2vryWaTqlB',
      src: `${rt}/trees-with-snow.png`,
    },
    { alt: 'Tree buds', id: 'ZzmFPZuw7S1', src: `${rt}/tree-buds.jpg` },
    {
      alt: 'Tiger drinking water',
      id: 'k37Jfax7a6k',
      src: `${rt}/tiger-drinking-water.jpg`,
    },
    {
      alt: 'Tall well preserved buildings',
      id: 'gTNSQDsXWp7',
      src: `${rt}/tall-well-preserved-buildings.jpg`,
    },
    {
      alt: 'Sunny beautiful wall',
      id: 'QEdmdqjqcMf',
      src: `${rt}/sunny-beautiful-wall.jpg`,
    },
    { alt: 'Stereo gear', id: 'iUXujDl2onh', src: `${rt}/stereo-gear.jpg` },
    { alt: 'Rooftop oasis', id: 'LWHjQE4HOv7', src: `${rt}/rooftop-oasis.jpg` },
    { alt: 'Rocky beach', id: 'o4qz1QOQcpJ', src: `${rt}/rocky-beach.jpg` },
    {
      alt: 'Photographer holding camera',
      id: 'VAHQ4wGABhK',
      src: `${rt}/photographer-holding-camera.jpg`,
    },
    { alt: 'Koi fishes', id: 'zg35JVHQ4wG', src: `${rt}/koi-fishes.jpg` },
    {
      alt: 'Human head artificially created',
      id: 'zg35JVl8GY2',
      src: `${rt}/human-head-artificially-created.jpg`,
    },
    {
      alt: 'Horse eating grass',
      id: 'dBwJoATZJBH',
      src: `${rt}/horse-eating-grass.jpg`,
    },
    {
      alt: 'Fluffy decoration in water',
      id: 'HR21NDsphkV',
      src: `${rt}/fluffy-docoration-in-water.jpg`,
    },
    {
      alt: 'Elk looking at camera',
      id: 'oLq0J4X2h2P',
      src: `${rt}/elk-looking-at-camera.jpg`,
    },
    {
      alt: 'Dog running in snow',
      id: 'dbULY2RIxXc',
      src: `${rt}/dog-running-in-snow.jpg`,
    },
    {
      alt: 'Clean workspace',
      id: 'WRmXHA1JA8H',
      src: `${rt}/clean-workspace.jpg`,
    },
    {
      alt: 'Cinematic food shot',
      id: 'YgbHW4EtzbY',
      src: `${rt}/cinematic-food-shot.jpg`,
    },
    {
      alt: 'Christmas houses',
      id: 'Eyoj1y8hvYz',
      src: `${rt}/christmas-houses.jpg`,
    },
    {
      alt: 'Bird sitting on branch',
      id: 'yQKxjLtI8eg',
      src: `${rt}/bird-sitting-on-branch.jpg`,
    },
    {
      alt: 'Beautiful entry to private property',
      id: '1StnvFtqFjR',
      src: `${rt}/beautiful-entry-to-private-property.jpg`,
    },
    {
      alt: 'African animals',
      id: 'nPjqWNmfFf0',
      src: `${rt}/african-animals.jpg`,
    },
    { alt: 'Workspace', id: '7gsm5H6lHSH', src: `${rt}/workspace.jpg` },
  ],
  Lg = 'https://graph.instagram.com/me/media',
  Ag = ['id', 'permalink', 'caption', 'media_url', 'thumbnail_url'],
  Bg = ({
    elementId: e,
    elementData: n,
    siteId: a,
    getInstagramTokenHandler: t,
    cleanupCallback: o,
  }) => {
    const i = u(() => n.value.settings['item-count']),
      r = M(null),
      s = M([]),
      l = u(() =>
        s.value.length > 0
          ? s.value.filter(({ src: d }) => typeof d < 'u').slice(0, i.value)
          : new Array(i.value).fill({})
      ),
      m = async () => {
        const d = new URL(Lg);
        d.searchParams.set('fields', Ag.join(',')),
          d.searchParams.set('access_token', r.value);
        const v = await fetch(d.toString());
        return v.ok
          ? (await v.json()).data
          : Promise.reject(new Error('Failed to fetch Instagram media'));
      };
    return {
      media: l,
      init: async () => {
        try {
          r.value = await t({ siteId: a, elementId: e.value });
        } catch {
          s.value = gs;
          return;
        }
        try {
          const d = await m();
          s.value = d.map((v) => ({
            id: v.id,
            src: v.media_url,
            alt: v.caption,
            href: v.permalink,
            poster: v.thumbnail_url,
          }));
        } catch (d) {
          throw ((s.value = gs), o && o(r.value), d);
        }
      },
      itemGap: u(() => n.value.settings.styles['item-gap']),
    };
  },
  xg = re({
    components: { GridInstagramFeed: Og },
    props: {
      id: { type: String, required: !0 },
      data: { type: Object, required: !0 },
    },
    emits: ['media-loaded'],
    setup(e, n) {
      const { siteId: a } = Xe(),
        t = u(() => e.id),
        o = u(() => e.data),
        i = async ({ siteId: l, elementId: m }) =>
          (
            await (
              await fetch(
                `https://builder-backend.hostinger.com/u1/instagram/token/${l}/${m}`
              )
            ).json()
          ).accessToken,
        { media: r, init: s } = Bg({
          elementId: t,
          elementData: o,
          siteId: a.value,
          getInstagramTokenHandler: i,
        });
      return (
        Oe(() => {
          s();
        }),
        Re(
          r,
          async (l) => {
            l?.length && (await Et(), n.emit('media-loaded'));
          },
          { immediate: !1 }
        ),
        { media: r }
      );
    },
  });
function Rg(e, n, a, t, o, i) {
  const r = Be('GridInstagramFeed');
  return c(), q(r, { id: e.id, media: e.media }, null, 8, ['id', 'media']);
}
const Hg = oe(xg, [['render', Rg]]),
  Ng = re({
    name: 'GridMap',
    props: {
      isIframeLoaded: { type: Boolean, default: !1 },
      shouldRender: { type: Boolean, default: !0 },
      src: { type: String, required: !0 },
    },
    computed: {
      renderSrc() {
        return this.shouldRender ? this.src : null;
      },
    },
  }),
  $g = ['src'],
  Vg = { class: 'grid-map__pin' };
function Ug(e, n, a, t, o, i) {
  return (
    c(),
    h(
      'div',
      { class: Z(['grid-map', { 'grid-map--loading': !e.isIframeLoaded }]) },
      [
        E(
          'iframe',
          {
            ref: 'iframeRef',
            class: 'grid-map__frame',
            width: '100%',
            height: '100%',
            src: e.renderSrc,
          },
          null,
          8,
          $g
        ),
        ue(E('div', Vg, null, 512), [[Ht, !e.isIframeLoaded]]),
      ],
      2
    )
  );
}
const Yg = oe(Ng, [
    ['render', Ug],
    ['__scopeId', 'data-v-3b334315'],
  ]),
  Fg = (e, n) => {
    try {
      const { isObserved: a } = Tl(n),
        t = M(!1),
        o = va({
          src: u(() => e.data.settings?.src),
          shouldRender: u(() => a.value),
          isIframeLoaded: u(() => t.value),
        }),
        i = Hr(() => {
          const r = n.value?.$refs;
          r &&
            (r.iframeRef.addEventListener('load', () => {
              t.value = !0;
            }),
            i());
        });
      return { composedProps: o };
    } catch (a) {
      console.error(a);
    }
  },
  Wg = re({
    name: 'GridMapProviderUser',
    components: { GridMap: Yg },
    props: { data: { type: Object, required: !0 } },
    setup(e) {
      const n = M(null),
        { composedProps: a } = Fg(e, n);
      return { mapRef: n, composedProps: a };
    },
  });
function qg(e, n, a, t, o, i) {
  const r = Be('GridMap');
  return c(), q(r, Ge({ ref: 'mapRef' }, e.composedProps), null, 16);
}
const Gg = oe(Wg, [['render', qg]]),
  jg = re({
    __name: 'GridSocialIcons',
    props: {
      links: { default: () => [] },
      preventLinks: { type: Boolean, default: !1 },
      direction: { default: 'row' },
      directionMobile: { default: null },
      preventSpacing: { type: Boolean, default: !1 },
      fullHeight: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = u(() => ['social-icons', `social-icons--${a.direction}`]),
        o = u(() => ({
          '--m-icon-direction': a.directionMobile || a.direction,
          '--icon-padding-vertical':
            a.direction === 'column' ? 'var(--space-between-icons)' : '0',
          '--icon-padding-horizontal':
            a.direction === 'row' ? 'var(--space-between-icons)' : '0',
          ...(a.fullHeight && { height: '100%' }),
          ...(a.preventSpacing && { '--space-between-icons': '0px' }),
          ...(a.directionMobile && {
            '--m-icon-padding-vertical':
              a.directionMobile === 'column'
                ? 'var(--space-between-icons)'
                : '0',
            '--m-icon-padding-horizontal':
              a.directionMobile === 'row' ? 'var(--space-between-icons)' : '0',
          }),
        })),
        i = { props: a, computedClass: t, computedStyles: o };
      return (
        Object.defineProperty(i, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  zg = ['href', 'title', 'innerHTML'];
function Kg(e, n, a, t, o, i) {
  return (
    c(),
    h(
      'div',
      { class: Z(t.computedClass), style: Ae(t.computedStyles) },
      [
        (c(!0),
        h(
          ge,
          null,
          ke(
            a.links,
            ({ link: r, svg: s, title: l }) => (
              c(),
              h(
                'a',
                Ge(
                  {
                    key: r,
                    href: r,
                    target: '_blank',
                    rel: 'noopener',
                    title: l,
                    class: 'social-icons__link',
                  },
                  nl({
                    dragstart: a.preventLinks
                      ? (m) => m.preventDefault()
                      : () => null,
                    click: a.preventLinks
                      ? (m) => m.preventDefault()
                      : () => null,
                  }),
                  { innerHTML: s }
                ),
                null,
                16,
                zg
              )
            )
          ),
          128
        )),
      ],
      6
    )
  );
}
const Il = oe(jg, [
    ['render', Kg],
    ['__scopeId', 'data-v-1ee40361'],
  ]),
  Qg = (e) => {
    const n = u(() => e.data.settings.styles);
    return va({
      links: u(() =>
        e.data.links.map((t) => ({ ...t, title: `Go to ${Uc(t.icon)} page` }))
      ),
      direction: u(() => n.value['icon-direction']),
      directionMobile: u(() => n.value['m-icon-direction']),
      fullHeight: u(() => !n.value.justify),
      preventSpacing: u(() =>
        n.value['icon-spacing'] !== 'center' ||
        n.value['icon-direction'] === 'column'
          ? !n.value.justify
          : !n.value.align
      ),
    });
  },
  Zg = re({
    components: { GridSocialIcons: Il },
    props: { data: { type: Object, required: !0 } },
    setup(e, n) {
      return { composedProps: Qg(e) };
    },
  });
function Xg(e, n, a, t, o, i) {
  const r = Be('GridSocialIcons');
  return c(), q(r, nt(wt(e.composedProps)), null, 16);
}
const Jg = oe(Zg, [['render', Xg]]),
  ev = M(null),
  tv = (e) => {
    const n = u(() => e.data.settings?.priceId || ''),
      a = u(() => e.data.settings?.paymentType || 'payment');
    return { stripeInstance: ev, priceId: n, paymentType: a };
  },
  av = 'https://js.stripe.com/v3',
  nv = re({
    name: 'GridStripeButtonProviderUser',
    components: { GridButton: Ya },
    props: {
      data: { type: Object, required: !0 },
      successPageSlug: { type: String, required: !0 },
      cancellationPageSlug: { type: String, required: !0 },
      stripePublicApiKey: { type: String, default: '' },
    },
    setup(e) {
      const { getButtonHref: n } = Xe(),
        { content: a, type: t } = Vn(e, {
          href: u(() =>
            n({
              isFormButton: e.data.settings.isFormButton,
              linkedPageId: e.data.linkedPageId,
              linkType: e.data.linkType,
              href: e.data.href,
            })
          ),
        }),
        { stripeInstance: o, priceId: i, paymentType: r } = tv(e),
        s = M(!1),
        l = () =>
          new Promise((g, d) => {
            if (!!(o.value && window.Stripe)) {
              g();
              return;
            }
            const f = document.createElement('script');
            f.addEventListener('load', () => {
              window.Stripe &&
                ((o.value = window.Stripe(e.stripePublicApiKey)), g());
            }),
              f.addEventListener('error', () => {
                d();
              }),
              (f.src = av),
              document.head.appendChild(f);
          });
      return {
        content: a,
        type: t,
        isLoadingStripeScript: s,
        handleClick: async () => {
          i.value &&
            ((s.value = !0),
            await l(),
            (s.value = !1),
            o.value
              .redirectToCheckout({
                lineItems: [{ price: i.value, quantity: 1 }],
                mode: r.value,
                successUrl: `${window.location.origin}/${e.successPageSlug}`,
                cancelUrl: `${window.location.origin}/${e.cancellationPageSlug}`,
              })
              .then((g) => {
                g.error && console.error(g.error.message);
              }));
        },
      };
    },
  });
function ov(e, n, a, t, o, i) {
  const r = Be('GridButton'),
    s = je('qa');
  return ue(
    (c(),
    q(
      r,
      {
        'tag-name': 'button',
        content: e.content,
        type: e.type,
        'is-disabled': e.isLoadingStripeScript,
        onClick: e.handleClick,
      },
      null,
      8,
      ['content', 'type', 'is-disabled', 'onClick']
    )),
    [[s, 'button-stripe-checkout']]
  );
}
const rv = oe(nv, [['render', ov]]),
  iv = {
    __name: 'GridTextBox',
    props: {
      textAlign: { type: String, default: null },
      textAlignMobile: { type: String, default: null },
      backgroundColor: { type: String, default: null },
      content: { type: String, default: null },
    },
    setup(e, { expose: n }) {
      n(),
        it((s) => ({
          '6ce2bb40': o.value,
          '00f7905c': t.value,
          a82e6ffc: i.value,
        }));
      const a = e,
        t = u(() => a.backgroundColor),
        o = u(() => (a.textAlign === 'justify' ? 'normal' : 'break-spaces')),
        i = u(() =>
          a.textAlignMobile && a.textAlignMobile === 'justify'
            ? 'normal'
            : o.value
        ),
        r = {
          props: a,
          backgroundColor: t,
          whiteSpace: o,
          whiteSpaceMobile: i,
          computed: u,
        };
      return (
        Object.defineProperty(r, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        r
      );
    },
  },
  sv = ['innerHTML'],
  lv = { key: 1, class: 'text-box' };
function uv(e, n, a, t, o, i) {
  return a.content
    ? (c(),
      h(
        'div',
        { key: 0, class: 'text-box', innerHTML: a.content },
        null,
        8,
        sv
      ))
    : (c(), h('div', lv, [te(e.$slots, 'default')]));
}
const El = oe(iv, [['render', uv]]),
  cv = {
    __name: 'GridTextBoxProviderUser',
    props: { data: { type: Object, required: !0 } },
    setup(e, { expose: n }) {
      n();
      const a = { GridTextBox: El };
      return (
        Object.defineProperty(a, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        a
      );
    },
  };
function dv(e, n, a, t, o, i) {
  return (
    c(),
    q(
      t.GridTextBox,
      {
        'text-align': a.data.settings.styles.text,
        'text-align-mobile': a.data.settings.styles['m-text'],
        'background-color': a.data.backgroundColor,
        content: a.data.content,
      },
      null,
      8,
      ['text-align', 'text-align-mobile', 'background-color', 'content']
    )
  );
}
const mv = oe(cv, [['render', dv]]),
  Mt = { YOUTUBE: 'youtube', VIMEO: 'vimeo' },
  jn = '0',
  uo = '1',
  gv = jn,
  vv = jn,
  pv = uo,
  hv = jn,
  fv = jn,
  yv = uo;
Mt.YOUTUBE;
const bv = /t=\d+/g,
  Wt = {
    AUTOPLAY: 'autoplay',
    LOOP: 'loop',
    CONTROLS: 'controls',
    AUTOPAUSE: 'autopause',
    PLAYLIST: 'playlist',
    PLAYSINLINE: 'playsinline',
    ALBUM: 'h',
    MUTE: { [Mt.YOUTUBE]: 'mute', [Mt.VIMEO]: 'muted' },
    TIME: 't',
    START: 'start',
  },
  _v = {
    [Mt.YOUTUBE]: 'https://www.youtube.com/embed/',
    [Mt.VIMEO]: 'https://player.vimeo.com/video/',
  },
  wv = {
    [Mt.YOUTUBE]:
      /^.*(?:youtu\.be\/|vi?\/|u\/\w\/|embed\/|watch\/|shorts\/|\?vi?=|&vi?=)([^#&?]{11}).*/,
    [Mt.VIMEO]:
      /https:\/\/(?:vimeo.com|player.vimeo.com)\/(?:video\/)?(\d*)(.*)/,
  },
  kv = 'https://vimeo.com/api/oembed.json?url=https://vimeo.com',
  Sv = 'builder.notifications.errorVimeoVideoPrivate',
  Tv = {
    __name: 'GridVideo',
    props: {
      renderIframe: { type: Boolean, default: !1 },
      renderPicture: { type: Boolean, default: !0 },
      src: { type: String, required: !0 },
      provider: { type: String, default: Mt.YOUTUBE },
      jpg: { type: String, default: '' },
      webp: { type: String, default: '' },
    },
    setup(e, { expose: n }) {
      n(), it((i) => ({ '60d8e812': t.value }));
      const a = M(!1),
        t = u(() => (a.value ? 'transparent' : 'var(--color-dark)')),
        o = {
          isIframeLoaded: a,
          backgroundColor: t,
          get PROVIDERS() {
            return Mt;
          },
          computed: u,
          ref: M,
        };
      return (
        Object.defineProperty(o, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        o
      );
    },
  },
  Cv = { class: 'video' },
  Pv = ['src'],
  Iv = ['srcset'],
  Ev = ['src'];
function Dv(e, n, a, t, o, i) {
  const r = je('qa');
  return (
    c(),
    h('div', Cv, [
      a.renderIframe
        ? (c(),
          h(
            'iframe',
            {
              key: 0,
              src: a.src,
              class: 'video__frame',
              allow:
                'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
              allowfullscreen: '',
              width: '100%',
              height: '100%',
              onLoad: n[0] || (n[0] = (s) => (t.isIframeLoaded = !0)),
            },
            null,
            40,
            Pv
          ))
        : a.renderPicture && (a.jpg || a.webp)
        ? (c(),
          h(
            ge,
            { key: 1 },
            [
              E('picture', null, [
                E(
                  'source',
                  { type: 'image/webp', srcset: a.webp },
                  null,
                  8,
                  Iv
                ),
                ue(
                  E(
                    'img',
                    {
                      referrerpolicy: 'origin',
                      class: 'video__placeholder',
                      height: '100%',
                      width: '100%',
                      src: a.jpg,
                    },
                    null,
                    8,
                    Ev
                  ),
                  [[r, 'builder-gridelement-gridvideo']]
                ),
              ]),
              E(
                'button',
                {
                  type: 'button',
                  class: Z(`video__play video__play--${a.provider}`),
                },
                null,
                2
              ),
            ],
            64
          ))
        : O('', !0),
    ])
  );
}
const Mv = oe(Tv, [
    ['render', Dv],
    ['__scopeId', 'data-v-ad3c9850'],
  ]),
  Ov = async (e) => {
    const a = await (await fetch(`${kv}/${e}`)).json();
    if (!a.thumbnail_url) throw new Error(Sv);
    const t = a.thumbnail_url.replace('_295x166', '_720');
    return {
      jpg: t.replace('.webp', '.jpg'),
      webp: t.replace('.jpg', '.webp'),
    };
  },
  Lv = async (e, n) => {
    switch (e) {
      case Mt.YOUTUBE:
        return {
          jpg: `https://i.ytimg.com/vi/${n}/hqdefault.jpg`,
          webp: `https://i.ytimg.com/vi_webp/${n}/hqdefault.webp`,
        };
      case Mt.VIMEO:
        return Ov(n);
      default:
        return { jpg: null, webp: null };
    }
  },
  Av = (e, n, a, t) => {
    const o = n === Mt.VIMEO ? e.split('/')[1] : null,
      i = n === Mt.VIMEO ? e.split('/')[0] : e,
      r = t.match(bv),
      s = n === Mt.YOUTUBE && r ? { [Wt.START]: r[0].slice(2) ?? 0 } : {},
      l = Wt.MUTE[n],
      m = new URLSearchParams({
        [Wt.ALBUM]: o,
        [Wt.PLAYLIST]: i,
        [Wt.AUTOPLAY]: gv,
        [Wt.CONTROLS]: pv,
        [Wt.LOOP]: vv,
        [Wt.AUTOPAUSE]: hv,
        [Wt.PLAYSINLINE]: yv,
        [l]: fv,
        ...s,
      }).toString();
    return `${_v[n]}${i}?${m}`;
  },
  Bv = async (e, n) => {
    const a = Object.entries(wv).find(([, g]) => e?.match(g)),
      t = a && a.length === 2;
    if (!t) return { url: e, isUrlValid: !1 };
    const [o, i] = a,
      r = e.match(i),
      s = [r[1], r[2]].join(''),
      { jpg: l, webp: m } = await Lv(o, s);
    return {
      src: Av(s, o, n, e),
      isUrlValid: t,
      jpg: l,
      webp: m,
      provider: o,
      id: s,
    };
  },
  xv = (e) => {
    const n = va({
        src: null,
        provider: null,
        width: null,
        height: null,
        webp: null,
        jpg: null,
      }),
      a = va({
        src: u(() => n.src ?? e.data.settings.src),
        provider: u(() => n.provider ?? e.data.settings.provider),
        width: u(() => n.width ?? e.data.settings.width),
        height: u(() => n.height ?? e.data.settings.height),
        webp: u(() => n.webp ?? e.data.settings.webp),
        jpg: u(() => n.jpg ?? e.data.settings.jpg),
      });
    return (
      Hr(() => {
        (e.data.settings.src !== a.src || !e.data.settings.jpg) &&
          Bv(e.data.settings.src).then((t) => {
            Object.entries(t).forEach(([o, i]) => {
              n[o] = i;
            });
          });
      }),
      { composedProps: a }
    );
  },
  Rv = re({
    name: 'GridVideoProviderUser',
    components: { GridVideo: Mv },
    props: { data: { type: Object, required: !0 } },
    setup(e) {
      const { composedProps: n } = xv(e),
        a = M(null),
        t = u(
          () => e.data.settings.src?.includes(`${[Wt.AUTOPLAY]}=${uo}`) ?? !1
        ),
        o = u(() => {
          const l = Wt.MUTE[n.provider];
          return t.value
            ? n.src.replace(`${[l]}=${jn}`, `${[l]}=${uo}`)
            : n.src;
        }),
        i = M(!1),
        r = M(!1),
        s = () => {
          const l = new IntersectionObserver(
            ([{ isIntersecting: m }]) => {
              m && (t.value ? (i.value = !0) : (r.value = !0), l.disconnect());
            },
            { threshold: 0 }
          );
          l.observe(a.value.$el), (i.value = !0);
        };
      return (
        Oe(() => {
          s();
        }),
        {
          videoRef: a,
          composedProps: n,
          composedSrc: o,
          renderIframe: i,
          renderPicture: r,
        }
      );
    },
  });
function Hv(e, n, a, t, o, i) {
  const r = Be('GridVideo');
  return (
    c(),
    q(
      r,
      Ge({ ref: 'videoRef' }, e.composedProps, {
        src: e.composedSrc,
        'render-iframe': e.renderIframe,
        'render-picture': e.renderPicture,
        onClickOnce: n[0] || (n[0] = (s) => (e.renderIframe = !0)),
      }),
      null,
      16,
      ['src', 'render-iframe', 'render-picture']
    )
  );
}
const Nv = oe(Rv, [['render', Hv]]),
  $v = re({
    name: 'GridShape',
    props: { svg: { type: String, required: !0 } },
  }),
  Vv = ['innerHTML'];
function Uv(e, n, a, t, o, i) {
  return c(), h('div', { class: 'grid-shape', innerHTML: e.svg }, null, 8, Vv);
}
const Yv = oe($v, [['render', Uv]]),
  Fv = re({
    name: 'GridShapeProviderUser',
    components: { GridShape: Yv },
    props: {
      data: { type: Object, required: !0 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    computed: {
      cssVars() {
        const e = (this.data.mobile.height * 100) / Qt,
          n = (this.data.desktop.height * 100) / sa;
        return {
          '--shape-height': `${this.data.desktop.height}px`,
          '--m-shape-height': this.isInPreviewMode
            ? `${this.data.mobile.height}px`
            : `${e}vw`,
          '--t-shape-height': `${this.data.mobile.height}px`,
          '--small-desktop-shape-height': `${n}vw`,
          '--shape-color': `${this.data.color}`,
        };
      },
    },
  });
function Wv(e, n, a, t, o, i) {
  const r = Be('GridShape');
  return (
    c(),
    q(r, { svg: e.data.svg, style: Ae(e.cssVars) }, null, 8, ['svg', 'style'])
  );
}
const qv = oe(Fv, [['render', Wv]]),
  Gv = re({
    __name: 'ProductImage',
    props: {
      alt: {},
      src: {},
      isEager: { type: Boolean, default: !1 },
      objectFit: { default: 'cover' },
      width: { default: 0 },
      height: { default: 0 },
      enableSrcset: { type: Boolean, default: !1 },
      imageOrigin: { default: 'other' },
      isLossless: { type: Boolean, default: !1 },
      siteId: { default: '' },
      secondaryImageSrc: {},
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = M(a.src),
        o = M(),
        i = M(!1),
        r = u(() => (a.enableSrcset ? Nn(a.width) : void 0)),
        s = (d) =>
          ct(a.imageOrigin, d, a.siteId, {
            width: a.width,
            height: a.height,
            shouldContain: a.objectFit === 'contain',
            isLossless: a.isLossless,
          }),
        l = (d) =>
          a.enableSrcset
            ? Ba(a.imageOrigin, d, a.siteId, {
                width: a.width,
                height: a.height,
                shouldContain: a.objectFit === 'contain',
                isLossless: a.isLossless,
              })
            : void 0,
        m = () => {
          if (a.secondaryImageSrc) {
            const d = new Image(),
              v = l(a.secondaryImageSrc);
            (d.src = s(a.secondaryImageSrc)), v && (d.srcset = v);
          }
        };
      Re(
        () => a.objectFit,
        (d, v) => {
          d !== v &&
            v === 'cover' &&
            t.value.includes('fit=crop') &&
            ((t.value = s(a.src)), (o.value = l(a.src)));
        }
      ),
        Re(
          () => a.src,
          () => {
            (t.value = s(a.src)), (o.value = l(a.src));
          }
        ),
        Re(
          () => a.secondaryImageSrc,
          () => {
            m();
          }
        ),
        Oe(() => {
          (t.value = s(a.src)), (o.value = l(a.src)), m();
        });
      const g = {
        props: a,
        imageUrl: t,
        srcset: o,
        isLoaded: i,
        sizes: r,
        getImageUrl: s,
        getSrcSet: l,
        preloadSecondaryImage: m,
      };
      return (
        Object.defineProperty(g, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        g
      );
    },
  }),
  jv = ['loading', 'src', 'alt', 'srcset', 'sizes'];
function zv(e, n, a, t, o, i) {
  return (
    c(),
    q(
      Ot,
      { name: 'fade', mode: 'out-in' },
      {
        default: he(() => [
          ue(
            E(
              'img',
              Ge(e.$attrs, {
                loading: a.isEager ? 'eager' : 'lazy',
                src: t.imageUrl,
                alt: a.alt,
                srcset: t.srcset,
                sizes: t.sizes,
                class: [
                  'ecommerce-product-image',
                  { 'ecommerce-product-image--loading': !t.isLoaded },
                ],
                onLoad: n[0] || (n[0] = (r) => (t.isLoaded = !0)),
                onError: n[1] || (n[1] = (r) => (t.isLoaded = !0)),
              }),
              null,
              16,
              jv
            ),
            [[Ht, !0]]
          ),
        ]),
        _: 1,
      }
    )
  );
}
const bo = oe(Gv, [['render', zv]]);
function _o(e) {
  return rl() ? (il(e), !0) : !1;
}
function en(e) {
  return typeof e == 'function' ? e() : A(e);
}
const Qr = typeof window < 'u' && typeof document < 'u';
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope;
const Kv = (e) => e != null,
  Qv = Object.prototype.toString,
  Zv = (e) => Qv.call(e) === '[object Object]',
  Dn = () => {},
  _r = Xv();
function Xv() {
  var e, n;
  return (
    Qr &&
    ((e = window?.navigator) == null ? void 0 : e.userAgent) &&
    (/iP(ad|hone|od)/.test(window.navigator.userAgent) ||
      (((n = window?.navigator) == null ? void 0 : n.maxTouchPoints) > 2 &&
        /iPad|Macintosh/.test(window?.navigator.userAgent)))
  );
}
function Jv(e) {
  return ol();
}
function ep(...e) {
  if (e.length !== 1) return xn(...e);
  const n = e[0];
  return typeof n == 'function' ? Vu(Uu(() => ({ get: n, set: Dn }))) : M(n);
}
function tp(e, n = !0, a) {
  Jv() ? Oe(e, a) : n ? e() : Et(e);
}
function oa(e) {
  var n;
  const a = en(e);
  return (n = a?.$el) != null ? n : a;
}
const wo = Qr ? window : void 0,
  ap = Qr ? window.document : void 0;
function xa(...e) {
  let n, a, t, o;
  if (
    (typeof e[0] == 'string' || Array.isArray(e[0])
      ? (([a, t, o] = e), (n = wo))
      : ([n, a, t, o] = e),
    !n)
  )
    return Dn;
  Array.isArray(a) || (a = [a]), Array.isArray(t) || (t = [t]);
  const i = [],
    r = () => {
      i.forEach((g) => g()), (i.length = 0);
    },
    s = (g, d, v, f) => (
      g.addEventListener(d, v, f), () => g.removeEventListener(d, v, f)
    ),
    l = Re(
      () => [oa(n), en(o)],
      ([g, d]) => {
        if ((r(), !g)) return;
        const v = Zv(d) ? { ...d } : d;
        i.push(...a.flatMap((f) => t.map((y) => s(g, f, y, v))));
      },
      { immediate: !0, flush: 'post' }
    ),
    m = () => {
      l(), r();
    };
  return _o(m), m;
}
let vs = !1;
function ko(e, n, a = {}) {
  const {
    window: t = wo,
    ignore: o = [],
    capture: i = !0,
    detectIframe: r = !1,
  } = a;
  if (!t) return Dn;
  _r &&
    !vs &&
    ((vs = !0),
    Array.from(t.document.body.children).forEach((v) =>
      v.addEventListener('click', Dn)
    ),
    t.document.documentElement.addEventListener('click', Dn));
  let s = !0;
  const l = (v) =>
      o.some((f) => {
        if (typeof f == 'string')
          return Array.from(t.document.querySelectorAll(f)).some(
            (y) => y === v.target || v.composedPath().includes(y)
          );
        {
          const y = oa(f);
          return y && (v.target === y || v.composedPath().includes(y));
        }
      }),
    g = [
      xa(
        t,
        'click',
        (v) => {
          const f = oa(e);
          if (!(!f || f === v.target || v.composedPath().includes(f))) {
            if ((v.detail === 0 && (s = !l(v)), !s)) {
              s = !0;
              return;
            }
            n(v);
          }
        },
        { passive: !0, capture: i }
      ),
      xa(
        t,
        'pointerdown',
        (v) => {
          const f = oa(e);
          s = !l(v) && !!(f && !v.composedPath().includes(f));
        },
        { passive: !0 }
      ),
      r &&
        xa(t, 'blur', (v) => {
          setTimeout(() => {
            var f;
            const y = oa(e);
            ((f = t.document.activeElement) == null ? void 0 : f.tagName) ===
              'IFRAME' &&
              !y?.contains(t.document.activeElement) &&
              n(v);
          }, 0);
        }),
    ].filter(Boolean);
  return () => g.forEach((v) => v());
}
function np() {
  const e = M(!1),
    n = ol();
  return (
    n &&
      Oe(() => {
        e.value = !0;
      }, n),
    e
  );
}
function Dl(e) {
  const n = np();
  return u(() => (n.value, !!e()));
}
function op(e, n, a = {}) {
  const { window: t = wo, ...o } = a;
  let i;
  const r = Dl(() => t && 'MutationObserver' in t),
    s = () => {
      i && (i.disconnect(), (i = void 0));
    },
    l = u(() => {
      const v = en(e),
        f = (Array.isArray(v) ? v : [v]).map(oa).filter(Kv);
      return new Set(f);
    }),
    m = Re(
      () => l.value,
      (v) => {
        s(),
          r.value &&
            t &&
            v.size &&
            ((i = new MutationObserver(n)), v.forEach((f) => i.observe(f, o)));
      },
      { immediate: !0, flush: 'post' }
    ),
    g = () => i?.takeRecords(),
    d = () => {
      s(), m();
    };
  return _o(d), { isSupported: r, stop: d, takeRecords: g };
}
function rp(e = {}) {
  const { document: n = ap } = e;
  if (!n) return M('visible');
  const a = M(n.visibilityState);
  return (
    xa(n, 'visibilitychange', () => {
      a.value = n.visibilityState;
    }),
    a
  );
}
function ip(e, n, a = {}) {
  const { window: t = wo, ...o } = a;
  let i;
  const r = Dl(() => t && 'ResizeObserver' in t),
    s = () => {
      i && (i.disconnect(), (i = void 0));
    },
    l = u(() => (Array.isArray(e) ? e.map((d) => oa(d)) : [oa(e)])),
    m = Re(
      l,
      (d) => {
        if ((s(), r.value && t)) {
          i = new ResizeObserver(n);
          for (const v of d) v && i.observe(v, o);
        }
      },
      { immediate: !0, flush: 'post' }
    ),
    g = () => {
      s(), m();
    };
  return _o(g), { isSupported: r, stop: g };
}
function sp(e, n = {}) {
  const {
      reset: a = !0,
      windowResize: t = !0,
      windowScroll: o = !0,
      immediate: i = !0,
    } = n,
    r = M(0),
    s = M(0),
    l = M(0),
    m = M(0),
    g = M(0),
    d = M(0),
    v = M(0),
    f = M(0);
  function y() {
    const S = oa(e);
    if (!S) {
      a &&
        ((r.value = 0),
        (s.value = 0),
        (l.value = 0),
        (m.value = 0),
        (g.value = 0),
        (d.value = 0),
        (v.value = 0),
        (f.value = 0));
      return;
    }
    const T = S.getBoundingClientRect();
    (r.value = T.height),
      (s.value = T.bottom),
      (l.value = T.left),
      (m.value = T.right),
      (g.value = T.top),
      (d.value = T.width),
      (v.value = T.x),
      (f.value = T.y);
  }
  return (
    ip(e, y),
    Re(
      () => oa(e),
      (S) => !S && y()
    ),
    op(e, y, { attributeFilter: ['style', 'class'] }),
    o && xa('scroll', y, { capture: !0, passive: !0 }),
    t && xa('resize', y, { passive: !0 }),
    tp(() => {
      i && y();
    }),
    {
      height: r,
      bottom: s,
      left: l,
      right: m,
      top: g,
      width: d,
      x: v,
      y: f,
      update: y,
    }
  );
}
function Vo(e) {
  return typeof Window < 'u' && e instanceof Window
    ? e.document.documentElement
    : typeof Document < 'u' && e instanceof Document
    ? e.documentElement
    : e;
}
function Ml(e) {
  const n = window.getComputedStyle(e);
  if (
    n.overflowX === 'scroll' ||
    n.overflowY === 'scroll' ||
    (n.overflowX === 'auto' && e.clientWidth < e.scrollWidth) ||
    (n.overflowY === 'auto' && e.clientHeight < e.scrollHeight)
  )
    return !0;
  {
    const a = e.parentNode;
    return !a || a.tagName === 'BODY' ? !1 : Ml(a);
  }
}
function lp(e) {
  const n = e || window.event,
    a = n.target;
  return Ml(a)
    ? !1
    : n.touches.length > 1
    ? !0
    : (n.preventDefault && n.preventDefault(), !1);
}
const eo = new WeakMap();
function up(e, n = !1) {
  const a = M(n);
  let t = null;
  Re(
    ep(e),
    (r) => {
      const s = Vo(en(r));
      if (s) {
        const l = s;
        eo.get(l) || eo.set(l, l.style.overflow),
          a.value && (l.style.overflow = 'hidden');
      }
    },
    { immediate: !0 }
  );
  const o = () => {
      const r = Vo(en(e));
      !r ||
        a.value ||
        (_r &&
          (t = xa(
            r,
            'touchmove',
            (s) => {
              lp(s);
            },
            { passive: !1 }
          )),
        (r.style.overflow = 'hidden'),
        (a.value = !0));
    },
    i = () => {
      var r;
      const s = Vo(en(e));
      !s ||
        !a.value ||
        (_r && t?.(),
        (s.style.overflow = (r = eo.get(s)) != null ? r : ''),
        eo.delete(s),
        (a.value = !1));
    };
  return (
    _o(i),
    u({
      get() {
        return a.value;
      },
      set(r) {
        r ? o() : i();
      },
    })
  );
}
const ps = 45,
  cp = re({
    __name: 'SiteElementSearchBar',
    props: {
      placeholderText: {},
      noResultsText: {},
      fillColor: {},
      fillColorHover: {},
      textAndIconColor: {},
      textAndIconColorHover: {},
      resultItemHoverColor: {},
      fontFamily: {},
      borderColor: {},
      borderColorHover: {},
      borderRadius: {},
      translations: {},
      siteId: {},
      searchTerm: { default: '' },
      results: { default: null },
      isLoading: { type: Boolean, default: !1 },
    },
    emits: ['update:search-term', 'is-dropdown-open'],
    setup(e, { expose: n, emit: a }) {
      n(),
        it((b) => ({
          '45245e45': b.fontFamily,
          c48fbf5c: b.textAndIconColor,
          '60741c0a': b.textAndIconColorHover,
          '6b74e73d': v.value,
          '6169fb25': b.borderColor,
          '0b56f8a4': b.fillColor,
          a82de5d2: b.borderColorHover,
          '121b722e': b.fillColorHover,
          '360a1fa9': b.resultItemHoverColor,
          '44bc226c': t,
        }));
      const t = `${ps}px`,
        o = a,
        i = e,
        r = M(null),
        s = M(!1),
        l = M([]),
        m = M(-1),
        g = u(() => i.isLoading),
        d = u(() => i.results),
        v = u(() => `${i.borderRadius}px`),
        f = () => {
          i.results && m.value < i.results.length - 1 && (m.value += 1);
        },
        y = () => {
          m.value > 0 && (m.value -= 1);
        },
        S = () => {
          const b = l.value[m.value];
          if (!b) return;
          const L = new MouseEvent('click', {
            bubbles: !0,
            cancelable: !0,
            view: window,
          });
          b.dispatchEvent(L);
        },
        T = () => {
          (s.value = !1), o('update:search-term', ''), (m.value = -1);
        };
      Re([d, g], () => {
        (s.value = !!d.value || g.value), o('is-dropdown-open', s.value);
      }),
        Oe(() => {
          ko(r, () => {
            T();
          });
        });
      const w = {
        IMAGE_DIMENSIONS_PX: ps,
        IMAGE_DIMENSIONS_PX_STRING: t,
        emit: o,
        props: i,
        searchBarRef: r,
        isSearchResultDropdownVisible: s,
        itemLinksRefs: l,
        highlightedItemIndex: m,
        isLoading: g,
        results: d,
        borderRadiusInPx: v,
        highlightNextItem: f,
        highlightPreviousItem: y,
        redirectToHighlightedItem: S,
        dropdownCloseHandler: T,
        ZyroLoader: Kr,
        ProductImage: bo,
      };
      return (
        Object.defineProperty(w, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        w
      );
    },
  }),
  dp = {
    ref: 'searchBarRef',
    class: 'site-element-search-bar',
    'aria-owns': 'search-results',
    tabindex: '0',
    'aria-haspopup': 'listbox',
  },
  mp = { class: 'site-element-search-bar__input-wrapper' },
  gp = ['placeholder', 'value', 'onKeydown'],
  vp = {
    key: 0,
    id: 'search-results',
    role: 'listbox',
    class: 'site-element-search-bar__dropdown',
  },
  pp = { key: 1, class: 'site-element-search-bar__dropdown-no-results' },
  hp = ['area-selected'],
  fp = ['href', 'onMouseover', 'onFocus', 'onKeydown'],
  yp = { class: 'search-result-item__content' },
  bp = { class: 'search-result-item__title' },
  _p = { class: 'search-result-item__price' },
  wp = { key: 0 },
  kp = { key: 0 },
  Sp = { key: 0, class: 'search-result-item__sale-price' },
  Tp = { key: 1 };
function Cp(e, n, a, t, o, i) {
  return (
    c(),
    h(
      'div',
      dp,
      [
        E('div', mp, [
          E(
            'input',
            {
              class: 'site-element-search-bar__input',
              placeholder: t.props.placeholderText,
              value: t.props.searchTerm,
              onInput:
                n[0] ||
                (n[0] = (r) => t.emit('update:search-term', r.target.value)),
              onKeydown: [
                Le(De(t.highlightNextItem, ['prevent']), ['down']),
                Le(De(t.highlightPreviousItem, ['prevent']), ['up']),
                Le(t.redirectToHighlightedItem, ['enter']),
              ],
            },
            null,
            40,
            gp
          ),
          t.isSearchResultDropdownVisible
            ? (c(),
              h('div', {
                key: 0,
                class: 'site-element-search-bar__dropdown-close',
                onClick: t.dropdownCloseHandler,
              }))
            : O('', !0),
        ]),
        t.isSearchResultDropdownVisible
          ? (c(),
            h('ul', vp, [
              t.props.isLoading
                ? (c(),
                  q(
                    t.ZyroLoader,
                    {
                      key: 0,
                      size: '30px',
                      color: t.props.textAndIconColorHover,
                      class: 'site-element-search-bar__loader',
                    },
                    null,
                    8,
                    ['color']
                  ))
                : !t.props.results || t.props.results.length === 0
                ? (c(), h('p', pp, X(a.noResultsText), 1))
                : (c(!0),
                  h(
                    ge,
                    { key: 2 },
                    ke(
                      t.props.results,
                      (r, s) => (
                        c(),
                        h(
                          'li',
                          {
                            key: r.id,
                            role: 'option',
                            'area-selected': s === t.highlightedItemIndex,
                          },
                          [
                            E(
                              'a',
                              {
                                ref_for: !0,
                                ref: 'itemLinksRefs',
                                href: r.href,
                                class: Z([
                                  'search-result-item',
                                  {
                                    'search-result-item--highlighted':
                                      s === t.highlightedItemIndex,
                                  },
                                ]),
                                onMouseover: (l) =>
                                  (t.highlightedItemIndex = s),
                                onFocus: (l) => (t.highlightedItemIndex = s),
                                onKeydown: Le(
                                  De(t.redirectToHighlightedItem, ['prevent']),
                                  ['enter']
                                ),
                              },
                              [
                                r.thumbnail
                                  ? (c(),
                                    q(
                                      t.ProductImage,
                                      {
                                        key: 0,
                                        src: r.thumbnail,
                                        alt: r.title,
                                        class: 'search-result-item__image',
                                        width: t.IMAGE_DIMENSIONS_PX,
                                        height: t.IMAGE_DIMENSIONS_PX,
                                        'site-id': t.props.siteId,
                                        'enable-srcset': '',
                                      },
                                      null,
                                      8,
                                      ['src', 'alt', 'site-id']
                                    ))
                                  : O('', !0),
                                E('div', yp, [
                                  E('h3', bp, X(r.title), 1),
                                  E('p', _p, [
                                    r.isInStock
                                      ? (c(),
                                        h('span', wp, [
                                          r.price?.length
                                            ? (c(),
                                              h('span', kp, [
                                                r.oldPrice
                                                  ? (c(),
                                                    h(
                                                      'span',
                                                      Sp,
                                                      X(r.oldPrice),
                                                      1
                                                    ))
                                                  : O('', !0),
                                                He(' ' + X(r.price), 1),
                                              ]))
                                            : O('', !0),
                                        ]))
                                      : (c(),
                                        h(
                                          'span',
                                          Tp,
                                          X(a.translations.soldOut),
                                          1
                                        )),
                                  ]),
                                ]),
                              ],
                              42,
                              fp
                            ),
                          ],
                          8,
                          hp
                        )
                      )
                    ),
                    128
                  )),
            ]))
          : O('', !0),
      ],
      512
    )
  );
}
const Pp = oe(cp, [['render', Cp]]),
  Ol = (e, n) => {
    let a;
    return function () {
      const o = () => Reflect.apply(e, this, arguments);
      clearTimeout(a), (a = setTimeout(o, n));
    };
  },
  Ip = 6,
  Ep = 5,
  Dp = 4,
  Mp = 3,
  Ll = 2,
  Op = { [Ip]: 18, [Ep]: 15, [Dp]: 12, [Mp]: 9, [Ll]: 6 },
  Lp = (e) => e?.variants[0].booking_event?.length_unit === fr;
function wr(e) {
  return e?.variants[0].booking_event?.length || 0;
}
const Zr = (e, n) => {
    const a = (t) => Math.round(t * 100) / 100;
    return Lp(e)
      ? `${a(wr(e) / 1e3 / 60 / 60)} ${n.hourShort}`
      : `${a(wr(e) / 1e3 / 60)} ${n.minuteShort}`;
  },
  Mn = (e) =>
    e[Sl] !== zr
      ? !1
      : !e.variants.every((n, a, t) => {
          const o = t[0]?.prices?.[0] ?? t[0],
            i = n?.prices?.[0] ?? n,
            r = o.sale_amount ?? o.amount,
            s = i.sale_amount ?? i.amount;
          return r === s;
        }),
  Pn = ({ variantsQuantity: e, variantId: n }) =>
    e.find((a) => a.id === n)?.inventory_quantity || 0,
  Al = ({ product: e, variantsQuantity: n }) =>
    e.variants.reduce(
      (a, t) => a + Pn({ variantsQuantity: n, variantId: t.id }),
      0
    ),
  Ap = ({ product: e, variantsQuantity: n }) =>
    e.variants[0].manage_inventory
      ? Al({ product: e, variantsQuantity: n }) > 0
      : !0,
  Bp = ({ variants: e }) =>
    e.reduce((n, a) =>
      (n.sale_amount || n.amount) <= (a.sale_amount || a.amount) ? n : a
    );
function Ta({ amount: e, currency: n, isPriceDisplayedWithCurrency: a = !0 }) {
  if (!n) return a ? '€0.00' : '0.00';
  const t = Number(e) || 0,
    i = Number(t / 10 ** n.decimal_digits).toFixed(n.decimal_digits);
  return a ? n.template.replace('$1', i) : i;
}
const xp = 'https://builder-backend.hostinger.com/public',
  Rp = async ({ query: e, indices: n, pageSize: a = 5, storeId: t }) => {
    if (!e) return [];
    const o = await fetch(`${xp}/search`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: e, indices: n, storeId: t, pageSize: a }),
      }),
      { results: i } = await o.json();
    return i.products.hits;
  },
  hs = 400,
  Hp = re({
    __name: 'SiteElementSearchBarProviderSiteEngine',
    props: {
      data: { type: Object, required: !0 },
      blockId: { type: String, required: !0 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { meta: t, siteId: o, ecommerceShoppingCart: i } = Xe(),
        r = u(() => i.value?.translations || {}),
        { toggleSearchDropdown: s } = gr({ blockId: a.blockId }),
        l = M(''),
        m = M(!1),
        g = M(null),
        d = u(() => t.value.ecommerceStoreId),
        v = u(() =>
          g.value
            ? g.value.map((T) => {
                const w =
                    T.site_product_selection === zr
                      ? Bp({ variants: T.variants })
                      : T.variants[0],
                  {
                    amount: b,
                    sale_amount: L,
                    currency_decimal_digits: D,
                    currency_template: P,
                    manage_inventory: x,
                  } = w,
                  B = { decimal_digits: D, template: P },
                  K = `/product-redirect/${T.id}`,
                  W = b && Mn(T) ? `${r.value.from} ` : '',
                  C = b ? `${W}${Ta({ amount: L || b, currency: B })}` : '',
                  H = L ? Ta({ amount: b, currency: B }) : null,
                  F =
                    !x ||
                    (!!b && Ap({ product: T, variantsQuantity: T.variants }));
                return {
                  id: T.id,
                  thumbnail: T.thumbnail,
                  title: T.title,
                  href: K,
                  price: C,
                  oldPrice: H,
                  isInStock: F,
                };
              })
            : null
        ),
        f = Ol(async () => {
          (m.value = !0),
            l.value && d.value
              ? (g.value = await Rp({
                  query: l.value,
                  indices: [Ju],
                  storeId: d.value,
                }))
              : (g.value = null),
            (m.value = !1);
        }, hs),
        S = {
          TIMEOUT_MS_SEARCH_DEBOUNCE: hs,
          props: a,
          meta: t,
          siteId: o,
          ecommerceShoppingCart: i,
          ecommerceTranslations: r,
          toggleSearchDropdown: s,
          searchTerm: l,
          isLoading: m,
          results: g,
          storeId: d,
          computedResults: v,
          searchHandler: f,
          updateSearchTerm: ({ newValue: T }) => {
            (l.value = T), f();
          },
          SiteElementSearchBar: Pp,
        };
      return (
        Object.defineProperty(S, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        S
      );
    },
  });
function Np(e, n, a, t, o, i) {
  return (
    c(),
    q(
      t.SiteElementSearchBar,
      {
        'placeholder-text': t.props.data.placeholderText,
        'no-results-text': t.props.data.noResultsText,
        'fill-color': t.props.data.fillColor,
        'fill-color-hover': t.props.data.fillColorHover,
        'text-and-icon-color': t.props.data.textAndIconColor,
        'text-and-icon-color-hover': t.props.data.textAndIconColorHover,
        'font-family': t.props.data.fontFamily,
        'border-color': t.props.data.borderColor,
        'border-color-hover': t.props.data.borderColorHover,
        'border-radius': t.props.data.borderRadius,
        'is-loading': t.isLoading,
        'result-item-hover-color': t.props.data.resultItemHoverColor,
        results: t.computedResults,
        'search-term': t.searchTerm,
        'site-id': t.siteId,
        translations: t.ecommerceTranslations,
        'onUpdate:searchTerm':
          n[0] || (n[0] = (r) => t.updateSearchTerm({ newValue: r })),
        onIsDropdownOpen: t.toggleSearchDropdown,
      },
      null,
      8,
      [
        'placeholder-text',
        'no-results-text',
        'fill-color',
        'fill-color-hover',
        'text-and-icon-color',
        'text-and-icon-color-hover',
        'font-family',
        'border-color',
        'border-color-hover',
        'border-radius',
        'is-loading',
        'result-item-hover-color',
        'results',
        'search-term',
        'site-id',
        'translations',
        'onIsDropdownOpen',
      ]
    )
  );
}
const $p = oe(Hp, [['render', Np]]),
  yn = M(!1),
  bn = M(!1),
  Uo = M(!1),
  Yo = M(''),
  Ga = M(null),
  Fo = M(!1),
  rn = ({
    elementData: e,
    data: n,
    elementId: a,
    isParentBlockFooter: t,
  } = {}) => {
    const o = M(null),
      i = M(null),
      r = M(null),
      s = e || n || {},
      l = (w) => `transition transition--${w}`,
      m = u(() => {
        const w = a && ec.includes(s.type),
          b = !a && !tc.includes(s.type);
        if (w || b) return '';
        const L = l(s.animation?.name);
        return Ei.includes(s.type) ? `${L} transition--root-hidden` : L;
      }),
      g = u(() => {
        const w = Ga.value && a === Ga.value;
        return !yn.value || (Ga.value && !w) ? '' : Uo.value;
      }),
      d = u(() => (bn.value ? Rn : null)),
      v = async (w) => {
        w.forEach(({ target: b, isIntersecting: L }) => {
          if (!L) {
            b.removeAttribute(Hn);
            return;
          }
          t || r.value?.unobserve(b), b.setAttribute(Hn, Rn);
        });
      },
      f = ({ root: w = null } = {}) => {
        s.animation?.name &&
          (r.value = new IntersectionObserver(v, { threshold: 0, root: w }));
      },
      y = async (w) => {
        if (s.animation?.name)
          if ((await Et(), Ei.includes(s.type))) {
            const b = w?.querySelectorAll(`[${pa}="${$r}"]`),
              L = w?.querySelectorAll(`[${pa}="${gn}"]`);
            [...b, ...L].forEach((P) => r.value?.observe(P));
          } else r.value?.observe(w);
      },
      S = () => {
        window.clearTimeout(o.value),
          window.clearTimeout(i.value),
          (yn.value = !1),
          (bn.value = !1);
      },
      T = ({ animation: w, id: b }) => {
        S(),
          !w !== 'none' &&
            ((Ga.value = b),
            (Yo.value = w),
            (yn.value = !0),
            (Uo.value = l(Yo.value)),
            (o.value = setTimeout(() => {
              bn.value = !0;
            }, 500)),
            (i.value = setTimeout(() => {
              (yn.value = !1), (bn.value = !1), (Ga.value = null);
            }, 2e3)));
      };
    return (
      Re(Fo, async (w) => {
        w && (await Et(), (Fo.value = !1));
      }),
      {
        intersectionObserver: r,
        animationClass: m,
        animationInEditorClass: Uo,
        animationInEditorComponentId: Ga,
        isAnimationDisplayedInEditor: yn,
        isAnimationDisplayedInEditorActive: bn,
        animationInEditorName: Yo,
        addIntersectionObserver: f,
        observe: y,
        displayAnimationInEditor: T,
        shouldMountAnimationsInPreview: Fo,
        customAnimationClass: g,
        animationAttributeStateValue: d,
      }
    );
  },
  Vp = {
    __name: 'LayoutElementProviderUser',
    props: {
      elementId: { type: String, required: !0 },
      blockId: { type: String, required: !0 },
      elementData: { type: Object, required: !0 },
      overrideWidth: { type: Number, default: null },
      overrideHeight: { type: Number, default: null },
      isMobileLegacy: { type: Boolean, default: !1 },
      lcp: { type: Object, default: () => ({}) },
      siteLanguagePages: { type: Object, required: !0 },
      stripePublicApiKey: { type: String, default: '' },
      currentLocale: { type: String, required: !0 },
      isCartVisible: { type: Boolean, default: !1 },
      isParentBlockFooter: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n(), it((L) => ({ '68a0bbc6': y.value, ebe08afe: S.value }));
      const a = e,
        t = M(null),
        {
          intersectionObserver: o,
          animationClass: i,
          addIntersectionObserver: r,
          observe: s,
          shouldMountAnimationsInPreview: l,
        } = rn({
          elementData: a.elementData,
          isParentBlockFooter: a.isParentBlockFooter,
          elementId: a.elementId,
        }),
        m = u(() => Object.values(a.siteLanguagePages)[0]),
        g = u(() => a.elementData.mobile?.isHidden || !1),
        d = u(() => a.elementData.desktop?.isHidden || !1),
        v = u(() =>
          a.elementData.type !== Ao
            ? ''
            : (
                a.siteLanguagePages[a.elementData.settings?.successPageId] ||
                m.value
              ).slug
        ),
        f = u(() =>
          a.elementData.type !== Ao
            ? ''
            : (
                a.siteLanguagePages[
                  a.elementData.settings?.cancellationPageId
                ] || m.value
              ).slug
        ),
        y = u(() => `${a.elementData.desktop.height}px`),
        S = u(() => `${a.elementData.mobile.height}px`),
        T = async () => {
          await s(t.value?.$el);
        },
        w = async () => {
          const D = [Di, Mi].includes(a.elementData.type),
            x =
              t.value?.$el.getBoundingClientRect().height > window.innerHeight,
            B = !D && x && t.value ? t.value.$el.parentElement : null;
          r({ root: B }), D || (await T());
        };
      Oe(async () => {
        await w();
      }),
        Tt(() => o.value?.disconnect()),
        Re(l, async (L) => {
          L && (await w());
        });
      const b = {
        props: a,
        elementRef: t,
        intersectionObserver: o,
        animationClass: i,
        addIntersectionObserver: r,
        observe: s,
        shouldMountAnimationsInPreview: l,
        firstLanguagePage: m,
        isMobileElementHidden: g,
        isDesktopElementHidden: d,
        stripeSuccessPageSlug: v,
        stripeCancellationPageSlug: f,
        elementHeightDesktop: y,
        elementHeightMobile: S,
        observeElement: T,
        initiateAnimations: w,
        get ELEMENT_TYPE_BUTTON() {
          return dl;
        },
        get ELEMENT_TYPE_STRIPE_BUTTON() {
          return Ao;
        },
        get ELEMENT_TYPE_ECOMMERCE_BUTTON() {
          return ac;
        },
        get ELEMENT_TYPE_MAP() {
          return ll;
        },
        get ELEMENT_TYPE_VIDEO() {
          return ul;
        },
        get ELEMENT_TYPE_IMAGE() {
          return nc;
        },
        get ELEMENT_TYPE_TEXT_BOX() {
          return oc;
        },
        get ELEMENT_TYPE_FORM() {
          return rc;
        },
        get ELEMENT_TYPE_INSTAGRAM_FEED() {
          return Di;
        },
        get ELEMENT_TYPE_SOCIAL_ICONS() {
          return ml;
        },
        get ELEMENT_TYPE_GALLERY() {
          return Mi;
        },
        get ELEMENT_TYPE_EMBED() {
          return ic;
        },
        get ELEMENT_TYPE_SHAPE() {
          return sc;
        },
        get ELEMENT_TYPE_SEARCH_BAR() {
          return lc;
        },
        LayoutElementWrapper: Rd,
        GridButtonProviderUser: Ud,
        GridEcommerceButtonProviderUser: tm,
        GridEmbedProviderUser: mm,
        GridFormProviderUser: Zm,
        GridGalleryProviderUser: cg,
        GridImageProviderUser: hg,
        GridInstagramFeedProviderUser: Hg,
        GridMapProviderUser: Gg,
        GridSocialIconsProviderUser: Jg,
        GridStripeButtonProviderUser: rv,
        GridTextBoxProviderUser: mv,
        GridVideoProviderUser: Nv,
        GridShapeProviderUser: qv,
        SiteElementSearchBarProviderSiteEngine: $p,
        get useSiteEngineAnimations() {
          return rn;
        },
        computed: u,
        onMounted: Oe,
        onBeforeUnmount: Tt,
        ref: M,
        watch: Re,
        get isSearchDropdownOpen() {
          return mr;
        },
      };
      return (
        Object.defineProperty(b, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        b
      );
    },
  };
function Up(e, n, a, t, o, i) {
  const r = je('qa');
  return (
    c(),
    q(
      t.LayoutElementWrapper,
      {
        ref: 'elementRef',
        class: Z([
          'layout-element',
          [
            {
              'layout-element--desktop-element-hidden':
                t.isDesktopElementHidden,
              'layout-element--mobile-element-hidden': t.isMobileElementHidden,
            },
            t.animationClass,
          ],
        ]),
        'element-data': a.elementData,
        'is-forced-on-top':
          t.isSearchDropdownOpen &&
          a.elementData.type === t.ELEMENT_TYPE_SEARCH_BAR,
        'is-mobile-legacy': a.isMobileLegacy,
      },
      {
        default: he(() => [
          a.elementData.type === t.ELEMENT_TYPE_BUTTON
            ? ue(
                (c(),
                q(
                  t.GridButtonProviderUser,
                  {
                    key: 0,
                    id: a.elementId,
                    data: a.elementData,
                    'current-locale': a.currentLocale,
                    'mobile-element-width': a.elementData.mobile.width,
                    'mobile-element-height': a.elementData.mobile.height,
                    class:
                      'layout-element__component layout-element__component--GridButton',
                  },
                  null,
                  8,
                  [
                    'id',
                    'data',
                    'current-locale',
                    'mobile-element-width',
                    'mobile-element-height',
                  ]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O('', !0),
          a.elementData.type === t.ELEMENT_TYPE_STRIPE_BUTTON
            ? ue(
                (c(),
                q(
                  t.GridStripeButtonProviderUser,
                  {
                    key: 1,
                    id: a.elementId,
                    data: a.elementData,
                    'success-page-slug': t.stripeSuccessPageSlug,
                    'cancellation-page-slug': t.stripeCancellationPageSlug,
                    'stripe-public-api-key': a.stripePublicApiKey,
                    class:
                      'layout-element__component layout-element__component--GridStripeButton',
                  },
                  null,
                  8,
                  [
                    'id',
                    'data',
                    'success-page-slug',
                    'cancellation-page-slug',
                    'stripe-public-api-key',
                  ]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O('', !0),
          a.elementData.type === t.ELEMENT_TYPE_ECOMMERCE_BUTTON
            ? ue(
                (c(),
                q(
                  t.GridEcommerceButtonProviderUser,
                  {
                    key: 2,
                    id: a.elementId,
                    data: a.elementData,
                    'is-cart-visible': a.isCartVisible,
                    'mobile-element-width': a.elementData.mobile.width,
                    'mobile-element-height': a.elementData.mobile.height,
                    'is-in-preview-mode': t.props.isInPreviewMode,
                    class:
                      'layout-element__component layout-element__component--GridEcommerceButton',
                  },
                  null,
                  8,
                  [
                    'id',
                    'data',
                    'is-cart-visible',
                    'mobile-element-width',
                    'mobile-element-height',
                    'is-in-preview-mode',
                  ]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O('', !0),
          a.elementData.type === t.ELEMENT_TYPE_FORM
            ? ue(
                (c(),
                q(
                  t.GridFormProviderUser,
                  {
                    key: 3,
                    id: a.elementId,
                    data: a.elementData,
                    'current-locale': a.currentLocale,
                    'is-in-preview-mode': t.props.isInPreviewMode,
                    class:
                      'layout-element__component layout-element__component--GridForm',
                  },
                  null,
                  8,
                  ['id', 'data', 'current-locale', 'is-in-preview-mode']
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O('', !0),
          a.elementData.type === t.ELEMENT_TYPE_VIDEO
            ? ue(
                (c(),
                q(
                  t.GridVideoProviderUser,
                  {
                    key: 4,
                    id: a.elementId,
                    data: a.elementData,
                    class:
                      'layout-element__component layout-element__component--GridVideo',
                  },
                  null,
                  8,
                  ['id', 'data']
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O('', !0),
          a.elementData.type === t.ELEMENT_TYPE_TEXT_BOX
            ? ue(
                (c(),
                q(
                  t.GridTextBoxProviderUser,
                  {
                    key: 5,
                    id: a.elementId,
                    data: a.elementData,
                    class:
                      'layout-element__component layout-element__component--GridTextBox',
                  },
                  null,
                  8,
                  ['id', 'data']
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O('', !0),
          a.elementData.type === t.ELEMENT_TYPE_MAP
            ? ue(
                (c(),
                q(
                  t.GridMapProviderUser,
                  {
                    key: 6,
                    id: a.elementId,
                    data: a.elementData,
                    class:
                      'layout-element__component layout-element__component--GridMap',
                  },
                  null,
                  8,
                  ['id', 'data']
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O('', !0),
          a.elementData.type === t.ELEMENT_TYPE_SOCIAL_ICONS
            ? ue(
                (c(),
                q(
                  t.GridSocialIconsProviderUser,
                  {
                    key: 7,
                    id: a.elementId,
                    data: a.elementData,
                    class:
                      'layout-element__component layout-element__component--GridSocialIcons',
                  },
                  null,
                  8,
                  ['id', 'data']
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O('', !0),
          a.elementData.type === t.ELEMENT_TYPE_GALLERY
            ? ue(
                (c(),
                q(
                  t.GridGalleryProviderUser,
                  {
                    key: 8,
                    id: a.elementId,
                    data: a.elementData,
                    'element-width': a.elementData.desktop.width,
                    'element-height': a.elementData.desktop.height,
                    class:
                      'layout-element__component layout-element__component--GridGallery',
                    onImageLoad: t.observeElement,
                  },
                  null,
                  8,
                  ['id', 'data', 'element-width', 'element-height']
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O('', !0),
          a.elementData.type === t.ELEMENT_TYPE_IMAGE
            ? ue(
                (c(),
                q(
                  t.GridImageProviderUser,
                  {
                    key: 9,
                    id: a.elementId,
                    lcp: a.lcp,
                    data: a.elementData,
                    'mobile-element-width': a.elementData.mobile.width,
                    'mobile-element-height': a.elementData.mobile.height,
                    'element-width': a.elementData.desktop.width,
                    'element-height': a.elementData.desktop.height,
                    'reset-mobile-position': a.isMobileLegacy,
                    'current-locale': a.currentLocale,
                    'mobile-border-radius': a.elementData.mobile.borderRadius,
                    'desktop-border-radius': a.elementData.desktop.borderRadius,
                    'shape-mask-source': a.elementData.shapeMaskSource,
                    'overlay-opacity': a.elementData.overlayOpacity,
                    'is-in-preview-mode': t.props.isInPreviewMode,
                    class:
                      'layout-element__component layout-element__component--GridImage',
                  },
                  null,
                  8,
                  [
                    'id',
                    'lcp',
                    'data',
                    'mobile-element-width',
                    'mobile-element-height',
                    'element-width',
                    'element-height',
                    'reset-mobile-position',
                    'current-locale',
                    'mobile-border-radius',
                    'desktop-border-radius',
                    'shape-mask-source',
                    'overlay-opacity',
                    'is-in-preview-mode',
                  ]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O('', !0),
          a.elementData.type === t.ELEMENT_TYPE_INSTAGRAM_FEED
            ? ue(
                (c(),
                q(
                  t.GridInstagramFeedProviderUser,
                  {
                    key: 10,
                    id: a.elementId,
                    data: a.elementData,
                    class:
                      'layout-element__component layout-element__component--GridInstagramFeed',
                    onMediaLoaded: t.observeElement,
                  },
                  null,
                  8,
                  ['id', 'data']
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O('', !0),
          a.elementData.type === t.ELEMENT_TYPE_EMBED
            ? ue(
                (c(),
                q(
                  t.GridEmbedProviderUser,
                  {
                    key: 11,
                    id: a.elementId,
                    data: a.elementData,
                    class:
                      'layout-element__component layout-element__component--GridEmbed',
                  },
                  null,
                  8,
                  ['id', 'data']
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O('', !0),
          a.elementData.type === t.ELEMENT_TYPE_SHAPE
            ? ue(
                (c(),
                q(
                  t.GridShapeProviderUser,
                  {
                    key: 12,
                    id: a.elementId,
                    data: a.elementData,
                    'is-in-preview-mode': t.props.isInPreviewMode,
                    class:
                      'layout-element__component layout-element__component--GridShape',
                  },
                  null,
                  8,
                  ['id', 'data', 'is-in-preview-mode']
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O('', !0),
          a.elementData.type === t.ELEMENT_TYPE_SEARCH_BAR
            ? ue(
                (c(),
                q(
                  t.SiteElementSearchBarProviderSiteEngine,
                  {
                    key: 13,
                    id: a.elementId,
                    data: a.elementData,
                    class: 'layout-element__component',
                    'block-id': a.blockId,
                  },
                  null,
                  8,
                  ['id', 'data', 'block-id']
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O('', !0),
          te(e.$slots, 'default', {}, void 0, !0),
        ]),
        _: 3,
      },
      8,
      ['class', 'element-data', 'is-forced-on-top', 'is-mobile-legacy']
    )
  );
}
const Yp = oe(Vp, [
    ['render', Up],
    ['__scopeId', 'data-v-f5dd3112'],
  ]),
  Fp = {
    __name: 'BlockLayoutProviderUser',
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      components: { type: Object, default: () => ({}) },
      lcp: { type: Object, default: () => ({}) },
      siteLanguagePages: { type: Object, required: !0 },
      stripePublicApiKey: { type: String, default: '' },
      currentLocale: { type: String, required: !0 },
      isCartVisible: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { isSearchOpenedInCurrentBlock: t } = gr({ blockId: a.blockId }),
        { components: o } = lr(a),
        i = u(() => a.data),
        {
          layoutElements: r,
          layoutCSSVars: s,
          isMobileLegacy: l,
        } = pr({
          blockData: i,
          siteElements: o,
          shouldBuildResponsive: !a.isInPreviewMode,
        }),
        m = u(() => i.value.slot === 'footer'),
        g = {
          props: a,
          isSearchOpenedInCurrentBlock: t,
          siteElements: o,
          blockData: i,
          layoutElements: r,
          layoutCSSVars: s,
          isMobileLegacy: l,
          isBlockFooter: m,
          toRefs: lr,
          computed: u,
          get useSearchElementDropdown() {
            return gr;
          },
          BlockLayoutWrapper: Pd,
          get useBlockLayout() {
            return pr;
          },
          LayoutElementProviderUser: Yp,
        };
      return (
        Object.defineProperty(g, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        g
      );
    },
  };
function Wp(e, n, a, t, o, i) {
  return (
    c(),
    q(
      t.BlockLayoutWrapper,
      {
        ref: 'blockLayout',
        style: Ae(t.layoutCSSVars),
        'is-mobile-legacy': t.isMobileLegacy,
        'is-block-responsive': '',
        'is-forced-on-top': t.isSearchOpenedInCurrentBlock,
        'is-in-preview-mode': t.props.isInPreviewMode,
      },
      {
        default: he(() => [
          (c(!0),
          h(
            ge,
            null,
            ke(
              t.layoutElements,
              (r) => (
                c(),
                q(
                  t.LayoutElementProviderUser,
                  {
                    key: r.elementId,
                    'is-mobile-legacy': t.isMobileLegacy,
                    'element-id': r.elementId,
                    'element-data': r,
                    lcp: a.lcp,
                    'is-cart-visible': a.isCartVisible,
                    'current-locale': a.currentLocale,
                    'site-language-pages': a.siteLanguagePages,
                    'stripe-public-api-key': a.stripePublicApiKey,
                    'is-parent-block-footer': t.isBlockFooter,
                    'block-id': a.blockId,
                    'is-in-preview-mode': t.props.isInPreviewMode,
                  },
                  null,
                  8,
                  [
                    'is-mobile-legacy',
                    'element-id',
                    'element-data',
                    'lcp',
                    'is-cart-visible',
                    'current-locale',
                    'site-language-pages',
                    'stripe-public-api-key',
                    'is-parent-block-footer',
                    'block-id',
                    'is-in-preview-mode',
                  ]
                )
              )
            ),
            128
          )),
        ]),
        _: 1,
      },
      8,
      ['style', 'is-mobile-legacy', 'is-forced-on-top', 'is-in-preview-mode']
    )
  );
}
const qp = oe(Fp, [['render', Wp]]),
  Gp = re({
    __name: 'ZyroPagination',
    props: { currentPage: {}, pageCount: {}, color: { default: null } },
    emits: ['change-page'],
    setup(e, { expose: n, emit: a }) {
      n();
      const t = e,
        o = a,
        i = u(() => ({ '--button-color': t.color })),
        r = u(() => {
          if (5 > t.pageCount)
            return [...new Array(t.pageCount + 1).keys()].slice(1);
          const m = 4 / 2,
            g = Array.from({ length: 4 }).fill(0);
          if (t.currentPage <= m + 1) {
            g[0] = 1;
            const v = g.map((f, y) => g[0] + y);
            return v.push(t.pageCount), v;
          }
          if (t.currentPage >= t.pageCount - m + 1) {
            const v = g.map((f, y) => t.pageCount - y);
            return v.reverse().unshift(1), v;
          }
          g[0] = t.currentPage - m + 1;
          const d = g.map((v, f) => g[0] + f);
          return d.unshift(1), (d[d.length - 1] = t.pageCount), d;
        }),
        s = { props: t, emit: o, computedStyle: i, paginationTriggersList: r };
      return (
        Object.defineProperty(s, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        s
      );
    },
  }),
  Bl = (e) => (Bt('data-v-1ee2fd7c'), (e = e()), xt(), e),
  jp = ['disabled'],
  zp = Bl(() =>
    E(
      'svg',
      {
        width: '8',
        height: '14',
        viewBox: '0 0 8 14',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      [
        E('path', {
          d: 'M7 1L1 7L7 13',
          stroke: 'currentColor',
          'stroke-width': '2',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
        }),
      ],
      -1
    )
  ),
  Kp = [zp],
  Qp = ['data-testId', 'disabled', 'onClick'],
  Zp = ['disabled'],
  Xp = Bl(() =>
    E(
      'svg',
      {
        width: '8',
        height: '14',
        viewBox: '0 0 8 14',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      [
        E('path', {
          d: 'M1 13L7 7L1 1',
          stroke: 'currentColor',
          'stroke-width': '2',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
        }),
      ],
      -1
    )
  ),
  Jp = [Xp];
function eh(e, n, a, t, o, i) {
  return a.pageCount > 1
    ? (c(),
      h(
        'div',
        { key: 0, class: 'pagination', style: Ae(t.computedStyle) },
        [
          E(
            'button',
            {
              disabled: a.currentPage === 1,
              class: 'pagination__button',
              'data-testId': 'button-previous',
              onClick:
                n[0] ||
                (n[0] = (r) =>
                  t.emit('change-page', Math.max(1, a.currentPage - 1))),
            },
            Kp,
            8,
            jp
          ),
          (c(!0),
          h(
            ge,
            null,
            ke(
              t.paginationTriggersList,
              (r) => (
                c(),
                h(
                  'button',
                  {
                    key: `${r}-trigger`,
                    class: Z([
                      'pagination__button pagination__trigger',
                      { 'pagination__trigger--current': r === a.currentPage },
                    ]),
                    'data-testId': `button-${r}`,
                    disabled: a.currentPage === r,
                    onClick: (s) => t.emit('change-page', r),
                  },
                  X(r),
                  11,
                  Qp
                )
              )
            ),
            128
          )),
          E(
            'button',
            {
              disabled: a.currentPage === a.pageCount,
              class: 'pagination__button',
              'data-testId': 'button-next',
              onClick:
                n[1] ||
                (n[1] = (r) =>
                  t.emit(
                    'change-page',
                    Math.min(a.pageCount, a.currentPage + 1)
                  )),
            },
            Jp,
            8,
            Zp
          ),
        ],
        4
      ))
    : O('', !0);
}
const xl = oe(Gp, [
    ['render', eh],
    ['__scopeId', 'data-v-1ee2fd7c'],
  ]),
  kr = 1800,
  th = 1080,
  fs = 100,
  ah = {
    __name: 'BlockBlogListItem',
    props: {
      post: { type: Object, default: () => ({}) },
      authorName: { type: String, default: null },
      shownItems: {
        type: Object,
        default: () => ({
          authorFullName: !0,
          coverImage: !0,
          title: !0,
          description: !0,
          date: !0,
          categories: !0,
          avatar: !0,
          minutesToRead: !0,
        }),
      },
      coverObjectFit: { type: String, default: 'cover' },
      cursor: { type: String, default: 'pointer' },
      blogCategories: { type: Object, default: () => ({}) },
      isAnimationActive: { type: Boolean, default: !1 },
      blogReadingTimeText: { type: [String, void 0], default: void 0 },
      blogTitleTextSize: { type: Number, default: 24 },
    },
    emits: ['post-click', 'filter-category'],
    setup(e, { expose: n }) {
      n(), it((d) => ({ '74783e9f': o.value }));
      const a = e,
        t = M(),
        o = u(() => `${a.blogTitleTextSize}px`),
        i = u(() => a.post?.coverImageAlt ?? ''),
        r = u(() => Nn(kr, null)),
        s = u(() => a.post?.categories ?? []),
        l = u(
          () =>
            !!a.shownItems.coverImage &&
            (a.post?.coverImageSrc || a.post?.coverImageSrcset)
        ),
        m = u(() => {
          const d = t.value?.getBoundingClientRect();
          if (!d || !window || !document) return !0;
          const { top: v } = d,
            { innerHeight: f } = window,
            { clientHeight: y } = document.documentElement;
          return v <= (f || y) + fs;
        }),
        g = {
          props: a,
          VERTICAL_VIEWPORT_OFFSET: fs,
          coverImageContainerRef: t,
          blogTitleTextSize: o,
          coverImageAlt: i,
          sizes: r,
          categories: s,
          isCoverImageShown: l,
          isElementInViewport: m,
          BlockBlogListItemCategories: bl,
          BlockBlogListItemMeta: _l,
          get BLOG_POST_COVER_IMAGE_MAX_WIDTH() {
            return kr;
          },
          get getFormattedNumericDate() {
            return wl;
          },
          get getGridItemSizes() {
            return Nn;
          },
          get DATA_ATTRIBUTE_ANIMATION_ROLE() {
            return pa;
          },
          get DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT() {
            return gn;
          },
          get DATA_ATTRIBUTE_ANIMATION_STATE() {
            return Hn;
          },
          get DATA_ATTRIBUTE_ANIMATION_STATE_ACTIVE() {
            return Rn;
          },
          computed: u,
          ref: M,
        };
      return (
        Object.defineProperty(g, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        g
      );
    },
  },
  nh = ['href'],
  oh = { class: 'block-blog-list-item__cover-image-wrapper' },
  rh = ['alt', 'src', 'srcset', 'sizes', 'loading'],
  ih = ['href'];
function sh(e, n, a, t, o, i) {
  const r = je('qa');
  return (
    c(),
    h(
      'div',
      nt({
        class: 'block-blog-list-item',
        [t.DATA_ATTRIBUTE_ANIMATION_ROLE || '']:
          t.DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT,
        [t.DATA_ATTRIBUTE_ANIMATION_STATE || '']: a.isAnimationActive
          ? t.DATA_ATTRIBUTE_ANIMATION_STATE_ACTIVE
          : null,
      }),
      [
        te(e.$slots, 'block-blog-list-item-overlay', {}, void 0, !0),
        t.isCoverImageShown
          ? ue(
              (c(),
              h(
                'a',
                {
                  key: 0,
                  ref: 'coverImageContainerRef',
                  href: a.post.slug,
                  class: 'block-blog-list-item__cover-image-container',
                  onClick:
                    n[0] ||
                    (n[0] = De((s) => e.$emit('post-click'), ['prevent'])),
                },
                [
                  E('div', oh, [
                    E(
                      'img',
                      {
                        class: 'block-blog-list-item__cover-image',
                        alt: t.coverImageAlt,
                        src: a.post.coverImageSrc,
                        srcset: a.post.coverImageSrcset,
                        sizes: t.sizes,
                        loading: t.isElementInViewport ? void 0 : 'lazy',
                      },
                      null,
                      8,
                      rh
                    ),
                  ]),
                ],
                8,
                nh
              )),
              [[r, 'blog-list-item-image']]
            )
          : O('', !0),
        ue(
          Me(
            t.BlockBlogListItemCategories,
            {
              class: 'font-secondary',
              categories: t.categories,
              'blog-categories': a.blogCategories,
              onFilterCategory:
                n[1] || (n[1] = (s) => e.$emit('filter-category', s)),
            },
            null,
            8,
            ['categories', 'blog-categories']
          ),
          [[Ht, a.shownItems.categories && t.categories.length]]
        ),
        E(
          'a',
          {
            class: 'block-blog-list-item__content',
            href: a.post.slug,
            onClick:
              n[2] || (n[2] = De((s) => e.$emit('post-click'), ['prevent'])),
          },
          [
            ue(
              E(
                'h3',
                { class: 'font-primary block-blog-list-item__title' },
                X(a.post.meta.title),
                513
              ),
              [[Ht, a.shownItems.title]]
            ),
            ue(
              E(
                'p',
                { class: 'block-blog-list-item__description font-secondary' },
                X(a.post.meta.description),
                513
              ),
              [[Ht, a.shownItems.description]]
            ),
            Me(
              t.BlockBlogListItemMeta,
              Ge(
                {
                  authorName: a.authorName,
                  minutesAmount: a.post.minutesToRead,
                  date: t.getFormattedNumericDate(a.post.date),
                  showAvatar: a.shownItems.avatar,
                  showName: a.shownItems.authorFullName,
                  showDate: a.shownItems.date,
                  showMinutes: a.shownItems.minutesToRead,
                },
                { 'blog-reading-time-text': a.blogReadingTimeText }
              ),
              null,
              16,
              ['blog-reading-time-text']
            ),
          ],
          8,
          ih
        ),
      ],
      16
    )
  );
}
const lh = oe(ah, [
    ['render', sh],
    ['__scopeId', 'data-v-d6576b2a'],
  ]),
  uh = 'Show all posts',
  ys = 46,
  bs = 24,
  ch = {
    __name: 'BlockBlogList',
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      lcp: { type: Object, default: () => ({}) },
      posts: { type: Object, default: () => ({}) },
      blogCategories: { type: Object, default: () => ({}) },
      blogReadingTimeText: { type: [String, void 0], default: void 0 },
    },
    emits: ['post-click'],
    setup(e, { expose: n, emit: a }) {
      n(), it((b) => ({ '2251a3f7': m.value, f64549e6: l.value }));
      const t = e,
        o = a,
        i = M(0),
        r = M(null),
        s = M(!1),
        l = u(() => Number.parseInt(t.data.settings.postColumnCount, 10)),
        m = u(() => `${ys}px`),
        g = u(() => t.data.settings.blogTitleFontSize || bs),
        d = u(() => {
          const {
              categories: b,
              showAllPosts: L,
              showWithoutCategories: D,
            } = t.data.settings,
            P = L
              ? t.posts
              : Object.fromEntries(
                  Object.entries(t.posts).filter(([, x]) => {
                    const B = b.some((W) => x.categories.includes(W));
                    return (D && x.categories.length === 0) || B;
                  })
                );
          return r.value
            ? Object.fromEntries(
                Object.entries(P).filter(([, x]) =>
                  x.categories.includes(r.value)
                )
              )
            : P;
        }),
        v = u(() =>
          Object.values(d.value).sort(
            (b, L) => Date.parse(L.date) - Date.parse(b.date)
          )
        ),
        f = u(() =>
          v.value.slice(
            (i.value > 0 ? i.value - 1 : 0) * t.data.settings.postsPerPage,
            i.value * t.data.settings.postsPerPage
          )
        ),
        y = u(() =>
          Math.ceil(Object.keys(d.value).length / t.data.settings.postsPerPage)
        ),
        S = () => {
          const b = new URLSearchParams(window.location.search),
            L = Number.parseInt(b.get('page'), 10) || 1;
          L !== i.value && (i.value = L);
        },
        T = (b) => {
          (i.value = b), (s.value = !0);
          const L = new URL(window.location);
          L.searchParams.set('page', i.value),
            window.history.pushState(null, '', L.toString()),
            sr({ linkToSection: `#${t.blockId}` });
        };
      Re(f, (b) => {
        b.length === 0 && i.value > 1 && (i.value -= 1);
      }),
        Re(r, () => {
          s.value = !0;
        }),
        Oe(() => {
          const b = new URLSearchParams(window.location.search),
            L = Number.parseInt(b.get('page'), 10) || 1;
          i.value !== L && (i.value = L),
            window.addEventListener('popstate', () => {
              S();
            });
        }),
        Tt(() => {
          window.removeEventListener('popstate', S);
        });
      const w = {
        SHOW_ALL_POSTS_LABEL: uh,
        BLOG_LIST_PADDING_X: ys,
        props: t,
        emit: o,
        currentPage: i,
        filteredCategoryId: r,
        isAnimationActive: s,
        postColumnCount: l,
        blogListPaddingXCssVar: m,
        BLOG_TITLE_FONT_SIZE_FALLBACK: bs,
        blogTitleTextSize: g,
        postsToRender: d,
        sortedPosts: v,
        currentPageItems: f,
        pageCount: y,
        handleBrowserNavigationPageChange: S,
        setCurrentPage: T,
        get scrollToSection() {
          return sr;
        },
        ZyroPagination: xl,
        BlockBlogListItem: lh,
        ref: M,
        onMounted: Oe,
        onBeforeUnmount: Tt,
        computed: u,
        watch: Re,
      };
      return (
        Object.defineProperty(w, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        w
      );
    },
  },
  dh = ['id'],
  mh = { key: 0, class: 'block-blog-list__filter' },
  gh = { key: 2, class: 'block-blog-list__empty-block' };
function vh(e, n, a, t, o, i) {
  const r = je('qa');
  return ue(
    (c(),
    h(
      'div',
      { id: a.blockId, ref: 'blogList', class: 'block-blog-list' },
      [
        t.filteredCategoryId
          ? (c(),
            h('div', mh, [
              He(X(a.blogCategories[t.filteredCategoryId].name) + ' ', 1),
              E(
                'button',
                {
                  class: 'block-blog-list__filter-button',
                  onClick:
                    n[0] || (n[0] = (s) => (t.filteredCategoryId = null)),
                },
                X(t.SHOW_ALL_POSTS_LABEL)
              ),
            ]))
          : O('', !0),
        t.currentPageItems.length
          ? (c(),
            h(
              'div',
              {
                key: 1,
                class: Z([
                  'block-blog-list__list',
                  { 'block-blog-list__list--one-col': t.postColumnCount === 1 },
                ]),
              },
              [
                (c(!0),
                h(
                  ge,
                  null,
                  ke(t.currentPageItems, (s, l) =>
                    ue(
                      (c(),
                      q(
                        t.BlockBlogListItem,
                        {
                          key: `post-${l}`,
                          post: s,
                          'author-name': s.meta.authorName,
                          'cover-object-fit':
                            a.data.settings.styles['cover-object-fit'],
                          'shown-items': a.data.settings.shownItems,
                          'blog-categories': a.blogCategories,
                          'is-animation-active': t.isAnimationActive,
                          'blog-reading-time-text': a.blogReadingTimeText,
                          'blog-title-text-size': t.blogTitleTextSize,
                          onFilterCategory:
                            n[1] || (n[1] = (m) => (t.filteredCategoryId = m)),
                          onPostClick: (m) => t.emit('post-click', s),
                        },
                        {
                          'block-blog-list-item-overlay': he(() => [
                            te(
                              e.$slots,
                              'block-blog-list-overlay',
                              { post: s },
                              void 0,
                              !0
                            ),
                          ]),
                          _: 2,
                        },
                        1032,
                        [
                          'post',
                          'author-name',
                          'cover-object-fit',
                          'shown-items',
                          'blog-categories',
                          'is-animation-active',
                          'blog-reading-time-text',
                          'blog-title-text-size',
                          'onPostClick',
                        ]
                      )),
                      [[r, 'blog-list-item']]
                    )
                  ),
                  128
                )),
              ],
              2
            ))
          : (c(),
            h('div', gh, [
              te(e.$slots, 'block-blog-list-empty-block', {}, void 0, !0),
            ])),
        Me(
          t.ZyroPagination,
          {
            class: 'block-blog-list__pagination',
            'current-page': t.currentPage,
            'page-count': t.pageCount,
            onChangePage: t.setCurrentPage,
          },
          null,
          8,
          ['current-page', 'page-count']
        ),
      ],
      8,
      dh
    )),
    [[r, 'builder-section-blog']]
  );
}
const ph = oe(ch, [
    ['render', vh],
    ['__scopeId', 'data-v-759d547e'],
  ]),
  hh = re({
    name: 'BlockBlogListProviderUser',
    components: { BlockBlogList: ph },
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      currentLocale: { type: String, default: Kt },
    },
    setup() {
      const {
        blogReadingTimeText: e,
        siteId: n,
        pages: a,
        blogCategories: t,
        meta: o,
      } = Xe();
      return {
        blogReadingTimeText: e,
        siteId: n,
        pages: a,
        blogCategories: t,
        meta: o,
      };
    },
    computed: {
      publishedBlogPages() {
        return Object.fromEntries(
          Object.entries(this.pages).filter(
            ([, e]) => e.type === dr && !e.isDraft
          )
        );
      },
      blogPosts() {
        const e = this.currentLocale === this.meta.defaultLocale;
        return Object.fromEntries(
          Object.entries(this.publishedBlogPages).map(([n, a]) => {
            const t = Ba(a.coverImageOrigin, a.coverImagePath, this.siteId, {
              width: kr,
              height: th,
            });
            return [
              n,
              {
                id: n,
                ...a,
                coverImageSrcset: t,
                slug: `/${e ? '' : `${this.currentLocale}/`}${a.slug}`,
              },
            ];
          })
        );
      },
    },
  });
function fh(e, n, a, t, o, i) {
  const r = Be('BlockBlogList');
  return (
    c(),
    q(
      r,
      {
        data: e.data,
        'block-id': e.blockId,
        posts: e.blogPosts,
        'blog-categories': e.blogCategories,
        'blog-reading-time-text': e.blogReadingTimeText,
      },
      null,
      8,
      ['data', 'block-id', 'posts', 'blog-categories', 'blog-reading-time-text']
    )
  );
}
const yh = oe(hh, [['render', fh]]),
  Xr = re({
    props: {
      columnCount: { type: Number, default: 3 },
      imageRatio: { type: String, default: 'original' },
    },
  }),
  _s = () => {
    it((e) => ({ '01ae45c2': e.columnCount }));
  },
  ws = Xr.setup;
Xr.setup = ws ? (e, n) => (_s(), ws(e, n)) : _s;
const Rl = (e) => (Bt('data-v-520c25c1'), (e = e()), xt(), e),
  bh = { class: 'skeleton-loader' },
  _h = Rl(() => E('div', { class: 'skeleton-loader__text' }, null, -1)),
  wh = Rl(() => E('div', { class: 'skeleton-loader__text' }, null, -1));
function kh(e, n, a, t, o, i) {
  return (
    c(),
    h('div', bh, [
      (c(!0),
      h(
        ge,
        null,
        ke(
          e.columnCount,
          (r) => (
            c(),
            h('div', { key: r, class: 'skeleton-loader__item' }, [
              E(
                'div',
                {
                  class: Z([
                    'skeleton-loader__image-placeholder',
                    `skeleton-loader__image-placeholder--${e.imageRatio}`,
                  ]),
                },
                null,
                2
              ),
              _h,
              wh,
            ])
          )
        ),
        128
      )),
    ])
  );
}
const Sh = oe(Xr, [
    ['render', kh],
    ['__scopeId', 'data-v-520c25c1'],
  ]),
  Th = re({
    props: {
      textColorVars: { type: Object, default: () => ({}) },
      emptyPageMessage: { type: String, required: !0 },
    },
    computed: {
      computedStyles() {
        return { ...Nt(this.textColorVars) };
      },
    },
  }),
  Ch = E(
    'svg',
    {
      class: 'product-list-empty-state__icon',
      width: '41',
      height: '40',
      viewBox: '0 0 41 40',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    [
      E('path', {
        d: 'M10.5 3.33334L5.5 10V33.3333C5.5 34.2174 5.85119 35.0652 6.47631 35.6904C7.10143 36.3155 7.94928 36.6667 8.83333 36.6667H32.1667C33.0507 36.6667 33.8986 36.3155 34.5237 35.6904C35.1488 35.0652 35.5 34.2174 35.5 33.3333V10L30.5 3.33334H10.5Z',
        stroke: 'currentColor',
        'stroke-width': '2',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
      }),
      E('path', {
        d: 'M5.5 10H35.5',
        stroke: 'currentColor',
        'stroke-width': '2',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
      }),
      E('path', {
        d: 'M27.1663 16.6667C27.1663 18.4348 26.464 20.1305 25.2137 21.3807C23.9635 22.631 22.2678 23.3334 20.4997 23.3334C18.7316 23.3334 17.0359 22.631 15.7856 21.3807C14.5354 20.1305 13.833 18.4348 13.833 16.6667',
        stroke: 'currentColor',
        'stroke-width': '2',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
      }),
    ],
    -1
  );
function Ph(e, n, a, t, o, i) {
  return (
    c(),
    h(
      'div',
      { class: 'product-list-empty-state', style: Ae(e.computedStyles) },
      [Ch, E('h6', null, X(e.emptyPageMessage), 1)],
      4
    )
  );
}
const Ih = oe(Th, [['render', Ph]]),
  Eh = {},
  Dh = {
    width: '392',
    height: '392',
    viewBox: '0 0 392 392',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  Mh = Nr(
    '<g clip-path="url(#clip0_2_420)"><rect width="392" height="392" fill="var(--color-success-light)"></rect><path d="M133.859 223.769C134.843 221.858 137.577 221.858 138.561 223.769L162.649 270.514C163.282 271.741 164.751 272.275 166.023 271.742L214.483 251.437C216.466 250.607 218.558 252.361 218.086 254.458L206.528 305.78C206.225 307.125 207.005 308.477 208.321 308.887L258.489 324.525C260.54 325.164 261.014 327.852 259.306 329.154L217.502 361.032C216.407 361.868 216.136 363.404 216.88 364.564L245.273 408.837C246.433 410.645 245.067 413.006 242.921 412.907L190.444 410.42C189.066 410.354 187.869 411.36 187.694 412.729L181.025 464.906C180.753 467.039 178.185 467.975 176.606 466.517L138.006 430.84C136.992 429.904 135.428 429.904 134.414 430.84L95.8141 466.517C94.2351 467.975 91.6671 467.039 91.3946 464.906L84.7258 412.729C84.5509 411.36 83.3542 410.354 81.9766 410.42L29.4987 412.907C27.3526 413.006 25.9869 410.645 27.1466 408.837L55.5405 364.564C56.2846 363.404 56.0134 361.868 54.9179 361.032L13.1143 329.154C11.4063 327.852 11.8805 325.164 13.931 324.525L64.0988 308.887C65.4146 308.477 66.195 307.125 65.8924 305.78L54.3339 254.458C53.8617 252.361 55.9546 250.607 57.937 251.437L106.397 271.742C107.67 272.275 109.138 271.741 109.771 270.514L133.859 223.769Z" fill="var(--color-gray)"></path><path d="M32.7289 525.562C56.9795 538.816 116.766 483.102 166.267 401.122C215.767 319.141 236.236 241.939 211.986 228.685C187.735 215.431 127.948 271.145 78.448 353.125C28.9475 435.105 8.47843 512.308 32.7289 525.562Z" fill="var(--color-gray-border)"></path><path d="M266.714 528.065C312.959 554.631 379.209 526.102 414.687 464.343C450.165 402.584 441.437 330.982 395.192 304.416C348.947 277.85 282.697 306.38 247.219 368.139C211.74 429.898 220.469 501.499 266.714 528.065Z" fill="var(--color-gray-border)"></path><path d="M169.89 442.88C194.14 456.134 244.767 415.592 282.967 352.326C321.168 289.06 332.477 227.028 308.226 213.774C283.976 200.52 233.349 241.063 195.149 304.329C156.948 367.595 145.639 429.627 169.89 442.88Z" fill="var(--color-gray-border)"></path><path d="M235.035 369.11C250.062 375.748 276.749 351.408 294.642 314.746C312.535 278.083 314.859 242.98 299.831 236.342C284.804 229.704 258.117 254.043 240.224 290.706C222.331 327.369 220.008 362.471 235.035 369.11Z" fill="var(--color-gray)"></path><path d="M285.233 362.514C296.758 367.605 316.693 350.03 329.759 323.258C342.825 296.487 344.073 270.657 332.548 265.565C321.023 260.474 301.088 278.049 288.022 304.821C274.956 331.592 273.708 357.422 285.233 362.514Z" fill="var(--color-gray)"></path><path d="M326.668 344.001C334.199 347.328 346.602 337.118 354.373 321.197C362.143 305.276 362.337 289.672 354.807 286.346C347.276 283.019 334.872 293.229 327.102 309.15C319.332 325.071 319.137 340.675 326.668 344.001Z" fill="var(--color-gray)"></path><path d="M360.481 368.158C367.473 371.28 377.736 363.518 383.403 350.822C389.071 338.126 387.998 325.303 381.006 322.182C374.013 319.061 363.751 326.822 358.083 339.518C352.415 352.214 353.489 365.037 360.481 368.158Z" fill="var(--color-gray)"></path><path d="M85.3546 149.427C96.7914 145.844 102.551 131.729 98.2183 117.901C93.8859 104.072 81.1024 95.7667 69.6656 99.3498C58.2287 102.933 52.4694 117.048 56.8018 130.876C61.1342 144.705 73.9177 153.01 85.3546 149.427Z" fill="var(--color-gray)"></path></g><defs><clipPath id="clip0_2_420"><rect width="392" height="392" fill="var(--color-light)"></rect></clipPath></defs>',
    2
  ),
  Oh = [Mh];
function Lh(e, n) {
  return c(), h('svg', Dh, Oh);
}
const Hl = oe(Eh, [['render', Lh]]),
  Ah = {
    props: {
      text: { type: String, default: '' },
      ribbonStyle: { type: Object, default: () => ({}) },
    },
    computed: {
      computedStyles() {
        return { ...Nt(this.ribbonStyle) };
      },
    },
  },
  Bh = { class: 'ecommerce-product-ribbon__text' };
function xh(e, n, a, t, o, i) {
  return (
    c(),
    h(
      'div',
      { class: 'ecommerce-product-ribbon', style: Ae(i.computedStyles) },
      [E('p', Bh, X(a.text), 1)],
      4
    )
  );
}
const Rh = oe(Ah, [['render', xh]]),
  Hh = re({
    __name: 'ProductListItem',
    props: {
      image: { default: '' },
      secondaryImage: {},
      title: {},
      price: { default: null },
      isCentered: { type: Boolean, default: !1 },
      isEager: { type: Boolean, default: !1 },
      imageWidth: {},
      duration: {},
      productType: { default: '' },
      translations: { default: () => ({}) },
      isStoreQuantityTracked: { type: Boolean },
      quantity: {},
      isButtonEnabled: { type: Boolean, default: !1 },
      buttonDisplay: { default: '' },
      buttonText: { default: '' },
      buttonStyle: { default: () => ({}) },
      buttonType: { default: 'primary' },
      buttonBorderWidth: { default: 0 },
      isPriceRangeShown: { type: Boolean },
      ribbon: { default: '' },
      ribbonStyle: { default: () => ({}) },
      siteId: { default: '' },
      isPurchasable: { type: Boolean },
      imageRatio: { default: wa.COVER },
      imageHoverEffect: {},
      isMobileView: { type: Boolean },
    },
    emits: ['button-click'],
    setup(e, { expose: n }) {
      n(), it((w) => ({ '7fe64b59': v.value }));
      const a = { [pa]: gn },
        t = e,
        o = M(),
        i = M(!1),
        r = u(() =>
          t.imageHoverEffect === ka.SWAP_IMAGE ? t.secondaryImage : null
        ),
        s = u(() => !t.isStoreQuantityTracked || t.quantity > 0),
        l = u(() => t.buttonText || t.translations?.addToBag || 'Add to bag'),
        m = u(() => ({
          normal: t.buttonStyle[`grid-button-${t.buttonType}-border-color`],
          hover:
            t.buttonStyle[`grid-button-${t.buttonType}-border-color-hover`],
        })),
        g = u(() => ({
          normal: t.buttonStyle[`grid-button-${t.buttonType}-background-color`],
          hover:
            t.buttonStyle[`grid-button-${t.buttonType}-background-color-hover`],
        })),
        d = u(() => ({ ...Nt(t.buttonStyle) })),
        v = u(() => {
          switch (t.imageRatio) {
            case wa.COVER:
            case wa.LANDSCAPE:
            case wa.PORTRAIT:
              return 'cover';
            default:
              return 'contain';
          }
        }),
        f = u(() =>
          t.imageRatio === wa.PORTRAIT || t.imageRatio === wa.LANDSCAPE
            ? 'none'
            : ''
        ),
        y = u(() =>
          t.secondaryImage && i.value && t.imageHoverEffect === ka.SWAP_IMAGE
            ? t.secondaryImage
            : t.image || ''
        ),
        S = u(() => t.imageHoverEffect === ka.ZOOM && i.value);
      Re(
        () => t.imageHoverEffect,
        (w) => {
          t.isMobileView ||
            (clearTimeout(o.value),
            w === ka.SWAP_IMAGE
              ? ((i.value = !0),
                (o.value = setTimeout(() => {
                  i.value = !1;
                }, 1e3)))
              : w === ka.ZOOM
              ? ((i.value = !0),
                (o.value = setTimeout(() => {
                  i.value = !1;
                }, 1e3)))
              : (i.value = !1));
        }
      );
      const T = {
        CUSTOM_ATTRIBUTES: a,
        props: t,
        animationTimeout: o,
        isProductHovered: i,
        secondaryImageSrc: r,
        isInStock: s,
        blockButtonText: l,
        buttonBorderColor: m,
        buttonBackgroundColor: g,
        computedStyles: d,
        objectFit: v,
        placeholderPreserveAspectRatio: f,
        imageSrc: y,
        isImageZoomedIn: S,
        GridButton: Ya,
        get PRODUCT_TYPE_BOOKING() {
          return Vt;
        },
        get formatPrice() {
          return Ta;
        },
        ProductImage: bo,
        ProductImagePlaceholder: Hl,
        ProductRibbon: Rh,
        get ImageHoverEffect() {
          return ka;
        },
      };
      return (
        Object.defineProperty(T, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        T
      );
    },
  }),
  Nh = { class: 'product-list-item__title' },
  $h = { key: 0, class: 'product-list-item__price-wrapper' },
  Vh = { key: 0, class: 'product-list-item__price-range' },
  Uh = { key: 0, class: 'product-list-item__price-content' },
  Yh = { key: 1, class: 'product-list-item__duration' },
  Fh = { key: 1, class: 'product-list-item__text' };
function Wh(e, n, a, t, o, i) {
  const r = je('qa');
  return (
    c(),
    h(
      'div',
      Ge(
        {
          class: [
            'product-list-item',
            { 'product-list-item--centered': a.isCentered },
          ],
          style: t.computedStyles,
        },
        t.CUSTOM_ATTRIBUTES
      ),
      [
        E(
          'div',
          {
            class: 'product-list-item__content',
            onMouseenter:
              n[0] || (n[0] = (s) => (t.isProductHovered = !a.isMobileView)),
            onMouseleave: n[1] || (n[1] = (s) => (t.isProductHovered = !1)),
          },
          [
            ue(
              (c(),
              h(
                'div',
                {
                  class: Z(`
					product-list-item__image-wrapper
					product-list-item__image-wrapper--${a.imageRatio}
					${
            a.imageHoverEffect === t.ImageHoverEffect.NO_EFFECT
              ? 'product-list-item__image-wrapper--bg-animation'
              : ''
          }
				`),
                },
                [
                  a.image
                    ? (c(),
                      q(
                        t.ProductImage,
                        {
                          key: 0,
                          src: t.imageSrc,
                          'secondary-image-src': t.secondaryImageSrc,
                          alt: a.title,
                          class: Z(`
						product-list-item__image
						product-list-item__image ${
              t.isImageZoomedIn ? 'product-list-item__image--zoomed-in' : ''
            }
						${
              a.imageHoverEffect === t.ImageHoverEffect.ZOOM
                ? 'product-list-item__image--zoom-animation'
                : ''
            }
					`),
                          'is-eager': a.isEager,
                          width: a.imageWidth,
                          height: a.imageWidth,
                          'site-id': a.siteId,
                          'object-fit': t.objectFit,
                          'enable-srcset': '',
                          'is-lossless': !0,
                        },
                        null,
                        8,
                        [
                          'src',
                          'secondary-image-src',
                          'alt',
                          'class',
                          'is-eager',
                          'width',
                          'height',
                          'site-id',
                          'object-fit',
                        ]
                      ))
                    : (c(),
                      q(
                        t.ProductImagePlaceholder,
                        {
                          key: 1,
                          preserveAspectRatio: t.placeholderPreserveAspectRatio,
                          class: Z(`
						product-list-item__image ${
              t.isImageZoomedIn ? 'product-list-item__image--zoomed-in' : ''
            }
						${
              a.imageHoverEffect === t.ImageHoverEffect.ZOOM
                ? 'product-list-item__image--zoom-animation'
                : ''
            }
					`),
                        },
                        null,
                        8,
                        ['preserveAspectRatio', 'class']
                      )),
                  a.ribbon
                    ? (c(),
                      q(
                        t.ProductRibbon,
                        {
                          key: 2,
                          text: a.ribbon,
                          'ribbon-style': a.ribbonStyle,
                        },
                        null,
                        8,
                        ['text', 'ribbon-style']
                      ))
                    : O('', !0),
                ],
                2
              )),
              [[r, 'product-list-section-item-image']]
            ),
            ue((c(), h('h6', Nh, [He(X(a.title), 1)])), [
              [r, 'product-list-section-item-title'],
            ]),
            a.price
              ? ue(
                  (c(),
                  h('div', $h, [
                    t.isInStock
                      ? (c(),
                        h(
                          ge,
                          { key: 0 },
                          [
                            E('p', null, [
                              a.isPriceRangeShown && !a.price.sale_amount
                                ? (c(),
                                  h('span', Vh, X(a.translations.from), 1))
                                : O('', !0),
                              E(
                                'span',
                                {
                                  class: Z({
                                    'product-list-item__price':
                                      a.price.sale_amount,
                                  }),
                                },
                                X(
                                  t.formatPrice({
                                    amount: a.price.amount,
                                    currency: a.price.currency,
                                  })
                                ),
                                3
                              ),
                            ]),
                            a.price.sale_amount
                              ? (c(),
                                h('p', Uh, [
                                  a.isPriceRangeShown
                                    ? (c(),
                                      h(
                                        ge,
                                        { key: 0 },
                                        [He(X(a.translations.from), 1)],
                                        64
                                      ))
                                    : O('', !0),
                                  He(
                                    ' ' +
                                      X(
                                        t.formatPrice({
                                          amount: a.price.sale_amount,
                                          currency: a.price.currency,
                                        })
                                      ),
                                    1
                                  ),
                                ]))
                              : O('', !0),
                            a.productType === t.PRODUCT_TYPE_BOOKING
                              ? (c(), h('p', Yh, X(a.duration), 1))
                              : O('', !0),
                          ],
                          64
                        ))
                      : (c(), h('p', Fh, X(a.translations.soldOut), 1)),
                  ])),
                  [[r, 'product-list-section-item-price']]
                )
              : O('', !0),
          ],
          32
        ),
        a.isButtonEnabled && a.isPurchasable
          ? (c(),
            h(
              'div',
              {
                key: 0,
                class: Z([
                  'product-list-item__button-wrapper',
                  {
                    'product-list-item__button-wrapper--hidden': !t.isInStock,
                    'product-list-item__button-wrapper--with-hover':
                      a.buttonDisplay === 'hover',
                  },
                ]),
                onClick: n[3] || (n[3] = De(() => {}, ['prevent', 'stop'])),
              },
              [
                ue(
                  Me(
                    t.GridButton,
                    {
                      type: a.buttonType,
                      content: t.blockButtonText,
                      class: Z([
                        'product-list-item__button',
                        `product-list-item__button--${a.buttonType}`,
                      ]),
                      'tag-name': 'button',
                      'border-width': a.buttonBorderWidth,
                      'border-color': t.buttonBorderColor.normal,
                      'border-color-hover': t.buttonBorderColor.hover,
                      'background-color': t.buttonBackgroundColor.normal,
                      'background-color-hover': t.buttonBackgroundColor.hover,
                      onClick: n[2] || (n[2] = (s) => e.$emit('button-click')),
                    },
                    null,
                    8,
                    [
                      'type',
                      'content',
                      'class',
                      'border-width',
                      'border-color',
                      'border-color-hover',
                      'background-color',
                      'background-color-hover',
                    ]
                  ),
                  [[r, 'productlistsection-btn-addtobag']]
                ),
              ],
              2
            ))
          : O('', !0),
      ],
      16
    )
  );
}
const qh = oe(Hh, [
    ['render', Wh],
    ['__scopeId', 'data-v-9b6d505f'],
  ]),
  Sr = (e) =>
    e.variants.reduce((n, a) => {
      const t = n.prices[0]?.sale_amount || n.prices[0]?.amount,
        o = a.prices[0]?.sale_amount || a.prices[0]?.amount;
      return t < o ? n : a;
    }),
  Gh = (e) =>
    e.variants.reduce((n, a) => {
      const t = n.prices[0]?.sale_amount || n.prices[0]?.amount,
        o = a.prices[0]?.sale_amount || a.prices[0]?.amount;
      return t > o ? n : a;
    }),
  Wo = 24,
  jh = re({
    __name: 'BlockEcommerceProductList',
    props: {
      blockId: {},
      pageCount: {},
      currentPage: {},
      products: {},
      productPages: { default: () => ({}) },
      blockStyle: { default: () => ({}) },
      textColorVars: { default: () => ({}) },
      isProductListShown: { type: Boolean, default: !0 },
      isLoading: { type: Boolean },
      isEager: { type: Boolean },
      columnCount: { default: 3 },
      translations: {},
      productCategoryId: { default: '' },
      isButtonEnabled: { type: Boolean },
      buttonDisplay: { default: '' },
      buttonText: { default: '' },
      buttonStyle: { default: () => ({}) },
      buttonType: { default: 'primary' },
      buttonBorderWidth: { default: 0 },
      ribbonStyle: { default: () => ({}) },
      isProductListItemLinkDisabled: { type: Boolean },
      siteId: {},
      variantsQuantity: {},
      productSorting: { default: () => ({ enabled: !1 }) },
      sorting: { default: jd[Qa.DEFAULT] },
      imageRatio: { default: wa.COVER },
      imageHoverEffect: { default: ka.NO_EFFECT },
      isMobileView: { type: Boolean },
    },
    emits: ['product-click', 'button-click', 'page-changed', 'sort-changed'],
    setup(e, { expose: n, emit: a }) {
      n(), it((P) => ({ '0ebeaa3e': P.columnCount, '1937395c': d.value }));
      const t = e,
        o = a,
        i = Dc(),
        r = M(!1),
        s = u(() => ({ [Hn]: r.value ? Rn : null })),
        l = u(
          () =>
            t.translations.onlineStoreNoProducts ||
            'No publicly visible products'
        ),
        m = u(() => t.blockStyle?.textAlign === 'center'),
        g = u(() => {
          const P = (t.columnCount - 1) * Wo,
            x = Bc - P;
          return Math.floor(x / t.columnCount);
        }),
        d = u(() => `${Wo}px`),
        v = u(() => Nt(t.textColorVars)),
        f = u(() => ({ color: t.productSorting.textColor || '#000' })),
        y = async (P) => {
          (r.value = !1), o('page-changed', P), await Et(), (r.value = !0);
          const x = document.getElementById(t.blockId),
            B = x?.getBoundingClientRect();
          (B && B.top >= 0 && B.bottom <= window.innerHeight) ||
            x?.scrollIntoView({ behavior: 'smooth' });
        },
        S = (P) => Object.values(t.productPages).find((x) => x.productId === P),
        D = {
          GAP_SIZE: Wo,
          props: t,
          emit: o,
          route: i,
          isAnimationActive: r,
          customAttributes: s,
          emptyPageMessage: l,
          isCentered: m,
          imageWidth: g,
          gapSize: d,
          computedStyles: v,
          computedSelectStyles: f,
          handlePageChange: y,
          getItemProductPage: S,
          getItemProductPageTo: (P) => {
            if (t.isProductListItemLinkDisabled) return i;
            const x = S(P);
            return x ? { path: `/${x.slug}` } : { path: '/' };
          },
          getSmallestProductPrice: (P) =>
            Mn(P) ? Sr(P).prices[0] : P.variants[0].prices[0],
          getProductImage: (P) => (Mn(P) && Sr(P).image_url) || P.thumbnail,
          getSecondaryProductImage: (P) => P.images[1]?.url,
          ListSkeletonLoader: Sh,
          ZyroPagination: xl,
          ProductListEmptyState: Ih,
          ProductListItem: qh,
          get getFormattedBookingDuration() {
            return Zr;
          },
          get isProductPriceRangeShown() {
            return Mn;
          },
          get getFullProductQuantity() {
            return Al;
          },
        };
      return (
        Object.defineProperty(D, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        D
      );
    },
  }),
  zh = ['id'],
  Kh = { key: 0, class: 'block-product-list__sorting' },
  Qh = ['value'],
  Zh = ['value'],
  Xh = { key: 2, ref: 'productList', class: 'block-product-list' },
  Jh = { class: 'block-product-list__content' };
function ef(e, n, a, t, o, i) {
  const r = Be('RouterLink');
  return (
    c(),
    h(
      'div',
      {
        id: a.blockId,
        class: 'block-product-list-wrapper',
        style: Ae(t.computedStyles),
      },
      [
        a.productSorting.enabled && a.productSorting.sortingOptions?.length
          ? (c(),
            h('div', Kh, [
              E(
                'label',
                {
                  for: 'sorting-options',
                  style: Ae(t.computedSelectStyles),
                  class: 'block-product-list__sorting-label',
                },
                X(a.translations.sortBy) + ': ',
                5
              ),
              E(
                'select',
                {
                  id: 'sorting-options',
                  class: 'block-product-list__sorting-select',
                  value: t.props.sorting,
                  style: Ae(t.computedSelectStyles),
                  onChange: n[0] || (n[0] = (s) => t.emit('sort-changed', s)),
                },
                [
                  (c(!0),
                  h(
                    ge,
                    null,
                    ke(
                      a.productSorting.sortingOptions,
                      (s) => (
                        c(),
                        h(
                          'option',
                          { key: s.id, value: s.value },
                          X(s.label),
                          9,
                          Zh
                        )
                      )
                    ),
                    128
                  )),
                ],
                44,
                Qh
              ),
            ]))
          : O('', !0),
        a.isLoading
          ? (c(),
            q(
              t.ListSkeletonLoader,
              {
                key: 1,
                'column-count': a.columnCount,
                'image-ratio': a.imageRatio,
              },
              null,
              8,
              ['column-count', 'image-ratio']
            ))
          : a.isProductListShown
          ? (c(),
            h(
              'div',
              Xh,
              [
                E('div', Jh, [
                  (c(!0),
                  h(
                    ge,
                    null,
                    ke(
                      a.products,
                      (s, l) => (
                        c(),
                        q(
                          r,
                          {
                            key: `product-${l}-${s.id}`,
                            to: t.getItemProductPageTo(s.id),
                            class: 'block-product-list__link',
                          },
                          {
                            default: he(() => [
                              Me(
                                t.ProductListItem,
                                Ge(t.customAttributes, {
                                  image: t.getProductImage(s),
                                  'secondary-image':
                                    t.getSecondaryProductImage(s),
                                  title: s.title,
                                  ribbon: s.ribbon_text,
                                  price: t.getSmallestProductPrice(s),
                                  'is-centered': t.isCentered,
                                  'is-eager': a.isEager && l === 0,
                                  duration: t.getFormattedBookingDuration(
                                    s,
                                    a.translations
                                  ),
                                  'image-width': t.imageWidth,
                                  'image-ratio': a.imageRatio,
                                  'image-hover-effect': a.imageHoverEffect,
                                  'is-store-quantity-tracked':
                                    s.variants[0].manage_inventory,
                                  'is-price-range-shown':
                                    t.isProductPriceRangeShown(s),
                                  quantity: t.getFullProductQuantity({
                                    product: s,
                                    variantsQuantity: a.variantsQuantity,
                                  }),
                                  'product-type': s.type.value,
                                  translations: a.translations,
                                  'is-mobile-view': a.isMobileView,
                                  'is-button-enabled': a.isButtonEnabled,
                                  'button-display': a.buttonDisplay,
                                  'button-text': a.buttonText,
                                  'button-style': a.buttonStyle,
                                  'button-type': a.buttonType,
                                  'button-border-width': a.buttonBorderWidth,
                                  'ribbon-style': a.ribbonStyle,
                                  'is-purchasable': s.purchasable ?? !0,
                                  'site-id': a.siteId,
                                  onClick: (m) => e.$emit('product-click', s),
                                  onButtonClick: (m) =>
                                    e.$emit('button-click', s),
                                }),
                                null,
                                16,
                                [
                                  'image',
                                  'secondary-image',
                                  'title',
                                  'ribbon',
                                  'price',
                                  'is-centered',
                                  'is-eager',
                                  'duration',
                                  'image-width',
                                  'image-ratio',
                                  'image-hover-effect',
                                  'is-store-quantity-tracked',
                                  'is-price-range-shown',
                                  'quantity',
                                  'product-type',
                                  'translations',
                                  'is-mobile-view',
                                  'is-button-enabled',
                                  'button-display',
                                  'button-text',
                                  'button-style',
                                  'button-type',
                                  'button-border-width',
                                  'ribbon-style',
                                  'is-purchasable',
                                  'site-id',
                                  'onClick',
                                  'onButtonClick',
                                ]
                              ),
                            ]),
                            _: 2,
                          },
                          1032,
                          ['to']
                        )
                      )
                    ),
                    128
                  )),
                ]),
                Me(
                  t.ZyroPagination,
                  {
                    'current-page': a.currentPage,
                    'page-count': a.pageCount,
                    class: 'block-product-list__pagination',
                    color: 'var(--body-color)',
                    onChangePage: n[1] || (n[1] = (s) => t.handlePageChange(s)),
                  },
                  null,
                  8,
                  ['current-page', 'page-count']
                ),
              ],
              512
            ))
          : (c(),
            q(
              t.ProductListEmptyState,
              {
                key: 3,
                'text-color-vars': a.textColorVars,
                'empty-page-message': t.emptyPageMessage,
              },
              null,
              8,
              ['text-color-vars', 'empty-page-message']
            )),
      ],
      12,
      zh
    )
  );
}
const tf = oe(jh, [
    ['render', ef],
    ['__scopeId', 'data-v-454e388f'],
  ]),
  ks = (e) => {
    const n = u(() => e.data.settings?.styles),
      a = u(() => e.data.settings?.imageHoverEffect),
      t = u(() => e.data.textColorVars),
      o = u(() => e.data.columnCount),
      i = u(() => e.data.productCategoryId),
      r = u(() => e.data.isButtonEnabled ?? !1),
      s = u(() => e.data.buttonDisplay),
      l = u(() => e.data.buttonText),
      m = u(() => e.data.buttonStyle),
      g = u(() => e.data.buttonType),
      d = u(() => e.data.buttonBorderWidth),
      v = u(() => e.data.ribbonStyle),
      f = u(() => e.data.imageRatio),
      y = u(() => ({
        ...e.data.productSorting,
        sortingOptions: e.data.productSorting?.sortingOptions?.filter(
          (T) => T.isEnabled
        ),
      })),
      S = u(() => e.data.productsPerPage || Op[o.value || Ll]);
    return {
      textColorVars: t,
      blockStyle: n,
      imageHoverEffect: a,
      columnCount: o,
      productsPerPage: S,
      productCategoryId: i,
      isButtonEnabled: r,
      buttonDisplay: s,
      buttonText: l,
      buttonStyle: m,
      buttonType: g,
      buttonBorderWidth: d,
      ribbonStyle: v,
      imageRatio: f,
      productSorting: y,
    };
  },
  af = {
    __name: 'BlockEcommerceProductListProviderUser',
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, default: () => ({}) },
      lcp: { type: Object, default: () => ({}) },
      ecommerceTranslations: { type: Object, default: () => ({}) },
      currentLocale: { type: String, default: Kt },
      blocks: { type: Object, default: () => ({}) },
      isCartVisible: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { meta: t, siteId: o } = Xe(),
        {
          isLoading: i,
          productPages: r,
          isShoppingCartOpen: s,
          shoppingCartItems: l,
          variantsQuantity: m,
          updateVariantsQuantity: g,
          setIsLoading: d,
          setIsLoaded: v,
          setStoreProducts: f,
          setShoppingCartOpen: y,
          setShoppingCartItems: S,
          setIsCheckoutLoading: T,
          setSelectedBookingId: w,
        } = Ut({ blockId: a.blockId }),
        {
          openEcommerceModal: b,
          closeEcommerceModal: L,
          setProductPreviewData: D,
        } = $t(),
        { initiateCheckout: P } = nn(),
        x = M(0),
        B = M(1),
        K = M([]),
        W = M(
          (a.data.productSorting?.enabled &&
            a.data.productSorting?.sortingOptions?.find(
              ({ isEnabled: Pe }) => Pe
            )?.value) ||
            ''
        ),
        C = u(() => a.blocks[a.blockId]?.productIds),
        {
          blockStyle: H,
          textColorVars: F,
          columnCount: Q,
          productsPerPage: N,
          productCategoryId: I,
          isButtonEnabled: U,
          buttonDisplay: V,
          buttonText: j,
          buttonStyle: k,
          buttonType: p,
          buttonBorderWidth: Y,
          ribbonStyle: G,
          imageRatio: ee,
          productSorting: J,
          imageHoverEffect: R,
        } = ks(a),
        _ = async ({ sort: Pe, page: ze }) => {
          const ot = lo(t.value);
          if (ot) {
            v(!1), d(!0);
            try {
              const lt = await br(ot, {
                  productIds: C.value,
                  offset: (ze - 1) * N.value,
                  limit: N.value,
                  collectionId: I.value,
                  sort:
                    !Pe && I.value ? 'order=ASC&sort_by=collection_order' : Pe,
                }),
                Lt = lt.products.map((_t) => _t.id);
              f(lt.products),
                await g(Lt),
                (K.value = lt.products),
                (x.value = Math.ceil(lt.count / lt.limit));
            } catch (lt) {
              console.error(lt);
            } finally {
              d(!1), v(!0);
            }
          }
        },
        ae = M(!1),
        ve = u(() => `store-page-${a.blockId}`),
        le = u(() => !!K.value?.length),
        be = u(() => i.value || !ae.value),
        de = (Pe) => {
          (B.value = Pe), _({ page: Pe, sort: W.value });
        },
        z = (Pe) => {
          const ze = Pe.target.value;
          (W.value = ze), _({ sort: ze, page: B.value });
        },
        ie = async (Pe) => {
          if (a.isInPreviewMode) {
            b('EcommerceMessageButtonDisabled');
            return;
          }
          if (Pe.options.length) {
            const ot = Object.values(r.value).find(
                (_t) => _t.productId === Pe.id
              ),
              Lt = Object.keys(a.blocks)
                .filter((_t) => a.blocks[_t].type === 'BlockEcommerceProduct')
                .find((_t) => ot.blocks.includes(_t));
            if (!Lt) {
              if (!ot) {
                window.location.assign('/');
                return;
              }
              window.location.assign(`/${ot.slug}`);
              return;
            }
            D(a.blocks[Lt]), b('EcommerceProductPreview');
            return;
          }
          const ze = [{ ...Pe, variants: [Pe.variants[0]] }];
          if ((await L(), Pe.type.value === Vt)) {
            w(Pe.id), b('EcommerceBookingEventSelect');
            return;
          }
          if (a.isCartVisible) {
            if ((S([...l.value, ...ze]), s.value)) return;
            y(!0);
          } else
            T(!0),
              await P(ze).then(() => {
                T(!1);
              });
        },
        Ee = () => {
          const ze =
              new URLSearchParams(window.location.search).get(ve.value) || '1',
            ot = Number.parseInt(ze, 10);
          ot !== B.value && (B.value = ot);
        };
      Oe(() => {
        ae.value = !0;
        const ze =
            new URLSearchParams(window.location.search).get(ve.value) || '1',
          ot = Number.parseInt(ze, 10);
        ot !== B.value && ((B.value = ot), de(ot)),
          window.addEventListener('popstate', () => {
            Ee();
          });
      }),
        Tt(() => {
          window.removeEventListener('popstate', Ee);
        }),
        _({ sort: W.value, page: B.value });
      const me = {
        props: a,
        meta: t,
        siteId: o,
        isEcommerceLoading: i,
        productPages: r,
        isShoppingCartOpen: s,
        shoppingCartItems: l,
        variantsQuantity: m,
        updateVariantsQuantity: g,
        setIsLoading: d,
        setIsLoaded: v,
        setStoreProducts: f,
        setShoppingCartOpen: y,
        setShoppingCartItems: S,
        setIsCheckoutLoading: T,
        setSelectedBookingId: w,
        openEcommerceModal: b,
        closeEcommerceModal: L,
        setProductPreviewData: D,
        initiateCheckout: P,
        pageCount: x,
        currentPage: B,
        products: K,
        sorting: W,
        productIds: C,
        blockStyle: H,
        textColorVars: F,
        columnCount: Q,
        productsPerPage: N,
        productCategoryId: I,
        isButtonEnabled: U,
        buttonDisplay: V,
        buttonText: j,
        buttonStyle: k,
        buttonType: p,
        buttonBorderWidth: Y,
        ribbonStyle: G,
        imageRatio: ee,
        productSorting: J,
        imageHoverEffect: R,
        fetchProducts: _,
        isClientLoaded: ae,
        blockStorePageQuery: ve,
        isProductListShown: le,
        isLoading: be,
        handlePageChange: de,
        handleSortChange: z,
        handleButtonClick: ie,
        handleBrowserNavigationPageChange: Ee,
        computed: u,
        ref: M,
        onMounted: Oe,
        onBeforeUnmount: Tt,
        get getStoreProducts() {
          return br;
        },
        get useSiteGlobal() {
          return Xe;
        },
        get getStoreId() {
          return lo;
        },
        get isAppPrerendering() {
          return hl;
        },
        BlockEcommerceProductList: tf,
        get useBlockEcommerceProductList() {
          return ks;
        },
        get SYSTEM_LOCALE() {
          return Kt;
        },
        get useEcommerceModal() {
          return $t;
        },
        get useEcommerce() {
          return nn;
        },
        get PRODUCT_TYPE_BOOKING() {
          return Vt;
        },
        get useEcommerceGlobal() {
          return Ut;
        },
      };
      return (
        Object.defineProperty(me, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        me
      );
    },
  };
function nf(e, n, a, t, o, i) {
  return (
    c(),
    q(
      t.BlockEcommerceProductList,
      {
        'block-id': a.blockId,
        'block-style': t.blockStyle,
        'text-color-vars': t.textColorVars,
        'is-product-list-shown': t.isProductListShown,
        'products-per-page': t.productsPerPage,
        'column-count': t.columnCount,
        'page-count': t.pageCount,
        'current-page': t.currentPage,
        'product-pages': t.productPages,
        'product-category-id': t.productCategoryId,
        'is-button-enabled': t.isButtonEnabled,
        'button-display': t.buttonDisplay,
        'button-text': t.buttonText,
        'button-style': t.buttonStyle,
        'button-type': t.buttonType,
        'button-border-width': t.buttonBorderWidth,
        'is-loading': t.isLoading,
        'ribbon-style': t.ribbonStyle,
        products: t.products,
        translations: a.ecommerceTranslations,
        'image-ratio': t.imageRatio,
        'image-hover-effect': t.imageHoverEffect,
        'is-eager':
          a.lcp.type === 'block-ecommerce-product-list' &&
          a.lcp.id === a.blockId,
        'site-id': t.siteId,
        'variants-quantity': t.variantsQuantity,
        'product-sorting': t.productSorting,
        sorting: t.sorting,
        onPageChanged: t.handlePageChange,
        onSortChanged: t.handleSortChange,
        onButtonClick: t.handleButtonClick,
      },
      null,
      8,
      [
        'block-id',
        'block-style',
        'text-color-vars',
        'is-product-list-shown',
        'products-per-page',
        'column-count',
        'page-count',
        'current-page',
        'product-pages',
        'product-category-id',
        'is-button-enabled',
        'button-display',
        'button-text',
        'button-style',
        'button-type',
        'button-border-width',
        'is-loading',
        'ribbon-style',
        'products',
        'translations',
        'image-ratio',
        'image-hover-effect',
        'is-eager',
        'site-id',
        'variants-quantity',
        'product-sorting',
        'sorting',
      ]
    )
  );
}
const of = oe(af, [['render', nf]]),
  Nl = ({
    move: e = { swipe: !1, drag: !1 },
    onMoveLeft: n = () => {},
    onMoveRight: a = () => {},
    onMoveUp: t = () => {},
    onMoveDown: o = () => {},
  }) => {
    let i = null,
      r = null;
    const s = e.swipe && e.drag,
      l = e.swipe || e.drag;
    function m(T) {
      return T.touches;
    }
    function g(T) {
      const w = m(T)[0];
      (i = w.clientX), (r = w.clientY);
    }
    function d(T) {
      const w = new Image();
      (w.src =
        'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs='),
        T.dataTransfer.setDragImage(w, 0, 0),
        (i = T.clientX),
        (r = T.clientY);
    }
    const v = (T, w) => {
        Math.abs(T) > Math.abs(w) ? (T > 0 ? n() : a()) : w > 0 ? t() : o(),
          (i = null),
          (r = null);
      },
      f = (T) => {
        if (!i || !r) return;
        const w = T.touches[0].clientX,
          b = T.touches[0].clientY,
          L = i - w,
          D = r - b;
        v(L, D);
      },
      y = (T) => {
        if (!i || !r) return;
        const w = i - T.clientX,
          b = r - T.clientY;
        v(w, b);
      };
    return {
      enableMoveEvents: (T = !0, w = null) => {
        const b = w === null ? document : w,
          L = T ? 'addEventListener' : 'removeEventListener';
        if (s)
          b[L]('touchstart', g, !1),
            b[L]('touchmove', f, !1),
            b[L]('dragstart', d, !1),
            b[L]('drag', y, !1);
        else if (l) {
          const D = e.swipe ? g : d,
            P = e.swipe ? f : y;
          b[L](e.swipe ? 'touchstart' : 'dragstart', D, !1),
            b[L](e.swipe ? 'touchmove' : 'drag', P, !1);
        }
      },
    };
  },
  rf = re({
    components: { ProductImage: bo, ProductImagePlaceholder: Hl },
    props: {
      images: { type: Array, required: !0 },
      productTitle: { type: String, required: !0 },
      arrowsColor: { type: String, default: 'unset' },
      navigationThumbnailArrowsColor: { type: String, default: 'unset' },
      galleryPlacement: { type: String, default: 'left' },
      imageRatio: { type: String, default: 'unset' },
      imageBorderRadius: { type: String, default: 'unset' },
      isEager: { type: Boolean, default: !1 },
      variantImage: { type: String, default: null },
      isQuickPreview: { type: Boolean, default: !1 },
      isVariantImagePreselected: { type: Boolean, default: !1 },
      siteId: { type: String, default: null },
    },
    emits: ['image-click'],
    data() {
      return {
        PRODUCT_IMAGE_MAX_WIDTH_SMALL_PX: Oi,
        windowWidth: null,
        slideDirection: '',
        currentIndex: 0,
        imageListStartIndex: 0,
      };
    },
    computed: {
      imagePreviewAmount() {
        let e = 0;
        switch (!0) {
          case this.windowWidth < (this.isGalleryLeft ? 920 : 900):
            e = 4;
            break;
          case this.windowWidth < (this.isGalleryLeft ? 1060 : 1020):
            e = 5;
            break;
          case this.windowWidth < (this.isGalleryLeft ? 1250 : 1160):
            e = 6;
            break;
          case this.windowWidth < (this.isGalleryLeft ? 1400 : 1320):
            e = 7;
            break;
          default:
            e = this.isGalleryLeft ? 7 : 8;
        }
        return this.imageListStartIndex !== 0 &&
          this.imageListStartIndex + e < this.images.length
          ? e - 1
          : e;
      },
      isGalleryLeft() {
        return this.galleryPlacement === 'left';
      },
      thumbnails() {
        return this.images.slice(
          this.imageListStartIndex,
          this.imageListStartIndex + this.imagePreviewAmount
        );
      },
      isThumbnailVisible() {
        return this.thumbnails.some(
          (e) => e.url === this.images[this.currentIndex].url
        );
      },
      isArrowsShown() {
        return this.isMoreThanOneImage && !this.isQuickPreview;
      },
      isRightImageArrowShown() {
        return this.images.length < this.imagePreviewAmount
          ? !1
          : this.imageListStartIndex + this.imagePreviewAmount <
              this.images.length;
      },
      isMoreThanOneImage() {
        return this.images.length > 1;
      },
      imageMaxWidth() {
        return this.isQuickPreview ? uc : cc;
      },
      carouselStyle() {
        return {
          '--image-max-width': `${this.imageMaxWidth}px`,
          '--image-max-width-left': `${dc}px`,
          '--image-max-width-small': `${Oi}px`,
          '--image-object-fit': this.imageRatio,
          '--image-border-radius':
            this.imageRatio === 'cover' ? this.imageBorderRadius : 0,
          '--image-position':
            this.imageRatio === 'cover' ? 'absolute' : 'relative',
          '--arrow-color': this.arrowsColor,
          '--thumbnail-arrow-color': this.navigationThumbnailArrowsColor,
        };
      },
    },
    watch: {
      variantImage() {
        this.setVariantImage(),
          this.isThumbnailVisible || this.presetThumbnailPosition();
      },
    },
    mounted() {
      (this.windowWidth = window.innerWidth),
        window.addEventListener('resize', this.resizeEventHandler),
        this.isVariantImagePreselected && this.setVariantImage(),
        this.enableCarouselMoveEvents(!0);
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.resizeEventHandler),
        this.enableCarouselMoveEvents(!1);
    },
    methods: {
      resizeEventHandler() {
        (this.windowWidth = window.innerWidth),
          this.imagePreviewAmount < this.images.length &&
            this.presetThumbnailPosition();
      },
      presetThumbnailPosition() {
        this.images.length - this.currentIndex < this.imagePreviewAmount
          ? (this.imageListStartIndex =
              this.images.length - this.imagePreviewAmount)
          : (this.imageListStartIndex = this.currentIndex);
      },
      isImageMatch(e) {
        return this.thumbnails[e].url === this.images[this.currentIndex].url;
      },
      handleThumbnailClick(e) {
        this.currentIndex = this.images.findIndex(
          (n) => n.url === this.thumbnails[e].url
        );
      },
      goToNextSlide() {
        (this.slideDirection = 'right'),
          (this.currentIndex =
            this.currentIndex === this.images.length - 1
              ? 0
              : this.currentIndex + 1),
          this.isThumbnailVisible ||
            (this.imageListStartIndex + this.imagePreviewAmount ===
            this.images.length
              ? (this.imageListStartIndex = 0)
              : (this.presetThumbnailPosition(),
                this.imagePreviewAmount !== this.thumbnails.length &&
                  this.presetThumbnailPosition()));
      },
      goToPreviousSlide() {
        (this.slideDirection = 'left'),
          (this.currentIndex =
            this.currentIndex === 0
              ? this.images.length - 1
              : this.currentIndex - 1),
          this.isThumbnailVisible ||
            (this.imageListStartIndex === 0
              ? (this.imageListStartIndex =
                  this.images.length - this.imagePreviewAmount)
              : this.presetThumbnailPosition());
      },
      moveImageListRight() {
        const e = this.imagePreviewAmount;
        this.imageListStartIndex += 1;
        const n = this.imagePreviewAmount;
        e !== n && this.isRightImageArrowShown && this.moveImageListRight();
      },
      moveImageListLeft() {
        this.imageListStartIndex -= 1;
      },
      enableCarouselMoveEvents(e) {
        if (!this.isMoreThanOneImage) return;
        const { enableMoveEvents: n } = Nl({
          move: { drag: !1, swipe: !0 },
          onMoveLeft: () => this.goToNextSlide(),
          onMoveRight: () => this.goToPreviousSlide(),
        });
        n(e, this.$refs.carouselRef);
      },
      setVariantImage() {
        const e = this.images.findIndex((n) => n.url === this.variantImage);
        e > -1 && (this.currentIndex = e);
      },
    },
  }),
  sf = E(
    'span',
    { class: 'product-carousel__arrow product-carousel__arrow--left' },
    null,
    -1
  ),
  lf = [sf],
  uf = E(
    'span',
    { class: 'product-carousel__arrow product-carousel__arrow--right' },
    null,
    -1
  ),
  cf = [uf],
  df = ['onClick'],
  mf = { class: 'product-carousel__dots-wrapper' },
  gf = ['onClick'];
function vf(e, n, a, t, o, i) {
  const r = Be('ProductImage'),
    s = Be('ProductImagePlaceholder'),
    l = je('qa');
  return (
    c(),
    h(
      'div',
      {
        class: Z([
          'product-carousel',
          { 'product-carousel--left': e.isGalleryLeft },
        ]),
        style: Ae(e.carouselStyle),
      },
      [
        E(
          'div',
          {
            ref: 'carouselRef',
            class: Z([
              'product-carousel__image-wrapper',
              {
                'product-carousel__image-wrapper--contain':
                  e.imageRatio === 'contain',
              },
            ]),
          },
          [
            e.isArrowsShown
              ? (c(),
                h(
                  ge,
                  { key: 0 },
                  [
                    ue(
                      (c(),
                      h(
                        'button',
                        {
                          class:
                            'product-carousel__slider-button product-carousel__slider-button--left',
                          onClick:
                            n[0] ||
                            (n[0] = (...m) =>
                              e.goToPreviousSlide && e.goToPreviousSlide(...m)),
                        },
                        lf
                      )),
                      [[l, 'product-carousel-button-prev']]
                    ),
                    ue(
                      (c(),
                      h(
                        'button',
                        {
                          class:
                            'product-carousel__slider-button product-carousel__slider-button--right',
                          onClick:
                            n[1] ||
                            (n[1] = (...m) =>
                              e.goToNextSlide && e.goToNextSlide(...m)),
                        },
                        cf
                      )),
                      [[l, 'product-carousel-button-next']]
                    ),
                  ],
                  64
                ))
              : O('', !0),
            e.images.length
              ? (c(),
                q(
                  Ot,
                  {
                    key: 1,
                    name: `slide-${e.slideDirection}`,
                    mode: 'out-in',
                    class: 'product-carousel__image-content',
                  },
                  {
                    default: he(() => [
                      (c(),
                      q(
                        r,
                        {
                          key: e.images[e.currentIndex].url,
                          src: e.images[e.currentIndex].url,
                          alt: e.productTitle,
                          class:
                            'product-carousel__image product-carousel__main-image',
                          'is-eager': e.isEager,
                          'object-fit': e.imageRatio,
                          width: e.imageMaxWidth,
                          height: e.imageMaxWidth,
                          'enable-srcset': '',
                          onClick:
                            n[2] ||
                            (n[2] = (m) =>
                              e.$emit('image-click', e.currentIndex)),
                        },
                        null,
                        8,
                        [
                          'src',
                          'alt',
                          'is-eager',
                          'object-fit',
                          'width',
                          'height',
                        ]
                      )),
                    ]),
                    _: 1,
                  },
                  8,
                  ['name']
                ))
              : (c(),
                q(s, {
                  key: 2,
                  class: 'product-carousel__image product-carousel__main-image',
                })),
          ],
          2
        ),
        e.isMoreThanOneImage
          ? (c(),
            h(
              ge,
              { key: 0 },
              [
                e.isQuickPreview
                  ? O('', !0)
                  : (c(),
                    h(
                      'div',
                      {
                        key: 0,
                        class: Z([
                          'product-carousel__image-list',
                          {
                            'product-carousel__image-list-left':
                              e.isGalleryLeft,
                          },
                        ]),
                      },
                      [
                        e.imageListStartIndex !== 0
                          ? ue(
                              (c(),
                              h(
                                'button',
                                {
                                  key: 0,
                                  class: Z([
                                    'product-carousel__image-arrow',
                                    {
                                      'product-carousel__image-arrow--left':
                                        !e.isGalleryLeft,
                                      'product-carousel__image-arrow--top':
                                        e.isGalleryLeft,
                                    },
                                  ]),
                                  onClick:
                                    n[3] ||
                                    (n[3] = (...m) =>
                                      e.moveImageListLeft &&
                                      e.moveImageListLeft(...m)),
                                },
                                null,
                                2
                              )),
                              [[l, 'product-carousel-image-button-left']]
                            )
                          : O('', !0),
                        E(
                          'div',
                          {
                            class: Z({
                              'product-carousel__image-list-element-wrapper-left':
                                e.isGalleryLeft,
                            }),
                          },
                          [
                            (c(!0),
                            h(
                              ge,
                              null,
                              ke(
                                e.thumbnails,
                                (m, g) => (
                                  c(),
                                  h(
                                    'button',
                                    {
                                      key: `image-${g}-${m.url}`,
                                      class: Z([
                                        'product-carousel__image-list-element',
                                        {
                                          'product-carousel__image-list-element--active':
                                            e.isImageMatch(g),
                                        },
                                      ]),
                                      onClick: (d) => e.handleThumbnailClick(g),
                                    },
                                    [
                                      Me(
                                        r,
                                        {
                                          src: m.url,
                                          alt: e.productTitle,
                                          class: 'product-carousel__image',
                                          'is-eager': e.isEager,
                                          'object-fit': e.imageRatio,
                                          'site-id': e.siteId,
                                          width:
                                            e.PRODUCT_IMAGE_MAX_WIDTH_SMALL_PX,
                                          height:
                                            e.PRODUCT_IMAGE_MAX_WIDTH_SMALL_PX,
                                        },
                                        null,
                                        8,
                                        [
                                          'src',
                                          'alt',
                                          'is-eager',
                                          'object-fit',
                                          'site-id',
                                          'width',
                                          'height',
                                        ]
                                      ),
                                    ],
                                    10,
                                    df
                                  )
                                )
                              ),
                              128
                            )),
                          ],
                          2
                        ),
                        e.isRightImageArrowShown
                          ? ue(
                              (c(),
                              h(
                                'button',
                                {
                                  key: 1,
                                  class: Z([
                                    'product-carousel__image-arrow',
                                    {
                                      'product-carousel__image-arrow--right':
                                        !e.isGalleryLeft,
                                      'product-carousel__image-arrow--bottom':
                                        e.isGalleryLeft,
                                    },
                                  ]),
                                  onClick:
                                    n[4] ||
                                    (n[4] = (...m) =>
                                      e.moveImageListRight &&
                                      e.moveImageListRight(...m)),
                                },
                                null,
                                2
                              )),
                              [[l, 'product-carousel-image-button-right']]
                            )
                          : O('', !0),
                      ],
                      2
                    )),
                E('div', mf, [
                  (c(!0),
                  h(
                    ge,
                    null,
                    ke(
                      e.images,
                      (m, g) => (
                        c(),
                        h(
                          'button',
                          {
                            key: `image-dot-${g}`,
                            class: 'product-carousel__dot-button',
                            onClick: (d) => (e.currentIndex = g),
                          },
                          [
                            E(
                              'span',
                              {
                                class: Z([
                                  'product-carousel__dot',
                                  {
                                    'product-carousel__dot--active':
                                      g === e.currentIndex,
                                  },
                                ]),
                              },
                              null,
                              2
                            ),
                          ],
                          8,
                          gf
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ],
              64
            ))
          : O('', !0),
      ],
      6
    )
  );
}
const pf = oe(rf, [['render', vf]]),
  hf = re({
    __name: 'OptionSelect',
    props: {
      title: {},
      labelKey: { default: 'value' },
      options: { default: () => ({}) },
      value: { default: '' },
    },
    emits: ['set-value'],
    setup(e, { expose: n, emit: a }) {
      n();
      const t = a,
        i = {
          emit: t,
          updateSelectedValue: (r) => {
            const s = r.target?.value;
            t('set-value', s);
          },
        };
      return (
        Object.defineProperty(i, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  ff = { class: 'option-select' },
  yf = { class: 'option-select__label' },
  bf = { class: 'option-select__select-wrapper' },
  _f = ['value'],
  wf = ['value'];
function kf(e, n, a, t, o, i) {
  const r = je('qa');
  return (
    c(),
    h('div', ff, [
      E('p', yf, X(a.title), 1),
      E('div', bf, [
        ue(
          (c(),
          h(
            'select',
            {
              value: a.value,
              class: 'option-select__select',
              onChange: n[0] || (n[0] = (s) => t.updateSelectedValue(s)),
            },
            [
              (c(!0),
              h(
                ge,
                null,
                ke(
                  a.options,
                  (s, l) => (
                    c(),
                    h(
                      'option',
                      { key: `option-${l}`, value: s.id },
                      X(s[a.labelKey]),
                      9,
                      wf
                    )
                  )
                ),
                128
              )),
            ],
            40,
            _f
          )),
          [[r, 'product-section-select-button']]
        ),
      ]),
    ])
  );
}
const Sf = oe(hf, [
    ['render', kf],
    ['__scopeId', 'data-v-4f73632f'],
  ]),
  Tf = {
    props: {
      imageBorderRadius: { type: String, default: '0' },
      textAlign: { type: String, default: '' },
    },
    computed: {
      computedStyles() {
        return { '--image-border-radius': this.imageBorderRadius };
      },
    },
  },
  $l = (e) => (Bt('data-v-56d737b7'), (e = e()), xt(), e),
  Cf = $l(() => E('div', { class: 'skeleton-loader__image' }, null, -1)),
  Pf = $l(() =>
    E(
      'div',
      { class: 'skeleton-loader__title skeleton-loader__text' },
      null,
      -1
    )
  );
function If(e, n, a, t, o, i) {
  return (
    c(),
    h(
      'div',
      { class: 'skeleton-loader', style: Ae(i.computedStyles) },
      [
        Cf,
        E(
          'div',
          {
            class: Z([
              'skeleton-loader__wrapper',
              { 'skeleton-loader__wrapper--center': a.textAlign === 'center' },
            ]),
          },
          [
            Pf,
            (c(),
            h(
              ge,
              null,
              ke(10, (r) =>
                E('div', { key: r, class: 'skeleton-loader__text' })
              ),
              64
            )),
          ],
          2
        ),
      ],
      4
    )
  );
}
const Ef = oe(Tf, [
    ['render', If],
    ['__scopeId', 'data-v-56d737b7'],
  ]),
  Df = re({
    name: 'QuantityPicker',
    props: {
      qaSelector: { type: String, default: '' },
      isStockAvailable: { type: Boolean, default: !0 },
      quantity: { type: Number, required: !0 },
      size: { type: Number, default: 48 },
      fontSize: { type: Number, default: 16 },
      isCartStyle: { type: Boolean, default: !1 },
      isInputDisabled: { type: Boolean, default: !1 },
      isLimitReached: { type: Boolean, default: !1 },
    },
    emits: ['quantity-change'],
    data() {
      return { inputValue: this.quantity };
    },
    computed: {
      computedStyles() {
        return {
          '--size': `${this.size}px`,
          '--font-size': `${this.fontSize}px`,
        };
      },
      isIncreaseDisabled() {
        return !this.isStockAvailable || this.isLimitReached;
      },
    },
    watch: {
      quantity(e) {
        this.inputValue = e;
      },
    },
    methods: {
      handleQuantityInput(e) {
        const n = e.target?.value;
        if (n.match(Vc)) this.$emit('quantity-change', Number(e.target.value));
        else if (n === '') return;
        this.inputValue = this.quantity;
      },
      handleEmptyInput(e) {
        e.target?.value === '' &&
          (this.$emit('quantity-change', 1), (this.inputValue = 1));
      },
    },
  }),
  Mf = ['disabled'],
  Of = ['disabled'];
function Lf(e, n, a, t, o, i) {
  const r = je('qa');
  return (
    c(),
    h(
      'span',
      {
        class: Z([
          'quantity-picker',
          { 'quantity-picker--cart-style': e.isCartStyle },
        ]),
        style: Ae(e.computedStyles),
      },
      [
        ue(
          (c(),
          h(
            'button',
            {
              class: Z([
                'quantity-picker__control',
                {
                  'quantity-picker__control--rounded quantity-picker__control--bigger':
                    e.isCartStyle,
                },
              ]),
              onClick:
                n[0] ||
                (n[0] = (s) => e.$emit('quantity-change', e.quantity - 1)),
            },
            [He(' - ')],
            2
          )),
          [[r, `${e.qaSelector}-btn-decrease`]]
        ),
        ue(
          E(
            'input',
            {
              'onUpdate:modelValue': n[1] || (n[1] = (s) => (e.inputValue = s)),
              disabled: e.isInputDisabled,
              class: Z([
                'quantity-picker__amount',
                { 'quantity-picker__amount--borderless': e.isCartStyle },
              ]),
              onInput:
                n[2] ||
                (n[2] = (...s) =>
                  e.handleQuantityInput && e.handleQuantityInput(...s)),
              onBlur:
                n[3] ||
                (n[3] = (...s) =>
                  e.handleEmptyInput && e.handleEmptyInput(...s)),
            },
            null,
            42,
            Mf
          ),
          [
            [al, e.inputValue],
            [r, `${e.qaSelector}-text-qty`],
          ]
        ),
        ue(
          (c(),
          h(
            'button',
            {
              class: Z([
                'quantity-picker__control',
                {
                  'quantity-picker__control--rounded quantity-picker__control--bigger':
                    e.isCartStyle,
                },
              ]),
              disabled: e.isIncreaseDisabled,
              onClick:
                n[4] ||
                (n[4] = (s) => e.$emit('quantity-change', e.quantity + 1)),
            },
            [He(' + ')],
            10,
            Of
          )),
          [[r, `${e.qaSelector}-btn-increaseq`]]
        ),
      ],
      6
    )
  );
}
const Vl = oe(Df, [
    ['render', Lf],
    ['__scopeId', 'data-v-9766ec29'],
  ]),
  qo = 5,
  _n = 1,
  Af = re({
    __name: 'BlockEcommerceProduct',
    props: {
      blockId: {},
      productData: {},
      blockStyle: { default: () => ({}) },
      textColorVars: { default: () => ({}) },
      blockButtonText: { default: '' },
      blockButtonStyle: { default: () => ({}) },
      blockButtonType: { default: 'primary' },
      blockButtonBorderWidth: { default: 0 },
      navigationArrowsColor: { default: '' },
      navigationThumbnailArrowsColor: { default: '' },
      galleryPlacement: { default: '' },
      imageRatio: { default: 'cover' },
      imageBorderRadius: { default: '0%' },
      isLoading: { type: Boolean, default: !1 },
      isCheckoutLoading: { type: Boolean, default: !1 },
      canAddToCart: { type: Function, default: () => !0 },
      isEager: { type: Boolean, default: !1 },
      translations: {},
      quantifiedCartItemsList: { default: () => [] },
      isQuantityPickerEnabled: { type: Boolean },
      productPages: { default: () => ({}) },
      isQuickPreview: { type: Boolean, default: !1 },
      isCartVisible: { type: Boolean },
      siteId: {},
      shoppingCartItems: { default: () => [] },
      variantsQuantity: {},
      currentPageType: { default: 'default' },
    },
    emits: ['buy-button-click', 'click-more', 'image-click'],
    setup(e, { expose: n, emit: a }) {
      n(), it((_) => ({ a6b208e6: g.value }));
      const t = { [pa]: gn },
        o = e,
        i = a,
        r = M(1),
        s = M(''),
        l = M(!1),
        m = M(da),
        g = u(() => `${Qt}px`),
        d = u(() => o.currentPageType === cl),
        v = u(() => ({
          normal:
            o.blockButtonStyle[
              `grid-button-${o.blockButtonType}-background-color`
            ],
          hover:
            o.blockButtonStyle[
              `grid-button-${o.blockButtonType}-background-color-hover`
            ],
        })),
        f = u(() => ({
          hover:
            o.blockButtonStyle[
              `grid-button-${o.blockButtonType}-border-color-hover`
            ],
          normal:
            o.blockButtonStyle[`grid-button-${o.blockButtonType}-border-color`],
        })),
        y = u(() => o.blockStyle?.textAlign),
        S = u(() => o.productData),
        T = u(() =>
          S.value.options.length
            ? S.value.options.map((_) => ({
                ..._.values.filter(
                  (ae, ve, le) =>
                    le.findIndex((be) => be.value === ae.value) === ve
                ),
              }))
            : []
        ),
        w = u(() => m.value?.variants[0]),
        b = u(
          () =>
            o.productData.purchasable === void 0 || o.productData.purchasable
        ),
        L = (_) => {
          const ae = w.value?.options.find(
            (ve) => ve.option_id === T.value[_][0].option_id
          );
          return Object.values(T.value[_]).find((ve) => ae?.value === ve.value)
            ?.id;
        },
        D = u(() =>
          m.value.id ? w.value?.prices[0] : S.value?.variants[0].prices[0]
        ),
        P = u(
          () =>
            o.quantifiedCartItemsList.find(
              (_) => _.product.variants[0].id === w.value?.id
            )?.quantity || 0
        ),
        x = u(() => (o.isCartVisible ? r.value + P.value : r.value)),
        B = u(() =>
          w.value?.manage_inventory
            ? x.value <
              Pn({
                variantsQuantity: o.variantsQuantity,
                variantId: w.value?.id,
              })
            : !0
        ),
        K = u(() => ({ ...Nt({ ...o.textColorVars, ...o.blockButtonStyle }) })),
        W = u(
          () => !S.value?.options.length || (S.value?.options.length && m.value)
        ),
        C = u(() => S.value?.type.value === Vt),
        H = u(
          () =>
            C.value && o.shoppingCartItems?.some((_) => _.id === S.value?.id)
        ),
        F = u(
          () => H.value || !o.canAddToCart(S.value?.id, m.value?.variants[0].id)
        ),
        Q = u(() =>
          H.value
            ? `✓ ${o.translations.booked}`
            : o.blockButtonText || o.translations?.addToBag || 'Add to bag'
        ),
        N = u(() => S.value?.variants[0].booking_event?.location),
        I = u(() => Zr(S.value, o.translations)),
        U = u(
          () =>
            w.value?.manage_inventory &&
            Pn({
              variantsQuantity: o.variantsQuantity,
              variantId: w.value?.id,
            }) === 0
        ),
        V = u(() => !!w.value?.manage_inventory),
        j = u(() => {
          if (!o.productPages) return '/';
          const _ = Object.values(o.productPages).find(
            (ae) => ae.productId === S.value.id
          );
          return _ ? `/${_.slug}` : '/';
        }),
        k = u(() => {
          const _ = Pn({
            variantsQuantity: o.variantsQuantity,
            variantId: w.value?.id,
          });
          return U.value || P.value === _
            ? o.translations.outOfStock
            : `${_ <= qo ? _ : `${qo}+`} ${o.translations.inStock} `;
        }),
        p = (_) => ({ ...S.value, variants: [_] }),
        Y = () => {
          if (!S.value) return da;
          if (S.value[Sl] === zr) {
            const ae = S.value.variants.reduce((be, de) => {
                const z = be.prices[0]?.sale_amount || be.prices[0]?.amount,
                  ie = de.prices[0]?.sale_amount || de.prices[0]?.amount;
                return z <= ie ? be : de;
              }),
              ve = T.value.map(
                (be) =>
                  Object.values(be).find((de) =>
                    ae.options.some((z) => z.value === de.value)
                  ) || {}
              ),
              le = { ...ae, options: [...ve] };
            return p(le);
          }
          const _ = S.value.variants.find((ae) =>
            ae.options.every((ve) =>
              T.value.some((le) => le[0].value === ve.value)
            )
          );
          return p(_ || S.value.variants[0]);
        },
        G = () => {
          const _ = new Array(r.value).fill(m.value);
          (r.value = _n), i('buy-button-click', _);
        },
        ee = (_) => {
          r.value = _n;
          const ae =
              S.value.options
                .map((de) => de.values.find((z) => z.id === _))
                .find((de) => de) || {},
            le = [
              ...w.value?.options.filter((de) => de.option_id !== ae.option_id),
              ae,
            ],
            be = S.value.variants.find((de) =>
              de.options.every((z) =>
                le.some(
                  (ie) => ie.value === z.value && ie.option_id === z.option_id
                )
              )
            );
          be && (m.value = p(be));
        },
        J = (_) => {
          const ae = w.value?.manage_inventory;
          if (((l.value = o.shoppingCartItems.length + _ >= Za), ae)) {
            const ve = Pn({
              variantsQuantity: o.variantsQuantity,
              variantId: w.value?.id,
            });
            if (P.value + _ > ve || l.value) {
              const le = Math.min(
                ve - P.value,
                Za - o.shoppingCartItems.length
              );
              r.value = le;
              return;
            }
          } else if (l.value) {
            r.value = Za - o.shoppingCartItems.length;
            return;
          }
          if (_ <= 0) {
            r.value = _n;
            return;
          }
          r.value = _;
        };
      Oe(() => {
        S.value && (m.value = Y());
      }),
        Re(S, (_, ae) => {
          JSON.stringify(_) !== JSON.stringify(ae) && (m.value = Y());
        }),
        Re(m, (_, ae) => {
          (ae?.id === -1 && !_?.site_product_selection) ||
            (JSON.stringify(_) !== JSON.stringify(ae) &&
              _?.variants[0].image_url &&
              (s.value = _.variants[0].image_url));
        }),
        Re(
          () => o.shoppingCartItems,
          (_) => {
            const ae = _?.length || 0;
            (r.value = _n), (l.value = ae + r.value >= Za);
          },
          { immediate: !0 }
        );
      const R = {
        MAX_STOCK_AMOUNT_TO_SHOW: qo,
        DEFAULT_PICKER_VALUE: _n,
        CUSTOM_ATTRIBUTES: t,
        props: o,
        emit: i,
        selectedQuantity: r,
        variantImage: s,
        isLimitReached: l,
        selectedVariant: m,
        mobileMaxWidthCSSVar: g,
        isBlockInProductPage: d,
        buttonBackgroundColor: v,
        buttonBorderColor: f,
        textAlign: y,
        productData: S,
        uniqueOptionSelections: T,
        selectedValueVariant: w,
        isPurchasable: b,
        selectedOption: L,
        priceData: D,
        quantityInCart: P,
        totalQuantitySelected: x,
        isStockAvailable: B,
        computedStyles: K,
        isPriceShown: W,
        isProductTypeBooking: C,
        isBookingProductInCart: H,
        isAddToCartDisabled: F,
        buttonText: Q,
        location: N,
        formattedBookingDuration: I,
        isOutOfStock: U,
        isStockInfoShown: V,
        productPagePath: j,
        stockInfoText: k,
        getProductWithSelectedVariant: p,
        getInitiallySelectedVariant: Y,
        handleButtonClick: G,
        handleVariantOptionChange: ee,
        handleQuantityChange: J,
        Carousel: pf,
        OptionSelect: Sf,
        GridButton: Ya,
        get formatPrice() {
          return Ta;
        },
        get isProductPriceRangeShown() {
          return Mn;
        },
        ProductSkeletonLoader: Ef,
        QuantityPicker: Vl,
      };
      return (
        Object.defineProperty(R, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        R
      );
    },
  }),
  Bf = ['id'],
  xf = { class: 'block-product__content-wrapper' },
  Rf = { class: 'block-product__price-data-wrapper' },
  Hf = { key: 0, class: 'block-product__title' },
  Nf = { key: 1, class: 'block-product__title' },
  $f = { class: 'block-product__subtitle' },
  Vf = { class: 'block-product__additional-info' },
  Uf = { key: 0, class: 'block-product__price body-large' },
  Yf = { key: 1, class: 'block-product__duration body-large' },
  Ff = { key: 3, class: 'block-product__location' },
  Wf = { key: 4, class: 'block-product__option-select-wrapper' },
  qf = { key: 0, class: 'block-product__stock-text' },
  Gf = { key: 0, class: 'block-product__button-wrapper' },
  jf = { key: 0, class: 'block-product__notice' },
  zf = ['innerHTML'];
function Kf(e, n, a, t, o, i) {
  const r = Be('RouterLink'),
    s = je('qa');
  return (
    c(),
    h(
      'div',
      Ge(
        { id: a.blockId, class: 'block-product-wrapper' },
        t.CUSTOM_ATTRIBUTES
      ),
      [
        a.isLoading || !t.productData
          ? (c(),
            q(
              t.ProductSkeletonLoader,
              {
                key: 0,
                'image-border-radius': a.imageBorderRadius,
                'text-align': t.textAlign,
              },
              null,
              8,
              ['image-border-radius', 'text-align']
            ))
          : (c(),
            h(
              'div',
              {
                key: 1,
                class: Z([
                  'block-product',
                  {
                    'block-product--centered': t.textAlign === 'center',
                    'block-product--in-preview': a.isQuickPreview,
                  },
                ]),
                style: Ae(t.computedStyles),
              },
              [
                Me(
                  t.Carousel,
                  {
                    images: t.productData.images,
                    'product-title': t.productData.title,
                    'arrows-color': a.navigationArrowsColor,
                    'navigation-thumbnail-arrows-color':
                      a.navigationThumbnailArrowsColor,
                    'gallery-placement': a.galleryPlacement,
                    'image-ratio': a.imageRatio,
                    'image-border-radius': a.imageBorderRadius,
                    'is-eager': a.isEager,
                    'site-id': a.siteId,
                    'variant-image': t.variantImage,
                    'is-quick-preview': a.isQuickPreview,
                    'is-variant-image-preselected': t.isProductPriceRangeShown(
                      t.productData
                    ),
                    onImageClick:
                      n[0] || (n[0] = (l) => e.$emit('image-click', l)),
                  },
                  null,
                  8,
                  [
                    'images',
                    'product-title',
                    'arrows-color',
                    'navigation-thumbnail-arrows-color',
                    'gallery-placement',
                    'image-ratio',
                    'image-border-radius',
                    'is-eager',
                    'site-id',
                    'variant-image',
                    'is-quick-preview',
                    'is-variant-image-preselected',
                  ]
                ),
                E('div', xf, [
                  E('div', Rf, [
                    t.isBlockInProductPage
                      ? ue(
                          (c(), h('h1', Hf, [He(X(t.productData.title), 1)])),
                          [[s, 'builder-product-section-title']]
                        )
                      : ue(
                          (c(), h('h3', Nf, [He(X(t.productData.title), 1)])),
                          [[s, 'builder-product-section-title']]
                        ),
                    E('h5', $f, X(t.productData.subtitle), 1),
                    Object.keys(t.priceData || {})?.length
                      ? (c(),
                        h(
                          'div',
                          {
                            key: 2,
                            class: Z([
                              'block-product__price-wrapper',
                              {
                                'block-product__price-wrapper--with-duration':
                                  t.isProductTypeBooking,
                              },
                            ]),
                          },
                          [
                            t.isPriceShown
                              ? (c(),
                                h(
                                  'p',
                                  {
                                    key: 0,
                                    class: Z([
                                      'block-product__price body-large',
                                      {
                                        'block-product__price--sale':
                                          t.priceData.sale_amount,
                                      },
                                    ]),
                                  },
                                  X(
                                    t.formatPrice({
                                      amount: t.priceData.amount,
                                      currency: t.priceData.currency,
                                    })
                                  ),
                                  3
                                ))
                              : O('', !0),
                            E('div', Vf, [
                              t.priceData.sale_amount && t.isPriceShown
                                ? (c(),
                                  h(
                                    'p',
                                    Uf,
                                    X(
                                      t.formatPrice({
                                        amount: t.priceData.sale_amount,
                                        currency: t.priceData.currency,
                                      })
                                    ),
                                    1
                                  ))
                                : O('', !0),
                              t.isProductTypeBooking
                                ? (c(),
                                  h('p', Yf, X(t.formattedBookingDuration), 1))
                                : O('', !0),
                            ]),
                          ],
                          2
                        ))
                      : O('', !0),
                    t.isProductTypeBooking
                      ? (c(), h('p', Ff, X(t.location), 1))
                      : O('', !0),
                    t.productData.options.length
                      ? (c(),
                        h('div', Wf, [
                          (c(!0),
                          h(
                            ge,
                            null,
                            ke(
                              t.productData.options,
                              (l, m) => (
                                c(),
                                q(
                                  t.OptionSelect,
                                  {
                                    key: `option-${m}`,
                                    value: t.selectedOption(m),
                                    options: t.uniqueOptionSelections[m],
                                    title: l.title,
                                    class: Z([
                                      'block-product__option-select',
                                      {
                                        'block-product__option-select--centered':
                                          t.textAlign === 'center',
                                      },
                                    ]),
                                    'label-key': 'value',
                                    onSetValue:
                                      n[1] ||
                                      (n[1] = (g) =>
                                        t.handleVariantOptionChange(g)),
                                  },
                                  null,
                                  8,
                                  ['value', 'options', 'title', 'class']
                                )
                              )
                            ),
                            128
                          )),
                        ]))
                      : O('', !0),
                    !t.isProductTypeBooking &&
                    a.isQuantityPickerEnabled &&
                    t.isPurchasable
                      ? (c(),
                        h(
                          'div',
                          {
                            key: 5,
                            class: Z([
                              'block-product__quantity-wrapper',
                              {
                                'block-product__quantity-wrapper--disabled':
                                  t.isOutOfStock || t.isAddToCartDisabled,
                              },
                            ]),
                          },
                          [
                            Me(
                              t.QuantityPicker,
                              {
                                'qa-selector': 'productpage',
                                quantity: t.selectedQuantity,
                                'is-limit-reached': t.isLimitReached,
                                'is-stock-available': t.isStockAvailable,
                                onQuantityChange: t.handleQuantityChange,
                              },
                              null,
                              8,
                              [
                                'quantity',
                                'is-limit-reached',
                                'is-stock-available',
                              ]
                            ),
                            t.isStockInfoShown
                              ? (c(), h('p', qf, X(t.stockInfoText), 1))
                              : O('', !0),
                          ],
                          2
                        ))
                      : O('', !0),
                  ]),
                  t.isPurchasable
                    ? (c(),
                      h('div', Gf, [
                        ue(
                          Me(
                            t.GridButton,
                            {
                              type: a.blockButtonType,
                              content: t.buttonText,
                              class: Z([
                                'block-product__button',
                                `block-product__button--${a.blockButtonType}`,
                              ]),
                              'is-loading': a.isCheckoutLoading,
                              'tag-name': 'button',
                              disabled: t.isAddToCartDisabled,
                              'border-width': a.blockButtonBorderWidth,
                              'border-color': t.buttonBorderColor.normal,
                              'border-color-hover': t.buttonBorderColor.hover,
                              'background-color':
                                t.buttonBackgroundColor.normal,
                              'background-color-hover':
                                t.buttonBackgroundColor.hover,
                              onClick: t.handleButtonClick,
                            },
                            null,
                            8,
                            [
                              'type',
                              'content',
                              'class',
                              'is-loading',
                              'disabled',
                              'border-width',
                              'border-color',
                              'border-color-hover',
                              'background-color',
                              'background-color-hover',
                            ]
                          ),
                          [[s, 'productsection-btn-addtobag']]
                        ),
                      ]))
                    : O('', !0),
                  Me(Ot, null, {
                    default: he(() => [
                      t.isBookingProductInCart
                        ? (c(),
                          h('p', jf, X(a.translations.purchaseToBookAgain), 1))
                        : O('', !0),
                    ]),
                    _: 1,
                  }),
                  t.productData.description && !a.isQuickPreview
                    ? (c(),
                      h(
                        'p',
                        {
                          key: 1,
                          class: 'block-product__description',
                          innerHTML: t.productData.description,
                        },
                        null,
                        8,
                        zf
                      ))
                    : a.isQuickPreview
                    ? (c(),
                      q(
                        r,
                        {
                          key: 2,
                          to: { path: t.productPagePath },
                          class: 'block-product__link body-large',
                          onClick:
                            n[2] || (n[2] = (l) => e.$emit('click-more')),
                        },
                        {
                          default: he(() => [
                            He(X(a.translations.moreDetails), 1),
                          ]),
                          _: 1,
                        },
                        8,
                        ['to']
                      ))
                    : O('', !0),
                ]),
              ],
              6
            )),
      ],
      16,
      Bf
    )
  );
}
const Qf = oe(Af, [['render', Kf]]),
  Zf = (e) => {
    const n = u(() => e.data.product.id),
      a = u(() => e.data.settings?.styles),
      t = u(() => e.data.textColorVars),
      o = u(() => e.data.buttonText),
      i = u(() => e.data.buttonStyle),
      r = u(() => e.data.buttonType),
      s = u(() => e.data.buttonBorderWidth),
      l = u(() => e.data.navigationArrowsColor),
      m = u(() => e.data.navigationThumbnailArrowsColor),
      g = u(() => e.data.galleryPlacement),
      d = u(() => e.data.imageRatio),
      v = u(() => e.data.imageBorderRadius),
      f = u(() => e.data.isQuantityPickerEnabled ?? !0);
    return {
      productId: n,
      blockStyle: a,
      blockButtonText: o,
      blockButtonStyle: i,
      blockButtonType: r,
      blockButtonBorderWidth: s,
      textColorVars: t,
      imageBorderRadius: v,
      navigationArrowsColor: l,
      navigationThumbnailArrowsColor: m,
      galleryPlacement: g,
      imageRatio: d,
      isQuantityPickerEnabled: f,
    };
  },
  Xf = (e) => e.replace(/<[^>]*>/g, ''),
  Jf = ({ product: e, pageSlug: n }) => {
    const a = pl(window.location.hostname),
      { variants: t } = e,
      o = t.length > 1,
      i = {
        '@context': 'https://schema.org/',
        '@type': 'Product',
        name: e.title,
        image: e.images.map((r) => r.url),
        description: e.description ? Xf(e.description) : '',
        offers: {},
      };
    if (o) {
      const s = Sr(e).prices[0],
        l = Ta({
          amount: s.sale_amount || s.amount,
          currency: s.currency,
          isPriceDisplayedWithCurrency: !1,
        }),
        g = Gh(e).prices[0],
        d = Ta({
          amount: g.sale_amount || g.amount,
          currency: g.currency,
          isPriceDisplayedWithCurrency: !1,
        });
      i.offers = {
        '@type': 'AggregateOffer',
        url: `https://${a}/${n}`,
        priceCurrency: g.currency.code,
        lowPrice: l,
        highPrice: d,
      };
    } else {
      const s = t[0].prices[0],
        l = Ta({
          amount: s.sale_amount || s.amount,
          currency: s.currency,
          isPriceDisplayedWithCurrency: !1,
        });
      i.offers = {
        '@type': 'Offer',
        url: `https://${a}/${n}`,
        priceCurrency: s.currency.code,
        price: l,
        availability: 'https://schema.org/InStock',
      };
    }
    return i;
  },
  ey = ({ product: e, pageSlug: n }) => {
    const a = {
      type: 'element',
      tagName: 'script',
      properties: {
        [mc]: `jsonld-product-${e.id}`,
        type: 'application/ld+json',
      },
      children: [],
    };
    (a.children = [
      { type: 'text', value: JSON.stringify(Jf({ product: e, pageSlug: n })) },
    ]),
      Cc(a);
  },
  ty = re({
    __name: 'BlockEcommerceProductProviderUser',
    props: {
      blockId: { default: '' },
      data: {},
      lcp: { default: () => ({}) },
      ecommerceTranslations: { default: () => ({}) },
      isQuickPreview: { type: Boolean, default: !1 },
      productPages: { default: () => [] },
      isCartVisible: { type: Boolean, default: !1 },
      currentPageType: { default: 'default' },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { siteId: t } = Xe(),
        {
          quantifiedCartItemsList: o,
          canAddToCart: i,
          isShoppingCartOpen: r,
          products: s,
          shoppingCartItems: l,
          variantsQuantity: m,
          isCheckoutLoading: g,
          isLoading: d,
          isLoaded: v,
          setShoppingCartOpen: f,
          setShoppingCartItems: y,
          setIsCheckoutLoading: S,
          setSelectedBookingId: T,
        } = Ut(),
        { openEcommerceModal: w, closeEcommerceModal: b } = $t(),
        { initiateCheckout: L } = nn(),
        { addImagesToLightbox: D } = on(),
        {
          productId: P,
          blockStyle: x,
          blockButtonText: B,
          blockButtonStyle: K,
          blockButtonType: W,
          blockButtonBorderWidth: C,
          textColorVars: H,
          imageBorderRadius: F,
          navigationArrowsColor: Q,
          navigationThumbnailArrowsColor: N,
          galleryPlacement: I,
          imageRatio: U,
          isQuantityPickerEnabled: V,
        } = Zf(a),
        j = u(() => s.value.find((_) => _.id === P.value) || da),
        k = u(() => a.productPages.find((_) => _.productId === j.value.id)),
        p = M(null),
        Y = () => {
          setTimeout(() => {
            p.value = Rn;
          }, 100);
        },
        G = () => {
          r.value || f(!0);
        },
        ee = (_) => {
          const ae = j.value.images.map((ve) => ({
            alt: j.value.title,
            src: ve.url,
          }));
          D(ae, _);
        },
        J = async (_) => {
          if ((await b(), j.value.type.value === Vt)) {
            T(P.value), w('EcommerceBookingEventSelect');
            return;
          }
          if (Na() || a.isInPreviewMode) {
            w('EcommerceMessageButtonDisabled');
            return;
          }
          a.isCartVisible
            ? (y([...l.value, ..._]), G())
            : (S(!0), await L(_), S(!1));
        };
      Oe(() => {
        Y();
      }),
        Tt(() => {
          b();
        }),
        Re(j, () => {
          j.value &&
            k.value &&
            ey({ product: j.value, pageSlug: k.value?.slug });
        });
      const R = {
        props: a,
        siteId: t,
        quantifiedCartItemsList: o,
        canAddToCart: i,
        isShoppingCartOpen: r,
        products: s,
        shoppingCartItems: l,
        variantsQuantity: m,
        isCheckoutLoading: g,
        isLoading: d,
        isLoaded: v,
        setShoppingCartOpen: f,
        setShoppingCartItems: y,
        setIsCheckoutLoading: S,
        setSelectedBookingId: T,
        openEcommerceModal: w,
        closeEcommerceModal: b,
        initiateCheckout: L,
        addImagesToLightbox: D,
        productId: P,
        blockStyle: x,
        blockButtonText: B,
        blockButtonStyle: K,
        blockButtonType: W,
        blockButtonBorderWidth: C,
        textColorVars: H,
        imageBorderRadius: F,
        navigationArrowsColor: Q,
        navigationThumbnailArrowsColor: N,
        galleryPlacement: I,
        imageRatio: U,
        isQuantityPickerEnabled: V,
        product: j,
        productPage: k,
        animationState: p,
        setAnimationState: Y,
        manageCartOpenState: G,
        handleImageClick: ee,
        handleBuyButtonClick: J,
        get DATA_ATTRIBUTE_ANIMATION_STATE() {
          return Hn;
        },
        BlockEcommerceProduct: Qf,
      };
      return (
        Object.defineProperty(R, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        R
      );
    },
  });
function ay(e, n, a, t, o, i) {
  return (
    c(),
    q(
      t.BlockEcommerceProduct,
      Ge(
        {
          blockId: a.blockId,
          blockStyle: t.blockStyle,
          blockButtonText: t.blockButtonText,
          blockButtonStyle: t.blockButtonStyle,
          blockButtonType: t.blockButtonType,
          blockButtonBorderWidth: t.blockButtonBorderWidth,
          textColorVars: t.textColorVars,
          imageBorderRadius: t.imageBorderRadius,
          navigationArrowsColor: t.navigationArrowsColor,
          navigationThumbnailArrowsColor: t.navigationThumbnailArrowsColor,
          galleryPlacement: t.galleryPlacement,
          imageRatio: t.imageRatio,
          isQuantityPickerEnabled: t.isQuantityPickerEnabled,
          quantifiedCartItemsList: t.quantifiedCartItemsList,
          isCheckoutLoading: t.isCheckoutLoading,
          productPages: a.productPages,
          isQuickPreview: a.isQuickPreview,
          currentPageType: a.currentPageType,
        },
        {
          'product-data': t.product,
          'can-add-to-cart': t.canAddToCart,
          'is-loading': (t.isLoading || !t.isLoaded) && t.productId !== -1,
          translations: a.ecommerceTranslations,
          'is-cart-visible': a.isCartVisible,
          'is-eager':
            a.lcp.type === 'block-ecommerce-product' && a.lcp.id === a.blockId,
          [t.DATA_ATTRIBUTE_ANIMATION_STATE || '']: t.animationState,
          'site-id': t.siteId,
          'shopping-cart-items': t.shoppingCartItems,
          'variants-quantity': t.variantsQuantity,
          onBuyButtonClick: t.handleBuyButtonClick,
          onClickMore: t.closeEcommerceModal,
          onImageClick: t.handleImageClick,
        }
      ),
      null,
      16,
      [
        'product-data',
        'can-add-to-cart',
        'is-loading',
        'translations',
        'is-cart-visible',
        'is-eager',
        'site-id',
        'shopping-cart-items',
        'variants-quantity',
        'onClickMore',
      ]
    )
  );
}
const Ul = oe(ty, [['render', ay]]),
  ny = re({
    components: { ZyroLoader: Kr },
    props: {
      blockId: { type: String, required: !0 },
      storeId: { type: String, required: !0 },
      isStoreLoading: { type: Boolean, required: !0 },
      showStore: { type: Boolean, required: !0 },
      loadingText: { type: String, default: 'Store is loading' },
    },
  }),
  oy = ['id'],
  ry = { key: 0, class: 'block-ecwid-store__loader-block' },
  iy = ['id'];
function sy(e, n, a, t, o, i) {
  const r = Be('ZyroLoader'),
    s = je('qa');
  return ue(
    (c(),
    h(
      'div',
      { id: e.blockId, class: 'block-ecwid-store' },
      [
        e.isStoreLoading
          ? (c(),
            h('div', ry, [
              Me(r, {
                size: '44px',
                class: 'block-ecwid-store__loader',
                color: 'var(--color-dark)',
              }),
              He(' ' + X(e.loadingText), 1),
            ]))
          : O('', !0),
        E(
          'div',
          { class: Z({ 'height-0': e.isStoreLoading }) },
          [
            e.showStore
              ? ue(
                  (c(),
                  h(
                    'div',
                    { key: 0, id: `my-store-${e.storeId}` },
                    null,
                    8,
                    iy
                  )),
                  [[s, 'onlinestore-section-ecwid']]
                )
              : O('', !0),
          ],
          2
        ),
      ],
      8,
      oy
    )),
    [[s, 'builder-section-onlinestore']]
  );
}
const ly = oe(ny, [
    ['render', sy],
    ['__scopeId', 'data-v-912878a7'],
  ]),
  wn = `${sl}/ecwid-app-images`,
  Ss = [
    { name: 'omniva', logoSource: `${wn}/omniva.svg`, headerText: 'Omniva' },
    { name: 'dpd', logoSource: `${wn}/dpd.svg`, headerText: 'DPD' },
    {
      name: 'lpexpress',
      logoSource: `${wn}/lpexpress.svg`,
      headerText: 'LPExpress',
    },
    { name: 'inpost', logoSource: `${wn}/inpost.svg`, headerText: 'InPost' },
    { name: 'other', logoSource: `${wn}/other.svg`, headerText: 'other' },
  ],
  uy = ({ headerText: e, name: n, logoSource: a }) => {
    const t = n === 'other',
      o = rosettaMessages['new-frontend']['Checkout.LocalDelivery.title'];
    return `
	<div class="ec-form__cell ec-form__cell--4">
		<label>
			<div class="ec-form__title ec-header-h6">${t ? o : e}</div>
		</label>
		<div class="form-control form-control--flexible form-control--empty">
			<label for="${n}">
				<div class="ec-radiogroup__radio">
					<div class="form-control--radio form-control ">
						<div class="form-control__radio-wrap">
							<input class="form-control__radio" type="radio" name="delivery-filter" value="${n}" data-filter="${n}">
							<div class="form-control__radio-view">
								<div class="form-control__radio-view-inner"></div>
							</div>
						</div>
						<div class="form-control__inline-label">
							<img class="filter-logo" src="${a}" alt="${n}" title="${n}" />
							${t ? o : ''}
						</div>
					</div>
				</div>
			</label>
		</div>
	</div>
	`;
  },
  cy = () => `
<div class="zyro-ecwid__search ec-form__row">
	<div class="ec-form__cell ec-form__cell--4">
		<label for="zyro-ecwid-search">
			<div class="ec-form__title ec-header-h6">
				<div class="marker-required marker-required--medium"></div>${rosettaMessages['new-frontend']['ProductSearch.Breadcrumbs.General']}
			</div>
		</label>
		<div class="form-control form-control--flexible form-control--empty form-control--type-name">
			<input id="zyro-ecwid-search" class="form-control__text" type="text" name="name" maxlength="255">
			<div class="form-control__placeholder">
				<div class="form-control__placeholder-inner"></div>
			</div>
		</div>
	</div>
</div>
`,
  dy = { attributes: !0, childList: !0, subtree: !0 },
  my = () => {
    let e,
      n = '',
      a,
      t,
      o,
      i;
    const r = (d) => d.some((v) => !!v?.includes(n)),
      s = () => {
        t?.forEach((d) => {
          const { type: v, element: f, title: y, description: S } = d;
          (v !== e || !r([y, S])) &&
            f.classList.add('zyro-ecwid__option--hidden');
        });
      },
      l = () => {
        a = (t?.filter((v) => {
          const { title: f, description: y, element: S, type: T } = v,
            w = r([f, y]),
            b = T === e && (w || !n.length);
          return S.classList.toggle('zyro-ecwid__option--hidden', !b), !b;
        })).length;
      },
      m = (d) => {
        let v = !1;
        t = [...d.querySelectorAll('.ec-radiogroup__item')].map((b) => {
          const L = b.querySelector('.ec-radiogroup__title').innerText,
            D = L.split(':')[0].toLowerCase(),
            P = Ss.some((B) => B.name === D) ? D : 'other',
            x = b.querySelector('input[type="radio"]');
          return (
            x.addEventListener('change', (B) => {
              B.target.checked && l();
            }),
            {
              title: L.toLowerCase(),
              description: b
                .querySelector('.ec-radiogroup__text')
                .innerText.toLowerCase(),
              element: b,
              cost: b.querySelector('.ec-radiogroup__data').innerText,
              selected: b.querySelector('input').checked,
              type: P,
              radio: x,
            }
          );
        });
        const y = d.closest('.ec-cart-step__section'),
          S = y.querySelector('.ec-radiogroup__wrap');
        o || y.insertAdjacentHTML('beforeend', cy()),
          y.classList.add('zyro-ecwid__radio-section'),
          y.querySelector('.zyro-ecwid__search input').addEventListener(
            'input',
            Ol((b) => {
              (n = b.target.value.toLowerCase()), l();
            }),
            30
          );
        const T = t.find((b) => b.selected),
          w = [...new Set(t.map((b) => b.type))];
        o
          ? (i?.classList.remove('ec-radiogroup--hidden'),
            o?.classList.remove('zyro-ecwid__search--hidden'),
            y
              .querySelector(
                '.ec-cart-step--delivery .ec-radiogroup:last-child'
              )
              ?.classList.add('ec-radiogroup--hidden'))
          : w.forEach((b) => {
              if (b === 'other' && v) return;
              const L = Ss.find((P) => P.name === b),
                D = uy(L);
              b === 'other' && (v = !0),
                y
                  .querySelector('.zyro-ecwid__search')
                  .insertAdjacentHTML('afterbegin', D),
                y
                  .querySelector('[data-filter]')
                  .addEventListener('change', (P) => {
                    P.target.checked && ((e = P.target.dataset.filter), l());
                  });
            }),
          (i = y.querySelector('.ec-cart-step--delivery .ec-radiogroup')),
          (o = y.querySelector('.zyro-ecwid__search')),
          (y.querySelector('[data-filter]').checked = !0),
          (e = w[w.length - 1]),
          l(),
          S.scroll(T.element.offsetTop, 0);
      };
    return new MutationObserver(() => {
      if (!document.querySelector('.ec-cart__body')) return;
      const d = document.querySelector(
          '.ec-cart-step--delivery .ec-radiogroup__items'
        ),
        v = !!document.querySelector(
          '.ec-cart-step--delivery .ec-cart-step__icon--done'
        ),
        f = document.querySelectorAll('.zyro-ecwid__option--hidden');
      !!!document.querySelector(
        '.ec-cart-step--address .ec-cart-step__icon--done'
      ) &&
        !d &&
        o &&
        (o = null),
        !v && !t && d && m(d),
        a !== f.length && s(),
        (v || !d) &&
          (i?.classList.contains('ec-radiogroup--hidden') ||
            i?.classList.add('ec-radiogroup--hidden'),
          o?.classList.contains('zyro-ecwid__search--hidden') ||
            o?.classList.add('zyro-ecwid__search--hidden'),
          (t = null),
          n &&
            ((n = ''),
            (document.getElementById('zyro-ecwid-search').value = '')));
    }, dy);
  },
  Tr = 'ecwid-loaded',
  gy = () => {
    const e = document.querySelector('.ec-notices');
    if (!e) return;
    const n = document.querySelector('.builder-header')?.clientHeight ?? 0,
      a = document.querySelector(`.${gl}`)?.clientHeight ?? 0,
      t = e.getBoundingClientRect().top + n + a;
    e.style.top = `${t}px`;
  },
  Yl = () => window.dispatchEvent(new Event(Tr)),
  vy = (e) => {
    const { setEcwidCartItems: n } = yl();
    n(e.items);
  },
  py = () => {
    window.ecwid_initial_data.data.storeClosed && Yl();
  },
  hy = () => {
    window.Ecwid.OnAPILoaded.add(py),
      window.Ecwid.OnPageLoaded.add(Yl),
      window.Ecwid.OnPageLoaded.add(gy),
      window.Ecwid.OnCartChanged.add(vy);
  },
  fy = {
    load(e, n) {
      if (
        ((window.ec = window.ec || {}),
        (window.ec.config = window.ec.config || {}),
        (window.ec.config.enable_canonical_urls = !0),
        (window.ec.config.storefrontUrls =
          window.ec.config.storefrontUrls || {}),
        (window.ec.config.storefrontUrls.cleanUrls = !0),
        (window.ec.config.storefrontUrls.queryBasedCleanUrls = !0),
        (window.ecwid_script_defer = !0),
        (window.ecwid_dynamic_widgets = !0),
        typeof Ecwid < 'u')
      )
        try {
          window.Ecwid.destroy();
        } catch {}
      if (
        ((window._xnext_initialization_scripts = [
          {
            widgetType: 'ProductBrowser',
            id: `my-store-${e}`,
            arg: [
              'id=productBrowser',
              'categoriesPerRow=4',
              'views=grid(4,3) list(10) table(20)',
              'categoryView=grid',
              'searchView=list',
            ],
          },
        ]),
        document.querySelector('#ecwid-script'))
      )
        window.ecwid_onBodyDone(),
          setTimeout(() => {
            !!document.getElementById(`my-store-${e}`)?.innerHTML ||
              this.load(e, n);
          }, 1e3);
      else {
        const a = document.createElement('script');
        (a.defer = !0),
          (a.type = 'text/javascript'),
          (a.async = !0),
          (a.src = `https://app.ecwid.com/script.js?${e}`),
          n && n !== Kt && (a.src += `&lang=${n}`),
          (a.id = 'ecwid-script'),
          a.addEventListener('load', hy),
          document.body.append(a);
      }
    },
  },
  yy = '26103239',
  by = { attributes: !0, childList: !0, subtree: !0 },
  _y = (e, { ecwidStoreId: n, demoEcwidStoreId: a }) => {
    const t = M(!0),
      o = M(!1),
      i = M(!0),
      r = u(() => e.data.settings.loadingText || 'Store is loading'),
      s = u(() => n.value || a.value || yy),
      l = () => {
        fy.load(s.value, e.currentLocale);
      },
      m = () => {
        (o.value = !0),
          window.addEventListener(Tr, () => {
            o.value = !1;
          }),
          l();
      };
    return (
      Oe(() => {
        m(),
          (i.value = my()),
          i.value.observe(document.querySelector(`#my-store-${s.value}`), by);
      }),
      Tt(() => {
        i.value.disconnect();
      }),
      Re(s, async (g) => {
        a.value !== g &&
          ((document.querySelector(`#my-store-${s.value}`).innerHTML = ''),
          await Et(),
          m());
      }),
      {
        storeId: s,
        showStore: t,
        isStoreLoading: o,
        loadStore: l,
        loadingText: r,
        ECWID_LOADED_EVENT: Tr,
      }
    );
  },
  wy = re({
    components: { BlockEcwidStore: ly },
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, default: () => ({}) },
      currentLocale: { type: String, default: Kt },
    },
    setup(e) {
      const { meta: n } = Xe(),
        a = u(() => n.value.ecwidStoreId),
        t = u(() => n.value.demoEcwidStoreId),
        {
          storeId: o,
          showStore: i,
          isStoreLoading: r,
          loadingText: s,
        } = _y(e, { ecwidStoreId: a, demoEcwidStoreId: t });
      return (
        Oe(() => {
          window?.Ecwid?.getStorefrontLang() &&
            window.Ecwid.getStorefrontLang() !== e.currentLocale &&
            !Na() &&
            window.location.reload();
        }),
        { storeId: o, showStore: i, isStoreLoading: r, loadingText: s }
      );
    },
  });
function ky(e, n, a, t, o, i) {
  const r = Be('BlockEcwidStore');
  return (
    c(),
    q(
      r,
      {
        'store-id': e.storeId,
        'block-id': e.blockId,
        'show-store': e.showStore,
        'is-store-loading': e.isStoreLoading,
        'loading-text': e.loadingText,
      },
      null,
      8,
      ['store-id', 'block-id', 'show-store', 'is-store-loading', 'loading-text']
    )
  );
}
const Sy = oe(wy, [['render', ky]]),
  Ty = M({}),
  Cr = 'forward',
  Ts = 'backward',
  Cy = ({
    isAutoplayEnabled: e,
    isLoopEnabled: n,
    autoplayInterval: a,
    isTransitioning: t,
    slides: o,
  } = {}) => {
    const i = M(0),
      r = M(''),
      s = M(null),
      l = u(() => o.value.length),
      m = u(() => i.value === o.value.length - 1),
      g = u(() => i.value === 0),
      d = u(() => (!m.value || n.value) && l.value > 1 && !t.value),
      v = u(() => (!g.value || n.value) && l.value > 1 && !t.value),
      f = () => {
        if (d.value) {
          if (((r.value = Cr), n.value && m.value)) {
            i.value = 0;
            return;
          }
          i.value += 1;
        }
      },
      y = () => {
        if (v.value) {
          if (((r.value = Ts), n.value && g.value)) {
            i.value = o.value.length - 1;
            return;
          }
          i.value -= 1;
        }
      },
      S = (L) => {
        (r.value = L > i.value ? Cr : Ts), (i.value = L);
      },
      T = () => {
        s.value = setInterval(() => {
          (!n.value && m.value) || f();
        }, a.value * 1e3);
      },
      w = () => {
        s.value && (clearInterval(s.value), (s.value = null));
      },
      b = () => {
        w(), e.value && T();
      };
    return (
      e &&
        (e.value && T(),
        Re(e, () => {
          e.value ? T() : w();
        }),
        Re(rp(), (L) => {
          L === 'visible' ? T() : w();
        })),
      a &&
        Re(a, () => {
          b();
        }),
      {
        slideshowRefs: Ty,
        slideToNext: f,
        slideToPrevious: y,
        slideTo: S,
        slideDirection: r,
        slideCount: l,
        currentSlideIndex: i,
        slides: o,
        isLoopEnabled: n,
        isAutoplayEnabled: e,
        autoplayInterval: a,
        resetAutoplayInterval: b,
        setAutoplayInterval: T,
        clearAutoplayInterval: w,
        canSlideToNext: d,
        canSlideToPrevious: v,
      }
    );
  },
  Jr = re({
    props: {
      slides: { type: Array, required: !0 },
      isLoopEnabled: { type: Boolean, default: !1 },
      currentSlideIndex: { type: Number, default: 0 },
      slideDirection: { type: String, default: Cr },
      arrowColor: { type: String, default: 'rgb(255, 255, 255)' },
      dotColor: { type: String, default: 'rgb(255, 255, 255)' },
      isNextButtonDisabled: { type: Boolean, default: !1 },
      isPreviousButtonDisabled: { type: Boolean, default: !1 },
      isNavigationArrowsVisible: { type: Boolean, default: !0 },
      isNavigationDotsVisible: { type: Boolean, default: !0 },
      isTransitioning: { type: Boolean, default: !1 },
      desktopMinHeight: { type: Number, required: !0 },
      mobileMinHeight: { type: Number, required: !0 },
      websiteId: { type: String, default: '' },
    },
    emits: [
      'transition-start',
      'transition-end',
      'next-slide',
      'previous-slide',
      'dot-click',
    ],
    setup() {
      return { FULL_WIDTH: ha, getOptimizedSrc: ct };
    },
    computed: {
      isNextSlideButtonVisible() {
        if (this.isLoopEnabled) return this.isNavigationArrowsVisible;
        const e = this.currentSlideIndex === this.slides.length - 1;
        return this.isNavigationArrowsVisible && !e;
      },
      isPreviousSlideButtonVisible() {
        if (this.isLoopEnabled) return this.isNavigationArrowsVisible;
        const e =
          this.isNavigationArrowsVisible && this.currentSlideIndex === 0;
        return this.isNavigationArrowsVisible && !e;
      },
    },
  }),
  Cs = () => {
    it((e) => ({
      fd06db1c: e.desktopMinHeight,
      '1f7ca1af': e.arrowColor,
      '56d289af': e.dotColor,
      '3b9747e2': e.mobileMinHeight,
    }));
  },
  Ps = Jr.setup;
Jr.setup = Ps ? (e, n) => (Cs(), Ps(e, n)) : Cs;
const Fl = (e) => (Bt('data-v-f3299b46'), (e = e()), xt(), e),
  Py = { class: 'slideshow' },
  Iy = ['alt', 'src'],
  Ey = ['disabled'],
  Dy = Fl(() =>
    E(
      'svg',
      {
        width: '14',
        height: '26',
        viewBox: '0 0 14 26',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      [
        E('path', {
          d: 'M1 25L13 13L1 1',
          stroke: 'currentColor',
          'stroke-width': '1.5',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
        }),
      ],
      -1
    )
  ),
  My = [Dy],
  Oy = ['disabled'],
  Ly = Fl(() =>
    E(
      'svg',
      {
        width: '14',
        height: '26',
        viewBox: '0 0 14 26',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      [
        E('path', {
          d: 'M1 25L13 13L1 1',
          stroke: 'currentColor',
          'stroke-width': '1.5',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
        }),
      ],
      -1
    )
  ),
  Ay = [Ly],
  By = { key: 2, class: 'slideshow__dots' },
  xy = ['onClick'];
function Ry(e, n, a, t, o, i) {
  return (
    c(),
    h('div', Py, [
      Me(
        $u,
        {
          name: `slide-${e.slideDirection}`,
          onLeave: n[0] || (n[0] = (r) => e.$emit('transition-start')),
          onAfterLeave: n[1] || (n[1] = (r) => e.$emit('transition-end')),
        },
        {
          default: he(() => [
            (c(!0),
            h(
              ge,
              null,
              ke(e.slides, (r, s) =>
                ue(
                  (c(),
                  h(
                    'img',
                    {
                      key: `${r.path}-${s}`,
                      alt: r.alt || '',
                      class: 'slide',
                      src: e.getOptimizedSrc(r.origin, r.path, e.websiteId, {
                        width: e.FULL_WIDTH,
                      }),
                    },
                    null,
                    8,
                    Iy
                  )),
                  [[Ht, e.currentSlideIndex === s]]
                )
              ),
              128
            )),
          ]),
          _: 1,
        },
        8,
        ['name']
      ),
      e.isNextSlideButtonVisible
        ? (c(),
          h(
            'button',
            {
              key: 0,
              class: Z([
                'slideshow-nav-button slideshow-nav-button--right',
                { 'is-transitioning': e.isTransitioning },
              ]),
              disabled: e.isNextButtonDisabled,
              onClick: n[2] || (n[2] = (r) => e.$emit('next-slide')),
            },
            My,
            10,
            Ey
          ))
        : O('', !0),
      e.isPreviousSlideButtonVisible
        ? (c(),
          h(
            'button',
            {
              key: 1,
              class: Z([
                'slideshow-nav-button slideshow-nav-button--left',
                { 'is-transitioning': e.isTransitioning },
              ]),
              disabled: e.isPreviousButtonDisabled,
              onClick: n[3] || (n[3] = (r) => e.$emit('previous-slide')),
            },
            Ay,
            10,
            Oy
          ))
        : O('', !0),
      e.isNavigationDotsVisible
        ? (c(),
          h('div', By, [
            (c(!0),
            h(
              ge,
              null,
              ke(
                e.slides,
                (r, s) => (
                  c(),
                  h(
                    'button',
                    {
                      key: `${r.path}-${s}`,
                      class: Z([
                        'dot',
                        { 'dot--current': e.currentSlideIndex === s },
                      ]),
                      onClick: (l) => e.$emit('dot-click', s),
                    },
                    null,
                    10,
                    xy
                  )
                )
              ),
              128
            )),
          ]))
        : O('', !0),
    ])
  );
}
const Hy = oe(Jr, [
    ['render', Ry],
    ['__scopeId', 'data-v-f3299b46'],
  ]),
  Ny = re({
    components: { BlockImageSlideshow: Hy },
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, default: () => ({}) },
      websiteId: { type: String, default: '' },
    },
    setup(e) {
      const { data: n } = lr(e),
        a = M(!1),
        t = u(() => `${n.value.desktop.minHeight}px`),
        o = u(() => `${n.value.mobile.minHeight}px`),
        i = u(() => n.value.settings.styles.navigationDotsColor),
        r = u(() => n.value.settings.styles.navigationArrowsColor),
        s = u(() => n.value.slides),
        l = u(() => n.value.isLoopEnabled),
        m = u(() => n.value.isAutoplayEnabled),
        g = u(() => n.value.autoplayInterval),
        d = u(() => n.value.isNavigationDotsVisible),
        v = u(() => n.value.isNavigationArrowsVisible),
        f = u(() => n.value.desktop.minHeight),
        y = u(() => n.value.mobile.minHeight),
        {
          slideDirection: S,
          currentSlideIndex: T,
          canSlideToNext: w,
          canSlideToPrevious: b,
          slideToNext: L,
          slideToPrevious: D,
          slideTo: P,
          resetAutoplayInterval: x,
          clearAutoplayInterval: B,
        } = Cy({
          isAutoplayEnabled: m,
          isLoopEnabled: l,
          autoplayInterval: g,
          isTransitioning: a,
          slides: s,
        });
      return {
        canSlideToNext: w,
        canSlideToPrevious: b,
        desktopHeight: t,
        mobileHeight: o,
        slides: s,
        currentSlideIndex: T,
        slideDirection: S,
        isLoopEnabled: l,
        isTransitioning: a,
        resetAutoplayInterval: x,
        dotColor: i,
        arrowColor: r,
        isNavigationDotsVisible: d,
        isNavigationArrowsVisible: v,
        clearAutoplayInterval: B,
        slideToNext: L,
        slideToPrevious: D,
        slideTo: P,
        desktopMinHeight: f,
        mobileMinHeight: y,
      };
    },
  });
function $y(e, n, a, t, o, i) {
  const r = Be('BlockImageSlideshow');
  return (
    c(),
    q(
      r,
      {
        slides: e.slides,
        'is-loop-enabled': e.isLoopEnabled,
        'current-slide-index': e.currentSlideIndex,
        'slide-direction': e.slideDirection,
        'dot-color': e.dotColor,
        'is-navigation-arrows-visible': e.isNavigationArrowsVisible,
        'is-navigation-dots-visible': e.isNavigationDotsVisible,
        'arrow-color': e.arrowColor,
        'is-next-button-disabled': !e.canSlideToNext,
        'is-previous-button-disabled': !e.canSlideToPrevious,
        'desktop-min-height': e.desktopMinHeight,
        'mobile-min-height': e.mobileMinHeight,
        'website-id': e.websiteId,
        onTransitionStart: n[0] || (n[0] = (s) => (e.isTransitioning = !0)),
        onTransitionEnd: n[1] || (n[1] = (s) => (e.isTransitioning = !1)),
        onMouseenter: e.clearAutoplayInterval,
        onMouseleave: e.resetAutoplayInterval,
        onNextSlide: e.slideToNext,
        onPreviousSlide: e.slideToPrevious,
        onDotClick: e.slideTo,
      },
      null,
      8,
      [
        'slides',
        'is-loop-enabled',
        'current-slide-index',
        'slide-direction',
        'dot-color',
        'is-navigation-arrows-visible',
        'is-navigation-dots-visible',
        'arrow-color',
        'is-next-button-disabled',
        'is-previous-button-disabled',
        'desktop-min-height',
        'mobile-min-height',
        'website-id',
        'onMouseenter',
        'onMouseleave',
        'onNextSlide',
        'onPreviousSlide',
        'onDotClick',
      ]
    )
  );
}
const Vy = oe(Ny, [['render', $y]]),
  Is = 360,
  Uy = {
    __name: 'BlockUser',
    props: {
      id: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      lcp: { type: Object, default: () => ({}) },
      currentLocale: { type: String, default: Kt },
      style: { type: Object, default: () => ({}) },
      ecommerceTranslations: { type: Object, default: () => ({}) },
      isCartVisible: { type: Boolean, default: !1 },
      pageId: { type: String, required: !0 },
      currentPageType: { type: String, default: 'default' },
      isInPreviewMode: { type: Boolean, default: !1 },
      screenWidth: { type: Number, default: 0 },
      isFirstVisibleDesktopBlock: { type: Boolean, default: !1 },
      isFirstVisibleMobileBlock: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = M(null),
        { productPages: o, isLoaded: i } = Ut({ blockId: a.id }),
        {
          blocks: r,
          elements: s,
          pages: l,
          siteId: m,
          blogReadingTimeText: g,
          blogCategories: d,
          siteId: v,
          meta: f,
        } = Xe(),
        {
          addIntersectionObserver: y,
          observe: S,
          intersectionObserver: T,
          animationClass: w,
          shouldMountAnimationsInPreview: b,
        } = rn({ data: a.data }),
        L = u(() => a.currentLocale),
        D = u(() => a.screenWidth <= In),
        P = u(() =>
          a.data.desktop?.isHidden
            ? a.isInPreviewMode
              ? a.screenWidth > In
              : !0
            : !1
        ),
        x = u(() =>
          a.data.mobile?.isHidden ? (a.isInPreviewMode ? D.value : !0) : !1
        ),
        B = u(() => ({ ...a.style, ...Nt(a.data?.settings?.styles) })),
        K = u(() => {
          if (!a.data?.settings?.styles['m-block-padding']) return !1;
          const { top: V, bottom: j } = an(
            a.data.settings.styles['m-block-padding']
          );
          return Number.parseInt(V, 10) + Number.parseInt(j, 10) > Is;
        }),
        W = u(() =>
          ct(a.data.background.origin, a.data.background.path, v.value, {
            width: ha,
          })
        ),
        C = u(() =>
          fa(a.data.background.origin, a.data.background.path, v.value, {
            isMobileFullScreen: K.value,
          })
        ),
        H = u(() => a.data.slot === 'footer'),
        F = u(() => {
          if (a.data.type !== Li) return null;
          const [, V] = Object.entries(l.value).find(
            ([j, k]) => k.type === dr && j === a.pageId
          );
          return V;
        }),
        Q = u(() => f.value.stripePublicApiKey),
        N = u(() => a.data.type === Ai),
        I = async () => {
          y(), (!N.value || i.value) && (await S(t.value));
        };
      Oe(async () => {
        await I();
      }),
        Tt(() => T.value?.disconnect()),
        Re([L, i], async ([V, j], [k]) => {
          (j || V !== k) && N.value && (await S(t.value));
        }),
        Re(b, async (V) => {
          V && (await I());
        });
      const U = {
        MOBILE_FULL_HEIGT_THRESHOLD: Is,
        props: a,
        blockRef: t,
        productPages: o,
        isEcommerceProductsLoaded: i,
        siteBlocks: r,
        siteElements: s,
        siteLanguagePages: l,
        websiteId: m,
        blogReadingTimeText: g,
        blogCategories: d,
        siteId: v,
        meta: f,
        addIntersectionObserver: y,
        observe: S,
        intersectionObserver: T,
        animationClass: w,
        shouldMountAnimationsInPreview: b,
        currentSiteLocale: L,
        isMobile: D,
        isDesktopBlockHidden: P,
        isMobileBlockHidden: x,
        computedStyles: B,
        isMobileFullScreen: K,
        backgroundSrc: W,
        backgroundSrcSet: C,
        isBlockFooter: H,
        currentBlogPage: F,
        stripePublicApiKey: Q,
        isEcommerceBlock: N,
        initiateAnimations: I,
        computed: u,
        onMounted: Oe,
        onBeforeUnmount: Tt,
        ref: M,
        watch: Re,
        BlockBackground: qr,
        BlockBlogHeader: Sd,
        get PAGE_TYPE_BLOG() {
          return dr;
        },
        get SYSTEM_LOCALE() {
          return Kt;
        },
        get BLOCK_TYPE_LAYOUT() {
          return gc;
        },
        get BLOCK_TYPE_BLOG_HEADER() {
          return Li;
        },
        get BLOCK_TYPE_BLOG_LIST() {
          return vc;
        },
        get BLOCK_TYPE_IMAGE_SLIDESHOW() {
          return pc;
        },
        get BLOCK_TYPE_ECWID() {
          return hc;
        },
        get BLOCK_TYPE_ECOMMERCE_PRODUCT() {
          return fc;
        },
        get BLOCK_TYPE_ECOMMERCE_PRODUCT_LIST() {
          return Ai;
        },
        get MEDIA_MOBILE_SCREEN_BREAKPOINT() {
          return In;
        },
        get FULL_WIDTH() {
          return ha;
        },
        get getFullWidthSrcset() {
          return fa;
        },
        get getOptimizedSrc() {
          return ct;
        },
        get useSiteGlobal() {
          return Xe;
        },
        get objectToCssVariables() {
          return Nt;
        },
        get parseCSSSides() {
          return an;
        },
        BlockLayoutProviderUser: qp,
        BlockBlogListProviderUser: yh,
        BlockEcommerceProductListProviderUser: of,
        BlockEcommerceProductProviderUser: Ul,
        BlockEcwidStoreProviderUser: Sy,
        BlockImageSlideshowProviderUser: Vy,
        get useSiteEngineAnimations() {
          return rn;
        },
        get useEcommerceGlobal() {
          return Ut;
        },
      };
      return (
        Object.defineProperty(U, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        U
      );
    },
  },
  Yy = ['id'];
function Fy(e, n, a, t, o, i) {
  return (
    c(),
    h(
      'section',
      {
        id: a.id,
        ref: 'blockRef',
        class: Z([
          'block',
          [
            t.animationClass,
            {
              'block--footer': t.isBlockFooter,
              'block--desktop-hidden': t.isDesktopBlockHidden,
              'block--mobile-hidden': t.isMobileBlockHidden,
              'block--desktop-first-visible': a.isFirstVisibleDesktopBlock,
              'block--mobile-first-visible': a.isFirstVisibleMobileBlock,
            },
          ],
        ]),
        style: Ae(t.computedStyles),
      },
      [
        a.data.background
          ? (c(),
            q(
              t.BlockBackground,
              {
                key: 0,
                'overlay-opacity': a.data.background['overlay-opacity'],
                type: a.data.background.current,
                color: a.data.background.color,
                gradient: a.data.background.gradient,
                src: t.backgroundSrc,
                srcset: t.backgroundSrcSet,
                'is-eager':
                  a.lcp.type === 'block-background' && a.lcp.id === a.id,
                'is-fixed': a.data.attachment === 'fixed',
                alt: a.data.background && a.data.background.alt,
                'is-in-preview-mode': t.props.isInPreviewMode,
                'is-mobile': t.isMobile,
              },
              null,
              8,
              [
                'overlay-opacity',
                'type',
                'color',
                'gradient',
                'src',
                'srcset',
                'is-eager',
                'is-fixed',
                'alt',
                'is-in-preview-mode',
                'is-mobile',
              ]
            ))
          : O('', !0),
        a.data.type === t.BLOCK_TYPE_LAYOUT
          ? (c(),
            q(
              t.BlockLayoutProviderUser,
              {
                key: 1,
                lcp: a.lcp,
                data: a.data,
                'block-id': a.id,
                components: t.siteElements,
                'current-locale': a.currentLocale,
                'is-cart-visible': a.isCartVisible,
                'site-language-pages': t.siteLanguagePages,
                'stripe-public-api-key': t.stripePublicApiKey,
                'is-in-preview-mode': t.props.isInPreviewMode,
              },
              null,
              8,
              [
                'lcp',
                'data',
                'block-id',
                'components',
                'current-locale',
                'is-cart-visible',
                'site-language-pages',
                'stripe-public-api-key',
                'is-in-preview-mode',
              ]
            ))
          : O('', !0),
        a.data.type === t.BLOCK_TYPE_BLOG_HEADER
          ? (c(),
            q(
              t.BlockBlogHeader,
              {
                key: 2,
                data: a.data,
                'current-blog-page': t.currentBlogPage,
                'blog-categories': t.blogCategories,
                'blog-reading-time-text': t.blogReadingTimeText,
              },
              null,
              8,
              [
                'data',
                'current-blog-page',
                'blog-categories',
                'blog-reading-time-text',
              ]
            ))
          : O('', !0),
        a.data.type === t.BLOCK_TYPE_BLOG_LIST
          ? (c(),
            q(
              t.BlockBlogListProviderUser,
              {
                key: 3,
                data: a.data,
                'block-id': a.id,
                'current-locale': a.currentLocale,
              },
              null,
              8,
              ['data', 'block-id', 'current-locale']
            ))
          : O('', !0),
        a.data.type === t.BLOCK_TYPE_IMAGE_SLIDESHOW
          ? (c(),
            q(
              t.BlockImageSlideshowProviderUser,
              {
                key: 4,
                data: a.data,
                'block-id': a.id,
                'website-id': t.websiteId,
              },
              null,
              8,
              ['data', 'block-id', 'website-id']
            ))
          : O('', !0),
        a.data.type === t.BLOCK_TYPE_ECWID
          ? (c(),
            q(
              t.BlockEcwidStoreProviderUser,
              {
                key: 5,
                data: a.data,
                'block-id': a.id,
                'current-locale': a.currentLocale,
              },
              null,
              8,
              ['data', 'block-id', 'current-locale']
            ))
          : O('', !0),
        a.data.type === t.BLOCK_TYPE_ECOMMERCE_PRODUCT
          ? (c(),
            q(
              t.BlockEcommerceProductProviderUser,
              {
                key: 6,
                lcp: a.lcp,
                data: a.data,
                'block-id': a.id,
                'product-pages': t.productPages,
                'is-cart-visible': a.isCartVisible,
                'ecommerce-translations': a.ecommerceTranslations,
                'current-page-type': a.currentPageType,
                'is-in-preview-mode': t.props.isInPreviewMode,
              },
              null,
              8,
              [
                'lcp',
                'data',
                'block-id',
                'product-pages',
                'is-cart-visible',
                'ecommerce-translations',
                'current-page-type',
                'is-in-preview-mode',
              ]
            ))
          : O('', !0),
        a.data.type === t.BLOCK_TYPE_ECOMMERCE_PRODUCT_LIST
          ? (c(),
            q(
              t.BlockEcommerceProductListProviderUser,
              {
                key: 7,
                lcp: a.lcp,
                data: a.data,
                'block-id': a.id,
                blocks: t.siteBlocks,
                'current-locale': a.currentLocale,
                'is-cart-visible': a.isCartVisible,
                'ecommerce-translations': a.ecommerceTranslations,
                'is-in-preview-mode': t.props.isInPreviewMode,
              },
              null,
              8,
              [
                'lcp',
                'data',
                'block-id',
                'blocks',
                'current-locale',
                'is-cart-visible',
                'ecommerce-translations',
                'is-in-preview-mode',
              ]
            ))
          : O('', !0),
      ],
      14,
      Yy
    )
  );
}
const Wy = oe(Uy, [
    ['render', Fy],
    ['__scopeId', 'data-v-43d5e18a'],
  ]),
  qy = re({
    __name: 'BlockStickyBarLayout',
    props: { blockStyles: {} },
    setup(e, { expose: n }) {
      n(),
        it((l) => ({
          c718ec72: o.value,
          '387a0b1e': A(vl),
          '720ca36e': t.value,
          '16937fe2': i.value,
        }));
      const a = e,
        t = u(() => `${Qt}px`),
        o = u(() => `${sa}px`),
        i = u(() => `0 ${En}px`),
        r = u(() => Nt(a.blockStyles)),
        s = {
          props: a,
          mobileMaxWidthCSSVar: t,
          maxWidthCSSVar: o,
          tabletBlockPaddingCSSVar: i,
          computedStyles: r,
        };
      return (
        Object.defineProperty(s, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        s
      );
    },
  });
function Gy(e, n, a, t, o, i) {
  return (
    c(),
    h(
      'div',
      { class: 'block-sticky-bar-layout', style: Ae(t.computedStyles) },
      [te(e.$slots, 'default', {}, void 0, !0)],
      4
    )
  );
}
const jy = oe(qy, [
    ['render', Gy],
    ['__scopeId', 'data-v-a943a874'],
  ]),
  zy = re({
    __name: 'BlockStickyBarProviderUser',
    props: {
      data: {},
      components: {},
      isInPreviewMode: { type: Boolean },
      lcp: {},
      screenWidth: { default: 0 },
    },
    setup(e, { expose: n }) {
      n(), it((x) => ({ '0897617a': A(vl) }));
      const a = { [pa]: gn },
        t = e,
        { siteId: o } = Xe(),
        { layoutCSSVars: i } = pr({
          blockData: u(() => t.data),
          siteElements: u(() => t.components),
          shouldBuildResponsive: !t.isInPreviewMode,
        }),
        {
          addIntersectionObserver: r,
          observe: s,
          intersectionObserver: l,
          animationClass: m,
          shouldMountAnimationsInPreview: g,
        } = rn({
          elementData: null,
          data: t.data,
          elementId: null,
          isParentBlockFooter: !1,
        }),
        d = M(null),
        v = u(() => t.data.background?.origin || null),
        f = u(() => t.data.background?.path || null),
        y = u(() => t.screenWidth <= In),
        S = u(() =>
          t.data.desktop?.isHidden
            ? t.isInPreviewMode
              ? t.screenWidth > In
              : !0
            : !1
        ),
        T = u(() =>
          t.data.mobile?.isHidden ? (t.isInPreviewMode ? y.value : !0) : !1
        ),
        w = u(() => ct(v.value, f.value, o.value, { width: ha })),
        b = u(() => fa(v.value, f.value, o.value, { isMobileFullScreen: !1 })),
        L = u(() => t.data.attachment === 'fixed'),
        D = async () => {
          r(), await s(d.value);
        };
      Oe(async () => {
        await D();
      }),
        Tt(() => l.value?.disconnect()),
        Re(g, async (x) => {
          x && (await D());
        });
      const P = {
        CUSTOM_ATTRIBUTES: a,
        props: t,
        siteId: o,
        layoutCSSVars: i,
        addIntersectionObserver: r,
        observe: s,
        intersectionObserver: l,
        animationClass: m,
        shouldMountAnimationsInPreview: g,
        blockRef: d,
        backgroundOrigin: v,
        backgroundPath: f,
        isMobile: y,
        isDesktopBlockHidden: S,
        isMobileBlockHidden: T,
        backgroundSrc: w,
        backgroundSrcSet: b,
        isBlockBackgroundFixed: L,
        initiateAnimations: D,
        BlockBackground: qr,
        BlockStickyBarLayout: jy,
        GridTextBox: El,
      };
      return (
        Object.defineProperty(P, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        P
      );
    },
  });
function Ky(e, n, a, t, o, i) {
  return (
    c(),
    h(
      'section',
      {
        ref: 'blockRef',
        class: Z([
          'block-sticky-bar',
          [
            {
              'block-sticky-bar--desktop-hidden': t.isDesktopBlockHidden,
              'block-sticky-bar--mobile-hidden': t.isMobileBlockHidden,
            },
          ],
        ]),
      },
      [
        a.data.background
          ? (c(),
            q(
              t.BlockBackground,
              {
                key: 0,
                class: 'block-sticky-bar__background',
                'overlay-opacity': a.data.background['overlay-opacity'],
                type: a.data.background.current,
                gradient: a.data.background.gradient,
                color: a.data.background.color,
                src: t.backgroundSrc,
                srcset: t.backgroundSrcSet,
                'is-fixed': t.isBlockBackgroundFixed,
                alt: a.data.background && a.data.background.alt,
              },
              null,
              8,
              [
                'overlay-opacity',
                'type',
                'gradient',
                'color',
                'src',
                'srcset',
                'is-fixed',
                'alt',
              ]
            ))
          : O('', !0),
        Me(
          t.BlockStickyBarLayout,
          {
            'block-styles': a.data.settings.styles,
            style: Ae(t.layoutCSSVars),
            class: Z(t.animationClass),
          },
          {
            default: he(() => [
              (c(!0),
              h(
                ge,
                null,
                ke(
                  a.data.items,
                  (r, s) => (
                    c(),
                    q(
                      t.GridTextBox,
                      Ge(
                        {
                          key: `sticky-element-${s}`,
                          class: 'block-sticky-bar__element',
                          'text-align': 'flex-start',
                          'text-align-mobile': 'flex-start',
                          content: r.content,
                        },
                        t.CUSTOM_ATTRIBUTES
                      ),
                      null,
                      16,
                      ['content']
                    )
                  )
                ),
                128
              )),
            ]),
            _: 1,
          },
          8,
          ['block-styles', 'style', 'class']
        ),
      ],
      2
    )
  );
}
const Qy = oe(zy, [
    ['render', Ky],
    ['__scopeId', 'data-v-79325842'],
  ]),
  to = M({}),
  Wl = ({ pagePassword: e, locale: n, pageId: a }) => {
    const t = u(() => `${a}-${n}`),
      o = u(() => !e || (e && !!to.value[t.value]));
    return {
      isPageUnlocked: to,
      openUnlockedPage: () => {
        to.value = { ...to.value, [t.value]: !0 };
      },
      isPageOpen: o,
    };
  },
  Zy = async (e) => {
    const n = new TextEncoder().encode(e),
      a = await crypto.subtle.digest('SHA-256', n);
    return [...new Uint8Array(a)]
      .map((i) => i.toString(16).padStart(2, '0'))
      .join('');
  },
  Xy = {
    src: './_astro-1717015059723/lock.CUuFZ5nx.svg',
    width: 40,
    height: 40,
    format: 'svg',
  },
  Jy = re({
    __name: 'PasswordPage',
    props: {
      pageId: {},
      locale: {},
      currentPageData: {},
      isCurrentPageHomepage: { type: Boolean, default: !1 },
      inPreviewMode: { type: Boolean, default: !1 },
      defaultLocale: {},
      homepageName: {},
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = M(''),
        o = M(''),
        i = u(() => a.currentPageData?.meta?.passwordDesign ?? ''),
        r = u(() => a.currentPageData?.meta?.password ?? ''),
        s = u(
          () => a.currentPageData?.meta?.passwordHeadingText ?? 'Guest Area'
        ),
        l = u(
          () =>
            a.currentPageData?.meta?.passwordSubheadingText ??
            'Please enter the password to access the page'
        ),
        m = u(() => a.currentPageData?.meta?.passwordButtonText ?? 'Enter'),
        g = u(
          () =>
            a.currentPageData?.meta?.passwordPlaceholderText ?? 'Type password'
        ),
        d = u(() => a.currentPageData?.meta?.passwordBackText ?? 'Back to'),
        v = u(() => i.value === yc),
        f = u(() => i.value === bc),
        { openUnlockedPage: y } = Wl({
          pagePassword: r.value,
          locale: a.locale,
          pageId: a.pageId,
        }),
        S = async () => {
          const L = await Zy(t.value);
          if (!t.value || L !== r.value) {
            o.value = 'Please enter the correct password';
            return;
          }
          y();
        },
        T = u(() =>
          a.locale && a.locale !== a.defaultLocale ? `/${a.locale}` : '/'
        ),
        w = u(() => !a.inPreviewMode && !a.isCurrentPageHomepage);
      Oe(() => {
        document.body.style.overflow = 'hidden';
      }),
        Tt(() => {
          document.body.style.overflow = '';
        });
      const b = {
        props: a,
        password: t,
        errorMessage: o,
        passwordPageStyle: i,
        currentPagePassword: r,
        passwordPageHeading: s,
        passwordPageSubheading: l,
        passwordPageButtonText: m,
        passwordPlaceholder: g,
        passwordBackText: d,
        isCalmTheme: v,
        isPopularTheme: f,
        openUnlockedPage: y,
        unlock: S,
        homepageLink: T,
        isHomepageLinkShown: w,
        get PASSWORD_PAGE_PLACEHOLDERS_BASE_PATH() {
          return Fd;
        },
      };
      return (
        Object.defineProperty(b, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        b
      );
    },
  }),
  eb = (e) => (Bt('data-v-5df21e4b'), (e = e()), xt(), e),
  tb = { key: 0, class: 'password-page__background-wave-wrapper' },
  ab = eb(() =>
    E('div', { class: 'password-page__background-wave' }, null, -1)
  ),
  nb = [ab],
  ob = ['src'],
  rb = { key: 0, class: 'password-page__icon-lock', src: Xy },
  ib = { class: 'password-page__heading' },
  sb = { for: 'password', class: 'password-page__label' },
  lb = ['placeholder'],
  ub = { key: 1, class: 'password-page__error-message' },
  cb = { class: 'password-page__button', type: 'submit' },
  db = { key: 2, class: 'password-page__homepage-link' },
  mb = ['href'];
function gb(e, n, a, t, o, i) {
  const r = je('qa');
  return (
    c(),
    h(
      'main',
      {
        class: Z([
          'password-page',
          {
            'password-page--calm': t.isCalmTheme,
            'password-page--popular': t.isPopularTheme,
          },
        ]),
      },
      [
        t.isCalmTheme
          ? ue((c(), h('div', tb, nb)), [[r, 'password-page-background-calm']])
          : O('', !0),
        t.isPopularTheme
          ? ue(
              (c(),
              h(
                'img',
                {
                  key: 1,
                  class: 'password-page__background-image',
                  src: `${t.PASSWORD_PAGE_PLACEHOLDERS_BASE_PATH}/guest-area-background-popular.png`,
                },
                null,
                8,
                ob
              )),
              [[r, 'password-page-background-popular']]
            )
          : O('', !0),
        E(
          'form',
          { class: 'password-page__form', onSubmit: De(t.unlock, ['prevent']) },
          [
            t.isCalmTheme ? (c(), h('img', rb)) : O('', !0),
            ue((c(), h('h1', ib, [He(X(t.passwordPageHeading), 1)])), [
              [r, 'password-page-heading'],
            ]),
            ue((c(), h('label', sb, [He(X(t.passwordPageSubheading), 1)])), [
              [r, 'password-page-subheading'],
            ]),
            ue(
              E(
                'input',
                {
                  id: 'password',
                  'onUpdate:modelValue':
                    n[0] || (n[0] = (s) => (t.password = s)),
                  type: 'password',
                  autocomplete: 'off',
                  autocapitalize: 'off',
                  autocorrect: 'off',
                  name: 'password',
                  placeholder: t.passwordPlaceholder,
                  required: '',
                  class: Z([
                    'password-page__input',
                    { 'password-page__input--error': t.errorMessage },
                  ]),
                  onBlur: n[1] || (n[1] = (s) => (t.errorMessage = '')),
                },
                null,
                42,
                lb
              ),
              [
                [al, t.password],
                [r, 'password-page-placeholder'],
              ]
            ),
            t.errorMessage
              ? (c(), h('p', ub, X(t.errorMessage), 1))
              : O('', !0),
            ue((c(), h('button', cb, [He(X(t.passwordPageButtonText), 1)])), [
              [r, 'password-page-button'],
            ]),
            t.isHomepageLinkShown
              ? ue(
                  (c(),
                  h('p', db, [
                    He(X(t.passwordBackText) + ' ', 1),
                    E(
                      'a',
                      {
                        href: t.homepageLink,
                        class: 'password-page__homepage-link-text',
                      },
                      X(a.homepageName),
                      9,
                      mb
                    ),
                  ])),
                  [[r, 'password-page-footer']]
                )
              : O('', !0),
          ],
          32
        ),
      ],
      2
    )
  );
}
const vb = oe(Jy, [
    ['render', gb],
    ['__scopeId', 'data-v-5df21e4b'],
  ]),
  pb = {},
  hb = Nr(
    '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-334df6f8><path d="M2 4H3.33333H14" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M5.3335 4.00004V2.66671C5.3335 2.31309 5.47397 1.97395 5.72402 1.7239C5.97407 1.47385 6.31321 1.33337 6.66683 1.33337H9.3335C9.68712 1.33337 10.0263 1.47385 10.2763 1.7239C10.5264 1.97395 10.6668 2.31309 10.6668 2.66671V4.00004M12.6668 4.00004V13.3334C12.6668 13.687 12.5264 14.0261 12.2763 14.2762C12.0263 14.5262 11.6871 14.6667 11.3335 14.6667H4.66683C4.31321 14.6667 3.97407 14.5262 3.72402 14.2762C3.47397 14.0261 3.3335 13.687 3.3335 13.3334V4.00004H12.6668Z" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M6.6665 7.33337V11.3334" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M9.3335 7.33337V11.3334" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path></svg>',
    1
  ),
  fb = [hb];
function yb(e, n) {
  return (
    c(),
    h(
      'button',
      {
        class: 'delete-button',
        onClick: n[0] || (n[0] = (a) => e.$emit('handle-button-click')),
      },
      fb
    )
  );
}
const bb = oe(pb, [
    ['render', yb],
    ['__scopeId', 'data-v-334df6f8'],
  ]),
  _b = {},
  wb = (e) => (Bt('data-v-2f9813ef'), (e = e()), xt(), e),
  kb = { class: 'close-button' },
  Sb = wb(() =>
    E(
      'svg',
      {
        width: '16',
        height: '16',
        viewBox: '0 0 16 16',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      [
        E('path', {
          d: 'M12 4L4 12',
          stroke: 'currentColor',
          'stroke-width': '1.5',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
        }),
        E('path', {
          d: 'M4 4L12 12',
          stroke: 'currentColor',
          'stroke-width': '1.5',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
        }),
      ],
      -1
    )
  ),
  Tb = [Sb];
function Cb(e, n) {
  return c(), h('button', kb, Tb);
}
const ei = oe(_b, [
    ['render', Cb],
    ['__scopeId', 'data-v-2f9813ef'],
  ]),
  Pb = re({
    name: 'Drawer',
    components: { CloseButton: ei },
    props: {
      placement: {
        type: String,
        default: 'right',
        validator: (e) => ['right', 'left'].includes(e),
      },
      width: { type: String, default: '350px' },
      alwaysShowCloseButton: { type: Boolean, default: !0 },
      isOpen: { type: Boolean, default: !1 },
      topPositionMobile: { type: String, default: '0px' },
    },
    emits: ['close-drawer'],
    setup(e, n) {
      const a = M(null);
      return (
        Oe(() => {
          ko(a, () => {
            n.emit('close-drawer');
          });
        }),
        { siteDrawerRef: a }
      );
    },
    computed: {
      computedStyles() {
        return {
          '--sidebar-width': this.width,
          '--sidebar-top-mobile': this.topPositionMobile,
        };
      },
    },
    methods: {
      closeDrawer() {
        this.$emit('close-drawer');
      },
    },
  }),
  Ib = { class: 'site-drawer__content' };
function Eb(e, n, a, t, o, i) {
  const r = Be('CloseButton'),
    s = je('qa');
  return (
    c(),
    h('div', null, [
      e.isOpen
        ? (c(),
          h(
            'div',
            {
              key: 0,
              class: Z([
                'site-drawer-overlay',
                { 'site-drawer-overlay--open': e.isOpen },
              ]),
              onTouchend: n[0] || (n[0] = De(() => {}, ['stop', 'prevent'])),
            },
            null,
            34
          ))
        : O('', !0),
      Me(
        Ot,
        {
          name:
            e.placement === 'right'
              ? 'drawer-slide-right'
              : 'drawer-slide-left',
        },
        {
          default: he(() => [
            e.isOpen
              ? (c(),
                h(
                  'aside',
                  {
                    key: 0,
                    ref: 'siteDrawerRef',
                    class: Z([
                      {
                        'site-drawer--left': e.placement === 'left',
                        'site-drawer--right': e.placement === 'right',
                      },
                      'site-drawer',
                    ]),
                    style: Ae(e.computedStyles),
                  },
                  [
                    E('div', Ib, [
                      ue(
                        (c(),
                        h(
                          'span',
                          {
                            class: Z([
                              'site-drawer__close-button',
                              {
                                'site-drawer__close-button--hide-mobile':
                                  !e.alwaysShowCloseButton,
                              },
                            ]),
                            onClick:
                              n[1] ||
                              (n[1] = (...l) =>
                                e.closeDrawer && e.closeDrawer(...l)),
                          },
                          [Me(r)],
                          2
                        )),
                        [[s, 'builder-sitedrawer-btn-close']]
                      ),
                      te(e.$slots, 'default', {}, void 0, !0),
                    ]),
                  ],
                  6
                ))
              : O('', !0),
          ]),
          _: 3,
        },
        8,
        ['name']
      ),
    ])
  );
}
const Db = oe(Pb, [
    ['render', Eb],
    ['__scopeId', 'data-v-12672165'],
  ]),
  Es = 90,
  Mb = re({
    components: {
      Drawer: Db,
      DeleteButton: bb,
      ProductImage: bo,
      QuantityPicker: Vl,
    },
    props: {
      isLoading: { type: Boolean, default: !1 },
      isShoppingCartOpen: { type: Boolean, default: !1 },
      translations: { type: Object, default: null },
      language: { type: String, default: 'en' },
      isHeaderSticky: { type: Boolean, default: !1 },
      isNavHidden: { type: Boolean, default: !1 },
      siteId: { type: String, default: null },
      quantifiedCartItemsList: { type: Array, default: () => [] },
      products: { type: Array, default: () => [] },
      shoppingCartItems: { type: Array, default: () => [] },
      variantsQuantity: { type: Array, default: () => [] },
    },
    emits: [
      'close-shopping-cart',
      'checkout-button-click',
      'set-shopping-cart-items',
    ],
    data() {
      return {
        IMAGE_WIDTH_PX: Es,
        isHeaderVisible: !1,
        topPositionMobile: '0px',
        resizeObserver: null,
      };
    },
    computed: {
      totalPrice() {
        return this.quantifiedCartItemsList.reduce(
          (e, n) =>
            e +
            (n.product?.variants[0]?.prices[0]?.sale_amount ||
              n.product?.variants[0]?.prices[0]?.amount ||
              0) *
              n.quantity,
          0
        );
      },
      currencyCode() {
        return this.products[0]?.variants[0]?.prices[0]?.currency;
      },
      computedStyle() {
        return { '--image-width': `${Es}px` };
      },
      isLimitReached() {
        return this.shoppingCartItems.length >= Za;
      },
    },
    watch: {
      isShoppingCartOpen(e) {
        document.documentElement.style.overflow = e ? 'hidden' : 'auto';
      },
      headerHeight() {
        this.setHeaderVisibilityValues();
      },
    },
    mounted() {
      const e = document.querySelector('.block-header');
      e &&
        ((this.resizeObserver = new ResizeObserver(() => {
          this.setHeaderHeight();
        })),
        this.resizeObserver.observe(e)),
        window.addEventListener('scroll', this.setHeaderVisibilityValues);
    },
    beforeUnmount() {
      this.resizeObserver?.disconnect(),
        window.removeEventListener('scroll', this.setHeaderVisibilityValues);
    },
    methods: {
      getFormattedBookingDuration: Zr,
      formatPrice: Ta,
      isStockAvailable(e) {
        if (e.product.variants[0].manage_inventory) {
          const a =
            this.variantsQuantity.find((t) => t.id === e.product.variants[0].id)
              ?.inventory_quantity || 0;
          return e.quantity < a;
        }
        return !0;
      },
      handleQuantityChange(e, n) {
        if (e > n.quantity) {
          this.increaseQuantity(n);
          return;
        }
        this.decreaseQuantity(n);
      },
      decreaseQuantity(e) {
        const n = [...this.shoppingCartItems],
          a = this.shoppingCartItems.filter(
            (o) => o.variants[0].id === e.product.variants[0].id
          ),
          t = this.shoppingCartItems.lastIndexOf(a[a.length - 1]);
        n.splice(t, 1), this.$emit('set-shopping-cart-items', n);
      },
      increaseQuantity(e) {
        this.$emit('set-shopping-cart-items', [
          ...this.shoppingCartItems,
          e.product,
        ]);
      },
      removeProduct(e) {
        const n = this.shoppingCartItems.filter(
          (a) => a.variants[0].id !== e.variants[0].id
        );
        this.$emit('set-shopping-cart-items', n);
      },
      closeShoppingCart() {
        this.$emit('close-shopping-cart');
      },
      setHeaderVisibility() {
        this.isHeaderVisible =
          this.isHeaderSticky ||
          (this.isNavHidden
            ? !1
            : window.scrollY <= Number(this.headerHeight) * 0.4);
      },
      setTopPositionMobile() {
        const e = this.isHeaderSticky
          ? this.headerHeight
          : this.headerHeight - window.scrollY;
        this.topPositionMobile = `${
          this.isHeaderVisible ? Math.floor(e) - 1 : 0
        }px`;
      },
      setHeaderVisibilityValues() {
        this.setHeaderVisibility(), this.setTopPositionMobile();
      },
      setHeaderHeight() {
        this.headerHeight =
          document.querySelector('.block-header')?.clientHeight;
      },
      getFormattedSelectedDate(e) {
        return (
          new Date(
            e.product?.variants[0]?.booking_event?.date
          ).toLocaleDateString(this.language) || null
        );
      },
      getFormattedTime(e) {
        const n = new Date(e.product?.variants[0]?.booking_event?.time_slot),
          a = n.getTime(),
          t = new Date(a + wr(e.product)),
          o = n.toLocaleTimeString(this.language, {
            hour: '2-digit',
            minute: '2-digit',
          }),
          i = t.toLocaleTimeString(this.language, {
            hour: '2-digit',
            minute: '2-digit',
          });
        return `${o} - ${i}`;
      },
      isProductBookingType(e) {
        return e.product?.type.value === Vt;
      },
      getProductImage(e) {
        return e.product.variants[0].image_url || e.product.thumbnail;
      },
    },
  }),
  ql = (e) => (Bt('data-v-688c363e'), (e = e()), xt(), e),
  Ob = { class: 'cart' },
  Lb = { class: 'cart__content' },
  Ab = {
    key: 0,
    class: 'cart__content-title cart__content-title--with-margin',
  },
  Bb = { key: 1, class: 'cart__content-title' },
  xb = { class: 'cart__list' },
  Rb = { class: 'cart__title' },
  Hb = { key: 0, class: 'cart__text' },
  Nb = { key: 1, class: 'cart__text cart__sale-price' },
  $b = { class: 'cart__text cart__duration' },
  Vb = { class: 'cart__time-wrapper' },
  Ub = ql(() =>
    E(
      'svg',
      {
        width: '16',
        height: '18',
        viewBox: '0 0 16 18',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        class: 'cart__time-icon',
      },
      [
        E('path', {
          d: 'M5.5 8.3335H3.83333V10.0002H5.5V8.3335ZM8.83333 8.3335H7.16667V10.0002H8.83333V8.3335ZM12.1667 8.3335H10.5V10.0002H12.1667V8.3335ZM13.8333 2.50016H13V0.833496H11.3333V2.50016H4.66667V0.833496H3V2.50016H2.16667C1.24167 2.50016 0.5 3.25016 0.5 4.16683V15.8335C0.5 16.2755 0.675595 16.6994 0.988155 17.012C1.30072 17.3246 1.72464 17.5002 2.16667 17.5002H13.8333C14.2754 17.5002 14.6993 17.3246 15.0118 17.012C15.3244 16.6994 15.5 16.2755 15.5 15.8335V4.16683C15.5 3.7248 15.3244 3.30088 15.0118 2.98832C14.6993 2.67576 14.2754 2.50016 13.8333 2.50016ZM13.8333 15.8335H2.16667V6.66683H13.8333V15.8335Z',
          fill: 'currentColor',
        }),
      ],
      -1
    )
  ),
  Yb = { class: 'cart__text cart__text--lighter' },
  Fb = { class: 'cart__time-wrapper' },
  Wb = ql(() =>
    E(
      'svg',
      {
        width: '18',
        height: '18',
        viewBox: '0 0 18 18',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        class: 'cart__time-icon',
      },
      [
        E('path', {
          d: 'M9.00001 15.6665C12.6667 15.6665 15.6667 12.6665 15.6667 8.99984C15.6667 5.33317 12.6667 2.33317 9.00001 2.33317C5.33334 2.33317 2.33334 5.33317 2.33334 8.99984C2.33334 12.6665 5.33334 15.6665 9.00001 15.6665ZM9.00001 0.666504C13.5833 0.666504 17.3333 4.4165 17.3333 8.99984C17.3333 13.5832 13.5833 17.3332 9.00001 17.3332C4.41667 17.3332 0.666672 13.5832 0.666672 8.99984C0.666672 4.4165 4.41667 0.666504 9.00001 0.666504ZM13.1667 8.58317V9.83317H8.16667V4.83317H9.41667V8.58317H13.1667Z',
          fill: 'currentColor',
        }),
      ],
      -1
    )
  ),
  qb = { class: 'cart__text cart__text--lighter' },
  Gb = { key: 3, class: 'cart__quantity' },
  jb = { class: 'cart__quantity-title' },
  zb = { key: 0, class: 'cart__footer' },
  Kb = { class: 'cart__title cart__title--with-slot' };
function Qb(e, n, a, t, o, i) {
  const r = Be('ProductImage'),
    s = Be('QuantityPicker'),
    l = Be('DeleteButton'),
    m = Be('Drawer'),
    g = je('qa');
  return (
    c(),
    q(
      m,
      {
        'is-open': e.isShoppingCartOpen,
        'top-position-mobile': e.topPositionMobile,
        style: Ae(e.computedStyle),
        onCloseDrawer: e.closeShoppingCart,
      },
      {
        default: he(() => [
          E('div', Ob, [
            E('div', Lb, [
              e.quantifiedCartItemsList.length
                ? (c(), h('p', Bb, X(e.translations.shoppingBag), 1))
                : ue(
                    (c(),
                    h('p', Ab, [He(X(e.translations.shoppingBagEmpty), 1)])),
                    [[g, 'shoppingcart-text-emptystate']]
                  ),
              E('ul', xb, [
                (c(!0),
                h(
                  ge,
                  null,
                  ke(
                    e.quantifiedCartItemsList,
                    (d) => (
                      c(),
                      h(
                        'li',
                        {
                          key: d.product.variants[0].id,
                          class: 'cart__list-item',
                        },
                        [
                          d.product.thumbnail
                            ? (c(),
                              q(
                                r,
                                {
                                  key: 0,
                                  src: e.getProductImage(d),
                                  alt: d.product.title,
                                  class: 'cart__list-item-image',
                                  width: e.IMAGE_WIDTH_PX,
                                  height: e.IMAGE_WIDTH_PX,
                                  'site-id': e.siteId,
                                  'enable-srcset': '',
                                },
                                null,
                                8,
                                ['src', 'alt', 'width', 'height', 'site-id']
                              ))
                            : O('', !0),
                          E('div', null, [
                            ue((c(), h('p', Rb, [He(X(d.product.title), 1)])), [
                              [g, 'shoppingcart-text-product'],
                            ]),
                            d.product.options.length
                              ? ue(
                                  (c(),
                                  h('p', Hb, [
                                    He(X(d.product.variants[0].title), 1),
                                  ])),
                                  [[g, 'shoppingcart-text-variant']]
                                )
                              : O('', !0),
                            ue(
                              (c(),
                              h(
                                'p',
                                {
                                  class: Z([
                                    'cart__text cart__price',
                                    {
                                      'cart__price--strikethrough':
                                        d.product.variants[0].prices[0]
                                          .sale_amount,
                                    },
                                  ]),
                                },
                                [
                                  He(
                                    X(
                                      e.formatPrice({
                                        amount:
                                          d.product.variants[0].prices[0]
                                            .amount,
                                        currency:
                                          d.product.variants[0].prices[0]
                                            .currency,
                                      })
                                    ),
                                    1
                                  ),
                                ],
                                2
                              )),
                              [[g, 'shoppingcart-text-price']]
                            ),
                            d.product.variants[0].prices[0].sale_amount
                              ? ue(
                                  (c(),
                                  h('p', Nb, [
                                    He(
                                      X(
                                        e.formatPrice({
                                          amount:
                                            d.product.variants[0].prices[0]
                                              .sale_amount,
                                          currency:
                                            d.product.variants[0].prices[0]
                                              .currency,
                                        })
                                      ),
                                      1
                                    ),
                                  ])),
                                  [[g, 'shoppingcart-text-saleprice']]
                                )
                              : O('', !0),
                            e.isProductBookingType(d)
                              ? (c(),
                                h(
                                  ge,
                                  { key: 2 },
                                  [
                                    ue(
                                      (c(),
                                      h('p', $b, [
                                        He(
                                          X(
                                            e.getFormattedBookingDuration(
                                              d.product,
                                              e.translations
                                            )
                                          ),
                                          1
                                        ),
                                      ])),
                                      [[g, 'shoppingcart-text-duration']]
                                    ),
                                    E('div', Vb, [
                                      Ub,
                                      E(
                                        'p',
                                        Yb,
                                        X(e.getFormattedSelectedDate(d)),
                                        1
                                      ),
                                    ]),
                                    E('div', Fb, [
                                      Wb,
                                      E('p', qb, X(e.getFormattedTime(d)), 1),
                                    ]),
                                  ],
                                  64
                                ))
                              : (c(),
                                h('p', Gb, [
                                  E(
                                    'span',
                                    jb,
                                    X(e.translations.quantityShort) + ': ',
                                    1
                                  ),
                                  Me(
                                    s,
                                    {
                                      'qa-selector': 'shoppingcart',
                                      'is-cart-style': '',
                                      size: 26,
                                      'font-size': 14,
                                      quantity: d.quantity,
                                      'is-input-disabled': '',
                                      'is-limit-reached': e.isLimitReached,
                                      'is-stock-available':
                                        e.isStockAvailable(d),
                                      onQuantityChange: (v) =>
                                        e.handleQuantityChange(v, d),
                                    },
                                    null,
                                    8,
                                    [
                                      'quantity',
                                      'is-limit-reached',
                                      'is-stock-available',
                                      'onQuantityChange',
                                    ]
                                  ),
                                ])),
                          ]),
                          ue(
                            Me(
                              l,
                              {
                                class: 'cart__remove-button',
                                onHandleButtonClick: (v) =>
                                  e.removeProduct(d.product),
                              },
                              null,
                              8,
                              ['onHandleButtonClick']
                            ),
                            [[g, 'shoppingcart-btn-delete']]
                          ),
                        ]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ]),
            e.quantifiedCartItemsList.length
              ? (c(),
                h('div', zb, [
                  ue(
                    (c(),
                    h('p', Kb, [
                      He(X(e.translations.subtotal) + ': ', 1),
                      E(
                        'span',
                        null,
                        X(
                          e.formatPrice({
                            amount: e.totalPrice,
                            currency: e.currencyCode,
                          })
                        ),
                        1
                      ),
                    ])),
                    [[g, 'shoppingcart-text-subtotal']]
                  ),
                  ue(
                    (c(),
                    h(
                      'button',
                      {
                        class: Z([
                          'cart__text cart__checkout-button',
                          { loading: e.isLoading },
                        ]),
                        onClick:
                          n[0] ||
                          (n[0] = (d) => e.$emit('checkout-button-click')),
                      },
                      [He(X(e.translations.checkout), 1)],
                      2
                    )),
                    [[g, 'shoppingcart-btn-checkout']]
                  ),
                ]))
              : O('', !0),
          ]),
        ]),
        _: 1,
      },
      8,
      ['is-open', 'top-position-mobile', 'style', 'onCloseDrawer']
    )
  );
}
const Zb = oe(Mb, [
    ['render', Qb],
    ['__scopeId', 'data-v-688c363e'],
  ]),
  Xb = re({
    components: { EcommerceShoppingCart: Zb },
    props: {
      headerHeight: { type: Number, default: 0 },
      ecommerceTranslations: { type: Object, default: () => ({}) },
      language: { type: String, default: 'en' },
      currentPageEcommerceBlocks: { type: Array, default: () => [] },
      currentPageEcommerceComponents: { type: Array, default: () => [] },
      isHeaderSticky: { type: Boolean, default: !1 },
      isNavHidden: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e) {
      const { siteId: n } = Xe(),
        {
          quantifiedCartItemsList: a,
          products: t,
          isShoppingCartOpen: o,
          isCheckoutLoading: i,
          shoppingCartItems: r,
          variantsQuantity: s,
          fetchProducts: l,
          setShoppingCartOpen: m,
          setShoppingCartItems: g,
          setIsCheckoutLoading: d,
        } = Ut(),
        { openEcommerceModal: v } = $t(),
        { initiateCheckout: f } = nn();
      return {
        openEcommerceModal: v,
        initiateCheckout: f,
        quantifiedCartItemsList: a,
        products: t,
        isShoppingCartOpen: o,
        isCheckoutLoading: i,
        shoppingCartItems: r,
        variantsQuantity: s,
        fetchProducts: l,
        setShoppingCartOpen: m,
        setShoppingCartItems: g,
        setIsCheckoutLoading: d,
        siteId: n,
      };
    },
    computed: {
      currentPageEcommerceElements() {
        return [
          ...this.currentPageEcommerceBlocks,
          ...this.currentPageEcommerceComponents,
        ];
      },
      productIds() {
        const n = this.currentPageEcommerceElements
          .reduce((a, t) => {
            let o = [];
            switch (t.type) {
              case 'BlockEcommerceProduct':
                o = [...o, t.product?.id];
                break;
              case 'GridEcommerceButton':
                o = [...o, t.settings?.productId];
                break;
            }
            return [...a, ...o];
          }, [])
          .filter((a) => a !== -1);
        return [...new Set(n)];
      },
    },
    watch: {
      currentPageEcommerceElements: {
        async handler(e, n) {
          JSON.stringify(e) !== JSON.stringify(n) &&
            (await this.loadProducts());
        },
      },
    },
    mounted() {
      this.loadProducts();
    },
    methods: {
      async loadProducts() {
        await this.fetchProducts(this.productIds);
      },
      async initCheckout() {
        if (Na() || this.isInPreviewMode) {
          this.openEcommerceModal('EcommerceMessageButtonDisabled');
          return;
        }
        this.isCheckoutLoading ||
          (this.setIsCheckoutLoading(!0),
          await this.initiateCheckout(this.shoppingCartItems).then(() => {
            this.setShoppingCartOpen(!1), this.setIsCheckoutLoading(!1);
          }));
      },
    },
  });
function Jb(e, n, a, t, o, i) {
  const r = Be('EcommerceShoppingCart'),
    s = je('qa');
  return ue(
    (c(),
    q(
      r,
      {
        'is-shopping-cart-open': e.isShoppingCartOpen,
        'is-loading': e.isCheckoutLoading,
        'header-height': e.headerHeight,
        'is-header-sticky': e.isHeaderSticky,
        'is-nav-hidden': e.isNavHidden,
        translations: e.ecommerceTranslations,
        language: e.language,
        'site-id': e.siteId,
        'quantified-cart-items-list': e.quantifiedCartItemsList,
        products: e.products,
        'shopping-cart-items': e.shoppingCartItems,
        'variants-quantity': e.variantsQuantity,
        onCheckoutButtonClick: e.initCheckout,
        onCloseShoppingCart: n[0] || (n[0] = (l) => e.setShoppingCartOpen(!1)),
        onSetShoppingCartItems: e.setShoppingCartItems,
      },
      null,
      8,
      [
        'is-shopping-cart-open',
        'is-loading',
        'header-height',
        'is-header-sticky',
        'is-nav-hidden',
        'translations',
        'language',
        'site-id',
        'quantified-cart-items-list',
        'products',
        'shopping-cart-items',
        'variants-quantity',
        'onCheckoutButtonClick',
        'onSetShoppingCartItems',
      ]
    )),
    [[s, 'user-section-zyroecommerceshoppingcart']]
  );
}
const e_ = oe(Xb, [['render', Jb]]),
  t_ = re({
    components: { CloseButton: ei },
    props: {
      backgroundColor: { type: String, default: 'var(--color-light)' },
      padding: { type: String, default: '16px' },
      width: { type: String, default: 'auto' },
      maxWidth: { type: String, default: 'unset' },
      overflow: { type: String, default: 'unset' },
      height: { type: String, default: 'auto' },
      mobileHeight: { type: String, default: '' },
    },
    setup() {
      const { closeEcommerceModal: e } = $t();
      return { closeEcommerceModal: e };
    },
    computed: {
      modalStyle() {
        return {
          '--modal-background-color': this.backgroundColor,
          '--padding': this.padding,
          '--width': this.width,
          '--max-width': this.maxWidth,
          '--overflow': this.overflow,
          '--height': this.height,
          '--mobile-height': this.mobileHeight || this.height,
        };
      },
    },
    mounted() {
      this.$refs.modal?.focus();
    },
    methods: {
      handleCloseModalAction() {
        this.closeEcommerceModal();
        const e = new URLSearchParams(window.location.search);
        if (!e.get('open-modal')) return;
        e.delete('open-modal'), e.delete('product');
        const n = e.toString();
        n && window.history.pushState(null, null, `?${n}`);
      },
    },
  }),
  a_ = { class: 'modal-wrapper' };
function n_(e, n, a, t, o, i) {
  const r = Be('CloseButton');
  return (
    c(),
    q(
      Ot,
      { name: 'fade' },
      {
        default: he(() => [
          E('div', a_, [
            E('div', {
              tabindex: '-1',
              class: 'modal-backdrop',
              onClick:
                n[0] ||
                (n[0] = (...s) =>
                  e.handleCloseModalAction && e.handleCloseModalAction(...s)),
            }),
            E(
              'div',
              {
                ref: 'modal',
                style: Ae(e.modalStyle),
                class: 'modal',
                tabindex: '0',
                'aria-modal': 'true',
                onKeydown:
                  n[1] ||
                  (n[1] = Le(
                    (...s) =>
                      e.handleCloseModalAction &&
                      e.handleCloseModalAction(...s),
                    ['esc']
                  )),
              },
              [
                Me(
                  r,
                  {
                    class: 'modal__close-button',
                    onClick: e.handleCloseModalAction,
                  },
                  null,
                  8,
                  ['onClick']
                ),
                te(e.$slots, 'default', {}, void 0, !0),
              ],
              36
            ),
          ]),
        ]),
        _: 3,
      }
    )
  );
}
const vn = oe(t_, [
    ['render', n_],
    ['__scopeId', 'data-v-35831679'],
  ]),
  o_ = {
    __name: 'EcommerceProductPreview',
    props: {
      translations: { type: Object, default: () => {} },
      isQuickPreview: { type: Boolean, default: !1 },
      currentLocale: { type: String, required: !0 },
      isCartVisible: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { productPreviewData: t } = $t(),
        { siteId: o } = Xe(),
        { productPages: i } = Ut(),
        r = u(() =>
          ct(t.value.background.origin, t.value.background.path, o.value, {
            width: ha,
          })
        ),
        s = u(() =>
          fa(t.value.background.origin, t.value.background.path, o.value, {
            isMobileFullScreen: !1,
          })
        ),
        l = {
          props: a,
          productPreviewData: t,
          siteId: o,
          productPages: i,
          backgroundSrc: r,
          backgroundSrcSet: s,
          BlockBackground: qr,
          ModalLayout: vn,
          BlockEcommerceProductProviderUser: Ul,
          computed: u,
          get useEcommerceModal() {
            return $t;
          },
          get getFullWidthSrcset() {
            return fa;
          },
          get getOptimizedSrc() {
            return ct;
          },
          get FULL_WIDTH() {
            return ha;
          },
          get useEcommerceGlobal() {
            return Ut;
          },
          get useSiteGlobal() {
            return Xe;
          },
        };
      return (
        Object.defineProperty(l, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        l
      );
    },
  },
  r_ = { class: 'ecommerce-product-preview__content-wrapper' };
function i_(e, n, a, t, o, i) {
  const r = je('qa');
  return (
    c(),
    q(
      t.ModalLayout,
      {
        ref: 'modal',
        'max-width': '905px',
        width: '100%',
        padding: '0',
        height: 'auto',
        overflow: 'auto',
        class: 'ecommerce-product-preview',
      },
      {
        default: he(() => [
          ue(
            (c(),
            h('div', r_, [
              t.productPreviewData.background
                ? (c(),
                  q(
                    t.BlockBackground,
                    {
                      key: 0,
                      'overlay-opacity':
                        t.productPreviewData.background['overlay-opacity'],
                      type: t.productPreviewData.background.current,
                      color: t.productPreviewData.background.color,
                      gradient: t.productPreviewData.background.gradient,
                      src: t.backgroundSrc,
                      srcset: t.backgroundSrcSet,
                      'is-fixed': t.productPreviewData.attachment === 'fixed',
                      alt:
                        t.productPreviewData.background &&
                        t.productPreviewData.background.alt,
                      class: 'ecommerce-product-preview__background',
                    },
                    null,
                    8,
                    [
                      'overlay-opacity',
                      'type',
                      'color',
                      'gradient',
                      'src',
                      'srcset',
                      'is-fixed',
                      'alt',
                    ]
                  ))
                : O('', !0),
              Me(
                t.BlockEcommerceProductProviderUser,
                {
                  class: 'ecommerce-product-preview__content',
                  'is-quick-preview': a.isQuickPreview,
                  data: t.productPreviewData,
                  'product-pages': t.productPages,
                  'is-cart-visible': a.isCartVisible,
                  'ecommerce-translations': a.translations,
                },
                null,
                8,
                [
                  'is-quick-preview',
                  'data',
                  'product-pages',
                  'is-cart-visible',
                  'ecommerce-translations',
                ]
              ),
            ])),
            [[r, 'productpreview-modal']]
          ),
        ]),
        _: 1,
      },
      512
    )
  );
}
const s_ = oe(o_, [
  ['render', i_],
  ['__scopeId', 'data-v-e0753e53'],
]);
function Yt(e) {
  '@babel/helpers - typeof';
  return (
    (Yt =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (n) {
            return typeof n;
          }
        : function (n) {
            return n &&
              typeof Symbol == 'function' &&
              n.constructor === Symbol &&
              n !== Symbol.prototype
              ? 'symbol'
              : typeof n;
          }),
    Yt(e)
  );
}
function Ie(e) {
  if (e === null || e === !0 || e === !1) return NaN;
  var n = Number(e);
  return isNaN(n) ? n : n < 0 ? Math.ceil(n) : Math.floor(n);
}
function ye(e, n) {
  if (n.length < e)
    throw new TypeError(
      e +
        ' argument' +
        (e > 1 ? 's' : '') +
        ' required, but only ' +
        n.length +
        ' present'
    );
}
function Se(e) {
  ye(1, arguments);
  var n = Object.prototype.toString.call(e);
  return e instanceof Date || (Yt(e) === 'object' && n === '[object Date]')
    ? new Date(e.getTime())
    : typeof e == 'number' || n === '[object Number]'
    ? new Date(e)
    : ((typeof e == 'string' || n === '[object String]') &&
        typeof console < 'u' &&
        (console.warn(
          "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
        ),
        console.warn(new Error().stack)),
      new Date(NaN));
}
function ma(e, n) {
  ye(2, arguments);
  var a = Se(e),
    t = Ie(n);
  return isNaN(t) ? new Date(NaN) : (t && a.setDate(a.getDate() + t), a);
}
function Gt(e, n) {
  ye(2, arguments);
  var a = Se(e),
    t = Ie(n);
  if (isNaN(t)) return new Date(NaN);
  if (!t) return a;
  var o = a.getDate(),
    i = new Date(a.getTime());
  i.setMonth(a.getMonth() + t + 1, 0);
  var r = i.getDate();
  return o >= r ? i : (a.setFullYear(i.getFullYear(), i.getMonth(), o), a);
}
function Gl(e, n) {
  if ((ye(2, arguments), !n || Yt(n) !== 'object')) return new Date(NaN);
  var a = n.years ? Ie(n.years) : 0,
    t = n.months ? Ie(n.months) : 0,
    o = n.weeks ? Ie(n.weeks) : 0,
    i = n.days ? Ie(n.days) : 0,
    r = n.hours ? Ie(n.hours) : 0,
    s = n.minutes ? Ie(n.minutes) : 0,
    l = n.seconds ? Ie(n.seconds) : 0,
    m = Se(e),
    g = t || a ? Gt(m, t + a * 12) : m,
    d = i || o ? ma(g, i + o * 7) : g,
    v = s + r * 60,
    f = l + v * 60,
    y = f * 1e3,
    S = new Date(d.getTime() + y);
  return S;
}
function l_(e, n) {
  ye(2, arguments);
  var a = Se(e).getTime(),
    t = Ie(n);
  return new Date(a + t);
}
var u_ = {};
function la() {
  return u_;
}
function $a(e, n) {
  var a, t, o, i, r, s, l, m;
  ye(1, arguments);
  var g = la(),
    d = Ie(
      (a =
        (t =
          (o =
            (i = n?.weekStartsOn) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (s = r.options) === null ||
                s === void 0
              ? void 0
              : s.weekStartsOn) !== null && o !== void 0
            ? o
            : g.weekStartsOn) !== null && t !== void 0
          ? t
          : (l = g.locale) === null ||
            l === void 0 ||
            (m = l.options) === null ||
            m === void 0
          ? void 0
          : m.weekStartsOn) !== null && a !== void 0
        ? a
        : 0
    );
  if (!(d >= 0 && d <= 6))
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  var v = Se(e),
    f = v.getDay(),
    y = (f < d ? 7 : 0) + f - d;
  return v.setDate(v.getDate() - y), v.setHours(0, 0, 0, 0), v;
}
function co(e) {
  return ye(1, arguments), $a(e, { weekStartsOn: 1 });
}
function c_(e) {
  ye(1, arguments);
  var n = Se(e),
    a = n.getFullYear(),
    t = new Date(0);
  t.setFullYear(a + 1, 0, 4), t.setHours(0, 0, 0, 0);
  var o = co(t),
    i = new Date(0);
  i.setFullYear(a, 0, 4), i.setHours(0, 0, 0, 0);
  var r = co(i);
  return n.getTime() >= o.getTime()
    ? a + 1
    : n.getTime() >= r.getTime()
    ? a
    : a - 1;
}
function d_(e) {
  ye(1, arguments);
  var n = c_(e),
    a = new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var t = co(a);
  return t;
}
function mo(e) {
  var n = new Date(
    Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds()
    )
  );
  return n.setUTCFullYear(e.getFullYear()), e.getTime() - n.getTime();
}
function Ds(e) {
  ye(1, arguments);
  var n = Se(e);
  return n.setHours(0, 0, 0, 0), n;
}
var m_ = 864e5;
function g_(e, n) {
  ye(2, arguments);
  var a = Ds(e),
    t = Ds(n),
    o = a.getTime() - mo(a),
    i = t.getTime() - mo(t);
  return Math.round((o - i) / m_);
}
function v_(e, n) {
  ye(2, arguments);
  var a = Ie(n),
    t = a * 3;
  return Gt(e, t);
}
function ti(e, n) {
  ye(2, arguments);
  var a = Ie(n);
  return Gt(e, a * 12);
}
var ai = 6e4,
  ni = 36e5,
  p_ = 1e3;
function jl(e) {
  return (
    ye(1, arguments),
    e instanceof Date ||
      (Yt(e) === 'object' &&
        Object.prototype.toString.call(e) === '[object Date]')
  );
}
function On(e) {
  if ((ye(1, arguments), !jl(e) && typeof e != 'number')) return !1;
  var n = Se(e);
  return !isNaN(Number(n));
}
function Ms(e) {
  ye(1, arguments);
  var n = Se(e),
    a = Math.floor(n.getMonth() / 3) + 1;
  return a;
}
function zl(e, n) {
  var a;
  ye(1, arguments);
  var t = e || {},
    o = Se(t.start),
    i = Se(t.end),
    r = i.getTime();
  if (!(o.getTime() <= r)) throw new RangeError('Invalid interval');
  var s = [],
    l = o;
  l.setHours(0, 0, 0, 0);
  var m = Number((a = void 0) !== null && a !== void 0 ? a : 1);
  if (m < 1 || isNaN(m))
    throw new RangeError('`options.step` must be a number greater than 1');
  for (; l.getTime() <= r; )
    s.push(Se(l)), l.setDate(l.getDate() + m), l.setHours(0, 0, 0, 0);
  return s;
}
function Un(e) {
  ye(1, arguments);
  var n = Se(e),
    a = n.getMonth(),
    t = a - (a % 3);
  return n.setMonth(t, 1), n.setHours(0, 0, 0, 0), n;
}
function h_(e) {
  ye(1, arguments);
  var n = e || {},
    a = Se(n.start),
    t = Se(n.end),
    o = t.getTime();
  if (!(a.getTime() <= o)) throw new RangeError('Invalid interval');
  var i = Un(a),
    r = Un(t);
  o = r.getTime();
  for (var s = [], l = i; l.getTime() <= o; ) s.push(Se(l)), (l = v_(l, 1));
  return s;
}
function f_(e) {
  ye(1, arguments);
  var n = Se(e),
    a = n.getFullYear();
  return n.setFullYear(a + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function y_(e) {
  ye(1, arguments);
  var n = Se(e),
    a = new Date(0);
  return a.setFullYear(n.getFullYear(), 0, 1), a.setHours(0, 0, 0, 0), a;
}
function b_(e, n) {
  var a, t, o, i, r, s, l, m;
  ye(1, arguments);
  var g = la(),
    d = Ie(
      (a =
        (t =
          (o =
            (i = n?.weekStartsOn) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (s = r.options) === null ||
                s === void 0
              ? void 0
              : s.weekStartsOn) !== null && o !== void 0
            ? o
            : g.weekStartsOn) !== null && t !== void 0
          ? t
          : (l = g.locale) === null ||
            l === void 0 ||
            (m = l.options) === null ||
            m === void 0
          ? void 0
          : m.weekStartsOn) !== null && a !== void 0
        ? a
        : 0
    );
  if (!(d >= 0 && d <= 6))
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  var v = Se(e),
    f = v.getDay(),
    y = (f < d ? -7 : 0) + 6 - (f - d);
  return v.setDate(v.getDate() + y), v.setHours(23, 59, 59, 999), v;
}
function Os(e) {
  ye(1, arguments);
  var n = Se(e),
    a = n.getMonth(),
    t = a - (a % 3) + 3;
  return n.setMonth(t, 0), n.setHours(23, 59, 59, 999), n;
}
function Kl(e, n) {
  ye(2, arguments);
  var a = Ie(n);
  return l_(e, -a);
}
var __ = 864e5;
function w_(e) {
  ye(1, arguments);
  var n = Se(e),
    a = n.getTime();
  n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
  var t = n.getTime(),
    o = a - t;
  return Math.floor(o / __) + 1;
}
function sn(e) {
  ye(1, arguments);
  var n = 1,
    a = Se(e),
    t = a.getUTCDay(),
    o = (t < n ? 7 : 0) + t - n;
  return a.setUTCDate(a.getUTCDate() - o), a.setUTCHours(0, 0, 0, 0), a;
}
function Ql(e) {
  ye(1, arguments);
  var n = Se(e),
    a = n.getUTCFullYear(),
    t = new Date(0);
  t.setUTCFullYear(a + 1, 0, 4), t.setUTCHours(0, 0, 0, 0);
  var o = sn(t),
    i = new Date(0);
  i.setUTCFullYear(a, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var r = sn(i);
  return n.getTime() >= o.getTime()
    ? a + 1
    : n.getTime() >= r.getTime()
    ? a
    : a - 1;
}
function k_(e) {
  ye(1, arguments);
  var n = Ql(e),
    a = new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var t = sn(a);
  return t;
}
var S_ = 6048e5;
function Zl(e) {
  ye(1, arguments);
  var n = Se(e),
    a = sn(n).getTime() - k_(n).getTime();
  return Math.round(a / S_) + 1;
}
function Va(e, n) {
  var a, t, o, i, r, s, l, m;
  ye(1, arguments);
  var g = la(),
    d = Ie(
      (a =
        (t =
          (o =
            (i = n?.weekStartsOn) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (s = r.options) === null ||
                s === void 0
              ? void 0
              : s.weekStartsOn) !== null && o !== void 0
            ? o
            : g.weekStartsOn) !== null && t !== void 0
          ? t
          : (l = g.locale) === null ||
            l === void 0 ||
            (m = l.options) === null ||
            m === void 0
          ? void 0
          : m.weekStartsOn) !== null && a !== void 0
        ? a
        : 0
    );
  if (!(d >= 0 && d <= 6))
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  var v = Se(e),
    f = v.getUTCDay(),
    y = (f < d ? 7 : 0) + f - d;
  return v.setUTCDate(v.getUTCDate() - y), v.setUTCHours(0, 0, 0, 0), v;
}
function oi(e, n) {
  var a, t, o, i, r, s, l, m;
  ye(1, arguments);
  var g = Se(e),
    d = g.getUTCFullYear(),
    v = la(),
    f = Ie(
      (a =
        (t =
          (o =
            (i = n?.firstWeekContainsDate) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (s = r.options) === null ||
                s === void 0
              ? void 0
              : s.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : v.firstWeekContainsDate) !== null && t !== void 0
          ? t
          : (l = v.locale) === null ||
            l === void 0 ||
            (m = l.options) === null ||
            m === void 0
          ? void 0
          : m.firstWeekContainsDate) !== null && a !== void 0
        ? a
        : 1
    );
  if (!(f >= 1 && f <= 7))
    throw new RangeError(
      'firstWeekContainsDate must be between 1 and 7 inclusively'
    );
  var y = new Date(0);
  y.setUTCFullYear(d + 1, 0, f), y.setUTCHours(0, 0, 0, 0);
  var S = Va(y, n),
    T = new Date(0);
  T.setUTCFullYear(d, 0, f), T.setUTCHours(0, 0, 0, 0);
  var w = Va(T, n);
  return g.getTime() >= S.getTime()
    ? d + 1
    : g.getTime() >= w.getTime()
    ? d
    : d - 1;
}
function T_(e, n) {
  var a, t, o, i, r, s, l, m;
  ye(1, arguments);
  var g = la(),
    d = Ie(
      (a =
        (t =
          (o =
            (i = n?.firstWeekContainsDate) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (s = r.options) === null ||
                s === void 0
              ? void 0
              : s.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : g.firstWeekContainsDate) !== null && t !== void 0
          ? t
          : (l = g.locale) === null ||
            l === void 0 ||
            (m = l.options) === null ||
            m === void 0
          ? void 0
          : m.firstWeekContainsDate) !== null && a !== void 0
        ? a
        : 1
    ),
    v = oi(e, n),
    f = new Date(0);
  f.setUTCFullYear(v, 0, d), f.setUTCHours(0, 0, 0, 0);
  var y = Va(f, n);
  return y;
}
var C_ = 6048e5;
function Xl(e, n) {
  ye(1, arguments);
  var a = Se(e),
    t = Va(a, n).getTime() - T_(a, n).getTime();
  return Math.round(t / C_) + 1;
}
function Ke(e, n) {
  for (var a = e < 0 ? '-' : '', t = Math.abs(e).toString(); t.length < n; )
    t = '0' + t;
  return a + t;
}
var ba = {
    y: function (n, a) {
      var t = n.getUTCFullYear(),
        o = t > 0 ? t : 1 - t;
      return Ke(a === 'yy' ? o % 100 : o, a.length);
    },
    M: function (n, a) {
      var t = n.getUTCMonth();
      return a === 'M' ? String(t + 1) : Ke(t + 1, 2);
    },
    d: function (n, a) {
      return Ke(n.getUTCDate(), a.length);
    },
    a: function (n, a) {
      var t = n.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
      switch (a) {
        case 'a':
        case 'aa':
          return t.toUpperCase();
        case 'aaa':
          return t;
        case 'aaaaa':
          return t[0];
        case 'aaaa':
        default:
          return t === 'am' ? 'a.m.' : 'p.m.';
      }
    },
    h: function (n, a) {
      return Ke(n.getUTCHours() % 12 || 12, a.length);
    },
    H: function (n, a) {
      return Ke(n.getUTCHours(), a.length);
    },
    m: function (n, a) {
      return Ke(n.getUTCMinutes(), a.length);
    },
    s: function (n, a) {
      return Ke(n.getUTCSeconds(), a.length);
    },
    S: function (n, a) {
      var t = a.length,
        o = n.getUTCMilliseconds(),
        i = Math.floor(o * Math.pow(10, t - 3));
      return Ke(i, a.length);
    },
  },
  ja = {
    am: 'am',
    pm: 'pm',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night',
  },
  P_ = {
    G: function (n, a, t) {
      var o = n.getUTCFullYear() > 0 ? 1 : 0;
      switch (a) {
        case 'G':
        case 'GG':
        case 'GGG':
          return t.era(o, { width: 'abbreviated' });
        case 'GGGGG':
          return t.era(o, { width: 'narrow' });
        case 'GGGG':
        default:
          return t.era(o, { width: 'wide' });
      }
    },
    y: function (n, a, t) {
      if (a === 'yo') {
        var o = n.getUTCFullYear(),
          i = o > 0 ? o : 1 - o;
        return t.ordinalNumber(i, { unit: 'year' });
      }
      return ba.y(n, a);
    },
    Y: function (n, a, t, o) {
      var i = oi(n, o),
        r = i > 0 ? i : 1 - i;
      if (a === 'YY') {
        var s = r % 100;
        return Ke(s, 2);
      }
      return a === 'Yo'
        ? t.ordinalNumber(r, { unit: 'year' })
        : Ke(r, a.length);
    },
    R: function (n, a) {
      var t = Ql(n);
      return Ke(t, a.length);
    },
    u: function (n, a) {
      var t = n.getUTCFullYear();
      return Ke(t, a.length);
    },
    Q: function (n, a, t) {
      var o = Math.ceil((n.getUTCMonth() + 1) / 3);
      switch (a) {
        case 'Q':
          return String(o);
        case 'QQ':
          return Ke(o, 2);
        case 'Qo':
          return t.ordinalNumber(o, { unit: 'quarter' });
        case 'QQQ':
          return t.quarter(o, { width: 'abbreviated', context: 'formatting' });
        case 'QQQQQ':
          return t.quarter(o, { width: 'narrow', context: 'formatting' });
        case 'QQQQ':
        default:
          return t.quarter(o, { width: 'wide', context: 'formatting' });
      }
    },
    q: function (n, a, t) {
      var o = Math.ceil((n.getUTCMonth() + 1) / 3);
      switch (a) {
        case 'q':
          return String(o);
        case 'qq':
          return Ke(o, 2);
        case 'qo':
          return t.ordinalNumber(o, { unit: 'quarter' });
        case 'qqq':
          return t.quarter(o, { width: 'abbreviated', context: 'standalone' });
        case 'qqqqq':
          return t.quarter(o, { width: 'narrow', context: 'standalone' });
        case 'qqqq':
        default:
          return t.quarter(o, { width: 'wide', context: 'standalone' });
      }
    },
    M: function (n, a, t) {
      var o = n.getUTCMonth();
      switch (a) {
        case 'M':
        case 'MM':
          return ba.M(n, a);
        case 'Mo':
          return t.ordinalNumber(o + 1, { unit: 'month' });
        case 'MMM':
          return t.month(o, { width: 'abbreviated', context: 'formatting' });
        case 'MMMMM':
          return t.month(o, { width: 'narrow', context: 'formatting' });
        case 'MMMM':
        default:
          return t.month(o, { width: 'wide', context: 'formatting' });
      }
    },
    L: function (n, a, t) {
      var o = n.getUTCMonth();
      switch (a) {
        case 'L':
          return String(o + 1);
        case 'LL':
          return Ke(o + 1, 2);
        case 'Lo':
          return t.ordinalNumber(o + 1, { unit: 'month' });
        case 'LLL':
          return t.month(o, { width: 'abbreviated', context: 'standalone' });
        case 'LLLLL':
          return t.month(o, { width: 'narrow', context: 'standalone' });
        case 'LLLL':
        default:
          return t.month(o, { width: 'wide', context: 'standalone' });
      }
    },
    w: function (n, a, t, o) {
      var i = Xl(n, o);
      return a === 'wo'
        ? t.ordinalNumber(i, { unit: 'week' })
        : Ke(i, a.length);
    },
    I: function (n, a, t) {
      var o = Zl(n);
      return a === 'Io'
        ? t.ordinalNumber(o, { unit: 'week' })
        : Ke(o, a.length);
    },
    d: function (n, a, t) {
      return a === 'do'
        ? t.ordinalNumber(n.getUTCDate(), { unit: 'date' })
        : ba.d(n, a);
    },
    D: function (n, a, t) {
      var o = w_(n);
      return a === 'Do'
        ? t.ordinalNumber(o, { unit: 'dayOfYear' })
        : Ke(o, a.length);
    },
    E: function (n, a, t) {
      var o = n.getUTCDay();
      switch (a) {
        case 'E':
        case 'EE':
        case 'EEE':
          return t.day(o, { width: 'abbreviated', context: 'formatting' });
        case 'EEEEE':
          return t.day(o, { width: 'narrow', context: 'formatting' });
        case 'EEEEEE':
          return t.day(o, { width: 'short', context: 'formatting' });
        case 'EEEE':
        default:
          return t.day(o, { width: 'wide', context: 'formatting' });
      }
    },
    e: function (n, a, t, o) {
      var i = n.getUTCDay(),
        r = (i - o.weekStartsOn + 8) % 7 || 7;
      switch (a) {
        case 'e':
          return String(r);
        case 'ee':
          return Ke(r, 2);
        case 'eo':
          return t.ordinalNumber(r, { unit: 'day' });
        case 'eee':
          return t.day(i, { width: 'abbreviated', context: 'formatting' });
        case 'eeeee':
          return t.day(i, { width: 'narrow', context: 'formatting' });
        case 'eeeeee':
          return t.day(i, { width: 'short', context: 'formatting' });
        case 'eeee':
        default:
          return t.day(i, { width: 'wide', context: 'formatting' });
      }
    },
    c: function (n, a, t, o) {
      var i = n.getUTCDay(),
        r = (i - o.weekStartsOn + 8) % 7 || 7;
      switch (a) {
        case 'c':
          return String(r);
        case 'cc':
          return Ke(r, a.length);
        case 'co':
          return t.ordinalNumber(r, { unit: 'day' });
        case 'ccc':
          return t.day(i, { width: 'abbreviated', context: 'standalone' });
        case 'ccccc':
          return t.day(i, { width: 'narrow', context: 'standalone' });
        case 'cccccc':
          return t.day(i, { width: 'short', context: 'standalone' });
        case 'cccc':
        default:
          return t.day(i, { width: 'wide', context: 'standalone' });
      }
    },
    i: function (n, a, t) {
      var o = n.getUTCDay(),
        i = o === 0 ? 7 : o;
      switch (a) {
        case 'i':
          return String(i);
        case 'ii':
          return Ke(i, a.length);
        case 'io':
          return t.ordinalNumber(i, { unit: 'day' });
        case 'iii':
          return t.day(o, { width: 'abbreviated', context: 'formatting' });
        case 'iiiii':
          return t.day(o, { width: 'narrow', context: 'formatting' });
        case 'iiiiii':
          return t.day(o, { width: 'short', context: 'formatting' });
        case 'iiii':
        default:
          return t.day(o, { width: 'wide', context: 'formatting' });
      }
    },
    a: function (n, a, t) {
      var o = n.getUTCHours(),
        i = o / 12 >= 1 ? 'pm' : 'am';
      switch (a) {
        case 'a':
        case 'aa':
          return t.dayPeriod(i, {
            width: 'abbreviated',
            context: 'formatting',
          });
        case 'aaa':
          return t
            .dayPeriod(i, { width: 'abbreviated', context: 'formatting' })
            .toLowerCase();
        case 'aaaaa':
          return t.dayPeriod(i, { width: 'narrow', context: 'formatting' });
        case 'aaaa':
        default:
          return t.dayPeriod(i, { width: 'wide', context: 'formatting' });
      }
    },
    b: function (n, a, t) {
      var o = n.getUTCHours(),
        i;
      switch (
        (o === 12
          ? (i = ja.noon)
          : o === 0
          ? (i = ja.midnight)
          : (i = o / 12 >= 1 ? 'pm' : 'am'),
        a)
      ) {
        case 'b':
        case 'bb':
          return t.dayPeriod(i, {
            width: 'abbreviated',
            context: 'formatting',
          });
        case 'bbb':
          return t
            .dayPeriod(i, { width: 'abbreviated', context: 'formatting' })
            .toLowerCase();
        case 'bbbbb':
          return t.dayPeriod(i, { width: 'narrow', context: 'formatting' });
        case 'bbbb':
        default:
          return t.dayPeriod(i, { width: 'wide', context: 'formatting' });
      }
    },
    B: function (n, a, t) {
      var o = n.getUTCHours(),
        i;
      switch (
        (o >= 17
          ? (i = ja.evening)
          : o >= 12
          ? (i = ja.afternoon)
          : o >= 4
          ? (i = ja.morning)
          : (i = ja.night),
        a)
      ) {
        case 'B':
        case 'BB':
        case 'BBB':
          return t.dayPeriod(i, {
            width: 'abbreviated',
            context: 'formatting',
          });
        case 'BBBBB':
          return t.dayPeriod(i, { width: 'narrow', context: 'formatting' });
        case 'BBBB':
        default:
          return t.dayPeriod(i, { width: 'wide', context: 'formatting' });
      }
    },
    h: function (n, a, t) {
      if (a === 'ho') {
        var o = n.getUTCHours() % 12;
        return o === 0 && (o = 12), t.ordinalNumber(o, { unit: 'hour' });
      }
      return ba.h(n, a);
    },
    H: function (n, a, t) {
      return a === 'Ho'
        ? t.ordinalNumber(n.getUTCHours(), { unit: 'hour' })
        : ba.H(n, a);
    },
    K: function (n, a, t) {
      var o = n.getUTCHours() % 12;
      return a === 'Ko'
        ? t.ordinalNumber(o, { unit: 'hour' })
        : Ke(o, a.length);
    },
    k: function (n, a, t) {
      var o = n.getUTCHours();
      return (
        o === 0 && (o = 24),
        a === 'ko' ? t.ordinalNumber(o, { unit: 'hour' }) : Ke(o, a.length)
      );
    },
    m: function (n, a, t) {
      return a === 'mo'
        ? t.ordinalNumber(n.getUTCMinutes(), { unit: 'minute' })
        : ba.m(n, a);
    },
    s: function (n, a, t) {
      return a === 'so'
        ? t.ordinalNumber(n.getUTCSeconds(), { unit: 'second' })
        : ba.s(n, a);
    },
    S: function (n, a) {
      return ba.S(n, a);
    },
    X: function (n, a, t, o) {
      var i = o._originalDate || n,
        r = i.getTimezoneOffset();
      if (r === 0) return 'Z';
      switch (a) {
        case 'X':
          return As(r);
        case 'XXXX':
        case 'XX':
          return Oa(r);
        case 'XXXXX':
        case 'XXX':
        default:
          return Oa(r, ':');
      }
    },
    x: function (n, a, t, o) {
      var i = o._originalDate || n,
        r = i.getTimezoneOffset();
      switch (a) {
        case 'x':
          return As(r);
        case 'xxxx':
        case 'xx':
          return Oa(r);
        case 'xxxxx':
        case 'xxx':
        default:
          return Oa(r, ':');
      }
    },
    O: function (n, a, t, o) {
      var i = o._originalDate || n,
        r = i.getTimezoneOffset();
      switch (a) {
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + Ls(r, ':');
        case 'OOOO':
        default:
          return 'GMT' + Oa(r, ':');
      }
    },
    z: function (n, a, t, o) {
      var i = o._originalDate || n,
        r = i.getTimezoneOffset();
      switch (a) {
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + Ls(r, ':');
        case 'zzzz':
        default:
          return 'GMT' + Oa(r, ':');
      }
    },
    t: function (n, a, t, o) {
      var i = o._originalDate || n,
        r = Math.floor(i.getTime() / 1e3);
      return Ke(r, a.length);
    },
    T: function (n, a, t, o) {
      var i = o._originalDate || n,
        r = i.getTime();
      return Ke(r, a.length);
    },
  };
function Ls(e, n) {
  var a = e > 0 ? '-' : '+',
    t = Math.abs(e),
    o = Math.floor(t / 60),
    i = t % 60;
  if (i === 0) return a + String(o);
  var r = n;
  return a + String(o) + r + Ke(i, 2);
}
function As(e, n) {
  if (e % 60 === 0) {
    var a = e > 0 ? '-' : '+';
    return a + Ke(Math.abs(e) / 60, 2);
  }
  return Oa(e, n);
}
function Oa(e, n) {
  var a = n || '',
    t = e > 0 ? '-' : '+',
    o = Math.abs(e),
    i = Ke(Math.floor(o / 60), 2),
    r = Ke(o % 60, 2);
  return t + i + a + r;
}
var Bs = function (n, a) {
    switch (n) {
      case 'P':
        return a.date({ width: 'short' });
      case 'PP':
        return a.date({ width: 'medium' });
      case 'PPP':
        return a.date({ width: 'long' });
      case 'PPPP':
      default:
        return a.date({ width: 'full' });
    }
  },
  Jl = function (n, a) {
    switch (n) {
      case 'p':
        return a.time({ width: 'short' });
      case 'pp':
        return a.time({ width: 'medium' });
      case 'ppp':
        return a.time({ width: 'long' });
      case 'pppp':
      default:
        return a.time({ width: 'full' });
    }
  },
  I_ = function (n, a) {
    var t = n.match(/(P+)(p+)?/) || [],
      o = t[1],
      i = t[2];
    if (!i) return Bs(n, a);
    var r;
    switch (o) {
      case 'P':
        r = a.dateTime({ width: 'short' });
        break;
      case 'PP':
        r = a.dateTime({ width: 'medium' });
        break;
      case 'PPP':
        r = a.dateTime({ width: 'long' });
        break;
      case 'PPPP':
      default:
        r = a.dateTime({ width: 'full' });
        break;
    }
    return r.replace('{{date}}', Bs(o, a)).replace('{{time}}', Jl(i, a));
  },
  Pr = { p: Jl, P: I_ },
  E_ = ['D', 'DD'],
  D_ = ['YY', 'YYYY'];
function eu(e) {
  return E_.indexOf(e) !== -1;
}
function tu(e) {
  return D_.indexOf(e) !== -1;
}
function go(e, n, a) {
  if (e === 'YYYY')
    throw new RangeError(
      'Use `yyyy` instead of `YYYY` (in `'
        .concat(n, '`) for formatting years to the input `')
        .concat(
          a,
          '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'
        )
    );
  if (e === 'YY')
    throw new RangeError(
      'Use `yy` instead of `YY` (in `'
        .concat(n, '`) for formatting years to the input `')
        .concat(
          a,
          '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'
        )
    );
  if (e === 'D')
    throw new RangeError(
      'Use `d` instead of `D` (in `'
        .concat(n, '`) for formatting days of the month to the input `')
        .concat(
          a,
          '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'
        )
    );
  if (e === 'DD')
    throw new RangeError(
      'Use `dd` instead of `DD` (in `'
        .concat(n, '`) for formatting days of the month to the input `')
        .concat(
          a,
          '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'
        )
    );
}
var M_ = {
    lessThanXSeconds: {
      one: 'less than a second',
      other: 'less than {{count}} seconds',
    },
    xSeconds: { one: '1 second', other: '{{count}} seconds' },
    halfAMinute: 'half a minute',
    lessThanXMinutes: {
      one: 'less than a minute',
      other: 'less than {{count}} minutes',
    },
    xMinutes: { one: '1 minute', other: '{{count}} minutes' },
    aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
    xHours: { one: '1 hour', other: '{{count}} hours' },
    xDays: { one: '1 day', other: '{{count}} days' },
    aboutXWeeks: { one: 'about 1 week', other: 'about {{count}} weeks' },
    xWeeks: { one: '1 week', other: '{{count}} weeks' },
    aboutXMonths: { one: 'about 1 month', other: 'about {{count}} months' },
    xMonths: { one: '1 month', other: '{{count}} months' },
    aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
    xYears: { one: '1 year', other: '{{count}} years' },
    overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
    almostXYears: { one: 'almost 1 year', other: 'almost {{count}} years' },
  },
  O_ = function (n, a, t) {
    var o,
      i = M_[n];
    return (
      typeof i == 'string'
        ? (o = i)
        : a === 1
        ? (o = i.one)
        : (o = i.other.replace('{{count}}', a.toString())),
      t != null && t.addSuffix
        ? t.comparison && t.comparison > 0
          ? 'in ' + o
          : o + ' ago'
        : o
    );
  };
function Go(e) {
  return function () {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      a = n.width ? String(n.width) : e.defaultWidth,
      t = e.formats[a] || e.formats[e.defaultWidth];
    return t;
  };
}
var L_ = {
    full: 'EEEE, MMMM do, y',
    long: 'MMMM do, y',
    medium: 'MMM d, y',
    short: 'MM/dd/yyyy',
  },
  A_ = {
    full: 'h:mm:ss a zzzz',
    long: 'h:mm:ss a z',
    medium: 'h:mm:ss a',
    short: 'h:mm a',
  },
  B_ = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}',
  },
  x_ = {
    date: Go({ formats: L_, defaultWidth: 'full' }),
    time: Go({ formats: A_, defaultWidth: 'full' }),
    dateTime: Go({ formats: B_, defaultWidth: 'full' }),
  },
  R_ = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P',
  },
  H_ = function (n, a, t, o) {
    return R_[n];
  };
function kn(e) {
  return function (n, a) {
    var t = a != null && a.context ? String(a.context) : 'standalone',
      o;
    if (t === 'formatting' && e.formattingValues) {
      var i = e.defaultFormattingWidth || e.defaultWidth,
        r = a != null && a.width ? String(a.width) : i;
      o = e.formattingValues[r] || e.formattingValues[i];
    } else {
      var s = e.defaultWidth,
        l = a != null && a.width ? String(a.width) : e.defaultWidth;
      o = e.values[l] || e.values[s];
    }
    var m = e.argumentCallback ? e.argumentCallback(n) : n;
    return o[m];
  };
}
var N_ = {
    narrow: ['B', 'A'],
    abbreviated: ['BC', 'AD'],
    wide: ['Before Christ', 'Anno Domini'],
  },
  $_ = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
    wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'],
  },
  V_ = {
    narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    abbreviated: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    wide: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
  U_ = {
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    wide: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
  },
  Y_ = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night',
    },
  },
  F_ = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night',
    },
  },
  W_ = function (n, a) {
    var t = Number(n),
      o = t % 100;
    if (o > 20 || o < 10)
      switch (o % 10) {
        case 1:
          return t + 'st';
        case 2:
          return t + 'nd';
        case 3:
          return t + 'rd';
      }
    return t + 'th';
  },
  q_ = {
    ordinalNumber: W_,
    era: kn({ values: N_, defaultWidth: 'wide' }),
    quarter: kn({
      values: $_,
      defaultWidth: 'wide',
      argumentCallback: function (n) {
        return n - 1;
      },
    }),
    month: kn({ values: V_, defaultWidth: 'wide' }),
    day: kn({ values: U_, defaultWidth: 'wide' }),
    dayPeriod: kn({
      values: Y_,
      defaultWidth: 'wide',
      formattingValues: F_,
      defaultFormattingWidth: 'wide',
    }),
  };
function Sn(e) {
  return function (n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      t = a.width,
      o = (t && e.matchPatterns[t]) || e.matchPatterns[e.defaultMatchWidth],
      i = n.match(o);
    if (!i) return null;
    var r = i[0],
      s = (t && e.parsePatterns[t]) || e.parsePatterns[e.defaultParseWidth],
      l = Array.isArray(s)
        ? j_(s, function (d) {
            return d.test(r);
          })
        : G_(s, function (d) {
            return d.test(r);
          }),
      m;
    (m = e.valueCallback ? e.valueCallback(l) : l),
      (m = a.valueCallback ? a.valueCallback(m) : m);
    var g = n.slice(r.length);
    return { value: m, rest: g };
  };
}
function G_(e, n) {
  for (var a in e) if (e.hasOwnProperty(a) && n(e[a])) return a;
}
function j_(e, n) {
  for (var a = 0; a < e.length; a++) if (n(e[a])) return a;
}
function z_(e) {
  return function (n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      t = n.match(e.matchPattern);
    if (!t) return null;
    var o = t[0],
      i = n.match(e.parsePattern);
    if (!i) return null;
    var r = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    r = a.valueCallback ? a.valueCallback(r) : r;
    var s = n.slice(o.length);
    return { value: r, rest: s };
  };
}
var K_ = /^(\d+)(th|st|nd|rd)?/i,
  Q_ = /\d+/i,
  Z_ = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  X_ = { any: [/^b/i, /^(a|c)/i] },
  J_ = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  e0 = { any: [/1/i, /2/i, /3/i, /4/i] },
  t0 = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  a0 = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  n0 = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  o0 = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  r0 = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  i0 = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  s0 = {
    ordinalNumber: z_({
      matchPattern: K_,
      parsePattern: Q_,
      valueCallback: function (n) {
        return parseInt(n, 10);
      },
    }),
    era: Sn({
      matchPatterns: Z_,
      defaultMatchWidth: 'wide',
      parsePatterns: X_,
      defaultParseWidth: 'any',
    }),
    quarter: Sn({
      matchPatterns: J_,
      defaultMatchWidth: 'wide',
      parsePatterns: e0,
      defaultParseWidth: 'any',
      valueCallback: function (n) {
        return n + 1;
      },
    }),
    month: Sn({
      matchPatterns: t0,
      defaultMatchWidth: 'wide',
      parsePatterns: a0,
      defaultParseWidth: 'any',
    }),
    day: Sn({
      matchPatterns: n0,
      defaultMatchWidth: 'wide',
      parsePatterns: o0,
      defaultParseWidth: 'any',
    }),
    dayPeriod: Sn({
      matchPatterns: r0,
      defaultMatchWidth: 'any',
      parsePatterns: i0,
      defaultParseWidth: 'any',
    }),
  },
  au = {
    code: 'en-US',
    formatDistance: O_,
    formatLong: x_,
    formatRelative: H_,
    localize: q_,
    match: s0,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  },
  l0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  u0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  c0 = /^'([^]*?)'?$/,
  d0 = /''/g,
  m0 = /[a-zA-Z]/;
function Ca(e, n, a) {
  var t, o, i, r, s, l, m, g, d, v, f, y, S, T, w, b, L, D;
  ye(2, arguments);
  var P = String(n),
    x = la(),
    B =
      (t = (o = a?.locale) !== null && o !== void 0 ? o : x.locale) !== null &&
      t !== void 0
        ? t
        : au,
    K = Ie(
      (i =
        (r =
          (s =
            (l = a?.firstWeekContainsDate) !== null && l !== void 0
              ? l
              : a == null ||
                (m = a.locale) === null ||
                m === void 0 ||
                (g = m.options) === null ||
                g === void 0
              ? void 0
              : g.firstWeekContainsDate) !== null && s !== void 0
            ? s
            : x.firstWeekContainsDate) !== null && r !== void 0
          ? r
          : (d = x.locale) === null ||
            d === void 0 ||
            (v = d.options) === null ||
            v === void 0
          ? void 0
          : v.firstWeekContainsDate) !== null && i !== void 0
        ? i
        : 1
    );
  if (!(K >= 1 && K <= 7))
    throw new RangeError(
      'firstWeekContainsDate must be between 1 and 7 inclusively'
    );
  var W = Ie(
    (f =
      (y =
        (S =
          (T = a?.weekStartsOn) !== null && T !== void 0
            ? T
            : a == null ||
              (w = a.locale) === null ||
              w === void 0 ||
              (b = w.options) === null ||
              b === void 0
            ? void 0
            : b.weekStartsOn) !== null && S !== void 0
          ? S
          : x.weekStartsOn) !== null && y !== void 0
        ? y
        : (L = x.locale) === null ||
          L === void 0 ||
          (D = L.options) === null ||
          D === void 0
        ? void 0
        : D.weekStartsOn) !== null && f !== void 0
      ? f
      : 0
  );
  if (!(W >= 0 && W <= 6))
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  if (!B.localize)
    throw new RangeError('locale must contain localize property');
  if (!B.formatLong)
    throw new RangeError('locale must contain formatLong property');
  var C = Se(e);
  if (!On(C)) throw new RangeError('Invalid time value');
  var H = mo(C),
    F = Kl(C, H),
    Q = {
      firstWeekContainsDate: K,
      weekStartsOn: W,
      locale: B,
      _originalDate: C,
    },
    N = P.match(u0)
      .map(function (I) {
        var U = I[0];
        if (U === 'p' || U === 'P') {
          var V = Pr[U];
          return V(I, B.formatLong);
        }
        return I;
      })
      .join('')
      .match(l0)
      .map(function (I) {
        if (I === "''") return "'";
        var U = I[0];
        if (U === "'") return g0(I);
        var V = P_[U];
        if (V)
          return (
            !(a != null && a.useAdditionalWeekYearTokens) &&
              tu(I) &&
              go(I, n, String(e)),
            !(a != null && a.useAdditionalDayOfYearTokens) &&
              eu(I) &&
              go(I, n, String(e)),
            V(F, I, B.localize, Q)
          );
        if (U.match(m0))
          throw new RangeError(
            'Format string contains an unescaped latin alphabet character `' +
              U +
              '`'
          );
        return I;
      })
      .join('');
  return N;
}
function g0(e) {
  var n = e.match(c0);
  return n ? n[1].replace(d0, "'") : e;
}
function v0(e, n) {
  if (e == null)
    throw new TypeError(
      'assign requires that input parameter not be null or undefined'
    );
  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
  return e;
}
function p0(e) {
  ye(1, arguments);
  var n = Se(e),
    a = n.getDay();
  return a;
}
function h0(e) {
  ye(1, arguments);
  var n = Se(e),
    a = n.getFullYear(),
    t = n.getMonth(),
    o = new Date(0);
  return o.setFullYear(a, t + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function jt(e) {
  ye(1, arguments);
  var n = Se(e),
    a = n.getHours();
  return a;
}
var f0 = 6048e5;
function y0(e) {
  ye(1, arguments);
  var n = Se(e),
    a = co(n).getTime() - d_(n).getTime();
  return Math.round(a / f0) + 1;
}
function ia(e) {
  ye(1, arguments);
  var n = Se(e),
    a = n.getMinutes();
  return a;
}
function Ue(e) {
  ye(1, arguments);
  var n = Se(e),
    a = n.getMonth();
  return a;
}
function ln(e) {
  ye(1, arguments);
  var n = Se(e),
    a = n.getSeconds();
  return a;
}
function b0(e, n) {
  var a, t, o, i, r, s, l, m;
  ye(1, arguments);
  var g = Se(e),
    d = g.getFullYear(),
    v = la(),
    f = Ie(
      (a =
        (t =
          (o =
            (i = n?.firstWeekContainsDate) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (s = r.options) === null ||
                s === void 0
              ? void 0
              : s.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : v.firstWeekContainsDate) !== null && t !== void 0
          ? t
          : (l = v.locale) === null ||
            l === void 0 ||
            (m = l.options) === null ||
            m === void 0
          ? void 0
          : m.firstWeekContainsDate) !== null && a !== void 0
        ? a
        : 1
    );
  if (!(f >= 1 && f <= 7))
    throw new RangeError(
      'firstWeekContainsDate must be between 1 and 7 inclusively'
    );
  var y = new Date(0);
  y.setFullYear(d + 1, 0, f), y.setHours(0, 0, 0, 0);
  var S = $a(y, n),
    T = new Date(0);
  T.setFullYear(d, 0, f), T.setHours(0, 0, 0, 0);
  var w = $a(T, n);
  return g.getTime() >= S.getTime()
    ? d + 1
    : g.getTime() >= w.getTime()
    ? d
    : d - 1;
}
function _0(e, n) {
  var a, t, o, i, r, s, l, m;
  ye(1, arguments);
  var g = la(),
    d = Ie(
      (a =
        (t =
          (o =
            (i = n?.firstWeekContainsDate) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (s = r.options) === null ||
                s === void 0
              ? void 0
              : s.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : g.firstWeekContainsDate) !== null && t !== void 0
          ? t
          : (l = g.locale) === null ||
            l === void 0 ||
            (m = l.options) === null ||
            m === void 0
          ? void 0
          : m.firstWeekContainsDate) !== null && a !== void 0
        ? a
        : 1
    ),
    v = b0(e, n),
    f = new Date(0);
  f.setFullYear(v, 0, d), f.setHours(0, 0, 0, 0);
  var y = $a(f, n);
  return y;
}
var w0 = 6048e5;
function k0(e, n) {
  ye(1, arguments);
  var a = Se(e),
    t = $a(a, n).getTime() - _0(a, n).getTime();
  return Math.round(t / w0) + 1;
}
function Ne(e) {
  return ye(1, arguments), Se(e).getFullYear();
}
function Yn(e, n) {
  ye(2, arguments);
  var a = Se(e),
    t = Se(n);
  return a.getTime() > t.getTime();
}
function Fn(e, n) {
  ye(2, arguments);
  var a = Se(e),
    t = Se(n);
  return a.getTime() < t.getTime();
}
function Xa(e, n) {
  ye(2, arguments);
  var a = Se(e),
    t = Se(n);
  return a.getTime() === t.getTime();
}
function xs(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var a = 0, t = new Array(n); a < n; a++) t[a] = e[a];
  return t;
}
function S0(e, n) {
  if (e) {
    if (typeof e == 'string') return xs(e, n);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (a === 'Object' && e.constructor && (a = e.constructor.name),
      a === 'Map' || a === 'Set')
    )
      return Array.from(e);
    if (a === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return xs(e, n);
  }
}
function Rs(e, n) {
  var a = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (!a) {
    if (Array.isArray(e) || (a = S0(e)) || n) {
      a && (e = a);
      var t = 0,
        o = function () {};
      return {
        s: o,
        n: function () {
          return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
        },
        e: function (m) {
          throw m;
        },
        f: o,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i = !0,
    r = !1,
    s;
  return {
    s: function () {
      a = a.call(e);
    },
    n: function () {
      var m = a.next();
      return (i = m.done), m;
    },
    e: function (m) {
      (r = !0), (s = m);
    },
    f: function () {
      try {
        !i && a.return != null && a.return();
      } finally {
        if (r) throw s;
      }
    },
  };
}
function fe(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Ir(e, n) {
  return (
    (Ir = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, o) {
          return (t.__proto__ = o), t;
        }),
    Ir(e, n)
  );
}
function Ye(e, n) {
  if (typeof n != 'function' && n !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(n && n.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    n && Ir(e, n);
}
function vo(e) {
  return (
    (vo = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (a) {
          return a.__proto__ || Object.getPrototypeOf(a);
        }),
    vo(e)
  );
}
function nu() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (nu = function () {
    return !!e;
  })();
}
function T0(e, n) {
  if (n && (Yt(n) === 'object' || typeof n == 'function')) return n;
  if (n !== void 0)
    throw new TypeError(
      'Derived constructors may only return object or undefined'
    );
  return fe(e);
}
function Fe(e) {
  var n = nu();
  return function () {
    var t = vo(e),
      o;
    if (n) {
      var i = vo(this).constructor;
      o = Reflect.construct(t, arguments, i);
    } else o = t.apply(this, arguments);
    return T0(this, o);
  };
}
function $e(e, n) {
  if (!(e instanceof n))
    throw new TypeError('Cannot call a class as a function');
}
function C0(e, n) {
  if (Yt(e) != 'object' || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var t = a.call(e, n);
    if (Yt(t) != 'object') return t;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return String(e);
}
function ou(e) {
  var n = C0(e, 'string');
  return Yt(n) == 'symbol' ? n : String(n);
}
function P0(e, n) {
  for (var a = 0; a < n.length; a++) {
    var t = n[a];
    (t.enumerable = t.enumerable || !1),
      (t.configurable = !0),
      'value' in t && (t.writable = !0),
      Object.defineProperty(e, ou(t.key), t);
  }
}
function Ve(e, n, a) {
  return (
    n && P0(e.prototype, n),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function pe(e, n, a) {
  return (
    (n = ou(n)),
    n in e
      ? Object.defineProperty(e, n, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[n] = a),
    e
  );
}
var I0 = 10,
  ru = (function () {
    function e() {
      $e(this, e), pe(this, 'priority', void 0), pe(this, 'subPriority', 0);
    }
    return (
      Ve(e, [
        {
          key: 'validate',
          value: function (a, t) {
            return !0;
          },
        },
      ]),
      e
    );
  })(),
  E0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a(t, o, i, r, s) {
      var l;
      return (
        $e(this, a),
        (l = n.call(this)),
        (l.value = t),
        (l.validateValue = o),
        (l.setValue = i),
        (l.priority = r),
        s && (l.subPriority = s),
        l
      );
    }
    return (
      Ve(a, [
        {
          key: 'validate',
          value: function (o, i) {
            return this.validateValue(o, this.value, i);
          },
        },
        {
          key: 'set',
          value: function (o, i, r) {
            return this.setValue(o, i, this.value, r);
          },
        },
      ]),
      a
    );
  })(ru),
  D0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', I0),
        pe(fe(t), 'subPriority', -1),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'set',
          value: function (o, i) {
            if (i.timestampIsSet) return o;
            var r = new Date(0);
            return (
              r.setFullYear(
                o.getUTCFullYear(),
                o.getUTCMonth(),
                o.getUTCDate()
              ),
              r.setHours(
                o.getUTCHours(),
                o.getUTCMinutes(),
                o.getUTCSeconds(),
                o.getUTCMilliseconds()
              ),
              r
            );
          },
        },
      ]),
      a
    );
  })(ru),
  qe = (function () {
    function e() {
      $e(this, e),
        pe(this, 'incompatibleTokens', void 0),
        pe(this, 'priority', void 0),
        pe(this, 'subPriority', void 0);
    }
    return (
      Ve(e, [
        {
          key: 'run',
          value: function (a, t, o, i) {
            var r = this.parse(a, t, o, i);
            return r
              ? {
                  setter: new E0(
                    r.value,
                    this.validate,
                    this.set,
                    this.priority,
                    this.subPriority
                  ),
                  rest: r.rest,
                }
              : null;
          },
        },
        {
          key: 'validate',
          value: function (a, t, o) {
            return !0;
          },
        },
      ]),
      e
    );
  })(),
  M0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 140),
        pe(fe(t), 'incompatibleTokens', ['R', 'u', 't', 'T']),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i, r) {
            switch (i) {
              case 'G':
              case 'GG':
              case 'GGG':
                return (
                  r.era(o, { width: 'abbreviated' }) ||
                  r.era(o, { width: 'narrow' })
                );
              case 'GGGGG':
                return r.era(o, { width: 'narrow' });
              case 'GGGG':
              default:
                return (
                  r.era(o, { width: 'wide' }) ||
                  r.era(o, { width: 'abbreviated' }) ||
                  r.era(o, { width: 'narrow' })
                );
            }
          },
        },
        {
          key: 'set',
          value: function (o, i, r) {
            return (
              (i.era = r),
              o.setUTCFullYear(r, 0, 1),
              o.setUTCHours(0, 0, 0, 0),
              o
            );
          },
        },
      ]),
      a
    );
  })(qe),
  mt = {
    month: /^(1[0-2]|0?\d)/,
    date: /^(3[0-1]|[0-2]?\d)/,
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    week: /^(5[0-3]|[0-4]?\d)/,
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    hour11h: /^(1[0-1]|0?\d)/,
    hour12h: /^(1[0-2]|0?\d)/,
    minute: /^[0-5]?\d/,
    second: /^[0-5]?\d/,
    singleDigit: /^\d/,
    twoDigits: /^\d{1,2}/,
    threeDigits: /^\d{1,3}/,
    fourDigits: /^\d{1,4}/,
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    twoDigitsSigned: /^-?\d{1,2}/,
    threeDigitsSigned: /^-?\d{1,3}/,
    fourDigitsSigned: /^-?\d{1,4}/,
  },
  aa = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
  };
function gt(e, n) {
  return e && { value: n(e.value), rest: e.rest };
}
function st(e, n) {
  var a = n.match(e);
  return a ? { value: parseInt(a[0], 10), rest: n.slice(a[0].length) } : null;
}
function na(e, n) {
  var a = n.match(e);
  if (!a) return null;
  if (a[0] === 'Z') return { value: 0, rest: n.slice(1) };
  var t = a[1] === '+' ? 1 : -1,
    o = a[2] ? parseInt(a[2], 10) : 0,
    i = a[3] ? parseInt(a[3], 10) : 0,
    r = a[5] ? parseInt(a[5], 10) : 0;
  return { value: t * (o * ni + i * ai + r * p_), rest: n.slice(a[0].length) };
}
function iu(e) {
  return st(mt.anyDigitsSigned, e);
}
function dt(e, n) {
  switch (e) {
    case 1:
      return st(mt.singleDigit, n);
    case 2:
      return st(mt.twoDigits, n);
    case 3:
      return st(mt.threeDigits, n);
    case 4:
      return st(mt.fourDigits, n);
    default:
      return st(new RegExp('^\\d{1,' + e + '}'), n);
  }
}
function po(e, n) {
  switch (e) {
    case 1:
      return st(mt.singleDigitSigned, n);
    case 2:
      return st(mt.twoDigitsSigned, n);
    case 3:
      return st(mt.threeDigitsSigned, n);
    case 4:
      return st(mt.fourDigitsSigned, n);
    default:
      return st(new RegExp('^-?\\d{1,' + e + '}'), n);
  }
}
function ri(e) {
  switch (e) {
    case 'morning':
      return 4;
    case 'evening':
      return 17;
    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12;
    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0;
  }
}
function su(e, n) {
  var a = n > 0,
    t = a ? n : 1 - n,
    o;
  if (t <= 50) o = e || 100;
  else {
    var i = t + 50,
      r = Math.floor(i / 100) * 100,
      s = e >= i % 100;
    o = e + r - (s ? 100 : 0);
  }
  return a ? o : 1 - o;
}
function lu(e) {
  return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
var O0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 130),
        pe(fe(t), 'incompatibleTokens', [
          'Y',
          'R',
          'u',
          'w',
          'I',
          'i',
          'e',
          'c',
          't',
          'T',
        ]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i, r) {
            var s = function (m) {
              return { year: m, isTwoDigitYear: i === 'yy' };
            };
            switch (i) {
              case 'y':
                return gt(dt(4, o), s);
              case 'yo':
                return gt(r.ordinalNumber(o, { unit: 'year' }), s);
              default:
                return gt(dt(i.length, o), s);
            }
          },
        },
        {
          key: 'validate',
          value: function (o, i) {
            return i.isTwoDigitYear || i.year > 0;
          },
        },
        {
          key: 'set',
          value: function (o, i, r) {
            var s = o.getUTCFullYear();
            if (r.isTwoDigitYear) {
              var l = su(r.year, s);
              return o.setUTCFullYear(l, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
            }
            var m = !('era' in i) || i.era === 1 ? r.year : 1 - r.year;
            return o.setUTCFullYear(m, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  L0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 130),
        pe(fe(t), 'incompatibleTokens', [
          'y',
          'R',
          'u',
          'Q',
          'q',
          'M',
          'L',
          'I',
          'd',
          'D',
          'i',
          't',
          'T',
        ]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i, r) {
            var s = function (m) {
              return { year: m, isTwoDigitYear: i === 'YY' };
            };
            switch (i) {
              case 'Y':
                return gt(dt(4, o), s);
              case 'Yo':
                return gt(r.ordinalNumber(o, { unit: 'year' }), s);
              default:
                return gt(dt(i.length, o), s);
            }
          },
        },
        {
          key: 'validate',
          value: function (o, i) {
            return i.isTwoDigitYear || i.year > 0;
          },
        },
        {
          key: 'set',
          value: function (o, i, r, s) {
            var l = oi(o, s);
            if (r.isTwoDigitYear) {
              var m = su(r.year, l);
              return (
                o.setUTCFullYear(m, 0, s.firstWeekContainsDate),
                o.setUTCHours(0, 0, 0, 0),
                Va(o, s)
              );
            }
            var g = !('era' in i) || i.era === 1 ? r.year : 1 - r.year;
            return (
              o.setUTCFullYear(g, 0, s.firstWeekContainsDate),
              o.setUTCHours(0, 0, 0, 0),
              Va(o, s)
            );
          },
        },
      ]),
      a
    );
  })(qe),
  A0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 130),
        pe(fe(t), 'incompatibleTokens', [
          'G',
          'y',
          'Y',
          'u',
          'Q',
          'q',
          'M',
          'L',
          'w',
          'd',
          'D',
          'e',
          'c',
          't',
          'T',
        ]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i) {
            return po(i === 'R' ? 4 : i.length, o);
          },
        },
        {
          key: 'set',
          value: function (o, i, r) {
            var s = new Date(0);
            return s.setUTCFullYear(r, 0, 4), s.setUTCHours(0, 0, 0, 0), sn(s);
          },
        },
      ]),
      a
    );
  })(qe),
  B0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 130),
        pe(fe(t), 'incompatibleTokens', [
          'G',
          'y',
          'Y',
          'R',
          'w',
          'I',
          'i',
          'e',
          'c',
          't',
          'T',
        ]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i) {
            return po(i === 'u' ? 4 : i.length, o);
          },
        },
        {
          key: 'set',
          value: function (o, i, r) {
            return o.setUTCFullYear(r, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  x0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 120),
        pe(fe(t), 'incompatibleTokens', [
          'Y',
          'R',
          'q',
          'M',
          'L',
          'w',
          'I',
          'd',
          'D',
          'i',
          'e',
          'c',
          't',
          'T',
        ]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i, r) {
            switch (i) {
              case 'Q':
              case 'QQ':
                return dt(i.length, o);
              case 'Qo':
                return r.ordinalNumber(o, { unit: 'quarter' });
              case 'QQQ':
                return (
                  r.quarter(o, {
                    width: 'abbreviated',
                    context: 'formatting',
                  }) || r.quarter(o, { width: 'narrow', context: 'formatting' })
                );
              case 'QQQQQ':
                return r.quarter(o, { width: 'narrow', context: 'formatting' });
              case 'QQQQ':
              default:
                return (
                  r.quarter(o, { width: 'wide', context: 'formatting' }) ||
                  r.quarter(o, {
                    width: 'abbreviated',
                    context: 'formatting',
                  }) ||
                  r.quarter(o, { width: 'narrow', context: 'formatting' })
                );
            }
          },
        },
        {
          key: 'validate',
          value: function (o, i) {
            return i >= 1 && i <= 4;
          },
        },
        {
          key: 'set',
          value: function (o, i, r) {
            return o.setUTCMonth((r - 1) * 3, 1), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  R0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 120),
        pe(fe(t), 'incompatibleTokens', [
          'Y',
          'R',
          'Q',
          'M',
          'L',
          'w',
          'I',
          'd',
          'D',
          'i',
          'e',
          'c',
          't',
          'T',
        ]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i, r) {
            switch (i) {
              case 'q':
              case 'qq':
                return dt(i.length, o);
              case 'qo':
                return r.ordinalNumber(o, { unit: 'quarter' });
              case 'qqq':
                return (
                  r.quarter(o, {
                    width: 'abbreviated',
                    context: 'standalone',
                  }) || r.quarter(o, { width: 'narrow', context: 'standalone' })
                );
              case 'qqqqq':
                return r.quarter(o, { width: 'narrow', context: 'standalone' });
              case 'qqqq':
              default:
                return (
                  r.quarter(o, { width: 'wide', context: 'standalone' }) ||
                  r.quarter(o, {
                    width: 'abbreviated',
                    context: 'standalone',
                  }) ||
                  r.quarter(o, { width: 'narrow', context: 'standalone' })
                );
            }
          },
        },
        {
          key: 'validate',
          value: function (o, i) {
            return i >= 1 && i <= 4;
          },
        },
        {
          key: 'set',
          value: function (o, i, r) {
            return o.setUTCMonth((r - 1) * 3, 1), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  H0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'incompatibleTokens', [
          'Y',
          'R',
          'q',
          'Q',
          'L',
          'w',
          'I',
          'D',
          'i',
          'e',
          'c',
          't',
          'T',
        ]),
        pe(fe(t), 'priority', 110),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i, r) {
            var s = function (m) {
              return m - 1;
            };
            switch (i) {
              case 'M':
                return gt(st(mt.month, o), s);
              case 'MM':
                return gt(dt(2, o), s);
              case 'Mo':
                return gt(r.ordinalNumber(o, { unit: 'month' }), s);
              case 'MMM':
                return (
                  r.month(o, { width: 'abbreviated', context: 'formatting' }) ||
                  r.month(o, { width: 'narrow', context: 'formatting' })
                );
              case 'MMMMM':
                return r.month(o, { width: 'narrow', context: 'formatting' });
              case 'MMMM':
              default:
                return (
                  r.month(o, { width: 'wide', context: 'formatting' }) ||
                  r.month(o, { width: 'abbreviated', context: 'formatting' }) ||
                  r.month(o, { width: 'narrow', context: 'formatting' })
                );
            }
          },
        },
        {
          key: 'validate',
          value: function (o, i) {
            return i >= 0 && i <= 11;
          },
        },
        {
          key: 'set',
          value: function (o, i, r) {
            return o.setUTCMonth(r, 1), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  N0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 110),
        pe(fe(t), 'incompatibleTokens', [
          'Y',
          'R',
          'q',
          'Q',
          'M',
          'w',
          'I',
          'D',
          'i',
          'e',
          'c',
          't',
          'T',
        ]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i, r) {
            var s = function (m) {
              return m - 1;
            };
            switch (i) {
              case 'L':
                return gt(st(mt.month, o), s);
              case 'LL':
                return gt(dt(2, o), s);
              case 'Lo':
                return gt(r.ordinalNumber(o, { unit: 'month' }), s);
              case 'LLL':
                return (
                  r.month(o, { width: 'abbreviated', context: 'standalone' }) ||
                  r.month(o, { width: 'narrow', context: 'standalone' })
                );
              case 'LLLLL':
                return r.month(o, { width: 'narrow', context: 'standalone' });
              case 'LLLL':
              default:
                return (
                  r.month(o, { width: 'wide', context: 'standalone' }) ||
                  r.month(o, { width: 'abbreviated', context: 'standalone' }) ||
                  r.month(o, { width: 'narrow', context: 'standalone' })
                );
            }
          },
        },
        {
          key: 'validate',
          value: function (o, i) {
            return i >= 0 && i <= 11;
          },
        },
        {
          key: 'set',
          value: function (o, i, r) {
            return o.setUTCMonth(r, 1), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe);
function $0(e, n, a) {
  ye(2, arguments);
  var t = Se(e),
    o = Ie(n),
    i = Xl(t, a) - o;
  return t.setUTCDate(t.getUTCDate() - i * 7), t;
}
var V0 = (function (e) {
  Ye(a, e);
  var n = Fe(a);
  function a() {
    var t;
    $e(this, a);
    for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
      i[r] = arguments[r];
    return (
      (t = n.call.apply(n, [this].concat(i))),
      pe(fe(t), 'priority', 100),
      pe(fe(t), 'incompatibleTokens', [
        'y',
        'R',
        'u',
        'q',
        'Q',
        'M',
        'L',
        'I',
        'd',
        'D',
        'i',
        't',
        'T',
      ]),
      t
    );
  }
  return (
    Ve(a, [
      {
        key: 'parse',
        value: function (o, i, r) {
          switch (i) {
            case 'w':
              return st(mt.week, o);
            case 'wo':
              return r.ordinalNumber(o, { unit: 'week' });
            default:
              return dt(i.length, o);
          }
        },
      },
      {
        key: 'validate',
        value: function (o, i) {
          return i >= 1 && i <= 53;
        },
      },
      {
        key: 'set',
        value: function (o, i, r, s) {
          return Va($0(o, r, s), s);
        },
      },
    ]),
    a
  );
})(qe);
function U0(e, n) {
  ye(2, arguments);
  var a = Se(e),
    t = Ie(n),
    o = Zl(a) - t;
  return a.setUTCDate(a.getUTCDate() - o * 7), a;
}
var Y0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 100),
        pe(fe(t), 'incompatibleTokens', [
          'y',
          'Y',
          'u',
          'q',
          'Q',
          'M',
          'L',
          'w',
          'd',
          'D',
          'e',
          'c',
          't',
          'T',
        ]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i, r) {
            switch (i) {
              case 'I':
                return st(mt.week, o);
              case 'Io':
                return r.ordinalNumber(o, { unit: 'week' });
              default:
                return dt(i.length, o);
            }
          },
        },
        {
          key: 'validate',
          value: function (o, i) {
            return i >= 1 && i <= 53;
          },
        },
        {
          key: 'set',
          value: function (o, i, r) {
            return sn(U0(o, r));
          },
        },
      ]),
      a
    );
  })(qe),
  F0 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  W0 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  q0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 90),
        pe(fe(t), 'subPriority', 1),
        pe(fe(t), 'incompatibleTokens', [
          'Y',
          'R',
          'q',
          'Q',
          'w',
          'I',
          'D',
          'i',
          'e',
          'c',
          't',
          'T',
        ]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i, r) {
            switch (i) {
              case 'd':
                return st(mt.date, o);
              case 'do':
                return r.ordinalNumber(o, { unit: 'date' });
              default:
                return dt(i.length, o);
            }
          },
        },
        {
          key: 'validate',
          value: function (o, i) {
            var r = o.getUTCFullYear(),
              s = lu(r),
              l = o.getUTCMonth();
            return s ? i >= 1 && i <= W0[l] : i >= 1 && i <= F0[l];
          },
        },
        {
          key: 'set',
          value: function (o, i, r) {
            return o.setUTCDate(r), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  G0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 90),
        pe(fe(t), 'subpriority', 1),
        pe(fe(t), 'incompatibleTokens', [
          'Y',
          'R',
          'q',
          'Q',
          'M',
          'L',
          'w',
          'I',
          'd',
          'E',
          'i',
          'e',
          'c',
          't',
          'T',
        ]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i, r) {
            switch (i) {
              case 'D':
              case 'DD':
                return st(mt.dayOfYear, o);
              case 'Do':
                return r.ordinalNumber(o, { unit: 'date' });
              default:
                return dt(i.length, o);
            }
          },
        },
        {
          key: 'validate',
          value: function (o, i) {
            var r = o.getUTCFullYear(),
              s = lu(r);
            return s ? i >= 1 && i <= 366 : i >= 1 && i <= 365;
          },
        },
        {
          key: 'set',
          value: function (o, i, r) {
            return o.setUTCMonth(0, r), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe);
function ii(e, n, a) {
  var t, o, i, r, s, l, m, g;
  ye(2, arguments);
  var d = la(),
    v = Ie(
      (t =
        (o =
          (i =
            (r = a?.weekStartsOn) !== null && r !== void 0
              ? r
              : a == null ||
                (s = a.locale) === null ||
                s === void 0 ||
                (l = s.options) === null ||
                l === void 0
              ? void 0
              : l.weekStartsOn) !== null && i !== void 0
            ? i
            : d.weekStartsOn) !== null && o !== void 0
          ? o
          : (m = d.locale) === null ||
            m === void 0 ||
            (g = m.options) === null ||
            g === void 0
          ? void 0
          : g.weekStartsOn) !== null && t !== void 0
        ? t
        : 0
    );
  if (!(v >= 0 && v <= 6))
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  var f = Se(e),
    y = Ie(n),
    S = f.getUTCDay(),
    T = y % 7,
    w = (T + 7) % 7,
    b = (w < v ? 7 : 0) + y - S;
  return f.setUTCDate(f.getUTCDate() + b), f;
}
var j0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 90),
        pe(fe(t), 'incompatibleTokens', ['D', 'i', 'e', 'c', 't', 'T']),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i, r) {
            switch (i) {
              case 'E':
              case 'EE':
              case 'EEE':
                return (
                  r.day(o, { width: 'abbreviated', context: 'formatting' }) ||
                  r.day(o, { width: 'short', context: 'formatting' }) ||
                  r.day(o, { width: 'narrow', context: 'formatting' })
                );
              case 'EEEEE':
                return r.day(o, { width: 'narrow', context: 'formatting' });
              case 'EEEEEE':
                return (
                  r.day(o, { width: 'short', context: 'formatting' }) ||
                  r.day(o, { width: 'narrow', context: 'formatting' })
                );
              case 'EEEE':
              default:
                return (
                  r.day(o, { width: 'wide', context: 'formatting' }) ||
                  r.day(o, { width: 'abbreviated', context: 'formatting' }) ||
                  r.day(o, { width: 'short', context: 'formatting' }) ||
                  r.day(o, { width: 'narrow', context: 'formatting' })
                );
            }
          },
        },
        {
          key: 'validate',
          value: function (o, i) {
            return i >= 0 && i <= 6;
          },
        },
        {
          key: 'set',
          value: function (o, i, r, s) {
            return (o = ii(o, r, s)), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  z0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 90),
        pe(fe(t), 'incompatibleTokens', [
          'y',
          'R',
          'u',
          'q',
          'Q',
          'M',
          'L',
          'I',
          'd',
          'D',
          'E',
          'i',
          'c',
          't',
          'T',
        ]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i, r, s) {
            var l = function (g) {
              var d = Math.floor((g - 1) / 7) * 7;
              return ((g + s.weekStartsOn + 6) % 7) + d;
            };
            switch (i) {
              case 'e':
              case 'ee':
                return gt(dt(i.length, o), l);
              case 'eo':
                return gt(r.ordinalNumber(o, { unit: 'day' }), l);
              case 'eee':
                return (
                  r.day(o, { width: 'abbreviated', context: 'formatting' }) ||
                  r.day(o, { width: 'short', context: 'formatting' }) ||
                  r.day(o, { width: 'narrow', context: 'formatting' })
                );
              case 'eeeee':
                return r.day(o, { width: 'narrow', context: 'formatting' });
              case 'eeeeee':
                return (
                  r.day(o, { width: 'short', context: 'formatting' }) ||
                  r.day(o, { width: 'narrow', context: 'formatting' })
                );
              case 'eeee':
              default:
                return (
                  r.day(o, { width: 'wide', context: 'formatting' }) ||
                  r.day(o, { width: 'abbreviated', context: 'formatting' }) ||
                  r.day(o, { width: 'short', context: 'formatting' }) ||
                  r.day(o, { width: 'narrow', context: 'formatting' })
                );
            }
          },
        },
        {
          key: 'validate',
          value: function (o, i) {
            return i >= 0 && i <= 6;
          },
        },
        {
          key: 'set',
          value: function (o, i, r, s) {
            return (o = ii(o, r, s)), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  K0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 90),
        pe(fe(t), 'incompatibleTokens', [
          'y',
          'R',
          'u',
          'q',
          'Q',
          'M',
          'L',
          'I',
          'd',
          'D',
          'E',
          'i',
          'e',
          't',
          'T',
        ]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i, r, s) {
            var l = function (g) {
              var d = Math.floor((g - 1) / 7) * 7;
              return ((g + s.weekStartsOn + 6) % 7) + d;
            };
            switch (i) {
              case 'c':
              case 'cc':
                return gt(dt(i.length, o), l);
              case 'co':
                return gt(r.ordinalNumber(o, { unit: 'day' }), l);
              case 'ccc':
                return (
                  r.day(o, { width: 'abbreviated', context: 'standalone' }) ||
                  r.day(o, { width: 'short', context: 'standalone' }) ||
                  r.day(o, { width: 'narrow', context: 'standalone' })
                );
              case 'ccccc':
                return r.day(o, { width: 'narrow', context: 'standalone' });
              case 'cccccc':
                return (
                  r.day(o, { width: 'short', context: 'standalone' }) ||
                  r.day(o, { width: 'narrow', context: 'standalone' })
                );
              case 'cccc':
              default:
                return (
                  r.day(o, { width: 'wide', context: 'standalone' }) ||
                  r.day(o, { width: 'abbreviated', context: 'standalone' }) ||
                  r.day(o, { width: 'short', context: 'standalone' }) ||
                  r.day(o, { width: 'narrow', context: 'standalone' })
                );
            }
          },
        },
        {
          key: 'validate',
          value: function (o, i) {
            return i >= 0 && i <= 6;
          },
        },
        {
          key: 'set',
          value: function (o, i, r, s) {
            return (o = ii(o, r, s)), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe);
function Q0(e, n) {
  ye(2, arguments);
  var a = Ie(n);
  a % 7 === 0 && (a = a - 7);
  var t = 1,
    o = Se(e),
    i = o.getUTCDay(),
    r = a % 7,
    s = (r + 7) % 7,
    l = (s < t ? 7 : 0) + a - i;
  return o.setUTCDate(o.getUTCDate() + l), o;
}
var Z0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 90),
        pe(fe(t), 'incompatibleTokens', [
          'y',
          'Y',
          'u',
          'q',
          'Q',
          'M',
          'L',
          'w',
          'd',
          'D',
          'E',
          'e',
          'c',
          't',
          'T',
        ]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i, r) {
            var s = function (m) {
              return m === 0 ? 7 : m;
            };
            switch (i) {
              case 'i':
              case 'ii':
                return dt(i.length, o);
              case 'io':
                return r.ordinalNumber(o, { unit: 'day' });
              case 'iii':
                return gt(
                  r.day(o, { width: 'abbreviated', context: 'formatting' }) ||
                    r.day(o, { width: 'short', context: 'formatting' }) ||
                    r.day(o, { width: 'narrow', context: 'formatting' }),
                  s
                );
              case 'iiiii':
                return gt(
                  r.day(o, { width: 'narrow', context: 'formatting' }),
                  s
                );
              case 'iiiiii':
                return gt(
                  r.day(o, { width: 'short', context: 'formatting' }) ||
                    r.day(o, { width: 'narrow', context: 'formatting' }),
                  s
                );
              case 'iiii':
              default:
                return gt(
                  r.day(o, { width: 'wide', context: 'formatting' }) ||
                    r.day(o, { width: 'abbreviated', context: 'formatting' }) ||
                    r.day(o, { width: 'short', context: 'formatting' }) ||
                    r.day(o, { width: 'narrow', context: 'formatting' }),
                  s
                );
            }
          },
        },
        {
          key: 'validate',
          value: function (o, i) {
            return i >= 1 && i <= 7;
          },
        },
        {
          key: 'set',
          value: function (o, i, r) {
            return (o = Q0(o, r)), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  X0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 80),
        pe(fe(t), 'incompatibleTokens', ['b', 'B', 'H', 'k', 't', 'T']),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i, r) {
            switch (i) {
              case 'a':
              case 'aa':
              case 'aaa':
                return (
                  r.dayPeriod(o, {
                    width: 'abbreviated',
                    context: 'formatting',
                  }) ||
                  r.dayPeriod(o, { width: 'narrow', context: 'formatting' })
                );
              case 'aaaaa':
                return r.dayPeriod(o, {
                  width: 'narrow',
                  context: 'formatting',
                });
              case 'aaaa':
              default:
                return (
                  r.dayPeriod(o, { width: 'wide', context: 'formatting' }) ||
                  r.dayPeriod(o, {
                    width: 'abbreviated',
                    context: 'formatting',
                  }) ||
                  r.dayPeriod(o, { width: 'narrow', context: 'formatting' })
                );
            }
          },
        },
        {
          key: 'set',
          value: function (o, i, r) {
            return o.setUTCHours(ri(r), 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  J0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 80),
        pe(fe(t), 'incompatibleTokens', ['a', 'B', 'H', 'k', 't', 'T']),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i, r) {
            switch (i) {
              case 'b':
              case 'bb':
              case 'bbb':
                return (
                  r.dayPeriod(o, {
                    width: 'abbreviated',
                    context: 'formatting',
                  }) ||
                  r.dayPeriod(o, { width: 'narrow', context: 'formatting' })
                );
              case 'bbbbb':
                return r.dayPeriod(o, {
                  width: 'narrow',
                  context: 'formatting',
                });
              case 'bbbb':
              default:
                return (
                  r.dayPeriod(o, { width: 'wide', context: 'formatting' }) ||
                  r.dayPeriod(o, {
                    width: 'abbreviated',
                    context: 'formatting',
                  }) ||
                  r.dayPeriod(o, { width: 'narrow', context: 'formatting' })
                );
            }
          },
        },
        {
          key: 'set',
          value: function (o, i, r) {
            return o.setUTCHours(ri(r), 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  ew = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 80),
        pe(fe(t), 'incompatibleTokens', ['a', 'b', 't', 'T']),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i, r) {
            switch (i) {
              case 'B':
              case 'BB':
              case 'BBB':
                return (
                  r.dayPeriod(o, {
                    width: 'abbreviated',
                    context: 'formatting',
                  }) ||
                  r.dayPeriod(o, { width: 'narrow', context: 'formatting' })
                );
              case 'BBBBB':
                return r.dayPeriod(o, {
                  width: 'narrow',
                  context: 'formatting',
                });
              case 'BBBB':
              default:
                return (
                  r.dayPeriod(o, { width: 'wide', context: 'formatting' }) ||
                  r.dayPeriod(o, {
                    width: 'abbreviated',
                    context: 'formatting',
                  }) ||
                  r.dayPeriod(o, { width: 'narrow', context: 'formatting' })
                );
            }
          },
        },
        {
          key: 'set',
          value: function (o, i, r) {
            return o.setUTCHours(ri(r), 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  tw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 70),
        pe(fe(t), 'incompatibleTokens', ['H', 'K', 'k', 't', 'T']),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i, r) {
            switch (i) {
              case 'h':
                return st(mt.hour12h, o);
              case 'ho':
                return r.ordinalNumber(o, { unit: 'hour' });
              default:
                return dt(i.length, o);
            }
          },
        },
        {
          key: 'validate',
          value: function (o, i) {
            return i >= 1 && i <= 12;
          },
        },
        {
          key: 'set',
          value: function (o, i, r) {
            var s = o.getUTCHours() >= 12;
            return (
              s && r < 12
                ? o.setUTCHours(r + 12, 0, 0, 0)
                : !s && r === 12
                ? o.setUTCHours(0, 0, 0, 0)
                : o.setUTCHours(r, 0, 0, 0),
              o
            );
          },
        },
      ]),
      a
    );
  })(qe),
  aw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 70),
        pe(fe(t), 'incompatibleTokens', ['a', 'b', 'h', 'K', 'k', 't', 'T']),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i, r) {
            switch (i) {
              case 'H':
                return st(mt.hour23h, o);
              case 'Ho':
                return r.ordinalNumber(o, { unit: 'hour' });
              default:
                return dt(i.length, o);
            }
          },
        },
        {
          key: 'validate',
          value: function (o, i) {
            return i >= 0 && i <= 23;
          },
        },
        {
          key: 'set',
          value: function (o, i, r) {
            return o.setUTCHours(r, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  nw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 70),
        pe(fe(t), 'incompatibleTokens', ['h', 'H', 'k', 't', 'T']),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i, r) {
            switch (i) {
              case 'K':
                return st(mt.hour11h, o);
              case 'Ko':
                return r.ordinalNumber(o, { unit: 'hour' });
              default:
                return dt(i.length, o);
            }
          },
        },
        {
          key: 'validate',
          value: function (o, i) {
            return i >= 0 && i <= 11;
          },
        },
        {
          key: 'set',
          value: function (o, i, r) {
            var s = o.getUTCHours() >= 12;
            return (
              s && r < 12
                ? o.setUTCHours(r + 12, 0, 0, 0)
                : o.setUTCHours(r, 0, 0, 0),
              o
            );
          },
        },
      ]),
      a
    );
  })(qe),
  ow = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 70),
        pe(fe(t), 'incompatibleTokens', ['a', 'b', 'h', 'H', 'K', 't', 'T']),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i, r) {
            switch (i) {
              case 'k':
                return st(mt.hour24h, o);
              case 'ko':
                return r.ordinalNumber(o, { unit: 'hour' });
              default:
                return dt(i.length, o);
            }
          },
        },
        {
          key: 'validate',
          value: function (o, i) {
            return i >= 1 && i <= 24;
          },
        },
        {
          key: 'set',
          value: function (o, i, r) {
            var s = r <= 24 ? r % 24 : r;
            return o.setUTCHours(s, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  rw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 60),
        pe(fe(t), 'incompatibleTokens', ['t', 'T']),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i, r) {
            switch (i) {
              case 'm':
                return st(mt.minute, o);
              case 'mo':
                return r.ordinalNumber(o, { unit: 'minute' });
              default:
                return dt(i.length, o);
            }
          },
        },
        {
          key: 'validate',
          value: function (o, i) {
            return i >= 0 && i <= 59;
          },
        },
        {
          key: 'set',
          value: function (o, i, r) {
            return o.setUTCMinutes(r, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  iw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 50),
        pe(fe(t), 'incompatibleTokens', ['t', 'T']),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i, r) {
            switch (i) {
              case 's':
                return st(mt.second, o);
              case 'so':
                return r.ordinalNumber(o, { unit: 'second' });
              default:
                return dt(i.length, o);
            }
          },
        },
        {
          key: 'validate',
          value: function (o, i) {
            return i >= 0 && i <= 59;
          },
        },
        {
          key: 'set',
          value: function (o, i, r) {
            return o.setUTCSeconds(r, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  sw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 30),
        pe(fe(t), 'incompatibleTokens', ['t', 'T']),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i) {
            var r = function (l) {
              return Math.floor(l * Math.pow(10, -i.length + 3));
            };
            return gt(dt(i.length, o), r);
          },
        },
        {
          key: 'set',
          value: function (o, i, r) {
            return o.setUTCMilliseconds(r), o;
          },
        },
      ]),
      a
    );
  })(qe),
  lw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 10),
        pe(fe(t), 'incompatibleTokens', ['t', 'T', 'x']),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i) {
            switch (i) {
              case 'X':
                return na(aa.basicOptionalMinutes, o);
              case 'XX':
                return na(aa.basic, o);
              case 'XXXX':
                return na(aa.basicOptionalSeconds, o);
              case 'XXXXX':
                return na(aa.extendedOptionalSeconds, o);
              case 'XXX':
              default:
                return na(aa.extended, o);
            }
          },
        },
        {
          key: 'set',
          value: function (o, i, r) {
            return i.timestampIsSet ? o : new Date(o.getTime() - r);
          },
        },
      ]),
      a
    );
  })(qe),
  uw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 10),
        pe(fe(t), 'incompatibleTokens', ['t', 'T', 'X']),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o, i) {
            switch (i) {
              case 'x':
                return na(aa.basicOptionalMinutes, o);
              case 'xx':
                return na(aa.basic, o);
              case 'xxxx':
                return na(aa.basicOptionalSeconds, o);
              case 'xxxxx':
                return na(aa.extendedOptionalSeconds, o);
              case 'xxx':
              default:
                return na(aa.extended, o);
            }
          },
        },
        {
          key: 'set',
          value: function (o, i, r) {
            return i.timestampIsSet ? o : new Date(o.getTime() - r);
          },
        },
      ]),
      a
    );
  })(qe),
  cw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 40),
        pe(fe(t), 'incompatibleTokens', '*'),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o) {
            return iu(o);
          },
        },
        {
          key: 'set',
          value: function (o, i, r) {
            return [new Date(r * 1e3), { timestampIsSet: !0 }];
          },
        },
      ]),
      a
    );
  })(qe),
  dw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(fe(t), 'priority', 20),
        pe(fe(t), 'incompatibleTokens', '*'),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: 'parse',
          value: function (o) {
            return iu(o);
          },
        },
        {
          key: 'set',
          value: function (o, i, r) {
            return [new Date(r), { timestampIsSet: !0 }];
          },
        },
      ]),
      a
    );
  })(qe),
  mw = {
    G: new M0(),
    y: new O0(),
    Y: new L0(),
    R: new A0(),
    u: new B0(),
    Q: new x0(),
    q: new R0(),
    M: new H0(),
    L: new N0(),
    w: new V0(),
    I: new Y0(),
    d: new q0(),
    D: new G0(),
    E: new j0(),
    e: new z0(),
    c: new K0(),
    i: new Z0(),
    a: new X0(),
    b: new J0(),
    B: new ew(),
    h: new tw(),
    H: new aw(),
    K: new nw(),
    k: new ow(),
    m: new rw(),
    s: new iw(),
    S: new sw(),
    X: new lw(),
    x: new uw(),
    t: new cw(),
    T: new dw(),
  },
  gw = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  vw = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  pw = /^'([^]*?)'?$/,
  hw = /''/g,
  fw = /\S/,
  yw = /[a-zA-Z]/;
function Er(e, n, a, t) {
  var o, i, r, s, l, m, g, d, v, f, y, S, T, w;
  ye(3, arguments);
  var b = String(e),
    L = String(n),
    D = la(),
    P =
      (o = (i = void 0) !== null && i !== void 0 ? i : D.locale) !== null &&
      o !== void 0
        ? o
        : au;
  if (!P.match) throw new RangeError('locale must contain match property');
  var x = Ie(
    (r =
      (s =
        (l = (m = void 0) !== null && m !== void 0 ? m : void 0) !== null &&
        l !== void 0
          ? l
          : D.firstWeekContainsDate) !== null && s !== void 0
        ? s
        : (g = D.locale) === null ||
          g === void 0 ||
          (d = g.options) === null ||
          d === void 0
        ? void 0
        : d.firstWeekContainsDate) !== null && r !== void 0
      ? r
      : 1
  );
  if (!(x >= 1 && x <= 7))
    throw new RangeError(
      'firstWeekContainsDate must be between 1 and 7 inclusively'
    );
  var B = Ie(
    (v =
      (f =
        (y = (S = void 0) !== null && S !== void 0 ? S : void 0) !== null &&
        y !== void 0
          ? y
          : D.weekStartsOn) !== null && f !== void 0
        ? f
        : (T = D.locale) === null ||
          T === void 0 ||
          (w = T.options) === null ||
          w === void 0
        ? void 0
        : w.weekStartsOn) !== null && v !== void 0
      ? v
      : 0
  );
  if (!(B >= 0 && B <= 6))
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  if (L === '') return b === '' ? Se(a) : new Date(NaN);
  var K = { firstWeekContainsDate: x, weekStartsOn: B, locale: P },
    W = [new D0()],
    C = L.match(vw)
      .map(function (J) {
        var R = J[0];
        if (R in Pr) {
          var _ = Pr[R];
          return _(J, P.formatLong);
        }
        return J;
      })
      .join('')
      .match(gw),
    H = [],
    F = Rs(C),
    Q;
  try {
    var N = function () {
      var R = Q.value;
      !(t != null && t.useAdditionalWeekYearTokens) && tu(R) && go(R, L, e),
        !(t != null && t.useAdditionalDayOfYearTokens) && eu(R) && go(R, L, e);
      var _ = R[0],
        ae = mw[_];
      if (ae) {
        var ve = ae.incompatibleTokens;
        if (Array.isArray(ve)) {
          var le = H.find(function (de) {
            return ve.includes(de.token) || de.token === _;
          });
          if (le)
            throw new RangeError(
              "The format string mustn't contain `"
                .concat(le.fullToken, '` and `')
                .concat(R, '` at the same time')
            );
        } else if (ae.incompatibleTokens === '*' && H.length > 0)
          throw new RangeError(
            "The format string mustn't contain `".concat(
              R,
              '` and any other token at the same time'
            )
          );
        H.push({ token: _, fullToken: R });
        var be = ae.run(b, R, P.match, K);
        if (!be) return { v: new Date(NaN) };
        W.push(be.setter), (b = be.rest);
      } else {
        if (_.match(yw))
          throw new RangeError(
            'Format string contains an unescaped latin alphabet character `' +
              _ +
              '`'
          );
        if (
          (R === "''" ? (R = "'") : _ === "'" && (R = bw(R)),
          b.indexOf(R) === 0)
        )
          b = b.slice(R.length);
        else return { v: new Date(NaN) };
      }
    };
    for (F.s(); !(Q = F.n()).done; ) {
      var I = N();
      if (Yt(I) === 'object') return I.v;
    }
  } catch (J) {
    F.e(J);
  } finally {
    F.f();
  }
  if (b.length > 0 && fw.test(b)) return new Date(NaN);
  var U = W.map(function (J) {
      return J.priority;
    })
      .sort(function (J, R) {
        return R - J;
      })
      .filter(function (J, R, _) {
        return _.indexOf(J) === R;
      })
      .map(function (J) {
        return W.filter(function (R) {
          return R.priority === J;
        }).sort(function (R, _) {
          return _.subPriority - R.subPriority;
        });
      })
      .map(function (J) {
        return J[0];
      }),
    V = Se(a);
  if (isNaN(V.getTime())) return new Date(NaN);
  var j = Kl(V, mo(V)),
    k = {},
    p = Rs(U),
    Y;
  try {
    for (p.s(); !(Y = p.n()).done; ) {
      var G = Y.value;
      if (!G.validate(j, K)) return new Date(NaN);
      var ee = G.set(j, k, K);
      Array.isArray(ee) ? ((j = ee[0]), v0(k, ee[1])) : (j = ee);
    }
  } catch (J) {
    p.e(J);
  } finally {
    p.f();
  }
  return j;
}
function bw(e) {
  return e.match(pw)[1].replace(hw, "'");
}
function Hs(e, n) {
  ye(2, arguments);
  var a = Un(e),
    t = Un(n);
  return a.getTime() === t.getTime();
}
function _w(e, n) {
  ye(2, arguments);
  var a = Ie(n);
  return ma(e, -a);
}
function ww(e, n) {
  var a;
  ye(1, arguments);
  var t = Ie((a = void 0) !== null && a !== void 0 ? a : 2);
  if (t !== 2 && t !== 1 && t !== 0)
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  if (
    !(
      typeof e == 'string' ||
      Object.prototype.toString.call(e) === '[object String]'
    )
  )
    return new Date(NaN);
  var o = Cw(e),
    i;
  if (o.date) {
    var r = Pw(o.date, t);
    i = Iw(r.restDateString, r.year);
  }
  if (!i || isNaN(i.getTime())) return new Date(NaN);
  var s = i.getTime(),
    l = 0,
    m;
  if (o.time && ((l = Ew(o.time)), isNaN(l))) return new Date(NaN);
  if (o.timezone) {
    if (((m = Dw(o.timezone)), isNaN(m))) return new Date(NaN);
  } else {
    var g = new Date(s + l),
      d = new Date(0);
    return (
      d.setFullYear(g.getUTCFullYear(), g.getUTCMonth(), g.getUTCDate()),
      d.setHours(
        g.getUTCHours(),
        g.getUTCMinutes(),
        g.getUTCSeconds(),
        g.getUTCMilliseconds()
      ),
      d
    );
  }
  return new Date(s + l + m);
}
var ao = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/,
  },
  kw = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
  Sw =
    /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
  Tw = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Cw(e) {
  var n = {},
    a = e.split(ao.dateTimeDelimiter),
    t;
  if (a.length > 2) return n;
  if (
    (/:/.test(a[0])
      ? (t = a[0])
      : ((n.date = a[0]),
        (t = a[1]),
        ao.timeZoneDelimiter.test(n.date) &&
          ((n.date = e.split(ao.timeZoneDelimiter)[0]),
          (t = e.substr(n.date.length, e.length)))),
    t)
  ) {
    var o = ao.timezone.exec(t);
    o ? ((n.time = t.replace(o[1], '')), (n.timezone = o[1])) : (n.time = t);
  }
  return n;
}
function Pw(e, n) {
  var a = new RegExp(
      '^(?:(\\d{4}|[+-]\\d{' +
        (4 + n) +
        '})|(\\d{2}|[+-]\\d{' +
        (2 + n) +
        '})$)'
    ),
    t = e.match(a);
  if (!t) return { year: NaN, restDateString: '' };
  var o = t[1] ? parseInt(t[1]) : null,
    i = t[2] ? parseInt(t[2]) : null;
  return {
    year: i === null ? o : i * 100,
    restDateString: e.slice((t[1] || t[2]).length),
  };
}
function Iw(e, n) {
  if (n === null) return new Date(NaN);
  var a = e.match(kw);
  if (!a) return new Date(NaN);
  var t = !!a[4],
    o = Tn(a[1]),
    i = Tn(a[2]) - 1,
    r = Tn(a[3]),
    s = Tn(a[4]),
    l = Tn(a[5]) - 1;
  if (t) return Bw(n, s, l) ? Mw(n, s, l) : new Date(NaN);
  var m = new Date(0);
  return !Lw(n, i, r) || !Aw(n, o)
    ? new Date(NaN)
    : (m.setUTCFullYear(n, i, Math.max(o, r)), m);
}
function Tn(e) {
  return e ? parseInt(e) : 1;
}
function Ew(e) {
  var n = e.match(Sw);
  if (!n) return NaN;
  var a = jo(n[1]),
    t = jo(n[2]),
    o = jo(n[3]);
  return xw(a, t, o) ? a * ni + t * ai + o * 1e3 : NaN;
}
function jo(e) {
  return (e && parseFloat(e.replace(',', '.'))) || 0;
}
function Dw(e) {
  if (e === 'Z') return 0;
  var n = e.match(Tw);
  if (!n) return 0;
  var a = n[1] === '+' ? -1 : 1,
    t = parseInt(n[2]),
    o = (n[3] && parseInt(n[3])) || 0;
  return Rw(t, o) ? a * (t * ni + o * ai) : NaN;
}
function Mw(e, n, a) {
  var t = new Date(0);
  t.setUTCFullYear(e, 0, 4);
  var o = t.getUTCDay() || 7,
    i = (n - 1) * 7 + a + 1 - o;
  return t.setUTCDate(t.getUTCDate() + i), t;
}
var Ow = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function uu(e) {
  return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
function Lw(e, n, a) {
  return n >= 0 && n <= 11 && a >= 1 && a <= (Ow[n] || (uu(e) ? 29 : 28));
}
function Aw(e, n) {
  return n >= 1 && n <= (uu(e) ? 366 : 365);
}
function Bw(e, n, a) {
  return n >= 1 && n <= 53 && a >= 0 && a <= 6;
}
function xw(e, n, a) {
  return e === 24
    ? n === 0 && a === 0
    : a >= 0 && a < 60 && n >= 0 && n < 60 && e >= 0 && e < 25;
}
function Rw(e, n) {
  return n >= 0 && n <= 59;
}
function cu(e, n) {
  ye(2, arguments);
  var a = Se(e),
    t = Ie(n),
    o = a.getFullYear(),
    i = a.getDate(),
    r = new Date(0);
  r.setFullYear(o, t, 15), r.setHours(0, 0, 0, 0);
  var s = h0(r);
  return a.setMonth(t, Math.min(i, s)), a;
}
function at(e, n) {
  if ((ye(2, arguments), Yt(n) !== 'object' || n === null))
    throw new RangeError('values parameter must be an object');
  var a = Se(e);
  return isNaN(a.getTime())
    ? new Date(NaN)
    : (n.year != null && a.setFullYear(n.year),
      n.month != null && (a = cu(a, n.month)),
      n.date != null && a.setDate(Ie(n.date)),
      n.hours != null && a.setHours(Ie(n.hours)),
      n.minutes != null && a.setMinutes(Ie(n.minutes)),
      n.seconds != null && a.setSeconds(Ie(n.seconds)),
      n.milliseconds != null && a.setMilliseconds(Ie(n.milliseconds)),
      a);
}
function du(e, n) {
  ye(2, arguments);
  var a = Se(e),
    t = Ie(n);
  return a.setHours(t), a;
}
function si(e, n) {
  ye(2, arguments);
  var a = Se(e),
    t = Ie(n);
  return a.setMilliseconds(t), a;
}
function mu(e, n) {
  ye(2, arguments);
  var a = Se(e),
    t = Ie(n);
  return a.setMinutes(t), a;
}
function li(e, n) {
  ye(2, arguments);
  var a = Se(e),
    t = Ie(n);
  return a.setSeconds(t), a;
}
function ra(e, n) {
  ye(2, arguments);
  var a = Se(e),
    t = Ie(n);
  return isNaN(a.getTime()) ? new Date(NaN) : (a.setFullYear(t), a);
}
function un(e, n) {
  ye(2, arguments);
  var a = Ie(n);
  return Gt(e, -a);
}
function Hw(e, n) {
  if ((ye(2, arguments), !n || Yt(n) !== 'object')) return new Date(NaN);
  var a = n.years ? Ie(n.years) : 0,
    t = n.months ? Ie(n.months) : 0,
    o = n.weeks ? Ie(n.weeks) : 0,
    i = n.days ? Ie(n.days) : 0,
    r = n.hours ? Ie(n.hours) : 0,
    s = n.minutes ? Ie(n.minutes) : 0,
    l = n.seconds ? Ie(n.seconds) : 0,
    m = un(e, t + a * 12),
    g = _w(m, i + o * 7),
    d = s + r * 60,
    v = l + d * 60,
    f = v * 1e3,
    y = new Date(g.getTime() - f);
  return y;
}
function gu(e, n) {
  ye(2, arguments);
  var a = Ie(n);
  return ti(e, -a);
}
function pn() {
  return (
    c(),
    h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 32 32',
        fill: 'currentColor',
        'aria-hidden': 'true',
        class: 'dp__icon',
      },
      [
        E('path', {
          d: 'M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z',
        }),
        E('path', {
          d: 'M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z',
        }),
        E('path', {
          d: 'M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z',
        }),
        E('path', {
          d: 'M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z',
        }),
      ]
    )
  );
}
pn.compatConfig = { MODE: 3 };
function vu() {
  return (
    c(),
    h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 32 32',
        fill: 'currentColor',
        'aria-hidden': 'true',
        class: 'dp__icon',
      },
      [
        E('path', {
          d: 'M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z',
        }),
        E('path', {
          d: 'M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z',
        }),
      ]
    )
  );
}
vu.compatConfig = { MODE: 3 };
function ui() {
  return (
    c(),
    h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 32 32',
        fill: 'currentColor',
        'aria-hidden': 'true',
        class: 'dp__icon',
      },
      [
        E('path', {
          d: 'M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z',
        }),
      ]
    )
  );
}
ui.compatConfig = { MODE: 3 };
function ci() {
  return (
    c(),
    h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 32 32',
        fill: 'currentColor',
        'aria-hidden': 'true',
        class: 'dp__icon',
      },
      [
        E('path', {
          d: 'M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z',
        }),
      ]
    )
  );
}
ci.compatConfig = { MODE: 3 };
function di() {
  return (
    c(),
    h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 32 32',
        fill: 'currentColor',
        'aria-hidden': 'true',
        class: 'dp__icon',
      },
      [
        E('path', {
          d: 'M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z',
        }),
        E('path', {
          d: 'M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z',
        }),
      ]
    )
  );
}
di.compatConfig = { MODE: 3 };
function mi() {
  return (
    c(),
    h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 32 32',
        fill: 'currentColor',
        'aria-hidden': 'true',
        class: 'dp__icon',
      },
      [
        E('path', {
          d: 'M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z',
        }),
      ]
    )
  );
}
mi.compatConfig = { MODE: 3 };
function gi() {
  return (
    c(),
    h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 32 32',
        fill: 'currentColor',
        'aria-hidden': 'true',
        class: 'dp__icon',
      },
      [
        E('path', {
          d: 'M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z',
        }),
      ]
    )
  );
}
gi.compatConfig = { MODE: 3 };
function vi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var pu = { exports: {} };
(function (e) {
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  (e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(pu);
var Nw = pu.exports,
  Dr = { exports: {} };
(function (e, n) {
  Object.defineProperty(n, '__esModule', { value: !0 }), (n.default = a);
  function a(t) {
    if (t === null || t === !0 || t === !1) return NaN;
    var o = Number(t);
    return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
  }
  e.exports = n.default;
})(Dr, Dr.exports);
var $w = Dr.exports;
const Vw = vi($w);
var Mr = { exports: {} };
(function (e, n) {
  Object.defineProperty(n, '__esModule', { value: !0 }), (n.default = a);
  function a(t) {
    var o = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds()
      )
    );
    return o.setUTCFullYear(t.getFullYear()), t.getTime() - o.getTime();
  }
  e.exports = n.default;
})(Mr, Mr.exports);
var Uw = Mr.exports;
const Ns = vi(Uw);
function Yw(e, n) {
  var a = Gw(n);
  return a.formatToParts ? Ww(a, e) : qw(a, e);
}
var Fw = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 };
function Ww(e, n) {
  try {
    for (var a = e.formatToParts(n), t = [], o = 0; o < a.length; o++) {
      var i = Fw[a[o].type];
      i >= 0 && (t[i] = parseInt(a[o].value, 10));
    }
    return t;
  } catch (r) {
    if (r instanceof RangeError) return [NaN];
    throw r;
  }
}
function qw(e, n) {
  var a = e.format(n).replace(/\u200E/g, ''),
    t = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(a);
  return [t[3], t[1], t[2], t[4], t[5], t[6]];
}
var zo = {};
function Gw(e) {
  if (!zo[e]) {
    var n = new Intl.DateTimeFormat('en-US', {
        hour12: !1,
        timeZone: 'America/New_York',
        year: 'numeric',
        month: 'numeric',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).format(new Date('2014-06-25T04:00:00.123Z')),
      a =
        n === '06/25/2014, 00:00:00' || n === '‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00';
    zo[e] = a
      ? new Intl.DateTimeFormat('en-US', {
          hour12: !1,
          timeZone: e,
          year: 'numeric',
          month: 'numeric',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      : new Intl.DateTimeFormat('en-US', {
          hourCycle: 'h23',
          timeZone: e,
          year: 'numeric',
          month: 'numeric',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
  }
  return zo[e];
}
function pi(e, n, a, t, o, i, r) {
  var s = new Date(0);
  return s.setUTCFullYear(e, n, a), s.setUTCHours(t, o, i, r), s;
}
var $s = 36e5,
  jw = 6e4,
  Ko = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-]\d{2})$/,
    timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/,
  };
function hi(e, n, a) {
  var t, o;
  if (e === '' || ((t = Ko.timezoneZ.exec(e)), t)) return 0;
  var i;
  if (((t = Ko.timezoneHH.exec(e)), t))
    return (i = parseInt(t[1], 10)), Vs(i) ? -(i * $s) : NaN;
  if (((t = Ko.timezoneHHMM.exec(e)), t)) {
    i = parseInt(t[1], 10);
    var r = parseInt(t[2], 10);
    return Vs(i, r) ? ((o = Math.abs(i) * $s + r * jw), i > 0 ? -o : o) : NaN;
  }
  if (Qw(e)) {
    n = new Date(n || Date.now());
    var s = a ? n : zw(n),
      l = Or(s, e),
      m = a ? l : Kw(n, l, e);
    return -m;
  }
  return NaN;
}
function zw(e) {
  return pi(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function Or(e, n) {
  var a = Yw(e, n),
    t = pi(a[0], a[1] - 1, a[2], a[3] % 24, a[4], a[5], 0).getTime(),
    o = e.getTime(),
    i = o % 1e3;
  return (o -= i >= 0 ? i : 1e3 + i), t - o;
}
function Kw(e, n, a) {
  var t = e.getTime(),
    o = t - n,
    i = Or(new Date(o), a);
  if (n === i) return n;
  o -= i - n;
  var r = Or(new Date(o), a);
  return i === r ? i : Math.max(i, r);
}
function Vs(e, n) {
  return -23 <= e && e <= 23 && (n == null || (0 <= n && n <= 59));
}
var Us = {};
function Qw(e) {
  if (Us[e]) return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), (Us[e] = !0), !0;
  } catch {
    return !1;
  }
}
var hu =
    /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,
  Qo = 36e5,
  Ys = 6e4,
  Zw = 2,
  Pt = {
    dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
    datePattern: /^([0-9W+-]+)(.*)/,
    plainTime: /:/,
    YY: /^(\d{2})$/,
    YYY: [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
    YYYY: /^(\d{4})/,
    YYYYY: [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
    MM: /^-(\d{2})$/,
    DDD: /^-?(\d{3})$/,
    MMDD: /^-?(\d{2})-?(\d{2})$/,
    Www: /^-?W(\d{2})$/,
    WwwD: /^-?W(\d{2})-?(\d{1})$/,
    HH: /^(\d{2}([.,]\d*)?)$/,
    HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
    HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
    timeZone: hu,
  };
function Lr(e, n) {
  if (arguments.length < 1)
    throw new TypeError(
      '1 argument required, but only ' + arguments.length + ' present'
    );
  if (e === null) return new Date(NaN);
  var a = n || {},
    t = a.additionalDigits == null ? Zw : Vw(a.additionalDigits);
  if (t !== 2 && t !== 1 && t !== 0)
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  if (
    e instanceof Date ||
    (typeof e == 'object' &&
      Object.prototype.toString.call(e) === '[object Date]')
  )
    return new Date(e.getTime());
  if (
    typeof e == 'number' ||
    Object.prototype.toString.call(e) === '[object Number]'
  )
    return new Date(e);
  if (
    !(
      typeof e == 'string' ||
      Object.prototype.toString.call(e) === '[object String]'
    )
  )
    return new Date(NaN);
  var o = Xw(e),
    i = Jw(o.date, t),
    r = i.year,
    s = i.restDateString,
    l = e1(s, r);
  if (isNaN(l)) return new Date(NaN);
  if (l) {
    var m = l.getTime(),
      g = 0,
      d;
    if (o.time && ((g = t1(o.time)), isNaN(g))) return new Date(NaN);
    if (o.timeZone || a.timeZone) {
      if (((d = hi(o.timeZone || a.timeZone, new Date(m + g))), isNaN(d)))
        return new Date(NaN);
    } else (d = Ns(new Date(m + g))), (d = Ns(new Date(m + g + d)));
    return new Date(m + g + d);
  } else return new Date(NaN);
}
function Xw(e) {
  var n = {},
    a = Pt.dateTimePattern.exec(e),
    t;
  if (
    (a
      ? ((n.date = a[1]), (t = a[3]))
      : ((a = Pt.datePattern.exec(e)),
        a ? ((n.date = a[1]), (t = a[2])) : ((n.date = null), (t = e))),
    t)
  ) {
    var o = Pt.timeZone.exec(t);
    o
      ? ((n.time = t.replace(o[1], '')), (n.timeZone = o[1].trim()))
      : (n.time = t);
  }
  return n;
}
function Jw(e, n) {
  var a = Pt.YYY[n],
    t = Pt.YYYYY[n],
    o;
  if (((o = Pt.YYYY.exec(e) || t.exec(e)), o)) {
    var i = o[1];
    return { year: parseInt(i, 10), restDateString: e.slice(i.length) };
  }
  if (((o = Pt.YY.exec(e) || a.exec(e)), o)) {
    var r = o[1];
    return { year: parseInt(r, 10) * 100, restDateString: e.slice(r.length) };
  }
  return { year: null };
}
function e1(e, n) {
  if (n === null) return null;
  var a, t, o, i;
  if (e.length === 0) return (t = new Date(0)), t.setUTCFullYear(n), t;
  if (((a = Pt.MM.exec(e)), a))
    return (
      (t = new Date(0)),
      (o = parseInt(a[1], 10) - 1),
      Ws(n, o) ? (t.setUTCFullYear(n, o), t) : new Date(NaN)
    );
  if (((a = Pt.DDD.exec(e)), a)) {
    t = new Date(0);
    var r = parseInt(a[1], 10);
    return o1(n, r) ? (t.setUTCFullYear(n, 0, r), t) : new Date(NaN);
  }
  if (((a = Pt.MMDD.exec(e)), a)) {
    (t = new Date(0)), (o = parseInt(a[1], 10) - 1);
    var s = parseInt(a[2], 10);
    return Ws(n, o, s) ? (t.setUTCFullYear(n, o, s), t) : new Date(NaN);
  }
  if (((a = Pt.Www.exec(e)), a))
    return (i = parseInt(a[1], 10) - 1), qs(n, i) ? Fs(n, i) : new Date(NaN);
  if (((a = Pt.WwwD.exec(e)), a)) {
    i = parseInt(a[1], 10) - 1;
    var l = parseInt(a[2], 10) - 1;
    return qs(n, i, l) ? Fs(n, i, l) : new Date(NaN);
  }
  return null;
}
function t1(e) {
  var n, a, t;
  if (((n = Pt.HH.exec(e)), n))
    return (
      (a = parseFloat(n[1].replace(',', '.'))), Zo(a) ? (a % 24) * Qo : NaN
    );
  if (((n = Pt.HHMM.exec(e)), n))
    return (
      (a = parseInt(n[1], 10)),
      (t = parseFloat(n[2].replace(',', '.'))),
      Zo(a, t) ? (a % 24) * Qo + t * Ys : NaN
    );
  if (((n = Pt.HHMMSS.exec(e)), n)) {
    (a = parseInt(n[1], 10)), (t = parseInt(n[2], 10));
    var o = parseFloat(n[3].replace(',', '.'));
    return Zo(a, t, o) ? (a % 24) * Qo + t * Ys + o * 1e3 : NaN;
  }
  return null;
}
function Fs(e, n, a) {
  (n = n || 0), (a = a || 0);
  var t = new Date(0);
  t.setUTCFullYear(e, 0, 4);
  var o = t.getUTCDay() || 7,
    i = n * 7 + a + 1 - o;
  return t.setUTCDate(t.getUTCDate() + i), t;
}
var a1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  n1 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function fu(e) {
  return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
function Ws(e, n, a) {
  if (n < 0 || n > 11) return !1;
  if (a != null) {
    if (a < 1) return !1;
    var t = fu(e);
    if ((t && a > n1[n]) || (!t && a > a1[n])) return !1;
  }
  return !0;
}
function o1(e, n) {
  if (n < 1) return !1;
  var a = fu(e);
  return !((a && n > 366) || (!a && n > 365));
}
function qs(e, n, a) {
  return !(n < 0 || n > 52 || (a != null && (a < 0 || a > 6)));
}
function Zo(e, n, a) {
  return !(
    (e != null && (e < 0 || e >= 25)) ||
    (n != null && (n < 0 || n >= 60)) ||
    (a != null && (a < 0 || a >= 60))
  );
}
var Ar = { exports: {} },
  Br = { exports: {} };
(function (e, n) {
  Object.defineProperty(n, '__esModule', { value: !0 }), (n.default = a);
  function a(t, o) {
    if (t == null)
      throw new TypeError(
        'assign requires that input parameter not be null or undefined'
      );
    for (var i in o)
      Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]);
    return t;
  }
  e.exports = n.default;
})(Br, Br.exports);
var r1 = Br.exports;
(function (e, n) {
  var a = Nw.default;
  Object.defineProperty(n, '__esModule', { value: !0 }), (n.default = o);
  var t = a(r1);
  function o(i) {
    return (0, t.default)({}, i);
  }
  e.exports = n.default;
})(Ar, Ar.exports);
var i1 = Ar.exports;
const s1 = vi(i1);
function l1(e, n, a) {
  var t = Lr(e, a),
    o = hi(n, t, !0),
    i = new Date(t.getTime() - o),
    r = new Date(0);
  return (
    r.setFullYear(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()),
    r.setHours(
      i.getUTCHours(),
      i.getUTCMinutes(),
      i.getUTCSeconds(),
      i.getUTCMilliseconds()
    ),
    r
  );
}
function u1(e, n, a) {
  if (typeof e == 'string' && !e.match(hu)) {
    var t = s1(a);
    return (t.timeZone = n), Lr(e, t);
  }
  var o = Lr(e, a),
    i = pi(
      o.getFullYear(),
      o.getMonth(),
      o.getDate(),
      o.getHours(),
      o.getMinutes(),
      o.getSeconds(),
      o.getMilliseconds()
    ).getTime(),
    r = hi(n, new Date(i));
  return new Date(i + r);
}
function Gs(e) {
  return (n) =>
    new Intl.DateTimeFormat(e, { weekday: 'short', timeZone: 'UTC' })
      .format(new Date(`2017-01-0${n}T00:00:00+00:00`))
      .slice(0, 2);
}
function c1(e) {
  return (n) =>
    Ca(new Date(`2017-01-0${n}T00:00:00+00:00`), 'EEEEEE', { locale: e });
}
const d1 = (e, n, a) => {
    const t = [1, 2, 3, 4, 5, 6, 7];
    let o;
    if (e !== null)
      try {
        o = t.map(c1(e));
      } catch {
        o = t.map(Gs(n));
      }
    else o = t.map(Gs(n));
    const i = o.slice(0, a),
      r = o.slice(a + 1, o.length);
    return [o[a]].concat(...r).concat(...i);
  },
  fi = (e, n) => {
    const a = [];
    for (let t = +e[0]; t <= +e[1]; t++) a.push({ value: +t, text: `${t}` });
    return n ? a.reverse() : a;
  },
  yu = (e, n, a) => {
    const t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
      const r = i < 10 ? `0${i}` : i;
      return new Date(`2017-${r}-01T00:00:00+00:00`);
    });
    if (e !== null)
      try {
        const i = a === 'long' ? 'MMMM' : 'MMM';
        return t.map((r, s) => {
          const l = Ca(r, i, { locale: e });
          return { text: l.charAt(0).toUpperCase() + l.substring(1), value: s };
        });
      } catch {}
    const o = new Intl.DateTimeFormat(n, { month: a, timeZone: 'UTC' });
    return t.map((i, r) => {
      const s = o.format(i);
      return { text: s.charAt(0).toUpperCase() + s.substring(1), value: r };
    });
  },
  m1 = (e) =>
    [
      12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11,
    ][e],
  ht = (e) => {
    const n = A(e);
    return n != null && n.$el ? n?.$el : n;
  },
  g1 = (e) => Object.assign({ type: 'dot' }, e),
  bu = (e) => (Array.isArray(e) ? !!e[0] && !!e[1] : !1),
  ho = {
    prop: (e) => `"${e}" prop must be enabled!`,
    dateArr: (e) =>
      `You need to use array as "model-value" binding in order to support "${e}"`,
  },
  ft = (e) => e,
  js = (e) => (e === 0 ? e : !e || isNaN(+e) ? null : +e),
  zs = (e) => e === null,
  v1 = (e) => {
    if (e)
      return [
        ...e.querySelectorAll('input, button, select, textarea, a[href]'),
      ][0];
  },
  p1 = (e) => {
    const n = [],
      a = (t) => t.filter((o) => o);
    for (let t = 0; t < e.length; t += 3) {
      const o = [e[t], e[t + 1], e[t + 2]];
      n.push(a(o));
    }
    return n;
  },
  Wn = (e, n, a) => {
    const t = a != null,
      o = n != null;
    if (!t && !o) return !1;
    const i = +a,
      r = +n;
    return t && o ? +e > i || +e < r : t ? +e > i : o ? +e < r : !1;
  },
  cn = (e, n) =>
    p1(e).map((a) =>
      a.map((t) => {
        const { active: o, disabled: i, isBetween: r, highlighted: s } = n(t);
        return {
          ...t,
          active: o,
          disabled: i,
          className: {
            dp__overlay_cell_active: o,
            dp__overlay_cell: !o,
            dp__overlay_cell_disabled: i,
            dp__overlay_cell_pad: !0,
            dp__overlay_cell_active_disabled: i && o,
            dp__cell_in_between: r,
            'dp--highlighted': s,
          },
        };
      })
    ),
  Pa = (e, n, a = !1) => {
    e &&
      n.allowStopPropagation &&
      (a && e.stopImmediatePropagation(), e.stopPropagation());
  },
  h1 = () =>
    [
      'a[href]',
      'area[href]',
      "input:not([disabled]):not([type='hidden'])",
      'select:not([disabled])',
      'textarea:not([disabled])',
      'button:not([disabled])',
      "[tabindex]:not([tabindex='-1'])",
      '[data-datepicker-instance]',
    ].join(', ');
function f1(e, n) {
  let a = [...document.querySelectorAll(h1())];
  a = a.filter(
    (o) => !e.contains(o) || o.hasAttribute('data-datepicker-instance')
  );
  const t = a.indexOf(e);
  if (t >= 0 && (n ? t - 1 >= 0 : t + 1 <= a.length))
    return a[t + (n ? -1 : 1)];
}
const y1 = (e, n) => {
    let a;
    return function (...t) {
      clearTimeout(a),
        (a = setTimeout(() => {
          e(...t);
        }, n));
    };
  },
  Ks = (e, n, a, t, o) => {
    const i = Er(e, n.slice(0, e.length), new Date());
    return On(i) && jl(i)
      ? t || o
        ? i
        : at(i, {
            hours: +a.hours,
            minutes: +a?.minutes,
            seconds: +a?.seconds,
            milliseconds: 0,
          })
      : null;
  },
  b1 = (e, n, a, t, o) => {
    const i = Array.isArray(a) ? a[0] : a;
    if (typeof n == 'string') return Ks(e, n, i, t, o);
    if (Array.isArray(n)) {
      let r = null;
      for (const s of n) if (((r = Ks(e, s, i, t, o)), r)) break;
      return r;
    }
    return typeof n == 'function' ? n(e) : null;
  },
  ne = (e) => (e ? new Date(e) : new Date()),
  _1 = (e, n, a) => {
    if (n) {
      const o = (e.getMonth() + 1).toString().padStart(2, '0'),
        i = e.getDate().toString().padStart(2, '0'),
        r = e.getHours().toString().padStart(2, '0'),
        s = e.getMinutes().toString().padStart(2, '0'),
        l = a ? e.getSeconds().toString().padStart(2, '0') : '00';
      return `${e.getFullYear()}-${o}-${i}T${r}:${s}:${l}.000Z`;
    }
    const t = Date.UTC(
      e.getUTCFullYear(),
      e.getUTCMonth(),
      e.getUTCDate(),
      e.getUTCHours(),
      e.getUTCMinutes(),
      e.getUTCSeconds()
    );
    return new Date(t).toISOString();
  },
  St = (e) => {
    let n = ne(JSON.parse(JSON.stringify(e)));
    return (n = du(n, 0)), (n = mu(n, 0)), (n = li(n, 0)), (n = si(n, 0)), n;
  },
  Ia = (e, n, a, t) => {
    let o = e ? ne(e) : ne();
    return (
      (n || n === 0) && (o = du(o, +n)),
      (a || a === 0) && (o = mu(o, +a)),
      (t || t === 0) && (o = li(o, +t)),
      si(o, 0)
    );
  },
  bt = (e, n) => (!e || !n ? !1 : Fn(St(e), St(n))),
  We = (e, n) => (!e || !n ? !1 : Xa(St(e), St(n))),
  kt = (e, n) => (!e || !n ? !1 : Yn(St(e), St(n))),
  So = (e, n, a) =>
    e != null && e[0] && e != null && e[1]
      ? kt(a, e[0]) && bt(a, e[1])
      : e != null && e[0] && n
      ? (kt(a, e[0]) && bt(a, n)) || (bt(a, e[0]) && kt(a, n))
      : !1,
  qt = (e) => {
    const n = at(new Date(e), { date: 1 });
    return St(n);
  },
  Xo = (e, n, a) =>
    n && (a || a === 0)
      ? Object.fromEntries(
          ['hours', 'minutes', 'seconds'].map((t) =>
            t === n ? [t, a] : [t, isNaN(+e[t]) ? void 0 : +e[t]]
          )
        )
      : {
          hours: isNaN(+e.hours) ? void 0 : +e.hours,
          minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
          seconds: isNaN(+e.seconds) ? void 0 : +e.seconds,
        },
  Ra = (e) => ({ hours: jt(e), minutes: ia(e), seconds: ln(e) }),
  _u = (e, n) => {
    if (n) {
      const a = Ne(ne(n));
      if (a > e) return 12;
      if (a === e) return Ue(ne(n));
    }
  },
  wu = (e, n) => {
    if (n) {
      const a = Ne(ne(n));
      return a < e ? -1 : a === e ? Ue(ne(n)) : void 0;
    }
  },
  dn = (e) => {
    if (e) return Ne(ne(e));
  },
  zt = (e, n) => (n ? l1(e, n) : e),
  ku = (e, n) => (n ? u1(e, n) : e),
  w1 = (e) => (e instanceof Date ? e : ww(e)),
  Su = (e, n) => {
    const a = kt(e, n) ? n : e,
      t = kt(n, e) ? n : e;
    return zl({ start: a, end: t });
  },
  k1 = (e) => {
    const n = Gt(e, 1);
    return { month: Ue(n), year: Ne(n) };
  },
  ro = (e, n, a) => {
    const t = $a(zt(e, n), { weekStartsOn: +a }),
      o = b_(zt(e, n), { weekStartsOn: +a });
    return [t, o];
  },
  Tu = (e, n) => {
    const a = { hours: jt(ne()), minutes: ia(ne()), seconds: n ? ln(ne()) : 0 };
    return Object.assign(a, e);
  },
  Sa = (e, n, a) => [
    at(ne(e), { date: 1 }),
    at(ne(), { month: n, year: a, date: 1 }),
  ],
  ga = (e, n, a) => {
    let t = e ? ne(e) : ne();
    return (n || n === 0) && (t = cu(t, n)), a && (t = ra(t, a)), t;
  },
  Cu = (e, n, a, t, o) => {
    if (!t || (o && !n) || (!o && !a)) return !1;
    const i = o ? Gt(e, 1) : un(e, 1),
      r = [Ue(i), Ne(i)];
    return o ? !T1(...r, n) : !S1(...r, a);
  },
  S1 = (e, n, a) => bt(...Sa(a, e, n)) || We(...Sa(a, e, n)),
  T1 = (e, n, a) => kt(...Sa(a, e, n)) || We(...Sa(a, e, n)),
  Pu = (e, n, a, t, o, i, r) => {
    if (typeof n == 'function' && !r) return n(e);
    const s = a ? { locale: a } : void 0;
    return Array.isArray(e)
      ? `${Ca(e[0], i, s)}${o && !e[1] ? '' : t}${e[1] ? Ca(e[1], i, s) : ''}`
      : Ca(e, i, s);
  },
  za = (e) => {
    if (e) return null;
    throw new Error(ho.prop('partial-range'));
  },
  no = (e, n) => {
    if (n) return e();
    throw new Error(ho.prop('range'));
  },
  xr = (e) =>
    Array.isArray(e) ? On(e[0]) && (e[1] ? On(e[1]) : !0) : e ? On(e) : !1,
  C1 = (e, n) =>
    at(n ?? ne(), {
      hours: +e.hours || 0,
      minutes: +e.minutes || 0,
      seconds: +e.seconds || 0,
    }),
  Jo = (e, n, a, t) => {
    if (!e) return !0;
    if (t) {
      const o = a === 'max' ? Fn(e, n) : Yn(e, n),
        i = { seconds: 0, milliseconds: 0 };
      return o || Xa(at(e, i), at(n, i));
    }
    return a === 'max'
      ? e.getTime() <= n.getTime()
      : e.getTime() >= n.getTime();
  },
  er = (e, n, a) => (e ? C1(e, n) : ne(a ?? n)),
  Qs = (e, n, a, t, o) => {
    if (Array.isArray(t)) {
      const r = er(e, t[0], n),
        s = er(e, t[1], n);
      return Jo(t[0], r, a, !!n) && Jo(t[1], s, a, !!n) && o;
    }
    const i = er(e, t, n);
    return Jo(t, i, a, !!n) && o;
  },
  tr = (e) => at(ne(), Ra(e)),
  P1 = (e, n) =>
    Array.isArray(e)
      ? e
          .map((a) => ne(a))
          .filter((a) => Ne(ne(a)) === n)
          .map((a) => Ue(a))
      : [],
  Iu = (e, n, a) =>
    typeof e == 'function'
      ? e({ month: n, year: a })
      : !!e.months.find((t) => t.month === n && t.year === a),
  yi = (e, n) => (typeof e == 'function' ? e(n) : e.years.includes(n)),
  Cn = va({ menuFocused: !1, shiftKeyInMenu: !1 }),
  Eu = () => {
    const e = (a) => {
        Cn.menuFocused = a;
      },
      n = (a) => {
        Cn.shiftKeyInMenu !== a && (Cn.shiftKeyInMenu = a);
      };
    return {
      control: u(() => ({
        shiftKeyInMenu: Cn.shiftKeyInMenu,
        menuFocused: Cn.menuFocused,
      })),
      setMenuFocused: e,
      setShiftKey: n,
    };
  },
  tt = va({
    monthYear: [],
    calendar: [],
    time: [],
    actionRow: [],
    selectionGrid: [],
    timePicker: { 0: [], 1: [] },
    monthPicker: [],
  }),
  ar = M(null),
  oo = M(!1),
  nr = M(!1),
  or = M(!1),
  rr = M(!1),
  Ct = M(0),
  yt = M(0),
  Ea = () => {
    const e = u(() =>
        oo.value
          ? [...tt.selectionGrid, tt.actionRow].filter((d) => d.length)
          : nr.value
          ? [
              ...tt.timePicker[0],
              ...tt.timePicker[1],
              rr.value ? [] : [ar.value],
              tt.actionRow,
            ].filter((d) => d.length)
          : or.value
          ? [...tt.monthPicker, tt.actionRow]
          : [tt.monthYear, ...tt.calendar, tt.time, tt.actionRow].filter(
              (d) => d.length
            )
      ),
      n = (d) => {
        Ct.value = d ? Ct.value + 1 : Ct.value - 1;
        let v = null;
        e.value[yt.value] && (v = e.value[yt.value][Ct.value]),
          v || (Ct.value = d ? Ct.value - 1 : Ct.value + 1);
      },
      a = (d) => {
        (yt.value === 0 && !d) ||
          (yt.value === e.value.length && d) ||
          ((yt.value = d ? yt.value + 1 : yt.value - 1),
          e.value[yt.value]
            ? e.value[yt.value] &&
              !e.value[yt.value][Ct.value] &&
              Ct.value !== 0 &&
              (Ct.value = e.value[yt.value].length - 1)
            : (yt.value = d ? yt.value - 1 : yt.value + 1));
      },
      t = (d) => {
        let v = null;
        e.value[yt.value] && (v = e.value[yt.value][Ct.value]),
          v
            ? v.focus({ preventScroll: !oo.value })
            : (Ct.value = d ? Ct.value - 1 : Ct.value + 1);
      },
      o = () => {
        n(!0), t(!0);
      },
      i = () => {
        n(!1), t(!1);
      },
      r = () => {
        a(!1), t(!0);
      },
      s = () => {
        a(!0), t(!0);
      },
      l = (d, v) => {
        tt[v] = d;
      },
      m = (d, v) => {
        tt[v] = d;
      },
      g = () => {
        (Ct.value = 0), (yt.value = 0);
      };
    return {
      buildMatrix: l,
      buildMultiLevelMatrix: m,
      setTimePickerBackRef: (d) => {
        ar.value = d;
      },
      setSelectionGrid: (d) => {
        (oo.value = d), g(), d || (tt.selectionGrid = []);
      },
      setTimePicker: (d, v = !1) => {
        (nr.value = d),
          (rr.value = v),
          g(),
          d || ((tt.timePicker[0] = []), (tt.timePicker[1] = []));
      },
      setTimePickerElements: (d, v = 0) => {
        tt.timePicker[v] = d;
      },
      arrowRight: o,
      arrowLeft: i,
      arrowUp: r,
      arrowDown: s,
      clearArrowNav: () => {
        (tt.monthYear = []),
          (tt.calendar = []),
          (tt.time = []),
          (tt.actionRow = []),
          (tt.selectionGrid = []),
          (tt.timePicker[0] = []),
          (tt.timePicker[1] = []),
          (oo.value = !1),
          (nr.value = !1),
          (rr.value = !1),
          (or.value = !1),
          g(),
          (ar.value = null);
      },
      setMonthPicker: (d) => {
        (or.value = d), g();
      },
      refSets: tt,
    };
  },
  Zs = (e) => ({
    menuAppearTop: 'dp-menu-appear-top',
    menuAppearBottom: 'dp-menu-appear-bottom',
    open: 'dp-slide-down',
    close: 'dp-slide-up',
    next: 'calendar-next',
    previous: 'calendar-prev',
    vNext: 'dp-slide-up',
    vPrevious: 'dp-slide-down',
    ...(e ?? {}),
  }),
  I1 = (e) => ({
    toggleOverlay: 'Toggle overlay',
    menu: 'Datepicker menu',
    input: 'Datepicker input',
    calendarWrap: 'Calendar wrapper',
    calendarDays: 'Calendar days',
    openTimePicker: 'Open time picker',
    closeTimePicker: 'Close time Picker',
    incrementValue: (n) => `Increment ${n}`,
    decrementValue: (n) => `Decrement ${n}`,
    openTpOverlay: (n) => `Open ${n} overlay`,
    amPmButton: 'Switch AM/PM mode',
    openYearsOverlay: 'Open years overlay',
    openMonthsOverlay: 'Open months overlay',
    nextMonth: 'Next month',
    prevMonth: 'Previous month',
    nextYear: 'Next year',
    prevYear: 'Previous year',
    day: () => '',
    ...(e ?? {}),
  }),
  Xs = (e) =>
    e ? (typeof e == 'boolean' ? (e ? 2 : 0) : +e >= 2 ? +e : 2) : 0,
  E1 = (e) => {
    const n = typeof e == 'object' && e,
      a = { static: !0, solo: !1 };
    if (!e) return { ...a, count: Xs(!1) };
    const t = n ? e : {},
      o = n ? t.count ?? !0 : e,
      i = Xs(o);
    return Object.assign(a, t, { count: i });
  },
  D1 = (e, n, a) => e || (typeof a == 'string' ? a : n),
  M1 = (e) => (typeof e == 'boolean' ? (e ? Zs({}) : !1) : Zs(e)),
  O1 = (e) => {
    const n = {
      enterSubmit: !0,
      tabSubmit: !0,
      openMenu: !0,
      selectOnFocus: !1,
      rangeSeparator: ' - ',
    };
    return typeof e == 'object'
      ? { ...n, ...(e ?? {}), enabled: !0 }
      : { ...n, enabled: e };
  },
  L1 = (e) => ({
    months: [],
    years: [],
    times: { hours: [], minutes: [], seconds: [] },
    ...(e ?? {}),
  }),
  A1 = (e) => ({
    showSelect: !0,
    showCancel: !0,
    showNow: !1,
    showPreview: !0,
    ...(e ?? {}),
  }),
  B1 = (e) => {
    const n = { input: !1 };
    return typeof e == 'object'
      ? { ...n, ...(e ?? {}), enabled: !0 }
      : { enabled: e, ...n };
  },
  x1 = (e) => ({
    allowStopPropagation: !0,
    closeOnScroll: !1,
    modeHeight: 255,
    allowPreventDefault: !1,
    closeOnClearValue: !0,
    closeOnAutoApply: !0,
    noSwipe: !1,
    keepActionRow: !1,
    onClickOutside: void 0,
    tabOutClosesMenu: !0,
    ...(e ?? {}),
  }),
  R1 = (e, n, a) => {
    const t = {
      dates: Array.isArray(e) ? e.map((o) => ne(o)) : [],
      years: [],
      months: [],
      quarters: [],
      weeks: [],
      weekdays: n,
      options: { highlightDisabled: a },
    };
    return typeof e == 'function' ? e : { ...t, ...(e ?? {}) };
  },
  H1 = (e) =>
    typeof e == 'object'
      ? { type: e.type, hideOnOffsetDates: e.hideOnOffsetDates ?? !1 }
      : { type: e, hideOnOffsetDates: !1 },
  vt = (e) => {
    const n = () => {
        const w = e.enableSeconds ? ':ss' : '';
        return e.is24 ? `HH:mm${w}` : `hh:mm${w} aa`;
      },
      a = () =>
        e.format
          ? e.format
          : e.monthPicker
          ? 'MM/yyyy'
          : e.timePicker
          ? n()
          : e.weekPicker
          ? 'MM/dd/yyyy'
          : e.yearPicker
          ? 'yyyy'
          : e.quarterPicker
          ? 'QQQ/yyyy'
          : e.enableTimePicker
          ? `MM/dd/yyyy, ${n()}`
          : 'MM/dd/yyyy',
      t = (w) => Tu(w, e.enableSeconds),
      o = () =>
        e.range
          ? e.startTime && Array.isArray(e.startTime)
            ? [t(e.startTime[0]), t(e.startTime[1])]
            : null
          : e.startTime && !Array.isArray(e.startTime)
          ? t(e.startTime)
          : null,
      i = u(() => E1(e.multiCalendars)),
      r = u(() => o()),
      s = u(() => I1(e.ariaLabels)),
      l = u(() => L1(e.filters)),
      m = u(() => M1(e.transitions)),
      g = u(() => A1(e.actionRow)),
      d = u(() => D1(e.previewFormat, e.format, a())),
      v = u(() => O1(e.textInput)),
      f = u(() => B1(e.inline)),
      y = u(() => x1(e.config)),
      S = u(() =>
        R1(e.highlight, e.highlightWeekDays, e.highlightDisabledDays)
      ),
      T = u(() => H1(e.weekNumbers));
    return {
      defaultedTransitions: m,
      defaultedMultiCalendars: i,
      defaultedStartTime: r,
      defaultedAriaLabels: s,
      defaultedFilters: l,
      defaultedActionRow: g,
      defaultedPreviewFormat: d,
      defaultedTextInput: v,
      defaultedInline: f,
      defaultedConfig: y,
      defaultedHighlight: S,
      defaultedWeekNumbers: T,
      getDefaultPattern: a,
      getDefaultStartTime: o,
    };
  },
  N1 = (e, n, a) => {
    const t = M(),
      { defaultedTextInput: o, getDefaultPattern: i } = vt(n),
      r = M(''),
      s = xn(n, 'format');
    Re(t, () => {
      e('internal-model-change', t.value);
    }),
      Re(s, () => {
        N();
      });
    const l = (p) => ku(p, n.timezone),
      m = (p) => zt(p, n.timezone),
      g = (p, Y, G = !1) =>
        Pu(
          p,
          n.format,
          n.formatLocale,
          o.value.rangeSeparator,
          n.modelAuto,
          Y ?? i(),
          G
        ),
      d = (p) =>
        p
          ? n.modelType
            ? U(p)
            : {
                hours: jt(p),
                minutes: ia(p),
                seconds: n.enableSeconds ? ln(p) : 0,
              }
          : null,
      v = (p) => (n.modelType ? U(p) : { month: Ue(p), year: Ne(p) }),
      f = (p) =>
        Array.isArray(p)
          ? n.multiDates
            ? p.map((Y) => y(Y, ra(ne(), Y)))
            : no(
                () => [
                  ra(ne(), p[0]),
                  p[1] ? ra(ne(), p[1]) : za(n.partialRange),
                ],
                n.range
              )
          : ra(ne(), +p),
      y = (p, Y) =>
        (typeof p == 'string' || typeof p == 'number') && n.modelType
          ? I(p)
          : Y,
      S = (p) =>
        Array.isArray(p)
          ? [
              y(p[0], Ia(null, +p[0].hours, +p[0].minutes, p[0].seconds)),
              y(p[1], Ia(null, +p[1].hours, +p[1].minutes, p[1].seconds)),
            ]
          : y(p, Ia(null, p.hours, p.minutes, p.seconds)),
      T = (p) =>
        Array.isArray(p)
          ? n.multiDates
            ? p.map((Y) => y(Y, ga(null, +Y.month, +Y.year)))
            : no(
                () => [
                  y(p[0], ga(null, +p[0].month, +p[0].year)),
                  y(
                    p[1],
                    p[1]
                      ? ga(null, +p[1].month, +p[1].year)
                      : za(n.partialRange)
                  ),
                ],
                n.range
              )
          : y(p, ga(null, +p.month, +p.year)),
      w = (p) => {
        if (Array.isArray(p)) return p.map((Y) => I(Y));
        throw new Error(ho.dateArr('multi-dates'));
      },
      b = (p) => {
        if (Array.isArray(p)) return [ne(p[0]), ne(p[1])];
        throw new Error(ho.dateArr('week-picker'));
      },
      L = (p) =>
        n.modelAuto
          ? Array.isArray(p)
            ? [I(p[0]), I(p[1])]
            : n.autoApply
            ? [I(p)]
            : [I(p), null]
          : Array.isArray(p)
          ? no(() => [I(p[0]), p[1] ? I(p[1]) : za(n.partialRange)], n.range)
          : I(p),
      D = () => {
        Array.isArray(t.value) &&
          n.range &&
          t.value.length === 1 &&
          t.value.push(za(n.partialRange));
      },
      P = () => {
        const p = t.value;
        return [U(p[0]), p[1] ? U(p[1]) : za(n.partialRange)];
      },
      x = () => (t.value[1] ? P() : U(ft(t.value[0]))),
      B = () => (t.value || []).map((p) => U(p)),
      K = () => (
        D(),
        n.modelAuto
          ? x()
          : n.multiDates
          ? B()
          : Array.isArray(t.value)
          ? no(() => P(), n.range)
          : U(ft(t.value))
      ),
      W = (p) =>
        !p || (Array.isArray(p) && !p.length)
          ? null
          : n.timePicker
          ? S(ft(p))
          : n.monthPicker
          ? T(ft(p))
          : n.yearPicker
          ? f(ft(p))
          : n.multiDates
          ? w(ft(p))
          : n.weekPicker
          ? b(ft(p))
          : L(ft(p)),
      C = (p) => {
        const Y = W(p);
        xr(ft(Y))
          ? ((t.value = ft(Y)), N())
          : ((t.value = null), (r.value = ''));
      },
      H = () => {
        const p = (Y) => Ca(Y, o.value.format);
        return `${p(t.value[0])} ${o.value.rangeSeparator} ${
          t.value[1] ? p(t.value[1]) : ''
        }`;
      },
      F = () =>
        a.value && t.value
          ? Array.isArray(t.value)
            ? H()
            : Ca(t.value, o.value.format)
          : g(t.value),
      Q = () =>
        t.value
          ? n.multiDates
            ? t.value.map((p) => g(p)).join('; ')
            : o.value.enabled && typeof o.value.format == 'string'
            ? F()
            : g(t.value)
          : '',
      N = () => {
        !n.format ||
        typeof n.format == 'string' ||
        (o.value.enabled && typeof o.value.format == 'string')
          ? (r.value = Q())
          : (r.value = n.format(t.value));
      },
      I = (p) => {
        if (n.utc) {
          const Y = new Date(p);
          return n.utc === 'preserve'
            ? new Date(Y.getTime() + Y.getTimezoneOffset() * 6e4)
            : Y;
        }
        return n.modelType
          ? n.modelType === 'date' || n.modelType === 'timestamp'
            ? m(new Date(p))
            : n.modelType === 'format' &&
              (typeof n.format == 'string' || !n.format)
            ? Er(p, i(), new Date())
            : m(Er(p, n.modelType, new Date()))
          : m(new Date(p));
      },
      U = (p) =>
        p
          ? n.utc
            ? _1(p, n.utc === 'preserve', n.enableSeconds)
            : n.modelType
            ? n.modelType === 'timestamp'
              ? +l(p)
              : n.modelType === 'format' &&
                (typeof n.format == 'string' || !n.format)
              ? g(l(p))
              : g(l(p), n.modelType, !0)
            : l(p)
          : '',
      V = (p, Y = !1) => {
        if ((e('update:model-value', p), n.emitTimezone && Y)) {
          const G = Array.isArray(p)
            ? p.map((ee) => zt(ft(ee)), n.emitTimezone)
            : zt(ft(p), n.emitTimezone);
          e('update:model-timezone-value', G);
        }
      },
      j = (p) =>
        Array.isArray(t.value)
          ? n.multiDates
            ? t.value.map((Y) => p(Y))
            : [p(t.value[0]), t.value[1] ? p(t.value[1]) : za(n.partialRange)]
          : p(ft(t.value)),
      k = (p) => V(ft(j(p)));
    return {
      inputValue: r,
      internalModelValue: t,
      checkBeforeEmit: () =>
        t.value
          ? n.range
            ? n.partialRange
              ? t.value.length >= 1
              : t.value.length === 2
            : !!t.value
          : !1,
      parseExternalModelValue: C,
      formatInputValue: N,
      emitModelValue: () => (
        N(),
        n.monthPicker
          ? k(v)
          : n.timePicker
          ? k(d)
          : n.yearPicker
          ? k(Ne)
          : n.weekPicker
          ? V(
              t.value.map((p) => U(p)),
              !0
            )
          : V(K(), !0)
      ),
    };
  },
  $1 = (e, n) => {
    const { defaultedFilters: a } = vt(e),
      { validateMonthYearInRange: t } = Fa(e),
      o = (m, g) => {
        let d = m;
        return a.value.months.includes(Ue(d))
          ? ((d = g ? Gt(m, 1) : un(m, 1)), o(d, g))
          : d;
      },
      i = (m, g) => {
        let d = m;
        return a.value.years.includes(Ne(d))
          ? ((d = g ? ti(m, 1) : gu(m, 1)), i(d, g))
          : d;
      },
      r = (m, g = !1) => {
        const d = at(new Date(), { month: e.month, year: e.year });
        let v = m ? Gt(d, 1) : un(d, 1);
        e.disableYearSelect && (v = ra(v, e.year));
        let f = Ue(v),
          y = Ne(v);
        a.value.months.includes(f) && ((v = o(v, m)), (f = Ue(v)), (y = Ne(v))),
          a.value.years.includes(y) && ((v = i(v, m)), (y = Ne(v))),
          t(f, y, m, e.preventMinMaxNavigation) && s(f, y, g);
      },
      s = (m, g, d) => {
        n('update-month-year', { month: m, year: g, fromNav: d });
      },
      l = u(
        () => (m) =>
          Cu(
            at(new Date(), { month: e.month, year: e.year }),
            e.maxDate,
            e.minDate,
            e.preventMinMaxNavigation,
            m
          )
      );
    return { handleMonthYearChange: r, isDisabled: l, updateMonthYear: s };
  };
var Ka = ((e) => (
    (e.center = 'center'), (e.left = 'left'), (e.right = 'right'), e
  ))(Ka || {}),
  Ft = ((e) => ((e.month = 'month'), (e.year = 'year'), e))(Ft || {}),
  La = ((e) => ((e.top = 'top'), (e.bottom = 'bottom'), e))(La || {}),
  Ha = ((e) => (
    (e.header = 'header'),
    (e.calendar = 'calendar'),
    (e.timePicker = 'timePicker'),
    e
  ))(Ha || {}),
  ea = ((e) => (
    (e.month = 'month'),
    (e.year = 'year'),
    (e.calendar = 'calendar'),
    (e.time = 'time'),
    (e.minutes = 'minutes'),
    (e.hours = 'hours'),
    (e.seconds = 'seconds'),
    e
  ))(ea || {});
const V1 = ({
    menuRef: e,
    menuRefInner: n,
    inputRef: a,
    pickerWrapperRef: t,
    inline: o,
    emit: i,
    props: r,
    slots: s,
  }) => {
    const l = M({}),
      m = M(!1),
      g = M({ top: '0', left: '0' }),
      d = M(!1),
      v = xn(r, 'teleportCenter');
    Re(v, () => {
      (g.value = JSON.parse(JSON.stringify({}))), D();
    });
    const f = (I) => {
        if (r.teleport) {
          const U = I.getBoundingClientRect();
          return { left: U.left + window.scrollX, top: U.top + window.scrollY };
        }
        return { top: 0, left: 0 };
      },
      y = (I, U) => {
        g.value.left = `${I + U - l.value.width}px`;
      },
      S = (I) => {
        g.value.left = `${I}px`;
      },
      T = (I, U) => {
        r.position === Ka.left && S(I),
          r.position === Ka.right && y(I, U),
          r.position === Ka.center &&
            (g.value.left = `${I + U / 2 - l.value.width / 2}px`);
      },
      w = (I) => {
        const { width: U, height: V } = I.getBoundingClientRect(),
          { top: j, left: k } = r.altPosition ? r.altPosition(I) : f(I);
        return { top: +j, left: +k, width: U, height: V };
      },
      b = () => {
        (g.value.left = '50%'),
          (g.value.top = '50%'),
          (g.value.transform = 'translate(-50%, -50%)'),
          (g.value.position = 'fixed'),
          delete g.value.opacity;
      },
      L = () => {
        const I = ht(a),
          { top: U, left: V, transform: j } = r.altPosition(I);
        g.value = { top: `${U}px`, left: `${V}px`, transform: j ?? '' };
      },
      D = (I = !0) => {
        var U;
        if (!o.value.enabled) {
          if (v.value) return b();
          if (r.altPosition !== null) return L();
          if (I) {
            const V = r.teleport
              ? (U = n.value) == null
                ? void 0
                : U.$el
              : e.value;
            V && (l.value = V.getBoundingClientRect()),
              i('recalculate-position');
          }
          return H();
        }
      },
      P = ({ inputEl: I, left: U, width: V }) => {
        window.screen.width > 768 && !m.value && T(U, V), K(I);
      },
      x = (I) => {
        const { top: U, left: V, height: j, width: k } = w(I);
        (g.value.top = `${j + U + +r.offset}px`),
          (d.value = !1),
          m.value || (g.value.left = `${V + k / 2 - l.value.width / 2}px`),
          P({ inputEl: I, left: V, width: k });
      },
      B = (I) => {
        const { top: U, left: V, width: j } = w(I);
        (g.value.top = `${U - +r.offset - l.value.height}px`),
          (d.value = !0),
          P({ inputEl: I, left: V, width: j });
      },
      K = (I) => {
        if (r.autoPosition) {
          const { left: U, width: V } = w(I),
            { left: j, right: k } = l.value;
          if (!m.value) {
            if (Math.abs(j) !== Math.abs(k)) {
              if (j <= 0) return (m.value = !0), S(U);
              if (k >= document.documentElement.clientWidth)
                return (m.value = !0), y(U, V);
            }
            return T(U, V);
          }
        }
      },
      W = () => {
        const I = ht(a);
        if (I) {
          const { height: U } = l.value,
            { top: V, height: j } = I.getBoundingClientRect(),
            k = window.innerHeight - V - j,
            p = V;
          return U <= k
            ? La.bottom
            : U > k && U <= p
            ? La.top
            : k >= p
            ? La.bottom
            : La.top;
        }
        return La.bottom;
      },
      C = (I) => (W() === La.bottom ? x(I) : B(I)),
      H = () => {
        const I = ht(a);
        if (I) return r.autoPosition ? C(I) : x(I);
      },
      F = function (I) {
        if (I) {
          const U = I.scrollHeight > I.clientHeight,
            V = window.getComputedStyle(I).overflowY.indexOf('hidden') !== -1;
          return U && !V;
        }
        return !0;
      },
      Q = function (I) {
        return !I ||
          I === document.body ||
          I.nodeType === Node.DOCUMENT_FRAGMENT_NODE
          ? window
          : F(I)
          ? I
          : Q(I.parentNode);
      },
      N = (I) => {
        if (I)
          switch (r.position) {
            case Ka.left:
              return { left: 0, transform: 'translateX(0)' };
            case Ka.right:
              return { left: `${I.width}px`, transform: 'translateX(-100%)' };
            default:
              return {
                left: `${I.width / 2}px`,
                transform: 'translateX(-50%)',
              };
          }
        return {};
      };
    return {
      openOnTop: d,
      menuStyle: g,
      xCorrect: m,
      setMenuPosition: D,
      getScrollableParent: Q,
      shadowRender: (I, U) => {
        var V, j, k;
        const p = document.createElement('div'),
          Y = (V = ht(a)) == null ? void 0 : V.getBoundingClientRect();
        p.setAttribute('id', 'dp--temp-container');
        const G =
          (j = t.value) != null && j.clientWidth ? t.value : document.body;
        G.append(p);
        const ee = N(Y),
          J = Fu(
            I,
            {
              ...U,
              shadow: !0,
              style: { opacity: 0, position: 'absolute', ...ee },
            },
            Object.fromEntries(
              Object.keys(s)
                .filter((R) => ['right-sidebar', 'left-sidebar'].includes(R))
                .map((R) => [R, s[R]])
            )
          );
        Ci(J, p),
          (l.value = (k = J.el) == null ? void 0 : k.getBoundingClientRect()),
          Ci(null, p),
          G.removeChild(p);
      },
    };
  },
  _a = [
    { name: 'clock-icon', use: ['time', 'calendar', 'shared'] },
    {
      name: 'arrow-left',
      use: ['month-year', 'calendar', 'shared', 'year-mode'],
    },
    {
      name: 'arrow-right',
      use: ['month-year', 'calendar', 'shared', 'year-mode'],
    },
    { name: 'arrow-up', use: ['time', 'calendar', 'month-year', 'shared'] },
    { name: 'arrow-down', use: ['time', 'calendar', 'month-year', 'shared'] },
    {
      name: 'calendar-icon',
      use: ['month-year', 'time', 'calendar', 'shared', 'year-mode'],
    },
    { name: 'day', use: ['calendar', 'shared'] },
    { name: 'month-overlay-value', use: ['calendar', 'month-year', 'shared'] },
    {
      name: 'year-overlay-value',
      use: ['calendar', 'month-year', 'shared', 'year-mode'],
    },
    { name: 'year-overlay', use: ['month-year', 'shared'] },
    { name: 'month-overlay', use: ['month-year', 'shared'] },
    { name: 'month-overlay-header', use: ['month-year', 'shared'] },
    { name: 'year-overlay-header', use: ['month-year', 'shared'] },
    { name: 'hours-overlay-value', use: ['calendar', 'time', 'shared'] },
    { name: 'minutes-overlay-value', use: ['calendar', 'time', 'shared'] },
    { name: 'seconds-overlay-value', use: ['calendar', 'time', 'shared'] },
    { name: 'hours', use: ['calendar', 'time', 'shared'] },
    { name: 'minutes', use: ['calendar', 'time', 'shared'] },
    { name: 'month', use: ['calendar', 'month-year', 'shared'] },
    { name: 'year', use: ['calendar', 'month-year', 'shared', 'year-mode'] },
    { name: 'action-buttons', use: ['action'] },
    { name: 'action-preview', use: ['action'] },
    { name: 'calendar-header', use: ['calendar', 'shared'] },
    { name: 'marker-tooltip', use: ['calendar', 'shared'] },
    { name: 'action-extra', use: ['menu'] },
    { name: 'time-picker-overlay', use: ['calendar', 'time', 'shared'] },
    { name: 'am-pm-button', use: ['calendar', 'time', 'shared'] },
    { name: 'left-sidebar', use: ['menu'] },
    { name: 'right-sidebar', use: ['menu'] },
    { name: 'month-year', use: ['month-year', 'shared'] },
    { name: 'time-picker', use: ['menu', 'shared'] },
    { name: 'action-row', use: ['action'] },
    { name: 'marker', use: ['calendar', 'shared'] },
    { name: 'quarter', use: ['shared'] },
  ],
  U1 = [
    { name: 'trigger' },
    { name: 'input-icon' },
    { name: 'clear-icon' },
    { name: 'dp-input' },
  ],
  Y1 = {
    all: () => _a,
    monthYear: () => _a.filter((e) => e.use.includes('month-year')),
    input: () => U1,
    timePicker: () => _a.filter((e) => e.use.includes('time')),
    action: () => _a.filter((e) => e.use.includes('action')),
    calendar: () => _a.filter((e) => e.use.includes('calendar')),
    menu: () => _a.filter((e) => e.use.includes('menu')),
    shared: () => _a.filter((e) => e.use.includes('shared')),
    yearMode: () => _a.filter((e) => e.use.includes('year-mode')),
  },
  At = (e, n, a) => {
    const t = [];
    return (
      Y1[n]().forEach((o) => {
        e[o.name] && t.push(o.name);
      }),
      a != null &&
        a.length &&
        a.forEach((o) => {
          o.slot && t.push(o.slot);
        }),
      t
    );
  },
  zn = (e) => {
    const n = u(() => (t) => e.value ? (t ? e.value.open : e.value.close) : ''),
      a = u(
        () => (t) =>
          e.value ? (t ? e.value.menuAppearTop : e.value.menuAppearBottom) : ''
      );
    return { transitionName: n, showTransition: !!e.value, menuTransition: a };
  },
  Kn = (e, n) => {
    const a = ne(zt(new Date(), e.timezone)),
      t = M([{ month: Ue(a), year: Ne(a) }]),
      o = va({
        hours: e.range ? [jt(a), jt(a)] : jt(a),
        minutes: e.range ? [ia(a), ia(a)] : ia(a),
        seconds: e.range ? [0, 0] : 0,
      }),
      i = u({
        get: () => e.internalModelValue,
        set: (l) => {
          !e.readonly && !e.disabled && n('update:internal-model-value', l);
        },
      }),
      r = u(() => (l) => t.value[l] ? t.value[l].month : 0),
      s = u(() => (l) => t.value[l] ? t.value[l].year : 0);
    return { calendars: t, time: o, modelValue: i, month: r, year: s };
  },
  F1 = (e, n) => {
    const { defaultedMultiCalendars: a, defaultedHighlight: t } = vt(n),
      { isDisabled: o, matchDate: i } = Fa(n),
      r = M(null),
      s = M(ne(zt(new Date(), n.timezone))),
      l = (k) => {
        (!k.current && n.hideOffsetDates) || (r.value = k.value);
      },
      m = () => {
        r.value = null;
      },
      g = (k) =>
        Array.isArray(e.value) && n.range && e.value[0] && r.value
          ? k
            ? kt(r.value, e.value[0])
            : bt(r.value, e.value[0])
          : !0,
      d = (k, p) => {
        const Y = () =>
            e.value ? (p ? e.value[0] || null : e.value[1]) : null,
          G = e.value && Array.isArray(e.value) ? Y() : null;
        return We(ne(k.value), G);
      },
      v = (k) => {
        const p = Array.isArray(e.value) ? e.value[0] : null;
        return k ? !bt(r.value ?? null, p) : !0;
      },
      f = (k, p = !0) =>
        (n.range || n.weekPicker) &&
        Array.isArray(e.value) &&
        e.value.length === 2
          ? n.hideOffsetDates && !k.current
            ? !1
            : We(ne(k.value), e.value[p ? 0 : 1])
          : n.range
          ? (d(k, p) && v(p)) ||
            (We(k.value, Array.isArray(e.value) ? e.value[0] : null) && g(p))
          : !1,
      y = (k, p, Y) =>
        Array.isArray(e.value) && e.value[0] && e.value.length === 1
          ? k
            ? !1
            : Y
            ? kt(e.value[0], p.value)
            : bt(e.value[0], p.value)
          : !1,
      S = (k) =>
        !e.value || (n.hideOffsetDates && !k.current)
          ? !1
          : n.range
          ? n.modelAuto && Array.isArray(e.value)
            ? We(k.value, e.value[0] ? e.value[0] : s.value)
            : !1
          : n.multiDates && Array.isArray(e.value)
          ? e.value.some((p) => We(p, k.value))
          : We(k.value, e.value ? e.value : s.value),
      T = (k) => {
        if (n.autoRange || n.weekPicker) {
          if (r.value) {
            if (n.hideOffsetDates && !k.current) return !1;
            const p = ma(r.value, +n.autoRange),
              Y = ro(ne(r.value), n.timezone, n.weekStart);
            return n.weekPicker ? We(Y[1], ne(k.value)) : We(p, ne(k.value));
          }
          return !1;
        }
        return !1;
      },
      w = (k) => {
        if (n.autoRange || n.weekPicker) {
          if (r.value) {
            const p = ma(r.value, +n.autoRange);
            if (n.hideOffsetDates && !k.current) return !1;
            const Y = ro(ne(r.value), n.timezone, n.weekStart);
            return n.weekPicker
              ? kt(k.value, Y[0]) && bt(k.value, Y[1])
              : kt(k.value, r.value) && bt(k.value, p);
          }
          return !1;
        }
        return !1;
      },
      b = (k) => {
        if (n.autoRange || n.weekPicker) {
          if (r.value) {
            if (n.hideOffsetDates && !k.current) return !1;
            const p = ro(ne(r.value), n.timezone, n.weekStart);
            return n.weekPicker ? We(p[0], k.value) : We(r.value, k.value);
          }
          return !1;
        }
        return !1;
      },
      L = (k) => So(e.value, r.value, k.value),
      D = () =>
        n.modelAuto && Array.isArray(n.internalModelValue)
          ? !!n.internalModelValue[0]
          : !1,
      P = () => (n.modelAuto ? bu(n.internalModelValue) : !0),
      x = (k) => {
        if ((Array.isArray(e.value) && e.value.length) || n.weekPicker)
          return !1;
        const p = n.range ? !f(k) && !f(k, !1) : !0;
        return !o(k.value) && !S(k) && !(!k.current && n.hideOffsetDates) && p;
      },
      B = (k) => (n.range ? (n.modelAuto ? D() && S(k) : !1) : S(k)),
      K = (k) => {
        var p;
        return t.value
          ? typeof t.value == 'function'
            ? t.value(k.value)
            : i(
                k.value,
                (p = n.arrMapValues) != null && p.highlightedDates
                  ? n.arrMapValues.highlightedDates
                  : t.value.dates
              )
          : !1;
      },
      W = (k) => {
        const p = o(k.value);
        return (
          p &&
          (typeof t.value == 'function'
            ? !t.value(k.value, p)
            : !t.value.options.highlightDisabled)
        );
      },
      C = (k) => {
        var p;
        return typeof t.value == 'function'
          ? t.value(k.value)
          : (p = t.value.weekdays) == null
          ? void 0
          : p.includes(k.value.getDay());
      },
      H = (k) =>
        (n.range || n.weekPicker) &&
        (!(a.value.count > 0) || k.current) &&
        P() &&
        !(!k.current && n.hideOffsetDates) &&
        !S(k)
          ? L(k)
          : !1,
      F = (k) => {
        const { isRangeStart: p, isRangeEnd: Y } = I(k),
          G = n.range ? p || Y : !1;
        return {
          dp__cell_offset: !k.current,
          dp__pointer:
            !n.disabled && !(!k.current && n.hideOffsetDates) && !o(k.value),
          dp__cell_disabled: o(k.value),
          dp__cell_highlight:
            !W(k) &&
            (K(k) || C(k)) &&
            !B(k) &&
            !G &&
            !b(k) &&
            !(H(k) && n.weekPicker) &&
            !Y,
          dp__cell_highlight_active: !W(k) && (K(k) || C(k)) && B(k),
          dp__today: !n.noToday && We(k.value, s.value) && k.current,
        };
      },
      Q = (k) => ({ dp__active_date: B(k), dp__date_hover: x(k) }),
      N = (k) => ({
        ...U(k),
        ...V(k),
        dp__range_between_week: H(k) && n.weekPicker,
      }),
      I = (k) => {
        const p = a.value.count > 0 ? k.current && f(k) && P() : f(k) && P(),
          Y =
            a.value.count > 0 ? k.current && f(k, !1) && P() : f(k, !1) && P();
        return { isRangeStart: p, isRangeEnd: Y };
      },
      U = (k) => {
        const { isRangeStart: p, isRangeEnd: Y } = I(k);
        return {
          dp__range_start: p,
          dp__range_end: Y,
          dp__range_between: H(k) && !n.weekPicker,
          dp__date_hover_start: y(x(k), k, !0),
          dp__date_hover_end: y(x(k), k, !1),
        };
      },
      V = (k) => ({
        ...U(k),
        dp__cell_auto_range: w(k),
        dp__cell_auto_range_start: b(k),
        dp__cell_auto_range_end: T(k),
      }),
      j = (k) =>
        n.range
          ? n.autoRange
            ? V(k)
            : n.modelAuto
            ? { ...Q(k), ...U(k) }
            : U(k)
          : n.weekPicker
          ? N(k)
          : Q(k);
    return {
      setHoverDate: l,
      clearHoverDate: m,
      getDayClassData: (k) =>
        n.hideOffsetDates && !k.current
          ? {}
          : {
              ...F(k),
              ...j(k),
              [n.dayClass ? n.dayClass(k.value) : '']: !0,
              [n.calendarCellClassName]: !!n.calendarCellClassName,
            },
    };
  },
  Fa = (e) => {
    const { defaultedFilters: n, defaultedHighlight: a } = vt(e),
      t = () => {
        if (e.timezone) return e.timezone;
        if (e.utc) return 'UTC';
      },
      o = (C) => {
        const H = St(i(ne(C))).toISOString(),
          [F] = H.split('T');
        return F;
      },
      i = (C) => (e.utc === 'preserve' ? ku(C, t()) : zt(C, t())),
      r = (C) => {
        var H;
        const F = e.maxDate ? kt(C, i(ne(e.maxDate))) : !1,
          Q = e.minDate ? bt(C, i(ne(e.minDate))) : !1,
          N = g(
            i(C),
            (H = e.arrMapValues) != null && H.disabledDates
              ? e.arrMapValues.disabledDates
              : e.disabledDates
          ),
          I = n.value.months.map((p) => +p).includes(Ue(C)),
          U = e.disabledWeekDays.length
            ? e.disabledWeekDays.some((p) => +p === p0(C))
            : !1,
          V = v(C),
          j = Ne(C),
          k = j < +e.yearRange[0] || j > +e.yearRange[1];
        return !(F || Q || N || I || k || U || V);
      },
      s = (C, H) => bt(...Sa(e.minDate, C, H)) || We(...Sa(e.minDate, C, H)),
      l = (C, H) => kt(...Sa(e.maxDate, C, H)) || We(...Sa(e.maxDate, C, H)),
      m = (C, H, F) => {
        let Q = !1;
        return (
          e.maxDate && F && l(C, H) && (Q = !0),
          e.minDate && !F && s(C, H) && (Q = !0),
          Q
        );
      },
      g = (C, H) =>
        C
          ? H instanceof Map
            ? !!H.get(o(C))
            : Array.isArray(H)
            ? H.some((F) => We(i(ne(F)), C))
            : H
            ? H(ne(JSON.parse(JSON.stringify(C))))
            : !1
          : !0,
      d = (C, H, F, Q) => {
        let N = !1;
        return (
          Q
            ? e.minDate && e.maxDate
              ? (N = m(C, H, F))
              : ((e.minDate && s(C, H)) || (e.maxDate && l(C, H))) && (N = !0)
            : (N = !0),
          N
        );
      },
      v = (C) => {
        var H, F, Q, N, I;
        return Array.isArray(e.allowedDates) &&
          !((H = e.allowedDates) != null && H.length)
          ? !0
          : (F = e.arrMapValues) != null && F.allowedDates
          ? !g(C, (Q = e.arrMapValues) == null ? void 0 : Q.allowedDates)
          : (N = e.allowedDates) != null && N.length
          ? !(
              (I = e.allowedDates) != null && I.some((U) => We(St(U), i(St(C))))
            )
          : !1;
      },
      f = (C) => !r(C),
      y = (C) =>
        e.noDisabledRange
          ? !zl({ start: C[0], end: C[1] }).some((H) => f(H))
          : !0,
      S = (C, H, F = 0) => {
        if (Array.isArray(H) && H[F]) {
          const Q = g_(C, H[F]),
            N = Su(H[F], C),
            I = N.length === 1 ? 0 : N.filter((V) => f(V)).length,
            U = Math.abs(Q) - I;
          if (e.minRange && e.maxRange)
            return U >= +e.minRange && U <= +e.maxRange;
          if (e.minRange) return U >= +e.minRange;
          if (e.maxRange) return U <= +e.maxRange;
        }
        return !0;
      },
      T = (C) => new Map(C.map((H) => [o(H), !0])),
      w = (C) => Array.isArray(C) && C.length > 0,
      b = () => {
        const C = {
          disabledDates: null,
          allowedDates: null,
          highlightedDates: null,
        };
        return (
          w(e.allowedDates) && (C.allowedDates = T(e.allowedDates)),
          typeof a.value != 'function' &&
            w(a.value.dates) &&
            (C.highlightedDates = T(a.value.dates)),
          w(e.disabledDates) && (C.disabledDates = T(e.disabledDates)),
          C
        );
      },
      L = () =>
        !e.enableTimePicker ||
        e.monthPicker ||
        e.yearPicker ||
        e.ignoreTimeValidation,
      D = (C) =>
        Array.isArray(C)
          ? [C[0] ? tr(C[0]) : null, C[1] ? tr(C[1]) : null]
          : tr(C),
      P = (C, H, F) =>
        C.find((Q) =>
          +Q.hours === jt(H) && Q.minutes === '*'
            ? !0
            : +Q.minutes === ia(H) && +Q.hours === jt(H)
        ) && F,
      x = (C, H, F) => {
        const [Q, N] = C,
          [I, U] = H;
        return !P(Q, I, F) && !P(N, U, F) && F;
      },
      B = (C, H) => {
        const F = Array.isArray(H) ? H : [H];
        return Array.isArray(e.disabledTimes)
          ? Array.isArray(e.disabledTimes[0])
            ? x(e.disabledTimes, F, C)
            : !F.some((Q) => P(e.disabledTimes, Q, C))
          : C;
      },
      K = (C, H) => {
        const F = Array.isArray(H)
            ? [Ra(H[0]), H[1] ? Ra(H[1]) : void 0]
            : Ra(H),
          Q = !e.disabledTimes(F);
        return C && Q;
      },
      W = (C, H) =>
        e.disabledTimes
          ? Array.isArray(e.disabledTimes)
            ? B(H, C)
            : K(H, C)
          : H;
    return {
      isDisabled: f,
      validateDate: r,
      validateMonthYearInRange: d,
      isDateRangeAllowed: y,
      checkMinMaxRange: S,
      matchDate: g,
      mapDatesArrToMap: b,
      isValidTime: (C) => {
        let H = !0;
        if (!C || L()) return !0;
        const F = !e.minDate && !e.maxDate ? D(C) : C;
        return (
          (e.maxTime || e.maxDate) &&
            (H = Qs(e.maxTime, e.maxDate, 'max', ft(F), H)),
          (e.minTime || e.minDate) &&
            (H = Qs(e.minTime, e.minDate, 'min', ft(F), H)),
          W(C, H)
        );
      },
    };
  },
  To = () => {
    const e = u(() => (t, o) => t?.includes(o)),
      n = u(() => (t, o) => t.count ? (t.solo ? !0 : o === 0) : !0),
      a = u(() => (t, o) => t.count ? (t.solo ? !0 : o === t.count - 1) : !0);
    return { hideNavigationButtons: e, showLeftIcon: n, showRightIcon: a };
  },
  W1 = (e, n, a) => {
    const t = M(0),
      o = va({
        [Ha.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
        [Ha.calendar]: !1,
        [Ha.header]: !1,
      }),
      i = u(() => e.monthPicker),
      r = (d) => {
        var v;
        if ((v = e.flow) != null && v.length) {
          if (!d && i.value) return g();
          (o[d] = !0), Object.keys(o).filter((f) => !o[f]).length || g();
        }
      },
      s = () => {
        var d;
        (d = e.flow) != null &&
          d.length &&
          t.value !== -1 &&
          ((t.value += 1), n('flow-step', t.value), g());
      },
      l = () => {
        t.value = -1;
      },
      m = (d, v, ...f) => {
        e.flow[t.value] === d && a.value && a.value[v](...f);
      },
      g = () => {
        m(ea.month, 'toggleMonthPicker', !0),
          m(ea.year, 'toggleYearPicker', !0),
          m(ea.calendar, 'toggleTimePicker', !1, !0),
          m(ea.time, 'toggleTimePicker', !0, !0);
        const d = e.flow[t.value];
        (d === ea.hours || d === ea.minutes || d === ea.seconds) &&
          m(d, 'toggleTimePicker', !0, !0, d);
      };
    return { childMount: r, updateFlowStep: s, resetFlow: l, flowStep: t };
  },
  Co = {
    multiCalendars: {
      type: [Boolean, Number, String, Object],
      default: void 0,
    },
    modelValue: { type: [String, Date, Array, Object, Number], default: null },
    modelType: { type: String, default: null },
    position: { type: String, default: 'center' },
    dark: { type: Boolean, default: !1 },
    format: { type: [String, Function], default: () => null },
    autoPosition: { type: Boolean, default: !0 },
    altPosition: { type: Function, default: null },
    transitions: { type: [Boolean, Object], default: !0 },
    formatLocale: { type: Object, default: null },
    utc: { type: [Boolean, String], default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    offset: { type: [Number, String], default: 10 },
    hideNavigation: { type: Array, default: () => [] },
    timezone: { type: String, default: null },
    emitTimezone: { type: String, default: null },
    vertical: { type: Boolean, default: !1 },
    disableMonthYearSelect: { type: Boolean, default: !1 },
    disableYearSelect: { type: Boolean, default: !1 },
    menuClassName: { type: String, default: null },
    dayClass: { type: Function, default: null },
    yearRange: { type: Array, default: () => [1900, 2100] },
    calendarCellClassName: { type: String, default: null },
    enableTimePicker: { type: Boolean, default: !0 },
    autoApply: { type: Boolean, default: !1 },
    disabledDates: { type: [Array, Function], default: () => [] },
    monthNameFormat: { type: String, default: 'short' },
    startDate: { type: [Date, String], default: null },
    startTime: { type: [Object, Array], default: null },
    hideOffsetDates: { type: Boolean, default: !1 },
    autoRange: { type: [Number, String], default: null },
    noToday: { type: Boolean, default: !1 },
    disabledWeekDays: { type: Array, default: () => [] },
    allowedDates: { type: Array, default: null },
    nowButtonLabel: { type: String, default: 'Now' },
    markers: { type: Array, default: () => [] },
    escClose: { type: Boolean, default: !0 },
    spaceConfirm: { type: Boolean, default: !0 },
    monthChangeOnArrows: { type: Boolean, default: !0 },
    presetDates: { type: Array, default: () => [] },
    flow: { type: Array, default: () => [] },
    partialFlow: { type: Boolean, default: !1 },
    preventMinMaxNavigation: { type: Boolean, default: !1 },
    minRange: { type: [Number, String], default: null },
    maxRange: { type: [Number, String], default: null },
    multiDatesLimit: { type: [Number, String], default: null },
    reverseYears: { type: Boolean, default: !1 },
    weekPicker: { type: Boolean, default: !1 },
    filters: { type: Object, default: () => ({}) },
    arrowNavigation: { type: Boolean, default: !1 },
    disableTimeRangeValidation: { type: Boolean, default: !1 },
    highlight: { type: [Array, Function, Object], default: null },
    highlightWeekDays: { type: Array, default: null },
    highlightDisabledDays: { type: Boolean, default: !1 },
    teleport: { type: [String, Boolean, Object], default: null },
    teleportCenter: { type: Boolean, default: !1 },
    locale: { type: String, default: 'en-Us' },
    weekNumName: { type: String, default: 'W' },
    weekStart: { type: [Number, String], default: 1 },
    weekNumbers: { type: [String, Function, Object], default: null },
    calendarClassName: { type: String, default: null },
    monthChangeOnScroll: { type: [Boolean, String], default: !0 },
    dayNames: { type: [Function, Array], default: null },
    monthPicker: { type: Boolean, default: !1 },
    customProps: { type: Object, default: null },
    yearPicker: { type: Boolean, default: !1 },
    modelAuto: { type: Boolean, default: !1 },
    selectText: { type: String, default: 'Select' },
    cancelText: { type: String, default: 'Cancel' },
    previewFormat: { type: [String, Function], default: () => '' },
    multiDates: { type: Boolean, default: !1 },
    partialRange: { type: Boolean, default: !0 },
    ignoreTimeValidation: { type: Boolean, default: !1 },
    minDate: { type: [Date, String], default: null },
    maxDate: { type: [Date, String], default: null },
    minTime: { type: Object, default: null },
    maxTime: { type: Object, default: null },
    name: { type: String, default: null },
    placeholder: { type: String, default: '' },
    hideInputIcon: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !0 },
    state: { type: Boolean, default: null },
    required: { type: Boolean, default: !1 },
    autocomplete: { type: String, default: 'off' },
    inputClassName: { type: String, default: null },
    fixedStart: { type: Boolean, default: !1 },
    fixedEnd: { type: Boolean, default: !1 },
    timePicker: { type: Boolean, default: !1 },
    enableSeconds: { type: Boolean, default: !1 },
    is24: { type: Boolean, default: !0 },
    noHoursOverlay: { type: Boolean, default: !1 },
    noMinutesOverlay: { type: Boolean, default: !1 },
    noSecondsOverlay: { type: Boolean, default: !1 },
    hoursGridIncrement: { type: [String, Number], default: 1 },
    minutesGridIncrement: { type: [String, Number], default: 5 },
    secondsGridIncrement: { type: [String, Number], default: 5 },
    hoursIncrement: { type: [Number, String], default: 1 },
    minutesIncrement: { type: [Number, String], default: 1 },
    secondsIncrement: { type: [Number, String], default: 1 },
    range: { type: Boolean, default: !1 },
    uid: { type: String, default: null },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    inline: { type: [Boolean, Object], default: !1 },
    textInput: { type: [Boolean, Object], default: !1 },
    noDisabledRange: { type: Boolean, default: !1 },
    sixWeeks: { type: [Boolean, String], default: !1 },
    actionRow: { type: Object, default: () => ({}) },
    focusStartDate: { type: Boolean, default: !1 },
    disabledTimes: { type: [Function, Array], default: void 0 },
    showLastInRange: { type: Boolean, default: !0 },
    timePickerInline: { type: Boolean, default: !1 },
    calendar: { type: Function, default: null },
    config: { type: Object, default: void 0 },
    quarterPicker: { type: Boolean, default: !1 },
    yearFirst: { type: Boolean, default: !1 },
  },
  Zt = {
    ...Co,
    shadow: { type: Boolean, default: !1 },
    flowStep: { type: Number, default: 0 },
    internalModelValue: { type: [Date, Array], default: null },
    arrMapValues: { type: Object, default: () => ({}) },
    noOverlayFocus: { type: Boolean, default: !1 },
  },
  q1 = { key: 1, class: 'dp__input_wrap' },
  G1 = [
    'id',
    'name',
    'inputmode',
    'placeholder',
    'disabled',
    'readonly',
    'required',
    'value',
    'autocomplete',
    'aria-label',
    'aria-disabled',
    'aria-invalid',
  ],
  j1 = { key: 2, class: 'dp__clear_icon' },
  z1 = re({
    compatConfig: { MODE: 3 },
    __name: 'DatepickerInput',
    props: {
      isMenuOpen: { type: Boolean, default: !1 },
      inputValue: { type: String, default: '' },
      ...Co,
    },
    emits: [
      'clear',
      'open',
      'update:input-value',
      'set-input-date',
      'close',
      'select-date',
      'set-empty-date',
      'toggle',
      'focus-prev',
      'focus',
      'blur',
      'real-blur',
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        {
          defaultedTextInput: i,
          defaultedAriaLabels: r,
          defaultedInline: s,
          defaultedConfig: l,
          getDefaultPattern: m,
          getDefaultStartTime: g,
        } = vt(o),
        { checkMinMaxRange: d } = Fa(o),
        v = M(),
        f = M(null),
        y = M(!1),
        S = M(!1),
        T = u(() => ({
          dp__pointer: !o.disabled && !o.readonly && !i.value.enabled,
          dp__disabled: o.disabled,
          dp__input_readonly: !i.value.enabled,
          dp__input: !0,
          dp__input_icon_pad: !o.hideInputIcon,
          dp__input_valid: !!o.state,
          dp__input_invalid: o.state === !1,
          dp__input_focus: y.value || o.isMenuOpen,
          dp__input_reg: !i.value.enabled,
          [o.inputClassName]: !!o.inputClassName,
        })),
        w = () => {
          t('set-input-date', null),
            o.autoApply && (t('set-empty-date'), (v.value = null));
        },
        b = (N) => {
          const I = g();
          return b1(
            N,
            i.value.format ?? m(),
            I ?? Tu({}, o.enableSeconds),
            o.inputValue,
            S.value
          );
        },
        L = (N) => {
          const { rangeSeparator: I } = i.value,
            [U, V] = N.split(`${I}`);
          if (U) {
            const j = b(U.trim()),
              k = V ? b(V.trim()) : null,
              p = j && k ? [j, k] : [j];
            d(k, p, 0) && (v.value = j ? p : null);
          }
        },
        D = () => {
          S.value = !0;
        },
        P = (N) => {
          if (o.range) L(N);
          else if (o.multiDates) {
            const I = N.split(';');
            v.value = I.map((U) => b(U.trim())).filter((U) => U);
          } else v.value = b(N);
        },
        x = (N) => {
          var I;
          const U =
            typeof N == 'string'
              ? N
              : (I = N.target) == null
              ? void 0
              : I.value;
          U !== ''
            ? (i.value.openMenu && !o.isMenuOpen && t('open'),
              P(U),
              t('set-input-date', v.value))
            : w(),
            (S.value = !1),
            t('update:input-value', U);
        },
        B = (N) => {
          i.value.enabled
            ? (P(N.target.value),
              i.value.enterSubmit && xr(v.value) && o.inputValue !== ''
                ? (t('set-input-date', v.value, !0), (v.value = null))
                : i.value.enterSubmit &&
                  o.inputValue === '' &&
                  ((v.value = null), t('clear')))
            : C(N);
        },
        K = (N) => {
          i.value.enabled && i.value.tabSubmit && P(N.target.value),
            i.value.tabSubmit && xr(v.value) && o.inputValue !== ''
              ? (t('set-input-date', v.value, !0, !0), (v.value = null))
              : i.value.tabSubmit &&
                o.inputValue === '' &&
                ((v.value = null), t('clear', !0));
        },
        W = () => {
          var N;
          (y.value = !0),
            t('focus'),
            i.value.enabled &&
              i.value.selectOnFocus &&
              ((N = f.value) == null || N.select());
        },
        C = (N) => {
          N.preventDefault(),
            Pa(N, l.value, !0),
            i.value.enabled &&
            i.value.openMenu &&
            !s.value.input &&
            !o.isMenuOpen
              ? t('open')
              : i.value.enabled || t('toggle');
        },
        H = () => {
          t('real-blur'),
            (y.value = !1),
            (!o.isMenuOpen || (s.value.enabled && s.value.input)) && t('blur'),
            o.autoApply &&
              i.value.enabled &&
              v.value &&
              !o.isMenuOpen &&
              (t('set-input-date', v.value),
              t('select-date'),
              (v.value = null));
        },
        F = (N) => {
          Pa(N, l.value, !0), t('clear');
        },
        Q = (N) => {
          if (!i.value.enabled) {
            if (N.code === 'Tab') return;
            N.preventDefault();
          }
        };
      return (
        n({
          focusInput: () => {
            var N;
            (N = f.value) == null || N.focus({ preventScroll: !0 });
          },
          setParsedDate: (N) => {
            v.value = N;
          },
        }),
        (N, I) => {
          var U;
          return (
            c(),
            h('div', { onClick: C }, [
              N.$slots.trigger && !N.$slots['dp-input'] && !A(s).enabled
                ? te(N.$slots, 'trigger', { key: 0 })
                : O('', !0),
              !N.$slots.trigger && (!A(s).enabled || A(s).input)
                ? (c(),
                  h('div', q1, [
                    N.$slots['dp-input'] && !N.$slots.trigger && !A(s).enabled
                      ? te(N.$slots, 'dp-input', {
                          key: 0,
                          value: e.inputValue,
                          isMenuOpen: e.isMenuOpen,
                          onInput: x,
                          onEnter: B,
                          onTab: K,
                          onClear: F,
                          onBlur: H,
                          onKeypress: Q,
                          onPaste: D,
                          openMenu: () => N.$emit('open'),
                          closeMenu: () => N.$emit('close'),
                          toggleMenu: () => N.$emit('toggle'),
                        })
                      : O('', !0),
                    N.$slots['dp-input']
                      ? O('', !0)
                      : (c(),
                        h(
                          'input',
                          {
                            key: 1,
                            id: N.uid ? `dp-input-${N.uid}` : void 0,
                            ref_key: 'inputRef',
                            ref: f,
                            name: N.name,
                            class: Z(T.value),
                            inputmode: A(i).enabled ? 'text' : 'none',
                            placeholder: N.placeholder,
                            disabled: N.disabled,
                            readonly: N.readonly,
                            required: N.required,
                            value: e.inputValue,
                            autocomplete: N.autocomplete,
                            'aria-label': (U = A(r)) == null ? void 0 : U.input,
                            'aria-disabled': N.disabled || void 0,
                            'aria-invalid': N.state === !1 ? !0 : void 0,
                            onInput: x,
                            onKeydown: [Le(B, ['enter']), Le(K, ['tab']), Q],
                            onBlur: H,
                            onFocus: W,
                            onKeypress: Q,
                            onPaste: D,
                          },
                          null,
                          42,
                          G1
                        )),
                    E('div', { onClick: I[2] || (I[2] = (V) => t('toggle')) }, [
                      N.$slots['input-icon'] && !N.hideInputIcon
                        ? (c(),
                          h(
                            'span',
                            {
                              key: 0,
                              class: 'dp__input_icon',
                              onClick: I[0] || (I[0] = (V) => t('toggle')),
                            },
                            [te(N.$slots, 'input-icon')]
                          ))
                        : O('', !0),
                      !N.$slots['input-icon'] &&
                      !N.hideInputIcon &&
                      !N.$slots['dp-input']
                        ? (c(),
                          q(A(pn), {
                            key: 1,
                            class: 'dp__input_icon dp__input_icons',
                            onClick: I[1] || (I[1] = (V) => t('toggle')),
                          }))
                        : O('', !0),
                    ]),
                    N.$slots['clear-icon'] &&
                    e.inputValue &&
                    N.clearable &&
                    !N.disabled &&
                    !N.readonly
                      ? (c(),
                        h('span', j1, [
                          te(N.$slots, 'clear-icon', { clear: F }),
                        ]))
                      : O('', !0),
                    N.clearable &&
                    !N.$slots['clear-icon'] &&
                    e.inputValue &&
                    !N.disabled &&
                    !N.readonly
                      ? (c(),
                        q(A(vu), {
                          key: 3,
                          class: 'dp__clear_icon dp__input_icons',
                          onClick:
                            I[3] || (I[3] = De((V) => F(V), ['prevent'])),
                        }))
                      : O('', !0),
                  ]))
                : O('', !0),
            ])
          );
        }
      );
    },
  }),
  K1 = ['title'],
  Q1 = { class: 'dp__action_buttons' },
  Z1 = ['disabled'],
  X1 = re({
    compatConfig: { MODE: 3 },
    __name: 'ActionRow',
    props: {
      menuMount: { type: Boolean, default: !1 },
      calendarWidth: { type: Number, default: 0 },
      ...Zt,
    },
    emits: ['close-picker', 'select-date', 'select-now', 'invalid-select'],
    setup(e, { emit: n }) {
      const a = n,
        t = e,
        {
          defaultedActionRow: o,
          defaultedPreviewFormat: i,
          defaultedMultiCalendars: r,
          defaultedTextInput: s,
          defaultedInline: l,
          getDefaultPattern: m,
        } = vt(t),
        { isValidTime: g } = Fa(t),
        { buildMatrix: d } = Ea(),
        v = M(null),
        f = M(null);
      Oe(() => {
        t.arrowNavigation && d([ht(v), ht(f)], 'actionRow');
      });
      const y = u(() =>
          t.range && !t.partialRange && t.internalModelValue
            ? t.internalModelValue.length === 2
            : !0
        ),
        S = u(() => !T.value || !w.value || !y.value),
        T = u(() =>
          !t.enableTimePicker || t.ignoreTimeValidation
            ? !0
            : g(t.internalModelValue)
        ),
        w = u(() =>
          t.monthPicker
            ? t.range && Array.isArray(t.internalModelValue)
              ? !t.internalModelValue.filter((C) => !K(C)).length
              : K(t.internalModelValue)
            : !0
        ),
        b = () => {
          const C = i.value;
          return t.timePicker || t.monthPicker, C(ft(t.internalModelValue));
        },
        L = () => {
          const C = t.internalModelValue;
          return r.value.count > 0
            ? `${D(C[0])} - ${D(C[1])}`
            : [D(C[0]), D(C[1])];
        },
        D = (C) =>
          Pu(
            C,
            i.value,
            t.formatLocale,
            s.value.rangeSeparator,
            t.modelAuto,
            m()
          ),
        P = u(() =>
          !t.internalModelValue || !t.menuMount
            ? ''
            : typeof i.value == 'string'
            ? Array.isArray(t.internalModelValue)
              ? t.internalModelValue.length === 2 && t.internalModelValue[1]
                ? L()
                : t.multiDates
                ? t.internalModelValue.map((C) => `${D(C)}`)
                : t.modelAuto
                ? `${D(t.internalModelValue[0])}`
                : `${D(t.internalModelValue[0])} -`
              : D(t.internalModelValue)
            : b()
        ),
        x = () => (t.multiDates ? '; ' : ' - '),
        B = u(() => (Array.isArray(P.value) ? P.value.join(x()) : P.value)),
        K = (C) => {
          if (!t.monthPicker) return !0;
          let H = !0;
          const F = ne(qt(C));
          if (t.minDate && t.maxDate) {
            const Q = ne(qt(t.minDate)),
              N = ne(qt(t.maxDate));
            return (kt(F, Q) && bt(F, N)) || We(F, Q) || We(F, N);
          }
          if (t.minDate) {
            const Q = ne(qt(t.minDate));
            H = kt(F, Q) || We(F, Q);
          }
          if (t.maxDate) {
            const Q = ne(qt(t.maxDate));
            H = bt(F, Q) || We(F, Q);
          }
          return H;
        },
        W = () => {
          T.value && w.value && y.value
            ? a('select-date')
            : a('invalid-select');
        };
      return (C, H) => (
        c(),
        h(
          'div',
          {
            class: 'dp__action_row',
            style: Ae(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {}),
          },
          [
            C.$slots['action-row']
              ? te(
                  C.$slots,
                  'action-row',
                  nt(
                    Ge(
                      { key: 0 },
                      {
                        internalModelValue: C.internalModelValue,
                        disabled: S.value,
                        selectDate: () => C.$emit('select-date'),
                        closePicker: () => C.$emit('close-picker'),
                      }
                    )
                  )
                )
              : (c(),
                h(
                  ge,
                  { key: 1 },
                  [
                    A(o).showPreview
                      ? (c(),
                        h(
                          'div',
                          {
                            key: 0,
                            class: 'dp__selection_preview',
                            title: B.value,
                          },
                          [
                            C.$slots['action-preview']
                              ? te(C.$slots, 'action-preview', {
                                  key: 0,
                                  value: C.internalModelValue,
                                })
                              : O('', !0),
                            C.$slots['action-preview']
                              ? O('', !0)
                              : (c(),
                                h(ge, { key: 1 }, [He(X(B.value), 1)], 64)),
                          ],
                          8,
                          K1
                        ))
                      : O('', !0),
                    E('div', Q1, [
                      C.$slots['action-buttons']
                        ? te(C.$slots, 'action-buttons', {
                            key: 0,
                            value: C.internalModelValue,
                          })
                        : O('', !0),
                      C.$slots['action-buttons']
                        ? O('', !0)
                        : (c(),
                          h(
                            ge,
                            { key: 1 },
                            [
                              !A(l).enabled && A(o).showCancel
                                ? (c(),
                                  h(
                                    'button',
                                    {
                                      key: 0,
                                      ref_key: 'cancelButtonRef',
                                      ref: v,
                                      type: 'button',
                                      class:
                                        'dp__action_button dp__action_cancel',
                                      onClick:
                                        H[0] ||
                                        (H[0] = (F) => C.$emit('close-picker')),
                                      onKeydown: [
                                        H[1] ||
                                          (H[1] = Le(
                                            (F) => C.$emit('close-picker'),
                                            ['enter']
                                          )),
                                        H[2] ||
                                          (H[2] = Le(
                                            (F) => C.$emit('close-picker'),
                                            ['space']
                                          )),
                                      ],
                                    },
                                    X(C.cancelText),
                                    545
                                  ))
                                : O('', !0),
                              A(o).showNow
                                ? (c(),
                                  h(
                                    'button',
                                    {
                                      key: 1,
                                      ref_key: 'cancelButtonRef',
                                      ref: v,
                                      type: 'button',
                                      class:
                                        'dp__action_button dp__action_cancel',
                                      onClick:
                                        H[3] ||
                                        (H[3] = (F) => C.$emit('select-now')),
                                      onKeydown: [
                                        H[4] ||
                                          (H[4] = Le(
                                            (F) => C.$emit('select-now'),
                                            ['enter']
                                          )),
                                        H[5] ||
                                          (H[5] = Le(
                                            (F) => C.$emit('select-now'),
                                            ['space']
                                          )),
                                      ],
                                    },
                                    X(C.nowButtonLabel),
                                    545
                                  ))
                                : O('', !0),
                              A(o).showSelect
                                ? (c(),
                                  h(
                                    'button',
                                    {
                                      key: 2,
                                      ref_key: 'selectButtonRef',
                                      ref: f,
                                      type: 'button',
                                      class:
                                        'dp__action_button dp__action_select',
                                      disabled: S.value,
                                      onKeydown: [
                                        Le(W, ['enter']),
                                        Le(W, ['space']),
                                      ],
                                      onClick: W,
                                    },
                                    X(C.selectText),
                                    41,
                                    Z1
                                  ))
                                : O('', !0),
                            ],
                            64
                          )),
                    ]),
                  ],
                  64
                )),
          ],
          4
        )
      );
    },
  }),
  J1 = ['onKeydown'],
  ek = { class: 'dp__selection_grid_header' },
  tk = [
    'aria-selected',
    'aria-disabled',
    'onClick',
    'onKeydown',
    'onMouseover',
  ],
  ak = ['aria-label'],
  Qn = re({
    __name: 'SelectionOverlay',
    props: {
      items: {},
      type: {},
      isLast: { type: Boolean },
      arrowNavigation: { type: Boolean },
      skipButtonRef: { type: Boolean },
      headerRefs: {},
      hideNavigation: {},
      escClose: { type: Boolean },
      useRelative: { type: Boolean },
      height: {},
      textInput: { type: [Boolean, Object] },
      config: {},
      noOverlayFocus: { type: Boolean },
      focusValue: {},
    },
    emits: ['selected', 'toggle', 'reset-flow', 'hover-value'],
    setup(e, { expose: n, emit: a }) {
      const {
          setSelectionGrid: t,
          buildMultiLevelMatrix: o,
          setMonthPicker: i,
        } = Ea(),
        r = a,
        s = e,
        {
          defaultedAriaLabels: l,
          defaultedTextInput: m,
          defaultedConfig: g,
        } = vt(s),
        { hideNavigationButtons: d } = To(),
        v = M(!1),
        f = M(null),
        y = M(null),
        S = M([]),
        T = M(),
        w = M(null),
        b = M(0),
        L = M(null);
      Wu(() => {
        f.value = null;
      }),
        Oe(() => {
          Et().then(() => H()), s.noOverlayFocus || P(), D(!0);
        }),
        qn(() => D(!1));
      const D = (k) => {
          var p;
          s.arrowNavigation &&
            ((p = s.headerRefs) != null && p.length ? i(k) : t(k));
        },
        P = () => {
          var k;
          const p = ht(y);
          p &&
            (m.value.enabled ||
              (f.value
                ? (k = f.value) == null || k.focus({ preventScroll: !0 })
                : p.focus({ preventScroll: !0 })),
            (v.value = p.clientHeight < p.scrollHeight));
        },
        x = u(() => ({
          dp__overlay: !0,
          'dp--overlay-absolute': !s.useRelative,
          'dp--overlay-relative': s.useRelative,
        })),
        B = u(() =>
          s.useRelative ? { height: `${s.height}px`, width: '260px' } : void 0
        ),
        K = u(() => ({ dp__overlay_col: !0 })),
        W = u(() => ({
          dp__btn: !0,
          dp__button: !0,
          dp__overlay_action: !0,
          dp__over_action_scroll: v.value,
          dp__button_bottom: s.isLast,
        })),
        C = u(() => {
          var k, p;
          return {
            dp__overlay_container: !0,
            dp__container_flex:
              ((k = s.items) == null ? void 0 : k.length) <= 6,
            dp__container_block:
              ((p = s.items) == null ? void 0 : p.length) > 6,
          };
        });
      Re(
        () => s.items,
        () => H(),
        { deep: !0 }
      );
      const H = () => {
          Et().then(() => {
            const k = ht(f),
              p = ht(y),
              Y = ht(w),
              G = ht(L),
              ee = Y ? Y.getBoundingClientRect().height : 0;
            p &&
              (p.getBoundingClientRect().height
                ? (b.value = p.getBoundingClientRect().height - ee)
                : (b.value = g.value.modeHeight - ee)),
              k &&
                G &&
                (G.scrollTop =
                  k.offsetTop -
                  G.offsetTop -
                  (b.value / 2 - k.getBoundingClientRect().height) -
                  ee);
          });
        },
        F = (k) => {
          k.disabled || r('selected', k.value);
        },
        Q = () => {
          r('toggle'), r('reset-flow');
        },
        N = () => {
          s.escClose && Q();
        },
        I = (k, p, Y, G) => {
          k &&
            ((p.active || p.value === s.focusValue) && (f.value = k),
            s.arrowNavigation &&
              (Array.isArray(S.value[Y])
                ? (S.value[Y][G] = k)
                : (S.value[Y] = [k]),
              U()));
        },
        U = () => {
          var k, p;
          const Y =
            (k = s.headerRefs) != null && k.length
              ? [s.headerRefs].concat(S.value)
              : S.value.concat([s.skipButtonRef ? [] : [w.value]]);
          o(
            ft(Y),
            (p = s.headerRefs) != null && p.length
              ? 'monthPicker'
              : 'selectionGrid'
          );
        },
        V = (k) => {
          s.arrowNavigation || Pa(k, g.value, !0);
        },
        j = (k) => {
          (T.value = k), r('hover-value', k);
        };
      return (
        n({ focusGrid: P }),
        (k, p) => {
          var Y;
          return (
            c(),
            h(
              'div',
              {
                ref_key: 'gridWrapRef',
                ref: y,
                class: Z(x.value),
                style: Ae(B.value),
                role: 'dialog',
                tabindex: '0',
                onKeydown: [
                  Le(De(N, ['prevent']), ['esc']),
                  p[0] ||
                    (p[0] = Le(
                      De((G) => V(G), ['prevent']),
                      ['left']
                    )),
                  p[1] ||
                    (p[1] = Le(
                      De((G) => V(G), ['prevent']),
                      ['up']
                    )),
                  p[2] ||
                    (p[2] = Le(
                      De((G) => V(G), ['prevent']),
                      ['down']
                    )),
                  p[3] ||
                    (p[3] = Le(
                      De((G) => V(G), ['prevent']),
                      ['right']
                    )),
                ],
              },
              [
                E(
                  'div',
                  {
                    ref_key: 'containerRef',
                    ref: L,
                    class: Z(C.value),
                    role: 'grid',
                    style: Ae({ height: `${b.value}px` }),
                  },
                  [
                    E('div', ek, [te(k.$slots, 'header')]),
                    k.$slots.overlay
                      ? te(k.$slots, 'overlay', { key: 0 })
                      : (c(!0),
                        h(
                          ge,
                          { key: 1 },
                          ke(
                            k.items,
                            (G, ee) => (
                              c(),
                              h(
                                'div',
                                {
                                  key: ee,
                                  class: Z([
                                    'dp__overlay_row',
                                    { dp__flex_row: k.items.length >= 3 },
                                  ]),
                                  role: 'row',
                                },
                                [
                                  (c(!0),
                                  h(
                                    ge,
                                    null,
                                    ke(
                                      G,
                                      (J, R) => (
                                        c(),
                                        h(
                                          'div',
                                          {
                                            key: J.value,
                                            ref_for: !0,
                                            ref: (_) => I(_, J, ee, R),
                                            role: 'gridcell',
                                            class: Z(K.value),
                                            'aria-selected': J.active,
                                            'aria-disabled':
                                              J.disabled || void 0,
                                            tabindex: '0',
                                            onClick: (_) => F(J),
                                            onKeydown: [
                                              Le(
                                                De((_) => F(J), ['prevent']),
                                                ['enter']
                                              ),
                                              Le(
                                                De((_) => F(J), ['prevent']),
                                                ['space']
                                              ),
                                            ],
                                            onMouseover: (_) => j(J.value),
                                          },
                                          [
                                            E(
                                              'div',
                                              { class: Z(J.className) },
                                              [
                                                k.$slots.item
                                                  ? te(k.$slots, 'item', {
                                                      key: 0,
                                                      item: J,
                                                    })
                                                  : O('', !0),
                                                k.$slots.item
                                                  ? O('', !0)
                                                  : (c(),
                                                    h(
                                                      ge,
                                                      { key: 1 },
                                                      [He(X(J.text), 1)],
                                                      64
                                                    )),
                                              ],
                                              2
                                            ),
                                          ],
                                          42,
                                          tk
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ],
                                2
                              )
                            )
                          ),
                          128
                        )),
                  ],
                  6
                ),
                k.$slots['button-icon']
                  ? ue(
                      (c(),
                      h(
                        'button',
                        {
                          key: 0,
                          ref_key: 'toggleButton',
                          ref: w,
                          type: 'button',
                          'aria-label':
                            (Y = A(l)) == null ? void 0 : Y.toggleOverlay,
                          class: Z(W.value),
                          tabindex: '0',
                          onClick: Q,
                          onKeydown: [Le(Q, ['enter']), Le(Q, ['tab'])],
                        },
                        [te(k.$slots, 'button-icon')],
                        42,
                        ak
                      )),
                      [[Ht, !A(d)(k.hideNavigation, k.type)]]
                    )
                  : O('', !0),
              ],
              46,
              J1
            )
          );
        }
      );
    },
  }),
  Po = re({
    __name: 'InstanceWrap',
    props: { multiCalendars: {}, stretch: { type: Boolean } },
    setup(e) {
      const n = e,
        a = u(() =>
          n.multiCalendars > 0 ? [...Array(n.multiCalendars).keys()] : [0]
        ),
        t = u(() => ({ dp__instance_calendar: n.multiCalendars > 0 }));
      return (o, i) => (
        c(),
        h(
          'div',
          {
            class: Z({
              dp__menu_inner: !o.stretch,
              'dp--menu--inner-stretched': o.stretch,
              dp__flex_display: o.multiCalendars > 0,
            }),
          },
          [
            (c(!0),
            h(
              ge,
              null,
              ke(
                a.value,
                (r, s) => (
                  c(),
                  h(
                    'div',
                    { key: r, class: Z(t.value) },
                    [te(o.$slots, 'default', { instance: r, index: s })],
                    2
                  )
                )
              ),
              128
            )),
          ],
          2
        )
      );
    },
  }),
  nk = ['aria-label', 'aria-disabled'],
  Ln = re({
    compatConfig: { MODE: 3 },
    __name: 'ArrowBtn',
    props: { ariaLabel: {}, disabled: { type: Boolean } },
    emits: ['activate', 'set-ref'],
    setup(e, { emit: n }) {
      const a = n,
        t = M(null);
      return (
        Oe(() => a('set-ref', t)),
        (o, i) => (
          c(),
          h(
            'button',
            {
              ref_key: 'elRef',
              ref: t,
              type: 'button',
              class: 'dp__btn dp--arrow-btn-nav',
              tabindex: '0',
              'aria-label': o.ariaLabel,
              'aria-disabled': o.disabled || void 0,
              onClick: i[0] || (i[0] = (r) => o.$emit('activate')),
              onKeydown: [
                i[1] ||
                  (i[1] = Le(
                    De((r) => o.$emit('activate'), ['prevent']),
                    ['enter']
                  )),
                i[2] ||
                  (i[2] = Le(
                    De((r) => o.$emit('activate'), ['prevent']),
                    ['space']
                  )),
              ],
            },
            [
              E(
                'span',
                {
                  class: Z([
                    'dp__inner_nav',
                    { dp__inner_nav_disabled: o.disabled },
                  ]),
                },
                [te(o.$slots, 'default')],
                2
              ),
            ],
            40,
            nk
          )
        )
      );
    },
  }),
  ok = { class: 'dp--year-mode-picker' },
  rk = ['aria-label'],
  Du = re({
    __name: 'YearModePicker',
    props: {
      ...Zt,
      showYearPicker: { type: Boolean, default: !1 },
      items: { type: Array, default: () => [] },
      instance: { type: Number, default: 0 },
      year: { type: Number, default: 0 },
      isDisabled: { type: Function, default: () => !1 },
    },
    emits: ['toggle-year-picker', 'year-select', 'handle-year'],
    setup(e, { emit: n }) {
      const a = n,
        t = e,
        { showRightIcon: o, showLeftIcon: i } = To(),
        {
          defaultedConfig: r,
          defaultedMultiCalendars: s,
          defaultedAriaLabels: l,
          defaultedTransitions: m,
        } = vt(t),
        { showTransition: g, transitionName: d } = zn(m),
        v = (S = !1, T) => {
          a('toggle-year-picker', { flow: S, show: T });
        },
        f = (S) => {
          a('year-select', S);
        },
        y = (S = !1) => {
          a('handle-year', S);
        };
      return (S, T) => {
        var w, b, L;
        return (
          c(),
          h('div', ok, [
            A(i)(A(s), e.instance)
              ? (c(),
                q(
                  Ln,
                  {
                    key: 0,
                    ref: 'mpPrevIconRef',
                    'aria-label': (w = A(l)) == null ? void 0 : w.prevYear,
                    disabled: e.isDisabled(!1),
                    onActivate: T[0] || (T[0] = (D) => y(!1)),
                  },
                  {
                    default: he(() => [
                      S.$slots['arrow-left']
                        ? te(S.$slots, 'arrow-left', { key: 0 })
                        : O('', !0),
                      S.$slots['arrow-left']
                        ? O('', !0)
                        : (c(), q(A(ui), { key: 1 })),
                    ]),
                    _: 3,
                  },
                  8,
                  ['aria-label', 'disabled']
                ))
              : O('', !0),
            E(
              'button',
              {
                ref: 'mpYearButtonRef',
                class: 'dp__btn dp--year-select',
                type: 'button',
                'aria-label': (b = A(l)) == null ? void 0 : b.openYearsOverlay,
                onClick: T[1] || (T[1] = () => v(!1)),
                onKeydown: T[2] || (T[2] = Le(() => v(!1), ['enter'])),
              },
              [
                S.$slots.year
                  ? te(S.$slots, 'year', { key: 0, year: e.year })
                  : O('', !0),
                S.$slots.year
                  ? O('', !0)
                  : (c(), h(ge, { key: 1 }, [He(X(e.year), 1)], 64)),
              ],
              40,
              rk
            ),
            A(o)(A(s), e.instance)
              ? (c(),
                q(
                  Ln,
                  {
                    key: 1,
                    ref: 'mpNextIconRef',
                    'aria-label': (L = A(l)) == null ? void 0 : L.nextYear,
                    disabled: e.isDisabled(!0),
                    onActivate: T[3] || (T[3] = (D) => y(!0)),
                  },
                  {
                    default: he(() => [
                      S.$slots['arrow-right']
                        ? te(S.$slots, 'arrow-right', { key: 0 })
                        : O('', !0),
                      S.$slots['arrow-right']
                        ? O('', !0)
                        : (c(), q(A(ci), { key: 1 })),
                    ]),
                    _: 3,
                  },
                  8,
                  ['aria-label', 'disabled']
                ))
              : O('', !0),
            Me(
              Ot,
              { name: A(d)(e.showYearPicker), css: A(g) },
              {
                default: he(() => [
                  e.showYearPicker
                    ? (c(),
                      q(
                        Qn,
                        {
                          key: 0,
                          items: e.items,
                          'text-input': S.textInput,
                          'esc-close': S.escClose,
                          config: S.config,
                          'is-last': S.autoApply && !A(r).keepActionRow,
                          'hide-navigation': S.hideNavigation,
                          type: 'year',
                          onToggle: v,
                          onSelected: T[4] || (T[4] = (D) => f(D)),
                        },
                        It(
                          {
                            'button-icon': he(() => [
                              S.$slots['calendar-icon']
                                ? te(S.$slots, 'calendar-icon', { key: 0 })
                                : O('', !0),
                              S.$slots['calendar-icon']
                                ? O('', !0)
                                : (c(), q(A(pn), { key: 1 })),
                            ]),
                            _: 2,
                          },
                          [
                            S.$slots['year-overlay-value']
                              ? {
                                  name: 'item',
                                  fn: he(({ item: D }) => [
                                    te(S.$slots, 'year-overlay-value', {
                                      text: D.text,
                                      value: D.value,
                                    }),
                                  ]),
                                  key: '0',
                                }
                              : void 0,
                          ]
                        ),
                        1032,
                        [
                          'items',
                          'text-input',
                          'esc-close',
                          'config',
                          'is-last',
                          'hide-navigation',
                        ]
                      ))
                    : O('', !0),
                ]),
                _: 3,
              },
              8,
              ['name', 'css']
            ),
          ])
        );
      };
    },
  }),
  bi = (e, n, a) => {
    if (n.value && Array.isArray(n.value))
      if (n.value.some((t) => We(e, t))) {
        const t = n.value.filter((o) => !We(o, e));
        n.value = t.length ? t : null;
      } else ((a && +a > n.value.length) || !a) && n.value.push(e);
    else n.value = [e];
  },
  _i = (e, n, a) => {
    let t = e.value ? e.value.slice() : [];
    return (
      t.length === 2 && t[1] !== null && (t = []),
      t.length
        ? bt(n, t[0])
          ? (t.unshift(n), a('range-start', t[0]), a('range-start', t[1]))
          : ((t[1] = n), a('range-end', n))
        : ((t = [n]), a('range-start', n)),
      (e.value = t),
      t
    );
  },
  Io = (e, n, a, t) => {
    e[0] && e[1] && a && n('auto-apply'),
      e[0] && !e[1] && t && a && n('auto-apply');
  },
  Mu = (e) => {
    Array.isArray(e.value) && e.value.length <= 2 && e.range
      ? (e.modelValue.value = e.value.map((n) => zt(ne(n), e.timezone)))
      : Array.isArray(e.value) ||
        (e.modelValue.value = zt(ne(e.value), e.timezone));
  },
  Ou = ({
    multiCalendars: e,
    highlight: n,
    calendars: a,
    modelValue: t,
    props: o,
    year: i,
    month: r,
    emit: s,
  }) => {
    const l = u(() => fi(o.yearRange, o.reverseYears)),
      m = M([!1]),
      g = u(() => (D, P) => {
        const x = at(qt(new Date()), { month: r.value(D), year: i.value(D) });
        return Cu(x, o.maxDate, o.minDate, o.preventMinMaxNavigation, P);
      }),
      d = () => {
        for (let D = 0; D < e.value.count; D++)
          if (D === 0) a.value[D] = a.value[0];
          else {
            const P = at(ne(), a.value[D - 1]);
            a.value[D] = { month: Ue(P), year: Ne(ti(P, 1)) };
          }
      },
      v = (D) => {
        if (!D) return d();
        const P = at(ne(), a.value[D]);
        return (a.value[0].year = Ne(gu(P, e.value.count - 1))), d();
      },
      f = (D) => (o.focusStartDate ? D[0] : D[1] ? D[1] : D[0]),
      y = () => {
        if (t.value) {
          const D = Array.isArray(t.value) ? f(t.value) : t.value;
          a.value[0] = { month: Ue(D), year: Ne(D) };
        }
      };
    Oe(() => {
      y(), e.value.count && d();
    });
    const S = (D, P) => {
        (a.value[P].year = D), e.value.count && !e.value.solo && v(P);
      },
      T = u(
        () => (D) =>
          cn(l.value, (P) => {
            const x = i.value(D) === P.value,
              B = Wn(P.value, dn(o.minDate), dn(o.maxDate)),
              K = yi(n.value, P.value);
            return { active: x, disabled: B, highlighted: K };
          })
      ),
      w = (D, P) => {
        S(D, P), L(P);
      },
      b = (D, P = !1) => {
        if (!g.value(D, P)) {
          const x = P ? i.value(D) + 1 : i.value(D) - 1;
          S(x, D);
        }
      },
      L = (D, P = !1, x) => {
        P || s('reset-flow'),
          x !== void 0 ? (m.value[D] = x) : (m.value[D] = !m.value[D]),
          m.value || s('overlay-closed');
      };
    return {
      isDisabled: g,
      groupedYears: T,
      showYearPicker: m,
      selectYear: S,
      toggleYearPicker: L,
      handleYearSelect: w,
      handleYear: b,
    };
  },
  ik = (e, n) => {
    const {
        defaultedMultiCalendars: a,
        defaultedAriaLabels: t,
        defaultedTransitions: o,
        defaultedConfig: i,
        defaultedHighlight: r,
      } = vt(e),
      { modelValue: s, year: l, month: m, calendars: g } = Kn(e, n),
      d = u(() => yu(e.formatLocale, e.locale, e.monthNameFormat)),
      v = M(null),
      {
        selectYear: f,
        groupedYears: y,
        showYearPicker: S,
        toggleYearPicker: T,
        handleYearSelect: w,
        handleYear: b,
        isDisabled: L,
      } = Ou({
        modelValue: s,
        multiCalendars: a,
        highlight: r,
        calendars: g,
        year: l,
        month: m,
        props: e,
        emit: n,
      });
    Oe(() => {
      e.startDate &&
        ((s.value && e.focusStartDate) || !s.value) &&
        f(Ne(ne(e.startDate)), 0);
    });
    const D = (V) =>
        V ? { month: Ue(V), year: Ne(V) } : { month: null, year: null },
      P = () =>
        s.value
          ? Array.isArray(s.value)
            ? s.value.map((V) => D(V))
            : D(s.value)
          : D(),
      x = (V, j) => {
        const k = g.value[V],
          p = P();
        return Array.isArray(p)
          ? p.some((Y) => Y.year === k?.year && Y.month === j)
          : k?.year === p.year && j === p.month;
      },
      B = (V, j, k) => {
        var p, Y;
        const G = P();
        return Array.isArray(G)
          ? l.value(j) === ((p = G[k]) == null ? void 0 : p.year) &&
              V === ((Y = G[k]) == null ? void 0 : Y.month)
          : !1;
      },
      K = (V, j) => {
        if (e.range) {
          const k = P();
          if (Array.isArray(s.value) && Array.isArray(k)) {
            const p = B(V, j, 0) || B(V, j, 1),
              Y = ga(qt(ne()), V, l.value(j));
            return So(s.value, v.value, Y) && !p;
          }
          return !1;
        }
        return !1;
      },
      W = u(
        () => (V) =>
          cn(d.value, (j) => {
            const k = x(V, j.value),
              p =
                Wn(
                  j.value,
                  _u(l.value(V), e.minDate),
                  wu(l.value(V), e.maxDate)
                ) || P1(e.disabledDates, l.value(V)).includes(j.value),
              Y = K(j.value, V),
              G = Iu(r.value, j.value, l.value(V));
            return { active: k, disabled: p, isBetween: Y, highlighted: G };
          })
      ),
      C = (V, j) => ga(qt(ne()), V, l.value(j)),
      H = (V, j) => {
        const k = s.value ? s.value : qt(new Date());
        (s.value = ga(k, V, l.value(j))), n('auto-apply');
      },
      F = (V, j) => {
        const k = _i(s, C(V, j), n);
        Io(k, n, e.autoApply, e.modelAuto);
      },
      Q = (V, j) => {
        bi(C(V, j), s, e.multiDatesLimit), n('auto-apply', !0);
      },
      N = (V, j) => (
        (g.value[j].month = V),
        U(j, g.value[j].year, V),
        e.multiDates ? Q(V, j) : e.range ? F(V, j) : H(V, j)
      ),
      I = (V, j) => {
        f(V, j), U(j, V, null);
      },
      U = (V, j, k) => {
        let p = k;
        if (!p && p !== 0) {
          const Y = P();
          p = Array.isArray(Y) ? Y[V].month : Y.month;
        }
        n('update-month-year', { instance: V, year: j, month: p });
      };
    return {
      groupedMonths: W,
      groupedYears: y,
      year: l,
      isDisabled: L,
      defaultedMultiCalendars: a,
      defaultedAriaLabels: t,
      defaultedTransitions: o,
      defaultedConfig: i,
      showYearPicker: S,
      modelValue: s,
      presetDate: (V, j) => {
        Mu({
          value: V,
          modelValue: s,
          range: e.range,
          timezone: j ? void 0 : e.timezone,
        }),
          n('auto-apply');
      },
      setHoverDate: (V, j) => {
        v.value = C(V, j);
      },
      selectMonth: N,
      selectYear: I,
      toggleYearPicker: T,
      handleYearSelect: w,
      handleYear: b,
      getModelMonthYear: P,
    };
  },
  sk = re({
    compatConfig: { MODE: 3 },
    __name: 'MonthPicker',
    props: { ...Zt },
    emits: [
      'update:internal-model-value',
      'overlay-closed',
      'reset-flow',
      'range-start',
      'range-end',
      'auto-apply',
      'update-month-year',
      'mount',
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = Ua(),
        i = At(o, 'yearMode'),
        r = e;
      Oe(() => {
        r.shadow || t('mount', null);
      });
      const {
        groupedMonths: s,
        groupedYears: l,
        year: m,
        isDisabled: g,
        defaultedMultiCalendars: d,
        defaultedConfig: v,
        showYearPicker: f,
        modelValue: y,
        presetDate: S,
        setHoverDate: T,
        selectMonth: w,
        selectYear: b,
        toggleYearPicker: L,
        handleYearSelect: D,
        handleYear: P,
        getModelMonthYear: x,
      } = ik(r, t);
      return (
        n({
          getSidebarProps: () => ({
            modelValue: y,
            year: m,
            getModelMonthYear: x,
            selectMonth: w,
            selectYear: b,
            handleYear: P,
          }),
          presetDate: S,
          toggleYearPicker: (B) => L(0, B),
        }),
        (B, K) => (
          c(),
          q(
            Po,
            { 'multi-calendars': A(d).count, stretch: '' },
            {
              default: he(({ instance: W }) => [
                B.$slots['month-year']
                  ? te(
                      B.$slots,
                      'month-year',
                      nt(
                        Ge(
                          { key: 0 },
                          {
                            year: A(m),
                            months: A(s)(W),
                            years: A(l)(W),
                            selectMonth: A(w),
                            selectYear: A(b),
                            instance: W,
                          }
                        )
                      )
                    )
                  : (c(),
                    q(
                      Qn,
                      {
                        key: 1,
                        items: A(s)(W),
                        'arrow-navigation': B.arrowNavigation,
                        'is-last': B.autoApply && !A(v).keepActionRow,
                        'esc-close': B.escClose,
                        height: A(v).modeHeight,
                        config: B.config,
                        'no-overlay-focus': !!(B.noOverlayFocus || B.textInput),
                        'use-relative': '',
                        type: 'month',
                        onSelected: (C) => A(w)(C, W),
                        onHoverValue: (C) => A(T)(C, W),
                      },
                      {
                        header: he(() => [
                          Me(
                            Du,
                            Ge(B.$props, {
                              items: A(l)(W),
                              instance: W,
                              'show-year-picker': A(f)[W],
                              year: A(m)(W),
                              'is-disabled': (C) => A(g)(W, C),
                              onHandleYear: (C) => A(P)(W, C),
                              onYearSelect: (C) => A(D)(C, W),
                              onToggleYearPicker: (C) =>
                                A(L)(W, C?.flow, C?.show),
                            }),
                            It({ _: 2 }, [
                              ke(A(i), (C, H) => ({
                                name: C,
                                fn: he((F) => [te(B.$slots, C, nt(wt(F)))]),
                              })),
                            ]),
                            1040,
                            [
                              'items',
                              'instance',
                              'show-year-picker',
                              'year',
                              'is-disabled',
                              'onHandleYear',
                              'onYearSelect',
                              'onToggleYearPicker',
                            ]
                          ),
                        ]),
                        _: 2,
                      },
                      1032,
                      [
                        'items',
                        'arrow-navigation',
                        'is-last',
                        'esc-close',
                        'height',
                        'config',
                        'no-overlay-focus',
                        'onSelected',
                        'onHoverValue',
                      ]
                    )),
              ]),
              _: 3,
            },
            8,
            ['multi-calendars']
          )
        )
      );
    },
  }),
  lk = (e, n) => {
    const { modelValue: a } = Kn(e, n),
      t = M(null),
      { defaultedHighlight: o, defaultedFilters: i } = vt(e),
      r = M();
    Oe(() => {
      e.startDate &&
        ((a.value && e.focusStartDate) || !a.value) &&
        (r.value = Ne(ne(e.startDate)));
    });
    const s = (d) =>
        Array.isArray(a.value)
          ? a.value.some((v) => Ne(v) === d)
          : a.value
          ? Ne(a.value) === d
          : !1,
      l = (d) =>
        e.range && Array.isArray(a.value) ? So(a.value, t.value, g(d)) : !1,
      m = u(() =>
        cn(fi(e.yearRange, e.reverseYears), (d) => {
          const v = s(d.value),
            f =
              Wn(d.value, dn(e.minDate), dn(e.maxDate)) ||
              i.value.years.includes(d.value),
            y = l(d.value) && !v,
            S = yi(o.value, d.value);
          return { active: v, disabled: f, isBetween: y, highlighted: S };
        })
      ),
      g = (d) => ra(qt(new Date()), d);
    return {
      groupedYears: m,
      modelValue: a,
      focusYear: r,
      setHoverValue: (d) => {
        t.value = ra(qt(new Date()), d);
      },
      selectYear: (d) => {
        var v;
        if (e.multiDates)
          return (
            a.value
              ? Array.isArray(a.value) &&
                (((v = a.value) == null
                  ? void 0
                  : v.map((f) => Ne(f))
                ).includes(d)
                  ? (a.value = a.value.filter((f) => Ne(f) !== d))
                  : a.value.push(ra(St(ne()), d)))
              : (a.value = [ra(St(ne()), d)]),
            n('auto-apply', !0)
          );
        if (e.range) {
          const f = _i(a, g(d), n);
          return Io(f, n, e.autoApply, e.modelAuto);
        }
        (a.value = g(d)), n('auto-apply');
      },
    };
  },
  uk = re({
    compatConfig: { MODE: 3 },
    __name: 'YearPicker',
    props: { ...Zt },
    emits: [
      'update:internal-model-value',
      'reset-flow',
      'range-start',
      'range-end',
      'auto-apply',
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        {
          groupedYears: i,
          modelValue: r,
          focusYear: s,
          selectYear: l,
          setHoverValue: m,
        } = lk(o, t),
        { defaultedConfig: g } = vt(o);
      return (
        n({ getSidebarProps: () => ({ modelValue: r, selectYear: l }) }),
        (d, v) => (
          c(),
          h('div', null, [
            d.$slots['month-year']
              ? te(
                  d.$slots,
                  'month-year',
                  nt(Ge({ key: 0 }, { years: A(i), selectYear: A(l) }))
                )
              : (c(),
                q(
                  Qn,
                  {
                    key: 1,
                    items: A(i),
                    'is-last': d.autoApply && !A(g).keepActionRow,
                    height: A(g).modeHeight,
                    config: d.config,
                    'no-overlay-focus': !!(d.noOverlayFocus || d.textInput),
                    'focus-value': A(s),
                    type: 'year',
                    'use-relative': '',
                    onSelected: A(l),
                    onHoverValue: A(m),
                  },
                  It({ _: 2 }, [
                    d.$slots['year-overlay-value']
                      ? {
                          name: 'item',
                          fn: he(({ item: f }) => [
                            te(d.$slots, 'year-overlay-value', {
                              text: f.text,
                              value: f.value,
                            }),
                          ]),
                          key: '0',
                        }
                      : void 0,
                  ]),
                  1032,
                  [
                    'items',
                    'is-last',
                    'height',
                    'config',
                    'no-overlay-focus',
                    'focus-value',
                    'onSelected',
                    'onHoverValue',
                  ]
                )),
          ])
        )
      );
    },
  }),
  ck = { key: 0, class: 'dp__time_input' },
  dk = ['aria-label', 'onKeydown', 'onClick'],
  mk = E('span', { class: 'dp__tp_inline_btn_bar dp__tp_btn_in_l' }, null, -1),
  gk = E('span', { class: 'dp__tp_inline_btn_bar dp__tp_btn_in_r' }, null, -1),
  vk = ['aria-label', 'disabled', 'onKeydown', 'onClick'],
  pk = ['aria-label', 'onKeydown', 'onClick'],
  hk = E('span', { class: 'dp__tp_inline_btn_bar dp__tp_btn_in_l' }, null, -1),
  fk = E('span', { class: 'dp__tp_inline_btn_bar dp__tp_btn_in_r' }, null, -1),
  yk = { key: 0 },
  bk = ['aria-label', 'onKeydown'],
  _k = re({
    compatConfig: { MODE: 3 },
    __name: 'TimeInput',
    props: {
      hours: { type: Number, default: 0 },
      minutes: { type: Number, default: 0 },
      seconds: { type: Number, default: 0 },
      closeTimePickerBtn: { type: Object, default: null },
      order: { type: Number, default: 0 },
      disabledTimesConfig: { type: Function, default: null },
      validateTime: { type: Function, default: () => !1 },
      ...Zt,
    },
    emits: [
      'set-hours',
      'set-minutes',
      'update:hours',
      'update:minutes',
      'update:seconds',
      'reset-flow',
      'mounted',
      'overlay-closed',
      'am-pm-change',
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        { setTimePickerElements: i, setTimePickerBackRef: r } = Ea(),
        {
          defaultedAriaLabels: s,
          defaultedTransitions: l,
          defaultedFilters: m,
          defaultedConfig: g,
        } = vt(o),
        { transitionName: d, showTransition: v } = zn(l),
        f = va({ hours: !1, minutes: !1, seconds: !1 }),
        y = M('AM'),
        S = M(null),
        T = M([]);
      Oe(() => {
        t('mounted');
      });
      const w = (_) =>
          at(new Date(), {
            hours: _.hours,
            minutes: _.minutes,
            seconds: o.enableSeconds ? _.seconds : 0,
            milliseconds: 0,
          }),
        b = u(() => (_) => N(_, o[_]) || D(_, o[_])),
        L = u(() => ({
          hours: o.hours,
          minutes: o.minutes,
          seconds: o.seconds,
        })),
        D = (_, ae) =>
          o.range && !o.disableTimeRangeValidation
            ? !o.validateTime(_, ae)
            : !1,
        P = (_, ae) => {
          if (o.range && !o.disableTimeRangeValidation) {
            const ve = ae ? +o[`${_}Increment`] : -+o[`${_}Increment`],
              le = o[_] + ve;
            return !o.validateTime(_, le);
          }
          return !1;
        },
        x = u(() => (_) => !U(+o[_] + +o[`${_}Increment`], _) || P(_, !0)),
        B = u(() => (_) => !U(+o[_] - +o[`${_}Increment`], _) || P(_, !1)),
        K = (_, ae) => Gl(at(ne(), _), ae),
        W = (_, ae) => Hw(at(ne(), _), ae),
        C = u(() => ({
          dp__time_col: !0,
          dp__time_col_block: !o.timePickerInline,
          dp__time_col_reg_block:
            !o.enableSeconds && o.is24 && !o.timePickerInline,
          dp__time_col_reg_inline:
            !o.enableSeconds && o.is24 && o.timePickerInline,
          dp__time_col_reg_with_button: !o.enableSeconds && !o.is24,
          dp__time_col_sec: o.enableSeconds && o.is24,
          dp__time_col_sec_with_button: o.enableSeconds && !o.is24,
        })),
        H = u(() => {
          const _ = [
            { type: 'hours' },
            { type: '', separator: !0 },
            { type: 'minutes' },
          ];
          return o.enableSeconds
            ? _.concat([{ type: '', separator: !0 }, { type: 'seconds' }])
            : _;
        }),
        F = u(() => H.value.filter((_) => !_.separator)),
        Q = u(() => (_) => {
          if (_ === 'hours') {
            const ae = Y(+o.hours);
            return { text: ae < 10 ? `0${ae}` : `${ae}`, value: ae };
          }
          return { text: o[_] < 10 ? `0${o[_]}` : `${o[_]}`, value: o[_] };
        }),
        N = (_, ae) => {
          var ve;
          if (!o.disabledTimesConfig) return !1;
          const le = o.disabledTimesConfig(
            o.order,
            _ === 'hours' ? ae : void 0
          );
          return le[_] ? !!((ve = le[_]) != null && ve.includes(ae)) : !0;
        },
        I = (_) => {
          const ae = o.is24 ? 24 : 12,
            ve = _ === 'hours' ? ae : 60,
            le = +o[`${_}GridIncrement`],
            be = _ === 'hours' && !o.is24 ? le : 0,
            de = [];
          for (let z = be; z < ve; z += le)
            de.push({ value: z, text: z < 10 ? `0${z}` : `${z}` });
          return (
            _ === 'hours' && !o.is24 && de.push({ value: 0, text: '12' }),
            cn(de, (z) => ({
              active: !1,
              disabled:
                m.value.times[_].includes(z.value) ||
                !U(z.value, _) ||
                N(_, z.value) ||
                D(_, z.value),
            }))
          );
        },
        U = (_, ae) => {
          const ve = o.minTime ? w(Xo(o.minTime)) : null,
            le = o.maxTime ? w(Xo(o.maxTime)) : null,
            be = w(Xo(L.value, ae, _));
          return ve && le
            ? (Fn(be, le) || Xa(be, le)) && (Yn(be, ve) || Xa(be, ve))
            : ve
            ? Yn(be, ve) || Xa(be, ve)
            : le
            ? Fn(be, le) || Xa(be, le)
            : !0;
        },
        V = (_) => o[`no${_[0].toUpperCase() + _.slice(1)}Overlay`],
        j = (_) => {
          V(_) || ((f[_] = !f[_]), f[_] || t('overlay-closed'));
        },
        k = (_) => (_ === 'hours' ? jt : _ === 'minutes' ? ia : ln),
        p = (_, ae = !0) => {
          const ve = ae ? K : W,
            le = ae ? +o[`${_}Increment`] : -+o[`${_}Increment`];
          U(+o[_] + le, _) &&
            t(
              `update:${_}`,
              k(_)(ve({ [_]: +o[_] }, { [_]: +o[`${_}Increment`] }))
            );
        },
        Y = (_) =>
          o.is24 ? _ : (_ >= 12 ? (y.value = 'PM') : (y.value = 'AM'), m1(_)),
        G = () => {
          y.value === 'PM'
            ? ((y.value = 'AM'), t('update:hours', o.hours - 12))
            : ((y.value = 'PM'), t('update:hours', o.hours + 12)),
            t('am-pm-change', y.value);
        },
        ee = (_) => {
          f[_] = !0;
        },
        J = (_, ae, ve) => {
          if (_ && o.arrowNavigation) {
            Array.isArray(T.value[ae])
              ? (T.value[ae][ve] = _)
              : (T.value[ae] = [_]);
            const le = T.value.reduce(
              (be, de) => de.map((z, ie) => [...(be[ie] || []), de[ie]]),
              []
            );
            r(o.closeTimePickerBtn),
              S.value && (le[1] = le[1].concat(S.value)),
              i(le, o.order);
          }
        },
        R = (_, ae) => (
          j(_),
          _ === 'hours' && !o.is24
            ? t(`update:${_}`, y.value === 'PM' ? ae + 12 : ae)
            : t(`update:${_}`, ae)
        );
      return (
        n({ openChildCmp: ee }),
        (_, ae) => {
          var ve;
          return _.disabled
            ? O('', !0)
            : (c(),
              h('div', ck, [
                (c(!0),
                h(
                  ge,
                  null,
                  ke(H.value, (le, be) => {
                    var de, z, ie;
                    return (
                      c(),
                      h(
                        'div',
                        { key: be, class: Z(C.value) },
                        [
                          le.separator
                            ? (c(), h(ge, { key: 0 }, [He(' : ')], 64))
                            : (c(),
                              h(
                                ge,
                                { key: 1 },
                                [
                                  E(
                                    'button',
                                    {
                                      ref_for: !0,
                                      ref: (Ee) => J(Ee, be, 0),
                                      type: 'button',
                                      class: Z({
                                        dp__btn: !0,
                                        dp__inc_dec_button: !_.timePickerInline,
                                        dp__inc_dec_button_inline:
                                          _.timePickerInline,
                                        dp__tp_inline_btn_top:
                                          _.timePickerInline,
                                        dp__inc_dec_button_disabled: x.value(
                                          le.type
                                        ),
                                      }),
                                      'aria-label':
                                        (de = A(s)) == null
                                          ? void 0
                                          : de.incrementValue(le.type),
                                      tabindex: '0',
                                      onKeydown: [
                                        Le(
                                          De((Ee) => p(le.type), ['prevent']),
                                          ['enter']
                                        ),
                                        Le(
                                          De((Ee) => p(le.type), ['prevent']),
                                          ['space']
                                        ),
                                      ],
                                      onClick: (Ee) => p(le.type),
                                    },
                                    [
                                      o.timePickerInline
                                        ? (c(), h(ge, { key: 1 }, [mk, gk], 64))
                                        : (c(),
                                          h(
                                            ge,
                                            { key: 0 },
                                            [
                                              _.$slots['arrow-up']
                                                ? te(_.$slots, 'arrow-up', {
                                                    key: 0,
                                                  })
                                                : O('', !0),
                                              _.$slots['arrow-up']
                                                ? O('', !0)
                                                : (c(), q(A(mi), { key: 1 })),
                                            ],
                                            64
                                          )),
                                    ],
                                    42,
                                    dk
                                  ),
                                  E(
                                    'button',
                                    {
                                      ref_for: !0,
                                      ref: (Ee) => J(Ee, be, 1),
                                      type: 'button',
                                      'aria-label':
                                        (z = A(s)) == null
                                          ? void 0
                                          : z.openTpOverlay(le.type),
                                      class: Z({
                                        dp__time_display: !0,
                                        dp__time_display_block:
                                          !_.timePickerInline,
                                        dp__time_display_inline:
                                          _.timePickerInline,
                                        'dp--time-invalid': b.value(le.type),
                                        'dp--time-overlay-btn': !b.value(
                                          le.type
                                        ),
                                      }),
                                      disabled: V(le.type),
                                      tabindex: '0',
                                      onKeydown: [
                                        Le(
                                          De((Ee) => j(le.type), ['prevent']),
                                          ['enter']
                                        ),
                                        Le(
                                          De((Ee) => j(le.type), ['prevent']),
                                          ['space']
                                        ),
                                      ],
                                      onClick: (Ee) => j(le.type),
                                    },
                                    [
                                      _.$slots[le.type]
                                        ? te(_.$slots, le.type, {
                                            key: 0,
                                            text: Q.value(le.type).text,
                                            value: Q.value(le.type).value,
                                          })
                                        : O('', !0),
                                      _.$slots[le.type]
                                        ? O('', !0)
                                        : (c(),
                                          h(
                                            ge,
                                            { key: 1 },
                                            [He(X(Q.value(le.type).text), 1)],
                                            64
                                          )),
                                    ],
                                    42,
                                    vk
                                  ),
                                  E(
                                    'button',
                                    {
                                      ref_for: !0,
                                      ref: (Ee) => J(Ee, be, 2),
                                      type: 'button',
                                      class: Z({
                                        dp__btn: !0,
                                        dp__inc_dec_button: !_.timePickerInline,
                                        dp__inc_dec_button_inline:
                                          _.timePickerInline,
                                        dp__tp_inline_btn_bottom:
                                          _.timePickerInline,
                                        dp__inc_dec_button_disabled: B.value(
                                          le.type
                                        ),
                                      }),
                                      'aria-label':
                                        (ie = A(s)) == null
                                          ? void 0
                                          : ie.decrementValue(le.type),
                                      tabindex: '0',
                                      onKeydown: [
                                        Le(
                                          De(
                                            (Ee) => p(le.type, !1),
                                            ['prevent']
                                          ),
                                          ['enter']
                                        ),
                                        Le(
                                          De(
                                            (Ee) => p(le.type, !1),
                                            ['prevent']
                                          ),
                                          ['space']
                                        ),
                                      ],
                                      onClick: (Ee) => p(le.type, !1),
                                    },
                                    [
                                      o.timePickerInline
                                        ? (c(), h(ge, { key: 1 }, [hk, fk], 64))
                                        : (c(),
                                          h(
                                            ge,
                                            { key: 0 },
                                            [
                                              _.$slots['arrow-down']
                                                ? te(_.$slots, 'arrow-down', {
                                                    key: 0,
                                                  })
                                                : O('', !0),
                                              _.$slots['arrow-down']
                                                ? O('', !0)
                                                : (c(), q(A(gi), { key: 1 })),
                                            ],
                                            64
                                          )),
                                    ],
                                    42,
                                    pk
                                  ),
                                ],
                                64
                              )),
                        ],
                        2
                      )
                    );
                  }),
                  128
                )),
                _.is24
                  ? O('', !0)
                  : (c(),
                    h('div', yk, [
                      _.$slots['am-pm-button']
                        ? te(_.$slots, 'am-pm-button', {
                            key: 0,
                            toggle: G,
                            value: y.value,
                          })
                        : O('', !0),
                      _.$slots['am-pm-button']
                        ? O('', !0)
                        : (c(),
                          h(
                            'button',
                            {
                              key: 1,
                              ref_key: 'amPmButton',
                              ref: S,
                              type: 'button',
                              class: 'dp__pm_am_button',
                              role: 'button',
                              'aria-label':
                                (ve = A(s)) == null ? void 0 : ve.amPmButton,
                              tabindex: '0',
                              onClick: G,
                              onKeydown: [
                                Le(De(G, ['prevent']), ['enter']),
                                Le(De(G, ['prevent']), ['space']),
                              ],
                            },
                            X(y.value),
                            41,
                            bk
                          )),
                    ])),
                (c(!0),
                h(
                  ge,
                  null,
                  ke(
                    F.value,
                    (le, be) => (
                      c(),
                      q(
                        Ot,
                        { key: be, name: A(d)(f[le.type]), css: A(v) },
                        {
                          default: he(() => [
                            f[le.type]
                              ? (c(),
                                q(
                                  Qn,
                                  {
                                    key: 0,
                                    items: I(le.type),
                                    'is-last':
                                      _.autoApply && !A(g).keepActionRow,
                                    'esc-close': _.escClose,
                                    type: le.type,
                                    'text-input': _.textInput,
                                    config: _.config,
                                    'arrow-navigation': _.arrowNavigation,
                                    onSelected: (de) => R(le.type, de),
                                    onToggle: (de) => j(le.type),
                                    onResetFlow:
                                      ae[0] ||
                                      (ae[0] = (de) => _.$emit('reset-flow')),
                                  },
                                  It(
                                    {
                                      'button-icon': he(() => [
                                        _.$slots['clock-icon']
                                          ? te(_.$slots, 'clock-icon', {
                                              key: 0,
                                            })
                                          : O('', !0),
                                        _.$slots['clock-icon']
                                          ? O('', !0)
                                          : (c(),
                                            q(
                                              mn(
                                                _.timePickerInline
                                                  ? A(pn)
                                                  : A(di)
                                              ),
                                              { key: 1 }
                                            )),
                                      ]),
                                      _: 2,
                                    },
                                    [
                                      _.$slots[`${le.type}-overlay-value`]
                                        ? {
                                            name: 'item',
                                            fn: he(({ item: de }) => [
                                              te(
                                                _.$slots,
                                                `${le.type}-overlay-value`,
                                                {
                                                  text: de.text,
                                                  value: de.value,
                                                }
                                              ),
                                            ]),
                                            key: '0',
                                          }
                                        : void 0,
                                    ]
                                  ),
                                  1032,
                                  [
                                    'items',
                                    'is-last',
                                    'esc-close',
                                    'type',
                                    'text-input',
                                    'config',
                                    'arrow-navigation',
                                    'onSelected',
                                    'onToggle',
                                  ]
                                ))
                              : O('', !0),
                          ]),
                          _: 2,
                        },
                        1032,
                        ['name', 'css']
                      )
                    )
                  ),
                  128
                )),
              ]));
        }
      );
    },
  }),
  wk = { class: 'dp--tp-wrap' },
  kk = ['aria-label', 'tabindex'],
  Sk = ['tabindex'],
  Tk = ['aria-label'],
  Lu = re({
    compatConfig: { MODE: 3 },
    __name: 'TimePicker',
    props: {
      hours: { type: [Number, Array], default: 0 },
      minutes: { type: [Number, Array], default: 0 },
      seconds: { type: [Number, Array], default: 0 },
      disabledTimesConfig: { type: Function, default: null },
      validateTime: { type: Function, default: () => !1 },
      ...Zt,
    },
    emits: [
      'update:hours',
      'update:minutes',
      'update:seconds',
      'mount',
      'reset-flow',
      'overlay-opened',
      'overlay-closed',
      'am-pm-change',
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        { buildMatrix: i, setTimePicker: r } = Ea(),
        s = Ua(),
        {
          defaultedTransitions: l,
          defaultedAriaLabels: m,
          defaultedTextInput: g,
          defaultedConfig: d,
        } = vt(o),
        { transitionName: v, showTransition: f } = zn(l),
        { hideNavigationButtons: y } = To(),
        S = M(null),
        T = M(null),
        w = M([]),
        b = M(null);
      Oe(() => {
        t('mount'),
          !o.timePicker && o.arrowNavigation
            ? i([ht(S.value)], 'time')
            : r(!0, o.timePicker);
      });
      const L = u(() =>
          o.range && o.modelAuto ? bu(o.internalModelValue) : !0
        ),
        D = M(!1),
        P = (I) => ({
          hours: Array.isArray(o.hours) ? o.hours[I] : o.hours,
          minutes: Array.isArray(o.minutes) ? o.minutes[I] : o.minutes,
          seconds: Array.isArray(o.seconds) ? o.seconds[I] : o.seconds,
        }),
        x = u(() => {
          const I = [];
          if (o.range) for (let U = 0; U < 2; U++) I.push(P(U));
          else I.push(P(0));
          return I;
        }),
        B = (I, U = !1, V = '') => {
          U || t('reset-flow'),
            (D.value = I),
            t(I ? 'overlay-opened' : 'overlay-closed'),
            o.arrowNavigation && r(I),
            Et(() => {
              V !== '' && w.value[0] && w.value[0].openChildCmp(V);
            });
        },
        K = u(() => ({
          dp__btn: !0,
          dp__button: !0,
          dp__button_bottom: o.autoApply && !d.value.keepActionRow,
        })),
        W = At(s, 'timePicker'),
        C = (I, U, V) =>
          o.range ? (U === 0 ? [I, x.value[1][V]] : [x.value[0][V], I]) : I,
        H = (I) => {
          t('update:hours', I);
        },
        F = (I) => {
          t('update:minutes', I);
        },
        Q = (I) => {
          t('update:seconds', I);
        },
        N = () => {
          if (b.value && !g.value.enabled && !o.noOverlayFocus) {
            const I = v1(b.value);
            I && I.focus({ preventScroll: !0 });
          }
        };
      return (
        n({ toggleTimePicker: B }),
        (I, U) => {
          var V;
          return (
            c(),
            h('div', wk, [
              !I.timePicker && !I.timePickerInline
                ? ue(
                    (c(),
                    h(
                      'button',
                      {
                        key: 0,
                        ref_key: 'openTimePickerBtn',
                        ref: S,
                        type: 'button',
                        class: Z(K.value),
                        'aria-label':
                          (V = A(m)) == null ? void 0 : V.openTimePicker,
                        tabindex: I.noOverlayFocus ? void 0 : 0,
                        onKeydown: [
                          U[0] || (U[0] = Le((j) => B(!0), ['enter'])),
                          U[1] || (U[1] = Le((j) => B(!0), ['space'])),
                        ],
                        onClick: U[2] || (U[2] = (j) => B(!0)),
                      },
                      [
                        I.$slots['clock-icon']
                          ? te(I.$slots, 'clock-icon', { key: 0 })
                          : O('', !0),
                        I.$slots['clock-icon']
                          ? O('', !0)
                          : (c(), q(A(di), { key: 1 })),
                      ],
                      42,
                      kk
                    )),
                    [[Ht, !A(y)(I.hideNavigation, 'time')]]
                  )
                : O('', !0),
              Me(
                Ot,
                { name: A(v)(D.value), css: A(f) && !I.timePickerInline },
                {
                  default: he(() => {
                    var j;
                    return [
                      D.value || I.timePicker || I.timePickerInline
                        ? (c(),
                          h(
                            'div',
                            {
                              key: 0,
                              ref_key: 'overlayRef',
                              ref: b,
                              class: Z({
                                dp__overlay: !I.timePickerInline,
                                'dp--overlay-absolute':
                                  !o.timePicker && !I.timePickerInline,
                                'dp--overlay-relative': o.timePicker,
                              }),
                              style: Ae(
                                I.timePicker
                                  ? { height: `${A(d).modeHeight}px` }
                                  : void 0
                              ),
                              tabindex: I.timePickerInline ? void 0 : 0,
                            },
                            [
                              E(
                                'div',
                                {
                                  class: Z(
                                    I.timePickerInline
                                      ? 'dp__time_picker_inline_container'
                                      : 'dp__overlay_container dp__container_flex dp__time_picker_overlay_container'
                                  ),
                                  style: { display: 'flex' },
                                },
                                [
                                  I.$slots['time-picker-overlay']
                                    ? te(I.$slots, 'time-picker-overlay', {
                                        key: 0,
                                        hours: e.hours,
                                        minutes: e.minutes,
                                        seconds: e.seconds,
                                        setHours: H,
                                        setMinutes: F,
                                        setSeconds: Q,
                                      })
                                    : O('', !0),
                                  I.$slots['time-picker-overlay']
                                    ? O('', !0)
                                    : (c(),
                                      h(
                                        'div',
                                        {
                                          key: 1,
                                          class: Z(
                                            I.timePickerInline
                                              ? 'dp__flex'
                                              : 'dp__overlay_row dp__flex_row'
                                          ),
                                        },
                                        [
                                          (c(!0),
                                          h(
                                            ge,
                                            null,
                                            ke(x.value, (k, p) =>
                                              ue(
                                                (c(),
                                                q(
                                                  _k,
                                                  Ge(
                                                    { key: p },
                                                    {
                                                      ...I.$props,
                                                      order: p,
                                                      hours: k.hours,
                                                      minutes: k.minutes,
                                                      seconds: k.seconds,
                                                      closeTimePickerBtn:
                                                        T.value,
                                                      disabledTimesConfig:
                                                        e.disabledTimesConfig,
                                                      disabled:
                                                        p === 0
                                                          ? I.fixedStart
                                                          : I.fixedEnd,
                                                    },
                                                    {
                                                      ref_for: !0,
                                                      ref_key: 'timeInputRefs',
                                                      ref: w,
                                                      'validate-time': (Y, G) =>
                                                        e.validateTime(
                                                          Y,
                                                          C(G, p, Y)
                                                        ),
                                                      'onUpdate:hours': (Y) =>
                                                        H(C(Y, p, 'hours')),
                                                      'onUpdate:minutes': (Y) =>
                                                        F(C(Y, p, 'minutes')),
                                                      'onUpdate:seconds': (Y) =>
                                                        Q(C(Y, p, 'seconds')),
                                                      onMounted: N,
                                                      onOverlayClosed: N,
                                                      onAmPmChange:
                                                        U[3] ||
                                                        (U[3] = (Y) =>
                                                          I.$emit(
                                                            'am-pm-change',
                                                            Y
                                                          )),
                                                    }
                                                  ),
                                                  It({ _: 2 }, [
                                                    ke(A(W), (Y, G) => ({
                                                      name: Y,
                                                      fn: he((ee) => [
                                                        te(
                                                          I.$slots,
                                                          Y,
                                                          nt(wt(ee))
                                                        ),
                                                      ]),
                                                    })),
                                                  ]),
                                                  1040,
                                                  [
                                                    'validate-time',
                                                    'onUpdate:hours',
                                                    'onUpdate:minutes',
                                                    'onUpdate:seconds',
                                                  ]
                                                )),
                                                [[Ht, p === 0 ? !0 : L.value]]
                                              )
                                            ),
                                            128
                                          )),
                                        ],
                                        2
                                      )),
                                  !I.timePicker && !I.timePickerInline
                                    ? ue(
                                        (c(),
                                        h(
                                          'button',
                                          {
                                            key: 2,
                                            ref_key: 'closeTimePickerBtn',
                                            ref: T,
                                            type: 'button',
                                            class: Z(K.value),
                                            'aria-label':
                                              (j = A(m)) == null
                                                ? void 0
                                                : j.closeTimePicker,
                                            tabindex: '0',
                                            onKeydown: [
                                              U[4] ||
                                                (U[4] = Le(
                                                  (k) => B(!1),
                                                  ['enter']
                                                )),
                                              U[5] ||
                                                (U[5] = Le(
                                                  (k) => B(!1),
                                                  ['space']
                                                )),
                                            ],
                                            onClick:
                                              U[6] || (U[6] = (k) => B(!1)),
                                          },
                                          [
                                            I.$slots['calendar-icon']
                                              ? te(I.$slots, 'calendar-icon', {
                                                  key: 0,
                                                })
                                              : O('', !0),
                                            I.$slots['calendar-icon']
                                              ? O('', !0)
                                              : (c(), q(A(pn), { key: 1 })),
                                          ],
                                          42,
                                          Tk
                                        )),
                                        [[Ht, !A(y)(I.hideNavigation, 'time')]]
                                      )
                                    : O('', !0),
                                ],
                                2
                              ),
                            ],
                            14,
                            Sk
                          ))
                        : O('', !0),
                    ];
                  }),
                  _: 3,
                },
                8,
                ['name', 'css']
              ),
            ])
          );
        }
      );
    },
  }),
  Au = (e, n, a, t) => {
    const o = (w, b) => (Array.isArray(n[w]) ? n[w][b] : n[w]),
      i = (w) =>
        e.enableSeconds
          ? Array.isArray(n.seconds)
            ? n.seconds[w]
            : n.seconds
          : 0,
      r = (w, b) =>
        w
          ? b !== void 0
            ? Ia(w, o('hours', b), o('minutes', b), i(b))
            : Ia(w, n.hours, n.minutes, i())
          : li(ne(), i(b)),
      s = (w, b) => {
        n[w] = b;
      },
      l = (w, b) => {
        const L = Object.fromEntries(
          Object.keys(n).map((D) => (D === w ? [D, b] : [D, n[D]].slice()))
        );
        if (e.range && !e.disableTimeRangeValidation) {
          const D = (x) =>
              a.value
                ? Ia(a.value[x], L.hours[x], L.minutes[x], L.seconds[x])
                : null,
            P = (x) => si(a.value[x], 0);
          return !(We(D(0), D(1)) && (Yn(D(0), P(1)) || Fn(D(1), P(0))));
        }
        return !0;
      },
      m = (w, b) => {
        l(w, b) && (s(w, b), t && t());
      },
      g = (w) => {
        m('hours', w);
      },
      d = (w) => {
        m('minutes', w);
      },
      v = (w) => {
        m('seconds', w);
      },
      f = (w, b, L, D) => {
        b && g(w), !b && !L && d(w), L && v(w), a.value && D(a.value);
      },
      y = (w) => {
        if (w) {
          const b = Array.isArray(w),
            L = b ? [+w[0].hours, +w[1].hours] : +w.hours,
            D = b ? [+w[0].minutes, +w[1].minutes] : +w.minutes,
            P = b ? [+w[0].seconds, +w[1].seconds] : +w.seconds;
          s('hours', L), s('minutes', D), e.enableSeconds && s('seconds', P);
        }
      },
      S = (w, b) => {
        const L = {
          hours: Array.isArray(n.hours) ? n.hours[w] : n.hours,
          disabledArr: [],
        };
        return (
          (b || b === 0) && (L.hours = b),
          Array.isArray(e.disabledTimes) &&
            (L.disabledArr =
              e.range && Array.isArray(e.disabledTimes[w])
                ? e.disabledTimes[w]
                : e.disabledTimes),
          L
        );
      },
      T = u(() => (w, b) => {
        var L;
        if (Array.isArray(e.disabledTimes)) {
          const { disabledArr: D, hours: P } = S(w, b),
            x = D.filter((B) => +B.hours === P);
          return ((L = x[0]) == null ? void 0 : L.minutes) === '*'
            ? { hours: [P], minutes: void 0, seconds: void 0 }
            : {
                hours: [],
                minutes: x?.map((B) => +B.minutes) ?? [],
                seconds: x?.map((B) => (B.seconds ? +B.seconds : void 0)) ?? [],
              };
        }
        return { hours: [], minutes: [], seconds: [] };
      });
    return {
      setTime: s,
      updateHours: g,
      updateMinutes: d,
      updateSeconds: v,
      getSetDateTime: r,
      updateTimeValues: f,
      getSecondsValue: i,
      assignStartTime: y,
      validateTime: l,
      disabledTimesConfig: T,
    };
  },
  Ck = (e, n) => {
    const { modelValue: a, time: t } = Kn(e, n),
      { defaultedStartTime: o } = vt(e),
      {
        updateTimeValues: i,
        getSetDateTime: r,
        setTime: s,
        assignStartTime: l,
        disabledTimesConfig: m,
        validateTime: g,
      } = Au(e, t, a),
      d = (b) => {
        const { hours: L, minutes: D, seconds: P } = b;
        return { hours: +L, minutes: +D, seconds: P ? +P : 0 };
      },
      v = () => {
        if (e.startTime) {
          if (Array.isArray(e.startTime)) {
            const L = d(e.startTime[0]),
              D = d(e.startTime[1]);
            return [at(ne(), L), at(ne(), D)];
          }
          const b = d(e.startTime);
          return at(ne(), b);
        }
        return e.range ? [null, null] : null;
      },
      f = () => {
        if (e.range) {
          const [b, L] = v();
          a.value = [r(b, 0), r(L, 1)];
        } else a.value = r(v());
      },
      y = (b) =>
        Array.isArray(b) ? [Ra(ne(b[0])), Ra(ne(b[1]))] : [Ra(b ?? ne())],
      S = (b, L, D) => {
        s('hours', b), s('minutes', L), s('seconds', e.enableSeconds ? D : 0);
      },
      T = () => {
        const [b, L] = y(a.value);
        return e.range
          ? S(
              [b.hours, L.hours],
              [b.minutes, L.minutes],
              [b.seconds, L.minutes]
            )
          : S(b.hours, b.minutes, b.seconds);
      };
    Oe(() => {
      if (!e.shadow) return l(o.value), a.value ? T() : f();
    });
    const w = () => {
      Array.isArray(a.value)
        ? (a.value = a.value.map((b, L) => b && r(b, L)))
        : (a.value = r(a.value)),
        n('time-update');
    };
    return {
      modelValue: a,
      time: t,
      disabledTimesConfig: m,
      updateTime: (b, L = !0, D = !1) => {
        i(b, L, D, w);
      },
      validateTime: g,
    };
  },
  Pk = re({
    compatConfig: { MODE: 3 },
    __name: 'TimePickerSolo',
    props: { ...Zt },
    emits: ['update:internal-model-value', 'time-update', 'am-pm-change'],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        i = Ua(),
        r = At(i, 'timePicker'),
        {
          time: s,
          modelValue: l,
          disabledTimesConfig: m,
          updateTime: g,
          validateTime: d,
        } = Ck(o, t);
      return (
        n({
          getSidebarProps: () => ({ modelValue: l, time: s, updateTime: g }),
        }),
        (v, f) => (
          c(),
          q(
            Po,
            { 'multi-calendars': 0, stretch: '' },
            {
              default: he(() => [
                Me(
                  Lu,
                  Ge(v.$props, {
                    hours: A(s).hours,
                    minutes: A(s).minutes,
                    seconds: A(s).seconds,
                    'internal-model-value': v.internalModelValue,
                    'disabled-times-config': A(m),
                    'validate-time': A(d),
                    'onUpdate:hours': f[0] || (f[0] = (y) => A(g)(y)),
                    'onUpdate:minutes': f[1] || (f[1] = (y) => A(g)(y, !1)),
                    'onUpdate:seconds': f[2] || (f[2] = (y) => A(g)(y, !1, !0)),
                    onAmPmChange:
                      f[3] || (f[3] = (y) => v.$emit('am-pm-change', y)),
                  }),
                  It({ _: 2 }, [
                    ke(A(r), (y, S) => ({
                      name: y,
                      fn: he((T) => [te(v.$slots, y, nt(wt(T)))]),
                    })),
                  ]),
                  1040,
                  [
                    'hours',
                    'minutes',
                    'seconds',
                    'internal-model-value',
                    'disabled-times-config',
                    'validate-time',
                  ]
                ),
              ]),
              _: 3,
            }
          )
        )
      );
    },
  }),
  Ik = { class: 'dp__month_year_row' },
  Ek = ['aria-label', 'onClick', 'onKeydown'],
  Dk = re({
    compatConfig: { MODE: 3 },
    __name: 'DpHeader',
    props: {
      month: { type: Number, default: 0 },
      year: { type: Number, default: 0 },
      instance: { type: Number, default: 0 },
      years: { type: Array, default: () => [] },
      months: { type: Array, default: () => [] },
      ...Zt,
    },
    emits: ['update-month-year', 'mount', 'reset-flow', 'overlay-closed'],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        {
          defaultedTransitions: i,
          defaultedAriaLabels: r,
          defaultedMultiCalendars: s,
          defaultedFilters: l,
          defaultedConfig: m,
          defaultedHighlight: g,
        } = vt(o),
        { transitionName: d, showTransition: v } = zn(i),
        { buildMatrix: f } = Ea(),
        {
          handleMonthYearChange: y,
          isDisabled: S,
          updateMonthYear: T,
        } = $1(o, t),
        { showLeftIcon: w, showRightIcon: b } = To(),
        L = M(!1),
        D = M(!1),
        P = M([null, null, null, null]);
      Oe(() => {
        t('mount');
      });
      const x = (p) => ({
          get: () => o[p],
          set: (Y) => {
            const G = p === Ft.month ? Ft.year : Ft.month;
            t('update-month-year', { [p]: Y, [G]: o[G] }),
              p === Ft.month ? N(!0) : I(!0);
          },
        }),
        B = u(x(Ft.month)),
        K = u(x(Ft.year)),
        W = u(() => (p) => ({
          month: o.month,
          year: o.year,
          items: p === Ft.month ? o.months : o.years,
          instance: o.instance,
          updateMonthYear: T,
          toggle: p === Ft.month ? N : I,
        })),
        C = u(
          () =>
            o.months.find((Y) => Y.value === o.month) || { text: '', value: 0 }
        ),
        H = u(() =>
          cn(o.months, (p) => {
            const Y = o.month === p.value,
              G =
                Wn(p.value, _u(o.year, o.minDate), wu(o.year, o.maxDate)) ||
                l.value.months.includes(p.value),
              ee = Iu(g.value, p.value, o.year);
            return { active: Y, disabled: G, highlighted: ee };
          })
        ),
        F = u(() =>
          cn(o.years, (p) => {
            const Y = o.year === p.value,
              G =
                Wn(p.value, dn(o.minDate), dn(o.maxDate)) ||
                l.value.years.includes(p.value),
              ee = yi(g.value, p.value);
            return { active: Y, disabled: G, highlighted: ee };
          })
        ),
        Q = (p, Y) => {
          Y !== void 0 ? (p.value = Y) : (p.value = !p.value),
            p.value || t('overlay-closed');
        },
        N = (p = !1, Y) => {
          U(p), Q(L, Y);
        },
        I = (p = !1, Y) => {
          U(p), Q(D, Y);
        },
        U = (p) => {
          p || t('reset-flow');
        },
        V = (p, Y) => {
          o.arrowNavigation && ((P.value[Y] = ht(p)), f(P.value, 'monthYear'));
        },
        j = u(() => {
          var p, Y;
          return [
            {
              type: Ft.month,
              index: 1,
              toggle: N,
              modelValue: B.value,
              updateModelValue: (G) => (B.value = G),
              text: C.value.text,
              showSelectionGrid: L.value,
              items: H.value,
              ariaLabel: (p = r.value) == null ? void 0 : p.openMonthsOverlay,
            },
            {
              type: Ft.year,
              index: 2,
              toggle: I,
              modelValue: K.value,
              updateModelValue: (G) => (K.value = G),
              text: o.year,
              showSelectionGrid: D.value,
              items: F.value,
              ariaLabel: (Y = r.value) == null ? void 0 : Y.openYearsOverlay,
            },
          ];
        }),
        k = u(() =>
          o.disableYearSelect
            ? [j.value[0]]
            : o.yearFirst
            ? [...j.value].reverse()
            : j.value
        );
      return (
        n({
          toggleMonthPicker: N,
          toggleYearPicker: I,
          handleMonthYearChange: y,
        }),
        (p, Y) => {
          var G, ee, J;
          return (
            c(),
            h('div', Ik, [
              p.$slots['month-year']
                ? te(
                    p.$slots,
                    'month-year',
                    nt(
                      Ge(
                        { key: 0 },
                        {
                          month: e.month,
                          year: e.year,
                          months: e.months,
                          years: e.years,
                          updateMonthYear: A(T),
                          handleMonthYearChange: A(y),
                          instance: e.instance,
                        }
                      )
                    )
                  )
                : (c(),
                  h(
                    ge,
                    { key: 1 },
                    [
                      A(w)(A(s), e.instance) && !p.vertical
                        ? (c(),
                          q(
                            Ln,
                            {
                              key: 0,
                              'aria-label':
                                (G = A(r)) == null ? void 0 : G.prevMonth,
                              disabled: A(S)(!1),
                              onActivate: Y[0] || (Y[0] = (R) => A(y)(!1, !0)),
                              onSetRef: Y[1] || (Y[1] = (R) => V(R, 0)),
                            },
                            {
                              default: he(() => [
                                p.$slots['arrow-left']
                                  ? te(p.$slots, 'arrow-left', { key: 0 })
                                  : O('', !0),
                                p.$slots['arrow-left']
                                  ? O('', !0)
                                  : (c(), q(A(ui), { key: 1 })),
                              ]),
                              _: 3,
                            },
                            8,
                            ['aria-label', 'disabled']
                          ))
                        : O('', !0),
                      E(
                        'div',
                        {
                          class: Z([
                            'dp__month_year_wrap',
                            { dp__year_disable_select: p.disableYearSelect },
                          ]),
                        },
                        [
                          (c(!0),
                          h(
                            ge,
                            null,
                            ke(
                              k.value,
                              (R, _) => (
                                c(),
                                h(
                                  ge,
                                  { key: R.type },
                                  [
                                    E(
                                      'button',
                                      {
                                        ref_for: !0,
                                        ref: (ae) => V(ae, _ + 1),
                                        type: 'button',
                                        class: 'dp__btn dp__month_year_select',
                                        tabindex: '0',
                                        'aria-label': R.ariaLabel,
                                        onClick: R.toggle,
                                        onKeydown: [
                                          Le(De(R.toggle, ['prevent']), [
                                            'enter',
                                          ]),
                                          Le(De(R.toggle, ['prevent']), [
                                            'space',
                                          ]),
                                        ],
                                      },
                                      [
                                        p.$slots[R.type]
                                          ? te(p.$slots, R.type, {
                                              key: 0,
                                              text: R.text,
                                              value: o[R.type],
                                            })
                                          : O('', !0),
                                        p.$slots[R.type]
                                          ? O('', !0)
                                          : (c(),
                                            h(
                                              ge,
                                              { key: 1 },
                                              [He(X(R.text), 1)],
                                              64
                                            )),
                                      ],
                                      40,
                                      Ek
                                    ),
                                    Me(
                                      Ot,
                                      {
                                        name: A(d)(R.showSelectionGrid),
                                        css: A(v),
                                      },
                                      {
                                        default: he(() => [
                                          R.showSelectionGrid
                                            ? (c(),
                                              q(
                                                Qn,
                                                {
                                                  key: 0,
                                                  items: R.items,
                                                  'arrow-navigation':
                                                    p.arrowNavigation,
                                                  'hide-navigation':
                                                    p.hideNavigation,
                                                  'is-last':
                                                    p.autoApply &&
                                                    !A(m).keepActionRow,
                                                  'skip-button-ref': !1,
                                                  config: p.config,
                                                  type: R.type,
                                                  'header-refs': [],
                                                  'esc-close': p.escClose,
                                                  'text-input': p.textInput,
                                                  onSelected:
                                                    R.updateModelValue,
                                                  onToggle: R.toggle,
                                                },
                                                It(
                                                  {
                                                    'button-icon': he(() => [
                                                      p.$slots['calendar-icon']
                                                        ? te(
                                                            p.$slots,
                                                            'calendar-icon',
                                                            { key: 0 }
                                                          )
                                                        : O('', !0),
                                                      p.$slots['calendar-icon']
                                                        ? O('', !0)
                                                        : (c(),
                                                          q(A(pn), { key: 1 })),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  [
                                                    p.$slots[
                                                      `${R.type}-overlay-value`
                                                    ]
                                                      ? {
                                                          name: 'item',
                                                          fn: he(
                                                            ({ item: ae }) => [
                                                              te(
                                                                p.$slots,
                                                                `${R.type}-overlay-value`,
                                                                {
                                                                  text: ae.text,
                                                                  value:
                                                                    ae.value,
                                                                }
                                                              ),
                                                            ]
                                                          ),
                                                          key: '0',
                                                        }
                                                      : void 0,
                                                    p.$slots[
                                                      `${R.type}-overlay`
                                                    ]
                                                      ? {
                                                          name: 'overlay',
                                                          fn: he(() => [
                                                            te(
                                                              p.$slots,
                                                              `${R.type}-overlay`,
                                                              nt(
                                                                wt(
                                                                  W.value(
                                                                    R.type
                                                                  )
                                                                )
                                                              )
                                                            ),
                                                          ]),
                                                          key: '1',
                                                        }
                                                      : void 0,
                                                    p.$slots[
                                                      `${R.type}-overlay-header`
                                                    ]
                                                      ? {
                                                          name: 'header',
                                                          fn: he(() => [
                                                            te(
                                                              p.$slots,
                                                              `${R.type}-overlay-header`,
                                                              {
                                                                toggle:
                                                                  R.toggle,
                                                              }
                                                            ),
                                                          ]),
                                                          key: '2',
                                                        }
                                                      : void 0,
                                                  ]
                                                ),
                                                1032,
                                                [
                                                  'items',
                                                  'arrow-navigation',
                                                  'hide-navigation',
                                                  'is-last',
                                                  'config',
                                                  'type',
                                                  'esc-close',
                                                  'text-input',
                                                  'onSelected',
                                                  'onToggle',
                                                ]
                                              ))
                                            : O('', !0),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ['name', 'css']
                                    ),
                                  ],
                                  64
                                )
                              )
                            ),
                            128
                          )),
                        ],
                        2
                      ),
                      A(w)(A(s), e.instance) && p.vertical
                        ? (c(),
                          q(
                            Ln,
                            {
                              key: 1,
                              'aria-label':
                                (ee = A(r)) == null ? void 0 : ee.prevMonth,
                              disabled: A(S)(!1),
                              onActivate: Y[2] || (Y[2] = (R) => A(y)(!1, !0)),
                            },
                            {
                              default: he(() => [
                                p.$slots['arrow-up']
                                  ? te(p.$slots, 'arrow-up', { key: 0 })
                                  : O('', !0),
                                p.$slots['arrow-up']
                                  ? O('', !0)
                                  : (c(), q(A(mi), { key: 1 })),
                              ]),
                              _: 3,
                            },
                            8,
                            ['aria-label', 'disabled']
                          ))
                        : O('', !0),
                      A(b)(A(s), e.instance)
                        ? (c(),
                          q(
                            Ln,
                            {
                              key: 2,
                              ref: 'rightIcon',
                              disabled: A(S)(!0),
                              'aria-label':
                                (J = A(r)) == null ? void 0 : J.nextMonth,
                              onActivate: Y[3] || (Y[3] = (R) => A(y)(!0, !0)),
                              onSetRef:
                                Y[4] ||
                                (Y[4] = (R) =>
                                  V(R, p.disableYearSelect ? 2 : 3)),
                            },
                            {
                              default: he(() => [
                                p.$slots[
                                  p.vertical ? 'arrow-down' : 'arrow-right'
                                ]
                                  ? te(
                                      p.$slots,
                                      p.vertical ? 'arrow-down' : 'arrow-right',
                                      { key: 0 }
                                    )
                                  : O('', !0),
                                p.$slots[
                                  p.vertical ? 'arrow-down' : 'arrow-right'
                                ]
                                  ? O('', !0)
                                  : (c(),
                                    q(mn(p.vertical ? A(gi) : A(ci)), {
                                      key: 1,
                                    })),
                              ]),
                              _: 3,
                            },
                            8,
                            ['disabled', 'aria-label']
                          ))
                        : O('', !0),
                    ],
                    64
                  )),
            ])
          );
        }
      );
    },
  }),
  Mk = ['aria-label'],
  Ok = { class: 'dp__calendar_header', role: 'row' },
  Lk = { key: 0, class: 'dp__calendar_header_item', role: 'gridcell' },
  Ak = E('div', { class: 'dp__calendar_header_separator' }, null, -1),
  Bk = ['aria-label'],
  xk = { key: 0, role: 'gridcell', class: 'dp__calendar_item dp__week_num' },
  Rk = { class: 'dp__cell_inner' },
  Hk = [
    'id',
    'aria-selected',
    'aria-disabled',
    'aria-label',
    'onClick',
    'onKeydown',
    'onMouseenter',
    'onMouseleave',
  ],
  Nk = re({
    compatConfig: { MODE: 3 },
    __name: 'DpCalendar',
    props: {
      mappedDates: { type: Array, default: () => [] },
      instance: { type: Number, default: 0 },
      month: { type: Number, default: 0 },
      year: { type: Number, default: 0 },
      ...Zt,
    },
    emits: [
      'select-date',
      'set-hover-date',
      'handle-scroll',
      'mount',
      'handle-swipe',
      'handle-space',
      'tooltip-open',
      'tooltip-close',
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        { buildMultiLevelMatrix: i } = Ea(),
        {
          defaultedTransitions: r,
          defaultedConfig: s,
          defaultedAriaLabels: l,
          defaultedMultiCalendars: m,
          defaultedWeekNumbers: g,
        } = vt(o),
        d = M(null),
        v = M({ bottom: '', left: '', transform: '' }),
        f = M([]),
        y = M(null),
        S = M(!0),
        T = M(''),
        w = M({ startX: 0, endX: 0, startY: 0, endY: 0 }),
        b = M([]),
        L = M({ left: '50%' }),
        D = u(() => (o.calendar ? o.calendar(o.mappedDates) : o.mappedDates)),
        P = u(() =>
          o.dayNames
            ? Array.isArray(o.dayNames)
              ? o.dayNames
              : o.dayNames(o.locale, +o.weekStart)
            : d1(o.formatLocale, o.locale, +o.weekStart)
        );
      Oe(() => {
        t('mount', { cmp: 'calendar', refs: f }),
          s.value.noSwipe ||
            (y.value &&
              (y.value.addEventListener('touchstart', I, { passive: !1 }),
              y.value.addEventListener('touchend', U, { passive: !1 }),
              y.value.addEventListener('touchmove', V, { passive: !1 }))),
          o.monthChangeOnScroll &&
            y.value &&
            y.value.addEventListener('wheel', p, { passive: !1 });
      });
      const x = (R) =>
          R
            ? o.vertical
              ? 'vNext'
              : 'next'
            : o.vertical
            ? 'vPrevious'
            : 'previous',
        B = (R, _) => {
          if (o.transitions) {
            const ae = St(ga(ne(), o.month, o.year));
            (T.value = kt(St(ga(ne(), R, _)), ae)
              ? r.value[x(!0)]
              : r.value[x(!1)]),
              (S.value = !1),
              Et(() => {
                S.value = !0;
              });
          }
        },
        K = u(() => ({ [o.calendarClassName]: !!o.calendarClassName })),
        W = u(() => (R) => {
          const _ = g1(R);
          return {
            dp__marker_dot: _.type === 'dot',
            dp__marker_line: _.type === 'line',
          };
        }),
        C = u(() => (R) => We(R, d.value)),
        H = u(() => ({
          dp__calendar: !0,
          dp__calendar_next: m.value.count > 0 && o.instance !== 0,
        })),
        F = u(() => (R) => o.hideOffsetDates ? R.current : !0),
        Q = async (R, _, ae) => {
          var ve, le;
          if (
            (t('set-hover-date', R),
            (le = (ve = R.marker) == null ? void 0 : ve.tooltip) != null &&
              le.length)
          ) {
            const be = ht(f.value[_][ae]);
            if (be) {
              const { width: de, height: z } = be.getBoundingClientRect();
              d.value = R.value;
              let ie = { left: `${de / 2}px` },
                Ee = -50;
              if ((await Et(), b.value[0])) {
                const { left: me, width: Pe } =
                  b.value[0].getBoundingClientRect();
                me < 0 &&
                  ((ie = { left: '0' }),
                  (Ee = 0),
                  (L.value.left = `${de / 2}px`)),
                  window.innerWidth < me + Pe &&
                    ((ie = { right: '0' }),
                    (Ee = 0),
                    (L.value.left = `${Pe - de / 2}px`));
              }
              (v.value = {
                bottom: `${z}px`,
                ...ie,
                transform: `translateX(${Ee}%)`,
              }),
                t('tooltip-open', R.marker);
            }
          }
        },
        N = (R) => {
          d.value &&
            ((d.value = null),
            (v.value = JSON.parse(
              JSON.stringify({ bottom: '', left: '', transform: '' })
            )),
            t('tooltip-close', R.marker));
        },
        I = (R) => {
          (w.value.startX = R.changedTouches[0].screenX),
            (w.value.startY = R.changedTouches[0].screenY);
        },
        U = (R) => {
          (w.value.endX = R.changedTouches[0].screenX),
            (w.value.endY = R.changedTouches[0].screenY),
            j();
        },
        V = (R) => {
          o.vertical && !o.inline && R.preventDefault();
        },
        j = () => {
          const R = o.vertical ? 'Y' : 'X';
          Math.abs(w.value[`start${R}`] - w.value[`end${R}`]) > 10 &&
            t(
              'handle-swipe',
              w.value[`start${R}`] > w.value[`end${R}`] ? 'right' : 'left'
            );
        },
        k = (R, _, ae) => {
          R &&
            (Array.isArray(f.value[_])
              ? (f.value[_][ae] = R)
              : (f.value[_] = [R])),
            o.arrowNavigation && i(f.value, 'calendar');
        },
        p = (R) => {
          o.monthChangeOnScroll && (R.preventDefault(), t('handle-scroll', R));
        },
        Y = (R) =>
          g.value.type === 'local'
            ? k0(R.value, { weekStartsOn: +o.weekStart })
            : g.value.type === 'iso'
            ? y0(R.value)
            : typeof g.value.type == 'function'
            ? g.value.type(R.value)
            : '',
        G = (R) => {
          const _ = R[0];
          return g.value.hideOnOffsetDates
            ? R.some((ae) => ae.current)
              ? Y(_)
              : ''
            : Y(_);
        },
        ee = (R, _) => {
          Pa(R, s.value), t('select-date', _);
        },
        J = (R) => {
          Pa(R, s.value);
        };
      return (
        n({ triggerTransition: B }),
        (R, _) => {
          var ae;
          return (
            c(),
            h(
              'div',
              { class: Z(H.value) },
              [
                E(
                  'div',
                  {
                    ref_key: 'calendarWrapRef',
                    ref: y,
                    role: 'grid',
                    class: Z(K.value),
                    'aria-label':
                      (ae = A(l)) == null ? void 0 : ae.calendarWrap,
                  },
                  [
                    (c(),
                    h(
                      ge,
                      { key: 0 },
                      [
                        E('div', Ok, [
                          R.weekNumbers
                            ? (c(), h('div', Lk, X(R.weekNumName), 1))
                            : O('', !0),
                          (c(!0),
                          h(
                            ge,
                            null,
                            ke(
                              P.value,
                              (ve, le) => (
                                c(),
                                h(
                                  'div',
                                  {
                                    key: le,
                                    class: 'dp__calendar_header_item',
                                    role: 'gridcell',
                                  },
                                  [
                                    R.$slots['calendar-header']
                                      ? te(R.$slots, 'calendar-header', {
                                          key: 0,
                                          day: ve,
                                          index: le,
                                        })
                                      : O('', !0),
                                    R.$slots['calendar-header']
                                      ? O('', !0)
                                      : (c(),
                                        h(ge, { key: 1 }, [He(X(ve), 1)], 64)),
                                  ]
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        Ak,
                        Me(
                          Ot,
                          { name: T.value, css: !!R.transitions },
                          {
                            default: he(() => {
                              var ve;
                              return [
                                S.value
                                  ? (c(),
                                    h(
                                      'div',
                                      {
                                        key: 0,
                                        class: 'dp__calendar',
                                        role: 'rowgroup',
                                        'aria-label':
                                          ((ve = A(l)) == null
                                            ? void 0
                                            : ve.calendarDays) || void 0,
                                      },
                                      [
                                        (c(!0),
                                        h(
                                          ge,
                                          null,
                                          ke(
                                            D.value,
                                            (le, be) => (
                                              c(),
                                              h(
                                                'div',
                                                {
                                                  key: be,
                                                  class: 'dp__calendar_row',
                                                  role: 'row',
                                                },
                                                [
                                                  R.weekNumbers
                                                    ? (c(),
                                                      h('div', xk, [
                                                        E(
                                                          'div',
                                                          Rk,
                                                          X(G(le.days)),
                                                          1
                                                        ),
                                                      ]))
                                                    : O('', !0),
                                                  (c(!0),
                                                  h(
                                                    ge,
                                                    null,
                                                    ke(le.days, (de, z) => {
                                                      var ie, Ee, me;
                                                      return (
                                                        c(),
                                                        h(
                                                          'div',
                                                          {
                                                            id: de.value
                                                              .toISOString()
                                                              .split('T')[0],
                                                            ref_for: !0,
                                                            ref: (Pe) =>
                                                              k(Pe, be, z),
                                                            key: z + be,
                                                            role: 'gridcell',
                                                            class:
                                                              'dp__calendar_item',
                                                            'aria-selected':
                                                              de.classData
                                                                .dp__active_date ||
                                                              de.classData
                                                                .dp__range_start ||
                                                              de.classData
                                                                .dp__range_start,
                                                            'aria-disabled':
                                                              de.classData
                                                                .dp__cell_disabled ||
                                                              void 0,
                                                            'aria-label':
                                                              (Ee =
                                                                (ie = A(l)) ==
                                                                null
                                                                  ? void 0
                                                                  : ie.day) ==
                                                              null
                                                                ? void 0
                                                                : Ee.call(
                                                                    ie,
                                                                    de
                                                                  ),
                                                            tabindex: '0',
                                                            onClick: De(
                                                              (Pe) =>
                                                                ee(Pe, de),
                                                              ['prevent']
                                                            ),
                                                            onKeydown: [
                                                              Le(
                                                                (Pe) =>
                                                                  R.$emit(
                                                                    'select-date',
                                                                    de
                                                                  ),
                                                                ['enter']
                                                              ),
                                                              Le(
                                                                (Pe) =>
                                                                  R.$emit(
                                                                    'handle-space',
                                                                    de
                                                                  ),
                                                                ['space']
                                                              ),
                                                            ],
                                                            onMouseenter: (
                                                              Pe
                                                            ) => Q(de, be, z),
                                                            onMouseleave: (
                                                              Pe
                                                            ) => N(de),
                                                          },
                                                          [
                                                            E(
                                                              'div',
                                                              {
                                                                class: Z([
                                                                  'dp__cell_inner',
                                                                  de.classData,
                                                                ]),
                                                              },
                                                              [
                                                                R.$slots.day &&
                                                                F.value(de)
                                                                  ? te(
                                                                      R.$slots,
                                                                      'day',
                                                                      {
                                                                        key: 0,
                                                                        day: +de.text,
                                                                        date: de.value,
                                                                      }
                                                                    )
                                                                  : O('', !0),
                                                                R.$slots.day
                                                                  ? O('', !0)
                                                                  : (c(),
                                                                    h(
                                                                      ge,
                                                                      {
                                                                        key: 1,
                                                                      },
                                                                      [
                                                                        He(
                                                                          X(
                                                                            de.text
                                                                          ),
                                                                          1
                                                                        ),
                                                                      ],
                                                                      64
                                                                    )),
                                                                de.marker &&
                                                                F.value(de)
                                                                  ? (c(),
                                                                    h(
                                                                      ge,
                                                                      {
                                                                        key: 2,
                                                                      },
                                                                      [
                                                                        R.$slots
                                                                          .marker
                                                                          ? te(
                                                                              R.$slots,
                                                                              'marker',
                                                                              {
                                                                                key: 0,
                                                                                marker:
                                                                                  de.marker,
                                                                                day: +de.text,
                                                                                date: de.value,
                                                                              }
                                                                            )
                                                                          : (c(),
                                                                            h(
                                                                              'div',
                                                                              {
                                                                                key: 1,
                                                                                class:
                                                                                  Z(
                                                                                    W.value(
                                                                                      de.marker
                                                                                    )
                                                                                  ),
                                                                                style:
                                                                                  Ae(
                                                                                    de
                                                                                      .marker
                                                                                      .color
                                                                                      ? {
                                                                                          backgroundColor:
                                                                                            de
                                                                                              .marker
                                                                                              .color,
                                                                                        }
                                                                                      : {}
                                                                                  ),
                                                                              },
                                                                              null,
                                                                              6
                                                                            )),
                                                                      ],
                                                                      64
                                                                    ))
                                                                  : O('', !0),
                                                                C.value(
                                                                  de.value
                                                                )
                                                                  ? (c(),
                                                                    h(
                                                                      'div',
                                                                      {
                                                                        key: 3,
                                                                        ref_for:
                                                                          !0,
                                                                        ref_key:
                                                                          'activeTooltip',
                                                                        ref: b,
                                                                        class:
                                                                          'dp__marker_tooltip',
                                                                        style:
                                                                          Ae(
                                                                            v.value
                                                                          ),
                                                                      },
                                                                      [
                                                                        (me =
                                                                          de.marker) !=
                                                                          null &&
                                                                        me.tooltip
                                                                          ? (c(),
                                                                            h(
                                                                              'div',
                                                                              {
                                                                                key: 0,
                                                                                class:
                                                                                  'dp__tooltip_content',
                                                                                onClick:
                                                                                  J,
                                                                              },
                                                                              [
                                                                                (c(
                                                                                  !0
                                                                                ),
                                                                                h(
                                                                                  ge,
                                                                                  null,
                                                                                  ke(
                                                                                    de
                                                                                      .marker
                                                                                      .tooltip,
                                                                                    (
                                                                                      Pe,
                                                                                      ze
                                                                                    ) => (
                                                                                      c(),
                                                                                      h(
                                                                                        'div',
                                                                                        {
                                                                                          key: ze,
                                                                                          class:
                                                                                            'dp__tooltip_text',
                                                                                        },
                                                                                        [
                                                                                          R
                                                                                            .$slots[
                                                                                            'marker-tooltip'
                                                                                          ]
                                                                                            ? te(
                                                                                                R.$slots,
                                                                                                'marker-tooltip',
                                                                                                {
                                                                                                  key: 0,
                                                                                                  tooltip:
                                                                                                    Pe,
                                                                                                  day: de.value,
                                                                                                }
                                                                                              )
                                                                                            : O(
                                                                                                '',
                                                                                                !0
                                                                                              ),
                                                                                          R
                                                                                            .$slots[
                                                                                            'marker-tooltip'
                                                                                          ]
                                                                                            ? O(
                                                                                                '',
                                                                                                !0
                                                                                              )
                                                                                            : (c(),
                                                                                              h(
                                                                                                ge,
                                                                                                {
                                                                                                  key: 1,
                                                                                                },
                                                                                                [
                                                                                                  E(
                                                                                                    'div',
                                                                                                    {
                                                                                                      class:
                                                                                                        'dp__tooltip_mark',
                                                                                                      style:
                                                                                                        Ae(
                                                                                                          Pe.color
                                                                                                            ? {
                                                                                                                backgroundColor:
                                                                                                                  Pe.color,
                                                                                                              }
                                                                                                            : {}
                                                                                                        ),
                                                                                                    },
                                                                                                    null,
                                                                                                    4
                                                                                                  ),
                                                                                                  E(
                                                                                                    'div',
                                                                                                    null,
                                                                                                    X(
                                                                                                      Pe.text
                                                                                                    ),
                                                                                                    1
                                                                                                  ),
                                                                                                ],
                                                                                                64
                                                                                              )),
                                                                                        ]
                                                                                      )
                                                                                    )
                                                                                  ),
                                                                                  128
                                                                                )),
                                                                                E(
                                                                                  'div',
                                                                                  {
                                                                                    class:
                                                                                      'dp__arrow_bottom_tp',
                                                                                    style:
                                                                                      Ae(
                                                                                        L.value
                                                                                      ),
                                                                                  },
                                                                                  null,
                                                                                  4
                                                                                ),
                                                                              ]
                                                                            ))
                                                                          : O(
                                                                              '',
                                                                              !0
                                                                            ),
                                                                      ],
                                                                      4
                                                                    ))
                                                                  : O('', !0),
                                                              ],
                                                              2
                                                            ),
                                                          ],
                                                          40,
                                                          Hk
                                                        )
                                                      );
                                                    }),
                                                    128
                                                  )),
                                                ]
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ],
                                      8,
                                      Bk
                                    ))
                                  : O('', !0),
                              ];
                            }),
                            _: 3,
                          },
                          8,
                          ['name', 'css']
                        ),
                      ],
                      64
                    )),
                  ],
                  10,
                  Mk
                ),
              ],
              2
            )
          );
        }
      );
    },
  }),
  Js = (e) => Array.isArray(e),
  $k = (e, n, a, t) => {
    const o = M([]),
      { modelValue: i, calendars: r, time: s } = Kn(e, n),
      { defaultedMultiCalendars: l, defaultedStartTime: m } = vt(e),
      {
        validateMonthYearInRange: g,
        isDisabled: d,
        isDateRangeAllowed: v,
        checkMinMaxRange: f,
      } = Fa(e),
      {
        updateTimeValues: y,
        getSetDateTime: S,
        setTime: T,
        assignStartTime: w,
        validateTime: b,
        disabledTimesConfig: L,
      } = Au(e, s, i, t),
      D = u(() => ($) => r.value[$] ? r.value[$].month : 0),
      P = u(() => ($) => r.value[$] ? r.value[$].year : 0),
      x = ($, se, Te) => {
        var xe, Qe;
        r.value[$] || (r.value[$] = { month: 0, year: 0 }),
          (r.value[$].month = zs(se)
            ? (xe = r.value[$]) == null
              ? void 0
              : xe.month
            : se),
          (r.value[$].year = zs(Te)
            ? (Qe = r.value[$]) == null
              ? void 0
              : Qe.year
            : Te);
      },
      B = () => {
        e.autoApply && n('select-date');
      };
    Re(i, ($, se) => {
      JSON.stringify($) !== JSON.stringify(se) && C();
    }),
      Oe(() => {
        e.shadow ||
          (i.value || (p(), m.value && w(m.value)),
          C(!0),
          e.focusStartDate && e.startDate && p());
      });
    const K = u(() => {
        var $;
        return ($ = e.flow) != null && $.length && !e.partialFlow
          ? e.flowStep === e.flow.length
          : !0;
      }),
      W = () => {
        e.autoApply && K.value && n('auto-apply', e.partialFlow);
      },
      C = ($ = !1) => {
        if (i.value)
          return Array.isArray(i.value)
            ? ((o.value = i.value), U($))
            : F(i.value, $);
        if (l.value.count && $ && !e.startDate) return H(ne(), $);
      },
      H = ($, se = !1) => {
        if (
          ((!l.value.count || !l.value.static || se) && x(0, Ue($), Ne($)),
          l.value.count && (!l.value.solo || !i.value))
        )
          for (let Te = 1; Te < l.value.count; Te++) {
            const xe = at(ne(), {
                month: D.value(Te - 1),
                year: P.value(Te - 1),
              }),
              Qe = Gl(xe, { months: 1 });
            r.value[Te] = { month: Ue(Qe), year: Ne(Qe) };
          }
      },
      F = ($, se) => {
        H($),
          T('hours', jt($)),
          T('minutes', ia($)),
          T('seconds', ln($)),
          l.value.count && se && k();
      },
      Q = ($) => {
        if (l.value.count) {
          if (l.value.solo) return 0;
          const se = Ue($[0]),
            Te = Ue($[1]);
          return Math.abs(Te - se) < l.value.count ? 0 : 1;
        }
        return 1;
      },
      N = ($, se) => {
        $[1] && e.showLastInRange ? H($[Q($)], se) : H($[0], se);
        const Te = (xe, Qe) => [xe($[0]), $[1] ? xe($[1]) : s[Qe][1]];
        T('hours', Te(jt, 'hours')),
          T('minutes', Te(ia, 'minutes')),
          T('seconds', Te(ln, 'seconds'));
      },
      I = ($, se) => {
        if ((e.range || e.weekPicker) && !e.multiDates) return N($, se);
        if (e.multiDates && se) {
          const Te = $[$.length - 1];
          return F(Te, se);
        }
      },
      U = ($) => {
        const se = i.value;
        I(se, $), l.value.count && l.value.solo && k();
      },
      V = ($, se) => {
        const Te = at(ne(), { month: D.value(se), year: P.value(se) }),
          xe = $ < 0 ? Gt(Te, 1) : un(Te, 1);
        g(Ue(xe), Ne(xe), $ < 0, e.preventMinMaxNavigation) &&
          (x(se, Ue(xe), Ne(xe)),
          n('update-month-year', { instance: se, month: Ue(xe), year: Ne(xe) }),
          l.value.count && !l.value.solo && j(se),
          a());
      },
      j = ($) => {
        for (let se = $ - 1; se >= 0; se--) {
          const Te = un(
            at(ne(), { month: D.value(se + 1), year: P.value(se + 1) }),
            1
          );
          x(se, Ue(Te), Ne(Te));
        }
        for (let se = $ + 1; se <= l.value.count - 1; se++) {
          const Te = Gt(
            at(ne(), { month: D.value(se - 1), year: P.value(se - 1) }),
            1
          );
          x(se, Ue(Te), Ne(Te));
        }
      },
      k = () => {
        if (Array.isArray(i.value) && i.value.length === 2) {
          const $ = ne(ne(i.value[1] ? i.value[1] : Gt(i.value[0], 1))),
            [se, Te] = [Ue(i.value[0]), Ne(i.value[0])],
            [xe, Qe] = [Ue(i.value[1]), Ne(i.value[1])];
          (se !== xe || (se === xe && Te !== Qe)) &&
            l.value.solo &&
            x(1, Ue($), Ne($));
        } else
          i.value &&
            !Array.isArray(i.value) &&
            (x(0, Ue(i.value), Ne(i.value)), H(ne()));
      },
      p = () => {
        e.startDate &&
          (x(0, Ue(ne(e.startDate)), Ne(ne(e.startDate))),
          l.value.count && j(0));
      },
      Y = y1(($, se) => {
        e.monthChangeOnScroll &&
          V(e.monthChangeOnScroll !== 'inverse' ? -$.deltaY : $.deltaY, se);
      }, 50),
      G = ($, se, Te = !1) => {
        e.monthChangeOnArrows && e.vertical === Te && ee($, se);
      },
      ee = ($, se) => {
        V($ === 'right' ? -1 : 1, se);
      },
      J = ($) =>
        e.markers.find((se) => We(w1($.value), zt(ne(se.date), e.timezone))),
      R = ($, se) => {
        switch (e.sixWeeks === !0 ? 'append' : e.sixWeeks) {
          case 'prepend':
            return [!0, !1];
          case 'center':
            return [$ == 0, !0];
          case 'fair':
            return [$ == 0 || se > $, !0];
          case 'append':
            return [!1, !1];
          default:
            return [!1, !1];
        }
      },
      _ = ($, se, Te, xe) => {
        if (e.sixWeeks && $.length < 6) {
          const Qe = 6 - $.length,
            _e = (se.getDay() + 7 - xe) % 7,
            Je = 6 - ((Te.getDay() + 7 - xe) % 7),
            [ce, Ce] = R(_e, Je);
          for (let we = 1; we <= Qe; we++)
            if (Ce ? !!(we % 2) == ce : ce) {
              const pt = $[0].days[0],
                Dt = ae(ma(pt.value, -7), Ue(se));
              $.unshift({ days: Dt });
            } else {
              const pt = $[$.length - 1],
                Dt = pt.days[pt.days.length - 1],
                Wa = ae(ma(Dt.value, 1), Ue(se));
              $.push({ days: Wa });
            }
        }
        return $;
      },
      ae = ($, se) => {
        const Te = ne($),
          xe = [];
        for (let Qe = 0; Qe < 7; Qe++) {
          const _e = ma(Te, Qe),
            Je = Ue(_e) !== se;
          xe.push({
            text: e.hideOffsetDates && Je ? '' : _e.getDate(),
            value: _e,
            current: !Je,
            classData: {},
          });
        }
        return xe;
      },
      ve = ($, se) => {
        const Te = [],
          xe = new Date(se, $),
          Qe = new Date(se, $ + 1, 0),
          _e = e.weekStart,
          Je = $a(xe, { weekStartsOn: _e }),
          ce = (Ce) => {
            const we = ae(Ce, $);
            if (
              (Te.push({ days: we }),
              !Te[Te.length - 1].days.some((pt) => We(St(pt.value), St(Qe))))
            ) {
              const pt = ma(Ce, 7);
              ce(pt);
            }
          };
        return ce(Je), _(Te, xe, Qe, _e);
      },
      le = ($) => (
        (i.value = ro(ne($.value), e.timezone, e.weekStart)),
        n('date-update', $.value),
        W()
      ),
      be = ($) => {
        const se = Ia(ne($.value), s.hours, s.minutes, ot());
        n('date-update', se),
          e.multiDates ? bi(se, i, e.multiDatesLimit) : (i.value = se),
          t(),
          Et().then(() => {
            W();
          });
      },
      de = ($) =>
        e.noDisabledRange ? Su(o.value[0], $).some((se) => d(se)) : !1,
      z = () => {
        (o.value = i.value ? i.value.slice() : []),
          o.value.length === 2 &&
            !(e.fixedStart || e.fixedEnd) &&
            (o.value = []);
      },
      ie = ($, se) => {
        const Te = [ne($.value), ma(ne($.value), +e.autoRange)];
        v(Te)
          ? (se && Ee($.value), (o.value = Te))
          : n('invalid-date', $.value);
      },
      Ee = ($) => {
        const se = Ue(ne($)),
          Te = Ne(ne($));
        if ((x(0, se, Te), l.value.count > 0))
          for (let xe = 1; xe < l.value.count; xe++) {
            const Qe = k1(
              at(ne($), { year: D.value(xe - 1), month: P.value(xe - 1) })
            );
            x(xe, Qe.month, Qe.year);
          }
      },
      me = ($) =>
        Array.isArray(i.value) && i.value.length === 2
          ? e.fixedStart && (kt($, i.value[0]) || We($, i.value[0]))
            ? [i.value[0], $]
            : e.fixedEnd && (bt($, i.value[1]) || We($, i.value[1]))
            ? [$, i.value[1]]
            : (n('invalid-fixed-range', $), i.value)
          : [],
      Pe = ($) => {
        if (de($.value) || !f($.value, i.value, e.fixedStart ? 0 : 1))
          return n('invalid-date', $.value);
        o.value = me(ne($.value));
      },
      ze = ($, se) => {
        if ((z(), e.autoRange)) return ie($, se);
        if (e.fixedStart || e.fixedEnd) return Pe($);
        o.value[0]
          ? f(ne($.value), i.value) && !de($.value)
            ? bt(ne($.value), ne(o.value[0]))
              ? (o.value.unshift(ne($.value)), n('range-end', o.value[0]))
              : ((o.value[1] = ne($.value)), n('range-end', o.value[1]))
            : (e.autoApply && n('auto-apply-invalid', $.value),
              n('invalid-date', $.value))
          : ((o.value[0] = ne($.value)), n('range-start', o.value[0]));
      },
      ot = ($ = !0) =>
        e.enableSeconds
          ? Array.isArray(s.seconds)
            ? $
              ? s.seconds[0]
              : s.seconds[1]
            : s.seconds
          : 0,
      lt = ($) => {
        o.value[$] = Ia(o.value[$], s.hours[$], s.minutes[$], ot($ !== 1));
      },
      Lt = () => {
        var $, se;
        o.value[0] &&
          o.value[1] &&
          +(($ = o.value) == null ? void 0 : $[0]) >
            +((se = o.value) == null ? void 0 : se[1]) &&
          (o.value.reverse(),
          n('range-start', o.value[0]),
          n('range-end', o.value[1]));
      },
      _t = () => {
        o.value.length &&
          (o.value[0] && !o.value[1] ? lt(0) : (lt(0), lt(1), t()),
          Lt(),
          (i.value = o.value.slice()),
          Io(o.value, n, e.autoApply, e.modelAuto));
      },
      ua = ($, se = !1) => {
        if (d($.value) || (!$.current && e.hideOffsetDates))
          return n('invalid-date', $.value);
        if (e.weekPicker) return le($);
        if (!e.range) return be($);
        Js(s.hours) && Js(s.minutes) && !e.multiDates && (ze($, se), _t());
      },
      Xt = ($, se) => {
        var Te;
        x($, se.month, se.year),
          l.value.count && !l.value.solo && j($),
          n('update-month-year', {
            instance: $,
            month: se.month,
            year: se.year,
          }),
          a(l.value.solo ? $ : void 0);
        const xe =
          (Te = e.flow) != null && Te.length ? e.flow[e.flowStep] : void 0;
        !se.fromNav && (xe === ea.month || xe === ea.year) && t();
      },
      Ze = ($, se) => {
        Mu({
          value: $,
          modelValue: i,
          range: e.range,
          timezone: se ? void 0 : e.timezone,
        }),
          B(),
          e.multiCalendars && Et().then(() => C(!0));
      },
      ca = () => {
        e.range
          ? i.value && Array.isArray(i.value) && i.value[0]
            ? (i.value = bt(ne(), i.value[0])
                ? [ne(), i.value[0]]
                : [i.value[0], ne()])
            : (i.value = [ne()])
          : (i.value = ne()),
          B();
      },
      ya = () => {
        if (Array.isArray(i.value))
          if (e.multiDates) {
            const $ = Jt();
            i.value[i.value.length - 1] = S($);
          } else i.value = i.value.map(($, se) => $ && S($, se));
        else i.value = S(i.value);
        n('time-update');
      },
      Jt = () =>
        Array.isArray(i.value) && i.value.length
          ? i.value[i.value.length - 1]
          : null;
    return {
      calendars: r,
      modelValue: i,
      month: D,
      year: P,
      time: s,
      disabledTimesConfig: L,
      validateTime: b,
      getCalendarDays: ve,
      getMarker: J,
      handleScroll: Y,
      handleSwipe: ee,
      handleArrow: G,
      selectDate: ua,
      updateMonthYear: Xt,
      presetDate: Ze,
      selectCurrentDate: ca,
      updateTime: ($, se = !0, Te = !1) => {
        y($, se, Te, ya);
      },
    };
  },
  Vk = { key: 0 },
  Uk = re({
    __name: 'DatePicker',
    props: { ...Zt },
    emits: [
      'tooltip-open',
      'tooltip-close',
      'mount',
      'update:internal-model-value',
      'update-flow-step',
      'reset-flow',
      'auto-apply',
      'focus-menu',
      'select-date',
      'range-start',
      'range-end',
      'invalid-fixed-range',
      'time-update',
      'am-pm-change',
      'time-picker-open',
      'time-picker-close',
      'recalculate-position',
      'update-month-year',
      'auto-apply-invalid',
      'date-update',
      'invalid-date',
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        {
          calendars: i,
          month: r,
          year: s,
          modelValue: l,
          time: m,
          disabledTimesConfig: g,
          validateTime: d,
          getCalendarDays: v,
          getMarker: f,
          handleArrow: y,
          handleScroll: S,
          handleSwipe: T,
          selectDate: w,
          updateMonthYear: b,
          presetDate: L,
          selectCurrentDate: D,
          updateTime: P,
        } = $k(o, t, k, p),
        x = Ua(),
        { setHoverDate: B, getDayClassData: K, clearHoverDate: W } = F1(l, o),
        { defaultedMultiCalendars: C } = vt(o),
        H = M([]),
        F = M([]),
        Q = M(null),
        N = At(x, 'calendar'),
        I = At(x, 'monthYear'),
        U = At(x, 'timePicker'),
        V = (G) => {
          o.shadow || t('mount', G);
        };
      Re(
        i,
        () => {
          o.shadow ||
            setTimeout(() => {
              t('recalculate-position');
            }, 0);
        },
        { deep: !0 }
      );
      const j = u(
        () => (G) =>
          v(r.value(G), s.value(G)).map((ee) => ({
            ...ee,
            days: ee.days.map(
              (J) => ((J.marker = f(J)), (J.classData = K(J)), J)
            ),
          }))
      );
      function k(G) {
        var ee;
        G || G === 0
          ? (ee = F.value[G]) == null ||
            ee.triggerTransition(r.value(G), s.value(G))
          : F.value.forEach((J, R) =>
              J.triggerTransition(r.value(R), s.value(R))
            );
      }
      function p() {
        t('update-flow-step');
      }
      const Y = (G, ee = !1) => {
        w(G, ee), o.spaceConfirm && t('select-date');
      };
      return (
        n({
          clearHoverDate: W,
          presetDate: L,
          selectCurrentDate: D,
          toggleMonthPicker: (G, ee, J = 0) => {
            var R;
            (R = H.value[J]) == null || R.toggleMonthPicker(G, ee);
          },
          toggleYearPicker: (G, ee, J = 0) => {
            var R;
            (R = H.value[J]) == null || R.toggleYearPicker(G, ee);
          },
          toggleTimePicker: (G, ee, J) => {
            var R;
            (R = Q.value) == null || R.toggleTimePicker(G, ee, J);
          },
          handleArrow: y,
          updateMonthYear: b,
          getSidebarProps: () => ({
            modelValue: l,
            month: r,
            year: s,
            time: m,
            updateTime: P,
            updateMonthYear: b,
            selectDate: w,
            presetDate: L,
          }),
        }),
        (G, ee) => (
          c(),
          h(
            ge,
            null,
            [
              Me(
                Po,
                { 'multi-calendars': A(C).count },
                {
                  default: he(({ instance: J, index: R }) => [
                    G.disableMonthYearSelect
                      ? O('', !0)
                      : (c(),
                        q(
                          Dk,
                          Ge(
                            {
                              key: 0,
                              ref: (_) => {
                                _ && (H.value[R] = _);
                              },
                              months: A(yu)(
                                G.formatLocale,
                                G.locale,
                                G.monthNameFormat
                              ),
                              years: A(fi)(G.yearRange, G.reverseYears),
                              month: A(r)(J),
                              year: A(s)(J),
                              instance: J,
                            },
                            G.$props,
                            {
                              onMount:
                                ee[0] || (ee[0] = (_) => V(A(Ha).header)),
                              onResetFlow:
                                ee[1] || (ee[1] = (_) => G.$emit('reset-flow')),
                              onUpdateMonthYear: (_) => A(b)(J, _),
                              onOverlayClosed:
                                ee[2] || (ee[2] = (_) => G.$emit('focus-menu')),
                            }
                          ),
                          It({ _: 2 }, [
                            ke(A(I), (_, ae) => ({
                              name: _,
                              fn: he((ve) => [te(G.$slots, _, nt(wt(ve)))]),
                            })),
                          ]),
                          1040,
                          [
                            'months',
                            'years',
                            'month',
                            'year',
                            'instance',
                            'onUpdateMonthYear',
                          ]
                        )),
                    Me(
                      Nk,
                      Ge(
                        {
                          ref: (_) => {
                            _ && (F.value[R] = _);
                          },
                          'mapped-dates': j.value(J),
                          month: A(r)(J),
                          year: A(s)(J),
                          instance: J,
                        },
                        G.$props,
                        {
                          onSelectDate: (_) => A(w)(_, J !== 1),
                          onHandleSpace: (_) => Y(_, J !== 1),
                          onSetHoverDate: ee[3] || (ee[3] = (_) => A(B)(_)),
                          onHandleScroll: (_) => A(S)(_, J),
                          onHandleSwipe: (_) => A(T)(_, J),
                          onMount: ee[4] || (ee[4] = (_) => V(A(Ha).calendar)),
                          onResetFlow:
                            ee[5] || (ee[5] = (_) => G.$emit('reset-flow')),
                          onTooltipOpen:
                            ee[6] ||
                            (ee[6] = (_) => G.$emit('tooltip-open', _)),
                          onTooltipClose:
                            ee[7] ||
                            (ee[7] = (_) => G.$emit('tooltip-close', _)),
                        }
                      ),
                      It({ _: 2 }, [
                        ke(A(N), (_, ae) => ({
                          name: _,
                          fn: he((ve) => [te(G.$slots, _, nt(wt({ ...ve })))]),
                        })),
                      ]),
                      1040,
                      [
                        'mapped-dates',
                        'month',
                        'year',
                        'instance',
                        'onSelectDate',
                        'onHandleSpace',
                        'onHandleScroll',
                        'onHandleSwipe',
                      ]
                    ),
                  ]),
                  _: 3,
                },
                8,
                ['multi-calendars']
              ),
              G.enableTimePicker
                ? (c(),
                  h('div', Vk, [
                    G.$slots['time-picker']
                      ? te(
                          G.$slots,
                          'time-picker',
                          nt(Ge({ key: 0 }, { time: A(m), updateTime: A(P) }))
                        )
                      : (c(),
                        q(
                          Lu,
                          Ge(
                            { key: 1, ref_key: 'timePickerRef', ref: Q },
                            G.$props,
                            {
                              hours: A(m).hours,
                              minutes: A(m).minutes,
                              seconds: A(m).seconds,
                              'internal-model-value': G.internalModelValue,
                              'disabled-times-config': A(g),
                              'validate-time': A(d),
                              onMount:
                                ee[8] || (ee[8] = (J) => V(A(Ha).timePicker)),
                              'onUpdate:hours':
                                ee[9] || (ee[9] = (J) => A(P)(J)),
                              'onUpdate:minutes':
                                ee[10] || (ee[10] = (J) => A(P)(J, !1)),
                              'onUpdate:seconds':
                                ee[11] || (ee[11] = (J) => A(P)(J, !1, !0)),
                              onResetFlow:
                                ee[12] ||
                                (ee[12] = (J) => G.$emit('reset-flow')),
                              onOverlayClosed:
                                ee[13] ||
                                (ee[13] = (J) => G.$emit('time-picker-close')),
                              onOverlayOpened:
                                ee[14] ||
                                (ee[14] = (J) =>
                                  G.$emit('time-picker-open', J)),
                              onAmPmChange:
                                ee[15] ||
                                (ee[15] = (J) => G.$emit('am-pm-change', J)),
                            }
                          ),
                          It({ _: 2 }, [
                            ke(A(U), (J, R) => ({
                              name: J,
                              fn: he((_) => [te(G.$slots, J, nt(wt(_)))]),
                            })),
                          ]),
                          1040,
                          [
                            'hours',
                            'minutes',
                            'seconds',
                            'internal-model-value',
                            'disabled-times-config',
                            'validate-time',
                          ]
                        )),
                  ]))
                : O('', !0),
            ],
            64
          )
        )
      );
    },
  }),
  Yk = (e, n) => {
    const a = M(),
      {
        defaultedMultiCalendars: t,
        defaultedConfig: o,
        defaultedHighlight: i,
      } = vt(e),
      { modelValue: r, year: s, month: l, calendars: m } = Kn(e, n),
      { isDisabled: g } = Fa(e),
      {
        selectYear: d,
        groupedYears: v,
        showYearPicker: f,
        isDisabled: y,
        toggleYearPicker: S,
        handleYearSelect: T,
        handleYear: w,
      } = Ou({
        modelValue: r,
        multiCalendars: t,
        highlight: i,
        calendars: m,
        month: l,
        year: s,
        props: e,
        emit: n,
      }),
      b = (W, C) =>
        [W, C].map((H) => Ca(H, 'MMMM', { locale: e.formatLocale })).join('-'),
      L = u(
        () => (W) =>
          r.value
            ? Array.isArray(r.value)
              ? r.value.some((C) => Hs(W, C))
              : Hs(r.value, W)
            : !1
      ),
      D = (W) => {
        if (e.range) {
          if (Array.isArray(r.value)) {
            const C = We(W, r.value[0]) || We(W, r.value[1]);
            return So(r.value, a.value, W) && !C;
          }
          return !1;
        }
        return !1;
      },
      P = u(() => (W) => {
        const C = at(new Date(), { year: s.value(W) });
        return h_({ start: y_(C), end: f_(C) }).map((H) => {
          const F = Un(H),
            Q = Os(H),
            N = g(H),
            I = D(F),
            U =
              typeof i.value == 'function'
                ? i.value({ quarter: Ms(F), year: Ne(F) })
                : !!i.value.quarters.find(
                    (V) => V.quarter === Ms(F) && V.year === Ne(F)
                  );
          return {
            text: b(F, Q),
            value: F,
            active: L.value(F),
            highlighted: U,
            disabled: N,
            isBetween: I,
          };
        });
      }),
      x = (W) => {
        bi(W, r, e.multiDatesLimit), n('auto-apply', !0);
      },
      B = (W) => {
        const C = _i(r, W, n);
        Io(C, n, e.autoApply, e.modelAuto);
      },
      K = (W) => {
        (r.value = W), n('auto-apply');
      };
    return {
      defaultedConfig: o,
      defaultedMultiCalendars: t,
      groupedYears: v,
      year: s,
      isDisabled: y,
      quarters: P,
      showYearPicker: f,
      modelValue: r,
      setHoverDate: (W) => {
        a.value = W;
      },
      selectYear: d,
      selectQuarter: (W, C, H) => {
        if (!H)
          return (
            (m.value[C].month = Ue(Os(W))),
            e.multiDates ? x(W) : e.range ? B(W) : K(W)
          );
      },
      toggleYearPicker: S,
      handleYearSelect: T,
      handleYear: w,
    };
  },
  Fk = { class: 'dp--quarter-items' },
  Wk = ['disabled', 'onClick', 'onMouseover'],
  qk = re({
    compatConfig: { MODE: 3 },
    __name: 'QuarterPicker',
    props: { ...Zt },
    emits: [
      'update:internal-model-value',
      'reset-flow',
      'overlay-closed',
      'auto-apply',
      'range-start',
      'range-end',
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        i = Ua(),
        r = At(i, 'yearMode'),
        {
          defaultedMultiCalendars: s,
          defaultedConfig: l,
          groupedYears: m,
          year: g,
          isDisabled: d,
          quarters: v,
          modelValue: f,
          showYearPicker: y,
          setHoverDate: S,
          selectQuarter: T,
          toggleYearPicker: w,
          handleYearSelect: b,
          handleYear: L,
        } = Yk(o, t);
      return (
        n({
          getSidebarProps: () => ({
            modelValue: f,
            year: g,
            selectQuarter: T,
            handleYearSelect: b,
            handleYear: L,
          }),
        }),
        (D, P) => (
          c(),
          q(
            Po,
            { 'multi-calendars': A(s).count, stretch: '' },
            {
              default: he(({ instance: x }) => [
                E(
                  'div',
                  {
                    class: 'dp-quarter-picker-wrap',
                    style: Ae({ minHeight: `${A(l).modeHeight}px` }),
                  },
                  [
                    E('div', null, [
                      Me(
                        Du,
                        Ge(D.$props, {
                          items: A(m)(x),
                          instance: x,
                          'show-year-picker': A(y)[x],
                          year: A(g)(x),
                          'is-disabled': (B) => A(d)(x, B),
                          onHandleYear: (B) => A(L)(x, B),
                          onYearSelect: (B) => A(b)(B, x),
                          onToggleYearPicker: (B) => A(w)(x, B?.flow, B?.show),
                        }),
                        It({ _: 2 }, [
                          ke(A(r), (B, K) => ({
                            name: B,
                            fn: he((W) => [te(D.$slots, B, nt(wt(W)))]),
                          })),
                        ]),
                        1040,
                        [
                          'items',
                          'instance',
                          'show-year-picker',
                          'year',
                          'is-disabled',
                          'onHandleYear',
                          'onYearSelect',
                          'onToggleYearPicker',
                        ]
                      ),
                    ]),
                    E('div', Fk, [
                      (c(!0),
                      h(
                        ge,
                        null,
                        ke(
                          A(v)(x),
                          (B, K) => (
                            c(),
                            h('div', { key: K }, [
                              E(
                                'button',
                                {
                                  type: 'button',
                                  class: Z([
                                    'dp--qr-btn',
                                    {
                                      'dp--qr-btn-active': B.active,
                                      'dp--qr-btn-between': B.isBetween,
                                      'dp--qr-btn-disabled': B.disabled,
                                      'dp--highlighted': B.highlighted,
                                    },
                                  ]),
                                  disabled: B.disabled,
                                  onClick: (W) => A(T)(B.value, x, B.disabled),
                                  onMouseover: (W) => A(S)(B.value),
                                },
                                [
                                  D.$slots.quarter
                                    ? te(D.$slots, 'quarter', {
                                        key: 0,
                                        value: B.value,
                                        text: B.text,
                                      })
                                    : (c(),
                                      h(
                                        ge,
                                        { key: 1 },
                                        [He(X(B.text), 1)],
                                        64
                                      )),
                                ],
                                42,
                                Wk
                              ),
                            ])
                          )
                        ),
                        128
                      )),
                    ]),
                  ],
                  4
                ),
              ]),
              _: 3,
            },
            8,
            ['multi-calendars']
          )
        )
      );
    },
  }),
  Gk = ['id'],
  jk = { key: 0, class: 'dp__sidebar_left' },
  zk = { key: 1, class: 'dp--preset-dates' },
  Kk = ['onClick', 'onKeydown'],
  Qk = { key: 2, class: 'dp__sidebar_right' },
  Zk = { key: 3, class: 'dp__action_extra' },
  el = re({
    compatConfig: { MODE: 3 },
    __name: 'DatepickerMenu',
    props: {
      ...Co,
      shadow: { type: Boolean, default: !1 },
      openOnTop: { type: Boolean, default: !1 },
      internalModelValue: { type: [Date, Array], default: null },
      arrMapValues: { type: Object, default: () => ({}) },
      noOverlayFocus: { type: Boolean, default: !1 },
    },
    emits: [
      'close-picker',
      'select-date',
      'auto-apply',
      'time-update',
      'flow-step',
      'update-month-year',
      'invalid-select',
      'update:internal-model-value',
      'recalculate-position',
      'invalid-fixed-range',
      'tooltip-open',
      'tooltip-close',
      'time-picker-open',
      'time-picker-close',
      'am-pm-change',
      'range-start',
      'range-end',
      'auto-apply-invalid',
      'date-update',
      'invalid-date',
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        i = u(() => {
          const { openOnTop: z, ...ie } = o;
          return { ...ie, flowStep: K.value, noOverlayFocus: o.noOverlayFocus };
        }),
        { setMenuFocused: r, setShiftKey: s, control: l } = Eu(),
        m = Ua(),
        {
          defaultedTextInput: g,
          defaultedInline: d,
          defaultedConfig: v,
        } = vt(o),
        f = M(null),
        y = M(0),
        S = M(null),
        T = M(null),
        w = M(!1),
        b = M(null);
      Oe(() => {
        if (!o.shadow) {
          (w.value = !0), L(), window.addEventListener('resize', L);
          const z = ht(S);
          if ((z && !g.value.enabled && !d.value.enabled && (r(!0), Q()), z)) {
            const ie = (Ee) => {
              v.value.allowPreventDefault && Ee.preventDefault(),
                Pa(Ee, v.value, !0);
            };
            z.addEventListener('pointerdown', ie),
              z.addEventListener('mousedown', ie);
          }
        }
      }),
        qn(() => {
          window.removeEventListener('resize', L);
        });
      const L = () => {
          const z = ht(T);
          z && (y.value = z.getBoundingClientRect().width);
        },
        { arrowRight: D, arrowLeft: P, arrowDown: x, arrowUp: B } = Ea(),
        {
          flowStep: K,
          updateFlowStep: W,
          childMount: C,
          resetFlow: H,
        } = W1(o, t, b),
        F = u(() =>
          o.monthPicker
            ? sk
            : o.yearPicker
            ? uk
            : o.timePicker
            ? Pk
            : o.quarterPicker
            ? qk
            : Uk
        ),
        Q = () => {
          const z = ht(S);
          z && z.focus({ preventScroll: !0 });
        },
        N = u(() => {
          var z;
          return ((z = b.value) == null ? void 0 : z.getSidebarProps()) || {};
        }),
        I = () => {
          o.openOnTop && t('recalculate-position');
        },
        U = At(m, 'action'),
        V = u(() =>
          o.monthPicker || o.yearPicker
            ? At(m, 'monthYear')
            : o.timePicker
            ? At(m, 'timePicker')
            : At(m, 'shared')
        ),
        j = u(() => (o.openOnTop ? 'dp__arrow_bottom' : 'dp__arrow_top')),
        k = u(() => ({
          dp__menu_disabled: o.disabled,
          dp__menu_readonly: o.readonly,
        })),
        p = u(() => ({
          dp__menu: !0,
          dp__menu_index: !d.value.enabled,
          dp__relative: d.value.enabled,
          [o.menuClassName]: !!o.menuClassName,
        })),
        Y = (z) => {
          Pa(z, v.value, !0);
        },
        G = () => {
          o.escClose && t('close-picker');
        },
        ee = (z) => {
          if (o.arrowNavigation) {
            if (z === 'up') return B();
            if (z === 'down') return x();
            if (z === 'left') return P();
            if (z === 'right') return D();
          } else
            z === 'left' || z === 'up'
              ? ve('handleArrow', 'left', 0, z === 'up')
              : ve('handleArrow', 'right', 0, z === 'down');
        },
        J = (z) => {
          s(z.shiftKey),
            !o.disableMonthYearSelect &&
              z.code === 'Tab' &&
              z.target.classList.contains('dp__menu') &&
              l.value.shiftKeyInMenu &&
              (z.preventDefault(), Pa(z, v.value, !0), t('close-picker'));
        },
        R = () => {
          Q(), t('time-picker-close');
        },
        _ = (z) => {
          var ie, Ee, me;
          (ie = b.value) == null || ie.toggleTimePicker(!1, !1),
            (Ee = b.value) == null || Ee.toggleMonthPicker(!1, !1, z),
            (me = b.value) == null || me.toggleYearPicker(!1, !1, z);
        },
        ae = (z, ie = 0) => {
          var Ee, me, Pe;
          return z === 'month'
            ? (Ee = b.value) == null
              ? void 0
              : Ee.toggleMonthPicker(!1, !0, ie)
            : z === 'year'
            ? (me = b.value) == null
              ? void 0
              : me.toggleYearPicker(!1, !0, ie)
            : z === 'time'
            ? (Pe = b.value) == null
              ? void 0
              : Pe.toggleTimePicker(!0, !1)
            : _(ie);
        },
        ve = (z, ...ie) => {
          var Ee, me;
          (Ee = b.value) != null &&
            Ee[z] &&
            ((me = b.value) == null || me[z](...ie));
        },
        le = () => {
          ve('selectCurrentDate');
        },
        be = (z, ie) => {
          ve('presetDate', z, ie);
        },
        de = () => {
          ve('clearHoverDate');
        };
      return (
        n({
          updateMonthYear: (z, ie) => {
            ve('updateMonthYear', z, ie);
          },
          switchView: ae,
        }),
        (z, ie) => {
          var Ee;
          return (
            c(),
            h(
              'div',
              {
                id: z.uid ? `dp-menu-${z.uid}` : void 0,
                ref_key: 'dpMenuRef',
                ref: S,
                tabindex: '0',
                role: 'dialog',
                class: Z(p.value),
                onMouseleave: de,
                onClick: Y,
                onKeydown: [
                  Le(G, ['esc']),
                  ie[18] ||
                    (ie[18] = Le(
                      De((me) => ee('left'), ['prevent']),
                      ['left']
                    )),
                  ie[19] ||
                    (ie[19] = Le(
                      De((me) => ee('up'), ['prevent']),
                      ['up']
                    )),
                  ie[20] ||
                    (ie[20] = Le(
                      De((me) => ee('down'), ['prevent']),
                      ['down']
                    )),
                  ie[21] ||
                    (ie[21] = Le(
                      De((me) => ee('right'), ['prevent']),
                      ['right']
                    )),
                  J,
                ],
              },
              [
                (z.disabled || z.readonly) && A(d).enabled
                  ? (c(), h('div', { key: 0, class: Z(k.value) }, null, 2))
                  : O('', !0),
                !A(d).enabled && !z.teleportCenter
                  ? (c(), h('div', { key: 1, class: Z(j.value) }, null, 2))
                  : O('', !0),
                E(
                  'div',
                  {
                    ref_key: 'innerMenuRef',
                    ref: T,
                    class: Z({
                      dp__menu_content_wrapper:
                        ((Ee = z.presetDates) == null ? void 0 : Ee.length) ||
                        !!z.$slots['left-sidebar'] ||
                        !!z.$slots['right-sidebar'],
                    }),
                    style: Ae({ '--dp-menu-width': `${y.value}px` }),
                  },
                  [
                    z.$slots['left-sidebar']
                      ? (c(),
                        h('div', jk, [
                          te(z.$slots, 'left-sidebar', nt(wt(N.value))),
                        ]))
                      : O('', !0),
                    z.presetDates.length
                      ? (c(),
                        h('div', zk, [
                          (c(!0),
                          h(
                            ge,
                            null,
                            ke(
                              z.presetDates,
                              (me, Pe) => (
                                c(),
                                h(
                                  ge,
                                  { key: Pe },
                                  [
                                    me.slot
                                      ? te(z.$slots, me.slot, {
                                          key: 0,
                                          presetDate: be,
                                          label: me.label,
                                          value: me.value,
                                        })
                                      : (c(),
                                        h(
                                          'button',
                                          {
                                            key: 1,
                                            type: 'button',
                                            style: Ae(me.style || {}),
                                            class: 'dp__btn dp--preset-range',
                                            onClick: De(
                                              (ze) => be(me.value, me.noTz),
                                              ['prevent']
                                            ),
                                            onKeydown: [
                                              Le(
                                                De(
                                                  (ze) => be(me.value, me.noTz),
                                                  ['prevent']
                                                ),
                                                ['enter']
                                              ),
                                              Le(
                                                De(
                                                  (ze) => be(me.value, me.noTz),
                                                  ['prevent']
                                                ),
                                                ['space']
                                              ),
                                            ],
                                          },
                                          X(me.label),
                                          45,
                                          Kk
                                        )),
                                  ],
                                  64
                                )
                              )
                            ),
                            128
                          )),
                        ]))
                      : O('', !0),
                    E(
                      'div',
                      {
                        ref_key: 'calendarWrapperRef',
                        ref: f,
                        class: 'dp__instance_calendar',
                        role: 'document',
                      },
                      [
                        (c(),
                        q(
                          mn(F.value),
                          Ge({ ref_key: 'dynCmpRef', ref: b }, i.value, {
                            'flow-step': A(K),
                            onMount: A(C),
                            onUpdateFlowStep: A(W),
                            onResetFlow: A(H),
                            onFocusMenu: Q,
                            onSelectDate:
                              ie[0] || (ie[0] = (me) => z.$emit('select-date')),
                            onDateUpdate:
                              ie[1] ||
                              (ie[1] = (me) => z.$emit('date-update', me)),
                            onTooltipOpen:
                              ie[2] ||
                              (ie[2] = (me) => z.$emit('tooltip-open', me)),
                            onTooltipClose:
                              ie[3] ||
                              (ie[3] = (me) => z.$emit('tooltip-close', me)),
                            onAutoApply:
                              ie[4] ||
                              (ie[4] = (me) => z.$emit('auto-apply', me)),
                            onRangeStart:
                              ie[5] ||
                              (ie[5] = (me) => z.$emit('range-start', me)),
                            onRangeEnd:
                              ie[6] ||
                              (ie[6] = (me) => z.$emit('range-end', me)),
                            onInvalidFixedRange:
                              ie[7] ||
                              (ie[7] = (me) =>
                                z.$emit('invalid-fixed-range', me)),
                            onTimeUpdate:
                              ie[8] || (ie[8] = (me) => z.$emit('time-update')),
                            onAmPmChange:
                              ie[9] ||
                              (ie[9] = (me) => z.$emit('am-pm-change', me)),
                            onTimePickerOpen:
                              ie[10] ||
                              (ie[10] = (me) =>
                                z.$emit('time-picker-open', me)),
                            onTimePickerClose: R,
                            onRecalculatePosition: I,
                            onUpdateMonthYear:
                              ie[11] ||
                              (ie[11] = (me) =>
                                z.$emit('update-month-year', me)),
                            onAutoApplyInvalid:
                              ie[12] ||
                              (ie[12] = (me) =>
                                z.$emit('auto-apply-invalid', me)),
                            onInvalidDate:
                              ie[13] ||
                              (ie[13] = (me) => z.$emit('invalid-date', me)),
                            'onUpdate:internalModelValue':
                              ie[14] ||
                              (ie[14] = (me) =>
                                z.$emit('update:internal-model-value', me)),
                          }),
                          It({ _: 2 }, [
                            ke(V.value, (me, Pe) => ({
                              name: me,
                              fn: he((ze) => [
                                te(z.$slots, me, nt(wt({ ...ze }))),
                              ]),
                            })),
                          ]),
                          1040,
                          [
                            'flow-step',
                            'onMount',
                            'onUpdateFlowStep',
                            'onResetFlow',
                          ]
                        )),
                      ],
                      512
                    ),
                    z.$slots['right-sidebar']
                      ? (c(),
                        h('div', Qk, [
                          te(z.$slots, 'right-sidebar', nt(wt(N.value))),
                        ]))
                      : O('', !0),
                    z.$slots['action-extra']
                      ? (c(),
                        h('div', Zk, [
                          z.$slots['action-extra']
                            ? te(z.$slots, 'action-extra', {
                                key: 0,
                                selectCurrentDate: le,
                              })
                            : O('', !0),
                        ]))
                      : O('', !0),
                  ],
                  6
                ),
                !z.autoApply || A(v).keepActionRow
                  ? (c(),
                    q(
                      X1,
                      Ge({ key: 2, 'menu-mount': w.value }, i.value, {
                        'calendar-width': y.value,
                        onClosePicker:
                          ie[15] || (ie[15] = (me) => z.$emit('close-picker')),
                        onSelectDate:
                          ie[16] || (ie[16] = (me) => z.$emit('select-date')),
                        onInvalidSelect:
                          ie[17] ||
                          (ie[17] = (me) => z.$emit('invalid-select')),
                        onSelectNow: le,
                      }),
                      It({ _: 2 }, [
                        ke(A(U), (me, Pe) => ({
                          name: me,
                          fn: he((ze) => [te(z.$slots, me, nt(wt({ ...ze })))]),
                        })),
                      ]),
                      1040,
                      ['menu-mount', 'calendar-width']
                    ))
                  : O('', !0),
              ],
              42,
              Gk
            )
          );
        }
      );
    },
  }),
  Xk = typeof window < 'u' ? window : void 0,
  ir = () => {},
  Jk = (e) => (rl() ? (il(e), !0) : !1),
  eS = (e, n, a, t) => {
    if (!e) return ir;
    let o = ir;
    const i = Re(
        () => A(e),
        (s) => {
          o(),
            s &&
              (s.addEventListener(n, a, t),
              (o = () => {
                s.removeEventListener(n, a, t), (o = ir);
              }));
        },
        { immediate: !0, flush: 'post' }
      ),
      r = () => {
        i(), o();
      };
    return Jk(r), r;
  },
  tS = (e, n, a, t = {}) => {
    const { window: o = Xk, event: i = 'pointerdown' } = t;
    return o
      ? eS(
          o,
          i,
          (r) => {
            const s = ht(e),
              l = ht(n);
            !s ||
              !l ||
              s === r.target ||
              r.composedPath().includes(s) ||
              r.composedPath().includes(l) ||
              a(r);
          },
          { passive: !0 }
        )
      : void 0;
  },
  aS = re({
    compatConfig: { MODE: 3 },
    __name: 'VueDatePicker',
    props: { ...Co },
    emits: [
      'update:model-value',
      'update:model-timezone-value',
      'text-submit',
      'closed',
      'cleared',
      'open',
      'focus',
      'blur',
      'internal-model-change',
      'recalculate-position',
      'flow-step',
      'update-month-year',
      'invalid-select',
      'invalid-fixed-range',
      'tooltip-open',
      'tooltip-close',
      'time-picker-open',
      'time-picker-close',
      'am-pm-change',
      'range-start',
      'range-end',
      'date-update',
      'invalid-date',
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        i = Ua(),
        r = M(!1),
        s = xn(o, 'modelValue'),
        l = xn(o, 'timezone'),
        m = M(null),
        g = M(null),
        d = M(null),
        v = M(!1),
        f = M(null),
        y = M(!1),
        S = M(!1),
        { setMenuFocused: T, setShiftKey: w } = Eu(),
        { clearArrowNav: b } = Ea(),
        { mapDatesArrToMap: L, validateDate: D, isValidTime: P } = Fa(o),
        {
          defaultedTransitions: x,
          defaultedTextInput: B,
          defaultedInline: K,
          defaultedConfig: W,
        } = vt(o),
        { menuTransition: C, showTransition: H } = zn(x);
      Oe(() => {
        ee(o.modelValue),
          Et().then(() => {
            if (!K.value.enabled) {
              const ce = k(f.value);
              ce?.addEventListener('scroll', z),
                window?.addEventListener('resize', ie);
            }
          }),
          K.value.enabled && (r.value = !0),
          window?.addEventListener('keyup', Ee),
          window?.addEventListener('keydown', me);
      });
      const F = u(() => L());
      qn(() => {
        if (!K.value.enabled) {
          const ce = k(f.value);
          ce?.removeEventListener('scroll', z),
            window?.removeEventListener('resize', ie);
        }
        window?.removeEventListener('keyup', Ee),
          window?.removeEventListener('keydown', me);
      });
      const Q = At(i, 'all', o.presetDates),
        N = At(i, 'input');
      Re(
        [s, l],
        () => {
          ee(s.value);
        },
        { deep: !0 }
      );
      const {
          openOnTop: I,
          menuStyle: U,
          xCorrect: V,
          setMenuPosition: j,
          getScrollableParent: k,
          shadowRender: p,
        } = V1({
          menuRef: m,
          menuRefInner: g,
          inputRef: d,
          pickerWrapperRef: f,
          inline: K,
          emit: t,
          props: o,
          slots: i,
        }),
        {
          inputValue: Y,
          internalModelValue: G,
          parseExternalModelValue: ee,
          emitModelValue: J,
          formatInputValue: R,
          checkBeforeEmit: _,
        } = N1(t, o, v),
        ae = u(() => ({
          dp__main: !0,
          dp__theme_dark: o.dark,
          dp__theme_light: !o.dark,
          dp__flex_display: K.value.enabled,
          dp__flex_display_with_input: K.value.input,
        })),
        ve = u(() => (o.dark ? 'dp__theme_dark' : 'dp__theme_light')),
        le = u(() => ({
          to: typeof o.teleport == 'boolean' ? 'body' : o.teleport,
          disabled: !o.teleport || K.value.enabled,
        })),
        be = u(() => ({ class: 'dp__outer_menu_wrap' })),
        de = u(
          () =>
            K.value.enabled &&
            (o.timePicker || o.monthPicker || o.yearPicker || o.quarterPicker)
        ),
        z = () => {
          r.value && (W.value.closeOnScroll ? Ze() : j());
        },
        ie = () => {
          r.value && j();
        },
        Ee = (ce) => {
          ce.key === 'Tab' &&
            !K.value.enabled &&
            !o.teleport &&
            W.value.tabOutClosesMenu &&
            (f.value.contains(document.activeElement) || Ze()),
            (S.value = ce.shiftKey);
        },
        me = (ce) => {
          S.value = ce.shiftKey;
        },
        Pe = () => {
          !o.disabled &&
            !o.readonly &&
            (p(el, o),
            j(!1),
            (r.value = !0),
            r.value && t('open'),
            r.value || Xt(),
            ee(o.modelValue));
        },
        ze = () => {
          var ce;
          (Y.value = ''),
            Xt(),
            (ce = d.value) == null || ce.setParsedDate(null),
            t('update:model-value', null),
            t('update:model-timezone-value', null),
            t('cleared'),
            W.value.closeOnClearValue && Ze();
        },
        ot = () => {
          const ce = G.value;
          return !ce || (!Array.isArray(ce) && D(ce))
            ? !0
            : Array.isArray(ce)
            ? o.multiDates || (ce.length === 2 && D(ce[0]) && D(ce[1]))
              ? !0
              : o.partialRange && !o.timePicker
              ? D(ce[0])
              : !1
            : !1;
        },
        lt = () => {
          _() && ot() ? (J(), Ze()) : t('invalid-select', G.value);
        },
        Lt = (ce) => {
          _t(), J(), W.value.closeOnAutoApply && !ce && Ze();
        },
        _t = () => {
          d.value && B.value.enabled && d.value.setParsedDate(G.value);
        },
        ua = (ce = !1) => {
          o.autoApply &&
            P(G.value) &&
            ot() &&
            (o.range && Array.isArray(G.value)
              ? (o.partialRange || G.value.length === 2) && Lt(ce)
              : Lt(ce));
        },
        Xt = () => {
          B.value.enabled || (G.value = null);
        },
        Ze = () => {
          K.value.enabled ||
            (r.value &&
              ((r.value = !1),
              (V.value = !1),
              T(!1),
              w(!1),
              b(),
              t('closed'),
              Y.value && ee(s.value)),
            Xt(),
            t('blur'));
        },
        ca = (ce, Ce, we = !1) => {
          if (!ce) {
            G.value = null;
            return;
          }
          const pt = Array.isArray(ce) ? !ce.some((Wa) => !D(Wa)) : D(ce),
            Dt = P(ce);
          pt &&
            Dt &&
            ((G.value = ce), Ce && ((y.value = we), lt(), t('text-submit')));
        },
        ya = () => {
          o.autoApply && P(G.value) && J(), _t();
        },
        Jt = () => (r.value ? Ze() : Pe()),
        $ = (ce) => {
          G.value = ce;
        },
        se = () => {
          B.value.enabled && ((v.value = !0), R()), t('focus');
        },
        Te = () => {
          if (B.value.enabled && ((v.value = !1), ee(o.modelValue), y.value)) {
            const ce = f1(f.value, S.value);
            ce?.focus();
          }
          t('blur');
        },
        xe = (ce) => {
          g.value &&
            g.value.updateMonthYear(0, {
              month: js(ce.month),
              year: js(ce.year),
            });
        },
        Qe = (ce) => {
          ee(ce ?? o.modelValue);
        },
        _e = (ce, Ce) => {
          var we;
          (we = g.value) == null || we.switchView(ce, Ce);
        },
        Je = (ce) =>
          W.value.onClickOutside ? W.value.onClickOutside(ce) : Ze();
      return (
        tS(m, d, () => Je(ot)),
        n({
          closeMenu: Ze,
          selectDate: lt,
          clearValue: ze,
          openMenu: Pe,
          onScroll: z,
          formatInputValue: R,
          updateInternalModelValue: $,
          setMonthYear: xe,
          parseModel: Qe,
          switchView: _e,
          toggleMenu: Jt,
        }),
        (ce, Ce) => (
          c(),
          h(
            'div',
            {
              ref_key: 'pickerWrapperRef',
              ref: f,
              class: Z(ae.value),
              'data-datepicker-instance': '',
            },
            [
              Me(
                z1,
                Ge(
                  {
                    ref_key: 'inputRef',
                    ref: d,
                    'input-value': A(Y),
                    'onUpdate:inputValue':
                      Ce[0] ||
                      (Ce[0] = (we) => (Pi(Y) ? (Y.value = we) : null)),
                    'is-menu-open': r.value,
                  },
                  ce.$props,
                  {
                    onClear: ze,
                    onOpen: Pe,
                    onSetInputDate: ca,
                    onSetEmptyDate: A(J),
                    onSelectDate: lt,
                    onToggle: Jt,
                    onClose: Ze,
                    onFocus: se,
                    onBlur: Te,
                    onRealBlur: Ce[1] || (Ce[1] = (we) => (v.value = !1)),
                  }
                ),
                It({ _: 2 }, [
                  ke(A(N), (we, pt) => ({
                    name: we,
                    fn: he((Dt) => [te(ce.$slots, we, nt(wt(Dt)))]),
                  })),
                ]),
                1040,
                ['input-value', 'is-menu-open', 'onSetEmptyDate']
              ),
              Me(
                Yu,
                nt(wt(le.value)),
                {
                  default: he(() => [
                    Me(
                      Ot,
                      { name: A(C)(A(I)), css: A(H) && !A(K).enabled },
                      {
                        default: he(() => [
                          r.value
                            ? (c(),
                              h(
                                'div',
                                Ge(
                                  { key: 0, ref_key: 'dpWrapMenuRef', ref: m },
                                  be.value,
                                  {
                                    class: {
                                      'dp--menu-wrapper': !A(K).enabled,
                                    },
                                    style: A(K).enabled ? void 0 : A(U),
                                  }
                                ),
                                [
                                  Me(
                                    el,
                                    Ge(
                                      { ref_key: 'dpMenuRef', ref: g },
                                      ce.$props,
                                      {
                                        'internal-model-value': A(G),
                                        'onUpdate:internalModelValue':
                                          Ce[2] ||
                                          (Ce[2] = (we) =>
                                            Pi(G) ? (G.value = we) : null),
                                        class: {
                                          [ve.value]: !0,
                                          'dp--menu-wrapper': ce.teleport,
                                        },
                                        'open-on-top': A(I),
                                        'arr-map-values': F.value,
                                        'no-overlay-focus': de.value,
                                        onClosePicker: Ze,
                                        onSelectDate: lt,
                                        onAutoApply: ua,
                                        onTimeUpdate: ya,
                                        onFlowStep:
                                          Ce[3] ||
                                          (Ce[3] = (we) =>
                                            ce.$emit('flow-step', we)),
                                        onUpdateMonthYear:
                                          Ce[4] ||
                                          (Ce[4] = (we) =>
                                            ce.$emit('update-month-year', we)),
                                        onInvalidSelect:
                                          Ce[5] ||
                                          (Ce[5] = (we) =>
                                            ce.$emit('invalid-select', A(G))),
                                        onAutoApplyInvalid:
                                          Ce[6] ||
                                          (Ce[6] = (we) =>
                                            ce.$emit('invalid-select', we)),
                                        onInvalidFixedRange:
                                          Ce[7] ||
                                          (Ce[7] = (we) =>
                                            ce.$emit(
                                              'invalid-fixed-range',
                                              we
                                            )),
                                        onRecalculatePosition: A(j),
                                        onTooltipOpen:
                                          Ce[8] ||
                                          (Ce[8] = (we) =>
                                            ce.$emit('tooltip-open', we)),
                                        onTooltipClose:
                                          Ce[9] ||
                                          (Ce[9] = (we) =>
                                            ce.$emit('tooltip-close', we)),
                                        onTimePickerOpen:
                                          Ce[10] ||
                                          (Ce[10] = (we) =>
                                            ce.$emit('time-picker-open', we)),
                                        onTimePickerClose:
                                          Ce[11] ||
                                          (Ce[11] = (we) =>
                                            ce.$emit('time-picker-close', we)),
                                        onAmPmChange:
                                          Ce[12] ||
                                          (Ce[12] = (we) =>
                                            ce.$emit('am-pm-change', we)),
                                        onRangeStart:
                                          Ce[13] ||
                                          (Ce[13] = (we) =>
                                            ce.$emit('range-start', we)),
                                        onRangeEnd:
                                          Ce[14] ||
                                          (Ce[14] = (we) =>
                                            ce.$emit('range-end', we)),
                                        onDateUpdate:
                                          Ce[15] ||
                                          (Ce[15] = (we) =>
                                            ce.$emit('date-update', we)),
                                        onInvalidDate:
                                          Ce[16] ||
                                          (Ce[16] = (we) =>
                                            ce.$emit('invalid-date', we)),
                                      }
                                    ),
                                    It({ _: 2 }, [
                                      ke(A(Q), (we, pt) => ({
                                        name: we,
                                        fn: he((Dt) => [
                                          te(ce.$slots, we, nt(wt({ ...Dt }))),
                                        ]),
                                      })),
                                    ]),
                                    1040,
                                    [
                                      'internal-model-value',
                                      'class',
                                      'open-on-top',
                                      'arr-map-values',
                                      'no-overlay-focus',
                                      'onRecalculatePosition',
                                    ]
                                  ),
                                ],
                                16
                              ))
                            : O('', !0),
                        ]),
                        _: 3,
                      },
                      8,
                      ['name', 'css']
                    ),
                  ]),
                  _: 3,
                },
                16
              ),
            ],
            2
          )
        )
      );
    },
  }),
  wi = (() => {
    const e = aS;
    return (
      (e.install = (n) => {
        n.component('Vue3DatePicker', e);
      }),
      e
    );
  })(),
  nS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: wi },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
Object.entries(nS).forEach(([e, n]) => {
  e !== 'default' && (wi[e] = n);
});
const oS = {
    props: {
      month: { type: Number, default: 0 },
      year: { type: Number, default: 0 },
      customProps: { type: Object, default: null },
    },
    emits: ['update-month-year'],
    computed: {
      getLanguage() {
        return this.customProps.language === 'br'
          ? 'pt-BR'
          : this.customProps.language;
      },
      calendarTitle() {
        return new Date(this.year, this.month).toLocaleDateString(
          this.getLanguage,
          { year: 'numeric', month: 'long' }
        );
      },
    },
    methods: {
      onNextClick() {
        let e = this.month,
          n = this.year;
        this.month === 11 ? ((e = 0), (n = this.year + 1)) : (e += 1),
          this.updateDate(e, n);
      },
      onPreviousClick() {
        let e = this.month,
          n = this.year;
        this.month === 0 ? ((e = 11), (n = this.year - 1)) : (e -= 1),
          this.updateDate(e, n);
      },
      updateDate(e, n) {
        this.$emit('update-month-year', { instance: 0, month: e, year: n });
      },
    },
  },
  Bu = (e) => (Bt('data-v-707c7e3f'), (e = e()), xt(), e),
  rS = { class: 'date-picker-header' },
  iS = Bu(() =>
    E(
      'div',
      { class: 'date-picker-header__arrow' },
      [
        E(
          'svg',
          {
            width: '20',
            height: '20',
            viewBox: '0 0 20 20',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          [
            E('path', {
              d: 'M12.5 5L7.5 10L12.5 15',
              stroke: 'black',
              'stroke-width': '1.5',
              'stroke-linecap': 'round',
              'stroke-linejoin': 'round',
            }),
          ]
        ),
      ],
      -1
    )
  ),
  sS = [iS],
  lS = Bu(() =>
    E(
      'div',
      { class: 'date-picker-header__arrow date-picker-header__arrow--next' },
      [
        E(
          'svg',
          {
            width: '20',
            height: '20',
            viewBox: '0 0 20 20',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          [
            E('path', {
              d: 'M12.5 5L7.5 10L12.5 15',
              stroke: 'black',
              'stroke-width': '1.5',
              'stroke-linecap': 'round',
              'stroke-linejoin': 'round',
            }),
          ]
        ),
      ],
      -1
    )
  ),
  uS = [lS];
function cS(e, n, a, t, o, i) {
  return (
    c(),
    h('div', rS, [
      E(
        'button',
        {
          class: 'date-picker-header__button',
          onClick:
            n[0] ||
            (n[0] = (...r) => i.onPreviousClick && i.onPreviousClick(...r)),
        },
        sS
      ),
      He(' ' + X(i.calendarTitle) + ' ', 1),
      E(
        'button',
        {
          class: 'date-picker-header__button',
          onClick:
            n[1] || (n[1] = (...r) => i.onNextClick && i.onNextClick(...r)),
        },
        uS
      ),
    ])
  );
}
const dS = oe(oS, [
    ['render', cS],
    ['__scopeId', 'data-v-707c7e3f'],
  ]),
  mS = re({
    components: { ModalLayout: vn, DatePicker: wi },
    props: {
      translations: { type: Object, default: () => {} },
      language: { type: String, default: 'en' },
      isCartVisible: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e) {
      const {
          isStoreTypeZyro: n,
          products: a,
          selectedBookingProductId: t,
          shoppingCartItems: o,
          setShoppingCartOpen: i,
          setShoppingCartItems: r,
          setSelectedBookingId: s,
        } = Ut(),
        { openEcommerceModal: l } = $t(),
        { initiateCheckout: m } = nn(),
        g = u(() => dS);
      return {
        initiateCheckout: m,
        openEcommerceModal: l,
        datePickerHeader: g,
        isStoreTypeZyro: n,
        products: a,
        selectedBookingProductId: t,
        shoppingCartItems: o,
        setShoppingCartOpen: i,
        setShoppingCartItems: r,
        setSelectedBookingId: s,
      };
    },
    data() {
      return {
        isTimeSelected: !1,
        selectedTimeSlot: null,
        selectedDate: new Date(),
        timeSlots: [],
        isSlotsLoading: !1,
        isCalendarLoading: !1,
        isCheckoutLoading: !1,
        disabledDates: [],
      };
    },
    computed: {
      isModalEnabled() {
        return this.isStoreTypeZyro && !!this.selectedBookingProductId;
      },
      selectedBookingProduct() {
        return this.products?.find(
          (e) => e.id === this.selectedBookingProductId
        );
      },
      bookingEvent() {
        return this.selectedBookingProduct?.variants[0].booking_event;
      },
      title() {
        return this.selectedBookingProduct?.title;
      },
      location() {
        return this.bookingEvent?.location;
      },
      duration() {
        return this.bookingEvent?.length || null;
      },
      durationUnit() {
        return this.bookingEvent?.length_unit;
      },
      aggregatedDuration() {
        const e =
            this.durationUnit === fr
              ? this.duration / 1e3 / 60 / 60
              : this.duration / 1e3 / 60,
          n =
            this.durationUnit === fr
              ? this.translations.hourShort
              : this.translations.minuteShort;
        return `${e} ${n}`;
      },
      eventStartDate() {
        return this.selectedTimeSlot ? new Date(this.selectedTimeSlot) : null;
      },
      eventEndDate() {
        if (!this.selectedTimeSlot) return null;
        const n = this.eventStartDate.getTime() + this.duration;
        return new Date(n);
      },
      calculatedTime() {
        if (!this.selectedTimeSlot) return '--:--';
        const e = this.getVisibleDate(this.eventStartDate),
          n = this.getVisibleDate(this.eventEndDate);
        return `${e} - ${n}`;
      },
      dayNames() {
        const e = [],
          n = new Date();
        n.setDate(n.getDate() - n.getDay());
        for (let a = 0; a < 7; a += 1)
          n.setDate(n.getDate() + 1),
            e.push(
              new Date(n).toLocaleDateString(this.getLanguage, {
                weekday: 'short',
              })
            );
        return e;
      },
      formattedSelectedDate() {
        const e = this.selectedDate?.toLocaleDateString(this.language);
        if (
          this.eventStartDate?.toDateString() !==
          this.eventEndDate?.toDateString()
        ) {
          const n = this.eventEndDate.toLocaleDateString(this.language);
          return `${e} - ${n}`;
        }
        return e;
      },
      selectedMonthAndWeekday() {
        if (!this.selectedDate) return null;
        const e = this.selectedDate?.toLocaleDateString(this.getLanguage, {
          month: 'long',
          day: 'numeric',
        });
        return `${this.selectedDate?.toLocaleDateString(this.getLanguage, {
          weekday: 'long',
        })}, ${e}`;
      },
      getLanguage() {
        return this.language === 'br' ? 'pt-BR' : this.language;
      },
    },
    watch: {
      async selectedDate() {
        (this.selectedTimeSlot = null),
          (this.isTimeSelected = !1),
          await this.loadTimeSlots();
      },
    },
    async mounted() {
      this.isModalEnabled && this.setDefaultData();
    },
    methods: {
      closeEcommerceModal() {
        this.setSelectedBookingId(null),
          this.$refs.modal.handleCloseModalAction();
      },
      async setDefaultData() {
        if (
          (await this.loadAvailability(),
          this.disabledDates.some(
            (e) => e.toDateString() === this.selectedDate.toDateString()
          ))
        ) {
          const n = this.getAllDaysInCurrentMonth()
            .filter(
              (a) =>
                !this.disabledDates.some(
                  (t) => t.toDateString() === a.toDateString()
                )
            )
            .sort((a, t) => new Date(a.date) - new Date(t.date));
          this.selectedDate = n.shift();
        }
        await this.loadTimeSlots();
      },
      async handleSubmit() {
        if (Na() || this.isInPreviewMode) {
          this.openEcommerceModal('EcommerceMessageButtonDisabled');
          return;
        }
        const e = { ...this.selectedBookingProduct },
          { timeZone: n } = Intl.DateTimeFormat().resolvedOptions();
        (e.variants[0].booking_event = {
          ...e.variants[0].booking_event,
          time_slot: this.selectedTimeSlot,
          time_zone: n,
          length: e.variants[0].booking_event.length,
          length_unit: e.variants[0].booking_event.length_unit,
          date: this.selectedDate,
        }),
          this.isCartVisible
            ? ((this.isCheckoutLoading = !0),
              this.setShoppingCartItems([...this.shoppingCartItems, e]),
              this.setShoppingCartOpen(!0),
              this.closeEcommerceModal())
            : await this.initiateCheckout([e]).then(() => {
                (this.isCheckoutLoading = !1), this.closeEcommerceModal();
              });
      },
      selectTimeSlot(e) {
        (this.isTimeSelected = !0), (this.selectedTimeSlot = e);
      },
      async loadTimeSlots() {
        this.isSlotsLoading = !0;
        const e = new Intl.DateTimeFormat('lt').format(this.selectedDate);
        this.timeSlots = await Qd(this.bookingEvent.id, e).then(
          (n) => ((this.isSlotsLoading = !1), n)
        );
      },
      async loadAvailability({ data: e = {} } = {}) {
        this.isCalendarLoading = !0;
        const n = Object.keys(e).length
            ? new Date(e.year, e.month)
            : this.selectedDate,
          a = new Date(n.getFullYear(), n.getMonth() + 1, 0);
        this.disabledDates = await Zd({
          bookingId: this.bookingEvent.id,
          fromDate: new Intl.DateTimeFormat('lt').format(n),
          toDate: new Intl.DateTimeFormat('lt').format(a),
        }).then(
          (t) => (
            (this.isCalendarLoading = !1),
            t.map((o) => {
              const i = o.split('-');
              return new Date(i[0], i[1] - 1, i[2]);
            })
          )
        );
      },
      getAllDaysInCurrentMonth() {
        const e = new Date().getMonth(),
          n = new Date(new Date().getFullYear(), e, new Date().getDate()),
          a = [];
        for (; n.getMonth() === e; )
          a.push(new Date(n)), n.setDate(n.getDate() + 1);
        return a;
      },
      getVisibleDate(e) {
        return e.toLocaleTimeString(this.language, {
          hour: '2-digit',
          minute: '2-digit',
        });
      },
    },
  }),
  gS = { class: 'ecommerce-booking-modal' },
  vS = { class: 'ecommerce-booking-modal__content' },
  pS = { class: 'ecommerce-booking-modal__info' },
  hS = { class: 'ecommerce-booking-modal__title' },
  fS = { class: 'ecommerce-booking-modal__icons' },
  yS = { class: 'ecommerce-booking-modal__text-wrapper' },
  bS = E(
    'div',
    { class: 'ecommerce-booking-modal__icon' },
    [
      E(
        'svg',
        {
          width: '16',
          height: '18',
          viewBox: '0 0 16 18',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        [
          E('path', {
            d: 'M5.5 8.3335H3.83333V10.0002H5.5V8.3335ZM8.83333 8.3335H7.16667V10.0002H8.83333V8.3335ZM12.1667 8.3335H10.5V10.0002H12.1667V8.3335ZM13.8333 2.50016H13V0.833496H11.3333V2.50016H4.66667V0.833496H3V2.50016H2.16667C1.24167 2.50016 0.5 3.25016 0.5 4.16683V15.8335C0.5 16.2755 0.675595 16.6994 0.988155 17.012C1.30072 17.3246 1.72464 17.5002 2.16667 17.5002H13.8333C14.2754 17.5002 14.6993 17.3246 15.0118 17.012C15.3244 16.6994 15.5 16.2755 15.5 15.8335V4.16683C15.5 3.7248 15.3244 3.30088 15.0118 2.98832C14.6993 2.67576 14.2754 2.50016 13.8333 2.50016ZM13.8333 15.8335H2.16667V6.66683H13.8333V15.8335Z',
            fill: '#474B4F',
          }),
        ]
      ),
    ],
    -1
  ),
  _S = { class: 'ecommerce-booking-modal__text' },
  wS = { class: 'ecommerce-booking-modal__text-wrapper' },
  kS = E(
    'div',
    { class: 'ecommerce-booking-modal__icon' },
    [
      E(
        'svg',
        {
          width: '18',
          height: '18',
          viewBox: '0 0 18 18',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        [
          E('path', {
            d: 'M9.00001 15.6665C12.6667 15.6665 15.6667 12.6665 15.6667 8.99984C15.6667 5.33317 12.6667 2.33317 9.00001 2.33317C5.33334 2.33317 2.33334 5.33317 2.33334 8.99984C2.33334 12.6665 5.33334 15.6665 9.00001 15.6665ZM9.00001 0.666504C13.5833 0.666504 17.3333 4.4165 17.3333 8.99984C17.3333 13.5832 13.5833 17.3332 9.00001 17.3332C4.41667 17.3332 0.666672 13.5832 0.666672 8.99984C0.666672 4.4165 4.41667 0.666504 9.00001 0.666504ZM13.1667 8.58317V9.83317H8.16667V4.83317H9.41667V8.58317H13.1667Z',
            fill: '#474B4F',
          }),
        ]
      ),
    ],
    -1
  ),
  SS = { class: 'ecommerce-booking-modal__text' },
  TS = { class: 'ecommerce-booking-modal__text-wrapper' },
  CS = E(
    'div',
    { class: 'ecommerce-booking-modal__icon' },
    [
      E(
        'svg',
        {
          width: '12',
          height: '18',
          viewBox: '0 0 12 18',
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        [
          E('path', {
            d: 'M6.00001 2.33317C8.33334 2.33317 10.1667 4.1665 10.1667 6.49984C10.1667 8.9165 7.75001 12.4998 6.00001 14.7498C4.25001 12.4998 1.83334 8.9165 1.83334 6.49984C1.83334 4.1665 3.66667 2.33317 6.00001 2.33317ZM6.00001 0.666504C2.75001 0.666504 0.166672 3.24984 0.166672 6.49984C0.166672 10.8332 6.00001 17.3332 6.00001 17.3332C6.00001 17.3332 11.8333 10.8332 11.8333 6.49984C11.8333 3.24984 9.25001 0.666504 6.00001 0.666504ZM5.41667 10.6665L9.50001 6.49984L8.33334 5.33317L5.41667 8.33317L4.08334 6.99984L2.91667 8.1665L5.41667 10.6665Z',
            fill: '#474B4F',
          }),
        ]
      ),
    ],
    -1
  ),
  PS = { class: 'ecommerce-booking-modal__text' },
  IS = { class: 'ecommerce-booking-modal__availability' },
  ES = { class: 'ecommerce-booking-modal__time-title' },
  DS = { class: 'ecommerce-booking-modal__calendar-wrapper' },
  MS = { class: 'ecommerce-booking-modal__time-wrapper' },
  OS = { class: 'ecommerce-booking-modal__selected-day' },
  LS = { class: 'ecommerce-booking-modal__time-slot-wrapper' },
  AS = { key: 0, class: 'ecommerce-booking-modal__time-slot-loader' },
  BS = ['onClick'],
  xS = { class: 'ecommerce-booking-modal__buttons' },
  RS = ['disabled'];
function HS(e, n, a, t, o, i) {
  const r = Be('DatePicker'),
    s = Be('ModalLayout');
  return e.isModalEnabled
    ? (c(),
      q(
        s,
        {
          key: 0,
          ref: 'modal',
          padding: '0',
          'max-width': '1048px',
          'mobile-height': '100%',
          width: '100vw',
          'background-color': 'transparent',
        },
        {
          default: he(() => [
            E('div', gS, [
              E('div', vS, [
                E('div', pS, [
                  E('p', hS, X(e.title), 1),
                  E('div', fS, [
                    E('div', yS, [
                      bS,
                      E('p', _S, X(e.formattedSelectedDate), 1),
                    ]),
                    E('div', wS, [
                      kS,
                      E(
                        'p',
                        SS,
                        X(e.calculatedTime) +
                          ' (' +
                          X(e.aggregatedDuration) +
                          ') ',
                        1
                      ),
                    ]),
                  ]),
                  E('div', TS, [CS, E('p', PS, X(e.location), 1)]),
                ]),
                E('div', IS, [
                  E('p', ES, X(e.translations.selectDateAndTime), 1),
                  E('div', DS, [
                    Me(
                      r,
                      {
                        modelValue: e.selectedDate,
                        'onUpdate:modelValue':
                          n[0] || (n[0] = (l) => (e.selectedDate = l)),
                        inline: '',
                        'hide-offset-dates': '',
                        'auto-apply': '',
                        class: Z([
                          'ecommerce-booking-modal-calendar',
                          {
                            'ecommerce-booking-modal-calendar--loading':
                              e.isCalendarLoading,
                          },
                        ]),
                        'disabled-dates': e.disabledDates,
                        'min-date': new Date(),
                        locale: e.getLanguage,
                        'no-swipe': '',
                        'month-change-on-scroll': !1,
                        'enable-time-picker': !1,
                        'custom-props': { language: e.getLanguage },
                        'month-year-component': e.datePickerHeader,
                        onUpdateMonthYear:
                          n[1] ||
                          (n[1] = (l) => e.loadAvailability({ data: l })),
                      },
                      {
                        'calendar-header': he(({ index: l }) => [
                          E('div', null, X(e.dayNames[l]), 1),
                        ]),
                        _: 1,
                      },
                      8,
                      [
                        'modelValue',
                        'class',
                        'disabled-dates',
                        'min-date',
                        'locale',
                        'custom-props',
                        'month-year-component',
                      ]
                    ),
                    E('div', MS, [
                      E('div', null, [
                        E('p', OS, X(e.selectedMonthAndWeekday), 1),
                      ]),
                      E('div', LS, [
                        e.isSlotsLoading
                          ? (c(), h('div', AS))
                          : (c(!0),
                            h(
                              ge,
                              { key: 1 },
                              ke(
                                e.timeSlots,
                                (l, m) => (
                                  c(),
                                  h(
                                    'button',
                                    {
                                      key: `time-${m}`,
                                      class: Z([
                                        'ecommerce-booking-modal__time-slot',
                                        {
                                          'ecommerce-booking-modal__time-slot--active':
                                            e.selectedTimeSlot === l,
                                        },
                                      ]),
                                      onClick: (g) => e.selectTimeSlot(l),
                                    },
                                    X(e.getVisibleDate(new Date(l))),
                                    11,
                                    BS
                                  )
                                )
                              ),
                              128
                            )),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              E('div', xS, [
                E(
                  'button',
                  {
                    class: 'ecommerce-booking-modal__button',
                    onClick:
                      n[2] ||
                      (n[2] = (...l) =>
                        e.closeEcommerceModal && e.closeEcommerceModal(...l)),
                  },
                  X(e.translations.cancel),
                  1
                ),
                E(
                  'button',
                  {
                    class: Z([
                      'ecommerce-booking-modal__button ecommerce-booking-modal__button--save',
                      { loading: e.isCheckoutLoading },
                    ]),
                    disabled: !e.isTimeSelected,
                    onClick:
                      n[3] ||
                      (n[3] = (...l) => e.handleSubmit && e.handleSubmit(...l)),
                  },
                  X(e.translations.book),
                  11,
                  RS
                ),
              ]),
            ]),
          ]),
          _: 1,
        },
        512
      ))
    : O('', !0);
}
const NS = oe(mS, [['render', HS]]),
  $S = re({
    name: 'EcommerceModalContent',
    props: {
      title: { type: String, required: !0 },
      text: { type: String, required: !0 },
      buttonText: { type: String, required: !0 },
      qaSelector: { type: String, default: 'success' },
    },
    emits: ['handle-close'],
  }),
  VS = { class: 'payment-info' },
  US = { class: 'payment-info__content' },
  YS = { class: 'payment-info__title' },
  FS = { class: 'payment-info__text body-large' };
function WS(e, n, a, t, o, i) {
  const r = je('qa');
  return ue(
    (c(),
    h('div', VS, [
      E('div', US, [
        E('h5', YS, X(e.title), 1),
        E('p', FS, X(e.text), 1),
        E(
          'button',
          {
            class: 'payment-info__button',
            type: 'primary',
            onClick: n[0] || (n[0] = (s) => e.$emit('handle-close')),
          },
          X(e.buttonText),
          1
        ),
      ]),
    ])),
    [[r, `ecommerce-modal-checkout-${e.qaSelector}`]]
  );
}
const Eo = oe($S, [
    ['render', WS],
    ['__scopeId', 'data-v-98b20e5c'],
  ]),
  qS = re({
    components: { ModalLayout: vn, ModalContent: Eo },
    props: { translations: { type: Object, default: () => {} } },
  });
function GS(e, n, a, t, o, i) {
  const r = Be('ModalContent'),
    s = Be('ModalLayout');
  return (
    c(),
    q(
      s,
      { ref: 'modal' },
      {
        default: he(() => [
          Me(
            r,
            {
              'qa-selector': 'booking-unavailable',
              title: e.translations.checkoutModalBookingUnavailable,
              text: e.translations.checkoutModalChooseDifferentTime,
              'button-text': e.translations.gotIt,
              onHandleClose:
                n[0] || (n[0] = (l) => e.$refs.modal.handleCloseModalAction()),
            },
            null,
            8,
            ['title', 'text', 'button-text']
          ),
        ]),
        _: 1,
      },
      512
    )
  );
}
const jS = oe(qS, [['render', GS]]),
  zS = re({
    components: { ModalLayout: vn, ModalContent: Eo },
    props: { translations: { type: Object, default: () => {} } },
  });
function KS(e, n, a, t, o, i) {
  const r = Be('ModalContent'),
    s = Be('ModalLayout');
  return (
    c(),
    q(
      s,
      { ref: 'modal' },
      {
        default: he(() => [
          Me(
            r,
            {
              'qa-selector': 'failed',
              title: e.translations.checkoutModalCantAcceptOrders,
              text: e.translations.checkoutModalPleaseContact,
              'button-text': e.translations.close,
              onHandleClose:
                n[0] || (n[0] = (l) => e.$refs.modal.handleCloseModalAction()),
            },
            null,
            8,
            ['title', 'text', 'button-text']
          ),
        ]),
        _: 1,
      },
      512
    )
  );
}
const QS = oe(zS, [['render', KS]]),
  ZS = re({
    __name: 'EcommerceCheckoutSuccess',
    props: { translations: { default: () => ({}) } },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { isEcommerceStoreCreated: t, setShoppingCartItems: o } = Ut(),
        i = M({
          title: a.translations.checkoutModalThanksForOrder,
          text: a.translations.checkoutModalOrderReceived,
          buttonText: a.translations.gotIt,
          modalType: 'success-order',
        }),
        r = M(null);
      Oe(() => {
        o([]);
        const m = new URLSearchParams(window.location.search).get('product');
        m === Vt
          ? (i.value = {
              title: a.translations.checkoutModalThanksForOrder,
              text: a.translations.checkoutModalSuccessfullyBooked,
              buttonText: a.translations.gotIt,
              modalType: 'success-orderbooking',
            })
          : m === hr &&
            (i.value = {
              title: a.translations.checkoutModalThanksForDonation,
              text: a.translations.checkoutModalDonationReceived,
              buttonText: a.translations.gotIt,
              modalType: 'success-orderdonation',
            });
      });
      const s = {
        props: a,
        isEcommerceStoreCreated: t,
        setShoppingCartItems: o,
        modalContent: i,
        modalRef: r,
        ModalContent: Eo,
        ModalLayout: vn,
      };
      return (
        Object.defineProperty(s, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        s
      );
    },
  });
function XS(e, n, a, t, o, i) {
  return t.isEcommerceStoreCreated
    ? (c(),
      q(
        t.ModalLayout,
        { key: 0, ref: 'modalRef' },
        {
          default: he(() => [
            Me(
              t.ModalContent,
              {
                title: t.modalContent.title,
                text: t.modalContent.text,
                'button-text': t.modalContent.buttonText,
                'qa-selector': t.modalContent.modalType,
                onHandleClose:
                  n[0] || (n[0] = (r) => t.modalRef.handleCloseModalAction()),
              },
              null,
              8,
              ['title', 'text', 'button-text', 'qa-selector']
            ),
          ]),
          _: 1,
        },
        512
      ))
    : O('', !0);
}
const JS = oe(ZS, [['render', XS]]),
  eT = re({
    components: { CloseButton: ei },
    props: { translations: { type: Object, default: () => {} } },
    setup() {
      const { closeEcommerceModal: e } = $t(),
        n = setTimeout(() => {
          e();
        }, 6e3);
      return (
        Tt(() => {
          clearTimeout(n);
        }),
        { closeEcommerceModal: e }
      );
    },
  }),
  tT = (e) => (Bt('data-v-2b2551b7'), (e = e()), xt(), e),
  aT = { class: 'notification' },
  nT = tT(() =>
    E(
      'svg',
      {
        class: 'notification__icon',
        width: '16',
        height: '16',
        viewBox: '0 0 24 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      [
        E('path', {
          d: 'M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z',
          stroke: 'currentColor',
          'stroke-width': '2',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
        }),
        E('path', {
          d: 'M12.01 16L12.01 12',
          stroke: 'currentColor',
          'stroke-width': '2',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
        }),
        E('path', {
          d: 'M12.01 8L12 8',
          stroke: 'currentColor',
          'stroke-width': '2',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
        }),
      ],
      -1
    )
  ),
  oT = { class: 'notification__content' };
function rT(e, n, a, t, o, i) {
  const r = Be('CloseButton'),
    s = je('qa');
  return (
    c(),
    q(
      Ot,
      { name: 'fade' },
      {
        default: he(() => [
          ue(
            (c(),
            h('div', aT, [
              nT,
              E('p', oT, X(e.translations.checkoutModalDisabledPreview), 1),
              Me(r, {
                class: 'notification__close',
                title: 'Close',
                onClick: n[0] || (n[0] = (l) => e.closeEcommerceModal()),
              }),
            ])),
            [[s, 'builder-message-ecommercedisabled']]
          ),
        ]),
        _: 1,
      }
    )
  );
}
const iT = oe(eT, [
    ['render', rT],
    ['__scopeId', 'data-v-2b2551b7'],
  ]),
  sT = re({
    components: { ModalLayout: vn, ModalContent: Eo },
    props: { translations: { type: Object, default: () => {} } },
  });
function lT(e, n, a, t, o, i) {
  const r = Be('ModalContent'),
    s = Be('ModalLayout');
  return (
    c(),
    q(
      s,
      { ref: 'modal' },
      {
        default: he(() => [
          Me(
            r,
            {
              'qa-selector': 'outofstock',
              title: e.translations.checkoutModalOutOfStock,
              text: e.translations.checkoutModalTryOrChoose,
              'button-text': e.translations.gotIt,
              onHandleClose:
                n[0] || (n[0] = (l) => e.$refs.modal.handleCloseModalAction()),
            },
            null,
            8,
            ['title', 'text', 'button-text']
          ),
        ]),
        _: 1,
      },
      512
    )
  );
}
const uT = oe(sT, [['render', lT]]),
  cT = 'open-modal',
  dT = re({
    components: {
      EcommerceProductPreview: s_,
      EcommerceBookingEventSelect: NS,
      EcommerceBookingUnavailable: jS,
      EcommerceCheckoutFailed: QS,
      EcommerceCheckoutSuccess: JS,
      EcommerceMessageButtonDisabled: iT,
      EcommerceOutOfStock: uT,
    },
    props: {
      ecommerceTranslations: { type: Object, default: () => ({}) },
      language: { type: String, default: 'en' },
      currentLocale: { type: String, required: !0 },
      isCartVisible: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup() {
      const {
        openEcommerceModal: e,
        closeEcommerceModal: n,
        openEcommerceModalName: a,
      } = $t();
      return (
        Oe(() => {
          const o = new URLSearchParams(window.location.search).get(cT);
          o && e(o);
        }),
        {
          openEcommerceModal: e,
          closeEcommerceModal: n,
          openEcommerceModalName: a,
        }
      );
    },
  });
function mT(e, n, a, t, o, i) {
  return e.openEcommerceModalName
    ? (c(),
      q(
        mn(e.openEcommerceModalName),
        {
          key: 0,
          translations: e.ecommerceTranslations,
          language: e.language,
          'current-locale': e.currentLocale,
          'is-cart-visible': e.isCartVisible,
          'is-in-preview-mode': e.isInPreviewMode,
          'is-quick-preview': '',
        },
        null,
        8,
        [
          'translations',
          'language',
          'current-locale',
          'is-cart-visible',
          'is-in-preview-mode',
        ]
      ))
    : O('', !0);
}
const gT = oe(dT, [['render', mT]]),
  vT = re({
    __name: 'Flag',
    props: { alt: {}, src: { default: void 0 } },
    setup(e, { expose: n }) {
      n();
      const a = {};
      return (
        Object.defineProperty(a, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        a
      );
    },
  }),
  pT = { class: 'flag' },
  hT = ['src', 'alt'],
  fT = E('div', { class: 'flag__shadow' }, null, -1);
function yT(e, n, a, t, o, i) {
  return (
    c(),
    h('div', pT, [
      E('img', { class: 'flag__img', src: a.src, alt: a.alt }, null, 8, hT),
      fT,
    ])
  );
}
const bT = oe(vT, [['render', yT]]),
  _T = re({
    __name: 'LanguageSwitcher',
    props: { languages: {}, currentLocale: {} },
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = u(() =>
          a.languages
            .filter(({ isHidden: r }) => !r)
            .map((r) => ({
              ...r,
              src: `${_c}/${r.flagPath}`,
              alt: `${r.locale} flag`,
            }))
        ),
        o = u(() => t.value.find(({ locale: r }) => r === a.currentLocale)),
        i = {
          props: a,
          languageSwitcherLanguages: t,
          selectedLanguage: o,
          Flag: bT,
        };
      return (
        Object.defineProperty(i, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  wT = { ref: 'languageSwitcher', class: 'language-switcher', tabindex: '0' },
  kT = { class: 'language-switcher__button' },
  ST = { key: 1, class: 'language-switcher__locale' },
  TT = E(
    'svg',
    {
      class: 'language-switcher__icon',
      width: '10',
      height: '7',
      viewBox: '0 0 10 7',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    [
      E('path', {
        d: 'M5 6.5L0.669873 0.5L9.33013 0.500001L5 6.5Z',
        fill: 'currentColor',
      }),
    ],
    -1
  ),
  CT = { class: 'language-switcher__dropdown-area' },
  PT = { class: 'language-switcher__dropdown' },
  IT = ['href'];
function ET(e, n, a, t, o, i) {
  const r = je('qa');
  return (
    c(),
    h(
      'div',
      wT,
      [
        ue(
          (c(),
          h('div', kT, [
            t.selectedLanguage?.country
              ? ue(
                  (c(),
                  q(
                    t.Flag,
                    {
                      key: 0,
                      class: 'language-switcher__flag',
                      src: t.selectedLanguage.src,
                      alt: t.selectedLanguage.alt,
                    },
                    null,
                    8,
                    ['src', 'alt']
                  )),
                  [
                    [
                      r,
                      `navigation-selected-language-${t.selectedLanguage.name}`,
                    ],
                  ]
                )
              : (c(), h('div', ST, X(t.selectedLanguage?.locale), 1)),
            TT,
          ])),
          [[r, 'navigation-language-switcher']]
        ),
        E('div', CT, [
          E('ul', PT, [
            (c(!0),
            h(
              ge,
              null,
              ke(t.languageSwitcherLanguages, (s) =>
                ue(
                  (c(),
                  h(
                    'li',
                    {
                      key: s.locale,
                      class: 'language-switcher__dropdown-item',
                    },
                    [
                      E(
                        'a',
                        {
                          href: s.href,
                          class: Z([
                            'language-switcher__dropdown-link',
                            { '--current': s.locale === a.currentLocale },
                          ]),
                        },
                        [
                          s.country
                            ? (c(),
                              q(
                                t.Flag,
                                {
                                  key: 0,
                                  class: 'language-switcher__dropdown-flag',
                                  src: s.src,
                                  alt: s.alt,
                                },
                                null,
                                8,
                                ['src', 'alt']
                              ))
                            : O('', !0),
                          He(' ' + X(s.name), 1),
                        ],
                        10,
                        IT
                      ),
                    ]
                  )),
                  [[r, `navigation-language-switcher-${s.locale}`]]
                )
              ),
              128
            )),
          ]),
        ]),
      ],
      512
    )
  );
}
const DT = oe(_T, [['render', ET]]),
  MT = re({
    __name: 'ZyroHamburger',
    props: {
      title: { type: String, default: 'Menu' },
      isOpen: { type: Boolean, required: !0 },
      color: { type: String, default: 'var(--nav-link-text-color)' },
    },
    setup(e, { expose: n }) {
      n(), it((i) => ({ '165ebbac': t.value }));
      const a = e,
        t = u(() => a.color),
        o = { props: a, burgerColor: t };
      return (
        Object.defineProperty(o, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        o
      );
    },
  }),
  ki = (e) => (Bt('data-v-ccf9b649'), (e = e()), xt(), e),
  OT = ['title'],
  LT = ki(() => E('span', { class: 'burger__bun' }, null, -1)),
  AT = ki(() => E('span', { class: 'burger__meat' }, null, -1)),
  BT = ki(() => E('span', { class: 'burger__bun' }, null, -1)),
  xT = [LT, AT, BT];
function RT(e, n, a, t, o, i) {
  return (
    c(),
    h(
      'button',
      {
        type: 'button',
        class: Z(['burger', { 'burger--open': a.isOpen }]),
        title: a.title,
      },
      xT,
      10,
      OT
    )
  );
}
const HT = oe(MT, [
    ['render', RT],
    ['__scopeId', 'data-v-ccf9b649'],
  ]),
  NT = re({
    name: 'BlockHeaderBackground',
    props: {
      type: { type: String, default: 'color' },
      imageUrl: { type: String, default: null },
      color: { type: String, default: '' },
      isTransparent: { type: Boolean, default: !1 },
      overlayOpacity: { type: Number, default: 0 },
    },
    computed: {
      backgroundImage() {
        return this.type === 'image' && this.imageUrl;
      },
      backgroundColor() {
        return this.type === 'color' ? this.color : 'transparent';
      },
      backgroundCSSVars() {
        return {
          '--background-color': this.isTransparent
            ? 'transparent'
            : this.backgroundColor,
          ...(!!this.backgroundImage && {
            '--background-image': `url(${this.backgroundImage})`,
          }),
          ...(!!this.overlayOpacity && {
            '--overlay-opacity': this.overlayOpacity,
          }),
        };
      },
    },
  });
function $T(e, n, a, t, o, i) {
  return (
    c(),
    h(
      'div',
      {
        class: Z([
          'background',
          { 'background--with-image': e.backgroundImage },
        ]),
        style: Ae(e.backgroundCSSVars),
      },
      null,
      6
    )
  );
}
const VT = oe(NT, [['render', $T]]),
  UT = re({
    __name: 'BlockHeaderCart',
    props: { cartIconSize: {}, cartText: {}, itemsInCart: {}, cartUrl: {} },
    emits: ['cart-click'],
    setup(e, { expose: n, emit: a }) {
      n(), it((s) => ({ '0869983e': i.value }));
      const t = e,
        o = a,
        i = u(() => t.cartIconSize),
        r = { props: t, emit: o, cartIconSize: i };
      return (
        Object.defineProperty(r, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        r
      );
    },
  }),
  YT = (e) => (Bt('data-v-8511a203'), (e = e()), xt(), e),
  FT = { class: 'block-header-cart-wrapper' },
  WT = ['href'],
  qT = { class: 'block-header-cart__icon-container' },
  GT = YT(() =>
    E(
      'svg',
      {
        width: '19',
        height: '24',
        viewBox: '0 0 19 24',
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        class: 'block-header-cart__icon',
      },
      [
        E('path', {
          'fill-rule': 'evenodd',
          'clip-rule': 'evenodd',
          d: `M5.94636 5.35922C6.29451 3.00506 7.9363 1.39824 9.67973
						1.39824C11.4232 1.39824 13.0649 3.00506
						13.4131 5.35922H5.94636ZM4.53847 5.35922C4.90317 2.43147
						6.95866 0.000183105 9.67973 0.000183105C12.4008
						0.000183105 14.4563 2.43147 14.821 5.35922H17.2816H18.6797V6.75728V21.2039C18.6797
						22.7481 17.4278 24 15.8836
						24H3.4758C1.93155 24 0.679688 22.7481 0.679688
						21.2039V6.75728V5.35922H2.07775H4.53847ZM2.07775 6.75728H4.52596V9.08752C4.52596
						9.47359 4.83893 9.78655 5.22499 9.78655C5.61105 9.78655 5.92402 9.47359
						5.92402 9.08752V6.75728H13.5259V9.08752C13.5259 9.47359
						13.8389 9.78655 14.2249 9.78655C14.611 9.78655 14.9239
						9.47359 14.9239 9.08752V6.75728H17.2816V21.2039C17.2816 21.976 16.6557 22.6019
						15.8836 22.6019H3.4758C2.70368 22.6019 2.07775 21.976 2.07775 21.2039V6.75728Z`,
          fill: 'currentColor',
        }),
      ],
      -1
    )
  ),
  jT = { class: 'block-header-cart__cart-text' };
function zT(e, n, a, t, o, i) {
  const r = je('qa');
  return (
    c(),
    h('div', FT, [
      E(
        'a',
        { href: a.cartUrl, class: 'block-header-cart' },
        [
          ue(
            (c(),
            h(
              'button',
              {
                class: 'block-header-cart__button',
                title: 'Go to cart',
                onClick: n[0] || (n[0] = (s) => t.emit('cart-click')),
              },
              [
                E('div', qT, [
                  GT,
                  E('span', null, [
                    E('span', jT, X(a.cartText), 1),
                    He(' (' + X(a.itemsInCart) + ')', 1),
                  ]),
                ]),
              ]
            )),
            [[r, 'header-btn-shoppingbag']]
          ),
        ],
        8,
        WT
      ),
    ])
  );
}
const KT = oe(UT, [
    ['render', zT],
    ['__scopeId', 'data-v-8511a203'],
  ]),
  QT = re({
    __name: 'BlockHeaderItemContent',
    props: { item: {} },
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = u(
          () =>
            `${
              a.item.isCurrent
                ? 'navigationblock-page-active-'
                : 'navigationblock-page-'
            }${a.item.name}`
        ),
        o = { props: a, linkDataQa: t };
      return (
        Object.defineProperty(o, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        o
      );
    },
  }),
  ZT = (e) => (Bt('data-v-04741be4'), (e = e()), xt(), e),
  XT = ['target', 'rel', 'href', 'textContent'],
  JT = ['textContent'],
  eC = { key: 2, class: 'item-content__icon-container-wrapper' },
  tC = ZT(() =>
    E(
      'span',
      { class: 'item-content__icon-container' },
      [
        E(
          'svg',
          {
            class: 'item-content__icon',
            width: '10',
            height: '7',
            viewBox: '0 0 10 7',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
          },
          [
            E('path', {
              d: 'M5 6.5L0.669873 0.5L9.33013 0.500001L5 6.5Z',
              fill: 'currentColor',
            }),
          ]
        ),
      ],
      -1
    )
  ),
  aC = [tC];
function nC(e, n, a, t, o, i) {
  const r = je('qa');
  return (
    c(),
    h(
      'div',
      {
        class: Z([
          'item-content-wrapper',
          { 'item-content-wrapper--active': a.item.isCurrent },
        ]),
      },
      [
        a.item.href
          ? ue(
              (c(),
              h(
                'a',
                {
                  key: 0,
                  class: 'item-content',
                  target: a.item.target,
                  rel: a.item.rel,
                  href: a.item.href,
                  textContent: X(a.item.name),
                },
                null,
                8,
                XT
              )),
              [[r, t.linkDataQa]]
            )
          : ue(
              (c(),
              h(
                'span',
                { key: 1, class: 'item-content', textContent: X(a.item.name) },
                null,
                8,
                JT
              )),
              [[r, t.linkDataQa]]
            ),
        a.item.hasDropdown ? (c(), h('div', eC, aC)) : O('', !0),
      ],
      2
    )
  );
}
const oC = oe(QT, [
    ['render', nC],
    ['__scopeId', 'data-v-04741be4'],
  ]),
  rC = re({
    __name: 'BlockHeaderItem',
    props: { item: {}, areDropdownsHidden: { type: Boolean } },
    setup(e, { expose: n }) {
      n();
      const t = { props: e, BlockHeaderItemContent: oC };
      return (
        Object.defineProperty(t, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        t
      );
    },
  }),
  iC = { class: 'block-header-item' },
  sC = { class: 'block-header-item__label' },
  lC = {
    key: 0,
    type: 'checkbox',
    class: 'block-header-item__mobile-dropdown-trigger',
  },
  uC = { key: 1, class: 'block-header-item__dropdown-area' },
  cC = { class: 'block-header-item__dropdown' };
function dC(e, n, a, t, o, i) {
  const r = Be('BlockHeaderItem', !0),
    s = je('qa');
  return (
    c(),
    h('li', iC, [
      E('label', sC, [
        !t.props.areDropdownsHidden && t.props.item.hasDropdown
          ? (c(), h('input', lC))
          : O('', !0),
        ue(
          Me(
            t.BlockHeaderItemContent,
            {
              item: a.item,
              class: 'block-header-item__item',
              'aria-haspopup': a.item.hasDropdown,
            },
            null,
            8,
            ['item', 'aria-haspopup']
          ),
          [[s, `navigation-item-${a.item.name}`]]
        ),
        !t.props.areDropdownsHidden && t.props.item.hasDropdown
          ? (c(),
            h('div', uC, [
              E('ul', cC, [
                (c(!0),
                h(
                  ge,
                  null,
                  ke(
                    t.props.item.subItems,
                    (l) => (
                      c(), q(r, { key: l.id, item: l }, null, 8, ['item'])
                    )
                  ),
                  128
                )),
              ]),
            ]))
          : O('', !0),
      ]),
    ])
  );
}
const mC = oe(rC, [
    ['render', dC],
    ['__scopeId', 'data-v-e35d3004'],
  ]),
  gC = re({
    __name: 'BlockHeaderLogo',
    props: {
      logoSrc: {},
      logoSvg: {},
      href: {},
      height: {},
      heightMobile: {},
      maxWidth: {},
      maxWidthMobile: {},
      objectPosition: {},
      objectPositionMobile: {},
      isOptimized: { type: Boolean },
      siteName: {},
    },
    setup(e, { expose: n }) {
      n(),
        it((d) => ({
          '0c92dd22': r.value,
          '234ca29e': o.value,
          db96c802: l.value,
          '2b0f8ad0': s.value,
          '1d12d55d': i.value,
          '62b79fbe': m.value,
        }));
      const a = e,
        t = u(() => (a.siteName ? `${a.siteName} logo` : '')),
        o = u(() => (a.isOptimized && a.height ? `${a.height}px` : 'auto')),
        i = u(() =>
          a.isOptimized && a.heightMobile ? `${a.heightMobile}px` : 'auto'
        ),
        r = u(() => a.maxWidth),
        s = u(() => a.maxWidthMobile || r.value),
        l = u(() => a.objectPosition),
        m = u(() => a.objectPositionMobile),
        g = {
          props: a,
          logoAltTag: t,
          height: o,
          mHeight: i,
          width: r,
          mWidth: s,
          objectPosition: l,
          mObjectPosition: m,
        };
      return (
        Object.defineProperty(g, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        g
      );
    },
  }),
  vC = ['href'],
  pC = ['innerHTML'],
  hC = ['src', 'alt'];
function fC(e, n, a, t, o, i) {
  const r = je('qa');
  return (
    c(),
    h(
      'a',
      { class: 'block-header-logo', href: t.props.href },
      [
        t.props.logoSvg
          ? (c(),
            h(
              'div',
              {
                key: 0,
                class: 'block-header-logo__image',
                innerHTML: t.props.logoSvg,
              },
              null,
              8,
              pC
            ))
          : t.props.logoSrc
          ? ue(
              (c(),
              h(
                'img',
                {
                  key: 1,
                  class: 'block-header-logo__image',
                  src: t.props.logoSrc,
                  alt: t.logoAltTag,
                },
                null,
                8,
                hC
              )),
              [[r, 'builder-siteheader-img-logo']]
            )
          : O('', !0),
      ],
      8,
      vC
    )
  );
}
const yC = oe(gC, [
    ['render', fC],
    ['__scopeId', 'data-v-83dc91a0'],
  ]),
  bC = re({
    __name: 'BlockHeaderLayout',
    props: {
      layout: {},
      mobileLayout: {},
      isLogoVisible: { type: Boolean },
      isLanguageSwitcherVisible: { type: Boolean },
      areSocialIconLinksVisible: { type: Boolean },
      isCartVisible: { type: Boolean },
      isButtonVisible: { type: Boolean },
      isMobileMenuDropdownOpen: { type: Boolean },
      isMobileMenuDropdownFullScreen: { type: Boolean },
      mobileLinksAlignment: {},
    },
    setup(e, { expose: n }) {
      n(), it((d) => ({ '3c28effe': m.value, b96ef066: s.value }));
      const a = e,
        t = M(null),
        o = M(null),
        i = M(0),
        r = up(o),
        s = u(() => `${i.value}px`),
        l = u(
          () =>
            [
              a.isLanguageSwitcherVisible,
              a.areSocialIconLinksVisible,
              a.isCartVisible,
              a.isButtonVisible,
            ].filter(Boolean).length
        ),
        m = u(
          () =>
            `${a.isLogoVisible ? 'min-content' : ''} auto ${
              l.value > 0 ? `repeat(${l.value}, min-content)` : ''
            }`
        );
      Oe(() => {
        (o.value = document.body),
          (i.value =
            document.querySelector('.block-sticky-bar')?.clientHeight ?? 0);
      }),
        Re(
          () => a.isMobileMenuDropdownOpen,
          (d) => {
            d
              ? (t?.value && (t.value.scrollTop = 0), (r.value = !0))
              : (r.value = !1);
          }
        );
      const g = {
        props: a,
        dropdownRef: t,
        bodyElement: o,
        stickyBarHeight: i,
        isBodyScrollLocked: r,
        stickyBarHeightPx: s,
        visibleNonCenteredRightElementsCount: l,
        nonCenteredLayoutColumns: m,
        get BLOCK_HEADER_LAYOUTS() {
          return wc;
        },
      };
      return (
        Object.defineProperty(g, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        g
      );
    },
  }),
  _C = {
    key: 1,
    class: 'block-header-layout-desktop block-header-layout-desktop--desktop-3',
  },
  wC = { class: 'block-header-layout-desktop__right-side' },
  kC = {
    key: 2,
    class: 'block-header-layout-desktop block-header-layout-desktop--desktop-4',
  },
  SC = { class: 'block-header-layout-desktop__right-side' },
  TC = {
    key: 3,
    class: 'block-header-layout-desktop block-header-layout-desktop--desktop-5',
  },
  CC = { class: 'block-header-layout-desktop__right-side' };
function PC(e, n, a, t, o, i) {
  return (
    c(),
    h(
      ge,
      null,
      [
        t.props.layout === t.BLOCK_HEADER_LAYOUTS.DESKTOP_1 ||
        t.props.layout === t.BLOCK_HEADER_LAYOUTS.DESKTOP_2
          ? (c(),
            h(
              'div',
              {
                key: 0,
                class: Z(
                  `block-header-layout-desktop block-header-layout-desktop--${t.props.layout}`
                ),
              },
              [
                te(e.$slots, 'logo', {}, void 0, !0),
                te(e.$slots, 'nav', {}, void 0, !0),
                te(e.$slots, 'language-switcher', {}, void 0, !0),
                te(e.$slots, 'social-icons', {}, void 0, !0),
                te(e.$slots, 'cart', {}, void 0, !0),
                te(e.$slots, 'button', {}, void 0, !0),
              ],
              2
            ))
          : t.props.layout === t.BLOCK_HEADER_LAYOUTS.DESKTOP_3
          ? (c(),
            h('div', _C, [
              te(e.$slots, 'logo', {}, void 0, !0),
              te(e.$slots, 'nav', {}, void 0, !0),
              E('div', wC, [
                te(e.$slots, 'language-switcher', {}, void 0, !0),
                te(e.$slots, 'social-icons', {}, void 0, !0),
                te(e.$slots, 'cart', {}, void 0, !0),
                te(e.$slots, 'button', {}, void 0, !0),
              ]),
            ]))
          : t.props.layout === t.BLOCK_HEADER_LAYOUTS.DESKTOP_4
          ? (c(),
            h('div', kC, [
              te(e.$slots, 'nav', {}, void 0, !0),
              te(e.$slots, 'logo', {}, void 0, !0),
              E('div', SC, [
                te(e.$slots, 'language-switcher', {}, void 0, !0),
                te(e.$slots, 'social-icons', {}, void 0, !0),
                te(e.$slots, 'cart', {}, void 0, !0),
                te(e.$slots, 'button', {}, void 0, !0),
              ]),
            ]))
          : t.props.layout === t.BLOCK_HEADER_LAYOUTS.DESKTOP_5
          ? (c(),
            h('div', TC, [
              te(e.$slots, 'logo', {}, void 0, !0),
              te(e.$slots, 'social-icons', {}, void 0, !0),
              te(e.$slots, 'nav', {}, void 0, !0),
              E('div', CC, [
                te(e.$slots, 'language-switcher', {}, void 0, !0),
                te(e.$slots, 'cart', {}, void 0, !0),
                te(e.$slots, 'button', {}, void 0, !0),
              ]),
            ]))
          : O('', !0),
        E(
          'div',
          {
            class: Z([
              'block-header-layout-mobile',
              `block-header-layout-mobile--${t.props.mobileLayout}`,
            ]),
          },
          [
            te(e.$slots, 'logo', {}, void 0, !0),
            te(e.$slots, 'cart', {}, void 0, !0),
            te(e.$slots, 'hamburger-menu', {}, void 0, !0),
            E(
              'div',
              {
                ref: 'dropdownRef',
                class: Z([
                  'block-header-layout-mobile__dropdown',
                  [
                    `block-header-layout-mobile__dropdown--link-align-${t.props.mobileLinksAlignment}`,
                    {
                      'block-header-layout-mobile__dropdown--open':
                        t.props.isMobileMenuDropdownOpen,
                    },
                    {
                      'block-header-layout-mobile__dropdown--full-screen':
                        t.props.isMobileMenuDropdownFullScreen,
                    },
                  ],
                ]),
              },
              [
                te(e.$slots, 'nav', {}, void 0, !0),
                te(e.$slots, 'language-switcher', {}, void 0, !0),
                te(e.$slots, 'social-icons', {}, void 0, !0),
                te(e.$slots, 'button', {}, void 0, !0),
              ],
              2
            ),
          ],
          2
        ),
      ],
      64
    )
  );
}
const IC = oe(bC, [
    ['render', PC],
    ['__scopeId', 'data-v-3b3f462d'],
  ]),
  EC = re({
    __name: 'BlockHeaderButton',
    props: { elementId: {}, data: {} },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { getButtonHref: t } = Xe(),
        {
          tagName: o,
          href: i,
          target: r,
          rel: s,
          type: l,
          content: m,
          fontSizeMobile: g,
          fontSizeDesktop: d,
          fontFamily: v,
          fontWeight: f,
          borderWidth: y,
          borderRadius: S,
          backgroundColor: T,
          fontColor: w,
          borderColor: b,
          backgroundColorHover: L,
          fontColorHover: D,
          borderColorHover: P,
          mobileElementWidth: x,
          mobileElementHeight: B,
        } = Vn(a, {
          href: u(() =>
            t({
              isFormButton: !1,
              linkedPageId: a.data.linkedPageId,
              linkType: a.data.linkType,
              href: a.data.href,
            })
          ),
        }),
        K = {
          props: a,
          getButtonHref: t,
          tagName: o,
          href: i,
          target: r,
          rel: s,
          type: l,
          content: m,
          fontSizeMobile: g,
          fontSizeDesktop: d,
          fontFamily: v,
          fontWeight: f,
          borderWidth: y,
          borderRadius: S,
          backgroundColor: T,
          fontColor: w,
          borderColor: b,
          backgroundColorHover: L,
          fontColorHover: D,
          borderColorHover: P,
          mobileElementWidth: x,
          mobileElementHeight: B,
          GridButton: Ya,
        };
      return (
        Object.defineProperty(K, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        K
      );
    },
  });
function DC(e, n, a, t, o, i) {
  return (
    c(),
    q(
      t.GridButton,
      {
        'data-element-ref': a.elementId,
        'tag-name': t.tagName,
        href: t.href,
        target: t.target,
        rel: t.rel,
        type: t.type,
        content: t.content,
        'font-size-mobile': t.fontSizeMobile,
        'font-size-desktop': t.fontSizeDesktop,
        'font-family': t.fontFamily,
        'font-weight': t.fontWeight,
        'border-width': t.borderWidth,
        'border-radius': t.borderRadius,
        'background-color': t.backgroundColor,
        'font-color': t.fontColor,
        'border-color': t.borderColor,
        'background-color-hover': t.backgroundColorHover,
        'font-color-hover': t.fontColorHover,
        'border-color-hover': t.borderColorHover,
        'mobile-element-width': t.mobileElementWidth,
        'mobile-element-height': t.mobileElementHeight,
        onClick: n[0] || (n[0] = De(() => {}, ['prevent'])),
        onDrag: n[1] || (n[1] = De(() => {}, ['prevent'])),
        onDragstart: n[2] || (n[2] = De(() => {}, ['prevent'])),
      },
      null,
      8,
      [
        'data-element-ref',
        'tag-name',
        'href',
        'target',
        'rel',
        'type',
        'content',
        'font-size-mobile',
        'font-size-desktop',
        'font-family',
        'font-weight',
        'border-width',
        'border-radius',
        'background-color',
        'font-color',
        'border-color',
        'background-color-hover',
        'font-color-hover',
        'border-color-hover',
        'mobile-element-width',
        'mobile-element-height',
      ]
    )
  );
}
const MC = oe(EC, [['render', DC]]),
  OC = re({
    __name: 'BlockHeader',
    props: {
      siteName: { default: '' },
      headerLayout: {},
      mHeaderLayout: {},
      languageSwitcherLanguages: {},
      items: {},
      logoHref: {},
      logoSrc: { default: '' },
      logoSvg: { default: '' },
      backgroundImageUrl: {},
      isOpen: { type: Boolean, default: !1 },
      isSticky: { type: Boolean },
      isTransparent: { type: Boolean },
      isLogoVisible: { type: Boolean, default: !1 },
      isCartVisible: { type: Boolean },
      isLanguageSwitcherVisible: { type: Boolean },
      currentLocale: { default: '' },
      backgroundColor: { default: '' },
      navLinkTextColor: { default: '' },
      navLinkTextColorHover: { default: '' },
      cartText: { default: '' },
      cartUrl: { default: '' },
      itemsInCart: { default: 0 },
      areDropdownsHidden: { type: Boolean },
      isLogoOptimized: { type: Boolean, default: !1 },
      background: {},
      cartIconSize: {},
      logoMaxWidth: {},
      heightMobile: {},
      logoHeight: {},
      logoHeightMobile: {},
      logoMaxWidthMobile: {},
      logoObjectPosition: {},
      logoObjectPositionMobile: {},
      fontFamily: {},
      fontWeight: {},
      socialIconsLinks: { default: () => [] },
      socialIconsStyles: { default: () => ({}) },
      buttonElementId: {},
      buttonElementData: { default: () => ({}) },
      isMobileMenuDropdownFullScreen: { type: Boolean },
      mobileLinksAlignment: {},
    },
    emits: [
      'toggle-visibility',
      'cart-click',
      'logo-click',
      'button-click',
      'navigation-click',
      'social-icons-click',
      'language-switcher-click',
    ],
    setup(e, { expose: n, emit: a }) {
      n();
      const t = e,
        o = a,
        { hasUserScrolled: i } = fl(),
        r = M(null),
        s = u(() => t.socialIconsLinks.length > 0),
        l = u(() => !!Object.keys(t.buttonElementData).length),
        m = u(() => i.value && t.isSticky),
        g = u(() => (t.isSticky && !i.value) || !t.isSticky),
        d = u(() => t.isTransparent && g.value && !t.isOpen),
        v = u(() => ({
          '--text-font-family': t.fontFamily,
          '--text-font-weight': t.fontWeight,
          '--nav-link-text-color':
            t.navLinkTextColor || 'var(--nav-link-color)',
          '--nav-link-text-color-hover':
            t.navLinkTextColorHover || 'var(--nav-link-color-hover)',
          '--header-height-mobile': `${t.heightMobile}px`,
          ...(s.value && {
            '--space-between-icons': '16px',
            '--icon-color': t.socialIconsStyles['icon-color'],
            '--icon-size': t.socialIconsStyles['icon-size'],
            '--icon-color-hover': t.socialIconsStyles['icon-color-hover'],
          }),
        }));
      Oe(() => {
        ko(r, () => {
          t.isOpen && o('toggle-visibility');
        });
      });
      const f = {
        props: t,
        emit: o,
        hasUserScrolled: i,
        headerRef: r,
        isSocialIconsLinksVisible: s,
        isButtonVisible: l,
        isWithShadow: m,
        shouldForceTransparency: g,
        isCurrentlyTransparent: d,
        computedStyles: v,
        LanguageSwitcher: DT,
        ZyroHamburger: HT,
        BlockHeaderBackground: VT,
        BlockHeaderCart: KT,
        BlockHeaderItem: mC,
        BlockHeaderLogo: yC,
        BlockHeaderLayout: IC,
        get BLOCK_HEADER_CLASS() {
          return gl;
        },
        GridSocialIcons: Il,
        BlockHeaderButton: MC,
      };
      return (
        Object.defineProperty(f, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        f
      );
    },
  }),
  LC = { class: 'block-header__nav-links' };
function AC(e, n, a, t, o, i) {
  const r = je('qa');
  return (
    c(),
    h(
      'header',
      {
        ref: 'headerRef',
        class: Z({
          [t.BLOCK_HEADER_CLASS]: !0,
          'block-header--with-shadow': t.isWithShadow,
        }),
        style: Ae(t.computedStyles),
      },
      [
        t.props.background
          ? (c(),
            q(
              t.BlockHeaderBackground,
              {
                key: 0,
                type: t.props.background.current,
                'image-url': t.props.backgroundImageUrl,
                color: t.props.background.color,
                'overlay-opacity': Number(
                  t.props.background['overlay-opacity']
                ),
                'is-transparent': t.isCurrentlyTransparent,
              },
              null,
              8,
              [
                'type',
                'image-url',
                'color',
                'overlay-opacity',
                'is-transparent',
              ]
            ))
          : O('', !0),
        Me(
          t.BlockHeaderLayout,
          {
            layout: t.props.headerLayout,
            'mobile-layout': t.props.mHeaderLayout,
            'is-logo-visible': t.props.isLogoVisible,
            'is-language-switcher-visible': t.props.isLanguageSwitcherVisible,
            'are-social-icon-links-visible': t.isSocialIconsLinksVisible,
            'is-cart-visible': t.props.isCartVisible,
            'is-button-visible': t.isButtonVisible,
            'is-mobile-menu-dropdown-open': t.props.isOpen,
            'is-mobile-menu-dropdown-full-screen':
              t.props.isMobileMenuDropdownFullScreen,
            'mobile-links-alignment': t.props.mobileLinksAlignment,
          },
          {
            'hamburger-menu': he(() => [
              t.props.items.length || t.props.isLanguageSwitcherVisible
                ? ue(
                    (c(),
                    q(
                      t.ZyroHamburger,
                      {
                        key: 0,
                        class: 'block-header__hamburger-menu',
                        'is-open': t.props.isOpen,
                        onClick:
                          n[0] ||
                          (n[0] = De(
                            (s) => e.$emit('toggle-visibility'),
                            ['stop']
                          )),
                      },
                      null,
                      8,
                      ['is-open']
                    )),
                    [[r, 'builder-siteheader-btn-hamburger']]
                  )
                : O('', !0),
            ]),
            logo: he(() => [
              t.props.isLogoVisible
                ? (c(),
                  q(
                    t.BlockHeaderLogo,
                    {
                      key: 0,
                      class: 'block-header__logo',
                      'logo-src': t.props.logoSrc,
                      'logo-svg': t.props.logoSvg,
                      href: t.props.logoHref,
                      'site-name': t.props.siteName,
                      'max-width': t.props.logoMaxWidth,
                      'max-width-mobile': t.props.logoMaxWidthMobile,
                      height: t.props.logoHeight,
                      'height-mobile': t.props.logoHeightMobile,
                      'is-optimized': t.props.isLogoOptimized,
                      'object-position': t.props.logoObjectPosition,
                      'object-position-mobile':
                        t.props.logoObjectPositionMobile,
                      onClick: n[1] || (n[1] = (s) => e.$emit('logo-click')),
                    },
                    null,
                    8,
                    [
                      'logo-src',
                      'logo-svg',
                      'href',
                      'site-name',
                      'max-width',
                      'max-width-mobile',
                      'height',
                      'height-mobile',
                      'is-optimized',
                      'object-position',
                      'object-position-mobile',
                    ]
                  ))
                : O('', !0),
            ]),
            nav: he(() => [
              E(
                'nav',
                {
                  class: 'block-header__nav',
                  onClick: n[2] || (n[2] = (s) => t.emit('navigation-click')),
                },
                [
                  ue(
                    (c(),
                    h('ul', LC, [
                      (c(!0),
                      h(
                        ge,
                        null,
                        ke(
                          t.props.items,
                          (s) => (
                            c(),
                            q(
                              t.BlockHeaderItem,
                              {
                                key: s.id,
                                item: s,
                                'are-dropdowns-hidden':
                                  t.props.areDropdownsHidden,
                              },
                              null,
                              8,
                              ['item', 'are-dropdowns-hidden']
                            )
                          )
                        ),
                        128
                      )),
                    ])),
                    [[r, 'builder-siteheader-emptyspace']]
                  ),
                ]
              ),
            ]),
            'social-icons': he(() => [
              t.props.socialIconsLinks.length
                ? (c(),
                  q(
                    t.GridSocialIcons,
                    {
                      key: 0,
                      class: 'block-header__social-icons',
                      links: t.props.socialIconsLinks,
                    },
                    null,
                    8,
                    ['links']
                  ))
                : O('', !0),
            ]),
            'language-switcher': he(() => [
              t.props.isLanguageSwitcherVisible
                ? (c(),
                  q(
                    t.LanguageSwitcher,
                    {
                      key: 0,
                      class: Z([
                        'block-header__language-switcher',
                        { 'mouse-disabled': t.props.areDropdownsHidden },
                      ]),
                      languages: t.props.languageSwitcherLanguages,
                      'current-locale': t.props.currentLocale,
                    },
                    null,
                    8,
                    ['class', 'languages', 'current-locale']
                  ))
                : O('', !0),
            ]),
            cart: he(() => [
              t.props.isCartVisible
                ? (c(),
                  q(
                    t.BlockHeaderCart,
                    {
                      key: 0,
                      class: 'block-header__cart',
                      'cart-text': t.props.cartText,
                      'cart-url': t.props.cartUrl,
                      'items-in-cart': t.props.itemsInCart,
                      'cart-icon-size': t.props.cartIconSize,
                      onCartClick:
                        n[3] || (n[3] = (s) => e.$emit('cart-click')),
                    },
                    null,
                    8,
                    ['cart-text', 'cart-url', 'items-in-cart', 'cart-icon-size']
                  ))
                : O('', !0),
            ]),
            button: he(() => [
              t.isButtonVisible && t.props.buttonElementId
                ? (c(),
                  q(
                    t.BlockHeaderButton,
                    {
                      key: 0,
                      class: 'block-header__button',
                      'element-id': t.props.buttonElementId,
                      data: t.props.buttonElementData,
                    },
                    null,
                    8,
                    ['element-id', 'data']
                  ))
                : O('', !0),
            ]),
            _: 1,
          },
          8,
          [
            'layout',
            'mobile-layout',
            'is-logo-visible',
            'is-language-switcher-visible',
            'are-social-icon-links-visible',
            'is-cart-visible',
            'is-button-visible',
            'is-mobile-menu-dropdown-open',
            'is-mobile-menu-dropdown-full-screen',
            'mobile-links-alignment',
          ]
        ),
      ],
      6
    )
  );
}
const BC = oe(OC, [
    ['render', AC],
    ['__scopeId', 'data-v-e93100a8'],
  ]),
  xC = (e) => {
    const a = e.current === 'image' ? `url(${e[e.current]})` : e[e.current];
    return { [`--background-${e.current}`]: a };
  },
  RC = (e) => e && Object.values(e).some((n) => Wd.includes(n.type)),
  HC = (e) =>
    e && Object.values(e).some((n) => n?.type === 'GridEcommerceButton'),
  xu = ({ blocks: e, elements: n }) => HC(n) || RC(e),
  NC = ({
    siteId: e,
    meta: n,
    blocks: a,
    nav: t,
    pages: o,
    elements: i,
    languageMetaTitle: r,
    languageSwitcherLanguages: s,
    currentLocale: l,
    currentPageId: m,
    isLogoOptimized: g,
    shoppingCartItems: d,
    ecwidCartItemCount: v,
    isOpen: f,
    getPagePathFromId: y,
    ecwidPages: S,
    isEcommerceWebsite: T,
  }) => {
    const { headerHeight: w, headerHeightMobile: b, defaultLocale: L } = n,
      {
        background: D,
        settings: P,
        fontWeight: x,
        fontFamily: B,
        navLinkTextColor: K,
        navLinkTextColorHover: W,
      } = a.header,
      { imageOrigin: C, imagePath: H } = D,
      {
        cartText: F,
        isCartVisible: Q,
        isLanguageSwitcherHidden: N,
        isSticky: I,
        logoPlacement: U,
        navigationPlacement: V,
        showLogo: j,
        styles: k,
        logoImageOrigin: p,
        logoImagePath: Y,
        logoSvg: G,
        headerLayout: ee,
        mHeaderLayout: J,
        isMobileMenuDropdownFullScreen: R,
        mobileLinksAlignment: _,
      } = P,
      ae = Object.keys(S).length > 0,
      ve = xu({ blocks: a, elements: i }),
      le = { ...Nt(k), ...xC(D) },
      be = () => {
        if (!g) return Vr(p, Y, e);
        const Ze = Number.parseInt(k['logo-width'], 10);
        return ct(p, Y, e, { width: Ze * 2, quality: 95 });
      },
      de = () => ct(C, H, e, { width: ha }),
      z = (Ze) => {
        const {
          navItemId: ca,
          linkType: ya,
          linkedPageId: Jt,
          isHidden: $,
          rel: se,
          href: Te,
          target: xe,
          name: Qe,
          subItems: _e = [],
        } = Ze;
        return {
          navItemId: ca,
          hasDropdown: !!_e.length,
          isCurrent: m === Jt,
          subItems: _e.map(z),
          target: xe,
          name: ya === Bi ? o[Jt]?.name : Qe,
          isHidden: $,
          rel: se,
          href: ya === Bi ? y({ pageId: Jt }) : Te,
          locale: l,
        };
      },
      ie = t.filter(({ isHidden: Ze }) => !Ze).map(z),
      Ee = Q && (ae || ve),
      me = !!s.length && !N && l !== Kt,
      Pe = () => (T || ve ? d.length : Q ? v : 0),
      ze = () => {
        if (!S || !Object.keys(S).length) return null;
        const [Ze] = Object.keys(S);
        return `${y({ pageId: Ze })}?store-page=cart`;
      },
      ot = r ?? n.metaTitle,
      lt = a.header.components.find((Ze) => i[Ze].type === ml),
      Lt = i[lt]?.links || [],
      _t = i[lt]?.settings?.styles || {},
      ua = a.header.components.find((Ze) => i[Ze].type === dl),
      Xt = i[ua];
    return {
      background: D,
      backgroundColor: D.color,
      backgroundImageUrl: de(),
      backgroundColorContrast: k.contrastBackgroundColor,
      cartText: F,
      cartIconSize: k.cartIconSize,
      cartUrl: ze(),
      currentLocale: l,
      height: w,
      heightMobile: b,
      fontFamily: B,
      navLinkTextColor: K,
      navLinkTextColorHover: W,
      fontWeight: x,
      isTransparent: D.isTransparent,
      items: ie,
      isCartVisible: Ee,
      itemsInCart: Pe(),
      isSticky: I,
      isLanguageSwitcherVisible: me,
      isLogoVisible: j,
      isLogoOptimized: g,
      isOpen: f,
      languageSwitcherLanguages: s,
      logoHeight: a.header?.desktop?.logoHeight,
      logoHref: l !== L && l !== Kt ? `/${l}` : '/',
      logoHeightMobile: a.header?.mobile?.logoHeight,
      logoMaxWidth: k['logo-width'],
      logoMaxWidthMobile: k['m-logo-width'],
      logoObjectPosition: k['logo-image-object-position'],
      logoObjectPositionMobile: k['m-logo-image-object-position'],
      logoPlacement: U,
      logoPlacementMobile: P['m-logoPlacement'] || U,
      logoSrc: be(),
      logoSvg: G,
      style: le,
      siteName: ot,
      socialIconsLinks: Lt,
      socialIconsStyles: _t,
      buttonElementId: ua,
      buttonElementData: Xt,
      navigationPlacement: V,
      navigationPlacementMobile: P['m-navigationPlacement'] || V,
      headerLayout: ee,
      mHeaderLayout: J,
      isMobileMenuDropdownFullScreen: R,
      mobileLinksAlignment: _,
    };
  };
function $C(e) {
  if (Array.isArray(e)) {
    for (var n = 0, a = Array(e.length); n < e.length; n++) a[n] = e[n];
    return a;
  } else return Array.from(e);
}
var Si = !1;
if (typeof window < 'u') {
  var tl = {
    get passive() {
      Si = !0;
    },
  };
  window.addEventListener('testPassive', null, tl),
    window.removeEventListener('testPassive', null, tl);
}
var Ru =
    typeof window < 'u' &&
    window.navigator &&
    window.navigator.platform &&
    (/iP(ad|hone|od)/.test(window.navigator.platform) ||
      (window.navigator.platform === 'MacIntel' &&
        window.navigator.maxTouchPoints > 1)),
  tn = [],
  fo = !1,
  Ti = -1,
  An = void 0,
  Bn = void 0,
  Hu = function (n) {
    return tn.some(function (a) {
      return !!(a.options.allowTouchMove && a.options.allowTouchMove(n));
    });
  },
  yo = function (n) {
    var a = n || window.event;
    return Hu(a.target) || a.touches.length > 1
      ? !0
      : (a.preventDefault && a.preventDefault(), !1);
  },
  VC = function (n) {
    if (Bn === void 0) {
      var a = !!n,
        t = window.innerWidth - document.documentElement.clientWidth;
      a &&
        t > 0 &&
        ((Bn = document.body.style.paddingRight),
        (document.body.style.paddingRight = t + 'px'));
    }
    An === void 0 &&
      ((An = document.body.style.overflow),
      (document.body.style.overflow = 'hidden'));
  },
  UC = function () {
    Bn !== void 0 && ((document.body.style.paddingRight = Bn), (Bn = void 0)),
      An !== void 0 && ((document.body.style.overflow = An), (An = void 0));
  },
  YC = function (n) {
    return n ? n.scrollHeight - n.scrollTop <= n.clientHeight : !1;
  },
  FC = function (n, a) {
    var t = n.targetTouches[0].clientY - Ti;
    return Hu(n.target)
      ? !1
      : (a && a.scrollTop === 0 && t > 0) || (YC(a) && t < 0)
      ? yo(n)
      : (n.stopPropagation(), !0);
  },
  WC = function (n, a) {
    if (!n) {
      console.error(
        'disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.'
      );
      return;
    }
    if (
      !tn.some(function (o) {
        return o.targetElement === n;
      })
    ) {
      var t = { targetElement: n, options: {} };
      (tn = [].concat($C(tn), [t])),
        Ru
          ? ((n.ontouchstart = function (o) {
              o.targetTouches.length === 1 && (Ti = o.targetTouches[0].clientY);
            }),
            (n.ontouchmove = function (o) {
              o.targetTouches.length === 1 && FC(o, n);
            }),
            fo ||
              (document.addEventListener(
                'touchmove',
                yo,
                Si ? { passive: !1 } : void 0
              ),
              (fo = !0)))
          : VC(a);
    }
  },
  qC = function () {
    Ru
      ? (tn.forEach(function (n) {
          (n.targetElement.ontouchstart = null),
            (n.targetElement.ontouchmove = null);
        }),
        fo &&
          (document.removeEventListener(
            'touchmove',
            yo,
            Si ? { passive: !1 } : void 0
          ),
          (fo = !1)),
        (Ti = -1))
      : UC(),
      (tn = []);
  };
const GC = re({
    name: 'Lightbox',
    setup() {
      const {
          lightboxImages: e,
          currentLightboxImageIndex: n,
          currentLightboxImage: a,
          closeLightbox: t,
          isLightboxOpen: o,
          isFirstImage: i,
          isLastImage: r,
          isImageGalleryMode: s,
          onLightboxClickOutside: l,
          handleLightboxNav: m,
          goToNextImage: g,
          goToPreviousImage: d,
        } = on(),
        v = M(null),
        { enableMoveEvents: f } = Nl({
          move: { drag: !0, swipe: !0 },
          onMoveLeft: g,
          onMoveRight: d,
        });
      return (
        Oe(() => {
          ko(v, (y) => {
            y.target.matches('[data-lightbox-button],[data-lightbox-nav]') ||
              t();
          }),
            f(),
            window.document.addEventListener('keydown', m);
        }),
        Tt(() => {
          t(), f(!1), document.removeEventListener('keydown', m);
        }),
        {
          lightboxImages: e,
          currentLightboxImageIndex: n,
          currentLightboxImage: a,
          closeLightbox: t,
          isImageGalleryMode: s,
          isFirstImage: i,
          isLastImage: r,
          isLightboxOpen: o,
          onLightboxClickOutside: l,
          goToNextImage: g,
          goToPreviousImage: d,
          lightboxRef: v,
        }
      );
    },
    async mounted() {
      await this.$nextTick(), WC(this.$refs.lightboxRef);
    },
    beforeUnmount() {
      qC();
    },
  }),
  jC = { key: 0, class: 'lightbox', role: 'dialog', 'aria-modal': 'true' },
  zC = { class: 'lightbox__container' },
  KC = E(
    'button',
    {
      class: 'lightbox__button lightbox__button--nav lightbox__button--prev',
      'data-lightbox-button': '',
    },
    null,
    -1
  ),
  QC = [KC],
  ZC = ['src', 'alt'],
  XC = E(
    'button',
    {
      'data-lightbox-button': '',
      class: 'lightbox__button lightbox__button--nav lightbox__button--next',
    },
    null,
    -1
  ),
  JC = [XC];
function eP(e, n, a, t, o, i) {
  return (
    c(),
    q(
      Ot,
      { name: 'fade', appear: '' },
      {
        default: he(() => [
          e.isLightboxOpen
            ? (c(),
              h('div', jC, [
                E('button', {
                  class: 'lightbox__button lightbox__button--close',
                  title: 'close-ligthbox-button',
                  'data-lightbox-button': '',
                  onClick:
                    n[0] ||
                    (n[0] = (...r) => e.closeLightbox && e.closeLightbox(...r)),
                }),
                E('div', zC, [
                  E(
                    'div',
                    {
                      class: Z([
                        'lightbox__nav',
                        {
                          'lightbox__nav--multiple': e.isImageGalleryMode,
                          'lightbox__nav--single': !e.isImageGalleryMode,
                        },
                      ]),
                      'data-lightbox-nav': '',
                      onClick:
                        n[1] ||
                        (n[1] = (...r) =>
                          e.goToPreviousImage && e.goToPreviousImage(...r)),
                    },
                    QC,
                    2
                  ),
                  Me(
                    Ot,
                    { name: 'fade', mode: 'out-in' },
                    {
                      default: he(() => [
                        (c(),
                        h(
                          'img',
                          {
                            key: `${e.currentLightboxImage.src}${e.currentLightboxImageIndex}`,
                            ref: 'lightboxRef',
                            class: Z([
                              'lightbox__image',
                              {
                                'lightbox__image--multiple':
                                  e.isImageGalleryMode,
                                'lightbox__image--single':
                                  !e.isImageGalleryMode,
                              },
                            ]),
                            src: e.currentLightboxImage.src,
                            alt: e.currentLightboxImage.alt,
                          },
                          null,
                          10,
                          ZC
                        )),
                      ]),
                      _: 1,
                    }
                  ),
                  E(
                    'div',
                    {
                      class: Z([
                        'lightbox__nav',
                        {
                          'lightbox__nav--multiple': e.isImageGalleryMode,
                          'lightbox__nav--single': !e.isImageGalleryMode,
                        },
                      ]),
                      'data-lightbox-nav': '',
                      onClick:
                        n[2] ||
                        (n[2] = (...r) =>
                          e.goToNextImage && e.goToNextImage(...r)),
                    },
                    JC,
                    2
                  ),
                ]),
              ]))
            : O('', !0),
        ]),
        _: 1,
      }
    )
  );
}
const tP = oe(GC, [['render', eP]]),
  aP = re({
    __name: 'Page',
    props: {
      pageData: { type: Object, required: !0 },
      isInPreviewMode: { type: Boolean, default: !1 },
      isPreviewMobileView: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n(), it((_e) => ({ '30ae0dba': Ee.value }));
      const a = e,
        {
          pages: t,
          blocks: o,
          elements: i,
          nav: r,
          meta: s,
          metaTitle: l,
          ecommerceShoppingCart: m,
          cookieBannerDisclaimer: g,
          cookieBannerAcceptText: d,
          cookieBannerDeclineText: v,
          currentLocale: f,
          ecwidPages: y,
          languageSwitcherLanguages: S,
          siteId: T,
          homePageId: w,
          styles: b,
          isNavHidden: L,
          currentPageId: D,
          currentPageData: P,
          getPagePathFromId: x,
          setPageData: B,
        } = Xe(),
        {
          isStoreTypeZyro: K,
          shoppingCartItems: W,
          setShoppingCartOpen: C,
        } = Ut(),
        { ecwidCartItemCount: H } = yl(),
        { isLightboxOpen: F } = on(),
        Q = Ec(),
        { shouldMountAnimationsInPreview: N } = rn(),
        I = M(!1),
        U = M(null),
        V = M(0),
        { width: j } = sp(U),
        k = u(() => a.pageData.siteBlocks || {}),
        p = u(() => P.value.type),
        Y = u(() => p.value === kc),
        G = u(() => Nt(b.value)),
        ee = u(() => !L.value && !Y.value),
        J = u(() => k.value[Bo] && !Y.value),
        R = u(() => D.value === w.value),
        _ = u(() => t.value?.[w.value]?.name ?? ''),
        ae = u(() => o.value.header.settings.isSticky),
        ve = u(() => {
          if (!P.value?.meta?.password || a.isInPreviewMode) return !0;
          const { isPageOpen: _e } = Wl({
            pagePassword: P.value?.meta?.password ?? '',
            locale: f.value,
            pageId: D.value,
          });
          return _e.value;
        }),
        le = u(() => {
          if (!P.value || P.value.footerSlotIsHidden) return [];
          const _e = Object.keys(o.value).find(
            (Je) => o.value[Je].slot === 'footer'
          );
          return _e ? [_e] : [];
        }),
        be = u(() =>
          P.value
            ? [...P.value.blocks.filter((_e) => _e !== Bo), ...le.value]
            : []
        ),
        de = u(() =>
          NC({
            siteId: T.value,
            meta: s.value,
            blocks: o.value,
            nav: r.value,
            pages: t.value,
            elements: i.value,
            languageMetaTitle: l.value,
            currentLocale: f.value,
            currentPageId: D.value,
            languageSwitcherLanguages: S.value,
            isLogoOptimized: !0,
            shoppingCartItems: W.value,
            ecwidCartItemCount: H.value,
            getPagePathFromId: ({ pageId: _e }) => x({ pageId: _e }),
            isOpen: I.value,
            ecwidPages: y.value,
          })
        ),
        z = u(() => de.value.height),
        ie = u(() => de.value.heightMobile),
        Ee = u(() => `${ie.value + V.value}px`),
        me = u(() => be.value.map((_e) => o.value[_e])),
        Pe = u(() => xu({ blocks: o.value, elements: i.value })),
        ze = u(() => s.value.defaultLocale ?? Kt),
        ot = u(() => (K.value ? m.value?.translations ?? {} : {})),
        lt = u(() => (K.value ? m.value?.lang ?? 'en' : null)),
        Lt = u(() =>
          Pe.value
            ? me.value.filter((_e) =>
                ['BlockEcommerceProduct', 'BlockEcommerceProductList'].includes(
                  _e.type
                )
              )
            : []
        ),
        _t = u(() =>
          Pe.value
            ? Object.keys(i.value)
                ?.filter((Je) => i.value[Je].type === 'GridEcommerceButton')
                .filter((Je) =>
                  me.value.some((ce) => ce.components?.includes(Je))
                )
                .map((Je) => i.value[Je])
            : []
        ),
        ua = u(() => be.value.find((_e) => !o.value[_e][Aa]?.isHidden)),
        Xt = u(() => be.value.find((_e) => !o.value[_e][ta]?.isHidden)),
        Ze = u(() => {
          const { isTransparent: _e } = o.value.header.background ?? {};
          if (_e && ee.value && ie.value) return `${ie.value}px`;
        }),
        ca = u(() => {
          const { isTransparent: _e } = o.value.header.background ?? {};
          if (_e && ee.value && z.value) return `${z.value}px`;
        }),
        ya = (_e) => ({
          ...(ua.value === _e && { '--header-height': ca.value }),
          ...(Xt.value === _e && { '--header-height-mobile': Ze.value }),
        }),
        Jt = u(() => {
          const [_e] = P.value?.blocks ?? [];
          if (o.value?.[_e]?.background?.current === 'image')
            return { type: 'block-background', id: _e };
          if (o.value?.[_e]?.type === 'BlockBlogList')
            return { type: 'block-blog-list', id: _e };
          if (o.value?.[_e]?.type === 'BlockEcommerceProduct')
            return { type: 'block-ecommerce-product', id: _e };
          if (o.value?.[_e]?.type === 'BlockEcommerceProductList')
            return { type: 'block-ecommerce-product-list', id: _e };
          const ce = be.value
            .filter((Ce) => o.value[Ce]?.components?.length > 0)
            .flatMap((Ce) =>
              o.value[Ce].components.map((we) => ({
                blockId: Ce,
                elementId: we,
              }))
            )
            .filter(({ elementId: Ce }) => i.value[Ce]?.type === 'GridImage')
            .map(({ blockId: Ce, elementId: we }) => {
              const pt = i.value[we],
                Dt = pt.mobile ?? pt.desktop,
                { width: Wa, height: Do } =
                  Dt ?? xc(o.value[Ce], pt.settings.styles.position);
              return { elementId: we, imageRatio: Do / Wa };
            })[0];
          return ce ? { type: 'grid-image', id: ce?.elementId } : {};
        }),
        $ = ({ hash: _e, isPreviewMode: Je }) => {
          _e || window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }),
            sr({ linkToSection: _e, isPreviewMode: Je });
        },
        se = () => {
          Pe.value && C(!0);
        },
        Te = (_e) => {
          const { target: Je, href: ce } = _e,
            we =
              Je === '_blank' || Na() || a.isInPreviewMode ? '_blank' : '_self';
          window.open(ce, we);
        },
        xe = async (_e) => {
          if (!_e.target) return;
          const Je = _e.target.closest('a');
          if (!Je) return;
          const {
            href: ce,
            pathname: Ce,
            origin: we,
            hash: pt,
            target: Dt,
          } = Je;
          if (!ce) return;
          if ((_e.preventDefault(), window.location.origin !== we)) {
            Te(Je);
            return;
          }
          const Do = window.location.pathname === Ce,
            Mo = Dt === '_blank',
            Oo = ce.replace(we, ''),
            Nu = `${window.location.pathname}${window.location.search}${window.location.hash}`;
          Do && !Mo && $({ hash: pt, isPreviewMode: a.isInPreviewMode }),
            Mo && !a.isInPreviewMode && !Na()
              ? window.open(ce, Dt)
              : ((Mo && a.isInPreviewMode) || Nu !== Oo) &&
                (a.isInPreviewMode ? Q.push(Oo) : window.location.assign(Oo),
                pt && $({ hash: pt, isPreviewMode: a.isInPreviewMode }),
                (I.value = !1));
        };
      Re(
        () => a.pageData,
        (_e) => {
          B(_e);
        },
        { immediate: !0 }
      ),
        Re(
          () => a.pageData,
          async () => {
            a.isInPreviewMode && (N.value = !0);
          }
        ),
        Oe(() => {
          (V.value =
            document.querySelector('.block-sticky-bar')?.clientHeight ?? 0),
            $({ hash: window.location.hash, isPreviewMode: a.isInPreviewMode });
        });
      const Qe = {
        props: a,
        pages: t,
        blocks: o,
        elements: i,
        nav: r,
        meta: s,
        metaTitle: l,
        ecommerceShoppingCart: m,
        cookieBannerDisclaimer: g,
        cookieBannerAcceptText: d,
        cookieBannerDeclineText: v,
        currentLocale: f,
        ecwidPages: y,
        languageSwitcherLanguages: S,
        siteId: T,
        homePageId: w,
        styles: b,
        isNavHidden: L,
        currentPageId: D,
        currentPage: P,
        getPagePathFromId: x,
        setPageData: B,
        isStoreTypeZyro: K,
        shoppingCartItems: W,
        setShoppingCartOpen: C,
        ecwidCartItemCount: H,
        isLightboxOpen: F,
        router: Q,
        shouldMountAnimationsInPreview: N,
        isNavOpen: I,
        blockListRef: U,
        stickyBarHeight: V,
        screenWidth: j,
        siteBlocks: k,
        currentPageType: p,
        isCurrentPagePrivate: Y,
        pageCSSVars: G,
        isHeaderVisible: ee,
        isStickyBarVisible: J,
        isCurrentPageHomepage: R,
        homepageName: _,
        isHeaderSettingsSticky: ae,
        shouldRenderPage: ve,
        pageBlocksSlotFooter: le,
        currentPageBlocks: be,
        headerProps: de,
        headerHeight: z,
        headerHeightMobile: ie,
        topBarHeightMobilePx: Ee,
        currentPageBlockData: me,
        isLocaleWithEcommerceItems: Pe,
        defaultLocale: ze,
        ecommerceTranslations: ot,
        language: lt,
        currentPageEcommerceBlocks: Lt,
        currentPageEcommerceComponents: _t,
        firstVisibleDesktopBlockId: ua,
        firstVisibleMobileBlockId: Xt,
        visibleMobileHeaderHeight: Ze,
        visibleDesktopHeaderHeight: ca,
        getHeaderHeightStyles: ya,
        lcp: Jt,
        scrollToHash: $,
        handleCartClick: se,
        redirectToThirdPartyLink: Te,
        handleGlobalClick: xe,
        StickyTrigger: Ac,
        CookieBanner: ad,
        BlockUser: Wy,
        BlockStickyBarProviderUser: Qy,
        PasswordPage: vb,
        EcommerceShoppingCartProviderUser: e_,
        EcommerceModalRoot: gT,
        BlockHeader: BC,
        Lightbox: tP,
        get BLOCK_STICKY_BAR_ID() {
          return Bo;
        },
      };
      return (
        Object.defineProperty(Qe, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        Qe
      );
    },
  }),
  nP = { ref: 'blockListRef', class: 'blocks' };
function oP(e, n, a, t, o, i) {
  return (
    c(),
    h(
      ge,
      null,
      [
        t.shouldRenderPage
          ? (c(),
            h(
              'main',
              {
                key: 0,
                style: Ae(t.pageCSSVars),
                class: 'page',
                onClick: t.handleGlobalClick,
              },
              [
                t.isHeaderSettingsSticky
                  ? (c(), q(t.StickyTrigger, { key: 0 }))
                  : O('', !0),
                !t.isHeaderSettingsSticky && t.isStickyBarVisible
                  ? (c(),
                    q(
                      t.BlockStickyBarProviderUser,
                      {
                        key: 1,
                        'data-block-id': t.BLOCK_STICKY_BAR_ID,
                        data: t.siteBlocks[t.BLOCK_STICKY_BAR_ID],
                        components: t.elements,
                        lcp: t.lcp,
                      },
                      null,
                      8,
                      ['data-block-id', 'data', 'components', 'lcp']
                    ))
                  : O('', !0),
                E(
                  'div',
                  {
                    class: Z([
                      'top-blocks',
                      {
                        'top-blocks--sticky': t.headerProps.isSticky,
                        'top-blocks--preview-mode': t.props.isInPreviewMode,
                      },
                    ]),
                  },
                  [
                    t.isHeaderSettingsSticky && t.isStickyBarVisible
                      ? (c(),
                        q(
                          t.BlockStickyBarProviderUser,
                          {
                            key: 0,
                            'data-block-id': t.BLOCK_STICKY_BAR_ID,
                            data: t.siteBlocks[t.BLOCK_STICKY_BAR_ID],
                            components: t.elements,
                            lcp: t.lcp,
                          },
                          null,
                          8,
                          ['data-block-id', 'data', 'components', 'lcp']
                        ))
                      : O('', !0),
                    t.isHeaderVisible
                      ? (c(),
                        q(
                          t.BlockHeader,
                          Ge({ key: 1 }, t.headerProps, {
                            'is-in-preview-mode': t.props.isInPreviewMode,
                            'is-preview-mobile-view': a.isPreviewMobileView,
                            'block-sticky-bar':
                              t.siteBlocks[t.BLOCK_STICKY_BAR_ID],
                            onToggleVisibility:
                              n[0] ||
                              (n[0] = (r) => (t.isNavOpen = !t.isNavOpen)),
                            onCartClick: t.handleCartClick,
                          }),
                          null,
                          16,
                          [
                            'is-in-preview-mode',
                            'is-preview-mobile-view',
                            'block-sticky-bar',
                          ]
                        ))
                      : O('', !0),
                  ],
                  2
                ),
                E(
                  'div',
                  nP,
                  [
                    (c(!0),
                    h(
                      ge,
                      null,
                      ke(
                        t.currentPageBlocks,
                        (r) => (
                          c(),
                          q(
                            t.BlockUser,
                            {
                              id: t.blocks[r].htmlId || r,
                              key: r,
                              data: t.blocks[r],
                              blocks: t.blocks,
                              lcp: t.lcp,
                              'page-id': t.currentPageId,
                              'ecommerce-translations': t.ecommerceTranslations,
                              'current-page-type': t.currentPageType,
                              components: t.elements,
                              'screen-width': t.screenWidth,
                              style: Ae(t.getHeaderHeightStyles(r)),
                              'current-locale': t.currentLocale,
                              'is-cart-visible': t.headerProps.isCartVisible,
                              'is-in-preview-mode': t.props.isInPreviewMode,
                              'is-first-visible-desktop-block':
                                t.firstVisibleDesktopBlockId === r,
                              'is-first-visible-mobile-block':
                                t.firstVisibleMobileBlockId === r,
                            },
                            null,
                            8,
                            [
                              'id',
                              'data',
                              'blocks',
                              'lcp',
                              'page-id',
                              'ecommerce-translations',
                              'current-page-type',
                              'components',
                              'screen-width',
                              'style',
                              'current-locale',
                              'is-cart-visible',
                              'is-in-preview-mode',
                              'is-first-visible-desktop-block',
                              'is-first-visible-mobile-block',
                            ]
                          )
                        )
                      ),
                      128
                    )),
                  ],
                  512
                ),
                t.meta.isCookieBarEnabled
                  ? (c(),
                    q(
                      t.CookieBanner,
                      {
                        key: 2,
                        disclaimer: t.cookieBannerDisclaimer || '',
                        'accept-text': t.cookieBannerAcceptText,
                        'decline-text': t.cookieBannerDeclineText,
                        'site-meta': t.meta,
                      },
                      null,
                      8,
                      ['disclaimer', 'accept-text', 'decline-text', 'site-meta']
                    ))
                  : O('', !0),
                t.isLocaleWithEcommerceItems
                  ? (c(),
                    q(
                      t.EcommerceShoppingCartProviderUser,
                      {
                        key: 3,
                        'ecommerce-translations': t.ecommerceTranslations,
                        language: t.language,
                        'is-header-sticky': t.headerProps.isSticky,
                        'is-nav-hidden': !t.isHeaderVisible,
                        'current-page-ecommerce-blocks':
                          t.currentPageEcommerceBlocks,
                        'current-page-ecommerce-components':
                          t.currentPageEcommerceComponents,
                        'is-in-preview-mode': t.props.isInPreviewMode,
                      },
                      null,
                      8,
                      [
                        'ecommerce-translations',
                        'language',
                        'is-header-sticky',
                        'is-nav-hidden',
                        'current-page-ecommerce-blocks',
                        'current-page-ecommerce-components',
                        'is-in-preview-mode',
                      ]
                    ))
                  : O('', !0),
                Me(
                  t.EcommerceModalRoot,
                  {
                    'ecommerce-translations': t.ecommerceTranslations,
                    language: t.language,
                    'current-locale': t.currentLocale,
                    'is-cart-visible': t.headerProps.isCartVisible,
                    'is-in-preview-mode': t.props.isInPreviewMode,
                  },
                  null,
                  8,
                  [
                    'ecommerce-translations',
                    'language',
                    'current-locale',
                    'is-cart-visible',
                    'is-in-preview-mode',
                  ]
                ),
              ],
              4
            ))
          : (c(),
            q(
              t.PasswordPage,
              {
                key: 1,
                'page-id': t.currentPageId,
                locale: t.currentLocale,
                'default-locale': t.defaultLocale,
                'in-preview-mode': a.isInPreviewMode,
                'current-page-data': t.currentPage,
                'homepage-name': t.homepageName,
                'is-current-page-homepage': t.isCurrentPageHomepage,
              },
              null,
              8,
              [
                'page-id',
                'locale',
                'default-locale',
                'in-preview-mode',
                'current-page-data',
                'homepage-name',
                'is-current-page-homepage',
              ]
            )),
        t.isLightboxOpen ? (c(), q(t.Lightbox, { key: 2 })) : O('', !0),
      ],
      64
    )
  );
}
const cP = oe(aP, [['render', oP]]);
export { cP as default };
