import React, { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

function Modal({ closeModal, users, update }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [publicationYear, setPublicationYear] = useState();
  const [genre, setGenre] = useState();
  const [price, setPrice] = useState();
  const addList = (e) => {
    e.preventDefault();
    if (title && author && publicationYear && genre && price) {
      let addData = {
        title: title,
        author: author,
        publicationYear: publicationYear,
        genre: genre,
        price: price,
      };
      console.log(addData);
      users.push(addData);

      navigate("/");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "data added",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    closeModal();
  };
  const setInitial = () => {
    setTitle(users[update.id].title);
    setAuthor(users[update.id].author);
    setPublicationYear(users[update.id].publicationYear);
    setGenre(users[update.id].genre);
    setPrice(users[update.id].price);
  };
  const UpdateData = () => {
    console.log(update.id);
    users[update.id].title = title;
    users[update.id].author = author;
    users[update.id].publicationYear = publicationYear;
    users[update.id].genre = genre;
    users[update.id].price = price;

    Swal.fire({
      position: "center",
      icon: "success",
      title: "data updated",
      showConfirmButton: false,
      timer: 1500,
    });
    closeModal();
  };

  useEffect(() => {
    if (update.status) setInitial();
  }, []);
  return (
    <>
      <div
        style={{
          position: "fixed",
          zIndex: 889,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "#0000005e",
        }}
      >
        <div style={{ height: "auto", width: "30%", margin: "5%" }}>
          <div
            class=""
            style={{
              padding: "5%",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <form class="form-inline" onSubmit={update ? UpdateData : addList}>
              <div class="form-group">
                <label for="inputPassword6">title:</label>
                <input
                  autocomplete="off"
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  id="inputPassword6"
                  class="form-control"
                  aria-describedby="passwordHelpInline"
                />
              </div>
              <div class="form-group">
                <label for="inputPassword6">author:</label>
                <input
                  autocomplete="off"
                  type="text"
                  name="authod"
                  value={author}
                  onChange={(e) => {
                    setAuthor(e.target.value);
                  }}
                  id="inputPassword6"
                  class="form-control"
                  aria-describedby="passwordHelpInline"
                />
              </div>
              <div class="form-group">
                <label for="inputPassword6">publicationYear:</label>
                <input
                  autocomplete="off"
                  type="text"
                  name="public"
                  value={publicationYear}
                  onChange={(e) => {
                    setPublicationYear(e.target.value);
                  }}
                  id="inputPassword6"
                  class="form-control"
                  aria-describedby="passwordHelpInline"
                />
              </div>
              <div class="form-group">
                <label for="inputPassword6">genre:</label>
                <input
                  autocomplete="off"
                  type="text"
                  name="genre"
                  value={genre}
                  onChange={(e) => {
                    setGenre(e.target.value);
                  }}
                  id="inputPassword6"
                  class="form-control"
                  aria-describedby="passwordHelpInline"
                />
              </div>
              <div class="form-group">
                <label for="inputPassword6">price:</label>
                <input
                  autocomplete="off"
                  type="text"
                  name="price"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  id="inputPassword6"
                  class="form-control"
                  aria-describedby="passwordHelpInline"
                />
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-secondary"
                  onClick={() => {
                    closeModal();
                  }}
                  style={{
                    width: "45%",
                    marginLeft: "5%",
                    marginTop: "5%",
                    cursor: "pointer",
                  }}
                >
                  Close
                </button>
                {update.status ? (
                  <button
                    type="button"
                    class="btn btn-warning"
                    style={{
                      width: "45%",
                      marginLeft: "5%",
                      marginTop: "5%",
                      cursor: "pointer",
                    }}
                    onClick={UpdateData}
                  >
                    Update
                  </button>
                ) : (
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={addList}
                    style={{
                      width: "45%",
                      marginLeft: "5%",
                      marginTop: "5%",
                      cursor: "pointer",
                    }}
                  >
                    Add
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
