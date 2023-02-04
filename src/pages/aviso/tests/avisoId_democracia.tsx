import CSS from '../style.module.css'
import GlobalCSS from '../../style.module.css'
export default function AvisoId_democracia () {
  return (
    <div style={{ margin: '10px' }}>
      <h1 className={GlobalCSS.header} style={{ fontSize: '1.2em' }}>
        Aviso de prueba
      </h1>
      <div className={CSS.content}>
        <div className={CSS.header}>
          <h2>Votaciones para elegir una Sociedad de Alumnos. Sección Bachillerato</h2>
          <span></span>
          <div className={CSS.fecha}>
            <h3>30 / 01 / 2023 | 5:19 a.m. - </h3>
            <span> Publicado hoy</span>
          </div>
        </div>
        <div className={CSS.main}>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            height: "98.8px",
            borderWidth: "0px",
            borderStyle: "hidden"
          }}
          border={1}
        >
          <colgroup>
            <col
              style={{
                width: "33.3333%"
              }}
            />
            <col
              style={{
                width: "33.3333%"
              }}
            />
            <col
              style={{
                width: "33.3333%"
              }}
            />
          </colgroup>
          <tbody>
            <tr
              style={{
                height: "98.8px"
              }}
            >
              <td
                style={{
                  textAlign: "center",
                  height: "98.8px",
                  borderWidth: "0px"
                }}
              >
                <img
                  src="https://cdn.btecvi.com/btecvi.jpg"
                  width={70}
                  height={79}
                />
              </td>
              <td
                style={{
                  textAlign: "center",
                  height: "98.8px",
                  borderWidth: "0px"
                }}
              >
                <p
                  style={{
                    lineHeight: 1
                  }}
                >
                  <strong>
                    <span
                      style={{
                        fontSize: "14pt"
                      }}
                    >
                      BACHILLERATO TECNOLÓGICO DE VILLAREAL
                    </span>
                  </strong>
                </p>
              </td>
              <td
                style={{
                  textAlign: "center",
                  height: "98.8px",
                  borderWidth: "0px"
                }}
              >
                <img
                  src="https://cdn.btecvi.com/elemental/dgeti_logo.jpg"
                  width={79}
                  height={73}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <h1
          style={{
            textAlign: "center"
          }}
        >
          <span
            style={{
              fontSize: "18pt",
              color: "rgb(53, 152, 219)"
            }}
          >
            ¿Ready para las votaciones? 
          </span>
        </h1>
        <p
          style={{
            textAlign: "center"
          }}
        >
          <img
            src="https://cdn.btecvi.com/tests/democracia.png"
            alt="Democracia"
            width={300}
            height={201}
          />
        </p>
        <p
          style={{
            textAlign: "center"
          }}
        >
          <span
            style={{
              backgroundColor: "rgb(45, 194, 107)",
              color: "rgb(255, 255, 255)"
            }}
          >
             <strong>Jueves 2 de Enero</strong> 
          </span>{" "}
          se realizarán las votaciones para la elección democrática de una{" "}
          <strong>Sociedad de Alumnos</strong> en el{" "}
          <strong>bachillerato.</strong>
        </p>
        <p
          style={{
            textAlign: "center"
          }}
        >
          <span
            style={{
              fontSize: "14pt",
              color: "rgb(126, 140, 141)"
            }}
          >
            (Hay que presentar la credencial escolar para <strong>Votar</strong>
            )
          </span>
        </p>
        </div>
      </div>
    </div>
  )
}

/*
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            height: "98.8px",
            borderWidth: "0px",
            borderStyle: "hidden"
          }}
          border={1}
        >
          <colgroup>
            <col
              style={{
                width: "33.3333%"
              }}
            />
            <col
              style={{
                width: "33.3333%"
              }}
            />
            <col
              style={{
                width: "33.3333%"
              }}
            />
          </colgroup>
          <tbody>
            <tr
              style={{
                height: "98.8px"
              }}
            >
              <td
                style={{
                  textAlign: "center",
                  height: "98.8px",
                  borderWidth: "0px"
                }}
              >
                <img
                  src="https://cdn.btecvi.com/btecvi.jpg"
                  alt
                  width={70}
                  height={79}
                />
              </td>
              <td
                style={{
                  textAlign: "center",
                  height: "98.8px",
                  borderWidth: "0px"
                }}
              >
                <p
                  style={{
                    lineHeight: 1
                  }}
                >
                  <strong>
                    <span
                      style={{
                        fontSize: "14pt"
                      }}
                    >
                      BACHILLERATO TECNOLÓGICO DE VILLAREAL
                    </span>
                  </strong>
                </p>
              </td>
              <td
                style={{
                  textAlign: "center",
                  height: "98.8px",
                  borderWidth: "0px"
                }}
              >
                <img
                  src="https://cdn.btecvi.com/elemental/dgeti_logo.jpg"
                  alt
                  width={79}
                  height={73}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <h1
          style={{
            textAlign: "center"
          }}
        >
          <span
            style={{
              fontSize: "18pt",
              color: "rgb(53, 152, 219)"
            }}
          >
            ¿Ready para las votaciones? 
          </span>
        </h1>
        <p
          style={{
            textAlign: "center"
          }}
        >
          <img
            src="https://cdn.btecvi.com/tests/democracia.png"
            alt="Democracia"
            width={300}
            height={201}
          />
        </p>
        <p
          style={{
            textAlign: "center"
          }}
        >
          <span
            style={{
              backgroundColor: "rgb(45, 194, 107)",
              color: "rgb(255, 255, 255)"
            }}
          >
             <strong>Jueves 2 de Enero</strong> 
          </span>{" "}
          se realizarán las votaciones para la elección democrática de una{" "}
          <strong>Sociedad de Alumnos</strong> en el{" "}
          <strong>bachillerato.</strong>
        </p>
        <p
          style={{
            textAlign: "center"
          }}
        >
          <span
            style={{
              fontSize: "14pt",
              color: "rgb(126, 140, 141)"
            }}
          >
            (Hay que presentar la credencial escolar para <strong>Votar</strong>
            )
          </span>
        </p>
*/
