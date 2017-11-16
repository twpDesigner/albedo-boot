// START CUSTOM REVEAL.JS INTEGRATION
(function () {
    if (typeof window.addEventListener === 'function') {
        var hljs_nodes = document.querySelectorAll('pre code');

        for (var i = 0, len = hljs_nodes.length; i < len; i++) {
            var element = hljs_nodes[i];

            // trim whitespace if data-trim attribute is present
            if (element.hasAttribute('data-trim') && typeof element.innerHTML.trim === 'function') {
                element.innerHTML = element.innerHTML.trim();
            }

            // Now escape html unless prevented by author
            if (!element.hasAttribute('data-noescape')) {
                element.innerHTML = element.innerHTML.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            }

            // re-highlight when focus is lost (for edited code)
            element.addEventListener('focusout', function (event) {
                hljs.highlightBlock(event.currentTarget);
            }, false);
        }
    }
})();
// END CUSTOM REVEAL.JS INTEGRATION

// highlight.js build includes support for:
// Bash, C#, C++, CSS, Diff, HTML, XML, HTTP, Ini, JSON, Java, JavaScript, PHP, Perl, Python, Ruby, SQL, Clojure, GLSL, Lua, Scala, CoffeeScript, Go, Objective C, ActionScript, Markdown

var hljs = new function () {
    function l(o) {
        return o.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
    }

    function b(p) {
        for (var o = p.firstChild; o; o = o.nextSibling) {
            if (o.nodeName == "CODE") {
                return o
            }
            if (!(o.nodeType == 3 && o.nodeValue.match(/\s+/))) {
                break
            }
        }
    }

    function h(p, o) {
        return Array.prototype.map.call(p.childNodes, function (q) {
            if (q.nodeType == 3) {
                return o ? q.nodeValue.replace(/\n/g, "") : q.nodeValue
            }
            if (q.nodeName == "BR") {
                return "\n"
            }
            return h(q, o)
        }).join("")
    }

    function a(q) {
        var p = (q.className + " " + q.parentNode.className).split(/\s+/);
        p = p.map(function (r) {
            return r.replace(/^language-/, "")
        });
        for (var o = 0; o < p.length; o++) {
            if (e[p[o]] || p[o] == "no-highlight") {
                return p[o]
            }
        }
    }

    function c(q) {
        var o = [];
        (function p(r, s) {
            for (var t = r.firstChild; t; t = t.nextSibling) {
                if (t.nodeType == 3) {
                    s += t.nodeValue.length
                } else {
                    if (t.nodeName == "BR") {
                        s += 1
                    } else {
                        if (t.nodeType == 1) {
                            o.push({event: "start", offset: s, node: t});
                            s = p(t, s);
                            o.push({event: "stop", offset: s, node: t})
                        }
                    }
                }
            }
            return s
        })(q, 0);
        return o
    }

    function j(x, v, w) {
        var p = 0;
        var y = "";
        var r = [];

        function t() {
            if (x.length && v.length) {
                if (x[0].offset != v[0].offset) {
                    return (x[0].offset < v[0].offset) ? x : v
                } else {
                    return v[0].event == "start" ? x : v
                }
            } else {
                return x.length ? x : v
            }
        }

        function s(A) {
            function z(B) {
                return " " + B.nodeName + '="' + l(B.value) + '"'
            }

            return "<" + A.nodeName + Array.prototype.map.call(A.attributes, z).join("") + ">"
        }

        while (x.length || v.length) {
            var u = t().splice(0, 1)[0];
            y += l(w.substr(p, u.offset - p));
            p = u.offset;
            if (u.event == "start") {
                y += s(u.node);
                r.push(u.node)
            } else {
                if (u.event == "stop") {
                    var o, q = r.length;
                    do {
                        q--;
                        o = r[q];
                        y += ("</" + o.nodeName.toLowerCase() + ">")
                    } while (o != u.node);
                    r.splice(q, 1);
                    while (q < r.length) {
                        y += s(r[q]);
                        q++
                    }
                }
            }
        }
        return y + l(w.substr(p))
    }

    function f(q) {
        function o(s, r) {
            return RegExp(s, "m" + (q.cI ? "i" : "") + (r ? "g" : ""))
        }

        function p(y, w) {
            if (y.compiled) {
                return
            }
            y.compiled = true;
            var s = [];
            if (y.k) {
                var r = {};

                function z(A, t) {
                    t.split(" ").forEach(function (B) {
                        var C = B.split("|");
                        r[C[0]] = [A, C[1] ? Number(C[1]) : 1];
                        s.push(C[0])
                    })
                }

                y.lR = o(y.l || hljs.IR, true);
                if (typeof y.k == "string") {
                    z("keyword", y.k)
                } else {
                    for (var x in y.k) {
                        if (!y.k.hasOwnProperty(x)) {
                            continue
                        }
                        z(x, y.k[x])
                    }
                }
                y.k = r
            }
            if (w) {
                if (y.bWK) {
                    y.b = "\\b(" + s.join("|") + ")\\s"
                }
                y.bR = o(y.b ? y.b : "\\B|\\b");
                if (!y.e && !y.eW) {
                    y.e = "\\B|\\b"
                }
                if (y.e) {
                    y.eR = o(y.e)
                }
                y.tE = y.e || "";
                if (y.eW && w.tE) {
                    y.tE += (y.e ? "|" : "") + w.tE
                }
            }
            if (y.i) {
                y.iR = o(y.i)
            }
            if (y.r === undefined) {
                y.r = 1
            }
            if (!y.c) {
                y.c = []
            }
            for (var v = 0; v < y.c.length; v++) {
                if (y.c[v] == "self") {
                    y.c[v] = y
                }
                p(y.c[v], y)
            }
            if (y.starts) {
                p(y.starts, w)
            }
            var u = [];
            for (var v = 0; v < y.c.length; v++) {
                u.push(y.c[v].b)
            }
            if (y.tE) {
                u.push(y.tE)
            }
            if (y.i) {
                u.push(y.i)
            }
            y.t = u.length ? o(u.join("|"), true) : {
                exec: function (t) {
                    return null
                }
            }
        }

        p(q)
    }

    function d(D, E) {
        function o(r, M) {
            for (var L = 0; L < M.c.length; L++) {
                var K = M.c[L].bR.exec(r);
                if (K && K.index == 0) {
                    return M.c[L]
                }
            }
        }

        function s(K, r) {
            if (K.e && K.eR.test(r)) {
                return K
            }
            if (K.eW) {
                return s(K.parent, r)
            }
        }

        function t(r, K) {
            return K.i && K.iR.test(r)
        }

        function y(L, r) {
            var K = F.cI ? r[0].toLowerCase() : r[0];
            return L.k.hasOwnProperty(K) && L.k[K]
        }

        function G() {
            var K = l(w);
            if (!A.k) {
                return K
            }
            var r = "";
            var N = 0;
            A.lR.lastIndex = 0;
            var L = A.lR.exec(K);
            while (L) {
                r += K.substr(N, L.index - N);
                var M = y(A, L);
                if (M) {
                    v += M[1];
                    r += '<span class="' + M[0] + '">' + L[0] + "</span>"
                } else {
                    r += L[0]
                }
                N = A.lR.lastIndex;
                L = A.lR.exec(K)
            }
            return r + K.substr(N)
        }

        function z() {
            if (A.sL && !e[A.sL]) {
                return l(w)
            }
            var r = A.sL ? d(A.sL, w) : g(w);
            if (A.r > 0) {
                v += r.keyword_count;
                B += r.r
            }
            return '<span class="' + r.language + '">' + r.value + "</span>"
        }

        function J() {
            return A.sL !== undefined ? z() : G()
        }

        function I(L, r) {
            var K = L.cN ? '<span class="' + L.cN + '">' : "";
            if (L.rB) {
                x += K;
                w = ""
            } else {
                if (L.eB) {
                    x += l(r) + K;
                    w = ""
                } else {
                    x += K;
                    w = r
                }
            }
            A = Object.create(L, {parent: {value: A}});
            B += L.r
        }

        function C(K, r) {
            w += K;
            if (r === undefined) {
                x += J();
                return 0
            }
            var L = o(r, A);
            if (L) {
                x += J();
                I(L, r);
                return L.rB ? 0 : r.length
            }
            var M = s(A, r);
            if (M) {
                if (!(M.rE || M.eE)) {
                    w += r
                }
                x += J();
                do {
                    if (A.cN) {
                        x += "</span>"
                    }
                    A = A.parent
                } while (A != M.parent);
                if (M.eE) {
                    x += l(r)
                }
                w = "";
                if (M.starts) {
                    I(M.starts, "")
                }
                return M.rE ? 0 : r.length
            }
            if (t(r, A)) {
                throw"Illegal"
            }
            w += r;
            return r.length || 1
        }

        var F = e[D];
        f(F);
        var A = F;
        var w = "";
        var B = 0;
        var v = 0;
        var x = "";
        try {
            var u, q, p = 0;
            while (true) {
                A.t.lastIndex = p;
                u = A.t.exec(E);
                if (!u) {
                    break
                }
                q = C(E.substr(p, u.index - p), u[0]);
                p = u.index + q
            }
            C(E.substr(p));
            return {r: B, keyword_count: v, value: x, language: D}
        } catch (H) {
            if (H == "Illegal") {
                return {r: 0, keyword_count: 0, value: l(E)}
            } else {
                throw H
            }
        }
    }

    function g(s) {
        var o = {keyword_count: 0, r: 0, value: l(s)};
        var q = o;
        for (var p in e) {
            if (!e.hasOwnProperty(p)) {
                continue
            }
            var r = d(p, s);
            r.language = p;
            if (r.keyword_count + r.r > q.keyword_count + q.r) {
                q = r
            }
            if (r.keyword_count + r.r > o.keyword_count + o.r) {
                q = o;
                o = r
            }
        }
        if (q.language) {
            o.second_best = q
        }
        return o
    }

    function i(q, p, o) {
        if (p) {
            q = q.replace(/^((<[^>]+>|\t)+)/gm, function (r, v, u, t) {
                return v.replace(/\t/g, p)
            })
        }
        if (o) {
            q = q.replace(/\n/g, "<br>")
        }
        return q
    }

    function m(r, u, p) {
        var v = h(r, p);
        var t = a(r);
        if (t == "no-highlight") {
            return
        }
        var w = t ? d(t, v) : g(v);
        t = w.language;
        var o = c(r);
        if (o.length) {
            var q = document.createElement("pre");
            q.innerHTML = w.value;
            w.value = j(o, c(q), v)
        }
        w.value = i(w.value, u, p);
        var s = r.className;
        if (!s.match("(\\s|^)(language-)?" + t + "(\\s|$)")) {
            s = s ? (s + " " + t) : t
        }
        r.innerHTML = w.value;
        r.className = s;
        r.result = {language: t, kw: w.keyword_count, re: w.r};
        if (w.second_best) {
            r.second_best = {language: w.second_best.language, kw: w.second_best.keyword_count, re: w.second_best.r}
        }
    }

    function n() {
        if (n.called) {
            return
        }
        n.called = true;
        Array.prototype.map.call(document.getElementsByTagName("pre"), b).filter(Boolean).forEach(function (o) {
            m(o, hljs.tabReplace)
        })
    }

    function k() {
        window.addEventListener("DOMContentLoaded", n, false);
        window.addEventListener("load", n, false)
    }

    var e = {};
    this.LANGUAGES = e;
    this.highlight = d;
    this.highlightAuto = g;
    this.fixMarkup = i;
    this.highlightBlock = m;
    this.initHighlighting = n;
    this.initHighlightingOnLoad = k;
    this.IR = "[a-zA-Z][a-zA-Z0-9_]*";
    this.UIR = "[a-zA-Z_][a-zA-Z0-9_]*";
    this.NR = "\\b\\d+(\\.\\d+)?";
    this.CNR = "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
    this.BNR = "\\b(0b[01]+)";
    this.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
    this.BE = {b: "\\\\[\\s\\S]", r: 0};
    this.ASM = {cN: "string", b: "'", e: "'", i: "\\n", c: [this.BE], r: 0};
    this.QSM = {cN: "string", b: '"', e: '"', i: "\\n", c: [this.BE], r: 0};
    this.CLCM = {cN: "comment", b: "//", e: "$"};
    this.CBLCLM = {cN: "comment", b: "/\\*", e: "\\*/"};
    this.HCM = {cN: "comment", b: "#", e: "$"};
    this.NM = {cN: "number", b: this.NR, r: 0};
    this.CNM = {cN: "number", b: this.CNR, r: 0};
    this.BNM = {cN: "number", b: this.BNR, r: 0};
    this.inherit = function (q, r) {
        var o = {};
        for (var p in q) {
            o[p] = q[p]
        }
        if (r) {
            for (var p in r) {
                o[p] = r[p]
            }
        }
        return o
    }
}();
hljs.LANGUAGES.bash = function (a) {
    var g = "true false";
    var e = "if then else elif fi for break continue while in do done echo exit return set declare";
    var c = {cN: "variable", b: "\\$[a-zA-Z0-9_#]+"};
    var b = {cN: "variable", b: "\\${([^}]|\\\\})+}"};
    var h = {cN: "string", b: '"', e: '"', i: "\\n", c: [a.BE, c, b], r: 0};
    var d = {cN: "string", b: "'", e: "'", c: [{b: "''"}], r: 0};
    var f = {cN: "test_condition", b: "", e: "", c: [h, d, c, b], k: {literal: g}, r: 0};
    return {
        k: {keyword: e, literal: g},
        c: [{cN: "shebang", b: "(#!\\/bin\\/bash)|(#!\\/bin\\/sh)", r: 10}, c, b, a.HCM, h, d, a.inherit(f, {
            b: "\\[ ",
            e: " \\]",
            r: 0
        }), a.inherit(f, {b: "\\[\\[ ", e: " \\]\\]"})]
    }
}(hljs);
hljs.LANGUAGES.cs = function (a) {
    return {
        k: "abstract as base bool break byte case catch char checked class const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long namespace new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while ascending descending from get group into join let orderby partial select set value var where yield",
        c: [{
            cN: "comment",
            b: "///",
            e: "$",
            rB: true,
            c: [{cN: "xmlDocTag", b: "///|<!--|-->"}, {cN: "xmlDocTag", b: "</?", e: ">"}]
        }, a.CLCM, a.CBLCLM, {
            cN: "preprocessor",
            b: "#",
            e: "$",
            k: "if else elif endif define undef warning error line region endregion pragma checksum"
        }, {cN: "string", b: '@"', e: '"', c: [{b: '""'}]}, a.ASM, a.QSM, a.CNM]
    }
}(hljs);
hljs.LANGUAGES.ruby = function (e) {
    var a = "[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?";
    var j = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";
    var g = {keyword: "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include"};
    var c = {cN: "yardoctag", b: "@[A-Za-z]+"};
    var k = [{cN: "comment", b: "#", e: "$", c: [c]}, {
        cN: "comment",
        b: "^\\=begin",
        e: "^\\=end",
        c: [c],
        r: 10
    }, {cN: "comment", b: "^__END__", e: "\\n$"}];
    var d = {cN: "subst", b: "#\\{", e: "}", l: a, k: g};
    var i = [e.BE, d];
    var b = [{cN: "string", b: "'", e: "'", c: i, r: 0}, {cN: "string", b: '"', e: '"', c: i, r: 0}, {
        cN: "string",
        b: "%[qw]?\\(",
        e: "\\)",
        c: i
    }, {cN: "string", b: "%[qw]?\\[", e: "\\]", c: i}, {cN: "string", b: "%[qw]?{", e: "}", c: i}, {
        cN: "string",
        b: "%[qw]?<",
        e: ">",
        c: i,
        r: 10
    }, {cN: "string", b: "%[qw]?/", e: "/", c: i, r: 10}, {
        cN: "string",
        b: "%[qw]?%",
        e: "%",
        c: i,
        r: 10
    }, {cN: "string", b: "%[qw]?-", e: "-", c: i, r: 10}, {cN: "string", b: "%[qw]?\\|", e: "\\|", c: i, r: 10}];
    var h = {
        cN: "function",
        bWK: true,
        e: " |$|;",
        k: "def",
        c: [{cN: "title", b: j, l: a, k: g}, {cN: "params", b: "\\(", e: "\\)", l: a, k: g}].concat(k)
    };
    var f = k.concat(b.concat([{
        cN: "class",
        bWK: true,
        e: "$|;",
        k: "class module",
        c: [{cN: "title", b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?", r: 0}, {
            cN: "inheritance",
            b: "<\\s*",
            c: [{cN: "parent", b: "(" + e.IR + "::)?" + e.IR}]
        }].concat(k)
    }, h, {cN: "constant", b: "(::)?(\\b[A-Z]\\w*(::)?)+", r: 0}, {
        cN: "symbol",
        b: ":",
        c: b.concat([{b: j}]),
        r: 0
    }, {cN: "symbol", b: a + ":", r: 0}, {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0
    }, {cN: "number", b: "\\?\\w"}, {cN: "variable", b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"}, {
        b: "(" + e.RSR + ")\\s*",
        c: k.concat([{cN: "regexp", b: "/", e: "/[a-z]*", i: "\\n", c: [e.BE, d]}]),
        r: 0
    }]));
    d.c = f;
    h.c[1].c = f;
    return {l: a, k: g, c: f}
}(hljs);
hljs.LANGUAGES.diff = function (a) {
    return {
        c: [{cN: "chunk", b: "^\\@\\@ +\\-\\d+,\\d+ +\\+\\d+,\\d+ +\\@\\@$", r: 10}, {
            cN: "chunk",
            b: "^\\*\\*\\* +\\d+,\\d+ +\\*\\*\\*\\*$",
            r: 10
        }, {cN: "chunk", b: "^\\-\\-\\- +\\d+,\\d+ +\\-\\-\\-\\-$", r: 10}, {
            cN: "header",
            b: "Index: ",
            e: "$"
        }, {cN: "header", b: "=====", e: "=====$"}, {cN: "header", b: "^\\-\\-\\-", e: "$"}, {
            cN: "header",
            b: "^\\*{3} ",
            e: "$"
        }, {cN: "header", b: "^\\+\\+\\+", e: "$"}, {cN: "header", b: "\\*{5}", e: "\\*{5}$"}, {
            cN: "addition",
            b: "^\\+",
            e: "$"
        }, {cN: "deletion", b: "^\\-", e: "$"}, {cN: "change", b: "^\\!", e: "$"}]
    }
}(hljs);
hljs.LANGUAGES.javascript = function (a) {
    return {
        k: {
            keyword: "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const",
            literal: "true false null undefined NaN Infinity"
        },
        c: [a.ASM, a.QSM, a.CLCM, a.CBLCLM, a.CNM, {
            b: "(" + a.RSR + "|\\b(case|return|throw)\\b)\\s*",
            k: "return throw case",
            c: [a.CLCM, a.CBLCLM, {cN: "regexp", b: "/", e: "/[gim]*", i: "\\n", c: [{b: "\\\\/"}]}, {
                b: "<",
                e: ">;",
                sL: "xml"
            }],
            r: 0
        }, {
            cN: "function",
            bWK: true,
            e: "{",
            k: "function",
            c: [{cN: "title", b: "[A-Za-z$_][0-9A-Za-z$_]*"}, {
                cN: "params",
                b: "\\(",
                e: "\\)",
                c: [a.CLCM, a.CBLCLM],
                i: "[\"'\\(]"
            }],
            i: "\\[|%"
        }]
    }
}(hljs);
hljs.LANGUAGES.glsl = function (a) {
    return {
        k: {
            keyword: "atomic_uint attribute bool break bvec2 bvec3 bvec4 case centroid coherent const continue default discard dmat2 dmat2x2 dmat2x3 dmat2x4 dmat3 dmat3x2 dmat3x3 dmat3x4 dmat4 dmat4x2 dmat4x3 dmat4x4 do double dvec2 dvec3 dvec4 else flat float for highp if iimage1D iimage1DArray iimage2D iimage2DArray iimage2DMS iimage2DMSArray iimage2DRect iimage3D iimageBuffer iimageCube iimageCubeArray image1D image1DArray image2D image2DArray image2DMS image2DMSArray image2DRect image3D imageBuffer imageCube imageCubeArray in inout int invariant isampler1D isampler1DArray isampler2D isampler2DArray isampler2DMS isampler2DMSArray isampler2DRect isampler3D isamplerBuffer isamplerCube isamplerCubeArray ivec2 ivec3 ivec4 layout lowp mat2 mat2x2 mat2x3 mat2x4 mat3 mat3x2 mat3x3 mat3x4 mat4 mat4x2 mat4x3 mat4x4 mediump noperspective out patch precision readonly restrict return sample sampler1D sampler1DArray sampler1DArrayShadow sampler1DShadow sampler2D sampler2DArray sampler2DArrayShadow sampler2DMS sampler2DMSArray sampler2DRect sampler2DRectShadow sampler2DShadow sampler3D samplerBuffer samplerCube samplerCubeArray samplerCubeArrayShadow samplerCubeShadow smooth struct subroutine switch uimage1D uimage1DArray uimage2D uimage2DArray uimage2DMS uimage2DMSArray uimage2DRect uimage3D uimageBuffer uimageCube uimageCubeArray uint uniform usampler1D usampler1DArray usampler2D usampler2DArray usampler2DMS usampler2DMSArray usampler2DRect usampler3D usamplerBuffer usamplerCube usamplerCubeArray uvec2 uvec3 uvec4 varying vec2 vec3 vec4 void volatile while writeonly",
            built_in: "gl_BackColor gl_BackLightModelProduct gl_BackLightProduct gl_BackMaterial gl_BackSecondaryColor gl_ClipDistance gl_ClipPlane gl_ClipVertex gl_Color gl_DepthRange gl_EyePlaneQ gl_EyePlaneR gl_EyePlaneS gl_EyePlaneT gl_Fog gl_FogCoord gl_FogFragCoord gl_FragColor gl_FragCoord gl_FragData gl_FragDepth gl_FrontColor gl_FrontFacing gl_FrontLightModelProduct gl_FrontLightProduct gl_FrontMaterial gl_FrontSecondaryColor gl_InstanceID gl_InvocationID gl_Layer gl_LightModel gl_LightSource gl_MaxAtomicCounterBindings gl_MaxAtomicCounterBufferSize gl_MaxClipDistances gl_MaxClipPlanes gl_MaxCombinedAtomicCounterBuffers gl_MaxCombinedAtomicCounters gl_MaxCombinedImageUniforms gl_MaxCombinedImageUnitsAndFragmentOutputs gl_MaxCombinedTextureImageUnits gl_MaxDrawBuffers gl_MaxFragmentAtomicCounterBuffers gl_MaxFragmentAtomicCounters gl_MaxFragmentImageUniforms gl_MaxFragmentInputComponents gl_MaxFragmentUniformComponents gl_MaxFragmentUniformVectors gl_MaxGeometryAtomicCounterBuffers gl_MaxGeometryAtomicCounters gl_MaxGeometryImageUniforms gl_MaxGeometryInputComponents gl_MaxGeometryOutputComponents gl_MaxGeometryOutputVertices gl_MaxGeometryTextureImageUnits gl_MaxGeometryTotalOutputComponents gl_MaxGeometryUniformComponents gl_MaxGeometryVaryingComponents gl_MaxImageSamples gl_MaxImageUnits gl_MaxLights gl_MaxPatchVertices gl_MaxProgramTexelOffset gl_MaxTessControlAtomicCounterBuffers gl_MaxTessControlAtomicCounters gl_MaxTessControlImageUniforms gl_MaxTessControlInputComponents gl_MaxTessControlOutputComponents gl_MaxTessControlTextureImageUnits gl_MaxTessControlTotalOutputComponents gl_MaxTessControlUniformComponents gl_MaxTessEvaluationAtomicCounterBuffers gl_MaxTessEvaluationAtomicCounters gl_MaxTessEvaluationImageUniforms gl_MaxTessEvaluationInputComponents gl_MaxTessEvaluationOutputComponents gl_MaxTessEvaluationTextureImageUnits gl_MaxTessEvaluationUniformComponents gl_MaxTessGenLevel gl_MaxTessPatchComponents gl_MaxTextureCoords gl_MaxTextureImageUnits gl_MaxTextureUnits gl_MaxVaryingComponents gl_MaxVaryingFloats gl_MaxVaryingVectors gl_MaxVertexAtomicCounterBuffers gl_MaxVertexAtomicCounters gl_MaxVertexAttribs gl_MaxVertexImageUniforms gl_MaxVertexOutputComponents gl_MaxVertexTextureImageUnits gl_MaxVertexUniformComponents gl_MaxVertexUniformVectors gl_MaxViewports gl_MinProgramTexelOffsetgl_ModelViewMatrix gl_ModelViewMatrixInverse gl_ModelViewMatrixInverseTranspose gl_ModelViewMatrixTranspose gl_ModelViewProjectionMatrix gl_ModelViewProjectionMatrixInverse gl_ModelViewProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixTranspose gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_Normal gl_NormalMatrix gl_NormalScale gl_ObjectPlaneQ gl_ObjectPlaneR gl_ObjectPlaneS gl_ObjectPlaneT gl_PatchVerticesIn gl_PerVertex gl_Point gl_PointCoord gl_PointSize gl_Position gl_PrimitiveID gl_PrimitiveIDIn gl_ProjectionMatrix gl_ProjectionMatrixInverse gl_ProjectionMatrixInverseTranspose gl_ProjectionMatrixTranspose gl_SampleID gl_SampleMask gl_SampleMaskIn gl_SamplePosition gl_SecondaryColor gl_TessCoord gl_TessLevelInner gl_TessLevelOuter gl_TexCoord gl_TextureEnvColor gl_TextureMatrixInverseTranspose gl_TextureMatrixTranspose gl_Vertex gl_VertexID gl_ViewportIndex gl_in gl_out EmitStreamVertex EmitVertex EndPrimitive EndStreamPrimitive abs acos acosh all any asin asinh atan atanh atomicCounter atomicCounterDecrement atomicCounterIncrement barrier bitCount bitfieldExtract bitfieldInsert bitfieldReverse ceil clamp cos cosh cross dFdx dFdy degrees determinant distance dot equal exp exp2 faceforward findLSB findMSB floatBitsToInt floatBitsToUint floor fma fract frexp ftransform fwidth greaterThan greaterThanEqual imageAtomicAdd imageAtomicAnd imageAtomicCompSwap imageAtomicExchange imageAtomicMax imageAtomicMin imageAtomicOr imageAtomicXor imageLoad imageStore imulExtended intBitsToFloat interpolateAtCentroid interpolateAtOffset interpolateAtSample inverse inversesqrt isinf isnan ldexp length lessThan lessThanEqual log log2 matrixCompMult max memoryBarrier min mix mod modf noise1 noise2 noise3 noise4 normalize not notEqual outerProduct packDouble2x32 packHalf2x16 packSnorm2x16 packSnorm4x8 packUnorm2x16 packUnorm4x8 pow radians reflect refract round roundEven shadow1D shadow1DLod shadow1DProj shadow1DProjLod shadow2D shadow2DLod shadow2DProj shadow2DProjLod sign sin sinh smoothstep sqrt step tan tanh texelFetch texelFetchOffset texture texture1D texture1DLod texture1DProj texture1DProjLod texture2D texture2DLod texture2DProj texture2DProjLod texture3D texture3DLod texture3DProj texture3DProjLod textureCube textureCubeLod textureGather textureGatherOffset textureGatherOffsets textureGrad textureGradOffset textureLod textureLodOffset textureOffset textureProj textureProjGrad textureProjGradOffset textureProjLod textureProjLodOffset textureProjOffset textureQueryLod textureSize transpose trunc uaddCarry uintBitsToFloat umulExtended unpackDouble2x32 unpackHalf2x16 unpackSnorm2x16 unpackSnorm4x8 unpackUnorm2x16 unpackUnorm4x8 usubBorrow gl_TextureMatrix gl_TextureMatrixInverse",
            literal: "true false"
        }, i: '"', c: [a.CLCM, a.CBLCLM, a.CNM, {cN: "preprocessor", b: "#", e: "$"}]
    }
}(hljs);
hljs.LANGUAGES.lua = function (b) {
    var a = "\\[=*\\[";
    var e = "\\]=*\\]";
    var c = {b: a, e: e, c: ["self"]};
    var d = [{cN: "comment", b: "--(?!" + a + ")", e: "$"}, {cN: "comment", b: "--" + a, e: e, c: [c], r: 10}];
    return {
        l: b.UIR,
        k: {
            keyword: "and break do else elseif end false for if in local nil not or repeat return then true until while",
            built_in: "_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table"
        },
        c: d.concat([{
            cN: "function",
            bWK: true,
            e: "\\)",
            k: "function",
            c: [{cN: "title", b: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"}, {
                cN: "params",
                b: "\\(",
                eW: true,
                c: d
            }].concat(d)
        }, b.CNM, b.ASM, b.QSM, {cN: "string", b: a, e: e, c: [c], r: 10}])
    }
}(hljs);
hljs.LANGUAGES.xml = function (a) {
    var c = "[A-Za-z0-9\\._:-]+";
    var b = {
        eW: true,
        c: [{cN: "attribute", b: c, r: 0}, {b: '="', rB: true, e: '"', c: [{cN: "value", b: '"', eW: true}]}, {
            b: "='",
            rB: true,
            e: "'",
            c: [{cN: "value", b: "'", eW: true}]
        }, {b: "=", c: [{cN: "value", b: "[^\\s/>]+"}]}]
    };
    return {
        cI: true,
        c: [{cN: "pi", b: "<\\?", e: "\\?>", r: 10}, {
            cN: "doctype",
            b: "<!DOCTYPE",
            e: ">",
            r: 10,
            c: [{b: "\\[", e: "\\]"}]
        }, {cN: "comment", b: "<!--", e: "-->", r: 10}, {
            cN: "cdata",
            b: "<\\!\\[CDATA\\[",
            e: "\\]\\]>",
            r: 10
        }, {
            cN: "tag",
            b: "<style(?=\\s|>|$)",
            e: ">",
            k: {title: "style"},
            c: [b],
            starts: {e: "</style>", rE: true, sL: "css"}
        }, {
            cN: "tag",
            b: "<script(?=\\s|>|$)",
            e: ">",
            k: {title: "script"},
            c: [b],
            starts: {e: "<\/script>", rE: true, sL: "javascript"}
        }, {b: "<%", e: "%>", sL: "vbscript"}, {cN: "tag", b: "</?", e: "/?>", c: [{cN: "title", b: "[^ />]+"}, b]}]
    }
}(hljs);
hljs.LANGUAGES.markdown = function (a) {
    return {
        c: [{cN: "header", b: "^#{1,3}", e: "$"}, {cN: "header", b: "^.+?\\n[=-]{2,}$"}, {
            b: "<",
            e: ">",
            sL: "xml",
            r: 0
        }, {cN: "bullet", b: "^([*+-]|(\\d+\\.))\\s+"}, {cN: "strong", b: "[*_]{2}.+?[*_]{2}"}, {
            cN: "emphasis",
            b: "\\*.+?\\*"
        }, {cN: "emphasis", b: "_.+?_", r: 0}, {cN: "blockquote", b: "^>\\s+", e: "$"}, {
            cN: "code",
            b: "`.+?`"
        }, {cN: "code", b: "^    ", e: "$", r: 0}, {cN: "horizontal_rule", b: "^-{3,}", e: "$"}, {
            b: "\\[.+?\\]\\(.+?\\)",
            rB: true,
            c: [{cN: "link_label", b: "\\[.+\\]"}, {cN: "link_url", b: "\\(", e: "\\)", eB: true, eE: true}]
        }]
    }
}(hljs);
hljs.LANGUAGES.css = function (a) {
    var b = {cN: "function", b: a.IR + "\\(", e: "\\)", c: [a.NM, a.ASM, a.QSM]};
    return {
        cI: true,
        i: "[=/|']",
        c: [a.CBLCLM, {cN: "id", b: "\\#[A-Za-z0-9_-]+"}, {
            cN: "class",
            b: "\\.[A-Za-z0-9_-]+",
            r: 0
        }, {cN: "attr_selector", b: "\\[", e: "\\]", i: "$"}, {
            cN: "pseudo",
            b: ":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"
        }, {cN: "at_rule", b: "@(font-face|page)", l: "[a-z-]+", k: "font-face page"}, {
            cN: "at_rule",
            b: "@",
            e: "[{;]",
            eE: true,
            k: "import page media charset",
            c: [b, a.ASM, a.QSM, a.NM]
        }, {cN: "tag", b: a.IR, r: 0}, {
            cN: "rules",
            b: "{",
            e: "}",
            i: "[^\\s]",
            r: 0,
            c: [a.CBLCLM, {
                cN: "rule",
                b: "[^\\s]",
                rB: true,
                e: ";",
                eW: true,
                c: [{
                    cN: "attribute",
                    b: "[A-Z\\_\\.\\-]+",
                    e: ":",
                    eE: true,
                    i: "[^\\s]",
                    starts: {
                        cN: "value",
                        eW: true,
                        eE: true,
                        c: [b, a.NM, a.QSM, a.ASM, a.CBLCLM, {cN: "hexcolor", b: "\\#[0-9A-F]+"}, {
                            cN: "important",
                            b: "!important"
                        }]
                    }
                }]
            }]
        }]
    }
}(hljs);
hljs.LANGUAGES.http = function (a) {
    return {
        i: "\\S",
        c: [{cN: "status", b: "^HTTP/[0-9\\.]+", e: "$", c: [{cN: "number", b: "\\b\\d{3}\\b"}]}, {
            cN: "request",
            b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",
            rB: true,
            e: "$",
            c: [{cN: "string", b: " ", e: " ", eB: true, eE: true}]
        }, {
            cN: "attribute",
            b: "^\\w",
            e: ": ",
            eE: true,
            i: "\\n|\\s|=",
            starts: {cN: "string", e: "$"}
        }, {b: "\\n\\n", starts: {sL: "", eW: true}}]
    }
}(hljs);
hljs.LANGUAGES.java = function (a) {
    return {
        k: "false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws",
        c: [{
            cN: "javadoc",
            b: "/\\*\\*",
            e: "\\*/",
            c: [{cN: "javadoctag", b: "@[A-Za-z]+"}],
            r: 10
        }, a.CLCM, a.CBLCLM, a.ASM, a.QSM, {
            cN: "class",
            bWK: true,
            e: "{",
            k: "class interface",
            i: ":",
            c: [{bWK: true, k: "extends implements", r: 10}, {cN: "title", b: a.UIR}]
        }, a.CNM, {cN: "annotation", b: "@[A-Za-z]+"}]
    }
}(hljs);
hljs.LANGUAGES.php = function (a) {
    var e = {cN: "variable", b: "\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*"};
    var b = [a.inherit(a.ASM, {i: null}), a.inherit(a.QSM, {i: null}), {
        cN: "string",
        b: 'b"',
        e: '"',
        c: [a.BE]
    }, {cN: "string", b: "b'", e: "'", c: [a.BE]}];
    var c = [a.BNM, a.CNM];
    var d = {cN: "title", b: a.UIR};
    return {
        cI: true,
        k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return implements parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception php_user_filter default die require __FUNCTION__ enddeclare final try this switch continue endfor endif declare unset true false namespace trait goto instanceof insteadof __DIR__ __NAMESPACE__ __halt_compiler",
        c: [a.CLCM, a.HCM, {
            cN: "comment",
            b: "/\\*",
            e: "\\*/",
            c: [{cN: "phpdoc", b: "\\s@[A-Za-z]+"}]
        }, {cN: "comment", eB: true, b: "__halt_compiler.+?;", eW: true}, {
            cN: "string",
            b: "<<<['\"]?\\w+['\"]?$",
            e: "^\\w+;",
            c: [a.BE]
        }, {cN: "preprocessor", b: "<\\?php", r: 10}, {cN: "preprocessor", b: "\\?>"}, e, {
            cN: "function",
            bWK: true,
            e: "{",
            k: "function",
            i: "\\$|\\[|%",
            c: [d, {cN: "params", b: "\\(", e: "\\)", c: ["self", e, a.CBLCLM].concat(b).concat(c)}]
        }, {
            cN: "class",
            bWK: true,
            e: "{",
            k: "class",
            i: "[:\\(\\$]",
            c: [{bWK: true, eW: true, k: "extends", c: [d]}, d]
        }, {b: "=>"}].concat(b).concat(c)
    }
}(hljs);
hljs.LANGUAGES.python = function (a) {
    var f = {cN: "prompt", b: "^(>>>|\\.\\.\\.) "};
    var c = [{cN: "string", b: "(u|b)?r?'''", e: "'''", c: [f], r: 10}, {
        cN: "string",
        b: '(u|b)?r?"""',
        e: '"""',
        c: [f],
        r: 10
    }, {cN: "string", b: "(u|r|ur)'", e: "'", c: [a.BE], r: 10}, {
        cN: "string",
        b: '(u|r|ur)"',
        e: '"',
        c: [a.BE],
        r: 10
    }, {cN: "string", b: "(b|br)'", e: "'", c: [a.BE]}, {
        cN: "string",
        b: '(b|br)"',
        e: '"',
        c: [a.BE]
    }].concat([a.ASM, a.QSM]);
    var e = {cN: "title", b: a.UIR};
    var d = {cN: "params", b: "\\(", e: "\\)", c: ["self", a.CNM, f].concat(c)};
    var b = {bWK: true, e: ":", i: "[${=;\\n]", c: [e, d], r: 10};
    return {
        k: {
            keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10",
            built_in: "None True False Ellipsis NotImplemented"
        },
        i: "(</|->|\\?)",
        c: c.concat([f, a.HCM, a.inherit(b, {cN: "function", k: "def"}), a.inherit(b, {
            cN: "class",
            k: "class"
        }), a.CNM, {cN: "decorator", b: "@", e: "$"}, {b: "\\b(print|exec)\\("}])
    }
}(hljs);
hljs.LANGUAGES.actionscript = function (a) {
    var d = "[a-zA-Z_$][a-zA-Z0-9_$]*";
    var c = "([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)";
    var e = {cN: "rest_arg", b: "[.]{3}", e: d, r: 10};
    var b = {cN: "title", b: d};
    return {
        k: {
            keyword: "as break case catch class const continue default delete do dynamic each else extends final finally for function get if implements import in include instanceof interface internal is namespace native new override package private protected public return set static super switch this throw try typeof use var void while with",
            literal: "true false null undefined"
        },
        c: [a.ASM, a.QSM, a.CLCM, a.CBLCLM, a.CNM, {
            cN: "package",
            bWK: true,
            e: "{",
            k: "package",
            c: [b]
        }, {
            cN: "class",
            bWK: true,
            e: "{",
            k: "class interface",
            c: [{bWK: true, k: "extends implements"}, b]
        }, {cN: "preprocessor", bWK: true, e: ";", k: "import include"}, {
            cN: "function",
            bWK: true,
            e: "[{;]",
            k: "function",
            i: "\\S",
            c: [b, {cN: "params", b: "\\(", e: "\\)", c: [a.ASM, a.QSM, a.CLCM, a.CBLCLM, e]}, {
                cN: "type",
                b: ":",
                e: c,
                r: 10
            }]
        }]
    }
}(hljs);
hljs.LANGUAGES.sql = function (a) {
    return {
        cI: true,
        c: [{
            cN: "operator",
            b: "(begin|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant)\\b(?!:)",
            e: ";",
            eW: true,
            k: {
                keyword: "all partial global month current_timestamp using go revoke smallint indicator end-exec disconnect zone with character assertion to add current_user usage input local alter match collate real then rollback get read timestamp session_user not integer bit unique day minute desc insert execute like ilike|2 level decimal drop continue isolation found where constraints domain right national some module transaction relative second connect escape close system_user for deferred section cast current sqlstate allocate intersect deallocate numeric public preserve full goto initially asc no key output collation group by union session both last language constraint column of space foreign deferrable prior connection unknown action commit view or first into float year primary cascaded except restrict set references names table outer open select size are rows from prepare distinct leading create only next inner authorization schema corresponding option declare precision immediate else timezone_minute external varying translation true case exception join hour default double scroll value cursor descriptor values dec fetch procedure delete and false int is describe char as at in varchar null trailing any absolute current_time end grant privileges when cross check write current_date pad begin temporary exec time update catalog user sql date on identity timezone_hour natural whenever interval work order cascade diagnostics nchar having left call do handler load replace truncate start lock show pragma exists number",
                aggregate: "count sum min max avg"
            },
            c: [{cN: "string", b: "'", e: "'", c: [a.BE, {b: "''"}], r: 0}, {
                cN: "string",
                b: '"',
                e: '"',
                c: [a.BE, {b: '""'}],
                r: 0
            }, {cN: "string", b: "`", e: "`", c: [a.BE]}, a.CNM]
        }, a.CBLCLM, {cN: "comment", b: "--", e: "$"}]
    }
}(hljs);
hljs.LANGUAGES.ini = function (a) {
    return {
        cI: true,
        i: "[^\\s]",
        c: [{cN: "comment", b: ";", e: "$"}, {cN: "title", b: "^\\[", e: "\\]"}, {
            cN: "setting",
            b: "^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",
            e: "$",
            c: [{cN: "value", eW: true, k: "on off true false yes no", c: [a.QSM, a.NM]}]
        }]
    }
}(hljs);
hljs.LANGUAGES.perl = function (e) {
    var a = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when";
    var d = {cN: "subst", b: "[$@]\\{", e: "\\}", k: a, r: 10};
    var b = {cN: "variable", b: "\\$\\d"};
    var i = {cN: "variable", b: "[\\$\\%\\@\\*](\\^\\w\\b|#\\w+(\\:\\:\\w+)*|[^\\s\\w{]|{\\w+}|\\w+(\\:\\:\\w*)*)"};
    var f = [e.BE, d, b, i];
    var h = {b: "->", c: [{b: e.IR}, {b: "{", e: "}"}]};
    var g = {cN: "comment", b: "^(__END__|__DATA__)", e: "\\n$", r: 5};
    var c = [b, i, e.HCM, g, {cN: "comment", b: "^\\=\\w", e: "\\=cut", eW: true}, h, {
        cN: "string",
        b: "q[qwxr]?\\s*\\(",
        e: "\\)",
        c: f,
        r: 5
    }, {cN: "string", b: "q[qwxr]?\\s*\\[", e: "\\]", c: f, r: 5}, {
        cN: "string",
        b: "q[qwxr]?\\s*\\{",
        e: "\\}",
        c: f,
        r: 5
    }, {cN: "string", b: "q[qwxr]?\\s*\\|", e: "\\|", c: f, r: 5}, {
        cN: "string",
        b: "q[qwxr]?\\s*\\<",
        e: "\\>",
        c: f,
        r: 5
    }, {cN: "string", b: "qw\\s+q", e: "q", c: f, r: 5}, {cN: "string", b: "'", e: "'", c: [e.BE], r: 0}, {
        cN: "string",
        b: '"',
        e: '"',
        c: f,
        r: 0
    }, {cN: "string", b: "`", e: "`", c: [e.BE]}, {cN: "string", b: "{\\w+}", r: 0}, {
        cN: "string",
        b: "-?\\w+\\s*\\=\\>",
        r: 0
    }, {
        cN: "number",
        b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
        r: 0
    }, {
        b: "(" + e.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
        k: "split return print reverse grep",
        r: 0,
        c: [e.HCM, g, {cN: "regexp", b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*", r: 10}, {
            cN: "regexp",
            b: "(m|qr)?/",
            e: "/[a-z]*",
            c: [e.BE],
            r: 0
        }]
    }, {cN: "sub", bWK: true, e: "(\\s*\\(.*?\\))?[;{]", k: "sub", r: 5}, {cN: "operator", b: "-\\w\\b", r: 0}];
    d.c = c;
    h.c[1].c = c;
    return {k: a, c: c}
}(hljs);
hljs.LANGUAGES.scala = function (a) {
    var c = {cN: "annotation", b: "@[A-Za-z]+"};
    var b = {cN: "string", b: 'u?r?"""', e: '"""', r: 10};
    return {
        k: "type yield lazy override def with val var false true sealed abstract private trait object null if for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws",
        c: [{
            cN: "javadoc",
            b: "/\\*\\*",
            e: "\\*/",
            c: [{cN: "javadoctag", b: "@[A-Za-z]+"}],
            r: 10
        }, a.CLCM, a.CBLCLM, a.ASM, a.QSM, b, {
            cN: "class",
            b: "((case )?class |object |trait )",
            e: "({|$)",
            i: ":",
            k: "case class trait object",
            c: [{bWK: true, k: "extends with", r: 10}, {cN: "title", b: a.UIR}, {
                cN: "params",
                b: "\\(",
                e: "\\)",
                c: [a.ASM, a.QSM, b, c]
            }]
        }, a.CNM, c]
    }
}(hljs);
hljs.LANGUAGES.objectivec = function (a) {
    var b = {
        keyword: "int float while private char catch export sizeof typedef const struct for union unsigned long volatile static protected bool mutable if public do return goto void enum else break extern class asm case short default double throw register explicit signed typename try this switch continue wchar_t inline readonly assign property protocol self synchronized end synthesize id optional required implementation nonatomic interface super unichar finally dynamic IBOutlet IBAction selector strong weak readonly",
        literal: "false true FALSE TRUE nil YES NO NULL",
        built_in: "NSString NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection class UIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
    };
    return {
        k: b,
        i: "</",
        c: [a.CLCM, a.CBLCLM, a.CNM, a.QSM, {
            cN: "string",
            b: "'",
            e: "[^\\\\]'",
            i: "[^\\\\][^']"
        }, {
            cN: "preprocessor",
            b: "#import",
            e: "$",
            c: [{cN: "title", b: '"', e: '"'}, {cN: "title", b: "<", e: ">"}]
        }, {cN: "preprocessor", b: "#", e: "$"}, {
            cN: "class",
            bWK: true,
            e: "({|$)",
            k: "interface class protocol implementation",
            c: [{cN: "id", b: a.UIR}]
        }, {cN: "variable", b: "\\." + a.UIR}]
    }
}(hljs);
hljs.LANGUAGES.coffeescript = function (c) {
    var b = {
        keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
        literal: "true false null undefined yes no on off ",
        reserved: "case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf"
    };
    var a = "[A-Za-z$_][0-9A-Za-z$_]*";
    var e = {cN: "title", b: a};
    var d = {cN: "subst", b: "#\\{", e: "}", k: b, c: [c.BNM, c.CNM]};
    return {
        k: b,
        c: [c.BNM, c.CNM, c.ASM, {cN: "string", b: '"""', e: '"""', c: [c.BE, d]}, {
            cN: "string",
            b: '"',
            e: '"',
            c: [c.BE, d],
            r: 0
        }, {cN: "comment", b: "###", e: "###"}, c.HCM, {cN: "regexp", b: "///", e: "///", c: [c.HCM]}, {
            cN: "regexp",
            b: "//[gim]*"
        }, {cN: "regexp", b: "/\\S(\\\\.|[^\\n])*/[gim]*"}, {
            b: "`",
            e: "`",
            eB: true,
            eE: true,
            sL: "javascript"
        }, {
            cN: "function",
            b: a + "\\s*=\\s*(\\(.+\\))?\\s*[-=]>",
            rB: true,
            c: [e, {cN: "params", b: "\\(", e: "\\)"}]
        }, {
            cN: "class",
            bWK: true,
            k: "class",
            e: "$",
            i: ":",
            c: [{bWK: true, k: "extends", eW: true, i: ":", c: [e]}, e]
        }, {cN: "property", b: "@" + a}]
    }
}(hljs);
hljs.LANGUAGES.json = function (a) {
    var e = {literal: "true false null"};
    var d = [a.QSM, a.CNM];
    var c = {cN: "value", e: ",", eW: true, eE: true, c: d, k: e};
    var b = {
        b: "{",
        e: "}",
        c: [{cN: "attribute", b: '\\s*"', e: '"\\s*:\\s*', eB: true, eE: true, c: [a.BE], i: "\\n", starts: c}],
        i: "\\S"
    };
    var f = {b: "\\[", e: "\\]", c: [a.inherit(c, {cN: null})], i: "\\S"};
    d.splice(d.length, 0, b, f);
    return {c: d, k: e, i: "\\S"}
}(hljs);
hljs.LANGUAGES.cpp = function (a) {
    var b = {
        keyword: "false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long throw volatile static protected bool template mutable if public friend do return goto auto void enum else break new extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex",
        built_in: "std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr"
    };
    return {
        k: b,
        i: "</",
        c: [a.CLCM, a.CBLCLM, a.QSM, {cN: "string", b: "'\\\\?.", e: "'", i: "."}, {
            cN: "number",
            b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
        }, a.CNM, {cN: "preprocessor", b: "#", e: "$"}, {
            cN: "stl_container",
            b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
            e: ">",
            k: b,
            r: 10,
            c: ["self"]
        }]
    }
}(hljs);
hljs.LANGUAGES.clojure = function (l) {
    var e = {built_in: "def cond apply if-not if-let if not not= = &lt; < > &lt;= <= >= == + / * - rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit defmacro defn defn- macroexpand macroexpand-1 for doseq dosync dotimes and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import intern refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! import use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if throw printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time ns assert re-find re-groups rand-int rand mod locking assert-valid-fdecl alias namespace resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! memfn to-array future future-call into-array aset gen-class reduce merge map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize"};
    var f = "[a-zA-Z_0-9\\!\\.\\?\\-\\+\\*\\/\\<\\=\\>\\&\\#\\$';]+";
    var a = "[\\s:\\(\\{]+\\d+(\\.\\d+)?";
    var d = {cN: "number", b: a, r: 0};
    var j = {cN: "string", b: '"', e: '"', c: [l.BE], r: 0};
    var o = {cN: "comment", b: ";", e: "$", r: 0};
    var n = {cN: "collection", b: "[\\[\\{]", e: "[\\]\\}]"};
    var c = {cN: "comment", b: "\\^" + f};
    var b = {cN: "comment", b: "\\^\\{", e: "\\}"};
    var h = {cN: "attribute", b: "[:]" + f};
    var m = {cN: "list", b: "\\(", e: "\\)", r: 0};
    var g = {eW: true, eE: true, k: {literal: "true false nil"}, r: 0};
    var i = {k: e, l: f, cN: "title", b: f, starts: g};
    m.c = [{cN: "comment", b: "comment"}, i];
    g.c = [m, j, c, b, o, h, n, d];
    n.c = [m, j, c, o, h, n, d];
    return {i: "\\S", c: [o, m]}
}(hljs);
hljs.LANGUAGES.go = function (a) {
    var b = {
        keyword: "break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer",
        constant: "true false iota nil",
        typename: "bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",
        built_in: "append cap close complex copy imag len make new panic print println real recover delete"
    };
    return {
        k: b,
        i: "</",
        c: [a.CLCM, a.CBLCLM, a.QSM, {cN: "string", b: "'", e: "[^\\\\]'", r: 0}, {
            cN: "string",
            b: "`",
            e: "`"
        }, {cN: "number", b: "[^a-zA-Z_0-9](\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s)(\\+|\\-)?\\d+)?", r: 0}, a.CNM]
    }
}(hljs);