class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.handleToggle=this.handleToggle.bind(this);
        this.state={
            toggle:false
        }
    }
    handleToggle(){
       this.setState((prevState)=>{
            return {
                toggle:!prevState.toggle
            };
       });
    }
    render(){
        return(
            <div>
                <h1>Visibility Toggle!</h1>
                <button onClick={this.handleToggle}>{this.state.toggle?'Hide Details':'Show Setails'}</button>
                {this.state.toggle && <p>Here are some details!</p>}
            </div>
        );
    }
}
const element=document.getElementById('app');
ReactDOM.render(<Visibility />,element);