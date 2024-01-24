import React, { useState } from "react"
import { useEffect } from "react"

type GoogleAnalyticsProps = {
  measurementId: string
}

const GoogleTagManager = ({ measurementId }: GoogleAnalyticsProps) => {

  const [isNoscriptInserted, setIsNoscriptInserted] = useState(false);

  useEffect(() => {
    if (isNoscriptInserted) {
      document.body.insertAdjacentHTML(
        "afterbegin",
        `
        <noscript>
        <iframe
        src={'https://www.googletagmanager.com/ns.html?id=${measurementId}'}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        ></iframe>
        </noscript>
        `
      );
    }
    setIsNoscriptInserted(true);
  }, [isNoscriptInserted, measurementId]);

  return (
    <>
      <script dangerouslySetInnerHTML={{
        __html: `
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer', '${measurementId}');`
      }} />
    </>
  )
}

export default React.memo(GoogleTagManager)