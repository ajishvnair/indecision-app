console.log('app.js is running');

const app={
    title:'MyFirst app',
    subtitle:'it is intresting',
    options:[]
};
const onFormSubmit= (e) =>{
    //console.log('on form submit');
    e.preventDefault();
    let option=e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value='';
        rerendering();
    }
};
const onClickReset=()=>{
    if(app.options.length){
        app.options=[];
        rerendering();
    }
}
const onClickMakeDecision=()=>{
    let random=Math.floor(Math.random()*app.options.length);
    let option=app.options[random];
    alert(option);
};
const rerendering=()=>{
    const temp = [
            <div>
                <h1>{app.title}</h1>
                {app.subtitle && <p>{app.subtitle }</p>}
                <p>{app.options.length>0?'There are the options' : 'There is no items'}</p>
                <button disabled={app.options.length===0} onClick={onClickMakeDecision}>What should i do?</button>
                <button onClick={onClickReset}>Reset</button>
                <ol>
                {
                    app.options.map((op)=><li key={op}>{op}</li>)
                }
                </ol>
                
                <form onSubmit={onFormSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        ];
        ReactDOM.render(temp,appRoot);
    };

const appRoot=document.getElementById('app');
rerendering();
