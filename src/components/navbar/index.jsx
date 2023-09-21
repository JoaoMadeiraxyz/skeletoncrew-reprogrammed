import Image from "next/image"


import skeletoncrewLogo from "@/assets/images/skeletoncrew.svg"


export default function NavBar() {
  return (
    <>
      <div className="
      bg-black
        flex
        w-full
        p-5
        justify-between
        items-center
        border-skeletoncrew-light-gray
        border-b
      ">
        <div>
          <Image className="
            hover:cursor-pointer
          "
          src={skeletoncrewLogo}
          />
        </div>
        <div className="
          flex
          gap-4
          uppercase
          text-skeletoncrew-light-gray
          items-center
        ">
          <p className="
            hover:cursor-pointer
            hover:font-bold
            transition-all
            duration-500
          ">
            Carrers
          </p>
          <p className="
            hover:cursor-pointer
            hover:font-bold
            transition-all
            duration-500
          ">
            Services
          </p>
          <p className="
            hover:cursor-pointer
            hover:font-bold
            transition-all
            duration-500
          ">
            Partner offer
          </p>
          <p className="
            hover:cursor-pointer
            hover:font-bold
            transition-all
            duration-500
          ">
            Blog
          </p>
          <button className="
            ml-4
            px-10
            py-1
            border-skeletoncrew-red
            bg-transparent
            hover:bg-skeletoncrew-red
            transition-all
            duration-500
            rounded-md
            border-2
          ">
            Contact us
          </button>
        </div>
      </div>
    </>
  )
}
