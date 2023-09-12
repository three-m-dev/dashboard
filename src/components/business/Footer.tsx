import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                THREE M
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Company
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/services" className="hover:underline">
                    Services
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/careers" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/portal/" className="hover:underline">
                    Portal
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Follow us
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    to="https://www.facebook.com/threemtoolandmachineinc/"
                    target="blank"
                    className="hover:underline"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/company/three-m-tool-&-machine-inc"
                    target="blank"
                    className="hover:underline"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Legal
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto lg:my-8" />
        <div className="flex items-center justify-center">
          <span className="text-sm text-gray-400 text-center">
            © 2023{" "}
            <Link to="/" className="hover:underline">
              Three M Tool & Machine Inc
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
