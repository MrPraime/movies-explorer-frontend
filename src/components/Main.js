import Content from './Content';
import About from './About'
import Tech from './Tech';
import Student from './Studen';
import Footer from "./Footer";
import Header from "./Header";


export default function Main(props) {
    return (

        <><Header 
        isLoggedIn={props.loggedIn}
        />
        <main className='main'>
            <Content />
            <About />
            <Tech />
            <Student />
        </main><Footer /></>
    )
}