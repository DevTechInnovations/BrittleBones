
import { Heart, Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { TikTok } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
                <img src="/src/assets/brittlebones-removebg-preview.png" alt="Brittle Bones Logo" className="h-17 w-16" />
              <span className="text-xl font-bold">Brittle Bones</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Building stronger communities through compassion, action, and hope. 
              Together, we create lasting positive change in the lives of those who need it most.
            </p>
          <div className="flex space-x-4">
  {/* Facebook */}
  <a
    href="https://www.facebook.com/brittlebonessa"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-accent transition-colors"
  >
    <Facebook className="h-5 w-5 cursor-pointer" />
  </a>

  {/* <a
  href="https://www.tiktok.com/@brittle.bones.sa"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-accent transition-colors"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/TikTok_logo.svg"
    alt="TikTok"
    className="h-5 w-5 cursor-pointer"
  />
</a> */}

<a
  href="https://www.tiktok.com/@brittle.bones.sa"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-accent transition-colors"
  aria-label="TikTok"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 448 512"
    className="h-5 w-5 cursor-pointer"
  >
    <path d="M448,209.9a210.9,210.9,0,0,1-122.9-39.4V367.4c0,80.4-65.6,145.6-146.7,144.6-79.7-1-143.5-66.5-143.5-146.2,0-79.7,64.8-145.6,144.5-145.6a144.4,144.4,0,0,1,33.1,3.9v73.8a72,72,0,1,0,40.3,65.7V0h95.1a121.3,121.3,0,0,0,1.8,21.5c7.5,38.7,35.5,70.6,72.7,84.7A123.3,123.3,0,0,0,448,209.9Z" />
  </svg>
</a>



  {/* Instagram */}
  <a
    href="https://www.instagram.com/brittlebonessa2017"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-accent transition-colors"
  >
    <Instagram className="h-5 w-5 cursor-pointer" />
  </a>
</div>

          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/donate" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>info@brittlebones-sa.org.za</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>064 651 0987</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>Pinelands, Cape Town</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
  © {new Date().getFullYear()} Brittle Bones. All rights reserved. NPC 184-120 | Company Reg. 2025/546510/08
</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;