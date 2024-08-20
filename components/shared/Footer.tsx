import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="border-t">
      <div className="flex-between wrapper flex-col text-center sm:flex-row">
        <Link href="/">
          <Image src="/assets/images/logo.png" alt="logo" width={100} height={38}></Image>
        </Link>

        <p>2023 Meetly. All Rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
