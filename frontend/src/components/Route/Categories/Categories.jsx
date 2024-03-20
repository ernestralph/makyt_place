import React from 'react'
import styles from '../../../styles/styles'
import { brandingData, categoriesData } from '../../../static/data'
import { useNavigate } from 'react-router-dom'

const Categories = () => {

  const navigate = useNavigate
  ()
  return (
    <>
     <div className={`${styles.section} hiden sm:block`}>
      <div className={`branding my-12 flex flex-col md:flex-row md:justify-between  w-full shadow-sm bg-white p-5 rounded-md`}>
       {
        brandingData && brandingData.map((i, index)=>(
         <div className="flex md:items-start w-100 mb-10" key={index}>
          {i.icon}
          <div className='px-3 ml-3 md:ml-0'>
           <h3 className="font-bold text-sm md:text-base">
            {i.title}
           </h3>
           <p className='text-xs md:text-sm'>{i.Description}</p>
          </div>
         </div>
        ))
       }
      </div>
     </div>

     <div className={`${styles.section} bg-white p-6 rounded-lg mb-12`} id='categories'>
      <div className="grid grid-cols-1 gap-[5px] md:grid-cols-2 md:gap-[10px] lg:grid-cols-4 lg-gap-[20px] xl:grid-cols-5 xl:gap-[30px]">
        {
          categoriesData && categoriesData.map((i, index) =>{
            const handleSubmit = (i) =>{
              navigate(`/product?category=${i.title}`)
            }

            return (
              <div className="w-full h-[100px] flex items-center justify-between cursor-onter overflow-hidden" key={i.id}
              onClick={()=> handleSubmit} 
              >
                <h5 className='text=[18px] leading-[1.3]'>{i.title}</h5>
                <img src={i.image_Url} alt=""  />
              </div>
            );
          })
        }
      </div>
     </div>
    </>
  )
}

export default Categories
