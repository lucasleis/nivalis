import { useEffect } from "react";

interface CalendlyWidgetProps {
  url: string;
  className?: string;
}

export default function CalendlyWidget({ url, className = "" }: CalendlyWidgetProps) {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className={`calendly-inline-widget rounded-2xl overflow-hidden ${className}`}
      data-url={url}
      style={{ minWidth: "320px", height: "660px" }}
    />
  );
}
