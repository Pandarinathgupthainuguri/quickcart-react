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
                      <li onClick={() => handleClick('fashion')}>
                        <a className="dropdown-item" href="#">All</a>
                      </li>
                      {
                        menWear.map((e, index) =>
                          <li onClick={() => handleClick(e)} key={index}>
                            <a className="dropdown-item" href="#">{e}</a>
                          </li>)
                      }
                    </ul>
                  </>
                }

                {(hoverList === 'fashion' && width >= 1024) && <div className='position-absolute z-3' style={{
                  top: '48px', left: '-50%'
                }}>
                  <ul className="list-group list-group-flush rounded-bottom-3 text-nowrap" style={{ width: '230px' }}>

                    <li id='Men-list' className="list-group-item pointer d-flex justify-content-between align-items-center position-relative">

                      <p className='m-0' >Men's Wear</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="dark" className="ms-2 bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                      </svg>

                      <ul className='subList list-group list-group-flush rounded-end-3 position-absolute' style={{ top: '0px', right: '-110px' }}>
                        <li className='list-group-item pointer' onClick={() => handleClick('fashion')} >All</li>
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

                      <ul className='subList list-group list-group-flush rounded-end-3 position-absolute' style={{ top: '0px', right: '-77px' }}>
                        <li className='list-group-item pointer'>All</li>
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

                      <ul className='subList list-group list-group-flush rounded-end-3 position-absolute' style={{ top: '0px', right: '-123px' }}>
                        <li className='list-group-item pointer'>All</li>
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

                      <ul className='subList list-group list-group-flush rounded-end-3 position-absolute' style={{ top: '0px', right: '-118px' }}>
                        <li className='list-group-item pointer'>All</li>
                        <li className='list-group-item pointer'>Kids</li>
                      </ul>

                    </li>
                  </ul>



                </div>}

              </li>