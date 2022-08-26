import React from "react";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <footer
      style={{ background: `url(${footer})`, backgroundSize: "cover" }}
      class=" p-10 "
    >
      <div className="footer">
        <div className="w-1/2 mx-auto">
          <span class="footer-title">Services</span>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div>
        <div className="w-1/2 mx-auto">
          <span class="footer-title">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div>
        <div className="w-1/2 mx-auto">
          <span class="footer-title">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </div>
      <div>
        <footer class="footer footer-center pt-20  text-base-content">
          <div>
            <p>Copyright © 2022 - All right reserved</p>
          </div>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
