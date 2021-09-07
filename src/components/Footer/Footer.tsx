import React from "react";
import tw from "twin.macro";
import Image from "next/image";
import { Icon } from "@material-ui/core";
import Link from "next/link";

const Footer = tw.footer`w-full bg-Green-default text-white`;
const Container = tw.div`xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10`;
const Grid = tw.div`w-full pt-12 flex flex-col sm:flex-row space-y-2  justify-start`;
const GridCol1 = tw.div`w-full sm:w-2/5 pr-6 flex flex-col space-y-4`;
const GridCol2 = tw.div`w-full sm:w-2/5 flex flex-col space-y-4`;
const GridCol3 = tw.div`w-full sm:w-2/5 pt-6 flex items-end mb-1`;
const GridSocial = tw.div`flex flex-row space-x-4`;
const BtH = tw.a`flex float-left max-w-md`;
const Copyright = tw.div`opacity-60 pt-2`;

export default function Foot() {
  return (
    <>
      <Footer>
        <Container>
          <Grid>
            <GridCol1>
              <BtH href="/">
                <Image
                  src="/Logo-AtypikHouse_long_white.png"
                  alt="Picture of the author"
                  width={350}
                  height={90}
                />
              </BtH>
              <p>3 Rue Soeur Aurélie, 60350 Pierrefonds, France.</p>
            </GridCol1>
            <GridCol3></GridCol3>
            <GridCol2>
              <a href="#">Accueil</a>
              <a href="#">Nos hébergements</a>
              <a href="#">Devenir propriétaire</a>
              <a href="#">Contact</a>
            </GridCol2>
            <GridCol2>
              <a href="#">CGU / CGV</a>
              <a href="#">FAQ</a>
              <div>
                <Link
                  href={`https://www.facebook.com/AtypikHouse-100173862320265`}
                >
                  <Icon
                    style={{
                      margin: "5px",
                      color: "#688f4e",
                      fontSize: 32,
                      cursor: "pointer",
                    }}
                  >
                    facebook
                  </Icon>
                </Link>
                <Link href={`https://www.instagram.com/atypikhouseoff/`}>
                  <Icon
                    style={{
                      margin: "5px",
                      color: "#688f4e",
                      fontSize: 32,
                      cursor: "pointer",
                    }}
                  >
                    link
                  </Icon>
                </Link>
                <Link href={`https://www.tiktok.com/@atypikhouse?lang=fr`}>
                  <Icon
                    style={{
                      margin: "5px",
                      color: "#688f4e",
                      fontSize: 32,
                      cursor: "pointer",
                    }}
                  >
                    tiktok
                  </Icon>
                </Link>
              </div>
            </GridCol2>
          </Grid>
          <Copyright>
            <p>© 2021 AtypikHouse - Tous droits réservés</p>
          </Copyright>
        </Container>
      </Footer>
    </>
  );
}
