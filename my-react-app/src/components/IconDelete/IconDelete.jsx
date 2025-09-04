import IconDeleteImg from "../../assets/IconDelete.png";

function IconDelete() {
  return (
    <>
      <button>
        <img src={IconDeleteImg} width={15} height={15} alt="Eliminar tarea" />
      </button>{" "}
      <br />
    </>
  );
}
export default IconDelete;
