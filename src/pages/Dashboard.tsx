import Cards from "../components/Cards";
import Loading from "../components/Loading";
import Profile from "../components/Profile";
import useInscriptions from "../hooks/useInscriptions";

const Dashboard = () => {
    const {data, error, loading} = useInscriptions()
    
    if (loading) {
        return <Loading />
    }

    if( error ){
        return <p>Ocurrio un error al cargar las inscripciones</p>
    }

    if( data ) {
        return <div className="container">
            <Profile email={data.email} people={data.people} />
            <main>
                <div className="card-layout">
                    <Cards cards={data?.inscriptions} />
                </div>
            </main>
        </div>
    }
}

export default Dashboard;