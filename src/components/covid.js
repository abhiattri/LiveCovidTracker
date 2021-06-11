import React,{useEffect,useState} from 'react'
import './covid.css';
const Covid = () => {

    const [Data,setData] = useState([]);

const getCovidData = async ()=>
{try{
    const res = await  fetch('https://api.covid19india.org/data.json');
    const data =   await res.json();
    console.log(data.statewise[0]);
    setData(data.statewise[0]);
}catch(error){
console.log(error);
}
  
}

    useEffect(() => {
      getCovidData();
    }, []);




    return (
        <>
            <h1> LIVE </h1>
        <h2>COVID 19 CORONAVIRUS TRACKER</h2>
        <ul className='f'>
            <li className="card">
                <div className="c">
                    <p><span>OUR </span> COUNTRY</p>
                    <p className="cou">INDIA</p>
                </div>

            </li>
        </ul>
        <ul className='s'>
            <li className="card">
                <div className="c">
                    <p><span>TOTAL </span> RECOVERED</p>
                    <p className="cou">{Data.recovered}</p>
                </div>

            </li>
        </ul>
        <ul className='t'>
            <li className="card">
                <div className="c">
                    <p><span>TOTAL </span> CONFIRMED</p>
                    <p className="cou">{Data.confirmed}</p>
                </div>

            </li>
        </ul>
        <ul className='s4'>
            <li className="card">
                <div className="c">
                    <p><span>TOTAL </span> DEATH</p>
                    <p className="cou">{Data.deaths}</p>
                </div>

            </li>
        </ul>
        <ul className='s5'>
            <li className="card">
                <div className="c">
                    <p><span>TOTAL</span> ACTIVE</p>
                    <p className="cou">{Data.active}</p>
                </div>

            </li>
        </ul>
        <ul className='s6'>
            <li className="card">
                <div className="c">
                    <p><span>LAST </span> UPDATED</p>
                    <p className="cou">{Data.lastupdatedtime}</p>
                </div>

            </li>
        </ul>
        </>
    )
}

export default Covid
