import Chart from '../../components/chart/Chart'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import TableList from '../../components/table/Table'
import './single.scss'

const Single = () => {
  return (
    <div className='single'>
      
      <Sidebar/>
      <div className="single-container">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="edit-button">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
            <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="item__img"
              />

            <div className="details">
              <h1 className="item__title">Jane Doe</h1>
              <div className="details__item">
                <span className="item__key">Email:</span>
                <span className="item__value">janedoe@gmail.com</span>
              </div>
              <div className="details__item">
                <span className="item__key">Phone:</span>
                <span className="item__value">+33 1 23 45 67 89</span>
              </div>
              <div className="details__item">
                <span className="item__key">Address:</span>
                <span className="item__value">Elton St. 234 Garden Yd. New York</span>
              </div>
              <div className="details__item">
                <span className="item__key">Country:</span>
                <span className="item__value">USA</span>
              </div>
            </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 months)"/>
          </div>
        </div>
        <div className="bottom">
          <div className="title">Last transactions</div>
          <TableList/>
        </div>

      </div>

    </div>
  )
}

export default Single