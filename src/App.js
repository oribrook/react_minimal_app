import MyInfinitScroll from "./MyInfiniteScroll";
import Notes from "./Notes";
import NotesWithoutPagination from "./NotesWithoutPagination";

function App() {
  const [start, setStart] = useState(false);
  return (
    <div>
      {!start && (
        <div>
          <h1> Logicode pagination tutorial project </h1>
          <br />
          <h5>
            This app should work together with BE from the following git repo:
          </h5>
          <h5> https://github.com/oribrook/minimalApp.git </h5>
          <h5> Branch: pagination </h5>
          <br />
          <h5> After setting the BE, press the start button </h5>
          <button
            onClick={() => {
              setStart(true);
            }}
          >            
            Start
          </button>
        </div>
      )}

      {start && <div>
        <NotesWithoutPagination />
        <MyInfinitScroll />
        <Notes />
      </div>}

    </div>
  );
}

export default App;
