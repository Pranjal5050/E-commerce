import React from 'react'

const Banner = () => {
  return (
    <section className="w-full px-3 sm:px-5 lg:px-8 mb-20 md:mb-0">
      <div
        className="
          relative mx-auto
          w-full max-w-[1400px]
          overflow-hidden
          rounded-xl
          bg-[#F8EDE3]

          h-[180px]
          sm:h-[220px]
          md:h-[250px]
          lg:h-[290px]
        "
      >
        {/* Background Image */}
        <img
          src="/images/banner2.png"
          alt="New Season"
          className="
            absolute inset-0
            h-full w-full
            object-cover

            object-[68%_center]
            sm:object-[70%_end]
            lg:object-center
          "
        />

        {/* Gradient Overlay */}
        <div
          className="
            absolute inset-0

            bg-gradient-to-r
            from-[#F8EDE3]
            via-[#F8EDE3]/45
            md:via-[#F8EDE3]/20
            via-[45%]
            to-transparent

            sm:via-[45%]
            lg:via-[42%]
          "
        />

        {/* ================= CONTENT ================= */}
        <div
          className="
            absolute left-0 top-0
            z-10
            flex h-full
            flex-col justify-center

            w-[68%]
            px-4

            sm:w-[58%]
            sm:px-6

            md:w-[55%]
            md:px-7

            lg:w-[50%]
            lg:px-10
          "
        >
          {/* Small Label */}
          <p
            className="
              mb-1
              text-[7px]
              font-bold
              tracking-[0.18em]
              text-[#31552D]

              sm:text-[9px]
              md:text-[10px]
              lg:text-xs
            "
          >
            NEW SEASON
          </p>

          {/* Heading */}
          <h2
            className="
              text-[21px]
              font-bold
              leading-[1.02]
              tracking-tight
              text-black

              sm:text-[27px]
              md:text-3xl
              lg:text-4xl
              xl:text-[42px]
            "
          >
            Minimal Looks
            <br />
            Maximum You
          </h2>

          {/* Description */}
          <p
            className="
              mt-2
              max-w-[190px]
              text-[9px]
              leading-[1.4]
              text-gray-700

              sm:max-w-[230px]
              sm:text-xs
              sm:leading-5

              md:text-sm
              lg:max-w-[280px]
            "
          >
            Discover timeless styles crafted for everyday comfort and
            confidence.
          </p>

          {/* Button */}
          <button
            className="
              group
              mt-3
              flex w-fit
              items-center gap-1.5
              rounded-md
              bg-[#145C20]
              px-3
              py-2
              text-[9px]
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-[#0d4517]

              sm:mt-4
              sm:px-4
              sm:py-2.5
              sm:text-xs

              md:text-sm
              lg:px-5
              lg:py-3
            "
          >
            Shop New Collection

            <i
              className="
                ri-arrow-right-line
                text-sm
                transition-transform
                duration-300
                group-hover:translate-x-1

                sm:text-base
              "
            />
          </button>
        </div>

        {/* ================= DISCOUNT BADGE ================= */}
        <div
          className="
            absolute
            right-3
            top-3
            z-20

            flex
            h-[55px]
            w-[55px]
            items-center
            justify-center
            rounded-full
            bg-[#145C20]
            text-center
            text-white
            shadow-md

            sm:right-5
            sm:top-5
            sm:h-[68px]
            sm:w-[68px]

            md:h-[80px]
            md:w-[80px]

            lg:right-8
            lg:top-7
            lg:h-[100px]
            lg:w-[100px]
          "
        >
          <div>
            <p
              className="
                text-[6px]
                font-medium
                tracking-wider

                sm:text-[7px]
                md:text-[8px]
                lg:text-[10px]
              "
            >
              UP TO
            </p>

            <p
              className="
                text-lg
                font-bold
                leading-none

                sm:text-xl
                md:text-2xl
                lg:text-4xl
              "
            >
              50%
            </p>

            <p
              className="
                text-[6px]
                font-medium
                tracking-wider

                sm:text-[7px]
                md:text-[8px]
                lg:text-[10px]
              "
            >
              OFF
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner