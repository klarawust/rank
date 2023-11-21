function InputField({ setInput, placeholder }) {
  return (
    <div className="mt-24">
      <input
        id="Input"
        type="text"
        placeholder={placeholder}
        className="px-2 rounded bg-white"
        onChange={(evt) => setInput(evt.target.value)}
      ></input>
    </div>
  );
}

export default InputField;
