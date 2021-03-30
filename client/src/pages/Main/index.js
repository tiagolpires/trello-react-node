import Header from '../../components/Header'
import Form from '../../components/Form'
import './style.css'

const index = () => {
    return (
        <>
            <Header/>
            <section className="main">
                <h1>Main Page</h1>
                <Form/>
            </section>
        </>
    )
}

export default index