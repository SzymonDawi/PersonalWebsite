import localFont from 'next/font/local';

export const project_slugs = ["personal-website"]

export const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL

export const customBreakpoints = {
    xs: 480, 
    sm: 576, 
    md: 768, 
    lg: 992, 
    xl: 1600, 
    xxl: 2000
}


export const Sideboard = localFont({
  src: "./_fonts/Sideboard-PersonalUseOnly.otf",
  display: 'swap',
})