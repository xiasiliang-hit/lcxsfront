! function (a) {
    var h, i, b = "0.4.2",
        c = "hasOwnProperty",
        d = /[\.\/]/,
        e = "*",
        f = function () {},
        g = function (a, b) {
            return a - b
        },
        j = {
            n: {}
        },
        k = function (a, b) {
            a = String(a);
            var n, d = i,
                e = Array.prototype.slice.call(arguments, 2),
                f = k.listeners(a),
                l = 0,
                o = [],
                p = {},
                q = [],
                r = h;
            h = a, i = 0;
            for (var t = 0, u = f.length; u > t; t++) "zIndex" in f[t] && (o.push(f[t].zIndex), f[t].zIndex < 0 && (p[f[t].zIndex] = f[t]));
            for (o.sort(g); o[l] < 0;)
                if (n = p[o[l++]], q.push(n.apply(b, e)), i) return i = d, q;
            for (t = 0; u > t; t++)
                if (n = f[t], "zIndex" in n)
                    if (n.zIndex == o[l]) {
                        if (q.push(n.apply(b, e)), i) break;
                        do
                            if (l++, n = p[o[l]], n && q.push(n.apply(b, e)), i) break;
                        while (n)
                    } else p[n.zIndex] = n;
            else if (q.push(n.apply(b, e)), i) break;
            return i = d, h = r, q.length ? q : null
        };
    k._events = j, k.listeners = function (a) {
        var f, g, h, i, k, l, m, n, b = a.split(d),
            c = j,
            o = [c],
            p = [];
        for (i = 0, k = b.length; k > i; i++) {
            for (n = [], l = 0, m = o.length; m > l; l++)
                for (c = o[l].n, g = [c[b[i]], c[e]], h = 2; h--;) f = g[h], f && (n.push(f), p = p.concat(f.f || []));
            o = n
        }
        return p
    }, k.on = function (a, b) {
        if (a = String(a), "function" != typeof b) return function () {};
        for (var c = a.split(d), e = j, g = 0, h = c.length; h > g; g++) e = e.n, e = e.hasOwnProperty(c[g]) && e[c[g]] || (e[c[g]] = {
            n: {}
        });
        for (e.f = e.f || [], g = 0, h = e.f.length; h > g; g++)
            if (e.f[g] == b) return f;
        return e.f.push(b),
            function (a) {
                +a == +a && (b.zIndex = +a)
            }
    }, k.f = function (a) {
        var b = [].slice.call(arguments, 1);
        return function () {
            k.apply(null, [a, null].concat(b).concat([].slice.call(arguments, 0)))
        }
    }, k.stop = function () {
        i = 1
    }, k.nt = function (a) {
        return a ? new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)").test(h) : h
    }, k.nts = function () {
        return h.split(d)
    }, k.off = k.unbind = function (a, b) {
        if (!a) return k._events = j = {
            n: {}
        }, void 0;
        var g, h, i, l, m, n, o, f = a.split(d),
            p = [j];
        for (l = 0, m = f.length; m > l; l++)
            for (n = 0; n < p.length; n += i.length - 2) {
                if (i = [n, 1], g = p[n].n, f[l] != e) g[f[l]] && i.push(g[f[l]]);
                else
                    for (h in g) g[c](h) && i.push(g[h]);
                p.splice.apply(p, i)
            }
        for (l = 0, m = p.length; m > l; l++)
            for (g = p[l]; g.n;) {
                if (b) {
                    if (g.f) {
                        for (n = 0, o = g.f.length; o > n; n++)
                            if (g.f[n] == b) {
                                g.f.splice(n, 1);
                                break
                            }!g.f.length && delete g.f
                    }
                    for (h in g.n)
                        if (g.n[c](h) && g.n[h].f) {
                            var q = g.n[h].f;
                            for (n = 0, o = q.length; o > n; n++)
                                if (q[n] == b) {
                                    q.splice(n, 1);
                                    break
                                }!q.length && delete g.n[h].f
                        }
                } else {
                    delete g.f;
                    for (h in g.n) g.n[c](h) && g.n[h].f && delete g.n[h].f
                }
                g = g.n
            }
    }, k.once = function (a, b) {
        var c = function () {
            return k.unbind(a, c), b.apply(this, arguments)
        };
        return k.on(a, c)
    }, k.version = b, k.toString = function () {
        return "You are running Eve " + b
    }, a.eve = k
}(window || this),
function (a, b) {
    "function" == typeof define && define.amd ? define(["eve"], function (c) {
        return b(a, c)
    }) : b(a, a.eve)
}(this, function (a, b) {
    function c(a) {
        if (c.is(a, "function")) return d ? a() : b.on("raphael.DOMload", a);
        if (c.is(a, G)) return c._engine.create[o](c, a.splice(0, 3 + c.is(a[0], E))).add(a);
        var e = Array.prototype.slice.call(arguments, 0);
        if (c.is(e[e.length - 1], "function")) {
            var f = e.pop();
            return d ? f.call(c._engine.create[o](c, e)) : b.on("raphael.DOMload", function () {
                f.call(c._engine.create[o](c, e))
            })
        }
        return c._engine.create[o](c, arguments)
    }

    function ob(a) {
        if ("function" == typeof a || Object(a) !== a) return a;
        var b = new a.constructor;
        for (var c in a) a[i](c) && (b[c] = ob(a[c]));
        return b
    }

    function wb(a, b) {
        for (var c = 0, d = a.length; d > c; c++)
            if (a[c] === b) return a.push(a.splice(c, 1)[0])
    }

    function xb(a, b, c) {
        function d() {
            var e = Array.prototype.slice.call(arguments, 0),
                f = e.join("\u2400"),
                g = d.cache = d.cache || {},
                h = d.count = d.count || [];
            return g[i](f) ? (wb(h, f), c ? c(g[f]) : g[f]) : (h.length >= 1e3 && delete g[h.shift()], h.push(f), g[f] = a[o](b, e), c ? c(g[f]) : g[f])
        }
        return d
    }

    function zb() {
        return this.hex
    }

    function Ab(a, b) {
        for (var c = [], d = 0, e = a.length; e - 2 * !b > d; d += 2) {
            var f = [{
                x: +a[d - 2],
                y: +a[d - 1]
            }, {
                x: +a[d],
                y: +a[d + 1]
            }, {
                x: +a[d + 2],
                y: +a[d + 3]
            }, {
                x: +a[d + 4],
                y: +a[d + 5]
            }];
            b ? d ? e - 4 == d ? f[3] = {
                x: +a[0],
                y: +a[1]
            } : e - 2 == d && (f[2] = {
                x: +a[0],
                y: +a[1]
            }, f[3] = {
                x: +a[2],
                y: +a[3]
            }) : f[0] = {
                x: +a[e - 2],
                y: +a[e - 1]
            } : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
                x: +a[d],
                y: +a[d + 1]
            }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
        }
        return c
    }

    function Cb(a, b, c, d, e) {
        var f = -3 * b + 9 * c - 9 * d + 3 * e,
            g = a * f + 6 * b - 12 * c + 6 * d;
        return a * g - 3 * b + 3 * c
    }

    function Db(a, b, c, d, e, f, g, h, i) {
        null == i && (i = 1), i = i > 1 ? 1 : 0 > i ? 0 : i;
        for (var j = i / 2, k = 12, l = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], m = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], n = 0, o = 0; k > o; o++) {
            var p = j * l[o] + j,
                q = Cb(p, a, c, e, g),
                r = Cb(p, b, d, f, h),
                s = q * q + r * r;
            n += m[o] * y.sqrt(s)
        }
        return j * n
    }

    function Eb(a, b, c, d, e, f, g, h, i) {
        if (!(0 > i || Db(a, b, c, d, e, f, g, h) < i)) {
            var m, j = 1,
                k = j / 2,
                l = j - k,
                n = .01;
            for (m = Db(a, b, c, d, e, f, g, h, l); B(m - i) > n;) k /= 2, l += (i > m ? 1 : -1) * k, m = Db(a, b, c, d, e, f, g, h, l);
            return l
        }
    }

    function Fb(a, b, c, d, e, f, g, h) {
        if (!(z(a, c) < A(e, g) || A(a, c) > z(e, g) || z(b, d) < A(f, h) || A(b, d) > z(f, h))) {
            var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
                j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
                k = (a - c) * (f - h) - (b - d) * (e - g);
            if (k) {
                var l = i / k,
                    m = j / k,
                    n = +l.toFixed(2),
                    o = +m.toFixed(2);
                if (!(n < +A(a, c).toFixed(2) || n > +z(a, c).toFixed(2) || n < +A(e, g).toFixed(2) || n > +z(e, g).toFixed(2) || o < +A(b, d).toFixed(2) || o > +z(b, d).toFixed(2) || o < +A(f, h).toFixed(2) || o > +z(f, h).toFixed(2))) return {
                    x: l,
                    y: m
                }
            }
        }
    }

    function Ib(a, b, d) {
        var e = c.bezierBBox(a),
            f = c.bezierBBox(b);
        if (!c.isBBoxIntersect(e, f)) return d ? 0 : [];
        for (var g = Db.apply(0, a), h = Db.apply(0, b), i = z(~~(g / 5), 1), j = z(~~(h / 5), 1), k = [], l = [], m = {}, n = d ? 0 : [], o = 0; i + 1 > o; o++) {
            var p = c.findDotsAtSegment.apply(c, a.concat(o / i));
            k.push({
                x: p.x,
                y: p.y,
                t: o / i
            })
        }
        for (o = 0; j + 1 > o; o++) p = c.findDotsAtSegment.apply(c, b.concat(o / j)), l.push({
            x: p.x,
            y: p.y,
            t: o / j
        });
        for (o = 0; i > o; o++)
            for (var q = 0; j > q; q++) {
                var r = k[o],
                    s = k[o + 1],
                    t = l[q],
                    u = l[q + 1],
                    v = B(s.x - r.x) < .001 ? "y" : "x",
                    w = B(u.x - t.x) < .001 ? "y" : "x",
                    x = Fb(r.x, r.y, s.x, s.y, t.x, t.y, u.x, u.y);
                if (x) {
                    if (m[x.x.toFixed(4)] == x.y.toFixed(4)) continue;
                    m[x.x.toFixed(4)] = x.y.toFixed(4);
                    var y = r.t + B((x[v] - r[v]) / (s[v] - r[v])) * (s.t - r.t),
                        C = t.t + B((x[w] - t[w]) / (u[w] - t[w])) * (u.t - t.t);
                    y >= 0 && 1.001 >= y && C >= 0 && 1.001 >= C && (d ? n++ : n.push({
                        x: x.x,
                        y: x.y,
                        t1: A(y, 1),
                        t2: A(C, 1)
                    }))
                }
            }
        return n
    }

    function Jb(a, b, d) {
        a = c._path2curve(a), b = c._path2curve(b);
        for (var e, f, g, h, i, j, k, l, m, n, o = d ? 0 : [], p = 0, q = a.length; q > p; p++) {
            var r = a[p];
            if ("M" == r[0]) e = i = r[1], f = j = r[2];
            else {
                "C" == r[0] ? (m = [e, f].concat(r.slice(1)), e = m[6], f = m[7]) : (m = [e, f, e, f, i, j, i, j], e = i, f = j);
                for (var s = 0, t = b.length; t > s; s++) {
                    var u = b[s];
                    if ("M" == u[0]) g = k = u[1], h = l = u[2];
                    else {
                        "C" == u[0] ? (n = [g, h].concat(u.slice(1)), g = n[6], h = n[7]) : (n = [g, h, g, h, k, l, k, l], g = k, h = l);
                        var v = Ib(m, n, d);
                        if (d) o += v;
                        else {
                            for (var w = 0, x = v.length; x > w; w++) v[w].segment1 = p, v[w].segment2 = s, v[w].bez1 = m, v[w].bez2 = n;
                            o = o.concat(v)
                        }
                    }
                }
            }
        }
        return o
    }

    function dc(a, b, c, d, e, f) {
        null != a ? (this.a = +a, this.b = +b, this.c = +c, this.d = +d, this.e = +e, this.f = +f) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
    }

    function tc() {
        return this.x + s + this.y + s + this.width + " \xd7 " + this.height
    }

    function Fc(a, b, c, d, e, f) {
        function m(a) {
            return ((i * a + h) * a + g) * a
        }

        function n(a, b) {
            var c = o(a, b);
            return ((l * c + k) * c + j) * c
        }

        function o(a, b) {
            var c, d, e, f, j, k;
            for (e = a, k = 0; 8 > k; k++) {
                if (f = m(e) - a, B(f) < b) return e;
                if (j = (3 * i * e + 2 * h) * e + g, B(j) < 1e-6) break;
                e -= f / j
            }
            if (c = 0, d = 1, e = a, c > e) return c;
            if (e > d) return d;
            for (; d > c;) {
                if (f = m(e), B(f - a) < b) return e;
                a > f ? c = e : d = e, e = (d - c) / 2 + c
            }
            return e
        }
        var g = 3 * b,
            h = 3 * (d - b) - g,
            i = 1 - g - h,
            j = 3 * c,
            k = 3 * (e - c) - j,
            l = 1 - j - k;
        return n(a, 1 / (200 * f))
    }

    function Gc(a, b) {
        var c = [],
            d = {};
        if (this.ms = b, this.times = 1, a) {
            for (var e in a) a[i](e) && (d[S(e)] = a[e], c.push(S(e)));
            c.sort(fb)
        }
        this.anim = d, this.top = c[c.length - 1], this.percents = c
    }

    function Hc(a, d, f, g, h, j) {
        f = S(f);
        var k, l, m, o, q, r, s = a.ms,
            v = {},
            w = {},
            x = {};
        if (g)
            for (z = 0, A = Bc.length; A > z; z++) {
                var y = Bc[z];
                if (y.el.id == d.id && y.anim == a) {
                    y.percent != f ? (Bc.splice(z, 1), m = 1) : l = y, d.attr(y.totalOrigin);
                    break
                }
            } else g = +w;
        for (var z = 0, A = a.percents.length; A > z; z++) {
            if (a.percents[z] == f || a.percents[z] > g * a.top) {
                f = a.percents[z], q = a.percents[z - 1] || 0, s = s / a.top * (f - q), o = a.percents[z + 1], k = a.anim[f];
                break
            }
            g && d.attr(a.anim[a.percents[z]])
        }
        if (k) {
            if (l) l.initstatus = g, l.start = new Date - l.ms * g;
            else {
                for (var B in k)
                    if (k[i](B) && (W[i](B) || d.paper.customAttributes[i](B))) switch (v[B] = d.attr(B), null == v[B] && (v[B] = V[B]), w[B] = k[B], W[B]) {
                    case E:
                        x[B] = (w[B] - v[B]) / s;
                        break;
                    case "colour":
                        v[B] = c.getRGB(v[B]);
                        var C = c.getRGB(w[B]);
                        x[B] = {
                            r: (C.r - v[B].r) / s,
                            g: (C.g - v[B].g) / s,
                            b: (C.b - v[B].b) / s
                        };
                        break;
                    case "path":
                        var D = Tb(v[B], w[B]),
                            F = D[1];
                        for (v[B] = D[0], x[B] = [], z = 0, A = v[B].length; A > z; z++) {
                            x[B][z] = [0];
                            for (var G = 1, H = v[B][z].length; H > G; G++) x[B][z][G] = (F[z][G] - v[B][z][G]) / s
                        }
                        break;
                    case "transform":
                        var I = d._,
                            J = cc(I[B], w[B]);
                        if (J)
                            for (v[B] = J.from, w[B] = J.to, x[B] = [], x[B].real = !0, z = 0, A = v[B].length; A > z; z++)
                                for (x[B][z] = [v[B][z][0]], G = 1, H = v[B][z].length; H > G; G++) x[B][z][G] = (w[B][z][G] - v[B][z][G]) / s;
                        else {
                            var K = d.matrix || new dc,
                                L = {
                                    _: {
                                        transform: I.transform
                                    },
                                    getBBox: function () {
                                        return d.getBBox(1)
                                    }
                                };
                            v[B] = [K.a, K.b, K.c, K.d, K.e, K.f], ac(L, w[B]), w[B] = L._.transform, x[B] = [(L.matrix.a - K.a) / s, (L.matrix.b - K.b) / s, (L.matrix.c - K.c) / s, (L.matrix.d - K.d) / s, (L.matrix.e - K.e) / s, (L.matrix.f - K.f) / s]
                        }
                        break;
                    case "csv":
                        var M = t(k[B])[u](e),
                            N = t(v[B])[u](e);
                        if ("clip-rect" == B)
                            for (v[B] = N, x[B] = [], z = N.length; z--;) x[B][z] = (M[z] - v[B][z]) / s;
                        w[B] = M;
                        break;
                    default:
                        for (M = [][p](k[B]), N = [][p](v[B]), x[B] = [], z = d.paper.customAttributes[B].length; z--;) x[B][z] = ((M[z] || 0) - (N[z] || 0)) / s
                    }
                    var O = k.easing,
                        Q = c.easing_formulas[O];
                if (!Q)
                    if (Q = t(O).match(P), Q && 5 == Q.length) {
                        var R = Q;
                        Q = function (a) {
                            return Fc(a, +R[1], +R[2], +R[3], +R[4], s)
                        }
                    } else Q = hb;
                if (r = k.start || a.start || +new Date, y = {
                        anim: a,
                        percent: f,
                        timestamp: r,
                        start: r + (a.del || 0),
                        status: 0,
                        initstatus: g || 0,
                        stop: !1,
                        ms: s,
                        easing: Q,
                        from: v,
                        diff: x,
                        to: w,
                        el: d,
                        callback: k.callback,
                        prev: q,
                        next: o,
                        repeat: j || a.times,
                        origin: d.attr(),
                        totalOrigin: h
                    }, Bc.push(y), g && !l && !m && (y.stop = !0, y.start = new Date - s * g, 1 == Bc.length)) return Dc();
                m && (y.start = new Date - y.ms * g), 1 == Bc.length && Cc(Dc)
            }
            b("raphael.anim.start." + d.id, d, a)
        }
    }

    function Ic(a) {
        for (var b = 0; b < Bc.length; b++) Bc[b].el.paper == a && Bc.splice(b--, 1)
    }
    c.version = "2.1.2", c.eve = b;
    var d, m, e = /[, ]+/,
        f = {
            circle: 1,
            rect: 1,
            path: 1,
            ellipse: 1,
            text: 1,
            image: 1
        },
        g = /\{(\d+)\}/g,
        i = "hasOwnProperty",
        j = {
            doc: document,
            win: a
        },
        k = {
            was: Object.prototype[i].call(j.win, "Raphael"),
            is: j.win.Raphael
        },
        l = function () {
            this.ca = this.customAttributes = {}
        },
        o = "apply",
        p = "concat",
        q = "ontouchstart" in j.win || j.win.DocumentTouch && j.doc instanceof DocumentTouch,
        r = "",
        s = " ",
        t = String,
        u = "split",
        v = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [u](s),
        w = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        },
        x = t.prototype.toLowerCase,
        y = Math,
        z = y.max,
        A = y.min,
        B = y.abs,
        C = y.pow,
        D = y.PI,
        E = "number",
        F = "string",
        G = "array",
        J = Object.prototype.toString,
        N = (c._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
        O = {
            NaN: 1,
            Infinity: 1,
            "-Infinity": 1
        },
        P = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
        Q = y.round,
        S = parseFloat,
        T = parseInt,
        U = t.prototype.toUpperCase,
        V = c._availableAttrs = {
            "arrow-end": "none",
            "arrow-start": "none",
            blur: 0,
            "clip-rect": "0 0 1e9 1e9",
            cursor: "default",
            cx: 0,
            cy: 0,
            fill: "#fff",
            "fill-opacity": 1,
            font: '10px "Arial"',
            "font-family": '"Arial"',
            "font-size": "10",
            "font-style": "normal",
            "font-weight": 400,
            gradient: 0,
            height: 0,
            href: "http://raphaeljs.com/",
            "letter-spacing": 0,
            opacity: 1,
            path: "M0,0",
            r: 0,
            rx: 0,
            ry: 0,
            src: "",
            stroke: "#000",
            "stroke-dasharray": "",
            "stroke-linecap": "butt",
            "stroke-linejoin": "butt",
            "stroke-miterlimit": 0,
            "stroke-opacity": 1,
            "stroke-width": 1,
            target: "_blank",
            "text-anchor": "middle",
            title: "Raphael",
            transform: "",
            width: 0,
            x: 0,
            y: 0
        },
        W = c._availableAnimAttrs = {
            blur: E,
            "clip-rect": "csv",
            cx: E,
            cy: E,
            fill: "colour",
            "fill-opacity": E,
            "font-size": E,
            height: E,
            opacity: E,
            path: "path",
            r: E,
            rx: E,
            ry: E,
            stroke: "colour",
            "stroke-opacity": E,
            "stroke-width": E,
            transform: "transform",
            width: E,
            x: E,
            y: E
        },
        Y = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
        Z = {
            hs: 1,
            rg: 1
        },
        $ = /,?([achlmqrstvxz]),?/gi,
        _ = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        ab = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        bb = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
        db = (c._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
        fb = function (a, b) {
            return S(a) - S(b)
        },
        gb = function () {},
        hb = function (a) {
            return a
        },
        ib = c._rectPath = function (a, b, c, d, e) {
            return e ? [["M", a + e, b], ["l", c - 2 * e, 0], ["a", e, e, 0, 0, 1, e, e], ["l", 0, d - 2 * e], ["a", e, e, 0, 0, 1, -e, e], ["l", 2 * e - c, 0], ["a", e, e, 0, 0, 1, -e, -e], ["l", 0, 2 * e - d], ["a", e, e, 0, 0, 1, e, -e], ["z"]] : [["M", a, b], ["l", c, 0], ["l", 0, d], ["l", -c, 0], ["z"]]
        },
        jb = function (a, b, c, d) {
            return null == d && (d = c), [["M", a, b], ["m", 0, -d], ["a", c, d, 0, 1, 1, 0, 2 * d], ["a", c, d, 0, 1, 1, 0, -2 * d], ["z"]]
        },
        kb = c._getPath = {
            path: function (a) {
                return a.attr("path")
            },
            circle: function (a) {
                var b = a.attrs;
                return jb(b.cx, b.cy, b.r)
            },
            ellipse: function (a) {
                var b = a.attrs;
                return jb(b.cx, b.cy, b.rx, b.ry)
            },
            rect: function (a) {
                var b = a.attrs;
                return ib(b.x, b.y, b.width, b.height, b.r)
            },
            image: function (a) {
                var b = a.attrs;
                return ib(b.x, b.y, b.width, b.height)
            },
            text: function (a) {
                var b = a._getBBox();
                return ib(b.x, b.y, b.width, b.height)
            },
            set: function (a) {
                var b = a._getBBox();
                return ib(b.x, b.y, b.width, b.height)
            }
        },
        lb = c.mapPath = function (a, b) {
            if (!b) return a;
            var c, d, e, f, g, h, i;
            for (a = Tb(a), e = 0, g = a.length; g > e; e++)
                for (i = a[e], f = 1, h = i.length; h > f; f += 2) c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d;
            return a
        };
    if (c._g = j, c.type = j.win.SVGAngle || j.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == c.type) {
        var nb, mb = j.doc.createElement("div");
        if (mb.innerHTML = '<v:shape adj="1"/>', nb = mb.firstChild, nb.style.behavior = "url(#default#VML)", !nb || "object" != typeof nb.adj) return c.type = r;
        mb = null
    }
    c.svg = !(c.vml = "VML" == c.type), c._Paper = l, c.fn = m = l.prototype = c.prototype, c._id = 0, c._oid = 0, c.is = function (a, b) {
        return b = x.call(b), "finite" == b ? !O[i](+a) : "array" == b ? a instanceof Array : "null" == b && null === a || b == typeof a && null !== a || "object" == b && a === Object(a) || "array" == b && Array.isArray && Array.isArray(a) || J.call(a).slice(8, -1).toLowerCase() == b
    }, c.angle = function (a, b, d, e, f, g) {
        if (null == f) {
            var h = a - d,
                i = b - e;
            return h || i ? (180 + 180 * y.atan2(-i, -h) / D + 360) % 360 : 0
        }
        return c.angle(a, b, f, g) - c.angle(d, e, f, g)
    }, c.rad = function (a) {
        return a % 360 * D / 180
    }, c.deg = function (a) {
        return 180 * a / D % 360
    }, c.snapTo = function (a, b, d) {
        if (d = c.is(d, "finite") ? d : 10, c.is(a, G)) {
            for (var e = a.length; e--;)
                if (B(a[e] - b) <= d) return a[e]
        } else {
            a = +a;
            var f = b % a;
            if (d > f) return b - f;
            if (f > a - d) return b - f + a
        }
        return b
    }, c.createUUID = function (a, b) {
        return function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a, b).toUpperCase()
        }
    }(/[xy]/g, function (a) {
        var b = 0 | 16 * y.random(),
            c = "x" == a ? b : 8 | 3 & b;
        return c.toString(16)
    }), c.setWindow = function (a) {
        b("raphael.setWindow", c, j.win, a), j.win = a, j.doc = j.win.document, c._engine.initWin && c._engine.initWin(j.win)
    };
    var qb = function (a) {
            if (c.vml) {
                var d, b = /^\s+|\s+$/g;
                try {
                    var e = new ActiveXObject("htmlfile");
                    e.write("<body>"), e.close(), d = e.body
                } catch (f) {
                    d = createPopup().document.body
                }
                var g = d.createTextRange();
                qb = xb(function (a) {
                    try {
                        d.style.color = t(a).replace(b, r);
                        var c = g.queryCommandValue("ForeColor");
                        return c = (255 & c) << 16 | 65280 & c | (16711680 & c) >>> 16, "#" + ("000000" + c.toString(16)).slice(-6)
                    } catch (e) {
                        return "none"
                    }
                })
            } else {
                var h = j.doc.createElement("i");
                h.title = "Rapha\xebl Colour Picker", h.style.display = "none", j.doc.body.appendChild(h), qb = xb(function (a) {
                    return h.style.color = a, j.doc.defaultView.getComputedStyle(h, r).getPropertyValue("color")
                })
            }
            return qb(a)
        },
        rb = function () {
            return "hsb(" + [this.h, this.s, this.b] + ")"
        },
        sb = function () {
            return "hsl(" + [this.h, this.s, this.l] + ")"
        },
        tb = function () {
            return this.hex
        },
        ub = function (a, b, d) {
            if (null == b && c.is(a, "object") && "r" in a && "g" in a && "b" in a && (d = a.b, b = a.g, a = a.r), null == b && c.is(a, F)) {
                var e = c.getRGB(a);
                a = e.r, b = e.g, d = e.b
            }
            return (a > 1 || b > 1 || d > 1) && (a /= 255, b /= 255, d /= 255), [a, b, d]
        },
        vb = function (a, b, d, e) {
            a *= 255, b *= 255, d *= 255;
            var f = {
                r: a,
                g: b,
                b: d,
                hex: c.rgb(a, b, d),
                toString: tb
            };
            return c.is(e, "finite") && (f.opacity = e), f
        };
    c.color = function (a) {
        var b;
        return c.is(a, "object") && "h" in a && "s" in a && "b" in a ? (b = c.hsb2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.hex = b.hex) : c.is(a, "object") && "h" in a && "s" in a && "l" in a ? (b = c.hsl2rgb(a), a.r = b.r, a.g = b.g, a.b = b.b, a.hex = b.hex) : (c.is(a, "string") && (a = c.getRGB(a)), c.is(a, "object") && "r" in a && "g" in a && "b" in a ? (b = c.rgb2hsl(a), a.h = b.h, a.s = b.s, a.l = b.l, b = c.rgb2hsb(a), a.v = b.b) : (a = {
            hex: "none"
        }, a.r = a.g = a.b = a.h = a.s = a.v = a.l = -1)), a.toString = tb, a
    }, c.hsb2rgb = function (a, b, c, d) {
        this.is(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, a = a.h, d = a.o), a *= 360;
        var e, f, g, h, i;
        return a = a % 360 / 60, i = c * b, h = i * (1 - B(a % 2 - 1)), e = f = g = c - i, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a], vb(e, f, g, d)
    }, c.hsl2rgb = function (a, b, c, d) {
        this.is(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h), (a > 1 || b > 1 || c > 1) && (a /= 360, b /= 100, c /= 100), a *= 360;
        var e, f, g, h, i;
        return a = a % 360 / 60, i = 2 * b * (.5 > c ? c : 1 - c), h = i * (1 - B(a % 2 - 1)), e = f = g = c - i / 2, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a], vb(e, f, g, d)
    }, c.rgb2hsb = function (a, b, c) {
        c = ub(a, b, c), a = c[0], b = c[1], c = c[2];
        var d, e, f, g;
        return f = z(a, b, c), g = f - A(a, b, c), d = 0 == g ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = 60 * ((d + 360) % 6) / 360, e = 0 == g ? 0 : g / f, {
            h: d,
            s: e,
            b: f,
            toString: rb
        }
    }, c.rgb2hsl = function (a, b, c) {
        c = ub(a, b, c), a = c[0], b = c[1], c = c[2];
        var d, e, f, g, h, i;
        return g = z(a, b, c), h = A(a, b, c), i = g - h, d = 0 == i ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = 60 * ((d + 360) % 6) / 360, f = (g + h) / 2, e = 0 == i ? 0 : .5 > f ? i / (2 * f) : i / (2 - 2 * f), {
            h: d,
            s: e,
            l: f,
            toString: sb
        }
    }, c._path2string = function () {
        return this.join(",").replace($, "$1")
    }, c._preload = function (a, b) {
        var c = j.doc.createElement("img");
        c.style.cssText = "position:absolute;left:-9999em;top:-9999em", c.onload = function () {
            b.call(this), this.onload = null, j.doc.body.removeChild(this)
        }, c.onerror = function () {
            j.doc.body.removeChild(this)
        }, j.doc.body.appendChild(c), c.src = a
    }, c.getRGB = xb(function (a) {
        if (!a || (a = t(a)).indexOf("-") + 1) return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: zb
        };
        if ("none" == a) return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            toString: zb
        };
        !(Z[i](a.toLowerCase().substring(0, 2)) || "#" == a.charAt()) && (a = qb(a));
        var d, e, f, g, h, j, k = a.match(N);
        return k ? (k[2] && (f = T(k[2].substring(5), 16), e = T(k[2].substring(3, 5), 16), d = T(k[2].substring(1, 3), 16)), k[3] && (f = T((h = k[3].charAt(3)) + h, 16), e = T((h = k[3].charAt(2)) + h, 16), d = T((h = k[3].charAt(1)) + h, 16)), k[4] && (j = k[4][u](Y), d = S(j[0]), "%" == j[0].slice(-1) && (d *= 2.55), e = S(j[1]), "%" == j[1].slice(-1) && (e *= 2.55), f = S(j[2]), "%" == j[2].slice(-1) && (f *= 2.55), "rgba" == k[1].toLowerCase().slice(0, 4) && (g = S(j[3])), j[3] && "%" == j[3].slice(-1) && (g /= 100)), k[5] ? (j = k[5][u](Y), d = S(j[0]), "%" == j[0].slice(-1) && (d *= 2.55), e = S(j[1]), "%" == j[1].slice(-1) && (e *= 2.55), f = S(j[2]), "%" == j[2].slice(-1) && (f *= 2.55), ("deg" == j[0].slice(-3) || "\xb0" == j[0].slice(-1)) && (d /= 360), "hsba" == k[1].toLowerCase().slice(0, 4) && (g = S(j[3])), j[3] && "%" == j[3].slice(-1) && (g /= 100), c.hsb2rgb(d, e, f, g)) : k[6] ? (j = k[6][u](Y), d = S(j[0]), "%" == j[0].slice(-1) && (d *= 2.55), e = S(j[1]), "%" == j[1].slice(-1) && (e *= 2.55), f = S(j[2]), "%" == j[2].slice(-1) && (f *= 2.55), ("deg" == j[0].slice(-3) || "\xb0" == j[0].slice(-1)) && (d /= 360), "hsla" == k[1].toLowerCase().slice(0, 4) && (g = S(j[3])), j[3] && "%" == j[3].slice(-1) && (g /= 100), c.hsl2rgb(d, e, f, g)) : (k = {
            r: d,
            g: e,
            b: f,
            toString: zb
        }, k.hex = "#" + (16777216 | f | e << 8 | d << 16).toString(16).slice(1), c.is(g, "finite") && (k.opacity = g), k)) : {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: zb
        }
    }, c), c.hsb = xb(function (a, b, d) {
        return c.hsb2rgb(a, b, d).hex
    }), c.hsl = xb(function (a, b, d) {
        return c.hsl2rgb(a, b, d).hex
    }), c.rgb = xb(function (a, b, c) {
        return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1)
    }), c.getColor = function (a) {
        var b = this.getColor.start = this.getColor.start || {
                h: 0,
                s: 1,
                b: a || .75
            },
            c = this.hsb2rgb(b.h, b.s, b.b);
        return b.h += .075, b.h > 1 && (b.h = 0, b.s -= .2, b.s <= 0 && (this.getColor.start = {
            h: 0,
            s: 1,
            b: b.b
        })), c.hex
    }, c.getColor.reset = function () {
        delete this.start
    }, c.parsePathString = function (a) {
        if (!a) return null;
        var b = Bb(a);
        if (b.arr) return Lb(b.arr);
        var d = {
                a: 7,
                c: 6,
                h: 1,
                l: 2,
                m: 2,
                r: 4,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                z: 0
            },
            e = [];
        return c.is(a, G) && c.is(a[0], G) && (e = Lb(a)), e.length || t(a).replace(_, function (a, b, c) {
            var f = [],
                g = b.toLowerCase();
            if (c.replace(bb, function (a, b) {
                    b && f.push(+b)
                }), "m" == g && f.length > 2 && (e.push([b][p](f.splice(0, 2))), g = "l", b = "m" == b ? "l" : "L"), "r" == g) e.push([b][p](f));
            else
                for (; f.length >= d[g] && (e.push([b][p](f.splice(0, d[g]))), d[g]););
        }), e.toString = c._path2string, b.arr = Lb(e), e
    }, c.parseTransformString = xb(function (a) {
        if (!a) return null;
        var d = [];
        return c.is(a, G) && c.is(a[0], G) && (d = Lb(a)), d.length || t(a).replace(ab, function (a, b, c) {
            var e = [];
            x.call(b), c.replace(bb, function (a, b) {
                b && e.push(+b)
            }), d.push([b][p](e))
        }), d.toString = c._path2string, d
    });
    var Bb = function (a) {
        var b = Bb.ps = Bb.ps || {};
        return b[a] ? b[a].sleep = 100 : b[a] = {
            sleep: 100
        }, setTimeout(function () {
            for (var c in b) b[i](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
        }), b[a]
    };
    c.findDotsAtSegment = function (a, b, c, d, e, f, g, h, i) {
        var j = 1 - i,
            k = C(j, 3),
            l = C(j, 2),
            m = i * i,
            n = m * i,
            o = k * a + 3 * l * i * c + 3 * j * i * i * e + n * g,
            p = k * b + 3 * l * i * d + 3 * j * i * i * f + n * h,
            q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
            r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
            s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
            t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
            u = j * a + i * c,
            v = j * b + i * d,
            w = j * e + i * g,
            x = j * f + i * h,
            z = 90 - 180 * y.atan2(q - s, r - t) / D;
        return (q > s || t > r) && (z += 180), {
            x: o,
            y: p,
            m: {
                x: q,
                y: r
            },
            n: {
                x: s,
                y: t
            },
            start: {
                x: u,
                y: v
            },
            end: {
                x: w,
                y: x
            },
            alpha: z
        }
    }, c.bezierBBox = function (a, b, d, e, f, g, h, i) {
        c.is(a, "array") || (a = [a, b, d, e, f, g, h, i]);
        var j = Sb.apply(null, a);
        return {
            x: j.min.x,
            y: j.min.y,
            x2: j.max.x,
            y2: j.max.y,
            width: j.max.x - j.min.x,
            height: j.max.y - j.min.y
        }
    }, c.isPointInsideBBox = function (a, b, c) {
        return b >= a.x && b <= a.x2 && c >= a.y && c <= a.y2
    }, c.isBBoxIntersect = function (a, b) {
        var d = c.isPointInsideBBox;
        return d(b, a.x, a.y) || d(b, a.x2, a.y) || d(b, a.x, a.y2) || d(b, a.x2, a.y2) || d(a, b.x, b.y) || d(a, b.x2, b.y) || d(a, b.x, b.y2) || d(a, b.x2, b.y2) || (a.x < b.x2 && a.x > b.x || b.x < a.x2 && b.x > a.x) && (a.y < b.y2 && a.y > b.y || b.y < a.y2 && b.y > a.y)
    }, c.pathIntersection = function (a, b) {
        return Jb(a, b)
    }, c.pathIntersectionNumber = function (a, b) {
        return Jb(a, b, 1)
    }, c.isPointInsidePath = function (a, b, d) {
        var e = c.pathBBox(a);
        return c.isPointInsideBBox(e, b, d) && 1 == Jb(a, [["M", b, d], ["H", e.x2 + 10]], 1) % 2
    }, c._removedFactory = function (a) {
        return function () {
            b("raphael.log", null, "Rapha\xebl: you are calling to method \u201c" + a + "\u201d of removed object", a)
        }
    };
    var Kb = c.pathBBox = function (a) {
            var b = Bb(a);
            if (b.bbox) return ob(b.bbox);
            if (!a) return {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                x2: 0,
                y2: 0
            };
            a = Tb(a);
            for (var g, c = 0, d = 0, e = [], f = [], h = 0, i = a.length; i > h; h++)
                if (g = a[h], "M" == g[0]) c = g[1], d = g[2], e.push(c), f.push(d);
                else {
                    var j = Sb(c, d, g[1], g[2], g[3], g[4], g[5], g[6]);
                    e = e[p](j.min.x, j.max.x), f = f[p](j.min.y, j.max.y), c = g[5], d = g[6]
                }
            var k = A[o](0, e),
                l = A[o](0, f),
                m = z[o](0, e),
                n = z[o](0, f),
                q = m - k,
                r = n - l,
                s = {
                    x: k,
                    y: l,
                    x2: m,
                    y2: n,
                    width: q,
                    height: r,
                    cx: k + q / 2,
                    cy: l + r / 2
                };
            return b.bbox = ob(s), s
        },
        Lb = function (a) {
            var b = ob(a);
            return b.toString = c._path2string, b
        },
        Mb = c._pathToRelative = function (a) {
            var b = Bb(a);
            if (b.rel) return Lb(b.rel);
            c.is(a, G) && c.is(a && a[0], G) || (a = c.parsePathString(a));
            var d = [],
                e = 0,
                f = 0,
                g = 0,
                h = 0,
                i = 0;
            "M" == a[0][0] && (e = a[0][1], f = a[0][2], g = e, h = f, i++, d.push(["M", e, f]));
            for (var j = i, k = a.length; k > j; j++) {
                var l = d[j] = [],
                    m = a[j];
                if (m[0] != x.call(m[0])) switch (l[0] = x.call(m[0]), l[0]) {
                case "a":
                    l[1] = m[1], l[2] = m[2], l[3] = m[3], l[4] = m[4], l[5] = m[5], l[6] = +(m[6] - e).toFixed(3), l[7] = +(m[7] - f).toFixed(3);
                    break;
                case "v":
                    l[1] = +(m[1] - f).toFixed(3);
                    break;
                case "m":
                    g = m[1], h = m[2];
                default:
                    for (var n = 1, o = m.length; o > n; n++) l[n] = +(m[n] - (n % 2 ? e : f)).toFixed(3)
                } else {
                    l = d[j] = [], "m" == m[0] && (g = m[1] + e, h = m[2] + f);
                    for (var p = 0, q = m.length; q > p; p++) d[j][p] = m[p]
                }
                var r = d[j].length;
                switch (d[j][0]) {
                case "z":
                    e = g, f = h;
                    break;
                case "h":
                    e += +d[j][r - 1];
                    break;
                case "v":
                    f += +d[j][r - 1];
                    break;
                default:
                    e += +d[j][r - 2], f += +d[j][r - 1]
                }
            }
            return d.toString = c._path2string, b.rel = Lb(d), d
        },
        Nb = c._pathToAbsolute = function (a) {
            var b = Bb(a);
            if (b.abs) return Lb(b.abs);
            if (c.is(a, G) && c.is(a && a[0], G) || (a = c.parsePathString(a)), !a || !a.length) return [["M", 0, 0]];
            var d = [],
                e = 0,
                f = 0,
                g = 0,
                h = 0,
                i = 0;
            "M" == a[0][0] && (e = +a[0][1], f = +a[0][2], g = e, h = f, i++, d[0] = ["M", e, f]);
            for (var k, l, j = 3 == a.length && "M" == a[0][0] && "R" == a[1][0].toUpperCase() && "Z" == a[2][0].toUpperCase(), m = i, n = a.length; n > m; m++) {
                if (d.push(k = []), l = a[m], l[0] != U.call(l[0])) switch (k[0] = U.call(l[0]), k[0]) {
                    case "A":
                        k[1] = l[1], k[2] = l[2], k[3] = l[3], k[4] = l[4], k[5] = l[5], k[6] = +(l[6] + e), k[7] = +(l[7] + f);
                        break;
                    case "V":
                        k[1] = +l[1] + f;
                        break;
                    case "H":
                        k[1] = +l[1] + e;
                        break;
                    case "R":
                        for (var o = [e, f][p](l.slice(1)), q = 2, r = o.length; r > q; q++) o[q] = +o[q] + e, o[++q] = +o[q] + f;
                        d.pop(), d = d[p](Ab(o, j));
                        break;
                    case "M":
                        g = +l[1] + e, h = +l[2] + f;
                    default:
                        for (q = 1, r = l.length; r > q; q++) k[q] = +l[q] + (q % 2 ? e : f)
                    } else if ("R" == l[0]) o = [e, f][p](l.slice(1)), d.pop(), d = d[p](Ab(o, j)), k = ["R"][p](l.slice(-2));
                    else
                        for (var s = 0, t = l.length; t > s; s++) k[s] = l[s];
                switch (k[0]) {
                case "Z":
                    e = g, f = h;
                    break;
                case "H":
                    e = k[1];
                    break;
                case "V":
                    f = k[1];
                    break;
                case "M":
                    g = k[k.length - 2], h = k[k.length - 1];
                default:
                    e = k[k.length - 2], f = k[k.length - 1]
                }
            }
            return d.toString = c._path2string, b.abs = Lb(d), d
        },
        Ob = function (a, b, c, d) {
            return [a, b, c, d, c, d]
        },
        Pb = function (a, b, c, d, e, f) {
            var g = 1 / 3,
                h = 2 / 3;
            return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
        },
        Qb = function (a, b, c, d, e, f, g, h, i, j) {
            var n, k = 120 * D / 180,
                l = D / 180 * (+e || 0),
                m = [],
                o = xb(function (a, b, c) {
                    var d = a * y.cos(c) - b * y.sin(c),
                        e = a * y.sin(c) + b * y.cos(c);
                    return {
                        x: d,
                        y: e
                    }
                });
            if (j) E = j[0], F = j[1], A = j[2], C = j[3];
            else {
                n = o(a, b, -l), a = n.x, b = n.y, n = o(h, i, -l), h = n.x, i = n.y;
                var s = (y.cos(D / 180 * e), y.sin(D / 180 * e), (a - h) / 2),
                    t = (b - i) / 2,
                    v = s * s / (c * c) + t * t / (d * d);
                v > 1 && (v = y.sqrt(v), c = v * c, d = v * d);
                var w = c * c,
                    x = d * d,
                    z = (f == g ? -1 : 1) * y.sqrt(B((w * x - w * t * t - x * s * s) / (w * t * t + x * s * s))),
                    A = z * c * t / d + (a + h) / 2,
                    C = z * -d * s / c + (b + i) / 2,
                    E = y.asin(((b - C) / d).toFixed(9)),
                    F = y.asin(((i - C) / d).toFixed(9));
                E = A > a ? D - E : E, F = A > h ? D - F : F, 0 > E && (E = 2 * D + E), 0 > F && (F = 2 * D + F), g && E > F && (E -= 2 * D), !g && F > E && (F -= 2 * D)
            }
            var G = F - E;
            if (B(G) > k) {
                var H = F,
                    I = h,
                    J = i;
                F = E + k * (g && F > E ? 1 : -1), h = A + c * y.cos(F), i = C + d * y.sin(F), m = Qb(h, i, c, d, e, 0, g, I, J, [F, H, A, C])
            }
            G = F - E;
            var K = y.cos(E),
                L = y.sin(E),
                M = y.cos(F),
                N = y.sin(F),
                O = y.tan(G / 4),
                P = 4 / 3 * c * O,
                Q = 4 / 3 * d * O,
                R = [a, b],
                S = [a + P * L, b - Q * K],
                T = [h + P * N, i - Q * M],
                U = [h, i];
            if (S[0] = 2 * R[0] - S[0], S[1] = 2 * R[1] - S[1], j) return [S, T, U][p](m);
            m = [S, T, U][p](m).join()[u](",");
            for (var V = [], W = 0, X = m.length; X > W; W++) V[W] = W % 2 ? o(m[W - 1], m[W], l).y : o(m[W], m[W + 1], l).x;
            return V
        },
        Rb = function (a, b, c, d, e, f, g, h, i) {
            var j = 1 - i;
            return {
                x: C(j, 3) * a + 3 * C(j, 2) * i * c + 3 * j * i * i * e + C(i, 3) * g,
                y: C(j, 3) * b + 3 * C(j, 2) * i * d + 3 * j * i * i * f + C(i, 3) * h
            }
        },
        Sb = xb(function (a, b, c, d, e, f, g, h) {
            var q, i = e - 2 * c + a - (g - 2 * e + c),
                j = 2 * (c - a) - 2 * (e - c),
                k = a - c,
                l = (-j + y.sqrt(j * j - 4 * i * k)) / 2 / i,
                m = (-j - y.sqrt(j * j - 4 * i * k)) / 2 / i,
                n = [b, h],
                p = [a, g];
            return B(l) > "1e12" && (l = .5), B(m) > "1e12" && (m = .5), l > 0 && 1 > l && (q = Rb(a, b, c, d, e, f, g, h, l), p.push(q.x), n.push(q.y)), m > 0 && 1 > m && (q = Rb(a, b, c, d, e, f, g, h, m), p.push(q.x), n.push(q.y)), i = f - 2 * d + b - (h - 2 * f + d), j = 2 * (d - b) - 2 * (f - d), k = b - d, l = (-j + y.sqrt(j * j - 4 * i * k)) / 2 / i, m = (-j - y.sqrt(j * j - 4 * i * k)) / 2 / i, B(l) > "1e12" && (l = .5), B(m) > "1e12" && (m = .5), l > 0 && 1 > l && (q = Rb(a, b, c, d, e, f, g, h, l), p.push(q.x), n.push(q.y)), m > 0 && 1 > m && (q = Rb(a, b, c, d, e, f, g, h, m), p.push(q.x), n.push(q.y)), {
                min: {
                    x: A[o](0, p),
                    y: A[o](0, n)
                },
                max: {
                    x: z[o](0, p),
                    y: z[o](0, n)
                }
            }
        }),
        Tb = c._path2curve = xb(function (a, b) {
            var c = !b && Bb(a);
            if (!b && c.curve) return Lb(c.curve);
            for (var d = Nb(a), e = b && Nb(b), f = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, g = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, h = (function (a, b, c) {
                    var d, e, f = {
                        T: 1,
                        Q: 1
                    };
                    if (!a) return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
                    switch (!(a[0] in f) && (b.qx = b.qy = null), a[0]) {
                    case "M":
                        b.X = a[1], b.Y = a[2];
                        break;
                    case "A":
                        a = ["C"][p](Qb[o](0, [b.x, b.y][p](a.slice(1))));
                        break;
                    case "S":
                        "C" == c || "S" == c ? (d = 2 * b.x - b.bx, e = 2 * b.y - b.by) : (d = b.x, e = b.y), a = ["C", d, e][p](a.slice(1));
                        break;
                    case "T":
                        "Q" == c || "T" == c ? (b.qx = 2 * b.x - b.qx, b.qy = 2 * b.y - b.qy) : (b.qx = b.x, b.qy = b.y), a = ["C"][p](Pb(b.x, b.y, b.qx, b.qy, a[1], a[2]));
                        break;
                    case "Q":
                        b.qx = a[1], b.qy = a[2], a = ["C"][p](Pb(b.x, b.y, a[1], a[2], a[3], a[4]));
                        break;
                    case "L":
                        a = ["C"][p](Ob(b.x, b.y, a[1], a[2]));
                        break;
                    case "H":
                        a = ["C"][p](Ob(b.x, b.y, a[1], b.y));
                        break;
                    case "V":
                        a = ["C"][p](Ob(b.x, b.y, b.x, a[1]));
                        break;
                    case "Z":
                        a = ["C"][p](Ob(b.x, b.y, b.X, b.Y))
                    }
                    return a
                }), i = function (a, b) {
                    if (a[b].length > 7) {
                        a[b].shift();
                        for (var c = a[b]; c.length;) a.splice(b++, 0, ["C"][p](c.splice(0, 6)));
                        a.splice(b, 1), l = z(d.length, e && e.length || 0)
                    }
                }, j = function (a, b, c, f, g) {
                    a && b && "M" == a[g][0] && "M" != b[g][0] && (b.splice(g, 0, ["M", f.x, f.y]), c.bx = 0, c.by = 0, c.x = a[g][1], c.y = a[g][2], l = z(d.length, e && e.length || 0))
                }, k = 0, l = z(d.length, e && e.length || 0); l > k; k++) {
                d[k] = h(d[k], f), i(d, k), e && (e[k] = h(e[k], g)), e && i(e, k), j(d, e, f, g, k), j(e, d, g, f, k);
                var m = d[k],
                    n = e && e[k],
                    q = m.length,
                    r = e && n.length;
                f.x = m[q - 2], f.y = m[q - 1], f.bx = S(m[q - 4]) || f.x, f.by = S(m[q - 3]) || f.y, g.bx = e && (S(n[r - 4]) || g.x), g.by = e && (S(n[r - 3]) || g.y), g.x = e && n[r - 2], g.y = e && n[r - 1]
            }
            return e || (c.curve = Lb(d)), e ? [d, e] : d
        }, null, Lb),
        Vb = (c._parseDots = xb(function (a) {
            for (var b = [], d = 0, e = a.length; e > d; d++) {
                var f = {},
                    g = a[d].match(/^([^:]*):?([\d\.]*)/);
                if (f.color = c.getRGB(g[1]), f.color.error) return null;
                f.color = f.color.hex, g[2] && (f.offset = g[2] + "%"), b.push(f)
            }
            for (d = 1, e = b.length - 1; e > d; d++)
                if (!b[d].offset) {
                    for (var h = S(b[d - 1].offset || 0), i = 0, j = d + 1; e > j; j++)
                        if (b[j].offset) {
                            i = b[j].offset;
                            break
                        }
                    i || (i = 100, j = e), i = S(i);
                    for (var k = (i - h) / (j - d + 1); j > d; d++) h += k, b[d].offset = h + "%"
                }
            return b
        }), c._tear = function (a, b) {
            a == b.top && (b.top = a.prev), a == b.bottom && (b.bottom = a.next), a.next && (a.next.prev = a.prev), a.prev && (a.prev.next = a.next)
        }),
        $b = (c._tofront = function (a, b) {
            b.top !== a && (Vb(a, b), a.next = null, a.prev = b.top, b.top.next = a, b.top = a)
        }, c._toback = function (a, b) {
            b.bottom !== a && (Vb(a, b), a.next = b.bottom, a.prev = null, b.bottom.prev = a, b.bottom = a)
        }, c._insertafter = function (a, b, c) {
            Vb(a, c), b == c.top && (c.top = a), b.next && (b.next.prev = a), a.next = b.next, a.prev = b, b.next = a
        }, c._insertbefore = function (a, b, c) {
            Vb(a, c), b == c.bottom && (c.bottom = a), b.prev && (b.prev.next = a), a.prev = b.prev, b.prev = a, a.next = b
        }, c.toMatrix = function (a, b) {
            var c = Kb(a),
                d = {
                    _: {
                        transform: r
                    },
                    getBBox: function () {
                        return c
                    }
                };
            return ac(d, b), d.matrix
        }),
        ac = (c.transformPath = function (a, b) {
            return lb(a, $b(a, b))
        }, c._extractTransform = function (a, b) {
            if (null == b) return a._.transform;
            b = t(b).replace(/\.{3}|\u2026/g, a._.transform || r);
            var d = c.parseTransformString(b),
                e = 0,
                f = 0,
                g = 0,
                h = 1,
                i = 1,
                j = a._,
                k = new dc;
            if (j.transform = d || [], d)
                for (var l = 0, m = d.length; m > l; l++) {
                    var u, v, w, x, y, n = d[l],
                        o = n.length,
                        p = t(n[0]).toLowerCase(),
                        q = n[0] != p,
                        s = q ? k.invert() : 0;
                    "t" == p && 3 == o ? q ? (u = s.x(0, 0), v = s.y(0, 0), w = s.x(n[1], n[2]), x = s.y(n[1], n[2]), k.translate(w - u, x - v)) : k.translate(n[1], n[2]) : "r" == p ? 2 == o ? (y = y || a.getBBox(1), k.rotate(n[1], y.x + y.width / 2, y.y + y.height / 2), e += n[1]) : 4 == o && (q ? (w = s.x(n[2], n[3]), x = s.y(n[2], n[3]), k.rotate(n[1], w, x)) : k.rotate(n[1], n[2], n[3]), e += n[1]) : "s" == p ? 2 == o || 3 == o ? (y = y || a.getBBox(1), k.scale(n[1], n[o - 1], y.x + y.width / 2, y.y + y.height / 2), h *= n[1], i *= n[o - 1]) : 5 == o && (q ? (w = s.x(n[3], n[4]), x = s.y(n[3], n[4]), k.scale(n[1], n[2], w, x)) : k.scale(n[1], n[2], n[3], n[4]), h *= n[1], i *= n[2]) : "m" == p && 7 == o && k.add(n[1], n[2], n[3], n[4], n[5], n[6]), j.dirtyT = 1, a.matrix = k
                }
            a.matrix = k, j.sx = h, j.sy = i, j.deg = e, j.dx = f = k.e, j.dy = g = k.f, 1 == h && 1 == i && !e && j.bbox ? (j.bbox.x += +f, j.bbox.y += +g) : j.dirtyT = 1
        }),
        bc = function (a) {
            var b = a[0];
            switch (b.toLowerCase()) {
            case "t":
                return [b, 0, 0];
            case "m":
                return [b, 1, 0, 0, 1, 0, 0];
            case "r":
                return 4 == a.length ? [b, 0, a[2], a[3]] : [b, 0];
            case "s":
                return 5 == a.length ? [b, 1, 1, a[3], a[4]] : 3 == a.length ? [b, 1, 1] : [b, 1]
            }
        },
        cc = c._equaliseTransform = function (a, b) {
            b = t(b).replace(/\.{3}|\u2026/g, a), a = c.parseTransformString(a) || [], b = c.parseTransformString(b) || [];
            for (var h, i, j, k, d = z(a.length, b.length), e = [], f = [], g = 0; d > g; g++) {
                if (j = a[g] || bc(b[g]), k = b[g] || bc(j), j[0] != k[0] || "r" == j[0].toLowerCase() && (j[2] != k[2] || j[3] != k[3]) || "s" == j[0].toLowerCase() && (j[3] != k[3] || j[4] != k[4])) return;
                for (e[g] = [], f[g] = [], h = 0, i = z(j.length, k.length); i > h; h++) h in j && (e[g][h] = j[h]), h in k && (f[g][h] = k[h])
            }
            return {
                from: e,
                to: f
            }
        };
    c._getContainer = function (a, b, d, e) {
            var f;
            return f = null != e || c.is(a, "object") ? a : j.doc.getElementById(a), null != f ? f.tagName ? null == b ? {
                container: f,
                width: f.style.pixelWidth || f.offsetWidth,
                height: f.style.pixelHeight || f.offsetHeight
            } : {
                container: f,
                width: b,
                height: d
            } : {
                container: 1,
                x: a,
                y: b,
                width: d,
                height: e
            } : void 0
        }, c.pathToRelative = Mb, c._engine = {}, c.path2curve = Tb, c.matrix = function (a, b, c, d, e, f) {
            return new dc(a, b, c, d, e, f)
        },
        function (a) {
            function b(a) {
                return a[0] * a[0] + a[1] * a[1]
            }

            function d(a) {
                var c = y.sqrt(b(a));
                a[0] && (a[0] /= c), a[1] && (a[1] /= c)
            }
            a.add = function (a, b, c, d, e, f) {
                var j, k, l, m, g = [[], [], []],
                    h = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
                    i = [[a, c, e], [b, d, f], [0, 0, 1]];
                for (a && a instanceof dc && (i = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]]), j = 0; 3 > j; j++)
                    for (k = 0; 3 > k; k++) {
                        for (m = 0, l = 0; 3 > l; l++) m += h[j][l] * i[l][k];
                        g[j][k] = m
                    }
                this.a = g[0][0], this.b = g[1][0], this.c = g[0][1], this.d = g[1][1], this.e = g[0][2], this.f = g[1][2]
            }, a.invert = function () {
                var a = this,
                    b = a.a * a.d - a.b * a.c;
                return new dc(a.d / b, -a.b / b, -a.c / b, a.a / b, (a.c * a.f - a.d * a.e) / b, (a.b * a.e - a.a * a.f) / b)
            }, a.clone = function () {
                return new dc(this.a, this.b, this.c, this.d, this.e, this.f)
            }, a.translate = function (a, b) {
                this.add(1, 0, 0, 1, a, b)
            }, a.scale = function (a, b, c, d) {
                null == b && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d)
            }, a.rotate = function (a, b, d) {
                a = c.rad(a), b = b || 0, d = d || 0;
                var e = +y.cos(a).toFixed(9),
                    f = +y.sin(a).toFixed(9);
                this.add(e, f, -f, e, b, d), this.add(1, 0, 0, 1, -b, -d)
            }, a.x = function (a, b) {
                return a * this.a + b * this.c + this.e
            }, a.y = function (a, b) {
                return a * this.b + b * this.d + this.f
            }, a.get = function (a) {
                return +this[t.fromCharCode(97 + a)].toFixed(4)
            }, a.toString = function () {
                return c.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
            }, a.toFilter = function () {
                return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
            }, a.offset = function () {
                return [this.e.toFixed(4), this.f.toFixed(4)]
            }, a.split = function () {
                var a = {};
                a.dx = this.e, a.dy = this.f;
                var e = [[this.a, this.c], [this.b, this.d]];
                a.scalex = y.sqrt(b(e[0])), d(e[0]), a.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1], e[1] = [e[1][0] - e[0][0] * a.shear, e[1][1] - e[0][1] * a.shear], a.scaley = y.sqrt(b(e[1])), d(e[1]), a.shear /= a.scaley;
                var f = -e[0][1],
                    g = e[1][1];
                return 0 > g ? (a.rotate = c.deg(y.acos(g)), 0 > f && (a.rotate = 360 - a.rotate)) : a.rotate = c.deg(y.asin(f)), a.isSimple = !(+a.shear.toFixed(9) || a.scalex.toFixed(9) != a.scaley.toFixed(9) && a.rotate), a.isSuperSimple = !+a.shear.toFixed(9) && a.scalex.toFixed(9) == a.scaley.toFixed(9) && !a.rotate, a.noRotation = !+a.shear.toFixed(9) && !a.rotate, a
            }, a.toTransformString = function (a) {
                var b = a || this[u]();
                return b.isSimple ? (b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4), (b.dx || b.dy ? "t" + [b.dx, b.dy] : r) + (1 != b.scalex || 1 != b.scaley ? "s" + [b.scalex, b.scaley, 0, 0] : r) + (b.rotate ? "r" + [b.rotate, 0, 0] : r)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
            }
        }(dc.prototype);
    var ec = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
    m.safari = "Apple Computer, Inc." == navigator.vendor && (ec && ec[1] < 4 || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && ec && ec[1] < 8 ? function () {
        var a = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
            stroke: "none"
        });
        setTimeout(function () {
            a.remove()
        })
    } : gb;
    for (var fc = function () {
            this.returnValue = !1
        }, gc = function () {
            return this.originalEvent.preventDefault()
        }, hc = function () {
            this.cancelBubble = !0
        }, ic = function () {
            return this.originalEvent.stopPropagation()
        }, jc = function (a) {
            var b = j.doc.documentElement.scrollTop || j.doc.body.scrollTop,
                c = j.doc.documentElement.scrollLeft || j.doc.body.scrollLeft;
            return {
                x: a.clientX + c,
                y: a.clientY + b
            }
        }, kc = function () {
            return j.doc.addEventListener ? function (a, b, c, d) {
                var e = function (a) {
                    var b = jc(a);
                    return c.call(d, a, b.x, b.y)
                };
                if (a.addEventListener(b, e, !1), q && w[b]) {
                    var f = function (b) {
                        for (var e = jc(b), f = b, g = 0, h = b.targetTouches && b.targetTouches.length; h > g; g++)
                            if (b.targetTouches[g].target == a) {
                                b = b.targetTouches[g], b.originalEvent = f, b.preventDefault = gc, b.stopPropagation = ic;
                                break
                            }
                        return c.call(d, b, e.x, e.y)
                    };
                    a.addEventListener(w[b], f, !1)
                }
                return function () {
                    return a.removeEventListener(b, e, !1), q && w[b] && a.removeEventListener(w[b], e, !1), !0
                }
            } : j.doc.attachEvent ? function (a, b, c, d) {
                var e = function (a) {
                    a = a || j.win.event;
                    var b = j.doc.documentElement.scrollTop || j.doc.body.scrollTop,
                        e = j.doc.documentElement.scrollLeft || j.doc.body.scrollLeft,
                        f = a.clientX + e,
                        g = a.clientY + b;
                    return a.preventDefault = a.preventDefault || fc, a.stopPropagation = a.stopPropagation || hc, c.call(d, a, f, g)
                };
                a.attachEvent("on" + b, e);
                var f = function () {
                    return a.detachEvent("on" + b, e), !0
                };
                return f
            } : void 0
        }(), lc = [], mc = function (a) {
            for (var g, c = a.clientX, d = a.clientY, e = j.doc.documentElement.scrollTop || j.doc.body.scrollTop, f = j.doc.documentElement.scrollLeft || j.doc.body.scrollLeft, h = lc.length; h--;) {
                if (g = lc[h], q && a.touches) {
                    for (var k, i = a.touches.length; i--;)
                        if (k = a.touches[i], k.identifier == g.el._drag.id) {
                            c = k.clientX, d = k.clientY, (a.originalEvent ? a.originalEvent : a).preventDefault();
                            break
                        }
                } else a.preventDefault();
                var m, l = g.el.node,
                    n = l.nextSibling,
                    o = l.parentNode,
                    p = l.style.display;
                j.win.opera && o.removeChild(l), l.style.display = "none", m = g.el.paper.getElementByPoint(c, d), l.style.display = p, j.win.opera && (n ? o.insertBefore(l, n) : o.appendChild(l)), m && b("raphael.drag.over." + g.el.id, g.el, m), c += f, d += e, b("raphael.drag.move." + g.el.id, g.move_scope || g.el, c - g.el._drag.x, d - g.el._drag.y, c, d, a)
            }
        }, nc = function (a) {
            c.unmousemove(mc).unmouseup(nc);
            for (var e, d = lc.length; d--;) e = lc[d], e.el._drag = {}, b("raphael.drag.end." + e.el.id, e.end_scope || e.start_scope || e.move_scope || e.el, a);
            lc = []
        }, oc = c.el = {}, pc = v.length; pc--;) ! function (a) {
        c[a] = oc[a] = function (b, d) {
            return c.is(b, "function") && (this.events = this.events || [], this.events.push({
                name: a,
                f: b,
                unbind: kc(this.shape || this.node || j.doc, a, b, d || this)
            })), this
        }, c["un" + a] = oc["un" + a] = function (b) {
            for (var d = this.events || [], e = d.length; e--;) d[e].name != a || !c.is(b, "undefined") && d[e].f != b || (d[e].unbind(), d.splice(e, 1), !d.length && delete this.events);
            return this
        }
    }(v[pc]);
    oc.data = function (a, d) {
        var e = db[this.id] = db[this.id] || {};
        if (0 == arguments.length) return e;
        if (1 == arguments.length) {
            if (c.is(a, "object")) {
                for (var f in a) a[i](f) && this.data(f, a[f]);
                return this
            }
            return b("raphael.data.get." + this.id, this, e[a], a), e[a]
        }
        return e[a] = d, b("raphael.data.set." + this.id, this, d, a), this
    }, oc.removeData = function (a) {
        return null == a ? db[this.id] = {} : db[this.id] && delete db[this.id][a], this
    }, oc.getData = function () {
        return ob(db[this.id] || {})
    }, oc.hover = function (a, b, c, d) {
        return this.mouseover(a, c).mouseout(b, d || c)
    }, oc.unhover = function (a, b) {
        return this.unmouseover(a).unmouseout(b)
    };
    var qc = [];
    oc.drag = function (a, d, e, f, g, h) {
        function i(i) {
            (i.originalEvent || i).preventDefault();
            var k = i.clientX,
                l = i.clientY,
                m = j.doc.documentElement.scrollTop || j.doc.body.scrollTop,
                n = j.doc.documentElement.scrollLeft || j.doc.body.scrollLeft;
            if (this._drag.id = i.identifier, q && i.touches)
                for (var p, o = i.touches.length; o--;)
                    if (p = i.touches[o], this._drag.id = p.identifier, p.identifier == this._drag.id) {
                        k = p.clientX, l = p.clientY;
                        break
                    }
            this._drag.x = k + n, this._drag.y = l + m, !lc.length && c.mousemove(mc).mouseup(nc), lc.push({
                el: this,
                move_scope: f,
                start_scope: g,
                end_scope: h
            }), d && b.on("raphael.drag.start." + this.id, d), a && b.on("raphael.drag.move." + this.id, a), e && b.on("raphael.drag.end." + this.id, e), b("raphael.drag.start." + this.id, g || f || this, i.clientX + n, i.clientY + m, i)
        }
        return this._drag = {}, qc.push({
            el: this,
            start: i
        }), this.mousedown(i), this
    }, oc.onDragOver = function (a) {
        a ? b.on("raphael.drag.over." + this.id, a) : b.unbind("raphael.drag.over." + this.id)
    }, oc.undrag = function () {
        for (var a = qc.length; a--;) qc[a].el == this && (this.unmousedown(qc[a].start), qc.splice(a, 1), b.unbind("raphael.drag.*." + this.id));
        !qc.length && c.unmousemove(mc).unmouseup(nc), lc = []
    }, m.circle = function (a, b, d) {
        var e = c._engine.circle(this, a || 0, b || 0, d || 0);
        return this.__set__ && this.__set__.push(e), e
    }, m.rect = function (a, b, d, e, f) {
        var g = c._engine.rect(this, a || 0, b || 0, d || 0, e || 0, f || 0);
        return this.__set__ && this.__set__.push(g), g
    }, m.ellipse = function (a, b, d, e) {
        var f = c._engine.ellipse(this, a || 0, b || 0, d || 0, e || 0);
        return this.__set__ && this.__set__.push(f), f
    }, m.path = function (a) {
        a && !c.is(a, F) && !c.is(a[0], G) && (a += r);
        var b = c._engine.path(c.format[o](c, arguments), this);
        return this.__set__ && this.__set__.push(b), b
    }, m.image = function (a, b, d, e, f) {
        var g = c._engine.image(this, a || "about:blank", b || 0, d || 0, e || 0, f || 0);
        return this.__set__ && this.__set__.push(g), g
    }, m.text = function (a, b, d) {
        var e = c._engine.text(this, a || 0, b || 0, t(d));
        return this.__set__ && this.__set__.push(e), e
    }, m.set = function (a) {
        !c.is(a, "array") && (a = Array.prototype.splice.call(arguments, 0, arguments.length));
        var b = new Jc(a);
        return this.__set__ && this.__set__.push(b), b.paper = this, b.type = "set", b
    }, m.setStart = function (a) {
        this.__set__ = a || this.set()
    }, m.setFinish = function () {
        var b = this.__set__;
        return delete this.__set__, b
    }, m.setSize = function (a, b) {
        return c._engine.setSize.call(this, a, b)
    }, m.setViewBox = function (a, b, d, e, f) {
        return c._engine.setViewBox.call(this, a, b, d, e, f)
    }, m.top = m.bottom = null, m.raphael = c;
    var rc = function (a) {
        var b = a.getBoundingClientRect(),
            c = a.ownerDocument,
            d = c.body,
            e = c.documentElement,
            f = e.clientTop || d.clientTop || 0,
            g = e.clientLeft || d.clientLeft || 0,
            h =0// b.top + (j.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
            i =0 //b.left + (j.win.pageXOffset || e.scrollLeft || d.scrollLeft) - g;
        return {
            y: h,
            x: i
        }
    };
    m.getElementByPoint = function (a, b) {
        var c = this,
            d = c.canvas,
            e = j.doc.elementFromPoint(a, b);
        if (j.win.opera && "svg" == e.tagName) {
            var f = rc(d),
                g = d.createSVGRect();
            g.x = a - f.x, g.y = b - f.y, g.width = g.height = 1;
            var h = d.getIntersectionList(g, null);
            h.length && (e = h[h.length - 1])
        }
        if (!e) return null;
        for (; e.parentNode && e != d.parentNode && !e.raphael;) e = e.parentNode;
        return e == c.canvas.parentNode && (e = d), e = e && e.raphael ? c.getById(e.raphaelid) : null
    }, m.getElementsByBBox = function (a) {
        var b = this.set();
        return this.forEach(function (d) {
            c.isBBoxIntersect(d.getBBox(), a) && b.push(d)
        }), b
    }, m.getById = function (a) {
        for (var b = this.bottom; b;) {
            if (b.id == a) return b;
            b = b.next
        }
        return null
    }, m.forEach = function (a, b) {
        for (var c = this.bottom; c;) {
            if (a.call(b, c) === !1) return this;
            c = c.next
        }
        return this
    }, m.getElementsByPoint = function (a, b) {
        var c = this.set();
        return this.forEach(function (d) {
            d.isPointInside(a, b) && c.push(d)
        }), c
    }, oc.isPointInside = function (a, b) {
        var d = this.realPath = kb[this.type](this);
        return this.attr("transform") && this.attr("transform").length && (d = c.transformPath(d, this.attr("transform"))), c.isPointInsidePath(d, a, b)
    }, oc.getBBox = function (a) {
        if (this.removed) return {};
        var b = this._;
        return a ? ((b.dirty || !b.bboxwt) && (this.realPath = kb[this.type](this), b.bboxwt = Kb(this.realPath), b.bboxwt.toString = tc, b.dirty = 0), b.bboxwt) : ((b.dirty || b.dirtyT || !b.bbox) && ((b.dirty || !this.realPath) && (b.bboxwt = 0, this.realPath = kb[this.type](this)), b.bbox = Kb(lb(this.realPath, this.matrix)), b.bbox.toString = tc, b.dirty = b.dirtyT = 0), b.bbox)
    }, oc.clone = function () {
        if (this.removed) return null;
        var a = this.paper[this.type]().attr(this.attr());
        return this.__set__ && this.__set__.push(a), a
    }, oc.glow = function (a) {
        if ("text" == this.type) return null;
        a = a || {};
        var b = {
                width: (a.width || 10) + (+this.attr("stroke-width") || 1),
                fill: a.fill || !1,
                opacity: a.opacity || .5,
                offsetx: a.offsetx || 0,
                offsety: a.offsety || 0,
                color: a.color || "#000"
            },
            c = b.width / 2,
            d = this.paper,
            e = d.set(),
            f = this.realPath || kb[this.type](this);
        f = this.matrix ? lb(f, this.matrix) : f;
        for (var g = 1; c + 1 > g; g++) e.push(d.path(f).attr({
            stroke: b.color,
            fill: b.fill ? b.color : "none",
            "stroke-linejoin": "round",
            "stroke-linecap": "round",
            "stroke-width": +(b.width / c * g).toFixed(3),
            opacity: +(b.opacity / c).toFixed(3)
        }));
        return e.insertBefore(this).translate(b.offsetx, b.offsety)
    };
    var vc = function (a, b, d, e, f, g, h, i, j) {
            return null == j ? Db(a, b, d, e, f, g, h, i) : c.findDotsAtSegment(a, b, d, e, f, g, h, i, Eb(a, b, d, e, f, g, h, i, j))
        },
        wc = function (a, b) {
            return function (d, e, f) {
                d = Tb(d);
                for (var g, h, i, j, m, k = "", l = {}, n = 0, o = 0, p = d.length; p > o; o++) {
                    if (i = d[o], "M" == i[0]) g = +i[1], h = +i[2];
                    else {
                        if (j = vc(g, h, i[1], i[2], i[3], i[4], i[5], i[6]), n + j > e) {
                            if (b && !l.start) {
                                if (m = vc(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n), k += ["C" + m.start.x, m.start.y, m.m.x, m.m.y, m.x, m.y], f) return k;
                                l.start = k, k = ["M" + m.x, m.y + "C" + m.n.x, m.n.y, m.end.x, m.end.y, i[5], i[6]].join(), n += j, g = +i[5], h = +i[6];
                                continue
                            }
                            if (!a && !b) return m = vc(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n), {
                                x: m.x,
                                y: m.y,
                                alpha: m.alpha
                            }
                        }
                        n += j, g = +i[5], h = +i[6]
                    }
                    k += i.shift() + i
                }
                return l.end = k, m = a ? n : b ? l : c.findDotsAtSegment(g, h, i[0], i[1], i[2], i[3], i[4], i[5], 1), m.alpha && (m = {
                    x: m.x,
                    y: m.y,
                    alpha: m.alpha
                }), m
            }
        },
        xc = wc(1),
        yc = wc(),
        zc = wc(0, 1);
    c.getTotalLength = xc, c.getPointAtLength = yc, c.getSubpath = function (a, b, c) {
        if (this.getTotalLength(a) - c < 1e-6) return zc(a, b).end;
        var d = zc(a, c, 1);
        return b ? zc(d, b).end : d
    }, oc.getTotalLength = function () {
        var a = this.getPath();
        if (a) return this.node.getTotalLength ? this.node.getTotalLength() : xc(a)
    }, oc.getPointAtLength = function (a) {
        var b = this.getPath();
        if (b) return yc(b, a)
    }, oc.getPath = function () {
        var a, b = c._getPath[this.type];
        if ("text" != this.type && "set" != this.type) return b && (a = b(this)), a
    }, oc.getSubpath = function (a, b) {
        var d = this.getPath();
        if (d) return c.getSubpath(d, a, b)
    };
    var Ac = c.easing_formulas = {
        linear: function (a) {
            return a
        },
        "<": function (a) {
            return C(a, 1.7)
        },
        ">": function (a) {
            return C(a, .48)
        },
        "<>": function (a) {
            var b = .48 - a / 1.04,
                c = y.sqrt(.1734 + b * b),
                d = c - b,
                e = C(B(d), 1 / 3) * (0 > d ? -1 : 1),
                f = -c - b,
                g = C(B(f), 1 / 3) * (0 > f ? -1 : 1),
                h = e + g + .5;
            return 3 * (1 - h) * h * h + h * h * h
        },
        backIn: function (a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        },
        backOut: function (a) {
            a -= 1;
            var b = 1.70158;
            return a * a * ((b + 1) * a + b) + 1
        },
        elastic: function (a) {
            return a == !!a ? a : C(2, -10 * a) * y.sin((a - .075) * 2 * D / .3) + 1
        },
        bounce: function (a) {
            var d, b = 7.5625,
                c = 2.75;
            return 1 / c > a ? d = b * a * a : 2 / c > a ? (a -= 1.5 / c, d = b * a * a + .75) : 2.5 / c > a ? (a -= 2.25 / c, d = b * a * a + .9375) : (a -= 2.625 / c, d = b * a * a + .984375), d
        }
    };
    Ac.easeIn = Ac["ease-in"] = Ac["<"], Ac.easeOut = Ac["ease-out"] = Ac[">"], Ac.easeInOut = Ac["ease-in-out"] = Ac["<>"], Ac["back-in"] = Ac.backIn, Ac["back-out"] = Ac.backOut;
    var Bc = [],
        Cc = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function (a) {
            setTimeout(a, 16)
        },
        Dc = function () {
            for (var a = +new Date, d = 0; d < Bc.length; d++) {
                var e = Bc[d];
                if (!e.el.removed && !e.paused) {
                    var q, t, f = a - e.start,
                        g = e.ms,
                        h = e.easing,
                        j = e.from,
                        k = e.diff,
                        l = e.to,
                        n = (e.t, e.el),
                        o = {},
                        r = {};
                    if (e.initstatus ? (f = (e.initstatus * e.anim.top - e.prev) / (e.percent - e.prev) * g, e.status = e.initstatus, delete e.initstatus, e.stop && Bc.splice(d--, 1)) : e.status = (e.prev + (e.percent - e.prev) * (f / g)) / e.anim.top, !(0 > f))
                        if (g > f) {
                            var u = h(f / g);
                            for (var v in j)
                                if (j[i](v)) {
                                    switch (W[v]) {
                                    case E:
                                        q = +j[v] + u * g * k[v];
                                        break;
                                    case "colour":
                                        q = "rgb(" + [Ec(Q(j[v].r + u * g * k[v].r)), Ec(Q(j[v].g + u * g * k[v].g)), Ec(Q(j[v].b + u * g * k[v].b))].join(",") + ")";
                                        break;
                                    case "path":
                                        q = [];
                                        for (var w = 0, x = j[v].length; x > w; w++) {
                                            q[w] = [j[v][w][0]];
                                            for (var y = 1, z = j[v][w].length; z > y; y++) q[w][y] = +j[v][w][y] + u * g * k[v][w][y];
                                            q[w] = q[w].join(s)
                                        }
                                        q = q.join(s);
                                        break;
                                    case "transform":
                                        if (k[v].real)
                                            for (q = [], w = 0, x = j[v].length; x > w; w++)
                                                for (q[w] = [j[v][w][0]], y = 1, z = j[v][w].length; z > y; y++) q[w][y] = j[v][w][y] + u * g * k[v][w][y];
                                        else {
                                            var A = function (a) {
                                                return +j[v][a] + u * g * k[v][a]
                                            };
                                            q = [["m", A(0), A(1), A(2), A(3), A(4), A(5)]]
                                        }
                                        break;
                                    case "csv":
                                        if ("clip-rect" == v)
                                            for (q = [], w = 4; w--;) q[w] = +j[v][w] + u * g * k[v][w];
                                        break;
                                    default:
                                        var B = [][p](j[v]);
                                        for (q = [], w = n.paper.customAttributes[v].length; w--;) q[w] = +B[w] + u * g * k[v][w]
                                    }
                                    o[v] = q
                                }
                            n.attr(o),
                                function (a, c, d) {
                                    setTimeout(function () {
                                        b("raphael.anim.frame." + a, c, d)
                                    })
                                }(n.id, n, e.anim)
                        } else {
                            if (function (a, d, e) {
                                    setTimeout(function () {
                                        b("raphael.anim.frame." + d.id, d, e), b("raphael.anim.finish." + d.id, d, e), c.is(a, "function") && a.call(d)
                                    })
                                }(e.callback, n, e.anim), n.attr(l), Bc.splice(d--, 1), e.repeat > 1 && !e.next) {
                                for (t in l) l[i](t) && (r[t] = e.totalOrigin[t]);
                                e.el.attr(r), Hc(e.anim, e.el, e.anim.percents[0], null, e.totalOrigin, e.repeat - 1)
                            }
                            e.next && !e.stop && Hc(e.anim, e.el, e.next, null, e.totalOrigin, e.repeat)
                        }
                }
            }
            c.svg && n && n.paper && n.paper.safari(), Bc.length && Cc(Dc)
        },
        Ec = function (a) {
            return a > 255 ? 255 : 0 > a ? 0 : a
        };
    oc.animateWith = function (a, b, d, e, f, g) {
        var h = this;
        if (h.removed) return g && g.call(h), h;
        var i = d instanceof Gc ? d : c.animation(d, e, f, g);
        Hc(i, h, i.percents[0], null, h.attr());
        for (var l = 0, m = Bc.length; m > l; l++)
            if (Bc[l].anim == b && Bc[l].el == a) {
                Bc[m - 1].start = Bc[l].start;
                break
            }
        return h
    }, oc.onAnimation = function (a) {
        return a ? b.on("raphael.anim.frame." + this.id, a) : b.unbind("raphael.anim.frame." + this.id), this
    }, Gc.prototype.delay = function (a) {
        var b = new Gc(this.anim, this.ms);
        return b.times = this.times, b.del = +a || 0, b
    }, Gc.prototype.repeat = function (a) {
        var b = new Gc(this.anim, this.ms);
        return b.del = this.del, b.times = y.floor(z(a, 0)) || 1, b
    }, c.animation = function (a, b, d, e) {
        if (a instanceof Gc) return a;
        (c.is(d, "function") || !d) && (e = e || d || null, d = null), a = Object(a), b = +b || 0;
        var g, h, f = {};
        for (h in a) a[i](h) && S(h) != h && S(h) + "%" != h && (g = !0, f[h] = a[h]);
        return g ? (d && (f.easing = d), e && (f.callback = e), new Gc({
            100: f
        }, b)) : new Gc(a, b)
    }, oc.animate = function (a, b, d, e) {
        var f = this;
        if (f.removed) return e && e.call(f), f;
        var g = a instanceof Gc ? a : c.animation(a, b, d, e);
        return Hc(g, f, g.percents[0], null, f.attr()), f
    }, oc.setTime = function (a, b) {
        return a && null != b && this.status(a, A(b, a.ms) / a.ms), this
    }, oc.status = function (a, b) {
        var e, f, c = [],
            d = 0;
        if (null != b) return Hc(a, this, -1, A(b, 1)), this;
        for (e = Bc.length; e > d; d++)
            if (f = Bc[d], f.el.id == this.id && (!a || f.anim == a)) {
                if (a) return f.status;
                c.push({
                    anim: f.anim,
                    status: f.status
                })
            }
        return a ? 0 : c
    }, oc.pause = function (a) {
        for (var c = 0; c < Bc.length; c++) Bc[c].el.id != this.id || a && Bc[c].anim != a || b("raphael.anim.pause." + this.id, this, Bc[c].anim) !== !1 && (Bc[c].paused = !0);
        return this
    }, oc.resume = function (a) {
        for (var c = 0; c < Bc.length; c++)
            if (Bc[c].el.id == this.id && (!a || Bc[c].anim == a)) {
                var d = Bc[c];
                b("raphael.anim.resume." + this.id, this, d.anim) !== !1 && (delete d.paused, this.status(d.anim, d.status))
            }
        return this
    }, oc.stop = function (a) {
        for (var c = 0; c < Bc.length; c++) Bc[c].el.id != this.id || a && Bc[c].anim != a || b("raphael.anim.stop." + this.id, this, Bc[c].anim) !== !1 && Bc.splice(c--, 1);
        return this
    }, b.on("raphael.remove", Ic), b.on("raphael.clear", Ic), oc.toString = function () {
        return "Rapha\xebl\u2019s object"
    };
    var Jc = function (a) {
            if (this.items = [], this.length = 0, this.type = "set", a)
                for (var b = 0, c = a.length; c > b; b++) !a[b] || a[b].constructor != oc.constructor && a[b].constructor != Jc || (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
        },
        Kc = Jc.prototype;
    Kc.push = function () {
        for (var a, b, c = 0, d = arguments.length; d > c; c++) a = arguments[c], !a || a.constructor != oc.constructor && a.constructor != Jc || (b = this.items.length, this[b] = this.items[b] = a, this.length++);
        return this
    }, Kc.pop = function () {
        return this.length && delete this[this.length--], this.items.pop()
    }, Kc.forEach = function (a, b) {
        for (var c = 0, d = this.items.length; d > c; c++)
            if (a.call(b, this.items[c], c) === !1) return this;
        return this
    };
    for (var Lc in oc) oc[i](Lc) && (Kc[Lc] = function (a) {
        return function () {
            var b = arguments;
            return this.forEach(function (c) {
                c[a][o](c, b)
            })
        }
    }(Lc));
    return Kc.attr = function (a, b) {
            if (a && c.is(a, G) && c.is(a[0], "object"))
                for (var d = 0, e = a.length; e > d; d++) this.items[d].attr(a[d]);
            else
                for (var f = 0, g = this.items.length; g > f; f++) this.items[f].attr(a, b);
            return this
        }, Kc.clear = function () {
            for (; this.length;) this.pop()
        }, Kc.splice = function (a, b) {
            a = 0 > a ? z(this.length + a, 0) : a, b = z(0, A(this.length - a, b));
            var g, d = [],
                e = [],
                f = [];
            for (g = 2; g < arguments.length; g++) f.push(arguments[g]);
            for (g = 0; b > g; g++) e.push(this[a + g]);
            for (; g < this.length - a; g++) d.push(this[a + g]);
            var h = f.length;
            for (g = 0; g < h + d.length; g++) this.items[a + g] = this[a + g] = h > g ? f[g] : d[g - h];
            for (g = this.items.length = this.length -= b - h; this[g];) delete this[g++];
            return new Jc(e)
        }, Kc.exclude = function (a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (this[b] == a) return this.splice(b, 1), !0
        }, Kc.animate = function (a, b, d, e) {
            (c.is(d, "function") || !d) && (e = d || null);
            var h, j, f = this.items.length,
                g = f,
                i = this;
            if (!f) return this;
            e && (j = function () {
                !--f && e.call(i)
            }), d = c.is(d, F) ? d : j;
            var k = c.animation(a, b, d, j);
            for (h = this.items[--g].animate(k); g--;) this.items[g] && !this.items[g].removed && this.items[g].animateWith(h, k, k), this.items[g] && !this.items[g].removed || f--;
            return this
        }, Kc.insertAfter = function (a) {
            for (var b = this.items.length; b--;) this.items[b].insertAfter(a);
            return this
        }, Kc.getBBox = function () {
            for (var a = [], b = [], c = [], d = [], e = this.items.length; e--;)
                if (!this.items[e].removed) {
                    var f = this.items[e].getBBox();
                    a.push(f.x), b.push(f.y), c.push(f.x + f.width), d.push(f.y + f.height)
                }
            return a = A[o](0, a), b = A[o](0, b), c = z[o](0, c), d = z[o](0, d), {
                x: a,
                y: b,
                x2: c,
                y2: d,
                width: c - a,
                height: d - b
            }
        }, Kc.clone = function (a) {
            a = this.paper.set();
            for (var b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].clone());
            return a
        }, Kc.toString = function () {
            return "Rapha\xebl\u2018s set"
        }, Kc.glow = function (a) {
            var b = this.paper.set();
            return this.forEach(function (c) {
                var e = c.glow(a);
                null != e && e.forEach(function (a) {
                    b.push(a)
                })
            }), b
        }, Kc.isPointInside = function (a, b) {
            var c = !1;
            return this.forEach(function (d) {
                return d.isPointInside(a, b) ? (c = !0, !1) : void 0
            }), c
        }, c.registerFont = function (a) {
            if (!a.face) return a;
            this.fonts = this.fonts || {};
            var b = {
                    w: a.w,
                    face: {},
                    glyphs: {}
                },
                c = a.face["font-family"];
            for (var d in a.face) a.face[i](d) && (b.face[d] = a.face[d]);
            if (this.fonts[c] ? this.fonts[c].push(b) : this.fonts[c] = [b], !a.svg) {
                b.face["units-per-em"] = T(a.face["units-per-em"], 10);
                for (var e in a.glyphs)
                    if (a.glyphs[i](e)) {
                        var f = a.glyphs[e];
                        if (b.glyphs[e] = {
                                w: f.w,
                                k: {},
                                d: f.d && "M" + f.d.replace(/[mlcxtrv]/g, function (a) {
                                    return {
                                        l: "L",
                                        c: "C",
                                        x: "z",
                                        t: "m",
                                        r: "l",
                                        v: "c"
                                    }[a] || "M"
                                }) + "z"
                            }, f.k)
                            for (var g in f.k) f[i](g) && (b.glyphs[e].k[g] = f.k[g])
                    }
            }
            return a
        }, m.getFont = function (a, b, d, e) {
            if (e = e || "normal", d = d || "normal", b = +b || {
                    normal: 400,
                    bold: 700,
                    lighter: 300,
                    bolder: 800
                }[b] || 400, c.fonts) {
                var f = c.fonts[a];
                if (!f) {
                    var g = new RegExp("(^|\\s)" + a.replace(/[^\w\d\s+!~.:_-]/g, r) + "(\\s|$)", "i");
                    for (var h in c.fonts)
                        if (c.fonts[i](h) && g.test(h)) {
                            f = c.fonts[h];
                            break
                        }
                }
                var j;
                if (f)
                    for (var k = 0, l = f.length; l > k && (j = f[k], j.face["font-weight"] != b || j.face["font-style"] != d && j.face["font-style"] || j.face["font-stretch"] != e); k++);
                return j
            }
        }, m.print = function (a, b, d, f, g, h, i, j) {
            h = h || "middle", i = z(A(i || 0, 1), -1), j = z(A(j || 1, 3), 1);
            var o, k = t(d)[u](r),
                l = 0,
                m = 0,
                n = r;
            if (c.is(f, "string") && (f = this.getFont(f)), f) {
                o = (g || 16) / f.face["units-per-em"];
                for (var p = f.face.bbox[u](e), q = +p[0], s = p[3] - p[1], v = 0, w = +p[1] + ("baseline" == h ? s + +f.face.descent : s / 2), x = 0, y = k.length; y > x; x++) {
                    if ("\n" == k[x]) l = 0, C = 0, m = 0, v += s * j;
                    else {
                        var B = m && f.glyphs[k[x - 1]] || {},
                            C = f.glyphs[k[x]];
                        l += m ? (B.w || f.w) + (B.k && B.k[k[x]] || 0) + f.w * i : 0, m = 1
                    }
                    C && C.d && (n += c.transformPath(C.d, ["t", l * o, v * o, "s", o, o, q, w, "t", (a - q) / o, (b - w) / o]))
                }
            }
            return this.path(n).attr({
                fill: "#000",
                stroke: "none"
            })
        }, m.add = function (a) {
            if (c.is(a, "array"))
                for (var g, b = this.set(), d = 0, e = a.length; e > d; d++) g = a[d] || {}, f[i](g.type) && b.push(this[g.type]().attr(g));
            return b
        }, c.format = function (a, b) {
            var d = c.is(b, G) ? [0][p](b) : arguments;
            return a && c.is(a, F) && d.length - 1 && (a = a.replace(g, function (a, b) {
                return null == d[++b] ? r : d[b]
            })), a || r
        }, c.fullfill = function () {
            var a = /\{([^\}]+)\}/g,
                b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                c = function (a, c, d) {
                    var e = d;
                    return c.replace(b, function (a, b, c, d, f) {
                        b = b || d, e && (b in e && (e = e[b]), "function" == typeof e && f && (e = e()))
                    }), e = (null == e || e == d ? a : e) + ""
                };
            return function (b, d) {
                return String(b).replace(a, function (a, b) {
                    return c(a, b, d)
                })
            }
        }(), c.ninja = function () {
            return k.was ? j.win.Raphael = k.is : delete Raphael, c
        }, c.st = Kc,
        function (a, b, d) {
            function e() {
                /in/.test(a.readyState) ? setTimeout(e, 9) : c.eve("raphael.DOMload")
            }
            null == a.readyState && a.addEventListener && (a.addEventListener(b, d = function () {
                a.removeEventListener(b, d, !1), a.readyState = "complete"
            }, !1), a.readyState = "loading"), e()
        }(document, "DOMContentLoaded"), b.on("raphael.DOMload", function () {
            d = !0
        }),
        function () {
            if (c.svg) {
                var a = "hasOwnProperty",
                    b = String,
                    d = parseFloat,
                    e = parseInt,
                    f = Math,
                    g = f.max,
                    h = f.abs,
                    i = f.pow,
                    j = /[, ]+/,
                    k = c.eve,
                    l = "",
                    m = " ",
                    n = "http://www.w3.org/1999/xlink",
                    o = {
                        block: "M5,0 0,2.5 5,5z",
                        classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                        diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                        open: "M6,1 1,3.5 6,6",
                        oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
                    },
                    p = {};
                c.toString = function () {
                    return "Your browser supports SVG.\nYou are running Rapha\xebl " + this.version
                };
                var q = function (d, e) {
                        if (e) {
                            "string" == typeof d && (d = q(d));
                            for (var f in e) e[a](f) && ("xlink:" == f.substring(0, 6) ? d.setAttributeNS(n, f.substring(6), b(e[f])) : d.setAttribute(f, b(e[f])))
                        } else d = c._g.doc.createElementNS("http://www.w3.org/2000/svg", d), d.style && (d.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                        return d
                    },
                    r = function (a, e) {
                        var j = "linear",
                            k = a.id + e,
                            m = .5,
                            n = .5,
                            o = a.node,
                            p = a.paper,
                            r = o.style,
                            s = c._g.doc.getElementById(k);
                        if (!s) {
                            if (e = b(e).replace(c._radial_gradient, function (a, b, c) {
                                    if (j = "radial", b && c) {
                                        m = d(b), n = d(c);
                                        var e = 2 * (n > .5) - 1;
                                        i(m - .5, 2) + i(n - .5, 2) > .25 && (n = f.sqrt(.25 - i(m - .5, 2)) * e + .5) && .5 != n && (n = n.toFixed(5) - 1e-5 * e)
                                    }
                                    return l
                                }), e = e.split(/\s*\-\s*/), "linear" == j) {
                                var t = e.shift();
                                if (t = -d(t), isNaN(t)) return null;
                                var u = [0, 0, f.cos(c.rad(t)), f.sin(c.rad(t))],
                                    v = 1 / (g(h(u[2]), h(u[3])) || 1);
                                u[2] *= v, u[3] *= v, u[2] < 0 && (u[0] = -u[2], u[2] = 0), u[3] < 0 && (u[1] = -u[3], u[3] = 0)
                            }
                            var w = c._parseDots(e);
                            if (!w) return null;
                            if (k = k.replace(/[\(\)\s,\xb0#]/g, "_"), a.gradient && k != a.gradient.id && (p.defs.removeChild(a.gradient), delete a.gradient), !a.gradient) {
                                s = q(j + "Gradient", {
                                    id: k
                                }), a.gradient = s, q(s, "radial" == j ? {
                                    fx: m,
                                    fy: n
                                } : {
                                    x1: u[0],
                                    y1: u[1],
                                    x2: u[2],
                                    y2: u[3],
                                    gradientTransform: a.matrix.invert()
                                }), p.defs.appendChild(s);
                                for (var x = 0, y = w.length; y > x; x++) s.appendChild(q("stop", {
                                    offset: w[x].offset ? w[x].offset : x ? "100%" : "0%",
                                    "stop-color": w[x].color || "#fff"
                                }))
                            }
                        }
                        return q(o, {
                            fill: "url(#" + k + ")",
                            opacity: 1,
                            "fill-opacity": 1
                        }), r.fill = l, r.opacity = 1, r.fillOpacity = 1, 1
                    },
                    s = function (a) {
                        var b = a.getBBox(1);
                        q(a.pattern, {
                            patternTransform: a.matrix.invert() + " translate(" + b.x + "," + b.y + ")"
                        })
                    },
                    t = function (d, e, f) {
                        if ("path" == d.type) {
                            for (var s, t, u, v, w, g = b(e).toLowerCase().split("-"), h = d.paper, i = f ? "end" : "start", j = d.node, k = d.attrs, m = k["stroke-width"], n = g.length, r = "classic", x = 3, y = 3, z = 5; n--;) switch (g[n]) {
                            case "block":
                            case "classic":
                            case "oval":
                            case "diamond":
                            case "open":
                            case "none":
                                r = g[n];
                                break;
                            case "wide":
                                y = 5;
                                break;
                            case "narrow":
                                y = 2;
                                break;
                            case "long":
                                x = 5;
                                break;
                            case "short":
                                x = 2
                            }
                            if ("open" == r ? (x += 2, y += 2, z += 2, u = 1, v = f ? 4 : 1, w = {
                                    fill: "none",
                                    stroke: k.stroke
                                }) : (v = u = x / 2, w = {
                                    fill: k.stroke,
                                    stroke: "none"
                                }), d._.arrows ? f ? (d._.arrows.endPath && p[d._.arrows.endPath] --, d._.arrows.endMarker && p[d._.arrows.endMarker] --) : (d._.arrows.startPath && p[d._.arrows.startPath] --, d._.arrows.startMarker && p[d._.arrows.startMarker] --) : d._.arrows = {}, "none" != r) {
                                var A = "raphael-marker-" + r,
                                    B = "raphael-marker-" + i + r + x + y;
                                c._g.doc.getElementById(A) ? p[A] ++ : (h.defs.appendChild(q(q("path"), {
                                    "stroke-linecap": "round",
                                    d: o[r],
                                    id: A
                                })), p[A] = 1);
                                var D, C = c._g.doc.getElementById(B);
                                C ? (p[B] ++, D = C.getElementsByTagName("use")[0]) : (C = q(q("marker"), {
                                    id: B,
                                    markerHeight: y,
                                    markerWidth: x,
                                    orient: "auto",
                                    refX: v,
                                    refY: y / 2
                                }), D = q(q("use"), {
                                    "xlink:href": "#" + A,
                                    transform: (f ? "rotate(180 " + x / 2 + " " + y / 2 + ") " : l) + "scale(" + x / z + "," + y / z + ")",
                                    "stroke-width": (1 / ((x / z + y / z) / 2)).toFixed(4)
                                }), C.appendChild(D), h.defs.appendChild(C), p[B] = 1), q(D, w);
                                var E = u * ("diamond" != r && "oval" != r);
                                f ? (s = d._.arrows.startdx * m || 0, t = c.getTotalLength(k.path) - E * m) : (s = E * m, t = c.getTotalLength(k.path) - (d._.arrows.enddx * m || 0)), w = {}, w["marker-" + i] = "url(#" + B + ")", (t || s) && (w.d = c.getSubpath(k.path, s, t)), q(j, w), d._.arrows[i + "Path"] = A, d._.arrows[i + "Marker"] = B, d._.arrows[i + "dx"] = E, d._.arrows[i + "Type"] = r, d._.arrows[i + "String"] = e
                            } else f ? (s = d._.arrows.startdx * m || 0, t = c.getTotalLength(k.path) - s) : (s = 0, t = c.getTotalLength(k.path) - (d._.arrows.enddx * m || 0)), d._.arrows[i + "Path"] && q(j, {
                                d: c.getSubpath(k.path, s, t)
                            }), delete d._.arrows[i + "Path"], delete d._.arrows[i + "Marker"], delete d._.arrows[i + "dx"], delete d._.arrows[i + "Type"], delete d._.arrows[i + "String"];
                            for (w in p)
                                if (p[a](w) && !p[w]) {
                                    var F = c._g.doc.getElementById(w);
                                    F && F.parentNode.removeChild(F)
                                }
                        }
                    },
                    u = {
                        "": [0],
                        none: [0],
                        "-": [3, 1],
                        ".": [1, 1],
                        "-.": [3, 1, 1, 1],
                        "-..": [3, 1, 1, 1, 1, 1],
                        ". ": [1, 3],
                        "- ": [4, 3],
                        "--": [8, 3],
                        "- .": [4, 3, 1, 3],
                        "--.": [8, 3, 1, 3],
                        "--..": [8, 3, 1, 3, 1, 3]
                    },
                    v = function (a, c, d) {
                        if (c = u[b(c).toLowerCase()]) {
                            for (var e = a.attrs["stroke-width"] || "1", f = {
                                    round: e,
                                    square: e,
                                    butt: 0
                                }[a.attrs["stroke-linecap"] || d["stroke-linecap"]] || 0, g = [], h = c.length; h--;) g[h] = c[h] * e + (h % 2 ? 1 : -1) * f;
                            q(a.node, {
                                "stroke-dasharray": g.join(",")
                            })
                        }
                    },
                    w = function (d, f) {
                        var i = d.node,
                            k = d.attrs,
                            m = i.style.visibility;
                        i.style.visibility = "hidden";
                        for (var o in f)
                            if (f[a](o)) {
                                if (!c._availableAttrs[a](o)) continue;
                                var p = f[o];
                                switch (k[o] = p, o) {
                                case "blur":
                                    d.blur(p);
                                    break;
                                case "title":
                                    var u = i.getElementsByTagName("title");
                                    if (u.length && (u = u[0])) u.firstChild.nodeValue = p;
                                    else {
                                        u = q("title");
                                        var w = c._g.doc.createTextNode(p);
                                        u.appendChild(w), i.appendChild(u)
                                    }
                                    break;
                                case "href":
                                case "target":
                                    var x = i.parentNode;
                                    if ("a" != x.tagName.toLowerCase()) {
                                        var z = q("a");
                                        x.insertBefore(z, i), z.appendChild(i), x = z
                                    }
                                    "target" == o ? x.setAttributeNS(n, "show", "blank" == p ? "new" : p) : x.setAttributeNS(n, o, p);
                                    break;
                                case "cursor":
                                    i.style.cursor = p;
                                    break;
                                case "transform":
                                    d.transform(p);
                                    break;
                                case "arrow-start":
                                    t(d, p);
                                    break;
                                case "arrow-end":
                                    t(d, p, 1);
                                    break;
                                case "clip-rect":
                                    var A = b(p).split(j);
                                    if (4 == A.length) {
                                        d.clip && d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);
                                        var B = q("clipPath"),
                                            C = q("rect");
                                        B.id = c.createUUID(), q(C, {
                                            x: A[0],
                                            y: A[1],
                                            width: A[2],
                                            height: A[3]
                                        }), B.appendChild(C), d.paper.defs.appendChild(B), q(i, {
                                            "clip-path": "url(#" + B.id + ")"
                                        }), d.clip = C
                                    }
                                    if (!p) {
                                        var D = i.getAttribute("clip-path");
                                        if (D) {
                                            var E = c._g.doc.getElementById(D.replace(/(^url\(#|\)$)/g, l));
                                            E && E.parentNode.removeChild(E), q(i, {
                                                "clip-path": l
                                            }), delete d.clip
                                        }
                                    }
                                    break;
                                case "path":
                                    "path" == d.type && (q(i, {
                                        d: p ? k.path = c._pathToAbsolute(p) : "M0,0"
                                    }), d._.dirty = 1, d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1)));
                                    break;
                                case "width":
                                    if (i.setAttribute(o, p), d._.dirty = 1, !k.fx) break;
                                    o = "x", p = k.x;
                                case "x":
                                    k.fx && (p = -k.x - (k.width || 0));
                                case "rx":
                                    if ("rx" == o && "rect" == d.type) break;
                                case "cx":
                                    i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                                    break;
                                case "height":
                                    if (i.setAttribute(o, p), d._.dirty = 1, !k.fy) break;
                                    o = "y", p = k.y;
                                case "y":
                                    k.fy && (p = -k.y - (k.height || 0));
                                case "ry":
                                    if ("ry" == o && "rect" == d.type) break;
                                case "cy":
                                    i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                                    break;
                                case "r":
                                    "rect" == d.type ? q(i, {
                                        rx: p,
                                        ry: p
                                    }) : i.setAttribute(o, p), d._.dirty = 1;
                                    break;
                                case "src":
                                    "image" == d.type && i.setAttributeNS(n, "href", p);
                                    break;
                                case "stroke-width":
                                    (1 != d._.sx || 1 != d._.sy) && (p /= g(h(d._.sx), h(d._.sy)) || 1), d.paper._vbSize && (p *= d.paper._vbSize), i.setAttribute(o, p), k["stroke-dasharray"] && v(d, k["stroke-dasharray"], f), d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1));
                                    break;
                                case "stroke-dasharray":
                                    v(d, p, f);
                                    break;
                                case "fill":
                                    var F = b(p).match(c._ISURL);
                                    if (F) {
                                        B = q("pattern");
                                        var G = q("image");
                                        B.id = c.createUUID(), q(B, {
                                                x: 0,
                                                y: 0,
                                                patternUnits: "userSpaceOnUse",
                                                height: 1,
                                                width: 1
                                            }), q(G, {
                                                x: 0,
                                                y: 0,
                                                "xlink:href": F[1]
                                            }), B.appendChild(G),
                                            function (a) {
                                                c._preload(F[1], function () {
                                                    var b = this.offsetWidth,
                                                        c = this.offsetHeight;
                                                    q(a, {
                                                        width: b,
                                                        height: c
                                                    }), q(G, {
                                                        width: b,
                                                        height: c
                                                    }), d.paper.safari()
                                                })
                                            }(B), d.paper.defs.appendChild(B), q(i, {
                                                fill: "url(#" + B.id + ")"
                                            }), d.pattern = B, d.pattern && s(d);
                                        break
                                    }
                                    var H = c.getRGB(p);
                                    if (H.error) {
                                        if (("circle" == d.type || "ellipse" == d.type || "r" != b(p).charAt()) && r(d, p)) {
                                            if ("opacity" in k || "fill-opacity" in k) {
                                                var I = c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l));
                                                if (I) {
                                                    var J = I.getElementsByTagName("stop");
                                                    q(J[J.length - 1], {
                                                        "stop-opacity": ("opacity" in k ? k.opacity : 1) * ("fill-opacity" in k ? k["fill-opacity"] : 1)
                                                    })
                                                }
                                            }
                                            k.gradient = p, k.fill = "none";
                                            break
                                        }
                                    } else delete f.gradient, delete k.gradient, !c.is(k.opacity, "undefined") && c.is(f.opacity, "undefined") && q(i, {
                                        opacity: k.opacity
                                    }), !c.is(k["fill-opacity"], "undefined") && c.is(f["fill-opacity"], "undefined") && q(i, {
                                        "fill-opacity": k["fill-opacity"]
                                    });
                                    H[a]("opacity") && q(i, {
                                        "fill-opacity": H.opacity > 1 ? H.opacity / 100 : H.opacity
                                    });
                                case "stroke":
                                    H = c.getRGB(p), i.setAttribute(o, H.hex), "stroke" == o && H[a]("opacity") && q(i, {
                                        "stroke-opacity": H.opacity > 1 ? H.opacity / 100 : H.opacity
                                    }), "stroke" == o && d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1));
                                    break;
                                case "gradient":
                                    ("circle" == d.type || "ellipse" == d.type || "r" != b(p).charAt()) && r(d, p);
                                    break;
                                case "opacity":
                                    k.gradient && !k[a]("stroke-opacity") && q(i, {
                                        "stroke-opacity": p > 1 ? p / 100 : p
                                    });
                                case "fill-opacity":
                                    if (k.gradient) {
                                        I = c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l)), I && (J = I.getElementsByTagName("stop"), q(J[J.length - 1], {
                                            "stop-opacity": p
                                        }));
                                        break
                                    }
                                default:
                                    "font-size" == o && (p = e(p, 10) + "px");
                                    var K = o.replace(/(\-.)/g, function (a) {
                                        return a.substring(1).toUpperCase()
                                    });
                                    i.style[K] = p, d._.dirty = 1, i.setAttribute(o, p)
                                }
                            }
                        y(d, f), i.style.visibility = m
                    },
                    x = 1.2,
                    y = function (d, f) {
                        if ("text" == d.type && (f[a]("text") || f[a]("font") || f[a]("font-size") || f[a]("x") || f[a]("y"))) {
                            var g = d.attrs,
                                h = d.node,
                                i = h.firstChild ? e(c._g.doc.defaultView.getComputedStyle(h.firstChild, l).getPropertyValue("font-size"), 10) : 10;
                            if (f[a]("text")) {
                                for (g.text = f.text; h.firstChild;) h.removeChild(h.firstChild);
                                for (var m, j = b(f.text).split("\n"), k = [], n = 0, o = j.length; o > n; n++) m = q("tspan"), n && q(m, {
                                    dy: i * x,
                                    x: g.x
                                }), m.appendChild(c._g.doc.createTextNode(j[n])), h.appendChild(m), k[n] = m
                            } else
                                for (k = h.getElementsByTagName("tspan"), n = 0, o = k.length; o > n; n++) n ? q(k[n], {
                                    dy: i * x,
                                    x: g.x
                                }) : q(k[0], {
                                    dy: 0
                                });
                            q(h, {
                                x: g.x,
                                y: g.y
                            }), d._.dirty = 1;
                            var p = d._getBBox(),
                                r = g.y - (p.y + p.height / 2);
                            r && c.is(r, "finite") && q(k[0], {
                                dy: r
                            })
                        }
                    },
                    z = function (a, b) {
                        this[0] = this.node = a, a.raphael = !0, this.id = c._oid++, a.raphaelid = this.id, this.matrix = c.matrix(), this.realPath = null, this.paper = b, this.attrs = this.attrs || {}, this._ = {
                            transform: [],
                            sx: 1,
                            sy: 1,
                            deg: 0,
                            dx: 0,
                            dy: 0,
                            dirty: 1
                        }, !b.bottom && (b.bottom = this), this.prev = b.top, b.top && (b.top.next = this), b.top = this, this.next = null
                    },
                    A = c.el;
                z.prototype = A, A.constructor = z, c._engine.path = function (a, b) {
                    var c = q("path");
                    b.canvas && b.canvas.appendChild(c);
                    var d = new z(c, b);
                    return d.type = "path", w(d, {
                        fill: "none",
                        stroke: "#000",
                        path: a
                    }), d
                }, A.rotate = function (a, c, e) {
                    if (this.removed) return this;
                    if (a = b(a).split(j), a.length - 1 && (c = d(a[1]), e = d(a[2])), a = d(a[0]), null == e && (c = e), null == c || null == e) {
                        var f = this.getBBox(1);
                        c = f.x + f.width / 2, e = f.y + f.height / 2
                    }
                    return this.transform(this._.transform.concat([["r", a, c, e]])), this
                }, A.scale = function (a, c, e, f) {
                    if (this.removed) return this;
                    if (a = b(a).split(j), a.length - 1 && (c = d(a[1]), e = d(a[2]), f = d(a[3])), a = d(a[0]), null == c && (c = a), null == f && (e = f), null == e || null == f) var g = this.getBBox(1);
                    return e = null == e ? g.x + g.width / 2 : e, f = null == f ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([["s", a, c, e, f]])), this
                }, A.translate = function (a, c) {
                    return this.removed ? this : (a = b(a).split(j), a.length - 1 && (c = d(a[1])), a = d(a[0]) || 0, c = +c || 0, this.transform(this._.transform.concat([["t", a, c]])), this)
                }, A.transform = function (b) {
                    var d = this._;
                    if (null == b) return d.transform;
                    if (c._extractTransform(this, b), this.clip && q(this.clip, {
                            transform: this.matrix.invert()
                        }), this.pattern && s(this), this.node && q(this.node, {
                            transform: this.matrix
                        }), 1 != d.sx || 1 != d.sy) {
                        var e = this.attrs[a]("stroke-width") ? this.attrs["stroke-width"] : 1;
                        this.attr({
                            "stroke-width": e
                        })
                    }
                    return this
                }, A.hide = function () {
                    return !this.removed && this.paper.safari(this.node.style.display = "none"), this
                }, A.show = function () {
                    return !this.removed && this.paper.safari(this.node.style.display = ""), this
                }, A.remove = function () {
                    if (!this.removed && this.node.parentNode) {
                        var a = this.paper;
                        a.__set__ && a.__set__.exclude(this), k.unbind("raphael.*.*." + this.id), this.gradient && a.defs.removeChild(this.gradient), c._tear(this, a), "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node);
                        for (var b in this) this[b] = "function" == typeof this[b] ? c._removedFactory(b) : null;
                        this.removed = !0
                    }
                }, A._getBBox = function () {
                    if ("none" == this.node.style.display) {
                        this.show();
                        var a = !0
                    }
                    var b = {};
                    try {
                        b = this.node.getBBox()
                    } catch (c) {} finally {
                        b = b || {}
                    }
                    return a && this.hide(), b
                }, A.attr = function (b, d) {
                    if (this.removed) return this;
                    if (null == b) {
                        var e = {};
                        for (var f in this.attrs) this.attrs[a](f) && (e[f] = this.attrs[f]);
                        return e.gradient && "none" == e.fill && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform, e
                    }
                    if (null == d && c.is(b, "string")) {
                        if ("fill" == b && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                        if ("transform" == b) return this._.transform;
                        for (var g = b.split(j), h = {}, i = 0, l = g.length; l > i; i++) b = g[i], h[b] = b in this.attrs ? this.attrs[b] : c.is(this.paper.customAttributes[b], "function") ? this.paper.customAttributes[b].def : c._availableAttrs[b];
                        return l - 1 ? h : h[g[0]]
                    }
                    if (null == d && c.is(b, "array")) {
                        for (h = {}, i = 0, l = b.length; l > i; i++) h[b[i]] = this.attr(b[i]);
                        return h
                    }
                    if (null != d) {
                        var m = {};
                        m[b] = d
                    } else null != b && c.is(b, "object") && (m = b);
                    for (var n in m) k("raphael.attr." + n + "." + this.id, this, m[n]);
                    for (n in this.paper.customAttributes)
                        if (this.paper.customAttributes[a](n) && m[a](n) && c.is(this.paper.customAttributes[n], "function")) {
                            var o = this.paper.customAttributes[n].apply(this, [].concat(m[n]));
                            this.attrs[n] = m[n];
                            for (var p in o) o[a](p) && (m[p] = o[p])
                        }
                    return w(this, m), this
                }, A.toFront = function () {
                    if (this.removed) return this;
                    "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
                    var a = this.paper;
                    return a.top != this && c._tofront(this, a), this
                }, A.toBack = function () {
                    if (this.removed) return this;
                    var a = this.node.parentNode;
                    return "a" == a.tagName.toLowerCase() ? a.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : a.firstChild != this.node && a.insertBefore(this.node, this.node.parentNode.firstChild), c._toback(this, this.paper), this.paper, this
                }, A.insertAfter = function (a) {
                    if (this.removed) return this;
                    var b = a.node || a[a.length - 1].node;
                    return b.nextSibling ? b.parentNode.insertBefore(this.node, b.nextSibling) : b.parentNode.appendChild(this.node), c._insertafter(this, a, this.paper), this
                }, A.insertBefore = function (a) {
                    if (this.removed) return this;
                    var b = a.node || a[0].node;
                    return b.parentNode.insertBefore(this.node, b), c._insertbefore(this, a, this.paper), this
                }, A.blur = function (a) {
                    var b = this;
                    if (0 !== +a) {
                        var d = q("filter"),
                            e = q("feGaussianBlur");
                        b.attrs.blur = a, d.id = c.createUUID(), q(e, {
                            stdDeviation: +a || 1.5
                        }), d.appendChild(e), b.paper.defs.appendChild(d), b._blur = d, q(b.node, {
                            filter: "url(#" + d.id + ")"
                        })
                    } else b._blur && (b._blur.parentNode.removeChild(b._blur), delete b._blur, delete b.attrs.blur), b.node.removeAttribute("filter");
                    return b
                }, c._engine.circle = function (a, b, c, d) {
                    var e = q("circle");
                    a.canvas && a.canvas.appendChild(e);
                    var f = new z(e, a);
                    return f.attrs = {
                        cx: b,
                        cy: c,
                        r: d,
                        fill: "none",
                        stroke: "#000"
                    }, f.type = "circle", q(e, f.attrs), f
                }, c._engine.rect = function (a, b, c, d, e, f) {
                    var g = q("rect");
                    a.canvas && a.canvas.appendChild(g);
                    var h = new z(g, a);
                    return h.attrs = {
                        x: b,
                        y: c,
                        width: d,
                        height: e,
                        r: f || 0,
                        rx: f || 0,
                        ry: f || 0,
                        fill: "none",
                        stroke: "#000"
                    }, h.type = "rect", q(g, h.attrs), h
                }, c._engine.ellipse = function (a, b, c, d, e) {
                    var f = q("ellipse");
                    a.canvas && a.canvas.appendChild(f);
                    var g = new z(f, a);
                    return g.attrs = {
                        cx: b,
                        cy: c,
                        rx: d,
                        ry: e,
                        fill: "none",
                        stroke: "#000"
                    }, g.type = "ellipse", q(f, g.attrs), g
                }, c._engine.image = function (a, b, c, d, e, f) {
                    var g = q("image");
                    q(g, {
                        x: c,
                        y: d,
                        width: e,
                        height: f,
                        preserveAspectRatio: "none"
                    }), g.setAttributeNS(n, "href", b), a.canvas && a.canvas.appendChild(g);
                    var h = new z(g, a);
                    return h.attrs = {
                        x: c,
                        y: d,
                        width: e,
                        height: f,
                        src: b
                    }, h.type = "image", h
                }, c._engine.text = function (a, b, d, e) {
                    var f = q("text");
                    a.canvas && a.canvas.appendChild(f);
                    var g = new z(f, a);
                    return g.attrs = {
                        x: b,
                        y: d,
                        "text-anchor": "middle",
                        text: e,
                        font: c._availableAttrs.font,
                        stroke: "none",
                        fill: "#000"
                    }, g.type = "text", w(g, g.attrs), g
                }, c._engine.setSize = function (a, b) {
                    return this.width = a || this.width, this.height = b || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this
                }, c._engine.create = function () {
                    var a = c._getContainer.apply(0, arguments),
                        b = a && a.container,
                        d = a.x,
                        e = a.y,
                        f = a.width,
                        g = a.height;
                    if (!b) throw new Error("SVG container not found.");
                    var j, h = q("svg"),
                        i = "overflow:hidden;";
                    return d = d || 0, e = e || 0, f = f || 512, g = g || 342, q(h, {
                        height: g,
                        version: 1.1,
                        width: f,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), 1 == b ? (h.style.cssText = i + "position:absolute;left:" + d + "px;top:" + e + "px", c._g.doc.body.appendChild(h), j = 1) : (h.style.cssText = i + "position:relative", b.firstChild ? b.insertBefore(h, b.firstChild) : b.appendChild(h)), b = new c._Paper, b.width = f, b.height = g, b.canvas = h, b.clear(), b._left = b._top = 0, j && (b.renderfix = function () {}), b.renderfix(), b
                }, c._engine.setViewBox = function (a, b, c, d, e) {
                    k("raphael.setViewBox", this, this._viewBox, [a, b, c, d, e]);
                    var j, l, f = g(c / this.width, d / this.height),
                        h = this.top,
                        i = e ? "xMidYMid meet" : "xMinYMin";
                    for (null == a ? (this._vbSize && (f = 1), delete this._vbSize, j = "0 0 " + this.width + m + this.height) : (this._vbSize = f, j = a + m + b + m + c + m + d), q(this.canvas, {
                            viewBox: j,
                            preserveAspectRatio: i
                        }); f && h;) l = "stroke-width" in h.attrs ? h.attrs["stroke-width"] : 1, h.attr({
                        "stroke-width": l
                    }), h._.dirty = 1, h._.dirtyT = 1, h = h.prev;
                    return this._viewBox = [a, b, c, d, !!e], this
                }, c.prototype.renderfix = function () {
                    var c, a = this.canvas,
                        b = a.style;
                    try {
                        c = a.getScreenCTM() || a.createSVGMatrix()
                    } catch (d) {
                        c = a.createSVGMatrix()
                    }
                    var e = -c.e % 1,
                        f = -c.f % 1;
                    (e || f) && (e && (this._left = (this._left + e) % 1, b.left = this._left + "px"), f && (this._top = (this._top + f) % 1, b.top = this._top + "px"))
                }, c.prototype.clear = function () {
                    c.eve("raphael.clear", this);
                    for (var a = this.canvas; a.firstChild;) a.removeChild(a.firstChild);
                    this.bottom = this.top = null, (this.desc = q("desc")).appendChild(c._g.doc.createTextNode("Created with Rapha\xebl " + c.version)), a.appendChild(this.desc), a.appendChild(this.defs = q("defs"))
                }, c.prototype.remove = function () {
                    k("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
                    for (var a in this) this[a] = "function" == typeof this[a] ? c._removedFactory(a) : null
                };
                var B = c.st;
                for (var C in A) A[a](C) && !B[a](C) && (B[C] = function (a) {
                    return function () {
                        var b = arguments;
                        return this.forEach(function (c) {
                            c[a].apply(c, b)
                        })
                    }
                }(C))
            }
        }(),
        function () {
            if (c.vml) {
                var a = "hasOwnProperty",
                    b = String,
                    d = parseFloat,
                    e = Math,
                    f = e.round,
                    g = e.max,
                    h = e.min,
                    i = e.abs,
                    j = "fill",
                    k = /[, ]+/,
                    l = c.eve,
                    m = " progid:DXImageTransform.Microsoft",
                    n = " ",
                    o = "",
                    p = {
                        M: "m",
                        L: "l",
                        C: "c",
                        Z: "x",
                        m: "t",
                        l: "r",
                        c: "v",
                        z: "x"
                    },
                    q = /([clmz]),?([^clmz]*)/gi,
                    r = / progid:\S+Blur\([^\)]+\)/g,
                    s = /-?[^,\s-]+/g,
                    t = "position:absolute;left:0;top:0;width:1px;height:1px",
                    u = 21600,
                    v = {
                        path: 1,
                        rect: 1,
                        image: 1
                    },
                    w = {
                        circle: 1,
                        ellipse: 1
                    },
                    x = function (a) {
                        var d = /[ahqstv]/gi,
                            e = c._pathToAbsolute;
                        if (b(a).match(d) && (e = c._path2curve), d = /[clmz]/g, e == c._pathToAbsolute && !b(a).match(d)) {
                            var g = b(a).replace(q, function (a, b, c) {
                                var d = [],
                                    e = "m" == b.toLowerCase(),
                                    g = p[b];
                                return c.replace(s, function (a) {
                                    e && 2 == d.length && (g += d + p["m" == b ? "l" : "L"], d = []), d.push(f(a * u))
                                }), g + d
                            });
                            return g
                        }
                        var i, j, h = e(a);
                        g = [];
                        for (var k = 0, l = h.length; l > k; k++) {
                            i = h[k], j = h[k][0].toLowerCase(), "z" == j && (j = "x");
                            for (var m = 1, r = i.length; r > m; m++) j += f(i[m] * u) + (m != r - 1 ? "," : o);
                            g.push(j)
                        }
                        return g.join(n)
                    },
                    y = function (a, b, d) {
                        var e = c.matrix();
                        return e.rotate(-a, .5, .5), {
                            dx: e.x(b, d),
                            dy: e.y(b, d)
                        }
                    },
                    z = function (a, b, c, d, e, f) {
                        var g = a._,
                            h = a.matrix,
                            k = g.fillpos,
                            l = a.node,
                            m = l.style,
                            o = 1,
                            p = "",
                            r = u / b,
                            s = u / c;
                        if (m.visibility = "hidden", b && c) {
                            if (l.coordsize = i(r) + n + i(s), m.rotation = f * (0 > b * c ? -1 : 1), f) {
                                var t = y(f, d, e);
                                d = t.dx, e = t.dy
                            }
                            if (0 > b && (p += "x"), 0 > c && (p += " y") && (o = -1), m.flip = p, l.coordorigin = d * -r + n + e * -s, k || g.fillsize) {
                                var v = l.getElementsByTagName(j);
                                v = v && v[0], l.removeChild(v), k && (t = y(f, h.x(k[0], k[1]), h.y(k[0], k[1])), v.position = t.dx * o + n + t.dy * o), g.fillsize && (v.size = g.fillsize[0] * i(b) + n + g.fillsize[1] * i(c)), l.appendChild(v)
                            }
                            m.visibility = "visible"
                        }
                    };
                c.toString = function () {
                    return "Your browser doesn\u2019t support SVG. Falling down to VML.\nYou are running Rapha\xebl " + this.version
                };
                var A = function (a, c, d) {
                        for (var e = b(c).toLowerCase().split("-"), f = d ? "end" : "start", g = e.length, h = "classic", i = "medium", j = "medium"; g--;) switch (e[g]) {
                        case "block":
                        case "classic":
                        case "oval":
                        case "diamond":
                        case "open":
                        case "none":
                            h = e[g];
                            break;
                        case "wide":
                        case "narrow":
                            j = e[g];
                            break;
                        case "long":
                        case "short":
                            i = e[g]
                        }
                        var k = a.node.getElementsByTagName("stroke")[0];
                        k[f + "arrow"] = h, k[f + "arrowlength"] = i, k[f + "arrowwidth"] = j
                    },
                    B = function (e, i) {
                        e.attrs = e.attrs || {};
                        var l = e.node,
                            m = e.attrs,
                            p = l.style,
                            r = v[e.type] && (i.x != m.x || i.y != m.y || i.width != m.width || i.height != m.height || i.cx != m.cx || i.cy != m.cy || i.rx != m.rx || i.ry != m.ry || i.r != m.r),
                            s = w[e.type] && (m.cx != i.cx || m.cy != i.cy || m.r != i.r || m.rx != i.rx || m.ry != i.ry),
                            t = e;
                        for (var y in i) i[a](y) && (m[y] = i[y]);
                        if (r && (m.path = c._getPath[e.type](e), e._.dirty = 1), i.href && (l.href = i.href), i.title && (l.title = i.title), i.target && (l.target = i.target), i.cursor && (p.cursor = i.cursor), "blur" in i && e.blur(i.blur), (i.path && "path" == e.type || r) && (l.path = x(~b(m.path).toLowerCase().indexOf("r") ? c._pathToAbsolute(m.path) : m.path), "image" == e.type && (e._.fillpos = [m.x, m.y], e._.fillsize = [m.width, m.height], z(e, 1, 1, 0, 0, 0))), "transform" in i && e.transform(i.transform), s) {
                            var B = +m.cx,
                                D = +m.cy,
                                E = +m.rx || +m.r || 0,
                                G = +m.ry || +m.r || 0;
                            l.path = c.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", f((B - E) * u), f((D - G) * u), f((B + E) * u), f((D + G) * u), f(B * u)), e._.dirty = 1
                        }
                        if ("clip-rect" in i) {
                            var H = b(i["clip-rect"]).split(k);
                            if (4 == H.length) {
                                H[2] = +H[2] + +H[0], H[3] = +H[3] + +H[1];
                                var I = l.clipRect || c._g.doc.createElement("div"),
                                    J = I.style;
                                J.clip = c.format("rect({1}px {2}px {3}px {0}px)", H), l.clipRect || (J.position = "absolute", J.top = 0, J.left = 0, J.width = e.paper.width + "px", J.height = e.paper.height + "px", l.parentNode.insertBefore(I, l), I.appendChild(l), l.clipRect = I)
                            }
                            i["clip-rect"] || l.clipRect && (l.clipRect.style.clip = "auto")
                        }
                        if (e.textpath) {
                            var K = e.textpath.style;
                            i.font && (K.font = i.font), i["font-family"] && (K.fontFamily = '"' + i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, o) + '"'), i["font-size"] && (K.fontSize = i["font-size"]), i["font-weight"] && (K.fontWeight = i["font-weight"]), i["font-style"] && (K.fontStyle = i["font-style"])
                        }
                        if ("arrow-start" in i && A(t, i["arrow-start"]), "arrow-end" in i && A(t, i["arrow-end"], 1), null != i.opacity || null != i["stroke-width"] || null != i.fill || null != i.src || null != i.stroke || null != i["stroke-width"] || null != i["stroke-opacity"] || null != i["fill-opacity"] || null != i["stroke-dasharray"] || null != i["stroke-miterlimit"] || null != i["stroke-linejoin"] || null != i["stroke-linecap"]) {
                            var L = l.getElementsByTagName(j),
                                M = !1;
                            if (L = L && L[0], !L && (M = L = F(j)), "image" == e.type && i.src && (L.src = i.src), i.fill && (L.on = !0), (null == L.on || "none" == i.fill || null === i.fill) && (L.on = !1), L.on && i.fill) {
                                var N = b(i.fill).match(c._ISURL);
                                if (N) {
                                    L.parentNode == l && l.removeChild(L), L.rotate = !0, L.src = N[1], L.type = "tile";
                                    var O = e.getBBox(1);
                                    L.position = O.x + n + O.y, e._.fillpos = [O.x, O.y], c._preload(N[1], function () {
                                        e._.fillsize = [this.offsetWidth, this.offsetHeight]
                                    })
                                } else L.color = c.getRGB(i.fill).hex, L.src = o, L.type = "solid", c.getRGB(i.fill).error && (t.type in {
                                    circle: 1,
                                    ellipse: 1
                                } || "r" != b(i.fill).charAt()) && C(t, i.fill, L) && (m.fill = "none", m.gradient = i.fill, L.rotate = !1)
                            }
                            if ("fill-opacity" in i || "opacity" in i) {
                                var P = ((+m["fill-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+c.getRGB(i.fill).o + 1 || 2) - 1);
                                P = h(g(P, 0), 1), L.opacity = P, L.src && (L.color = "none")
                            }
                            l.appendChild(L);
                            var Q = l.getElementsByTagName("stroke") && l.getElementsByTagName("stroke")[0],
                                R = !1;
                            !Q && (R = Q = F("stroke")), (i.stroke && "none" != i.stroke || i["stroke-width"] || null != i["stroke-opacity"] || i["stroke-dasharray"] || i["stroke-miterlimit"] || i["stroke-linejoin"] || i["stroke-linecap"]) && (Q.on = !0), ("none" == i.stroke || null === i.stroke || null == Q.on || 0 == i.stroke || 0 == i["stroke-width"]) && (Q.on = !1);
                            var S = c.getRGB(i.stroke);
                            Q.on && i.stroke && (Q.color = S.hex), P = ((+m["stroke-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+S.o + 1 || 2) - 1);
                            var T = .75 * (d(i["stroke-width"]) || 1);
                            if (P = h(g(P, 0), 1), null == i["stroke-width"] && (T = m["stroke-width"]), i["stroke-width"] && (Q.weight = T), T && 1 > T && (P *= T) && (Q.weight = 1), Q.opacity = P, i["stroke-linejoin"] && (Q.joinstyle = i["stroke-linejoin"] || "miter"), Q.miterlimit = i["stroke-miterlimit"] || 8, i["stroke-linecap"] && (Q.endcap = "butt" == i["stroke-linecap"] ? "flat" : "square" == i["stroke-linecap"] ? "square" : "round"), "stroke-dasharray" in i) {
                                var U = {
                                    "-": "shortdash",
                                    ".": "shortdot",
                                    "-.": "shortdashdot",
                                    "-..": "shortdashdotdot",
                                    ". ": "dot",
                                    "- ": "dash",
                                    "--": "longdash",
                                    "- .": "dashdot",
                                    "--.": "longdashdot",
                                    "--..": "longdashdotdot"
                                };
                                Q.dashstyle = U[a](i["stroke-dasharray"]) ? U[i["stroke-dasharray"]] : o
                            }
                            R && l.appendChild(Q)
                        }
                        if ("text" == t.type) {
                            t.paper.canvas.style.display = o;
                            var V = t.paper.span,
                                W = 100,
                                X = m.font && m.font.match(/\d+(?:\.\d*)?(?=px)/);
                            p = V.style, m.font && (p.font = m.font), m["font-family"] && (p.fontFamily = m["font-family"]), m["font-weight"] && (p.fontWeight = m["font-weight"]), m["font-style"] && (p.fontStyle = m["font-style"]), X = d(m["font-size"] || X && X[0]) || 10, p.fontSize = X * W + "px", t.textpath.string && (V.innerHTML = b(t.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                            var Y = V.getBoundingClientRect();
                            t.W = m.w = (Y.right - Y.left) / W, t.H = m.h = (Y.bottom - Y.top) / W, t.X = m.x, t.Y = m.y + t.H / 2, ("x" in i || "y" in i) && (t.path.v = c.format("m{0},{1}l{2},{1}", f(m.x * u), f(m.y * u), f(m.x * u) + 1));
                            for (var Z = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], $ = 0, _ = Z.length; _ > $; $++)
                                if (Z[$] in i) {
                                    t._.dirty = 1;
                                    break
                                }
                            switch (m["text-anchor"]) {
                            case "start":
                                t.textpath.style["v-text-align"] = "left", t.bbx = t.W / 2;
                                break;
                            case "end":
                                t.textpath.style["v-text-align"] = "right", t.bbx = -t.W / 2;
                                break;
                            default:
                                t.textpath.style["v-text-align"] = "center", t.bbx = 0
                            }
                            t.textpath.style["v-text-kern"] = !0
                        }
                    },
                    C = function (a, f, g) {
                        a.attrs = a.attrs || {};
                        var i = (a.attrs, Math.pow),
                            l = "linear",
                            m = ".5 .5";
                        if (a.attrs.gradient = f, f = b(f).replace(c._radial_gradient, function (a, b, c) {
                                return l = "radial", b && c && (b = d(b), c = d(c), i(b - .5, 2) + i(c - .5, 2) > .25 && (c = e.sqrt(.25 - i(b - .5, 2)) * (2 * (c > .5) - 1) + .5), m = b + n + c), o
                            }), f = f.split(/\s*\-\s*/), "linear" == l) {
                            var p = f.shift();
                            if (p = -d(p), isNaN(p)) return null
                        }
                        var q = c._parseDots(f);
                        if (!q) return null;
                        if (a = a.shape || a.node, q.length) {
                            a.removeChild(g), g.on = !0, g.method = "none", g.color = q[0].color, g.color2 = q[q.length - 1].color;
                            for (var r = [], s = 0, t = q.length; t > s; s++) q[s].offset && r.push(q[s].offset + n + q[s].color);
                            g.colors = r.length ? r.join() : "0% " + g.color, "radial" == l ? (g.type = "gradientTitle", g.focus = "100%", g.focussize = "0 0", g.focusposition = m, g.angle = 0) : (g.type = "gradient", g.angle = (270 - p) % 360), a.appendChild(g)
                        }
                        return 1
                    },
                    D = function (a, b) {
                        this[0] = this.node = a, a.raphael = !0, this.id = c._oid++, a.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = b, this.matrix = c.matrix(), this._ = {
                            transform: [],
                            sx: 1,
                            sy: 1,
                            dx: 0,
                            dy: 0,
                            deg: 0,
                            dirty: 1,
                            dirtyT: 1
                        }, !b.bottom && (b.bottom = this), this.prev = b.top, b.top && (b.top.next = this), b.top = this, this.next = null
                    },
                    E = c.el;
                D.prototype = E, E.constructor = D, E.transform = function (a) {
                    if (null == a) return this._.transform;
                    var f, d = this.paper._viewBoxShift,
                        e = d ? "s" + [d.scale, d.scale] + "-1-1t" + [d.dx, d.dy] : o;
                    d && (f = a = b(a).replace(/\.{3}|\u2026/g, this._.transform || o)), c._extractTransform(this, e + a);
                    var j, g = this.matrix.clone(),
                        h = this.skew,
                        i = this.node,
                        k = ~b(this.attrs.fill).indexOf("-"),
                        l = !b(this.attrs.fill).indexOf("url(");
                    if (g.translate(1, 1), l || k || "image" == this.type)
                        if (h.matrix = "1 0 0 1", h.offset = "0 0", j = g.split(), k && j.noRotation || !j.isSimple) {
                            i.style.filter = g.toFilter();
                            var m = this.getBBox(),
                                p = this.getBBox(1),
                                q = m.x - p.x,
                                r = m.y - p.y;
                            i.coordorigin = q * -u + n + r * -u, z(this, 1, 1, q, r, 0)
                        } else i.style.filter = o, z(this, j.scalex, j.scaley, j.dx, j.dy, j.rotate);
                    else i.style.filter = o, h.matrix = b(g), h.offset = g.offset();
                    return f && (this._.transform = f), this
                }, E.rotate = function (a, c, e) {
                    if (this.removed) return this;
                    if (null != a) {
                        if (a = b(a).split(k), a.length - 1 && (c = d(a[1]), e = d(a[2])), a = d(a[0]), null == e && (c = e), null == c || null == e) {
                            var f = this.getBBox(1);
                            c = f.x + f.width / 2, e = f.y + f.height / 2
                        }
                        return this._.dirtyT = 1, this.transform(this._.transform.concat([["r", a, c, e]])), this
                    }
                }, E.translate = function (a, c) {
                    return this.removed ? this : (a = b(a).split(k), a.length - 1 && (c = d(a[1])), a = d(a[0]) || 0, c = +c || 0, this._.bbox && (this._.bbox.x += a, this._.bbox.y += c), this.transform(this._.transform.concat([["t", a, c]])), this)
                }, E.scale = function (a, c, e, f) {
                    if (this.removed) return this;
                    if (a = b(a).split(k), a.length - 1 && (c = d(a[1]), e = d(a[2]), f = d(a[3]), isNaN(e) && (e = null), isNaN(f) && (f = null)), a = d(a[0]), null == c && (c = a), null == f && (e = f), null == e || null == f) var g = this.getBBox(1);
                    return e = null == e ? g.x + g.width / 2 : e, f = null == f ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([["s", a, c, e, f]])), this._.dirtyT = 1, this
                }, E.hide = function () {
                    return !this.removed && (this.node.style.display = "none"), this
                }, E.show = function () {
                    return !this.removed && (this.node.style.display = o), this
                }, E._getBBox = function () {
                    return this.removed ? {} : {
                        x: this.X + (this.bbx || 0) - this.W / 2,
                        y: this.Y - this.H,
                        width: this.W,
                        height: this.H
                    }
                }, E.remove = function () {
                    if (!this.removed && this.node.parentNode) {
                        this.paper.__set__ && this.paper.__set__.exclude(this), c.eve.unbind("raphael.*.*." + this.id), c._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
                        for (var a in this) this[a] = "function" == typeof this[a] ? c._removedFactory(a) : null;
                        this.removed = !0
                    }
                }, E.attr = function (b, d) {
                    if (this.removed) return this;
                    if (null == b) {
                        var e = {};
                        for (var f in this.attrs) this.attrs[a](f) && (e[f] = this.attrs[f]);
                        return e.gradient && "none" == e.fill && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform, e
                    }
                    if (null == d && c.is(b, "string")) {
                        if (b == j && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                        for (var g = b.split(k), h = {}, i = 0, m = g.length; m > i; i++) b = g[i], h[b] = b in this.attrs ? this.attrs[b] : c.is(this.paper.customAttributes[b], "function") ? this.paper.customAttributes[b].def : c._availableAttrs[b];
                        return m - 1 ? h : h[g[0]]
                    }
                    if (this.attrs && null == d && c.is(b, "array")) {
                        for (h = {}, i = 0, m = b.length; m > i; i++) h[b[i]] = this.attr(b[i]);
                        return h
                    }
                    var n;
                    null != d && (n = {}, n[b] = d), null == d && c.is(b, "object") && (n = b);
                    for (var o in n) l("raphael.attr." + o + "." + this.id, this, n[o]);
                    if (n) {
                        for (o in this.paper.customAttributes)
                            if (this.paper.customAttributes[a](o) && n[a](o) && c.is(this.paper.customAttributes[o], "function")) {
                                var p = this.paper.customAttributes[o].apply(this, [].concat(n[o]));
                                this.attrs[o] = n[o];
                                for (var q in p) p[a](q) && (n[q] = p[q])
                            }
                        n.text && "text" == this.type && (this.textpath.string = n.text), B(this, n)
                    }
                    return this
                }, E.toFront = function () {
                    return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && c._tofront(this, this.paper), this
                }, E.toBack = function () {
                    return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), c._toback(this, this.paper)), this)
                }, E.insertAfter = function (a) {
                    return this.removed ? this : (a.constructor == c.st.constructor && (a = a[a.length - 1]), a.node.nextSibling ? a.node.parentNode.insertBefore(this.node, a.node.nextSibling) : a.node.parentNode.appendChild(this.node), c._insertafter(this, a, this.paper), this)
                }, E.insertBefore = function (a) {
                    return this.removed ? this : (a.constructor == c.st.constructor && (a = a[0]), a.node.parentNode.insertBefore(this.node, a.node), c._insertbefore(this, a, this.paper), this)
                }, E.blur = function (a) {
                    var b = this.node.runtimeStyle,
                        d = b.filter;
                    return d = d.replace(r, o), 0 !== +a ? (this.attrs.blur = a, b.filter = d + n + m + ".Blur(pixelradius=" + (+a || 1.5) + ")", b.margin = c.format("-{0}px 0 0 -{0}px", f(+a || 1.5))) : (b.filter = d, b.margin = 0, delete this.attrs.blur), this
                }, c._engine.path = function (a, b) {
                    var c = F("shape");
                    c.style.cssText = t, c.coordsize = u + n + u, c.coordorigin = b.coordorigin;
                    var d = new D(c, b),
                        e = {
                            fill: "none",
                            stroke: "#000"
                        };
                    a && (e.path = a), d.type = "path", d.path = [], d.Path = o, B(d, e), b.canvas.appendChild(c);
                    var f = F("skew");
                    return f.on = !0, c.appendChild(f), d.skew = f, d.transform(o), d
                }, c._engine.rect = function (a, b, d, e, f, g) {
                    var h = c._rectPath(b, d, e, f, g),
                        i = a.path(h),
                        j = i.attrs;
                    return i.X = j.x = b, i.Y = j.y = d, i.W = j.width = e, i.H = j.height = f, j.r = g, j.path = h, i.type = "rect", i
                }, c._engine.ellipse = function (a, b, c, d, e) {
                    var f = a.path();
                    return f.attrs, f.X = b - d, f.Y = c - e, f.W = 2 * d, f.H = 2 * e, f.type = "ellipse", B(f, {
                        cx: b,
                        cy: c,
                        rx: d,
                        ry: e
                    }), f
                }, c._engine.circle = function (a, b, c, d) {
                    var e = a.path();
                    return e.attrs, e.X = b - d, e.Y = c - d, e.W = e.H = 2 * d, e.type = "circle", B(e, {
                        cx: b,
                        cy: c,
                        r: d
                    }), e
                }, c._engine.image = function (a, b, d, e, f, g) {
                    var h = c._rectPath(d, e, f, g),
                        i = a.path(h).attr({
                            stroke: "none"
                        }),
                        k = i.attrs,
                        l = i.node,
                        m = l.getElementsByTagName(j)[0];
                    return k.src = b, i.X = k.x = d, i.Y = k.y = e, i.W = k.width = f, i.H = k.height = g, k.path = h, i.type = "image", m.parentNode == l && l.removeChild(m), m.rotate = !0, m.src = b, m.type = "tile", i._.fillpos = [d, e], i._.fillsize = [f, g], l.appendChild(m), z(i, 1, 1, 0, 0, 0), i
                }, c._engine.text = function (a, d, e, g) {
                    var h = F("shape"),
                        i = F("path"),
                        j = F("textpath");
                    d = d || 0, e = e || 0, g = g || "", i.v = c.format("m{0},{1}l{2},{1}", f(d * u), f(e * u), f(d * u) + 1), i.textpathok = !0, j.string = b(g), j.on = !0, h.style.cssText = t, h.coordsize = u + n + u, h.coordorigin = "0 0";
                    var k = new D(h, a),
                        l = {
                            fill: "#000",
                            stroke: "none",
                            font: c._availableAttrs.font,
                            text: g
                        };
                    k.shape = h, k.path = i, k.textpath = j, k.type = "text", k.attrs.text = b(g), k.attrs.x = d, k.attrs.y = e, k.attrs.w = 1, k.attrs.h = 1, B(k, l), h.appendChild(j), h.appendChild(i), a.canvas.appendChild(h);
                    var m = F("skew");
                    return m.on = !0, h.appendChild(m), k.skew = m, k.transform(o), k
                }, c._engine.setSize = function (a, b) {
                    var d = this.canvas.style;
                    return this.width = a, this.height = b, a == +a && (a += "px"), b == +b && (b += "px"), d.width = a, d.height = b, d.clip = "rect(0 " + a + " " + b + " 0)", this._viewBox && c._engine.setViewBox.apply(this, this._viewBox), this
                }, c._engine.setViewBox = function (a, b, d, e, f) {
                    c.eve("raphael.setViewBox", this, this._viewBox, [a, b, d, e, f]);
                    var k, l, h = this.width,
                        i = this.height,
                        j = 1 / g(d / h, e / i);
                    return f && (k = i / e, l = h / d, h > d * k && (a -= (h - d * k) / 2 / k), i > e * l && (b -= (i - e * l) / 2 / l)), this._viewBox = [a, b, d, e, !!f], this._viewBoxShift = {
                        dx: -a,
                        dy: -b,
                        scale: j
                    }, this.forEach(function (a) {
                        a.transform("...")
                    }), this
                };
                var F;
                c._engine.initWin = function (a) {
                    var b = a.document;
                    b.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
                    try {
                        !b.namespaces.rvml && b.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), F = function (a) {
                            return b.createElement("<rvml:" + a + ' class="rvml">')
                        }
                    } catch (c) {
                        F = function (a) {
                            return b.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
                        }
                    }
                }, c._engine.initWin(c._g.win), c._engine.create = function () {
                    var a = c._getContainer.apply(0, arguments),
                        b = a.container,
                        d = a.height,
                        f = a.width,
                        g = a.x,
                        h = a.y;
                    
                    if (!b) throw new Error("VML container not found.");
                    var i = new c._Paper,
                        j = i.canvas = c._g.doc.createElement("div"),
                        k = j.style;
                    return g = g || 0, h = h || 0, f = f || 512, d = d || 342, i.width = f, i.height = d, f == +f && (f += "px"), d == +d && (d += "px"), i.coordsize = 1e3 * u + n + 1e3 * u, i.coordorigin = "0 0", i.span = c._g.doc.createElement("span"), i.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", j.appendChild(i.span), k.cssText = c.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", f, d), 1 == b ? (c._g.doc.body.appendChild(j), k.left = g + "px", k.top = h + "px", k.position = "absolute") : b.firstChild ? b.insertBefore(j, b.firstChild) : b.appendChild(j), i.renderfix = function () {}, i
                }, c.prototype.clear = function () {
                    c.eve("raphael.clear", this), this.canvas.innerHTML = o, this.span = c._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
                }, c.prototype.remove = function () {
                    c.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
                    for (var a in this) this[a] = "function" == typeof this[a] ? c._removedFactory(a) : null;
                    return !0
                };
                var G = c.st;
                for (var H in E) E[a](H) && !G[a](H) && (G[H] = function (a) {
                    return function () {
                        var b = arguments;
                        return this.forEach(function (c) {
                            c[a].apply(c, b)
                        })
                    }
                }(H))
            }
        }(), k.was ? j.win.Raphael = c : Raphael = c, c
});
/* @update: 2015-3-19 15:34:34 */
function createCircles(t, e, a, i, n, r) {
    function s(t, e, a, i) {
        i.animate({
            arc: [t, e, a]
        }, 750, ">")
    }
    var c = Raphael(t, i, n),
        l = r,
        o = {
            stroke: "#ecf5fd",
            "stroke-width": 3
        };
    c.customAttributes.arc = function (t, e, a, r) {
        var s, c = 360 / e * t,
            o = (90 - c) * Math.PI / 180,
            f = i / 2 + a * Math.cos(o),
            h = n / 2 - a * Math.sin(o),
            r = l;
        return s = e == t ? [["M", i / 2, i / 2 - a], ["A", a, a, 0, 1, 1, i / 2 - .01, i / 2 - a]] : [["M", n / 2, n / 2 - a], ["A", a, a, 0, +(c > 180), 1, f, h]], {
            path: s,
            stroke: r
        }
    };
    var f = (c.circle(i / 2, n / 2, a).attr(o), c.path().attr(o).attr({
        arc: [0, i, a, r]
    }));
    s(e, 100, 27, f, 2)
}

function countFun(t, e) {
    if (0 == e) t.html("0<i style='font-size:12px'>%</i>");
    else if (e > 0 && 100 >= e) var a = 0,
        i = setInterval(function () {
            a++, t.html(e + "<i style='font-size:12px'>%</i>"), a == e && clearInterval(i)
        }, 10);
    else if (e > 100) var a = 100,
        n = Math.round(e / 100),
        r = 0,
        i = setInterval(function () {
            r++, a += 100, t.css({
                fontSize: "px",
            }), t.html( "100<i style='font-size:12px'>%</i>"), r == n && (t.html("100<i style='font-size:12px'>%</i>"), clearInterval(i))
        }, 10)
}