// Checkbox + Texto + IconDelete

import Checkbox from "../Checkbox/Checkbox";
import IconDelete from "../IconDelete/IconDelete";

function TaskItem() {
  return (
    <>
      <Checkbox />
      <span>Mi tarea</span>
      <IconDelete />
    </>
  );
}

export default TaskItem;
