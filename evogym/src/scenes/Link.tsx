import AnchorLink from 'react-anchor-link-smooth-scroll';
import { selectedPage } from '../shared/types';

type Props = {
  page:string;
  SelectedPage:selectedPage;
  setSelectedPage:(value: selectedPage) => void;
}

const Link = ({page, SelectedPage, setSelectedPage}: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as selectedPage;
  return (
    <AnchorLink
       className={`${SelectedPage === lowerCasePage ? "text-primary-500" : ""}
       transition duration-500 hover:text-primary-300`}
       href={`#${lowerCasePage}`}
       onClick={() => setSelectedPage(lowerCasePage)} 
    >
       {page}
    </AnchorLink>
  )
}

export default Link;