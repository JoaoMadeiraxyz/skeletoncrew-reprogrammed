'use client'


import Image from 'next/image'


import skeletoncrewLogo from "@/assets/images/skeletoncrew.svg"
import heroBackground from '@/assets/images/hero/SkeletonHeroBackground.png';
import vector from '@/assets/images/vector.svg';
import departmentsImgOne from '@/assets/images/departments/dept1.png';
import departmentsImgTwo from '@/assets/images/departments/dept2.png';
import departmentsImgThree from '@/assets/images/departments/dept3.png';
import departmentsImgFour from '@/assets/images/departments/dept4.png';
import departmentsImgFive from '@/assets/images/departments/dept5.png';
import partnerOfferImg from '@/assets/images/partner-offer.png';
import contactUsImg from '@/assets/images/hero/HowItWorksBackground.png';


export default function Home() {
  return (
    <main className='overflow-hidden'>
      <div className='relative justify-center flex flex-col h-screen border-b-2 border-skeletoncrew-light-gray'>
        <Image src={skeletoncrewLogo} className='
            w-full
            mt-5
            px-4
            z-0
            absolute
            top-0
        ' />
        <Image src={heroBackground} className='
            z-10
            bottom-0
            absolute
            left-1/2
            -translate-x-1/2
        ' />
        <Image src={vector} className='
            z-0
            bottom-0
            absolute
            left-1/2
            -translate-x-1/2
        '/>
      </div>
      <div className='flex flex-col items-center py-28'>
        <h2 className='text-skeletoncrew-light-gray text-8xl mb-5'>DEP<span className='text-skeletoncrew-red'>ART</span>MENTS</h2>
        <p className='text-skeletoncrew-gray max-w-2xl text-center mb-10'>Our team includes designers, web developers, copywriters, and account specialists who create projects and solve any problems. We mix strategy and creativity to produce cool digital projects</p>
        <div className='flex gap-4 justify-center items-center'>
          <Image src={departmentsImgOne} className='max-w-xs max-h-80 opacity-60' />
          <Image src={departmentsImgTwo} className='max-w-sm max-h-96 opacity-80' />
          <Image src={departmentsImgThree} className='max-w-md max-h-[448px]' />
          <Image src={departmentsImgFour} className='max-w-sm max-h-96 opacity-80' />
          <Image src={departmentsImgFive} className='max-w-xs max-h-80 opacity-60' />
        </div>
      </div>
      <div className='flex flex-col items-center py-16'>
        <h2 className='text-skeletoncrew-light-gray text-8xl mb-5'>JOIN<span className='text-skeletoncrew-red'> US</span></h2>
        <p className='text-skeletoncrew-gray max-w-2xl text-center mb-10'>Are you looking for an exciting and fullfilling career opportunity? Look no further? we are always on the lookout for talented individuals to join our team.</p>
        <div className='flex text-skeletoncrew-light-gray w-3/4 justify-between border-b-2 border-skeletoncrew-light-gray p-10 pb-2'>
          <p className='text-skeletoncrew-gray'>2023-07-14</p>
          <div className='flex flex-col'>
            <h3 className='text-4xl'>HEAD OF AFFILIATE (CRYPTO)</h3>
            <p className='text-skeletoncrew-gray'>Warsaw</p>
          </div>
          <button className='border-2 rounded-sm border-skeletoncrew-red max-h-11 px-10 py-1'>Read more</button>
        </div>
        <div className='flex text-skeletoncrew-light-gray w-3/4 justify-between border-b-2 border-skeletoncrew-light-gray p-10 pb-2'>
          <p className='text-skeletoncrew-gray'>2023-07-14</p>
          <div className='flex flex-col'>
            <h3 className='text-4xl'>AFFILIATE MANAGER (GAMBLING/CRYPTO)</h3>
            <p className='text-skeletoncrew-gray'>Warsaw</p>
          </div>
          <button className='border-2 rounded-sm border-skeletoncrew-red max-h-11 px-10 py-1'>Read more</button>
        </div>
        <div className='flex text-skeletoncrew-light-gray w-3/4 justify-between border-b-2 border-skeletoncrew-light-gray p-10 pb-2'>
          <p className='text-skeletoncrew-gray'>2023-07-13</p>
          <div className='flex flex-col'>
            <h3 className='text-4xl'>FINANCE MANAGER</h3>
            <p className='text-skeletoncrew-gray'>Warsaw</p>
          </div>
          <button className='border-2 rounded-sm border-skeletoncrew-red max-h-11 px-10 py-1'>Read more</button>
        </div>
        <div className='flex text-skeletoncrew-light-gray w-3/4 justify-between border-b-2 border-skeletoncrew-light-gray p-10 pb-2 mb-16'>
          <p className='text-skeletoncrew-gray'>2023-07-13</p>
          <div className='flex flex-col'>
            <h3 className='text-4xl'>FULLSTACK DEVELOPER</h3>
            <h3 className='text-4xl'>(REACT/VUE.JS+NODE.JS)</h3>
            <p className='text-skeletoncrew-gray'>Warsaw</p>
          </div>
          <button className='border-2 rounded-sm border-skeletoncrew-red max-h-11 px-10 py-1'>Read more</button>
        </div>
        <button className='border-2 border-skeletoncrew-red text-skeletoncrew-red px-32 py-1 rounded-sm'>
          See all
        </button>
      </div>
      <div className='flex flex-col items-center py-16'>
        <h2 className='text-skeletoncrew-light-gray text-8xl'>PARTNER<span className='text-skeletoncrew-red'> OFFER</span></h2>
        <Image src={partnerOfferImg} className='mb-5' />
        <p className='text-skeletoncrew-gray max-w-2xl text-center mb-10'>At The SkeletonCrew, we believe in the power of collaboration and strategic partnership. We are constantly seeking like-minded organizations and businesses to join forces with us and create mutually beneficial partnerships. Join us as a partner and together we can unlock new opportunities, drive growth, and create a winning future.</p>
        <button className='border-2 border-skeletoncrew-red text-skeletoncrew-red px-32 py-1 rounded-sm'>
          Read more
        </button>
      </div>
      <div className='flex flex-col items-center py-16'>
        <h2 className='text-skeletoncrew-light-gray text-8xl'>CONTACT<span className='text-skeletoncrew-red'> US</span></h2>
        <p className='text-skeletoncrew-gray max-w-2xl text-center mb-2'>Have questions or need more information? Get in touch with us using the form below. Our dedicated team is ready to assist you with any inquiries you may have.</p>
        <div className='relative'>
          <Image src={contactUsImg} className='z-50'/>
          <div className='z-10 bottom-0 absolute bg-skeletoncrew-dark-gray w-full px-8 py-4 opacity-80 flex flex-col gap-2 rounded-lg'>
            <label htmlFor="">
              <p className='text-skeletoncrew-light-gray'>Full Name <span className='text-skeletoncrew-red'> *</span></p>
              <input type="text" className='w-full bg-skeletoncrew-gray p-2' />
            </label>
            <label htmlFor="">
              <p className='text-skeletoncrew-light-gray'>Email <span className='text-skeletoncrew-red'> *</span></p>
              <input type="text" className='w-full bg-skeletoncrew-gray p-2' />
            </label>
            <label htmlFor="">
              <p className='text-skeletoncrew-light-gray'>Message</p>
              <textarea name="" id="" className='w-full h-32 bg-skeletoncrew-gray p-2' cols="30" rows="10"></textarea>
            </label>
            <button className='w-full mt-5 bg-skeletoncrew-red py-1 text-skeletoncrew-light-gray'>Send</button>
          </div>
        </div>
      </div>
    </main>
  )
}
