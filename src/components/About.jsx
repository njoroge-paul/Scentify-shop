/* eslint-disable react/no-unescaped-entities */
import Navbar from "./Navbar";
//import { Link } from "react-router-dom";

function About() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to Scentify Perfume Shop
        </h1>
        <p className="text-lg mb-6">
          At Scentify, we're passionate about providing our customers with the
          finest perfumes and fragrances from around the world. Our mission is
          to help you discover your new signature scent and make every day a
          little more beautiful.
        </p>
        <h2 className="text-2xl font-bold mb-2">Our Story</h2>
        <p className="text-lg mb-6">
          Scentify was founded by a team of perfume enthusiasts who were tired
          of the same old boring fragrances. We set out to create a shop that
          would offer unique, high-quality perfumes that would evoke emotions
          and create memories. Today, we're proud to offer a curated selection
          of perfumes from niche brands and independent perfumers.
        </p>
        <h2 className="text-2xl font-bold mb-2">Our Values</h2>
        <ul className="list-none mb-6">
          <li className="mb-2">
            <span className="font-bold">Quality:</span> We only sell perfumes
            that we love and use ourselves.
          </li>
          <li className="mb-2">
            <span className="font-bold">Uniqueness:</span> We're always on the
            lookout for new and exciting fragrances that you won't find anywhere
            else.
          </li>
          <li className="mb-2">
            <span className="font-bold">Customer Service:</span> We're here to
            help you find your perfect scent and provide exceptional customer
            service.
          </li>
        </ul>
        <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
        <p className="text-lg mb-6">
          If you have any questions or would like to learn more about our
          perfumes, please don't hesitate to contact us. We'd love to hear from
          you!
        </p>
        <p className="text-lg mb-2 flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          Email:{" "}
          <a
            href="mailto:info@scentify.com"
            className="text-blue-600 hover:text-blue-800"
          >
            info@scentify.com
          </a>
        </p>
        <p className="text-lg mb-2 flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
            />
          </svg>
          Phone: 555-555-5555
        </p>
        <p className="text-lg mb-2 flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          Address: 123 Main St, Anytown, USA
        </p>
      </div>
    </div>
  );
}

export default About;
