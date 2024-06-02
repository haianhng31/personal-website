import { Center, Icon, VStack, HStack, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, Box, useMediaQuery, IconButton } from '@chakra-ui/react';
import {Link, useLocation} from 'react-router-dom';
import './Navbar.css';
import { IoMenu } from "react-icons/io5";



const NavBar = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const { isOpen, onOpen, onClose } = useDisclosure();
    // Check if the screen size is smaller than 768px (md breakpoint)
    const [isSmallerThan768] = useMediaQuery('(max-width: 767px)');

    return ( 
        <>
        {isSmallerThan768 && (
        <div className="website-navbar">
            <Link to="/"><h6 className="my-name">HENNESSY</h6></Link>
            <IconButton 
                colorScheme='black' 
                variant='link' 
                icon={<Icon as={IoMenu} boxSize={8}/>}
                onClick={onOpen}/>
            <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader><Center>Menu</Center></DrawerHeader>
    
                    <DrawerBody>
                        <VStack direction="column" spacing={4}>
                            <Link to="/" onClick={onClose}>
                            </Link>
                            <Link to="/about" className={`website-navlink ${pathname === "/about" ? "active" : ""}`} onClick={onClose}>
                            About
                            </Link>
                            <Link to="/experience" className={`website-navlink ${pathname === "/experience" ? "active" : ""}`} onClick={onClose}>
                            Experience
                            </Link>
                            <Link to="/tech-projects" className={`website-navlink ${pathname === "/tech-projects" ? "active" : ""}`} onClick={onClose}>
                            Tech
                            </Link>
                            <Link to="/non-tech-projects" className={`website-navlink ${pathname === "/non-tech-projects" ? "active" : ""}`} onClick={onClose}>
                            Non-Tech
                            </Link>
                            <Link to="/contact" className={`website-navlink ${pathname === "/contact" ? "active" : ""}`} onClick={onClose}>
                            Contact
                            </Link>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
         </div>
        )}

        {!isSmallerThan768 && (
            <nav className="website-navbar">
                <Link to="/"><h6 className = "my-name">HENNESSY</h6></Link>
                <div className="links">
                    <HStack>
                        <Link to="/about" className={`website-navlink ${pathname === "/about" ? "active" : ""}`}>About</Link>
                        <Link to="/experience" className={`website-navlink ${pathname === "/experience" ? "active" : ""}`}>Experience</Link>
                        <Link to="/tech-projects" className={`website-navlink ${pathname === "/tech-projects" ? "active" : ""}`}>Tech</Link>
                        <Link to="/non-tech-projects" className={`website-navlink ${pathname === "/non-tech-projects" ? "active" : ""}`}>Non-Tech</Link>
                        {/* <Link to="/fun" className={`website-navlink ${pathname === "/fun" ? "active" : ""}`}>Fun stuff</Link> */}
                        <Link to="/contact" className={`website-navlink ${pathname === "/contact" ? "active" : ""}`}>Contact</Link>
                    </HStack>
                </div>
            </nav>
        )}
        </>
     );
}
 
export default NavBar;