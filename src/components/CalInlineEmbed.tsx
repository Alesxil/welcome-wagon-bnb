import { useEffect, useRef } from "react";

const CAL_SRC = "https://app.cal.com/embed/embed.js";
const CAL_ORIGIN = "https://app.cal.com";
const NAMESPACE = "airnbnb-pitch";
const CAL_LINK = "alexandre-silva-8tsynl/airnbnb-pitch";

/* eslint-disable @typescript-eslint/no-explicit-any */
export function CalInlineEmbed({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const w = window as any;
    const d = w.document;

    // Bootstrap the Cal queue exactly like the official embed snippet.
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || ([] as any[]);
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || ([] as any[]);
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else {
              p(cal, ar);
            }
            return;
          }
          p(cal, ar);
        };
    })(w, CAL_SRC, "init");

    const Cal = w.Cal;
    Cal("init", NAMESPACE, { origin: CAL_ORIGIN });

    Cal.config = Cal.config || {};
    Cal.config.forwardQueryParams = true;

    Cal.ns[NAMESPACE]("inline", {
      elementOrSelector: container,
      config: {
        layout: "month_view",
        useSlotsViewOnSmallScreen: "true",
        theme: "light",
      },
      calLink: CAL_LINK,
    });

    Cal.ns[NAMESPACE]("ui", {
      theme: "light",
      hideEventTypeDetails: false,
      layout: "month_view",
    });

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
    />
  );
}
