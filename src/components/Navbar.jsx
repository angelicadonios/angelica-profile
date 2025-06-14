import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, EnvelopeIcon, AtSymbolIcon, CodeBracketIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import logo from "../assets/images/logo.png";

const navigation = [
  { name: 'Home', href: '#home', current: false },
  { name: 'About', href: '#about', current: false },
  { name: 'Experience', href: '#experience', current: false },
  { name: 'Projects', href: '#projects', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-slate-900 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Angelica"
                src={logo}
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300',
                      'rounded-md px-3 py-2 text-sm font-medium nav-highlight',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a href="mailto:angelicadonios@gmail.com" target="_blank" className="relative bg-slate-900 p-1 text-gray-400 nav-highlight">
              <EnvelopeIcon aria-hidden="true" className="size-5" />
            </a>
            <a href="https://www.linkedin.com/in/angelica-donios/" target="_blank" className="relative bg-slate-900 p-1 text-gray-400 nav-highlight">
              <AtSymbolIcon aria-hidden="true" className="size-5" />
            </a>
            <a href="https://github.com/angelicadonios" target="_blank" className="relative bg-slate-900 p-1 text-gray-400 nav-highlight">
              <CodeBracketIcon aria-hidden="true" className="size-5" />
            </a>
            {/* <a href="https://medium.com/@snowiangel" target="_blank" className="relative bg-slate-900 p-1 text-gray-400 hover:text-white">
              <PencilSquareIcon aria-hidden="true" className="size-5" />
            </a> */}
            
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700',
                'block rounded-md px-3 py-2 text-base font-medium nav-highlight',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>

  )
}

export default Navbar