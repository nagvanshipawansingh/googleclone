import React from 'react'
import { useStateValue } from './StateProvider'
import useGoogleSearch from './useGooogleSearch';
import responce from "./Responce.json";
import { Link } from 'react-router-dom';
import './searchPage.css';
import Search from './Search';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ImageIcon from '@mui/icons-material/Image';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';




export default function SearchPage() {

  const [{ term }, dispatch] = useStateValue();

  // Live API call
  const { data } = useGoogleSearch(term);

  // const data = responce;  // Mock API Call

  console.log({ data });

  return (
    <div className='SearchPage'>
      <div className='searchPage_header'>
        <Link to='/'>
          <img className='searchPage_logo'
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" alt="" />
        </Link>
        <div className='searchPage_headerBody'>
          <Search hideButtons />
          <div className='searchPage_options'>
            <div className='searchPage_optionsLeft'>
              <div className='searchPage_option'>
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className='searchPage_option'>
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className='searchPage_option'>
                <RoomIcon />
                <Link to="/map">Map</Link>
              </div>
              <div className='searchPage_option'>
                <ImageIcon />
                <Link to="/Images">Images</Link>
              </div>
              <div className='searchPage_option'>
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className='searchPage_option'>
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>



            </div>
            <div className='searchPage_optionsRight'>
              <div className='searchPage_option'>
                <Link to="/settimgs">Settings</Link>
              </div>
              <div className='searchPage_option'>
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
      {term && (<div className='searchPage_results'>
        <p className='searchPage_resultCount'>
          About {data?.searchInformation.formattedTotalResults} results
          ({data?.searchInformation.formattedSearchTime} seconds)
          for {term}
        </p>

        {data?.items?.map((item, index) => (
          <div className='searchPage_result' key={index}>
            <a className='searchPage_reultLink' href={item.link}>
              {item?.pagemap?.cse_image?.length > 0
                && item?.pagemap?.cse_image[0]?.src && (

                  <img className='searchPage_resultImage'
                    src={item?.pagemap?.
                      cse_image[0]?.src
                    }
                    alt="" />

                )}

              {item.displayLink}
            </a>
            <a className='searchPage_resultTitle'
              href={item.link}>
              <h2>{item.title}</h2>
            </a>
            <p className='searchPage_resultSnippet'>
              {item.snippet}
            </p>
          </div>
        ))}
      </div>

      )}


    </div>
  )
}
