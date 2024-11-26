/* findElements */
return (function() {
    return (function() {
        var aa = this || self;

        function ba(a) {
            return "string" == typeof a
        }

        function ca(a, b) {
            a = a.split(".");
            var c = aa;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        }

        function da(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        }

        function ea(a) {
            return "function" == da(a)
        }

        function ha(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        }

        function ia(a, b, c) {
            return a.call.apply(a.bind, arguments)
        }

        function ja(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        }

        function ka(a, b, c) {
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ka = ia : ka = ja;
            return ka.apply(null, arguments)
        }

        function la(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var d = c.slice();
                d.push.apply(d, arguments);
                return a.apply(this, d)
            }
        }

        function k(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a
        };
        /*

         The MIT License

         Copyright (c) 2007 Cybozu Labs, Inc.
         Copyright (c) 2012 Google Inc.

         Permission is hereby granted, free of charge, to any person obtaining a copy
         of this software and associated documentation files (the "Software"), to
         deal in the Software without restriction, including without limitation the
         rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
         sell copies of the Software, and to permit persons to whom the Software is
         furnished to do so, subject to the following conditions:

         The above copyright notice and this permission notice shall be included in
         all copies or substantial portions of the Software.

         THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
         FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
         IN THE SOFTWARE.
        */
        function ma(a, b, c) {
            this.a = a;
            this.b = b || 1;
            this.f = c || 1
        };
        var na;
        var oa = Array.prototype.indexOf ? function(a, b) {
                return Array.prototype.indexOf.call(a, b, void 0)
            } : function(a, b) {
                if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
                for (var c = 0; c < a.length; c++)
                    if (c in a && a[c] === b) return c;
                return -1
            },
            l = Array.prototype.forEach ? function(a, b, c) {
                Array.prototype.forEach.call(a, b, c)
            } : function(a, b, c) {
                for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
            },
            pa = Array.prototype.filter ? function(a, b) {
                return Array.prototype.filter.call(a,
                    b, void 0)
            } : function(a, b) {
                for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
                    if (g in f) {
                        var h = f[g];
                        b.call(void 0, h, g, a) && (d[e++] = h)
                    } return d
            },
            qa = Array.prototype.map ? function(a, b) {
                return Array.prototype.map.call(a, b, void 0)
            } : function(a, b) {
                for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
                return d
            },
            ra = Array.prototype.reduce ? function(a, b, c) {
                return Array.prototype.reduce.call(a, b, c)
            } : function(a, b, c) {
                var d = c;
                l(a,
                    function(e, f) {
                        d = b.call(void 0, d, e, f, a)
                    });
                return d
            },
            sa = Array.prototype.some ? function(a, b) {
                return Array.prototype.some.call(a, b, void 0)
            } : function(a, b) {
                for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                    if (e in d && b.call(void 0, d[e], e, a)) return !0;
                return !1
            },
            ta = Array.prototype.every ? function(a, b, c) {
                return Array.prototype.every.call(a, b, c)
            } : function(a, b, c) {
                for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
                    if (f in e && !b.call(c, e[f], f, a)) return !1;
                return !0
            };

        function ua(a, b) {
            a: {
                for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                    if (e in d && b.call(void 0, d[e], e, a)) {
                        b = e;
                        break a
                    } b = -1
            }
            return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
        }

        function va(a) {
            return Array.prototype.concat.apply([], arguments)
        }

        function wa(a, b, c) {
            return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
        }

        function xa(a, b) {
            a.sort(b || ya)
        }

        function ya(a, b) {
            return a > b ? 1 : a < b ? -1 : 0
        };

        function za(a) {
            var b = a.length - 1;
            return 0 <= b && a.indexOf(" ", b) == b
        }
        var Aa = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        };

        function Ba(a, b) {
            var c = 0;
            a = Aa(String(a)).split(".");
            b = Aa(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = Ca(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Ca(0 == f[2].length, 0 == g[2].length) || Ca(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        }

        function Ca(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
        var q;
        a: {
            var Da = aa.navigator;
            if (Da) {
                var Ea = Da.userAgent;
                if (Ea) {
                    q = Ea;
                    break a
                }
            }
            q = ""
        }

        function r(a) {
            return -1 != q.indexOf(a)
        };

        function Fa() {
            return r("Firefox") || r("FxiOS")
        }

        function Ga() {
            return (r("Chrome") || r("CriOS")) && !r("Edge")
        };

        function Ha(a) {
            return String(a).replace(/\-([a-z])/g, function(b, c) {
                return c.toUpperCase()
            })
        };

        function Ia() {
            return r("iPhone") && !r("iPod") && !r("iPad")
        };

        function Ja(a, b) {
            var c = Ka;
            return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
        };
        var La = r("Opera"),
            t = r("Trident") || r("MSIE"),
            Ma = r("Edge"),
            Na = r("Gecko") && !(-1 != q.toLowerCase().indexOf("webkit") && !r("Edge")) && !(r("Trident") || r("MSIE")) && !r("Edge"),
            Oa = -1 != q.toLowerCase().indexOf("webkit") && !r("Edge");

        function Pa() {
            var a = aa.document;
            return a ? a.documentMode : void 0
        }
        var Qa;
        a: {
            var Ra = "",
                Sa = function() {
                    var a = q;
                    if (Na) return /rv:([^\);]+)(\)|;)/.exec(a);
                    if (Ma) return /Edge\/([\d\.]+)/.exec(a);
                    if (t) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                    if (Oa) return /WebKit\/(\S+)/.exec(a);
                    if (La) return /(?:Version)[ \/]?(\S+)/.exec(a)
                }();Sa && (Ra = Sa ? Sa[1] : "");
            if (t) {
                var Ta = Pa();
                if (null != Ta && Ta > parseFloat(Ra)) {
                    Qa = String(Ta);
                    break a
                }
            }
            Qa = Ra
        }
        var Ka = {};

        function Ua(a) {
            return Ja(a, function() {
                return 0 <= Ba(Qa, a)
            })
        }
        var w;
        w = aa.document && t ? Pa() : void 0;
        var x = t && !(9 <= Number(w)),
            Va = t && !(8 <= Number(w));

        function Wa(a, b, c, d) {
            this.a = a;
            this.nodeName = c;
            this.nodeValue = d;
            this.nodeType = 2;
            this.parentNode = this.ownerElement = b
        }

        function Xa(a, b) {
            var c = Va && "href" == b.nodeName ? a.getAttribute(b.nodeName, 2) : b.nodeValue;
            return new Wa(b, a, b.nodeName, c)
        };

        function Ya(a) {
            this.b = a;
            this.a = 0
        }

        function Za(a) {
            a = a.match($a);
            for (var b = 0; b < a.length; b++) ab.test(a[b]) && a.splice(b, 1);
            return new Ya(a)
        }
        var $a = /\$?(?:(?![0-9-\.])(?:\*|[\w-\.]+):)?(?![0-9-\.])(?:\*|[\w-\.]+)|\/\/|\.\.|::|\d+(?:\.\d*)?|\.\d+|"[^"]*"|'[^']*'|[!<>]=|\s+|./g,
            ab = /^\s/;

        function y(a, b) {
            return a.b[a.a + (b || 0)]
        }

        function z(a) {
            return a.b[a.a++]
        }

        function bb(a) {
            return a.b.length <= a.a
        };

        function cb(a, b) {
            this.x = void 0 !== a ? a : 0;
            this.y = void 0 !== b ? b : 0
        }
        cb.prototype.ceil = function() {
            this.x = Math.ceil(this.x);
            this.y = Math.ceil(this.y);
            return this
        };
        cb.prototype.floor = function() {
            this.x = Math.floor(this.x);
            this.y = Math.floor(this.y);
            return this
        };
        cb.prototype.round = function() {
            this.x = Math.round(this.x);
            this.y = Math.round(this.y);
            return this
        };

        function db(a, b) {
            this.width = a;
            this.height = b
        }
        db.prototype.aspectRatio = function() {
            return this.width / this.height
        };
        db.prototype.ceil = function() {
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height);
            return this
        };
        db.prototype.floor = function() {
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this
        };
        db.prototype.round = function() {
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this
        };

        function eb(a) {
            return a ? new fb(A(a)) : na || (na = new fb)
        }

        function gb(a) {
            for (; a && 1 != a.nodeType;) a = a.previousSibling;
            return a
        }

        function hb(a, b) {
            if (!a || !b) return !1;
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        }

        function ib(a, b) {
            if (a == b) return 0;
            if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
            if (t && !(9 <= Number(w))) {
                if (9 == a.nodeType) return -1;
                if (9 == b.nodeType) return 1
            }
            if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
                var c = 1 == a.nodeType,
                    d = 1 == b.nodeType;
                if (c && d) return a.sourceIndex - b.sourceIndex;
                var e = a.parentNode,
                    f = b.parentNode;
                return e == f ? jb(a, b) : !c && hb(e, b) ? -1 * kb(a, b) : !d && hb(f, a) ? kb(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex)
            }
            d = A(a);
            c = d.createRange();
            c.selectNode(a);
            c.collapse(!0);
            a = d.createRange();
            a.selectNode(b);
            a.collapse(!0);
            return c.compareBoundaryPoints(aa.Range.START_TO_END, a)
        }

        function kb(a, b) {
            var c = a.parentNode;
            if (c == b) return -1;
            for (; b.parentNode != c;) b = b.parentNode;
            return jb(b, a)
        }

        function jb(a, b) {
            for (; b = b.previousSibling;)
                if (b == a) return -1;
            return 1
        }

        function A(a) {
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        }

        function lb(a, b) {
            a && (a = a.parentNode);
            for (var c = 0; a;) {
                if (b(a)) return a;
                a = a.parentNode;
                c++
            }
            return null
        }

        function fb(a) {
            this.a = a || aa.document || document
        }
        fb.prototype.getElementsByTagName = function(a, b) {
            return (b || this.a).getElementsByTagName(String(a))
        };

        function mb(a, b, c, d) {
            a = d || a.a;
            var e = b && "*" != b ? String(b).toUpperCase() : "";
            if (a.querySelectorAll && a.querySelector && (e || c)) c = a.querySelectorAll(e + (c ? "." + c : ""));
            else if (c && a.getElementsByClassName)
                if (b = a.getElementsByClassName(c), e) {
                    a = {};
                    for (var f = d = 0, g; g = b[f]; f++) e == g.nodeName && (a[d++] = g);
                    a.length = d;
                    c = a
                } else c = b;
            else if (b = a.getElementsByTagName(e || "*"), c) {
                a = {};
                for (f = d = 0; g = b[f]; f++) {
                    e = g.className;
                    var h;
                    if (h = "function" == typeof e.split) h = 0 <= oa(e.split(/\s+/), c);
                    h && (a[d++] = g)
                }
                a.length = d;
                c = a
            } else c = b;
            return c
        };

        function B(a) {
            var b = null,
                c = a.nodeType;
            1 == c && (b = a.textContent, b = void 0 == b || null == b ? a.innerText : b, b = void 0 == b || null == b ? "" : b);
            if ("string" != typeof b)
                if (x && "title" == a.nodeName.toLowerCase() && 1 == c) b = a.text;
                else if (9 == c || 1 == c) {
                a = 9 == c ? a.documentElement : a.firstChild;
                c = 0;
                var d = [];
                for (b = ""; a;) {
                    do 1 != a.nodeType && (b += a.nodeValue), x && "title" == a.nodeName.toLowerCase() && (b += a.text), d[c++] = a; while (a = a.firstChild);
                    for (; c && !(a = d[--c].nextSibling););
                }
            } else b = a.nodeValue;
            return b
        }

        function nb(a, b, c) {
            if (null === b) return !0;
            try {
                if (!a.getAttribute) return !1
            } catch (d) {
                return !1
            }
            Va && "class" == b && (b = "className");
            return null == c ? !!a.getAttribute(b) : a.getAttribute(b, 2) == c
        }

        function ob(a, b, c, d, e) {
            return (x ? pb : qb).call(null, a, b, ba(c) ? c : null, ba(d) ? d : null, e || new C)
        }

        function pb(a, b, c, d, e) {
            if (a instanceof rb || 8 == a.b || c && null === a.b) {
                var f = b.all;
                if (!f) return e;
                a = sb(a);
                if ("*" != a && (f = b.getElementsByTagName(a), !f)) return e;
                if (c) {
                    for (var g = [], h = 0; b = f[h++];) nb(b, c, d) && g.push(b);
                    f = g
                }
                for (h = 0; b = f[h++];) "*" == a && "!" == b.tagName || e.add(b);
                return e
            }
            tb(a, b, c, d, e);
            return e
        }

        function qb(a, b, c, d, e) {
            b.getElementsByName && d && "name" == c && !t ? (b = b.getElementsByName(d), l(b, function(f) {
                a.a(f) && e.add(f)
            })) : b.getElementsByClassName && d && "class" == c ? (b = b.getElementsByClassName(d), l(b, function(f) {
                f.className == d && a.a(f) && e.add(f)
            })) : a instanceof D ? tb(a, b, c, d, e) : b.getElementsByTagName && (b = b.getElementsByTagName(a.f()), l(b, function(f) {
                nb(f, c, d) && e.add(f)
            }));
            return e
        }

        function ub(a, b, c, d, e) {
            var f;
            if ((a instanceof rb || 8 == a.b || c && null === a.b) && (f = b.childNodes)) {
                var g = sb(a);
                if ("*" != g && (f = pa(f, function(h) {
                        return h.tagName && h.tagName.toLowerCase() == g
                    }), !f)) return e;
                c && (f = pa(f, function(h) {
                    return nb(h, c, d)
                }));
                l(f, function(h) {
                    "*" == g && ("!" == h.tagName || "*" == g && 1 != h.nodeType) || e.add(h)
                });
                return e
            }
            return vb(a, b, c, d, e)
        }

        function vb(a, b, c, d, e) {
            for (b = b.firstChild; b; b = b.nextSibling) nb(b, c, d) && a.a(b) && e.add(b);
            return e
        }

        function tb(a, b, c, d, e) {
            for (b = b.firstChild; b; b = b.nextSibling) nb(b, c, d) && a.a(b) && e.add(b), tb(a, b, c, d, e)
        }

        function sb(a) {
            if (a instanceof D) {
                if (8 == a.b) return "!";
                if (null === a.b) return "*"
            }
            return a.f()
        };

        function C() {
            this.b = this.a = null;
            this.m = 0
        }

        function wb(a) {
            this.f = a;
            this.a = this.b = null
        }

        function xb(a, b) {
            if (!a.a) return b;
            if (!b.a) return a;
            var c = a.a;
            b = b.a;
            for (var d = null, e, f = 0; c && b;) {
                e = c.f;
                var g = b.f;
                e == g || e instanceof Wa && g instanceof Wa && e.a == g.a ? (e = c, c = c.a, b = b.a) : 0 < ib(c.f, b.f) ? (e = b, b = b.a) : (e = c, c = c.a);
                (e.b = d) ? d.a = e: a.a = e;
                d = e;
                f++
            }
            for (e = c || b; e;) e.b = d, d = d.a = e, f++, e = e.a;
            a.b = d;
            a.m = f;
            return a
        }

        function yb(a, b) {
            b = new wb(b);
            b.a = a.a;
            a.b ? a.a.b = b : a.a = a.b = b;
            a.a = b;
            a.m++
        }
        C.prototype.add = function(a) {
            a = new wb(a);
            a.b = this.b;
            this.a ? this.b.a = a : this.a = this.b = a;
            this.b = a;
            this.m++
        };

        function zb(a) {
            return (a = a.a) ? a.f : null
        }

        function Bb(a) {
            return (a = zb(a)) ? B(a) : ""
        }

        function Cb(a, b) {
            return new Db(a, !!b)
        }

        function Db(a, b) {
            this.f = a;
            this.b = (this.A = b) ? a.b : a.a;
            this.a = null
        }

        function E(a) {
            var b = a.b;
            if (null == b) return null;
            var c = a.a = b;
            a.b = a.A ? b.b : b.a;
            return c.f
        };

        function F(a) {
            this.i = a;
            this.b = this.g = !1;
            this.f = null
        }

        function H(a) {
            return "\n  " + a.toString().split("\n").join("\n  ")
        }

        function Eb(a, b) {
            a.g = b
        }

        function Fb(a, b) {
            a.b = b
        }

        function I(a, b) {
            a = a.a(b);
            return a instanceof C ? +Bb(a) : +a
        }

        function J(a, b) {
            a = a.a(b);
            return a instanceof C ? Bb(a) : "" + a
        }

        function Gb(a, b) {
            a = a.a(b);
            return a instanceof C ? !!a.m : !!a
        };

        function Hb(a, b, c) {
            F.call(this, a.i);
            this.c = a;
            this.h = b;
            this.v = c;
            this.g = b.g || c.g;
            this.b = b.b || c.b;
            this.c == Ib && (c.b || c.g || 4 == c.i || 0 == c.i || !b.f ? b.b || b.g || 4 == b.i || 0 == b.i || !c.f || (this.f = {
                name: c.f.name,
                B: b
            }) : this.f = {
                name: b.f.name,
                B: c
            })
        }
        k(Hb, F);

        function Jb(a, b, c, d, e) {
            b = b.a(d);
            c = c.a(d);
            var f;
            if (b instanceof C && c instanceof C) {
                b = Cb(b);
                for (d = E(b); d; d = E(b))
                    for (e = Cb(c), f = E(e); f; f = E(e))
                        if (a(B(d), B(f))) return !0;
                return !1
            }
            if (b instanceof C || c instanceof C) {
                b instanceof C ? (e = b, d = c) : (e = c, d = b);
                f = Cb(e);
                for (var g = typeof d, h = E(f); h; h = E(f)) {
                    switch (g) {
                        case "number":
                            h = +B(h);
                            break;
                        case "boolean":
                            h = !!B(h);
                            break;
                        case "string":
                            h = B(h);
                            break;
                        default:
                            throw Error("Illegal primitive type for comparison.");
                    }
                    if (e == b && a(h, d) || e == c && a(d, h)) return !0
                }
                return !1
            }
            return e ?
                "boolean" == typeof b || "boolean" == typeof c ? a(!!b, !!c) : "number" == typeof b || "number" == typeof c ? a(+b, +c) : a(b, c) : a(+b, +c)
        }
        Hb.prototype.a = function(a) {
            return this.c.s(this.h, this.v, a)
        };
        Hb.prototype.toString = function() {
            var a = "Binary Expression: " + this.c;
            a += H(this.h);
            return a += H(this.v)
        };

        function Kb(a, b, c, d) {
            this.$ = a;
            this.M = b;
            this.i = c;
            this.s = d
        }
        Kb.prototype.toString = function() {
            return this.$
        };
        var Lb = {};

        function K(a, b, c, d) {
            if (Lb.hasOwnProperty(a)) throw Error("Binary operator already created: " + a);
            a = new Kb(a, b, c, d);
            return Lb[a.toString()] = a
        }
        K("div", 6, 1, function(a, b, c) {
            return I(a, c) / I(b, c)
        });
        K("mod", 6, 1, function(a, b, c) {
            return I(a, c) % I(b, c)
        });
        K("*", 6, 1, function(a, b, c) {
            return I(a, c) * I(b, c)
        });
        K("+", 5, 1, function(a, b, c) {
            return I(a, c) + I(b, c)
        });
        K("-", 5, 1, function(a, b, c) {
            return I(a, c) - I(b, c)
        });
        K("<", 4, 2, function(a, b, c) {
            return Jb(function(d, e) {
                return d < e
            }, a, b, c)
        });
        K(">", 4, 2, function(a, b, c) {
            return Jb(function(d, e) {
                return d > e
            }, a, b, c)
        });
        K("<=", 4, 2, function(a, b, c) {
            return Jb(function(d, e) {
                return d <= e
            }, a, b, c)
        });
        K(">=", 4, 2, function(a, b, c) {
            return Jb(function(d, e) {
                return d >= e
            }, a, b, c)
        });
        var Ib = K("=", 3, 2, function(a, b, c) {
            return Jb(function(d, e) {
                return d == e
            }, a, b, c, !0)
        });
        K("!=", 3, 2, function(a, b, c) {
            return Jb(function(d, e) {
                return d != e
            }, a, b, c, !0)
        });
        K("and", 2, 2, function(a, b, c) {
            return Gb(a, c) && Gb(b, c)
        });
        K("or", 1, 2, function(a, b, c) {
            return Gb(a, c) || Gb(b, c)
        });

        function Mb(a, b) {
            if (b.a.length && 4 != a.i) throw Error("Primary expression must evaluate to nodeset if filter has predicate(s).");
            F.call(this, a.i);
            this.c = a;
            this.h = b;
            this.g = a.g;
            this.b = a.b
        }
        k(Mb, F);
        Mb.prototype.a = function(a) {
            a = this.c.a(a);
            return Nb(this.h, a)
        };
        Mb.prototype.toString = function() {
            var a = "Filter:" + H(this.c);
            return a += H(this.h)
        };

        function Ob(a, b) {
            if (b.length < a.L) throw Error("Function " + a.l + " expects at least" + a.L + " arguments, " + b.length + " given");
            if (null !== a.H && b.length > a.H) throw Error("Function " + a.l + " expects at most " + a.H + " arguments, " + b.length + " given");
            a.Z && l(b, function(c, d) {
                if (4 != c.i) throw Error("Argument " + d + " to function " + a.l + " is not of type Nodeset: " + c);
            });
            F.call(this, a.i);
            this.D = a;
            this.c = b;
            Eb(this, a.g || sa(b, function(c) {
                return c.g
            }));
            Fb(this, a.Y && !b.length || a.X && !!b.length || sa(b, function(c) {
                return c.b
            }))
        }
        k(Ob, F);
        Ob.prototype.a = function(a) {
            return this.D.s.apply(null, va(a, this.c))
        };
        Ob.prototype.toString = function() {
            var a = "Function: " + this.D;
            if (this.c.length) {
                var b = ra(this.c, function(c, d) {
                    return c + H(d)
                }, "Arguments:");
                a += H(b)
            }
            return a
        };

        function Pb(a, b, c, d, e, f, g, h) {
            this.l = a;
            this.i = b;
            this.g = c;
            this.Y = d;
            this.X = !1;
            this.s = e;
            this.L = f;
            this.H = void 0 !== g ? g : f;
            this.Z = !!h
        }
        Pb.prototype.toString = function() {
            return this.l
        };
        var Qb = {};

        function L(a, b, c, d, e, f, g, h) {
            if (Qb.hasOwnProperty(a)) throw Error("Function already created: " + a + ".");
            Qb[a] = new Pb(a, b, c, d, e, f, g, h)
        }
        L("boolean", 2, !1, !1, function(a, b) {
            return Gb(b, a)
        }, 1);
        L("ceiling", 1, !1, !1, function(a, b) {
            return Math.ceil(I(b, a))
        }, 1);
        L("concat", 3, !1, !1, function(a, b) {
            return ra(wa(arguments, 1), function(c, d) {
                return c + J(d, a)
            }, "")
        }, 2, null);
        L("contains", 2, !1, !1, function(a, b, c) {
            b = J(b, a);
            a = J(c, a);
            return a = -1 != b.indexOf(a)
        }, 2);
        L("count", 1, !1, !1, function(a, b) {
            return b.a(a).m
        }, 1, 1, !0);
        L("false", 2, !1, !1, function() {
            return !1
        }, 0);
        L("floor", 1, !1, !1, function(a, b) {
            return Math.floor(I(b, a))
        }, 1);
        L("id", 4, !1, !1, function(a, b) {
            function c(h) {
                if (x) {
                    var n = e.all[h];
                    if (n) {
                        if (n.nodeType && h == n.id) return n;
                        if (n.length) return ua(n, function(u) {
                            return h == u.id
                        })
                    }
                    return null
                }
                return e.getElementById(h)
            }
            var d = a.a,
                e = 9 == d.nodeType ? d : d.ownerDocument;
            a = J(b, a).split(/\s+/);
            var f = [];
            l(a, function(h) {
                h = c(h);
                !h || 0 <= oa(f, h) || f.push(h)
            });
            f.sort(ib);
            var g = new C;
            l(f, function(h) {
                g.add(h)
            });
            return g
        }, 1);
        L("lang", 2, !1, !1, function() {
            return !1
        }, 1);
        L("last", 1, !0, !1, function(a) {
            if (1 != arguments.length) throw Error("Function last expects ()");
            return a.f
        }, 0);
        L("local-name", 3, !1, !0, function(a, b) {
            return (a = b ? zb(b.a(a)) : a.a) ? a.localName || a.nodeName.toLowerCase() : ""
        }, 0, 1, !0);
        L("name", 3, !1, !0, function(a, b) {
            return (a = b ? zb(b.a(a)) : a.a) ? a.nodeName.toLowerCase() : ""
        }, 0, 1, !0);
        L("namespace-uri", 3, !0, !1, function() {
            return ""
        }, 0, 1, !0);
        L("normalize-space", 3, !1, !0, function(a, b) {
            return (b ? J(b, a) : B(a.a)).replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
        }, 0, 1);
        L("not", 2, !1, !1, function(a, b) {
            return !Gb(b, a)
        }, 1);
        L("number", 1, !1, !0, function(a, b) {
            return b ? I(b, a) : +B(a.a)
        }, 0, 1);
        L("position", 1, !0, !1, function(a) {
            return a.b
        }, 0);
        L("round", 1, !1, !1, function(a, b) {
            return Math.round(I(b, a))
        }, 1);
        L("starts-with", 2, !1, !1, function(a, b, c) {
            b = J(b, a);
            a = J(c, a);
            return 0 == b.lastIndexOf(a, 0)
        }, 2);
        L("string", 3, !1, !0, function(a, b) {
            return b ? J(b, a) : B(a.a)
        }, 0, 1);
        L("string-length", 1, !1, !0, function(a, b) {
            return (b ? J(b, a) : B(a.a)).length
        }, 0, 1);
        L("substring", 3, !1, !1, function(a, b, c, d) {
            c = I(c, a);
            if (isNaN(c) || Infinity == c || -Infinity == c) return "";
            d = d ? I(d, a) : Infinity;
            if (isNaN(d) || -Infinity === d) return "";
            c = Math.round(c) - 1;
            var e = Math.max(c, 0);
            a = J(b, a);
            return Infinity == d ? a.substring(e) : a.substring(e, c + Math.round(d))
        }, 2, 3);
        L("substring-after", 3, !1, !1, function(a, b, c) {
            b = J(b, a);
            a = J(c, a);
            c = b.indexOf(a);
            return -1 == c ? "" : b.substring(c + a.length)
        }, 2);
        L("substring-before", 3, !1, !1, function(a, b, c) {
            b = J(b, a);
            a = J(c, a);
            a = b.indexOf(a);
            return -1 == a ? "" : b.substring(0, a)
        }, 2);
        L("sum", 1, !1, !1, function(a, b) {
            a = Cb(b.a(a));
            b = 0;
            for (var c = E(a); c; c = E(a)) b += +B(c);
            return b
        }, 1, 1, !0);
        L("translate", 3, !1, !1, function(a, b, c, d) {
            b = J(b, a);
            c = J(c, a);
            var e = J(d, a);
            a = {};
            for (d = 0; d < c.length; d++) {
                var f = c.charAt(d);
                f in a || (a[f] = e.charAt(d))
            }
            c = "";
            for (d = 0; d < b.length; d++) f = b.charAt(d), c += f in a ? a[f] : f;
            return c
        }, 3);
        L("true", 2, !1, !1, function() {
            return !0
        }, 0);

        function D(a, b) {
            this.h = a;
            this.c = void 0 !== b ? b : null;
            this.b = null;
            switch (a) {
                case "comment":
                    this.b = 8;
                    break;
                case "text":
                    this.b = 3;
                    break;
                case "processing-instruction":
                    this.b = 7;
                    break;
                case "node":
                    break;
                default:
                    throw Error("Unexpected argument");
            }
        }

        function Rb(a) {
            return "comment" == a || "text" == a || "processing-instruction" == a || "node" == a
        }
        D.prototype.a = function(a) {
            return null === this.b || this.b == a.nodeType
        };
        D.prototype.f = function() {
            return this.h
        };
        D.prototype.toString = function() {
            var a = "Kind Test: " + this.h;
            null === this.c || (a += H(this.c));
            return a
        };

        function Sb(a) {
            F.call(this, 3);
            this.c = a.substring(1, a.length - 1)
        }
        k(Sb, F);
        Sb.prototype.a = function() {
            return this.c
        };
        Sb.prototype.toString = function() {
            return "Literal: " + this.c
        };

        function rb(a, b) {
            this.l = a.toLowerCase();
            a = "*" == this.l ? "*" : "http://www.w3.org/1999/xhtml";
            this.c = b ? b.toLowerCase() : a
        }
        rb.prototype.a = function(a) {
            var b = a.nodeType;
            if (1 != b && 2 != b) return !1;
            b = void 0 !== a.localName ? a.localName : a.nodeName;
            return "*" != this.l && this.l != b.toLowerCase() ? !1 : "*" == this.c ? !0 : this.c == (a.namespaceURI ? a.namespaceURI.toLowerCase() : "http://www.w3.org/1999/xhtml")
        };
        rb.prototype.f = function() {
            return this.l
        };
        rb.prototype.toString = function() {
            return "Name Test: " + ("http://www.w3.org/1999/xhtml" == this.c ? "" : this.c + ":") + this.l
        };

        function Tb(a) {
            F.call(this, 1);
            this.c = a
        }
        k(Tb, F);
        Tb.prototype.a = function() {
            return this.c
        };
        Tb.prototype.toString = function() {
            return "Number: " + this.c
        };

        function Ub(a, b) {
            F.call(this, a.i);
            this.h = a;
            this.c = b;
            this.g = a.g;
            this.b = a.b;
            1 == this.c.length && (a = this.c[0], a.G || a.c != Vb || (a = a.v, "*" != a.f() && (this.f = {
                name: a.f(),
                B: null
            })))
        }
        k(Ub, F);

        function Wb() {
            F.call(this, 4)
        }
        k(Wb, F);
        Wb.prototype.a = function(a) {
            var b = new C;
            a = a.a;
            9 == a.nodeType ? b.add(a) : b.add(a.ownerDocument);
            return b
        };
        Wb.prototype.toString = function() {
            return "Root Helper Expression"
        };

        function Xb() {
            F.call(this, 4)
        }
        k(Xb, F);
        Xb.prototype.a = function(a) {
            var b = new C;
            b.add(a.a);
            return b
        };
        Xb.prototype.toString = function() {
            return "Context Helper Expression"
        };

        function Yb(a) {
            return "/" == a || "//" == a
        }
        Ub.prototype.a = function(a) {
            var b = this.h.a(a);
            if (!(b instanceof C)) throw Error("Filter expression must evaluate to nodeset.");
            a = this.c;
            for (var c = 0, d = a.length; c < d && b.m; c++) {
                var e = a[c],
                    f = Cb(b, e.c.A);
                if (e.g || e.c != Zb)
                    if (e.g || e.c != $b) {
                        var g = E(f);
                        for (b = e.a(new ma(g)); null != (g = E(f));) g = e.a(new ma(g)), b = xb(b, g)
                    } else g = E(f), b = e.a(new ma(g));
                else {
                    for (g = E(f);
                        (b = E(f)) && (!g.contains || g.contains(b)) && b.compareDocumentPosition(g) & 8; g = b);
                    b = e.a(new ma(g))
                }
            }
            return b
        };
        Ub.prototype.toString = function() {
            var a = "Path Expression:" + H(this.h);
            if (this.c.length) {
                var b = ra(this.c, function(c, d) {
                    return c + H(d)
                }, "Steps:");
                a += H(b)
            }
            return a
        };

        function ac(a, b) {
            this.a = a;
            this.A = !!b
        }

        function Nb(a, b, c) {
            for (c = c || 0; c < a.a.length; c++)
                for (var d = a.a[c], e = Cb(b), f = b.m, g, h = 0; g = E(e); h++) {
                    var n = a.A ? f - h : h + 1;
                    g = d.a(new ma(g, n, f));
                    if ("number" == typeof g) n = n == g;
                    else if ("string" == typeof g || "boolean" == typeof g) n = !!g;
                    else if (g instanceof C) n = 0 < g.m;
                    else throw Error("Predicate.evaluate returned an unexpected type.");
                    if (!n) {
                        n = e;
                        g = n.f;
                        var u = n.a;
                        if (!u) throw Error("Next must be called at least once before remove.");
                        var p = u.b;
                        u = u.a;
                        p ? p.a = u : g.a = u;
                        u ? u.b = p : g.b = p;
                        g.m--;
                        n.a = null
                    }
                }
            return b
        }
        ac.prototype.toString = function() {
            return ra(this.a, function(a, b) {
                return a + H(b)
            }, "Predicates:")
        };

        function bc(a, b, c, d) {
            F.call(this, 4);
            this.c = a;
            this.v = b;
            this.h = c || new ac([]);
            this.G = !!d;
            b = this.h;
            b = 0 < b.a.length ? b.a[0].f : null;
            a.ca && b && (a = b.name, a = x ? a.toLowerCase() : a, this.f = {
                name: a,
                B: b.B
            });
            a: {
                a = this.h;
                for (b = 0; b < a.a.length; b++)
                    if (c = a.a[b], c.g || 1 == c.i || 0 == c.i) {
                        a = !0;
                        break a
                    } a = !1
            }
            this.g = a
        }
        k(bc, F);
        bc.prototype.a = function(a) {
            var b = a.a,
                c = this.f,
                d = null,
                e = null,
                f = 0;
            c && (d = c.name, e = c.B ? J(c.B, a) : null, f = 1);
            if (this.G)
                if (this.g || this.c != cc)
                    if (b = Cb((new bc(dc, new D("node"))).a(a)), c = E(b))
                        for (a = this.s(c, d, e, f); null != (c = E(b));) a = xb(a, this.s(c, d, e, f));
                    else a = new C;
            else a = ob(this.v, b, d, e), a = Nb(this.h, a, f);
            else a = this.s(a.a, d, e, f);
            return a
        };
        bc.prototype.s = function(a, b, c, d) {
            a = this.c.D(this.v, a, b, c);
            return a = Nb(this.h, a, d)
        };
        bc.prototype.toString = function() {
            var a = "Step:" + H("Operator: " + (this.G ? "//" : "/"));
            this.c.l && (a += H("Axis: " + this.c));
            a += H(this.v);
            if (this.h.a.length) {
                var b = ra(this.h.a, function(c, d) {
                    return c + H(d)
                }, "Predicates:");
                a += H(b)
            }
            return a
        };

        function ec(a, b, c, d) {
            this.l = a;
            this.D = b;
            this.A = c;
            this.ca = d
        }
        ec.prototype.toString = function() {
            return this.l
        };
        var fc = {};

        function M(a, b, c, d) {
            if (fc.hasOwnProperty(a)) throw Error("Axis already created: " + a);
            b = new ec(a, b, c, !!d);
            return fc[a] = b
        }
        M("ancestor", function(a, b) {
            for (var c = new C; b = b.parentNode;) a.a(b) && yb(c, b);
            return c
        }, !0);
        M("ancestor-or-self", function(a, b) {
            var c = new C;
            do a.a(b) && yb(c, b); while (b = b.parentNode);
            return c
        }, !0);
        var Vb = M("attribute", function(a, b) {
                var c = new C,
                    d = a.f();
                if ("style" == d && x && b.style) return c.add(new Wa(b.style, b, "style", b.style.cssText)), c;
                var e = b.attributes;
                if (e)
                    if (a instanceof D && null === a.b || "*" == d)
                        for (a = 0; d = e[a]; a++) x ? d.nodeValue && c.add(Xa(b, d)) : c.add(d);
                    else(d = e.getNamedItem(d)) && (x ? d.nodeValue && c.add(Xa(b, d)) : c.add(d));
                return c
            }, !1),
            cc = M("child", function(a, b, c, d, e) {
                return (x ? ub : vb).call(null, a, b, ba(c) ? c : null, ba(d) ? d : null, e || new C)
            }, !1, !0);
        M("descendant", ob, !1, !0);
        var dc = M("descendant-or-self", function(a, b, c, d) {
                var e = new C;
                nb(b, c, d) && a.a(b) && e.add(b);
                return ob(a, b, c, d, e)
            }, !1, !0),
            Zb = M("following", function(a, b, c, d) {
                var e = new C;
                do
                    for (var f = b; f = f.nextSibling;) nb(f, c, d) && a.a(f) && e.add(f), e = ob(a, f, c, d, e); while (b = b.parentNode);
                return e
            }, !1, !0);
        M("following-sibling", function(a, b) {
            for (var c = new C; b = b.nextSibling;) a.a(b) && c.add(b);
            return c
        }, !1);
        M("namespace", function() {
            return new C
        }, !1);
        var gc = M("parent", function(a, b) {
                var c = new C;
                if (9 == b.nodeType) return c;
                if (2 == b.nodeType) return c.add(b.ownerElement), c;
                b = b.parentNode;
                a.a(b) && c.add(b);
                return c
            }, !1),
            $b = M("preceding", function(a, b, c, d) {
                var e = new C,
                    f = [];
                do f.unshift(b); while (b = b.parentNode);
                for (var g = 1, h = f.length; g < h; g++) {
                    var n = [];
                    for (b = f[g]; b = b.previousSibling;) n.unshift(b);
                    for (var u = 0, p = n.length; u < p; u++) b = n[u], nb(b, c, d) && a.a(b) && e.add(b), e = ob(a, b, c, d, e)
                }
                return e
            }, !0, !0);
        M("preceding-sibling", function(a, b) {
            for (var c = new C; b = b.previousSibling;) a.a(b) && yb(c, b);
            return c
        }, !0);
        var hc = M("self", function(a, b) {
            var c = new C;
            a.a(b) && c.add(b);
            return c
        }, !1);

        function ic(a) {
            F.call(this, 1);
            this.c = a;
            this.g = a.g;
            this.b = a.b
        }
        k(ic, F);
        ic.prototype.a = function(a) {
            return -I(this.c, a)
        };
        ic.prototype.toString = function() {
            return "Unary Expression: -" + H(this.c)
        };

        function jc(a) {
            F.call(this, 4);
            this.c = a;
            Eb(this, sa(this.c, function(b) {
                return b.g
            }));
            Fb(this, sa(this.c, function(b) {
                return b.b
            }))
        }
        k(jc, F);
        jc.prototype.a = function(a) {
            var b = new C;
            l(this.c, function(c) {
                c = c.a(a);
                if (!(c instanceof C)) throw Error("Path expression must evaluate to NodeSet.");
                b = xb(b, c)
            });
            return b
        };
        jc.prototype.toString = function() {
            return ra(this.c, function(a, b) {
                return a + H(b)
            }, "Union Expression:")
        };

        function kc(a, b) {
            this.a = a;
            this.b = b
        }

        function lc(a) {
            for (var b, c = [];;) {
                N(a, "Missing right hand side of binary expression.");
                b = mc(a);
                var d = z(a.a);
                if (!d) break;
                var e = (d = Lb[d] || null) && d.M;
                if (!e) {
                    a.a.a--;
                    break
                }
                for (; c.length && e <= c[c.length - 1].M;) b = new Hb(c.pop(), c.pop(), b);
                c.push(b, d)
            }
            for (; c.length;) b = new Hb(c.pop(), c.pop(), b);
            return b
        }

        function N(a, b) {
            if (bb(a.a)) throw Error(b);
        }

        function nc(a, b) {
            a = z(a.a);
            if (a != b) throw Error("Bad token, expected: " + b + " got: " + a);
        }

        function oc(a) {
            a = z(a.a);
            if (")" != a) throw Error("Bad token: " + a);
        }

        function rc(a) {
            a = z(a.a);
            if (2 > a.length) throw Error("Unclosed literal string");
            return new Sb(a)
        }

        function sc(a) {
            var b = [];
            if (Yb(y(a.a))) {
                var c = z(a.a);
                var d = y(a.a);
                if ("/" == c && (bb(a.a) || "." != d && ".." != d && "@" != d && "*" != d && !/(?![0-9])[\w]/.test(d))) return new Wb;
                d = new Wb;
                N(a, "Missing next location step.");
                c = tc(a, c);
                b.push(c)
            } else {
                a: {
                    c = y(a.a);d = c.charAt(0);
                    switch (d) {
                        case "$":
                            throw Error("Variable reference not allowed in HTML XPath");
                        case "(":
                            z(a.a);
                            c = lc(a);
                            N(a, 'unclosed "("');
                            nc(a, ")");
                            break;
                        case '"':
                        case "'":
                            c = rc(a);
                            break;
                        default:
                            if (isNaN(+c))
                                if (!Rb(c) && /(?![0-9])[\w]/.test(d) && "(" == y(a.a, 1)) {
                                    c = z(a.a);
                                    c = Qb[c] || null;
                                    z(a.a);
                                    for (d = [];
                                        ")" != y(a.a);) {
                                        N(a, "Missing function argument list.");
                                        d.push(lc(a));
                                        if ("," != y(a.a)) break;
                                        z(a.a)
                                    }
                                    N(a, "Unclosed function argument list.");
                                    oc(a);
                                    c = new Ob(c, d)
                                } else {
                                    c = null;
                                    break a
                                }
                            else c = new Tb(+z(a.a))
                    }
                    "[" == y(a.a) && (d = new ac(uc(a)), c = new Mb(c, d))
                }
                if (c)
                    if (Yb(y(a.a))) d = c;
                    else return c;
                else c = tc(a, "/"),
                d = new Xb,
                b.push(c)
            }
            for (; Yb(y(a.a));) c = z(a.a), N(a, "Missing next location step."), c = tc(a, c), b.push(c);
            return new Ub(d, b)
        }

        function tc(a, b) {
            if ("/" != b && "//" != b) throw Error('Step op should be "/" or "//"');
            if ("." == y(a.a)) {
                var c = new bc(hc, new D("node"));
                z(a.a);
                return c
            }
            if (".." == y(a.a)) return c = new bc(gc, new D("node")), z(a.a), c;
            if ("@" == y(a.a)) {
                var d = Vb;
                z(a.a);
                N(a, "Missing attribute name")
            } else if ("::" == y(a.a, 1)) {
                if (!/(?![0-9])[\w]/.test(y(a.a).charAt(0))) throw Error("Bad token: " + z(a.a));
                var e = z(a.a);
                d = fc[e] || null;
                if (!d) throw Error("No axis with name: " + e);
                z(a.a);
                N(a, "Missing node name")
            } else d = cc;
            e = y(a.a);
            if (/(?![0-9])[\w\*]/.test(e.charAt(0)))
                if ("(" ==
                    y(a.a, 1)) {
                    if (!Rb(e)) throw Error("Invalid node type: " + e);
                    e = z(a.a);
                    if (!Rb(e)) throw Error("Invalid type name: " + e);
                    nc(a, "(");
                    N(a, "Bad nodetype");
                    var f = y(a.a).charAt(0),
                        g = null;
                    if ('"' == f || "'" == f) g = rc(a);
                    N(a, "Bad nodetype");
                    oc(a);
                    e = new D(e, g)
                } else if (e = z(a.a), f = e.indexOf(":"), -1 == f) e = new rb(e);
            else {
                g = e.substring(0, f);
                if ("*" == g) var h = "*";
                else if (h = a.b(g), !h) throw Error("Namespace prefix not declared: " + g);
                e = e.substr(f + 1);
                e = new rb(e, h)
            } else throw Error("Bad token: " + z(a.a));
            a = new ac(uc(a), d.A);
            return c ||
                new bc(d, e, a, "//" == b)
        }

        function uc(a) {
            for (var b = [];
                "[" == y(a.a);) {
                z(a.a);
                N(a, "Missing predicate expression.");
                var c = lc(a);
                b.push(c);
                N(a, "Unclosed predicate expression.");
                nc(a, "]")
            }
            return b
        }

        function mc(a) {
            if ("-" == y(a.a)) return z(a.a), new ic(mc(a));
            var b = sc(a);
            if ("|" != y(a.a)) a = b;
            else {
                for (b = [b];
                    "|" == z(a.a);) N(a, "Missing next union location path."), b.push(sc(a));
                a.a.a--;
                a = new jc(b)
            }
            return a
        };

        function vc(a) {
            switch (a.nodeType) {
                case 1:
                    return la(wc, a);
                case 9:
                    return vc(a.documentElement);
                case 11:
                case 10:
                case 6:
                case 12:
                    return xc;
                default:
                    return a.parentNode ? vc(a.parentNode) : xc
            }
        }

        function xc() {
            return null
        }

        function wc(a, b) {
            if (a.prefix == b) return a.namespaceURI || "http://www.w3.org/1999/xhtml";
            var c = a.getAttributeNode("xmlns:" + b);
            return c && c.specified ? c.value || null : a.parentNode && 9 != a.parentNode.nodeType ? wc(a.parentNode, b) : null
        };

        function yc(a, b) {
            if (!a.length) throw Error("Empty XPath expression.");
            a = Za(a);
            if (bb(a)) throw Error("Invalid XPath expression.");
            b ? ea(b) || (b = ka(b.lookupNamespaceURI, b)) : b = function() {
                return null
            };
            var c = lc(new kc(a, b));
            if (!bb(a)) throw Error("Bad token: " + z(a));
            this.evaluate = function(d, e) {
                d = c.a(new ma(d));
                return new O(d, e)
            }
        }

        function O(a, b) {
            if (0 == b)
                if (a instanceof C) b = 4;
                else if ("string" == typeof a) b = 2;
            else if ("number" == typeof a) b = 1;
            else if ("boolean" == typeof a) b = 3;
            else throw Error("Unexpected evaluation result.");
            if (2 != b && 1 != b && 3 != b && !(a instanceof C)) throw Error("value could not be converted to the specified type");
            this.resultType = b;
            switch (b) {
                case 2:
                    this.stringValue = a instanceof C ? Bb(a) : "" + a;
                    break;
                case 1:
                    this.numberValue = a instanceof C ? +Bb(a) : +a;
                    break;
                case 3:
                    this.booleanValue = a instanceof C ? 0 < a.m : !!a;
                    break;
                case 4:
                case 5:
                case 6:
                case 7:
                    var c =
                        Cb(a);
                    var d = [];
                    for (var e = E(c); e; e = E(c)) d.push(e instanceof Wa ? e.a : e);
                    this.snapshotLength = a.m;
                    this.invalidIteratorState = !1;
                    break;
                case 8:
                case 9:
                    a = zb(a);
                    this.singleNodeValue = a instanceof Wa ? a.a : a;
                    break;
                default:
                    throw Error("Unknown XPathResult type.");
            }
            var f = 0;
            this.iterateNext = function() {
                if (4 != b && 5 != b) throw Error("iterateNext called with wrong result type");
                return f >= d.length ? null : d[f++]
            };
            this.snapshotItem = function(g) {
                if (6 != b && 7 != b) throw Error("snapshotItem called with wrong result type");
                return g >= d.length ||
                    0 > g ? null : d[g]
            }
        }
        O.ANY_TYPE = 0;
        O.NUMBER_TYPE = 1;
        O.STRING_TYPE = 2;
        O.BOOLEAN_TYPE = 3;
        O.UNORDERED_NODE_ITERATOR_TYPE = 4;
        O.ORDERED_NODE_ITERATOR_TYPE = 5;
        O.UNORDERED_NODE_SNAPSHOT_TYPE = 6;
        O.ORDERED_NODE_SNAPSHOT_TYPE = 7;
        O.ANY_UNORDERED_NODE_TYPE = 8;
        O.FIRST_ORDERED_NODE_TYPE = 9;

        function zc(a) {
            this.lookupNamespaceURI = vc(a)
        }

        function Ac(a, b) {
            a = a || aa;
            var c = a.Document && a.Document.prototype || a.document;
            if (!c.evaluate || b) a.XPathResult = O, c.evaluate = function(d, e, f, g) {
                return (new yc(d, f)).evaluate(e, g)
            }, c.createExpression = function(d, e) {
                return new yc(d, e)
            }, c.createNSResolver = function(d) {
                return new zc(d)
            }
        }
        ca("wgxpath.install", Ac);
        ca("wgxpath.install", Ac);
        var Bc = window;

        function P(a, b) {
            this.code = a;
            this.a = Q[a] || Cc;
            this.message = b || "";
            a = this.a.replace(/((?:^|\s+)[a-z])/g, function(c) {
                return c.toUpperCase().replace(/^[\s\xa0]+/g, "")
            });
            b = a.length - 5;
            if (0 > b || a.indexOf("Error", b) != b) a += "Error";
            this.name = a;
            a = Error(this.message);
            a.name = this.name;
            this.stack = a.stack || ""
        }
        k(P, Error);
        var Cc = "unknown error",
            Q = {
                15: "element not selectable",
                11: "element not visible"
            };
        Q[31] = Cc;
        Q[30] = Cc;
        Q[24] = "invalid cookie domain";
        Q[29] = "invalid element coordinates";
        Q[12] = "invalid element state";
        Q[32] = "invalid selector";
        Q[51] = "invalid selector";
        Q[52] = "invalid selector";
        Q[17] = "javascript error";
        Q[405] = "unsupported operation";
        Q[34] = "move target out of bounds";
        Q[27] = "no such alert";
        Q[7] = "no such element";
        Q[8] = "no such frame";
        Q[23] = "no such window";
        Q[28] = "script timeout";
        Q[33] = "session not created";
        Q[10] = "stale element reference";
        Q[21] = "timeout";
        Q[25] = "unable to set cookie";
        Q[26] = "unexpected alert open";
        Q[13] = Cc;
        Q[9] = "unknown command";
        var Dc = {
            C: function(a) {
                return !(!a.querySelectorAll || !a.querySelector)
            },
            o: function(a, b) {
                if (!a) throw new P(32, "No class name specified");
                a = Aa(a);
                if (-1 !== a.indexOf(" ")) throw new P(32, "Compound class names not permitted");
                if (Dc.C(b)) try {
                    return b.querySelector("." + a.replace(/\./g, "\\.")) || null
                } catch (c) {
                    throw new P(32, "An invalid or illegal class name was specified");
                }
                a = mb(eb(b), "*", a, b);
                return a.length ? a[0] : null
            },
            j: function(a, b) {
                if (!a) throw new P(32, "No class name specified");
                a = Aa(a);
                if (-1 !== a.indexOf(" ")) throw new P(32,
                    "Compound class names not permitted");
                if (Dc.C(b)) try {
                    return b.querySelectorAll("." + a.replace(/\./g, "\\."))
                } catch (c) {
                    throw new P(32, "An invalid or illegal class name was specified");
                }
                return mb(eb(b), "*", a, b)
            }
        };
        var Ec = Fa(),
            Fc = Ia() || r("iPod"),
            Gc = r("iPad"),
            Hc = r("Android") && !(Ga() || Fa() || r("Opera") || r("Silk")),
            Ic = Ga(),
            Jc = r("Safari") && !(Ga() || r("Coast") || r("Opera") || r("Edge") || r("Edg/") || r("OPR") || Fa() || r("Silk") || r("Android")) && !(Ia() || r("iPad") || r("iPod"));

        function Kc(a) {
            return (a = a.exec(q)) ? a[1] : ""
        }(function() {
            if (Ec) return Kc(/Firefox\/([0-9.]+)/);
            if (t || Ma || La) return Qa;
            if (Ic) return Ia() || r("iPad") || r("iPod") ? Kc(/CriOS\/([0-9.]+)/) : Kc(/Chrome\/([0-9.]+)/);
            if (Jc && !(Ia() || r("iPad") || r("iPod"))) return Kc(/Version\/([0-9.]+)/);
            if (Fc || Gc) {
                var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(q);
                if (a) return a[1] + "." + a[2]
            } else if (Hc) return (a = Kc(/Android\s+([0-9.]+)/)) ? a : Kc(/Version\/([0-9.]+)/);
            return ""
        })();
        var Lc = t && !(8 <= Number(w)),
            Mc = t && !(9 <= Number(w));
        var Nc = {
            o: function(a, b) {
                if (!ea(b.querySelector) && t && (t ? 0 <= Ba(w, 8) : Ua(8)) && !ha(b.querySelector)) throw Error("CSS selection is not supported");
                if (!a) throw new P(32, "No selector specified");
                a = Aa(a);
                try {
                    var c = b.querySelector(a)
                } catch (d) {
                    throw new P(32, "An invalid or illegal selector was specified");
                }
                return c && 1 == c.nodeType ? c : null
            },
            j: function(a, b) {
                if (!ea(b.querySelectorAll) && t && (t ? 0 <= Ba(w, 8) : Ua(8)) && !ha(b.querySelector)) throw Error("CSS selection is not supported");
                if (!a) throw new P(32, "No selector specified");
                a = Aa(a);
                try {
                    return b.querySelectorAll(a)
                } catch (c) {
                    throw new P(32, "An invalid or illegal selector was specified");
                }
            }
        };
        var Oc = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkgrey: "#a9a9a9",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkslategrey: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            grey: "#808080",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgray: "#d3d3d3",
            lightgreen: "#90ee90",
            lightgrey: "#d3d3d3",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370db",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#db7093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32"
        };
        var Pc = "backgroundColor borderTopColor borderRightColor borderBottomColor borderLeftColor color outlineColor".split(" "),
            Qc = /#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/,
            Rc = /^#(?:[0-9a-f]{3}){1,2}$/i,
            Sc = /^(?:rgba)?\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3}),\s?(0|1|0\.\d*)\)$/i,
            Tc = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;

        function Uc(a, b) {
            b = b.toLowerCase();
            return "style" == b ? Vc(a.style.cssText) : Lc && "value" == b && S(a, "INPUT") ? a.value : Mc && !0 === a[b] ? String(a.getAttribute(b)) : (a = a.getAttributeNode(b)) && a.specified ? a.value : null
        }
        var Wc = /[;]+(?=(?:(?:[^"]*"){2})*[^"]*$)(?=(?:(?:[^']*'){2})*[^']*$)(?=(?:[^()]*\([^()]*\))*[^()]*$)/;

        function Vc(a) {
            var b = [];
            l(a.split(Wc), function(c) {
                var d = c.indexOf(":");
                0 < d && (c = [c.slice(0, d), c.slice(d + 1)], 2 == c.length && b.push(c[0].toLowerCase(), ":", c[1], ";"))
            });
            b = b.join("");
            return b = ";" == b.charAt(b.length - 1) ? b : b + ";"
        }

        function S(a, b) {
            b && "string" !== typeof b && (b = b.toString());
            return a instanceof HTMLFormElement ? !!a && 1 == a.nodeType && (!b || "FORM" == b) : !!a && 1 == a.nodeType && (!b || a.tagName.toUpperCase() == b)
        };

        function Xc(a, b, c, d) {
            this.c = a;
            this.a = b;
            this.b = c;
            this.f = d
        }
        Xc.prototype.ceil = function() {
            this.c = Math.ceil(this.c);
            this.a = Math.ceil(this.a);
            this.b = Math.ceil(this.b);
            this.f = Math.ceil(this.f);
            return this
        };
        Xc.prototype.floor = function() {
            this.c = Math.floor(this.c);
            this.a = Math.floor(this.a);
            this.b = Math.floor(this.b);
            this.f = Math.floor(this.f);
            return this
        };
        Xc.prototype.round = function() {
            this.c = Math.round(this.c);
            this.a = Math.round(this.a);
            this.b = Math.round(this.b);
            this.f = Math.round(this.f);
            return this
        };

        function T(a, b, c, d) {
            this.a = a;
            this.b = b;
            this.width = c;
            this.height = d
        }
        T.prototype.ceil = function() {
            this.a = Math.ceil(this.a);
            this.b = Math.ceil(this.b);
            this.width = Math.ceil(this.width);
            this.height = Math.ceil(this.height);
            return this
        };
        T.prototype.floor = function() {
            this.a = Math.floor(this.a);
            this.b = Math.floor(this.b);
            this.width = Math.floor(this.width);
            this.height = Math.floor(this.height);
            return this
        };
        T.prototype.round = function() {
            this.a = Math.round(this.a);
            this.b = Math.round(this.b);
            this.width = Math.round(this.width);
            this.height = Math.round(this.height);
            return this
        };
        var Yc = "function" === typeof ShadowRoot;

        function Zc(a) {
            for (a = a.parentNode; a && 1 != a.nodeType && 9 != a.nodeType && 11 != a.nodeType;) a = a.parentNode;
            return S(a) ? a : null
        }

        function U(a, b) {
            b = Ha(b);
            if ("float" == b || "cssFloat" == b || "styleFloat" == b) b = Mc ? "styleFloat" : "cssFloat";
            a: {
                var c = b;
                var d = A(a);
                if (d.defaultView && d.defaultView.getComputedStyle && (d = d.defaultView.getComputedStyle(a, null))) {
                    c = d[c] || d.getPropertyValue(c) || "";
                    break a
                }
                c = ""
            }
            a = c || $c(a, b);
            if (null === a) a = null;
            else if (0 <= oa(Pc, b)) {
                b: {
                    var e = a.match(Sc);
                    if (e && (b = Number(e[1]), c = Number(e[2]), d = Number(e[3]), e = Number(e[4]), 0 <= b && 255 >= b && 0 <= c && 255 >= c && 0 <= d && 255 >= d && 0 <= e && 1 >= e)) {
                        b = [b, c, d, e];
                        break b
                    }
                    b = null
                }
                if (!b) b: {
                    if (d = a.match(Tc))
                        if (b =
                            Number(d[1]), c = Number(d[2]), d = Number(d[3]), 0 <= b && 255 >= b && 0 <= c && 255 >= c && 0 <= d && 255 >= d) {
                            b = [b, c, d, 1];
                            break b
                        } b = null
                }
                if (!b) b: {
                    b = a.toLowerCase();c = Oc[b.toLowerCase()];
                    if (!c && (c = "#" == b.charAt(0) ? b : "#" + b, 4 == c.length && (c = c.replace(Qc, "#$1$1$2$2$3$3")), !Rc.test(c))) {
                        b = null;
                        break b
                    }
                    b = [parseInt(c.substr(1, 2), 16), parseInt(c.substr(3, 2), 16), parseInt(c.substr(5, 2), 16), 1]
                }
                a = b ? "rgba(" + b.join(", ") + ")" : a
            }
            return a
        }

        function $c(a, b) {
            var c = a.currentStyle || a.style,
                d = c[b];
            void 0 === d && ea(c.getPropertyValue) && (d = c.getPropertyValue(b));
            return "inherit" != d ? void 0 !== d ? d : null : (a = Zc(a)) ? $c(a, b) : null
        }

        function ad(a, b, c) {
            function d(g) {
                var h = V(g);
                return 0 < h.height && 0 < h.width ? !0 : S(g, "PATH") && (0 < h.height || 0 < h.width) ? (g = U(g, "stroke-width"), !!g && 0 < parseInt(g, 10)) : "hidden" != U(g, "overflow") && sa(g.childNodes, function(n) {
                    return 3 == n.nodeType || S(n) && d(n)
                })
            }

            function e(g) {
                return bd(g) == W && ta(g.childNodes, function(h) {
                    return !S(h) || e(h) || !d(h)
                })
            }
            if (!S(a)) throw Error("Argument to isShown must be of type Element");
            if (S(a, "BODY")) return !0;
            if (S(a, "OPTION") || S(a, "OPTGROUP")) return a = lb(a, function(g) {
                    return S(g, "SELECT")
                }),
                !!a && ad(a, !0, c);
            var f = cd(a);
            if (f) return !!f.image && 0 < f.rect.width && 0 < f.rect.height && ad(f.image, b, c);
            if (S(a, "INPUT") && "hidden" == a.type.toLowerCase() || S(a, "NOSCRIPT")) return !1;
            f = U(a, "visibility");
            return "collapse" != f && "hidden" != f && c(a) && (b || 0 != dd(a)) && d(a) ? !e(a) : !1
        }

        function ed(a) {
            function b(c) {
                if (S(c) && "none" == U(c, "display")) return !1;
                var d;
                if ((d = c.parentNode) && d.shadowRoot && void 0 !== c.assignedSlot) d = c.assignedSlot ? c.assignedSlot.parentNode : null;
                else if (c.getDestinationInsertionPoints) {
                    var e = c.getDestinationInsertionPoints();
                    0 < e.length && (d = e[e.length - 1])
                }
                if (Yc && d instanceof ShadowRoot) {
                    if (d.host.shadowRoot && d.host.shadowRoot !== d) return !1;
                    d = d.host
                }
                return !d || 9 != d.nodeType && 11 != d.nodeType ? d && S(d, "DETAILS") && !d.open && !S(c, "SUMMARY") ? !1 : !!d && b(d) : !0
            }
            return ad(a, !1,
                b)
        }
        var W = "hidden";

        function bd(a) {
            function b(m) {
                function v(Ab) {
                    if (Ab == g) return !0;
                    var pc = U(Ab, "display");
                    return 0 == pc.lastIndexOf("inline", 0) || "contents" == pc || "absolute" == qc && "static" == U(Ab, "position") ? !1 : !0
                }
                var qc = U(m, "position");
                if ("fixed" == qc) return u = !0, m == g ? null : g;
                for (m = Zc(m); m && !v(m);) m = Zc(m);
                return m
            }

            function c(m) {
                var v = m;
                if ("visible" == n)
                    if (m == g && h) v = h;
                    else if (m == h) return {
                    x: "visible",
                    y: "visible"
                };
                v = {
                    x: U(v, "overflow-x"),
                    y: U(v, "overflow-y")
                };
                m == g && (v.x = "visible" == v.x ? "auto" : v.x, v.y = "visible" == v.y ? "auto" : v.y);
                return v
            }

            function d(m) {
                if (m == g) {
                    var v = (new fb(f)).a;
                    m = v.scrollingElement ? v.scrollingElement : Oa || "CSS1Compat" != v.compatMode ? v.body || v.documentElement : v.documentElement;
                    v = v.parentWindow || v.defaultView;
                    m = t && Ua("10") && v.pageYOffset != m.scrollTop ? new cb(m.scrollLeft, m.scrollTop) : new cb(v.pageXOffset || m.scrollLeft, v.pageYOffset || m.scrollTop)
                } else m = new cb(m.scrollLeft, m.scrollTop);
                return m
            }
            var e = fd(a),
                f = A(a),
                g = f.documentElement,
                h = f.body,
                n = U(g, "overflow"),
                u;
            for (a = b(a); a; a = b(a)) {
                var p = c(a);
                if ("visible" != p.x || "visible" !=
                    p.y) {
                    var G = V(a);
                    if (0 == G.width || 0 == G.height) return W;
                    var R = e.a < G.a,
                        fa = e.b < G.b;
                    if (R && "hidden" == p.x || fa && "hidden" == p.y) return W;
                    if (R && "visible" != p.x || fa && "visible" != p.y) {
                        R = d(a);
                        fa = e.b < G.b - R.y;
                        if (e.a < G.a - R.x && "visible" != p.x || fa && "visible" != p.x) return W;
                        e = bd(a);
                        return e == W ? W : "scroll"
                    }
                    R = e.f >= G.a + G.width;
                    G = e.c >= G.b + G.height;
                    if (R && "hidden" == p.x || G && "hidden" == p.y) return W;
                    if (R && "visible" != p.x || G && "visible" != p.y) {
                        if (u && (p = d(a), e.f >= g.scrollWidth - p.x || e.a >= g.scrollHeight - p.y)) return W;
                        e = bd(a);
                        return e == W ? W :
                            "scroll"
                    }
                }
            }
            return "none"
        }

        function V(a) {
            var b = cd(a);
            if (b) return b.rect;
            if (S(a, "HTML")) return a = A(a), a = ((a ? a.parentWindow || a.defaultView : window) || window).document, a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body, a = new db(a.clientWidth, a.clientHeight), new T(0, 0, a.width, a.height);
            try {
                var c = a.getBoundingClientRect()
            } catch (d) {
                return new T(0, 0, 0, 0)
            }
            b = new T(c.left, c.top, c.right - c.left, c.bottom - c.top);
            t && a.ownerDocument.body && (a = A(a), b.a -= a.documentElement.clientLeft + a.body.clientLeft, b.b -= a.documentElement.clientTop + a.body.clientTop);
            return b
        }

        function cd(a) {
            var b = S(a, "MAP");
            if (!b && !S(a, "AREA")) return null;
            var c = b ? a : S(a.parentNode, "MAP") ? a.parentNode : null,
                d = null,
                e = null;
            c && c.name && (d = Nc.o('*[usemap="#' + c.name + '"]', A(c))) && (e = V(d), b || "default" == a.shape.toLowerCase() || (a = gd(a), b = Math.min(Math.max(a.a, 0), e.width), c = Math.min(Math.max(a.b, 0), e.height), e = new T(b + e.a, c + e.b, Math.min(a.width, e.width - b), Math.min(a.height, e.height - c))));
            return {
                image: d,
                rect: e || new T(0, 0, 0, 0)
            }
        }

        function gd(a) {
            var b = a.shape.toLowerCase();
            a = a.coords.split(",");
            if ("rect" == b && 4 == a.length) {
                b = a[0];
                var c = a[1];
                return new T(b, c, a[2] - b, a[3] - c)
            }
            if ("circle" == b && 3 == a.length) return b = a[2], new T(a[0] - b, a[1] - b, 2 * b, 2 * b);
            if ("poly" == b && 2 < a.length) {
                b = a[0];
                c = a[1];
                for (var d = b, e = c, f = 2; f + 1 < a.length; f += 2) b = Math.min(b, a[f]), d = Math.max(d, a[f]), c = Math.min(c, a[f + 1]), e = Math.max(e, a[f + 1]);
                return new T(b, c, d - b, e - c)
            }
            return new T(0, 0, 0, 0)
        }

        function fd(a) {
            a = V(a);
            return new Xc(a.b, a.a + a.width, a.b + a.height, a.a)
        }

        function hd(a) {
            return a.replace(/^[^\S\xa0]+|[^\S\xa0]+$/g, "")
        }

        function id(a) {
            var b = [];
            Yc ? jd(a, b) : kd(a, b);
            a = qa(b, hd);
            return hd(a.join("\n")).replace(/\xa0/g, " ")
        }

        function ld(a, b, c) {
            if (S(a, "BR")) b.push("");
            else {
                var d = S(a, "TD"),
                    e = U(a, "display"),
                    f = !d && !(0 <= oa(md, e)),
                    g = void 0 !== a.previousElementSibling ? a.previousElementSibling : gb(a.previousSibling);
                g = g ? U(g, "display") : "";
                var h = U(a, "float") || U(a, "cssFloat") || U(a, "styleFloat");
                !f || "run-in" == g && "none" == h || /^[\s\xa0]*$/.test(b[b.length - 1] || "") || b.push("");
                var n = ed(a),
                    u = null,
                    p = null;
                n && (u = U(a, "white-space"), p = U(a, "text-transform"));
                l(a.childNodes, function(G) {
                    c(G, b, n, u, p)
                });
                a = b[b.length - 1] || "";
                !d && "table-cell" != e || !a ||
                    za(a) || (b[b.length - 1] += " ");
                f && "run-in" != e && !/^[\s\xa0]*$/.test(a) && b.push("")
            }
        }

        function kd(a, b) {
            ld(a, b, function(c, d, e, f, g) {
                3 == c.nodeType && e ? nd(c, d, f, g) : S(c) && kd(c, d)
            })
        }
        var md = "inline inline-block inline-table none table-cell table-column table-column-group".split(" ");

        function nd(a, b, c, d) {
            a = a.nodeValue.replace(/[\u200b\u200e\u200f]/g, "");
            a = a.replace(/(\r\n|\r|\n)/g, "\n");
            if ("normal" == c || "nowrap" == c) a = a.replace(/\n/g, " ");
            a = "pre" == c || "pre-wrap" == c ? a.replace(/[ \f\t\v\u2028\u2029]/g, "\u00a0") : a.replace(/[ \f\t\v\u2028\u2029]+/g, " ");
            "capitalize" == d ? a = a.replace(t ? /(^|\s|\b)(\S)/g : /(^|\s|\b)(\S)/g, function(e, f, g) {
                return f + g.toUpperCase()
            }) : "uppercase" == d ? a = a.toUpperCase() : "lowercase" == d && (a = a.toLowerCase());
            c = b.pop() || "";
            za(c) && 0 == a.lastIndexOf(" ", 0) && (a = a.substr(1));
            b.push(c + a)
        }

        function dd(a) {
            if (Mc) {
                if ("relative" == U(a, "position")) return 1;
                a = U(a, "filter");
                return (a = a.match(/^alpha\(opacity=(\d*)\)/) || a.match(/^progid:DXImageTransform.Microsoft.Alpha\(Opacity=(\d*)\)/)) ? Number(a[1]) / 100 : 1
            }
            return od(a)
        }

        function od(a) {
            var b = 1,
                c = U(a, "opacity");
            c && (b = Number(c));
            (a = Zc(a)) && (b *= od(a));
            return b
        }

        function pd(a, b, c, d, e) {
            if (3 == a.nodeType && c) nd(a, b, d, e);
            else if (S(a))
                if (S(a, "CONTENT") || S(a, "SLOT")) {
                    for (var f = a; f.parentNode;) f = f.parentNode;
                    f instanceof ShadowRoot ? (f = S(a, "CONTENT") ? a.getDistributedNodes() : a.assignedNodes(), l(0 < f.length ? f : a.childNodes, function(g) {
                        pd(g, b, c, d, e)
                    })) : jd(a, b)
                } else if (S(a, "SHADOW")) {
                for (f = a; f.parentNode;) f = f.parentNode;
                if (f instanceof ShadowRoot && (a = f))
                    for (a = a.olderShadowRoot; a;) l(a.childNodes, function(g) {
                        pd(g, b, c, d, e)
                    }), a = a.olderShadowRoot
            } else jd(a, b)
        }

        function jd(a, b) {
            a.shadowRoot && l(a.shadowRoot.childNodes, function(c) {
                pd(c, b, !0, null, null)
            });
            ld(a, b, function(c, d, e, f, g) {
                var h = null;
                1 == c.nodeType ? h = c : 3 == c.nodeType && (h = c);
                null != h && (null != h.assignedSlot || h.getDestinationInsertionPoints && 0 < h.getDestinationInsertionPoints().length) || pd(c, d, e, f, g)
            })
        };
        var qd = {
            C: function(a, b) {
                return !(!a.querySelectorAll || !a.querySelector) && !/^\d.*/.test(b)
            },
            o: function(a, b) {
                var c = eb(b),
                    d = "string" === typeof a ? c.a.getElementById(a) : a;
                return d ? Uc(d, "id") == a && b != d && hb(b, d) ? d : ua(mb(c, "*"), function(e) {
                    return Uc(e, "id") == a && b != e && hb(b, e)
                }) : null
            },
            j: function(a, b) {
                if (!a) return [];
                if (qd.C(b, a)) try {
                    return b.querySelectorAll("#" + qd.T(a))
                } catch (c) {
                    return []
                }
                b = mb(eb(b), "*", null, b);
                return pa(b, function(c) {
                    return Uc(c, "id") == a
                })
            },
            T: function(a) {
                return a.replace(/([\s'"\\#.:;,!?+<>=~*^$|%&@`{}\-\/\[\]\(\)])/g,
                    "\\$1")
            }
        };
        var X = {},
            rd = {};
        X.N = function(a, b, c) {
            try {
                var d = Nc.j("a", b)
            } catch (e) {
                d = mb(eb(b), "A", null, b)
            }
            return ua(d, function(e) {
                e = id(e);
                e = e.replace(/^[\s]+|[\s]+$/g, "");
                return c && -1 != e.indexOf(a) || e == a
            })
        };
        X.K = function(a, b, c) {
            try {
                var d = Nc.j("a", b)
            } catch (e) {
                d = mb(eb(b), "A", null, b)
            }
            return pa(d, function(e) {
                e = id(e);
                e = e.replace(/^[\s]+|[\s]+$/g, "");
                return c && -1 != e.indexOf(a) || e == a
            })
        };
        X.o = function(a, b) {
            return X.N(a, b, !1)
        };
        X.j = function(a, b) {
            return X.K(a, b, !1)
        };
        rd.o = function(a, b) {
            return X.N(a, b, !0)
        };
        rd.j = function(a, b) {
            return X.K(a, b, !0)
        };
        var Y = {
            F: function(a, b) {
                return function(c) {
                    var d = Y.u(a);
                    d = V(d);
                    c = V(c);
                    return b.call(null, d, c)
                }
            },
            R: function(a) {
                return Y.F(a, function(b, c) {
                    return c.b + c.height < b.b
                })
            },
            S: function(a) {
                return Y.F(a, function(b, c) {
                    return b.b + b.height < c.b
                })
            },
            V: function(a) {
                return Y.F(a, function(b, c) {
                    return c.a + c.width < b.a
                })
            },
            aa: function(a) {
                return Y.F(a, function(b, c) {
                    return b.a + b.width < c.a
                })
            },
            W: function(a, b) {
                var c;
                b ? c = b : "number" == typeof a.distance && (c = a.distance);
                c || (c = 50);
                return function(d) {
                    var e = Y.u(a);
                    if (e === d) return !1;
                    e = V(e);
                    d = V(d);
                    e = new T(e.a - c, e.b - c, e.width + 2 * c, e.height + 2 * c);
                    return e.a <= d.a + d.width && d.a <= e.a + e.width && e.b <= d.b + d.height && d.b <= e.b + e.height
                }
            },
            u: function(a) {
                if (ha(a) && 1 == a.nodeType) return a;
                if (ea(a)) return Y.u(a.call(null));
                if (ha(a)) {
                    var b;
                    a: {
                        if (b = sd(a)) {
                            var c = td[b];
                            if (c && ea(c.o)) {
                                b = c.o(a[b], Bc.document);
                                break a
                            }
                        }
                        throw new P(61, "Unsupported locator strategy: " + b);
                    }
                    if (!b) throw new P(7, "No element has been found by " + JSON.stringify(a));
                    return b
                }
                throw new P(61, "Selector is of wrong type: " + JSON.stringify(a));
            }
        };
        Y.P = {
            left: Y.V,
            right: Y.aa,
            above: Y.R,
            below: Y.S,
            near: Y.W
        };
        Y.O = {
            left: Y.u,
            right: Y.u,
            above: Y.u,
            below: Y.u,
            near: Y.u
        };
        Y.U = function(a, b) {
            var c = [];
            l(a, function(e) {
                e && ta(b, function(f) {
                    var g = f.kind,
                        h = Y.P[g];
                    if (!h) throw new P(61, "Cannot find filter suitable for " + g);
                    return h.apply(null, f.args)(e)
                }, null) && c.push(e)
            }, null);
            a = b[b.length - 1];
            var d = Y.O[a ? a.kind : "unknown"];
            return d ? (a = d.apply(null, a.args)) ? Y.ba(a, c) : c : c
        };
        Y.ba = function(a, b) {
            function c(f) {
                f = V(f);
                return Math.sqrt(Math.pow(d - (f.a + Math.max(1, f.width) / 2), 2) + Math.pow(e - (f.b + Math.max(1, f.height) / 2), 2))
            }
            a = V(a);
            var d = a.a + Math.max(1, a.width) / 2,
                e = a.b + Math.max(1, a.height) / 2;
            xa(b, function(f, g) {
                return c(f) - c(g)
            });
            return b
        };
        Y.o = function(a, b) {
            a = Y.j(a, b);
            return 0 == a.length ? null : a[0]
        };
        Y.j = function(a, b) {
            if (!a.hasOwnProperty("root") || !a.hasOwnProperty("filters")) throw new P(61, "Locator not suitable for relative locators: " + JSON.stringify(a));
            var c = a.filters,
                d = da(c);
            if ("array" != d && ("object" != d || "number" != typeof c.length)) throw new P(61, "Targets should be an array: " + JSON.stringify(a));
            var e;
            S(a.root) ? e = [a.root] : e = ud(a.root, b);
            return 0 == e.length ? [] : Y.U(e, a.filters)
        };
        var vd = {
            o: function(a, b) {
                if ("" === a) throw new P(32, 'Unable to locate an element with the tagName ""');
                return b.getElementsByTagName(a)[0] || null
            },
            j: function(a, b) {
                if ("" === a) throw new P(32, 'Unable to locate an element with the tagName ""');
                return b.getElementsByTagName(a)
            }
        };
        var Z = {};
        Z.I = function() {
            var a = {
                da: "http://www.w3.org/2000/svg"
            };
            return function(b) {
                return a[b] || null
            }
        }();
        Z.s = function(a, b, c) {
            var d = A(a);
            if (!d.documentElement) return null;
            (t || Hc) && Ac(d ? d.parentWindow || d.defaultView : window);
            try {
                var e = d.createNSResolver ? d.createNSResolver(d.documentElement) : Z.I;
                if (t && !Ua(7)) return d.evaluate.call(d, b, a, e, c, null);
                if (!t || 9 <= Number(w)) {
                    for (var f = {}, g = d.getElementsByTagName("*"), h = 0; h < g.length; ++h) {
                        var n = g[h],
                            u = n.namespaceURI;
                        if (u && !f[u]) {
                            var p = n.lookupPrefix(u);
                            if (!p) {
                                var G = u.match(".*/(\\w+)/?$");
                                p = G ? G[1] : "xhtml"
                            }
                            f[u] = p
                        }
                    }
                    var R = {},
                        fa;
                    for (fa in f) R[f[fa]] = fa;
                    e = function(m) {
                        return R[m] ||
                            null
                    }
                }
                try {
                    return d.evaluate(b, a, e, c, null)
                } catch (m) {
                    if ("TypeError" === m.name) return e = d.createNSResolver ? d.createNSResolver(d.documentElement) : Z.I, d.evaluate(b, a, e, c, null);
                    throw m;
                }
            } catch (m) {
                if (!Na || "NS_ERROR_ILLEGAL_VALUE" != m.name) throw new P(32, "Unable to locate an element with the xpath expression " + b + " because of the following error:\n" + m);
            }
        };
        Z.J = function(a, b) {
            if (!a || 1 != a.nodeType) throw new P(32, 'The result of the xpath expression "' + b + '" is: ' + a + ". It should be an element.");
        };
        Z.o = function(a, b) {
            var c = function() {
                var d = Z.s(b, a, 9);
                return d ? d.singleNodeValue || null : b.selectSingleNode ? (d = A(b), d.setProperty && d.setProperty("SelectionLanguage", "XPath"), b.selectSingleNode(a)) : null
            }();
            null === c || Z.J(c, a);
            return c
        };
        Z.j = function(a, b) {
            var c = function() {
                var d = Z.s(b, a, 7);
                if (d) {
                    for (var e = d.snapshotLength, f = [], g = 0; g < e; ++g) f.push(d.snapshotItem(g));
                    return f
                }
                return b.selectNodes ? (d = A(b), d.setProperty && d.setProperty("SelectionLanguage", "XPath"), b.selectNodes(a)) : []
            }();
            l(c, function(d) {
                Z.J(d, a)
            });
            return c
        };
        var td = {
            className: Dc,
            "class name": Dc,
            css: Nc,
            "css selector": Nc,
            relative: Y,
            id: qd,
            linkText: X,
            "link text": X,
            name: {
                o: function(a, b) {
                    b = mb(eb(b), "*", null, b);
                    return ua(b, function(c) {
                        return Uc(c, "name") == a
                    })
                },
                j: function(a, b) {
                    b = mb(eb(b), "*", null, b);
                    return pa(b, function(c) {
                        return Uc(c, "name") == a
                    })
                }
            },
            partialLinkText: rd,
            "partial link text": rd,
            tagName: vd,
            "tag name": vd,
            xpath: Z
        };

        function sd(a) {
            for (var b in a)
                if (a.hasOwnProperty(b)) return b;
            return null
        }

        function ud(a, b) {
            var c = sd(a);
            if (c) {
                var d = td[c];
                if (d && ea(d.j)) return d.j(a[c], b || Bc.document)
            }
            throw new P(61, "Unsupported locator strategy: " + c);
        };
        ca("_", ud);;
        return this._.apply(null, arguments);
    }).apply({
        navigator: typeof window != 'undefined' ? window.navigator : null,
        document: typeof window != 'undefined' ? window.document : null
    }, arguments);
}).apply(null, arguments);