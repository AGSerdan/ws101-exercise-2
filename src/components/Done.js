export default function Done({ todos }) {
    let i = 1;//index    
    
    const display = () => {    
        if (todos.length === 0) {
            return <h1 className="font-bold text-2xl bg-pink">No task done</h1>
        }
        else {
            return todos.map((todo, index) => {
                if (todo.isDone === true) {                                        
                    return (
                        <li className="text-lg pt-5 flex bg-pink" key={index}>
                            <div className="grow">
                                <div className="font-bold">{i++}: {todo.title}</div>
                                <div>{todo.description}</div>
                            </div>
                            <div>
                                <h1 className="font-bold  w-7 h-7 p-1 rounded-md"> Completed</h1>
                              
                            </div>
                        </li>
                    )
                }
            })
        }
    }

    return (
        <div className="flex justify-center flex-col items-center">
            <div className="grow shrink-0 w-[500px]">
                <div className="pt-5">
                    <div className="text-lg font-bold">Done Task:
                    </div>
                </div>
                <ul>
                    {

                        display()

                    }

                </ul>
            </div>
        </div>
    )
}