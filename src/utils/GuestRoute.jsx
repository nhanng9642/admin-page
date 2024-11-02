import { useGlobalContext } from '../context'
import { Navigate } from 'react-router-dom'
import Loading from '../pages/Loading'

export function GuestRoute({ children }) {
    const { isInitalize, isAuthenticated, user } = useGlobalContext();

    if (!isInitalize) {
        return <Loading />
    }

    if (isAuthenticated && user) {
        if (user.role == 'admin') {
            return (
                <Navigate to="/admin/home" replace/>
            )
        } 
        return (
            <Navigate to="/user" replace/>
        )
    }

    return (
        <>
            {children}
        </>
    )
}
