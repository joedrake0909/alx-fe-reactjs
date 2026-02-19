const UserProfile = (props) => {
    return (
        <div style={{ backgroundColor: 'lightblue', padding: '20px', margin: '10px', borderRadius: '20px', textAlign: 'center', fontFamily: 'Arial, sans-serif', color: 'darkblue', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', }}>
            <h2 style={{ fontWeight: '90px', margin: '0px' }}>{props.name}</h2>
            <p style={{ fontSize: '20px' }}>Age: {props.age}</p>
            <p>Bio: {props.bio}</p>
        </div>

    );

};


export default UserProfile;