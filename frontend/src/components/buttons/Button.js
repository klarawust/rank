function Button({ name, onClick }) {
  return (
    <div className="text-3xl my-8 active:text-red-700">
      <button onClick={onClick} type="button">
        {name}
      </button>
    </div>
  );
}

export default Button;
