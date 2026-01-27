(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/wealthflow_new/src/components/AdSlot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdSlot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/wealthflow_new/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/wealthflow_new/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/wealthflow_new/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const MAX_WIDTH_CLASS = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "max-w-none"
};
function AdSlot(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "259cd4acb689dc0885e5c3cd14d471278106439000d2718ca81d719b20400d8f") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "259cd4acb689dc0885e5c3cd14d471278106439000d2718ca81d719b20400d8f";
    }
    const { label: t1, maxWidth: t2, inArticle: t3, stickyMobile: t4, className: t5 } = t0;
    const label = t1 === undefined ? "Ad Slot" : t1;
    const maxWidth = t2 === undefined ? "lg" : t2;
    const inArticle = t3 === undefined ? false : t3;
    const stickyMobile = t4 === undefined ? false : t4;
    const className = t5 === undefined ? "" : t5;
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t6;
    let t7;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "AdSlot[useEffect()]": ()=>{
                const onResize = {
                    "AdSlot[useEffect() > onResize]": ()=>setIsMobile(window.innerWidth < 640)
                }["AdSlot[useEffect() > onResize]"];
                onResize();
                window.addEventListener("resize", onResize);
                return ()=>window.removeEventListener("resize", onResize);
            }
        })["AdSlot[useEffect()]"];
        t7 = [];
        $[1] = t6;
        $[2] = t7;
    } else {
        t6 = $[1];
        t7 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t6, t7);
    const shouldHideInArticleOnMobile = inArticle && isMobile;
    const mw = MAX_WIDTH_CLASS[maxWidth] ?? MAX_WIDTH_CLASS.lg;
    const base = "mx-auto my-8 w-full " + (maxWidth === "full" ? "" : mw) + " " + (inArticle ? "px-0 sm:px-2" : "");
    let t8;
    if ($[3] !== base || $[4] !== className) {
        t8 = [
            base,
            className
        ].filter(Boolean);
        $[3] = base;
        $[4] = className;
        $[5] = t8;
    } else {
        t8 = $[5];
    }
    const wrapClass = t8.join(" ");
    if (shouldHideInArticleOnMobile) {
        return null;
    }
    let t9;
    if ($[6] !== label || $[7] !== stickyMobile) {
        t9 = stickyMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed bottom-3 left-0 right-0 z-40 px-3 sm:hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex max-w-md items-center justify-between gap-3 rounded-2xl border bg-white/85 p-3 shadow-lg backdrop-blur",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] font-semibold tracking-wide text-neutral-500",
                                children: "ADVERTISEMENT"
                            }, void 0, false, {
                                fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
                                lineNumber: 90,
                                columnNumber: 250
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "truncate text-xs text-neutral-700",
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
                                lineNumber: 90,
                                columnNumber: 343
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
                        lineNumber: 90,
                        columnNumber: 225
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-10 w-28 rounded-xl border border-dashed bg-white/60"
                    }, void 0, false, {
                        fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
                        lineNumber: 90,
                        columnNumber: 413
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
                lineNumber: 90,
                columnNumber: 92
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
            lineNumber: 90,
            columnNumber: 25
        }, this) : null;
        $[6] = label;
        $[7] = stickyMobile;
        $[8] = t9;
    } else {
        t9 = $[8];
    }
    const t10 = inArticle ? "p-5 sm:p-6" : "p-6";
    let t11;
    if ($[9] !== t10) {
        t11 = [
            "rounded-3xl border bg-white/60 backdrop-blur",
            "shadow-[0_16px_60px_rgba(0,0,0,0.06)]",
            t10
        ];
        $[9] = t10;
        $[10] = t11;
    } else {
        t11 = $[10];
    }
    const t12 = t11.join(" ");
    let t13;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-[10px] font-semibold tracking-wide text-neutral-500",
            children: "ADVERTISEMENT"
        }, void 0, false, {
            fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
            lineNumber: 109,
            columnNumber: 11
        }, this);
        $[11] = t13;
    } else {
        t13 = $[11];
    }
    let t14;
    if ($[12] !== inArticle) {
        t14 = inArticle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "rounded-full border bg-white/70 px-3 py-1 text-[10px] text-neutral-600",
            children: "Responsive in-article slot"
        }, void 0, false, {
            fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
            lineNumber: 116,
            columnNumber: 23
        }, this) : null;
        $[12] = inArticle;
        $[13] = t14;
    } else {
        t14 = $[13];
    }
    let t15;
    if ($[14] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-3",
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
            lineNumber: 124,
            columnNumber: 11
        }, this);
        $[14] = t14;
        $[15] = t15;
    } else {
        t15 = $[15];
    }
    let t16;
    if ($[16] !== label) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-3 text-sm font-semibold text-neutral-900",
            children: label
        }, void 0, false, {
            fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[16] = label;
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-24 w-full rounded-2xl border border-dashed bg-white/50 sm:h-28"
                }, void 0, false, {
                    fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
                    lineNumber: 140,
                    columnNumber: 33
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2 text-xs text-neutral-500",
                    children: "Add AdSense code after approval."
                }, void 0, false, {
                    fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
                    lineNumber: 140,
                    columnNumber: 117
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    if ($[19] !== inArticle) {
        t18 = inArticle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 text-xs text-neutral-500",
            children: "Tip: Place ads after strong sections (intro, mid-article, before conclusion)."
        }, void 0, false, {
            fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
            lineNumber: 147,
            columnNumber: 23
        }, this) : null;
        $[19] = inArticle;
        $[20] = t18;
    } else {
        t18 = $[20];
    }
    let t19;
    if ($[21] !== t12 || $[22] !== t15 || $[23] !== t16 || $[24] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t12,
            children: [
                t15,
                t16,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[21] = t12;
        $[22] = t15;
        $[23] = t16;
        $[24] = t18;
        $[25] = t19;
    } else {
        t19 = $[25];
    }
    let t20;
    if ($[26] !== t19 || $[27] !== wrapClass) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: wrapClass,
            children: t19
        }, void 0, false, {
            fileName: "[project]/Documents/wealthflow_new/src/components/AdSlot.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[26] = t19;
        $[27] = wrapClass;
        $[28] = t20;
    } else {
        t20 = $[28];
    }
    let t21;
    if ($[29] !== t20 || $[30] !== t9) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$wealthflow_new$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t9,
                t20
            ]
        }, void 0, true);
        $[29] = t20;
        $[30] = t9;
        $[31] = t21;
    } else {
        t21 = $[31];
    }
    return t21;
}
_s(AdSlot, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
_c = AdSlot;
var _c;
__turbopack_context__.k.register(_c, "AdSlot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_wealthflow_new_src_components_AdSlot_tsx_c0459690._.js.map