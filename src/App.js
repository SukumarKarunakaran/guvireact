import "./App.css";
import { AddColor } from "./AddColor";
// import { Msg } from "./Msg";
import { Counter } from "./Counter";
import { useState } from "react";
// eslint-disable-next-line
import { Routes, Route, Link, useNavigate, useParams, Navigate } from "react-router-dom";
import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


var INTIAL_MOVIE_LIST = [
  {
    name: "RRR",
    poster:
      "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    rating: 8.8,
    summary:
      "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    trailer: "https://www.youtube.com/embed/f_vbAtFSEc0"
  },
  {
    name: "Iron man 2",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    rating: 7,
    summary:
      "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    trailer: "https://www.youtube.com/embed/wKtcmiifycU"
  },
  {
    name: "No Country for Old Men",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    rating: 8.1,
    summary:
      "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    trailer: "https://www.youtube.com/embed/38A__WT3-o0"
  },
  {
    name: "Jai Bhim",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    summary:
      "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    rating: 8.8,
    trailer: "https://www.youtube.com/embed/nnXpbTFrqXA"
  },
  {
    name: "The Avengers",
    rating: 8,
    summary:
      "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    poster:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
  },
  {
    name: "Interstellar",
    poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    rating: 8.6,
    summary:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {
    name: "Baahubali",
    poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    rating: 8,
    summary:
      "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    trailer: "https://www.youtube.com/embed/sOEg_YZQsTI"
  },
  {
    name: "Ratatouille",
    poster:
      "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    rating: 8,
    summary:
      "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w"
  }
];


export default function App() {
  const [movieList, setMovieList] = useState(INTIAL_MOVIE_LIST);
  // const people =["Sukumar", "Karunakaran", "Karen"];
  // const profile = [
  //   {
  //     name:"SUKUMAR",
  //     pic:"https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/profile-icon.png"
  //   },
  //   {
  //     name:"Karunakaran",
  //     pic:"https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/profile-icon.png"
  //   },
  //   {
  //     name:"Karan",
  //     pic:"https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/profile-icon.png"
  //   }
  // ];
  // const movieList = INTIAL_MOVIE_LIST;
  return (
    <div className="App">
      {/* <Msg
        name="SUKUMAR"
        pic="https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/profile-icon.png"
      /> */}
      {/* {people.map(personName => <Welcome name={personName}/>)} */}
      {/* {profile.map(value => <Msg name={value.name} pic={value.pic}/>)} */}
      {/* <AddColor /> */}

      <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movie</Link>
        </li>
        <li>
          <Link to="/color-game">ColorGame</Link>
        </li>
        <li>
          <Link to="/add-movie">Add Movie</Link>
        </li>
      </ul>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MovieList movieList={movieList} setMovieList={setMovieList}/>} />
        <Route path="/films" element={<Navigate replace to = "/movies"/>} />
        <Route path="/movies/:id" element={<MovieDetails movieList={movieList} />}/>
        <Route path="/color-game" element={<AddColor />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to = "/404"/>} />
      </Routes>
      {/* <AddMovie /> */}
      {/* <MovieList /> */}
      
      
    </div>
  );
}
function NotFound(){
  return(
    <div>
      <img
      src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"
      alt= "404 Not Found" 
      className="not-found" 
      />
    </div>
  )
}
function Home(){
  return(
    <h1><span role="img" aria-label="xxxxx">🎥 </span> Welcome to Movie App   </h1>
  )

}

function MovieList({movieList, setMovieList}){
  // const movieList = INTIAL_MOVIE_LIST;
  
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const addMovie= () => {
    const newMovie ={
      name,
      poster,
      rating,
      summary,
      trailer,
    };
    // console.log(newMovie);
    setMovieList([...movieList, newMovie]);
  }
  return (
    <div>
      <div className="add-movie-form">
      <TextField onChange={(event)=>setName(event.target.value)} id="outlined-basic" label="Name" variant="outlined" />
      <TextField onChange={(event)=>setPoster(event.target.value)} id="outlined-basic" label="Poster" variant="outlined" />
      <TextField onChange={(event)=>setRating(event.target.value)} id="outlined-basic" label="Rating" variant="outlined" />
      <TextField onChange={(event)=>setSummary(event.target.value)} id="outlined-basic" label="Summary" variant="outlined" />
      <TextField onChange={(event)=>setTrailer(event.target.value)} id="outlined-basic" label="Trailer" variant="outlined" />
        
        
        <Button onClick={addMovie} variant="outlined">Add Movie</Button>
       

      </div>
      <div className="movie-list">
      {movieList.map((mv,index)=>(<Movie movie={mv} id={index}/>))}
      </div>
      </div>
  )
}
function Movie({movie, id}){

  const [toggle, setToggle] = useState(true);
  const styles ={
    color: movie.rating > 8 ? "green" : "red",
  };
  const navigate = useNavigate()

  return(
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} alt={movie.name}/>
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name} - {id}</h2>
        <p style={styles} className="movie-rating"><span role="img" aria-label="xxxxx">⭐</span> {movie.rating}</p>
      </div>
      <button onClick={() => navigate("/movies/"+id)}>Info</button><button onClick={()=>setToggle(!toggle)}>Toogle description</button>
      
      {
        toggle===true ? <p className="movie-summary">{movie.summary}</p> : null
      }
      <Counter />
    </div>
  )
}


function MovieDetails({movieList}){
  const {id}=useParams();
  const movie = movieList[id];
  const navigate = useNavigate()
  const styles ={
    color: movie.rating > 8 ? "green" : "red",
  };
  return(
    <div>
       <iframe 
       width="100%" 
       height="570" 
       src={movie.trailer}
       title="YouTube video player" 
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
       allowfullscreen></iframe>
       
    <div className="movie-detail-ontainer">
      {/* <img className="movie-poster" src={movie.poster} alt={movie.name}/> */}
     
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name}</h2>
        <p style={styles} className="movie-rating"><span role="img" aria-label="xxxxx">⭐</span> {movie.rating}</p>
      </div>
      
     <p className="movie-summary">{movie.summary}</p>
     <Button onClick={()=>navigate(-1)} variant="outlined">Back</Button>
      
    </div>
    </div>
  
  )
}
function AddMovie(){
  const [addMovieList, setAddMovieList] = useState(INTIAL_MOVIE_LIST);
  
  return(
    <div className="movie-add">
      
      <input type="text"  placeholder="Name"></input><br />
      <input type="text" placeholder="Poster"></input> <br />
      <input type="text" placeholder="Rating"></input><br />
      <input type="text" placeholder="Summary"></input> <br />
      <input type="text" placeholder="Trailer"></input> <br />
      <br /><button onClick={()=> setAddMovieList([...addMovieList,{
        name: "Iron man 2",
        poster: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNj…l5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
        rating: 7,
        summary: "With the world now aware that he is Iron Man, bill… new alliances and confront a powerful new enemy."
      }])}>Add Movie</button>
      {console.log(addMovieList)}
      {/* <button onClick={() => setColorList([...colorList, color])}>Add</button> */}

    </div>
    
  )
}

