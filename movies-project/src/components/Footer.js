import React from 'react'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./FooterStyles";

// const Footer = () => {
//     return (
//         <div className="col-mt-3 col-mb-5">
//             <h3 style={{color: 'white'}}>Contact Info</h3>
//             <ul className="list-unstyled">
//                 <li>
//                 <p>
//                     <strong>
//                     <i className="fas fa-map-marker-alt"></i> Phone:
//                     </strong>
//                 </p>
//                 </li>
//                 <li>
//                 <p>
//                     <strong>
//                     <i className="fas fa-envelope"></i> Email:
//                     </strong>
//                 </p>
//                 </li>
//             </ul>
            
//             <div className="row mt-3 mb-5">
//             <div className="col-md-8 col-sm-6" style={{ color: "#5a606b" }}>
//                 <ul className="list-inline">
//                 <li className="list-inline-item">
//                     <a href="/" style={{ color: "gold" }}>
//                     <i className="fab fa-facebook"></i>
//                     </a>
//                 </li>
//                 <li className="list-inline-item">
//                     <a href="/" style={{ color: "gold" }}>
//                     <i className="fab fa-instagram"></i>
//                     </a>
//                 </li>
//                 </ul>
//             </div>
//             </div>
//         </div>
//     );
// }

// export default Footer;
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
