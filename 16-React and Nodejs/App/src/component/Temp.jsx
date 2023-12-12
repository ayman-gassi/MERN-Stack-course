
function Temp (props){
        return(
            <>
                <div>
                    <h3>{props.title}</h3>
                    <input style={{ backgroundColor: props.Bg }} value={props.temp} onChange={(e) => { props.Handler(e) }} />
                </div>
                
            </>
        )
}
export default Temp