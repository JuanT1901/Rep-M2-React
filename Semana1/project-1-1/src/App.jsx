import './App.css'
import CardShow from './components/CardShow';

function App() {

  const person = {
    name: "Juan Diego",
    age: 25,
    movie: "Gran Turismo",
    music: "Rock"
  }

  const { name, age, movie, music} = person;

  return (
    <div className='container'>
      <ul className='list'>
        <li><b>Nombre:</b> {name}</li>
        <li><b>Edad:</b> {age} años</li>
        <li><b>Pelicula favorita:</b> {movie}</li>
        <li><b>Música favorita:</b> {music}</li>
      </ul>
      
      <CardShow 
        showImg = 'https://ichef.bbci.co.uk/news/800/cpsprodpb/15665/production/_107435678_perro1.jpg'
        name = 'Perro'
        bgColor = 'blue'
      />

      <CardShow 
        showImg = 'https://ca-times.brightspotcdn.com/dims4/default/796e6c9/2147483647/strip/true/crop/1970x1108+39+0/resize/1200x675!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F12%2Fa5%2F79e097ccf62312d18a025f22ce48%2Fhoyla-recuento-11-cosas-aman-gatos-top-001'
        name = 'Gato'
        bgColor = 'red'
      />

      <CardShow 
        showImg = 'https://concepto.de/wp-content/uploads/2021/07/caballos-e1626738224231.jpg'
        name = 'Caballo'
        bgColor = 'olivedrab' 
      />
    </div>
  )
}

export default App
