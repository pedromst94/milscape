import { Children } from "react"

const BeachMap = (props) => (
  <svg
    className="map-svg"
    xmlns="http://www.w3.org/2000/svg"
    width={360}
    height={1800}
    viewBox="0 0 95.25 476.25"
    {...props}
  >
    
    <defs>
      <filter
        id="a"
        width={1}
        height={1}
        x={0}
        y={0}
        style={{
          colorInterpolationFilters: "sRGB",
        }}
      >
        <feTurbulence
          baseFrequency="10 8.24122"
          numOctaves={4}
          result="turbulence"
          seed={271}
          type="fractalNoise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="turbulence"
          result="fbSourceGraphic"
          scale={48.476}
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feColorMatrix
          in="fbSourceGraphic"
          result="fbSourceGraphicAlpha"
          values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
        />
        <feTurbulence
          baseFrequency="10 8.24122"
          numOctaves={4}
          result="turbulence"
          seed={271}
          type="fractalNoise"
        />
        <feDisplacementMap
          in="fbSourceGraphic"
          in2="turbulence"
          result="fbSourceGraphic"
          scale={48.476}
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feColorMatrix
          in="fbSourceGraphic"
          result="fbSourceGraphicAlpha"
          values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
        />
        <feTurbulence
          baseFrequency="2.73688 2.76945"
          numOctaves={2}
          result="turbulence"
          seed={271}
          type="fractalNoise"
        />
        <feDisplacementMap
          in="fbSourceGraphic"
          in2="turbulence"
          result="fbSourceGraphic"
          scale={19.512}
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feColorMatrix
          in="fbSourceGraphic"
          result="fbSourceGraphicAlpha"
          values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
        />
        <feTurbulence
          baseFrequency="10 9.41374"
          numOctaves={3}
          result="turbulence"
          seed={284}
          type="fractalNoise"
        />
        <feDisplacementMap
          in="fbSourceGraphic"
          in2="turbulence"
          scale={5.03}
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
      <filter
        id="b"
        width={1.038}
        height={1.004}
        x={-0.019}
        y={-0.002}
        style={{
          colorInterpolationFilters: "sRGB",
        }}
      >
        <feGaussianBlur stdDeviation={0.378} />
      </filter>
      <filter
        id="c"
        width={1.011}
        height={1.06}
        x={-0.006}
        y={-0.03}
        style={{
          colorInterpolationFilters: "sRGB",
        }}
      >
        <feGaussianBlur stdDeviation={0.156} />
      </filter>
    </defs>
    <path
      d="M0 0h95.25v285.75H0z"
      style={{
        display: "inline",
        fill: "#bdae24",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 0.0529167,
        strokeLinejoin: "round",
        strokeDashoffset: 7,
        filter: "url(#a)",
      }}
      transform="scale(1 1.66667)"
    />
    <path
      d="M31.75 47.16s4.262-.726 6.58-.726c2.317 0 5.756.726 5.756.726s-1.72 1.49-5.831 1.49c-4.113 0-6.505-1.49-6.505-1.49zM55.23 58.572s4.261-.725 6.579-.725c2.318 0 5.757.725 5.757.725s-1.72 1.49-5.832 1.49-6.504-1.49-6.504-1.49zM12.667 66.71s4.262-.725 6.58-.725c2.317 0 5.756.725 5.756.725s-1.72 1.491-5.832 1.491-6.504-1.49-6.504-1.49zM47.185 84.297s4.261-.726 6.58-.726c2.317 0 5.756.726 5.756.726s-1.72 1.49-5.832 1.49-6.504-1.49-6.504-1.49zM63.18 105.718s4.262-.725 6.58-.725c2.318 0 5.757.725 5.757.725s-1.72 1.491-5.832 1.491-6.504-1.49-6.504-1.49zM14.631 98.422s4.262-.725 6.58-.725c2.317 0 5.757.725 5.757.725s-1.72 1.49-5.832 1.49-6.505-1.49-6.505-1.49zM37.082 124.988s4.262-.725 6.58-.725c2.317 0 5.756.725 5.756.725s-1.72 1.491-5.831 1.491c-4.112 0-6.505-1.49-6.505-1.49zM48.869 141.92s4.261-.725 6.579-.725c2.318 0 5.757.725 5.757.725s-1.72 1.49-5.832 1.49-6.504-1.49-6.504-1.49zM14.818 155.671s4.262-.725 6.58-.725c2.317 0 5.757.725 5.757.725s-1.72 1.49-5.832 1.49-6.505-1.49-6.505-1.49zM40.637 190.75s4.261-.725 6.579-.725c2.318 0 5.757.725 5.757.725s-1.72 1.49-5.832 1.49-6.504-1.49-6.504-1.49zM15.473 209.178s4.262-.725 6.58-.725c2.317 0 5.756.725 5.756.725s-1.72 1.491-5.831 1.491c-4.112 0-6.505-1.49-6.505-1.49zM37.456 222.93s4.262-.726 6.58-.726c2.317 0 5.756.725 5.756.725s-1.72 1.491-5.831 1.491c-4.112 0-6.505-1.49-6.505-1.49zM60.187 217.223s4.262-.725 6.58-.725c2.317 0 5.757.725 5.757.725s-1.72 1.49-5.832 1.49-6.505-1.49-6.505-1.49zM19.87 246.128s4.261-.725 6.58-.725c2.317 0 5.756.725 5.756.725s-1.72 1.491-5.832 1.491-6.504-1.49-6.504-1.49zM46.436 259.412s4.262-.726 6.58-.726c2.317 0 5.757.726 5.757.726s-1.72 1.49-5.832 1.49-6.505-1.49-6.505-1.49zM13.509 284.762s4.261-.725 6.58-.725c2.317 0 5.756.725 5.756.725s-1.72 1.49-5.832 1.49-6.504-1.49-6.504-1.49zM43.162 295.613s4.262-.725 6.58-.725c2.317 0 5.757.725 5.757.725s-1.72 1.491-5.832 1.491-6.505-1.49-6.505-1.49zM21.834 325.548s4.262-.726 6.58-.726c2.317 0 5.756.726 5.756.726s-1.72 1.49-5.831 1.49c-4.112 0-6.505-1.49-6.505-1.49zM58.784 344.724s4.262-.725 6.58-.725c2.317 0 5.757.725 5.757.725s-1.72 1.49-5.832 1.49-6.505-1.49-6.505-1.49zM19.87 366.8s4.261-.725 6.58-.725c2.317 0 5.756.726 5.756.726s-1.72 1.49-5.832 1.49-6.504-1.49-6.504-1.49zM58.223 383.826s4.262-.726 6.58-.726c2.317 0 5.756.726 5.756.726s-1.72 1.49-5.831 1.49c-4.112 0-6.505-1.49-6.505-1.49zM19.402 412.637s4.262-.725 6.58-.725c2.317 0 5.756.725 5.756.725s-1.72 1.491-5.831 1.491c-4.112 0-6.505-1.49-6.505-1.49zM46.624 424.892s4.261-.726 6.579-.726c2.318 0 5.757.726 5.757.726s-1.72 1.49-5.832 1.49-6.504-1.49-6.504-1.49zM49.062 21.903s4.261-.726 6.579-.726c2.318 0 5.757.726 5.757.726s-1.72 1.49-5.832 1.49-6.504-1.49-6.504-1.49zM12.667 30.135s4.262-.726 6.58-.726c2.317 0 5.756.726 5.756.726s-1.72 1.49-5.832 1.49-6.504-1.49-6.504-1.49z"
      style={{
        fill: "#e3d973",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 0.0414866,
        strokeLinejoin: "round",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="M67.461 173.758s3.085 2.02 2.448 2.76c-.637.738-1.944.788-1.944.788"
      style={{
        fill: "#7ec60b",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.446927,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
      transform="translate(44.438 198.542) scale(.67125)"
    />
    <path
      d="M62.862 189.05s-.766-12.827-.662-14.256c.105-1.428 1.202-5.156 2.544-5.226 1.342-.07 2.961 4.32 2.996 5.4.035 1.08-.405 13.814-.405 13.814"
      style={{
        fill: "#1d9d21",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.446927,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
      transform="translate(44.438 198.542) scale(.67125)"
    />
    <path
      d="M64.501 188.672s-.17-10.38-.146-11.535c.023-1.156.265-4.172.562-4.228.296-.057.654 3.495.662 4.369.007.874-.09 11.176-.09 11.176"
      style={{
        fill: "#7ec60b",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.188963,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
      transform="translate(44.438 198.542) scale(.67125)"
    />
    <path
      d="M61.385 189.623c1.63-.597 2.91-1.415 4.977-1.035 1.79.33 4.37.99 4.336.986"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.446926,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
      transform="translate(44.438 198.542) scale(.67125)"
    />
    <g transform="translate(39.327 191.108) scale(.67125)">
      <path
        d="m73.306 203.349.347 1.842h.612l.104-1.8M67.434 203.302l-.825 3.073.645.232 1.016-2.998"
        style={{
          fill: "#f46060",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.3,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={71.008}
        cy={200.918}
        rx={5.655}
        ry={3.076}
        style={{
          fill: "#f46060",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.3,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M63.24 198.315c-.323-.667-.502-1.361-.144-2.153.844.313 1.324.748 1.608 1.248"
        style={{
          fill: "#f46060",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.2,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M65.401 196.792s-.8-.788-.998-.554c-.197.234-.37.997-.086 1.195.283.197 1.035-.222 1.035-.222"
        style={{
          fill: "#0300ff",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.148975,
          strokeLinejoin: "round",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="M67.243 197.553c.387-.543.911-.898 1.547-1.098.276.77.118 1.46-.259 2.106"
        style={{
          fill: "#f46060",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.2,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={65.782}
        cy={200.29}
        rx={3.34}
        ry={3.043}
        style={{
          fill: "#f46060",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.3,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="m69.272 203.482.148 3.275h.662l.05-3.275M74.563 202.704l.628 2.679.711-.033-.264-3.357"
        style={{
          fill: "#f46060",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.3,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="m69.42 206.757-.033.59.315-.222.351.198.029-.566zM66.609 206.375l-.263.574.398-.093.228.31.282-.56zM73.653 205.191s-.507.08-.694.267c-.187.188-.146.433-.146.433l1.455-.076-.003-.624zM75.349 205.413s-.508.08-.695.268c-.187.187-.146.432-.146.432l1.456-.076-.003-.624z"
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.3,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M75.418 198.993s-.436-.704.324-.704c.761 0 1.01.645.629.578-.38-.066-.623-.89-.257-.992.514-.142.932.12.852.232"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.3,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={65.547}
        cy={200.918}
        rx={1.364}
        ry={1.254}
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.3,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={64.891}
        cy={200.986}
        rx={0.205}
        ry={0.246}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.3,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={66.183}
        cy={200.986}
        rx={0.164}
        ry={0.234}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.3,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <circle
        cx={63.867}
        cy={199.027}
        r={0.105}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.3,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={67.436}
        cy={199.027}
        rx={0.099}
        ry={0.1}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.3,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M64.873 202.757c.199.2.713.2.713.2.319.02.448-.185.62-.34"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M66.153 196.854s.8-.789.998-.555c.197.234.37.998.086 1.195-.283.197-1.034-.222-1.034-.222M65.401 196.792s-.8-.788-.998-.554c-.197.234-.37.997-.086 1.195.283.197 1.035-.222 1.035-.222"
        style={{
          fill: "#0300ff",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.148975,
          strokeLinejoin: "round",
          strokeDashoffset: 7,
        }}
      />
      <circle
        cx={65.771}
        cy={197.057}
        r={0.557}
        style={{
          fill: "#0300ff",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.148975,
          strokeLinejoin: "round",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="m63.658 198.868-.16-.315"
        style={{
          fill: "#0300ff",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.02979508,
          strokeLinejoin: "round",
          strokeDashoffset: 7,
          strokeDasharray: "none",
        }}
      />
      <path
        d="m63.794 198.781-.031-.29M64.034 198.806l.104-.271M67.255 198.843l-.154-.271M67.47 198.8l-.024-.265M67.618 198.874l.197-.21"
        style={{
          fill: "#0300ff",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.0297951,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
    </g>
    <path
      d="M79.375 0s-1.398 4.575 2.137 10.225c3.536 5.65 9.365 4.3 9.939 7.262.573 2.963-.192 5.806-.287 10.034-.096 4.23 3.536 8.887 1.242 13.856-2.293 4.97-3.535 4.85-5.35 6.248-1.817 1.397-7.681 2.449-7.681 7.513 0 5.065 3.762 4.3 2.52 11.658-1.243 7.359-2.52 5.447-2.52 10.512s1.278 14.357 4.24 16.15c2.962 1.792 7.74-.62 8.314 1.792.573 2.412 1.91 4.706 1.242 8.624-.669 3.918-1.816 5.828-1.72 10.798.095 4.969 2.102 3.63 1.338 9.747-.765 6.116-1.147 4.587-1.338 10.32-.191 5.734-2.007 4.04-5.638 8.136-3.631 4.096-22.313-.969-22.313 4.765s6.772 9.652 3.965 15.767c-2.806 6.116-3.899 10.8-3.965 15.577-.113 8.182 13.429 8.43 14.716 8.84 4.547 1.452 14.153 7.456 13.816 9.078-.338 1.622 2.703 4.621.946 9.473s.675 9.042 0 11.407c-.676 2.365.487 12.343-.676 15.811-1.52 4.532-1.651 16.186-1.651 20.407 0 1.67.798 5.644.907 8.488.128 3.348-1.658 7.941-.298 10.049 1.91 2.962 2.389 5.325 1.815 9.27-.573 3.943-1.433 8.466-1.05 14.142.382 5.676.86 11.18.668 13.665-.191 2.484-1.051 13.378-.478 17.105.573 3.727 1.147 10.607.86 14.047-.286 3.44.287 14.63-.669 19.495-.955 4.864-2.197 11.56-1.815 16.15.382 4.589 2.634 17.619 2.006 22.838-.468 3.9-8.086 3.696-13.222 13.501-3.636 6.941 6.342 11.9 5.291 15.875-1.051 3.974-5.541 4.747-5.291 8.37.521 7.557-11.116 9.857-31.75 8.268v30.987H95.25V0Z"
      style={{
        mixBlendMode: "normal",
        fill: "#0b11ff",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 0.0529167,
        strokeLinejoin: "round",
        strokeDashoffset: 7,
        strokeOpacity: 1,
        filter: "url(#b)",
      }}
    />
    <path
      d="M92.144 260.358c-1.15.754-.49 2.225-.49 2.225s-.981-.037-1.434.396c-.453.434-.453.736-.453.736s-.716.245-.848.377-.16.255-.16.255.15.019.245-.019c.094-.037.273-.132.273-.132s-.113.104-.123.236c-.009.132.057.32.057.32s.066 0 .15-.179c.086-.179.199-.292.199-.292s-.028.207-.028.32c0 .114.103.236.103.236s.227-.415.217-.452c-.01-.038.217-.132.311-.227.095-.094.236-.518.5-.697.264-.18.68-.205 1.054-.085.373.12.813-.067.867-.227.053-.16.173-1.053.12-1.187"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0806508,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M96.559 265.149s-3.054-.066-4.726-1.595c-1.672-1.529-1.25-4.789-.526-5.089.693-.286 1.458-.645 2.7-.788 1.235-.142 2.552-.289 2.552-.289z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0529167,
        strokeLinejoin: "round",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m89.691 258.58-.134-1.076.398.064.099 1.018z"
      style={{
        fill: "#1d1d1c",
        stroke: "#000",
        strokeWidth: 0.02,
        strokeLinejoin: "round",
        strokeDashoffset: 7,
        fillOpacity: 1,
      }}
    />
    <path
      d="M89.955 257.568c1.35-.146 1.325.394 1.8.685l-1.596.853-.11-.52z"
      style={{
        fill: "#040402",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.02,
        strokeLinejoin: "round",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="M92.645 259.636c.765 1.911.144 3.154-1.099 3.44-1.242.287-2.532-.19-3.392-.334-.86-.144-3.25.048-3.584-.43-.334-.478-.071-1.147-.071-1.147s-.645-.717-.31-1.266c.334-.55 1.146.024 1.146.024s.406-.454.717-.335c.31.12.645.406.645.406s.55-.62.788-.668c.239-.048.406-.407.693-.526.287-.12.215-1.003.74-.908.526.096.693.812.693.812s.072-.143.263-.143.215.12.215.12.024-.765.621-.813c.597-.048.597 1.051.597 1.051"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0529167,
        strokeLinejoin: "round",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M84.499 261.165s.15-.273.573-.172c.422.101.338.355.76.338.422-.017.625-.237.963-.22.338.017.625.203.93.119.303-.085.523-.186.76-.203.236-.017.59.304 1.08.287.49-.017.794-.118.845-.321.05-.203.084-.355.084-.355M90.157 260.52c.354.169.608-.017.608-.017"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0529167,
        strokeLinejoin: "round",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <ellipse
      cx={84.607}
      cy={259.996}
      rx={0.059}
      ry={0.068}
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0529167,
        strokeLinejoin: "round",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <ellipse
      cx={86.018}
      cy={260.055}
      rx={0.051}
      ry={0.042}
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0529167,
        strokeLinejoin: "round",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M86.697 259.994s.077.057.123.125M87.15 259.66c.287.06.49.322.49.322M87.843 259.278c.24.095.395.394.395.394M89.611 258.704s.042.102.036.18M90.089 258.68s-.042.106-.024.206"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0529167,
        strokeLinejoin: "round",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M90.562 258.35c-.169.1-.177.557-.177.557s.093.076.338.008c.244-.068.363-.22.363-.22s-.203-.456-.524-.346z"
      style={{
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0529167,
        strokeLinejoin: "round",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M89.363 258.789s-.135-.465-.414-.533c-.279-.067-.38.372-.38.372s.033.16.32.177c.288.017.474-.016.474-.016z"
      style={{
        fill: "#f7f7f7",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0529167,
        strokeLinejoin: "round",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <ellipse
      cx={88.957}
      cy={258.552}
      rx={0.198}
      ry={0.203}
      style={{
        fill: "#000",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0529167,
        strokeLinejoin: "round",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <ellipse
      cx={90.68}
      cy={258.658}
      rx={0.199}
      ry={0.182}
      style={{
        fill: "#000",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0600894,
        strokeLinejoin: "round",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M84.502 261.179c.062.132.156.135.156.135s.005-.186-.038-.225c-.044-.038-.118.09-.118.09z"
      style={{
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0170826,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M85.277 261.086c-.021.076.006.29.006.29s.152-.068.18-.144c.027-.076-.186-.146-.186-.146zM85.86 261.353c.051.173.15.206.15.206s.104-.179.045-.242c-.06-.062-.194.036-.194.036zM86.831 261.087c.042-.179.173-.227.173-.227s.173.227.12.293c-.054.066-.293-.066-.293-.066zM88.058 261.15c.038.118.071.11.08.147l.025.106s.148-.296.106-.334c-.042-.038-.211.08-.211.08zM89.557 261.284c0-.198.101-.295.101-.295s.195.156.157.266c-.038.11-.258.03-.258.03zM89.983 261.26c-.02-.115.026-.161.026-.161s.093.071.118.13c.025.06-.144.03-.144.03z"
      style={{
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.01,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M94.474 261.545c-1.15.755-.49 2.226-.49 2.226s-.981-.038-1.434.396c-.453.434-.453.736-.453.736s-.716.245-.848.377-.16.255-.16.255.15.018.245-.02c.094-.037.273-.131.273-.131s-.113.103-.122.236c-.01.132.056.32.056.32s.066 0 .151-.179c.085-.18.198-.292.198-.292s-.028.207-.028.32c0 .114.103.236.103.236s.227-.415.217-.453c-.009-.037.217-.132.312-.226.094-.094.235-.519.5-.698.263-.179.68-.204 1.053-.084.373.12.813-.067.867-.227.053-.16.173-1.054.12-1.187"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0806508,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m92.194 258.147.316-.854.456.655.269-.772.42.632.223-.702.374.55.246-.679.444.573.269-.654.374.596.316-.655.362.608"
      style={{
        fill: "#060",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0499999,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M92.228 258.375c-.037.016-.069.052-.095.116l.137.335c.127.046.208.008.25-.102l-.135-.33c-.057-.028-.11-.04-.157-.02zm.022.05c.019-.01.043-.006.074.01l.123.302c-.02.028-.036.05-.11.045l-.124-.305c.008-.026.02-.043.037-.051z"
      style={{
        fill: "#be9800",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0192455,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m92.054 258.16.16.325c.087.027.091-.016.105-.052l-.158-.32c-.061-.032-.094-.012-.107.048z"
      style={{
        fill: "#be9800",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0259575,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M92.516 259.01c-.036.017-.067.054-.09.119l.147.33c.128.042.208.001.246-.11l-.145-.325c-.058-.026-.112-.037-.158-.015zm.024.05c.018-.01.043-.008.074.007l.133.297c-.019.028-.034.051-.108.048l-.134-.3c.007-.026.019-.044.035-.053z"
      style={{
        fill: "#be9800",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0192455,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m92.35 258.773.139.333c.085.033.092-.01.107-.045l-.137-.33c-.06-.035-.094-.016-.11.042z"
      style={{
        fill: "#be9800",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0259575,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M92.786 259.592c-.036.016-.068.053-.094.117l.14.335c.127.044.208.006.249-.104l-.137-.33c-.058-.027-.111-.039-.158-.018zm.023.051c.018-.01.043-.007.073.01l.126.3c-.02.029-.035.051-.11.046l-.126-.304c.008-.026.02-.043.037-.051z"
      style={{
        fill: "#be9800",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0192455,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m92.625 259.382.136.334c.085.034.093-.009.109-.044l-.135-.33c-.06-.036-.093-.018-.11.04z"
      style={{
        fill: "#be9800",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0259575,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M93.014 260.21c-.038.01-.076.04-.112.099l.08.353c.117.067.203.043.262-.059l-.077-.348c-.052-.037-.103-.058-.153-.045zm.014.054c.02-.006.044 0 .07.022l.072.318c-.023.024-.043.044-.115.026l-.072-.321c.013-.025.028-.04.045-.045z"
      style={{
        fill: "#be9800",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0192455,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m92.91 259.97.074.354c.078.049.093.007.115-.024l-.074-.35c-.051-.045-.088-.034-.115.021z"
      style={{
        fill: "#be9800",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0259575,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M93.143 260.852c-.04.002-.083.023-.13.073l.002.362c.101.09.19.085.27-.003l-.003-.356c-.042-.048-.088-.079-.14-.077zm.002.056c.02-.002.042.01.064.037l.003.325c-.028.019-.051.033-.118.001l-.002-.33c.017-.02.035-.032.053-.033z"
      style={{
        fill: "#be9800",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0192455,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m93.042 260.607.043.358c.073.055.092.015.116-.014l-.043-.355c-.047-.05-.085-.041-.117.01z"
      style={{
        fill: "#be9800",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0259575,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M93.166 261.512c-.04-.007-.086.003-.144.04l-.081.354c.077.11.165.126.263.06l.08-.348c-.03-.056-.068-.097-.118-.107zm-.011.055c.02.003.039.02.054.05l-.073.318c-.032.012-.058.02-.115-.026l.074-.321c.022-.017.042-.024.06-.021z"
      style={{
        fill: "#be9800",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0192455,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m93.106 261.256-.016.36c.062.067.087.031.116.006l.017-.357c-.039-.057-.077-.055-.117-.009z"
      style={{
        fill: "#be9800",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0259575,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M93.008 262.178c-.037-.013-.085-.01-.148.019l-.132.337c.06.12.145.15.251.097l.13-.332c-.022-.06-.052-.105-.1-.122zm-.019.052c.02.006.036.025.047.058l-.119.303c-.033.007-.06.012-.11-.043l.12-.306c.024-.013.045-.017.062-.012z"
      style={{
        fill: "#be9800",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0192455,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m93.02 261.916-.108.345c.044.08.077.051.112.034l.106-.34c-.023-.066-.06-.074-.11-.039z"
      style={{
        fill: "#be9800",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0259575,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M92.738 262.776c-.021-.033-.06-.06-.128-.078l-.313.181c-.028.132.02.208.135.234l.31-.179c.02-.06.024-.115-.003-.158zm-.047.03c.011.017.012.041 0 .074l-.283.162c-.03-.015-.054-.028-.058-.102l.285-.164c.027.005.045.014.056.03z"
      style={{
        fill: "#be9800",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0192455,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m92.821 262.54-.238.271c.008.091.05.079.088.077l.236-.268c.006-.07-.026-.092-.086-.08z"
      style={{
        fill: "#be9800",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0259575,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M92.245 263.114c-.025-.03-.068-.052-.137-.06l-.285.224c-.01.135.049.203.167.212l.28-.22c.012-.062.009-.117-.024-.157zm-.042.036c.014.015.018.04.01.073l-.257.2c-.032-.01-.057-.02-.072-.092l.259-.203c.027 0 .047.008.06.021z"
      style={{
        fill: "#be9800",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0192455,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m92.38 262.944-.281.226c-.009.09.035.085.073.09l.278-.223c.018-.067-.009-.094-.07-.093zM91.897 263.33l-.291.214c-.013.091.031.087.07.094l.287-.211c.02-.066-.005-.095-.066-.096z"
      style={{
        fill: "#be9800",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0259575,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m91.248 263.153.07.272c.053.034.106.051.154.035.037-.014.073-.046.105-.107l-.077-.251m-.046.304c-.02.008-.043.002-.072-.017l-.066-.25c.026-.01.066-.012.113-.023l.067.243c-.01.025-.024.04-.042.047z"
      style={{
        fill: "#be9800",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0192455,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="m91.565 263.609-.097-.348c-.08-.044-.092-.001-.112.031l.096.344c.054.043.09.03.113-.027z"
      style={{
        fill: "#be9800",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0259575,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <text
      xmlSpace="preserve"
      x={91.136}
      y={264.48}
      style={{
        fontWeight: 700,
        fontSize: "1.2757px",
        fontFamily: "&quot",
        InkscapeFontSpecification: "&quot",
        fill: "#be9800",
        stroke: "#000",
        strokeWidth: 0.00999854,
        strokeLinejoin: "round",
        strokeDashoffset: 7,
      }}
    >
      <tspan
        x={91.136}
        y={264.48}
        style={{
          strokeWidth: 0.00999854,
        }}
      >
        {"$"}
      </tspan>
    </text>
    <path
      d="M89.557 257.504s.532-.082.824-.04c.293.04.614.163.614.163l-1.052-.04"
      style={{
        fill: "#040402",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.02,
        strokeLinejoin: "round",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="M0 187.463s7.39-1.216 10.01-.936c2.618.281 6.006 2.339 9.26 2.339 3.255 0 4.345-2.339 12.48-2.245 8.135.094 12.355 3.404 15.466 3.404 3.11 0 19.747-5.214 19.747-5.214l-2.2-7.043s-14.648 4.924-17.958 4.27c-3.31-.656-4.993-2.807-7.863-3.649-2.87-.842-8.199-1.122-12.75.28-4.55 1.404-5.744 3.368-8.231 2.34-2.488-1.03-4.116-3.181-6.455-3.462-2.339-.28-11.506.468-11.506.468Z"
      style={{
        fill: "#0b11ff",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 0.3,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        filter: "url(#c)",
      }}
    />
    <path
      d="M-23.897 184.119h10.326v1.855h-10.326zM-24.369 186.185h10.326v1.855h-10.326zM-23.436 182.101h10.326v1.855h-10.326zM-24.831 188.203h10.326v1.855h-10.326zM-25.314 190.317h10.326v1.855h-10.326zM-25.786 192.383h10.326v1.855h-10.326z"
      style={{
        fill: "#743e07",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.227264,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="skewX(13.216) scale(1 .97351)"
    />
    <g transform="matrix(.63212 0 0 .63212 26.751 71.377)">
      <path
        d="m73.306 203.349.347 1.842h.612l.104-1.8M67.434 203.302l-.825 3.073.645.232 1.016-2.998"
        style={{
          fill: "#f46060",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.3,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={71.008}
        cy={200.918}
        rx={5.655}
        ry={3.076}
        style={{
          fill: "#f46060",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.3,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M63.24 198.315c-.323-.667-.502-1.361-.144-2.153.844.313 1.324.748 1.608 1.248M67.243 197.553c.387-.543.911-.898 1.547-1.098.276.77.118 1.46-.259 2.106"
        style={{
          fill: "#f46060",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.2,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={65.782}
        cy={200.29}
        rx={3.34}
        ry={3.043}
        style={{
          fill: "#f46060",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.3,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="m69.272 203.482.148 3.275h.662l.05-3.275M74.563 202.704l.628 2.679.711-.033-.264-3.357"
        style={{
          fill: "#f46060",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.3,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="m69.42 206.757-.033.59.315-.222.351.198.029-.566zM66.609 206.375l-.263.574.398-.093.228.31.282-.56zM73.653 205.191s-.507.08-.694.267c-.187.188-.146.433-.146.433l1.455-.076-.003-.624zM75.349 205.413s-.508.08-.695.268c-.187.187-.146.432-.146.432l1.456-.076-.003-.624z"
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.3,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M75.418 198.993s-.436-.704.324-.704c.761 0 1.01.645.629.578-.38-.066-.623-.89-.257-.992.514-.142.932.12.852.232"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.3,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={65.547}
        cy={200.918}
        rx={1.364}
        ry={1.254}
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.3,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={64.891}
        cy={200.986}
        rx={0.205}
        ry={0.246}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.3,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={66.183}
        cy={200.986}
        rx={0.164}
        ry={0.234}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.3,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <circle
        cx={63.867}
        cy={199.027}
        r={0.105}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.3,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={67.436}
        cy={199.027}
        rx={0.099}
        ry={0.1}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.3,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M67.112 201.863c-.165.543-.917 1.005-1.565.309-.505.721-1.307.311-1.59-.315.52.298 1.026.158 1.577-.28.831.497 1.661.306 1.578.286z"
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.2,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M64.906 197.338s-.935.554-.348.86c.587.306 2.597-.703 2.597-.703"
        style={{
          fill: "#b30c0c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.2,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M64.85 197.238c.725.618 1.637.426 2.362.187 0 0-.398-1.707-1.193-1.777-.795-.07-1.17 1.59-1.17 1.59z"
        style={{
          fill: "red",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.2,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M64.873 202.757c.199.2.713.2.713.2.319.02.448-.185.62-.34"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <path
      d="M0 445.263h47.625v30.987H0z"
      style={{
        fill: "#464646",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 0.0374177,
        strokeLinejoin: "round",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    />
    <path
      d="M.456 2.029h.257V.239L.608 0l-.14.216ZM1.187 2.029h.257V.239L1.34 0l-.14.216ZM1.988 2.029h.257V.239L2.14 0 2 .216ZM2.747 2.029h.257V.239L2.9 0l-.14.216Z"
      style={{
        fill: "#4e2700",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.05,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.99976 0 0 2.03154 .01 .015)"
    />
    <path
      d="M2.747 2.029h.257V.239L2.9 0l-.14.216ZM3.57 2.029h.257V.239L3.722 0l-.14.216ZM4.454 2.029h.258V.239L4.606 0l-.14.216ZM5.269 2.029h.257V.239L5.42 0l-.14.216ZM6.153 2.029h.258V.239L6.305 0l-.14.216ZM7.133 2.029h.257V.239L7.285 0l-.14.216ZM8.163 2.029h.257V.239L8.315 0l-.14.216ZM9.163 2.029h.257V.239L9.315 0l-.14.216ZM10.234 2.029h.257V.239L10.386 0l-.14.216ZM11.238 2.029h.258V.239L11.39 0l-.14.216ZM12.346 2.029h.258V.239L12.498 0l-.14.216ZM13.36 2.029h.256V.239L13.511 0l-.14.216ZM14.471 2.029h.257V.239L14.623 0l-.14.216ZM15.546 2.029h.257V.239L15.698 0l-.14.216ZM16.646 2.029h.257V.239L16.798 0l-.14.216ZM17.642 2.029h.257V.239L17.794 0l-.14.216ZM18.717 2.029h.257V.239L18.87 0l-.14.216ZM19.825 2.029h.257V.239L19.977 0l-.14.216ZM20.987 2.029h.257V.239L21.139 0l-.14.216ZM22.194 2.029h.257V.239L22.346 0l-.14.216Z"
      style={{
        fill: "#4e2700",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.05,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.99976 0 0 2.03154 .01 .015)"
    />
    <path
      d="M22.194 2.029h.257V.239L22.346 0l-.14.216ZM23.132 2.029h.257V.239L23.284 0l-.14.216ZM24.1 2.029h.257V.239L24.252 0l-.14.216ZM25.133 2.029h.257V.239L25.285 0l-.14.216ZM26.204 2.029h.257V.239L26.356 0l-.14.216ZM27.163 2.029h.257V.239L27.315 0l-.14.216ZM28.188 2.029h.257V.239L28.34 0l-.14.216ZM29.213 2.029h.258V.239L29.365 0l-.14.216ZM30.458 2.029h.257V.239L30.61 0l-.14.216ZM31.43 2.029h.257V.239L31.58 0l-.14.216ZM32.376 2.029h.257V.239L32.528 0l-.14.216ZM33.43 2.029h.258V.239L33.582 0l-.14.216ZM34.55 2.029h.258V.239L34.703 0l-.14.216ZM35.526 2.029h.258V.239L35.678 0l-.14.216ZM36.647 2.029h.257V.239L36.799 0l-.14.216ZM37.887 2.029h.257V.239L38.04 0l-.14.216ZM38.97 2.029h.257V.239L39.122 0l-.14.216ZM40.123 2.029h.258V.239L40.275 0l-.14.216ZM41.227 2.029h.257V.239L41.38 0l-.14.216ZM42.273 2.029h.257V.239L42.425 0l-.14.216ZM43.195 2.029h.257V.239L43.347 0l-.14.216ZM44.258 2.029h.257V.239L44.41 0l-.14.216ZM45.34 2.029h.258V.239L45.493 0l-.14.216ZM46.502 2.029h.258V.239L46.654 0l-.14.216ZM47.42 2.029h.258V.239L47.572 0l-.14.216ZM48.673 2.029h.257V.239L48.825 0l-.14.216ZM49.864 2.029h.257V.239L50.016 0l-.14.216ZM51.005 2.029h.257V.239L51.157 0l-.14.216ZM51.972 2.029h.257V.239L52.124 0l-.14.216ZM53.06 2.029h.257V.239L53.21 0l-.14.216ZM54.221 2.029h.257V.239L54.373 0l-.14.216ZM55.383 2.029h.257V.239L55.535 0l-.14.216ZM56.652 2.029h.257V.239L56.804 0l-.14.216ZM57.81 2.029h.257V.239L57.96 0l-.14.216ZM58.942 2.029h.257V.239L59.094 0l-.14.216ZM60.224 2.029h.257V.239L60.376 0l-.14.216ZM61.505 2.029h.258V.239L61.657 0l-.14.216ZM62.717 2.029h.257V.239L62.869 0l-.14.216ZM63.853 2.029h.258V.239L64.005 0l-.14.216ZM65.02 2.029h.257V.239L65.17 0l-.14.216ZM66.226 2.029h.258V.239L66.378 0l-.14.216ZM67.52 2.029h.258V.239L67.672 0l-.14.216ZM68.666 2.029h.257V.239L68.818 0l-.14.216ZM69.798 2.029h.258V.239L69.95 0l-.14.216ZM70.98 2.029h.258V.239L71.133 0l-.14.216ZM72.2 2.029h.258V.239L72.352 0l-.14.216ZM73.267 2.029h.257V.239L73.42 0l-.14.216ZM74.367 2.029h.257V.239L74.519 0l-.14.216ZM75.607 2.029h.257V.239L75.759 0l-.14.216ZM76.545 2.029h.257V.239L76.697 0l-.14.216Z"
      style={{
        fill: "#4e2700",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.05,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.99976 0 0 2.03154 .01 .015)"
    />
    <path
      d="M76.545 2.029h.257V.239L76.697 0l-.14.216ZM77.773 2.029h.257V.239L77.925 0l-.14.216Z"
      style={{
        fill: "#4e2700",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.05,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.99976 0 0 2.03154 .01 .015)"
    />
    <path
      d="M-.012 1.368h79.126v.331H-.012zM-.012.374h79.126v.331H-.012z"
      style={{
        fill: "#4e2700",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0660657,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.99976 0 0 2.03154 .01 .015)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -9.389 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -9.389 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -9.389 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -9.389 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -9.389 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -10.284 -3.486)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -10.284 -3.486)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -10.284 -3.486)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -10.284 -3.486)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -10.284 -3.486)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -11.252 -3.486)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -11.252 -3.486)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -11.252 -3.486)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -11.252 -3.486)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -11.252 -3.486)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -12.039 -3.486)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -12.039 -3.486)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -12.039 -3.486)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -12.039 -3.486)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -12.039 -3.486)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -9.389 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -9.389 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -9.389 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -9.389 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -9.389 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -8.09 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -8.09 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -8.09 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -8.09 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -8.09 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -7.306 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -7.306 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -7.306 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -7.306 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -7.306 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -4.925 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -4.925 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -4.925 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -4.925 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -4.925 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -5.446 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -5.446 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -5.446 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -5.446 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -5.446 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -6.338 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -6.338 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -6.338 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -6.338 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -6.338 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -3.9 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -3.9 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -3.9 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -3.9 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -3.9 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -1.817 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -1.817 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -1.817 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -1.817 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -1.817 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -2.858 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -2.858 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -2.858 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -2.858 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -2.858 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -.792 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -.792 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -.792 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -.792 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 -.792 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 .217 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 .217 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 .217 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 .217 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 .217 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 .217 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 .217 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 .217 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 .217 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 .217 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 1.076 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 1.076 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 1.076 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 1.076 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 1.076 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 2.044 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 2.044 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 2.044 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 2.044 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 2.044 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 2.829 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 2.829 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 2.829 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 2.829 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 2.829 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 3.325 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 3.325 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 3.325 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 3.325 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 3.325 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 4.333 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 4.333 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 4.333 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 4.333 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 4.333 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 5.26 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 5.26 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 5.26 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 5.26 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 5.26 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 6.359 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 6.359 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 6.359 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 6.359 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 6.359 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 7.367 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 7.367 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 7.367 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 7.367 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 7.367 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 8.483 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 8.483 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 8.483 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 8.483 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 8.483 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 9.458 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 9.458 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 9.458 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 9.458 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 9.458 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 12.087 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 12.087 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 12.087 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 12.087 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 12.087 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 10.36 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 10.36 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 10.36 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 10.36 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 10.36 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 11.327 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 11.327 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 11.327 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 11.327 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 11.327 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 13.063 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 13.063 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 13.063 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 13.063 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 13.063 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 14.997 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 14.997 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 14.997 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 14.997 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 14.997 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 13.997 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 13.997 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 13.997 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 13.997 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 13.997 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 17.105 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 17.105 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 17.105 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 17.105 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 17.105 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 16.105 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 16.105 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 16.105 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 16.105 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 16.105 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 18.899 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 18.899 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 18.899 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 18.899 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 18.899 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 18.055 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 18.055 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 18.055 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 18.055 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 18.055 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 20.006 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 20.006 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 20.006 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 20.006 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 20.006 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 21.13 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 21.13 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 21.13 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 21.13 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 21.13 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 22.18 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 22.18 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 22.18 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 22.18 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 22.18 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 23.106 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 23.106 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 23.106 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 23.106 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 23.106 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 23.999 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 23.999 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 23.999 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 23.999 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 23.999 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 24.677 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 24.677 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 24.677 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 24.677 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 24.677 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 26.818 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 26.818 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 26.818 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 26.818 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 26.818 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 25.735 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 25.735 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 25.735 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 25.735 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 25.735 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 27.867 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 27.867 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 27.867 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 27.867 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 27.867 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 28.785 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 28.785 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 28.785 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 28.785 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 28.785 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 31.596 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 31.596 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 31.596 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 31.596 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 31.596 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 30.232 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 30.232 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 30.232 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 30.232 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 30.232 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 32.703 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 32.703 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 32.703 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 32.703 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 32.703 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 34.208 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 34.208 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 34.208 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 34.208 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 34.208 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 36.77 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 36.77 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 36.77 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 36.77 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 36.77 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 35.547 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 35.547 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 35.547 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 35.547 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 35.547 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 36.092 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 36.092 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 36.092 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 36.092 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 36.092 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 35.084 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 35.084 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 35.084 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 35.084 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 35.084 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 37.894 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 37.894 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 37.894 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 37.894 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 37.894 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 39.399 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 39.399 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 39.399 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 39.399 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 39.399 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 40.407 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 40.407 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 40.407 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 40.407 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 40.407 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 41.499 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 41.499 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 41.499 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 41.499 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 41.499 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 43.4 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 43.4 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 43.4 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 43.4 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 43.4 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 44.425 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 44.425 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 44.425 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 44.425 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 44.425 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 43.896 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 43.896 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 43.896 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 43.896 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 43.896 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 46.624 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 46.624 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 46.624 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 46.624 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 46.624 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 47.748 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 47.748 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 47.748 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 47.748 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 47.748 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 48.938 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 48.938 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 48.938 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 48.938 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 48.938 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 50.095 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 50.095 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 50.095 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 50.095 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 50.095 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 52.096 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 52.096 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 52.096 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 52.096 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 52.096 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 51.038 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 51.038 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 51.038 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 51.038 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 51.038 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 55.65 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 55.65 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 55.65 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 55.65 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 55.65 -3.516)"
    />
    <path
      d="M50.46 47.542c.389-.866.16-2.587.014-3.507.663.881.652 2.552.865 3.507zM55.191 47.617c-.253-1.292-.068-3.133.011-3.804-.458.675-.518 2.206-.643 2.785l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 59.188 -3.516)"
    />
    <path
      d="M53.671 47.542c.168-2.35.258-3.15 1.023-3.795-.386 1.425-.067 2.12.111 3.845z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 59.188 -3.516)"
    />
    <path
      d="M53.11 46.347c.067-.824-.063-2.21.786-3.085-.231 1.188-.266 2.64.453 4.28h-1.356z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 59.188 -3.516)"
    />
    <path
      d="M51.738 45.967c-.026 0 .555-2.818.832-3.27.059 2.194.52 3.06.831 4.845h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 59.188 -3.516)"
    />
    <path
      d="M50.9 47.542c.52-.999.55-2.752.342-4.167.932 1.452.644 2.469.98 4.167z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(.24155 0 0 .16991 59.188 -3.516)"
    />
    <text
      xmlSpace="preserve"
      x={84.136}
      y={254.541}
      style={{
        fontWeight: 700,
        fontSize: "1.80548px",
        fontFamily: "&quot",
        InkscapeFontSpecification: "&quot",
        fill: "#fc0800",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.035377,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
    >
      <tspan
        x={84.136}
        y={254.541}
        style={{
          fill: "#fc0800",
          fillOpacity: 1,
          strokeWidth: 0.0353771,
        }}
      >
        {"   Tomas\xEDn"}
      </tspan>
      <tspan
        x={84.136}
        y={256.798}
        style={{
          fill: "#fc0800",
          fillOpacity: 1,
          strokeWidth: 0.0353771,
        }}
      >
        {"el peligroso"}
      </tspan>
    </text>
    <path
      d="m18.52 114.895-2.182 6.88h11.576l2.513-6.946z"
      style={{
        fill: "#ff2100",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.1846 0 0 1.1846 11.795 -83.46)"
    />
    <g transform="matrix(1.1846 0 0 1.1846 11.795 -83.46)">
      <path
        d="M20.662 117.458h.661v.48h-.661z"
        style={{
          fill: "#d38d5f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={19.331}
        cy={117.707}
        rx={1.472}
        ry={0.992}
        style={{
          fill: "#d38d5f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={18.943}
        cy={118.252}
        rx={0.223}
        ry={0.331}
        style={{
          fill: "#06022d",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={19.025}
        cy={117.177}
        rx={0.223}
        ry={0.331}
        style={{
          fill: "#06022d",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M19.033 117.93v-.447M20.166 117.971c-.132-.198-.066-.53-.066-.53"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M24.954 117.467c0 .23.121.79-.096.968-.375.308-.79.479-1.525.479-1.16 0-2.1-.507-2.1-1.133s.94-1.133 2.1-1.133c1.16 0 1.62.193 1.62.819z"
        style={{
          fill: "#d38d5f",
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="m24.788 116.896-.165 1.77 1.124.182.05-.794-.447-.265.596-.182.132-.777zM25.83 118.434l1.406.149M26.078 117.177l1.124-.05M22.423 116.73l.53-1.554M21.795 118.517l-.446 1.405"
        style={{
          fill: "#d35fc6",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={23.918}
        cy={117.655}
        rx={0.023}
        ry={0.035}
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <path
      d="m18.52 114.895-2.182 6.88h11.576l2.513-6.946z"
      style={{
        fill: "#fbff00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.1846 0 0 1.1846 -2.742 -5.567)"
    />
    <g transform="matrix(1.1846 0 0 1.1846 -2.742 -5.567)">
      <path
        d="M20.662 117.458h.661v.48h-.661z"
        style={{
          fill: "#823b0c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={19.331}
        cy={117.707}
        rx={1.472}
        ry={0.992}
        style={{
          fill: "#823b0c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={18.943}
        cy={118.252}
        rx={0.223}
        ry={0.331}
        style={{
          fill: "#06022d",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={19.025}
        cy={117.177}
        rx={0.223}
        ry={0.331}
        style={{
          fill: "#06022d",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M19.033 117.93v-.447M20.166 117.971c-.132-.198-.066-.53-.066-.53"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M24.954 117.467c0 .23.121.79-.096.968-.375.308-.79.479-1.525.479-1.16 0-2.1-.507-2.1-1.133s.94-1.133 2.1-1.133c1.16 0 1.62.193 1.62.819z"
        style={{
          fill: "#823b0c",
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDashoffset: 7,
          fillOpacity: 1,
        }}
      />
      <path
        d="m25.03 118.316 2.206.267M25.09 117.276l2.112-.148"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="m22.423 116.73.53-1.554M21.795 118.517l-.446 1.405"
        style={{
          fill: "#d35fc6",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={23.918}
        cy={117.655}
        rx={0.023}
        ry={0.035}
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="m24.925 117.128-.079 1.362.632-.79z"
        style={{
          fill: "#f0000a",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M21.615 118.155c.234.265.479.45.742.502.305-.281.335-.578.092-.89-.299-.016-.564.198-.834.388zM21.694 117.227c.234.265.479.45.742.502.305-.281.335-.578.092-.89-.299-.016-.564.198-.834.388z"
        style={{
          fill: "#f0000a",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.0976386,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M21.609 118.145h-.277M21.717 117.197l-.177.04"
        style={{
          fill: "#14ff00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M18.131 117.73c.228.766 1.061.998.98 1.794-1.082-.234-2.219-.42-1.804-1.85-.232-1.526 1.016-1.655 2.05-1.83-.155.943-1.346 1.312-1.226 1.886z"
        style={{
          fill: "#070b06",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <g transform="matrix(1.1846 0 0 1.1846 -3.139 -20.059)">
      <path
        d="m18.52 114.895-2.182 6.88h11.576l2.513-6.946z"
        style={{
          fill: "#0e3029",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <g transform="matrix(.05664 .99849 -1.30009 .0435 176.982 93.127)">
        <path
          d="M20.662 117.458h.661v.48h-.661z"
          style={{
            fill: "#823b0c",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <ellipse
          cx={19.331}
          cy={117.707}
          rx={1.472}
          ry={0.992}
          style={{
            fill: "#823b0c",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="M19.97 118.073c.157-.264.269-.65.149-.628"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.125962,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="M24.954 117.467c0 .23.121.79-.096.968-.375.308-.79.479-1.525.479-1.16 0-2.1-.507-2.1-1.133s.94-1.133 2.1-1.133c1.16 0 1.62.193 1.62.819z"
          style={{
            fill: "#823b0c",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDashoffset: 7,
          }}
        />
        <path
          d="m24.788 116.896-.165 1.77 1.193.013.024-.548-.49-.342.423-.395.121-.508z"
          style={{
            fill: "#3605d3",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="m25.83 118.434 1.406.149M25.834 117.14l1.368-.012"
          style={{
            fill: "#d35fc6",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="m22.276 116.802.802-1.028.809.91M22.102 118.739l.843 1.07.842-.822"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <ellipse
          cx={23.918}
          cy={117.655}
          rx={0.023}
          ry={0.035}
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <ellipse
          cx={-117.198}
          cy={24.066}
          rx={0.091}
          ry={0.094}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.0222066,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
          transform="rotate(-87.505)"
        />
        <ellipse
          cx={-116.272}
          cy={24.056}
          rx={0.091}
          ry={0.094}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.0222066,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
          transform="rotate(-87.505)"
        />
      </g>
      <path
        d="m20.239 122.425-.684-.6H16.19l.823.656"
        style={{
          fill: "#3c3c3c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M16.931 122.441h3.277v4.422h-3.277z"
        style={{
          fill: "#2e2e2e",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="m16.944 122.467-.753-.656v4.216l.712.81"
        style={{
          fill: "#1f1f1f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={18.675}
        cy={124.694}
        rx={1.214}
        ry={1.221}
        style={{
          fill: "#010101",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M17.517 122.788h2.066v.293h-2.066z"
        style={{
          fill: "#010101",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={18.675}
        cy={124.694}
        rx={1.053}
        ry={1.059}
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#fffdfd",
          strokeWidth: 0.02532509,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={18.675}
        cy={124.677}
        rx={0.607}
        ry={0.611}
        style={{
          fill: "#333",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.0422085,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <g transform="matrix(.0359 .63284 -.824 .02757 166.954 115.044)">
        <path
          d="M20.662 117.458h.661v.48h-.661z"
          style={{
            fill: "#823b0c",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <ellipse
          cx={19.331}
          cy={117.707}
          rx={1.472}
          ry={0.992}
          style={{
            fill: "#823b0c",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="M20.362 117.772c.039-.115-.115-.393-.223-.356-.053.018-.046.235-.095.343-.014.212.281.12.318.013z"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.125962,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="M24.954 117.467c0 .23.121.79-.096.968-.375.308-.79.479-1.525.479-1.16 0-2.1-.507-2.1-1.133s.94-1.133 2.1-1.133c1.16 0 1.62.193 1.62.819z"
          style={{
            fill: "#823b0c",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDashoffset: 7,
          }}
        />
        <path
          d="m24.788 116.896-.165 1.77 1.193.013.024-.548-.49-.342.423-.395.121-.508z"
          style={{
            fill: "#288f03",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="m25.83 118.434 1.406.149M25.834 117.14l1.368-.012"
          style={{
            fill: "#d35fc6",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="m22.276 116.802.802-1.028-.959-.539M22.102 118.739l-.019 1.118-1.376.453"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <ellipse
          cx={23.918}
          cy={117.655}
          rx={0.023}
          ry={0.035}
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <ellipse
          cx={-117.198}
          cy={24.066}
          rx={0.091}
          ry={0.094}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.0222066,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
          transform="rotate(-87.505)"
        />
        <ellipse
          cx={-116.272}
          cy={24.056}
          rx={0.091}
          ry={0.094}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.0222066,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
          transform="rotate(-87.505)"
        />
      </g>
      <g transform="matrix(.0359 .63284 -.824 .02757 142.952 109.694)">
        <path
          d="M20.662 117.458h.661v.48h-.661z"
          style={{
            fill: "#823b0c",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <ellipse
          cx={19.331}
          cy={117.707}
          rx={1.472}
          ry={0.992}
          style={{
            fill: "#823b0c",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="M20.362 117.772c.039-.115-.115-.393-.223-.356-.053.018-.046.235-.095.343-.014.212.281.12.318.013z"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.125962,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="M24.954 117.467c0 .23.121.79-.096.968-.375.308-.79.479-1.525.479-1.16 0-2.1-.507-2.1-1.133s.94-1.133 2.1-1.133c1.16 0 1.62.193 1.62.819z"
          style={{
            fill: "#823b0c",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDashoffset: 7,
          }}
        />
        <path
          d="m24.788 116.896-.165 1.77 1.193.013.024-.548-.49-.342.423-.395.121-.508z"
          style={{
            fill: "#05d3b5",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="m25.83 118.434 1.406.149M25.834 117.14l1.368-.012"
          style={{
            fill: "#d35fc6",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="m22.276 116.802.802-1.028-.959-.539M22.102 118.739l-.019 1.118-1.376.453"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <ellipse
          cx={23.918}
          cy={117.655}
          rx={0.023}
          ry={0.035}
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <ellipse
          cx={-117.198}
          cy={24.066}
          rx={0.091}
          ry={0.094}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.0222066,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
          transform="rotate(-87.505)"
        />
        <ellipse
          cx={-116.272}
          cy={24.056}
          rx={0.091}
          ry={0.094}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.0222066,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
          transform="rotate(-87.505)"
        />
      </g>
      <g transform="matrix(.0359 .63284 -.824 .02757 148.436 114.217)">
        <path
          d="M20.662 117.458h.661v.48h-.661z"
          style={{
            fill: "#823b0c",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <ellipse
          cx={19.331}
          cy={117.707}
          rx={1.472}
          ry={0.992}
          style={{
            fill: "#823b0c",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="M20.362 117.772c.039-.115-.115-.393-.223-.356-.053.018-.046.235-.095.343-.014.212.281.12.318.013z"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.125962,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="M24.954 117.467c0 .23.121.79-.096.968-.375.308-.79.479-1.525.479-1.16 0-2.1-.507-2.1-1.133s.94-1.133 2.1-1.133c1.16 0 1.62.193 1.62.819z"
          style={{
            fill: "#823b0c",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDashoffset: 7,
          }}
        />
        <path
          d="m24.788 116.896-.165 1.77 1.193.013.024-.548-.49-.342.423-.395.121-.508z"
          style={{
            fill: "#d38305",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="m25.83 118.434 1.406.149M25.834 117.14l1.368-.012"
          style={{
            fill: "#d35fc6",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="m22.276 116.802.802-1.028-.959-.539M22.102 118.739l-.019 1.118-1.376.453"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <ellipse
          cx={23.918}
          cy={117.655}
          rx={0.023}
          ry={0.035}
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <ellipse
          cx={-117.198}
          cy={24.066}
          rx={0.091}
          ry={0.094}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.0222066,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
          transform="rotate(-87.505)"
        />
        <ellipse
          cx={-116.272}
          cy={24.056}
          rx={0.091}
          ry={0.094}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.0222066,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
          transform="rotate(-87.505)"
        />
      </g>
      <g transform="matrix(.0359 .63284 -.824 .02757 141.514 114.616)">
        <path
          d="M20.662 117.458h.661v.48h-.661z"
          style={{
            fill: "#823b0c",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <ellipse
          cx={19.331}
          cy={117.707}
          rx={1.472}
          ry={0.992}
          style={{
            fill: "#823b0c",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="M20.362 117.772c.039-.115-.115-.393-.223-.356-.053.018-.046.235-.095.343-.014.212.281.12.318.013z"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.125962,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="M24.954 117.467c0 .23.121.79-.096.968-.375.308-.79.479-1.525.479-1.16 0-2.1-.507-2.1-1.133s.94-1.133 2.1-1.133c1.16 0 1.62.193 1.62.819z"
          style={{
            fill: "#823b0c",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDashoffset: 7,
          }}
        />
        <path
          d="m24.788 116.896.055 1.59.837-.714z"
          style={{
            fill: "#d30805",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="m25.065 118.282 2.093.298M25.028 117.165l2.174-.037"
          style={{
            fill: "#d35fc6",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="m22.276 116.802.802-1.028-.959-.539M22.102 118.739l-.019 1.118-1.376.453"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <ellipse
          cx={23.918}
          cy={117.655}
          rx={0.023}
          ry={0.035}
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <ellipse
          cx={-117.198}
          cy={24.066}
          rx={0.091}
          ry={0.094}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.0222066,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
          transform="rotate(-87.505)"
        />
        <ellipse
          cx={-116.272}
          cy={24.056}
          rx={0.091}
          ry={0.094}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.0222066,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
          transform="rotate(-87.505)"
        />
        <path
          d="m21.944 118.285.718.48.002-.796zM21.985 117.363l.645.384v-.762zM22.63 116.985l-.122-.238M22.662 118.765l-.141.06M21.944 118.285l-.5-.008M21.985 117.363l-.522-.098M22.664 117.969l-.034-.222"
          style={{
            fill: "#d30805",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.0350372,
            strokeLinejoin: "round",
            strokeDashoffset: 7,
          }}
        />
        <path
          d="M17.68 119.2c.476.245.82.593 1.755.475 0 0 .359-.128.364-.256.007-.143-.383-.321-.383-.321-.693-.187-1.17.045-1.736.102z"
          style={{
            fill: "#1b0302",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.0350372,
            strokeLinejoin: "round",
            strokeDashoffset: 7,
          }}
        />
        <path
          d="M19.331 118.699c-.57.093-.278.624-1.65.501-.203-1.036-.092-1.898.643-2.217-.158.737.092 1.338 1.007 1.716z"
          style={{
            fill: "#1b0302",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.0350372,
            strokeLinejoin: "round",
            strokeDashoffset: 7,
          }}
        />
      </g>
      <g transform="matrix(.02676 .47177 -.61427 .02055 146.521 119.021)">
        <path
          d="M20.662 117.458h.661v.48h-.661z"
          style={{
            fill: "#823b0c",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <ellipse
          cx={19.331}
          cy={117.707}
          rx={1.472}
          ry={0.992}
          style={{
            fill: "#823b0c",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="M20.362 117.772c.039-.115-.115-.393-.223-.356-.053.018-.046.235-.095.343-.014.212.281.12.318.013z"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.125962,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="M24.954 117.467c0 .23.121.79-.096.968-.375.308-.79.479-1.525.479-1.16 0-2.1-.507-2.1-1.133s.94-1.133 2.1-1.133c1.16 0 1.62.193 1.62.819z"
          style={{
            fill: "#823b0c",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDashoffset: 7,
          }}
        />
        <path
          d="m24.788 116.896.055 1.59.837-.714z"
          style={{
            fill: "#0a05d3",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="m25.065 118.282 2.093.298M25.028 117.165l2.174-.037"
          style={{
            fill: "#d35fc6",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="m22.276 116.802.802-1.028-.959-.539M22.102 118.739l-.019 1.118-1.376.453"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <ellipse
          cx={23.918}
          cy={117.655}
          rx={0.023}
          ry={0.035}
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <ellipse
          cx={-117.198}
          cy={24.066}
          rx={0.091}
          ry={0.094}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.0222066,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
          transform="rotate(-87.505)"
        />
        <ellipse
          cx={-116.272}
          cy={24.056}
          rx={0.091}
          ry={0.094}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.0222066,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
          transform="rotate(-87.505)"
        />
        <path
          d="m21.944 118.285.718.48.002-.796zM21.985 117.363l.645.384v-.762z"
          style={{
            fill: "#0a05d3",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.0350372,
            strokeLinejoin: "round",
            strokeDashoffset: 7,
          }}
        />
        <path
          d="m22.63 116.985-.122-.238M22.662 118.765l-.141.06M21.944 118.285l-.5-.008M21.985 117.363l-.522-.098M22.664 117.969l-.034-.222"
          style={{
            fill: "#d30805",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.0350372,
            strokeLinejoin: "round",
            strokeDashoffset: 7,
          }}
        />
        <path
          d="M17.68 119.2c.476.245.82.593 1.755.475 0 0 .359-.128.364-.256.007-.143-.383-.321-.383-.321-.693-.187-1.17.045-1.736.102z"
          style={{
            fill: "#1b0302",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.0350372,
            strokeLinejoin: "round",
            strokeDashoffset: 7,
          }}
        />
        <path
          d="M19.331 118.699c-.57.093-.278.624-1.65.501-.203-1.036-.092-1.898.643-2.217-.158.737.092 1.338 1.007 1.716z"
          style={{
            fill: "#1b0302",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.0350372,
            strokeLinejoin: "round",
            strokeDashoffset: 7,
          }}
        />
      </g>
      <g transform="matrix(.0359 .63284 -.824 .02757 114.53 75.633)">
        <path
          d="M20.662 117.458h.661v.48h-.661z"
          style={{
            fill: "#823b0c",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <ellipse
          cx={19.331}
          cy={117.707}
          rx={1.472}
          ry={0.992}
          style={{
            fill: "#823b0c",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="M20.362 117.772c.039-.115-.115-.393-.223-.356-.053.018-.046.235-.095.343-.014.212.281.12.318.013z"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.125962,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="M24.954 117.467c0 .23.121.79-.096.968-.375.308-.79.479-1.525.479-1.16 0-2.1-.507-2.1-1.133s.94-1.133 2.1-1.133c1.16 0 1.62.193 1.62.819z"
          style={{
            fill: "#823b0c",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDashoffset: 7,
          }}
        />
        <path
          d="m24.788 116.896-.165 1.77 1.193.013.024-.548-.49-.342.423-.395.121-.508z"
          style={{
            fill: "#a7d305",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="m25.83 118.434 1.406.149M25.834 117.14l1.368-.012"
          style={{
            fill: "#d35fc6",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          d="m22.276 116.802.802-1.028-.959-.539M22.102 118.739l-.019 1.118-1.376.453"
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <ellipse
          cx={23.918}
          cy={117.655}
          rx={0.023}
          ry={0.035}
          style={{
            fill: "none",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.1,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <ellipse
          cx={-117.198}
          cy={24.066}
          rx={0.091}
          ry={0.094}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.0222066,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
          transform="rotate(-87.505)"
        />
        <ellipse
          cx={-116.272}
          cy={24.056}
          rx={0.091}
          ry={0.094}
          style={{
            fill: "#000",
            fillOpacity: 1,
            stroke: "#000",
            strokeWidth: 0.0222066,
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
          transform="rotate(-87.505)"
        />
      </g>
      <path
        d="M20.956 96.056c-.183-.73-.04-1.784.083-2.82.758-.123 1.013-.024 1.313.056l.195 1.312.558-.056.252-2.764c.509-.134.991-.175 1.396.056l.279 2.68.363-.055.223-1.424c.658-.06.865.013 1.117.111.198.034.67 2.783.447 2.876"
        style={{
          fill: "#8a801a",
          fillOpacity: 0.976471,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="m23.951 90.708.908-.474-.908-.533"
        style={{
          fill: "#08d305",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M23.951 91.715V89.7"
        style={{
          fill: "#a7d305",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M23.91 92.603v.835l.144-.028v-.788z"
        style={{
          fill: "#41410d",
          fillOpacity: 0.980392,
          stroke: "none",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="M26.17 93.553v.709l.146-.024v-.67zM21.62 93.553v.709l.145-.024v-.67z"
        style={{
          fill: "#41410d",
          fillOpacity: 0.980392,
          stroke: "none",
          strokeWidth: 0.0778079,
          strokeLinejoin: "round",
          strokeDashoffset: 7,
        }}
      />
    </g>
    <path
      d="m18.52 114.895-2.182 6.88h11.576l2.513-6.946z"
      style={{
        fill: "#f19502",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.1846 0 0 1.1846 11.664 -68.33)"
    />
    <g transform="matrix(1.1846 0 0 1.1846 11.664 -68.33)">
      <path
        d="M20.662 117.458h.661v.48h-.661z"
        style={{
          fill: "#d38d5f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={19.331}
        cy={117.707}
        rx={1.472}
        ry={0.992}
        style={{
          fill: "#d38d5f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={18.943}
        cy={118.252}
        rx={0.223}
        ry={0.331}
        style={{
          fill: "#06022d",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={19.025}
        cy={117.177}
        rx={0.223}
        ry={0.331}
        style={{
          fill: "#06022d",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M19.033 117.93v-.447M20.166 117.971c-.132-.198-.066-.53-.066-.53"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M24.954 117.467c0 .23.121.79-.096.968-.375.308-.79.479-1.525.479-1.16 0-2.1-.507-2.1-1.133s.94-1.133 2.1-1.133c1.16 0 1.62.193 1.62.819z"
        style={{
          fill: "#d38d5f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="m25.03 118.316 2.206.267M25.09 117.276l2.112-.148"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="m22.423 116.73.53-1.554M21.795 118.517l-.446 1.405"
        style={{
          fill: "#d35fc6",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={23.918}
        cy={117.655}
        rx={0.023}
        ry={0.035}
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="m24.925 117.128-.079 1.362.632-.79z"
        style={{
          fill: "#01f000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M21.615 118.155c.234.265.479.45.742.502.305-.281.335-.578.092-.89-.299-.016-.564.198-.834.388zM21.694 117.227c.234.265.479.45.742.502.305-.281.335-.578.092-.89-.299-.016-.564.198-.834.388z"
        style={{
          fill: "#01f000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.0976386,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M21.609 118.145h-.277M21.717 117.197l-.177.04"
        style={{
          fill: "#14ff00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M18.131 117.73c.01 1.54 3.239.7 3.171 1.445-1.108-.126-4.093.172-3.632-1.443-.134-1.795 3.213-1.802 4.199-1.846-.24.787-4.188.665-3.738 1.844z"
        style={{
          fill: "#070b06",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <path
      d="m18.52 114.895-2.182 6.88h11.576l2.513-6.946z"
      style={{
        fill: "#f1020e",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.1846 0 0 1.1846 45.527 -21.746)"
    />
    <g transform="matrix(1.1846 0 0 1.1846 45.527 -21.746)">
      <path
        d="M20.662 117.458h.661v.48h-.661z"
        style={{
          fill: "#d38d5f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={19.331}
        cy={117.707}
        rx={1.472}
        ry={0.992}
        style={{
          fill: "#d38d5f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={18.943}
        cy={118.252}
        rx={0.223}
        ry={0.331}
        style={{
          fill: "#06022d",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={19.025}
        cy={117.177}
        rx={0.223}
        ry={0.331}
        style={{
          fill: "#06022d",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M19.033 117.93v-.447M20.166 117.971c-.132-.198-.066-.53-.066-.53"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M24.954 117.467c0 .23.121.79-.096.968-.375.308-.79.479-1.525.479-1.16 0-2.1-.507-2.1-1.133s.94-1.133 2.1-1.133c1.16 0 1.62.193 1.62.819z"
        style={{
          fill: "#d38d5f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="m25.03 118.316 2.206.267M25.09 117.276l2.112-.148"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="m22.423 116.73.53-1.554M21.795 118.517l-.446 1.405"
        style={{
          fill: "#d35fc6",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={23.918}
        cy={117.655}
        rx={0.023}
        ry={0.035}
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="m24.925 117.128-.079 1.362.632-.79z"
        style={{
          fill: "#d5f000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M21.615 118.155c.234.265.479.45.742.502.305-.281.335-.578.092-.89-.299-.016-.564.198-.834.388zM21.694 117.227c.234.265.479.45.742.502.305-.281.335-.578.092-.89-.299-.016-.564.198-.834.388z"
        style={{
          fill: "#d5f000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.0976386,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M21.609 118.145h-.277M21.717 117.197l-.177.04"
        style={{
          fill: "#14ff00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M18.131 117.73c.01 1.54 3.239.7 3.171 1.445-1.108-.126-4.093.172-3.632-1.443-.134-1.795 3.213-1.802 4.199-1.846-.24.787-4.188.665-3.738 1.844z"
        style={{
          fill: "#f9d605",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <g transform="matrix(-.12356 1.3431 -1.3431 -.12356 248.994 371.69)">
      <path
        d="M20.662 117.458h.661v.48h-.661z"
        style={{
          fill: "#d38d5f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={19.331}
        cy={117.707}
        rx={1.472}
        ry={0.992}
        style={{
          fill: "#d38d5f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={18.943}
        cy={118.252}
        rx={0.223}
        ry={0.331}
        style={{
          fill: "#06022d",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={19.025}
        cy={117.177}
        rx={0.223}
        ry={0.331}
        style={{
          fill: "#06022d",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M19.033 117.93v-.447M20.166 117.971c.226-.311-.022-.762-.25-.69"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M24.954 117.467c0 .23.121.79-.096.968-.375.308-.79.479-1.525.479-1.16 0-2.1-.507-2.1-1.133s.94-1.133 2.1-1.133c1.16 0 1.62.193 1.62.819z"
        style={{
          fill: "#d38d5f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="m25.03 118.316 2.206.267M25.09 117.276l2.112-.148M22.423 116.73l.098-.952-1.251-.422M22.138 118.693l-.145 1.112.843.681"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={23.918}
        cy={117.655}
        rx={0.023}
        ry={0.035}
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="m24.925 117.128-.079 1.362.632-.79z"
        style={{
          fill: "#f00000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M21.615 118.155c.234.265.479.45.742.502.305-.281.335-.578.092-.89-.299-.016-.564.198-.834.388zM21.694 117.227c.234.265.479.45.742.502.305-.281.335-.578.092-.89-.299-.016-.564.198-.834.388z"
        style={{
          fill: "#f00000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.0976386,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M21.609 118.145h-.277M21.717 117.197l-.177.04"
        style={{
          fill: "#14ff00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M18.131 117.73c.01 1.54 3.239.7 3.171 1.445-1.108-.126-4.093.172-3.632-1.443-.134-1.795 3.213-1.802 4.199-1.846-.24.787-4.188.665-3.738 1.844z"
        style={{
          fill: "#f9d605",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <g transform="matrix(-.12356 1.3431 -1.3431 -.12356 240.388 373.093)">
      <path
        d="M20.662 117.458h.661v.48h-.661z"
        style={{
          fill: "#d38d5f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={19.331}
        cy={117.707}
        rx={1.472}
        ry={0.992}
        style={{
          fill: "#d38d5f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={18.943}
        cy={118.252}
        rx={0.223}
        ry={0.331}
        style={{
          fill: "#06022d",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={19.025}
        cy={117.177}
        rx={0.223}
        ry={0.331}
        style={{
          fill: "#06022d",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M19.033 117.93v-.447M20.166 117.971c.226-.311-.022-.762-.25-.69"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M24.954 117.467c0 .23.121.79-.096.968-.375.308-.602.093-1.33.19-1.153.154-2.308.13-2.295-.844.014-1.083.975-1.005 2.39-.79 1.147.174 1.33-.15 1.33.476z"
        style={{
          fill: "#d38d5f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="m25.03 118.316 2.206.267M25.09 117.276l2.112-.148M22.326 116.875l.354-.9-1.37-.721M22.138 118.693l.11 1.353-.91.48"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={23.918}
        cy={117.655}
        rx={0.023}
        ry={0.035}
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="m24.925 117.128-.079 1.362.632-.79z"
        style={{
          fill: "#00bdf0",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M21.615 118.155c.234.265.479.45.742.502.305-.281.335-.578.092-.89-.299-.016-.564.198-.834.388zM21.694 117.227c.234.265.479.45.742.502.305-.281.335-.578.092-.89-.299-.016-.564.198-.834.388z"
        style={{
          fill: "#00bdf0",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.0976386,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M21.609 118.145h-.277M21.717 117.197l-.292.001"
        style={{
          fill: "#14ff00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M18.131 117.73c.01 1.54 3.239.7 3.171 1.445-1.108-.126-4.093.172-3.632-1.443-.134-1.795 3.213-1.802 4.199-1.846-.24.787-4.188.665-3.738 1.844z"
        style={{
          fill: "#4a2300",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <g transform="matrix(-.12356 1.3431 -1.3431 -.12356 202.824 355.55)">
      <path
        d="M20.662 117.458h.661v.48h-.661z"
        style={{
          fill: "#d38d5f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={19.331}
        cy={117.707}
        rx={1.472}
        ry={0.992}
        style={{
          fill: "#d38d5f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={18.943}
        cy={118.252}
        rx={0.223}
        ry={0.331}
        style={{
          fill: "#06022d",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={19.025}
        cy={117.177}
        rx={0.223}
        ry={0.331}
        style={{
          fill: "#06022d",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M19.033 117.93v-.447M20.166 117.971c.226-.311-.022-.762-.25-.69"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M24.954 117.467c0 .23.121.79-.096.968-.375.308-.79.479-1.525.479-1.16 0-2.1-.507-2.1-1.133s.94-1.133 2.1-1.133c1.16 0 1.62.193 1.62.819z"
        style={{
          fill: "#d38d5f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="m25.03 118.316 2.206.267M25.09 117.276l2.112-.148M22.423 116.73l.098-.952-1.251-.422M22.138 118.693l-.145 1.112.843.681"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={23.918}
        cy={117.655}
        rx={0.023}
        ry={0.035}
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="m24.925 117.128-.079 1.362.632-.79z"
        style={{
          fill: "#c7bd0c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M21.615 118.155c.234.265.479.45.742.502.305-.281.335-.578.092-.89-.299-.016-.564.198-.834.388zM21.694 117.227c.234.265.479.45.742.502.305-.281.335-.578.092-.89-.299-.016-.564.198-.834.388z"
        style={{
          fill: "#c7bd0c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.0976386,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M21.609 118.145h-.277M21.717 117.197l-.177.04"
        style={{
          fill: "#14ff00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M18.131 117.73c.01 1.54 3.239.7 3.171 1.445-1.108-.126-4.093.172-3.632-1.443-.134-1.795 3.213-1.802 4.199-1.846-.24.787-4.188.665-3.738 1.844z"
        style={{
          fill: "#d70460",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <g transform="matrix(-.12356 1.3431 -1.3431 -.12356 194.218 356.953)">
      <path
        d="M20.662 117.458h.661v.48h-.661z"
        style={{
          fill: "#d38d5f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={19.331}
        cy={117.707}
        rx={1.472}
        ry={0.992}
        style={{
          fill: "#d38d5f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={18.943}
        cy={118.252}
        rx={0.223}
        ry={0.331}
        style={{
          fill: "#06022d",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={19.025}
        cy={117.177}
        rx={0.223}
        ry={0.331}
        style={{
          fill: "#06022d",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M19.033 117.93v-.447M20.166 117.971c.226-.311-.022-.762-.25-.69"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M24.954 117.467c0 .23.121.79-.096.968-.375.308-.602.093-1.33.19-1.153.154-2.308.13-2.295-.844.014-1.083.975-1.005 2.39-.79 1.147.174 1.33-.15 1.33.476z"
        style={{
          fill: "#d38d5f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="m25.03 118.316 2.206.267M25.09 117.276l2.112-.148M22.326 116.875l.354-.9-1.37-.721M22.138 118.693l.11 1.353-.91.48"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={23.918}
        cy={117.655}
        rx={0.023}
        ry={0.035}
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="m24.925 117.128-.079 1.362.632-.79z"
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M21.615 118.155c.234.265.479.45.742.502.305-.281.335-.578.092-.89-.299-.016-.564.198-.834.388zM21.694 117.227c.234.265.479.45.742.502.305-.281.335-.578.092-.89-.299-.016-.564.198-.834.388z"
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.0976386,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M21.609 118.145h-.277M21.717 117.197l-.292.001"
        style={{
          fill: "#14ff00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M18.131 117.73c.01 1.54 3.239.7 3.171 1.445-1.108-.126-4.093.172-3.632-1.443-.134-1.795 3.213-1.802 4.199-1.846-.24.787-4.188.665-3.738 1.844z"
        style={{
          fill: "#38f700",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.084417,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <path
      d="M32.974 349.25v7.304"
      style={{
        fill: "#964c00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.4,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <g transform="translate(12.897 -11.146)">
      <ellipse
        cx={19.877}
        cy={360.098}
        rx={2.414}
        ry={1.058}
        style={{
          fill: "#964c00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="M17.462 360.098v3.369M19.677 361.123v3.369M22.291 360.098v3.369"
        style={{
          fill: "#964c00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
    </g>
    <ellipse
      cx={32.974}
      cy={353.12}
      rx={9.161}
      ry={3.87}
      style={{
        fill: "#964c00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.4,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="M23.812 353.12v7.304M32.974 357.048v7.305M42.135 353.12v7.304"
      style={{
        fill: "#964c00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.4,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <g transform="translate(-.265 -3.043)">
      <ellipse
        cx={19.877}
        cy={360.098}
        rx={2.414}
        ry={1.058}
        style={{
          fill: "#964c00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="M17.462 360.098v3.369M19.677 361.123v3.369M22.291 360.098v3.369"
        style={{
          fill: "#964c00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
    </g>
    <g transform="translate(24.92 -2.926)">
      <ellipse
        cx={19.877}
        cy={360.098}
        rx={2.414}
        ry={1.058}
        style={{
          fill: "#964c00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="M17.462 360.098v3.369M19.677 361.123v3.369M22.291 360.098v3.369"
        style={{
          fill: "#964c00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
    </g>
    <path
      d="m30.857 362.082-.546-.81-.182 3.06M33.238 362l-.793-.81-.05 3.207"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <g transform="translate(12.065 2.602)">
      <ellipse
        cx={19.877}
        cy={360.098}
        rx={2.414}
        ry={1.058}
        style={{
          fill: "#964c00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="M17.462 360.098v3.369M19.677 361.123v3.369M22.291 360.098v3.369"
        style={{
          fill: "#964c00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
    </g>
    <g transform="translate(-.265 -3.043)">
      <path
        d="M19.584 353.409h.868v1.757h-.868z"
        style={{
          fill: "#d38d5f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.326898,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <ellipse
        cx={20.089}
        cy={357.059}
        rx={1.614}
        ry={2.713}
        style={{
          fill: "#d38d5f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <ellipse
        cx={19.972}
        cy={352.475}
        rx={1.216}
        ry={1.38}
        style={{
          fill: "#d38d5f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="M18.885 358.775s-.298 1.356.595 1.885c.893.53 1.554.364 1.554.364l.926-.661-.463-.43 1.125.297.794-.926-1.852-.727z"
        style={{
          fill: "#8bd35f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="m21.445 360.754 1.216.514-.795 2.807M23.27 359.748l1.122.608-1.24 2.666M18.389 356.394l-2.415-2.415M21.53 355.666l3.142.066"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="M19.469 352.802c.111.091.15.362.273.408.223.084.51-.104.51-.104z"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <ellipse
        cx={19.557}
        cy={351.972}
        rx={0.123}
        ry={0.094}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <ellipse
        cx={20.41}
        cy={351.972}
        rx={0.123}
        ry={0.094}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <ellipse
        cx={20.144}
        cy={357.967}
        rx={0.097}
        ry={0.079}
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.0519137,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
    </g>
    <path
      d="m15.022 351.172.484-.987c.137-.16.218-.155.347-.182l.284-.477.128.07-.2.52c.032.092.053.095.036.33l-.5 1.021c-.228.044-.436.01-.578-.295z"
      style={{
        fill: "#1c9e00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="M31.733 355.898h.661v1.273h-.661z"
      style={{
        fill: "#d38d5f",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.3,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <ellipse
      cx={31.985}
      cy={359.395}
      rx={1.614}
      ry={2.713}
      style={{
        fill: "#d38d5f",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.4,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <g transform="matrix(-1 0 0 1 64.613 -2.95)">
      <path
        d="M19.584 353.409h.868v1.757h-.868z"
        style={{
          fill: "#925228",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.326898,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <ellipse
        cx={20.089}
        cy={357.059}
        rx={1.614}
        ry={2.713}
        style={{
          fill: "#925228",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <ellipse
        cx={19.972}
        cy={352.475}
        rx={1.216}
        ry={1.38}
        style={{
          fill: "#925228",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="M18.885 358.775s-.298 1.356.595 1.885c.893.53 1.554.364 1.554.364l.926-.661-.463-.43 1.125.297.794-.926-1.852-.727z"
        style={{
          fill: "#d35f5f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="m21.445 360.754 1.216.514-.795 2.807M23.27 359.748l1.122.608-1.24 2.666M18.389 356.394l-2.415-2.415M21.53 355.666l1.442-1.47.262-1.705"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="M19.469 352.802c.111.091.15.362.273.408.223.084.51-.104.51-.104z"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <ellipse
        cx={19.557}
        cy={351.972}
        rx={0.123}
        ry={0.094}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <ellipse
        cx={20.41}
        cy={351.972}
        rx={0.123}
        ry={0.094}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <ellipse
        cx={20.144}
        cy={357.967}
        rx={0.097}
        ry={0.079}
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.0519137,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="m24.314 351.323-.083.43-.215 1.34-1.058-.034-.182-1.373-.116-.413"
        style={{
          fill: "#c4efdb",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
    </g>
    <path
      d="m30.675 361.242 2.62-.163s.56.725.163 1.192c-.397.468-2.292.772-2.9.328-.608-.445.117-1.357.117-1.357z"
      style={{
        fill: "#3c6a9a",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.3,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <ellipse
      cx={31.948}
      cy={354.972}
      rx={1.224}
      ry={1.323}
      style={{
        fill: "#d38d5f",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.3,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="m30.857 357.32-1.869-3.622M33.453 357.816l1.62.727"
      style={{
        fill: "#d38d5f",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.3,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="m34.597 358.75.483-.988c.137-.16.218-.155.347-.182l.284-.477.128.07-.2.52c.032.092.053.095.036.33l-.5 1.021c-.228.044-.436.01-.578-.295z"
      style={{
        fill: "#1c9e00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="M65.914 363.273v7.304"
      style={{
        fill: "#964c00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.4,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <g transform="translate(45.837 2.877)">
      <ellipse
        cx={19.877}
        cy={360.098}
        rx={2.414}
        ry={1.058}
        style={{
          fill: "#964c00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="M17.462 360.098v3.369M19.677 361.123v3.369M22.291 360.098v3.369"
        style={{
          fill: "#964c00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
    </g>
    <ellipse
      cx={65.914}
      cy={367.142}
      rx={9.161}
      ry={3.87}
      style={{
        fill: "#964c00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.4,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="M56.753 367.142v7.305M65.914 371.071v7.305M75.076 367.142v7.305"
      style={{
        fill: "#964c00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.4,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <g transform="translate(32.676 10.98)">
      <ellipse
        cx={19.877}
        cy={360.098}
        rx={2.414}
        ry={1.058}
        style={{
          fill: "#964c00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="M17.462 360.098v3.369M19.677 361.123v3.369M22.291 360.098v3.369"
        style={{
          fill: "#964c00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
    </g>
    <g transform="translate(57.861 11.097)">
      <ellipse
        cx={19.877}
        cy={360.098}
        rx={2.414}
        ry={1.058}
        style={{
          fill: "#964c00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="M17.462 360.098v3.369M19.677 361.123v3.369M22.291 360.098v3.369"
        style={{
          fill: "#964c00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
    </g>
    <path
      d="m63.798 376.105-.546-.81-.182 3.06M66.179 376.023l-.794-.81-.05 3.207"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <g transform="translate(45.005 16.625)">
      <ellipse
        cx={19.877}
        cy={360.098}
        rx={2.414}
        ry={1.058}
        style={{
          fill: "#964c00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="M17.462 360.098v3.369M19.677 361.123v3.369M22.291 360.098v3.369"
        style={{
          fill: "#964c00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
    </g>
    <g transform="translate(32.676 10.98)">
      <path
        d="M19.584 353.409h.868v1.757h-.868z"
        style={{
          fill: "#d38d5f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.326898,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <ellipse
        cx={20.089}
        cy={357.059}
        rx={1.614}
        ry={2.713}
        style={{
          fill: "#d38d5f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <ellipse
        cx={19.972}
        cy={352.475}
        rx={1.216}
        ry={1.38}
        style={{
          fill: "#d38d5f",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="M18.885 358.775s-.298 1.356.595 1.885c.893.53 1.554.364 1.554.364l.926-.661-.463-.43 1.125.297.794-.926-1.852-.727z"
        style={{
          fill: "#5fd3d0",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="m21.445 360.754 1.216.514-.795 2.807M23.27 359.748l1.122.608-1.24 2.666M18.818 355.468l1.125.132 1.852-3.109M21.53 355.666l1.358-1.393-.96-1.749"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="M19.469 352.802c.111.091.15.362.273.408.223.084.51-.104.51-.104z"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <ellipse
        cx={19.557}
        cy={351.972}
        rx={0.123}
        ry={0.094}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <ellipse
        cx={20.41}
        cy={351.972}
        rx={0.123}
        ry={0.094}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <ellipse
        cx={20.144}
        cy={357.967}
        rx={0.097}
        ry={0.079}
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.0519137,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
    </g>
    <path
      d="m54.676 363.55-1.01.433c-.208.031-.266-.025-.382-.088l-.526.176-.051-.137.49-.263c.036-.09.021-.107.188-.274l1.045-.448c.201.115.336.277.246.6z"
      style={{
        fill: "#1c9e00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="M64.674 369.921h.661v1.273h-.661z"
      style={{
        fill: "#d38d5f",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.3,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <ellipse
      cx={64.925}
      cy={373.418}
      rx={1.614}
      ry={2.713}
      style={{
        fill: "#d38d5f",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.4,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <g transform="matrix(-1 0 0 1 97.554 11.074)">
      <path
        d="M19.584 353.409h.868v1.757h-.868z"
        style={{
          fill: "#925228",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.326898,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <ellipse
        cx={20.089}
        cy={357.059}
        rx={1.614}
        ry={2.713}
        style={{
          fill: "#925228",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <ellipse
        cx={19.972}
        cy={352.475}
        rx={1.216}
        ry={1.38}
        style={{
          fill: "#925228",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="M18.885 358.775s-.298 1.356.595 1.885c.893.53 1.554.364 1.554.364l.926-.661-.463-.43 1.125.297.794-.926-1.852-.727z"
        style={{
          fill: "#09f50d",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="m21.445 360.754 1.216.514-.795 2.807M23.27 359.748l1.122.608-1.24 2.666M18.885 355.335l1.446.275.869-2.689M21.53 355.666l1.442-1.47-.598-1.374"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.4,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="M19.469 352.802c.111.091.15.362.273.408.223.084.51-.104.51-.104z"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <ellipse
        cx={19.557}
        cy={351.972}
        rx={0.123}
        ry={0.094}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <ellipse
        cx={20.41}
        cy={351.972}
        rx={0.123}
        ry={0.094}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <ellipse
        cx={20.144}
        cy={357.967}
        rx={0.097}
        ry={0.079}
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.0519137,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="m20.695 351.377.417.132 1.305.37-.157 1.048-1.384.02-.424.066"
        style={{
          fill: "#c4efdb",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
    </g>
    <path
      d="m63.616 375.265 2.62-.163s.56.724.163 1.192c-.398.468-2.292.772-2.9.328-.608-.445.117-1.357.117-1.357z"
      style={{
        fill: "#ff00a3",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.3,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="m64.295 366.405.274 1.064c0 .21-.064.26-.145.364l.094.547-.142.03-.186-.524c-.084-.05-.102-.038-.243-.228l-.283-1.101c.144-.182.325-.29.631-.152z"
      style={{
        fill: "#1c9e00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="m66.394 371.839 1.078-1.743-2.897-2.656"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.3,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <ellipse
      cx={64.889}
      cy={368.995}
      rx={1.224}
      ry={1.323}
      style={{
        fill: "#d38d5f",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.3,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="m63.798 371.343-1.33-1.196 1.346-2.624"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.3,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <g transform="matrix(.04253 .74966 -.9761 .03266 152.616 225.273)">
      <path
        d="M20.662 117.458h.661v.48h-.661z"
        style={{
          fill: "#fa9a5a",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={19.331}
        cy={117.707}
        rx={1.472}
        ry={0.992}
        style={{
          fill: "#fa9a5a",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M20.362 117.772c.039-.115-.115-.393-.223-.356-.053.018-.046.235-.095.343-.014.212.281.12.318.013z"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.125962,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M24.954 117.467c0 .23.121.79-.096.968-.375.308-.79.479-1.525.479-1.16 0-2.1-.507-2.1-1.133s.94-1.133 2.1-1.133c1.16 0 1.62.193 1.62.819z"
        style={{
          fill: "#fa9a5a",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="m24.788 116.896-.165 1.77 1.193.013.024-.548-.49-.342.423-.395.121-.508z"
        style={{
          fill: "#05d3b5",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="m25.83 118.434 1.406.149M25.834 117.14l1.368-.012"
        style={{
          fill: "#d35fc6",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="m21.925 116.978 1.226-.722-.906-1.04M22.102 118.739l1.14-.437-.154-1.099"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={23.918}
        cy={117.655}
        rx={0.023}
        ry={0.035}
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={-117.198}
        cy={24.066}
        rx={0.091}
        ry={0.094}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.0222066,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
        transform="rotate(-87.505)"
      />
      <ellipse
        cx={-116.272}
        cy={24.056}
        rx={0.091}
        ry={0.094}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.0222066,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
        transform="rotate(-87.505)"
      />
    </g>
    <g transform="matrix(-.04253 .74966 .9761 .03266 -56.83 225.033)">
      <path
        d="M20.662 117.458h.661v.48h-.661z"
        style={{
          fill: "#fa9a5a",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={19.331}
        cy={117.707}
        rx={1.472}
        ry={0.992}
        style={{
          fill: "#fa9a5a",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M20.362 117.772c.039-.115-.115-.393-.223-.356-.053.018-.046.235-.095.343-.014.212.281.12.318.013z"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.125962,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M24.954 117.467c0 .23.121.79-.096.968-.375.308-.79.479-1.525.479-1.16 0-2.1-.507-2.1-1.133s.94-1.133 2.1-1.133c1.16 0 1.62.193 1.62.819z"
        style={{
          fill: "#fa9a5a",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="m24.788 116.896-.165 1.77 1.193.013.024-.548-.49-.342.423-.395.121-.508z"
        style={{
          fill: "#05d3b5",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="m25.83 118.434 1.406.149M25.834 117.14l1.368-.012"
        style={{
          fill: "#d35fc6",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="m22.276 116.802.802-1.028-.959-.539M22.102 118.739l-.019 1.118-1.376.453"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={23.918}
        cy={117.655}
        rx={0.023}
        ry={0.035}
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={-117.198}
        cy={24.066}
        rx={0.091}
        ry={0.094}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.0222066,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
        transform="rotate(-87.505)"
      />
      <ellipse
        cx={-116.272}
        cy={24.056}
        rx={0.091}
        ry={0.094}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.0222066,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
        transform="rotate(-87.505)"
      />
    </g>
    <g transform="matrix(-.04253 .74966 .9761 .03266 -65.388 221.202)">
      <path
        d="M20.662 117.458h.661v.48h-.661z"
        style={{
          fill: "#fa9a5a",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={19.331}
        cy={117.707}
        rx={1.472}
        ry={0.992}
        style={{
          fill: "#fa9a5a",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M20.362 117.772c.039-.115-.115-.393-.223-.356-.053.018-.046.235-.095.343-.014.212.281.12.318.013z"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.125962,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M24.954 117.467c0 .23.121.79-.096.968-.375.308-.79.479-1.525.479-1.16 0-2.1-.507-2.1-1.133s.94-1.133 2.1-1.133c1.16 0 1.62.193 1.62.819z"
        style={{
          fill: "#fa9a5a",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="m24.788 116.896-.165 1.77 1.193.013.024-.548-.49-.342.423-.395.121-.508z"
        style={{
          fill: "#05d3b5",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="m25.83 118.434 1.406.149M25.834 117.14l1.368-.012"
        style={{
          fill: "#d35fc6",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="m22.276 116.802.802-1.028-.959-.539M22.102 118.739l-.019 1.118-1.376.453"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={23.918}
        cy={117.655}
        rx={0.023}
        ry={0.035}
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={-117.198}
        cy={24.066}
        rx={0.091}
        ry={0.094}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.0222066,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
        transform="rotate(-87.505)"
      />
      <ellipse
        cx={-116.272}
        cy={24.056}
        rx={0.091}
        ry={0.094}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.0222066,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
        transform="rotate(-87.505)"
      />
    </g>
    <circle
      cx={41.418}
      cy={248.639}
      r={0.761}
      style={{
        fill: "#fe1300",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <g transform="matrix(.0671 1.1828 -1.54008 .05153 183.548 190.866)">
      <path
        d="M20.662 117.458h.661v.48h-.661z"
        style={{
          fill: "#e56227",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={19.331}
        cy={117.707}
        rx={1.472}
        ry={0.992}
        style={{
          fill: "#e56227",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M19.97 118.073c.157-.264.269-.65.149-.628"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.125962,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M24.954 117.467c0 .23.121.79-.096.968-.375.308-.79.479-1.525.479-1.16 0-2.1-.507-2.1-1.133s.94-1.133 2.1-1.133c1.16 0 1.62.193 1.62.819z"
        style={{
          fill: "#e56227",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="m24.788 116.896-.165 1.77 1.193.013.024-.548-.49-.342.423-.395.121-.508z"
        style={{
          fill: "#3605d3",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="m25.83 118.434 1.406.149M25.834 117.14l1.368-.012"
        style={{
          fill: "#d35fc6",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="m22.276 116.802.802-1.028.809.91M22.102 118.739l1.272.77.92-1.29"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={23.918}
        cy={117.655}
        rx={0.023}
        ry={0.035}
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={-117.198}
        cy={24.066}
        rx={0.091}
        ry={0.094}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.0222066,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
        transform="rotate(-87.505)"
      />
      <ellipse
        cx={-116.272}
        cy={24.056}
        rx={0.091}
        ry={0.094}
        style={{
          fill: "#000",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.0222066,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
        transform="rotate(-87.505)"
      />
      <path
        d="m24.32 118.184.183.131c.636-.63 1.518-1.116 2.11-1.593-.413.15-.828.306-1.25.638-.068-.002-.027-.183-.02-.345-.066.14-.18.214-.167.46-.358.222-.582.47-.856.709zM18.313 118.443s4.99-.103 5.044.062c.054.165-3.78.291-3.78.291s3.601-.034 3.652.151c.05.186-3.897.036-3.897.036s3.487.193 3.455.355c-.032.162-3.802.004-4.338-.202-.537-.206-1.039-.872-1.013-1.14.025-.267.013-.944.288-1.168.276-.224.928-.743 1.405-.798.478-.054 3.421.166 3.468.302.047.135-2.25-.012-2.25-.012s2.098.097 2.004.216c-.094.119-1.874.015-1.874.015s1.492.12 1.484.269c-.008.148-2.21-.29-2.505-.26-.295.03-1.123.424-1.123.424"
        style={{
          fill: "#6d2b0d",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.074022,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M18.193 118.577s.358-.5.317-.845c-.04-.345-.212-.922-.212-.922"
        style={{
          fill: "#6d2b0d",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.074022,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <g transform="matrix(-.04253 .74966 .9761 .03266 -65.436 229.43)">
      <path
        d="M20.662 117.458h.661v.48h-.661z"
        style={{
          fill: "#fa9a5a",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={19.331}
        cy={117.707}
        rx={1.472}
        ry={0.992}
        style={{
          fill: "#fa9a5a",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M24.954 117.467c0 .23.121.79-.096.968-.375.308-.79.479-1.525.479-1.16 0-2.1-.507-2.1-1.133s.94-1.133 2.1-1.133c1.16 0 1.62.193 1.62.819z"
        style={{
          fill: "#fa9a5a",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="m24.788 116.896-.165 1.77 1.193.013.024-.548-.49-.342.423-.395.121-.508z"
        style={{
          fill: "#05d3b5",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="m25.83 118.434 1.406.149M25.834 117.14l1.368-.012"
        style={{
          fill: "#d35fc6",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="m22.276 116.802.802-1.028-.959-.539M22.102 118.739l-.019 1.118-1.376.453"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={75.161}
        cy={6.45}
        rx={3.327}
        ry={1.169}
        style={{
          fill: "#0f0e0e",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.11679,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
        transform="scale(-1 1) rotate(87.505)"
      />
      <path
        d="M3.866 70.561c.92.092 1.493-.086 1.905.658.16.72.018 1.188-.465 1.37-.663.501-1.031.384-1.701.38-.567-.357-.563-.62-.786-1.28.159-.56.245-.911 1.047-1.128Z"
        style={{
          fill: "#3e3e3e",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.11679,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="M4.593 72.485c.92.093 1.493-.085 1.906.658.159.72.017 1.189-.466 1.37-.663.502-1.03.385-1.7.38-.568-.357-.564-.62-.787-1.28.159-.56.246-.91 1.047-1.128ZM2.58 77.86c.92.093 1.494-.085 1.906.658.16.72.018 1.188-.465 1.37-.663.502-1.031.384-1.701.38-.567-.357-.563-.62-.787-1.28.16-.56.246-.91 1.048-1.128Z"
        style={{
          fill: "#3e3e3e",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.11679,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="M4.115 76.298c.92.092 1.493-.086 1.906.658.159.72.017 1.188-.466 1.37-.663.501-1.03.384-1.7.38-.568-.357-.564-.62-.787-1.28.159-.56.246-.911 1.047-1.128Z"
        style={{
          fill: "#3e3e3e",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.11679,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="M4.855 74.342c.92.092 1.493-.086 1.906.658.16.72.017 1.188-.465 1.37-.664.501-1.032.384-1.701.38-.568-.357-.563-.62-.787-1.28.16-.56.246-.912 1.047-1.128Z"
        style={{
          fill: "#3e3e3e",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.11679,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="M3.003 72.835c-1.556-.81-6.085-1.043-6.085-1.043.955.675 1.884.945 2.816 1.248-1.79-.2-3.927-.12-6.276.134a18.709 18.709 0 0 0 3.464 1.397c-2.076-.044-4.19.155-6.323.491 2.363.734 4.862 1.05 7.366 1.351-.77.016-1.536-.071-2.318.21 1.21.51 2.569.54 3.866.768-1.172.048-1.36.27-1.612.481 1.595.564 3.428.014 4.777-.45"
        style={{
          fill: "#ba0400",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.11679,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="M2.645 74.243c-.55-.268-1.28-.41-2.042-.53.153.323.344.518.566.618-.485-.139-.978-.098-1.471-.037.31.286.625.488.94.662-.728-.024-1.515.107-2.31.258.764.227 1.534.46 2.132.548-.17.03-.38.092-.73.271.529.154 1.032.085 1.541.068-.253.052-.381.175-.463.324.648.077 1.14-.029 1.653-.109"
        style={{
          fill: "#e4e41e",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.134456,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
    </g>
    <g transform="matrix(1.40595 0 0 .99938 -19.577 -6.066)" className="palm">
      <path
        d="M55.097 47.542c-1.032-7.092-1.945-14.327-1.749-22.893l2.47.047c1.55 7.217 1.507 15.046 1.476 22.871z"
        style={{
          fill: "#802d00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M52.996 24.504s.674.885 1.415.911c.74.027 1.414-.857 1.414-.857 3.36-.662 4.52 1.544 5.338 3.242-.44-2.185.167-3.176-3.537-5.144 2.18-1.377 4.359.15 6.538 1.393-1.565-2.738-3.86-3.783-6.565-3.108-.482-1.138 3.09-2.649 6.297-2.68-1.068-.563-5.552-1.704-7.824 1.286-.285-2.549-1.817-4.344-5.172-5.037.911 1.72 2.895 2.433 1.662 5.76-1.653-1.88-7.091-1.109-8.87 2.064 2.587-1.524 5.328-1.5 8.602.188-3.856-.7-6.433 3.501-7.235 6.002 3.188-3.588 7.077-4.132 7.937-4.02z"
        style={{
          fill: "#004e00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.114578,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.174}
        cy={24.121}
        rx={0.702}
        ry={0.748}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={53.486}
        cy={24.856}
        rx={0.76}
        ry={0.9}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.71}
        cy={24.076}
        rx={0.772}
        ry={0.69}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.706}
        cy={24.906}
        rx={0.889}
        ry={0.865}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.607}
        cy={24.894}
        rx={0.935}
        ry={0.877}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <path
      d="M53.271 26.855c.936 2.153 1.904 4.295 3.703 6.188M53.423 31.58c1.063 2.252 2.196 4.062 3.788 5.873M53.888 37.99c.974 1.332 2.204 2.283 3.42 3.252"
      style={{
        fill: "#802d00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -19.577 -6.066)"
    />
    <path
      d="M56.552 28.965c-1.39 1.618-2.222 2.037-3.129 2.614M57.098 34.926a6.482 6.482 0 0 1-3.331 1.778M57.258 39.194c-.806.44-1.218.88-3.099 1.318"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -19.577 -6.066)"
    />
    <path
      d="M50.46 47.542c.389-.866-.552-1.544-1.091-2.29.921.616 1.757 1.335 1.97 2.29zM55.191 47.617c-.253-1.292.337-1.461.693-1.942-.535.228-1.2.344-1.325.923l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -15.303 -6.066)"
    />
    <path
      d="M53.671 47.542c.168-2.35 1.252-2.802 2.093-3.249-1.004 1.243-1.772 1.342-.959 3.3z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -15.303 -6.066)"
    />
    <path
      d="M53.11 46.347c.272-2.114 1.29-3.243 2.35-3.837-.83 1.146-1.83 3.392-1.11 5.032h-1.357z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -15.303 -6.066)"
    />
    <path
      d="M51.738 45.967c-.199-1.24-1.214-3.568-1.214-3.568.664.577 1.738 1.029 2.877 5.143h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -15.303 -6.066)"
    />
    <path
      d="M50.9 47.542c.52-.999-.108-2.603-1.258-4.481 1.673 1.203 2.109 2.849 2.58 4.481z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -15.303 -6.066)"
    />
    <g transform="matrix(1.40595 0 0 .99938 -70.24 13.636)">
      <path
        d="M55.097 47.542c-1.032-7.092-1.945-14.327-1.749-22.893l2.47.047c1.55 7.217 1.507 15.046 1.476 22.871z"
        style={{
          fill: "#802d00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M52.996 24.504s.674.885 1.415.911c.74.027 1.414-.857 1.414-.857 3.36-.662 4.52 1.544 5.338 3.242-.44-2.185.167-3.176-3.537-5.144 2.18-1.377 4.359.15 6.538 1.393-1.565-2.738-3.86-3.783-6.565-3.108-.482-1.138 3.09-2.649 6.297-2.68-1.068-.563-5.552-1.704-7.824 1.286-.285-2.549-1.817-4.344-5.172-5.037.911 1.72 2.895 2.433 1.662 5.76-1.653-1.88-7.091-1.109-8.87 2.064 2.587-1.524 5.328-1.5 8.602.188-3.856-.7-6.433 3.501-7.235 6.002 3.188-3.588 7.077-4.132 7.937-4.02z"
        style={{
          fill: "#004e00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.114578,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.174}
        cy={24.121}
        rx={0.702}
        ry={0.748}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={53.486}
        cy={24.856}
        rx={0.76}
        ry={0.9}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.71}
        cy={24.076}
        rx={0.772}
        ry={0.69}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.706}
        cy={24.906}
        rx={0.889}
        ry={0.865}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.607}
        cy={24.894}
        rx={0.935}
        ry={0.877}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <path
      d="M53.271 26.855c.936 2.153 1.904 4.295 3.703 6.188M53.423 31.58c1.063 2.252 2.196 4.062 3.788 5.873M53.888 37.99c.974 1.332 2.204 2.283 3.42 3.252"
      style={{
        fill: "#802d00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -70.24 13.636)"
    />
    <path
      d="M56.552 28.965c-1.39 1.618-2.222 2.037-3.129 2.614M57.098 34.926a6.482 6.482 0 0 1-3.331 1.778M57.258 39.194c-.806.44-1.218.88-3.099 1.318"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -70.24 13.636)"
    />
    <path
      d="M50.46 47.542c.389-.866-.552-1.544-1.091-2.29.921.616 1.757 1.335 1.97 2.29zM55.191 47.617c-.253-1.292.337-1.461.693-1.942-.535.228-1.2.344-1.325.923l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -65.966 13.636)"
    />
    <path
      d="M53.671 47.542c.168-2.35 1.252-2.802 2.093-3.249-1.004 1.243-1.772 1.342-.959 3.3z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -65.966 13.636)"
    />
    <path
      d="M53.11 46.347c.272-2.114 1.29-3.243 2.35-3.837-.83 1.146-1.83 3.392-1.11 5.032h-1.357z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -65.966 13.636)"
    />
    <path
      d="M51.738 45.967c-.199-1.24-1.214-3.568-1.214-3.568.664.577 1.738 1.029 2.877 5.143h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -65.966 13.636)"
    />
    <path
      d="M50.9 47.542c.52-.999-.108-2.603-1.258-4.481 1.673 1.203 2.109 2.849 2.58 4.481z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -65.966 13.636)"
    />
    <g transform="matrix(1.40595 0 0 .99938 -8.516 41.871)">
      <path
        d="M55.097 47.542c-1.032-7.092-1.945-14.327-1.749-22.893l2.47.047c1.55 7.217 1.507 15.046 1.476 22.871z"
        style={{
          fill: "#802d00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M52.996 24.504s.674.885 1.415.911c.74.027 1.414-.857 1.414-.857 3.36-.662 4.52 1.544 5.338 3.242-.44-2.185.167-3.176-3.537-5.144 2.18-1.377 4.359.15 6.538 1.393-1.565-2.738-3.86-3.783-6.565-3.108-.482-1.138 3.09-2.649 6.297-2.68-1.068-.563-5.552-1.704-7.824 1.286-.285-2.549-1.817-4.344-5.172-5.037.911 1.72 2.895 2.433 1.662 5.76-1.653-1.88-7.091-1.109-8.87 2.064 2.587-1.524 5.328-1.5 8.602.188-3.856-.7-6.433 3.501-7.235 6.002 3.188-3.588 7.077-4.132 7.937-4.02z"
        style={{
          fill: "#004e00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.114578,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.174}
        cy={24.121}
        rx={0.702}
        ry={0.748}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={53.486}
        cy={24.856}
        rx={0.76}
        ry={0.9}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.71}
        cy={24.076}
        rx={0.772}
        ry={0.69}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.706}
        cy={24.906}
        rx={0.889}
        ry={0.865}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.607}
        cy={24.894}
        rx={0.935}
        ry={0.877}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <path
      d="M53.271 26.855c.936 2.153 1.904 4.295 3.703 6.188M53.423 31.58c1.063 2.252 2.196 4.062 3.788 5.873M53.888 37.99c.974 1.332 2.204 2.283 3.42 3.252"
      style={{
        fill: "#802d00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -8.516 41.871)"
    />
    <path
      d="M56.552 28.965c-1.39 1.618-2.222 2.037-3.129 2.614M57.098 34.926a6.482 6.482 0 0 1-3.331 1.778M57.258 39.194c-.806.44-1.218.88-3.099 1.318"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -8.516 41.871)"
    />
    <path
      d="M50.46 47.542c.389-.866-.552-1.544-1.091-2.29.921.616 1.757 1.335 1.97 2.29zM55.191 47.617c-.253-1.292.337-1.461.693-1.942-.535.228-1.2.344-1.325.923l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -4.241 41.871)"
    />
    <path
      d="M53.671 47.542c.168-2.35 1.252-2.802 2.093-3.249-1.004 1.243-1.772 1.342-.959 3.3z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -4.241 41.871)"
    />
    <path
      d="M53.11 46.347c.272-2.114 1.29-3.243 2.35-3.837-.83 1.146-1.83 3.392-1.11 5.032h-1.357z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -4.241 41.871)"
    />
    <path
      d="M51.738 45.967c-.199-1.24-1.214-3.568-1.214-3.568.664.577 1.738 1.029 2.877 5.143h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -4.241 41.871)"
    />
    <path
      d="M50.9 47.542c.52-.999-.108-2.603-1.258-4.481 1.673 1.203 2.109 2.849 2.58 4.481z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -4.241 41.871)"
    />
    <g transform="matrix(1.40595 0 0 .99938 -21.986 57.587)">
      <path
        d="M55.097 47.542c-1.032-7.092-1.945-14.327-1.749-22.893l2.47.047c1.55 7.217 1.507 15.046 1.476 22.871z"
        style={{
          fill: "#802d00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M52.996 24.504s.674.885 1.415.911c.74.027 1.414-.857 1.414-.857 3.36-.662 4.52 1.544 5.338 3.242-.44-2.185.167-3.176-3.537-5.144 2.18-1.377 4.359.15 6.538 1.393-1.565-2.738-3.86-3.783-6.565-3.108-.482-1.138 3.09-2.649 6.297-2.68-1.068-.563-5.552-1.704-7.824 1.286-.285-2.549-1.817-4.344-5.172-5.037.911 1.72 2.895 2.433 1.662 5.76-1.653-1.88-7.091-1.109-8.87 2.064 2.587-1.524 5.328-1.5 8.602.188-3.856-.7-6.433 3.501-7.235 6.002 3.188-3.588 7.077-4.132 7.937-4.02z"
        style={{
          fill: "#004e00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.114578,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.174}
        cy={24.121}
        rx={0.702}
        ry={0.748}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={53.486}
        cy={24.856}
        rx={0.76}
        ry={0.9}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.71}
        cy={24.076}
        rx={0.772}
        ry={0.69}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.706}
        cy={24.906}
        rx={0.889}
        ry={0.865}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.607}
        cy={24.894}
        rx={0.935}
        ry={0.877}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <path
      d="M53.271 26.855c.936 2.153 1.904 4.295 3.703 6.188M53.423 31.58c1.063 2.252 2.196 4.062 3.788 5.873M53.888 37.99c.974 1.332 2.204 2.283 3.42 3.252"
      style={{
        fill: "#802d00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -21.986 57.587)"
    />
    <path
      d="M56.552 28.965c-1.39 1.618-2.222 2.037-3.129 2.614M57.098 34.926a6.482 6.482 0 0 1-3.331 1.778M57.258 39.194c-.806.44-1.218.88-3.099 1.318"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -21.986 57.587)"
    />
    <path
      d="M50.46 47.542c.389-.866-.552-1.544-1.091-2.29.921.616 1.757 1.335 1.97 2.29zM55.191 47.617c-.253-1.292.337-1.461.693-1.942-.535.228-1.2.344-1.325.923l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -17.712 57.587)"
    />
    <path
      d="M53.671 47.542c.168-2.35 1.252-2.802 2.093-3.249-1.004 1.243-1.772 1.342-.959 3.3z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -17.712 57.587)"
    />
    <path
      d="M53.11 46.347c.272-2.114 1.29-3.243 2.35-3.837-.83 1.146-1.83 3.392-1.11 5.032h-1.357z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -17.712 57.587)"
    />
    <path
      d="M51.738 45.967c-.199-1.24-1.214-3.568-1.214-3.568.664.577 1.738 1.029 2.877 5.143h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -17.712 57.587)"
    />
    <path
      d="M50.9 47.542c.52-.999-.108-2.603-1.258-4.481 1.673 1.203 2.109 2.849 2.58 4.481z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -17.712 57.587)"
    />
    <g transform="matrix(1.40595 0 0 .99938 -7.393 61.329)">
      <path
        d="M55.097 47.542c-1.032-7.092-1.945-14.327-1.749-22.893l2.47.047c1.55 7.217 1.507 15.046 1.476 22.871z"
        style={{
          fill: "#802d00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M52.996 24.504s.674.885 1.415.911c.74.027 1.414-.857 1.414-.857 3.36-.662 4.52 1.544 5.338 3.242-.44-2.185.167-3.176-3.537-5.144 2.18-1.377 4.359.15 6.538 1.393-1.565-2.738-3.86-3.783-6.565-3.108-.482-1.138 3.09-2.649 6.297-2.68-1.068-.563-5.552-1.704-7.824 1.286-.285-2.549-1.817-4.344-5.172-5.037.911 1.72 2.895 2.433 1.662 5.76-1.653-1.88-7.091-1.109-8.87 2.064 2.587-1.524 5.328-1.5 8.602.188-3.856-.7-6.433 3.501-7.235 6.002 3.188-3.588 7.077-4.132 7.937-4.02z"
        style={{
          fill: "#004e00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.114578,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.174}
        cy={24.121}
        rx={0.702}
        ry={0.748}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={53.486}
        cy={24.856}
        rx={0.76}
        ry={0.9}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.71}
        cy={24.076}
        rx={0.772}
        ry={0.69}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.706}
        cy={24.906}
        rx={0.889}
        ry={0.865}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.607}
        cy={24.894}
        rx={0.935}
        ry={0.877}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <path
      d="M53.271 26.855c.936 2.153 1.904 4.295 3.703 6.188M53.423 31.58c1.063 2.252 2.196 4.062 3.788 5.873M53.888 37.99c.974 1.332 2.204 2.283 3.42 3.252"
      style={{
        fill: "#802d00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -7.393 61.329)"
    />
    <path
      d="M56.552 28.965c-1.39 1.618-2.222 2.037-3.129 2.614M57.098 34.926a6.482 6.482 0 0 1-3.331 1.778M57.258 39.194c-.806.44-1.218.88-3.099 1.318"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -7.393 61.329)"
    />
    <path
      d="M50.46 47.542c.389-.866-.552-1.544-1.091-2.29.921.616 1.757 1.335 1.97 2.29zM55.191 47.617c-.253-1.292.337-1.461.693-1.942-.535.228-1.2.344-1.325.923l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -3.119 61.329)"
    />
    <path
      d="M53.671 47.542c.168-2.35 1.252-2.802 2.093-3.249-1.004 1.243-1.772 1.342-.959 3.3z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -3.119 61.329)"
    />
    <path
      d="M53.11 46.347c.272-2.114 1.29-3.243 2.35-3.837-.83 1.146-1.83 3.392-1.11 5.032h-1.357z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -3.119 61.329)"
    />
    <path
      d="M51.738 45.967c-.199-1.24-1.214-3.568-1.214-3.568.664.577 1.738 1.029 2.877 5.143h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -3.119 61.329)"
    />
    <path
      d="M50.9 47.542c.52-.999-.108-2.603-1.258-4.481 1.673 1.203 2.109 2.849 2.58 4.481z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -3.119 61.329)"
    />
    <g transform="matrix(1.40595 0 0 .99938 -38.824 184.807)">
      <path
        d="M55.097 47.542c-1.032-7.092-1.945-14.327-1.749-22.893l2.47.047c1.55 7.217 1.507 15.046 1.476 22.871z"
        style={{
          fill: "#802d00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M52.996 24.504s.674.885 1.415.911c.74.027 1.414-.857 1.414-.857 3.36-.662 4.52 1.544 5.338 3.242-.44-2.185.167-3.176-3.537-5.144 2.18-1.377 4.359.15 6.538 1.393-1.565-2.738-3.86-3.783-6.565-3.108-.482-1.138 3.09-2.649 6.297-2.68-1.068-.563-5.552-1.704-7.824 1.286-.285-2.549-1.817-4.344-5.172-5.037.911 1.72 2.895 2.433 1.662 5.76-1.653-1.88-7.091-1.109-8.87 2.064 2.587-1.524 5.328-1.5 8.602.188-3.856-.7-6.433 3.501-7.235 6.002 3.188-3.588 7.077-4.132 7.937-4.02z"
        style={{
          fill: "#004e00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.114578,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.174}
        cy={24.121}
        rx={0.702}
        ry={0.748}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={53.486}
        cy={24.856}
        rx={0.76}
        ry={0.9}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.71}
        cy={24.076}
        rx={0.772}
        ry={0.69}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.706}
        cy={24.906}
        rx={0.889}
        ry={0.865}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.607}
        cy={24.894}
        rx={0.935}
        ry={0.877}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <path
      d="M53.271 26.855c.936 2.153 1.904 4.295 3.703 6.188M53.423 31.58c1.063 2.252 2.196 4.062 3.788 5.873M53.888 37.99c.974 1.332 2.204 2.283 3.42 3.252"
      style={{
        fill: "#802d00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -38.824 184.807)"
    />
    <path
      d="M56.552 28.965c-1.39 1.618-2.222 2.037-3.129 2.614M57.098 34.926a6.482 6.482 0 0 1-3.331 1.778M57.258 39.194c-.806.44-1.218.88-3.099 1.318"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -38.824 184.807)"
    />
    <path
      d="M50.46 47.542c.389-.866-.552-1.544-1.091-2.29.921.616 1.757 1.335 1.97 2.29zM55.191 47.617c-.253-1.292.337-1.461.693-1.942-.535.228-1.2.344-1.325.923l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -34.55 184.807)"
    />
    <path
      d="M53.671 47.542c.168-2.35 1.252-2.802 2.093-3.249-1.004 1.243-1.772 1.342-.959 3.3z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -34.55 184.807)"
    />
    <path
      d="M53.11 46.347c.272-2.114 1.29-3.243 2.35-3.837-.83 1.146-1.83 3.392-1.11 5.032h-1.357z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -34.55 184.807)"
    />
    <path
      d="M51.738 45.967c-.199-1.24-1.214-3.568-1.214-3.568.664.577 1.738 1.029 2.877 5.143h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -34.55 184.807)"
    />
    <path
      d="M50.9 47.542c.52-.999-.108-2.603-1.258-4.481 1.673 1.203 2.109 2.849 2.58 4.481z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -34.55 184.807)"
    />
    <g transform="matrix(1.40595 0 0 .99938 -38.824 123.442)">
      <path
        d="M55.097 47.542c-1.032-7.092-1.945-14.327-1.749-22.893l2.47.047c1.55 7.217 1.507 15.046 1.476 22.871z"
        style={{
          fill: "#802d00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M52.996 24.504s.674.885 1.415.911c.74.027 1.414-.857 1.414-.857 3.36-.662 4.52 1.544 5.338 3.242-.44-2.185.167-3.176-3.537-5.144 2.18-1.377 4.359.15 6.538 1.393-1.565-2.738-3.86-3.783-6.565-3.108-.482-1.138 3.09-2.649 6.297-2.68-1.068-.563-5.552-1.704-7.824 1.286-.285-2.549-1.817-4.344-5.172-5.037.911 1.72 2.895 2.433 1.662 5.76-1.653-1.88-7.091-1.109-8.87 2.064 2.587-1.524 5.328-1.5 8.602.188-3.856-.7-6.433 3.501-7.235 6.002 3.188-3.588 7.077-4.132 7.937-4.02z"
        style={{
          fill: "#004e00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.114578,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.174}
        cy={24.121}
        rx={0.702}
        ry={0.748}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={53.486}
        cy={24.856}
        rx={0.76}
        ry={0.9}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.71}
        cy={24.076}
        rx={0.772}
        ry={0.69}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.706}
        cy={24.906}
        rx={0.889}
        ry={0.865}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.607}
        cy={24.894}
        rx={0.935}
        ry={0.877}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <path
      d="M53.271 26.855c.936 2.153 1.904 4.295 3.703 6.188M53.423 31.58c1.063 2.252 2.196 4.062 3.788 5.873M53.888 37.99c.974 1.332 2.204 2.283 3.42 3.252"
      style={{
        fill: "#802d00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -38.824 123.442)"
    />
    <path
      d="M56.552 28.965c-1.39 1.618-2.222 2.037-3.129 2.614M57.098 34.926a6.482 6.482 0 0 1-3.331 1.778M57.258 39.194c-.806.44-1.218.88-3.099 1.318"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -38.824 123.442)"
    />
    <path
      d="M50.46 47.542c.389-.866-.552-1.544-1.091-2.29.921.616 1.757 1.335 1.97 2.29zM55.191 47.617c-.253-1.292.337-1.461.693-1.942-.535.228-1.2.344-1.325.923l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -34.55 123.442)"
    />
    <path
      d="M53.671 47.542c.168-2.35 1.252-2.802 2.093-3.249-1.004 1.243-1.772 1.342-.959 3.3z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -34.55 123.442)"
    />
    <path
      d="M53.11 46.347c.272-2.114 1.29-3.243 2.35-3.837-.83 1.146-1.83 3.392-1.11 5.032h-1.357z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -34.55 123.442)"
    />
    <path
      d="M51.738 45.967c-.199-1.24-1.214-3.568-1.214-3.568.664.577 1.738 1.029 2.877 5.143h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -34.55 123.442)"
    />
    <path
      d="M50.9 47.542c.52-.999-.108-2.603-1.258-4.481 1.673 1.203 2.109 2.849 2.58 4.481z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -34.55 123.442)"
    />
    <g transform="matrix(1.40595 0 0 .99938 -20.864 249.54)">
      <path
        d="M55.097 47.542c-1.032-7.092-1.945-14.327-1.749-22.893l2.47.047c1.55 7.217 1.507 15.046 1.476 22.871z"
        style={{
          fill: "#802d00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M52.996 24.504s.674.885 1.415.911c.74.027 1.414-.857 1.414-.857 3.36-.662 4.52 1.544 5.338 3.242-.44-2.185.167-3.176-3.537-5.144 2.18-1.377 4.359.15 6.538 1.393-1.565-2.738-3.86-3.783-6.565-3.108-.482-1.138 3.09-2.649 6.297-2.68-1.068-.563-5.552-1.704-7.824 1.286-.285-2.549-1.817-4.344-5.172-5.037.911 1.72 2.895 2.433 1.662 5.76-1.653-1.88-7.091-1.109-8.87 2.064 2.587-1.524 5.328-1.5 8.602.188-3.856-.7-6.433 3.501-7.235 6.002 3.188-3.588 7.077-4.132 7.937-4.02z"
        style={{
          fill: "#004e00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.114578,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.174}
        cy={24.121}
        rx={0.702}
        ry={0.748}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={53.486}
        cy={24.856}
        rx={0.76}
        ry={0.9}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.71}
        cy={24.076}
        rx={0.772}
        ry={0.69}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.706}
        cy={24.906}
        rx={0.889}
        ry={0.865}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.607}
        cy={24.894}
        rx={0.935}
        ry={0.877}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <path
      d="M53.271 26.855c.936 2.153 1.904 4.295 3.703 6.188M53.423 31.58c1.063 2.252 2.196 4.062 3.788 5.873M53.888 37.99c.974 1.332 2.204 2.283 3.42 3.252"
      style={{
        fill: "#802d00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -20.864 249.54)"
    />
    <path
      d="M56.552 28.965c-1.39 1.618-2.222 2.037-3.129 2.614M57.098 34.926a6.482 6.482 0 0 1-3.331 1.778M57.258 39.194c-.806.44-1.218.88-3.099 1.318"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -20.864 249.54)"
    />
    <path
      d="M50.46 47.542c.389-.866-.552-1.544-1.091-2.29.921.616 1.757 1.335 1.97 2.29zM55.191 47.617c-.253-1.292.337-1.461.693-1.942-.535.228-1.2.344-1.325.923l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -16.59 249.54)"
    />
    <path
      d="M53.671 47.542c.168-2.35 1.252-2.802 2.093-3.249-1.004 1.243-1.772 1.342-.959 3.3z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -16.59 249.54)"
    />
    <path
      d="M53.11 46.347c.272-2.114 1.29-3.243 2.35-3.837-.83 1.146-1.83 3.392-1.11 5.032h-1.357z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -16.59 249.54)"
    />
    <path
      d="M51.738 45.967c-.199-1.24-1.214-3.568-1.214-3.568.664.577 1.738 1.029 2.877 5.143h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -16.59 249.54)"
    />
    <path
      d="M50.9 47.542c.52-.999-.108-2.603-1.258-4.481 1.673 1.203 2.109 2.849 2.58 4.481z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -16.59 249.54)"
    />
    <g transform="matrix(1.40595 0 0 .99938 -7.097 249.655)">
      <path
        d="M55.097 47.542c-1.032-7.092-1.945-14.327-1.749-22.893l2.47.047c1.55 7.217 1.507 15.046 1.476 22.871z"
        style={{
          fill: "#802d00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M52.996 24.504s.674.885 1.415.911c.74.027 1.414-.857 1.414-.857 3.36-.662 4.52 1.544 5.338 3.242-.44-2.185.167-3.176-3.537-5.144 2.18-1.377 4.359.15 6.538 1.393-1.565-2.738-3.86-3.783-6.565-3.108-.482-1.138 3.09-2.649 6.297-2.68-1.068-.563-5.552-1.704-7.824 1.286-.285-2.549-1.817-4.344-5.172-5.037.911 1.72 2.895 2.433 1.662 5.76-1.653-1.88-7.091-1.109-8.87 2.064 2.587-1.524 5.328-1.5 8.602.188-3.856-.7-6.433 3.501-7.235 6.002 3.188-3.588 7.077-4.132 7.937-4.02z"
        style={{
          fill: "#004e00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.114578,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.174}
        cy={24.121}
        rx={0.702}
        ry={0.748}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={53.486}
        cy={24.856}
        rx={0.76}
        ry={0.9}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.71}
        cy={24.076}
        rx={0.772}
        ry={0.69}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.706}
        cy={24.906}
        rx={0.889}
        ry={0.865}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.607}
        cy={24.894}
        rx={0.935}
        ry={0.877}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <path
      d="M53.271 26.855c.936 2.153 1.904 4.295 3.703 6.188M53.423 31.58c1.063 2.252 2.196 4.062 3.788 5.873M53.888 37.99c.974 1.332 2.204 2.283 3.42 3.252"
      style={{
        fill: "#802d00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -7.097 249.655)"
    />
    <path
      d="M56.552 28.965c-1.39 1.618-2.222 2.037-3.129 2.614M57.098 34.926a6.482 6.482 0 0 1-3.331 1.778M57.258 39.194c-.806.44-1.218.88-3.099 1.318"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -7.097 249.655)"
    />
    <path
      d="M50.46 47.542c.389-.866-.552-1.544-1.091-2.29.921.616 1.757 1.335 1.97 2.29zM55.191 47.617c-.253-1.292.337-1.461.693-1.942-.535.228-1.2.344-1.325.923l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -2.822 249.655)"
    />
    <path
      d="M53.671 47.542c.168-2.35 1.252-2.802 2.093-3.249-1.004 1.243-1.772 1.342-.959 3.3z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -2.822 249.655)"
    />
    <path
      d="M53.11 46.347c.272-2.114 1.29-3.243 2.35-3.837-.83 1.146-1.83 3.392-1.11 5.032h-1.357z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -2.822 249.655)"
    />
    <path
      d="M51.738 45.967c-.199-1.24-1.214-3.568-1.214-3.568.664.577 1.738 1.029 2.877 5.143h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -2.822 249.655)"
    />
    <path
      d="M50.9 47.542c.52-.999-.108-2.603-1.258-4.481 1.673 1.203 2.109 2.849 2.58 4.481z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -2.822 249.655)"
    />
    <g transform="matrix(1.40595 0 0 .99938 -5.335 377.696)">
      <path
        d="M55.097 47.542c-1.032-7.092-1.945-14.327-1.749-22.893l2.47.047c1.55 7.217 1.507 15.046 1.476 22.871z"
        style={{
          fill: "#802d00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M52.996 24.504s.674.885 1.415.911c.74.027 1.414-.857 1.414-.857 3.36-.662 4.52 1.544 5.338 3.242-.44-2.185.167-3.176-3.537-5.144 2.18-1.377 4.359.15 6.538 1.393-1.565-2.738-3.86-3.783-6.565-3.108-.482-1.138 3.09-2.649 6.297-2.68-1.068-.563-5.552-1.704-7.824 1.286-.285-2.549-1.817-4.344-5.172-5.037.911 1.72 2.895 2.433 1.662 5.76-1.653-1.88-7.091-1.109-8.87 2.064 2.587-1.524 5.328-1.5 8.602.188-3.856-.7-6.433 3.501-7.235 6.002 3.188-3.588 7.077-4.132 7.937-4.02z"
        style={{
          fill: "#004e00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.114578,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.174}
        cy={24.121}
        rx={0.702}
        ry={0.748}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={53.486}
        cy={24.856}
        rx={0.76}
        ry={0.9}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.71}
        cy={24.076}
        rx={0.772}
        ry={0.69}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.706}
        cy={24.906}
        rx={0.889}
        ry={0.865}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.607}
        cy={24.894}
        rx={0.935}
        ry={0.877}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <path
      d="M53.271 26.855c.936 2.153 1.904 4.295 3.703 6.188M53.423 31.58c1.063 2.252 2.196 4.062 3.788 5.873M53.888 37.99c.974 1.332 2.204 2.283 3.42 3.252"
      style={{
        fill: "#802d00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -5.335 377.696)"
    />
    <path
      d="M56.552 28.965c-1.39 1.618-2.222 2.037-3.129 2.614M57.098 34.926a6.482 6.482 0 0 1-3.331 1.778M57.258 39.194c-.806.44-1.218.88-3.099 1.318"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -5.335 377.696)"
    />
    <path
      d="M50.46 47.542c.389-.866-.552-1.544-1.091-2.29.921.616 1.757 1.335 1.97 2.29zM55.191 47.617c-.253-1.292.337-1.461.693-1.942-.535.228-1.2.344-1.325.923l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -1.06 377.696)"
    />
    <path
      d="M53.671 47.542c.168-2.35 1.252-2.802 2.093-3.249-1.004 1.243-1.772 1.342-.959 3.3z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -1.06 377.696)"
    />
    <path
      d="M53.11 46.347c.272-2.114 1.29-3.243 2.35-3.837-.83 1.146-1.83 3.392-1.11 5.032h-1.357z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -1.06 377.696)"
    />
    <path
      d="M51.738 45.967c-.199-1.24-1.214-3.568-1.214-3.568.664.577 1.738 1.029 2.877 5.143h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -1.06 377.696)"
    />
    <path
      d="M50.9 47.542c.52-.999-.108-2.603-1.258-4.481 1.673 1.203 2.109 2.849 2.58 4.481z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -1.06 377.696)"
    />
    <g transform="matrix(1.40595 0 0 .99938 -20.49 374.14)">
      <path
        d="M55.097 47.542c-1.032-7.092-1.945-14.327-1.749-22.893l2.47.047c1.55 7.217 1.507 15.046 1.476 22.871z"
        style={{
          fill: "#802d00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M52.996 24.504s.674.885 1.415.911c.74.027 1.414-.857 1.414-.857 3.36-.662 4.52 1.544 5.338 3.242-.44-2.185.167-3.176-3.537-5.144 2.18-1.377 4.359.15 6.538 1.393-1.565-2.738-3.86-3.783-6.565-3.108-.482-1.138 3.09-2.649 6.297-2.68-1.068-.563-5.552-1.704-7.824 1.286-.285-2.549-1.817-4.344-5.172-5.037.911 1.72 2.895 2.433 1.662 5.76-1.653-1.88-7.091-1.109-8.87 2.064 2.587-1.524 5.328-1.5 8.602.188-3.856-.7-6.433 3.501-7.235 6.002 3.188-3.588 7.077-4.132 7.937-4.02z"
        style={{
          fill: "#004e00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.114578,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.174}
        cy={24.121}
        rx={0.702}
        ry={0.748}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={53.486}
        cy={24.856}
        rx={0.76}
        ry={0.9}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.71}
        cy={24.076}
        rx={0.772}
        ry={0.69}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.706}
        cy={24.906}
        rx={0.889}
        ry={0.865}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.607}
        cy={24.894}
        rx={0.935}
        ry={0.877}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <path
      d="M53.271 26.855c.936 2.153 1.904 4.295 3.703 6.188M53.423 31.58c1.063 2.252 2.196 4.062 3.788 5.873M53.888 37.99c.974 1.332 2.204 2.283 3.42 3.252"
      style={{
        fill: "#802d00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -20.49 374.14)"
    />
    <path
      d="M56.552 28.965c-1.39 1.618-2.222 2.037-3.129 2.614M57.098 34.926a6.482 6.482 0 0 1-3.331 1.778M57.258 39.194c-.806.44-1.218.88-3.099 1.318"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -20.49 374.14)"
    />
    <path
      d="M50.46 47.542c.389-.866-.552-1.544-1.091-2.29.921.616 1.757 1.335 1.97 2.29zM55.191 47.617c-.253-1.292.337-1.461.693-1.942-.535.228-1.2.344-1.325.923l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -16.215 374.14)"
    />
    <path
      d="M53.671 47.542c.168-2.35 1.252-2.802 2.093-3.249-1.004 1.243-1.772 1.342-.959 3.3z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -16.215 374.14)"
    />
    <path
      d="M53.11 46.347c.272-2.114 1.29-3.243 2.35-3.837-.83 1.146-1.83 3.392-1.11 5.032h-1.357z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -16.215 374.14)"
    />
    <path
      d="M51.738 45.967c-.199-1.24-1.214-3.568-1.214-3.568.664.577 1.738 1.029 2.877 5.143h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -16.215 374.14)"
    />
    <path
      d="M50.9 47.542c.52-.999-.108-2.603-1.258-4.481 1.673 1.203 2.109 2.849 2.58 4.481z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -16.215 374.14)"
    />
    <g transform="matrix(1.40595 0 0 .99938 -14.503 387.237)">
      <path
        d="M55.097 47.542c-1.032-7.092-1.945-14.327-1.749-22.893l2.47.047c1.55 7.217 1.507 15.046 1.476 22.871z"
        style={{
          fill: "#802d00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M52.996 24.504s.674.885 1.415.911c.74.027 1.414-.857 1.414-.857 3.36-.662 4.52 1.544 5.338 3.242-.44-2.185.167-3.176-3.537-5.144 2.18-1.377 4.359.15 6.538 1.393-1.565-2.738-3.86-3.783-6.565-3.108-.482-1.138 3.09-2.649 6.297-2.68-1.068-.563-5.552-1.704-7.824 1.286-.285-2.549-1.817-4.344-5.172-5.037.911 1.72 2.895 2.433 1.662 5.76-1.653-1.88-7.091-1.109-8.87 2.064 2.587-1.524 5.328-1.5 8.602.188-3.856-.7-6.433 3.501-7.235 6.002 3.188-3.588 7.077-4.132 7.937-4.02z"
        style={{
          fill: "#004e00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.114578,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.174}
        cy={24.121}
        rx={0.702}
        ry={0.748}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={53.486}
        cy={24.856}
        rx={0.76}
        ry={0.9}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.71}
        cy={24.076}
        rx={0.772}
        ry={0.69}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.706}
        cy={24.906}
        rx={0.889}
        ry={0.865}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.607}
        cy={24.894}
        rx={0.935}
        ry={0.877}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <path
      d="M53.271 26.855c.936 2.153 1.904 4.295 3.703 6.188M53.423 31.58c1.063 2.252 2.196 4.062 3.788 5.873M53.888 37.99c.974 1.332 2.204 2.283 3.42 3.252"
      style={{
        fill: "#802d00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -14.503 387.237)"
    />
    <path
      d="M56.552 28.965c-1.39 1.618-2.222 2.037-3.129 2.614M57.098 34.926a6.482 6.482 0 0 1-3.331 1.778M57.258 39.194c-.806.44-1.218.88-3.099 1.318"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -14.503 387.237)"
    />
    <path
      d="M50.46 47.542c.389-.866-.552-1.544-1.091-2.29.921.616 1.757 1.335 1.97 2.29zM55.191 47.617c-.253-1.292.337-1.461.693-1.942-.535.228-1.2.344-1.325.923l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -10.228 387.237)"
    />
    <path
      d="M53.671 47.542c.168-2.35 1.252-2.802 2.093-3.249-1.004 1.243-1.772 1.342-.959 3.3z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -10.228 387.237)"
    />
    <path
      d="M53.11 46.347c.272-2.114 1.29-3.243 2.35-3.837-.83 1.146-1.83 3.392-1.11 5.032h-1.357z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -10.228 387.237)"
    />
    <path
      d="M51.738 45.967c-.199-1.24-1.214-3.568-1.214-3.568.664.577 1.738 1.029 2.877 5.143h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -10.228 387.237)"
    />
    <path
      d="M50.9 47.542c.52-.999-.108-2.603-1.258-4.481 1.673 1.203 2.109 2.849 2.58 4.481z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -10.228 387.237)"
    />
    <g transform="matrix(1.40595 0 0 .99938 -8.142 393.224)">
      <path
        d="M55.097 47.542c-1.032-7.092-1.945-14.327-1.749-22.893l2.47.047c1.55 7.217 1.507 15.046 1.476 22.871z"
        style={{
          fill: "#802d00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M52.996 24.504s.674.885 1.415.911c.74.027 1.414-.857 1.414-.857 3.36-.662 4.52 1.544 5.338 3.242-.44-2.185.167-3.176-3.537-5.144 2.18-1.377 4.359.15 6.538 1.393-1.565-2.738-3.86-3.783-6.565-3.108-.482-1.138 3.09-2.649 6.297-2.68-1.068-.563-5.552-1.704-7.824 1.286-.285-2.549-1.817-4.344-5.172-5.037.911 1.72 2.895 2.433 1.662 5.76-1.653-1.88-7.091-1.109-8.87 2.064 2.587-1.524 5.328-1.5 8.602.188-3.856-.7-6.433 3.501-7.235 6.002 3.188-3.588 7.077-4.132 7.937-4.02z"
        style={{
          fill: "#004e00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.114578,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.174}
        cy={24.121}
        rx={0.702}
        ry={0.748}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={53.486}
        cy={24.856}
        rx={0.76}
        ry={0.9}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.71}
        cy={24.076}
        rx={0.772}
        ry={0.69}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.706}
        cy={24.906}
        rx={0.889}
        ry={0.865}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.607}
        cy={24.894}
        rx={0.935}
        ry={0.877}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <path
      d="M53.271 26.855c.936 2.153 1.904 4.295 3.703 6.188M53.423 31.58c1.063 2.252 2.196 4.062 3.788 5.873M53.888 37.99c.974 1.332 2.204 2.283 3.42 3.252"
      style={{
        fill: "#802d00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -8.142 393.224)"
    />
    <path
      d="M56.552 28.965c-1.39 1.618-2.222 2.037-3.129 2.614M57.098 34.926a6.482 6.482 0 0 1-3.331 1.778M57.258 39.194c-.806.44-1.218.88-3.099 1.318"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -8.142 393.224)"
    />
    <path
      d="M50.46 47.542c.389-.866-.552-1.544-1.091-2.29.921.616 1.757 1.335 1.97 2.29zM55.191 47.617c-.253-1.292.337-1.461.693-1.942-.535.228-1.2.344-1.325.923l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -3.867 393.224)"
    />
    <path
      d="M53.671 47.542c.168-2.35 1.252-2.802 2.093-3.249-1.004 1.243-1.772 1.342-.959 3.3z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -3.867 393.224)"
    />
    <path
      d="M53.11 46.347c.272-2.114 1.29-3.243 2.35-3.837-.83 1.146-1.83 3.392-1.11 5.032h-1.357z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -3.867 393.224)"
    />
    <path
      d="M51.738 45.967c-.199-1.24-1.214-3.568-1.214-3.568.664.577 1.738 1.029 2.877 5.143h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -3.867 393.224)"
    />
    <path
      d="M50.9 47.542c.52-.999-.108-2.603-1.258-4.481 1.673 1.203 2.109 2.849 2.58 4.481z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -3.867 393.224)"
    />
    <g transform="matrix(1.40595 0 0 .99938 -20.49 392.85)">
      <path
        d="M55.097 47.542c-1.032-7.092-1.945-14.327-1.749-22.893l2.47.047c1.55 7.217 1.507 15.046 1.476 22.871z"
        style={{
          fill: "#802d00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M52.996 24.504s.674.885 1.415.911c.74.027 1.414-.857 1.414-.857 3.36-.662 4.52 1.544 5.338 3.242-.44-2.185.167-3.176-3.537-5.144 2.18-1.377 4.359.15 6.538 1.393-1.565-2.738-3.86-3.783-6.565-3.108-.482-1.138 3.09-2.649 6.297-2.68-1.068-.563-5.552-1.704-7.824 1.286-.285-2.549-1.817-4.344-5.172-5.037.911 1.72 2.895 2.433 1.662 5.76-1.653-1.88-7.091-1.109-8.87 2.064 2.587-1.524 5.328-1.5 8.602.188-3.856-.7-6.433 3.501-7.235 6.002 3.188-3.588 7.077-4.132 7.937-4.02z"
        style={{
          fill: "#004e00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.114578,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.174}
        cy={24.121}
        rx={0.702}
        ry={0.748}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={53.486}
        cy={24.856}
        rx={0.76}
        ry={0.9}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.71}
        cy={24.076}
        rx={0.772}
        ry={0.69}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.706}
        cy={24.906}
        rx={0.889}
        ry={0.865}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.607}
        cy={24.894}
        rx={0.935}
        ry={0.877}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <path
      d="M53.271 26.855c.936 2.153 1.904 4.295 3.703 6.188M53.423 31.58c1.063 2.252 2.196 4.062 3.788 5.873M53.888 37.99c.974 1.332 2.204 2.283 3.42 3.252"
      style={{
        fill: "#802d00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -20.49 392.85)"
    />
    <path
      d="M56.552 28.965c-1.39 1.618-2.222 2.037-3.129 2.614M57.098 34.926a6.482 6.482 0 0 1-3.331 1.778M57.258 39.194c-.806.44-1.218.88-3.099 1.318"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -20.49 392.85)"
    />
    <path
      d="M50.46 47.542c.389-.866-.552-1.544-1.091-2.29.921.616 1.757 1.335 1.97 2.29zM55.191 47.617c-.253-1.292.337-1.461.693-1.942-.535.228-1.2.344-1.325.923l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -16.215 392.85)"
    />
    <path
      d="M53.671 47.542c.168-2.35 1.252-2.802 2.093-3.249-1.004 1.243-1.772 1.342-.959 3.3z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -16.215 392.85)"
    />
    <path
      d="M53.11 46.347c.272-2.114 1.29-3.243 2.35-3.837-.83 1.146-1.83 3.392-1.11 5.032h-1.357z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -16.215 392.85)"
    />
    <path
      d="M51.738 45.967c-.199-1.24-1.214-3.568-1.214-3.568.664.577 1.738 1.029 2.877 5.143h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -16.215 392.85)"
    />
    <path
      d="M50.9 47.542c.52-.999-.108-2.603-1.258-4.481 1.673 1.203 2.109 2.849 2.58 4.481z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -16.215 392.85)"
    />
    <g transform="matrix(1.40595 0 0 .99938 -60.9 387.985)">
      <path
        d="M55.097 47.542c-1.032-7.092-1.945-14.327-1.749-22.893l2.47.047c1.55 7.217 1.507 15.046 1.476 22.871z"
        style={{
          fill: "#802d00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M52.996 24.504s.674.885 1.415.911c.74.027 1.414-.857 1.414-.857 3.36-.662 4.52 1.544 5.338 3.242-.44-2.185.167-3.176-3.537-5.144 2.18-1.377 4.359.15 6.538 1.393-1.565-2.738-3.86-3.783-6.565-3.108-.482-1.138 3.09-2.649 6.297-2.68-1.068-.563-5.552-1.704-7.824 1.286-.285-2.549-1.817-4.344-5.172-5.037.911 1.72 2.895 2.433 1.662 5.76-1.653-1.88-7.091-1.109-8.87 2.064 2.587-1.524 5.328-1.5 8.602.188-3.856-.7-6.433 3.501-7.235 6.002 3.188-3.588 7.077-4.132 7.937-4.02z"
        style={{
          fill: "#004e00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.114578,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.174}
        cy={24.121}
        rx={0.702}
        ry={0.748}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={53.486}
        cy={24.856}
        rx={0.76}
        ry={0.9}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.71}
        cy={24.076}
        rx={0.772}
        ry={0.69}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.706}
        cy={24.906}
        rx={0.889}
        ry={0.865}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.607}
        cy={24.894}
        rx={0.935}
        ry={0.877}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <path
      d="M53.271 26.855c.936 2.153 1.904 4.295 3.703 6.188M53.423 31.58c1.063 2.252 2.196 4.062 3.788 5.873M53.888 37.99c.974 1.332 2.204 2.283 3.42 3.252"
      style={{
        fill: "#802d00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -60.9 387.985)"
    />
    <path
      d="M56.552 28.965c-1.39 1.618-2.222 2.037-3.129 2.614M57.098 34.926a6.482 6.482 0 0 1-3.331 1.778M57.258 39.194c-.806.44-1.218.88-3.099 1.318"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -60.9 387.985)"
    />
    <path
      d="M50.46 47.542c.389-.866-.552-1.544-1.091-2.29.921.616 1.757 1.335 1.97 2.29zM55.191 47.617c-.253-1.292.337-1.461.693-1.942-.535.228-1.2.344-1.325.923l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -56.626 387.985)"
    />
    <path
      d="M53.671 47.542c.168-2.35 1.252-2.802 2.093-3.249-1.004 1.243-1.772 1.342-.959 3.3z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -56.626 387.985)"
    />
    <path
      d="M53.11 46.347c.272-2.114 1.29-3.243 2.35-3.837-.83 1.146-1.83 3.392-1.11 5.032h-1.357z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -56.626 387.985)"
    />
    <path
      d="M51.738 45.967c-.199-1.24-1.214-3.568-1.214-3.568.664.577 1.738 1.029 2.877 5.143h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -56.626 387.985)"
    />
    <path
      d="M50.9 47.542c.52-.999-.108-2.603-1.258-4.481 1.673 1.203 2.109 2.849 2.58 4.481z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -56.626 387.985)"
    />
    <g transform="matrix(1.40595 0 0 .99938 -53.043 394.72)">
      <path
        d="M55.097 47.542c-1.032-7.092-1.945-14.327-1.749-22.893l2.47.047c1.55 7.217 1.507 15.046 1.476 22.871z"
        style={{
          fill: "#802d00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M52.996 24.504s.674.885 1.415.911c.74.027 1.414-.857 1.414-.857 3.36-.662 4.52 1.544 5.338 3.242-.44-2.185.167-3.176-3.537-5.144 2.18-1.377 4.359.15 6.538 1.393-1.565-2.738-3.86-3.783-6.565-3.108-.482-1.138 3.09-2.649 6.297-2.68-1.068-.563-5.552-1.704-7.824 1.286-.285-2.549-1.817-4.344-5.172-5.037.911 1.72 2.895 2.433 1.662 5.76-1.653-1.88-7.091-1.109-8.87 2.064 2.587-1.524 5.328-1.5 8.602.188-3.856-.7-6.433 3.501-7.235 6.002 3.188-3.588 7.077-4.132 7.937-4.02z"
        style={{
          fill: "#004e00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.114578,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.174}
        cy={24.121}
        rx={0.702}
        ry={0.748}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={53.486}
        cy={24.856}
        rx={0.76}
        ry={0.9}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.71}
        cy={24.076}
        rx={0.772}
        ry={0.69}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.706}
        cy={24.906}
        rx={0.889}
        ry={0.865}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.607}
        cy={24.894}
        rx={0.935}
        ry={0.877}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <path
      d="M53.271 26.855c.936 2.153 1.904 4.295 3.703 6.188M53.423 31.58c1.063 2.252 2.196 4.062 3.788 5.873M53.888 37.99c.974 1.332 2.204 2.283 3.42 3.252"
      style={{
        fill: "#802d00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -53.043 394.72)"
    />
    <path
      d="M56.552 28.965c-1.39 1.618-2.222 2.037-3.129 2.614M57.098 34.926a6.482 6.482 0 0 1-3.331 1.778M57.258 39.194c-.806.44-1.218.88-3.099 1.318"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -53.043 394.72)"
    />
    <path
      d="M50.46 47.542c.389-.866-.552-1.544-1.091-2.29.921.616 1.757 1.335 1.97 2.29zM55.191 47.617c-.253-1.292.337-1.461.693-1.942-.535.228-1.2.344-1.325.923l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -48.769 394.72)"
    />
    <path
      d="M53.671 47.542c.168-2.35 1.252-2.802 2.093-3.249-1.004 1.243-1.772 1.342-.959 3.3z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -48.769 394.72)"
    />
    <path
      d="M53.11 46.347c.272-2.114 1.29-3.243 2.35-3.837-.83 1.146-1.83 3.392-1.11 5.032h-1.357z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -48.769 394.72)"
    />
    <path
      d="M51.738 45.967c-.199-1.24-1.214-3.568-1.214-3.568.664.577 1.738 1.029 2.877 5.143h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -48.769 394.72)"
    />
    <path
      d="M50.9 47.542c.52-.999-.108-2.603-1.258-4.481 1.673 1.203 2.109 2.849 2.58 4.481z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -48.769 394.72)"
    />
    <g transform="matrix(1.40595 0 0 .99938 -69.88 392.476)">
      <path
        d="M55.097 47.542c-1.032-7.092-1.945-14.327-1.749-22.893l2.47.047c1.55 7.217 1.507 15.046 1.476 22.871z"
        style={{
          fill: "#802d00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M52.996 24.504s.674.885 1.415.911c.74.027 1.414-.857 1.414-.857 3.36-.662 4.52 1.544 5.338 3.242-.44-2.185.167-3.176-3.537-5.144 2.18-1.377 4.359.15 6.538 1.393-1.565-2.738-3.86-3.783-6.565-3.108-.482-1.138 3.09-2.649 6.297-2.68-1.068-.563-5.552-1.704-7.824 1.286-.285-2.549-1.817-4.344-5.172-5.037.911 1.72 2.895 2.433 1.662 5.76-1.653-1.88-7.091-1.109-8.87 2.064 2.587-1.524 5.328-1.5 8.602.188-3.856-.7-6.433 3.501-7.235 6.002 3.188-3.588 7.077-4.132 7.937-4.02z"
        style={{
          fill: "#004e00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.114578,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.174}
        cy={24.121}
        rx={0.702}
        ry={0.748}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={53.486}
        cy={24.856}
        rx={0.76}
        ry={0.9}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.71}
        cy={24.076}
        rx={0.772}
        ry={0.69}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.706}
        cy={24.906}
        rx={0.889}
        ry={0.865}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.607}
        cy={24.894}
        rx={0.935}
        ry={0.877}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <path
      d="M53.271 26.855c.936 2.153 1.904 4.295 3.703 6.188M53.423 31.58c1.063 2.252 2.196 4.062 3.788 5.873M53.888 37.99c.974 1.332 2.204 2.283 3.42 3.252"
      style={{
        fill: "#802d00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -69.88 392.476)"
    />
    <path
      d="M56.552 28.965c-1.39 1.618-2.222 2.037-3.129 2.614M57.098 34.926a6.482 6.482 0 0 1-3.331 1.778M57.258 39.194c-.806.44-1.218.88-3.099 1.318"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -69.88 392.476)"
    />
    <path
      d="M50.46 47.542c.389-.866-.552-1.544-1.091-2.29.921.616 1.757 1.335 1.97 2.29zM55.191 47.617c-.253-1.292.337-1.461.693-1.942-.535.228-1.2.344-1.325.923l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -65.606 392.476)"
    />
    <path
      d="M53.671 47.542c.168-2.35 1.252-2.802 2.093-3.249-1.004 1.243-1.772 1.342-.959 3.3z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -65.606 392.476)"
    />
    <path
      d="M53.11 46.347c.272-2.114 1.29-3.243 2.35-3.837-.83 1.146-1.83 3.392-1.11 5.032h-1.357z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -65.606 392.476)"
    />
    <path
      d="M51.738 45.967c-.199-1.24-1.214-3.568-1.214-3.568.664.577 1.738 1.029 2.877 5.143h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -65.606 392.476)"
    />
    <path
      d="M50.9 47.542c.52-.999-.108-2.603-1.258-4.481 1.673 1.203 2.109 2.849 2.58 4.481z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -65.606 392.476)"
    />
    <g transform="matrix(1.40595 0 0 .99938 -69.507 234.199)">
      <path
        d="M55.097 47.542c-1.032-7.092-1.945-14.327-1.749-22.893l2.47.047c1.55 7.217 1.507 15.046 1.476 22.871z"
        style={{
          fill: "#802d00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <path
        d="M52.996 24.504s.674.885 1.415.911c.74.027 1.414-.857 1.414-.857 3.36-.662 4.52 1.544 5.338 3.242-.44-2.185.167-3.176-3.537-5.144 2.18-1.377 4.359.15 6.538 1.393-1.565-2.738-3.86-3.783-6.565-3.108-.482-1.138 3.09-2.649 6.297-2.68-1.068-.563-5.552-1.704-7.824 1.286-.285-2.549-1.817-4.344-5.172-5.037.911 1.72 2.895 2.433 1.662 5.76-1.653-1.88-7.091-1.109-8.87 2.064 2.587-1.524 5.328-1.5 8.602.188-3.856-.7-6.433 3.501-7.235 6.002 3.188-3.588 7.077-4.132 7.937-4.02z"
        style={{
          fill: "#004e00",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.114578,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.174}
        cy={24.121}
        rx={0.702}
        ry={0.748}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={53.486}
        cy={24.856}
        rx={0.76}
        ry={0.9}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.71}
        cy={24.076}
        rx={0.772}
        ry={0.69}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={55.706}
        cy={24.906}
        rx={0.889}
        ry={0.865}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
      <ellipse
        cx={54.607}
        cy={24.894}
        rx={0.935}
        ry={0.877}
        style={{
          fill: "#4a210c",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.1,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
      />
    </g>
    <path
      d="M53.271 26.855c.936 2.153 1.904 4.295 3.703 6.188M53.423 31.58c1.063 2.252 2.196 4.062 3.788 5.873M53.888 37.99c.974 1.332 2.204 2.283 3.42 3.252"
      style={{
        fill: "#802d00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -69.507 234.199)"
    />
    <path
      d="M56.552 28.965c-1.39 1.618-2.222 2.037-3.129 2.614M57.098 34.926a6.482 6.482 0 0 1-3.331 1.778M57.258 39.194c-.806.44-1.218.88-3.099 1.318"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -69.507 234.199)"
    />
    <path
      d="M50.46 47.542c.389-.866-.552-1.544-1.091-2.29.921.616 1.757 1.335 1.97 2.29zM55.191 47.617c-.253-1.292.337-1.461.693-1.942-.535.228-1.2.344-1.325.923l-.14.97z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -65.232 234.199)"
    />
    <path
      d="M53.671 47.542c.168-2.35 1.252-2.802 2.093-3.249-1.004 1.243-1.772 1.342-.959 3.3z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -65.232 234.199)"
    />
    <path
      d="M53.11 46.347c.272-2.114 1.29-3.243 2.35-3.837-.83 1.146-1.83 3.392-1.11 5.032h-1.357z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -65.232 234.199)"
    />
    <path
      d="M51.738 45.967c-.199-1.24-1.214-3.568-1.214-3.568.664.577 1.738 1.029 2.877 5.143h-1.678s.099-1.057.015-1.575z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -65.232 234.199)"
    />
    <path
      d="M50.9 47.542c.52-.999-.108-2.603-1.258-4.481 1.673 1.203 2.109 2.849 2.58 4.481z"
      style={{
        fill: "green",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="matrix(1.40595 0 0 .99938 -65.232 234.199)"
    />
    <path
      d="m5.613 333.375-3.742-6.11v-17.867l3.929 3.04"
      style={{
        fill: "#bd960c",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.23,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <ellipse
      cx={34.354}
      cy={324.494}
      rx={1.286}
      ry={2.023}
      style={{
        fill: "#055735",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="M-33.694 299.782h48.866v-17.674h-48.708Z"
      style={{
        fill: "#f1c113",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.19415904,
        strokeLinejoin: "round",
        strokeDashoffset: 7,
        strokeDasharray: "none",
      }}
      transform="matrix(1.1846 0 0 1.1846 45.527 -21.746)"
    />
    <path
      d="M5.756 317.367H63.5v6.698H5.756z"
      style={{
        fill: "#574505",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.23,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="M55.596 324.064h.86v1.234h-.86z"
      style={{
        fill: "#d38d5f",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.2,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="m5.756 324.064-3.792-3.349-.093-6.242 3.885 2.894"
      style={{
        fill: "#574505",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.23,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="m57.296 323.734.444 2.233-.76.012-.304-1.883z"
      style={{
        fill: "#fcf409",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <ellipse
      cx={56.193}
      cy={322.965}
      rx={1.203}
      ry={1.53}
      style={{
        fill: "#d38d5f",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.2,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="m3.789 312.323-3.181-2.55 4.89-5.497 3.366 2.508M3.789 312.323l5.075-5.539h51.163l5.094 5.54-1.621.114"
      style={{
        fill: "#2b2202",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.23,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <ellipse
      cx={10.536}
      cy={328.064}
      rx={2.276}
      ry={1.025}
      style={{
        fill: "#2b2202",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.23,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="M8.26 328.064v6.105M10.536 329.089v6.436M12.812 328.064v6.006M9.79 329.089v4.286"
      style={{
        fill: "#2b2202",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.23,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <g transform="translate(7.615)">
      <ellipse
        cx={10.536}
        cy={328.064}
        rx={2.276}
        ry={1.025}
        style={{
          fill: "#2b2202",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.23,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="M8.26 328.064v6.105M10.536 329.089v6.436M12.812 328.064v6.006M9.79 329.089v4.286"
        style={{
          fill: "#2b2202",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.23,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
    </g>
    <g transform="translate(15.19)">
      <ellipse
        cx={10.536}
        cy={328.064}
        rx={2.276}
        ry={1.025}
        style={{
          fill: "#2b2202",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.23,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
      <path
        d="M8.26 328.064v6.105M10.536 329.089v6.436M12.812 328.064v6.006M9.79 329.089v4.286"
        style={{
          fill: "#2b2202",
          fillOpacity: 1,
          stroke: "#000",
          strokeWidth: 0.23,
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
        }}
      />
    </g>
    <path
      d="M5.498 304.276h51.775l2.754 2.508H8.864Z"
      style={{
        fill: "#2b2202",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.23,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="M56.454 321.734c-.603-.167-1.134.363-1.134.363-.47 1.474.273 2.657-.024 3.437l-1.391.655c-.228-.05.074-3.604.561-4.408.275-.454 1.285-1.077 1.941-.76.655.316.807.924.807.924z"
      style={{
        fill: "#fcf409",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <ellipse
      cx={55.7}
      cy={322.664}
      rx={0.1}
      ry={0.088}
      style={{
        fill: "#d38d5f",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.2,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="M57.725 328.46c0 .325.217.728.182.967-.17 1.154-.982 1.27-1.98 1.27-.929 0-2.14-.236-2.032-1.256.054-.511.165-.68.058-.919-.109-.243-.207-.503-.143-1.305a2.816 2.816 0 0 1 1.087-2.02c.321-.24 1.875-.111 2.113.106.721.656.715.607.985 2.013.059.302-.27.814-.27 1.145z"
      style={{
        fill: "#d38d5f",
        stroke: "#000",
        strokeWidth: 0.23,
        strokeLinejoin: "round",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="m53.895 329.441 4.012-.014.284 2.162-2.1.033-.165-.926-.463.992-1.868-.033z"
      style={{
        fill: "#0900c9",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.23,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <ellipse
      cx={55.914}
      cy={328.699}
      rx={0.07}
      ry={0.062}
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.23,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <ellipse
      cx={55.015}
      cy={326.907}
      rx={0.878}
      ry={0.697}
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.05,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <ellipse
      cx={56.926}
      cy={326.975}
      rx={0.918}
      ry={0.744}
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.05,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="M55.073 326.004c-.74.573-.835 1.134-.962 1.517.847.158 1.315.09 1.692-.012.108-.465-.271-1.106-.73-1.505zM56.875 326.004c-.74.573-.834 1.134-.961 1.517.847.158 1.314.09 1.692-.012.108-.465-.272-1.106-.73-1.505zM55.803 327.509l.11.012M54.111 327.521l-.316-.228M57.606 327.509l.39-.193M55.073 326.004l-.058-.872M56.875 326.004l.135-.701"
      style={{
        fill: "#c40600",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.0499999,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <ellipse
      cx={56.651}
      cy={322.664}
      rx={0.1}
      ry={0.088}
      style={{
        fill: "#d38d5f",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.2,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="m54.53 331.672-.577 3.026M57.141 331.606l.508 3.026M54.111 326.186l-2.229 2.014"
      style={{
        fill: "#c40600",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.2,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="m57.65 326.206 1.493 1.538.386-1.538"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.2,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <ellipse
      cx={52.128}
      cy={328.117}
      rx={1.825}
      ry={0.844}
      style={{
        fill: "#110606",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.2,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="M55.7 323.628c.4.378.84.41.96 0M34.05 321.746h.748v1.239h-.748z"
      style={{
        fill: "#d38d5f",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <ellipse
      cx={34.378}
      cy={320.53}
      rx={1.31}
      ry={1.59}
      style={{
        fill: "#d38d5f",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <ellipse
      cx={33.807}
      cy={320.142}
      rx={0.079}
      ry={0.085}
      style={{
        fill: "#000",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.136908,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <ellipse
      cx={34.995}
      cy={320.104}
      rx={0.079}
      ry={0.107}
      style={{
        fill: "#000",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="M51.32 328.048v-1.099c.053-.203.128-.235.232-.316l.045-.553.146.007.05.554c.068.07.088.062.177.28v1.138c-.185.14-.388.2-.65-.01zM52.443 328.048v-1.099c.053-.203.128-.235.231-.316l.046-.553.145.007.05.554c.069.07.089.062.178.28v1.138c-.186.14-.388.2-.65-.01z"
      style={{
        fill: "#1c9e00",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <ellipse
      cx={34.354}
      cy={320.956}
      rx={0.67}
      ry={0.248}
      style={{
        fill: "#000",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="M33.575 319.303c-.098-.176-.327-.203-.06-.692-.023-.412-.258-.414-.51-.393M34.014 319.037c-.072-.187-.295-.247.038-.694.037-.41-.196-.446-.449-.46M34.451 318.992c-.019-.2-.217-.317.224-.657.146-.385-.068-.483-.307-.565M35.014 319.164c.097-.176.326-.206.054-.693.019-.41.254-.416.506-.397"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="M33.569 322.89c.572-.26 1.326-.285 1.885 0 .411.211.81 1.125.81 1.125l-3.687.017s.533-.932.992-1.141z"
      style={{
        fill: "#5553ff",
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDashoffset: 7,
        fillOpacity: 1,
      }}
    />
    <path
      d="M34.483 322.67v1.297M32.857 323.757l-3.367-3.485M36.061 323.523l3.017-3.017"
      style={{
        fill: "#5553ff",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 7,
      }}
    />
    <path
      d="m47.625 456.216 5.5 9.167h26.25l4.646-9.354z"
      style={{
        fill: "#08022f",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="translate(-.351 8.887)"
    />
    <path
      d="M50.375 460.8h31.277l-.668 1.344H51.181Z"
      style={{
        fill: "#e4e4e4",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 0.1,
        strokeLinejoin: "round",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="translate(-.351 8.887)"
    />
    <path
      d="m65.824 429.395-10.08 23.883 10.08-.093"
      style={{
        fill: "#eee",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.119594,
        strokeLinejoin: "round",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="translate(-.351 8.887)"
    />
    <path
      d="m66.657 429.395 10.308 23.725-11.142.065"
      style={{
        fill: "#eee",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.119594,
        strokeLinejoin: "round",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="translate(-.351 8.887)"
    />
    <path
      d="M65.824 429.395h.78v26.717h-.78z"
      style={{
        fill: "#622104",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.119594,
        strokeLinejoin: "round",
        strokeDashoffset: 7,
        strokeOpacity: 1,
      }}
      transform="translate(-.351 8.887)"
    />
  </svg>
)
export default BeachMap
