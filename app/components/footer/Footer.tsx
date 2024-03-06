import FooterList from '@/app/components/footer/FooterList';
import Container from '@/app/components/Container';
import Link from 'next/link';
import { MdFacebook } from 'react-icons/md';
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="bg-slate-700 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold">Shop Category</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Laptops</Link>
            <Link href="#">Desktops</Link>
            <Link href="#">Watches</Link>
            <Link href="#">Tvs</Link>
            <Link href="#">Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold">Customer Service</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns & Exchanges</Link>
            <Link href="#">FAQs</Link>
          </FooterList>
          <div className="w-full md:w-1/3 md:6 md:md-0">
            <h3 className="text-base font-bold">Contact Us</h3>
            <p className="mb-2">
              Why do we use it? It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
            </p>
            <p>{new Date().getFullYear()} E-Shop</p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={26} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={26} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={26} />
              </Link>
              <Link href="#">
                <AiFillYoutube size={26} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
