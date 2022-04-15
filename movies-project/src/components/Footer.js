import React from 'react'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Our History</FooterLink>
            <FooterLink href="#">Benefits</FooterLink>
            <FooterLink href="#">Team</FooterLink>
          </Column>
          <Column>
            <Heading>Explore</Heading>
            <FooterLink href="#">Search Movies</FooterLink>
            <FooterLink href="#">Select Genre</FooterLink>
            <FooterLink href="#">My Favorites</FooterLink>
            <FooterLink href="#">Saved Movies</FooterLink>
            <FooterLink href="#">All Movies</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <i className="fas fa-envelope"></i> <FooterLink href="#">moonhome@gmail.com</FooterLink>
            <i className="fas fa-map-marker-alt"></i> <FooterLink href="#">160 Convent AveNew York, NY 10031</FooterLink>
            <i className="fas fa-solid fa-phone"></i> <FooterLink href="#">(212) 650-7000</FooterLink>
                
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;
