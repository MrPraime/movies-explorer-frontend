import Content from './Content';
import About from './About'
import Tech from './Tech';
import Student from './Studen';

export default function Main() {
    return (
        <main className='main'>
            <Content/>
            <About/>
            <Tech/>
            <Student/>
        </main>
    )
}