import React from "react";
import "../bootstrap-css/bootstrap.min.css";
import "../components/perfil/perfil.css"
import { Link } from "react-router-dom";

export const Perfil = ({
  nombre,
  seguidores,
  pais,
  perfilImg,
  portadaImg,
  ejemploImg,
}) => {
  return (
    <div>
      <div>
        <div className="border-primary">
          <img
            src={portadaImg}
            alt="ejemplo portada"
            className="border border-4 img-portrait"
          />
        </div>
        <div>
          <Link
            to="/editar-perfil"
            state={{
              nombre: "Alex Valdes",
              seguidores: 1000,
              pais: "Colombia",
              ejemploImg:
                "https://www.fayerwayer.com/resizer/dFDSLv4dHrkcEteV06yZ3eQ9HNY=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/AFMOVVBDTZATHHAXSMOOHW3HGI.jpeg",
              perfilImg:
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
              portadaImg:
                "data:image/jpeg;base64,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",
            }}
          >
            <button
              class="btn btn-primary position-relative rounded-pill"
            >
              Editar perfil ✏
            </button>
          </Link>
          <Link to="/home">
            <button
              class="btn btn-primary position-relative rounded-pill"
            >
              Home 🏠
            </button>
          </Link>


          <img
            src={perfilImg}
            alt="ejemplo perfil"
            height="180"
            width="180"
            class="rounded-circle border border-4"
          />
          <div>
            <h2>{nombre}</h2>
            <h5>Seguidores: {seguidores}</h5>
            <h6>Pais: {pais}</h6>
          </div>
        </div>
      </div>
      <div class="container-fluid" >
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group" >
          <label class="btn btn-outline-primary" for="btnradio1">
            Mis trabajos
          </label>
          <label class="btn btn-outline-primary" for="btnradio2">
            Favoritos
          </label>
        </div>
        <table>

          <tbody>
            <tr>
              <td>
                <img
                  src={ejemploImg}
                  border-radius="100px"
                />
              </td>
              <td>
                <img
                  src={ejemploImg}
                  border-radius="10px"
                />
              </td>
              <td>
                <img
                  src={ejemploImg}
                  border-radius="10px"
                />
              </td>
              <td>
                <img
                  src={ejemploImg}
                  border-radius="10px"
                />
              </td>
              <td>
                <img
                  src={ejemploImg}
                  border-radius="10px"
                />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={ejemploImg}
                  border-radius="10px"
                />
              </td>
              <td>
                <img
                  src={ejemploImg}
                  border-radius="10px"
                />
              </td>
              <td>
                <img
                  src={ejemploImg}
                  border-radius="10px"
                />
              </td>
              <td>
                <img
                  src={ejemploImg}
                  border-radius="10px"
                />
              </td>
              <td>
                <img
                  src={ejemploImg}
                  border-radius="10px"
                />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={ejemploImg}
                  border-radius="10px"
                />
              </td>
              <td>
                <img
                  src={ejemploImg}
                  border-radius="10px"
                />
              </td>
              <td>
                <img
                  src={ejemploImg}
                  border-radius="10px"
                />
              </td>
              <td>
                <img
                  src={ejemploImg}
                  border-radius="10px"
                />
              </td>
              <td>
                <img
                  src={ejemploImg}
                  border-radius="10px"
                />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src={ejemploImg}
                  border-radius="10px"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
