import React from 'react'
import { Link } from 'gatsby'
import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Button from '../Button/Button'
import Logo from '../../assets/images/logo-header.png'

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

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)



  return (
    <header className="relative bg-medium px-5"  >
      <nav className="mx-auto flex items-center h-28 justify-between" aria-label="Global">
        <div className='max-lg:w-full flex justify-between'>
          <div className='absolute max-lg:hidden top-0 left-0 right-0 w-30 h-48 bg-gradient-to-r from-cyan-500 to-blue-500 skew-x-40 scale-x-150	'></div>
            <div className="flex z-50">
              <Link to="/" className="-m-1.5 p-1.5 flex lg:pt-10">
                <span className="sr-only">CEEA - Ośrodek Poznański</span>
                <img className="w-auto xl:h-12 max-xl:h-10 max-lg:h-8 grow z-50 lg:pr-10" src={Logo} alt="Logo CEEA" />
                {/* <h1 className='text-lg lg:text-gray-100'>CEEA - Ośrodek Poznański</h1> */}
              </Link>
            </div>
          
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className='flex items-center flex-1'>
          {/* Navigation */}
          <Popover.Group className="hidden h-full lg:flex xl:gap-x-12 max-xl:gap-x-8 max-lg:gap-x-6 items-center flex-1 justify-center ">
            {menu_links.map(link => (

              <Link to={link.to} className='text-gray-100 hover:text-gray-500 delay-100'>{link.title}</Link>
            ))}
            
          </Popover.Group>
          <div className="max-2xl:hidden flex ">
            <Button>
              Zapisz się teraz <span aria-hidden="true">&rarr;</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            
              <Link to="/" className=" -m-1.5 p-1.5">
                
                  <span className="sr-only">CEEA - Ośrodek Poznański</span>
                  <img
                    className="h-8 w-auto mr-5"
                    src={Logo}
                    alt=""
                  />
                
              </Link>
            
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root ">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-5 py-6 flex flex-col">
                {menu_links.map(link => (

                  <Link to={link.to}>{link.title}</Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  to="/zapisz-sie"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Zapisz się teraz
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Header;