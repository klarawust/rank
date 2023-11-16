function InputField({ username, setUsername }) {
  return (
    <div className="mt-24">
      <input
        id="nameInput"
        type="text"
        placeholder="name"
        className="px-2 rounded bg-white"
        onChange={(evt) => setUsername(evt.target.value)}
      ></input>
    </div>
  );
}

export default InputField;
