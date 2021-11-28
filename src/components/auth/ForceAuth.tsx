import useAuth from "data/hook/useAuth"
import Image from "next/image"
import router from "next/router"
import spinner from '../../../public/loading.svg'

export default function ForceAuth(props) {
    const {loading, user} = useAuth()
    function renderContent() {
        return (
            <>
                {props.children}
            </>
        )
    }

    function renderLoading() {
        return (
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <Image src={spinner}/>
            </div>
        )
    }
    

    if(!loading && !!user) {
        return renderContent()
    } else if(loading) {
        return renderLoading()
    } else {
        router.push('/auth')
        return null
    }
}