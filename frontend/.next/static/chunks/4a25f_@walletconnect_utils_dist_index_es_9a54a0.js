(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/4a25f_@walletconnect_utils_dist_index_es_9a54a0.js", {

"[project]/node_modules/.pnpm/@walletconnect+utils@2.17.0/node_modules/@walletconnect/utils/dist/index.es.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "BASE10": (()=>Zi),
    "BASE16": (()=>Lt),
    "BASE64": (()=>tn),
    "BASE64URL": (()=>Iu),
    "COLON": (()=>rs),
    "DEFAULT_DEPTH": (()=>Ai),
    "EMPTY_SPACE": (()=>Pr),
    "ENV_MAP": (()=>qt),
    "INTERNAL_ERRORS": (()=>So),
    "MemoryStore": (()=>Rh),
    "ONE_THOUSAND": (()=>is),
    "REACT_NATIVE_PRODUCT": (()=>Nn),
    "RELAYER_DEFAULT_PROTOCOL": (()=>uo),
    "SDK_ERRORS": (()=>Eo),
    "SDK_TYPE": (()=>Bn),
    "SLASH": (()=>_n),
    "TYPE_0": (()=>en),
    "TYPE_1": (()=>pr),
    "TYPE_2": (()=>Sr),
    "UTF8": (()=>dr),
    "addResourceToRecap": (()=>io),
    "appendToQueryString": (()=>Cn),
    "assertType": (()=>us),
    "assignAbilityToActions": (()=>Wi),
    "base64Decode": (()=>eo),
    "base64Encode": (()=>to),
    "buildApprovedNamespaces": (()=>ah),
    "buildAuthObject": (()=>Au),
    "buildNamespacesFromAuth": (()=>uh),
    "buildRecapStatement": (()=>fo),
    "calcExpiry": (()=>ws),
    "capitalize": (()=>vs),
    "capitalizeWord": (()=>Fn),
    "createDelayedPromise": (()=>gs),
    "createEncodedRecap": (()=>xu),
    "createExpiringPromise": (()=>ms),
    "createRecap": (()=>ro),
    "decodeRecap": (()=>Oe),
    "decodeTypeByte": (()=>Ze),
    "decodeTypeTwoEnvelope": (()=>Fu),
    "decrypt": (()=>Du),
    "deriveSymKey": (()=>Cu),
    "deserialize": (()=>Wr),
    "encodeRecap": (()=>Yr),
    "encodeTypeByte": (()=>nn),
    "encodeTypeTwoEnvelope": (()=>Tu),
    "encrypt": (()=>Pu),
    "engineEvent": (()=>Ms),
    "enumify": (()=>ps),
    "formatAccountId": (()=>yn),
    "formatAccountWithChain": (()=>Yo),
    "formatChainId": (()=>bn),
    "formatDeeplinkUrl": (()=>Un),
    "formatExpirerTarget": (()=>yi),
    "formatIdTarget": (()=>bs),
    "formatMessage": (()=>Wf),
    "formatMessageContext": (()=>hs),
    "formatRelayParams": (()=>go),
    "formatRelayRpcUrl": (()=>ss),
    "formatStatementFromRecap": (()=>$i),
    "formatTopicTarget": (()=>As),
    "formatUA": (()=>Pn),
    "formatUri": (()=>$u),
    "fromBase64": (()=>xi),
    "generateKeyPair": (()=>_u),
    "generateRandomBytes32": (()=>Bu),
    "getAccountsChains": (()=>tr),
    "getAccountsFromNamespaces": (()=>Wo),
    "getAddressFromAccount": (()=>wn),
    "getAddressesFromAccounts": (()=>Vo),
    "getAppMetadata": (()=>fs),
    "getBrowserOnlineStatus": (()=>Fo),
    "getBundleId": (()=>ns),
    "getChainFromAccount": (()=>xn),
    "getChainsFromAccounts": (()=>Mn),
    "getChainsFromNamespace": (()=>Or),
    "getChainsFromNamespaces": (()=>Xo),
    "getChainsFromRecap": (()=>Su),
    "getChainsFromRequiredNamespaces": (()=>$o),
    "getCommonValuesInArrays": (()=>wi),
    "getCryptoKeyFromKeyData": (()=>ao),
    "getDecodedRecapFromResources": (()=>Xf),
    "getDeepLink": (()=>Ss),
    "getDidAddress": (()=>Vi),
    "getDidAddressSegments": (()=>Gr),
    "getDidChainId": (()=>Yi),
    "getEnvironment": (()=>We),
    "getHttpUrl": (()=>as),
    "getInternalError": (()=>xe),
    "getJavascriptID": (()=>On),
    "getJavascriptOS": (()=>Rn),
    "getLastItems": (()=>Dn),
    "getLinkModeURL": (()=>Zu),
    "getMethodsFromRecap": (()=>Eu),
    "getNamespacedDidChainId": (()=>gu),
    "getNamespacesChains": (()=>bo),
    "getNamespacesEventsForChainId": (()=>wo),
    "getNamespacesFromAccounts": (()=>Mo),
    "getNamespacesMethodsForChainId": (()=>yo),
    "getNodeOnlineStatus": (()=>ko),
    "getReCapActions": (()=>Zf),
    "getReactNativeOnlineStatus": (()=>Uo),
    "getRecapAbilitiesFromResource": (()=>wu),
    "getRecapFromResources": (()=>Vr),
    "getRecapResource": (()=>$f),
    "getRelayClientMetadata": (()=>os),
    "getRelayProtocolApi": (()=>ju),
    "getRelayProtocolName": (()=>zu),
    "getRequiredNamespacesFromNamespaces": (()=>sh),
    "getSdkError": (()=>er),
    "getSearchParamFromURL": (()=>Is),
    "getUniqueValues": (()=>mi),
    "handleDeeplinkRedirect": (()=>Es),
    "hasOverlap": (()=>_e),
    "hashKey": (()=>Ru),
    "hashMessage": (()=>Ou),
    "isBrowser": (()=>gr),
    "isCaipNamespace": (()=>on),
    "isConformingNamespaces": (()=>To),
    "isExpired": (()=>xs),
    "isNode": (()=>bi),
    "isOnline": (()=>Bh),
    "isProposalStruct": (()=>lh),
    "isReactNative": (()=>rr),
    "isRecap": (()=>Xi),
    "isSessionCompatible": (()=>hh),
    "isSessionStruct": (()=>dh),
    "isTelegram": (()=>kn),
    "isTestRun": (()=>_s),
    "isTypeOneEnvelope": (()=>ku),
    "isTypeTwoEnvelope": (()=>qu),
    "isUndefined": (()=>Pe),
    "isValidAccountId": (()=>Io),
    "isValidAccounts": (()=>Bo),
    "isValidActions": (()=>Ro),
    "isValidArray": (()=>Nr),
    "isValidChainId": (()=>_r),
    "isValidChains": (()=>No),
    "isValidController": (()=>ph),
    "isValidEip1271Signature": (()=>Jf),
    "isValidEip191Signature": (()=>Qf),
    "isValidErrorReason": (()=>bh),
    "isValidEvent": (()=>xh),
    "isValidId": (()=>mh),
    "isValidNamespaceAccounts": (()=>Co),
    "isValidNamespaceActions": (()=>un),
    "isValidNamespaceChains": (()=>_o),
    "isValidNamespaceMethodsOrEvents": (()=>an),
    "isValidNamespaces": (()=>Oo),
    "isValidNamespacesChainId": (()=>Mh),
    "isValidNamespacesEvent": (()=>Sh),
    "isValidNamespacesRequest": (()=>Eh),
    "isValidNumber": (()=>$r),
    "isValidObject": (()=>Xr),
    "isValidParams": (()=>Ah),
    "isValidRecap": (()=>ge),
    "isValidRelay": (()=>Po),
    "isValidRelays": (()=>gh),
    "isValidRequest": (()=>yh),
    "isValidRequestExpiry": (()=>_h),
    "isValidRequiredNamespaces": (()=>vh),
    "isValidResponse": (()=>wh),
    "isValidString": (()=>Yt),
    "isValidUrl": (()=>ch),
    "mapEntries": (()=>ds),
    "mapToObj": (()=>cs),
    "mergeArrays": (()=>me),
    "mergeEncodedRecaps": (()=>Mu),
    "mergeRecaps": (()=>no),
    "normalizeNamespaces": (()=>sn),
    "objToMap": (()=>ls),
    "parseAccountId": (()=>gi),
    "parseChainId": (()=>An),
    "parseContextNames": (()=>Tn),
    "parseExpirerTarget": (()=>ys),
    "parseNamespaceKey": (()=>xo),
    "parseRelayParams": (()=>po),
    "parseTopic": (()=>vo),
    "parseUri": (()=>Xu),
    "populateAuthPayload": (()=>bu),
    "recapHasResource": (()=>yu),
    "serialize": (()=>fn),
    "subscribeToBrowserNetworkChange": (()=>qo),
    "subscribeToNetworkChange": (()=>Ch),
    "subscribeToReactNativeNetworkChange": (()=>Ko),
    "toBase64": (()=>qn),
    "uuidv4": (()=>Ns),
    "validateDecoding": (()=>Uu),
    "validateEncoding": (()=>so),
    "validateSignedCacao": (()=>mu),
    "verifyP256Jwt": (()=>Lu),
    "verifySignature": (()=>jf)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+time@1.0.2/node_modules/@walletconnect/time/dist/cjs/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$window$2d$getters$40$1$2e$0$2e$1$2f$node_modules$2f40$walletconnect$2f$window$2d$getters$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+window-getters@1.0.1/node_modules/@walletconnect/window-getters/dist/cjs/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$window$2d$metadata$40$1$2e$0$2e$1$2f$node_modules$2f40$walletconnect$2f$window$2d$metadata$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+window-metadata@1.0.1/node_modules/@walletconnect/window-metadata/dist/cjs/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$query$2d$string$40$7$2e$1$2e$3$2f$node_modules$2f$query$2d$string$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/query-string@7.1.3/node_modules/query-string/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stablelib$2b$chacha20poly1305$40$1$2e$0$2e$1$2f$node_modules$2f40$stablelib$2f$chacha20poly1305$2f$lib$2f$chacha20poly1305$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@stablelib+chacha20poly1305@1.0.1/node_modules/@stablelib/chacha20poly1305/lib/chacha20poly1305.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stablelib$2b$hkdf$40$1$2e$0$2e$1$2f$node_modules$2f40$stablelib$2f$hkdf$2f$lib$2f$hkdf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@stablelib+hkdf@1.0.1/node_modules/@stablelib/hkdf/lib/hkdf.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stablelib$2b$random$40$1$2e$0$2e$2$2f$node_modules$2f40$stablelib$2f$random$2f$lib$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@stablelib+random@1.0.2/node_modules/@stablelib/random/lib/random.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stablelib$2b$sha256$40$1$2e$0$2e$1$2f$node_modules$2f40$stablelib$2f$sha256$2f$lib$2f$sha256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@stablelib+sha256@1.0.1/node_modules/@stablelib/sha256/lib/sha256.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stablelib$2b$x25519$40$1$2e$0$2e$3$2f$node_modules$2f40$stablelib$2f$x25519$2f$lib$2f$x25519$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@stablelib+x25519@1.0.3/node_modules/@stablelib/x25519/lib/x25519.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$elliptic$40$6$2e$6$2e$1$2f$node_modules$2f$elliptic$2f$lib$2f$elliptic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/elliptic@6.6.1/node_modules/elliptic/lib/elliptic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$relay$2d$auth$40$1$2e$0$2e$4$2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$relay$2d$api$40$1$2e$0$2e$11$2f$node_modules$2f40$walletconnect$2f$relay$2d$api$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+relay-api@1.0.11/node_modules/@walletconnect/relay-api/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$detect$2d$browser$40$5$2e$3$2e$0$2f$node_modules$2f$detect$2d$browser$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/detect-browser@5.3.0/node_modules/detect-browser/es/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.6_@babel+core@7.26.0_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/to-string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/from-string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uint8arrays@3.1.0/node_modules/uint8arrays/esm/src/concat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$relay$2d$auth$40$1$2e$0$2e$4$2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@walletconnect+relay-auth@1.0.4/node_modules/@walletconnect/relay-auth/dist/esm/utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const Rr = ":";
function An(e) {
    const [t, r] = e.split(Rr);
    return {
        namespace: t,
        reference: r
    };
}
function bn(e) {
    const { namespace: t, reference: r } = e;
    return [
        t,
        r
    ].join(Rr);
}
function gi(e) {
    const [t, r, i] = e.split(Rr);
    return {
        namespace: t,
        reference: r,
        address: i
    };
}
function yn(e) {
    const { namespace: t, reference: r, address: i } = e;
    return [
        t,
        r,
        i
    ].join(Rr);
}
function mi(e, t) {
    const r = [];
    return e.forEach((i)=>{
        const n = t(i);
        r.includes(n) || r.push(n);
    }), r;
}
function wn(e) {
    const { address: t } = gi(e);
    return t;
}
function xn(e) {
    const { namespace: t, reference: r } = gi(e);
    return bn({
        namespace: t,
        reference: r
    });
}
function Yo(e, t) {
    const { namespace: r, reference: i } = An(t);
    return yn({
        namespace: r,
        reference: i,
        address: e
    });
}
function Vo(e) {
    return mi(e, wn);
}
function Mn(e) {
    return mi(e, xn);
}
function Wo(e, t = []) {
    const r = [];
    return Object.keys(e).forEach((i)=>{
        if (t.length && !t.includes(i)) return;
        const n = e[i];
        r.push(...n.accounts);
    }), r;
}
function Xo(e, t = []) {
    const r = [];
    return Object.keys(e).forEach((i)=>{
        if (t.length && !t.includes(i)) return;
        const n = e[i];
        r.push(...Mn(n.accounts));
    }), r;
}
function $o(e, t = []) {
    const r = [];
    return Object.keys(e).forEach((i)=>{
        if (t.length && !t.includes(i)) return;
        const n = e[i];
        r.push(...Or(i, n));
    }), r;
}
function Or(e, t) {
    return e.includes(":") ? [
        e
    ] : t.chains || [];
}
var Zo = Object.defineProperty, En = Object.getOwnPropertySymbols, ts = Object.prototype.hasOwnProperty, es = Object.prototype.propertyIsEnumerable, Sn = (e, t, r)=>t in e ? Zo(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r, In = (e, t)=>{
    for(var r in t || (t = {}))ts.call(t, r) && Sn(e, r, t[r]);
    if (En) for (var r of En(t))es.call(t, r) && Sn(e, r, t[r]);
    return e;
};
const Nn = "ReactNative", qt = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown"
}, Pr = " ", rs = ":", _n = "/", Ai = 2, is = 1e3, Bn = "js";
function bi() {
    return typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] < "u" && typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions < "u" && typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions.node < "u";
}
function rr() {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$window$2d$getters$40$1$2e$0$2e$1$2f$node_modules$2f40$walletconnect$2f$window$2d$getters$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])() && !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$window$2d$getters$40$1$2e$0$2e$1$2f$node_modules$2f40$walletconnect$2f$window$2d$getters$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNavigator"])() && navigator.product === Nn;
}
function gr() {
    return !bi() && !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$window$2d$getters$40$1$2e$0$2e$1$2f$node_modules$2f40$walletconnect$2f$window$2d$getters$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNavigator"])() && !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$window$2d$getters$40$1$2e$0$2e$1$2f$node_modules$2f40$walletconnect$2f$window$2d$getters$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])();
}
function We() {
    return rr() ? qt.reactNative : bi() ? qt.node : gr() ? qt.browser : qt.unknown;
}
function ns() {
    var e;
    try {
        return rr() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (e = global.Application) == null ? void 0 : e.applicationId : void 0;
    } catch  {
        return;
    }
}
function Cn(e, t) {
    let r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$query$2d$string$40$7$2e$1$2e$3$2f$node_modules$2f$query$2d$string$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.parse(e);
    return r = In(In({}, r), t), e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$query$2d$string$40$7$2e$1$2e$3$2f$node_modules$2f$query$2d$string$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.stringify(r), e;
}
function fs() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$window$2d$metadata$40$1$2e$0$2e$1$2f$node_modules$2f40$walletconnect$2f$window$2d$metadata$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWindowMetadata"])() || {
        name: "",
        description: "",
        url: "",
        icons: [
            ""
        ]
    };
}
function os(e, t) {
    var r;
    const i = We(), n = {
        protocol: e,
        version: t,
        env: i
    };
    return i === "browser" && (n.host = ((r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$window$2d$getters$40$1$2e$0$2e$1$2f$node_modules$2f40$walletconnect$2f$window$2d$getters$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocation"])()) == null ? void 0 : r.host) || "unknown"), n;
}
function Rn() {
    if (We() === qt.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
        const { OS: r, Version: i } = global.Platform;
        return [
            r,
            i
        ].join("-");
    }
    const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$detect$2d$browser$40$5$2e$3$2e$0$2f$node_modules$2f$detect$2d$browser$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detect"])();
    if (e === null) return "unknown";
    const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
    return e.type === "browser" ? [
        t,
        e.name,
        e.version
    ].join("-") : [
        t,
        e.version
    ].join("-");
}
function On() {
    var e;
    const t = We();
    return t === qt.browser ? [
        t,
        ((e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$window$2d$getters$40$1$2e$0$2e$1$2f$node_modules$2f40$walletconnect$2f$window$2d$getters$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocation"])()) == null ? void 0 : e.host) || "unknown"
    ].join(":") : t;
}
function Pn(e, t, r) {
    const i = Rn(), n = On();
    return [
        [
            e,
            t
        ].join("-"),
        [
            Bn,
            r
        ].join("-"),
        i,
        n
    ].join("/");
}
function ss({ protocol: e, version: t, relayUrl: r, sdkVersion: i, auth: n, projectId: o, useOnCloseEvent: h, bundleId: p }) {
    const A = r.split("?"), v = Pn(e, t, i), w = {
        auth: n,
        ua: v,
        projectId: o,
        useOnCloseEvent: h || void 0,
        origin: p || void 0
    }, y = Cn(A[1] || "", w);
    return A[0] + "?" + y;
}
function as(e) {
    let t = (e.match(/^[^:]+(?=:\/\/)/gi) || [])[0];
    const r = typeof t < "u" ? e.split("://")[1] : e;
    return t = t === "wss" ? "https" : "http", [
        t,
        r
    ].join("://");
}
function us(e, t, r) {
    if (!e[t] || typeof e[t] !== r) throw new Error(`Missing or invalid "${t}" param`);
}
function Tn(e, t = Ai) {
    return Dn(e.split(_n), t);
}
function hs(e) {
    return Tn(e).join(Pr);
}
function _e(e, t) {
    return e.filter((r)=>t.includes(r)).length === e.length;
}
function Dn(e, t = Ai) {
    return e.slice(Math.max(e.length - t, 0));
}
function cs(e) {
    return Object.fromEntries(e.entries());
}
function ls(e) {
    return new Map(Object.entries(e));
}
function ds(e, t) {
    const r = {};
    return Object.keys(e).forEach((i)=>{
        r[i] = t(e[i]);
    }), r;
}
const ps = (e)=>e;
function Fn(e) {
    return e.trim().replace(/^\w/, (t)=>t.toUpperCase());
}
function vs(e) {
    return e.split(Pr).map((t)=>Fn(t)).join(Pr);
}
function gs(e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIVE_MINUTES"], t) {
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toMiliseconds"])(e || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIVE_MINUTES"]);
    let i, n, o;
    return {
        resolve: (h)=>{
            o && i && (clearTimeout(o), i(h));
        },
        reject: (h)=>{
            o && n && (clearTimeout(o), n(h));
        },
        done: ()=>new Promise((h, p)=>{
                o = setTimeout(()=>{
                    p(new Error(t));
                }, r), i = h, n = p;
            })
    };
}
function ms(e, t, r) {
    return new Promise(async (i, n)=>{
        const o = setTimeout(()=>n(new Error(r)), t);
        try {
            const h = await e;
            i(h);
        } catch (h) {
            n(h);
        }
        clearTimeout(o);
    });
}
function yi(e, t) {
    if (typeof t == "string" && t.startsWith(`${e}:`)) return t;
    if (e.toLowerCase() === "topic") {
        if (typeof t != "string") throw new Error('Value must be "string" for expirer target type: topic');
        return `topic:${t}`;
    } else if (e.toLowerCase() === "id") {
        if (typeof t != "number") throw new Error('Value must be "number" for expirer target type: id');
        return `id:${t}`;
    }
    throw new Error(`Unknown expirer target type: ${e}`);
}
function As(e) {
    return yi("topic", e);
}
function bs(e) {
    return yi("id", e);
}
function ys(e) {
    const [t, r] = e.split(":"), i = {
        id: void 0,
        topic: void 0
    };
    if (t === "topic" && typeof r == "string") i.topic = r;
    else if (t === "id" && Number.isInteger(Number(r))) i.id = Number(r);
    else throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
    return i;
}
function ws(e, t) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromMiliseconds"])((t || Date.now()) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toMiliseconds"])(e));
}
function xs(e) {
    return Date.now() >= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$time$40$1$2e$0$2e$2$2f$node_modules$2f40$walletconnect$2f$time$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toMiliseconds"])(e);
}
function Ms(e, t) {
    return `${e}${t ? `:${t}` : ""}`;
}
function me(e = [], t = []) {
    return [
        ...new Set([
            ...e,
            ...t
        ])
    ];
}
async function Es({ id: e, topic: t, wcDeepLink: r }) {
    var i;
    try {
        if (!r) return;
        const n = typeof r == "string" ? JSON.parse(r) : r, o = n?.href;
        if (typeof o != "string") return;
        const h = Un(o, e, t), p = We();
        if (p === qt.browser) {
            if (!((i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$window$2d$getters$40$1$2e$0$2e$1$2f$node_modules$2f40$walletconnect$2f$window$2d$getters$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocument"])()) != null && i.hasFocus())) {
                console.warn("Document does not have focus, skipping deeplink.");
                return;
            }
            h.startsWith("https://") || h.startsWith("http://") ? window.open(h, "_blank", "noreferrer noopener") : window.open(h, kn() ? "_blank" : "_self", "noreferrer noopener");
        } else p === qt.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(h);
    } catch (n) {
        console.error(n);
    }
}
function Un(e, t, r) {
    const i = `requestId=${t}&sessionTopic=${r}`;
    e.endsWith("/") && (e = e.slice(0, -1));
    let n = `${e}`;
    if (e.startsWith("https://t.me")) {
        const o = e.includes("?") ? "&startapp=" : "?startapp=";
        n = `${n}${o}${qn(i, !0)}`;
    } else n = `${n}/wc?${i}`;
    return n;
}
async function Ss(e, t) {
    let r = "";
    try {
        if (gr() && (r = localStorage.getItem(t), r)) return r;
        r = await e.getItem(t);
    } catch (i) {
        console.error(i);
    }
    return r;
}
function wi(e, t) {
    return e.filter((r)=>t.includes(r));
}
function Is(e, t) {
    if (!e.includes(t)) return null;
    const r = e.split(/([&,?,=])/), i = r.indexOf(t);
    return r[i + 2];
}
function Ns() {
    return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (e)=>{
        const t = Math.random() * 16 | 0;
        return (e === "x" ? t : t & 3 | 8).toString(16);
    });
}
function _s() {
    return typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] < "u" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.IS_VITEST === "true";
}
function kn() {
    return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
}
function qn(e, t = !1) {
    const r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(e).toString("base64");
    return t ? r.replace(/[=]/g, "") : r;
}
function xi(e) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(e, "base64").toString("utf-8");
}
var Kn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Bs(e) {
    var t = e.default;
    if (typeof t == "function") {
        var r = function() {
            return t.apply(this, arguments);
        };
        r.prototype = t.prototype;
    } else r = {};
    return Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function(i) {
        var n = Object.getOwnPropertyDescriptor(e, i);
        Object.defineProperty(r, i, n.get ? n : {
            enumerable: !0,
            get: function() {
                return e[i];
            }
        });
    }), r;
}
var Hn = {
    exports: {}
}; /**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */ 
(function(e) {
    (function() {
        var t = "input is invalid type", r = "finalize already called", i = typeof window == "object", n = i ? window : {};
        n.JS_SHA3_NO_WINDOW && (i = !1);
        var o = !i && typeof self == "object", h = !n.JS_SHA3_NO_NODE_JS && typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] == "object" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].versions.node;
        h ? n = Kn : o && (n = self);
        var p = !n.JS_SHA3_NO_COMMON_JS && !0 && e.exports, A = !n.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u", v = "0123456789abcdef".split(""), w = [
            31,
            7936,
            2031616,
            520093696
        ], y = [
            4,
            1024,
            262144,
            67108864
        ], S = [
            1,
            256,
            65536,
            16777216
        ], N = [
            6,
            1536,
            393216,
            100663296
        ], I = [
            0,
            8,
            16,
            24
        ], C = [
            1,
            0,
            32898,
            0,
            32906,
            2147483648,
            2147516416,
            2147483648,
            32907,
            0,
            2147483649,
            0,
            2147516545,
            2147483648,
            32777,
            2147483648,
            138,
            0,
            136,
            0,
            2147516425,
            0,
            2147483658,
            0,
            2147516555,
            0,
            139,
            2147483648,
            32905,
            2147483648,
            32771,
            2147483648,
            32770,
            2147483648,
            128,
            2147483648,
            32778,
            0,
            2147483658,
            2147483648,
            2147516545,
            2147483648,
            32896,
            2147483648,
            2147483649,
            0,
            2147516424,
            2147483648
        ], D = [
            224,
            256,
            384,
            512
        ], U = [
            128,
            256
        ], J = [
            "hex",
            "buffer",
            "arrayBuffer",
            "array",
            "digest"
        ], Bt = {
            128: 168,
            256: 136
        };
        (n.JS_SHA3_NO_NODE_JS || !Array.isArray) && (Array.isArray = function(u) {
            return Object.prototype.toString.call(u) === "[object Array]";
        }), A && (n.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) && (ArrayBuffer.isView = function(u) {
            return typeof u == "object" && u.buffer && u.buffer.constructor === ArrayBuffer;
        });
        for(var G = function(u, E, _) {
            return function(B) {
                return new s(u, E, u).update(B)[_]();
            };
        }, H = function(u, E, _) {
            return function(B, R) {
                return new s(u, E, R).update(B)[_]();
            };
        }, L = function(u, E, _) {
            return function(B, R, F, P) {
                return f["cshake" + u].update(B, R, F, P)[_]();
            };
        }, Pt = function(u, E, _) {
            return function(B, R, F, P) {
                return f["kmac" + u].update(B, R, F, P)[_]();
            };
        }, W = function(u, E, _, B) {
            for(var R = 0; R < J.length; ++R){
                var F = J[R];
                u[F] = E(_, B, F);
            }
            return u;
        }, Rt = function(u, E) {
            var _ = G(u, E, "hex");
            return _.create = function() {
                return new s(u, E, u);
            }, _.update = function(B) {
                return _.create().update(B);
            }, W(_, G, u, E);
        }, Vt = function(u, E) {
            var _ = H(u, E, "hex");
            return _.create = function(B) {
                return new s(u, E, B);
            }, _.update = function(B, R) {
                return _.create(R).update(B);
            }, W(_, H, u, E);
        }, Y = function(u, E) {
            var _ = Bt[u], B = L(u, E, "hex");
            return B.create = function(R, F, P) {
                return !F && !P ? f["shake" + u].create(R) : new s(u, E, R).bytepad([
                    F,
                    P
                ], _);
            }, B.update = function(R, F, P, O) {
                return B.create(F, P, O).update(R);
            }, W(B, L, u, E);
        }, Wt = function(u, E) {
            var _ = Bt[u], B = Pt(u, E, "hex");
            return B.create = function(R, F, P) {
                return new g(u, E, F).bytepad([
                    "KMAC",
                    P
                ], _).bytepad([
                    R
                ], _);
            }, B.update = function(R, F, P, O) {
                return B.create(R, P, O).update(F);
            }, W(B, Pt, u, E);
        }, b = [
            {
                name: "keccak",
                padding: S,
                bits: D,
                createMethod: Rt
            },
            {
                name: "sha3",
                padding: N,
                bits: D,
                createMethod: Rt
            },
            {
                name: "shake",
                padding: w,
                bits: U,
                createMethod: Vt
            },
            {
                name: "cshake",
                padding: y,
                bits: U,
                createMethod: Y
            },
            {
                name: "kmac",
                padding: y,
                bits: U,
                createMethod: Wt
            }
        ], f = {}, a = [], c = 0; c < b.length; ++c)for(var d = b[c], m = d.bits, x = 0; x < m.length; ++x){
            var M = d.name + "_" + m[x];
            if (a.push(M), f[M] = d.createMethod(m[x], d.padding), d.name !== "sha3") {
                var l = d.name + m[x];
                a.push(l), f[l] = f[M];
            }
        }
        function s(u, E, _) {
            this.blocks = [], this.s = [], this.padding = E, this.outputBits = _, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (u << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = _ >> 5, this.extraBytes = (_ & 31) >> 3;
            for(var B = 0; B < 50; ++B)this.s[B] = 0;
        }
        s.prototype.update = function(u) {
            if (this.finalized) throw new Error(r);
            var E, _ = typeof u;
            if (_ !== "string") {
                if (_ === "object") {
                    if (u === null) throw new Error(t);
                    if (A && u.constructor === ArrayBuffer) u = new Uint8Array(u);
                    else if (!Array.isArray(u) && (!A || !ArrayBuffer.isView(u))) throw new Error(t);
                } else throw new Error(t);
                E = !0;
            }
            for(var B = this.blocks, R = this.byteCount, F = u.length, P = this.blockCount, O = 0, Ct = this.s, T, q; O < F;){
                if (this.reset) for(this.reset = !1, B[0] = this.block, T = 1; T < P + 1; ++T)B[T] = 0;
                if (E) for(T = this.start; O < F && T < R; ++O)B[T >> 2] |= u[O] << I[T++ & 3];
                else for(T = this.start; O < F && T < R; ++O)q = u.charCodeAt(O), q < 128 ? B[T >> 2] |= q << I[T++ & 3] : q < 2048 ? (B[T >> 2] |= (192 | q >> 6) << I[T++ & 3], B[T >> 2] |= (128 | q & 63) << I[T++ & 3]) : q < 55296 || q >= 57344 ? (B[T >> 2] |= (224 | q >> 12) << I[T++ & 3], B[T >> 2] |= (128 | q >> 6 & 63) << I[T++ & 3], B[T >> 2] |= (128 | q & 63) << I[T++ & 3]) : (q = 65536 + ((q & 1023) << 10 | u.charCodeAt(++O) & 1023), B[T >> 2] |= (240 | q >> 18) << I[T++ & 3], B[T >> 2] |= (128 | q >> 12 & 63) << I[T++ & 3], B[T >> 2] |= (128 | q >> 6 & 63) << I[T++ & 3], B[T >> 2] |= (128 | q & 63) << I[T++ & 3]);
                if (this.lastByteIndex = T, T >= R) {
                    for(this.start = T - R, this.block = B[P], T = 0; T < P; ++T)Ct[T] ^= B[T];
                    k(Ct), this.reset = !0;
                } else this.start = T;
            }
            return this;
        }, s.prototype.encode = function(u, E) {
            var _ = u & 255, B = 1, R = [
                _
            ];
            for(u = u >> 8, _ = u & 255; _ > 0;)R.unshift(_), u = u >> 8, _ = u & 255, ++B;
            return E ? R.push(B) : R.unshift(B), this.update(R), R.length;
        }, s.prototype.encodeString = function(u) {
            var E, _ = typeof u;
            if (_ !== "string") {
                if (_ === "object") {
                    if (u === null) throw new Error(t);
                    if (A && u.constructor === ArrayBuffer) u = new Uint8Array(u);
                    else if (!Array.isArray(u) && (!A || !ArrayBuffer.isView(u))) throw new Error(t);
                } else throw new Error(t);
                E = !0;
            }
            var B = 0, R = u.length;
            if (E) B = R;
            else for(var F = 0; F < u.length; ++F){
                var P = u.charCodeAt(F);
                P < 128 ? B += 1 : P < 2048 ? B += 2 : P < 55296 || P >= 57344 ? B += 3 : (P = 65536 + ((P & 1023) << 10 | u.charCodeAt(++F) & 1023), B += 4);
            }
            return B += this.encode(B * 8), this.update(u), B;
        }, s.prototype.bytepad = function(u, E) {
            for(var _ = this.encode(E), B = 0; B < u.length; ++B)_ += this.encodeString(u[B]);
            var R = E - _ % E, F = [];
            return F.length = R, this.update(F), this;
        }, s.prototype.finalize = function() {
            if (!this.finalized) {
                this.finalized = !0;
                var u = this.blocks, E = this.lastByteIndex, _ = this.blockCount, B = this.s;
                if (u[E >> 2] |= this.padding[E & 3], this.lastByteIndex === this.byteCount) for(u[0] = u[_], E = 1; E < _ + 1; ++E)u[E] = 0;
                for(u[_ - 1] |= 2147483648, E = 0; E < _; ++E)B[E] ^= u[E];
                k(B);
            }
        }, s.prototype.toString = s.prototype.hex = function() {
            this.finalize();
            for(var u = this.blockCount, E = this.s, _ = this.outputBlocks, B = this.extraBytes, R = 0, F = 0, P = "", O; F < _;){
                for(R = 0; R < u && F < _; ++R, ++F)O = E[R], P += v[O >> 4 & 15] + v[O & 15] + v[O >> 12 & 15] + v[O >> 8 & 15] + v[O >> 20 & 15] + v[O >> 16 & 15] + v[O >> 28 & 15] + v[O >> 24 & 15];
                F % u === 0 && (k(E), R = 0);
            }
            return B && (O = E[R], P += v[O >> 4 & 15] + v[O & 15], B > 1 && (P += v[O >> 12 & 15] + v[O >> 8 & 15]), B > 2 && (P += v[O >> 20 & 15] + v[O >> 16 & 15])), P;
        }, s.prototype.arrayBuffer = function() {
            this.finalize();
            var u = this.blockCount, E = this.s, _ = this.outputBlocks, B = this.extraBytes, R = 0, F = 0, P = this.outputBits >> 3, O;
            B ? O = new ArrayBuffer(_ + 1 << 2) : O = new ArrayBuffer(P);
            for(var Ct = new Uint32Array(O); F < _;){
                for(R = 0; R < u && F < _; ++R, ++F)Ct[F] = E[R];
                F % u === 0 && k(E);
            }
            return B && (Ct[R] = E[R], O = O.slice(0, P)), O;
        }, s.prototype.buffer = s.prototype.arrayBuffer, s.prototype.digest = s.prototype.array = function() {
            this.finalize();
            for(var u = this.blockCount, E = this.s, _ = this.outputBlocks, B = this.extraBytes, R = 0, F = 0, P = [], O, Ct; F < _;){
                for(R = 0; R < u && F < _; ++R, ++F)O = F << 2, Ct = E[R], P[O] = Ct & 255, P[O + 1] = Ct >> 8 & 255, P[O + 2] = Ct >> 16 & 255, P[O + 3] = Ct >> 24 & 255;
                F % u === 0 && k(E);
            }
            return B && (O = F << 2, Ct = E[R], P[O] = Ct & 255, B > 1 && (P[O + 1] = Ct >> 8 & 255), B > 2 && (P[O + 2] = Ct >> 16 & 255)), P;
        };
        function g(u, E, _) {
            s.call(this, u, E, _);
        }
        g.prototype = new s, g.prototype.finalize = function() {
            return this.encode(this.outputBits, !0), s.prototype.finalize.call(this);
        };
        var k = function(u) {
            var E, _, B, R, F, P, O, Ct, T, q, Te, X, $, De, Z, tt, Fe, et, rt, Ue, it, nt, ke, ft, ot, qe, st, at, Ke, ut, ht, He, ct, lt, Le, dt, pt, ze, vt, gt, je, mt, At, Qe, bt, yt, Je, wt, xt, Ge, Mt, Et, Ye, St, It, Ve, Nt, _t, Me, Ee, Se, Ie, Ne;
            for(B = 0; B < 48; B += 2)R = u[0] ^ u[10] ^ u[20] ^ u[30] ^ u[40], F = u[1] ^ u[11] ^ u[21] ^ u[31] ^ u[41], P = u[2] ^ u[12] ^ u[22] ^ u[32] ^ u[42], O = u[3] ^ u[13] ^ u[23] ^ u[33] ^ u[43], Ct = u[4] ^ u[14] ^ u[24] ^ u[34] ^ u[44], T = u[5] ^ u[15] ^ u[25] ^ u[35] ^ u[45], q = u[6] ^ u[16] ^ u[26] ^ u[36] ^ u[46], Te = u[7] ^ u[17] ^ u[27] ^ u[37] ^ u[47], X = u[8] ^ u[18] ^ u[28] ^ u[38] ^ u[48], $ = u[9] ^ u[19] ^ u[29] ^ u[39] ^ u[49], E = X ^ (P << 1 | O >>> 31), _ = $ ^ (O << 1 | P >>> 31), u[0] ^= E, u[1] ^= _, u[10] ^= E, u[11] ^= _, u[20] ^= E, u[21] ^= _, u[30] ^= E, u[31] ^= _, u[40] ^= E, u[41] ^= _, E = R ^ (Ct << 1 | T >>> 31), _ = F ^ (T << 1 | Ct >>> 31), u[2] ^= E, u[3] ^= _, u[12] ^= E, u[13] ^= _, u[22] ^= E, u[23] ^= _, u[32] ^= E, u[33] ^= _, u[42] ^= E, u[43] ^= _, E = P ^ (q << 1 | Te >>> 31), _ = O ^ (Te << 1 | q >>> 31), u[4] ^= E, u[5] ^= _, u[14] ^= E, u[15] ^= _, u[24] ^= E, u[25] ^= _, u[34] ^= E, u[35] ^= _, u[44] ^= E, u[45] ^= _, E = Ct ^ (X << 1 | $ >>> 31), _ = T ^ ($ << 1 | X >>> 31), u[6] ^= E, u[7] ^= _, u[16] ^= E, u[17] ^= _, u[26] ^= E, u[27] ^= _, u[36] ^= E, u[37] ^= _, u[46] ^= E, u[47] ^= _, E = q ^ (R << 1 | F >>> 31), _ = Te ^ (F << 1 | R >>> 31), u[8] ^= E, u[9] ^= _, u[18] ^= E, u[19] ^= _, u[28] ^= E, u[29] ^= _, u[38] ^= E, u[39] ^= _, u[48] ^= E, u[49] ^= _, De = u[0], Z = u[1], yt = u[11] << 4 | u[10] >>> 28, Je = u[10] << 4 | u[11] >>> 28, at = u[20] << 3 | u[21] >>> 29, Ke = u[21] << 3 | u[20] >>> 29, Ee = u[31] << 9 | u[30] >>> 23, Se = u[30] << 9 | u[31] >>> 23, mt = u[40] << 18 | u[41] >>> 14, At = u[41] << 18 | u[40] >>> 14, lt = u[2] << 1 | u[3] >>> 31, Le = u[3] << 1 | u[2] >>> 31, tt = u[13] << 12 | u[12] >>> 20, Fe = u[12] << 12 | u[13] >>> 20, wt = u[22] << 10 | u[23] >>> 22, xt = u[23] << 10 | u[22] >>> 22, ut = u[33] << 13 | u[32] >>> 19, ht = u[32] << 13 | u[33] >>> 19, Ie = u[42] << 2 | u[43] >>> 30, Ne = u[43] << 2 | u[42] >>> 30, St = u[5] << 30 | u[4] >>> 2, It = u[4] << 30 | u[5] >>> 2, dt = u[14] << 6 | u[15] >>> 26, pt = u[15] << 6 | u[14] >>> 26, et = u[25] << 11 | u[24] >>> 21, rt = u[24] << 11 | u[25] >>> 21, Ge = u[34] << 15 | u[35] >>> 17, Mt = u[35] << 15 | u[34] >>> 17, He = u[45] << 29 | u[44] >>> 3, ct = u[44] << 29 | u[45] >>> 3, ft = u[6] << 28 | u[7] >>> 4, ot = u[7] << 28 | u[6] >>> 4, Ve = u[17] << 23 | u[16] >>> 9, Nt = u[16] << 23 | u[17] >>> 9, ze = u[26] << 25 | u[27] >>> 7, vt = u[27] << 25 | u[26] >>> 7, Ue = u[36] << 21 | u[37] >>> 11, it = u[37] << 21 | u[36] >>> 11, Et = u[47] << 24 | u[46] >>> 8, Ye = u[46] << 24 | u[47] >>> 8, Qe = u[8] << 27 | u[9] >>> 5, bt = u[9] << 27 | u[8] >>> 5, qe = u[18] << 20 | u[19] >>> 12, st = u[19] << 20 | u[18] >>> 12, _t = u[29] << 7 | u[28] >>> 25, Me = u[28] << 7 | u[29] >>> 25, gt = u[38] << 8 | u[39] >>> 24, je = u[39] << 8 | u[38] >>> 24, nt = u[48] << 14 | u[49] >>> 18, ke = u[49] << 14 | u[48] >>> 18, u[0] = De ^ ~tt & et, u[1] = Z ^ ~Fe & rt, u[10] = ft ^ ~qe & at, u[11] = ot ^ ~st & Ke, u[20] = lt ^ ~dt & ze, u[21] = Le ^ ~pt & vt, u[30] = Qe ^ ~yt & wt, u[31] = bt ^ ~Je & xt, u[40] = St ^ ~Ve & _t, u[41] = It ^ ~Nt & Me, u[2] = tt ^ ~et & Ue, u[3] = Fe ^ ~rt & it, u[12] = qe ^ ~at & ut, u[13] = st ^ ~Ke & ht, u[22] = dt ^ ~ze & gt, u[23] = pt ^ ~vt & je, u[32] = yt ^ ~wt & Ge, u[33] = Je ^ ~xt & Mt, u[42] = Ve ^ ~_t & Ee, u[43] = Nt ^ ~Me & Se, u[4] = et ^ ~Ue & nt, u[5] = rt ^ ~it & ke, u[14] = at ^ ~ut & He, u[15] = Ke ^ ~ht & ct, u[24] = ze ^ ~gt & mt, u[25] = vt ^ ~je & At, u[34] = wt ^ ~Ge & Et, u[35] = xt ^ ~Mt & Ye, u[44] = _t ^ ~Ee & Ie, u[45] = Me ^ ~Se & Ne, u[6] = Ue ^ ~nt & De, u[7] = it ^ ~ke & Z, u[16] = ut ^ ~He & ft, u[17] = ht ^ ~ct & ot, u[26] = gt ^ ~mt & lt, u[27] = je ^ ~At & Le, u[36] = Ge ^ ~Et & Qe, u[37] = Mt ^ ~Ye & bt, u[46] = Ee ^ ~Ie & St, u[47] = Se ^ ~Ne & It, u[8] = nt ^ ~De & tt, u[9] = ke ^ ~Z & Fe, u[18] = He ^ ~ft & qe, u[19] = ct ^ ~ot & st, u[28] = mt ^ ~lt & dt, u[29] = At ^ ~Le & pt, u[38] = Et ^ ~Qe & yt, u[39] = Ye ^ ~bt & Je, u[48] = Ie ^ ~St & Ve, u[49] = Ne ^ ~It & Nt, u[0] ^= C[B], u[1] ^= C[B + 1];
        };
        if (p) e.exports = f;
        else for(c = 0; c < a.length; ++c)n[a[c]] = f[a[c]];
    })();
})(Hn);
var Cs = Hn.exports;
const Rs = "logger/5.7.0";
let Ln = !1, zn = !1;
const Tr = {
    debug: 1,
    default: 2,
    info: 2,
    warning: 3,
    error: 4,
    off: 5
};
let jn = Tr.default, Mi = null;
function Os() {
    try {
        const e = [];
        if ([
            "NFD",
            "NFC",
            "NFKD",
            "NFKC"
        ].forEach((t)=>{
            try {
                if ("test".normalize(t) !== "test") throw new Error("bad normalize");
            } catch  {
                e.push(t);
            }
        }), e.length) throw new Error("missing " + e.join(", "));
        if (String.fromCharCode(233).normalize("NFD") !== String.fromCharCode(101, 769)) throw new Error("broken implementation");
    } catch (e) {
        return e.message;
    }
    return null;
}
const Qn = Os();
var Ei;
(function(e) {
    e.DEBUG = "DEBUG", e.INFO = "INFO", e.WARNING = "WARNING", e.ERROR = "ERROR", e.OFF = "OFF";
})(Ei || (Ei = {}));
var re;
(function(e) {
    e.UNKNOWN_ERROR = "UNKNOWN_ERROR", e.NOT_IMPLEMENTED = "NOT_IMPLEMENTED", e.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION", e.NETWORK_ERROR = "NETWORK_ERROR", e.SERVER_ERROR = "SERVER_ERROR", e.TIMEOUT = "TIMEOUT", e.BUFFER_OVERRUN = "BUFFER_OVERRUN", e.NUMERIC_FAULT = "NUMERIC_FAULT", e.MISSING_NEW = "MISSING_NEW", e.INVALID_ARGUMENT = "INVALID_ARGUMENT", e.MISSING_ARGUMENT = "MISSING_ARGUMENT", e.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT", e.CALL_EXCEPTION = "CALL_EXCEPTION", e.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS", e.NONCE_EXPIRED = "NONCE_EXPIRED", e.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED", e.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT", e.TRANSACTION_REPLACED = "TRANSACTION_REPLACED", e.ACTION_REJECTED = "ACTION_REJECTED";
})(re || (re = {}));
const Jn = "0123456789abcdef";
class z {
    constructor(t){
        Object.defineProperty(this, "version", {
            enumerable: !0,
            value: t,
            writable: !1
        });
    }
    _log(t, r) {
        const i = t.toLowerCase();
        Tr[i] == null && this.throwArgumentError("invalid log level name", "logLevel", t), !(jn > Tr[i]) && console.log.apply(console, r);
    }
    debug(...t) {
        this._log(z.levels.DEBUG, t);
    }
    info(...t) {
        this._log(z.levels.INFO, t);
    }
    warn(...t) {
        this._log(z.levels.WARNING, t);
    }
    makeError(t, r, i) {
        if (zn) return this.makeError("censored error", r, {});
        r || (r = z.errors.UNKNOWN_ERROR), i || (i = {});
        const n = [];
        Object.keys(i).forEach((A)=>{
            const v = i[A];
            try {
                if (v instanceof Uint8Array) {
                    let w = "";
                    for(let y = 0; y < v.length; y++)w += Jn[v[y] >> 4], w += Jn[v[y] & 15];
                    n.push(A + "=Uint8Array(0x" + w + ")");
                } else n.push(A + "=" + JSON.stringify(v));
            } catch  {
                n.push(A + "=" + JSON.stringify(i[A].toString()));
            }
        }), n.push(`code=${r}`), n.push(`version=${this.version}`);
        const o = t;
        let h = "";
        switch(r){
            case re.NUMERIC_FAULT:
                {
                    h = "NUMERIC_FAULT";
                    const A = t;
                    switch(A){
                        case "overflow":
                        case "underflow":
                        case "division-by-zero":
                            h += "-" + A;
                            break;
                        case "negative-power":
                        case "negative-width":
                            h += "-unsupported";
                            break;
                        case "unbound-bitwise-result":
                            h += "-unbound-result";
                            break;
                    }
                    break;
                }
            case re.CALL_EXCEPTION:
            case re.INSUFFICIENT_FUNDS:
            case re.MISSING_NEW:
            case re.NONCE_EXPIRED:
            case re.REPLACEMENT_UNDERPRICED:
            case re.TRANSACTION_REPLACED:
            case re.UNPREDICTABLE_GAS_LIMIT:
                h = r;
                break;
        }
        h && (t += " [ See: https://links.ethers.org/v5-errors-" + h + " ]"), n.length && (t += " (" + n.join(", ") + ")");
        const p = new Error(t);
        return p.reason = o, p.code = r, Object.keys(i).forEach(function(A) {
            p[A] = i[A];
        }), p;
    }
    throwError(t, r, i) {
        throw this.makeError(t, r, i);
    }
    throwArgumentError(t, r, i) {
        return this.throwError(t, z.errors.INVALID_ARGUMENT, {
            argument: r,
            value: i
        });
    }
    assert(t, r, i, n) {
        t || this.throwError(r, i, n);
    }
    assertArgument(t, r, i, n) {
        t || this.throwArgumentError(r, i, n);
    }
    checkNormalize(t) {
        Qn && this.throwError("platform missing String.prototype.normalize", z.errors.UNSUPPORTED_OPERATION, {
            operation: "String.prototype.normalize",
            form: Qn
        });
    }
    checkSafeUint53(t, r) {
        typeof t == "number" && (r == null && (r = "value not safe"), (t < 0 || t >= 9007199254740991) && this.throwError(r, z.errors.NUMERIC_FAULT, {
            operation: "checkSafeInteger",
            fault: "out-of-safe-range",
            value: t
        }), t % 1 && this.throwError(r, z.errors.NUMERIC_FAULT, {
            operation: "checkSafeInteger",
            fault: "non-integer",
            value: t
        }));
    }
    checkArgumentCount(t, r, i) {
        i ? i = ": " + i : i = "", t < r && this.throwError("missing argument" + i, z.errors.MISSING_ARGUMENT, {
            count: t,
            expectedCount: r
        }), t > r && this.throwError("too many arguments" + i, z.errors.UNEXPECTED_ARGUMENT, {
            count: t,
            expectedCount: r
        });
    }
    checkNew(t, r) {
        (t === Object || t == null) && this.throwError("missing new", z.errors.MISSING_NEW, {
            name: r.name
        });
    }
    checkAbstract(t, r) {
        t === r ? this.throwError("cannot instantiate abstract class " + JSON.stringify(r.name) + " directly; use a sub-class", z.errors.UNSUPPORTED_OPERATION, {
            name: t.name,
            operation: "new"
        }) : (t === Object || t == null) && this.throwError("missing new", z.errors.MISSING_NEW, {
            name: r.name
        });
    }
    static globalLogger() {
        return Mi || (Mi = new z(Rs)), Mi;
    }
    static setCensorship(t, r) {
        if (!t && r && this.globalLogger().throwError("cannot permanently disable censorship", z.errors.UNSUPPORTED_OPERATION, {
            operation: "setCensorship"
        }), Ln) {
            if (!t) return;
            this.globalLogger().throwError("error censorship permanent", z.errors.UNSUPPORTED_OPERATION, {
                operation: "setCensorship"
            });
        }
        zn = !!t, Ln = !!r;
    }
    static setLogLevel(t) {
        const r = Tr[t.toLowerCase()];
        if (r == null) {
            z.globalLogger().warn("invalid log level - " + t);
            return;
        }
        jn = r;
    }
    static from(t) {
        return new z(t);
    }
}
z.errors = re, z.levels = Ei;
const Ps = "bytes/5.7.0", Tt = new z(Ps);
function Gn(e) {
    return !!e.toHexString;
}
function ir(e) {
    return e.slice || (e.slice = function() {
        const t = Array.prototype.slice.call(arguments);
        return ir(new Uint8Array(Array.prototype.slice.apply(e, t)));
    }), e;
}
function Ts(e) {
    return Jt(e) && !(e.length % 2) || nr(e);
}
function Yn(e) {
    return typeof e == "number" && e == e && e % 1 === 0;
}
function nr(e) {
    if (e == null) return !1;
    if (e.constructor === Uint8Array) return !0;
    if (typeof e == "string" || !Yn(e.length) || e.length < 0) return !1;
    for(let t = 0; t < e.length; t++){
        const r = e[t];
        if (!Yn(r) || r < 0 || r >= 256) return !1;
    }
    return !0;
}
function Ot(e, t) {
    if (t || (t = {}), typeof e == "number") {
        Tt.checkSafeUint53(e, "invalid arrayify value");
        const r = [];
        for(; e;)r.unshift(e & 255), e = parseInt(String(e / 256));
        return r.length === 0 && r.push(0), ir(new Uint8Array(r));
    }
    if (t.allowMissingPrefix && typeof e == "string" && e.substring(0, 2) !== "0x" && (e = "0x" + e), Gn(e) && (e = e.toHexString()), Jt(e)) {
        let r = e.substring(2);
        r.length % 2 && (t.hexPad === "left" ? r = "0" + r : t.hexPad === "right" ? r += "0" : Tt.throwArgumentError("hex data is odd-length", "value", e));
        const i = [];
        for(let n = 0; n < r.length; n += 2)i.push(parseInt(r.substring(n, n + 2), 16));
        return ir(new Uint8Array(i));
    }
    return nr(e) ? ir(new Uint8Array(e)) : Tt.throwArgumentError("invalid arrayify value", "value", e);
}
function Ds(e) {
    const t = e.map((n)=>Ot(n)), r = t.reduce((n, o)=>n + o.length, 0), i = new Uint8Array(r);
    return t.reduce((n, o)=>(i.set(o, n), n + o.length), 0), ir(i);
}
function Fs(e, t) {
    e = Ot(e), e.length > t && Tt.throwArgumentError("value out of range", "value", arguments[0]);
    const r = new Uint8Array(t);
    return r.set(e, t - e.length), ir(r);
}
function Jt(e, t) {
    return !(typeof e != "string" || !e.match(/^0x[0-9A-Fa-f]*$/) || t && e.length !== 2 + 2 * t);
}
const Si = "0123456789abcdef";
function Kt(e, t) {
    if (t || (t = {}), typeof e == "number") {
        Tt.checkSafeUint53(e, "invalid hexlify value");
        let r = "";
        for(; e;)r = Si[e & 15] + r, e = Math.floor(e / 16);
        return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00";
    }
    if (typeof e == "bigint") return e = e.toString(16), e.length % 2 ? "0x0" + e : "0x" + e;
    if (t.allowMissingPrefix && typeof e == "string" && e.substring(0, 2) !== "0x" && (e = "0x" + e), Gn(e)) return e.toHexString();
    if (Jt(e)) return e.length % 2 && (t.hexPad === "left" ? e = "0x0" + e.substring(2) : t.hexPad === "right" ? e += "0" : Tt.throwArgumentError("hex data is odd-length", "value", e)), e.toLowerCase();
    if (nr(e)) {
        let r = "0x";
        for(let i = 0; i < e.length; i++){
            let n = e[i];
            r += Si[(n & 240) >> 4] + Si[n & 15];
        }
        return r;
    }
    return Tt.throwArgumentError("invalid hexlify value", "value", e);
}
function Us(e) {
    if (typeof e != "string") e = Kt(e);
    else if (!Jt(e) || e.length % 2) return null;
    return (e.length - 2) / 2;
}
function Vn(e, t, r) {
    return typeof e != "string" ? e = Kt(e) : (!Jt(e) || e.length % 2) && Tt.throwArgumentError("invalid hexData", "value", e), t = 2 + 2 * t, r != null ? "0x" + e.substring(t, 2 + 2 * r) : "0x" + e.substring(t);
}
function oe(e, t) {
    for(typeof e != "string" ? e = Kt(e) : Jt(e) || Tt.throwArgumentError("invalid hex string", "value", e), e.length > 2 * t + 2 && Tt.throwArgumentError("value out of range", "value", arguments[1]); e.length < 2 * t + 2;)e = "0x0" + e.substring(2);
    return e;
}
function Wn(e) {
    const t = {
        r: "0x",
        s: "0x",
        _vs: "0x",
        recoveryParam: 0,
        v: 0,
        yParityAndS: "0x",
        compact: "0x"
    };
    if (Ts(e)) {
        let r = Ot(e);
        r.length === 64 ? (t.v = 27 + (r[32] >> 7), r[32] &= 127, t.r = Kt(r.slice(0, 32)), t.s = Kt(r.slice(32, 64))) : r.length === 65 ? (t.r = Kt(r.slice(0, 32)), t.s = Kt(r.slice(32, 64)), t.v = r[64]) : Tt.throwArgumentError("invalid signature string", "signature", e), t.v < 27 && (t.v === 0 || t.v === 1 ? t.v += 27 : Tt.throwArgumentError("signature invalid v byte", "signature", e)), t.recoveryParam = 1 - t.v % 2, t.recoveryParam && (r[32] |= 128), t._vs = Kt(r.slice(32, 64));
    } else {
        if (t.r = e.r, t.s = e.s, t.v = e.v, t.recoveryParam = e.recoveryParam, t._vs = e._vs, t._vs != null) {
            const n = Fs(Ot(t._vs), 32);
            t._vs = Kt(n);
            const o = n[0] >= 128 ? 1 : 0;
            t.recoveryParam == null ? t.recoveryParam = o : t.recoveryParam !== o && Tt.throwArgumentError("signature recoveryParam mismatch _vs", "signature", e), n[0] &= 127;
            const h = Kt(n);
            t.s == null ? t.s = h : t.s !== h && Tt.throwArgumentError("signature v mismatch _vs", "signature", e);
        }
        if (t.recoveryParam == null) t.v == null ? Tt.throwArgumentError("signature missing v and recoveryParam", "signature", e) : t.v === 0 || t.v === 1 ? t.recoveryParam = t.v : t.recoveryParam = 1 - t.v % 2;
        else if (t.v == null) t.v = 27 + t.recoveryParam;
        else {
            const n = t.v === 0 || t.v === 1 ? t.v : 1 - t.v % 2;
            t.recoveryParam !== n && Tt.throwArgumentError("signature recoveryParam mismatch v", "signature", e);
        }
        t.r == null || !Jt(t.r) ? Tt.throwArgumentError("signature missing or invalid r", "signature", e) : t.r = oe(t.r, 32), t.s == null || !Jt(t.s) ? Tt.throwArgumentError("signature missing or invalid s", "signature", e) : t.s = oe(t.s, 32);
        const r = Ot(t.s);
        r[0] >= 128 && Tt.throwArgumentError("signature s out of range", "signature", e), t.recoveryParam && (r[0] |= 128);
        const i = Kt(r);
        t._vs && (Jt(t._vs) || Tt.throwArgumentError("signature invalid _vs", "signature", e), t._vs = oe(t._vs, 32)), t._vs == null ? t._vs = i : t._vs !== i && Tt.throwArgumentError("signature _vs mismatch v and s", "signature", e);
    }
    return t.yParityAndS = t._vs, t.compact = t.r + t.yParityAndS.substring(2), t;
}
function Ii(e) {
    return "0x" + Cs.keccak_256(Ot(e));
}
var Xn = {
    exports: {}
}, ks = {}, qs = Object.freeze({
    __proto__: null,
    default: ks
}), Ks = Bs(qs);
(function(e) {
    (function(t, r) {
        function i(b, f) {
            if (!b) throw new Error(f || "Assertion failed");
        }
        function n(b, f) {
            b.super_ = f;
            var a = function() {};
            a.prototype = f.prototype, b.prototype = new a, b.prototype.constructor = b;
        }
        function o(b, f, a) {
            if (o.isBN(b)) return b;
            this.negative = 0, this.words = null, this.length = 0, this.red = null, b !== null && ((f === "le" || f === "be") && (a = f, f = 10), this._init(b || 0, f || 10, a || "be"));
        }
        typeof t == "object" ? t.exports = o : r.BN = o, o.BN = o, o.wordSize = 26;
        var h;
        try {
            typeof window < "u" && typeof window.Buffer < "u" ? h = window.Buffer : h = Ks.Buffer;
        } catch  {}
        o.isBN = function(f) {
            return f instanceof o ? !0 : f !== null && typeof f == "object" && f.constructor.wordSize === o.wordSize && Array.isArray(f.words);
        }, o.max = function(f, a) {
            return f.cmp(a) > 0 ? f : a;
        }, o.min = function(f, a) {
            return f.cmp(a) < 0 ? f : a;
        }, o.prototype._init = function(f, a, c) {
            if (typeof f == "number") return this._initNumber(f, a, c);
            if (typeof f == "object") return this._initArray(f, a, c);
            a === "hex" && (a = 16), i(a === (a | 0) && a >= 2 && a <= 36), f = f.toString().replace(/\s+/g, "");
            var d = 0;
            f[0] === "-" && (d++, this.negative = 1), d < f.length && (a === 16 ? this._parseHex(f, d, c) : (this._parseBase(f, a, d), c === "le" && this._initArray(this.toArray(), a, c)));
        }, o.prototype._initNumber = function(f, a, c) {
            f < 0 && (this.negative = 1, f = -f), f < 67108864 ? (this.words = [
                f & 67108863
            ], this.length = 1) : f < 4503599627370496 ? (this.words = [
                f & 67108863,
                f / 67108864 & 67108863
            ], this.length = 2) : (i(f < 9007199254740992), this.words = [
                f & 67108863,
                f / 67108864 & 67108863,
                1
            ], this.length = 3), c === "le" && this._initArray(this.toArray(), a, c);
        }, o.prototype._initArray = function(f, a, c) {
            if (i(typeof f.length == "number"), f.length <= 0) return this.words = [
                0
            ], this.length = 1, this;
            this.length = Math.ceil(f.length / 3), this.words = new Array(this.length);
            for(var d = 0; d < this.length; d++)this.words[d] = 0;
            var m, x, M = 0;
            if (c === "be") for(d = f.length - 1, m = 0; d >= 0; d -= 3)x = f[d] | f[d - 1] << 8 | f[d - 2] << 16, this.words[m] |= x << M & 67108863, this.words[m + 1] = x >>> 26 - M & 67108863, M += 24, M >= 26 && (M -= 26, m++);
            else if (c === "le") for(d = 0, m = 0; d < f.length; d += 3)x = f[d] | f[d + 1] << 8 | f[d + 2] << 16, this.words[m] |= x << M & 67108863, this.words[m + 1] = x >>> 26 - M & 67108863, M += 24, M >= 26 && (M -= 26, m++);
            return this._strip();
        };
        function p(b, f) {
            var a = b.charCodeAt(f);
            if (a >= 48 && a <= 57) return a - 48;
            if (a >= 65 && a <= 70) return a - 55;
            if (a >= 97 && a <= 102) return a - 87;
            i(!1, "Invalid character in " + b);
        }
        function A(b, f, a) {
            var c = p(b, a);
            return a - 1 >= f && (c |= p(b, a - 1) << 4), c;
        }
        o.prototype._parseHex = function(f, a, c) {
            this.length = Math.ceil((f.length - a) / 6), this.words = new Array(this.length);
            for(var d = 0; d < this.length; d++)this.words[d] = 0;
            var m = 0, x = 0, M;
            if (c === "be") for(d = f.length - 1; d >= a; d -= 2)M = A(f, a, d) << m, this.words[x] |= M & 67108863, m >= 18 ? (m -= 18, x += 1, this.words[x] |= M >>> 26) : m += 8;
            else {
                var l = f.length - a;
                for(d = l % 2 === 0 ? a + 1 : a; d < f.length; d += 2)M = A(f, a, d) << m, this.words[x] |= M & 67108863, m >= 18 ? (m -= 18, x += 1, this.words[x] |= M >>> 26) : m += 8;
            }
            this._strip();
        };
        function v(b, f, a, c) {
            for(var d = 0, m = 0, x = Math.min(b.length, a), M = f; M < x; M++){
                var l = b.charCodeAt(M) - 48;
                d *= c, l >= 49 ? m = l - 49 + 10 : l >= 17 ? m = l - 17 + 10 : m = l, i(l >= 0 && m < c, "Invalid character"), d += m;
            }
            return d;
        }
        o.prototype._parseBase = function(f, a, c) {
            this.words = [
                0
            ], this.length = 1;
            for(var d = 0, m = 1; m <= 67108863; m *= a)d++;
            d--, m = m / a | 0;
            for(var x = f.length - c, M = x % d, l = Math.min(x, x - M) + c, s = 0, g = c; g < l; g += d)s = v(f, g, g + d, a), this.imuln(m), this.words[0] + s < 67108864 ? this.words[0] += s : this._iaddn(s);
            if (M !== 0) {
                var k = 1;
                for(s = v(f, g, f.length, a), g = 0; g < M; g++)k *= a;
                this.imuln(k), this.words[0] + s < 67108864 ? this.words[0] += s : this._iaddn(s);
            }
            this._strip();
        }, o.prototype.copy = function(f) {
            f.words = new Array(this.length);
            for(var a = 0; a < this.length; a++)f.words[a] = this.words[a];
            f.length = this.length, f.negative = this.negative, f.red = this.red;
        };
        function w(b, f) {
            b.words = f.words, b.length = f.length, b.negative = f.negative, b.red = f.red;
        }
        if (o.prototype._move = function(f) {
            w(f, this);
        }, o.prototype.clone = function() {
            var f = new o(null);
            return this.copy(f), f;
        }, o.prototype._expand = function(f) {
            for(; this.length < f;)this.words[this.length++] = 0;
            return this;
        }, o.prototype._strip = function() {
            for(; this.length > 1 && this.words[this.length - 1] === 0;)this.length--;
            return this._normSign();
        }, o.prototype._normSign = function() {
            return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
        }, typeof Symbol < "u" && typeof Symbol.for == "function") try {
            o.prototype[Symbol.for("nodejs.util.inspect.custom")] = y;
        } catch  {
            o.prototype.inspect = y;
        }
        else o.prototype.inspect = y;
        function y() {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
        }
        var S = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000"
        ], N = [
            0,
            0,
            25,
            16,
            12,
            11,
            10,
            9,
            8,
            8,
            7,
            7,
            7,
            7,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ], I = [
            0,
            0,
            33554432,
            43046721,
            16777216,
            48828125,
            60466176,
            40353607,
            16777216,
            43046721,
            1e7,
            19487171,
            35831808,
            62748517,
            7529536,
            11390625,
            16777216,
            24137569,
            34012224,
            47045881,
            64e6,
            4084101,
            5153632,
            6436343,
            7962624,
            9765625,
            11881376,
            14348907,
            17210368,
            20511149,
            243e5,
            28629151,
            33554432,
            39135393,
            45435424,
            52521875,
            60466176
        ];
        o.prototype.toString = function(f, a) {
            f = f || 10, a = a | 0 || 1;
            var c;
            if (f === 16 || f === "hex") {
                c = "";
                for(var d = 0, m = 0, x = 0; x < this.length; x++){
                    var M = this.words[x], l = ((M << d | m) & 16777215).toString(16);
                    m = M >>> 24 - d & 16777215, d += 2, d >= 26 && (d -= 26, x--), m !== 0 || x !== this.length - 1 ? c = S[6 - l.length] + l + c : c = l + c;
                }
                for(m !== 0 && (c = m.toString(16) + c); c.length % a !== 0;)c = "0" + c;
                return this.negative !== 0 && (c = "-" + c), c;
            }
            if (f === (f | 0) && f >= 2 && f <= 36) {
                var s = N[f], g = I[f];
                c = "";
                var k = this.clone();
                for(k.negative = 0; !k.isZero();){
                    var u = k.modrn(g).toString(f);
                    k = k.idivn(g), k.isZero() ? c = u + c : c = S[s - u.length] + u + c;
                }
                for(this.isZero() && (c = "0" + c); c.length % a !== 0;)c = "0" + c;
                return this.negative !== 0 && (c = "-" + c), c;
            }
            i(!1, "Base should be between 2 and 36");
        }, o.prototype.toNumber = function() {
            var f = this.words[0];
            return this.length === 2 ? f += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? f += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && i(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -f : f;
        }, o.prototype.toJSON = function() {
            return this.toString(16, 2);
        }, h && (o.prototype.toBuffer = function(f, a) {
            return this.toArrayLike(h, f, a);
        }), o.prototype.toArray = function(f, a) {
            return this.toArrayLike(Array, f, a);
        };
        var C = function(f, a) {
            return f.allocUnsafe ? f.allocUnsafe(a) : new f(a);
        };
        o.prototype.toArrayLike = function(f, a, c) {
            this._strip();
            var d = this.byteLength(), m = c || Math.max(1, d);
            i(d <= m, "byte array longer than desired length"), i(m > 0, "Requested array length <= 0");
            var x = C(f, m), M = a === "le" ? "LE" : "BE";
            return this["_toArrayLike" + M](x, d), x;
        }, o.prototype._toArrayLikeLE = function(f, a) {
            for(var c = 0, d = 0, m = 0, x = 0; m < this.length; m++){
                var M = this.words[m] << x | d;
                f[c++] = M & 255, c < f.length && (f[c++] = M >> 8 & 255), c < f.length && (f[c++] = M >> 16 & 255), x === 6 ? (c < f.length && (f[c++] = M >> 24 & 255), d = 0, x = 0) : (d = M >>> 24, x += 2);
            }
            if (c < f.length) for(f[c++] = d; c < f.length;)f[c++] = 0;
        }, o.prototype._toArrayLikeBE = function(f, a) {
            for(var c = f.length - 1, d = 0, m = 0, x = 0; m < this.length; m++){
                var M = this.words[m] << x | d;
                f[c--] = M & 255, c >= 0 && (f[c--] = M >> 8 & 255), c >= 0 && (f[c--] = M >> 16 & 255), x === 6 ? (c >= 0 && (f[c--] = M >> 24 & 255), d = 0, x = 0) : (d = M >>> 24, x += 2);
            }
            if (c >= 0) for(f[c--] = d; c >= 0;)f[c--] = 0;
        }, Math.clz32 ? o.prototype._countBits = function(f) {
            return 32 - Math.clz32(f);
        } : o.prototype._countBits = function(f) {
            var a = f, c = 0;
            return a >= 4096 && (c += 13, a >>>= 13), a >= 64 && (c += 7, a >>>= 7), a >= 8 && (c += 4, a >>>= 4), a >= 2 && (c += 2, a >>>= 2), c + a;
        }, o.prototype._zeroBits = function(f) {
            if (f === 0) return 26;
            var a = f, c = 0;
            return a & 8191 || (c += 13, a >>>= 13), a & 127 || (c += 7, a >>>= 7), a & 15 || (c += 4, a >>>= 4), a & 3 || (c += 2, a >>>= 2), a & 1 || c++, c;
        }, o.prototype.bitLength = function() {
            var f = this.words[this.length - 1], a = this._countBits(f);
            return (this.length - 1) * 26 + a;
        };
        function D(b) {
            for(var f = new Array(b.bitLength()), a = 0; a < f.length; a++){
                var c = a / 26 | 0, d = a % 26;
                f[a] = b.words[c] >>> d & 1;
            }
            return f;
        }
        o.prototype.zeroBits = function() {
            if (this.isZero()) return 0;
            for(var f = 0, a = 0; a < this.length; a++){
                var c = this._zeroBits(this.words[a]);
                if (f += c, c !== 26) break;
            }
            return f;
        }, o.prototype.byteLength = function() {
            return Math.ceil(this.bitLength() / 8);
        }, o.prototype.toTwos = function(f) {
            return this.negative !== 0 ? this.abs().inotn(f).iaddn(1) : this.clone();
        }, o.prototype.fromTwos = function(f) {
            return this.testn(f - 1) ? this.notn(f).iaddn(1).ineg() : this.clone();
        }, o.prototype.isNeg = function() {
            return this.negative !== 0;
        }, o.prototype.neg = function() {
            return this.clone().ineg();
        }, o.prototype.ineg = function() {
            return this.isZero() || (this.negative ^= 1), this;
        }, o.prototype.iuor = function(f) {
            for(; this.length < f.length;)this.words[this.length++] = 0;
            for(var a = 0; a < f.length; a++)this.words[a] = this.words[a] | f.words[a];
            return this._strip();
        }, o.prototype.ior = function(f) {
            return i((this.negative | f.negative) === 0), this.iuor(f);
        }, o.prototype.or = function(f) {
            return this.length > f.length ? this.clone().ior(f) : f.clone().ior(this);
        }, o.prototype.uor = function(f) {
            return this.length > f.length ? this.clone().iuor(f) : f.clone().iuor(this);
        }, o.prototype.iuand = function(f) {
            var a;
            this.length > f.length ? a = f : a = this;
            for(var c = 0; c < a.length; c++)this.words[c] = this.words[c] & f.words[c];
            return this.length = a.length, this._strip();
        }, o.prototype.iand = function(f) {
            return i((this.negative | f.negative) === 0), this.iuand(f);
        }, o.prototype.and = function(f) {
            return this.length > f.length ? this.clone().iand(f) : f.clone().iand(this);
        }, o.prototype.uand = function(f) {
            return this.length > f.length ? this.clone().iuand(f) : f.clone().iuand(this);
        }, o.prototype.iuxor = function(f) {
            var a, c;
            this.length > f.length ? (a = this, c = f) : (a = f, c = this);
            for(var d = 0; d < c.length; d++)this.words[d] = a.words[d] ^ c.words[d];
            if (this !== a) for(; d < a.length; d++)this.words[d] = a.words[d];
            return this.length = a.length, this._strip();
        }, o.prototype.ixor = function(f) {
            return i((this.negative | f.negative) === 0), this.iuxor(f);
        }, o.prototype.xor = function(f) {
            return this.length > f.length ? this.clone().ixor(f) : f.clone().ixor(this);
        }, o.prototype.uxor = function(f) {
            return this.length > f.length ? this.clone().iuxor(f) : f.clone().iuxor(this);
        }, o.prototype.inotn = function(f) {
            i(typeof f == "number" && f >= 0);
            var a = Math.ceil(f / 26) | 0, c = f % 26;
            this._expand(a), c > 0 && a--;
            for(var d = 0; d < a; d++)this.words[d] = ~this.words[d] & 67108863;
            return c > 0 && (this.words[d] = ~this.words[d] & 67108863 >> 26 - c), this._strip();
        }, o.prototype.notn = function(f) {
            return this.clone().inotn(f);
        }, o.prototype.setn = function(f, a) {
            i(typeof f == "number" && f >= 0);
            var c = f / 26 | 0, d = f % 26;
            return this._expand(c + 1), a ? this.words[c] = this.words[c] | 1 << d : this.words[c] = this.words[c] & ~(1 << d), this._strip();
        }, o.prototype.iadd = function(f) {
            var a;
            if (this.negative !== 0 && f.negative === 0) return this.negative = 0, a = this.isub(f), this.negative ^= 1, this._normSign();
            if (this.negative === 0 && f.negative !== 0) return f.negative = 0, a = this.isub(f), f.negative = 1, a._normSign();
            var c, d;
            this.length > f.length ? (c = this, d = f) : (c = f, d = this);
            for(var m = 0, x = 0; x < d.length; x++)a = (c.words[x] | 0) + (d.words[x] | 0) + m, this.words[x] = a & 67108863, m = a >>> 26;
            for(; m !== 0 && x < c.length; x++)a = (c.words[x] | 0) + m, this.words[x] = a & 67108863, m = a >>> 26;
            if (this.length = c.length, m !== 0) this.words[this.length] = m, this.length++;
            else if (c !== this) for(; x < c.length; x++)this.words[x] = c.words[x];
            return this;
        }, o.prototype.add = function(f) {
            var a;
            return f.negative !== 0 && this.negative === 0 ? (f.negative = 0, a = this.sub(f), f.negative ^= 1, a) : f.negative === 0 && this.negative !== 0 ? (this.negative = 0, a = f.sub(this), this.negative = 1, a) : this.length > f.length ? this.clone().iadd(f) : f.clone().iadd(this);
        }, o.prototype.isub = function(f) {
            if (f.negative !== 0) {
                f.negative = 0;
                var a = this.iadd(f);
                return f.negative = 1, a._normSign();
            } else if (this.negative !== 0) return this.negative = 0, this.iadd(f), this.negative = 1, this._normSign();
            var c = this.cmp(f);
            if (c === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
            var d, m;
            c > 0 ? (d = this, m = f) : (d = f, m = this);
            for(var x = 0, M = 0; M < m.length; M++)a = (d.words[M] | 0) - (m.words[M] | 0) + x, x = a >> 26, this.words[M] = a & 67108863;
            for(; x !== 0 && M < d.length; M++)a = (d.words[M] | 0) + x, x = a >> 26, this.words[M] = a & 67108863;
            if (x === 0 && M < d.length && d !== this) for(; M < d.length; M++)this.words[M] = d.words[M];
            return this.length = Math.max(this.length, M), d !== this && (this.negative = 1), this._strip();
        }, o.prototype.sub = function(f) {
            return this.clone().isub(f);
        };
        function U(b, f, a) {
            a.negative = f.negative ^ b.negative;
            var c = b.length + f.length | 0;
            a.length = c, c = c - 1 | 0;
            var d = b.words[0] | 0, m = f.words[0] | 0, x = d * m, M = x & 67108863, l = x / 67108864 | 0;
            a.words[0] = M;
            for(var s = 1; s < c; s++){
                for(var g = l >>> 26, k = l & 67108863, u = Math.min(s, f.length - 1), E = Math.max(0, s - b.length + 1); E <= u; E++){
                    var _ = s - E | 0;
                    d = b.words[_] | 0, m = f.words[E] | 0, x = d * m + k, g += x / 67108864 | 0, k = x & 67108863;
                }
                a.words[s] = k | 0, l = g | 0;
            }
            return l !== 0 ? a.words[s] = l | 0 : a.length--, a._strip();
        }
        var J = function(f, a, c) {
            var d = f.words, m = a.words, x = c.words, M = 0, l, s, g, k = d[0] | 0, u = k & 8191, E = k >>> 13, _ = d[1] | 0, B = _ & 8191, R = _ >>> 13, F = d[2] | 0, P = F & 8191, O = F >>> 13, Ct = d[3] | 0, T = Ct & 8191, q = Ct >>> 13, Te = d[4] | 0, X = Te & 8191, $ = Te >>> 13, De = d[5] | 0, Z = De & 8191, tt = De >>> 13, Fe = d[6] | 0, et = Fe & 8191, rt = Fe >>> 13, Ue = d[7] | 0, it = Ue & 8191, nt = Ue >>> 13, ke = d[8] | 0, ft = ke & 8191, ot = ke >>> 13, qe = d[9] | 0, st = qe & 8191, at = qe >>> 13, Ke = m[0] | 0, ut = Ke & 8191, ht = Ke >>> 13, He = m[1] | 0, ct = He & 8191, lt = He >>> 13, Le = m[2] | 0, dt = Le & 8191, pt = Le >>> 13, ze = m[3] | 0, vt = ze & 8191, gt = ze >>> 13, je = m[4] | 0, mt = je & 8191, At = je >>> 13, Qe = m[5] | 0, bt = Qe & 8191, yt = Qe >>> 13, Je = m[6] | 0, wt = Je & 8191, xt = Je >>> 13, Ge = m[7] | 0, Mt = Ge & 8191, Et = Ge >>> 13, Ye = m[8] | 0, St = Ye & 8191, It = Ye >>> 13, Ve = m[9] | 0, Nt = Ve & 8191, _t = Ve >>> 13;
            c.negative = f.negative ^ a.negative, c.length = 19, l = Math.imul(u, ut), s = Math.imul(u, ht), s = s + Math.imul(E, ut) | 0, g = Math.imul(E, ht);
            var Me = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (g + (s >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, l = Math.imul(B, ut), s = Math.imul(B, ht), s = s + Math.imul(R, ut) | 0, g = Math.imul(R, ht), l = l + Math.imul(u, ct) | 0, s = s + Math.imul(u, lt) | 0, s = s + Math.imul(E, ct) | 0, g = g + Math.imul(E, lt) | 0;
            var Ee = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (g + (s >>> 13) | 0) + (Ee >>> 26) | 0, Ee &= 67108863, l = Math.imul(P, ut), s = Math.imul(P, ht), s = s + Math.imul(O, ut) | 0, g = Math.imul(O, ht), l = l + Math.imul(B, ct) | 0, s = s + Math.imul(B, lt) | 0, s = s + Math.imul(R, ct) | 0, g = g + Math.imul(R, lt) | 0, l = l + Math.imul(u, dt) | 0, s = s + Math.imul(u, pt) | 0, s = s + Math.imul(E, dt) | 0, g = g + Math.imul(E, pt) | 0;
            var Se = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (g + (s >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, l = Math.imul(T, ut), s = Math.imul(T, ht), s = s + Math.imul(q, ut) | 0, g = Math.imul(q, ht), l = l + Math.imul(P, ct) | 0, s = s + Math.imul(P, lt) | 0, s = s + Math.imul(O, ct) | 0, g = g + Math.imul(O, lt) | 0, l = l + Math.imul(B, dt) | 0, s = s + Math.imul(B, pt) | 0, s = s + Math.imul(R, dt) | 0, g = g + Math.imul(R, pt) | 0, l = l + Math.imul(u, vt) | 0, s = s + Math.imul(u, gt) | 0, s = s + Math.imul(E, vt) | 0, g = g + Math.imul(E, gt) | 0;
            var Ie = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (g + (s >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, l = Math.imul(X, ut), s = Math.imul(X, ht), s = s + Math.imul($, ut) | 0, g = Math.imul($, ht), l = l + Math.imul(T, ct) | 0, s = s + Math.imul(T, lt) | 0, s = s + Math.imul(q, ct) | 0, g = g + Math.imul(q, lt) | 0, l = l + Math.imul(P, dt) | 0, s = s + Math.imul(P, pt) | 0, s = s + Math.imul(O, dt) | 0, g = g + Math.imul(O, pt) | 0, l = l + Math.imul(B, vt) | 0, s = s + Math.imul(B, gt) | 0, s = s + Math.imul(R, vt) | 0, g = g + Math.imul(R, gt) | 0, l = l + Math.imul(u, mt) | 0, s = s + Math.imul(u, At) | 0, s = s + Math.imul(E, mt) | 0, g = g + Math.imul(E, At) | 0;
            var Ne = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (g + (s >>> 13) | 0) + (Ne >>> 26) | 0, Ne &= 67108863, l = Math.imul(Z, ut), s = Math.imul(Z, ht), s = s + Math.imul(tt, ut) | 0, g = Math.imul(tt, ht), l = l + Math.imul(X, ct) | 0, s = s + Math.imul(X, lt) | 0, s = s + Math.imul($, ct) | 0, g = g + Math.imul($, lt) | 0, l = l + Math.imul(T, dt) | 0, s = s + Math.imul(T, pt) | 0, s = s + Math.imul(q, dt) | 0, g = g + Math.imul(q, pt) | 0, l = l + Math.imul(P, vt) | 0, s = s + Math.imul(P, gt) | 0, s = s + Math.imul(O, vt) | 0, g = g + Math.imul(O, gt) | 0, l = l + Math.imul(B, mt) | 0, s = s + Math.imul(B, At) | 0, s = s + Math.imul(R, mt) | 0, g = g + Math.imul(R, At) | 0, l = l + Math.imul(u, bt) | 0, s = s + Math.imul(u, yt) | 0, s = s + Math.imul(E, bt) | 0, g = g + Math.imul(E, yt) | 0;
            var Zr = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (g + (s >>> 13) | 0) + (Zr >>> 26) | 0, Zr &= 67108863, l = Math.imul(et, ut), s = Math.imul(et, ht), s = s + Math.imul(rt, ut) | 0, g = Math.imul(rt, ht), l = l + Math.imul(Z, ct) | 0, s = s + Math.imul(Z, lt) | 0, s = s + Math.imul(tt, ct) | 0, g = g + Math.imul(tt, lt) | 0, l = l + Math.imul(X, dt) | 0, s = s + Math.imul(X, pt) | 0, s = s + Math.imul($, dt) | 0, g = g + Math.imul($, pt) | 0, l = l + Math.imul(T, vt) | 0, s = s + Math.imul(T, gt) | 0, s = s + Math.imul(q, vt) | 0, g = g + Math.imul(q, gt) | 0, l = l + Math.imul(P, mt) | 0, s = s + Math.imul(P, At) | 0, s = s + Math.imul(O, mt) | 0, g = g + Math.imul(O, At) | 0, l = l + Math.imul(B, bt) | 0, s = s + Math.imul(B, yt) | 0, s = s + Math.imul(R, bt) | 0, g = g + Math.imul(R, yt) | 0, l = l + Math.imul(u, wt) | 0, s = s + Math.imul(u, xt) | 0, s = s + Math.imul(E, wt) | 0, g = g + Math.imul(E, xt) | 0;
            var ti = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (g + (s >>> 13) | 0) + (ti >>> 26) | 0, ti &= 67108863, l = Math.imul(it, ut), s = Math.imul(it, ht), s = s + Math.imul(nt, ut) | 0, g = Math.imul(nt, ht), l = l + Math.imul(et, ct) | 0, s = s + Math.imul(et, lt) | 0, s = s + Math.imul(rt, ct) | 0, g = g + Math.imul(rt, lt) | 0, l = l + Math.imul(Z, dt) | 0, s = s + Math.imul(Z, pt) | 0, s = s + Math.imul(tt, dt) | 0, g = g + Math.imul(tt, pt) | 0, l = l + Math.imul(X, vt) | 0, s = s + Math.imul(X, gt) | 0, s = s + Math.imul($, vt) | 0, g = g + Math.imul($, gt) | 0, l = l + Math.imul(T, mt) | 0, s = s + Math.imul(T, At) | 0, s = s + Math.imul(q, mt) | 0, g = g + Math.imul(q, At) | 0, l = l + Math.imul(P, bt) | 0, s = s + Math.imul(P, yt) | 0, s = s + Math.imul(O, bt) | 0, g = g + Math.imul(O, yt) | 0, l = l + Math.imul(B, wt) | 0, s = s + Math.imul(B, xt) | 0, s = s + Math.imul(R, wt) | 0, g = g + Math.imul(R, xt) | 0, l = l + Math.imul(u, Mt) | 0, s = s + Math.imul(u, Et) | 0, s = s + Math.imul(E, Mt) | 0, g = g + Math.imul(E, Et) | 0;
            var ei = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (g + (s >>> 13) | 0) + (ei >>> 26) | 0, ei &= 67108863, l = Math.imul(ft, ut), s = Math.imul(ft, ht), s = s + Math.imul(ot, ut) | 0, g = Math.imul(ot, ht), l = l + Math.imul(it, ct) | 0, s = s + Math.imul(it, lt) | 0, s = s + Math.imul(nt, ct) | 0, g = g + Math.imul(nt, lt) | 0, l = l + Math.imul(et, dt) | 0, s = s + Math.imul(et, pt) | 0, s = s + Math.imul(rt, dt) | 0, g = g + Math.imul(rt, pt) | 0, l = l + Math.imul(Z, vt) | 0, s = s + Math.imul(Z, gt) | 0, s = s + Math.imul(tt, vt) | 0, g = g + Math.imul(tt, gt) | 0, l = l + Math.imul(X, mt) | 0, s = s + Math.imul(X, At) | 0, s = s + Math.imul($, mt) | 0, g = g + Math.imul($, At) | 0, l = l + Math.imul(T, bt) | 0, s = s + Math.imul(T, yt) | 0, s = s + Math.imul(q, bt) | 0, g = g + Math.imul(q, yt) | 0, l = l + Math.imul(P, wt) | 0, s = s + Math.imul(P, xt) | 0, s = s + Math.imul(O, wt) | 0, g = g + Math.imul(O, xt) | 0, l = l + Math.imul(B, Mt) | 0, s = s + Math.imul(B, Et) | 0, s = s + Math.imul(R, Mt) | 0, g = g + Math.imul(R, Et) | 0, l = l + Math.imul(u, St) | 0, s = s + Math.imul(u, It) | 0, s = s + Math.imul(E, St) | 0, g = g + Math.imul(E, It) | 0;
            var ri = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (g + (s >>> 13) | 0) + (ri >>> 26) | 0, ri &= 67108863, l = Math.imul(st, ut), s = Math.imul(st, ht), s = s + Math.imul(at, ut) | 0, g = Math.imul(at, ht), l = l + Math.imul(ft, ct) | 0, s = s + Math.imul(ft, lt) | 0, s = s + Math.imul(ot, ct) | 0, g = g + Math.imul(ot, lt) | 0, l = l + Math.imul(it, dt) | 0, s = s + Math.imul(it, pt) | 0, s = s + Math.imul(nt, dt) | 0, g = g + Math.imul(nt, pt) | 0, l = l + Math.imul(et, vt) | 0, s = s + Math.imul(et, gt) | 0, s = s + Math.imul(rt, vt) | 0, g = g + Math.imul(rt, gt) | 0, l = l + Math.imul(Z, mt) | 0, s = s + Math.imul(Z, At) | 0, s = s + Math.imul(tt, mt) | 0, g = g + Math.imul(tt, At) | 0, l = l + Math.imul(X, bt) | 0, s = s + Math.imul(X, yt) | 0, s = s + Math.imul($, bt) | 0, g = g + Math.imul($, yt) | 0, l = l + Math.imul(T, wt) | 0, s = s + Math.imul(T, xt) | 0, s = s + Math.imul(q, wt) | 0, g = g + Math.imul(q, xt) | 0, l = l + Math.imul(P, Mt) | 0, s = s + Math.imul(P, Et) | 0, s = s + Math.imul(O, Mt) | 0, g = g + Math.imul(O, Et) | 0, l = l + Math.imul(B, St) | 0, s = s + Math.imul(B, It) | 0, s = s + Math.imul(R, St) | 0, g = g + Math.imul(R, It) | 0, l = l + Math.imul(u, Nt) | 0, s = s + Math.imul(u, _t) | 0, s = s + Math.imul(E, Nt) | 0, g = g + Math.imul(E, _t) | 0;
            var ii = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (g + (s >>> 13) | 0) + (ii >>> 26) | 0, ii &= 67108863, l = Math.imul(st, ct), s = Math.imul(st, lt), s = s + Math.imul(at, ct) | 0, g = Math.imul(at, lt), l = l + Math.imul(ft, dt) | 0, s = s + Math.imul(ft, pt) | 0, s = s + Math.imul(ot, dt) | 0, g = g + Math.imul(ot, pt) | 0, l = l + Math.imul(it, vt) | 0, s = s + Math.imul(it, gt) | 0, s = s + Math.imul(nt, vt) | 0, g = g + Math.imul(nt, gt) | 0, l = l + Math.imul(et, mt) | 0, s = s + Math.imul(et, At) | 0, s = s + Math.imul(rt, mt) | 0, g = g + Math.imul(rt, At) | 0, l = l + Math.imul(Z, bt) | 0, s = s + Math.imul(Z, yt) | 0, s = s + Math.imul(tt, bt) | 0, g = g + Math.imul(tt, yt) | 0, l = l + Math.imul(X, wt) | 0, s = s + Math.imul(X, xt) | 0, s = s + Math.imul($, wt) | 0, g = g + Math.imul($, xt) | 0, l = l + Math.imul(T, Mt) | 0, s = s + Math.imul(T, Et) | 0, s = s + Math.imul(q, Mt) | 0, g = g + Math.imul(q, Et) | 0, l = l + Math.imul(P, St) | 0, s = s + Math.imul(P, It) | 0, s = s + Math.imul(O, St) | 0, g = g + Math.imul(O, It) | 0, l = l + Math.imul(B, Nt) | 0, s = s + Math.imul(B, _t) | 0, s = s + Math.imul(R, Nt) | 0, g = g + Math.imul(R, _t) | 0;
            var ni = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (g + (s >>> 13) | 0) + (ni >>> 26) | 0, ni &= 67108863, l = Math.imul(st, dt), s = Math.imul(st, pt), s = s + Math.imul(at, dt) | 0, g = Math.imul(at, pt), l = l + Math.imul(ft, vt) | 0, s = s + Math.imul(ft, gt) | 0, s = s + Math.imul(ot, vt) | 0, g = g + Math.imul(ot, gt) | 0, l = l + Math.imul(it, mt) | 0, s = s + Math.imul(it, At) | 0, s = s + Math.imul(nt, mt) | 0, g = g + Math.imul(nt, At) | 0, l = l + Math.imul(et, bt) | 0, s = s + Math.imul(et, yt) | 0, s = s + Math.imul(rt, bt) | 0, g = g + Math.imul(rt, yt) | 0, l = l + Math.imul(Z, wt) | 0, s = s + Math.imul(Z, xt) | 0, s = s + Math.imul(tt, wt) | 0, g = g + Math.imul(tt, xt) | 0, l = l + Math.imul(X, Mt) | 0, s = s + Math.imul(X, Et) | 0, s = s + Math.imul($, Mt) | 0, g = g + Math.imul($, Et) | 0, l = l + Math.imul(T, St) | 0, s = s + Math.imul(T, It) | 0, s = s + Math.imul(q, St) | 0, g = g + Math.imul(q, It) | 0, l = l + Math.imul(P, Nt) | 0, s = s + Math.imul(P, _t) | 0, s = s + Math.imul(O, Nt) | 0, g = g + Math.imul(O, _t) | 0;
            var fi = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (g + (s >>> 13) | 0) + (fi >>> 26) | 0, fi &= 67108863, l = Math.imul(st, vt), s = Math.imul(st, gt), s = s + Math.imul(at, vt) | 0, g = Math.imul(at, gt), l = l + Math.imul(ft, mt) | 0, s = s + Math.imul(ft, At) | 0, s = s + Math.imul(ot, mt) | 0, g = g + Math.imul(ot, At) | 0, l = l + Math.imul(it, bt) | 0, s = s + Math.imul(it, yt) | 0, s = s + Math.imul(nt, bt) | 0, g = g + Math.imul(nt, yt) | 0, l = l + Math.imul(et, wt) | 0, s = s + Math.imul(et, xt) | 0, s = s + Math.imul(rt, wt) | 0, g = g + Math.imul(rt, xt) | 0, l = l + Math.imul(Z, Mt) | 0, s = s + Math.imul(Z, Et) | 0, s = s + Math.imul(tt, Mt) | 0, g = g + Math.imul(tt, Et) | 0, l = l + Math.imul(X, St) | 0, s = s + Math.imul(X, It) | 0, s = s + Math.imul($, St) | 0, g = g + Math.imul($, It) | 0, l = l + Math.imul(T, Nt) | 0, s = s + Math.imul(T, _t) | 0, s = s + Math.imul(q, Nt) | 0, g = g + Math.imul(q, _t) | 0;
            var oi = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (g + (s >>> 13) | 0) + (oi >>> 26) | 0, oi &= 67108863, l = Math.imul(st, mt), s = Math.imul(st, At), s = s + Math.imul(at, mt) | 0, g = Math.imul(at, At), l = l + Math.imul(ft, bt) | 0, s = s + Math.imul(ft, yt) | 0, s = s + Math.imul(ot, bt) | 0, g = g + Math.imul(ot, yt) | 0, l = l + Math.imul(it, wt) | 0, s = s + Math.imul(it, xt) | 0, s = s + Math.imul(nt, wt) | 0, g = g + Math.imul(nt, xt) | 0, l = l + Math.imul(et, Mt) | 0, s = s + Math.imul(et, Et) | 0, s = s + Math.imul(rt, Mt) | 0, g = g + Math.imul(rt, Et) | 0, l = l + Math.imul(Z, St) | 0, s = s + Math.imul(Z, It) | 0, s = s + Math.imul(tt, St) | 0, g = g + Math.imul(tt, It) | 0, l = l + Math.imul(X, Nt) | 0, s = s + Math.imul(X, _t) | 0, s = s + Math.imul($, Nt) | 0, g = g + Math.imul($, _t) | 0;
            var si = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (g + (s >>> 13) | 0) + (si >>> 26) | 0, si &= 67108863, l = Math.imul(st, bt), s = Math.imul(st, yt), s = s + Math.imul(at, bt) | 0, g = Math.imul(at, yt), l = l + Math.imul(ft, wt) | 0, s = s + Math.imul(ft, xt) | 0, s = s + Math.imul(ot, wt) | 0, g = g + Math.imul(ot, xt) | 0, l = l + Math.imul(it, Mt) | 0, s = s + Math.imul(it, Et) | 0, s = s + Math.imul(nt, Mt) | 0, g = g + Math.imul(nt, Et) | 0, l = l + Math.imul(et, St) | 0, s = s + Math.imul(et, It) | 0, s = s + Math.imul(rt, St) | 0, g = g + Math.imul(rt, It) | 0, l = l + Math.imul(Z, Nt) | 0, s = s + Math.imul(Z, _t) | 0, s = s + Math.imul(tt, Nt) | 0, g = g + Math.imul(tt, _t) | 0;
            var ai = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (g + (s >>> 13) | 0) + (ai >>> 26) | 0, ai &= 67108863, l = Math.imul(st, wt), s = Math.imul(st, xt), s = s + Math.imul(at, wt) | 0, g = Math.imul(at, xt), l = l + Math.imul(ft, Mt) | 0, s = s + Math.imul(ft, Et) | 0, s = s + Math.imul(ot, Mt) | 0, g = g + Math.imul(ot, Et) | 0, l = l + Math.imul(it, St) | 0, s = s + Math.imul(it, It) | 0, s = s + Math.imul(nt, St) | 0, g = g + Math.imul(nt, It) | 0, l = l + Math.imul(et, Nt) | 0, s = s + Math.imul(et, _t) | 0, s = s + Math.imul(rt, Nt) | 0, g = g + Math.imul(rt, _t) | 0;
            var ui = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (g + (s >>> 13) | 0) + (ui >>> 26) | 0, ui &= 67108863, l = Math.imul(st, Mt), s = Math.imul(st, Et), s = s + Math.imul(at, Mt) | 0, g = Math.imul(at, Et), l = l + Math.imul(ft, St) | 0, s = s + Math.imul(ft, It) | 0, s = s + Math.imul(ot, St) | 0, g = g + Math.imul(ot, It) | 0, l = l + Math.imul(it, Nt) | 0, s = s + Math.imul(it, _t) | 0, s = s + Math.imul(nt, Nt) | 0, g = g + Math.imul(nt, _t) | 0;
            var hi = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (g + (s >>> 13) | 0) + (hi >>> 26) | 0, hi &= 67108863, l = Math.imul(st, St), s = Math.imul(st, It), s = s + Math.imul(at, St) | 0, g = Math.imul(at, It), l = l + Math.imul(ft, Nt) | 0, s = s + Math.imul(ft, _t) | 0, s = s + Math.imul(ot, Nt) | 0, g = g + Math.imul(ot, _t) | 0;
            var ci = (M + l | 0) + ((s & 8191) << 13) | 0;
            M = (g + (s >>> 13) | 0) + (ci >>> 26) | 0, ci &= 67108863, l = Math.imul(st, Nt), s = Math.imul(st, _t), s = s + Math.imul(at, Nt) | 0, g = Math.imul(at, _t);
            var li = (M + l | 0) + ((s & 8191) << 13) | 0;
            return M = (g + (s >>> 13) | 0) + (li >>> 26) | 0, li &= 67108863, x[0] = Me, x[1] = Ee, x[2] = Se, x[3] = Ie, x[4] = Ne, x[5] = Zr, x[6] = ti, x[7] = ei, x[8] = ri, x[9] = ii, x[10] = ni, x[11] = fi, x[12] = oi, x[13] = si, x[14] = ai, x[15] = ui, x[16] = hi, x[17] = ci, x[18] = li, M !== 0 && (x[19] = M, c.length++), c;
        };
        Math.imul || (J = U);
        function Bt(b, f, a) {
            a.negative = f.negative ^ b.negative, a.length = b.length + f.length;
            for(var c = 0, d = 0, m = 0; m < a.length - 1; m++){
                var x = d;
                d = 0;
                for(var M = c & 67108863, l = Math.min(m, f.length - 1), s = Math.max(0, m - b.length + 1); s <= l; s++){
                    var g = m - s, k = b.words[g] | 0, u = f.words[s] | 0, E = k * u, _ = E & 67108863;
                    x = x + (E / 67108864 | 0) | 0, _ = _ + M | 0, M = _ & 67108863, x = x + (_ >>> 26) | 0, d += x >>> 26, x &= 67108863;
                }
                a.words[m] = M, c = x, x = d;
            }
            return c !== 0 ? a.words[m] = c : a.length--, a._strip();
        }
        function G(b, f, a) {
            return Bt(b, f, a);
        }
        o.prototype.mulTo = function(f, a) {
            var c, d = this.length + f.length;
            return this.length === 10 && f.length === 10 ? c = J(this, f, a) : d < 63 ? c = U(this, f, a) : d < 1024 ? c = Bt(this, f, a) : c = G(this, f, a), c;
        }, o.prototype.mul = function(f) {
            var a = new o(null);
            return a.words = new Array(this.length + f.length), this.mulTo(f, a);
        }, o.prototype.mulf = function(f) {
            var a = new o(null);
            return a.words = new Array(this.length + f.length), G(this, f, a);
        }, o.prototype.imul = function(f) {
            return this.clone().mulTo(f, this);
        }, o.prototype.imuln = function(f) {
            var a = f < 0;
            a && (f = -f), i(typeof f == "number"), i(f < 67108864);
            for(var c = 0, d = 0; d < this.length; d++){
                var m = (this.words[d] | 0) * f, x = (m & 67108863) + (c & 67108863);
                c >>= 26, c += m / 67108864 | 0, c += x >>> 26, this.words[d] = x & 67108863;
            }
            return c !== 0 && (this.words[d] = c, this.length++), a ? this.ineg() : this;
        }, o.prototype.muln = function(f) {
            return this.clone().imuln(f);
        }, o.prototype.sqr = function() {
            return this.mul(this);
        }, o.prototype.isqr = function() {
            return this.imul(this.clone());
        }, o.prototype.pow = function(f) {
            var a = D(f);
            if (a.length === 0) return new o(1);
            for(var c = this, d = 0; d < a.length && a[d] === 0; d++, c = c.sqr());
            if (++d < a.length) for(var m = c.sqr(); d < a.length; d++, m = m.sqr())a[d] !== 0 && (c = c.mul(m));
            return c;
        }, o.prototype.iushln = function(f) {
            i(typeof f == "number" && f >= 0);
            var a = f % 26, c = (f - a) / 26, d = 67108863 >>> 26 - a << 26 - a, m;
            if (a !== 0) {
                var x = 0;
                for(m = 0; m < this.length; m++){
                    var M = this.words[m] & d, l = (this.words[m] | 0) - M << a;
                    this.words[m] = l | x, x = M >>> 26 - a;
                }
                x && (this.words[m] = x, this.length++);
            }
            if (c !== 0) {
                for(m = this.length - 1; m >= 0; m--)this.words[m + c] = this.words[m];
                for(m = 0; m < c; m++)this.words[m] = 0;
                this.length += c;
            }
            return this._strip();
        }, o.prototype.ishln = function(f) {
            return i(this.negative === 0), this.iushln(f);
        }, o.prototype.iushrn = function(f, a, c) {
            i(typeof f == "number" && f >= 0);
            var d;
            a ? d = (a - a % 26) / 26 : d = 0;
            var m = f % 26, x = Math.min((f - m) / 26, this.length), M = 67108863 ^ 67108863 >>> m << m, l = c;
            if (d -= x, d = Math.max(0, d), l) {
                for(var s = 0; s < x; s++)l.words[s] = this.words[s];
                l.length = x;
            }
            if (x !== 0) if (this.length > x) for(this.length -= x, s = 0; s < this.length; s++)this.words[s] = this.words[s + x];
            else this.words[0] = 0, this.length = 1;
            var g = 0;
            for(s = this.length - 1; s >= 0 && (g !== 0 || s >= d); s--){
                var k = this.words[s] | 0;
                this.words[s] = g << 26 - m | k >>> m, g = k & M;
            }
            return l && g !== 0 && (l.words[l.length++] = g), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
        }, o.prototype.ishrn = function(f, a, c) {
            return i(this.negative === 0), this.iushrn(f, a, c);
        }, o.prototype.shln = function(f) {
            return this.clone().ishln(f);
        }, o.prototype.ushln = function(f) {
            return this.clone().iushln(f);
        }, o.prototype.shrn = function(f) {
            return this.clone().ishrn(f);
        }, o.prototype.ushrn = function(f) {
            return this.clone().iushrn(f);
        }, o.prototype.testn = function(f) {
            i(typeof f == "number" && f >= 0);
            var a = f % 26, c = (f - a) / 26, d = 1 << a;
            if (this.length <= c) return !1;
            var m = this.words[c];
            return !!(m & d);
        }, o.prototype.imaskn = function(f) {
            i(typeof f == "number" && f >= 0);
            var a = f % 26, c = (f - a) / 26;
            if (i(this.negative === 0, "imaskn works only with positive numbers"), this.length <= c) return this;
            if (a !== 0 && c++, this.length = Math.min(c, this.length), a !== 0) {
                var d = 67108863 ^ 67108863 >>> a << a;
                this.words[this.length - 1] &= d;
            }
            return this._strip();
        }, o.prototype.maskn = function(f) {
            return this.clone().imaskn(f);
        }, o.prototype.iaddn = function(f) {
            return i(typeof f == "number"), i(f < 67108864), f < 0 ? this.isubn(-f) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= f ? (this.words[0] = f - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(f), this.negative = 1, this) : this._iaddn(f);
        }, o.prototype._iaddn = function(f) {
            this.words[0] += f;
            for(var a = 0; a < this.length && this.words[a] >= 67108864; a++)this.words[a] -= 67108864, a === this.length - 1 ? this.words[a + 1] = 1 : this.words[a + 1]++;
            return this.length = Math.max(this.length, a + 1), this;
        }, o.prototype.isubn = function(f) {
            if (i(typeof f == "number"), i(f < 67108864), f < 0) return this.iaddn(-f);
            if (this.negative !== 0) return this.negative = 0, this.iaddn(f), this.negative = 1, this;
            if (this.words[0] -= f, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
            else for(var a = 0; a < this.length && this.words[a] < 0; a++)this.words[a] += 67108864, this.words[a + 1] -= 1;
            return this._strip();
        }, o.prototype.addn = function(f) {
            return this.clone().iaddn(f);
        }, o.prototype.subn = function(f) {
            return this.clone().isubn(f);
        }, o.prototype.iabs = function() {
            return this.negative = 0, this;
        }, o.prototype.abs = function() {
            return this.clone().iabs();
        }, o.prototype._ishlnsubmul = function(f, a, c) {
            var d = f.length + c, m;
            this._expand(d);
            var x, M = 0;
            for(m = 0; m < f.length; m++){
                x = (this.words[m + c] | 0) + M;
                var l = (f.words[m] | 0) * a;
                x -= l & 67108863, M = (x >> 26) - (l / 67108864 | 0), this.words[m + c] = x & 67108863;
            }
            for(; m < this.length - c; m++)x = (this.words[m + c] | 0) + M, M = x >> 26, this.words[m + c] = x & 67108863;
            if (M === 0) return this._strip();
            for(i(M === -1), M = 0, m = 0; m < this.length; m++)x = -(this.words[m] | 0) + M, M = x >> 26, this.words[m] = x & 67108863;
            return this.negative = 1, this._strip();
        }, o.prototype._wordDiv = function(f, a) {
            var c = this.length - f.length, d = this.clone(), m = f, x = m.words[m.length - 1] | 0, M = this._countBits(x);
            c = 26 - M, c !== 0 && (m = m.ushln(c), d.iushln(c), x = m.words[m.length - 1] | 0);
            var l = d.length - m.length, s;
            if (a !== "mod") {
                s = new o(null), s.length = l + 1, s.words = new Array(s.length);
                for(var g = 0; g < s.length; g++)s.words[g] = 0;
            }
            var k = d.clone()._ishlnsubmul(m, 1, l);
            k.negative === 0 && (d = k, s && (s.words[l] = 1));
            for(var u = l - 1; u >= 0; u--){
                var E = (d.words[m.length + u] | 0) * 67108864 + (d.words[m.length + u - 1] | 0);
                for(E = Math.min(E / x | 0, 67108863), d._ishlnsubmul(m, E, u); d.negative !== 0;)E--, d.negative = 0, d._ishlnsubmul(m, 1, u), d.isZero() || (d.negative ^= 1);
                s && (s.words[u] = E);
            }
            return s && s._strip(), d._strip(), a !== "div" && c !== 0 && d.iushrn(c), {
                div: s || null,
                mod: d
            };
        }, o.prototype.divmod = function(f, a, c) {
            if (i(!f.isZero()), this.isZero()) return {
                div: new o(0),
                mod: new o(0)
            };
            var d, m, x;
            return this.negative !== 0 && f.negative === 0 ? (x = this.neg().divmod(f, a), a !== "mod" && (d = x.div.neg()), a !== "div" && (m = x.mod.neg(), c && m.negative !== 0 && m.iadd(f)), {
                div: d,
                mod: m
            }) : this.negative === 0 && f.negative !== 0 ? (x = this.divmod(f.neg(), a), a !== "mod" && (d = x.div.neg()), {
                div: d,
                mod: x.mod
            }) : this.negative & f.negative ? (x = this.neg().divmod(f.neg(), a), a !== "div" && (m = x.mod.neg(), c && m.negative !== 0 && m.isub(f)), {
                div: x.div,
                mod: m
            }) : f.length > this.length || this.cmp(f) < 0 ? {
                div: new o(0),
                mod: this
            } : f.length === 1 ? a === "div" ? {
                div: this.divn(f.words[0]),
                mod: null
            } : a === "mod" ? {
                div: null,
                mod: new o(this.modrn(f.words[0]))
            } : {
                div: this.divn(f.words[0]),
                mod: new o(this.modrn(f.words[0]))
            } : this._wordDiv(f, a);
        }, o.prototype.div = function(f) {
            return this.divmod(f, "div", !1).div;
        }, o.prototype.mod = function(f) {
            return this.divmod(f, "mod", !1).mod;
        }, o.prototype.umod = function(f) {
            return this.divmod(f, "mod", !0).mod;
        }, o.prototype.divRound = function(f) {
            var a = this.divmod(f);
            if (a.mod.isZero()) return a.div;
            var c = a.div.negative !== 0 ? a.mod.isub(f) : a.mod, d = f.ushrn(1), m = f.andln(1), x = c.cmp(d);
            return x < 0 || m === 1 && x === 0 ? a.div : a.div.negative !== 0 ? a.div.isubn(1) : a.div.iaddn(1);
        }, o.prototype.modrn = function(f) {
            var a = f < 0;
            a && (f = -f), i(f <= 67108863);
            for(var c = (1 << 26) % f, d = 0, m = this.length - 1; m >= 0; m--)d = (c * d + (this.words[m] | 0)) % f;
            return a ? -d : d;
        }, o.prototype.modn = function(f) {
            return this.modrn(f);
        }, o.prototype.idivn = function(f) {
            var a = f < 0;
            a && (f = -f), i(f <= 67108863);
            for(var c = 0, d = this.length - 1; d >= 0; d--){
                var m = (this.words[d] | 0) + c * 67108864;
                this.words[d] = m / f | 0, c = m % f;
            }
            return this._strip(), a ? this.ineg() : this;
        }, o.prototype.divn = function(f) {
            return this.clone().idivn(f);
        }, o.prototype.egcd = function(f) {
            i(f.negative === 0), i(!f.isZero());
            var a = this, c = f.clone();
            a.negative !== 0 ? a = a.umod(f) : a = a.clone();
            for(var d = new o(1), m = new o(0), x = new o(0), M = new o(1), l = 0; a.isEven() && c.isEven();)a.iushrn(1), c.iushrn(1), ++l;
            for(var s = c.clone(), g = a.clone(); !a.isZero();){
                for(var k = 0, u = 1; !(a.words[0] & u) && k < 26; ++k, u <<= 1);
                if (k > 0) for(a.iushrn(k); k-- > 0;)(d.isOdd() || m.isOdd()) && (d.iadd(s), m.isub(g)), d.iushrn(1), m.iushrn(1);
                for(var E = 0, _ = 1; !(c.words[0] & _) && E < 26; ++E, _ <<= 1);
                if (E > 0) for(c.iushrn(E); E-- > 0;)(x.isOdd() || M.isOdd()) && (x.iadd(s), M.isub(g)), x.iushrn(1), M.iushrn(1);
                a.cmp(c) >= 0 ? (a.isub(c), d.isub(x), m.isub(M)) : (c.isub(a), x.isub(d), M.isub(m));
            }
            return {
                a: x,
                b: M,
                gcd: c.iushln(l)
            };
        }, o.prototype._invmp = function(f) {
            i(f.negative === 0), i(!f.isZero());
            var a = this, c = f.clone();
            a.negative !== 0 ? a = a.umod(f) : a = a.clone();
            for(var d = new o(1), m = new o(0), x = c.clone(); a.cmpn(1) > 0 && c.cmpn(1) > 0;){
                for(var M = 0, l = 1; !(a.words[0] & l) && M < 26; ++M, l <<= 1);
                if (M > 0) for(a.iushrn(M); M-- > 0;)d.isOdd() && d.iadd(x), d.iushrn(1);
                for(var s = 0, g = 1; !(c.words[0] & g) && s < 26; ++s, g <<= 1);
                if (s > 0) for(c.iushrn(s); s-- > 0;)m.isOdd() && m.iadd(x), m.iushrn(1);
                a.cmp(c) >= 0 ? (a.isub(c), d.isub(m)) : (c.isub(a), m.isub(d));
            }
            var k;
            return a.cmpn(1) === 0 ? k = d : k = m, k.cmpn(0) < 0 && k.iadd(f), k;
        }, o.prototype.gcd = function(f) {
            if (this.isZero()) return f.abs();
            if (f.isZero()) return this.abs();
            var a = this.clone(), c = f.clone();
            a.negative = 0, c.negative = 0;
            for(var d = 0; a.isEven() && c.isEven(); d++)a.iushrn(1), c.iushrn(1);
            do {
                for(; a.isEven();)a.iushrn(1);
                for(; c.isEven();)c.iushrn(1);
                var m = a.cmp(c);
                if (m < 0) {
                    var x = a;
                    a = c, c = x;
                } else if (m === 0 || c.cmpn(1) === 0) break;
                a.isub(c);
            }while (!0)
            return c.iushln(d);
        }, o.prototype.invm = function(f) {
            return this.egcd(f).a.umod(f);
        }, o.prototype.isEven = function() {
            return (this.words[0] & 1) === 0;
        }, o.prototype.isOdd = function() {
            return (this.words[0] & 1) === 1;
        }, o.prototype.andln = function(f) {
            return this.words[0] & f;
        }, o.prototype.bincn = function(f) {
            i(typeof f == "number");
            var a = f % 26, c = (f - a) / 26, d = 1 << a;
            if (this.length <= c) return this._expand(c + 1), this.words[c] |= d, this;
            for(var m = d, x = c; m !== 0 && x < this.length; x++){
                var M = this.words[x] | 0;
                M += m, m = M >>> 26, M &= 67108863, this.words[x] = M;
            }
            return m !== 0 && (this.words[x] = m, this.length++), this;
        }, o.prototype.isZero = function() {
            return this.length === 1 && this.words[0] === 0;
        }, o.prototype.cmpn = function(f) {
            var a = f < 0;
            if (this.negative !== 0 && !a) return -1;
            if (this.negative === 0 && a) return 1;
            this._strip();
            var c;
            if (this.length > 1) c = 1;
            else {
                a && (f = -f), i(f <= 67108863, "Number is too big");
                var d = this.words[0] | 0;
                c = d === f ? 0 : d < f ? -1 : 1;
            }
            return this.negative !== 0 ? -c | 0 : c;
        }, o.prototype.cmp = function(f) {
            if (this.negative !== 0 && f.negative === 0) return -1;
            if (this.negative === 0 && f.negative !== 0) return 1;
            var a = this.ucmp(f);
            return this.negative !== 0 ? -a | 0 : a;
        }, o.prototype.ucmp = function(f) {
            if (this.length > f.length) return 1;
            if (this.length < f.length) return -1;
            for(var a = 0, c = this.length - 1; c >= 0; c--){
                var d = this.words[c] | 0, m = f.words[c] | 0;
                if (d !== m) {
                    d < m ? a = -1 : d > m && (a = 1);
                    break;
                }
            }
            return a;
        }, o.prototype.gtn = function(f) {
            return this.cmpn(f) === 1;
        }, o.prototype.gt = function(f) {
            return this.cmp(f) === 1;
        }, o.prototype.gten = function(f) {
            return this.cmpn(f) >= 0;
        }, o.prototype.gte = function(f) {
            return this.cmp(f) >= 0;
        }, o.prototype.ltn = function(f) {
            return this.cmpn(f) === -1;
        }, o.prototype.lt = function(f) {
            return this.cmp(f) === -1;
        }, o.prototype.lten = function(f) {
            return this.cmpn(f) <= 0;
        }, o.prototype.lte = function(f) {
            return this.cmp(f) <= 0;
        }, o.prototype.eqn = function(f) {
            return this.cmpn(f) === 0;
        }, o.prototype.eq = function(f) {
            return this.cmp(f) === 0;
        }, o.red = function(f) {
            return new Y(f);
        }, o.prototype.toRed = function(f) {
            return i(!this.red, "Already a number in reduction context"), i(this.negative === 0, "red works only with positives"), f.convertTo(this)._forceRed(f);
        }, o.prototype.fromRed = function() {
            return i(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
        }, o.prototype._forceRed = function(f) {
            return this.red = f, this;
        }, o.prototype.forceRed = function(f) {
            return i(!this.red, "Already a number in reduction context"), this._forceRed(f);
        }, o.prototype.redAdd = function(f) {
            return i(this.red, "redAdd works only with red numbers"), this.red.add(this, f);
        }, o.prototype.redIAdd = function(f) {
            return i(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, f);
        }, o.prototype.redSub = function(f) {
            return i(this.red, "redSub works only with red numbers"), this.red.sub(this, f);
        }, o.prototype.redISub = function(f) {
            return i(this.red, "redISub works only with red numbers"), this.red.isub(this, f);
        }, o.prototype.redShl = function(f) {
            return i(this.red, "redShl works only with red numbers"), this.red.shl(this, f);
        }, o.prototype.redMul = function(f) {
            return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, f), this.red.mul(this, f);
        }, o.prototype.redIMul = function(f) {
            return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, f), this.red.imul(this, f);
        }, o.prototype.redSqr = function() {
            return i(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
        }, o.prototype.redISqr = function() {
            return i(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
        }, o.prototype.redSqrt = function() {
            return i(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
        }, o.prototype.redInvm = function() {
            return i(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
        }, o.prototype.redNeg = function() {
            return i(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
        }, o.prototype.redPow = function(f) {
            return i(this.red && !f.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, f);
        };
        var H = {
            k256: null,
            p224: null,
            p192: null,
            p25519: null
        };
        function L(b, f) {
            this.name = b, this.p = new o(f, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
        }
        L.prototype._tmp = function() {
            var f = new o(null);
            return f.words = new Array(Math.ceil(this.n / 13)), f;
        }, L.prototype.ireduce = function(f) {
            var a = f, c;
            do this.split(a, this.tmp), a = this.imulK(a), a = a.iadd(this.tmp), c = a.bitLength();
            while (c > this.n)
            var d = c < this.n ? -1 : a.ucmp(this.p);
            return d === 0 ? (a.words[0] = 0, a.length = 1) : d > 0 ? a.isub(this.p) : a.strip !== void 0 ? a.strip() : a._strip(), a;
        }, L.prototype.split = function(f, a) {
            f.iushrn(this.n, 0, a);
        }, L.prototype.imulK = function(f) {
            return f.imul(this.k);
        };
        function Pt() {
            L.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f");
        }
        n(Pt, L), Pt.prototype.split = function(f, a) {
            for(var c = 4194303, d = Math.min(f.length, 9), m = 0; m < d; m++)a.words[m] = f.words[m];
            if (a.length = d, f.length <= 9) {
                f.words[0] = 0, f.length = 1;
                return;
            }
            var x = f.words[9];
            for(a.words[a.length++] = x & c, m = 10; m < f.length; m++){
                var M = f.words[m] | 0;
                f.words[m - 10] = (M & c) << 4 | x >>> 22, x = M;
            }
            x >>>= 22, f.words[m - 10] = x, x === 0 && f.length > 10 ? f.length -= 10 : f.length -= 9;
        }, Pt.prototype.imulK = function(f) {
            f.words[f.length] = 0, f.words[f.length + 1] = 0, f.length += 2;
            for(var a = 0, c = 0; c < f.length; c++){
                var d = f.words[c] | 0;
                a += d * 977, f.words[c] = a & 67108863, a = d * 64 + (a / 67108864 | 0);
            }
            return f.words[f.length - 1] === 0 && (f.length--, f.words[f.length - 1] === 0 && f.length--), f;
        };
        function W() {
            L.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001");
        }
        n(W, L);
        function Rt() {
            L.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff");
        }
        n(Rt, L);
        function Vt() {
            L.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed");
        }
        n(Vt, L), Vt.prototype.imulK = function(f) {
            for(var a = 0, c = 0; c < f.length; c++){
                var d = (f.words[c] | 0) * 19 + a, m = d & 67108863;
                d >>>= 26, f.words[c] = m, a = d;
            }
            return a !== 0 && (f.words[f.length++] = a), f;
        }, o._prime = function(f) {
            if (H[f]) return H[f];
            var a;
            if (f === "k256") a = new Pt;
            else if (f === "p224") a = new W;
            else if (f === "p192") a = new Rt;
            else if (f === "p25519") a = new Vt;
            else throw new Error("Unknown prime " + f);
            return H[f] = a, a;
        };
        function Y(b) {
            if (typeof b == "string") {
                var f = o._prime(b);
                this.m = f.p, this.prime = f;
            } else i(b.gtn(1), "modulus must be greater than 1"), this.m = b, this.prime = null;
        }
        Y.prototype._verify1 = function(f) {
            i(f.negative === 0, "red works only with positives"), i(f.red, "red works only with red numbers");
        }, Y.prototype._verify2 = function(f, a) {
            i((f.negative | a.negative) === 0, "red works only with positives"), i(f.red && f.red === a.red, "red works only with red numbers");
        }, Y.prototype.imod = function(f) {
            return this.prime ? this.prime.ireduce(f)._forceRed(this) : (w(f, f.umod(this.m)._forceRed(this)), f);
        }, Y.prototype.neg = function(f) {
            return f.isZero() ? f.clone() : this.m.sub(f)._forceRed(this);
        }, Y.prototype.add = function(f, a) {
            this._verify2(f, a);
            var c = f.add(a);
            return c.cmp(this.m) >= 0 && c.isub(this.m), c._forceRed(this);
        }, Y.prototype.iadd = function(f, a) {
            this._verify2(f, a);
            var c = f.iadd(a);
            return c.cmp(this.m) >= 0 && c.isub(this.m), c;
        }, Y.prototype.sub = function(f, a) {
            this._verify2(f, a);
            var c = f.sub(a);
            return c.cmpn(0) < 0 && c.iadd(this.m), c._forceRed(this);
        }, Y.prototype.isub = function(f, a) {
            this._verify2(f, a);
            var c = f.isub(a);
            return c.cmpn(0) < 0 && c.iadd(this.m), c;
        }, Y.prototype.shl = function(f, a) {
            return this._verify1(f), this.imod(f.ushln(a));
        }, Y.prototype.imul = function(f, a) {
            return this._verify2(f, a), this.imod(f.imul(a));
        }, Y.prototype.mul = function(f, a) {
            return this._verify2(f, a), this.imod(f.mul(a));
        }, Y.prototype.isqr = function(f) {
            return this.imul(f, f.clone());
        }, Y.prototype.sqr = function(f) {
            return this.mul(f, f);
        }, Y.prototype.sqrt = function(f) {
            if (f.isZero()) return f.clone();
            var a = this.m.andln(3);
            if (i(a % 2 === 1), a === 3) {
                var c = this.m.add(new o(1)).iushrn(2);
                return this.pow(f, c);
            }
            for(var d = this.m.subn(1), m = 0; !d.isZero() && d.andln(1) === 0;)m++, d.iushrn(1);
            i(!d.isZero());
            var x = new o(1).toRed(this), M = x.redNeg(), l = this.m.subn(1).iushrn(1), s = this.m.bitLength();
            for(s = new o(2 * s * s).toRed(this); this.pow(s, l).cmp(M) !== 0;)s.redIAdd(M);
            for(var g = this.pow(s, d), k = this.pow(f, d.addn(1).iushrn(1)), u = this.pow(f, d), E = m; u.cmp(x) !== 0;){
                for(var _ = u, B = 0; _.cmp(x) !== 0; B++)_ = _.redSqr();
                i(B < E);
                var R = this.pow(g, new o(1).iushln(E - B - 1));
                k = k.redMul(R), g = R.redSqr(), u = u.redMul(g), E = B;
            }
            return k;
        }, Y.prototype.invm = function(f) {
            var a = f._invmp(this.m);
            return a.negative !== 0 ? (a.negative = 0, this.imod(a).redNeg()) : this.imod(a);
        }, Y.prototype.pow = function(f, a) {
            if (a.isZero()) return new o(1).toRed(this);
            if (a.cmpn(1) === 0) return f.clone();
            var c = 4, d = new Array(1 << c);
            d[0] = new o(1).toRed(this), d[1] = f;
            for(var m = 2; m < d.length; m++)d[m] = this.mul(d[m - 1], f);
            var x = d[0], M = 0, l = 0, s = a.bitLength() % 26;
            for(s === 0 && (s = 26), m = a.length - 1; m >= 0; m--){
                for(var g = a.words[m], k = s - 1; k >= 0; k--){
                    var u = g >> k & 1;
                    if (x !== d[0] && (x = this.sqr(x)), u === 0 && M === 0) {
                        l = 0;
                        continue;
                    }
                    M <<= 1, M |= u, l++, !(l !== c && (m !== 0 || k !== 0)) && (x = this.mul(x, d[M]), l = 0, M = 0);
                }
                s = 26;
            }
            return x;
        }, Y.prototype.convertTo = function(f) {
            var a = f.umod(this.m);
            return a === f ? a.clone() : a;
        }, Y.prototype.convertFrom = function(f) {
            var a = f.clone();
            return a.red = null, a;
        }, o.mont = function(f) {
            return new Wt(f);
        };
        function Wt(b) {
            Y.call(this, b), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
        }
        n(Wt, Y), Wt.prototype.convertTo = function(f) {
            return this.imod(f.ushln(this.shift));
        }, Wt.prototype.convertFrom = function(f) {
            var a = this.imod(f.mul(this.rinv));
            return a.red = null, a;
        }, Wt.prototype.imul = function(f, a) {
            if (f.isZero() || a.isZero()) return f.words[0] = 0, f.length = 1, f;
            var c = f.imul(a), d = c.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), m = c.isub(d).iushrn(this.shift), x = m;
            return m.cmp(this.m) >= 0 ? x = m.isub(this.m) : m.cmpn(0) < 0 && (x = m.iadd(this.m)), x._forceRed(this);
        }, Wt.prototype.mul = function(f, a) {
            if (f.isZero() || a.isZero()) return new o(0)._forceRed(this);
            var c = f.mul(a), d = c.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), m = c.isub(d).iushrn(this.shift), x = m;
            return m.cmp(this.m) >= 0 ? x = m.isub(this.m) : m.cmpn(0) < 0 && (x = m.iadd(this.m)), x._forceRed(this);
        }, Wt.prototype.invm = function(f) {
            var a = this.imod(f._invmp(this.m).mul(this.r2));
            return a._forceRed(this);
        };
    })(e, Kn);
})(Xn);
var K = Xn.exports;
const $n = "bignumber/5.7.0";
var Dr = K.BN;
const Ae = new z($n), Ni = {}, Zn = 9007199254740991;
function Hs(e) {
    return e != null && (V.isBigNumber(e) || typeof e == "number" && e % 1 === 0 || typeof e == "string" && !!e.match(/^-?[0-9]+$/) || Jt(e) || typeof e == "bigint" || nr(e));
}
let tf = !1;
class V {
    constructor(t, r){
        t !== Ni && Ae.throwError("cannot call constructor directly; use BigNumber.from", z.errors.UNSUPPORTED_OPERATION, {
            operation: "new (BigNumber)"
        }), this._hex = r, this._isBigNumber = !0, Object.freeze(this);
    }
    fromTwos(t) {
        return zt(j(this).fromTwos(t));
    }
    toTwos(t) {
        return zt(j(this).toTwos(t));
    }
    abs() {
        return this._hex[0] === "-" ? V.from(this._hex.substring(1)) : this;
    }
    add(t) {
        return zt(j(this).add(j(t)));
    }
    sub(t) {
        return zt(j(this).sub(j(t)));
    }
    div(t) {
        return V.from(t).isZero() && $t("division-by-zero", "div"), zt(j(this).div(j(t)));
    }
    mul(t) {
        return zt(j(this).mul(j(t)));
    }
    mod(t) {
        const r = j(t);
        return r.isNeg() && $t("division-by-zero", "mod"), zt(j(this).umod(r));
    }
    pow(t) {
        const r = j(t);
        return r.isNeg() && $t("negative-power", "pow"), zt(j(this).pow(r));
    }
    and(t) {
        const r = j(t);
        return (this.isNegative() || r.isNeg()) && $t("unbound-bitwise-result", "and"), zt(j(this).and(r));
    }
    or(t) {
        const r = j(t);
        return (this.isNegative() || r.isNeg()) && $t("unbound-bitwise-result", "or"), zt(j(this).or(r));
    }
    xor(t) {
        const r = j(t);
        return (this.isNegative() || r.isNeg()) && $t("unbound-bitwise-result", "xor"), zt(j(this).xor(r));
    }
    mask(t) {
        return (this.isNegative() || t < 0) && $t("negative-width", "mask"), zt(j(this).maskn(t));
    }
    shl(t) {
        return (this.isNegative() || t < 0) && $t("negative-width", "shl"), zt(j(this).shln(t));
    }
    shr(t) {
        return (this.isNegative() || t < 0) && $t("negative-width", "shr"), zt(j(this).shrn(t));
    }
    eq(t) {
        return j(this).eq(j(t));
    }
    lt(t) {
        return j(this).lt(j(t));
    }
    lte(t) {
        return j(this).lte(j(t));
    }
    gt(t) {
        return j(this).gt(j(t));
    }
    gte(t) {
        return j(this).gte(j(t));
    }
    isNegative() {
        return this._hex[0] === "-";
    }
    isZero() {
        return j(this).isZero();
    }
    toNumber() {
        try {
            return j(this).toNumber();
        } catch  {
            $t("overflow", "toNumber", this.toString());
        }
        return null;
    }
    toBigInt() {
        try {
            return BigInt(this.toString());
        } catch  {}
        return Ae.throwError("this platform does not support BigInt", z.errors.UNSUPPORTED_OPERATION, {
            value: this.toString()
        });
    }
    toString() {
        return arguments.length > 0 && (arguments[0] === 10 ? tf || (tf = !0, Ae.warn("BigNumber.toString does not accept any parameters; base-10 is assumed")) : arguments[0] === 16 ? Ae.throwError("BigNumber.toString does not accept any parameters; use bigNumber.toHexString()", z.errors.UNEXPECTED_ARGUMENT, {}) : Ae.throwError("BigNumber.toString does not accept parameters", z.errors.UNEXPECTED_ARGUMENT, {})), j(this).toString(10);
    }
    toHexString() {
        return this._hex;
    }
    toJSON(t) {
        return {
            type: "BigNumber",
            hex: this.toHexString()
        };
    }
    static from(t) {
        if (t instanceof V) return t;
        if (typeof t == "string") return t.match(/^-?0x[0-9a-f]+$/i) ? new V(Ni, mr(t)) : t.match(/^-?[0-9]+$/) ? new V(Ni, mr(new Dr(t))) : Ae.throwArgumentError("invalid BigNumber string", "value", t);
        if (typeof t == "number") return t % 1 && $t("underflow", "BigNumber.from", t), (t >= Zn || t <= -Zn) && $t("overflow", "BigNumber.from", t), V.from(String(t));
        const r = t;
        if (typeof r == "bigint") return V.from(r.toString());
        if (nr(r)) return V.from(Kt(r));
        if (r) if (r.toHexString) {
            const i = r.toHexString();
            if (typeof i == "string") return V.from(i);
        } else {
            let i = r._hex;
            if (i == null && r.type === "BigNumber" && (i = r.hex), typeof i == "string" && (Jt(i) || i[0] === "-" && Jt(i.substring(1)))) return V.from(i);
        }
        return Ae.throwArgumentError("invalid BigNumber value", "value", t);
    }
    static isBigNumber(t) {
        return !!(t && t._isBigNumber);
    }
}
function mr(e) {
    if (typeof e != "string") return mr(e.toString(16));
    if (e[0] === "-") return e = e.substring(1), e[0] === "-" && Ae.throwArgumentError("invalid hex", "value", e), e = mr(e), e === "0x00" ? e : "-" + e;
    if (e.substring(0, 2) !== "0x" && (e = "0x" + e), e === "0x") return "0x00";
    for(e.length % 2 && (e = "0x0" + e.substring(2)); e.length > 4 && e.substring(0, 4) === "0x00";)e = "0x" + e.substring(4);
    return e;
}
function zt(e) {
    return V.from(mr(e));
}
function j(e) {
    const t = V.from(e).toHexString();
    return t[0] === "-" ? new Dr("-" + t.substring(3), 16) : new Dr(t.substring(2), 16);
}
function $t(e, t, r) {
    const i = {
        fault: e,
        operation: t
    };
    return r != null && (i.value = r), Ae.throwError(e, z.errors.NUMERIC_FAULT, i);
}
function Ls(e) {
    return new Dr(e, 36).toString(16);
}
const Ht = new z($n), Ar = {}, ef = V.from(0), rf = V.from(-1);
function nf(e, t, r, i) {
    const n = {
        fault: t,
        operation: r
    };
    return i !== void 0 && (n.value = i), Ht.throwError(e, z.errors.NUMERIC_FAULT, n);
}
let br = "0";
for(; br.length < 256;)br += br;
function _i(e) {
    if (typeof e != "number") try {
        e = V.from(e).toNumber();
    } catch  {}
    return typeof e == "number" && e >= 0 && e <= 256 && !(e % 1) ? "1" + br.substring(0, e) : Ht.throwArgumentError("invalid decimal size", "decimals", e);
}
function Bi(e, t) {
    t == null && (t = 0);
    const r = _i(t);
    e = V.from(e);
    const i = e.lt(ef);
    i && (e = e.mul(rf));
    let n = e.mod(r).toString();
    for(; n.length < r.length - 1;)n = "0" + n;
    n = n.match(/^([0-9]*[1-9]|0)(0*)/)[1];
    const o = e.div(r).toString();
    return r.length === 1 ? e = o : e = o + "." + n, i && (e = "-" + e), e;
}
function be(e, t) {
    t == null && (t = 0);
    const r = _i(t);
    (typeof e != "string" || !e.match(/^-?[0-9.]+$/)) && Ht.throwArgumentError("invalid decimal value", "value", e);
    const i = e.substring(0, 1) === "-";
    i && (e = e.substring(1)), e === "." && Ht.throwArgumentError("missing value", "value", e);
    const n = e.split(".");
    n.length > 2 && Ht.throwArgumentError("too many decimal points", "value", e);
    let o = n[0], h = n[1];
    for(o || (o = "0"), h || (h = "0"); h[h.length - 1] === "0";)h = h.substring(0, h.length - 1);
    for(h.length > r.length - 1 && nf("fractional component exceeds decimals", "underflow", "parseFixed"), h === "" && (h = "0"); h.length < r.length - 1;)h += "0";
    const p = V.from(o), A = V.from(h);
    let v = p.mul(r).add(A);
    return i && (v = v.mul(rf)), v;
}
class vr {
    constructor(t, r, i, n){
        t !== Ar && Ht.throwError("cannot use FixedFormat constructor; use FixedFormat.from", z.errors.UNSUPPORTED_OPERATION, {
            operation: "new FixedFormat"
        }), this.signed = r, this.width = i, this.decimals = n, this.name = (r ? "" : "u") + "fixed" + String(i) + "x" + String(n), this._multiplier = _i(n), Object.freeze(this);
    }
    static from(t) {
        if (t instanceof vr) return t;
        typeof t == "number" && (t = `fixed128x${t}`);
        let r = !0, i = 128, n = 18;
        if (typeof t == "string") {
            if (t !== "fixed") if (t === "ufixed") r = !1;
            else {
                const o = t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
                o || Ht.throwArgumentError("invalid fixed format", "format", t), r = o[1] !== "u", i = parseInt(o[2]), n = parseInt(o[3]);
            }
        } else if (t) {
            const o = (h, p, A)=>t[h] == null ? A : (typeof t[h] !== p && Ht.throwArgumentError("invalid fixed format (" + h + " not " + p + ")", "format." + h, t[h]), t[h]);
            r = o("signed", "boolean", r), i = o("width", "number", i), n = o("decimals", "number", n);
        }
        return i % 8 && Ht.throwArgumentError("invalid fixed format width (not byte aligned)", "format.width", i), n > 80 && Ht.throwArgumentError("invalid fixed format (decimals too large)", "format.decimals", n), new vr(Ar, r, i, n);
    }
}
class Ut {
    constructor(t, r, i, n){
        t !== Ar && Ht.throwError("cannot use FixedNumber constructor; use FixedNumber.from", z.errors.UNSUPPORTED_OPERATION, {
            operation: "new FixedFormat"
        }), this.format = n, this._hex = r, this._value = i, this._isFixedNumber = !0, Object.freeze(this);
    }
    _checkFormat(t) {
        this.format.name !== t.format.name && Ht.throwArgumentError("incompatible format; use fixedNumber.toFormat", "other", t);
    }
    addUnsafe(t) {
        this._checkFormat(t);
        const r = be(this._value, this.format.decimals), i = be(t._value, t.format.decimals);
        return Ut.fromValue(r.add(i), this.format.decimals, this.format);
    }
    subUnsafe(t) {
        this._checkFormat(t);
        const r = be(this._value, this.format.decimals), i = be(t._value, t.format.decimals);
        return Ut.fromValue(r.sub(i), this.format.decimals, this.format);
    }
    mulUnsafe(t) {
        this._checkFormat(t);
        const r = be(this._value, this.format.decimals), i = be(t._value, t.format.decimals);
        return Ut.fromValue(r.mul(i).div(this.format._multiplier), this.format.decimals, this.format);
    }
    divUnsafe(t) {
        this._checkFormat(t);
        const r = be(this._value, this.format.decimals), i = be(t._value, t.format.decimals);
        return Ut.fromValue(r.mul(this.format._multiplier).div(i), this.format.decimals, this.format);
    }
    floor() {
        const t = this.toString().split(".");
        t.length === 1 && t.push("0");
        let r = Ut.from(t[0], this.format);
        const i = !t[1].match(/^(0*)$/);
        return this.isNegative() && i && (r = r.subUnsafe(ff.toFormat(r.format))), r;
    }
    ceiling() {
        const t = this.toString().split(".");
        t.length === 1 && t.push("0");
        let r = Ut.from(t[0], this.format);
        const i = !t[1].match(/^(0*)$/);
        return !this.isNegative() && i && (r = r.addUnsafe(ff.toFormat(r.format))), r;
    }
    round(t) {
        t == null && (t = 0);
        const r = this.toString().split(".");
        if (r.length === 1 && r.push("0"), (t < 0 || t > 80 || t % 1) && Ht.throwArgumentError("invalid decimal count", "decimals", t), r[1].length <= t) return this;
        const i = Ut.from("1" + br.substring(0, t), this.format), n = zs.toFormat(this.format);
        return this.mulUnsafe(i).addUnsafe(n).floor().divUnsafe(i);
    }
    isZero() {
        return this._value === "0.0" || this._value === "0";
    }
    isNegative() {
        return this._value[0] === "-";
    }
    toString() {
        return this._value;
    }
    toHexString(t) {
        if (t == null) return this._hex;
        t % 8 && Ht.throwArgumentError("invalid byte width", "width", t);
        const r = V.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();
        return oe(r, t / 8);
    }
    toUnsafeFloat() {
        return parseFloat(this.toString());
    }
    toFormat(t) {
        return Ut.fromString(this._value, t);
    }
    static fromValue(t, r, i) {
        return i == null && r != null && !Hs(r) && (i = r, r = null), r == null && (r = 0), i == null && (i = "fixed"), Ut.fromString(Bi(t, r), vr.from(i));
    }
    static fromString(t, r) {
        r == null && (r = "fixed");
        const i = vr.from(r), n = be(t, i.decimals);
        !i.signed && n.lt(ef) && nf("unsigned value cannot be negative", "overflow", "value", t);
        let o = null;
        i.signed ? o = n.toTwos(i.width).toHexString() : (o = n.toHexString(), o = oe(o, i.width / 8));
        const h = Bi(n, i.decimals);
        return new Ut(Ar, o, h, i);
    }
    static fromBytes(t, r) {
        r == null && (r = "fixed");
        const i = vr.from(r);
        if (Ot(t).length > i.width / 8) throw new Error("overflow");
        let n = V.from(t);
        i.signed && (n = n.fromTwos(i.width));
        const o = n.toTwos((i.signed ? 0 : 1) + i.width).toHexString(), h = Bi(n, i.decimals);
        return new Ut(Ar, o, h, i);
    }
    static from(t, r) {
        if (typeof t == "string") return Ut.fromString(t, r);
        if (nr(t)) return Ut.fromBytes(t, r);
        try {
            return Ut.fromValue(t, 0, r);
        } catch (i) {
            if (i.code !== z.errors.INVALID_ARGUMENT) throw i;
        }
        return Ht.throwArgumentError("invalid FixedNumber value", "value", t);
    }
    static isFixedNumber(t) {
        return !!(t && t._isFixedNumber);
    }
}
const ff = Ut.from(1), zs = Ut.from("0.5"), js = "strings/5.7.0", of = new z(js);
var Fr;
(function(e) {
    e.current = "", e.NFC = "NFC", e.NFD = "NFD", e.NFKC = "NFKC", e.NFKD = "NFKD";
})(Fr || (Fr = {}));
var fr;
(function(e) {
    e.UNEXPECTED_CONTINUE = "unexpected continuation byte", e.BAD_PREFIX = "bad codepoint prefix", e.OVERRUN = "string overrun", e.MISSING_CONTINUE = "missing continuation byte", e.OUT_OF_RANGE = "out of UTF-8 range", e.UTF16_SURROGATE = "UTF-16 surrogate", e.OVERLONG = "overlong representation";
})(fr || (fr = {}));
function Qs(e, t, r, i, n) {
    return of.throwArgumentError(`invalid codepoint at offset ${t}; ${e}`, "bytes", r);
}
function sf(e, t, r, i, n) {
    if (e === fr.BAD_PREFIX || e === fr.UNEXPECTED_CONTINUE) {
        let o = 0;
        for(let h = t + 1; h < r.length && r[h] >> 6 === 2; h++)o++;
        return o;
    }
    return e === fr.OVERRUN ? r.length - t - 1 : 0;
}
function Js(e, t, r, i, n) {
    return e === fr.OVERLONG ? (i.push(n), 0) : (i.push(65533), sf(e, t, r));
}
Object.freeze({
    error: Qs,
    ignore: sf,
    replace: Js
});
function Ci(e, t = Fr.current) {
    t != Fr.current && (of.checkNormalize(), e = e.normalize(t));
    let r = [];
    for(let i = 0; i < e.length; i++){
        const n = e.charCodeAt(i);
        if (n < 128) r.push(n);
        else if (n < 2048) r.push(n >> 6 | 192), r.push(n & 63 | 128);
        else if ((n & 64512) == 55296) {
            i++;
            const o = e.charCodeAt(i);
            if (i >= e.length || (o & 64512) !== 56320) throw new Error("invalid utf-8 string");
            const h = 65536 + ((n & 1023) << 10) + (o & 1023);
            r.push(h >> 18 | 240), r.push(h >> 12 & 63 | 128), r.push(h >> 6 & 63 | 128), r.push(h & 63 | 128);
        } else r.push(n >> 12 | 224), r.push(n >> 6 & 63 | 128), r.push(n & 63 | 128);
    }
    return Ot(r);
}
function Gs(e) {
    if (e.length % 4 !== 0) throw new Error("bad data");
    let t = [];
    for(let r = 0; r < e.length; r += 4)t.push(parseInt(e.substring(r, r + 4), 16));
    return t;
}
function Ri(e, t) {
    t || (t = function(n) {
        return [
            parseInt(n, 16)
        ];
    });
    let r = 0, i = {};
    return e.split(",").forEach((n)=>{
        let o = n.split(":");
        r += parseInt(o[0], 16), i[r] = t(o[1]);
    }), i;
}
function af(e) {
    let t = 0;
    return e.split(",").map((r)=>{
        let i = r.split("-");
        i.length === 1 ? i[1] = "0" : i[1] === "" && (i[1] = "1");
        let n = t + parseInt(i[0], 16);
        return t = parseInt(i[1], 16), {
            l: n,
            h: t
        };
    });
}
af("221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"), "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff".split(",").map((e)=>parseInt(e, 16)), Ri("b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"), Ri("179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"), Ri("df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D", Gs), af("80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001");
const uf = "hash/5.7.0";
function Ys(e) {
    e = atob(e);
    const t = [];
    for(let r = 0; r < e.length; r++)t.push(e.charCodeAt(r));
    return Ot(t);
}
function hf(e, t) {
    t == null && (t = 1);
    const r = [], i = r.forEach, n = function(o, h) {
        i.call(o, function(p) {
            h > 0 && Array.isArray(p) ? n(p, h - 1) : r.push(p);
        });
    };
    return n(e, t), r;
}
function Vs(e) {
    const t = {};
    for(let r = 0; r < e.length; r++){
        const i = e[r];
        t[i[0]] = i[1];
    }
    return t;
}
function Ws(e) {
    let t = 0;
    function r() {
        return e[t++] << 8 | e[t++];
    }
    let i = r(), n = 1, o = [
        0,
        1
    ];
    for(let H = 1; H < i; H++)o.push(n += r());
    let h = r(), p = t;
    t += h;
    let A = 0, v = 0;
    function w() {
        return A == 0 && (v = v << 8 | e[t++], A = 8), v >> --A & 1;
    }
    const y = 31, S = Math.pow(2, y), N = S >>> 1, I = N >> 1, C = S - 1;
    let D = 0;
    for(let H = 0; H < y; H++)D = D << 1 | w();
    let U = [], J = 0, Bt = S;
    for(;;){
        let H = Math.floor(((D - J + 1) * n - 1) / Bt), L = 0, Pt = i;
        for(; Pt - L > 1;){
            let Vt = L + Pt >>> 1;
            H < o[Vt] ? Pt = Vt : L = Vt;
        }
        if (L == 0) break;
        U.push(L);
        let W = J + Math.floor(Bt * o[L] / n), Rt = J + Math.floor(Bt * o[L + 1] / n) - 1;
        for(; !((W ^ Rt) & N);)D = D << 1 & C | w(), W = W << 1 & C, Rt = Rt << 1 & C | 1;
        for(; W & ~Rt & I;)D = D & N | D << 1 & C >>> 1 | w(), W = W << 1 ^ N, Rt = (Rt ^ N) << 1 | N | 1;
        J = W, Bt = 1 + Rt - W;
    }
    let G = i - 4;
    return U.map((H)=>{
        switch(H - G){
            case 3:
                return G + 65792 + (e[p++] << 16 | e[p++] << 8 | e[p++]);
            case 2:
                return G + 256 + (e[p++] << 8 | e[p++]);
            case 1:
                return G + e[p++];
            default:
                return H - 1;
        }
    });
}
function Xs(e) {
    let t = 0;
    return ()=>e[t++];
}
function $s(e) {
    return Xs(Ws(e));
}
function Zs(e) {
    return e & 1 ? ~e >> 1 : e >> 1;
}
function t0(e, t) {
    let r = Array(e);
    for(let i = 0; i < e; i++)r[i] = 1 + t();
    return r;
}
function cf(e, t) {
    let r = Array(e);
    for(let i = 0, n = -1; i < e; i++)r[i] = n += 1 + t();
    return r;
}
function e0(e, t) {
    let r = Array(e);
    for(let i = 0, n = 0; i < e; i++)r[i] = n += Zs(t());
    return r;
}
function Ur(e, t) {
    let r = cf(e(), e), i = e(), n = cf(i, e), o = t0(i, e);
    for(let h = 0; h < i; h++)for(let p = 0; p < o[h]; p++)r.push(n[h] + p);
    return t ? r.map((h)=>t[h]) : r;
}
function r0(e) {
    let t = [];
    for(;;){
        let r = e();
        if (r == 0) break;
        t.push(n0(r, e));
    }
    for(;;){
        let r = e() - 1;
        if (r < 0) break;
        t.push(f0(r, e));
    }
    return Vs(hf(t));
}
function i0(e) {
    let t = [];
    for(;;){
        let r = e();
        if (r == 0) break;
        t.push(r);
    }
    return t;
}
function lf(e, t, r) {
    let i = Array(e).fill(void 0).map(()=>[]);
    for(let n = 0; n < t; n++)e0(e, r).forEach((o, h)=>i[h].push(o));
    return i;
}
function n0(e, t) {
    let r = 1 + t(), i = t(), n = i0(t), o = lf(n.length, 1 + e, t);
    return hf(o.map((h, p)=>{
        const A = h[0], v = h.slice(1);
        return Array(n[p]).fill(void 0).map((w, y)=>{
            let S = y * i;
            return [
                A + y * r,
                v.map((N)=>N + S)
            ];
        });
    }));
}
function f0(e, t) {
    let r = 1 + t();
    return lf(r, 1 + e, t).map((n)=>[
            n[0],
            n.slice(1)
        ]);
}
function o0(e) {
    let t = Ur(e).sort((i, n)=>i - n);
    return r();
    "TURBOPACK unreachable";
    function r() {
        let i = [];
        for(;;){
            let v = Ur(e, t);
            if (v.length == 0) break;
            i.push({
                set: new Set(v),
                node: r()
            });
        }
        i.sort((v, w)=>w.set.size - v.set.size);
        let n = e(), o = n % 3;
        n = n / 3 | 0;
        let h = !!(n & 1);
        n >>= 1;
        let p = n == 1, A = n == 2;
        return {
            branches: i,
            valid: o,
            fe0f: h,
            save: p,
            check: A
        };
    }
}
function s0() {
    return $s(Ys("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"));
}
const kr = s0();
new Set(Ur(kr)), new Set(Ur(kr)), r0(kr), o0(kr), new z(uf);
const a0 = new Uint8Array(32);
a0.fill(0);
const u0 = `Ethereum Signed Message:
`;
function df(e) {
    return typeof e == "string" && (e = Ci(e)), Ii(Ds([
        Ci(u0),
        Ci(String(e.length)),
        e
    ]));
}
const h0 = "rlp/5.7.0";
new z(h0);
const c0 = "address/5.7.0", yr = new z(c0);
function pf(e) {
    Jt(e, 20) || yr.throwArgumentError("invalid address", "address", e), e = e.toLowerCase();
    const t = e.substring(2).split(""), r = new Uint8Array(40);
    for(let n = 0; n < 40; n++)r[n] = t[n].charCodeAt(0);
    const i = Ot(Ii(r));
    for(let n = 0; n < 40; n += 2)i[n >> 1] >> 4 >= 8 && (t[n] = t[n].toUpperCase()), (i[n >> 1] & 15) >= 8 && (t[n + 1] = t[n + 1].toUpperCase());
    return "0x" + t.join("");
}
const l0 = 9007199254740991;
function d0(e) {
    return Math.log10 ? Math.log10(e) : Math.log(e) / Math.LN10;
}
const Oi = {};
for(let e = 0; e < 10; e++)Oi[String(e)] = String(e);
for(let e = 0; e < 26; e++)Oi[String.fromCharCode(65 + e)] = String(10 + e);
const vf = Math.floor(d0(l0));
function p0(e) {
    e = e.toUpperCase(), e = e.substring(4) + e.substring(0, 2) + "00";
    let t = e.split("").map((i)=>Oi[i]).join("");
    for(; t.length >= vf;){
        let i = t.substring(0, vf);
        t = parseInt(i, 10) % 97 + t.substring(i.length);
    }
    let r = String(98 - parseInt(t, 10) % 97);
    for(; r.length < 2;)r = "0" + r;
    return r;
}
function v0(e) {
    let t = null;
    if (typeof e != "string" && yr.throwArgumentError("invalid address", "address", e), e.match(/^(0x)?[0-9a-fA-F]{40}$/)) e.substring(0, 2) !== "0x" && (e = "0x" + e), t = pf(e), e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && t !== e && yr.throwArgumentError("bad address checksum", "address", e);
    else if (e.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
        for(e.substring(2, 4) !== p0(e) && yr.throwArgumentError("bad icap checksum", "address", e), t = Ls(e.substring(4)); t.length < 40;)t = "0" + t;
        t = pf("0x" + t);
    } else yr.throwArgumentError("invalid address", "address", e);
    return t;
}
const g0 = "properties/5.7.0";
new z(g0);
function wr(e, t, r) {
    Object.defineProperty(e, t, {
        enumerable: !0,
        value: r,
        writable: !1
    });
}
new z(uf);
const m0 = new Uint8Array(32);
m0.fill(0), V.from(-1);
const A0 = V.from(0), b0 = V.from(1);
V.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), oe(b0.toHexString(), 32), oe(A0.toHexString(), 32);
var se = {}, Q = {}, xr = gf;
function gf(e, t) {
    if (!e) throw new Error(t || "Assertion failed");
}
gf.equal = function(t, r, i) {
    if (t != r) throw new Error(i || "Assertion failed: " + t + " != " + r);
};
var Pi = {
    exports: {}
};
typeof Object.create == "function" ? Pi.exports = function(t, r) {
    r && (t.super_ = r, t.prototype = Object.create(r.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }));
} : Pi.exports = function(t, r) {
    if (r) {
        t.super_ = r;
        var i = function() {};
        i.prototype = r.prototype, t.prototype = new i, t.prototype.constructor = t;
    }
};
var y0 = xr, w0 = Pi.exports;
Q.inherits = w0;
function x0(e, t) {
    return (e.charCodeAt(t) & 64512) !== 55296 || t < 0 || t + 1 >= e.length ? !1 : (e.charCodeAt(t + 1) & 64512) === 56320;
}
function M0(e, t) {
    if (Array.isArray(e)) return e.slice();
    if (!e) return [];
    var r = [];
    if (typeof e == "string") if (t) {
        if (t === "hex") for(e = e.replace(/[^a-z0-9]+/ig, ""), e.length % 2 !== 0 && (e = "0" + e), n = 0; n < e.length; n += 2)r.push(parseInt(e[n] + e[n + 1], 16));
    } else for(var i = 0, n = 0; n < e.length; n++){
        var o = e.charCodeAt(n);
        o < 128 ? r[i++] = o : o < 2048 ? (r[i++] = o >> 6 | 192, r[i++] = o & 63 | 128) : x0(e, n) ? (o = 65536 + ((o & 1023) << 10) + (e.charCodeAt(++n) & 1023), r[i++] = o >> 18 | 240, r[i++] = o >> 12 & 63 | 128, r[i++] = o >> 6 & 63 | 128, r[i++] = o & 63 | 128) : (r[i++] = o >> 12 | 224, r[i++] = o >> 6 & 63 | 128, r[i++] = o & 63 | 128);
    }
    else for(n = 0; n < e.length; n++)r[n] = e[n] | 0;
    return r;
}
Q.toArray = M0;
function E0(e) {
    for(var t = "", r = 0; r < e.length; r++)t += Af(e[r].toString(16));
    return t;
}
Q.toHex = E0;
function mf(e) {
    var t = e >>> 24 | e >>> 8 & 65280 | e << 8 & 16711680 | (e & 255) << 24;
    return t >>> 0;
}
Q.htonl = mf;
function S0(e, t) {
    for(var r = "", i = 0; i < e.length; i++){
        var n = e[i];
        t === "little" && (n = mf(n)), r += bf(n.toString(16));
    }
    return r;
}
Q.toHex32 = S0;
function Af(e) {
    return e.length === 1 ? "0" + e : e;
}
Q.zero2 = Af;
function bf(e) {
    return e.length === 7 ? "0" + e : e.length === 6 ? "00" + e : e.length === 5 ? "000" + e : e.length === 4 ? "0000" + e : e.length === 3 ? "00000" + e : e.length === 2 ? "000000" + e : e.length === 1 ? "0000000" + e : e;
}
Q.zero8 = bf;
function I0(e, t, r, i) {
    var n = r - t;
    y0(n % 4 === 0);
    for(var o = new Array(n / 4), h = 0, p = t; h < o.length; h++, p += 4){
        var A;
        i === "big" ? A = e[p] << 24 | e[p + 1] << 16 | e[p + 2] << 8 | e[p + 3] : A = e[p + 3] << 24 | e[p + 2] << 16 | e[p + 1] << 8 | e[p], o[h] = A >>> 0;
    }
    return o;
}
Q.join32 = I0;
function N0(e, t) {
    for(var r = new Array(e.length * 4), i = 0, n = 0; i < e.length; i++, n += 4){
        var o = e[i];
        t === "big" ? (r[n] = o >>> 24, r[n + 1] = o >>> 16 & 255, r[n + 2] = o >>> 8 & 255, r[n + 3] = o & 255) : (r[n + 3] = o >>> 24, r[n + 2] = o >>> 16 & 255, r[n + 1] = o >>> 8 & 255, r[n] = o & 255);
    }
    return r;
}
Q.split32 = N0;
function _0(e, t) {
    return e >>> t | e << 32 - t;
}
Q.rotr32 = _0;
function B0(e, t) {
    return e << t | e >>> 32 - t;
}
Q.rotl32 = B0;
function C0(e, t) {
    return e + t >>> 0;
}
Q.sum32 = C0;
function R0(e, t, r) {
    return e + t + r >>> 0;
}
Q.sum32_3 = R0;
function O0(e, t, r, i) {
    return e + t + r + i >>> 0;
}
Q.sum32_4 = O0;
function P0(e, t, r, i, n) {
    return e + t + r + i + n >>> 0;
}
Q.sum32_5 = P0;
function T0(e, t, r, i) {
    var n = e[t], o = e[t + 1], h = i + o >>> 0, p = (h < i ? 1 : 0) + r + n;
    e[t] = p >>> 0, e[t + 1] = h;
}
Q.sum64 = T0;
function D0(e, t, r, i) {
    var n = t + i >>> 0, o = (n < t ? 1 : 0) + e + r;
    return o >>> 0;
}
Q.sum64_hi = D0;
function F0(e, t, r, i) {
    var n = t + i;
    return n >>> 0;
}
Q.sum64_lo = F0;
function U0(e, t, r, i, n, o, h, p) {
    var A = 0, v = t;
    v = v + i >>> 0, A += v < t ? 1 : 0, v = v + o >>> 0, A += v < o ? 1 : 0, v = v + p >>> 0, A += v < p ? 1 : 0;
    var w = e + r + n + h + A;
    return w >>> 0;
}
Q.sum64_4_hi = U0;
function k0(e, t, r, i, n, o, h, p) {
    var A = t + i + o + p;
    return A >>> 0;
}
Q.sum64_4_lo = k0;
function q0(e, t, r, i, n, o, h, p, A, v) {
    var w = 0, y = t;
    y = y + i >>> 0, w += y < t ? 1 : 0, y = y + o >>> 0, w += y < o ? 1 : 0, y = y + p >>> 0, w += y < p ? 1 : 0, y = y + v >>> 0, w += y < v ? 1 : 0;
    var S = e + r + n + h + A + w;
    return S >>> 0;
}
Q.sum64_5_hi = q0;
function K0(e, t, r, i, n, o, h, p, A, v) {
    var w = t + i + o + p + v;
    return w >>> 0;
}
Q.sum64_5_lo = K0;
function H0(e, t, r) {
    var i = t << 32 - r | e >>> r;
    return i >>> 0;
}
Q.rotr64_hi = H0;
function L0(e, t, r) {
    var i = e << 32 - r | t >>> r;
    return i >>> 0;
}
Q.rotr64_lo = L0;
function z0(e, t, r) {
    return e >>> r;
}
Q.shr64_hi = z0;
function j0(e, t, r) {
    var i = e << 32 - r | t >>> r;
    return i >>> 0;
}
Q.shr64_lo = j0;
var or = {}, yf = Q, Q0 = xr;
function qr() {
    this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32;
}
or.BlockHash = qr, qr.prototype.update = function(t, r) {
    if (t = yf.toArray(t, r), this.pending ? this.pending = this.pending.concat(t) : this.pending = t, this.pendingTotal += t.length, this.pending.length >= this._delta8) {
        t = this.pending;
        var i = t.length % this._delta8;
        this.pending = t.slice(t.length - i, t.length), this.pending.length === 0 && (this.pending = null), t = yf.join32(t, 0, t.length - i, this.endian);
        for(var n = 0; n < t.length; n += this._delta32)this._update(t, n, n + this._delta32);
    }
    return this;
}, qr.prototype.digest = function(t) {
    return this.update(this._pad()), Q0(this.pending === null), this._digest(t);
}, qr.prototype._pad = function() {
    var t = this.pendingTotal, r = this._delta8, i = r - (t + this.padLength) % r, n = new Array(i + this.padLength);
    n[0] = 128;
    for(var o = 1; o < i; o++)n[o] = 0;
    if (t <<= 3, this.endian === "big") {
        for(var h = 8; h < this.padLength; h++)n[o++] = 0;
        n[o++] = 0, n[o++] = 0, n[o++] = 0, n[o++] = 0, n[o++] = t >>> 24 & 255, n[o++] = t >>> 16 & 255, n[o++] = t >>> 8 & 255, n[o++] = t & 255;
    } else for(n[o++] = t & 255, n[o++] = t >>> 8 & 255, n[o++] = t >>> 16 & 255, n[o++] = t >>> 24 & 255, n[o++] = 0, n[o++] = 0, n[o++] = 0, n[o++] = 0, h = 8; h < this.padLength; h++)n[o++] = 0;
    return n;
};
var sr = {}, ae = {}, J0 = Q, ue = J0.rotr32;
function G0(e, t, r, i) {
    if (e === 0) return wf(t, r, i);
    if (e === 1 || e === 3) return Mf(t, r, i);
    if (e === 2) return xf(t, r, i);
}
ae.ft_1 = G0;
function wf(e, t, r) {
    return e & t ^ ~e & r;
}
ae.ch32 = wf;
function xf(e, t, r) {
    return e & t ^ e & r ^ t & r;
}
ae.maj32 = xf;
function Mf(e, t, r) {
    return e ^ t ^ r;
}
ae.p32 = Mf;
function Y0(e) {
    return ue(e, 2) ^ ue(e, 13) ^ ue(e, 22);
}
ae.s0_256 = Y0;
function V0(e) {
    return ue(e, 6) ^ ue(e, 11) ^ ue(e, 25);
}
ae.s1_256 = V0;
function W0(e) {
    return ue(e, 7) ^ ue(e, 18) ^ e >>> 3;
}
ae.g0_256 = W0;
function X0(e) {
    return ue(e, 17) ^ ue(e, 19) ^ e >>> 10;
}
ae.g1_256 = X0;
var ar = Q, $0 = or, Z0 = ae, Ti = ar.rotl32, Mr = ar.sum32, ta = ar.sum32_5, ea = Z0.ft_1, Ef = $0.BlockHash, ra = [
    1518500249,
    1859775393,
    2400959708,
    3395469782
];
function he() {
    if (!(this instanceof he)) return new he;
    Ef.call(this), this.h = [
        1732584193,
        4023233417,
        2562383102,
        271733878,
        3285377520
    ], this.W = new Array(80);
}
ar.inherits(he, Ef);
var ia = he;
he.blockSize = 512, he.outSize = 160, he.hmacStrength = 80, he.padLength = 64, he.prototype._update = function(t, r) {
    for(var i = this.W, n = 0; n < 16; n++)i[n] = t[r + n];
    for(; n < i.length; n++)i[n] = Ti(i[n - 3] ^ i[n - 8] ^ i[n - 14] ^ i[n - 16], 1);
    var o = this.h[0], h = this.h[1], p = this.h[2], A = this.h[3], v = this.h[4];
    for(n = 0; n < i.length; n++){
        var w = ~~(n / 20), y = ta(Ti(o, 5), ea(w, h, p, A), v, i[n], ra[w]);
        v = A, A = p, p = Ti(h, 30), h = o, o = y;
    }
    this.h[0] = Mr(this.h[0], o), this.h[1] = Mr(this.h[1], h), this.h[2] = Mr(this.h[2], p), this.h[3] = Mr(this.h[3], A), this.h[4] = Mr(this.h[4], v);
}, he.prototype._digest = function(t) {
    return t === "hex" ? ar.toHex32(this.h, "big") : ar.split32(this.h, "big");
};
var ur = Q, na = or, hr = ae, fa = xr, ie = ur.sum32, oa = ur.sum32_4, sa = ur.sum32_5, aa = hr.ch32, ua = hr.maj32, ha = hr.s0_256, ca = hr.s1_256, la = hr.g0_256, da = hr.g1_256, Sf = na.BlockHash, pa = [
    1116352408,
    1899447441,
    3049323471,
    3921009573,
    961987163,
    1508970993,
    2453635748,
    2870763221,
    3624381080,
    310598401,
    607225278,
    1426881987,
    1925078388,
    2162078206,
    2614888103,
    3248222580,
    3835390401,
    4022224774,
    264347078,
    604807628,
    770255983,
    1249150122,
    1555081692,
    1996064986,
    2554220882,
    2821834349,
    2952996808,
    3210313671,
    3336571891,
    3584528711,
    113926993,
    338241895,
    666307205,
    773529912,
    1294757372,
    1396182291,
    1695183700,
    1986661051,
    2177026350,
    2456956037,
    2730485921,
    2820302411,
    3259730800,
    3345764771,
    3516065817,
    3600352804,
    4094571909,
    275423344,
    430227734,
    506948616,
    659060556,
    883997877,
    958139571,
    1322822218,
    1537002063,
    1747873779,
    1955562222,
    2024104815,
    2227730452,
    2361852424,
    2428436474,
    2756734187,
    3204031479,
    3329325298
];
function ce() {
    if (!(this instanceof ce)) return new ce;
    Sf.call(this), this.h = [
        1779033703,
        3144134277,
        1013904242,
        2773480762,
        1359893119,
        2600822924,
        528734635,
        1541459225
    ], this.k = pa, this.W = new Array(64);
}
ur.inherits(ce, Sf);
var If = ce;
ce.blockSize = 512, ce.outSize = 256, ce.hmacStrength = 192, ce.padLength = 64, ce.prototype._update = function(t, r) {
    for(var i = this.W, n = 0; n < 16; n++)i[n] = t[r + n];
    for(; n < i.length; n++)i[n] = oa(da(i[n - 2]), i[n - 7], la(i[n - 15]), i[n - 16]);
    var o = this.h[0], h = this.h[1], p = this.h[2], A = this.h[3], v = this.h[4], w = this.h[5], y = this.h[6], S = this.h[7];
    for(fa(this.k.length === i.length), n = 0; n < i.length; n++){
        var N = sa(S, ca(v), aa(v, w, y), this.k[n], i[n]), I = ie(ha(o), ua(o, h, p));
        S = y, y = w, w = v, v = ie(A, N), A = p, p = h, h = o, o = ie(N, I);
    }
    this.h[0] = ie(this.h[0], o), this.h[1] = ie(this.h[1], h), this.h[2] = ie(this.h[2], p), this.h[3] = ie(this.h[3], A), this.h[4] = ie(this.h[4], v), this.h[5] = ie(this.h[5], w), this.h[6] = ie(this.h[6], y), this.h[7] = ie(this.h[7], S);
}, ce.prototype._digest = function(t) {
    return t === "hex" ? ur.toHex32(this.h, "big") : ur.split32(this.h, "big");
};
var Di = Q, Nf = If;
function ye() {
    if (!(this instanceof ye)) return new ye;
    Nf.call(this), this.h = [
        3238371032,
        914150663,
        812702999,
        4144912697,
        4290775857,
        1750603025,
        1694076839,
        3204075428
    ];
}
Di.inherits(ye, Nf);
var va = ye;
ye.blockSize = 512, ye.outSize = 224, ye.hmacStrength = 192, ye.padLength = 64, ye.prototype._digest = function(t) {
    return t === "hex" ? Di.toHex32(this.h.slice(0, 7), "big") : Di.split32(this.h.slice(0, 7), "big");
};
var jt = Q, ga = or, ma = xr, le = jt.rotr64_hi, de = jt.rotr64_lo, _f = jt.shr64_hi, Bf = jt.shr64_lo, Be = jt.sum64, Fi = jt.sum64_hi, Ui = jt.sum64_lo, Aa = jt.sum64_4_hi, ba = jt.sum64_4_lo, ya = jt.sum64_5_hi, wa = jt.sum64_5_lo, Cf = ga.BlockHash, xa = [
    1116352408,
    3609767458,
    1899447441,
    602891725,
    3049323471,
    3964484399,
    3921009573,
    2173295548,
    961987163,
    4081628472,
    1508970993,
    3053834265,
    2453635748,
    2937671579,
    2870763221,
    3664609560,
    3624381080,
    2734883394,
    310598401,
    1164996542,
    607225278,
    1323610764,
    1426881987,
    3590304994,
    1925078388,
    4068182383,
    2162078206,
    991336113,
    2614888103,
    633803317,
    3248222580,
    3479774868,
    3835390401,
    2666613458,
    4022224774,
    944711139,
    264347078,
    2341262773,
    604807628,
    2007800933,
    770255983,
    1495990901,
    1249150122,
    1856431235,
    1555081692,
    3175218132,
    1996064986,
    2198950837,
    2554220882,
    3999719339,
    2821834349,
    766784016,
    2952996808,
    2566594879,
    3210313671,
    3203337956,
    3336571891,
    1034457026,
    3584528711,
    2466948901,
    113926993,
    3758326383,
    338241895,
    168717936,
    666307205,
    1188179964,
    773529912,
    1546045734,
    1294757372,
    1522805485,
    1396182291,
    2643833823,
    1695183700,
    2343527390,
    1986661051,
    1014477480,
    2177026350,
    1206759142,
    2456956037,
    344077627,
    2730485921,
    1290863460,
    2820302411,
    3158454273,
    3259730800,
    3505952657,
    3345764771,
    106217008,
    3516065817,
    3606008344,
    3600352804,
    1432725776,
    4094571909,
    1467031594,
    275423344,
    851169720,
    430227734,
    3100823752,
    506948616,
    1363258195,
    659060556,
    3750685593,
    883997877,
    3785050280,
    958139571,
    3318307427,
    1322822218,
    3812723403,
    1537002063,
    2003034995,
    1747873779,
    3602036899,
    1955562222,
    1575990012,
    2024104815,
    1125592928,
    2227730452,
    2716904306,
    2361852424,
    442776044,
    2428436474,
    593698344,
    2756734187,
    3733110249,
    3204031479,
    2999351573,
    3329325298,
    3815920427,
    3391569614,
    3928383900,
    3515267271,
    566280711,
    3940187606,
    3454069534,
    4118630271,
    4000239992,
    116418474,
    1914138554,
    174292421,
    2731055270,
    289380356,
    3203993006,
    460393269,
    320620315,
    685471733,
    587496836,
    852142971,
    1086792851,
    1017036298,
    365543100,
    1126000580,
    2618297676,
    1288033470,
    3409855158,
    1501505948,
    4234509866,
    1607167915,
    987167468,
    1816402316,
    1246189591
];
function ne() {
    if (!(this instanceof ne)) return new ne;
    Cf.call(this), this.h = [
        1779033703,
        4089235720,
        3144134277,
        2227873595,
        1013904242,
        4271175723,
        2773480762,
        1595750129,
        1359893119,
        2917565137,
        2600822924,
        725511199,
        528734635,
        4215389547,
        1541459225,
        327033209
    ], this.k = xa, this.W = new Array(160);
}
jt.inherits(ne, Cf);
var Rf = ne;
ne.blockSize = 1024, ne.outSize = 512, ne.hmacStrength = 192, ne.padLength = 128, ne.prototype._prepareBlock = function(t, r) {
    for(var i = this.W, n = 0; n < 32; n++)i[n] = t[r + n];
    for(; n < i.length; n += 2){
        var o = Pa(i[n - 4], i[n - 3]), h = Ta(i[n - 4], i[n - 3]), p = i[n - 14], A = i[n - 13], v = Ra(i[n - 30], i[n - 29]), w = Oa(i[n - 30], i[n - 29]), y = i[n - 32], S = i[n - 31];
        i[n] = Aa(o, h, p, A, v, w, y, S), i[n + 1] = ba(o, h, p, A, v, w, y, S);
    }
}, ne.prototype._update = function(t, r) {
    this._prepareBlock(t, r);
    var i = this.W, n = this.h[0], o = this.h[1], h = this.h[2], p = this.h[3], A = this.h[4], v = this.h[5], w = this.h[6], y = this.h[7], S = this.h[8], N = this.h[9], I = this.h[10], C = this.h[11], D = this.h[12], U = this.h[13], J = this.h[14], Bt = this.h[15];
    ma(this.k.length === i.length);
    for(var G = 0; G < i.length; G += 2){
        var H = J, L = Bt, Pt = Ba(S, N), W = Ca(S, N), Rt = Ma(S, N, I, C, D), Vt = Ea(S, N, I, C, D, U), Y = this.k[G], Wt = this.k[G + 1], b = i[G], f = i[G + 1], a = ya(H, L, Pt, W, Rt, Vt, Y, Wt, b, f), c = wa(H, L, Pt, W, Rt, Vt, Y, Wt, b, f);
        H = Na(n, o), L = _a(n, o), Pt = Sa(n, o, h, p, A), W = Ia(n, o, h, p, A, v);
        var d = Fi(H, L, Pt, W), m = Ui(H, L, Pt, W);
        J = D, Bt = U, D = I, U = C, I = S, C = N, S = Fi(w, y, a, c), N = Ui(y, y, a, c), w = A, y = v, A = h, v = p, h = n, p = o, n = Fi(a, c, d, m), o = Ui(a, c, d, m);
    }
    Be(this.h, 0, n, o), Be(this.h, 2, h, p), Be(this.h, 4, A, v), Be(this.h, 6, w, y), Be(this.h, 8, S, N), Be(this.h, 10, I, C), Be(this.h, 12, D, U), Be(this.h, 14, J, Bt);
}, ne.prototype._digest = function(t) {
    return t === "hex" ? jt.toHex32(this.h, "big") : jt.split32(this.h, "big");
};
function Ma(e, t, r, i, n) {
    var o = e & r ^ ~e & n;
    return o < 0 && (o += 4294967296), o;
}
function Ea(e, t, r, i, n, o) {
    var h = t & i ^ ~t & o;
    return h < 0 && (h += 4294967296), h;
}
function Sa(e, t, r, i, n) {
    var o = e & r ^ e & n ^ r & n;
    return o < 0 && (o += 4294967296), o;
}
function Ia(e, t, r, i, n, o) {
    var h = t & i ^ t & o ^ i & o;
    return h < 0 && (h += 4294967296), h;
}
function Na(e, t) {
    var r = le(e, t, 28), i = le(t, e, 2), n = le(t, e, 7), o = r ^ i ^ n;
    return o < 0 && (o += 4294967296), o;
}
function _a(e, t) {
    var r = de(e, t, 28), i = de(t, e, 2), n = de(t, e, 7), o = r ^ i ^ n;
    return o < 0 && (o += 4294967296), o;
}
function Ba(e, t) {
    var r = le(e, t, 14), i = le(e, t, 18), n = le(t, e, 9), o = r ^ i ^ n;
    return o < 0 && (o += 4294967296), o;
}
function Ca(e, t) {
    var r = de(e, t, 14), i = de(e, t, 18), n = de(t, e, 9), o = r ^ i ^ n;
    return o < 0 && (o += 4294967296), o;
}
function Ra(e, t) {
    var r = le(e, t, 1), i = le(e, t, 8), n = _f(e, t, 7), o = r ^ i ^ n;
    return o < 0 && (o += 4294967296), o;
}
function Oa(e, t) {
    var r = de(e, t, 1), i = de(e, t, 8), n = Bf(e, t, 7), o = r ^ i ^ n;
    return o < 0 && (o += 4294967296), o;
}
function Pa(e, t) {
    var r = le(e, t, 19), i = le(t, e, 29), n = _f(e, t, 6), o = r ^ i ^ n;
    return o < 0 && (o += 4294967296), o;
}
function Ta(e, t) {
    var r = de(e, t, 19), i = de(t, e, 29), n = Bf(e, t, 6), o = r ^ i ^ n;
    return o < 0 && (o += 4294967296), o;
}
var ki = Q, Of = Rf;
function we() {
    if (!(this instanceof we)) return new we;
    Of.call(this), this.h = [
        3418070365,
        3238371032,
        1654270250,
        914150663,
        2438529370,
        812702999,
        355462360,
        4144912697,
        1731405415,
        4290775857,
        2394180231,
        1750603025,
        3675008525,
        1694076839,
        1203062813,
        3204075428
    ];
}
ki.inherits(we, Of);
var Da = we;
we.blockSize = 1024, we.outSize = 384, we.hmacStrength = 192, we.padLength = 128, we.prototype._digest = function(t) {
    return t === "hex" ? ki.toHex32(this.h.slice(0, 12), "big") : ki.split32(this.h.slice(0, 12), "big");
}, sr.sha1 = ia, sr.sha224 = va, sr.sha256 = If, sr.sha384 = Da, sr.sha512 = Rf;
var Pf = {}, Xe = Q, Fa = or, Kr = Xe.rotl32, Tf = Xe.sum32, Er = Xe.sum32_3, Df = Xe.sum32_4, Ff = Fa.BlockHash;
function pe() {
    if (!(this instanceof pe)) return new pe;
    Ff.call(this), this.h = [
        1732584193,
        4023233417,
        2562383102,
        271733878,
        3285377520
    ], this.endian = "little";
}
Xe.inherits(pe, Ff), Pf.ripemd160 = pe, pe.blockSize = 512, pe.outSize = 160, pe.hmacStrength = 192, pe.padLength = 64, pe.prototype._update = function(t, r) {
    for(var i = this.h[0], n = this.h[1], o = this.h[2], h = this.h[3], p = this.h[4], A = i, v = n, w = o, y = h, S = p, N = 0; N < 80; N++){
        var I = Tf(Kr(Df(i, Uf(N, n, o, h), t[qa[N] + r], Ua(N)), Ha[N]), p);
        i = p, p = h, h = Kr(o, 10), o = n, n = I, I = Tf(Kr(Df(A, Uf(79 - N, v, w, y), t[Ka[N] + r], ka(N)), La[N]), S), A = S, S = y, y = Kr(w, 10), w = v, v = I;
    }
    I = Er(this.h[1], o, y), this.h[1] = Er(this.h[2], h, S), this.h[2] = Er(this.h[3], p, A), this.h[3] = Er(this.h[4], i, v), this.h[4] = Er(this.h[0], n, w), this.h[0] = I;
}, pe.prototype._digest = function(t) {
    return t === "hex" ? Xe.toHex32(this.h, "little") : Xe.split32(this.h, "little");
};
function Uf(e, t, r, i) {
    return e <= 15 ? t ^ r ^ i : e <= 31 ? t & r | ~t & i : e <= 47 ? (t | ~r) ^ i : e <= 63 ? t & i | r & ~i : t ^ (r | ~i);
}
function Ua(e) {
    return e <= 15 ? 0 : e <= 31 ? 1518500249 : e <= 47 ? 1859775393 : e <= 63 ? 2400959708 : 2840853838;
}
function ka(e) {
    return e <= 15 ? 1352829926 : e <= 31 ? 1548603684 : e <= 47 ? 1836072691 : e <= 63 ? 2053994217 : 0;
}
var qa = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    7,
    4,
    13,
    1,
    10,
    6,
    15,
    3,
    12,
    0,
    9,
    5,
    2,
    14,
    11,
    8,
    3,
    10,
    14,
    4,
    9,
    15,
    8,
    1,
    2,
    7,
    0,
    6,
    13,
    11,
    5,
    12,
    1,
    9,
    11,
    10,
    0,
    8,
    12,
    4,
    13,
    3,
    7,
    15,
    14,
    5,
    6,
    2,
    4,
    0,
    5,
    9,
    7,
    12,
    2,
    10,
    14,
    1,
    3,
    8,
    11,
    6,
    15,
    13
], Ka = [
    5,
    14,
    7,
    0,
    9,
    2,
    11,
    4,
    13,
    6,
    15,
    8,
    1,
    10,
    3,
    12,
    6,
    11,
    3,
    7,
    0,
    13,
    5,
    10,
    14,
    15,
    8,
    12,
    4,
    9,
    1,
    2,
    15,
    5,
    1,
    3,
    7,
    14,
    6,
    9,
    11,
    8,
    12,
    2,
    10,
    0,
    4,
    13,
    8,
    6,
    4,
    1,
    3,
    11,
    15,
    0,
    5,
    12,
    2,
    13,
    9,
    7,
    10,
    14,
    12,
    15,
    10,
    4,
    1,
    5,
    8,
    7,
    6,
    2,
    13,
    14,
    0,
    3,
    9,
    11
], Ha = [
    11,
    14,
    15,
    12,
    5,
    8,
    7,
    9,
    11,
    13,
    14,
    15,
    6,
    7,
    9,
    8,
    7,
    6,
    8,
    13,
    11,
    9,
    7,
    15,
    7,
    12,
    15,
    9,
    11,
    7,
    13,
    12,
    11,
    13,
    6,
    7,
    14,
    9,
    13,
    15,
    14,
    8,
    13,
    6,
    5,
    12,
    7,
    5,
    11,
    12,
    14,
    15,
    14,
    15,
    9,
    8,
    9,
    14,
    5,
    6,
    8,
    6,
    5,
    12,
    9,
    15,
    5,
    11,
    6,
    8,
    13,
    12,
    5,
    12,
    13,
    14,
    11,
    8,
    5,
    6
], La = [
    8,
    9,
    9,
    11,
    13,
    15,
    15,
    5,
    7,
    7,
    8,
    11,
    14,
    14,
    12,
    6,
    9,
    13,
    15,
    7,
    12,
    8,
    9,
    11,
    7,
    7,
    12,
    7,
    6,
    15,
    13,
    11,
    9,
    7,
    15,
    11,
    8,
    6,
    6,
    14,
    12,
    13,
    5,
    14,
    13,
    13,
    7,
    5,
    15,
    5,
    8,
    11,
    14,
    14,
    6,
    14,
    6,
    9,
    12,
    9,
    12,
    5,
    15,
    8,
    8,
    5,
    12,
    9,
    12,
    5,
    14,
    6,
    8,
    13,
    6,
    5,
    15,
    13,
    11,
    11
], za = Q, ja = xr;
function cr(e, t, r) {
    if (!(this instanceof cr)) return new cr(e, t, r);
    this.Hash = e, this.blockSize = e.blockSize / 8, this.outSize = e.outSize / 8, this.inner = null, this.outer = null, this._init(za.toArray(t, r));
}
var Qa = cr;
cr.prototype._init = function(t) {
    t.length > this.blockSize && (t = new this.Hash().update(t).digest()), ja(t.length <= this.blockSize);
    for(var r = t.length; r < this.blockSize; r++)t.push(0);
    for(r = 0; r < t.length; r++)t[r] ^= 54;
    for(this.inner = new this.Hash().update(t), r = 0; r < t.length; r++)t[r] ^= 106;
    this.outer = new this.Hash().update(t);
}, cr.prototype.update = function(t, r) {
    return this.inner.update(t, r), this;
}, cr.prototype.digest = function(t) {
    return this.outer.update(this.inner.digest()), this.outer.digest(t);
}, function(e) {
    var t = e;
    t.utils = Q, t.common = or, t.sha = sr, t.ripemd = Pf, t.hmac = Qa, t.sha1 = t.sha.sha1, t.sha256 = t.sha.sha256, t.sha224 = t.sha.sha224, t.sha384 = t.sha.sha384, t.sha512 = t.sha.sha512, t.ripemd160 = t.ripemd.ripemd160;
}(se);
function lr(e, t, r) {
    return r = {
        path: t,
        exports: {},
        require: function(i, n) {
            return Ja(i, n ?? r.path);
        }
    }, e(r, r.exports), r.exports;
}
function Ja() {
    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var qi = kf;
function kf(e, t) {
    if (!e) throw new Error(t || "Assertion failed");
}
kf.equal = function(t, r, i) {
    if (t != r) throw new Error(i || "Assertion failed: " + t + " != " + r);
};
var fe = lr(function(e, t) {
    var r = t;
    function i(h, p) {
        if (Array.isArray(h)) return h.slice();
        if (!h) return [];
        var A = [];
        if (typeof h != "string") {
            for(var v = 0; v < h.length; v++)A[v] = h[v] | 0;
            return A;
        }
        if (p === "hex") {
            h = h.replace(/[^a-z0-9]+/ig, ""), h.length % 2 !== 0 && (h = "0" + h);
            for(var v = 0; v < h.length; v += 2)A.push(parseInt(h[v] + h[v + 1], 16));
        } else for(var v = 0; v < h.length; v++){
            var w = h.charCodeAt(v), y = w >> 8, S = w & 255;
            y ? A.push(y, S) : A.push(S);
        }
        return A;
    }
    r.toArray = i;
    function n(h) {
        return h.length === 1 ? "0" + h : h;
    }
    r.zero2 = n;
    function o(h) {
        for(var p = "", A = 0; A < h.length; A++)p += n(h[A].toString(16));
        return p;
    }
    r.toHex = o, r.encode = function(p, A) {
        return A === "hex" ? o(p) : p;
    };
}), Gt = lr(function(e, t) {
    var r = t;
    r.assert = qi, r.toArray = fe.toArray, r.zero2 = fe.zero2, r.toHex = fe.toHex, r.encode = fe.encode;
    function i(A, v, w) {
        var y = new Array(Math.max(A.bitLength(), w) + 1);
        y.fill(0);
        for(var S = 1 << v + 1, N = A.clone(), I = 0; I < y.length; I++){
            var C, D = N.andln(S - 1);
            N.isOdd() ? (D > (S >> 1) - 1 ? C = (S >> 1) - D : C = D, N.isubn(C)) : C = 0, y[I] = C, N.iushrn(1);
        }
        return y;
    }
    r.getNAF = i;
    function n(A, v) {
        var w = [
            [],
            []
        ];
        A = A.clone(), v = v.clone();
        for(var y = 0, S = 0, N; A.cmpn(-y) > 0 || v.cmpn(-S) > 0;){
            var I = A.andln(3) + y & 3, C = v.andln(3) + S & 3;
            I === 3 && (I = -1), C === 3 && (C = -1);
            var D;
            I & 1 ? (N = A.andln(7) + y & 7, (N === 3 || N === 5) && C === 2 ? D = -I : D = I) : D = 0, w[0].push(D);
            var U;
            C & 1 ? (N = v.andln(7) + S & 7, (N === 3 || N === 5) && I === 2 ? U = -C : U = C) : U = 0, w[1].push(U), 2 * y === D + 1 && (y = 1 - y), 2 * S === U + 1 && (S = 1 - S), A.iushrn(1), v.iushrn(1);
        }
        return w;
    }
    r.getJSF = n;
    function o(A, v, w) {
        var y = "_" + v;
        A.prototype[v] = function() {
            return this[y] !== void 0 ? this[y] : this[y] = w.call(this);
        };
    }
    r.cachedProperty = o;
    function h(A) {
        return typeof A == "string" ? r.toArray(A, "hex") : A;
    }
    r.parseBytes = h;
    function p(A) {
        return new K(A, "hex", "le");
    }
    r.intFromLE = p;
}), Hr = Gt.getNAF, Ga = Gt.getJSF, Lr = Gt.assert;
function Ce(e, t) {
    this.type = e, this.p = new K(t.p, 16), this.red = t.prime ? K.red(t.prime) : K.mont(this.p), this.zero = new K(0).toRed(this.red), this.one = new K(1).toRed(this.red), this.two = new K(2).toRed(this.red), this.n = t.n && new K(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
    var r = this.n && this.p.div(this.n);
    !r || r.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red));
}
var $e = Ce;
Ce.prototype.point = function() {
    throw new Error("Not implemented");
}, Ce.prototype.validate = function() {
    throw new Error("Not implemented");
}, Ce.prototype._fixedNafMul = function(t, r) {
    Lr(t.precomputed);
    var i = t._getDoubles(), n = Hr(r, 1, this._bitLength), o = (1 << i.step + 1) - (i.step % 2 === 0 ? 2 : 1);
    o /= 3;
    var h = [], p, A;
    for(p = 0; p < n.length; p += i.step){
        A = 0;
        for(var v = p + i.step - 1; v >= p; v--)A = (A << 1) + n[v];
        h.push(A);
    }
    for(var w = this.jpoint(null, null, null), y = this.jpoint(null, null, null), S = o; S > 0; S--){
        for(p = 0; p < h.length; p++)A = h[p], A === S ? y = y.mixedAdd(i.points[p]) : A === -S && (y = y.mixedAdd(i.points[p].neg()));
        w = w.add(y);
    }
    return w.toP();
}, Ce.prototype._wnafMul = function(t, r) {
    var i = 4, n = t._getNAFPoints(i);
    i = n.wnd;
    for(var o = n.points, h = Hr(r, i, this._bitLength), p = this.jpoint(null, null, null), A = h.length - 1; A >= 0; A--){
        for(var v = 0; A >= 0 && h[A] === 0; A--)v++;
        if (A >= 0 && v++, p = p.dblp(v), A < 0) break;
        var w = h[A];
        Lr(w !== 0), t.type === "affine" ? w > 0 ? p = p.mixedAdd(o[w - 1 >> 1]) : p = p.mixedAdd(o[-w - 1 >> 1].neg()) : w > 0 ? p = p.add(o[w - 1 >> 1]) : p = p.add(o[-w - 1 >> 1].neg());
    }
    return t.type === "affine" ? p.toP() : p;
}, Ce.prototype._wnafMulAdd = function(t, r, i, n, o) {
    var h = this._wnafT1, p = this._wnafT2, A = this._wnafT3, v = 0, w, y, S;
    for(w = 0; w < n; w++){
        S = r[w];
        var N = S._getNAFPoints(t);
        h[w] = N.wnd, p[w] = N.points;
    }
    for(w = n - 1; w >= 1; w -= 2){
        var I = w - 1, C = w;
        if (h[I] !== 1 || h[C] !== 1) {
            A[I] = Hr(i[I], h[I], this._bitLength), A[C] = Hr(i[C], h[C], this._bitLength), v = Math.max(A[I].length, v), v = Math.max(A[C].length, v);
            continue;
        }
        var D = [
            r[I],
            null,
            null,
            r[C]
        ];
        r[I].y.cmp(r[C].y) === 0 ? (D[1] = r[I].add(r[C]), D[2] = r[I].toJ().mixedAdd(r[C].neg())) : r[I].y.cmp(r[C].y.redNeg()) === 0 ? (D[1] = r[I].toJ().mixedAdd(r[C]), D[2] = r[I].add(r[C].neg())) : (D[1] = r[I].toJ().mixedAdd(r[C]), D[2] = r[I].toJ().mixedAdd(r[C].neg()));
        var U = [
            -3,
            -1,
            -5,
            -7,
            0,
            7,
            5,
            1,
            3
        ], J = Ga(i[I], i[C]);
        for(v = Math.max(J[0].length, v), A[I] = new Array(v), A[C] = new Array(v), y = 0; y < v; y++){
            var Bt = J[0][y] | 0, G = J[1][y] | 0;
            A[I][y] = U[(Bt + 1) * 3 + (G + 1)], A[C][y] = 0, p[I] = D;
        }
    }
    var H = this.jpoint(null, null, null), L = this._wnafT4;
    for(w = v; w >= 0; w--){
        for(var Pt = 0; w >= 0;){
            var W = !0;
            for(y = 0; y < n; y++)L[y] = A[y][w] | 0, L[y] !== 0 && (W = !1);
            if (!W) break;
            Pt++, w--;
        }
        if (w >= 0 && Pt++, H = H.dblp(Pt), w < 0) break;
        for(y = 0; y < n; y++){
            var Rt = L[y];
            Rt !== 0 && (Rt > 0 ? S = p[y][Rt - 1 >> 1] : Rt < 0 && (S = p[y][-Rt - 1 >> 1].neg()), S.type === "affine" ? H = H.mixedAdd(S) : H = H.add(S));
        }
    }
    for(w = 0; w < n; w++)p[w] = null;
    return o ? H : H.toP();
};
function Zt(e, t) {
    this.curve = e, this.type = t, this.precomputed = null;
}
Ce.BasePoint = Zt, Zt.prototype.eq = function() {
    throw new Error("Not implemented");
}, Zt.prototype.validate = function() {
    return this.curve.validate(this);
}, Ce.prototype.decodePoint = function(t, r) {
    t = Gt.toArray(t, r);
    var i = this.p.byteLength();
    if ((t[0] === 4 || t[0] === 6 || t[0] === 7) && t.length - 1 === 2 * i) {
        t[0] === 6 ? Lr(t[t.length - 1] % 2 === 0) : t[0] === 7 && Lr(t[t.length - 1] % 2 === 1);
        var n = this.point(t.slice(1, 1 + i), t.slice(1 + i, 1 + 2 * i));
        return n;
    } else if ((t[0] === 2 || t[0] === 3) && t.length - 1 === i) return this.pointFromX(t.slice(1, 1 + i), t[0] === 3);
    throw new Error("Unknown point format");
}, Zt.prototype.encodeCompressed = function(t) {
    return this.encode(t, !0);
}, Zt.prototype._encode = function(t) {
    var r = this.curve.p.byteLength(), i = this.getX().toArray("be", r);
    return t ? [
        this.getY().isEven() ? 2 : 3
    ].concat(i) : [
        4
    ].concat(i, this.getY().toArray("be", r));
}, Zt.prototype.encode = function(t, r) {
    return Gt.encode(this._encode(r), t);
}, Zt.prototype.precompute = function(t) {
    if (this.precomputed) return this;
    var r = {
        doubles: null,
        naf: null,
        beta: null
    };
    return r.naf = this._getNAFPoints(8), r.doubles = this._getDoubles(4, t), r.beta = this._getBeta(), this.precomputed = r, this;
}, Zt.prototype._hasDoubles = function(t) {
    if (!this.precomputed) return !1;
    var r = this.precomputed.doubles;
    return r ? r.points.length >= Math.ceil((t.bitLength() + 1) / r.step) : !1;
}, Zt.prototype._getDoubles = function(t, r) {
    if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
    for(var i = [
        this
    ], n = this, o = 0; o < r; o += t){
        for(var h = 0; h < t; h++)n = n.dbl();
        i.push(n);
    }
    return {
        step: t,
        points: i
    };
}, Zt.prototype._getNAFPoints = function(t) {
    if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
    for(var r = [
        this
    ], i = (1 << t) - 1, n = i === 1 ? null : this.dbl(), o = 1; o < i; o++)r[o] = r[o - 1].add(n);
    return {
        wnd: t,
        points: r
    };
}, Zt.prototype._getBeta = function() {
    return null;
}, Zt.prototype.dblp = function(t) {
    for(var r = this, i = 0; i < t; i++)r = r.dbl();
    return r;
};
var Ki = lr(function(e) {
    typeof Object.create == "function" ? e.exports = function(r, i) {
        i && (r.super_ = i, r.prototype = Object.create(i.prototype, {
            constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }));
    } : e.exports = function(r, i) {
        if (i) {
            r.super_ = i;
            var n = function() {};
            n.prototype = i.prototype, r.prototype = new n, r.prototype.constructor = r;
        }
    };
}), Ya = Gt.assert;
function te(e) {
    $e.call(this, "short", e), this.a = new K(e.a, 16).toRed(this.red), this.b = new K(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(e), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4);
}
Ki(te, $e);
var Va = te;
te.prototype._getEndomorphism = function(t) {
    if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
        var r, i;
        if (t.beta) r = new K(t.beta, 16).toRed(this.red);
        else {
            var n = this._getEndoRoots(this.p);
            r = n[0].cmp(n[1]) < 0 ? n[0] : n[1], r = r.toRed(this.red);
        }
        if (t.lambda) i = new K(t.lambda, 16);
        else {
            var o = this._getEndoRoots(this.n);
            this.g.mul(o[0]).x.cmp(this.g.x.redMul(r)) === 0 ? i = o[0] : (i = o[1], Ya(this.g.mul(i).x.cmp(this.g.x.redMul(r)) === 0));
        }
        var h;
        return t.basis ? h = t.basis.map(function(p) {
            return {
                a: new K(p.a, 16),
                b: new K(p.b, 16)
            };
        }) : h = this._getEndoBasis(i), {
            beta: r,
            lambda: i,
            basis: h
        };
    }
}, te.prototype._getEndoRoots = function(t) {
    var r = t === this.p ? this.red : K.mont(t), i = new K(2).toRed(r).redInvm(), n = i.redNeg(), o = new K(3).toRed(r).redNeg().redSqrt().redMul(i), h = n.redAdd(o).fromRed(), p = n.redSub(o).fromRed();
    return [
        h,
        p
    ];
}, te.prototype._getEndoBasis = function(t) {
    for(var r = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), i = t, n = this.n.clone(), o = new K(1), h = new K(0), p = new K(0), A = new K(1), v, w, y, S, N, I, C, D = 0, U, J; i.cmpn(0) !== 0;){
        var Bt = n.div(i);
        U = n.sub(Bt.mul(i)), J = p.sub(Bt.mul(o));
        var G = A.sub(Bt.mul(h));
        if (!y && U.cmp(r) < 0) v = C.neg(), w = o, y = U.neg(), S = J;
        else if (y && ++D === 2) break;
        C = U, n = i, i = U, p = o, o = J, A = h, h = G;
    }
    N = U.neg(), I = J;
    var H = y.sqr().add(S.sqr()), L = N.sqr().add(I.sqr());
    return L.cmp(H) >= 0 && (N = v, I = w), y.negative && (y = y.neg(), S = S.neg()), N.negative && (N = N.neg(), I = I.neg()), [
        {
            a: y,
            b: S
        },
        {
            a: N,
            b: I
        }
    ];
}, te.prototype._endoSplit = function(t) {
    var r = this.endo.basis, i = r[0], n = r[1], o = n.b.mul(t).divRound(this.n), h = i.b.neg().mul(t).divRound(this.n), p = o.mul(i.a), A = h.mul(n.a), v = o.mul(i.b), w = h.mul(n.b), y = t.sub(p).sub(A), S = v.add(w).neg();
    return {
        k1: y,
        k2: S
    };
}, te.prototype.pointFromX = function(t, r) {
    t = new K(t, 16), t.red || (t = t.toRed(this.red));
    var i = t.redSqr().redMul(t).redIAdd(t.redMul(this.a)).redIAdd(this.b), n = i.redSqrt();
    if (n.redSqr().redSub(i).cmp(this.zero) !== 0) throw new Error("invalid point");
    var o = n.fromRed().isOdd();
    return (r && !o || !r && o) && (n = n.redNeg()), this.point(t, n);
}, te.prototype.validate = function(t) {
    if (t.inf) return !0;
    var r = t.x, i = t.y, n = this.a.redMul(r), o = r.redSqr().redMul(r).redIAdd(n).redIAdd(this.b);
    return i.redSqr().redISub(o).cmpn(0) === 0;
}, te.prototype._endoWnafMulAdd = function(t, r, i) {
    for(var n = this._endoWnafT1, o = this._endoWnafT2, h = 0; h < t.length; h++){
        var p = this._endoSplit(r[h]), A = t[h], v = A._getBeta();
        p.k1.negative && (p.k1.ineg(), A = A.neg(!0)), p.k2.negative && (p.k2.ineg(), v = v.neg(!0)), n[h * 2] = A, n[h * 2 + 1] = v, o[h * 2] = p.k1, o[h * 2 + 1] = p.k2;
    }
    for(var w = this._wnafMulAdd(1, n, o, h * 2, i), y = 0; y < h * 2; y++)n[y] = null, o[y] = null;
    return w;
};
function Dt(e, t, r, i) {
    $e.BasePoint.call(this, e, "affine"), t === null && r === null ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new K(t, 16), this.y = new K(r, 16), i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1);
}
Ki(Dt, $e.BasePoint), te.prototype.point = function(t, r, i) {
    return new Dt(this, t, r, i);
}, te.prototype.pointFromJSON = function(t, r) {
    return Dt.fromJSON(this, t, r);
}, Dt.prototype._getBeta = function() {
    if (this.curve.endo) {
        var t = this.precomputed;
        if (t && t.beta) return t.beta;
        var r = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
        if (t) {
            var i = this.curve, n = function(o) {
                return i.point(o.x.redMul(i.endo.beta), o.y);
            };
            t.beta = r, r.precomputed = {
                beta: null,
                naf: t.naf && {
                    wnd: t.naf.wnd,
                    points: t.naf.points.map(n)
                },
                doubles: t.doubles && {
                    step: t.doubles.step,
                    points: t.doubles.points.map(n)
                }
            };
        }
        return r;
    }
}, Dt.prototype.toJSON = function() {
    return this.precomputed ? [
        this.x,
        this.y,
        this.precomputed && {
            doubles: this.precomputed.doubles && {
                step: this.precomputed.doubles.step,
                points: this.precomputed.doubles.points.slice(1)
            },
            naf: this.precomputed.naf && {
                wnd: this.precomputed.naf.wnd,
                points: this.precomputed.naf.points.slice(1)
            }
        }
    ] : [
        this.x,
        this.y
    ];
}, Dt.fromJSON = function(t, r, i) {
    typeof r == "string" && (r = JSON.parse(r));
    var n = t.point(r[0], r[1], i);
    if (!r[2]) return n;
    function o(p) {
        return t.point(p[0], p[1], i);
    }
    var h = r[2];
    return n.precomputed = {
        beta: null,
        doubles: h.doubles && {
            step: h.doubles.step,
            points: [
                n
            ].concat(h.doubles.points.map(o))
        },
        naf: h.naf && {
            wnd: h.naf.wnd,
            points: [
                n
            ].concat(h.naf.points.map(o))
        }
    }, n;
}, Dt.prototype.inspect = function() {
    return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">";
}, Dt.prototype.isInfinity = function() {
    return this.inf;
}, Dt.prototype.add = function(t) {
    if (this.inf) return t;
    if (t.inf) return this;
    if (this.eq(t)) return this.dbl();
    if (this.neg().eq(t)) return this.curve.point(null, null);
    if (this.x.cmp(t.x) === 0) return this.curve.point(null, null);
    var r = this.y.redSub(t.y);
    r.cmpn(0) !== 0 && (r = r.redMul(this.x.redSub(t.x).redInvm()));
    var i = r.redSqr().redISub(this.x).redISub(t.x), n = r.redMul(this.x.redSub(i)).redISub(this.y);
    return this.curve.point(i, n);
}, Dt.prototype.dbl = function() {
    if (this.inf) return this;
    var t = this.y.redAdd(this.y);
    if (t.cmpn(0) === 0) return this.curve.point(null, null);
    var r = this.curve.a, i = this.x.redSqr(), n = t.redInvm(), o = i.redAdd(i).redIAdd(i).redIAdd(r).redMul(n), h = o.redSqr().redISub(this.x.redAdd(this.x)), p = o.redMul(this.x.redSub(h)).redISub(this.y);
    return this.curve.point(h, p);
}, Dt.prototype.getX = function() {
    return this.x.fromRed();
}, Dt.prototype.getY = function() {
    return this.y.fromRed();
}, Dt.prototype.mul = function(t) {
    return t = new K(t, 16), this.isInfinity() ? this : this._hasDoubles(t) ? this.curve._fixedNafMul(this, t) : this.curve.endo ? this.curve._endoWnafMulAdd([
        this
    ], [
        t
    ]) : this.curve._wnafMul(this, t);
}, Dt.prototype.mulAdd = function(t, r, i) {
    var n = [
        this,
        r
    ], o = [
        t,
        i
    ];
    return this.curve.endo ? this.curve._endoWnafMulAdd(n, o) : this.curve._wnafMulAdd(1, n, o, 2);
}, Dt.prototype.jmulAdd = function(t, r, i) {
    var n = [
        this,
        r
    ], o = [
        t,
        i
    ];
    return this.curve.endo ? this.curve._endoWnafMulAdd(n, o, !0) : this.curve._wnafMulAdd(1, n, o, 2, !0);
}, Dt.prototype.eq = function(t) {
    return this === t || this.inf === t.inf && (this.inf || this.x.cmp(t.x) === 0 && this.y.cmp(t.y) === 0);
}, Dt.prototype.neg = function(t) {
    if (this.inf) return this;
    var r = this.curve.point(this.x, this.y.redNeg());
    if (t && this.precomputed) {
        var i = this.precomputed, n = function(o) {
            return o.neg();
        };
        r.precomputed = {
            naf: i.naf && {
                wnd: i.naf.wnd,
                points: i.naf.points.map(n)
            },
            doubles: i.doubles && {
                step: i.doubles.step,
                points: i.doubles.points.map(n)
            }
        };
    }
    return r;
}, Dt.prototype.toJ = function() {
    if (this.inf) return this.curve.jpoint(null, null, null);
    var t = this.curve.jpoint(this.x, this.y, this.curve.one);
    return t;
};
function Ft(e, t, r, i) {
    $e.BasePoint.call(this, e, "jacobian"), t === null && r === null && i === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new K(0)) : (this.x = new K(t, 16), this.y = new K(r, 16), this.z = new K(i, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
}
Ki(Ft, $e.BasePoint), te.prototype.jpoint = function(t, r, i) {
    return new Ft(this, t, r, i);
}, Ft.prototype.toP = function() {
    if (this.isInfinity()) return this.curve.point(null, null);
    var t = this.z.redInvm(), r = t.redSqr(), i = this.x.redMul(r), n = this.y.redMul(r).redMul(t);
    return this.curve.point(i, n);
}, Ft.prototype.neg = function() {
    return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
}, Ft.prototype.add = function(t) {
    if (this.isInfinity()) return t;
    if (t.isInfinity()) return this;
    var r = t.z.redSqr(), i = this.z.redSqr(), n = this.x.redMul(r), o = t.x.redMul(i), h = this.y.redMul(r.redMul(t.z)), p = t.y.redMul(i.redMul(this.z)), A = n.redSub(o), v = h.redSub(p);
    if (A.cmpn(0) === 0) return v.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
    var w = A.redSqr(), y = w.redMul(A), S = n.redMul(w), N = v.redSqr().redIAdd(y).redISub(S).redISub(S), I = v.redMul(S.redISub(N)).redISub(h.redMul(y)), C = this.z.redMul(t.z).redMul(A);
    return this.curve.jpoint(N, I, C);
}, Ft.prototype.mixedAdd = function(t) {
    if (this.isInfinity()) return t.toJ();
    if (t.isInfinity()) return this;
    var r = this.z.redSqr(), i = this.x, n = t.x.redMul(r), o = this.y, h = t.y.redMul(r).redMul(this.z), p = i.redSub(n), A = o.redSub(h);
    if (p.cmpn(0) === 0) return A.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
    var v = p.redSqr(), w = v.redMul(p), y = i.redMul(v), S = A.redSqr().redIAdd(w).redISub(y).redISub(y), N = A.redMul(y.redISub(S)).redISub(o.redMul(w)), I = this.z.redMul(p);
    return this.curve.jpoint(S, N, I);
}, Ft.prototype.dblp = function(t) {
    if (t === 0) return this;
    if (this.isInfinity()) return this;
    if (!t) return this.dbl();
    var r;
    if (this.curve.zeroA || this.curve.threeA) {
        var i = this;
        for(r = 0; r < t; r++)i = i.dbl();
        return i;
    }
    var n = this.curve.a, o = this.curve.tinv, h = this.x, p = this.y, A = this.z, v = A.redSqr().redSqr(), w = p.redAdd(p);
    for(r = 0; r < t; r++){
        var y = h.redSqr(), S = w.redSqr(), N = S.redSqr(), I = y.redAdd(y).redIAdd(y).redIAdd(n.redMul(v)), C = h.redMul(S), D = I.redSqr().redISub(C.redAdd(C)), U = C.redISub(D), J = I.redMul(U);
        J = J.redIAdd(J).redISub(N);
        var Bt = w.redMul(A);
        r + 1 < t && (v = v.redMul(N)), h = D, A = Bt, w = J;
    }
    return this.curve.jpoint(h, w.redMul(o), A);
}, Ft.prototype.dbl = function() {
    return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
}, Ft.prototype._zeroDbl = function() {
    var t, r, i;
    if (this.zOne) {
        var n = this.x.redSqr(), o = this.y.redSqr(), h = o.redSqr(), p = this.x.redAdd(o).redSqr().redISub(n).redISub(h);
        p = p.redIAdd(p);
        var A = n.redAdd(n).redIAdd(n), v = A.redSqr().redISub(p).redISub(p), w = h.redIAdd(h);
        w = w.redIAdd(w), w = w.redIAdd(w), t = v, r = A.redMul(p.redISub(v)).redISub(w), i = this.y.redAdd(this.y);
    } else {
        var y = this.x.redSqr(), S = this.y.redSqr(), N = S.redSqr(), I = this.x.redAdd(S).redSqr().redISub(y).redISub(N);
        I = I.redIAdd(I);
        var C = y.redAdd(y).redIAdd(y), D = C.redSqr(), U = N.redIAdd(N);
        U = U.redIAdd(U), U = U.redIAdd(U), t = D.redISub(I).redISub(I), r = C.redMul(I.redISub(t)).redISub(U), i = this.y.redMul(this.z), i = i.redIAdd(i);
    }
    return this.curve.jpoint(t, r, i);
}, Ft.prototype._threeDbl = function() {
    var t, r, i;
    if (this.zOne) {
        var n = this.x.redSqr(), o = this.y.redSqr(), h = o.redSqr(), p = this.x.redAdd(o).redSqr().redISub(n).redISub(h);
        p = p.redIAdd(p);
        var A = n.redAdd(n).redIAdd(n).redIAdd(this.curve.a), v = A.redSqr().redISub(p).redISub(p);
        t = v;
        var w = h.redIAdd(h);
        w = w.redIAdd(w), w = w.redIAdd(w), r = A.redMul(p.redISub(v)).redISub(w), i = this.y.redAdd(this.y);
    } else {
        var y = this.z.redSqr(), S = this.y.redSqr(), N = this.x.redMul(S), I = this.x.redSub(y).redMul(this.x.redAdd(y));
        I = I.redAdd(I).redIAdd(I);
        var C = N.redIAdd(N);
        C = C.redIAdd(C);
        var D = C.redAdd(C);
        t = I.redSqr().redISub(D), i = this.y.redAdd(this.z).redSqr().redISub(S).redISub(y);
        var U = S.redSqr();
        U = U.redIAdd(U), U = U.redIAdd(U), U = U.redIAdd(U), r = I.redMul(C.redISub(t)).redISub(U);
    }
    return this.curve.jpoint(t, r, i);
}, Ft.prototype._dbl = function() {
    var t = this.curve.a, r = this.x, i = this.y, n = this.z, o = n.redSqr().redSqr(), h = r.redSqr(), p = i.redSqr(), A = h.redAdd(h).redIAdd(h).redIAdd(t.redMul(o)), v = r.redAdd(r);
    v = v.redIAdd(v);
    var w = v.redMul(p), y = A.redSqr().redISub(w.redAdd(w)), S = w.redISub(y), N = p.redSqr();
    N = N.redIAdd(N), N = N.redIAdd(N), N = N.redIAdd(N);
    var I = A.redMul(S).redISub(N), C = i.redAdd(i).redMul(n);
    return this.curve.jpoint(y, I, C);
}, Ft.prototype.trpl = function() {
    if (!this.curve.zeroA) return this.dbl().add(this);
    var t = this.x.redSqr(), r = this.y.redSqr(), i = this.z.redSqr(), n = r.redSqr(), o = t.redAdd(t).redIAdd(t), h = o.redSqr(), p = this.x.redAdd(r).redSqr().redISub(t).redISub(n);
    p = p.redIAdd(p), p = p.redAdd(p).redIAdd(p), p = p.redISub(h);
    var A = p.redSqr(), v = n.redIAdd(n);
    v = v.redIAdd(v), v = v.redIAdd(v), v = v.redIAdd(v);
    var w = o.redIAdd(p).redSqr().redISub(h).redISub(A).redISub(v), y = r.redMul(w);
    y = y.redIAdd(y), y = y.redIAdd(y);
    var S = this.x.redMul(A).redISub(y);
    S = S.redIAdd(S), S = S.redIAdd(S);
    var N = this.y.redMul(w.redMul(v.redISub(w)).redISub(p.redMul(A)));
    N = N.redIAdd(N), N = N.redIAdd(N), N = N.redIAdd(N);
    var I = this.z.redAdd(p).redSqr().redISub(i).redISub(A);
    return this.curve.jpoint(S, N, I);
}, Ft.prototype.mul = function(t, r) {
    return t = new K(t, r), this.curve._wnafMul(this, t);
}, Ft.prototype.eq = function(t) {
    if (t.type === "affine") return this.eq(t.toJ());
    if (this === t) return !0;
    var r = this.z.redSqr(), i = t.z.redSqr();
    if (this.x.redMul(i).redISub(t.x.redMul(r)).cmpn(0) !== 0) return !1;
    var n = r.redMul(this.z), o = i.redMul(t.z);
    return this.y.redMul(o).redISub(t.y.redMul(n)).cmpn(0) === 0;
}, Ft.prototype.eqXToP = function(t) {
    var r = this.z.redSqr(), i = t.toRed(this.curve.red).redMul(r);
    if (this.x.cmp(i) === 0) return !0;
    for(var n = t.clone(), o = this.curve.redN.redMul(r);;){
        if (n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0) return !1;
        if (i.redIAdd(o), this.x.cmp(i) === 0) return !0;
    }
}, Ft.prototype.inspect = function() {
    return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">";
}, Ft.prototype.isInfinity = function() {
    return this.z.cmpn(0) === 0;
};
var zr = lr(function(e, t) {
    var r = t;
    r.base = $e, r.short = Va, r.mont = null, r.edwards = null;
}), jr = lr(function(e, t) {
    var r = t, i = Gt.assert;
    function n(p) {
        p.type === "short" ? this.curve = new zr.short(p) : p.type === "edwards" ? this.curve = new zr.edwards(p) : this.curve = new zr.mont(p), this.g = this.curve.g, this.n = this.curve.n, this.hash = p.hash, i(this.g.validate(), "Invalid curve"), i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
    }
    r.PresetCurve = n;
    function o(p, A) {
        Object.defineProperty(r, p, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var v = new n(A);
                return Object.defineProperty(r, p, {
                    configurable: !0,
                    enumerable: !0,
                    value: v
                }), v;
            }
        });
    }
    o("p192", {
        type: "short",
        prime: "p192",
        p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
        b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
        n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
        hash: se.sha256,
        gRed: !1,
        g: [
            "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
            "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"
        ]
    }), o("p224", {
        type: "short",
        prime: "p224",
        p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
        b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
        n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
        hash: se.sha256,
        gRed: !1,
        g: [
            "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
            "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"
        ]
    }), o("p256", {
        type: "short",
        prime: null,
        p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
        a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
        b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
        n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
        hash: se.sha256,
        gRed: !1,
        g: [
            "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
            "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"
        ]
    }), o("p384", {
        type: "short",
        prime: null,
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
        a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
        b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
        n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
        hash: se.sha384,
        gRed: !1,
        g: [
            "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
            "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"
        ]
    }), o("p521", {
        type: "short",
        prime: null,
        p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
        a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
        b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
        n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
        hash: se.sha512,
        gRed: !1,
        g: [
            "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
            "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"
        ]
    }), o("curve25519", {
        type: "mont",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "76d06",
        b: "1",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: se.sha256,
        gRed: !1,
        g: [
            "9"
        ]
    }), o("ed25519", {
        type: "edwards",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "-1",
        c: "1",
        d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: se.sha256,
        gRed: !1,
        g: [
            "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
            "6666666666666666666666666666666666666666666666666666666666666658"
        ]
    });
    var h;
    try {
        h = null.crash();
    } catch  {
        h = void 0;
    }
    o("secp256k1", {
        type: "short",
        prime: "k256",
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
        a: "0",
        b: "7",
        n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
        h: "1",
        hash: se.sha256,
        beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
        lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
        basis: [
            {
                a: "3086d221a7d46bcde86c90e49284eb15",
                b: "-e4437ed6010e88286f547fa90abfe4c3"
            },
            {
                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                b: "3086d221a7d46bcde86c90e49284eb15"
            }
        ],
        gRed: !1,
        g: [
            "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
            "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
            h
        ]
    });
});
function Re(e) {
    if (!(this instanceof Re)) return new Re(e);
    this.hash = e.hash, this.predResist = !!e.predResist, this.outLen = this.hash.outSize, this.minEntropy = e.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
    var t = fe.toArray(e.entropy, e.entropyEnc || "hex"), r = fe.toArray(e.nonce, e.nonceEnc || "hex"), i = fe.toArray(e.pers, e.persEnc || "hex");
    qi(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(t, r, i);
}
var qf = Re;
Re.prototype._init = function(t, r, i) {
    var n = t.concat(r).concat(i);
    this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
    for(var o = 0; o < this.V.length; o++)this.K[o] = 0, this.V[o] = 1;
    this._update(n), this._reseed = 1, this.reseedInterval = 281474976710656;
}, Re.prototype._hmac = function() {
    return new se.hmac(this.hash, this.K);
}, Re.prototype._update = function(t) {
    var r = this._hmac().update(this.V).update([
        0
    ]);
    t && (r = r.update(t)), this.K = r.digest(), this.V = this._hmac().update(this.V).digest(), t && (this.K = this._hmac().update(this.V).update([
        1
    ]).update(t).digest(), this.V = this._hmac().update(this.V).digest());
}, Re.prototype.reseed = function(t, r, i, n) {
    typeof r != "string" && (n = i, i = r, r = null), t = fe.toArray(t, r), i = fe.toArray(i, n), qi(t.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(t.concat(i || [])), this._reseed = 1;
}, Re.prototype.generate = function(t, r, i, n) {
    if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
    typeof r != "string" && (n = i, i = r, r = null), i && (i = fe.toArray(i, n || "hex"), this._update(i));
    for(var o = []; o.length < t;)this.V = this._hmac().update(this.V).digest(), o = o.concat(this.V);
    var h = o.slice(0, t);
    return this._update(i), this._reseed++, fe.encode(h, r);
};
var Hi = Gt.assert;
function kt(e, t) {
    this.ec = e, this.priv = null, this.pub = null, t.priv && this._importPrivate(t.priv, t.privEnc), t.pub && this._importPublic(t.pub, t.pubEnc);
}
var Li = kt;
kt.fromPublic = function(t, r, i) {
    return r instanceof kt ? r : new kt(t, {
        pub: r,
        pubEnc: i
    });
}, kt.fromPrivate = function(t, r, i) {
    return r instanceof kt ? r : new kt(t, {
        priv: r,
        privEnc: i
    });
}, kt.prototype.validate = function() {
    var t = this.getPublic();
    return t.isInfinity() ? {
        result: !1,
        reason: "Invalid public key"
    } : t.validate() ? t.mul(this.ec.curve.n).isInfinity() ? {
        result: !0,
        reason: null
    } : {
        result: !1,
        reason: "Public key * N != O"
    } : {
        result: !1,
        reason: "Public key is not a point"
    };
}, kt.prototype.getPublic = function(t, r) {
    return typeof t == "string" && (r = t, t = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), r ? this.pub.encode(r, t) : this.pub;
}, kt.prototype.getPrivate = function(t) {
    return t === "hex" ? this.priv.toString(16, 2) : this.priv;
}, kt.prototype._importPrivate = function(t, r) {
    this.priv = new K(t, r || 16), this.priv = this.priv.umod(this.ec.curve.n);
}, kt.prototype._importPublic = function(t, r) {
    if (t.x || t.y) {
        this.ec.curve.type === "mont" ? Hi(t.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && Hi(t.x && t.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(t.x, t.y);
        return;
    }
    this.pub = this.ec.curve.decodePoint(t, r);
}, kt.prototype.derive = function(t) {
    return t.validate() || Hi(t.validate(), "public point not validated"), t.mul(this.priv).getX();
}, kt.prototype.sign = function(t, r, i) {
    return this.ec.sign(t, this, r, i);
}, kt.prototype.verify = function(t, r) {
    return this.ec.verify(t, r, this);
}, kt.prototype.inspect = function() {
    return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >";
};
var Wa = Gt.assert;
function Qr(e, t) {
    if (e instanceof Qr) return e;
    this._importDER(e, t) || (Wa(e.r && e.s, "Signature without r or s"), this.r = new K(e.r, 16), this.s = new K(e.s, 16), e.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = e.recoveryParam);
}
var Jr = Qr;
function Xa() {
    this.place = 0;
}
function zi(e, t) {
    var r = e[t.place++];
    if (!(r & 128)) return r;
    var i = r & 15;
    if (i === 0 || i > 4) return !1;
    for(var n = 0, o = 0, h = t.place; o < i; o++, h++)n <<= 8, n |= e[h], n >>>= 0;
    return n <= 127 ? !1 : (t.place = h, n);
}
function Kf(e) {
    for(var t = 0, r = e.length - 1; !e[t] && !(e[t + 1] & 128) && t < r;)t++;
    return t === 0 ? e : e.slice(t);
}
Qr.prototype._importDER = function(t, r) {
    t = Gt.toArray(t, r);
    var i = new Xa;
    if (t[i.place++] !== 48) return !1;
    var n = zi(t, i);
    if (n === !1 || n + i.place !== t.length || t[i.place++] !== 2) return !1;
    var o = zi(t, i);
    if (o === !1) return !1;
    var h = t.slice(i.place, o + i.place);
    if (i.place += o, t[i.place++] !== 2) return !1;
    var p = zi(t, i);
    if (p === !1 || t.length !== p + i.place) return !1;
    var A = t.slice(i.place, p + i.place);
    if (h[0] === 0) if (h[1] & 128) h = h.slice(1);
    else return !1;
    if (A[0] === 0) if (A[1] & 128) A = A.slice(1);
    else return !1;
    return this.r = new K(h), this.s = new K(A), this.recoveryParam = null, !0;
};
function ji(e, t) {
    if (t < 128) {
        e.push(t);
        return;
    }
    var r = 1 + (Math.log(t) / Math.LN2 >>> 3);
    for(e.push(r | 128); --r;)e.push(t >>> (r << 3) & 255);
    e.push(t);
}
Qr.prototype.toDER = function(t) {
    var r = this.r.toArray(), i = this.s.toArray();
    for(r[0] & 128 && (r = [
        0
    ].concat(r)), i[0] & 128 && (i = [
        0
    ].concat(i)), r = Kf(r), i = Kf(i); !i[0] && !(i[1] & 128);)i = i.slice(1);
    var n = [
        2
    ];
    ji(n, r.length), n = n.concat(r), n.push(2), ji(n, i.length);
    var o = n.concat(i), h = [
        48
    ];
    return ji(h, o.length), h = h.concat(o), Gt.encode(h, t);
};
var $a = function() {
    throw new Error("unsupported");
}, Hf = Gt.assert;
function ee(e) {
    if (!(this instanceof ee)) return new ee(e);
    typeof e == "string" && (Hf(Object.prototype.hasOwnProperty.call(jr, e), "Unknown curve " + e), e = jr[e]), e instanceof jr.PresetCurve && (e = {
        curve: e
    }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash;
}
var Za = ee;
ee.prototype.keyPair = function(t) {
    return new Li(this, t);
}, ee.prototype.keyFromPrivate = function(t, r) {
    return Li.fromPrivate(this, t, r);
}, ee.prototype.keyFromPublic = function(t, r) {
    return Li.fromPublic(this, t, r);
}, ee.prototype.genKeyPair = function(t) {
    t || (t = {});
    for(var r = new qf({
        hash: this.hash,
        pers: t.pers,
        persEnc: t.persEnc || "utf8",
        entropy: t.entropy || $a(this.hash.hmacStrength),
        entropyEnc: t.entropy && t.entropyEnc || "utf8",
        nonce: this.n.toArray()
    }), i = this.n.byteLength(), n = this.n.sub(new K(2));;){
        var o = new K(r.generate(i));
        if (!(o.cmp(n) > 0)) return o.iaddn(1), this.keyFromPrivate(o);
    }
}, ee.prototype._truncateToN = function(t, r) {
    var i = t.byteLength() * 8 - this.n.bitLength();
    return i > 0 && (t = t.ushrn(i)), !r && t.cmp(this.n) >= 0 ? t.sub(this.n) : t;
}, ee.prototype.sign = function(t, r, i, n) {
    typeof i == "object" && (n = i, i = null), n || (n = {}), r = this.keyFromPrivate(r, i), t = this._truncateToN(new K(t, 16));
    for(var o = this.n.byteLength(), h = r.getPrivate().toArray("be", o), p = t.toArray("be", o), A = new qf({
        hash: this.hash,
        entropy: h,
        nonce: p,
        pers: n.pers,
        persEnc: n.persEnc || "utf8"
    }), v = this.n.sub(new K(1)), w = 0;; w++){
        var y = n.k ? n.k(w) : new K(A.generate(this.n.byteLength()));
        if (y = this._truncateToN(y, !0), !(y.cmpn(1) <= 0 || y.cmp(v) >= 0)) {
            var S = this.g.mul(y);
            if (!S.isInfinity()) {
                var N = S.getX(), I = N.umod(this.n);
                if (I.cmpn(0) !== 0) {
                    var C = y.invm(this.n).mul(I.mul(r.getPrivate()).iadd(t));
                    if (C = C.umod(this.n), C.cmpn(0) !== 0) {
                        var D = (S.getY().isOdd() ? 1 : 0) | (N.cmp(I) !== 0 ? 2 : 0);
                        return n.canonical && C.cmp(this.nh) > 0 && (C = this.n.sub(C), D ^= 1), new Jr({
                            r: I,
                            s: C,
                            recoveryParam: D
                        });
                    }
                }
            }
        }
    }
}, ee.prototype.verify = function(t, r, i, n) {
    t = this._truncateToN(new K(t, 16)), i = this.keyFromPublic(i, n), r = new Jr(r, "hex");
    var o = r.r, h = r.s;
    if (o.cmpn(1) < 0 || o.cmp(this.n) >= 0 || h.cmpn(1) < 0 || h.cmp(this.n) >= 0) return !1;
    var p = h.invm(this.n), A = p.mul(t).umod(this.n), v = p.mul(o).umod(this.n), w;
    return this.curve._maxwellTrick ? (w = this.g.jmulAdd(A, i.getPublic(), v), w.isInfinity() ? !1 : w.eqXToP(o)) : (w = this.g.mulAdd(A, i.getPublic(), v), w.isInfinity() ? !1 : w.getX().umod(this.n).cmp(o) === 0);
}, ee.prototype.recoverPubKey = function(e, t, r, i) {
    Hf((3 & r) === r, "The recovery param is more than two bits"), t = new Jr(t, i);
    var n = this.n, o = new K(e), h = t.r, p = t.s, A = r & 1, v = r >> 1;
    if (h.cmp(this.curve.p.umod(this.curve.n)) >= 0 && v) throw new Error("Unable to find sencond key candinate");
    v ? h = this.curve.pointFromX(h.add(this.curve.n), A) : h = this.curve.pointFromX(h, A);
    var w = t.r.invm(n), y = n.sub(o).mul(w).umod(n), S = p.mul(w).umod(n);
    return this.g.mulAdd(y, h, S);
}, ee.prototype.getKeyRecoveryParam = function(e, t, r, i) {
    if (t = new Jr(t, i), t.recoveryParam !== null) return t.recoveryParam;
    for(var n = 0; n < 4; n++){
        var o;
        try {
            o = this.recoverPubKey(e, t, n);
        } catch  {
            continue;
        }
        if (o.eq(r)) return n;
    }
    throw new Error("Unable to find valid recovery factor");
};
var tu = lr(function(e, t) {
    var r = t;
    r.version = "6.5.4", r.utils = Gt, r.rand = function() {
        throw new Error("unsupported");
    }, r.curve = zr, r.curves = jr, r.ec = Za, r.eddsa = null;
}), eu = tu.ec;
const ru = "signing-key/5.7.0", Qi = new z(ru);
let Ji = null;
function ve() {
    return Ji || (Ji = new eu("secp256k1")), Ji;
}
class iu {
    constructor(t){
        wr(this, "curve", "secp256k1"), wr(this, "privateKey", Kt(t)), Us(this.privateKey) !== 32 && Qi.throwArgumentError("invalid private key", "privateKey", "[[ REDACTED ]]");
        const r = ve().keyFromPrivate(Ot(this.privateKey));
        wr(this, "publicKey", "0x" + r.getPublic(!1, "hex")), wr(this, "compressedPublicKey", "0x" + r.getPublic(!0, "hex")), wr(this, "_isSigningKey", !0);
    }
    _addPoint(t) {
        const r = ve().keyFromPublic(Ot(this.publicKey)), i = ve().keyFromPublic(Ot(t));
        return "0x" + r.pub.add(i.pub).encodeCompressed("hex");
    }
    signDigest(t) {
        const r = ve().keyFromPrivate(Ot(this.privateKey)), i = Ot(t);
        i.length !== 32 && Qi.throwArgumentError("bad digest length", "digest", t);
        const n = r.sign(i, {
            canonical: !0
        });
        return Wn({
            recoveryParam: n.recoveryParam,
            r: oe("0x" + n.r.toString(16), 32),
            s: oe("0x" + n.s.toString(16), 32)
        });
    }
    computeSharedSecret(t) {
        const r = ve().keyFromPrivate(Ot(this.privateKey)), i = ve().keyFromPublic(Ot(Lf(t)));
        return oe("0x" + r.derive(i.getPublic()).toString(16), 32);
    }
    static isSigningKey(t) {
        return !!(t && t._isSigningKey);
    }
}
function nu(e, t) {
    const r = Wn(t), i = {
        r: Ot(r.r),
        s: Ot(r.s)
    };
    return "0x" + ve().recoverPubKey(Ot(e), i, r.recoveryParam).encode("hex", !1);
}
function Lf(e, t) {
    const r = Ot(e);
    if (r.length === 32) {
        const i = new iu(r);
        return t ? "0x" + ve().keyFromPrivate(r).getPublic(!0, "hex") : i.publicKey;
    } else {
        if (r.length === 33) return t ? Kt(r) : "0x" + ve().keyFromPublic(r).getPublic(!1, "hex");
        if (r.length === 65) return t ? "0x" + ve().keyFromPublic(r).getPublic(!0, "hex") : Kt(r);
    }
    return Qi.throwArgumentError("invalid public or private key", "key", "[REDACTED]");
}
const fu = "transactions/5.7.0";
new z(fu);
var zf;
(function(e) {
    e[e.legacy = 0] = "legacy", e[e.eip2930 = 1] = "eip2930", e[e.eip1559 = 2] = "eip1559";
})(zf || (zf = {}));
function ou(e) {
    const t = Lf(e);
    return v0(Vn(Ii(Vn(t, 1)), 12));
}
function su(e, t) {
    return ou(nu(Ot(e), t));
}
const au = "https://rpc.walletconnect.org/v1";
async function jf(e, t, r, i, n, o) {
    switch(r.t){
        case "eip191":
            return Qf(e, t, r.s);
        case "eip1271":
            return await Jf(e, t, r.s, i, n, o);
        default:
            throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${r.t}`);
    }
}
function Qf(e, t, r) {
    return su(df(t), r).toLowerCase() === e.toLowerCase();
}
async function Jf(e, t, r, i, n, o) {
    try {
        const h = "0x1626ba7e", p = "0000000000000000000000000000000000000000000000000000000000000040", A = "0000000000000000000000000000000000000000000000000000000000000041", v = r.substring(2), w = df(t).substring(2), y = h + w + p + A + v, S = await fetch(`${o || au}/?chainId=${i}&projectId=${n}`, {
            method: "POST",
            body: JSON.stringify({
                id: uu(),
                jsonrpc: "2.0",
                method: "eth_call",
                params: [
                    {
                        to: e,
                        data: y
                    },
                    "latest"
                ]
            })
        }), { result: N } = await S.json();
        return N ? N.slice(0, h.length).toLowerCase() === h.toLowerCase() : !1;
    } catch (h) {
        return console.error("isValidEip1271Signature: ", h), !1;
    }
}
function uu() {
    return Date.now() + Math.floor(Math.random() * 1e3);
}
var hu = Object.defineProperty, cu = Object.defineProperties, lu = Object.getOwnPropertyDescriptors, Gf = Object.getOwnPropertySymbols, du = Object.prototype.hasOwnProperty, pu = Object.prototype.propertyIsEnumerable, Yf = (e, t, r)=>t in e ? hu(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r, Gi = (e, t)=>{
    for(var r in t || (t = {}))du.call(t, r) && Yf(e, r, t[r]);
    if (Gf) for (var r of Gf(t))pu.call(t, r) && Yf(e, r, t[r]);
    return e;
}, Vf = (e, t)=>cu(e, lu(t));
const vu = "did:pkh:", Gr = (e)=>e?.split(":"), Yi = (e)=>{
    const t = e && Gr(e);
    if (t) return e.includes(vu) ? t[3] : t[1];
}, gu = (e)=>{
    const t = e && Gr(e);
    if (t) return t[2] + ":" + t[3];
}, Vi = (e)=>{
    const t = e && Gr(e);
    if (t) return t.pop();
};
async function mu(e) {
    const { cacao: t, projectId: r } = e, { s: i, p: n } = t, o = Wf(n, n.iss), h = Vi(n.iss);
    return await jf(h, o, i, Yi(n.iss), r);
}
const Wf = (e, t)=>{
    const r = `${e.domain} wants you to sign in with your Ethereum account:`, i = Vi(t);
    if (!e.aud && !e.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
    let n = e.statement || void 0;
    const o = `URI: ${e.aud || e.uri}`, h = `Version: ${e.version}`, p = `Chain ID: ${Yi(t)}`, A = `Nonce: ${e.nonce}`, v = `Issued At: ${e.iat}`, w = e.exp ? `Expiration Time: ${e.exp}` : void 0, y = e.nbf ? `Not Before: ${e.nbf}` : void 0, S = e.requestId ? `Request ID: ${e.requestId}` : void 0, N = e.resources ? `Resources:${e.resources.map((C)=>`
- ${C}`).join("")}` : void 0, I = Vr(e.resources);
    if (I) {
        const C = Oe(I);
        n = $i(n, C);
    }
    return [
        r,
        i,
        "",
        n,
        "",
        o,
        h,
        p,
        A,
        v,
        w,
        y,
        S,
        N
    ].filter((C)=>C != null).join(`
`);
};
function Au(e, t, r) {
    return r.includes("did:pkh:") || (r = `did:pkh:${r}`), {
        h: {
            t: "caip122"
        },
        p: {
            iss: r,
            domain: e.domain,
            aud: e.aud,
            version: e.version,
            nonce: e.nonce,
            iat: e.iat,
            statement: e.statement,
            requestId: e.requestId,
            resources: e.resources,
            nbf: e.nbf,
            exp: e.exp
        },
        s: t
    };
}
function bu(e) {
    var t;
    const { authPayload: r, chains: i, methods: n } = e, o = r.statement || "";
    if (!(i != null && i.length)) return r;
    const h = r.chains, p = wi(h, i);
    if (!(p != null && p.length)) throw new Error("No supported chains");
    const A = Xf(r.resources);
    if (!A) return r;
    ge(A);
    const v = $f(A, "eip155");
    let w = r?.resources || [];
    if (v != null && v.length) {
        const y = Zf(v), S = wi(y, n);
        if (!(S != null && S.length)) throw new Error(`Supported methods don't satisfy the requested: ${JSON.stringify(y)}, supported: ${JSON.stringify(n)}`);
        const N = Wi("request", S, {
            chains: p
        }), I = io(A, "eip155", N);
        w = ((t = r?.resources) == null ? void 0 : t.slice(0, -1)) || [], w.push(Yr(I));
    }
    return Vf(Gi({}, r), {
        statement: fo(o, Vr(w)),
        chains: p,
        resources: r != null && r.resources || w.length > 0 ? w : void 0
    });
}
function Xf(e) {
    const t = Vr(e);
    if (t && Xi(t)) return Oe(t);
}
function yu(e, t) {
    var r;
    return (r = e?.att) == null ? void 0 : r.hasOwnProperty(t);
}
function $f(e, t) {
    var r, i;
    return (r = e?.att) != null && r[t] ? Object.keys((i = e?.att) == null ? void 0 : i[t]) : [];
}
function wu(e) {
    return e?.map((t)=>Object.keys(t)) || [];
}
function Zf(e) {
    return e?.map((t)=>{
        var r;
        return (r = t.split("/")) == null ? void 0 : r[1];
    }) || [];
}
function to(e) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(JSON.stringify(e)).toString("base64");
}
function eo(e) {
    return JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(e, "base64").toString("utf-8"));
}
function ge(e) {
    if (!e) throw new Error("No recap provided, value is undefined");
    if (!e.att) throw new Error("No `att` property found");
    const t = Object.keys(e.att);
    if (!(t != null && t.length)) throw new Error("No resources found in `att` property");
    t.forEach((r)=>{
        const i = e.att[r];
        if (Array.isArray(i)) throw new Error(`Resource must be an object: ${r}`);
        if (typeof i != "object") throw new Error(`Resource must be an object: ${r}`);
        if (!Object.keys(i).length) throw new Error(`Resource object is empty: ${r}`);
        Object.keys(i).forEach((n)=>{
            const o = i[n];
            if (!Array.isArray(o)) throw new Error(`Ability limits ${n} must be an array of objects, found: ${o}`);
            if (!o.length) throw new Error(`Value of ${n} is empty array, must be an array with objects`);
            o.forEach((h)=>{
                if (typeof h != "object") throw new Error(`Ability limits (${n}) must be an array of objects, found: ${h}`);
            });
        });
    });
}
function ro(e, t, r, i = {}) {
    return r?.sort((n, o)=>n.localeCompare(o)), {
        att: {
            [e]: Wi(t, r, i)
        }
    };
}
function io(e, t, r) {
    var i;
    return e.att[t] = Gi({}, r), ((i = Object.keys(e.att)) == null ? void 0 : i.sort((n, o)=>n.localeCompare(o))).reduce((n, o)=>(n.att[o] = e.att[o], n), {
        att: {}
    });
}
function Wi(e, t, r = {}) {
    t = t?.sort((n, o)=>n.localeCompare(o));
    const i = t.map((n)=>({
            [`${e}/${n}`]: [
                r
            ]
        }));
    return Object.assign({}, ...i);
}
function Yr(e) {
    return ge(e), `urn:recap:${to(e).replace(/=/g, "")}`;
}
function Oe(e) {
    const t = eo(e.replace("urn:recap:", ""));
    return ge(t), t;
}
function xu(e, t, r) {
    const i = ro(e, t, r);
    return Yr(i);
}
function Xi(e) {
    return e && e.includes("urn:recap:");
}
function Mu(e, t) {
    const r = Oe(e), i = Oe(t), n = no(r, i);
    return Yr(n);
}
function no(e, t) {
    ge(e), ge(t);
    const r = Object.keys(e.att).concat(Object.keys(t.att)).sort((n, o)=>n.localeCompare(o)), i = {
        att: {}
    };
    return r.forEach((n)=>{
        var o, h;
        Object.keys(((o = e.att) == null ? void 0 : o[n]) || {}).concat(Object.keys(((h = t.att) == null ? void 0 : h[n]) || {})).sort((p, A)=>p.localeCompare(A)).forEach((p)=>{
            var A, v;
            i.att[n] = Vf(Gi({}, i.att[n]), {
                [p]: ((A = e.att[n]) == null ? void 0 : A[p]) || ((v = t.att[n]) == null ? void 0 : v[p])
            });
        });
    }), i;
}
function $i(e = "", t) {
    ge(t);
    const r = "I further authorize the stated URI to perform the following actions on my behalf: ";
    if (e.includes(r)) return e;
    const i = [];
    let n = 0;
    Object.keys(t.att).forEach((p)=>{
        const A = Object.keys(t.att[p]).map((y)=>({
                ability: y.split("/")[0],
                action: y.split("/")[1]
            }));
        A.sort((y, S)=>y.action.localeCompare(S.action));
        const v = {};
        A.forEach((y)=>{
            v[y.ability] || (v[y.ability] = []), v[y.ability].push(y.action);
        });
        const w = Object.keys(v).map((y)=>(n++, `(${n}) '${y}': '${v[y].join("', '")}' for '${p}'.`));
        i.push(w.join(", ").replace(".,", "."));
    });
    const o = i.join(" "), h = `${r}${o}`;
    return `${e ? e + " " : ""}${h}`;
}
function Eu(e) {
    var t;
    const r = Oe(e);
    ge(r);
    const i = (t = r.att) == null ? void 0 : t.eip155;
    return i ? Object.keys(i).map((n)=>n.split("/")[1]) : [];
}
function Su(e) {
    const t = Oe(e);
    ge(t);
    const r = [];
    return Object.values(t.att).forEach((i)=>{
        Object.values(i).forEach((n)=>{
            var o;
            (o = n?.[0]) != null && o.chains && r.push(n[0].chains);
        });
    }), [
        ...new Set(r.flat())
    ];
}
function fo(e, t) {
    if (!t) return e;
    const r = Oe(t);
    return ge(r), $i(e, r);
}
function Vr(e) {
    if (!e) return;
    const t = e?.[e.length - 1];
    return Xi(t) ? t : void 0;
}
const Zi = "base10", Lt = "base16", tn = "base64pad", Iu = "base64url", dr = "utf8", en = 0, pr = 1, Sr = 2, Nu = 0, oo = 1, Ir = 12, rn = 32;
function _u() {
    const e = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stablelib$2b$x25519$40$1$2e$0$2e$3$2f$node_modules$2f40$stablelib$2f$x25519$2f$lib$2f$x25519$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.generateKeyPair();
    return {
        privateKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])(e.secretKey, Lt),
        publicKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])(e.publicKey, Lt)
    };
}
function Bu() {
    const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stablelib$2b$random$40$1$2e$0$2e$2$2f$node_modules$2f40$stablelib$2f$random$2f$lib$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBytes"])(rn);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])(e, Lt);
}
function Cu(e, t) {
    const r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stablelib$2b$x25519$40$1$2e$0$2e$3$2f$node_modules$2f40$stablelib$2f$x25519$2f$lib$2f$x25519$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.sharedKey((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"])(e, Lt), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"])(t, Lt), !0), i = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stablelib$2b$hkdf$40$1$2e$0$2e$1$2f$node_modules$2f40$stablelib$2f$hkdf$2f$lib$2f$hkdf$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HKDF"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stablelib$2b$sha256$40$1$2e$0$2e$1$2f$node_modules$2f40$stablelib$2f$sha256$2f$lib$2f$sha256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA256"], r).expand(rn);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])(i, Lt);
}
function Ru(e) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stablelib$2b$sha256$40$1$2e$0$2e$1$2f$node_modules$2f40$stablelib$2f$sha256$2f$lib$2f$sha256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hash"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"])(e, Lt));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])(t, Lt);
}
function Ou(e) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stablelib$2b$sha256$40$1$2e$0$2e$1$2f$node_modules$2f40$stablelib$2f$sha256$2f$lib$2f$sha256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hash"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"])(e, dr));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])(t, Lt);
}
function nn(e) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"])(`${e}`, Zi);
}
function Ze(e) {
    return Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])(e, Zi));
}
function Pu(e) {
    const t = nn(typeof e.type < "u" ? e.type : en);
    if (Ze(t) === pr && typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    const r = typeof e.senderPublicKey < "u" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"])(e.senderPublicKey, Lt) : void 0, i = typeof e.iv < "u" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"])(e.iv, Lt) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stablelib$2b$random$40$1$2e$0$2e$2$2f$node_modules$2f40$stablelib$2f$random$2f$lib$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBytes"])(Ir), n = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stablelib$2b$chacha20poly1305$40$1$2e$0$2e$1$2f$node_modules$2f40$stablelib$2f$chacha20poly1305$2f$lib$2f$chacha20poly1305$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChaCha20Poly1305"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"])(e.symKey, Lt)).seal(i, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"])(e.message, dr));
    return fn({
        type: t,
        sealed: n,
        iv: i,
        senderPublicKey: r,
        encoding: e.encoding
    });
}
function Tu(e, t) {
    const r = nn(Sr), i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stablelib$2b$random$40$1$2e$0$2e$2$2f$node_modules$2f40$stablelib$2f$random$2f$lib$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBytes"])(Ir), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"])(e, dr);
    return fn({
        type: r,
        sealed: n,
        iv: i,
        encoding: t
    });
}
function Du(e) {
    const t = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stablelib$2b$chacha20poly1305$40$1$2e$0$2e$1$2f$node_modules$2f40$stablelib$2f$chacha20poly1305$2f$lib$2f$chacha20poly1305$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChaCha20Poly1305"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"])(e.symKey, Lt)), { sealed: r, iv: i } = Wr({
        encoded: e.encoded,
        encoding: e?.encoding
    }), n = t.open(i, r);
    if (n === null) throw new Error("Failed to decrypt");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])(n, dr);
}
function Fu(e, t) {
    const { sealed: r } = Wr({
        encoded: e,
        encoding: t
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])(r, dr);
}
function fn(e) {
    const { encoding: t = tn } = e;
    if (Ze(e.type) === Sr) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
        e.type,
        e.sealed
    ]), t);
    if (Ze(e.type) === pr) {
        if (typeof e.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
            e.type,
            e.senderPublicKey,
            e.iv,
            e.sealed
        ]), t);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
        e.type,
        e.iv,
        e.sealed
    ]), t);
}
function Wr(e) {
    const { encoded: t, encoding: r = tn } = e, i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"])(t, r), n = i.slice(Nu, oo), o = oo;
    if (Ze(n) === pr) {
        const v = o + rn, w = v + Ir, y = i.slice(o, v), S = i.slice(v, w), N = i.slice(w);
        return {
            type: n,
            sealed: N,
            iv: S,
            senderPublicKey: y
        };
    }
    if (Ze(n) === Sr) {
        const v = i.slice(o), w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stablelib$2b$random$40$1$2e$0$2e$2$2f$node_modules$2f40$stablelib$2f$random$2f$lib$2f$random$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomBytes"])(Ir);
        return {
            type: n,
            sealed: v,
            iv: w
        };
    }
    const h = o + Ir, p = i.slice(o, h), A = i.slice(h);
    return {
        type: n,
        sealed: A,
        iv: p
    };
}
function Uu(e, t) {
    const r = Wr({
        encoded: e,
        encoding: t?.encoding
    });
    return so({
        type: Ze(r.type),
        senderPublicKey: typeof r.senderPublicKey < "u" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uint8arrays$40$3$2e$1$2e$0$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toString"])(r.senderPublicKey, Lt) : void 0,
        receiverPublicKey: t?.receiverPublicKey
    });
}
function so(e) {
    const t = e?.type || en;
    if (t === pr) {
        if (typeof e?.senderPublicKey > "u") throw new Error("missing sender public key");
        if (typeof e?.receiverPublicKey > "u") throw new Error("missing receiver public key");
    }
    return {
        type: t,
        senderPublicKey: e?.senderPublicKey,
        receiverPublicKey: e?.receiverPublicKey
    };
}
function ku(e) {
    return e.type === pr && typeof e.senderPublicKey == "string" && typeof e.receiverPublicKey == "string";
}
function qu(e) {
    return e.type === Sr;
}
function ao(e) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$elliptic$40$6$2e$6$2e$1$2f$node_modules$2f$elliptic$2f$lib$2f$elliptic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ec"]("p256").keyFromPublic({
        x: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(e.x, "base64").toString("hex"),
        y: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(e.y, "base64").toString("hex")
    }, "hex");
}
function Ku(e) {
    let t = e.replace(/-/g, "+").replace(/_/g, "/");
    const r = t.length % 4;
    return r > 0 && (t += "=".repeat(4 - r)), t;
}
function Hu(e) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(Ku(e), "base64");
}
function Lu(e, t) {
    const [r, i, n] = e.split("."), o = Hu(n);
    if (o.length !== 64) throw new Error("Invalid signature length");
    const h = o.slice(0, 32).toString("hex"), p = o.slice(32, 64).toString("hex"), A = `${r}.${i}`, v = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$stablelib$2b$sha256$40$1$2e$0$2e$1$2f$node_modules$2f40$stablelib$2f$sha256$2f$lib$2f$sha256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHA256"]().update(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(A)).digest(), w = ao(t), y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$6_$40$babel$2b$core$40$7$2e$26$2e$0_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(v).toString("hex");
    if (!w.verify(y, {
        r: h,
        s: p
    })) throw new Error("Invalid signature");
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$relay$2d$auth$40$1$2e$0$2e$4$2f$node_modules$2f40$walletconnect$2f$relay$2d$auth$2f$dist$2f$esm$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeJWT"])(e).payload;
}
const uo = "irn";
function zu(e) {
    return e?.relay || {
        protocol: uo
    };
}
function ju(e) {
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$walletconnect$2b$relay$2d$api$40$1$2e$0$2e$11$2f$node_modules$2f40$walletconnect$2f$relay$2d$api$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RELAY_JSONRPC"][e];
    if (typeof t > "u") throw new Error(`Relay Protocol not supported: ${e}`);
    return t;
}
var Qu = Object.defineProperty, Ju = Object.defineProperties, Gu = Object.getOwnPropertyDescriptors, ho = Object.getOwnPropertySymbols, Yu = Object.prototype.hasOwnProperty, Vu = Object.prototype.propertyIsEnumerable, co = (e, t, r)=>t in e ? Qu(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r, lo = (e, t)=>{
    for(var r in t || (t = {}))Yu.call(t, r) && co(e, r, t[r]);
    if (ho) for (var r of ho(t))Vu.call(t, r) && co(e, r, t[r]);
    return e;
}, Wu = (e, t)=>Ju(e, Gu(t));
function po(e, t = "-") {
    const r = {}, i = "relay" + t;
    return Object.keys(e).forEach((n)=>{
        if (n.startsWith(i)) {
            const o = n.replace(i, ""), h = e[n];
            r[o] = h;
        }
    }), r;
}
function Xu(e) {
    if (!e.includes("wc:")) {
        const A = xi(e);
        A != null && A.includes("wc:") && (e = A);
    }
    e = e.includes("wc://") ? e.replace("wc://", "") : e, e = e.includes("wc:") ? e.replace("wc:", "") : e;
    const t = e.indexOf(":"), r = e.indexOf("?") !== -1 ? e.indexOf("?") : void 0, i = e.substring(0, t), n = e.substring(t + 1, r).split("@"), o = typeof r < "u" ? e.substring(r) : "", h = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$query$2d$string$40$7$2e$1$2e$3$2f$node_modules$2f$query$2d$string$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.parse(o), p = typeof h.methods == "string" ? h.methods.split(",") : void 0;
    return {
        protocol: i,
        topic: vo(n[0]),
        version: parseInt(n[1], 10),
        symKey: h.symKey,
        relay: po(h),
        methods: p,
        expiryTimestamp: h.expiryTimestamp ? parseInt(h.expiryTimestamp, 10) : void 0
    };
}
function vo(e) {
    return e.startsWith("//") ? e.substring(2) : e;
}
function go(e, t = "-") {
    const r = "relay", i = {};
    return Object.keys(e).forEach((n)=>{
        const o = r + t + n;
        e[n] && (i[o] = e[n]);
    }), i;
}
function $u(e) {
    return `${e.protocol}:${e.topic}@${e.version}?` + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$query$2d$string$40$7$2e$1$2e$3$2f$node_modules$2f$query$2d$string$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.stringify(lo(Wu(lo({
        symKey: e.symKey
    }, go(e.relay)), {
        expiryTimestamp: e.expiryTimestamp
    }), e.methods ? {
        methods: e.methods.join(",")
    } : {}));
}
function Zu(e, t, r) {
    return `${e}?wc_ev=${r}&topic=${t}`;
}
var th = Object.defineProperty, eh = Object.defineProperties, rh = Object.getOwnPropertyDescriptors, mo = Object.getOwnPropertySymbols, ih = Object.prototype.hasOwnProperty, nh = Object.prototype.propertyIsEnumerable, Ao = (e, t, r)=>t in e ? th(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[t] = r, fh = (e, t)=>{
    for(var r in t || (t = {}))ih.call(t, r) && Ao(e, r, t[r]);
    if (mo) for (var r of mo(t))nh.call(t, r) && Ao(e, r, t[r]);
    return e;
}, oh = (e, t)=>eh(e, rh(t));
function tr(e) {
    const t = [];
    return e.forEach((r)=>{
        const [i, n] = r.split(":");
        t.push(`${i}:${n}`);
    }), t;
}
function bo(e) {
    const t = [];
    return Object.values(e).forEach((r)=>{
        t.push(...tr(r.accounts));
    }), t;
}
function yo(e, t) {
    const r = [];
    return Object.values(e).forEach((i)=>{
        tr(i.accounts).includes(t) && r.push(...i.methods);
    }), r;
}
function wo(e, t) {
    const r = [];
    return Object.values(e).forEach((i)=>{
        tr(i.accounts).includes(t) && r.push(...i.events);
    }), r;
}
function sh(e, t) {
    const r = Oo(e, t);
    if (r) throw new Error(r.message);
    const i = {};
    for (const [n, o] of Object.entries(e))i[n] = {
        methods: o.methods,
        events: o.events,
        chains: o.accounts.map((h)=>`${h.split(":")[0]}:${h.split(":")[1]}`)
    };
    return i;
}
function ah(e) {
    const { proposal: { requiredNamespaces: t, optionalNamespaces: r = {} }, supportedNamespaces: i } = e, n = sn(t), o = sn(r), h = {};
    Object.keys(i).forEach((v)=>{
        const w = i[v].chains, y = i[v].methods, S = i[v].events, N = i[v].accounts;
        w.forEach((I)=>{
            if (!N.some((C)=>C.includes(I))) throw new Error(`No accounts provided for chain ${I} in namespace ${v}`);
        }), h[v] = {
            chains: w,
            methods: y,
            events: S,
            accounts: N
        };
    });
    const p = To(t, h, "approve()");
    if (p) throw new Error(p.message);
    const A = {};
    return !Object.keys(t).length && !Object.keys(r).length ? h : (Object.keys(n).forEach((v)=>{
        const w = i[v].chains.filter((I)=>{
            var C, D;
            return (D = (C = n[v]) == null ? void 0 : C.chains) == null ? void 0 : D.includes(I);
        }), y = i[v].methods.filter((I)=>{
            var C, D;
            return (D = (C = n[v]) == null ? void 0 : C.methods) == null ? void 0 : D.includes(I);
        }), S = i[v].events.filter((I)=>{
            var C, D;
            return (D = (C = n[v]) == null ? void 0 : C.events) == null ? void 0 : D.includes(I);
        }), N = w.map((I)=>i[v].accounts.filter((C)=>C.includes(`${I}:`))).flat();
        A[v] = {
            chains: w,
            methods: y,
            events: S,
            accounts: N
        };
    }), Object.keys(o).forEach((v)=>{
        var w, y, S, N, I, C;
        if (!i[v]) return;
        const D = (y = (w = o[v]) == null ? void 0 : w.chains) == null ? void 0 : y.filter((G)=>i[v].chains.includes(G)), U = i[v].methods.filter((G)=>{
            var H, L;
            return (L = (H = o[v]) == null ? void 0 : H.methods) == null ? void 0 : L.includes(G);
        }), J = i[v].events.filter((G)=>{
            var H, L;
            return (L = (H = o[v]) == null ? void 0 : H.events) == null ? void 0 : L.includes(G);
        }), Bt = D?.map((G)=>i[v].accounts.filter((H)=>H.includes(`${G}:`))).flat();
        A[v] = {
            chains: me((S = A[v]) == null ? void 0 : S.chains, D),
            methods: me((N = A[v]) == null ? void 0 : N.methods, U),
            events: me((I = A[v]) == null ? void 0 : I.events, J),
            accounts: me((C = A[v]) == null ? void 0 : C.accounts, Bt)
        };
    }), A);
}
function on(e) {
    return e.includes(":");
}
function xo(e) {
    return on(e) ? e.split(":")[0] : e;
}
function sn(e) {
    var t, r, i;
    const n = {};
    if (!Xr(e)) return n;
    for (const [o, h] of Object.entries(e)){
        const p = on(o) ? [
            o
        ] : h.chains, A = h.methods || [], v = h.events || [], w = xo(o);
        n[w] = oh(fh({}, n[w]), {
            chains: me(p, (t = n[w]) == null ? void 0 : t.chains),
            methods: me(A, (r = n[w]) == null ? void 0 : r.methods),
            events: me(v, (i = n[w]) == null ? void 0 : i.events)
        });
    }
    return n;
}
function Mo(e) {
    const t = {};
    return e?.forEach((r)=>{
        const [i, n] = r.split(":");
        t[i] || (t[i] = {
            accounts: [],
            chains: [],
            events: []
        }), t[i].accounts.push(r), t[i].chains.push(`${i}:${n}`);
    }), t;
}
function uh(e, t) {
    t = t.map((i)=>i.replace("did:pkh:", ""));
    const r = Mo(t);
    for (const [i, n] of Object.entries(r))n.methods ? n.methods = me(n.methods, e) : n.methods = e, n.events = [
        "chainChanged",
        "accountsChanged"
    ];
    return r;
}
const Eo = {
    INVALID_METHOD: {
        message: "Invalid method.",
        code: 1001
    },
    INVALID_EVENT: {
        message: "Invalid event.",
        code: 1002
    },
    INVALID_UPDATE_REQUEST: {
        message: "Invalid update request.",
        code: 1003
    },
    INVALID_EXTEND_REQUEST: {
        message: "Invalid extend request.",
        code: 1004
    },
    INVALID_SESSION_SETTLE_REQUEST: {
        message: "Invalid session settle request.",
        code: 1005
    },
    UNAUTHORIZED_METHOD: {
        message: "Unauthorized method.",
        code: 3001
    },
    UNAUTHORIZED_EVENT: {
        message: "Unauthorized event.",
        code: 3002
    },
    UNAUTHORIZED_UPDATE_REQUEST: {
        message: "Unauthorized update request.",
        code: 3003
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
        message: "Unauthorized extend request.",
        code: 3004
    },
    USER_REJECTED: {
        message: "User rejected.",
        code: 5e3
    },
    USER_REJECTED_CHAINS: {
        message: "User rejected chains.",
        code: 5001
    },
    USER_REJECTED_METHODS: {
        message: "User rejected methods.",
        code: 5002
    },
    USER_REJECTED_EVENTS: {
        message: "User rejected events.",
        code: 5003
    },
    UNSUPPORTED_CHAINS: {
        message: "Unsupported chains.",
        code: 5100
    },
    UNSUPPORTED_METHODS: {
        message: "Unsupported methods.",
        code: 5101
    },
    UNSUPPORTED_EVENTS: {
        message: "Unsupported events.",
        code: 5102
    },
    UNSUPPORTED_ACCOUNTS: {
        message: "Unsupported accounts.",
        code: 5103
    },
    UNSUPPORTED_NAMESPACE_KEY: {
        message: "Unsupported namespace key.",
        code: 5104
    },
    USER_DISCONNECTED: {
        message: "User disconnected.",
        code: 6e3
    },
    SESSION_SETTLEMENT_FAILED: {
        message: "Session settlement failed.",
        code: 7e3
    },
    WC_METHOD_UNSUPPORTED: {
        message: "Unsupported wc_ method.",
        code: 10001
    }
}, So = {
    NOT_INITIALIZED: {
        message: "Not initialized.",
        code: 1
    },
    NO_MATCHING_KEY: {
        message: "No matching key.",
        code: 2
    },
    RESTORE_WILL_OVERRIDE: {
        message: "Restore will override.",
        code: 3
    },
    RESUBSCRIBED: {
        message: "Resubscribed.",
        code: 4
    },
    MISSING_OR_INVALID: {
        message: "Missing or invalid.",
        code: 5
    },
    EXPIRED: {
        message: "Expired.",
        code: 6
    },
    UNKNOWN_TYPE: {
        message: "Unknown type.",
        code: 7
    },
    MISMATCHED_TOPIC: {
        message: "Mismatched topic.",
        code: 8
    },
    NON_CONFORMING_NAMESPACES: {
        message: "Non conforming namespaces.",
        code: 9
    }
};
function xe(e, t) {
    const { message: r, code: i } = So[e];
    return {
        message: t ? `${r} ${t}` : r,
        code: i
    };
}
function er(e, t) {
    const { message: r, code: i } = Eo[e];
    return {
        message: t ? `${r} ${t}` : r,
        code: i
    };
}
function Nr(e, t) {
    return Array.isArray(e) ? typeof t < "u" && e.length ? e.every(t) : !0 : !1;
}
function Xr(e) {
    return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length;
}
function Pe(e) {
    return typeof e > "u";
}
function Yt(e, t) {
    return t && Pe(e) ? !0 : typeof e == "string" && !!e.trim().length;
}
function $r(e, t) {
    return t && Pe(e) ? !0 : typeof e == "number" && !isNaN(e);
}
function hh(e, t) {
    const { requiredNamespaces: r } = t, i = Object.keys(e.namespaces), n = Object.keys(r);
    let o = !0;
    return _e(n, i) ? (i.forEach((h)=>{
        const { accounts: p, methods: A, events: v } = e.namespaces[h], w = tr(p), y = r[h];
        (!_e(Or(h, y), w) || !_e(y.methods, A) || !_e(y.events, v)) && (o = !1);
    }), o) : !1;
}
function _r(e) {
    return Yt(e, !1) && e.includes(":") ? e.split(":").length === 2 : !1;
}
function Io(e) {
    if (Yt(e, !1) && e.includes(":")) {
        const t = e.split(":");
        if (t.length === 3) {
            const r = t[0] + ":" + t[1];
            return !!t[2] && _r(r);
        }
    }
    return !1;
}
function ch(e) {
    function t(r) {
        try {
            return typeof new URL(r) < "u";
        } catch  {
            return !1;
        }
    }
    try {
        if (Yt(e, !1)) {
            if (t(e)) return !0;
            const r = xi(e);
            return t(r);
        }
    } catch  {}
    return !1;
}
function lh(e) {
    var t;
    return (t = e?.proposer) == null ? void 0 : t.publicKey;
}
function dh(e) {
    return e?.topic;
}
function ph(e, t) {
    let r = null;
    return Yt(e?.publicKey, !1) || (r = xe("MISSING_OR_INVALID", `${t} controller public key should be a string`)), r;
}
function an(e) {
    let t = !0;
    return Nr(e) ? e.length && (t = e.every((r)=>Yt(r, !1))) : t = !1, t;
}
function No(e, t, r) {
    let i = null;
    return Nr(t) && t.length ? t.forEach((n)=>{
        i || _r(n) || (i = er("UNSUPPORTED_CHAINS", `${r}, chain ${n} should be a string and conform to "namespace:chainId" format`));
    }) : _r(e) || (i = er("UNSUPPORTED_CHAINS", `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), i;
}
function _o(e, t, r) {
    let i = null;
    return Object.entries(e).forEach(([n, o])=>{
        if (i) return;
        const h = No(n, Or(n, o), `${t} ${r}`);
        h && (i = h);
    }), i;
}
function Bo(e, t) {
    let r = null;
    return Nr(e) ? e.forEach((i)=>{
        r || Io(i) || (r = er("UNSUPPORTED_ACCOUNTS", `${t}, account ${i} should be a string and conform to "namespace:chainId:address" format`));
    }) : r = er("UNSUPPORTED_ACCOUNTS", `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), r;
}
function Co(e, t) {
    let r = null;
    return Object.values(e).forEach((i)=>{
        if (r) return;
        const n = Bo(i?.accounts, `${t} namespace`);
        n && (r = n);
    }), r;
}
function Ro(e, t) {
    let r = null;
    return an(e?.methods) ? an(e?.events) || (r = er("UNSUPPORTED_EVENTS", `${t}, events should be an array of strings or empty array for no events`)) : r = er("UNSUPPORTED_METHODS", `${t}, methods should be an array of strings or empty array for no methods`), r;
}
function un(e, t) {
    let r = null;
    return Object.values(e).forEach((i)=>{
        if (r) return;
        const n = Ro(i, `${t}, namespace`);
        n && (r = n);
    }), r;
}
function vh(e, t, r) {
    let i = null;
    if (e && Xr(e)) {
        const n = un(e, t);
        n && (i = n);
        const o = _o(e, t, r);
        o && (i = o);
    } else i = xe("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
    return i;
}
function Oo(e, t) {
    let r = null;
    if (e && Xr(e)) {
        const i = un(e, t);
        i && (r = i);
        const n = Co(e, t);
        n && (r = n);
    } else r = xe("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
    return r;
}
function Po(e) {
    return Yt(e.protocol, !0);
}
function gh(e, t) {
    let r = !1;
    return t && !e ? r = !0 : e && Nr(e) && e.length && e.forEach((i)=>{
        r = Po(i);
    }), r;
}
function mh(e) {
    return typeof e == "number";
}
function Ah(e) {
    return typeof e < "u" && typeof e !== null;
}
function bh(e) {
    return !(!e || typeof e != "object" || !e.code || !$r(e.code, !1) || !e.message || !Yt(e.message, !1));
}
function yh(e) {
    return !(Pe(e) || !Yt(e.method, !1));
}
function wh(e) {
    return !(Pe(e) || Pe(e.result) && Pe(e.error) || !$r(e.id, !1) || !Yt(e.jsonrpc, !1));
}
function xh(e) {
    return !(Pe(e) || !Yt(e.name, !1));
}
function Mh(e, t) {
    return !(!_r(t) || !bo(e).includes(t));
}
function Eh(e, t, r) {
    return Yt(r, !1) ? yo(e, t).includes(r) : !1;
}
function Sh(e, t, r) {
    return Yt(r, !1) ? wo(e, t).includes(r) : !1;
}
function To(e, t, r) {
    let i = null;
    const n = Ih(e), o = Nh(t), h = Object.keys(n), p = Object.keys(o), A = Do(Object.keys(e)), v = Do(Object.keys(t)), w = A.filter((y)=>!v.includes(y));
    return w.length && (i = xe("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${w.toString()}
      Received: ${Object.keys(t).toString()}`)), _e(h, p) || (i = xe("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${h.toString()}
      Approved: ${p.toString()}`)), Object.keys(t).forEach((y)=>{
        if (!y.includes(":") || i) return;
        const S = tr(t[y].accounts);
        S.includes(y) || (i = xe("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${y}
        Required: ${y}
        Approved: ${S.toString()}`));
    }), h.forEach((y)=>{
        i || (_e(n[y].methods, o[y].methods) ? _e(n[y].events, o[y].events) || (i = xe("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${y}`)) : i = xe("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${y}`));
    }), i;
}
function Ih(e) {
    const t = {};
    return Object.keys(e).forEach((r)=>{
        var i;
        r.includes(":") ? t[r] = e[r] : (i = e[r].chains) == null || i.forEach((n)=>{
            t[n] = {
                methods: e[r].methods,
                events: e[r].events
            };
        });
    }), t;
}
function Do(e) {
    return [
        ...new Set(e.map((t)=>t.includes(":") ? t.split(":")[0] : t))
    ];
}
function Nh(e) {
    const t = {};
    return Object.keys(e).forEach((r)=>{
        if (r.includes(":")) t[r] = e[r];
        else {
            const i = tr(e[r].accounts);
            i?.forEach((n)=>{
                t[n] = {
                    accounts: e[r].accounts.filter((o)=>o.includes(`${n}:`)),
                    methods: e[r].methods,
                    events: e[r].events
                };
            });
        }
    }), t;
}
function _h(e, t) {
    return $r(e, !1) && e <= t.max && e >= t.min;
}
function Bh() {
    const e = We();
    return new Promise((t)=>{
        switch(e){
            case qt.browser:
                t(Fo());
                break;
            case qt.reactNative:
                t(Uo());
                break;
            case qt.node:
                t(ko());
                break;
            default:
                t(!0);
        }
    });
}
function Fo() {
    return gr() && navigator?.onLine;
}
async function Uo() {
    if (rr() && typeof global < "u" && global != null && global.NetInfo) {
        const e = await (global == null ? void 0 : global.NetInfo.fetch());
        return e?.isConnected;
    }
    return !0;
}
function ko() {
    return !0;
}
function Ch(e) {
    switch(We()){
        case qt.browser:
            qo(e);
            break;
        case qt.reactNative:
            Ko(e);
            break;
        case qt.node:
            break;
    }
}
function qo(e) {
    !rr() && gr() && (window.addEventListener("online", ()=>e(!0)), window.addEventListener("offline", ()=>e(!1)));
}
function Ko(e) {
    rr() && typeof global < "u" && global != null && global.NetInfo && global?.NetInfo.addEventListener((t)=>e(t?.isConnected));
}
const hn = {};
class Rh {
    static get(t) {
        return hn[t];
    }
    static set(t, r) {
        hn[t] = r;
    }
    static delete(t) {
        delete hn[t];
    }
}
;
 //# sourceMappingURL=index.es.js.map
}}),
}]);

//# sourceMappingURL=4a25f_%40walletconnect_utils_dist_index_es_9a54a0.js.map