import logo from './logo.svg';
import './App.css';
const singers = [
  {name:'Arjith Singh',song: 'Tum hi ho'},
  {name: 'James',song:'vegi vegi'},
  {name: 'Tulsi kumar', song:'Toota hain dil mera'},
  {name:'Darshan Raval', song:'Athi hoo toh barish lete ayna'}
]
const Heroes = ['Cris hemsworth','Rock','Vin disel','Jhonny deep','Shahruk Khan','Salman Khan','Aiusman Kurana','Kapil sharma']
function App() {
  return (
    <div className="App">
      {
         Heroes.map(hero => <li>{hero}</li>)
      }
      {/* {
        Heroes.map(hero => <Person name={hero}></Person> )
      } */}
      {
        singers.map(singer => <Person name={singer.name} song={singer.song}></Person>)
      }
      {/* <Person name={Heroes[0]} movie='Thor Rangrok'></Person>
      <Person name={Heroes[1]} movie='Jumanji welcome to the jungle'></Person>
      <Person name={Heroes[2]} movie='Triple x'></Person>
      <Person name= {Heroes[3]} movie='Pirates of caribian'></Person> */}
      <p>New component is here</p>
      <Friend name='Soikot prodhan' job='student'></Friend>
      <Friend name='Akter Hossain Sakib' job='Bangladesh Border gurd solider'></Friend>
    </div>
  );
}

function Person(props){
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>Popular song: {props.song}</p>
    </div>
  )
}
function Friend(props){
  return (
    <div className='container'>
      <h1>{props.name}</h1>
      <p>Profession: {props.job}</p>
    </div>
  )
}
export default App;
