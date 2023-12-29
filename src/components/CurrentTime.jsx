function CurrentTime() {

    let time = new Date();

    return(
        <p>this is the current time {time.toLocaleString()}</p>
    )
}

export default CurrentTime;