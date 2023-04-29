import Image from "next/image";
import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import NewStyles from "./newStyles";
const Brand = () => {
  return (
    <>
    <div className={styles.container}>
      <div>
        <Link href='./graphicStudio'>
        <Image
          src="/brand-1.png"
          width={200}
          height={70}
          alt="Graphic Studio"
        />
        </Link>
      </div>
      <div>
        <Link href="./sSalva">
        <Image
          src="/brand-2.png"
          width={200}
          height={70}
          alt="S Salva"
        />
        </Link>
      </div>
      <div>
       <Link href="./goldenStudio">
        <Image
          src="/brand-3.png"
          width={200}
          height={70}
          alt="furniture brand"
        />
        </Link>
      </div>
      <div>
       <Link href="/FurnitureDesign">
        <Image
          src="/brand-4.png"
          width={200}
          height={70}
          alt="furniture brand"
        />
        </Link>
      </div>
      <div>
       <Link href='./TravelLookBook'>
        <Image
          src="/brand-5.png"
          width={200}
          height={70}
          alt="furniture brand"
        />
        </Link>
      </div>
      </div>
      <NewStyles/>
    </>
  );
};
export default Brand;
