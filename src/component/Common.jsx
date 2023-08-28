import React from 'react'
import { NavLink } from 'react-router-dom'
import './Common.css'

function Common(props) {
  return (
    <>
            <section>
                <div className='sectionDiv1 container '>
                    <div className='sectionDiv2 row mx-auto'>
                        <div className='sectionDiv3 col-md-6 pt-5 pt-lg-0 order-2 order-md-1'>
                            <h1 className='h1'>{props.title}<strong> M&B Group</strong></h1>
                            <h2 className='h2 my-3 '>
                                {props.details}
                            </h2>
                            <div className='mt-3'>
                                <NavLink to={props.services} className='btn-get-started '>{props.button}</NavLink>

                            </div>
                        </div>
                        <div className='col-md-6 pt-0 pt-lg-0 order-1 order-md-2 px-md-5'>
                            
                            <img className='div-img img-fluid ' src={props.img} alt={props.img} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common