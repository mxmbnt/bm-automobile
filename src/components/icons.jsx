import { useId } from 'react'

// Icons extracted from the original site (inline SVGs), colour follows currentColor

const Svg = ({ viewBox, size, className, children, ...rest }) => (
  <svg viewBox={viewBox} width={size} height={size} className={className} fill="none" aria-hidden="true" {...rest}>
    {children}
  </svg>
)

// Logo BM Automobile redessiné d'après l'enseigne (pastille « Bm » + AUTOMOBILE), à remplacer par le fichier vectoriel officiel s'il existe
export const Logo = ({ className = '' }) => (
  <span className={`inline-flex items-center gap-2.5 whitespace-nowrap ${className}`}>
    <span className="grid size-[38px] shrink-0 place-items-center rounded-full border-2 border-white bg-[#16181d] font-brand text-[20px] leading-none font-bold text-white">
      <span>B<span className="text-accent">m</span></span>
    </span>
    <span className="font-brand text-[24px] leading-none font-semibold tracking-[0.02em] uppercase">Automobile</span>
  </span>
)

// Grand logotype en dégradé blanc transparent (fond du hero et bas du pied de page)
export const Wordmark = ({ text = 'BM AUTO', className = '' }) => {
  const id = useId()
  return (
    <svg viewBox="0 0 1133 276" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.07" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <text x="0" y="276" textLength="1133" lengthAdjust="spacingAndGlyphs" fontFamily="Oswald, sans-serif" fontWeight="700" fontSize="343" fill={`url(#${id})`}>
        {text}
      </text>
    </svg>
  )
}

export const Phone = ({ size = 18, ...props }) => (
  <Svg viewBox="0 0 24 24" size={size} {...props}>
    <path d="M 11.832 14.568 C 12.257 14.763 12.761 14.637 13.045 14.265 L 13.4 13.8 C 13.778 13.296 14.37 13 15 13 L 18 13 C 19.105 13 20 13.895 20 15 L 20 18 C 20 19.105 19.105 20 18 20 C 8.059 20 0 11.941 0 2 C 0 0.895 0.895 0 2 0 L 5 0 C 6.105 0 7 0.895 7 2 L 7 5 C 7 5.63 6.704 6.222 6.2 6.6 L 5.732 6.951 C 5.353 7.24 5.231 7.756 5.44 8.184 C 6.807 10.96 9.054 13.205 11.832 14.568" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(2 2)" />
  </Svg>
)

export const ArrowUpRight = ({ size = 18, ...props }) => (
  <Svg viewBox="0 0 9.096 9.096" size={size} {...props}>
    <path d="M 8.551 0 L 1.612 0 C 1.512 0 1.417 0.04 1.347 0.11 C 1.276 0.18 1.237 0.276 1.237 0.375 C 1.237 0.474 1.276 0.57 1.347 0.64 C 1.417 0.71 1.512 0.75 1.612 0.75 L 7.816 0.75 L 0.121 8.445 C 0.084 8.479 0.054 8.521 0.033 8.567 C 0.012 8.613 0.001 8.663 0 8.713 C -0.001 8.764 0.008 8.814 0.027 8.861 C 0.046 8.908 0.074 8.95 0.11 8.986 C 0.146 9.022 0.188 9.05 0.235 9.069 C 0.282 9.088 0.332 9.097 0.383 9.096 C 0.433 9.095 0.483 9.084 0.529 9.063 C 0.575 9.042 0.617 9.012 0.651 8.975 L 8.346 1.28 L 8.346 7.484 C 8.346 7.584 8.385 7.679 8.456 7.749 C 8.526 7.82 8.621 7.859 8.721 7.859 C 8.82 7.859 8.916 7.82 8.986 7.749 C 9.056 7.679 9.096 7.584 9.096 7.484 L 9.096 0.545 C 9.096 0.401 9.038 0.262 8.936 0.16 C 8.834 0.058 8.696 0 8.551 0 Z" fill="currentColor" />
  </Svg>
)

export const Gauge = ({ size = 18, ...props }) => (
  <Svg viewBox="0 0 24 24" size={size} {...props}>
    <path d="M 13.621 0.68 C 9.213 -1.033 4.208 0.577 1.624 4.538 C -0.959 8.499 -0.415 13.728 2.929 17.072 C 6.273 20.416 11.502 20.96 15.463 18.377 C 19.424 15.793 21.034 10.788 19.321 6.38" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(1.979 2.02)" />
    <path d="M 0 2 C 0 0.895 0.895 0 2 0 C 3.105 0 4 0.895 4 2 C 4 3.105 3.105 4 2 4 C 0.895 4 0 3.105 0 2 Z" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(10 10)" />
    <path d="M 0 5.6 L 5.6 0" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(13.4 5)" />
  </Svg>
)

export const Fuel = ({ size = 18, ...props }) => (
  <Svg viewBox="0 0 24 24" size={size} {...props}>
    <path d="M 0 8 L 2 8 C 3.105 8 4 8.895 4 10 L 4 12 C 4 13.105 4.895 14 6 14 C 7.105 14 8 13.105 8 12 L 8 5.002 C 8 4.469 7.788 3.958 7.41 3.582 L 4 0" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(14 5)" />
    <path d="M 11 18 L 11 2 C 11 0.895 10.105 0 9 0 L 2 0 C 0.895 0 0 0.895 0 2 L 0 18" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(3 3)" />
    <path d="M 0 0 L 13 0" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(2 21)" />
    <path d="M 0 0 L 11 0" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(3 9)" />
  </Svg>
)

export const Gear = ({ size = 18, ...props }) => (
  <Svg viewBox="0 0 24 24" size={size} {...props}>
    <path d="M 6.628 2.119 C 6.742 0.917 7.75 0 8.957 0 C 10.164 0 11.172 0.917 11.287 2.119 C 11.354 2.879 11.787 3.558 12.448 3.939 C 13.109 4.321 13.914 4.356 14.606 4.034 C 15.702 3.536 16.997 3.951 17.599 4.994 C 18.201 6.036 17.914 7.365 16.936 8.067 C 16.311 8.505 15.94 9.219 15.94 9.982 C 15.94 10.745 16.311 11.46 16.936 11.898 C 17.914 12.599 18.201 13.928 17.599 14.97 C 16.997 16.013 15.702 16.428 14.606 15.931 C 13.914 15.608 13.109 15.644 12.448 16.025 C 11.787 16.406 11.354 17.086 11.287 17.846 C 11.172 19.047 10.164 19.964 8.957 19.964 C 7.75 19.964 6.742 19.047 6.628 17.846 C 6.56 17.085 6.127 16.406 5.466 16.024 C 4.805 15.643 3.999 15.608 3.308 15.931 C 2.211 16.428 0.916 16.013 0.314 14.97 C -0.288 13.928 -0.001 12.599 0.978 11.898 C 1.602 11.46 1.974 10.745 1.974 9.982 C 1.974 9.219 1.602 8.505 0.978 8.067 C 0 7.365 -0.286 6.037 0.316 4.995 C 0.917 3.954 2.211 3.538 3.307 4.034 C 3.998 4.356 4.803 4.321 5.464 3.939 C 6.125 3.558 6.558 2.879 6.626 2.119" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(3.043 2.017)" />
    <path d="M 0 3 C 0 1.343 1.343 0 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 Z" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(9 9)" />
  </Svg>
)

export const CheckCircle = ({ size = 18, ...props }) => (
  <Svg viewBox="0 0 24 24" size={size} {...props}>
    <path d="M 1.861 6.615 C 1.564 5.279 1.972 3.884 2.94 2.917 C 3.909 1.95 5.305 1.546 6.641 1.845 C 7.376 0.696 8.646 0 10.011 0 C 11.375 0 12.646 0.696 13.381 1.845 C 14.719 1.544 16.117 1.95 17.087 2.919 C 18.056 3.889 18.462 5.287 18.161 6.625 C 19.311 7.36 20.006 8.631 20.006 9.995 C 20.006 11.36 19.311 12.63 18.161 13.365 C 18.46 14.701 18.056 16.097 17.089 17.066 C 16.122 18.035 14.727 18.442 13.391 18.145 C 12.657 19.299 11.384 19.998 10.016 19.998 C 8.648 19.998 7.375 19.299 6.641 18.145 C 5.305 18.445 3.909 18.04 2.94 17.073 C 1.972 16.107 1.564 14.711 1.861 13.375 C 0.702 12.642 0 11.366 0 9.995 C 0 8.624 0.702 7.348 1.861 6.615 Z" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(1.989 2.005)" />
    <path d="M 0 2 L 2 4 L 6 0" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(9 10)" />
  </Svg>
)

export const Star = ({ size = 18, ...props }) => (
  <Svg viewBox="0 0 20 19.97" size={size} {...props}>
    <path d="M 4.645 12.77 L 3.589 19.242 C 3.505 19.756 4.054 20.142 4.508 19.89 L 10 16.855 L 15.492 19.891 C 15.942 20.141 16.496 19.762 16.411 19.243 L 15.355 12.771 L 19.822 8.192 C 20.176 7.83 19.973 7.215 19.469 7.138 L 13.321 6.199 L 10.565 0.329 C 10.359 -0.11 9.64 -0.11 9.434 0.329 L 6.679 6.198 L 0.531 7.137 C 0.026 7.215 -0.176 7.829 0.178 8.191 Z" fill="currentColor" />
  </Svg>
)

export const Send = ({ size = 18, ...props }) => (
  <Svg viewBox="0 0 24 24" size={size} {...props}>
    <path d="M 19.472 0.953 C 19.545 0.692 19.472 0.412 19.28 0.22 C 19.088 0.028 18.808 -0.045 18.546 0.028 L 0.546 5.486 C 0.245 5.571 0.029 5.834 0.003 6.145 C -0.023 6.457 0.147 6.752 0.429 6.886 L 8.626 10.874 L 12.614 19.07 C 12.748 19.352 13.043 19.522 13.354 19.496 C 13.666 19.47 13.929 19.253 14.013 18.953 Z" fillOpacity="0" fill="currentColor" transform="translate(1.499 3.001)" />
    <path d="M 0 4.875 L 4.875 0" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(10.125 9)" />
    <path d="M 19.472 0.953 C 19.545 0.692 19.472 0.412 19.28 0.22 C 19.088 0.028 18.808 -0.045 18.546 0.028 L 0.546 5.486 C 0.245 5.571 0.029 5.834 0.003 6.145 C -0.023 6.457 0.147 6.752 0.429 6.886 L 8.626 10.874 L 12.614 19.07 C 12.748 19.352 13.043 19.522 13.354 19.496 C 13.666 19.47 13.929 19.253 14.013 18.953 Z" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(1.499 3.001)" />
  </Svg>
)

export const Instagram = ({ size = 18, ...props }) => (
  <Svg viewBox="0 0 24 24" size={size} {...props}>
    <path d="M 13.5 0 L 4.5 0 C 2.015 0 0 2.015 0 4.5 L 0 13.5 C 0 15.985 2.015 18 4.5 18 L 13.5 18 C 15.985 18 18 15.985 18 13.5 L 18 4.5 C 18 2.015 15.985 0 13.5 0 Z M 9 12.75 C 6.929 12.75 5.25 11.071 5.25 9 C 5.25 6.929 6.929 5.25 9 5.25 C 11.071 5.25 12.75 6.929 12.75 9 C 12.75 11.071 11.071 12.75 9 12.75 Z" fillOpacity="0" fill="currentColor" transform="translate(3 3)" />
    <path d="M 4.5 18 C 2.015 18 0 15.985 0 13.5 L 0 4.5 C 0 2.015 2.015 0 4.5 0 L 13.5 0 C 15.985 0 18 2.015 18 4.5 L 18 13.5 C 18 15.985 15.985 18 13.5 18 Z" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(3 3)" />
    <path d="M 0 3.75 C 0 1.679 1.679 0 3.75 0 C 5.821 0 7.5 1.679 7.5 3.75 C 7.5 5.821 5.821 7.5 3.75 7.5 C 1.679 7.5 0 5.821 0 3.75 Z" fill="transparent" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="1.5" stroke="currentColor" transform="translate(8.25 8.25)" />
    <path d="M 0 1.125 C 0 0.504 0.504 0 1.125 0 C 1.746 0 2.25 0.504 2.25 1.125 C 2.25 1.746 1.746 2.25 1.125 2.25 C 0.504 2.25 0 1.746 0 1.125 Z" fill="currentColor" transform="translate(15.75 6)" />
  </Svg>
)

export const Facebook = ({ size = 18, ...props }) => (
  <Svg viewBox="0 0 24 24" size={size} {...props}>
    <path d="M 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 C 4.029 18 0 13.971 0 9 Z" fillOpacity="0" fill="currentColor" transform="translate(3 3)" />
    <path d="M 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 C 18 13.971 13.971 18 9 18 C 4.029 18 0 13.971 0 9 Z" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(3 3)" />
    <path d="M 3.75 0 L 2.25 0 C 1.007 0 0 1.007 0 2.25 L 0 12.75" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(12 8.25)" />
    <path d="M 0 0 L 6 0" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(9 13.5)" />
  </Svg>
)

export const MapPin = ({ size = 18, ...props }) => (
  <Svg viewBox="0 0 24 24" size={size} {...props}>
    <path d="M 16 8 C 16 12.993 10.461 18.193 8.601 19.799 C 8.245 20.067 7.755 20.067 7.399 19.799 C 5.539 18.193 0 12.993 0 8 C 0 3.582 3.582 0 8 0 C 12.418 0 16 3.582 16 8" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(4 2)" />
    <path d="M 0 3 C 0 1.343 1.343 0 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 Z" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(9 7)" />
  </Svg>
)

export const Mail = ({ size = 18, ...props }) => (
  <Svg viewBox="0 0 24 24" size={size} {...props}>
    <path d="M 20 0 L 11.009 5.727 C 10.388 6.088 9.621 6.088 9 5.727 L 0 0" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(2 7)" />
    <path d="M 2 16 C 0.895 16 0 15.105 0 14 L 0 2 C 0 0.895 0.895 0 2 0 L 18 0 C 19.105 0 20 0.895 20 2 L 20 14 C 20 15.105 19.105 16 18 16 Z" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" stroke="currentColor" transform="translate(2 4)" />
  </Svg>
)

export const ArrowLong = ({ size = 18, ...props }) => (
  <Svg viewBox="0 0 12.128 12.128" size={size} {...props}>
    <path d="M 11.401 0 L 2.149 0 C 2.016 0 1.889 0.053 1.795 0.146 C 1.702 0.24 1.649 0.367 1.649 0.5 C 1.649 0.633 1.702 0.76 1.795 0.854 C 1.889 0.947 2.016 1 2.149 1 L 10.421 1 L 0.161 11.26 C 0.112 11.306 0.072 11.361 0.044 11.422 C 0.017 11.484 0.002 11.55 0 11.617 C -0.001 11.685 0.011 11.752 0.036 11.814 C 0.061 11.877 0.099 11.934 0.146 11.981 C 0.194 12.029 0.251 12.067 0.313 12.092 C 0.376 12.117 0.443 12.129 0.51 12.128 C 0.578 12.126 0.644 12.111 0.706 12.084 C 0.767 12.056 0.822 12.016 0.868 11.967 L 11.128 1.707 L 11.128 9.979 C 11.128 10.112 11.181 10.239 11.274 10.333 C 11.368 10.426 11.495 10.479 11.628 10.479 C 11.76 10.479 11.888 10.426 11.982 10.333 C 12.075 10.239 12.128 10.112 12.128 9.979 L 12.128 0.727 C 12.128 0.534 12.051 0.35 11.915 0.213 C 11.779 0.077 11.594 0 11.401 0 Z" fill="currentColor" />
  </Svg>
)

export const Car = ({ size = 18, ...props }) => (
  <Svg viewBox="0 0 24 24" size={size} {...props}>
    <path d="M 18 3.001 L 16 5.001 L 14.5 1.301 C 14.21 0.525 13.473 0.009 12.646 0.001 L 5.4 0.001 C 4.566 -0.019 3.807 0.482 3.497 1.258 L 2 5.001 L 0 3.001" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(3 4.999)" />
    <path d="M 0 0 L 0.01 0" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(7 14)" />
    <path d="M 0 0 L 0.01 0" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(17 14)" />
    <path d="M 2 8 C 0.895 8 0 7.105 0 6 L 0 2 C 0 0.895 0.895 0 2 0 L 16 0 C 17.105 0 18 0.895 18 2 L 18 6 C 18 7.105 17.105 8 16 8 Z" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(3 10)" />
    <path d="M 0 0 L 0 2" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(5 18)" />
    <path d="M 0 0 L 0 2" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(19 18)" />
  </Svg>
)

export const Cone = ({ size = 18, ...props }) => (
  <Svg viewBox="0 0 24 24" size={size} {...props}>
    <path d="M 17.8 16.544 L 9.8 0.564 C 9.633 0.219 9.283 0 8.9 0 C 8.517 0 8.167 0.219 8 0.564 L 0 16.544" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(3.1 2.006)" />
    <path d="M 0 3 C 0 1.343 4.029 0 9 0 C 13.971 0 18 1.343 18 3 C 18 4.657 13.971 6 9 6 C 4.029 6 0 4.657 0 3 Z" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(3 16)" />
  </Svg>
)

export const Door = ({ size = 18, ...props }) => (
  <Svg viewBox="0 0 24 24" size={size} {...props}>
    <path d="M 0 0 L 0.01 0" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(10 12)" />
    <path d="M 12 16 L 12 2 C 12 0.895 11.105 0 10 0 L 2 0 C 0.895 0 0 0.895 0 2 L 0 16" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(6 4)" />
    <path d="M 0 0 L 20 0" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(2 20)" />
  </Svg>
)

export const Brush = ({ size = 18, ...props }) => (
  <Svg viewBox="0 0 24 24" size={size} {...props}>
    <path d="M 10.68 2.913 L 0 0" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(3.942 14.984)" />
    <path d="M 10.168 0.622 C 10.997 -0.207 12.341 -0.207 13.17 0.622 C 13.999 1.451 13.999 2.795 13.17 3.624 L 9.152 7.643 C 8.957 7.838 8.957 8.154 9.152 8.35 L 10.096 9.294 C 11.037 10.235 11.037 11.761 10.096 12.702 L 9.152 13.646 C 8.957 13.841 8.641 13.841 8.445 13.646 L 0.146 5.348 C -0.049 5.152 -0.049 4.836 0.146 4.641 L 1.09 3.697 C 2.032 2.756 3.557 2.756 4.498 3.697 L 5.442 4.641 C 5.638 4.836 5.954 4.836 6.149 4.641 Z" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(8.208 2)" />
    <path d="M 6.999 0 C 5.195 2.71 3.029 3.46 0.416 3.948 C 0.24 3.98 0.093 4.103 0.031 4.271 C -0.031 4.44 0.001 4.628 0.114 4.767 L 7.434 13.65 C 7.739 13.974 8.223 14.058 8.619 13.854 C 10.734 12.405 13.999 8.792 13.999 7" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(2.001 8)" />
  </Svg>
)

export const Calendar = ({ size = 18, ...props }) => (
  <Svg viewBox="0 0 24 24" size={size} {...props}>
    <path d="M 0 0 L 0 4" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(8 2)" />
    <path d="M 0 0 L 0 4" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(16 2)" />
    <path d="M 18 10 L 18 2 C 18 0.895 17.105 0 16 0 L 2 0 C 0.895 0 0 0.895 0 2 L 0 16 C 0 17.105 0.895 18 2 18 L 10 18" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(3 4)" />
    <path d="M 0 0 L 18 0" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(3 10)" />
    <path d="M 0 2 L 2 4 L 6 0" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(16 18)" />
  </Svg>
)

export const Clipboard = ({ size = 18, ...props }) => (
  <Svg viewBox="0 0 24 24" size={size} {...props}>
    <path d="M 1 4 C 0.448 4 0 3.552 0 3 L 0 1 C 0 0.448 0.448 0 1 0 L 7 0 C 7.552 0 8 0.448 8 1 L 8 3 C 8 3.552 7.552 4 7 4 Z" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(8 2)" />
    <path d="M 12 0 L 14 0 C 15.105 0 16 0.895 16 2 L 16 16 C 16 17.105 15.105 18 14 18 L 2 18 C 0.895 18 0 17.105 0 16 L 0 2 C 0 0.895 0.895 0 2 0 L 4 0" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(4 4)" />
    <path d="M 0 2 L 2 4 L 6 0" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(9 12)" />
  </Svg>
)

export const IdCard = ({ size = 18, ...props }) => (
  <Svg viewBox="0 0 24 24" size={size} {...props}>
    <path d="M 0 0 L 20 0" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(2 8)" />
    <path d="M 2 16 C 0.895 16 0 15.105 0 14 L 0 2 C 0 0.895 0.895 0 2 0 L 18 0 C 19.105 0 20 0.895 20 2 L 20 14 C 20 15.105 19.105 16 18 16 Z" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(2 4)" />
    <path d="M 0 0 L 12 0" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(6 16)" />
  </Svg>
)

export const Clock = ({ size = 18, ...props }) => (
  <Svg viewBox="0 0 24 24" size={size} {...props}>
    <path d="M 0 0 L 0 6 L 4 4" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(12 6)" />
    <path d="M 0 10 C 0 4.477 4.477 0 10 0 C 15.523 0 20 4.477 20 10 C 20 15.523 15.523 20 10 20 C 4.477 20 0 15.523 0 10 Z" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(2 2)" />
  </Svg>
)

export const MapPinUser = ({ size = 18, ...props }) => (
  <Svg viewBox="0 0 24 24" size={size} {...props}>
    <path d="M 12 6 C 12 9.613 8.131 13.429 6.607 14.795 C 6.249 15.069 5.751 15.069 5.393 14.795 C 3.87 13.429 0 9.613 0 6 C 0 2.686 2.686 0 6 0 C 9.314 0 12 2.686 12 6" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(6 2)" />
    <path d="M 0 2 C 0 0.895 0.895 0 2 0 C 3.105 0 4 0.895 4 2 C 4 3.105 3.105 4 2 4 C 0.895 4 0 3.105 0 2 Z" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(10 6)" />
    <path d="M 6.714 0 L 3.004 0 C 2.574 0 2.192 0.275 2.056 0.683 L 0.052 6.683 C -0.05 6.988 0.001 7.323 0.188 7.584 C 0.376 7.845 0.678 8 1 8 L 19 8 C 19.321 8 19.622 7.845 19.81 7.584 C 19.998 7.324 20.049 6.989 19.948 6.684 L 17.948 0.684 C 17.812 0.275 17.429 0 16.999 0 L 13.287 0" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(2 14)" />
  </Svg>
)

export const Headset = ({ size = 18, ...props }) => (
  <Svg viewBox="0 0 24 24" size={size} {...props}>
    <path d="M 0 11 L 3 11 C 4.105 11 5 11.895 5 13 L 5 16 C 5 17.105 4.105 18 3 18 L 2 18 C 0.895 18 0 17.105 0 16 L 0 9 C 0 4.029 4.029 0 9 0 C 13.971 0 18 4.029 18 9 L 18 16 C 18 17.105 17.105 18 16 18 L 15 18 C 13.895 18 13 17.105 13 16 L 13 13 C 13 11.895 13.895 11 15 11 L 18 11" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(3 3)" />
  </Svg>
)

export const Hourglass = ({ size = 18, ...props }) => (
  <Svg viewBox="0 0 24 24" size={size} {...props}>
    <path d="M 0 0 L 14 0" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(5 22)" />
    <path d="M 0 0 L 14 0" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(5 2)" />
    <path d="M 10 10 L 10 5.828 C 10 5.298 9.789 4.789 9.414 4.414 L 5 0 L 0.586 4.414 C 0.211 4.789 0 5.298 0 5.828 L 0 10" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(7 12)" />
    <path d="M 0 0 L 0 4.172 C 0 4.702 0.211 5.211 0.586 5.586 L 5 10 L 9.414 5.586 C 9.789 5.211 10 4.702 10 4.172 L 10 0" fill="transparent" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" transform="translate(7 2)" />
  </Svg>
)

