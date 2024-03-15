function Logout() {
    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }
    return (
        <button onClick={logout}>Logout</button>
    );
}

export default Logout;