import { Link } from "@heroui/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

export default function FooterComponent() {
  return (
    <footer className="w-full bg-neutral-900 mt-32 border-t border-neutral-800">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">ChaosX</h2>
            <p className="text-neutral-400 text-sm">
              Empowering your infrastructure with intelligent chaos engineering
              solutions.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <Link
                href="https://github.com"
                className="text-neutral-400 hover:text-[#C8FF88] transition-colors"
              >
                <GitHubIcon />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-neutral-400 hover:text-[#C8FF88] transition-colors"
              >
                <LinkedInIcon />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-neutral-400 hover:text-[#C8FF88] transition-colors"
              >
                <TwitterIcon />
              </Link>
              <Link
                href="mailto:contact@chaosx.com"
                className="text-neutral-400 hover:text-[#C8FF88] transition-colors"
              >
                <EmailIcon />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-[#C8FF88] transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-[#C8FF88] transition-colors"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-[#C8FF88] transition-colors"
                >
                  Status Page
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-[#C8FF88] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-[#C8FF88] transition-colors"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-[#C8FF88] transition-colors"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-[#C8FF88] transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-[#C8FF88] transition-colors"
                >
                  Sales
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-400 hover:text-[#C8FF88] transition-colors"
                >
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} ChaosX. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-neutral-400 hover:text-[#C8FF88] text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-neutral-400 hover:text-[#C8FF88] text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-neutral-400 hover:text-[#C8FF88] text-sm transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
