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
    domain: "https://example.com",
    tagline: "Smarter money decisions, made simple.",
    description: "Finance guides, calculators, and practical insights to help you save smarter, invest better, and plan long-term.",
    language: "en",
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
]);

//# sourceMappingURL=Documents_wealthflow_new_src_d3bdb038._.js.map