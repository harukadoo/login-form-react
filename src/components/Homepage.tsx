interface HomepageProps{
    fullName: string;
    logout: () => void;
}

function Homepage({fullName, logout}: HomepageProps) {
    return (
        <div className="homepage__container">
            <p className="homepage__greeting">Welcome {fullName}!</p>
            <button className="homepage__btn" onClick={logout}>logout</button>
        </div>
    );
}

export default Homepage;