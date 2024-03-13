function Logout() {
    const logout = () => {
        window.localStorage.removeItem("token")
    }
    return (
        <div>
             <button onClick={logout}>Logout</button>
        </div> 
    );
}

export default Logout;