import { Fragment, useRef } from "react";
import Modal from "./Modal";
import Input from "./Input";
const Newproject = ({ onAdd, onCancel }) => {
  const title = useRef();
  const modalRef = useRef();
  const description = useRef();
  const dueDate = useRef();
  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };
  return (
    <Fragment>
      <Modal buttonCaption='Okay' ref={modalRef}>
        <h2 className='text-xl font-bold text-stone-600 my-4'>Invalid Input</h2>
        <p className='text-stone-500 mb-4'>
          Oops... looks like you forgot to enter a value.
        </p>
        <p className='text-stone-500 mb-4'>
          Please provide value or go fuck yourself. Since I wanted a big
          dialog..
        </p>
      </Modal>
      <div className='w-[35rem] mt-16 '>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li>
            <button
              onClick={onCancel}
              className='text-stone-800 hover:text-stone-950'
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className='bg-stone-800 text-stone-50 hover:bg-stone-950 hover:text-stone-100 px-6 py-2 rounded-md'
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type='text' label='Title' ref={title} />
          <Input label='Description' isTextArea ref={description} />
          <Input type='date' label='Due Date' ref={dueDate} />
        </div>
      </div>
    </Fragment>
  );
};
export default Newproject;
