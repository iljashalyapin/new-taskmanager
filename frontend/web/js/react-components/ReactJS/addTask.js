
//Добавление новой задачи

class AddTask extends React.Component {
 //initialize an object's state in a class
  constructor(props) {
    super(props)
      this.state = { data: [] }
      }
      //ComponentDidMount is use to Connect a React app to external applications, such as web APIs or JavaScript functions
      componentDidMount(){
        //get request
        let res = axios.get('http://new-taskmanager.local/axios/getUsers.php').then(res => 
        {   
          this.setState({data: res.data});
           });
        }
  render() {  
    return ( 
        <div className="maincontainer bordered">
            <br/>
            <div class="task">
                <label>Input name of task:</label>
                <br/>
                <input id="taskname"></input>
                <br/>
                <label id="taskname_error"></label>             
            </div>
            <br/>
            <label>Add comment for task:</label>
            <br/>
            <textarea id="comment">-</textarea>
            <br/><br/>
            <label>Set status for task:</label>
            <br/>
            <select id="status"><option>New</option><option>In progress</option><option>Closed</option><option>On hold</option><option>Rejected</option></select>
            <br/><br/>
            <label>Add attachments for task:</label>
            <br/>
            <textarea id="attachments">Input the absolute file paths separated by a character ";"</textarea>
            <br/><br/>
            <label>Set executor for task:</label>
            <br/>
            <select id="executor">
            {this.state.data.map((result) => {
              return (        
                 <option>{result.username}</option>          
              )
            })} 
            </select>
            <br/><br/>
            <button class="btn_save">Save</button>
            <br/><br/>
        </div>
         
) ;
}
} 

function Add_task() {
    let div = document.getElementsByClassName('jumbotron')[0];
    
    //Очистка старой информации
    let buf = div.innerHTML;
    if (div.innerHTML.includes('<br><br><br><br>')) div.innerHTML = div.innerHTML.replace(buf.substring(buf.indexOf('<br><br><br><br>')), '');
    
    let str = '<br><br><br><br><div id="addTask"> </div>';
    div.innerHTML += str;
    ReactDOM.render(<AddTask/>, document.getElementById('addTask'));
    
    // Обработчик нажатия на кнопку сохранения новой задачи в БД
    document.querySelectorAll('.btn_save').forEach(el => el.addEventListener('click', function Save_task() {
        
        document.getElementById('taskname_error').style.color = "Red";
        document.getElementById('taskname_error').innerText = "";
                
        let existing_task = false;
        let res = axios.get('http://new-taskmanager.local/axios/getTasks.php').then(res => {            
		let _data = [];
		_data = res.data;
		//console.log(_data);
		let last_id = 0;
		_data.map((result) => { 
		    last_id = result.id;
		    if (result.taskname == document.getElementById('taskname').value)
		        existing_task = true;
		});
		if (existing_task == true) {
		    document.getElementById('taskname_error').innerText = "Task with inputed name already exists.";
		}
		else {
		    // Запись в БД
		    let new_id = parseInt(last_id) + 1;
		    let new_taskname = document.getElementById('taskname').value;
		    let new_comment = document.getElementById('comment').value;
		    let new_status = document.getElementById('status').value;
		    let new_attachments = document.getElementById('attachments').value;
		    let new_executor = document.getElementById('executor').value;
		    var new_data = {
		        key1: new_id,
		        key2: new_taskname,
		        key3: new_comment,
		        key4: new_status,
		        key5: new_attachments,
		        key6: new_executor
		    };
		    let res2 = axios.post('http://new-taskmanager.local/axios/addTask.php', JSON.stringify(new_data), {headers:{'Content-Type':'application/json'}})
		    .then(res2 => console.log('OK'))
		    .catch(function (error) { console.log(error.message); });
		 }
         });
    }));
}
