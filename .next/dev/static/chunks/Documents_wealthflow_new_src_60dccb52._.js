(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/wealthflow_new/src/content/site.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "site",
    ()=>site
]);
const site = {
    name: "WealthFlow",
    adsenseEnabled: false,
    adsenseClient: "ca-pub-xxxxxxxxxxxx",
    domain: "https://wealthflow.com",
    tagline: "Smarter money decisions, made simple.",
    description: "Finance guides, calculators, and practical insights to help you save smarter, invest better, and plan long-term.",
    language: "en",
    ogImage: "/images/og-default.png",
    nav: [
        {
            label: "Calculators",
            href: "/calculators"
        },
        {
            label: "Guides",
            href: "/guides"
        },
        {
            label: "Topics",
            href: "/topics"
        },
        {
            label: "Blog",
            href: "/blog"
        },
        {
            label: "Search",
            href: "/search"
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/wealthflow_new/src/components/AdSlot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdSlot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/wealthflow_new/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/wealthflow_new/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/wealthflow_new/src/content/site.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const widthClass = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-3xl",
    full: "max-w-none"
};
function AdSlot({ label = "Advertisement", className = "", maxWidth = "full", inArticle = false, client, slot }) {
    _s();
    // ✅ BEFORE ADSENSE APPROVAL → HIDE COMPLETELY
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["site"].adsenseEnabled) return null;
    const uid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AdSlot.useMemo[uid]": ()=>`ad-${Math.random().toString(36).slice(2)}`
    }["AdSlot.useMemo[uid]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdSlot.useEffect": ()=>{
            if (!client || !slot) return;
            try {
                // @ts-ignore
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch  {}
        }
    }["AdSlot.useEffect"], [
        client,
        slot
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: [
            "w-full mx-auto rounded-3xl border bg-white/60 backdrop-blur",
            widthClass[maxWidth],
            inArticle ? "my-8" : "",
            className
        ].join(" "),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 pt-3 text-[11px] uppercase tracking-wider text-neutral-500",
                children: label
            }, void 0, false, {
                fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 pb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ins", {
                    id: uid,
                    className: "adsbygoogle block",
                    style: {
                        display: "block"
                    },
                    "data-ad-client": client,
                    "data-ad-slot": slot,
                    "data-ad-format": "auto",
                    "data-full-width-responsive": "true"
                }, void 0, false, {
                    fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
        lineNumber: 37,
        columnNumber: 10
    }, this);
}
_s(AdSlot, "3xVhR5slBa7QKJzrHKsO5efDX80=");
_c = AdSlot;
var _c;
__turbopack_context__.k.register(_c, "AdSlot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/wealthflow_new/src/components/TableOfContents.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TableOfContents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/wealthflow_new/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/wealthflow_new/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/wealthflow_new/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/wealthflow_new/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function TableOfContents(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "a791883a75bb90753fa1b72af0bd92f1c4dadbd65354f30cc91cf69dec0aac59") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a791883a75bb90753fa1b72af0bd92f1c4dadbd65354f30cc91cf69dec0aac59";
    }
    const { items } = t0;
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(items[0]?.id ?? null);
    let t1;
    if ($[1] !== items) {
        t1 = items.map(_TableOfContentsItemsMap);
        $[1] = items;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const ids = t1;
    let t2;
    let t3;
    if ($[3] !== ids) {
        t2 = ({
            "TableOfContents[useEffect()]": ()=>{
                if (!ids.length) {
                    return;
                }
                const els = ids.map(_TableOfContentsUseEffectIdsMap).filter(Boolean);
                if (!els.length) {
                    return;
                }
                const io = new IntersectionObserver((entries)=>{
                    const visible = entries.filter(_TableOfContentsUseEffectAnonymousEntriesFilter).sort(_TableOfContentsUseEffectAnonymousAnonymous)[0];
                    if (visible?.target?.id) {
                        setActiveId(visible.target.id);
                    }
                }, {
                    rootMargin: "-20% 0px -70% 0px",
                    threshold: [
                        0.1,
                        0.25,
                        0.5
                    ]
                });
                els.forEach({
                    "TableOfContents[useEffect() > els.forEach()]": (el)=>io.observe(el)
                }["TableOfContents[useEffect() > els.forEach()]"]);
                return ()=>io.disconnect();
            }
        })["TableOfContents[useEffect()]"];
        t3 = [
            ids
        ];
        $[3] = ids;
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    if (!items.length) {
        return null;
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm font-semibold text-neutral-900",
            children: "On this page"
        }, void 0, false, {
            fileName: "[project]/Documents/wealthflow_new/src/components/TableOfContents.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== activeId || $[8] !== items) {
        let t6;
        if ($[10] !== activeId) {
            t6 = ({
                "TableOfContents[items.map()]": (it)=>{
                    const isActive = it.id === activeId;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `#${it.id}`,
                        className: [
                            "block rounded-lg px-2 py-1 text-sm transition",
                            it.level === 3 ? "pl-6" : "pl-2",
                            isActive ? "bg-neutral-900 text-white" : "text-neutral-700 hover:bg-neutral-100"
                        ].join(" "),
                        children: it.text
                    }, it.id, false, {
                        fileName: "[project]/Documents/wealthflow_new/src/components/TableOfContents.tsx",
                        lineNumber: 81,
                        columnNumber: 18
                    }, this);
                }
            })["TableOfContents[items.map()]"];
            $[10] = activeId;
            $[11] = t6;
        } else {
            t6 = $[11];
        }
        t5 = items.map(t6);
        $[7] = activeId;
        $[8] = items;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[12] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "hidden lg:block",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-24 rounded-2xl border bg-white/70 p-5 backdrop-blur",
                children: [
                    t4,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "mt-4 space-y-1",
                        children: t5
                    }, void 0, false, {
                        fileName: "[project]/Documents/wealthflow_new/src/components/TableOfContents.tsx",
                        lineNumber: 98,
                        columnNumber: 129
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/wealthflow_new/src/components/TableOfContents.tsx",
                lineNumber: 98,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/wealthflow_new/src/components/TableOfContents.tsx",
            lineNumber: 98,
            columnNumber: 10
        }, this);
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    return t6;
}
_s(TableOfContents, "Y7btIJkaXTILarWgSBkyy6r/vhU=");
_c = TableOfContents;
function _TableOfContentsUseEffectAnonymousAnonymous(a, b) {
    return (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0);
}
function _TableOfContentsUseEffectAnonymousEntriesFilter(e) {
    return e.isIntersecting;
}
function _TableOfContentsUseEffectIdsMap(id) {
    return document.getElementById(id);
}
function _TableOfContentsItemsMap(x) {
    return x.id;
}
var _c;
__turbopack_context__.k.register(_c, "TableOfContents");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_wealthflow_new_src_60dccb52._.js.map