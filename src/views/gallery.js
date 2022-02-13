import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import GalleryS1 from "../components/gallery-s1";
import GalleryS2 from "../components/gallery-s2";

class Gallery extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <GalleryS1/>
                <GalleryS2/>
            </Container>    
        );
    }
}

export default Gallery;