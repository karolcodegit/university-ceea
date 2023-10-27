import React from 'react'
import {Link} from 'gatsby'
import Logo from '../../assets/images/Logo.png'

const menu_links = [
    {
      title: 'Strona główna',
      to: "/",
    },
    {
      title: 'O nas',
      to: "/o-nas",
    },
    {
      title: 'Pracownicy',
      to: "/pracownicy",
    },
    {
      title: 'Kursy',
      to: '/kurs'
    },
    {
      title: 'Książki',
      to: "/ksiazki",
    },
    {
      title: 'Kontakt',
      to: "/kontakt",
    },
  ];
  


const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-300 flex bottom-0 left-0 right-0'>
        <div className='mx-auto max-w-8xl pt-32 lg:px-20 max-lg:mx-6 max-md:mx-4 max-sm:mx-2 '>
            <div className='grid grid-cols-2 max-lg:grid-cols-1 justify-between '>
                <div className='lg:max-w-sm'>
                        <div className='flex items-center'>
                            <img className='h-10 max-w-full' src={Logo} alt="" />
                            <h1 className='font-bold ml-5'>CEEA - Ośrodek Poznański</h1>
                        </div>
                        <p className='leading-6	pt-5'>MedUni to najwyżej oceniany uniwersytet medyczny znany z najnowocześniejszych badań, innowacyjnych programów i wyjątkowej kadry.</p>
                        <div className='flex mt-8'>
                            <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 bg-text-300 mr-2" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path></svg>
                            <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 bg-text-300" aria-hidden="true"><path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd"></path></svg>
                        </div>
                </div>
                <div className='max-w-4xl grid md:grid-cols-3 max-md:grid-cols-2 justify-items-center gap-x-6 max-lg:mt-20 max-lg:gap-x-0'>
                    <div>
                        <>
                        <h3 className="uppercase font-bold">Menu</h3>
                        
                            <ul className='mt-6'>
                            {menu_links.map(link => (

                                <li className='py-1'><Link to={link.to}>{link.title}</Link></li>
                                ))}
                            </ul>
                        </>
                        
                    </div>
                    <div >
                        
                            <h3 className="uppercase font-bold">Przydatne linki</h3>
                            <ul className='mt-6'>

                                <li className='my-2'>Strona główna</li>
                                <li className='my-2'>Kursy</li>
                                <li className='my-2'>Książki</li>
                                <li className='my-2'>Kontakt</li>
                            </ul>
                        
                    </div>
                    <div className='flex flex-col max-md:hidden'>

                            <p className='pb-4 font-bold'>Europejska Fundacja ds. Szkolenia w Anestezjologii</p>
                            <span className='py-2'>ul. Sokolnicka 56</span>
                            <span className=''>62-021 Paczkowo</span>
                    </div>
                </div>
            </div>
            <div className='flex justify-between py-6 mt-24 border-t border-slate-50 text-xs mx-auto'>
                <div className='flex flex-col'>
                    <span>© {new Date().getFullYear()} CEEA. Wszelkie prawa zastrzeżone.</span>
                    <span className='max-md:mt-2'>Wykonanie: Karol Znojkiewicz</span>
                </div>
                <div className='flex flex-col '>
                    <span >Konto bankowe: Santander Bank Polska S.A.</span>
                    <span>47 1140 2004 0000 3202 8319 5381</span>
                </div>

                <span className='max-md:mt-2'>Terms & conditions | Sitemap | Privacy Policy | Cookies Policy</span>
            </div>
        </div>
    </footer>
  )
}

export default Footer