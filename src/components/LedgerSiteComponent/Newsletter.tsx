import { BsTwitterX } from "react-icons/bs";
import { FaDiscord, FaFacebook, FaReddit, FaTiktok } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GrInstagram, GrLinkedin } from "react-icons/gr";
import { SiYoutube } from "react-icons/si";
import { SlSocialYoutube } from "react-icons/sl";

const Newsletter = () => {
  return (
    <div
      className="py-20 "
      style={{
        background:
          "linear-gradient(104deg,#000 9.86%,#181818 50.03%,#000 90.19%)",
      }}
    >
      <div className="row">
        <div className="row flex justify-between px-12">
          <div className="space-y-4 flex flex-col  ">
            <h3 className="heading-3">Stay in touch</h3>
            <p>Announcements can be found in our blog.</p>
            <ul className="list-none flex items-center gap-6">
              <li className="text-white text-lg">
                <FaReddit />
              </li>
              <li className="text-white text-lg">
                <FaFacebook />{" "}
              </li>
              <li className="text-white text-lg">
                <GrInstagram />
              </li>
              <li className="text-white text-lg">
                <BsTwitterX />
              </li>
              <li className="text-white text-lg">
                <SiYoutube />
              </li>
              <li className="text-white text-lg">
                <GrLinkedin />
              </li>
              <li className="text-white text-lg">
                <FaTiktok />
              </li>
              <li className="text-white text-lg">
                <FaDiscord />
              </li>
            </ul>
          </div>

          <div className="space-y-4 flex flex-col gap-2 ">
            <h3 className="heading-3">
              Subscribe to our <br />
              newsletter
            </h3>
            <p>
              New coins supported, blog updates and exclusive offers directly in
              your inbox.
            </p>

            <div className="flex   gap-2">
              <input
                type="text"
                placeholder="Enter you email"
                className="border border-[#A3A3A3] rounded-full px-18 py-4 placeholder:text-white placeholder:-translate-x-12"
              />
              <button className="px-8 py-4 bg-white rounded-full text-black">
                Subscribe to newsletter
              </button>
            </div>
            <p className="text-[#A3A3A3] w-3xl text-sm">
              Your email address will only be used to send you our newsletter,
              as well as updates and offers.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
