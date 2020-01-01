class IndecisinApp extends React.Component{
    constructor(props){
        super(props);
        this.handleRemoveAll=this.handleRemoveAll.bind(this);
        this.handlePicker=this.handlePicker.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handleRemoveOption=this.handleRemoveOption.bind(this);
        this.state={
            options:[]
        }
    }
    handleRemoveAll(){
        this.setState(()=>({options:[]}));
    }
    handleRemoveOption(optionToRemove){
        this.setState((prevState)=>({
            options:prevState.options.filter((option)=> option!==optionToRemove)
        }))
    }
    handlePicker(){
        let random=Math.floor(Math.random()*this.state.options.length);
        let option=this.state.options[random];
        alert(option);
    }
    handleAddOption(option){
        if(!option){
            return 'Enter a valid element';
        }
        else if(this.state.options.indexOf(option)>-1){
            return 'Element alredy exists';
        }
        this.setState((prevState)=>({options:prevState.options.concat(option)}));
            
    }
    render(){
        const title='Indecision';
        const subtitle='!!Put your life on a computer.';
        
        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action isData={this.state.options.length>0} handlePicker={this.handlePicker}/>
                <Options 
                options={this.state.options} 
                removeAll={this.handleRemoveAll}
                handleRemoveOption={this.handleRemoveOption}
                />
                <AddOption handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
componentDidMount(){
    try{
        const options=JSON.parse(localStorage.getItem('options'));
            if(options){
                this.setState(()=>({options}));
            }
        }
    catch(e){

    }

}
componentDidUpdate(prevProp,prevState){
   if(prevState.options.length!==this.state.options.length){
       const json=JSON.stringify(this.state.options);
       localStorage.setItem('options',json);
   }
}
}
const Header=(props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}
const Action=(props)=>{
    return(
        <div>
        <button onClick={props.handlePicker} disabled={!props.isData}>What should i do?</button>
        {!props.isData && <p>Please add some texts!</p>}
        </div>
    );
}
const Options=(props)=>{
    return(
        <div>
            
           {props.options.map((option) => 
            <Option 
            key={option} 
            optionText={option}
            handleRemoveOption={props.handleRemoveOption}
            />)}
           <button onClick={props.removeAll}>Remove All</button>
        </div>
    );
}

class AddOption extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            error:undefined
        };
    }
    handleAddOption(e){
            e.preventDefault();
            let option=e.target.elements.option.value.trim();
            const error=this.props.handleAddOption(option);
            e.target.elements.option.value='';
            this.setState(()=>({error}))
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button >Add Option</button>
                </form>
            </div>
        );
    }
}
const Option=(props)=>{
    return(
        <div>
            {props.optionText}
            <button onClick={(e)=>(props.handleRemoveOption(props.optionText))}>Remove</button>
        </div>
    );
}

const element=document.getElementById('app');
ReactDOM.render(<IndecisinApp />,element);