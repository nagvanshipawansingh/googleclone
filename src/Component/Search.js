import React, {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import './Search.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';


export default function Search({hideButtons = false}) {
     
    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState('');

    const navigate = useNavigate();
    

   

    const searchRes = (e) =>{ 
        e.preventDefault();
        navigate('/searchpage');

        dispatch({
            type: actionType.SET_SEARCH_TERM,
            term: input
        })
       
    }
  return (
    <form className='search'>
    
        <div className='search_input'>
        <SearchIcon className='search_inputIcon'/>
            <input type="text" value={input}
            onChange={event=> setInput(event.target.value)}/>
            <MicIcon/>
        </div>

        {!hideButtons ?(
            <div className='search_buttons'>
             <Button variant='outlined' type='submit' onClick={searchRes}>GOOGLE SEARCH</Button>
             <Button variant='outlined'>I'M FEELING LUCKY</Button>
 
        </div>
        ): (
            <div className='search_buttons'>
             <Button className='search_buttonsHidden' variant='outlined' type='submit' onClick={searchRes}>GOOGLE SEARCH</Button>
             <Button className='search_buttonsHidden' variant='outlined'>I'M FEELING LUCKY</Button>
 
        </div>)}
        
    </form>
  )
}
