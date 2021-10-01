import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { FcPrevious } from 'react-icons/fc';
import { FcNext } from 'react-icons/fc';
import './cars.css';
import axios from 'axios';
import ButtonAppBar from './navbar.js'
import ItemsCarousel from 'react-items-carousel';
import Button from '@material-ui/core/Button';


export default function Cars() {





  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [car, setcar] = useState(false);
  const chevronWidth = 40;

  useEffect(() => {
    // GET request using axios inside useEffect React hook
    axios.get('http://localhost:2000/getAll')
      .then(car => setcar(car.data.cars));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)

    // *********************************************
  }, []);



  return (
    <>

      <di>
        <ButtonAppBar className="but-marg"></ButtonAppBar>
        <div style={{ padding: `0 ${chevronWidth}px` }}>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={5}
            gutter={20}
            leftChevron={<FcPrevious className="w-6 h-14" />}
            rightChevron={<FcNext className="w-6 h-14" />}
            outsideChevron
            chevronWidth={chevronWidth}

          >

            {car && car.map(i => (

              <div className=" mt-8 space-x-1 space-y-2">
                <div className="car">
                  <img className="z-1 img1 mb-6 m-auto" src={`http://localhost:2000/${i.image}`}></img>
                  <p className="m-auto px-2 text-left txt-name">{i.name}</p>

                  <Button variant="contained" color="primary" href="/Login">
                    Comment
                  </Button>

                </div>
              </div>

            ))}
          </ItemsCarousel>
        </div>
        

      </di>
    </>
  );
};








