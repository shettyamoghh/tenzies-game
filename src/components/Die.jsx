function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? '#59E391' : 'white'
    }
    
    return (
        <button style={styles} onClick={() => props.toggleHold(props.id)}>{props.value}</button>
    )
}

export default Die