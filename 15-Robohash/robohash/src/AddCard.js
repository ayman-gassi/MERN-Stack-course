export default function AddCard({handleAddCard}){
    return(
        <form onSubmit={handleAddCard} className="addcard">
            <div>
                <input type="text" placeholder="Nom"/>
            </div>
            <div>
                <input type="email" placeholder="email@email.ma"/>
            </div>
            <input type="submit" value="Save"/>
            
        </form>
    )
}