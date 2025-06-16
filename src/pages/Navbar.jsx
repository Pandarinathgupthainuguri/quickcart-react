import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router'
import { ecomContext } from '../context/ContextProVider';

const Navbar = () => {
  const { allData, setRelatedItem, cartArray } = useContext(ecomContext);

  const navigate = useNavigate();

  const [hoverList, setHoverList] = useState('')
  const [search, setSearch] = useState('');
  const [itemList, setItemList] = useState([]);


  const handleMouseMove = (linkType) => {
    setHoverList(linkType)
  }
  const handleMouseLeave = () => {
    setHoverList('')
  }


  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);




  function handleChange(event) {
    setSearch(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    navigate('/searchItemPage/' + search)

    const searchLower = search.toLowerCase();
    const searchData = allData.filter(elem => {
      return (
        elem.title.toLowerCase().includes(searchLower) ||
        elem.itemType.toLowerCase().includes(searchLower) ||
        elem.brand.toLowerCase().includes(searchLower)
      );
    });
    setRelatedItem(searchData);
    setSearch('');
    // console.log(searchData);

  }

  // navigate to item detail page
  const handleClick = (itemType) => {
    navigate(`/relatedItem/${itemType}`)
  }

  // fashion
  const menWearFilter = allData.filter(item => item.category === 'fashion' && item.gender === 'men' || item.gender === 'unisex')
  const menWear = [...new Set(menWearFilter.map(e => e.itemType))];

  const womenWearFilter = allData.filter(item => item.category === 'fashion' && item.gender === 'women' || item.gender === 'unisex')
  const womenWear = [...new Set(womenWearFilter.map(e => e.itemType))];

  const accessoriesFilter = allData.filter(item => item.itemType === 'Smart Watch' || item.itemType === 'Wallet'
    || item.itemType === 'Sunglasses' || item.itemType === 'Bag' || item.itemType === 'Watch')
  const accessories = [...new Set(accessoriesFilter.map(e => e.itemType))];

  const kidsWearFilter = allData.filter(item => item.category === 'fashion' && item.gender === 'kids')
  const kidsWear = [...new Set(kidsWearFilter.map(e => e.itemType))];

  // Electronics
  const ElectronicsFilter = allData.filter(item => item.category === 'electronics' ||
    item.category === "laptops")
  const ElectronicsItems = [...new Set(ElectronicsFilter.map(e => e.itemType))];

  //appliances
  const appliancesFilter = allData.filter(item => item.category === 'appliances')
  const appliances = [...new Set(appliancesFilter.map(e => e.itemType))];



  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark p-md-0" aria-label="Fourth navbar example">
        <div className="container-fluid px-lg-4">
          <a className="navbar-brand" href="#" onClick={() => navigate('/')}>QuickCart</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse row " id="navbarsExample04">

            <ul className="navbar-nav col-md-6 ps-md-5 px-2 my-md-0 my-2">

              <li className="nav-item p-1 me-md-1 position-relative px-3 dropdown" style={{ backgroundColor: '' }}
                onMouseEnter={() => handleMouseMove('fashion')}
                onMouseLeave={() => handleMouseLeave()}
              >
                {/* {width < 768 && } */}

                {width >= 1024 ? <>
                  <a className="nav-link" href="#" onClick={() => handleClick('fashion')}>Fashion</a>

                  <div className="left position-absolute start-0 top-0 bg-dark" style={{
                    height: '100%', width: '10px', borderRadius: '0 0 5px 0',

                  }}></div>
                  <div className="right position-absolute end-0 top-0 bg-dark" style={{
                    height: '100%', width: '10px', borderRadius: '0 0 0 5px',

                  }}></div>
                </> :
                  <>
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Fashion</a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">All</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">Men's Wear</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">Women's Wear</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">Watches and accessories</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">Kids</a>
                      </li>
                      {/* {
                        menWear.map((e, index) =>
                          <li onClick={() => handleClick(e)} key={index}>
                            <a className="dropdown-item" href="#">{e}</a>
                          </li>)
                      } */}
                    </ul>
                  </>
                }

                {(hoverList === 'fashion' && width >= 1024) && <div className='position-absolute z-3' style={{
                  top: '48px', left: '-63%'
                }}>
                  <ul className="list-group list-group-flush rounded-bottom-3 text-nowrap" style={{ width: '230px' }}>

                    <li id='Men-list' className="list-group-item pointer d-flex justify-content-between align-items-center position-relative">

                      <p className='m-0' >Men's Wear</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="dark" className="ms-2 bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                      </svg>

                      <ul className='subList list-group list-group-flush rounded-end-3 position-absolute' style={{
                        top: '0px', right: '-54%',

                      }}>
                        <li className='list-group-item pointer' onClick={() => handleClick('men')} >All</li>
                        {
                          menWear.map((e, index) => <li key={index} className='list-group-item pointer'
                            onClick={() => handleClick(e)}
                          >{e}</li>)
                        }
                      </ul>

                    </li>



                    <li id='Women-list' className="list-group-item pointer d-flex justify-content-between align-items-center">
                      Women's Wear
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="dark" className="ms-2 bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                      </svg>

                      <ul className='subList list-group list-group-flush rounded-end-3 position-absolute'>
                        <li className='list-group-item pointer'
                          onClick={() => handleClick('women')}
                        >All</li>
                        {
                          womenWear.map((e, index) => <li key={index} className='list-group-item pointer'
                            onClick={() => handleClick(e)}
                          >{e}</li>)
                        }
                      </ul>

                    </li>

                    <li id='Watches-list' className="list-group-item m-0 pointer d-flex justify-content-between align-items-center">
                      Watches and accessories
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="dark" className="ms-2 bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                      </svg>

                      <ul className='subList list-group list-group-flush rounded-end-3 position-absolute'>
                        {/* <li className='list-group-item pointer'
                          onClick={() => handleClick('')}
                        >All</li> */}
                        {
                          accessories.map((e, index) => <li key={index} className='list-group-item pointer'
                            onClick={() => handleClick(e)}
                          >{e}</li>)
                        }
                      </ul>

                    </li>

                    <li id="Kids-list" className="list-group-item pointer d-flex justify-content-between align-items-center">
                      Kids
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="dark" className="ms-2 bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                      </svg>

                      <ul className='subList list-group list-group-flush rounded-end-3 position-absolute'>
                        <li className='list-group-item pointer'
                          onClick={() => handleClick("kids")}
                        >All</li>
                        {
                          kidsWear.map((e, index) => <li key={index} className='list-group-item pointer'
                            onClick={() => handleClick(e)}
                          >{e}</li>)
                        }
                      </ul>

                    </li>
                  </ul>

                </div>}

              </li>

              <li className="nav-item p-1 me-md-1 position-relative px-3">
                <a className="nav-link" href="#" onClick={() => handleClick("smartphones")}>Mobiles</a>
              </li>

              <li className="nav-item p-1 me-md-1 position-relative px-3 dropdown" style={{ backgroundColor: '' }}
                onMouseEnter={() => handleMouseMove('electronics')}
                onMouseLeave={() => handleMouseLeave()}
              >
                {/* {width < 768 && } */}

                {width >= 1024 ? <>
                  <a className="nav-link" href="#" onClick={() => handleClick('electronics')}>Electronics</a>

                  <div className="left position-absolute start-0 top-0 bg-dark" style={{
                    height: '100%', width: '10px', borderRadius: '0 0 5px 0',

                  }}></div>
                  <div className="right position-absolute end-0 top-0 bg-dark" style={{
                    height: '100%', width: '10px', borderRadius: '0 0 0 5px',

                  }}></div>
                </> :
                  <>
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Electronics</a>
                    <ul className="dropdown-menu">
                      <li onClick={() => handleClick('electronics')}>
                        <a className="dropdown-item" href="#">All</a>
                      </li>
                      {
                        ElectronicsItems.map((e, index) =>
                          <li onClick={() => handleClick(e)} key={index}>
                            <a className="dropdown-item" href="#">{e}</a>
                          </li>)
                      }
                    </ul>
                  </>
                }

                {(hoverList === 'electronics' && width >= 1024) && <div className='position-absolute z-3' style={{
                  top: '48px', left: '-43%'
                }}>
                  <ul className="list-group list-group-flush rounded-bottom-3 text-nowrap" style={{ width: '230px' }}>

                    <li className='list-group-item pointer' onClick={() => handleClick('electronics')} >All</li>
                    {
                      ElectronicsItems.map((e, index) => <li key={index} className='list-group-item pointer'
                        onClick={() => handleClick(e)}
                      >{e}</li>)
                    }

                  </ul>

                </div>}

              </li>



              <li className="nav-item p-1 me-md-1 position-relative px-3" style={{ backgroundColor: '' }}
                onMouseEnter={() => handleMouseMove('Appliances')}
                onMouseLeave={() => handleMouseLeave()}
              >

                {width >= 1024 ? <>
                  <a className="nav-link" href="#"
                    onClick={() => handleClick('appliances')}
                  >Appliances</a>
                  <div className="left position-absolute start-0 top-0 bg-dark" style={{
                    height: '100%', width: '10px', borderRadius: '0 0 5px 0',

                  }}></div>
                  <div className="right position-absolute end-0 top-0 bg-dark" style={{
                    height: '100%', width: '10px', borderRadius: '0 0 0 5px',

                  }}></div>
                </> :
                  <>
                    <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Appliances</a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#"
                          onClick={() => handleClick('appliances')}
                        >All</a>
                      </li>
                      {
                        appliances.map((e, index) => <li key={index}>
                          <a className="dropdown-item" href="#"
                            onClick={() => handleClick(e)}
                          >{e}</a>
                        </li>)
                      }
                    </ul>
                  </>

                }

                {(hoverList === 'Appliances' && width >= 1024) && <div className='position-absolute z-3' style={{
                  top: '48px', left: '-14%'
                }}>
                  <ul className="list-group list-group-flush rounded-bottom-3 text-nowrap" style={{}}>
                    <li className="list-group-item pointer"
                      onClick={() => handleClick('appliances')}
                    >All</li>
                    {
                      appliances.map((e, index) => <li key={index} className="list-group-item pointer"
                        onClick={() => handleClick(e)}
                      >{e}</li>)
                    }
                  </ul>
                </div>}

              </li>

            </ul>

            {/* search Bar */}
            <form className='col-lg-4 col-8'
              onSubmit={submitHandler}
            >
              <input className="rounded-3" type="search" placeholder="Search"
                style={{
                  border: 'none', padding: '0 10px 0 10px ',
                  height: '35px', minWidth: '80%'
                }}
                onChange={handleChange}
                value={search}
              />
            </form>

            <div className='col-lg-2 col-4 d-flex justify-content-end gap-4'>
              <span className='d-flex'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-bell pointer" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                </svg>
              </span>

              <span className='d-flex position-relative' onClick={() => navigate(`/cart`)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-handbag pointer position-relative" viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2m3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6z" />
                </svg>
                {
                  cartArray.length != 0 && <span className='position-absolute right text-black-100 bg-white rounded-5 pointer'
                    style={{ fontSize: '12px', padding: '1px 7px', top: '-7px', right: '-12px', fontWeight: '700' }}
                  >{cartArray.length}</span>
                }

              </span>
            </div>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar