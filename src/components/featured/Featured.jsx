import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featured__top">
            <h1 className='featured__top__title'>Total revenue</h1>
            <MoreVertIcon fontSize='small'/>
        </div>    
        <div className="featured__bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text='70%' strokeWidth={5}/>
            </div>
            <p className="featured__bottom__title">
                Total sales made today
            </p>  
            <p className="featured__bottom__amount">
                $420
            </p>  
            <p className="featured__bottom__description">
                Previous transactions processing. Last payments may not be included.
            </p>  
            <div className='summary'>
                <div className="item">
                    <div className="item__title">Target</div>
                    <div className="item__result positive">
                        <KeyboardArrowUpIcon fontSize='small'/>
                        <div className="item__result__amount">$12.4k</div>    
                    </div>
                </div>
                <div className="item">
                    <div className="item__title">Last week</div>
                    <div className="item__result negative">
                        <KeyboardArrowDownIcon fontSize='small'/>
                        <div className="item__result__amount">$12.4k</div>    
                    </div>
                </div>
                <div className="item">
                    <div className="item__title">Last month</div>
                    <div className="item__result positive">
                        <KeyboardArrowUpIcon fontSize='small'/>
                        <div className="item__result__amount">$12.4k</div>    
                    </div>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Featured