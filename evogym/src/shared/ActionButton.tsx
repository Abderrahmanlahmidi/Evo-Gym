import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { selectedPage } from './types';

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value:selectedPage) => void;
}

function ActionButton({children,setSelectedPage}: Props) {
  return (
    <AnchorLink 
      onClick={() => setSelectedPage(selectedPage.ContactUs)}
      className='rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500'
      href={`#${selectedPage.ContactUs}`}
     >
       {children}
    </AnchorLink>
  ) 
}

export default ActionButton;  