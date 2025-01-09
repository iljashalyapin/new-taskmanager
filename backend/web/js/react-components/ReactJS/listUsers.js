class ListUsers extends React.Component {
 //initialize an object's state in a class
  constructor(props) {
    super(props)
      this.state = { data: [] }
      }
      //ComponentDidMount is use to Connect a React app to external applications, such as web APIs or JavaScript functions
      componentDidMount(){
        //get request
        let res = axios.get('http://admin.new-taskmanager.local/axios/getUsers.php').then(res => 
        {   
          this.setState({data: res.data});
           });
        }
  render() {
    return (
      <div className="maincontainer">
        <div className="container mb-5 mt-5 text-left">      
        <table class="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>       
            </tr>
          </thead>
          <tbody>
          {this.state.data.map((result) => {
            return (        
                 <tr>
                  <td>{result.id}</td>              
                  <td>{result.username}</td>
                  <td>{result.email}</td>
                </tr>          
            )
          })}     
          </tbody>
        </table>    
      </div>
      </div>
) ;
}
}

let div = document.getElementsByClassName('jumbotron')[0];
let str = '<br><div id="listUsers"> </div>';
div.innerHTML += str;
ReactDOM.render(<ListUsers/>, document.getElementById('listUsers'));
