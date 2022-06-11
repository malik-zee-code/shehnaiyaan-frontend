import React from "react";
import pic from "../../Assets/stock-vector-couple-in-love-hold-hands-pop-art-style-hand-drawn-vector-illustration-comic-book-style-imitation-568428577.jpg";
import pic1 from "../../Assets/alaksiej-carankievic-dKEFdOwY2hQ-unsplash.jpg";
import pic2 from "../../Assets/andrea-de-santis-b0csP38v5i4-unsplash.jpg";
import pic3 from "../../Assets/aedrian-sUXasZyLX2w-unsplash.jpg";
const Landing = () => {
  return (
    <div className=" w-full  p-20 ">
      <div className=" grid  grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col  ">
          <span className="text-4xl font-bold font-serif">
            Let's Bring <br /> Smiles Together
          </span>

          <div className="mt-7 flex-5 ">
            <span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ab
              eveniet in modi est aliquid enim quas corporis similique itaque
              exercitationem assumenda officia natus nisi nemo illo quam omnis
              porro quo, incidunt minima. Harum deleniti id illum facere dolore
              necessitatibus qui aliquid blanditiis tempore quaerat repellendus
              fuga repellat delectus nam totam atque ab soluta, consequuntur non
              provident? Dolore in magni error, nostrum, quas aliquam doloremque
              eligendi quasi corporis debitis similique eaque hic alias neque.
              Consectetur quos dignissimos, rerum ducimus dicta voluptas
              deleniti animi facilis architecto atque deserunt autem, reiciendis
              non id libero. Sit, quasi cum vitae voluptatem odio qui harum!
            </span>
          </div>
        </div>
        <div className=" w-auto">
          <img
            src={pic}
            alt=""
            className=" w-72 md:text-center md:ml-auto mt-5 "
          />
        </div>
      </div>

      <div className="flex flex-col items-center mt-32">
        <span className="text-5xl font-serif ">What we Offer</span>
        <span className="text-center mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Nisi
          expedita rerum quaerat. Natus, dolorum odit! Aut numquam voluptate
          pariatur cumque.
        </span>

        <div className="grid grid-cols-2 md:grid-cols-3  gap-8 mt-10 ">
          <img src={pic1} alt="" className=" w-[300px] " />
          <img src={pic2} alt="" className=" w-[300px] " />
          <img src={pic3} alt="" className=" w-[300px] " />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-14 ">
        <img
          src={pic2}
          alt=""
          className=" w-[300px] h-[400] place-self-center "
        />
        <div className=" mt-4 flex flex-col items-center md:items-end md:text-right place-self-center">
          <span className="font-serif text-3xl">Learn About Us</span>
          <span className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            nostrum consectetur facilis quibusdam quis libero expedita soluta.
          </span>
          <button className="mx-3 p-3 bg-indigo-500 rounded-tl-[18px] rounded-br-[18px] text-white px-8">
            Want to Know More?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
