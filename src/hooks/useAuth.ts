import { useAppSelector } from "./useAppSelector"

export const useAuth = () => {
    const {id, email, role, token} = useAppSelector(state => state.user)

    return {
        isAuth: !!email,
        id,
        role,
        token
    }
}
