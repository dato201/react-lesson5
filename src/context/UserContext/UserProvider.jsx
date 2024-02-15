import { UserContext } from "./UserContext";

const UserProvider = ({ children }) => {
    const user = {
        name: 'dato',
        lastName: 'jvdfihu',
        email: 'asd@gmail.com',
        age: 20,
        gender: "gdffsdf"
    }

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider };