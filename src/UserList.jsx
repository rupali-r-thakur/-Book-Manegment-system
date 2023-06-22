import React, { useEffect, useState } from "react";
import Header from "./Header";
import Swal from "sweetalert2";
import Modal from "./Modal";

function UserList({ users, setUsers, setUpdate, update }) {
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };
  const openModal = () => {
    setModal(true);
  };
  const [filterValue, setFilterValue] = useState(users);

  const [searchByTitle, setSearchByTitle] = useState("");
  const [searchByAuthod, setSearchByAuthod] = useState("");

  const inputValue = (event) => {
    console.log(event.target.value);
    const inputName = event.target.value.toUpperCase();

    let filterArray = [];

    switch (event.target.name) {
      case "searchTitle":
        setSearchByTitle(event.target.value);
        setSearchByAuthod("");
        filterArray = users.filter((element) => {
          return element.title.toUpperCase().includes(inputName);
        });

        break;
      case "searchAuthod":
        setSearchByTitle("");
        setSearchByAuthod(event.target.value);
        filterArray = users.filter((element) => {
          return element.author.toUpperCase().includes(inputName);
        });
        break;
      default:
    }
    console.log(filterArray);
    setFilterValue(filterArray);
  };
  const editUsers = (index) => {
    setUpdate({ ...update, status: true, id: index });
    openModal();
  };
  const deleteUsers = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const del = users.filter((elm, inx) => inx !== id);
        setUsers(del);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your file has been deleted.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  useEffect(() => {
    setFilterValue(users);
  }, [users]);

  return (
    <>
      <Header />
      <div className="input-container">
        <div class="form-outline">
          <input
            class="form-control"
            id="formControlReadonly"
            type="text"
            value={searchByTitle}
            placeholder="search-title"
            name="searchTitle"
            onChange={inputValue}
            readonly
          />
        </div>
        <div class="form-outline">
          <input
            class="form-control"
            id="formControlReadonly"
            type="text"
            value={searchByAuthod}
            placeholder="search-author"
            name="searchAuthod"
            onChange={inputValue}
            readonly
          />
        </div>
        <div class="form-outline"></div>
        {/* <Link to="Create"> */}
        <button
          type="button"
          class="btn btn-success"
          onClick={() => {
            setUpdate({ ...update, status: false });
            openModal();
          }}
        >
          Create
        </button>
        {/* </Link> */}
      </div>
      <table class="table  table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">title</th>
            <th scope="col">author</th>
            <th scope="col">publicationYear</th>
            <th scope="col">genre</th>
            <th scope="col">price</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filterValue.map((element, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{element.title}</td>
              <td>{element.author}</td>
              <td>{element.publicationYear}</td>
              <td>{element.genre}</td>
              <td>{element.price}</td>
              <td>
                {" "}
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    editUsers(index);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                {" "}
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => deleteUsers(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {modal ? (
        <Modal closeModal={closeModal} users={users} update={update} />
      ) : (
        <></>
      )}
    </>
  );
}
export default UserList;
