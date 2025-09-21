// src/shared/components/layouts/SidebarLogo.tsx
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const SidebarLogo: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigateHome = () => {
    navigate('/')
  }

  const isHomePage = location.pathname === '/'

  return (
    <div
      className={`
        flex items-start gap-2 md:gap-4 group cursor-pointer
        sm:cursor-default
        md:cursor-pointer
        ${isHomePage ? 'opacity-100' : 'opacity-90 hover:opacity-100'}
        transition-opacity duration-300
      `}
      onClick={handleNavigateHome}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleNavigateHome()
        }
      }}
      aria-label="Voltar para a página inicial"
    >
      {/* First SVG - Bar Chart Icon */}
      <svg
        className="h-8 md:h-16 text-[#646569] flex-shrink-0"
        width="72"
        height="40"
        viewBox="0 0 67 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M0 19.9252L7.79827 17.5815V0.39456H0V19.9252Z"
          fill="currentColor"
        />
        <path
          d="M7.79827 39.456V22.269L0 19.9252V39.456H7.79827Z"
          fill="currentColor"
        />
        <path
          d="M11.6973 19.9252L19.4954 17.5815V0.39456H11.6973V19.9252Z"
          fill="currentColor"
        />
        <path
          d="M11.6973 39.456H19.4954V22.269L11.6973 19.9252V39.456Z"
          fill="currentColor"
        />
        <path
          d="M23.3946 16.4098L31.1927 14.0661V0.39456H23.3946V16.4098Z"
          fill="currentColor"
        />
        <path
          d="M23.3946 39.456H31.1927V25.7844L23.3946 23.4408V39.456Z"
          fill="currentColor"
        />
        <path
          d="M35.092 19.9252L42.8901 17.5815V0.39456H35.092V19.9252Z"
          fill="currentColor"
        />
        <path
          d="M35.092 39.456H42.8901V22.269L35.092 19.9252V39.456Z"
          fill="currentColor"
        />
        <path
          d="M46.7893 16.4098L54.5874 14.0661V0.39456H46.7893V16.4098Z"
          fill="currentColor"
        />
        <path
          d="M46.7893 39.456H54.5874V25.7844L46.7893 23.4408V39.456Z"
          fill="currentColor"
        />
        <path
          d="M58.4864 12.8942L66.2847 10.5506V0.39456H58.4864V12.8942Z"
          fill="currentColor"
        />
        <path
          d="M58.4864 39.456H66.2847V29.3L58.4864 26.9563V39.456Z"
          fill="currentColor"
        />
      </svg>

      {/* Second SVG - Container Text com efeito cortina */}
      <div className="relative flex-shrink-0 overflow-hidden">
        <svg
          className="h-8 md:h-16 text-[#646569]"
          width="216"
          height="90"
          viewBox="0 0 216 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M191.008 7.87202V0.450362H173.797V39.4002H191.008V31.9785H181.595V22.2132H189.17V14.7357H181.595V7.87202H191.008Z"
            fill="currentColor"
          />
          <path
            d="M162.099 0.506166V32.0343H159.871V15.2937L157.81 0.506166H147.617V39.456H155.415V7.92783H157.643V25.0032L160.15 39.456H169.898V0.506166H162.099Z"
            fill="currentColor"
          />
          <path
            d="M209.26 25.0032C211.711 24.8916 213.326 23.385 213.326 21.1529V4.3565C213.326 2.06862 211.6 0.506166 208.982 0.506166H193.831V39.456H201.629V25.059H203.801V29.2325L208.202 39.456H216L209.26 25.0032ZM205.528 18.5302H201.629V7.98363H205.528V18.5302Z"
            fill="currentColor"
          />
          <path
            d="M135.92 0.506166V32.0343H133.692V15.2937L131.631 0.506166H121.437V39.456H129.236V7.92783H131.464V25.0032L133.97 39.456H143.718V0.506166H135.92Z"
            fill="currentColor"
          />
          <path
            d="M117.538 0.394558H109.74V39.456H117.538V0.394558Z"
            fill="currentColor"
          />
          <path
            d="M94.2551 26.8447L95.4248 16.9678V7.92783H97.6529V16.9678L98.8226 26.8447H94.2551ZM102.22 0.506166H90.913L84.953 39.456H92.7512L93.3639 34.3222H99.7139L100.327 39.456H108.125L102.22 0.506166Z"
            fill="currentColor"
          />
          <path
            d="M88.314 0.450362H67.0918V7.87202H73.8316V39.456H81.6298V7.87202H88.314V0.450362Z"
            fill="currentColor"
          />
          <path
            d="M57.6593 0.506166V32.0343H55.4312V15.2937L53.3703 0.506166H43.1769V39.456H50.9751V7.92783H53.2032V25.0032L55.7097 39.456H65.4575V0.506166H57.6593Z"
            fill="currentColor"
          />
          <path
            d="M31.4796 32.0343H27.5805V7.92783H31.4796V32.0343ZM34.8774 0.506166H24.2385C21.5091 0.506166 19.7823 2.01282 19.7823 4.46811V35.494C19.7823 37.8935 21.5091 39.456 24.2385 39.456H34.8774C37.5511 39.456 39.2778 37.8935 39.2778 35.494V4.46811C39.2778 2.01282 37.5511 0.506166 34.8774 0.506166Z"
            fill="currentColor"
          />
          <path
            d="M16.5333 7.92783V0.506166H5.2816C2.60793 0.506166 0.881187 2.06862 0.881187 4.46811V35.494C0.881187 37.8935 2.60793 39.456 5.2816 39.456H16.5333V32.0343H8.67938V7.92783H16.5333Z"
            fill="currentColor"
          />
        </svg>

        {/* Cortina que cobre o texto inicialmente */}
        <div
          className="
            absolute inset-0 bg-[#191919] translate-x-0
            group-hover:translate-x-full transition-transform duration-500
            sm:transition-none sm:group-hover:translate-x-0
            md:transition-transform md:duration-500 md:group-hover:translate-x-full
          "
          style={{
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        ></div>
      </div>
    </div>
  )
}

export default SidebarLogo
