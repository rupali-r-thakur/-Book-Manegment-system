import { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate, useSearchParams } from "react-router-dom";

import Swal from "sweetalert2";

function Create({ users, update }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState("");

  const [searchParams] = useSearchParams();

  var addList = (e) => {
    console.log(e);
    e.preventDefault();
    if (title && author && publicationYear && genre && price) {
      let dataToSave = {
        title: title,
        author: author,
        publicationYear: publicationYear,
        genre: genre,
        price: price,
      };
      users.push(dataToSave);
      navigate("/");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "data added",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const UpdateData = (event) => {
    event.preventDefault();
    let inx = searchParams.get("ind");
    users[inx].title = title;
    console.log((users[inx].title = title));
    users[inx].author = author;
    users[inx].publicationYear = publicationYear;
    users[inx].genre = genre;
    users[inx].price = price;
    console.log(users);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "data updeted",
      showConfirmButton: false,
      timer: 1500,
    });

    navigate("/");
  };

  useEffect(() => {
    let inx = searchParams.get("ind");
    // console.log(users[inx]);
    if (update) {
      setTitle(users[inx].title);
      setAuthor(users[inx].author);
      setPublicationYear(users[inx].publicationYear);
      setGenre(users[inx].genre);
      setPrice(users[inx].price);
    }
  }, []);

  return (
    <>
      <Header />
      <div className="form-main-container">
        <div class="shadow p-3 mb-5 bg-white rounded">
          <form class="form-inline" onSubmit={update ? UpdateData : addList}>
            <div class="form-group">
              <label for="inputPassword6">title:</label>
              <input
                autocomplete="off"
                type="text"
                name="name"
                id="inputPassword6"
                class="form-control mx-sm-3"
                aria-describedby="passwordHelpInline"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
              />
            </div>
            <div class="form-group">
              <label for="inputPassword6">author:</label>
              <input
                autocomplete="off"
                type="text"
                name="email"
                id="inputPassword6"
                class="form-control mx-sm-3"
                aria-describedby="passwordHelpInline"
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
                value={author}
              />
            </div>
            <div class="form-group">
              <label for="inputPassword6">publicationYear:</label>
              <input
                autocomplete="off"
                type="text"
                name="salary"
                id="inputPassword6"
                class="form-control mx-sm-3"
                aria-describedby="passwordHelpInline"
                onChange={(e) => {
                  setPublicationYear(e.target.value);
                }}
                value={publicationYear}
              />
            </div>
            <div class="form-group">
              <label for="inputPassword6">genre:</label>
              <input
                autocomplete="off"
                type="text"
                name="salary"
                id="inputPassword6"
                class="form-control mx-sm-3"
                aria-describedby="passwordHelpInline"
                onChange={(e) => {
                  setGenre(e.target.value);
                }}
                value={genre}
              />
            </div>
            <div class="form-group">
              <label for="inputPassword6">price:</label>
              <input
                autocomplete="off"
                type="text"
                name="salary"
                id="inputPassword6"
                class="form-control mx-sm-3"
                aria-describedby="passwordHelpInline"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                value={price}
              />
            </div>
            <div className="button-design">
              <button className="addButton">
                {update ? "Update" : "Add"}{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Create;
