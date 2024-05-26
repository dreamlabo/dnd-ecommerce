import Image from "next/image";
import StoreImage from "./assets/images/main/storefront-1.png"
import Link from "next/link";

import WeaponsStore from "./assets/images/main/dnd-weapons-store-1.png" 
import MysticThreads from "./assets/images/main/dnd-clothing-mystic-threads.png" 
import DragonfireForge from "./assets/images/main/dnd-dragonfire-forge.png" 
import EnchantedAttire from "./assets/images/main/dnd-enchanted-attire.png" 

export default function Home() {
  return (
    <main>
      <div className="hero-page-wrapper">
        <div className="hero-overlay"></div>
        <Image 
            className="background-image-one"
            src={StoreImage}
            alt=''
            height={600}
            width={2000}
          />
          <div className="hero-wrapper">
            <div className="inner-hero">
              <h1 className="hero-heading">The Ultimate Outfitter for Epic Quests</h1>
              <p className="hero-subtext">At <span className="italic">The Adventure Guild</span>, we provide top-quality gear, weapons, and expert advice to ensure you and your party are fully prepared for any  adventure.</p>
              <Link className="hero-btn" href="/">Stock Your Pack</Link>
            </div>
          </div>
      </div>
      <div className="featured-brands-wrapper">
        <h2 className="section-title">Featured Brands</h2>
            <ul className="featured-brands-container">
              <li className="featured-brand-card-container">
                <a className="featured-brand-card"
                  href="">
                  <Image 
                  src={WeaponsStore}
                  alt='weapons store'
                  height={400}
                  width={400}/>
                  <div className="store-name">Battleborn Armory</div>
                </a>
              </li>
              <li className="featured-brand-card-container">
                <a className="featured-brand-card"
                  href="">
                  <Image 
                  src={MysticThreads}
                  alt='weapons store'
                  height={400}
                  width={400}/>
                  <div className="store-name">Mystic Threads</div>
                </a>
              </li>
              <li className="featured-brand-card-container" >
                <a className="featured-brand-card"
                  href="">
                  <Image 
                  src={DragonfireForge}
                  alt='weapons store'
                  height={400}
                  width={400}/>
                  <div className="store-name">Dragonfire Forge</div>
                </a>
              </li>
              <li className="featured-brand-card-container">
                <a className="featured-brand-card"
                  href="">
                  <Image 
                  src={EnchantedAttire}
                  alt='weapons store'
                  height={400}
                  width={400}/>
                  <div className="store-name">Enchanted Attire</div>
                </a>
              </li>
            </ul>
          </div>
  
    </main>
  );
}
